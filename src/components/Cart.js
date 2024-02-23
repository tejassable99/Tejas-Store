import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import "../styles/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
    }

    const handleCheckout = () => {
        Swal.fire({
            title: 'Are you sure you want to checkout?',
            text: `Total Price: Rs - ${price}`,
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Checkout',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                // Perform checkout action here
                setCart([]); // Example: Clear the cart after checkout
                Swal.fire('Checked Out!', 'Your order has been placed.', 'success');
            }
        });
    };

    useEffect(() => {
        handlePrice();
    }, [cart]);

    return (
        <article>
            {
                cart?.map((item) => (
                    <div className="cart_box" key={item.id}>
                        <div className="cart_img">
                            <img src={item.img} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                        <div>
                            <button onClick={() => handleChange(item, +1)}> + </button>
                            <button>{item.amount}</button>
                            <button onClick={() => handleChange(item, -1)}> - </button>
                        </div>
                        <div>
                            <span>{item.price}</span>
                            <button onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            <div className='total'>
                <span>Total Price of your Cart</span>
                <span>Rs - {price}</span>
            </div>
            <button
                style={{
                    padding: '10px 20px',
                    backgroundColor: 'blue',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    marginTop: '20px',
                    cursor: 'pointer'
                }}
                onClick={handleCheckout}
            >
                Checkout
            </button>
        </article>
    )
}

export default Cart;
