import axios from "axios";
/*const baseUrl = 'https://works-app.herokuapp.com';*/
const baseUrl = 'http://localhost:8080';

export const getFeaturedWorks = (index) => {
    return axios({
        url: `${baseUrl}/nextWorks?index=${index}`,
        method: 'GET',
    });
}