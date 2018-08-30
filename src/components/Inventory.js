import React from 'react';
import AddFishForm from "./AddFishForm";
import FishForm from "./FishForm";

export default class Inventory extends React.Component{
    render(){
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                {Object.keys(this.props.fishes).map(key => <FishForm key={key} index={key} fishes={this.props.fishes} handleChange={this.props.handleChange} deleteFish={this.props.deleteFish}/>)}
                <AddFishForm addFish={this.props.addFish}/>
                <button onClick={this.props.loadFishes}>Load Sample Fishes</button>
            </div>
        );
    }
}
