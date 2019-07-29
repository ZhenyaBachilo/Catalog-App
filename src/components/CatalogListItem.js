import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

export class CatalogListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    handleClick = () => {
        this.setState(state => ({
            visible: !state.visible
        }));
    }

    render() {
        return (
            <Card as='li' className='catalogItem'>
                <Card.Header as="h5">{this.props.item.name}</Card.Header>
                <Card.Body>
                    <img className='productImage' src={this.props.item.image} alt='itemImage' />
                    <Card.Title>
                        Price: {this.props.item.price} BYN
                    </Card.Title>
                    <Button onClick={this.handleClick} variant="info">
                        Description
                    </Button>
                    <Card.Text as='div' className={this.state.visible ? "itemDescription" : "hideDescription itemDescription"}>
                        {this.props.item.description}
                        <div><Badge variant={this.props.item.stock === 'in stock' ? 'success' : 'danger'}>{this.props.item.stock}</Badge></div>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

