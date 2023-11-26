import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import masks from './masks';
import accordions from './accordions';
import { Modal } from "./Modal";
import tabs from './tabs';
import menu from './menu';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import fancybox from './fancybox';

import headerSetting from './headerSetting';
import dropMenuControl from './dropMenuControl';
import mobileMenuOpen from './mobileMenuOpen';
import mobileMenuSwiper from './mobileMenuSwiper';
import selectContol from './selectContol';
import calculationSwiper from './calculationSwiper';
import projectsSwiper from './projectsSwiper';
import reviewsSwiper from './reviewsSwiper';
import inputFileStyling from './inputFileStyling';
import stagesListSwiper from './stagesListSwiper';
import expandReviewText from './expandReviewText';
import productionSwiper from './productionSwiper';
import setHeaderPadding from './setHeaderPadding';
import certificatesSwiper from './certificatesSwiper';
import articleSwipers from './articleSwipers';
import pricesTabControl from './pricesTabControl';
import setActiveArticle from './setActiveArticle';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
  detectTouch();
  setScrollbarWidth();
  masks();
  validation();
  // anchorLinks();
  accordions();
  tabs();
  menu();
  fancybox();

  headerSetting();
  dropMenuControl();
  mobileMenuOpen();
  mobileMenuSwiper();
  selectContol();
  calculationSwiper();
  projectsSwiper();
  reviewsSwiper();
  inputFileStyling();
  stagesListSwiper();
  expandReviewText();
  productionSwiper();
  setHeaderPadding();
  certificatesSwiper();
  articleSwipers();
  pricesTabControl();
  // checkOverflow();
  setActiveArticle();

  const modal = new Modal({
    isOpen: (modal) => {
    },
    isClose: (modal) => {
    },
  });
});

window.addEventListener('load', function () {
  document.body.classList.add('loaded');
});
