import React, { Component } from 'react';

const namesData = [
    "Rohan","Rohit", "Ronaldo","Ronaldino", "Bolero","Mohan","Mohit","Mojito","Docomo"
 ]


class AutoComplete extends Component {
    constructor(props) {
        super(props);
    }
 
    render() {
        const filteredArr = [];
        const filterText = this.props.searchStr
        namesData.filter((name) => {
            (name.toLowerCase().indexOf(filterText.toLowerCase()) > -1) ? filteredArr.push(name) : filteredArr               
        })    
        return (
            <ul className="nameList">
                {filteredArr.map((arr, i) => 
                    <li key={i}>
                        {arr}
                    </li>
                    )
                }
            </ul>
        )
    }
}

export default AutoComplete