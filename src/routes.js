import React from 'react';

import ProjectPage from './pages/ProjectPage';
import HomePage from './pages/HomePage';

import NotFoundPgae from './pages/NotFoundPage';
import UserPage from './pages/UserPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage/>
    },
    {
        path: '/projects',
        exact: true,
        main: () => < ProjectPage/>
    },
    {
        path: '/users',
        exact: true,
        main: () => < UserPage/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPgae/>
    }
];
export default routes;