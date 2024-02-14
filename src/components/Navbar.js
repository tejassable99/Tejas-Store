import React from 'react';
import '../styles/navbar.css';

const Navbar = ({size, setShow}) => {
  return (
    <nav>
        <div className="nav_box">
        <span style={{
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: 	"blue",
  fontFamily: "cursive"
}}>Tejas Store</span>

            <span className="my_shop" style={{alignContent:"center"}} onClick={()=>setShow(true)}>
                Home
            </span>
            <div className="cart" onClick={()=>setShow(false)}>
                <span>
                    <i className="fas fa-cart-plus"></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar