import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react';
import { ContactType } from '../types/UtilTypes';

export const contactItems: ContactType[] = [
  {
    href: 'https://t.me/RinalinDS',
    text: 'Write to me in',
    icon: <TelegramIcon fontSize="large" />,
  },
  {
    href: 'https://www.linkedin.com/in/denis-pilyutin-647514197/',
    text: `Connect with me via`,
    icon: <LinkedInIcon fontSize="large" />,
  },
  {
    href: 'https://github.com/RinalinDS',
    text: `Watch source code on`,
    icon: <GitHubIcon fontSize="large" />,
  },
];

export const ResourcesList = [
  { href: '#', text: 'About' },
  { href: '#', text: 'Careers' },
  { href: '#', text: 'For Business' },
];
