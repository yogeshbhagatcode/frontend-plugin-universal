import React, { useState } from 'react';
import '../styles.css';

export interface GlobalHeaderBannerProps {
  message?: string;
  actionText?: string;
  actionUrl?: string;
}

export const GlobalHeaderBanner: React.FC<GlobalHeaderBannerProps> = ({
  message = '🚀 Welcome to Open edX! Explore courses, track progress, and learn together.',
  actionText = 'Learn more',
  actionUrl = '/courses',
}) => {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
    <div className="universal-header-banner" role="region" aria-label="Global Announcement">
      <div>
        <span>{message}</span>
        {actionUrl && actionText && (
          <a href={actionUrl} target="_blank" rel="noopener noreferrer">
            {actionText}
          </a>
        )}
      </div>
      <button
        type="button"
        onClick={() => setVisible(false)}
        style={{
          background: 'transparent',
          border: 'none',
          color: '#ffffff',
          cursor: 'pointer',
          fontSize: '1rem',
          lineHeight: 1,
          padding: '0 4px',
        }}
        aria-label="Close Announcement"
      >
        ×
      </button>
    </div>
  );
};

export default GlobalHeaderBanner;

