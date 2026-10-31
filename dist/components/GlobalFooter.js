import React from 'react';
import '../styles.css';
export const GlobalFooter = ({
  copyrightText = '© Open edX Platform. All rights reserved.',
  links = [{
    label: 'About',
    url: '/about'
  }, {
    label: 'Help',
    url: '/help'
  }, {
    label: 'Privacy Policy',
    url: '/privacy'
  }, {
    label: 'Terms of Service',
    url: '/tos'
  }]
}) => {
  return /*#__PURE__*/React.createElement("footer", {
    className: "universal-footer",
    role: "contentinfo"
  }, /*#__PURE__*/React.createElement("p", null, copyrightText), links && links.length > 0 && /*#__PURE__*/React.createElement("nav", {
    className: "footer-links",
    "aria-label": "Footer Navigation"
  }, links.map(link => /*#__PURE__*/React.createElement("a", {
    key: link.url,
    href: link.url
  }, link.label))));
};
export default GlobalFooter;