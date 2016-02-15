import React, {Component} from 'react';
import FlatButton from 'material-ui/lib/flat-button';

class Button extends Component {
    handleClick = () => {
        this.props.onSubmit();
    };

    render() {
        return (
            <div>
                <FlatButton label={this.props.label}
                    backgroundColor="grey"
                    onClick={this.handleClick}
                    disabled={this.props.disabled}/>
            </div>
        )
    }
}

export default Button;
