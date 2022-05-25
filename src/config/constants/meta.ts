import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'HamsterSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CHEESE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by HamsterSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://hamsterswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('HamsterSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('HamsterSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('HamsterSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('HamsterSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('HamsterSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('HamsterSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('HamsterSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('HamsterSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('HamsterSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('HamsterSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('HamsterSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('HamsterSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('HamsterSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('HamsterSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('HamsterSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('HamsterSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('HamsterSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('HamsterSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('HamsterSwap Info & Analytics')}`,
        description: 'View statistics for HamsterSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('HamsterSwap Info & Analytics')}`,
        description: 'View statistics for HamsterSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('HamsterSwap Info & Analytics')}`,
        description: 'View statistics for HamsterSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('HamsterSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('HamsterSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('HamsterSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('HamsterSwap')}`,
      }
    default:
      return null
  }
}
