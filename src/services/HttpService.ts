import axios from 'axios';

class HttpService {


  textToSpeech(sentence: string) {
    const data = {
      Language: 'ka',
      Speed: 100,
      Text: sentence,
      Voice: 0,
      IterationCount: 2,

    }

    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.request().post('', data);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  }




  request() {
    return axios.create({
      baseURL: `https://enagramm.com/Tools/SythesizeTextDAL`,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    });
  }


}



export default HttpService;
