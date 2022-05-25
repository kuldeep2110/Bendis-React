import React from 'react'
import { Button } from '@pancakeswap/uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'

const DisconnectWalletButton = (props) => {
  const { t } = useTranslation()
  const { logout } = useAuth()

  return (
    <Button variant="primary" onClick={() => {logout()}} {...props}>
      {t('Disconnect')}
    </Button>
  )
}

export default DisconnectWalletButton
