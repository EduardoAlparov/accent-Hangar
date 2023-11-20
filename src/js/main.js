import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import masks from './masks';
import validation from './validation';
import anchorLinks from './anchorLinks';
import accordions from './accordions';
import { Modal } from "./Modal";
import tabs from './tabs';
import menu from './menu';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    detectTouch();
    setScrollbarWidth();
    masks();
    validation();
    anchorLinks();
    accordions();
    tabs();
    menu();
    
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

    const modal = new Modal({
        isOpen: (modal) => {
        },
        isClose: (modal) => {
        },
    });
});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
