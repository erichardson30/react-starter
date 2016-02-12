import React, {Component} from 'react';
import FlatButton from 'material-ui/lib/flat-button';

class Button extends Component {
    render() {
        return (
            <div>
                <FlatButton label={this.props.label} backgroundColor="grey"/>
            </div>
        )
    }
}

export default Button;
