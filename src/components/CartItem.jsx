import React from 'react';

function CartItem(props) {
    const {
        id,
        name,
        price,
        count,
        plusCountElement = Function.prototype,
        minusCountElement = Function.prototype,
        removeFromCart = Function.prototype,
    } = props;
    return (
        <li className="collection-item">
            <div>
                {name} x{' '}
                <span
                    className="cart-count__controls"
                    onClick={() => plusCountElement(id)}
                >
                    <i class="material-icons">add</i>
                </span>
                {count}{' '}
                <span
                    className="cart-count__controls"
                    onClick={() => minusCountElement(id)}
                >
                    <i class="material-icons">remove</i>
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
