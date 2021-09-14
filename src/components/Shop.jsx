import { useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '../config';

import { ShopContext } from '../context';

import Alert from './Alert';
import Cart from './Cart';
import CartList from './CartList';
import GoodsList from './GoodsList';
import Preloader from './Preloader';
function Shop() {
    const { setGoods, loading, order, isBasketShow, alertName } =
        useContext(ShopContext);
    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                const newArray = data.items
                    .filter((item) => item.price > 0)
                    .slice(0, 10);
                setGoods(newArray);
            });
        // eslint-disable-next-line
    }, []);

    return (
        <main className="container content">
            <Cart quality={order.length} />
            {loading ? <Preloader /> : <GoodsList />}
            {isBasketShow && <CartList />}
            {alertName && <Alert />}
        </main>
    );
}

export { Shop };
