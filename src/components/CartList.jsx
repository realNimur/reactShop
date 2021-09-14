import React, { useContext } from 'react';
import { ShopContext } from '../context';
import CartItem from './CartItem';

function CartList() {
    const { order, handleCartShow } = useContext(ShopContext);
    let totalPrice = 0;
    if (order.length > 0) {
        totalPrice = order.reduce((sum, el) => sum + el.price * el.count, 0);
    }

    return (
        <ul className="collection cart-list">
            <li className="collection-item active">
                <div>
                    Корзина
                    <span
                        className="secondary-content item-list__delete"
                        onClick={handleCartShow}
                    >
                        <i className="material-icons">close</i>
                    </span>
                </div>
            </li>
            {order.length ? (
                order.map((item) => <CartItem key={item.id} {...item} />)
            ) : (
                <li className="collection-item ">Корзина пуста</li>
            )}
            <li className="collection-item active">
                <div className="">Общая стоимость: {totalPrice} руб.</div>
            </li>
            <li className="collection-item ">
                <button className="waves-effect waves-light btn-small">
                    <i className="material-icons right">send</i>оформить
                </button>
            </li>
        </ul>
    );
}

export default CartList;
