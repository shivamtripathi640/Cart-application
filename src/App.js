import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar'


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products:[
        {
            price: 999,
            qty: 5,
            title: 'Mobile Phone',
            img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=819&q=80' ,
            id: 1
        },
        {
            price: 99,
            qty: 10,
            title: 'Watch',
            img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80' ,
            id: 2
        },
        {
            price: 999,
            qty: 2,
            title: 'Laptop',
            img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=847&q=80' ,
            id: 3
        }
      ]
}

}

handleIncreaseQuantity = (product) => {
console.log('Hey please inc the qty of ', product);
const {products} = this.state;
const index = products.indexOf(product);

products[index].qty  += 1;
this.setState({
    products: products
})
}

handleDecreaseQuantity =(product) => {
console.log('heyy please dec the qty of ', product);
const {products} = this.state;
const index = products.indexOf(product);

if(products[index].qty === 0) {
    return;
}

products[index].qty -= 1;
this.setState({
    products: products
})

}

handleDeleteProduct = (id) => {

const {products} = this.state;

const items = products.filter((item) => item.id !== id);

this.setState({
    products: items
})
}

getCartCount = () => {
  const { products } = this.state;

  let count = 0;
  products.forEach((product) => {
    count += product.qty;
  })

  return count;
}

getCartTotal = () => {
  const { products } = this.state;

  let cartTotal = 0;
  products.map((product) => {
    cartTotal = cartTotal + product.qty * product.price
  })

  return cartTotal;
}

  render () {
    const { products } = this.state;
    return (
    <div className="App">
      <Navbar count={this.getCartCount()} />
      <Cart 
         products={products}
         onIncreaseQuantity={this.handleIncreaseQuantity} 
         onDecreaseQuantity={this.handleDecreaseQuantity}
         onDeleteProduct={this.handleDeleteProduct}
      />
      <div style={ {padding: 10, fontSize: 20} }>TOTAL PRICE: {this.getCartTotal()}</div>
    </div>
  );
 }

}

export default App;
