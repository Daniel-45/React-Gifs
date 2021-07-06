import React, { useState } from 'react';
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import './assets/css/bootstrap.min.css';

export const ReactGifApp = () => {

    const [categories, setCategories] = useState(['Homer Simpson']);

    return (
        <div className='container'>
            <h1>React Gifs</h1>
            <AddCategory setCategories={setCategories} />
            <hr />
            <div>
                {
                    categories.map((category) => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </div>
        </div>
    )

}
