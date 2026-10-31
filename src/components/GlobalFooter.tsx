import React from 'react';
import '../styles.css';

export interface GlobalFooterProps {
  copyrightText?: string;
  links?: Array<{ label: string; url: string }>;
}

export const GlobalFooter: React.FC<GlobalFooterProps> = ({
  copyrightText = '© Open edX Platform. All rights reserved.',
  links = [
    { label: 'About', url: '/about' },
    { label: 'Help', url: '/help' },
    { label: 'Privacy Policy', url: '/privacy' },
    { label: 'Terms of Service', url: '/tos' },
  ],
}) => {
  return (
    <footer className="universal-footer" role="contentinfo">
      <p>{copyrightText}</p>
      {links && links.length > 0 && (
        <nav className="footer-links" aria-label="Footer Navigation">
          {links.map((link) => (
            <a key={link.url} href={link.url}>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </footer>
  );
};

export default GlobalFooter;

