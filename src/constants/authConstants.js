export const AUTH_ROUTES = {
  LOGIN: '/login',
  SIGNUP: '/signup',
  FORGOT_PASSWORD: '/forgot-password',
  DASHBOARD: '/dashboard',
  CASES: '/dashboard/cases',
  NEW_CRF: '/dashboard/new-crf',
  AI_ANALYSIS: '/dashboard/ai-analysis',
  PROTOCOL: '/dashboard/protocol',
  SETTINGS: '/dashboard/settings',
  SUPPORT: '/dashboard/support',
};

export const CLINICAL_ROLES = [
  { value: 'doctor', label: 'Doctor / Attending Physician' },
  { value: 'radiologist', label: 'Radiologist' },
  { value: 'nurse', label: 'Registered Nurse' },
  { value: 'phlebotomist', label: 'Phlebotomist' },
];

export const PROJECT_INFO = {
  TITLE: 'AI-POCUS Emergency Protocol',
  SUBTITLE: 'Rapid Triage and Diagnosis in Emergency Department Patients with Dyspnea and Shock.',
  SITE: 'Department of Trauma & Emergency, AIIMS Raipur',
  PARTNER: 'DRISHTI CPS Foundation, IIT Indore',
};