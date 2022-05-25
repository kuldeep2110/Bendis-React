import React from 'react'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import Hero from './components/Hero'
import { searchSectionData, financeSectionData, tokenomicsSectionData, globeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'
import income from '../../img/images/income.png';
import ecosystem from '../../img/images/ecosystem.png';
import footerWaves from '../../img/images/footer-img.png';
import footerLogo from '../../img/images/footer_logo.png';
import customIcon from '../../img/images/custom_icon_dark.png';


const StyledSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 24px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '1320px' }
  const SupportSection = { background: 'rgba(255,236,185,.7)', borderRadius: '2em' }

  return (
    <>
      <PageMeta />
      <StyledSection
        innerProps={{ style: { margin: '0', width: '100%', maxWidth: '1320px'} }}
        index={2}
        hasCurvedDivider={false}
      >
        <Hero />
      </StyledSection>
      <StyledSection
        innerProps={{ style: { margin: '0', width: '100%', maxWidth: '1320px' } }}
        index={2}
        hasCurvedDivider={false}
      >
        <MetricsSection />
      </StyledSection>
      <StyledSection
        innerProps={{ style: HomeSectionContainerStyles }}
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...searchSectionData} />
      </StyledSection>
      <StyledSection
        innerProps={{ style: SupportSection }}
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...financeSectionData} />
      </StyledSection>
      <StyledSection
        innerProps={{ style: HomeSectionContainerStyles }}
        index={2}
        hasCurvedDivider={false}
      >
        {/* <SalesSection {...tokenomicsSectionData}>
          <h1>Hello</h1>
        </SalesSection> */}
        <div className='pt-5 d-flex align-items-center pb-100 container mt-5'>
                <div className='bg-light-custom round-border me-2 text-center position-relative w-50'>
                    <div className='w-50 position-absolute p-img-top-half'> 
                        <img className='w-50' src={income} alt="" />
                    </div>   
                    <div className='p-5 mt-5'>
                        <h2 className='ecosystem-heading'>Passive Income With HAM</h2>
                        <p className='line-height-1.5'>HamsterSwap makes it easy to make your HAMSTERS work for you.</p>
                        <a href="https://swaphamster.io/launch"><button className="btn ps-4 pe-4 btn-custom rounded-pill ms-1 me-1 mt-4 btn-fill" type="submit">Read More</button></a>
                    </div>
                                     
                </div>
                <div className='bg-light-custom round-border ms-2 text-center position-relative w-50'>
                    <div className='w-50 position-absolute p-img-top-half'> 
                        <img className='w-50' src={ecosystem} alt="" />
                    </div>   
                    <div className='p-5 mt-5'>
                        <h2 className='ecosystem-heading'>Ecosystem</h2>
                        <p className='line-height-1.5'>HamsterSwap is first stage of Hamster Ecosystem. Hamster is the first token to create its own ecosystem on the BSC network.</p>
                        <button className="btn ps-4 pe-4 btn-custom rounded-pill ms-1 me-1 mt-3 btn-fill" type="submit"><a href="https://swaphamster.io/launch">Read More</a></button>
                    </div>
                                     
                </div>
            </div>
        {/* <SalesSection {...globeSectionData}  /> */}
      </StyledSection>
      {/* <StyledSection
        innerProps={{ style: HomeSectionContainerStyles }}
        index={2}
        hasCurvedDivider={false}>
        
        <SalesSection {...globeSectionData}  />
      </StyledSection> */}
                <div className='mt-5 position-relative mb-ve-5'> 
                    <img className='w-100' src={footerWaves} alt="" />
                    <div className='text-center w-25 position-absolute p-img-top-half'>
                        <img className='w-50' src={footerLogo}  alt="" />
                    </div>
                </div>
                <div className=' bg-footer-light pt-100'>
                    <div className='d-flex pt-5 pb-5 container justify-content-between'>
                        <div>
                            <h2 className='font-size-inherit'>About</h2>
                            <img src={customIcon} className='pt-2 pb-2' alt="" />
                            <ul className='footer-custom-list'>
                                <li className='pt-1 pb-1'>
                                    <a href="https://swaphamster.io/#">Contact</a>
                                    
                                </li>
                                <li  className='pt-2 pb-2'><a href="https://www.certik.com/projects/swaphamster-io">Certik Audit</a></li>
                                <li  className='pt-2 pb-2'><a href="https://swaphamster.io/#">Community</a></li>
                                <li  className='pt-2 pb-2'><a href="https://swaphamster.io/#">Cheese Token</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='font-size-inherit'>Help</h2>
                            <img src={customIcon} className='pt-2 pb-2' alt="" />
                            <ul className='footer-custom-list'>
                                <li  className='pt-2 pb-2'>
                                    <a href="https://swaphamster.io/#">Customer Support</a>
                                    
                                </li>
                                <li  className='pt-2 pb-2'><a href="https://www.certik.com/projects/swaphamster-io">Troubleshooting</a></li>
                                <li  className='pt-2 pb-2'><a href="https://swaphamster.io/#">Guides</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='font-size-inherit'>Developers</h2>
                            <img src={customIcon} className='pt-2 pb-2' alt="" />
                            <ul className='footer-custom-list'>
                                <li  className='pt-2 pb-2'>
                                    <a href="https://github.com/Hamstersfinance">Github</a>
                                    
                                </li>
                                <li  className='pt-2 pb-2'><a href="https://www.certik.com/projects/swaphamster-io">Documentation</a></li>
                                <li  className='pt-2 pb-2'><a href="https://swaphamster.io/#">Bug Bounty</a></li>
                                <li  className='pt-2 pb-2'><a href="https://swaphamster.io/#">Audits</a></li>
                                <li  className='pt-2 pb-2'><a href="https://swaphamster.io/#">Careers</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='bg-footer-extra-light'>
                    <div className='container d-flex justify-content-between align-items-center'>
                        {/* <div className='pt-2'> */}
                        <p className='pt-4' >Hamster 2022. All Rights Reserved</p>
                        {/* </div> */}
                        <div className='icons'>
                          <a href="https://www.instagram.com/hamster_coin/"><span className='d-none'>s</span><i className="px-2 bi bi-instagram" /></a>
                          <a href="https://twitter.com/_hamster_coin"><span className='d-none'>s</span><i className="px-2 bi bi-twitter" /></a>
                          <a href="https://t.me/Cheese_Token"><span className='d-none'>s</span><i className="px-2 bi bi-telegram" /></a>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Home
