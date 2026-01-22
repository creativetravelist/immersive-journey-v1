// import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

// project imports

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => (
    <>
        <Outlet />
        {/* <Customization /> */}
    </>
);

MinimalLayout.propTypes = {};
export default MinimalLayout;
