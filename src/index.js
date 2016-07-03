import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
};

class OutsideClick extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.mount = this.mount.bind(this);
  }

  componentDidMount() {
    global.document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    global.document.removeEventListener('click', this.handleClick);
  }

  mount(el) {
    this.el = el;
  }

  handleClick(evt) {
    const { target } = evt;

    if (this.el === target || this.el.contains(target)) {
      return;
    }

    this.props.onClick(evt);
  }

  render() {
    return React.cloneElement(this.props.children, {
      ref: this.mount,
    });
  }
}

OutsideClick.propTypes = propTypes;

export default OutsideClick;
