import React, { Component } from 'react';

const withClass = (ComponentToWrap, className) => {
  // return (props) => (
  //   <div className={className}>
  //     <ComponentToWrap {...props} />
  //   </div>
  // );

  /** We can also return class component using Anonymous Class */
  const WithClass = class extends Component {
    render() {
      return (
        <div className={className}>
          <ComponentToWrap ref={this.props.forwardedRef} {...this.props} />
        </div>
      );
    }
  }

  return React.forwardRef((props, ref) => {
    return <WithClass forwardedRef={ref} {...props} />;
  });
};

export default withClass;