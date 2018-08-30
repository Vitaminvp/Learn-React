import React from 'react';

export default class FishForm extends React.Component{
    handleChange = e =>{
        this.props.handleChange(this.props.index, e.target.name, e.target.value);
    };

    render(){
        const { name, price, status, desc, image } = this.props.fishes[this.props.index];

        return (
            <div className="fish-edit" >
                <input name="name"  type="text" value={name} onChange={this.handleChange}/>
                <input name="price"  type="text" value={price} onChange={this.handleChange} />
                <select name="status" value={status} onChange={this.handleChange}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" value={desc} onChange={this.handleChange} />
                <input name="image"  type="text" value={image}  onChange={this.handleChange}/>
                <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
            </div>
        );
    }
}
