import React from 'react';


export class InputSearch extends React.Component {

    handleChange = (event) => {
        this.props.updateData(event.target.value);
    }
    render() {
        return (
            <input className='searchInput' onChange={this.handleChange} type='text' placeholder='search product'></input>
        )
    }
}