import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="https://www.facebook.com/ecombrandclub">Contact</Link>
        </li>
        <li>
          <Link to="https://www.facebook.com/ecombrandclub">About us</Link>
        </li>
        <li>
          <Link to="https://www.facebook.com/ecombrandclub">FAQ's</Link>
        </li>
        <li>
          <Link to="https://www.facebook.com/ecombrandclub">Support</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;