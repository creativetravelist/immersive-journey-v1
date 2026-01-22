import Context from './Context';

const withContainer = (Component) => {
    const ChildComponent = (props) => {
        return (
            <Context.Consumer>
                {(contextProps) => {
                    return <Component {...contextProps} {...props} />;
                }}
            </Context.Consumer>
        );
    };

    return ChildComponent;
};

export default withContainer;
