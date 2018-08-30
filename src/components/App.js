import React from 'react';
import Header from './Header';
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from '../sample-fishes';
import Fish from "./Fish";
import base from '../base';

export default class App extends React.Component{
    state ={
        fishes: {},
        order: {}
    };
    componentWillMount(){
        this.ref = base.syncState(`${this.props.params.storeId}/fishes`,
            {
                context: this,
                state: 'fishes'
            }
        );
        const localOrder = localStorage.getItem(`order-${this.props.params.storeId}`);
        if(localOrder){
            this.setState({ order: JSON.parse(localOrder) });
        }
    }
    componentWillUnmount(){
        base.removeBinding(this.ref);
    }
    componentWillUpdate(nextProps, nextState){
        localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order));
    }
    addFish = fish => {
        const fishes = { ...this.state.fishes };
        fishes[`fish${Date.now()}`] = fish;
        this.setState({ fishes });
    };
    loadFishes = () => {
        // const fishes = Object.assign({...this.state.fishes}, sampleFishes);
        const fishes = {...this.state.fishes, ...sampleFishes };
        this.setState({ fishes });
    };
    addToOrder = key => {
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({ order });
    };
    handleChange = (key, name, value) => {
        const fishes = {...this.state.fishes};
        fishes[key][name] = value;
        this.setState({
            fishes
        });
    };
    deleteFish = (key) => {
        const fishes = {...this.state.fishes};
        fishes[key] = null;
        this.setState({
            fishes
        });
    };
    deleteOrder = (key) => {
        const order = {...this.state.order};
        console.log(order);
        delete order[key];
        console.log(order);
        this.setState({ order });
    };
    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh seafood market"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => <Fish key={ key } fish={ this.state.fishes[key] } addToOrder={ this.addToOrder } index={key}/>)}
                    </ul>
                </div>
                <Order {...this.state} params={this.props.params} deleteOrder={this.deleteOrder}/>
                <Inventory addFish={this.addFish} loadFishes={this.loadFishes} fishes={this.state.fishes} handleChange={this.handleChange} deleteOrder={this.deleteOrder}/>
            </div>
        );
    }
}
