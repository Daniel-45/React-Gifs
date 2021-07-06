import React from 'react'

export const GifGridItem = ({ title, url }) => {
    return (
        <div>
            <div className="card animate__animated animate__fadeIn mb-4">
                <img src={url} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
            </div>
        </div>
    )
}
