import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import Alert from './Alert';
import Cart from './Cart';
import CartList from './CartList';
import GoodsList from './GoodsList';
import Preloader from './Preloader';
function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');
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
                newArray && setGoods(newArray);
                setLoading(false);
            });
    }, []);
    const addToCart = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                count: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.slice().map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        count: orderItem.count + 1,
                    };
                } else {
                    return orderItem;
                }
            });

            setOrder(newOrder);
        }
        setAlertName(item.name);
    };
    const removeFromCart = (id) => {
        const newArray = order.filter((item) => item.id !== id);
        setOrder(newArray);
    };
    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    };
    const plusCountElement = (id) => {
        const newOrder = order.slice().map((el) => {
            if (el.id === id) {
                const newCount = el.count + 1;
                return {
                    ...el,
                    count: newCount,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };
    const minusCountElement = (id) => {
        const newOrder = order.slice().map((el) => {
            if (el.id === id) {
                const newCount = el.count - 1;
                return {
                    ...el,
                    count: newCount >= 0 ? newCount : 0,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };
    const closeAlert = () => {
        setAlertName('');
    };
    return (
        <main className="container content">
            <Cart quality={order.length} handleBasketShow={handleBasketShow} />
            {loading ? (
                <Preloader />
            ) : (
                <GoodsList addToCart={addToCart} goods={goods} />
            )}
            {isBasketShow && (
                <CartList
                    plusCountElement={plusCountElement}
                    minusCountElement={minusCountElement}
                    order={order}
                    handleBasketShow={handleBasketShow}
                    removeFromCart={removeFromCart}
                />
            )}
            {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
        </main>
    );
}

export { Shop };
