import PropTypes from 'prop-types';
import { useState } from 'react';

import Loader from 'components/Loader';

//-----------------------|| AUTH GUARD ||-----------------------//

/**
 * Authentication guard for routes
 * @param {PropTypes.node} children children element/node
 */

const AuthGuard = ({ children }) => {
    const [loading, setLoading] = useState(false);

    if (!loading) return <Loader />;

    return children;
};

AuthGuard.propTypes = {
    children: PropTypes.node
};

export default AuthGuard;
