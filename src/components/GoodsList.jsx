import React from 'react';
import GoodsItem from './GoodsItem';

function GoodsList(props) {
    const { goods = [], addToCart = Function.prototype } = props;
    if (!goods.length) {
        return <h3>Nothing found</h3>;
    }
    return (
        <div className="goods__list">
            {goods.map((item) => {
                return (
                    <GoodsItem addToCart={addToCart} key={item.id} {...item} />
                );
            })}
        </div>
    );
}

export default GoodsList;
