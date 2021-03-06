import { ENV } from './../core/env.config';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SILENT_REDIRECT: string;
  SCOPE: string;
  NAMESPACE: string;
};

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'y4dBosCl7bozf4qRnwX3V0UqWd12WxQp',
  CLIENT_DOMAIN: 'gilxa1226.auth0.com',
  AUDIENCE: 'http://localhost:8083/api/',
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SILENT_REDIRECT: 'http://localhost:8083/silent',
  SCOPE: 'openid profile',
  NAMESPACE: 'http://myapp.com/roles'
};
