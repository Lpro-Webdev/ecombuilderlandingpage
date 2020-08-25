import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Button from '../elements/Button';


const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Services And Capabilities',
    paragraph: 'ExGrow your online store revenue and enhance the performance with our support eCommerce services and solution specialists.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  E-Commerce Website
                  </div>
                <h3 className="mt-0 mb-12">
                Shopify store ( Design & Full Setup)
                  </h3>
                <p className="m-0 mb-24">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="reveal-from-bottom" data-reveal-delay="600">
                  <Button tag="a" color="dark" wideMobile href="https://ecombuilder.spp.io/portal/services">
                    Get started
                    </Button>
              </div>
                  
              </div>
              
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/e-combuilder shopify website design.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Amazon FBA
                  </div>
                <h3 className="mt-0 mb-12">
                Amazon Account Management & Customer Support
                  </h3>
                <p className="m-0 mb-24">
                Let us manage your Amazon account to make sure everything goes as planned. We will also take care of your inventory and respond to customer messages.
                  </p>
                  <div className="reveal-from-bottom" data-reveal-delay="600">
                  <Button tag="a" color="dark" wideMobile href="https://ecombuilder.spp.io/portal/services">
                    Get started
                    </Button>
              </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/amazon full listing and ads campaign ecombuilder.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  E-commerce Ads
                  </div>
                <h3 className="mt-0 mb-12">
                Creatives On-Demand
                  </h3>
                <p className="m-0 mb-24">
                We combine traditional direct response advertising and user generated content seamlessly into the social world to produce authentic, engaging video ads that inspires people to take action.
                  </p>
                  <div className="reveal-from-bottom" data-reveal-delay="600">
                  <Button tag="a" color="dark" wideMobile href="https://ecombuilder.spp.io/portal/services">
                    Get started
                    </Button>
              </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/dropshipping facebook video ads ecombuilder-01.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
