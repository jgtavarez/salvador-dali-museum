import { useEffect, useState } from 'react';
import { getPaintings } from '../api/getPaintings';
import { usePaintings as State, PaintingsResp } from '../interfaces';

export const usePaintings = () => {

    const [state, setState] = useState<State>({
        loading: true,
        showDetails: false
    })

    useEffect(() => {
        getPaintings()
            .then(resp => {
                setState(prev => ({
                    ...prev,
                    paintings: resp,
                    loading: false
                }))
            })
    }, [])

    const openPaintingDetails = (paintingSelected: PaintingsResp) => {
        setState(prev => ({
            ...prev,
            paintingSelected: paintingSelected,
            showDetails: true
        }))
    }

    const closePaintingDetails = () => {
        setState(prev => ({
            ...prev,
            showDetails: false
        }))
    }

    return {
        state,
        openPaintingDetails,
        closePaintingDetails
    };

}