import React, {Component} from "react";
import ReactDOM from "react-dom";


// class Products extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             products: []
//         };
//     }
//
//     render() {
//
//
//     }
// }


function Products(props) {
    if (props.products.length !== 0) {
        return (
            <ul>{props.products}</ul>
        );
    } else {
        return <p>No products</p>;
    }
}
export default Products;