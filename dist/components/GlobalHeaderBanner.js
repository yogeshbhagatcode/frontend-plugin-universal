import React, { useState } from 'react';
import '../styles.css';
export const GlobalHeaderBanner = ({
  message = '🚀 Welcome to Open edX! Explore courses, track progress, and learn together.',
  actionText = 'Learn more',
  actionUrl = '/courses'
}) => {
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "universal-header-banner",
    role: "region",
    "aria-label": "Global Announcement"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, message), actionUrl && actionText && /*#__PURE__*/React.createElement("a", {
    href: actionUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, actionText)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setVisible(false),
    style: {
      background: 'transparent',
      border: 'none',
      color: '#ffffff',
      cursor: 'pointer',
      fontSize: '1rem',
      lineHeight: 1,
      padding: '0 4px'
    },
    "aria-label": "Close Announcement"
  }, "\xD7"));
};
export default GlobalHeaderBanner;