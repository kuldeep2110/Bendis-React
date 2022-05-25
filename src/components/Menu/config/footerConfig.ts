import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://swaphamster.io/#',
      },
      {
        label: t('Certik Audit'),
        href: 'https://www.certik.com/projects/swaphamster-io',
      },
      {
        label: t('Community'),
        href: 'https://swaphamster.io/#',
      },
      {
        label: t('CHEESE token'),
        href: 'https://swaphamster.io/#',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://swaphamster.io/#',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://swaphamster.io/#',
      },
      {
        label: t('Guides'),
        href: 'https://swaphamster.io/#',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/Hamstersfinance',
      },
      {
        label: t('Documentation'),
        href: 'https://swaphamster.io/#',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://swaphamster.io/#',
      },
      {
        label: t('Audits'),
        href: 'https://swaphamster.io/#',
      },
      {
        label: t('Careers'),
        href: 'https://swaphamster.io/#',
      },
    ],
  },
]
