import { useId } from "react";
import { useCart } from "../vendor/hooks/useCart";
import { CartIcon, ClearCartIcon } from "./Icons";
import './carrito.css';

function CartItem({ thumbnail, title, price, quantity, addToCart, removeFromCart }) {
    return(
        <table className="border-spacing-2">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src={ thumbnail} alt="" /></td>
                    <td>{ title }</td>
                    <td>{ quantity } <button onClick={addToCart}>+</button></td>
                    <td>{ price }</td>
                </tr>
            </tbody>
        </table>
    );
}

export function Cart() {
    const cartCheckboxId = useId();

    const { cart, clearCart, addToCart } = useCart();
    
    const cantProductos = cart.reduce((total, product) => total + product.quantity, 0);
    const totalPagar = cart.reduce((total, product) => total + product.price * product.quantity, 0);

    return (
        <>
            <label className="cart-button" htmlFor={ cartCheckboxId }>
                <CartIcon/>
            </label> 
            <input id={ cartCheckboxId } type="checkbox" hidden/>

            <div className="carrito">
                <ul>
                    {
                        cart.map( product => (
                            <CartItem
                                key={ product.id }
                                addToCart={ () => addToCart(product) }
                                { ...product }
                            />
                        ))
                    }
                </ul>
                <table className="">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" alt="" /></td>
                            <td>Iphone 9</td>
                            <td><input type="number" value={2}/></td>
                            <td>549</td>
                        </tr>
                        <tr>
                            <td><img src="https://cdn.dummyjson.com/product-images/2/thumbnail.jpg" alt="" /></td>
                            <td>iPhone X</td>
                            <td><input type="number" value={1}/></td>
                            <td>899</td>
                        </tr>
                    </tbody>
                </table>
                
                <div className="totales">
                    <p>Productos: {cantProductos}</p>
                    <p>Total: ${totalPagar}</p>

                    <button 
                        style={{ backgroundColor: 'red' }}
                        onClick={ clearCart }>
                        <ClearCartIcon/>
                    </button>
                    <button
                        style={{ backgroundColor: 'Skyblue'}}>
                        <CartIcon/>
                    </button>
                </div>
            </div>
        </>
    )
}