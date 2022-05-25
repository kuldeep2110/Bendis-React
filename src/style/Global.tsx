import { createGlobalStyle } from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme';

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
font-family: 'Days One', sans-serif;
  }
  body,#root {
    /* background-color: ${({ theme }) => theme.colors.background}; */
    background-image: url('../img/main-bg/bg.png');
    
    background-color: transparent !important;
    background-size: cover;
    background-attachment: fixed;
    // width: 100vw;
    // height: 100vh;
    img {
      height: auto;
      max-width: 100%;
    }
  }
  .support-section{
    background: red;
  }

  .wallet-connect:hover{
    color: white;
    background: #FFA500;
  }
  .btn-gradient{
    color : #FFA500;;
    background: linear-gradient(145deg, red,green);
  }
  .bjjvsv{
    // margin-top:0 !important;
  }
  .gulbNz {
    position: relative;
    width: 100%;
    height: 100vh;
  }
.fXUJsP{
  color : black;
}
.sc-gtsrHT {
  // text-align:center;
  padding:10px;
  overflow:hidden;
}
.eAZUpK {
  flex-direction:row;
}
.sc-hGjceG {
  background-image: url('./img/main-bg/bg.png');
  
}
.ewVGsx{
  border:none !important;
}
.PNuNT{
  background: rgba(255,255,255,0) !important;
    // background: url('./img/main-bg/bg.png') !important;
    // background-image:url('./img/main-bg/bg.png');
    // background-attachment: fixed;
    // background-position: top;
  }

  /* Flip Clock :: Get the bourbon mixin from http://bourbon.io */
  /* Reset */

  .flip-clock-wrapper * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-clock-wrapper a {
    cursor: pointer;
    text-decoration: none;
    color: #ccc;
  }

  .flip-clock-wrapper a:hover {
    color: #fff;
  }

  .flip-clock-wrapper ul {
    list-style: none;
  }

  .flip-clock-wrapper.clearfix:before,
  .flip-clock-wrapper.clearfix:after {
    content: " ";
    display: table;
  }

  .flip-clock-wrapper.clearfix:after {
    clear: both;
  }

  .flip-clock-wrapper.clearfix {
    *zoom: 1;
  }

  
  /* Main */

  .flip-clock-wrapper {
    /* font: normal 11px "Helvetica Neue", Helvetica, sans-serif; */
    -webkit-user-select: none;
  }

  .flip-clock-meridium {
    background: none !important;
    box-shadow: 0 0 0 !important;
    font-size: 36px !important;
  }

  .flip-clock-meridium a {
    color: #313333;
  }

  .flip-clock-wrapper {
    text-align: center;
    position: relative;
    width: 100%;
    margin: 1em;
  }

  .flip-clock-wrapper:before,
  .flip-clock-wrapper:after {
    content: " ";
    /* 1 */
    display: table;
    /* 2 */
  }

  .flip-clock-wrapper:after {
    clear: both;
  }


  /* Skeleton */

  .flip-clock-wrapper ul {
    position: relative;
    float: left;
    margin: 3px;
    width: 60px;
    height: 90px;
    font-size: 80px;
    font-weight: bold;
    line-height: 87px;
    border-radius: 6px;
    background: #000;
  }

  .flip-clock-wrapper ul li {
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    line-height: 87px;
    text-decoration: none !important;
  }

  .flip-clock-wrapper ul li:first-child {
    z-index: 2;
  }

  .flip-clock-wrapper ul li a {
    display: block;
    height: 100%;
    -webkit-perspective: 200px;
    -moz-perspective: 200px;
    perspective: 200px;
    margin: 0 !important;
    overflow: visible !important;
    cursor: default !important;
  }

  .flip-clock-wrapper ul li a div {
    z-index: 1;
    position: absolute;
    left: 0;
    width: 100%;
    height: 50%;
    font-size: 80px;
    overflow: hidden;
    outline: 1px solid transparent;
  }

  .flip-clock-wrapper ul li a div .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  .flip-clock-wrapper ul li a div.up {
    -webkit-transform-origin: 50% 100%;
    -moz-transform-origin: 50% 100%;
    -ms-transform-origin: 50% 100%;
    -o-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    top: 0;
  }

  .flip-clock-wrapper ul li a div.up:after {
    content: "";
    position: absolute;
    top: 44px;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 3px;
    background-color: #000;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .flip-clock-wrapper ul li a div.down {
    -webkit-transform-origin: 50% 0;
    -moz-transform-origin: 50% 0;
    -ms-transform-origin: 50% 0;
    -o-transform-origin: 50% 0;
    transform-origin: 50% 0;
    bottom: 0;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .flip-clock-wrapper ul li a div div.inn {
    position: absolute;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 200%;
    color: #ccc;
    text-shadow: 0 1px 2px #000;
    text-align: center;
    background-color: #333;
    border-radius: 6px;
    font-size: 70px;
  }

  .flip-clock-wrapper ul li a div.up div.inn {
    top: 0;
  }

  .flip-clock-wrapper ul li a div.down div.inn {
    bottom: 0;
  }


  /* PLAY */

  .flip-clock-wrapper ul.play li.flip-clock-before {
    z-index: 3;
  }

  .flip-clock-wrapper .flip {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
  }

  .flip-clock-wrapper ul.play li.flip-clock-active {
    -webkit-animation: asd 0.01s 0.49s linear both;
    -moz-animation: asd 0.01s 0.49s linear both;
    animation: asd 0.01s 0.49s linear both;
    z-index: 5;
  }

  .flip-clock-divider {
    float: left;
    display: inline-block;
    position: relative;
    width: 20px;
    height: 100px;
  }

  .flip-clock-divider:first-child {
    width: 0;
  }

  .flip-clock-dot {
    display: block;
    background: #323434;
    width: 10px;
    height: 10px;
    position: absolute;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    left: 5px;
  }

  .flip-clock-divider .flip-clock-label {
    position: absolute;
    top: -1.5em;
    right: -86px;
    color: black;
    text-shadow: none;
  }

  .flip-clock-divider.minutes .flip-clock-label {
    right: -88px;
  }

  .flip-clock-divider.seconds .flip-clock-label {
    right: -100px;
  }

  .flip-clock-dot.top {
    top: 30px;
  }

  .flip-clock-dot.bottom {
    bottom: 30px;
  }

  @-webkit-keyframes asd {
    0% {
      z-index: 2;
    }
    100% {
      z-index: 4;
    }
  }

  @-moz-keyframes asd {
    0% {
      z-index: 2;
    }
    100% {
      z-index: 4;
    }
  }

  @-o-keyframes asd {
    0% {
      z-index: 2;
    }
    100% {
      z-index: 4;
    }
  }

  @keyframes asd {
    0% {
      z-index: 2;
    }
    100% {
      z-index: 4;
    }
  }

  .flip-clock-wrapper ul.play li.flip-clock-active .down {
    z-index: 2;
    -webkit-animation: turn 0.5s 0.5s linear both;
    -moz-animation: turn 0.5s 0.5s linear both;
    animation: turn 0.5s 0.5s linear both;
  }

  @-webkit-keyframes turn {
    0% {
      -webkit-transform: rotateX(90deg);
    }
    100% {
      -webkit-transform: rotateX(0deg);
    }
  }

  @-moz-keyframes turn {
    0% {
      -moz-transform: rotateX(90deg);
    }
    100% {
      -moz-transform: rotateX(0deg);
    }
  }

  @-o-keyframes turn {
    0% {
      -o-transform: rotateX(90deg);
    }
    100% {
      -o-transform: rotateX(0deg);
    }
  }

  @keyframes turn {
    0% {
      transform: rotateX(90deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }

  .flip-clock-wrapper ul.play li.flip-clock-before .up {
    z-index: 2;
    -webkit-animation: turn2 0.5s linear both;
    -moz-animation: turn2 0.5s linear both;
    animation: turn2 0.5s linear both;
  }

  @-webkit-keyframes turn2 {
    0% {
      -webkit-transform: rotateX(0deg);
    }
    100% {
      -webkit-transform: rotateX(-90deg);
    }
  }

  @-moz-keyframes turn2 {
    0% {
      -moz-transform: rotateX(0deg);
    }
    100% {
      -moz-transform: rotateX(-90deg);
    }
  }

  @-o-keyframes turn2 {
    0% {
      -o-transform: rotateX(0deg);
    }
    100% {
      -o-transform: rotateX(-90deg);
    }
  }

  @keyframes turn2 {
    0% {
      transform: rotateX(0deg);
    }
    100% {
      transform: rotateX(-90deg);
    }
  }

  .flip-clock-wrapper ul li.flip-clock-active {
    z-index: 3;
  }


  /* SHADOW */

  .flip-clock-wrapper ul.play li.flip-clock-before .up .shadow {
    background: -moz-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, black 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0.1)), color-stop(100%, black));
    background: linear, top, rgba(0, 0, 0, 0.1) 0%, black 100%;
    background: -o-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, black 100%);
    background: -ms-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, black 100%);
    background: linear, to bottom, rgba(0, 0, 0, 0.1) 0%, black 100%;
    -webkit-animation: show 0.5s linear both;
    -moz-animation: show 0.5s linear both;
    animation: show 0.5s linear both;
  }

  .flip-clock-wrapper ul.play li.flip-clock-active .up .shadow {
    background: -moz-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, black 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0.1)), color-stop(100%, black));
    background: linear, top, rgba(0, 0, 0, 0.1) 0%, black 100%;
    background: -o-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, black 100%);
    background: -ms-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, black 100%);
    background: linear, to bottom, rgba(0, 0, 0, 0.1) 0%, black 100%;
    -webkit-animation: hide 0.5s 0.3s linear both;
    -moz-animation: hide 0.5s 0.3s linear both;
    animation: hide 0.5s 0.3s linear both;
  }


  /*DOWN*/

  .flip-clock-wrapper ul.play li.flip-clock-before .down .shadow {
    background: -moz-linear-gradient(top, black 0%, rgba(0, 0, 0, 0.1) 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, black), color-stop(100%, rgba(0, 0, 0, 0.1)));
    background: linear, top, black 0%, rgba(0, 0, 0, 0.1) 100%;
    background: -o-linear-gradient(top, black 0%, rgba(0, 0, 0, 0.1) 100%);
    background: -ms-linear-gradient(top, black 0%, rgba(0, 0, 0, 0.1) 100%);
    background: linear, to bottom, black 0%, rgba(0, 0, 0, 0.1) 100%;
    -webkit-animation: show 0.5s linear both;
    -moz-animation: show 0.5s linear both;
    animation: show 0.5s linear both;
  }

  .flip-clock-wrapper ul.play li.flip-clock-active .down .shadow {
    background: -moz-linear-gradient(top, black 0%, rgba(0, 0, 0, 0.1) 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, black), color-stop(100%, rgba(0, 0, 0, 0.1)));
    background: linear, top, black 0%, rgba(0, 0, 0, 0.1) 100%;
    background: -o-linear-gradient(top, black 0%, rgba(0, 0, 0, 0.1) 100%);
    background: -ms-linear-gradient(top, black 0%, rgba(0, 0, 0, 0.1) 100%);
    background: linear, to bottom, black 0%, rgba(0, 0, 0, 0.1) 100%;
    -webkit-animation: hide 0.5s 0.3s linear both;
    -moz-animation: hide 0.5s 0.3s linear both;
    animation: hide 0.5s 0.2s linear both;
  }

  @-webkit-keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes hide {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-moz-keyframes hide {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-o-keyframes hide {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes hide {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .flip-clock-wrapper ul {
    width: 46px;
    border: 0px;
    position: relative;
  }

  .flip-clock-wrapper ul::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 9;
    border-radius: 3px;
  }

  .flip-clock-wrapper ul li a div div.inn {
    font-size: 60px;
    font-weight: 700;
    color: #fff;
    text-align: center;
    background-color: #2A2D3A;
  }

  .flip-clock-divider .flip-clock-label {
    bottom: -25px;
    right: -88px;
    top: auto;
    font-size: 20px;
    line-height: 30px;
    font-weight: 300 !important;
    color: #ffffff;
    letter-spacing: 2px;
  }

  .flip-clock-divider.minutes .flip-clock-label {
    right: -104px;
  }

  .flip-clock-divider.hours .flip-clock-label {
    right: -94px;
  }

  .flip-clock-dot {
    background: #ffffff;
  }
  .ihbXSi{
    color: black
  }
  .dlRFQZ,.ieUALq,.dONJmv,.dlmZQz{
    border: none !important;
  }

  .kHNdbu{
    box-shadow: none;
    border: 2px solid #832f02;
    background: #832f02;
  }
  .kHNdbu:hover{
    color: #832f02;
    background: transparent;
    
  }
  .hhuJqp{
    background: #FFA500;
    color: white;
    border: 2px solid #FFA500;
  }
  .GgHIt,.QAFxA,.hhuJqp,.ieUALq{
    box-shadow: none;

  }
  .QAFxA{
    border: 2px solid #FFA500;

  }
  .hhuJqp:hover,.QAFxA:hover{
    background: transparent;
    color: #FFA500;
  }
  
  
  @media screen and (min-width: 968px){
    .hciSNz{
      margin-right: 0;
      margin-left: 40px
    }
.iPuIzJ {
    padding-top: 0px !important ;
    padding-bottom: 0px !important;
}}


.pb-100{
  padding-bottom: 100px;
}
.h-255{
  height: 255px;
}
.btn-custom.rounded-pill:hover{
  color: white;
}
.heading-1 {
  font-size: 2.3em;
}

.text-brown {
  color: #e4800e;
}

.rounded-pill {
  /* font-size: 1.2em; */
}
.round-border{
  border-radius: 2em;
}
.bg-gradient{
  background: rgb(255,169,0);
}
.btn-fill-dark{
  background-color: #832f02;
  border-color: #832f02;
  color: white;
}

.btn-fill-dark:hover{
  background: transparent;
  border-color: #832f02;
  color: #832f02;
}

.text-dark-custom{
  color:#832f02;
}
.small-heading{
  font-size: 0.9em;
}
.text-custom-dark{
  color: #1a1710;
}
/* .btn-fill.rounded-pill{
  background-color: #e4800e;
}
.btn-fill.rounded-pill:hover{
  background-color: transparent;
  color: #e4800e;
} */
.bg-light-custom{
  background-color: #ffecb9b0;
}
.p-img-top-half{
  left: 50%;
  top: -50%;
  transform: translate(-50%, 40%);
}
.navbar {
  font-size: 15px;
  font-weight: 400;
}

.btn-custom {
  border-color: #e4800e;
  border-width: 2px;
  color: #e4800e;
}

.btn-fill {
  background: linear-gradient(145deg, #ffa900, #e17c0f);
  background-color: #e4800e;
  color: white;
  border-width: 0;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  padding-top: 8px;
  padding-bottom: 8px;
}

.btn-custom:hover {
  background-color: #e4800e;
  border-color: #e4800e;
  /* border-color: transparent; */
  /* background: linear-gradient(145deg, #e17c0f, #ffa900); */
}

.btn-fill:hover {
  background: linear-gradient(145deg, #e17c0f, #ffa900);
  /* background-color: transparent; */
  /* color: #e4800e; */
  transition: all 500ms linear;
}
.ecosystem-heading{
  font-size: 34px;
  padding-bottom: 20px;
  font-weight: 600;
  color: #FFA500;
}
p{
  line-height: 1.5 !important;
}
.p-img-top-half{
  left: 50%;
  bottom: 100%;
  transform: translate(-50%, 50%);
}
.bg-footer-light{
  background-color: #ecb22e;
}
.bg-footer-extra-light{
  background-color: #f6bd3d;
}

ul {
  list-style: none;
  padding: 0;
}
ul li{
  padding: 5px 0;
  color: rgba(22, 22, 22, 0.7);
}
.pt-100{
  padding-top: 100px;
}
.footer-custom-list li::before{
  content: '';
  padding: 0 0 0 10px;
  border-left: 3px solid #f6bd3d;
}
.hCrLsy{
  // background-image: url('../img/main-bg/bg.png');
  background-color: rgba(255,255,255,0);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
}

.mb-ve-5{
  margin-bottom: -5px;
}


.kAPPt{
  display: none
}
.cLLcpG,.jBvRWV,.dlmZQz,.kOsGtq,.brLuB{
  color: black;
}
.font-size-inherit{
  font-size: 32px
}

.fuOVcW,.ciKZJi,.cvDdH,.dnMnxo,.fCsmtE,.gdPppk .sc-eirqVv,.gzzRAq,.kaKZrD,.cDfGHV{
  background: #ffecb9b0 !important;
}
.bixKgQ,.PAXaG,.ieUALq,.jKDvmV:hover,.dlmZQz{
  background: #FFA500;
}
.fPfbKA,.RKbQY,.bixKgQ,.PAXaG,.dFyJHC,.ljcIQf,.dlmZQz{
  color: black
}
.kaKZrD > div:not(:last-child){
  border: none
}
.dHZGfk{
  color: #FFA500
}
.WGgrR,.idHymZ,.fLfDsz,.foMpLk{
  background: #ffd680 !important;
}
.fHvScs,.hDtHkw,.kZpvvK{
  fill: black
}
.dONJmv{
  padding-top:10px !important;
}
.bvVJGt {
  padding: 5px 6px;
  background: #FFA500;
  border-radius: 50%;
}
.xnrGo,.kHNdbu,.jmPRor{
  height: 38px
}
.eETBfs,.dXLwvl{
  background: rgba(255,255,255,0  ) !important;
}
`

export default GlobalStyle