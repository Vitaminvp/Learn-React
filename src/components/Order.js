import React from 'react';
import { formatPrice } from '../helpers';


export default class Order extends React.Component{
    renderOrder = (id) => {
        const fish = this.props.fishes[id];
        const count = this.props.order[id];
        if(fish.status === 'available')  return <li key={id} className="">{count} lbs {fish.name} {formatPrice( count * fish.price )}</li>;
        return <li key={id} className="">{fish ? fish.name : 'Fish'} is unavailable!</li>;
    };
    render(){
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';
            if(isAvailable) return prevTotal + (fish.price * count);
            return prevTotal;
        }, 0);
        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <ul className="order">
                    {orderIds.map(this.renderOrder)}
                </ul>
                <div className="total">

                    Total: <strong>{ formatPrice(total) }</strong>
                </div>
            </div>
        );
    }
}
