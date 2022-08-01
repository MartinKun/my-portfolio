import axios from "axios";
const baseUrl = 'https://works-app.herokuapp.com';
export const getFeaturedWorks = (index) => {
    return axios({
        url: `${baseUrl}/nextWorks?index=${index}`,
        method: 'GET',
    });
}