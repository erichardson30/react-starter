import React, {Component} from 'react';
import TextField from 'material-ui/lib/text-field';

class TextInput extends Component {
    onChange = (evt) => {
        this.props.change(evt.target.value);
    };

    render() {
        return (
            <div>
              <TextField
                hintText={this.props.hintText}
                floatingLabelText={this.props.hintText}
                onChange={this.onChange} />
                <br/>
            </div>
        )
    }
}

export default TextInput;
