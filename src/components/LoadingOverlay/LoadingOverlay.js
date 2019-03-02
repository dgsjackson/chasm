import React from 'react';
import Events from '../../Events';
import './LoadingOverlay.scss';

class LoadingOverlay extends React.Component {

  constructor(props) {
    super(props);
    this.state = { show: false };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentDidMount() {
    Events.on(Events.RequestsSent, this.show);
    Events.on(Events.ResponsesReceived, this.hide);
  }

  componentWillUnmount() {
    Events.removeListener(Events.RequestsSent, this.show);
    Events.removeListener(Events.ResponsesReceived, this.hide);
  }

  show() {
    this.setState({ show: true });
  }

  hide() {
    this.setState({ show: false });
  }

  render() {
    let classes = ['modal', ' loading-modal', this.state.show ? ' active': ''].join('');
    return (
      <div className={classes}>
        <div className="modal-overlay loading-modal-overlay"></div>
      </div>
    );
  }

}

export default LoadingOverlay;