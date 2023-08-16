import { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal_root');
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClick();
    }
  };
  handleBackDrop = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onClick();
    }
  };
  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleBackDrop}>
        <div className="Modal">
          <img
            src={this.props.src}
            alt={this.props}
            onClick={this.props.onClick}
            width="700"
            height="700"
          />
        </div>
      </div>,
      modalRoot
    );
  }
}
Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
};