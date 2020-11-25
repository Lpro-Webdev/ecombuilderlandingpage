import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {


  return (
    <section
      {...props}
    >
      <div className="container">
        <div class="trustpilot-widget" data-locale="en-US" data-template-id="5613c9cde69ddc09340c6beb" data-businessunit-id="5f74ddfff2c2360001518f7a" data-style-height="100%" data-style-width="100%" data-theme="light">
        <a style={{ color: "#FFFFFF" }} href="https://www.trustpilot.com/review/ecombrandbuilder.com" target="_blank" rel="noopener">Trustpilot</a>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
