import React from "react";

import img1 from '../assets/tales.png'

function Card() {
    return(
        <div className="card">
            <img src={img1} alt="" />
            <div className="card-title">My title</div>
            <p className="card-text text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tenetur necessitatibus quasi natus facilis fuga et repellat cupiditate ut dolorum? Odit illum doloremque voluptatum eum distinctio totam harum aliquid! Quis?</p>
            <a href="#!" className='btn btn-online-secondary'>
                
            </a>
        </div>
    )
}

export default Card