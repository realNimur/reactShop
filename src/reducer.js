export function reducer(state, { type, payload }) {
    switch (type) {
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: '',
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                order: state.order.filter((item) => item.id !== payload.id),
            };
        case 'BASKET_SHOW':
            return {
                ...state,
                isBasketShow: !state.isBasketShow,
            };
        case 'ADD_TO_CART':
            {
                const itemIndex = state.order.findIndex(
                    (orderItem) => orderItem.id === payload.id
                );
                let newOrder = null;
                if (itemIndex < 0) {
                    const newItem = {
                        ...payload,
                        count: 1,
                    };
                    newOrder = [...state.order, newItem];
                } else {
                    newOrder = state.order.slice().map((orderItem, index) => {
                        if (index === itemIndex) {
                            return {
                                ...orderItem,
                                count: orderItem.count + 1,
                            };
                        } else {
                            return orderItem;
                        }
                    });
                }
                return {...state, order: newOrder, alertName: payload.name };
            }
        case 'DEC_COUNT_ELEMENT':
            {
                console.log(payload.id);
                const newOrder = state.order.slice().map((el) => {
                    if (el.id === payload.id) {
                        const newCount = el.count - 1;
                        return {
                            ...el,
                            count: newCount >= 0 ? newCount : 0,
                        };
                    } else {
                        return el;
                    }
                });
                return {...state, order: newOrder };
            }
        case 'INC_COUNT_ELEMENT':
            {
                const newOrder = state.order.slice().map((el) => {
                    if (el.id === payload.id) {
                        const newCount = el.count + 1;
                        return {
                            ...el,
                            count: newCount,
                        };
                    } else {
                        return el;
                    }
                });
                return {...state, order: newOrder };
            }
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false,
            };
        default:
            return state;
    }
}