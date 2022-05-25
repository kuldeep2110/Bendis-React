import React from 'react'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import { Heading, Flex, Text, Skeleton, ChartIcon, CommunityIcon, SwapIcon } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
import useTheme from 'hooks/useTheme'
import useTokenBalance, { useGetBnbBalance, useBurnedBalance, useTotalSupply } from 'hooks/useTokenBalance'
import { usePriceCakeBusd, useTotalValue } from 'state/farms/hooks'
import { formatLocalisedCompactNumber, getFullDisplayBalance, getBalanceNumber } from 'utils/formatBalance'
import tokens from 'config/constants/tokens'
import ConnectWalletButton from 'components/ConnectWalletButton'
import DisconnectWalletButton from 'components/DisconnectWalletButton'
import useFarmsWithBalance from 'views/Home/hooks/useFarmsWithBalance'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'
import GradientLogo from '../GradientLogoSvg'
import './custom.css';

const ContentWrapper = styled(Flex)`
  flex-direction: column;
  min-height: 250px;
  align-items: center;
  justify-content: center;
`

const ValueWrapper = styled(Flex)`
  flex-direction: column;
  min-height: 250px;
  align-items: center;
  justify-content: space-between;
`

const ValueArea = styled(Flex)`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  text-align: start;
`

const ValueItemArea = styled(Flex)`
  flex-direction: column;
  width: 50%;
  margin-bottom: 10px;
`

const ValueTitle = styled(Text)`
  // color: ${({theme}) => theme.colors.primary};
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`

const Value = styled(Text)`
  // color: ${({theme}) => theme.colors.text};
  color: #832f02;
  font-size: 16px;
  text-align: center;
`

const RoundBg = styled(Flex)`
  border-radius : 18px;
  background : rgba(33,37,41,1);
  padding: 30px
`

// Values fetched from bitQuery effective 6/9/21
const txCount = 30841921
const addressCount = 2751624

const Stats = () => {
  const { t } = useTranslation()
  const data = useGetStats()
  const { theme } = useTheme()
  const { account } = useWeb3React()
  const cakePriceUsd = usePriceCakeBusd()
  const totalValue = useTotalValue()

  const { farmsWithStakedBalance, earningsSum: farmEarningsSum } = useFarmsWithBalance()
  const { balance: userCheese, fetchStatus } = useTokenBalance(tokens.cake.address)
  const burnedBalance = getBalanceNumber(useBurnedBalance(tokens.cake.address))

  const totalSupply = useTotalSupply()
  const circulation = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  const cmc = cakePriceUsd.times(circulation)
  const cmcString = formatLocalisedCompactNumber(cmc.toNumber())

  const tvlString = data ? formatLocalisedCompactNumber(data.tvl) : '-'
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)

  const tvlText = t('And those users are now entrusting the platform with over $%tvl% in funds.', { tvl: tvlString })
  const [entrusting, inFunds] = tvlText.split(tvlString)

  return (
    // <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <RoundBg justifyContent="center" alignItems="center">
      <Flex flexDirection={['column', null, null, 'row']} justifyContent="space-between" width="100%">
        <IconCard>
          <Text fontSize="26px" bold textAlign="center" mb="20px">{t('Farming and Staking')}</Text>
          <div className='custom-card'>
          <ValueWrapper>
            <ValueArea mb="20px">
              <ValueItemArea>
                <ValueTitle>{t('CHEESE to Harvest')}</ValueTitle>
                { account ? <Value>{farmEarningsSum}</Value> : <Value>{t('Locked')}</Value> }
              </ValueItemArea>
              <ValueItemArea>
                <ValueTitle>{t('CHEESE to Wallet')}</ValueTitle>
                { account ? <Value>{getFullDisplayBalance(userCheese)}</Value> : <Value>{t('Locked')}</Value> }
              </ValueItemArea>
            </ValueArea>
            { account ? <DisconnectWalletButton width="100%" /> : <ConnectWalletButton width="100%" />}
          </ValueWrapper>
          </div>
        </IconCard>
        <IconCard>
          <Text fontSize="26px" bold textAlign="center" mb="20px">{t('Status')}</Text>
          <div className='custom-card'>
          <ValueWrapper flexDirection={["row"]} >
            <ValueArea>
              <ValueItemArea>
                <ValueTitle>{t('CHEESE Price')}</ValueTitle>
                <Value>{`$${cakePriceUsd.toFixed(4)}`}</Value>
              </ValueItemArea>
              <ValueItemArea>
                <ValueTitle>{t('CHEESE Market Cap')}</ValueTitle>
                <Value>{cmcString}</Value>
              </ValueItemArea>
            </ValueArea>
            <ValueArea>
              <ValueItemArea>
                <ValueTitle>{t('CHEESE in Circulation')}</ValueTitle>
                <Value>{circulation}</Value>
              </ValueItemArea>
              <ValueItemArea>
                <ValueTitle>{t('CHEESE Burned')}</ValueTitle>
                <Value>{burnedBalance}</Value>
              </ValueItemArea>
            </ValueArea>
          </ValueWrapper>
          </div>
        </IconCard>
        <IconCard>
          <Text fontSize="26px" bold textAlign="center" mb="20px">{t('Total Value Locked')}</Text>
          <div className='custom-card'>
          <ContentWrapper>
            <Text className='text-white' fontSize="46px">{`$${totalValue.toFixed(2)}`}</Text>
            <Text className='text-white' color="white" bold>{t('(TVL)')}</Text>
          </ContentWrapper>
          </div>
        </IconCard>
      </Flex>
      </RoundBg>
    // </Flex>
  )
}

export default Stats
