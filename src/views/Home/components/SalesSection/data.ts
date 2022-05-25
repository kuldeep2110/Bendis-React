import { SalesSectionProps } from '.'

export const searchSectionData: SalesSectionProps = {
  headingText: 'HamsterSwap',
  bodyText: `Do you want Financial Freedom and not to be affected by the negativity caused by market fluctuations? Become a part of our Decentralized Finance (DeFi) platform. Contribute to presale today!`,
  reverse: true,
  primaryButton: {
    to: 'launch',
    text: 'Read More',
    external: false,
  },
  images: '../../../../img/images/icon_main.png'
}

export const financeSectionData: SalesSectionProps = {
  headingText: 'Support for CHEESE',
  bodyText: `Participate in Exclusive IDO's and be early on the HamsterSwap project.`,
  reverse: false,
  primaryButton: {
    to: 'launch',
    text: 'Read More',
    external: false,
  },
  images: '../../../../img/images/support_icon.png'
}

export const tokenomicsSectionData: SalesSectionProps = {
  headingText: 'Passive Income with HAM',
  bodyText: `HamsterSwap makes it easy to make your HAMSTERS work for you.`,
  reverse: true,
  primaryButton: {
    to: 'launch',
    text: 'Read More',
    external: false,
  },
  images: '../../../../img/images/income.png'
}

export const globeSectionData: SalesSectionProps = {
  headingText: 'Ecosystem',
  bodyText: `HamsterSwap is first stage of Hamster Ecosystem. Hamster is the first token to create its own ecosystem on the BSC network.`,
  reverse: false,
  primaryButton: {
    to: 'launch',
    text: 'Read More',
    external: false,
  },
  images: '../../../../img/images/ecosystem.png'
}

export const swapSectionData: SalesSectionProps = {
  headingText: 'Intro to BabyHAMSwap',
  bodyText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  reverse: true,
  primaryButton: {
    to: '',
    text: 'Read Now',
    external: false,
  },
  images: './img/images/icon_main.png'
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn passive income with crypto.',
  bodyText: 'CheeseSwap makes it easy to make your crypto work for you.',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
  images: '/images/home/earn/'
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'CHEESE makes our world go round.',
  bodyText:
    'CHEESE token is at the heart of the CheeseSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x9b79410C6657713AE2A459bAEFB3b3909154bADd',
    text: 'Buy CHEESE',
    external: false,
  },
  images: '/images/home/cake/'
}
