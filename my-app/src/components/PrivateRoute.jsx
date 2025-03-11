// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ element: Element }) => {
    const isAuthenticated = !!localStorage.getItem('token');

    return isAuthenticated ? Element : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
    element: PropTypes.element.isRequired,
};

export default PrivateRoute;
