import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from 'react-oidc-context'
import {cognitoAuthConfig} from './constants/authConfig';
import App from './App.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <AuthProvider {...cognitoAuthConfig}>
      <App/>
    </AuthProvider>
  </StrictMode>,
)
