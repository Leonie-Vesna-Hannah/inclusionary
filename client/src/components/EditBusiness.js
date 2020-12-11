import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class EditBusiness extends Component {
  render() {
    return (
      <div>
        <h2>Edit business</h2>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="title">Title: </Form.Label>
            <Form.Control
              type="text"
              id="title"
              name="title"
              value={this.props.title}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="description">Description: </Form.Label>
            <Form.Control
              type="text"
              id="description"
              name="description"
              value={this.props.description}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="picture">Picture: </Form.Label>
            <Form.Control
              type="text"
              id="picture"
              name="picture"
              value={this.props.picture}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="category">Category: </Form.Label>
            <Form.Control
              type="text"
              id="category"
              name="category"
              value={this.props.category}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="street">Street: </Form.Label>
            <Form.Control
              type="text"
              id="street"
              name="street"
              value={this.props.street}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="houseNumber">House number: </Form.Label>
            <Form.Control
              type="number"
              id="houseNumber"
              name="houseNumber"
              value={this.props.houseNumber}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="city">City: </Form.Label>
            <Form.Control
              type="text"
              id="city"
              name="city"
              value={this.props.city}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="zipCode">ZIP Code: </Form.Label>
            <Form.Control
              type="number"
              id="zipCode"
              name="zipCode"
              value={this.props.zipCode}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="country">Country: </Form.Label>
            <Form.Control
              type="text"
              id="country"
              name="country"
              value={this.props.country}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email">E-mail: </Form.Label>
            <Form.Control
              type="text"
              id="email"
              name="email"
              value={this.props.email}
              onChange={this.props.handleChange}
            />
          </Form.Group>

          <Button type="submit">Update Business</Button>
        </Form>
      </div>
    );
  }
}
