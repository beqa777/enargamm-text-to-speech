

class AudioPlayer {

    audioUrls: string[] = [];
    playingAudioCurrently = false;

    // add audio url and start play if no other audio is playing currently if not add url to queue
    addAudioUrl(audioUrl: string) {

        this.audioUrls.push(audioUrl)

        if (!this.playingAudioCurrently) {
            console.log('starting audio play');
            this.startAudioRecursively();
            this.playingAudioCurrently = true;
        }
    }

    startAudioRecursively(index = 0) {


        const currentFirstAudioUrl = this.audioUrls[index];
        const audio = new Audio(`https://enagramm.com/${currentFirstAudioUrl}`);

        audio.play();
        audio.onended = () => {
            this.startAudioRecursively(index + 1);
        }

        if (index === this.audioUrls.length - 1) {
            console.log('finished audio');
            this.playingAudioCurrently = false;
            return;
        }
    }


}

export default AudioPlayer;