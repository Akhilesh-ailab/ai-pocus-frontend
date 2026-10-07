import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AUTH_ROUTES } from '../constants/authConstants';

export default function PrivateRoute() {
  // Check if a session exists in local storage
  const session = localStorage.getItem('aipocus_session');
  const isAuthenticated = !!session;

  return isAuthenticated ? <Outlet /> : <Navigate to={AUTH_ROUTES.LOGIN} replace />;
}