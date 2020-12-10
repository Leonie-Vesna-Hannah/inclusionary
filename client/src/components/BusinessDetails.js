import React, { Component } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import EditBusiness from "./EditBusiness";

export default class BusinessDetails extends Component {
  state = {
    business: null,
    editForm: false,
    error: null,
    title: "",
    description: "",
    picture: "",
    category: [],
    street: "",
    houseNumber: null,
    city: "",
    zipCode: null,
    email: "",
  };

  getData = () => {
    const id = this.props.match.params.id;
    // get the business that was clicked from the server
    axios
      .get(`/api/businesses/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          business: response.data,
          title: response.data.title,
          description: response.data.description,
        });
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.status === 404) {
          this.setState({
            error: "Sorry - Business Not found 🤷‍♀️ 🤷‍♂️",
          });
        }
      });
  };

  componentDidMount = () => {
    this.getData();
  };
  deleteBusiness = () => {
    // delete this business from the database
    const id = this.props.match.params.id;
    axios.delete(`/api/businesses/${id}`).then(() => {
      // this is how you do a redirect with react router dom
      this.props.history.push("/businesses");
    });
  };

  toggleEditForm = () => {
    this.setState((prevState) => ({
      editForm: !prevState.editForm,
    }));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const id = this.props.match.params.id;
    axios
      .put(`/api/businesses/${id}`, {
        title: this.state.title,
        description: this.state.description,
      })
      .then((response) => {
        this.setState({
          business: response.data,
          title: response.data.title,
          description: response.data.description,
          editForm: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if (this.state.error) return <h1>{this.state.error}</h1>;
    if (!this.state.business) return <h1>Loading...</h1>;
    let allowedToDelete = false;
    const user = this.props.user;
    const owner = this.state.business.owner;
    if (user && user._id === owner) allowedToDelete = true;
    return (
      <div>
        <h1>{this.state.business.title}</h1>
        <p>{this.state.business.description}</p>

        {allowedToDelete && (
          <Button variant="danger" onClick={this.deleteBusiness}>
            Delete Business
          </Button>
        )}

        <Button onClick={this.toggleEditForm}>Show Edit Form</Button>
        {this.state.editForm && (
          <EditBusiness
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}
