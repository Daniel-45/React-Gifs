import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import { Spinner } from "./Spinner";

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            {loading && <Spinner />}
            <h3 className="animate__animated animate__fadeIn mt-4">{category}</h3>
            <div className="card-grid mt-4">

                {
                    images.map(image => (
                        <GifGridItem key={image.id} {...image} />
                    ))
                }
            </div>
        </>
    )
}
