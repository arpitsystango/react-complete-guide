import React from 'react';

const withClass = (ComponentToWrap, className) => {
  return (props) => (
    <div className={className}>
      <ComponentToWrap {...props} />
    </div>
  );
};

export default withClass;