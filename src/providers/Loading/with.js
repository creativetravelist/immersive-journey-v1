import Context from './Context';
import React from 'react';

const withContainer = (Component) => {
    return (props) => <Context.Consumer>{(value) => <Component {...value} {...props} />}</Context.Consumer>;
};

export default withContainer;
