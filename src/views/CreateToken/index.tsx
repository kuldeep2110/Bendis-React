import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Card, CardBody, Checkbox, Heading, Flex, Input, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/Layout/Page'
import PageHeader from 'components/PageHeader'

const Launch: React.FC = () => {
  const { t } = useTranslation()
  const [antibot, setAntibot] = useState(false)

  return (
    <>
      <Page>
        <PageHeader>
          <Flex justifyContent="space-between" flexDirection={['column', null, null, 'row']}>
            <Flex flex="1" flexDirection="column" mr={['8px', 0]}>
              <Heading as="h1" scale="xxl" color="textSubtle" mb="24px">
                {t('Create Token')}
              </Heading>
              <Heading scale="lg" color="textSubtle">
                {t(`User can create any BabyToken accoring to their requirements here !!!`)}
              </Heading>
              <Heading scale="lg" color="textSubtle">
                {t(`User will consume 0.2BNB for creating the token`)}
              </Heading>
            </Flex>
          </Flex>
        </PageHeader>
        <Card mt="30px">
          <CardBody>
            <Flex flexDirection="column" justifyContent="center" mb="20px">
              <Text>{t('Name')}</Text>
              <Input placeholder="Ex: Binance"/>
            </Flex>
            <Flex flexDirection="column" justifyContent="center" mb="20px">
              <Text>{t('Symbol')}</Text>
              <Input placeholder="Ex: BNB"/>
            </Flex>
            <Flex flexDirection="column" justifyContent="center" mb="20px">
              <Text>{t('Total supply')}</Text>
              <Input type="number" placeholder="Ex: 100000000000"/>
            </Flex>
            <Flex flexDirection="row" justifyContent="space-between" mb="20px" width="100%">
              <Flex flexDirection="column" justifyContent="center" width="49%">
                <Text>{t('Reward token')}</Text>
                <Input placeholder="Ex: 0x"/>
              </Flex>
              <Flex flexDirection="column" justifyContent="center" width="49%">
                <Text>{t('Minimum token balance for dividens')}</Text>
                <Input placeholder="Ex: 1000000000"/>
              </Flex>
            </Flex>
            <Flex flexDirection="row" justifyContent="space-between" mb="20px" width="100%">
              <Flex flexDirection="column" justifyContent="center" width="49%">
                <Text>{t('Token reward fee (%)')}</Text>
                <Input type="number" placeholder="1 - 100"/>
              </Flex>
              <Flex flexDirection="column" justifyContent="center" width="49%">
                <Text>{t('Auto add liquidity (%)')}</Text>
                <Input type="number" placeholder="1 - 100"/>
              </Flex>
            </Flex>
            <Flex flexDirection="row" justifyContent="space-between" mb="20px" width="100%">
              <Flex flexDirection="column" justifyContent="center" width="49%">
                <Text>{t('Marketing fee (%)')}</Text>
                <Input type="number" placeholder="1 - 100"/>
              </Flex>
              <Flex flexDirection="column" justifyContent="center" width="49%">
                <Text>{t('Marketing wallet')}</Text>
                <Input placeholder="Ex: 0x"/>
              </Flex>
            </Flex>
            <Flex justifyContent="center" width="100%" mt="30px">
              <Button>{t('Create Token')}</Button>
            </Flex>
          </CardBody>
        </Card>
      </Page>
    </>
  )
}

export default Launch
