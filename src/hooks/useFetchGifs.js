import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    // Only execute the getGifs function when the component is rendered for the first time.
    useEffect(() => {
        getGifs(category)
            .then(images => {
                setstate({
                    data: images,
                    loading: false
                })
            })
    }, [category]);

    return state;
}