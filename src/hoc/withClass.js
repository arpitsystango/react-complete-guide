import React, { Component } from 'react';

const withClass = (ComponentToWrap, className) => {
  // return (props) => (
  //   <div className={className}>
  //     <ComponentToWrap {...props} />
  //   </div>
  // );

  /** We can also return class component using Anonymous Class */
  return class extends Component {
    render() {
      return (
        <div className={className}>
          <ComponentToWrap {...this.props} />
        </div>
      );
    }
  }
};

export default withClass;