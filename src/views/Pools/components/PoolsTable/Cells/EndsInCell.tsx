import React from 'react'
import styled from 'styled-components'
import { Flex, Link, Skeleton, Text, TimerIcon } from '@pancakeswap/uikit'
import { getBscScanLink } from 'utils'
import { DeserializedPool } from 'state/types'
import { useBlock } from 'state/block/hooks'
import Balance from 'components/Balance'
import { useTranslation } from 'contexts/Localization'
import { getPoolBlockInfo } from 'views/Pools/helpers'
import BaseCell, { CellContent } from './BaseCell'

interface FinishCellProps {
  pool: DeserializedPool
}

const StyledCell = styled(BaseCell)`
  flex: 2 0 100px;
`

const Layout = styled(CellContent)`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
  padding: 20px;
  border-radius: 10px;
  align-items: center;
`

const EndsInCell: React.FC<FinishCellProps> = ({ pool }) => {
  const { sousId, totalStaked, startBlock, endBlock, isFinished } = pool
  const { currentBlock } = useBlock()
  const { t } = useTranslation()

  const { shouldShowBlockCountdown, blocksUntilStart, blocksRemaining, hasPoolStarted, blocksToDisplay } =
    getPoolBlockInfo(pool, currentBlock)

  const isCakePool = sousId === 0

  const renderBlocks = shouldShowBlockCountdown ? (
    <Flex alignItems="center">
      <Flex flex="1.3">
        <Balance fontSize="16px" value={blocksToDisplay} decimals={0} color="textSubtle" />
        <Text ml="4px" textTransform="lowercase" color="textSubtle" >
          {t('Blocks')}
        </Text>
      </Flex>
      <Flex flex="1">
        <Link
          external
          href={getBscScanLink(hasPoolStarted ? endBlock : startBlock, 'countdown')}
          onClick={(e) => e.stopPropagation()}
          color="textSubtle"
        >
          <TimerIcon ml="4px" />
        </Link>
      </Flex>
    </Flex>
  ) : (
    <Text color="textSubtle" >-</Text>
  )

  // A bit hacky way to determine if public data is loading relying on totalStaked
  // Opted to go for this since we don't really need a separate publicDataLoaded flag
  // anywhere else
  const isLoadingPublicData = !totalStaked.gt(0) || !currentBlock || (!blocksRemaining && !blocksUntilStart)
  const showLoading = isLoadingPublicData && !isCakePool && !isFinished
  return (
    <StyledCell role="cell">
      <Layout>
        {showLoading ? <Skeleton width="80px" height="16px" /> : renderBlocks}
        <Text fontSize="12px" color="textSubtle" textAlign="left" mt="10px">
          {hasPoolStarted || !shouldShowBlockCountdown ? t('Ends in') : t('Starts in')}
        </Text>
      </Layout>
    </StyledCell>
  )
}

export default EndsInCell
