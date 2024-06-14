import React from 'react';

const Card = ({ title, text, imgSrc }) => {
    return (
        <div className="card w-100 mx-auto text-center">
            <img src={imgSrc} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <button
                    className="btn btn-primary mt-auto"
                    type="button"
                    style={{ height: '40px' }}>
                    Find Out More!
                </button>
            </div>
        </div>
    );
};

export default Card;
