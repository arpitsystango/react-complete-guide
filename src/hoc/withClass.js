import React from 'react';

const withClass = (ComponentToWrap, className) => {
  return (props) => (
    <div className={className}>
      <ComponentToWrap />
    </div>
  );
};

export default withClass;