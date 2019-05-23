/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    SiteData.js

    Store for News, Examples, Tutorials, etc. for Wick Editor
*/

import defaultWorld from '../Images/Tutorials/testworld.svg';
import test2 from '../Images/Tutorials/testworld3.svg';
import comingsoon from '../Images/Misc/comingsoon.png';
import coreyemery from '../Images/People/CoreyEmery.svg';
import lucadamasco from '../Images/People/LucaDamasco.svg';
import zachrispoli from '../Images/People/ZachRispoli.svg';
import community1 from '../Images/Projects/community1.png';
import community4 from '../Images/Projects/community4.png';
import community5 from '../Images/Projects/community5.png';

// Tutorial Images
import img_gettingStartedWithAnimation from '../Images/Tutorials/gettingStartedWithAnimation.png';
import img_makingInteractiveProjects from '../Images/Tutorials/makingInteractiveProjects.png'

export const examples = [
    {
        title: "Follow Mouse",
        exampleName: "followMouse",
        body: "See how you can get your character to follow your mouse movements around the screen!",
        image: defaultWorld,
        number: "Example 1"
    },
    {
        title: "Multiple Rooms",
        exampleName: "multipleRooms",
        body: "Learn how to create a project with multiple rooms for a point and click game!",
        image: defaultWorld,
        number: "Example 2"
    },
    {
        title: "Drag and Drop",
        exampleName: "dragAndDrop",
        body: "Learn how to drag characters and items around the screen.",
        image: defaultWorld,
        number: "Example 3"
    },
    {
        title: "PlayingTheTimeline",
        exampleName: "playingTheTimeline",
        body: "Learn how to control the main timeline with a button.",
        image: defaultWorld,
        number: "Example 4"
    },
    {
        title: "Playing Clips",
        exampleName: "playingClips",
        body: "Learn how to control the timeline of a clip.",
        image: defaultWorld,
        number: "Example 5"
    },
    {
        title: "Popups",
        exampleName: "popups",
        body: "Learn how to make a popup in an interactive game.",
        image: defaultWorld,
        number: "Example 6"
    },
    {
        title: "More Examples Coming Soon!",
        body: "Check back soon for more awesome Wick Editor Examples!",
        image: comingsoon,
        number: "Example 7",
        disable: true, 
    },
];

export const tutorials = [
    {
        title: "Editor 1.0 | Getting Started with Animation",
        body: "Learn how to use the new Wick Editor 1.0 to create animations and navigate the new interface!",
        body_extended: "Learn how to use the new Wick Editor 1.0 to create animations and navigate the new interface! Learn how the new toolbar, inspector and timeline work, and see our new settings menu.",
        tags: ["Intro", "Beginner", "Animation"],
        image: img_gettingStartedWithAnimation,
        embed: "https://youtube.com/embed/pAsrXT8KIrI",
        number: "1.0 Tutorial 1"
    },
    {
        title: "Editor 1.0 | Making Interactive Projects",
        body: "In this Wick Editor 1.0 tutorial we create an interactive point and click game and learn about scripting!",
        body_extended: "Learn how to use the new Wick Editor 1.0 to create an interactive point and click game. We'll learn about the tab coding system, how to name a frame, gotoAndStop, and the single-tab coding system.",
        tags: ["Intro", "Beginner", "Games"],
        image: img_makingInteractiveProjects,
        embed: "https://youtube.com/embed/cvANBF43KsY",
        number: "1.0 Tutorial 2"
    },
    {
        title: "Editor 1.0 | More Tutorials Coming Soon!",
        body: "Check back soon for more awesome Wick Editor Tutorials!",
        body_extended: "This is a test, this is only a test.",
        tags: ["Coming", "Soon"],
        image: defaultWorld,
        embed: "https://www.youtube.com/embed/bhN2VxyWJiU",
        number: "1.0 Tutorial 3",
        disabled: true
    },
    {
        title: "Legacy Editor | Getting Started",
        body: "Legacy Editor | Learn how to make a basic animation, how to create an interactive project, and how to save a project to your computer.",
        body_extended: "In this Legacy tutorial, learn how to use the legacy editor to create a basic animation, create a basic interactive project, and how to save that project to your computer.",
        tags: ["Legacy", "Beginner", "Animation"],
        image: test2,
        embed: "https://www.youtube.com/embed/bhN2VxyWJiU&t",
        number: "Legacy 1"
    },
    {
        title: "Legacy Editor | Using Sounds",
        body: "Legacy Editor | Learn how to use sounds in your legacy Wick Editor projects!",
        body_extended: "In this legacy tutorial, learn how to use sounds in your legacy Wick Editor projects by adding them to your timeline and by using code!",
        tags: ["Beginner", "Sound", "Timeline"],
        image: test2,
        embed: "https://www.youtube.com/embed/T08B0KkEAZA&t",
        number: "Legacy 2"
    },
    {
        title: "Legacy Editor | Sharing your projects",
        body: "Legacy Editor | Learn how to share your legacy Wick Editor projects on other websites!",
        body_extended: "In this legacy tutorial, learn how to share your legacy Wick Editor projects on other websites like Newgrounds.com, Itch.io, and more!",
        tags: ["Beginner", "Sharing", "Newgrounds"],
        image: test2,
        embed: "https://www.youtube.com/embed/IpF8fMXN6To&t",
        number: "Legacy 3"
    }
];

export const news = [
    {
        title: "Support Wick Editor on Patreon!",
        text: "Become a supporter and help Wick Editor continue to develop!",
        date: "02/15/19",
        onClick: () => window.open("https://forum.wickeditor.com/t/support-the-wick-editor-on-patreon/1072")
    },
    {
        title: "Wick Editor Alpha update v3",
        text: "We’ve posted a major update to the Wick Editor 1.0 Alpha",
        date: "01/30/19",
        onClick: () => window.open("https://forum.wickeditor.com/t/wick-editor-alpha-update-v3/1404")
    },
    {
        title: "Wick Editor Alpha: Update v2",
        text: "We’ve posted an update to the Wick Editor Alpha.",
        date: "12/01/18",
        onClick: () => window.open("https://forum.wickeditor.com/t/wick-editor-alpha-update-v2/1236")
    }
];

export const carouselProjects = [
    {
        src: "Corey Emery",
        projectName: "Corey Emery",
        userImage: coreyemery,
        projectImage: community1,
        description: "project description blah blah blah"
    },
    {
        src: "Luca Damasco",
        projectName: "Luca Damasco",
        userImage: lucadamasco,
        projectImage: community4,
        description: "project description blah blah blah"
    },
    {
        src: "Zach Rispoli",
        projectName: "Zach Rispoli",
        userImage: zachrispoli,
        projectImage: community5,
        description: "project description blah blah blah"
    }
];