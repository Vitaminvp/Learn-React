import React from 'react';
import { formatPrice } from '../helpers';


export default class Order extends React.Component{
    renderOrder = (id) => {
        const fish = this.props.fishes[id];
        const count = this.props.order[id];
        const removeBtn = <button onClick={()=>this.props.deleteOrder(id)}>&times;</button>
        if(fish && (fish.status === "available"))  return <li key={id} className=""><span>{count} lbs {fish.name}{removeBtn}</span> <span className="price">{formatPrice( count * fish.price )}</span></li>;
        return <li key={id} className="">{fish ? fish.name : 'Fish'} is unavailable!{removeBtn}</li>;
    };
    render(){
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && (fish.status === "available");
            if(isAvailable) return (prevTotal + (fish.price * count || 0));
            return prevTotal;
        }, 0);
        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <ul className="order">
                    {orderIds.map(this.renderOrder)}
                        <li className="total">
                        <strong>Total:</strong> { formatPrice(total) }
                    </li>
                </ul>

            </div>
        );
    }
}
