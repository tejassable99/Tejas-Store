import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

const Navbar = ({ size, setShow }) => {
    return (
      < div style={{gap:"20px"}}>
        <Menu inverted color='violet' className='ui violet inverted three item menu' fixed='top'>
            <Menu.Item header style={{ fontweight:"bold" }}>
                Tejas Store
            </Menu.Item>
            <Menu.Item
            style={{fontweight:"bolder"}}
                name='Home'
                onClick={() => setShow(true)}
            />
          
                <Menu.Item onClick={() => setShow(false)}>
                    <Icon name='cart' size='large' />
                    <div >{size}</div>
                </Menu.Item>
       
        </Menu>
        
        </div>
    );
};

export default Navbar;
