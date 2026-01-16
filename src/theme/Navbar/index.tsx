import React from 'react';
import OriginalNavbar from '@theme-original/Navbar';
import { useAuth } from '@site/src/context/AuthContext';
import { useHomePageUrl } from '@site/src/utils/routing';
import { translate } from '@docusaurus/Translate';
import '@site/src/css/custom.css';

const Navbar: React.FC = (props) => {
  const { session, signOut } = useAuth();
  const homePageUrl = useHomePageUrl();

  const handleLogout = async () => {
    try {
      await signOut();
      window.location.href = homePageUrl;
    } catch (error: any) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <>
      <OriginalNavbar {...props} />
      <div className="navbar__auth-container">
        {session ? (
          <button 
            onClick={handleLogout}
            className="navbar__auth-button navbar__auth-button--logout"
          >
            {translate({ id: 'theme.navbar.logout', message: 'Logout' })}
          </button>
        ) : (
          <a 
            href={`${homePageUrl}login`}
            className="navbar__auth-button"
          >
            {translate({ id: 'theme.navbar.login', message: 'Login' })}
          </a>
        )}
      </div>
    </>
  );
};

export default Navbar;