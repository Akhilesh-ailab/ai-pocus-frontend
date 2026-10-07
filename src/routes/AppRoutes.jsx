import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import LoginPage from '../pages/auth/LoginPage';
import SignupPage from '../pages/auth/SignupPage';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage';
import DashboardLayout from '../layouts/DashboardLayout';
import PatientList from '../pages/dashboard/PatientList';
import Cases from '../pages/dashboard/Cases';
import NewCRFForm from '../pages/dashboard/NewCRFForm';
import AiAnalysis from '../pages/dashboard/AiAnalysis';
import StudyProtocol from '../pages/dashboard/StudyProtocol'; // <-- Import
import Settings from '../pages/dashboard/Settings';           // <-- Import
import HelpSupport from '../pages/dashboard/HelpSupport';     // <-- Import
import PrivateRoute from './PrivateRoute';
import { AUTH_ROUTES } from '../constants/authConstants';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={AUTH_ROUTES.LOGIN} replace />} />
      
      {/* Public Auth Routes */}
      <Route element={<AuthLayout />}>
        <Route path={AUTH_ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={AUTH_ROUTES.SIGNUP} element={<SignupPage />} />
        <Route path={AUTH_ROUTES.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
      </Route>

      {/* Protected Dashboard Routes */}
      <Route element={<PrivateRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path={AUTH_ROUTES.DASHBOARD} element={<PatientList />} />
          <Route path={AUTH_ROUTES.CASES} element={<Cases />} />
          <Route path={AUTH_ROUTES.NEW_CRF} element={<NewCRFForm />} />
          <Route path={AUTH_ROUTES.AI_ANALYSIS} element={<AiAnalysis />} />
          
          {/* Resource Routes */}
          <Route path={AUTH_ROUTES.PROTOCOL} element={<StudyProtocol />} />
          <Route path={AUTH_ROUTES.SETTINGS} element={<Settings />} />
          <Route path={AUTH_ROUTES.SUPPORT} element={<HelpSupport />} />
        </Route>
      </Route>
    </Routes>
  );
}