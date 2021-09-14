import React, { useContext } from 'react';
import { ShopContext } from '../context.js';

function GoodsItem(props) {
    const { id, name, description, price, images } = props;
    const { addToCart } = useContext(ShopContext);
    return (
        <div className="card" id={id}>
            <div className="card-image">
                <img src={images.background} loading="lazy" alt={name} />
                <span className="card-title">{name}</span>
            </div>
            <div className="card-content">
                <p>{description}</p>
            </div>
            <div className="card-action">
                <p
                    className="right text"
                    style={{
                        margin: 0,
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                    }}
                >
                    {price} руб.
                </p>
                {price === 0 ? (
                    <button className="btn disabled">Купить</button>
                ) : (
                    <button
                        className="btn"
                        onClick={() => {
                            addToCart({ id, price, name });
                        }}
                    >
                        Купить
                    </button>
                )}
            </div>
        </div>
    );
}

export default GoodsItem;
