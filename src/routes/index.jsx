import MainLayout from '@layouts/MainLayout';

import Home from '@pages/Home';
import Login from '@pages/Login';
import Create from '@pages/Create';
import Detail from '@pages/Detail';
import Profile from '@pages/Profile';
import Bookmark from '@pages/Bookmark';
import NotFound from '@pages/NotFound';
import Register from '@pages/Register';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: false,
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/register',
    name: 'Register',
    protected: false,
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    protected: false,
    component: Login,
  },
  {
    path: '/bookmark',
    name: 'Bookmark',
    protected: true,
    component: Bookmark,
    layout: MainLayout,
  },
  {
    path: '/profile',
    name: 'Profile',
    protected: true,
    component: Profile,
    layout: MainLayout,
  },
  {
    path: '/journey',
    name: 'Journey',
    subRoutes: [
      {
        path: '/create',
        name: 'Create Journey',
        protected: true,
        component: Create,
        layout: MainLayout,
      },
      {
        path: '/:id',
        name: 'Detail Journey',
        protected: false,
        component: Detail,
        layout: MainLayout,
      },
    ],
  },

  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
