import React, {Component} from "react";
import ReactDOM from "react-dom";
import Data from "./Data";
import Products from "./products";

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: Data
        };
        this.handleClickCategory = this.handleClickCategory.bind(this);
    }

    handleClickCategory(event) {
        // debugger
        console.log(event.target.textContent);
        let category = event.target.textContent;
        let products = [];
        this.state.categories.forEach((item) =>{
            if (item.category == category && item.hasOwnProperty('name'))
                products.push(<li key={item.name.toString()}>{item.name}</li>);
        });

        ReactDOM.render(<Products products={products}/>, document.getElementById('products'));
    }

    componentDidMount() {
        console.log(this.state.categories);
    }

    render() {

        let lastCategory = null;
        let rows = [];

        this.state.categories.forEach((item) => {
            if (item.category !== lastCategory) {
                rows.push(<li key={item.category.toString()}>
                    <button onClick={this.handleClickCategory}>{item.category}</button>
                </li>)
            }
            lastCategory = item.category;
        });

        return (
            <ul>
                {rows}
            </ul>
        );
    }

}

ReactDOM.render(
    <Categories/>, document.getElementById('categories')
);

export default Categories;