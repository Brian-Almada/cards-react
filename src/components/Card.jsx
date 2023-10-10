import React from "react";



function Card({title, imagSourse}) {
    return(
        <div className="card text-center bg-dark">
            <img src={imagSourse} alt="" />
            <div className="card-body text-light">
                <h1 className="card-title">{title}</h1>
                <p className="card-text text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tenetur necessitatibus quasi natus facilis fuga et repellat cupiditate ut dolorum? Odit illum doloremque voluptatum eum distinctio totam harum aliquid! Quis?</p>
                <a href="#!" className='btn btn-online-secondary rounded-0'>
                Más de esto aquí
                </a>
            </div>
        </div>
    )
}

export default Card