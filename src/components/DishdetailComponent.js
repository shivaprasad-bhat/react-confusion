import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardBody,
    CardText,
    CardTitle,
    ListGroup,
    ListGroupItem,
} from 'reactstrap';
class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish !== null) {
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return <div></div>;
        }
    }
    renderDishComments(dish) {
        if (dish !== null) {
            let options = { year: 'numeric', month: 'short', day: 'numeric' };
            return (
                <Card>
                    <CardBody>
                        <CardTitle>
                            <h3>Comments</h3>
                        </CardTitle>

                        {dish.comments.map((comment) => {
                            return (
                                <ListGroup>
                                    <ListGroupItem>
                                        {comment.comment}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        -- {comment.author},{' '}
                                        {new Date(
                                            comment.date
                                        ).toLocaleDateString('en-US', options)}
                                    </ListGroupItem>
                                </ListGroup>
                            );
                        })}
                    </CardBody>
                </Card>
            );
        } else {
            return <div></div>;
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderDishComments(this.props.dish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;
