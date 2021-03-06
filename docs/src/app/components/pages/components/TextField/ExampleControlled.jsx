import React from 'react';
import TextField from 'material-ui/lib/text-field';

export default class TextFieldExampleControlled extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 'Property Value',
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <TextField
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
