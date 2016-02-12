import React, {Component} from 'react';
import TextField from 'material-ui/lib/text-field';

class TextInput extends Component {
    render() {
        return (
            <div>
              <TextField
                hintText={this.props.hintText}
                floatingLabelText={this.props.hintText}
              /><br/>
            </div>
        )
    }
}

export default TextInput;
