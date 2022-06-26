import axios from 'axios';

const url = 'http://localhost:8000';

export const uploadFile =async (data) => {
        try {
            await axios.post(`${url}/uploadData`, data);
            // console.log("upload api success")
        } catch (error) {
            console.log('error while calling upload api', error);
        }
}