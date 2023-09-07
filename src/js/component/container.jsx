import React from "react";
import Card from './card.jsx';

const Container = () => {
    return (
        <div className="container">
            <div className="p-5 pt-0 bg-body-tertiary rounded-3" id="jumbotron">
                <div className="container-fluid">
                    <h1 className="display-1">A Warm Welcome!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat asperiores dolorum possimus, cumque aperiam optio doloribus? Illo suscipit architecto excepturi non. Eligendi odio suscipit sequi nulla unde quasi iure.</p>
                    <button className="btn btn-primary btn-lg" type="button">Example button</button>
                </div>
            </div>
            <div className="row mx-1 my-2">
                <div className="col-3">
                    <Card />
                </div>
                <div className="col-3">
                    <Card />
                </div>
                <div className="col-3">
                    <Card />
                </div>
                <div className="col-3">
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default Container;
