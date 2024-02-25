import React from 'react';
import list from '../data';
import Cards from './Cards';

const Amazon = ({ handleClick, handleRemove }) => {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginTop:"80px",height:"30%" }}>
       
            {
                list.map((item) => (
                    <Cards item={item} key={item.id} handleClick={handleClick} handleRemove={handleRemove} />
                ))
            }
        </div>
    )
}

export default Amazon;
