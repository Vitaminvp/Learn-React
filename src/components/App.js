import React from 'react';
import Header from './Header';
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from '../sample-fishes';
import Fish from "./Fish";

export default class App extends React.Component{
    state ={
        fishes: {},
        order: {}
    };
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
    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh seafood market"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => <Fish key={ key } fish={ this.state.fishes[key] } addToOrder={ this.addToOrder } index={key}/>)}
                    </ul>
                </div>
                <Order {...this.state}/>
                <Inventory addFish={this.addFish} loadFishes={this.loadFishes}/>
            </div>
        );
    }
}
