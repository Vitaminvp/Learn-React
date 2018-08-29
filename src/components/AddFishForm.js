import React from 'react';

export default class AddFishForm extends React.Component{
    createFish = e => {
        e.preventDefault();
        const fish = {
            name: this.nameRef.value,
            price: parseFloat(this.priceRef.value),
            status: this.statusRef.value,
            desc: this.descRef.value,
            image: this.imageRef.value
        };
        this.props.addFish(fish);
        e.target.reset();
    };
    render(){
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={(input)=> this.nameRef = input} type="text" placeholder="Name"/>
                <input name="price" ref={(input)=> this.priceRef = input} type="text" placeholder="Price"/>
                <select name="status" ref={(input)=> this.statusRef = input}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" ref={(input)=> this.descRef = input} placeholder="Description" />
                <input name="image" ref={(input)=> this.imageRef = input} type="text" placeholder="Image"/>
                <button type="submit" >+ ADD FISH</button>

            </form>
        );
    }
}
