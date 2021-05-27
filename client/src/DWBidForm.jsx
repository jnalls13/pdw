import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
} from 'semantic-ui-react';
import axios from 'axios';

class DWBidForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // firstName: '',
      // lastName: '',
      bid: '',
      // linktoprofile: '',

    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  handlePost() {
    console.log(this.props.postId)
    const send = {
      postId: this.state.postId,
      // bidder_id: this.props.userId,
      bid: JSON.stringify(Number(this.state.bid.replace(/[^0-9.-]+/g, ''))),
    };
    console.log(send)

    axios.post('/api/bid/', send, {
      headers: {
        Authorization: this.props.token,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => { console.log(error) });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>

        <Form>

          {/* <Form.Group>
            <Form.Field
              onChange={this.handleChange}
              control={Input}
              name="firstName"
              label="First name"
              placeholder="First name"
            />
            <Form.Field
              onChange={this.handleChange}
              control={Input}
              name="lastName"
              label="Last name"
              placeholder="Last name"
            />
            <Form.Field
              onChange={this.handleChange}
              control={Input}
              name="linktoprofile"
              label="Profile Link"
              placeholder="Profile URL"
            />

          </Form.Group> */}
          <Form.Group>

            <Form.Field
              onChange={this.handleChange}
              name="bid"
              control={Input}
              label="Bid Price"
              placeholder="$00.00"
            />
          </Form.Group>

          <Form.Field
            control={Checkbox}
            label="I agree to the Terms and Conditions"
          />
          <Form.Field control={Button} onClick={this.handlePost}>Submit</Form.Field>
        </Form>
      </div>
    );
  }
}

export default DWBidForm;
