import React, { useState, useEffect } from 'react';
import { Button, Image, Segment } from 'semantic-ui-react';
import Swal from 'sweetalert2';

const Cart = ({ cart, setCart, handleChange, handleRemove }) => {
    const [price, setPrice] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        cart.forEach((item) => {
            ans += item.amount * item.price;
        });
        setPrice(ans);
    }

    const handleCheckout = () => {
        if (cart.length < 1) {
            Swal.fire({
                title: 'Your Cart is Empty',
                icon: 'warning',
                showCancelButton: false,
                confirmButtonText: 'OK',
            });
        } else {
            Swal.fire({
                title: 'Are you sure you want to checkout?',
                text: `Total Price: Rs - ${price}`,
                icon: 'info',
                showCancelButton: true,
                confirmButtonText: 'Checkout',
                cancelButtonText: 'Cancel',
            }).then((result) => {
                if (result.isConfirmed) {
                    setCart([]);
                    Swal.fire('Checked Out!', 'Your order has been placed.', 'success');
                }
            });
        }
    };

    useEffect(() => {
        handlePrice();
    }, [cart]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
            <Segment style={{  width:"100%"}}>
                {cart?.map((item) => (
                    <Segment key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
                        <Image src={item.img} size='small' />
                        <div style={{ marginLeft: '20px', flexGrow: '1' }}>
                            <p style={{ fontWeight: 'bolder' }}>{item.title}</p>
                            <p style={{ fontWeight: 'bold' }}>Price:{item.price}</p>
                            <Button.Group>
                                <Button icon='minus' onClick={() => handleChange(item, -1)} />
                                <Button.Or text={item.amount.toString()} />
                                <Button icon='plus' onClick={() => handleChange(item, +1)} />
                            </Button.Group>
                            <Button color='red' onClick={() => handleRemove(item.id)}>Remove</Button>
                        </div>
                    </Segment>
                ))}
                <Segment textAlign='center'>
                    <p style={{ fontWeight: 'bolder', fontSize: '26px' }}>Total Price of your Cart: Rs - {price}</p>
                    <Button color='blue' onClick={handleCheckout} disabled={cart.length === 0}>Checkout</Button>
                </Segment>
            </Segment>
        </div>
    );
}

export default Cart;
