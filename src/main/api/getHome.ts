import { HomeResp } from '../interfaces/index';

export const getHome = async () => {
    const url = 'https://salvador-dali-museum-backend.herokuapp.com/main';
    const resp = await fetch(url);
    const data: HomeResp = await resp.json();

    return data
}