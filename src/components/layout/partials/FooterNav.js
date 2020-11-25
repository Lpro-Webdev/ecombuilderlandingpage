import React from "react";
import classNames from "classnames";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <a href="https://www.facebook.com/ecombrandclub">Contact</a>
        </li>
        <li>
          <a href="https://www.facebook.com/ecombrandclub">About us</a>
        </li>
        <li>
          <a href="https://www.facebook.com/ecombrandclub">FAQ's</a>
        </li>
        <li>
          <a href="https://www.facebook.com/ecombrandclub">Support</a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
