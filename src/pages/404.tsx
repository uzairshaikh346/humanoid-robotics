import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { useHomePageUrl } from '../utils/routing';

function NotFound() {
  const homePageUrl = useHomePageUrl();
  
  return (
    <Layout title="Page Not Found" description="The requested page does not exist">
      <div className={clsx('container margin-vert--lg padding--md')}>
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1 className="text--center">Page Not Found</h1>
            <p className="text--center">
              We couldn't find the page you were looking for.
            </p>
            <div className="text--center margin-vert--lg">
              <a 
                className="button button--primary button--lg" 
                href="/docs/intro">
                Browse the Book
              </a>
            </div>
            <div className="text--center margin-vert--lg">
              <a href={homePageUrl}>Return to Home</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;