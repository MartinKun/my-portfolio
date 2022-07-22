import axios from "axios";

const baseUrl = 'https://works-app.herokuapp.com'

export const getFeaturedWorks = () => {
    return axios({
        url: `${baseUrl}/featuredWorks`,
        method: 'GET',
    });
}