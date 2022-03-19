import { useEffect, useState } from 'react';
import { getHome } from '../api/getHome';
import { UseHome as State } from '../interfaces';

export const useHome = () => {

    const [state, setState] = useState<State>({
        data: null,
        loading: true
    })

    useEffect(() => {
        getHome()
            .then(resp => {
                setState({
                    data: resp,
                    loading: false
                })
            })
    }, [])

    return state;

}