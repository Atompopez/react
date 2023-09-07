import React from "react";
import img500x325 from '../../img/500x325.png';

const Card = () => {
    return (
        <div className="card p-0" style={{ width: '260px' }}>
            <img src={img500x325} alt="Card" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus inventore quasi id incidunt mollitia alias maiores quidem, sit excepturi, nihil minima unde natus nemo delectus reprehenderit perspiciatis, enim quisquam itaque.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

export default Card;
