import React from "react";
import PropTypes from 'prop-types';



function Card({title, imagSourse, text, url}) {
    return(
        <div className="card text-center bg-dark">
            <img src={imagSourse} alt="" />
            <div className="card-body text-light">
                <h1 className="card-title">{title}</h1>
                <p className="card-text text-secondary">
                    {
                        text ? text : (
                            <div>
                                X__X <br />
                                ¡Texto en construcción!
                            </div>
                        )
                    }
                </p>
                <a href={url} className='btn btn-outline-secondary rounded-0' target="blank">
                Más de esto aquí
                </a>
            </div>
        </div>
    )
}

Card.PropTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imagSourse: PropTypes.string,
    text: PropTypes.string
}

export default Card