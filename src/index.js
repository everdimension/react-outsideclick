import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onClickOutside: PropTypes.func.isRequired,
};

class OutsideClick extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.mount = this.mount.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
    document.addEventListener('touchend', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('touchend', this.handleClick);
  }

  mount(el) {
    this.el = el;
  }

  handleClick(evt) {
    const { target } = evt;

    if (this.el.contains(target)) {
      return;
    }

    this.props.onClickOutside(evt);
  }

  render() {
    const { onClickOutside, ...restProps } = this.props;
    return <div ref={this.mount} {...restProps} />;
  }
}

OutsideClick.propTypes = propTypes;

export default OutsideClick;
