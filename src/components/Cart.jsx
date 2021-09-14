import React, { useContext } from 'react';
import { ShopContext } from '../context';

function Cart(props) {
    const { order, handleCartShow } = useContext(ShopContext);
    const quality = order.length;
    return (
        <div
            className="cart #03a9f4 light-blue white-text"
            onClick={handleCartShow}
        >
            <i className="material-icons ">shopping_cart</i>
            {quality ? <span className="cart-quality">{quality}</span> : null}
        </div>
    );
}

export default Cart;
