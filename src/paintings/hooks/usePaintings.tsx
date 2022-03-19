import { useEffect, useState } from 'react';
import { getPaintings } from '../api/getPaintings';
import { usePaintings as State } from '../interfaces';

export const usePaintings = () => {

    const [state, setState] = useState<State>({
        loading: true
    })

    useEffect(() => {
        getPaintings()
            .then(resp => {
                setState({
                    data: resp,
                    loading: false
                })
            })
    }, [])

    return state;

}