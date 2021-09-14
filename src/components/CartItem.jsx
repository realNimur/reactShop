import React, { useContext } from 'react';
import { ShopContext } from '../context';

function CartItem(props) {
    const { id, name, price, count } = props;
    const { removeFromCart, plusCountElement, minusCountElement } =
        useContext(ShopContext);
    return (
        <li className="collection-item">
            <div>
                {name} x{' '}
                <span
                    className="cart-count__controls"
                    onClick={() => plusCountElement(id)}
                >
                    <i className="material-icons">add</i>
                </span>
                {count}{' '}
                <span
                    className="cart-count__controls"
                    onClick={() => minusCountElement(id)}
                >
                    <i className="material-icons">remove</i>
                </span>
                = {price * count}
                <span
                    className="secondary-content item-list__delete"
                    onClick={() => removeFromCart(id)}
                >
                    <i className="material-icons">delete</i>
                </span>
            </div>
        </li>
    );
}

export default CartItem;
