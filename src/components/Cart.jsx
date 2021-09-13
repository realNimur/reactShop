import React from 'react';

function Cart(props) {
    const { quality = 0, handleBasketShow = Function.prototype } = props;
    return (
        <div
            className="cart #03a9f4 light-blue white-text"
            onClick={handleBasketShow}
        >
            <i className="material-icons ">shopping_cart</i>
            {quality ? <span className="cart-quality">{quality}</span> : null}
        </div>
    );
}

export default Cart;
