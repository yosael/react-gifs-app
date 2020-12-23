import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifts = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //setTimeout()

    useEffect(() => {
        getGifs( category )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            })
    }, [])

    return state;
}
