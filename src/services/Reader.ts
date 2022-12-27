import HttpService from "./HttpService";
import AudioPlayer from "./AudioPlayer";

class Reader extends HttpService {
    text = "";
    onResultCallback = (res: any) => {}
    punctuationMarks = [
        '.',
        '!',
        '?',
        ';',
        ' '
    ];
    audioPlayer:AudioPlayer;

    constructor() {
        super();
        this.audioPlayer = new AudioPlayer();
    };

    // get text
    setText(text: string) {
        this.text = text;
    }

    // set text
    getText(text: string) {
        return this.text;
    }

    // send text to server
    async sendToServer(text: string) {
        return await this.textToSpeech(text);
    }


    // start reading text
    async start() {
        // if we start function without providing onresult callback show error
        if (!this.onResultCallback) {
            console.error('onresult function is not defined');
            return;
        }
        console.log('start process');

        // start sending text to server and playing audio meanwhile
        this.sendToServerRecursively();

    }


    // recursive function that call himself and sends text to server until string length is less than 150 (then stops)
    async sendToServerRecursively() {

        // if string length is less than 150 symbol send to server all at once adn call onresult callback
        if (this.text.length <= 150) {

            const req: any = await this.sendToServer(this.text);
            const res = req.data;
            this.onResultCallback(res);

            this.audioPlayer.addAudioUrl(res.AudioFilePath);

            console.log('full text is sended');
            return;
        }

        //if we cant find punctuation marks in between 150 and 230 character range break at 230 character
        let indexToBreak = 230;

        // if we find punctuation mark to string in range (150/230) set  that index to indexToBreak
        this.punctuationMarks.every((mark) => {
            let textInRange = this.text.substring(150, 230)
            let foundedIndex = textInRange.indexOf(mark);
            if (foundedIndex !== -1) {
                indexToBreak = (foundedIndex + 150);
                return false;
            }

            return true;
        });


        const textToSend = this.text.substring(0, indexToBreak);
        const req: any = await this.sendToServer(textToSend);
        this.onResultCallback(req.data);

        this.audioPlayer.addAudioUrl(req.data.AudioFilePath);

        this.setText(this.text.substring(indexToBreak));
        // continue sending to server
        await this.sendToServerRecursively();
    }



    // return audio file urls
    onresult(callback = (result:any) => { console.log('no callback function sended') }) {
        this.onResultCallback = callback;
    }
}

export default Reader;