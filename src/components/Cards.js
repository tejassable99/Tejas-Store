import React, { useState } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

const Cards = ({ item, handleClick, handleRemove }) => {
    const { id, title, author, price, img } = item;
    let [flag, setFlag] = useState(true);

    const handleFlag = () => {
        setFlag(!flag);
    }

    return (
        <div style={{  }}>
            <Card>
                <div style={{ height: '350px' }}>
                    <Image src={img} alt="Image" />
                </div>
                <Card.Content>
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>{author}</Card.Meta>
                    <Card.Description>Price - {price}Rs</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    {flag ? (
                        <Button primary fluid onClick={() => { handleClick(item); handleFlag(); }}>Add to Cart</Button>
                    ) : (
                        <Button color='red' fluid onClick={() => { handleRemove(id); handleFlag(); }}>Remove from Cart</Button>
                    )}
                </Card.Content>
            </Card>
        </div>
    );
}

export default Cards;
