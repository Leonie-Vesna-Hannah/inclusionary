import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default class AddBusiness extends Component {
  state = {
    title: "",
    description: "",
    picture: "",
    // category: [],
    street: "",
    houseNumber: 0,
    city: "",
    zipCode: 0,
    country: "",
    email: "",
    // design: [],
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
    console.log(this.state);
    axios
      .post("/api/businesses", {
        title: this.state.title,
        description: this.state.description,
        picture: this.state.picture,
        category: this.state.category,
        street: this.state.street,
        houseNumber: this.state.houseNumber,
        city: this.state.city,
        zipCode: this.state.zipCode,
        country: this.state.country,
        email: this.state.email,
        // design: this.state.design,
      })
      .then(() => {
        // set the form to it's initial state (empty input fields)
        this.setState({
          title: "",
          description: "",
          picture: "",
          category: [],
          street: "",
          houseNumber: 0,
          city: "",
          zipCode: 0,
          country: "",
          email: "",
          // design: [],
        });
        // update the parent components state (in Projects) by calling getData()
        this.props.getData();
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="title">Title: </Form.Label>
          <Form.Control
            type="text"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="description">Description: </Form.Label>
          <Form.Control
            type="text"
            id="description"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="picture">Picture: </Form.Label>
          <Form.Control
            type="text"
            id="picture"
            name="picture"
            value={this.state.picture}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="category">Category: </Form.Label>
          <Form.Control
            type="text"
            id="category"
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="street">Street: </Form.Label>
          <Form.Control
            type="text"
            id="street"
            name="street"
            value={this.state.street}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="houseNumber">House number: </Form.Label>
          <Form.Control
            type="text"
            id="houseNumber"
            name="houseNumber"
            value={this.state.houseNumber}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="city">City: </Form.Label>
          <Form.Control
            type="text"
            id="city"
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="zipCode">ZIP Code: </Form.Label>
          <Form.Control
            type="text"
            id="zipCode"
            name="zipCode"
            value={this.state.zipCode}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="country">Country: </Form.Label>
          <Form.Control
            type="text"
            id="country"
            name="country"
            value={this.state.country}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">E-mail: </Form.Label>
          <Form.Control
            type="text"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="design">Design: </Form.Label>
          <Form.Control
            type="text"
            id="design"
            name="design"
            value={this.state.design}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button type="submit">Add your Business</Button>
      </Form>
    );
  }
}
