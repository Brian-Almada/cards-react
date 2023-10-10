import React from "react";
import PropTypes from 'prop-types';



function Card({title, imagSourse, url}) {
    return(
        <div className="card text-center bg-dark">
            <img src={imagSourse} alt="" />
            <div className="card-body text-light">
                <h1 className="card-title">{title}</h1>
                <p className="card-text text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tenetur necessitatibus quasi natus facilis fuga et repellat cupiditate ut dolorum? Odit illum doloremque voluptatum eum distinctio totam harum aliquid! Quis?</p>
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
    imagSourse: PropTypes.string
}

export default Card