import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { parseUnits } from 'ethers/lib/utils'
import { ethers } from 'ethers'
import { Card, CardBody, Text, Heading, BaseLayout, Button, LinkExternal, Progress, Flex, Image, useModal } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { Launch, LaunchStatus } from 'config/constants/types'
import { usePresale } from 'hooks/useContract'
import { useFetchLaunch, useLaunch } from 'state/launch/hooks'
import { getBscScanLink } from 'utils'
import truncateHash from 'utils/truncateHash'
import { getAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import ConnectWalletButton from 'components/ConnectWalletButton'
import ContributeModal from './ContributeModal'
import LaunchTime from './LaunchTime'
import useContribute from '../../hooks/useContribute'
import useClaim from '../../hooks/useClaim'
import useRefund from '../../hooks/useRefund'

const PresaleCardWrapper = styled(Card)`
  width: 100%;
  min-height: 880px;
  margin: 0 auto;
  padding: 32px 0;
`

const TokenImage = styled.img`
  margin-right: 20px;
`

const StyledProgress = styled(Progress)`
  margin-top: 20px;
  width: 100%;
`

const ExternalLink = styled(LinkExternal)`
  color: ${({ theme }) => theme.colors.text};
  font-weight: normal;
  font-size: 20px;

  svg {
    fill: ${({ theme }) => theme.colors.text};
  }
`

const StyledBox = styled(Flex)`
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  padding: 15px;
  margin-top: 20px;
`

export interface PresaleCardProps {
  launch: Launch
}

const getValueAsEthersBn = (amount: string) => {
  const valueAsFloat = parseFloat(amount)
  return Number.isNaN(valueAsFloat) ? ethers.BigNumber.from(0) : parseUnits(amount)
}

const getStatus = (currentTime: number, startTime: number, endTime: number): LaunchStatus | null => {
  if (currentTime < startTime) {
    return 'coming_soon'
  }

  if (currentTime >= startTime && currentTime <= endTime) {
    return 'live'
  }

  if (currentTime > endTime) {
    return 'finished'
  }

  return null
}

const PresaleCard: React.FC<PresaleCardProps> = ({launch}) => {
  const { t } = useTranslation()
  const { account, library } = useWeb3React()
  const {id, address, isActive, symbol, name, currency, presaleAddress, tokenDecimals, maxContribution, minContribution, soft, hard, price} = launch
  const presaleContract = usePresale()
  const { onContribute } = useContribute()
  const { onClaim } = useClaim()
  const { onRefund } = useRefund()
  const { launch: launchData } = useLaunch()
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState(null)
  const [progress, setProgress] = useState(0)
  const [softPercent, setSoftPercent] = useState(0)
  const [hardPercent, setHardPercent] = useState(0)
  const [softCapReached, setSoftCapReached] = useState(false)
  const [finalized, setFinalized] = useState(false)
  const [secondsStart, setSecondsStart] = useState(0)
  const [secondsEnd, setSecondsEnd] = useState(0)
  const [contribution, setContribution] = useState(0)

  useFetchLaunch(account)

  useEffect(() => {
    const currentTime = Math.round(Date.now() / 1000)
    if (launchData) {
      setStatus(getStatus(currentTime, launchData.start, launchData.end))
      setProgress(currentTime > launchData.start ? ((currentTime - launchData.start) / (launchData.end - launchData.start)) * 100 : ((currentTime - launchData.end) / (launchData.start - launchData.end)) * 100)
      setSoftPercent(launchData.balance ? getBalanceNumber(new BigNumber(launchData.balance.toString()).div(launch.soft / 100)) : 0)
      setHardPercent(launchData.balance ? getBalanceNumber(new BigNumber(launchData.balance.toString()).div(launch.hard / 100)) : 0)
      setSecondsStart(launchData.start)
      setSecondsEnd(launchData.end)
      setLoading(false)
      setSoftCapReached(launchData.softCapReached)
      setFinalized(launchData.finalized)    
      setContribution(launchData.contribution)
    }
  }, [launchData, launch])

  const isFinished = status === 'finished' || finalized

  const handleContribute = async (amount: string) => {
    await onContribute(amount)
  }

  const handleClaim = async () => {
    await onClaim()
  }

  const handleRefund = async () => {
    await onRefund()
  }

  const [onContributeModal] = useModal(
    <ContributeModal
      onConfirm={handleContribute}
      tokenName="BNB"
    />,
  )

  const renderActionButton = () => {
    return isFinished ? (
      (
        softCapReached ?
          <Button onClick={handleClaim} mt="10px" width="200px" variant="secondary" >
            {t('Claim')}
          </Button>
          :
          <Button onClick={handleRefund} mt="10px" width="200px" variant="secondary" >
            {t('Refund')}
          </Button>
      )
    ) : (
      <Button onClick={onContributeModal} mt="10px" width="200px" variant="secondary" >
        {t('Contribute')}
      </Button>
    )
  }

  return (
    <PresaleCardWrapper>
      <CardBody>
        <Flex alignItems="center" mb="20px">
          <TokenImage src={`/images/launch/${id}.svg`} alt={id} width="80px" height="80px" />
          <Heading scale="xl">{t(`${symbol}`)}</Heading>
        </Flex>
        <Flex flexDirection="column">
          <StyledProgress primaryStep={progress}/>
          <Flex justifyContent="center" mt="5px">
            <LaunchTime isLoading={loading} status={status} secondsUntilStart={secondsStart} secondsUntilEnd={secondsEnd} />
          </Flex>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between" mt="30px">
          <Text fontSize="20px">{t('Name')}</Text>
          <Text fontSize="20px">{name}</Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <Text fontSize="20px">{t('Symbol')}</Text>
          <Text fontSize="20px">{symbol}</Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <Text fontSize="20px">{t('Decimals')}</Text>
          <Text fontSize="20px">{tokenDecimals}</Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <Text fontSize="20px">{t('Token Address')}</Text>
          <ExternalLink href={getBscScanLink(getAddress(address), 'address')}>{truncateHash(getAddress(address))}</ExternalLink>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <Text fontSize="20px">{t('Presale Price')}</Text>
          <Text fontSize="20px">{t(`${price}$`)}</Text>
        </Flex>
        <StyledBox>
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize="20px">{t('Min Contribution')}</Text>
            <Text fontSize="20px">{t(`${minContribution} BNB`)}</Text>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize="20px">{t('Max Contribution')}</Text>
            <Text fontSize="20px">{t(`${maxContribution} BNB`)}</Text>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize="20px">{t('Soft Cap')}</Text>
            <Text fontSize="20px">{t(`${soft} BNB`)}</Text>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between" mb="10px">
            <Text fontSize="20px">{t('Hard Cap')}</Text>
            <Text fontSize="20px">{t(`${hard} BNB`)}</Text>
          </Flex>
          <StyledProgress primaryStep={hardPercent} secondaryStep={softPercent}/>
          <Flex alignItems="center" justifyContent="space-between" mt="10px">
            <Text fontSize="20px">{t('Your Contribution')}</Text>
            <Text fontSize="20px">{t(`${contribution ? getBalanceNumber(new BigNumber(contribution.toString())) : 0} BNB`)}</Text>
          </Flex>
          <Flex alignItems="center" justifyContent="center" mt="10px">
            {!account ? <ConnectWalletButton mt="10px" width="200px" variant="secondary" /> : renderActionButton()}
          </Flex>
        </StyledBox>
      </CardBody>
    </PresaleCardWrapper>
  )
}

export default PresaleCard