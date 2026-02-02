import { FaHome, FaUser, FaFolderOpen , FaEnvelopeOpen } from 'react-icons/fa';

import { RiBriefcase4Fill, RiGraduationCapFill } from 'react-icons/ri';

import skillsImg1 from './assets/html-logo.png';
import skillsImg2 from './assets/css-logo.png';
import skillsImg3 from './assets/javascript-logo.png';
import skillsImg4 from './assets/react-logo.png';
import skillsImg5 from './assets/bootstrap-logo.png';

import skillsImg6 from './assets/nodejs-logo.png';
import skillsImg7 from './assets/mongodb-logo.webp';

// import projectImg1 from './assets/project-1.jpg';
// import projectImg2 from './assets/project-2.jpg';
// import projectImg3 from './assets/project-3.jpg';
// import projectImg4 from './assets/project-4.jpg';
// import projectImg5 from './assets/project-5.jpg';

import Theme1 from './assets/red.png';
import Theme2 from './assets/violet.png';
import Theme3 from './assets/blue.png';
import Theme4 from './assets/magenta.png';
import Theme5 from './assets/green.png';
import Theme6 from './assets/orange.png';
import Theme7 from './assets/yellow.png';

// My Website Icons

export const links = [
    {
        name: 'Home',
        icon: <FaHome className='nav-icon' />,
        path: '/',
    },

    {
        name: 'About',
        icon: <FaUser className='nav-icon' />,
        path: '/about',
    },

    // {
    //     name: 'Portfolio',
    //     icon: <FaFolderOpen className='nav-icon' />,
    //     path: '/portfolio',
    // },

    {
        name: 'Contact',
        icon: <FaEnvelopeOpen className='nav-icon' />,
        path: '/contact',
    },
];

// My Personal Information

export const personalInfo = [
    {
        title: 'First Name : ',
        description : 'Kajal',
    },

    {
        title: 'Last Name : ',
        description : 'Patel',
    },

    {
        title: 'Age : ',
        description : '27 Years',
    },

    {
        title: 'Nationality : ',
        description : 'Indian',
    },

    {
        title: 'Freelance : ',
        description : 'Available',
    },

    {
        title: 'Address : ',
        description : 'Gujarat',
    },

    {
        title: 'Phone : ',
        description : '+918320116436',
    },

    {
        title: 'Email : ',
        description : 'kspatel6709@gmail.com',
    },

    {
        title: 'Languages : ',
        description : 'Hindi , English , Gujarati',
    },
];

// My Status

export const stats = [
    {
        no: '0',
        title: 'Years of <br> Experience',
    },

    {
        no: '0',
        title: 'Completed <br> Projects',
    },

    {
        no: '0',
        title: 'Happy <br> Customers',
    },

    {
        no: '0',
        title: 'Awards <br> Won',
    },
]; 

//  My Skills

export const skill = [
    {
        id: 1,
        img: skillsImg1,
        title: 'HTML',
        level: 'Intermediate',
        category: 'developer',
    },

    {
        id: 2,
        img: skillsImg2,
        title: 'CSS',
        level: 'Intermediate',
        category: 'developer',
    },

    {
        id: 3,
        img: skillsImg3,
        title: 'JavaScript',
        level: 'Intermediate',
        category: 'developer',
    },

    {
        id: 4,
        img: skillsImg4,
        title: 'Bootstrap',
        level: 'Intermediate',
        category: 'developer',
    },

    {
        id: 5,  
        img: skillsImg5,
        title: 'React',
        level: 'Basic',
        category: 'developer',
    },

    {
        id: 6,
        img: skillsImg6,
        title: 'Node JS',
        level: 'Basic',
        category: 'designer',
    },

    {
        id: 7,
        img: skillsImg7,
        title: 'Mongo DB',
        level: 'Basic',
        category: 'designer',
    },
];

// My Education

export const resume = [
    {
        id: 1,
        category: 'fresher',
        icon: <RiBriefcase4Fill/>,
        year: '2025 - Present',
        title: 'Web Developer',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, alias.',
    },

    {
        id: 2,
        category: 'education',
        icon: <RiGraduationCapFill/>,
        year: '2023',
        title: 'Bachelor Degree <span> GIDC Degree Engineering College </span>',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, alias.',
    },

    {
        id: 3,
        category: 'education',
        icon: <RiGraduationCapFill/>,
        year: '2020',
        title: 'Diploma Degree <span> VBP College </span>',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, alias.',
    },
];

// My Projects 

// export const portfolio = [
//     {
//         id: 1,
//         img: projectImg1,
//         title: 'abc Website',
//         description: 'Short description of the project that was carried out in this portfolio.',
//         skills: [skillsImg4,skillsImg5],
//         link: '',
//     },

//     {
//         id: 2,
//         img: projectImg2,
//         title: 'abc Website',
//         description: 'Short description of the project that was carried out in this portfolio.',
//         skills: [skillsImg6,skillsImg7],
//         link: '',
//     },

//     {
//         id: 3,
//         img: projectImg3,
//         title: 'abc Website',
//         description: 'Short description of the project that was carried out in this portfolio.',
//         skills: [skillsImg1,skillsImg2,skillsImg3],
//         link: '',
//     },

//     {
//         id: 4,
//         img: projectImg4,
//         title: 'abc Website',
//         description: 'Short description of the project that was carried out in this portfolio.',
//         skills: [skillsImg4,skillsImg5],
//         link: '',
//     },

//     {
//         id: 5,
//         img: projectImg5,
//         title: 'abc Website',
//         description: 'Short description of the project that was carried out in this portfolio.',
//         skills: [skillsImg1,skillsImg2,skillsImg3],
//         link: '',
//     },
// ];

// My Project Colors

export const themes = [
    {
        img: Theme1,
        hue: '4',
    },

    {    
        img: Theme2,
        hue: '271',
    },

    {
        img: Theme3,
        hue: '225',
    },

    {
        img: Theme4,
        hue: '339',
    },

    {
        img: Theme5,
        hue: '80',
    },

    {
        img: Theme6,
        hue: '19',
    },

    {
        img: Theme7,
        hue: '42',
    },
];