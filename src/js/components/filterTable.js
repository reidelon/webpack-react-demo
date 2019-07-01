import React, {Component} from "react";
import ReactDOM from "react-dom";
import Data from "./Data";
import Products from "./products";
import {Nav} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';


class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: Data
        };
        this.handleClickCategory = this.handleClickCategory.bind(this);
    }

    handleClickCategory(event) {
        let category = event.target.textContent;
        let products = [];
        this.state.categories.forEach((item) => {
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
                rows.push(
                    <Nav.Link key={item.category.toString()} onClick={this.handleClickCategory}>{item.category}</Nav.Link>
                )
            }
            lastCategory = item.category;
        });

        return (
            <div>
                <Nav className="flex-column">
                    {rows}
                </Nav>
            </div>
        );
    }

}

ReactDOM.render(
    <Categories/>, document.getElementById('categories')
);

export default Categories;