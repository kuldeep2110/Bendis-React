import React, { useMemo } from 'react'
import { Flex, Skeleton, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import BigNumber from 'bignumber.js'
import Balance from 'components/Balance'
import { DeserializedPool } from 'state/types'
import { useCakeVault } from 'state/pools/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import BaseCell, { CellContent } from './BaseCell'

const Layout = styled(CellContent)`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
  padding: 20px;
  border-radius: 10px;
  align-items: center;
`

interface TotalStakedCellProps {
  pool: DeserializedPool
}

const StyledCell = styled(BaseCell)`
  flex: 2 0 100px;
`

const TotalStakedCell: React.FC<TotalStakedCellProps> = ({ pool }) => {
  const { t } = useTranslation()
  const { sousId, stakingToken, totalStaked, isAutoVault } = pool
  const { totalCakeInVault } = useCakeVault()

  const isManualCakePool = sousId === 0

  const totalStakedBalance = useMemo(() => {
    if (isAutoVault) {
      return getBalanceNumber(totalCakeInVault, stakingToken.decimals)
    }
    if (isManualCakePool) {
      const manualCakeTotalMinusAutoVault = new BigNumber(totalStaked).minus(totalCakeInVault)
      return getBalanceNumber(manualCakeTotalMinusAutoVault, stakingToken.decimals)
    }
    return getBalanceNumber(totalStaked, stakingToken.decimals)
  }, [isAutoVault, totalCakeInVault, isManualCakePool, totalStaked, stakingToken.decimals])

  return (
    <StyledCell role="cell">
      <Layout>
        {totalStaked && totalStaked.gte(0) ? (
          <Flex height="20px" alignItems="center">
            <Balance fontSize="16px" value={totalStakedBalance} decimals={0} unit={` ${stakingToken.symbol}`} color="textSubtle" />
          </Flex>
        ) : (
          <Skeleton width="80px" height="16px" />
        )}
        <Text fontSize="12px" color="textSubtle" textAlign="left" mt="10px">
          {t('Total staked')}
        </Text>
      </Layout>
    </StyledCell>
  )
}

export default TotalStakedCell
