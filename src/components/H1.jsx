import React from 'react';

const H1 = (props) => {
  const { children } = props;
  const { className } = props;
  const { visible } = props;
  const { handleClick } = props;
  return (
    <div
      className={`${className}-header mx-4`}
      onClick={() => {
        if (visible) {
          handleClick(!visible);
        }
      }}
    >
      <h1 className={`${className}-h1 text-3xl text-center p-1 rounded-lg text-black`}>{children}</h1>
    </div>
  );
};

export default H1;
