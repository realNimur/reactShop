import React, { useContext } from 'react';
import { ShopContext } from '../context';
import GoodsItem from './GoodsItem';

function GoodsList() {
    const { goods = [] } = useContext(ShopContext);
    if (!goods.length) {
        return <h3>Nothing found</h3>;
    }
    return (
        <div className="goods__list">
            {goods.map((item) => {
                return <GoodsItem key={item.id} {...item} />;
            })}
        </div>
    );
}

export default GoodsList;
