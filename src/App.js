import React , {useState} from 'react';
import Navbar from './components/Navbar';
import Amazon from './components/Amazon';
import Cart from './components/Cart';
import Swal from 'sweetalert2';

const App = () => {
	const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
	const [warning, setWarning] = useState(false);

	const handleClick = (item)=>{
		let isPresent = false;
		cart.map((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			// setWarning(true);
			// setTimeout(()=>{
			// 	setWarning(false);
			// }, 2000);
			Swal.fire({
                title: 'Item Already Present in the Cart',
                icon: 'warning',
                showCancelButton: false,
                confirmButtonText: 'OK',
            });
		
			return ;
		}
		setCart([...cart, item]);
	}

	const handleChange = (item, d) =>{
		let ind = -1;
		cart.map((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}

	const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
    }

  return (
	<>
		<Navbar size={cart.length} setShow={setShow} />
		{
			show ? <Amazon handleClick={handleClick} handleRemove={handleRemove} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} handleRemove={handleRemove}/>
		}
	
</>
  )
}

export default App