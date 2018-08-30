import React from 'react';
// import { getFunName } from '../helpers';
export default class StorePicker extends React.Component{
    goToStore(e){
        e.preventDefault();
        this.context.router.transitionTo(`/store/${this.storeInput.value}`);
    }
    render(){
        return (
            <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
                <h2>Please enter a store</h2>
                <input type="text" required placeholder="Store name..." defaultValue="learnBase" ref={(input) => {this.storeInput = input}}/>
                <button type="submit">Посетить Магазин &#10144;</button>
            </form>
        );
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
};