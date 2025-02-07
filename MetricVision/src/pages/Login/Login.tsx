import styles from './Login.module.scss';
import { useState } from 'react';
import { useAuth } from 'react-oidc-context';
import {Amplify} from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../aws-exports';

Amplify.configure(awsExports);

function Login(){
  const { signinRedirect} = useAuth();
  const auth = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  function handleRedirect() {
    setIsLoading(true);
    signinRedirect();
  }
  if (auth.isAuthenticated) {
    return (
      <div>
        <pre> Hello: {auth.user?.profile.email} </pre>
        <pre> ID Token: {auth.user?.id_token} </pre>
        <pre> Access Token: {auth.user?.access_token} </pre>
        <pre> Refresh Token: {auth.user?.refresh_token} </pre>

        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>
    );
  }
  return(
    <div className={styles.loginContainer}>
       <div className={styles.logo}>
            <img src="https://cskcustomer1.s3.us-east-1.amazonaws.com/cdw-2023-Red.png" alt="CDW Logo"/>
      </div>
      <div className={`${styles.loaderWrapper} ${isLoading?'':styles.hidden}`}>
           <span className={styles.loader}></span>
       </div>
    <Authenticator>
       {({ signOut, user }) => (
        (<div>
          {user ? ( 
            <div className={styles.redirectBtnContainer}>
              <button className={styles.loginButton} onClick={handleRedirect}>Go to Dashboards</button>
              <button className={styles.loginButton} onClick={signOut}>Sign Out</button>
            </div>
          ) : (
            <div>
              <p>Please sign in with Cognito.</p>
            </div>
          )}
        </div>)
      )}
    </Authenticator>
  </div>
    )
}
export default Login