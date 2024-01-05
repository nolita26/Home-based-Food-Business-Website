// eslint-disable-next-line no-unused-vars
import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick} className= {`${ props.backgroundColor } button` }>
        { props.title }
      </button>
    </div>
  );
};

export default Button