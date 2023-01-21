import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer green darken-1">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright
          <a className="grey-text text-lighten-4 right" href="https://github.com/Wishtrader">Repo</a>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
