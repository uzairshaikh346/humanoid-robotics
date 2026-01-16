import React from 'react';
import Layout from '@theme/Layout';
import { useHistory } from '@docusaurus/router';
import { useHomePageUrl } from '../utils/routing';
import LoginForm from '../components/LoginForm';

export default function LoginPage(): React.ReactElement {
  const history = useHistory();
  const homePageUrl = useHomePageUrl();

  const handleLoginSuccess = () => {
    // Redirect to home page after successful login - /humanoid-robotics/
    setTimeout(() => {
      window.location.href = homePageUrl;
    }, 300);
  };

  return (
    <Layout
      title="Login"
      description="Sign in to access additional features">
      <div style={{
        minHeight: 'calc(100vh - 60px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        backgroundColor: 'var(--ifm-background-color)',
      }}>
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </div>
    </Layout>
  );
}
