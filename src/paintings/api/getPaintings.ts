import { PaintingsResp } from '../interfaces/index';

export const getPaintings = async () => {
    const url = 'https://salvador-dali-museum-backend.herokuapp.com/paintings';
    const resp = await fetch(url);
    const data: PaintingsResp[] = await resp.json();

    return data
}