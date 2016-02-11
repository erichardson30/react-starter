import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ContactPage.scss';
import AppStore from '../../stores/AppStore';
import AppActions from '../../actions/AppActions';
import DataContent from './DataContent';

const title = 'Contact Us';


class ContactPage extends Component {

    constructor(props) {
        super(props);
        this.state = AppStore.getState();
        AppActions.getData();
        this.onChange = this.onChange.bind(this);
    }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
    AppStore.listen(this.onChange);
}

componentWillUnmount() {
    AppStore.unlisten(this.onChange);
}

onChange(state) {
    this.setState(state);
}

renderData() {
    return this.state.data.map((data) => {
        return (
            <DataContent key={data.id} data={data} />
        )
    })
}

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
          <div>
              { this.renderData() }
          </div>
        </div>
      </div>
    );
}

}

export default withStyles(ContactPage, s);
