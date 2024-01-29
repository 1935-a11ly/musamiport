import { useState } from 'react'
import React, { useEffect, useRef } from 'react';
import './App.css'
import DOTS from 'vanta/src/vanta.dots'
import RINGS from 'vanta/src/vanta.rings'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import useSpeechToText from './test.jsx';




function App() {
  useEffect(() => {
    function animationStart() {
      // Assuming you have an element with the id 'container' and want to add the 'fin' class to it
      const container = document.getElementById('container');
      if (container) {
        container.classList.add('fin');
      }
    }

    // Use a setTimeout to start the animation after 5 milliseconds
    const timeoutId = setTimeout(animationStart, 5);

    // Clean up the setTimeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  const [displayText, setDisplayText] = useState("I'm Michael Musa");
  const alternateTexts = ["I'm Michael Musa", "Je m'appelle Michael Musa", "اسمي مايكل موسى.", "Mi nombre es Michael Musa.", "मेरो नाम माइकल मुसा हो।", "Jina langu ni Michael Musa.", "Ini ndinonzi Michael Musa.", "Kombo na ngai Michael Musa.", "Orukọ mi ni Michael Musa.", "Tên tôi là Michael Musa.", "मेरा नाम माइकल मोसेस है."];
  let textIndex = 0;

  useEffect(() => {
    const toggleText = () => {
      setDisplayText(alternateTexts[textIndex]);
      textIndex = (textIndex + 1) % alternateTexts.length;
    };

    const textToggleInterval = setInterval(toggleText, 6000); // Switch text every 6 seconds (6000 milliseconds)

    return () => {
      clearInterval(textToggleInterval);
    };
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1); // Initial opacity is 0


  // Define an array of image sources
  const imageSources = [
    './minime.png',
    './minime2.png',
    './minime3.png',
  ];
  const imageSources2 = [
    './minime.png',
    './minime2.png',
    './minime3.png',
  ];

  useEffect(() => {
    const imageInterval = setInterval(() => {
      // Start with a fade-out effect
      setImageOpacity(0);

      // Wait for a brief moment before changing the image source
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
      }, 1000);

      // After changing the image source, set the opacity to 1 for a fade-in effect
      setTimeout(() => {
        setImageOpacity(1);
      }, 1000);
    }, 14000);

    return () => {
      clearInterval(imageInterval);
    };
  }, []);

  useEffect(() => {
    DOTS({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xe1009e,
      // color: 0xfdacd5,
      color2: 0xd720ff,
      backgroundColor: 0xffffff,
      size: 3.30,
      spacing: 33.00,
      showLines: false,
      height: 600.00,
      minHeight: 600.00,
    })
  }, [])

  useEffect(() => {
    RINGS({
      el: ".waver",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      showDots: false
    })
  }, [])

  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 10); // Format as YYYY-MM-DD
  const [date, setDate] = useState(formattedDate);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const [textInput, setTextInput] = useState("");
  const {isListening, transcript, startListening, stopListening} = useSpeechToText({continuous:true})

  const stopVoiceInput = () => {
    setTextInput(prevVal => prevVal + (transcript.length ? (prevVal.length ? ' ' : '') + transcript : '') )
    stopListening()
  }

  const startStopListening = () => {
    isListening ? stopVoiceInput(): startListening()
  }



  return (
    <>
    {/* <div className='float-left text-xl font-sans'>Musa.</div> */}
    <div className="btm-nav overlay lg:hidden sm:inline-flex rounded-full scale-[90%] backdrop-blur-sm bg-opacity-[85%]">
  <button>
    <a href='#about'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>  
    </a>
  </button>
  <button>
    <a href='#projects'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>  
    </a>
  </button>
  <button>
    <a href='#experiences'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg> 
    </a>
  </button>
  <button>
    <a href='#contact'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg> 
    </a>   
  </button>
  <button>
    <a href='#ai'>
      <div className="spinner w-4 h-4">
        <div className="spinner1 w-4 h-4"></div>
      </div>  
    </a>
  </button>
</div>


    <div className='d1image'>
    <div className='formatter1'>
    <div>
    <ul className="menu bg-base-200 lg:menu-horizontal rounded-box bg-opacity-90 lg:inline-flex sm:hidden xs:hidden">
  <li>
    <a href='#about'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
      About
    </a>
  </li>
  <li>
    <a href='#projects'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
      Projects
    </a>
  </li>
  <li>
    <a href='#experiences'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
      Experiences
    </a>
  </li>
  <li>
    <a href='#contact'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>
      Contact
    </a>
  </li>
  <li>
    <a href='#ai'>
      <div className="spinner w-4 h-4">
        <div className="spinner1 w-4 h-4"></div>
      </div>
      Mus.AI
    </a>
  </li>
</ul>
    {/* <div className='flex items-center justify-center text-center text-lg font-sans bg-slate-200 rounded-full bg-opacity-40'>
  <a className='hidden md:block flex-1 hover:text-blue-500 text-black transition ease-in-out hover:bg-white hover:rounded-full ...' href={'/'}>
    About
  </a>
  <a className='hidden lg:block flex-1 hover:text-blue-500 text-black transition ease-in-out hover:bg-white hover:rounded-full ...' href={'/'}>
    Experiences
  </a>
  <a className='hidden md:block flex-1 hover:text-blue-500 text-black transition ease-in-out hover:bg-white hover:rounded-full ...' href={'/'}>
    Appearances
  </a>
  <a className='hidden md:block flex-1 hover:text-blue-500 text-black transition ease-in-out hover:bg-white hover:rounded-full ...' href={'/'}>
    Projects
  </a>
  <button className='lg:hidden md:hidden sm:block'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-pulse">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
    </svg>
  </button>
</div> */}
<div className=''>
    <div className='py-0 px-0 text-5xl'>
      <div className='scale-75'><span id="container" className='pt-10'>
    <svg id="hello-svg" data-name="hello" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 582 197" className='pt-10'>
        <title>Hello</title>
        <path class="path path-1" d="M208,338c38-16.67,73.74-45.72,97.33-66,21.33-18.33,32.67-35.67,37.33-52.67C347.12,203.12,344,192,332,192c-11,0-21,10.33-24.94,27.68-4.52,19.89-22.06,107.82-29.39,149,15.67-72.33,36.33-81.33,53.67-81.33,22.33,0,24.67,18.67,19.42,39-5.43,21.07-7.42,44.32,17.91,44.32,18,0,35.53-8.17,52.67-20,14-9.67,23-24,23-40,0-13.42-8-23.33-20.67-23.33s-24.33,12-24.33,33.33c0,27,16.33,48,44,48,25.67,0,47.67-19.67,62-44.67,13.61-23.74,30.67-64.67,33.33-92.67s-5.33-36-18.67-36-24.67,17.33-28.67,43.33S486,302,491.33,330s28,37.67,46,37.67,38.17-15.67,52-37c16.54-25.51,35.87-67.45,38.67-102,2-24.67-8.67-33.33-20-33.33-14.67,0-23.33,13.33-28,38-4.5,23.81-8,64-2,94,4.64,23.21,25.33,40.33,44.67,40.33s32.67-19,36.67-42.33" transform="translate(-199 -183)"/>
        <path class="path path-2" d="M697.33,287.33C672,287.33,661.33,305,659,327c-2.81,26.54,10.33,41.67,29.67,41.67,22,0,34.54-20.78,36.67-40.67,2-18.67-7.39-39.13-28-40.67" transform="translate(-199 -183)"/>
        <path class="path path-3" d="M714.8,295.12c12.11,12.26,43.53,9.55,56.53-5.79" transform="translate(-199 -183)"/>
        <line class="path path-4" x1="561" y1="181.67" x2="561" y2="181.67"/>
    </svg>
</span></div>
    </div>

<div className='text-[#303030] animate-fade xs:pb-10 sm:pb-10 md:pb-17 pt-4 xs:text-[1.5rem] sm:text-[1.5rem] md:text-[2.5rem] lg:text-[2.6rem]'>{displayText}</div>

<div className='pb-8 px-0 text-xl md:flex md:justify-center space-x-4'>
<button class="bg-gray-300 text-gray-800 py-2 px-4 rounded-full inline-flex flex-shrink-0 items-center bg-opacity-40">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" className='w-6 h-6 md:animate-none xs:animate-none'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>
  <a className='px-2' href="./resume.pdf" download>Download Resume</a>
</button>
<div className='flex flex-wrap justify-center space-x-4 md:pt-0 sm:pt-8 xs:pt-8'>
<button class="bg-gray-300 text-gray-800 py-2 px-3 rounded-full inline-flex items-center bg-opacity-40 hover:animate-bounce">
  <a className='' href="https://github.com/1935-a11ly" target="_blank">
  <img
            src= './github.png'
            alt= "Image Description"
            className='w-6 h-6'
    />
  </a>
</button>
<button class="bg-gray-300 text-gray-800 py-2 px-4 rounded-full inline-flex items-center bg-opacity-40 hover:animate-bounce">
  <a className='' href="https://www.linkedin.com/in/michaeltkmusa/" target="_blank">
  <img
                src= './linkedin.png'
                alt= "Image Description"
                className='w-6 h-6'
    />
  </a>
</button>
<button class="bg-gray-300 text-gray-800 py-2 px-2 rounded-full inline-flex items-center bg-opacity-40 hover:animate-bounce">
    
  <a className='' href="https://www.instagram.com/michaeltkmusa/" target="_blank">
  <img
                    src= './instagram.png'
                    alt= "Image Description"
                    className='w-8 h-8'
    />
  </a>
</button>
</div>
</div>
<div className='py-10 px-4 text-3xl scroll-smooth'>
  <div className='items-center'>
    <div className='xl:bg-white rounded-3xl w-fit xl:float-left'>
      <img
        src={imageSources[currentImageIndex]} // Replace with the actual image source
        alt="Image Description"
        style={{
          width: '200px', // Adjust the width as needed
          height: '200px', // Maintain the aspect ratio
          opacity: imageOpacity, // Use opacity to create a fade effect
          transition: 'opacity 1s', // CSS transition for smooth fade
        }}
      />
    </div>
    <div className='banner p-8 md:text-xl sm:text-base xs:text-base text-white font-sans max-w-4xl min-w-sm text-left xl:float-right bg-slate-500 rounded-3xl bg-opacity-40'>
    I am a passionate frontend developer and dedicated software engineer, 
    always excited to embark on new coding adventures. 
    <span className='md:inline sm:hidden xs:hidden'>With a keen eye for user-centric design and a love for crafting elegant, efficient solutions,
    I thrive in the dynamic world of web development.</span> I enjoy translating creative ideas into pixel-perfect, interactive web applications, 
    continuously learning and growing to stay at the forefront of technology.
    </div>
  </div>
</div>
</div>
</div>
</div>
    </div>
    













{/* removed major class to tops it had backdrop */}

<div id='tops' className='major lg:h-[2150px] md:h-[1950px] sm:h-[1950px] xs:h-[1950px] bg-[#dbe3e4]'>
<div className='pt-0 -pb-[25%] '>
{/* <div id = 'bio' className='pt-2 pb-4 bg-black w-[75%] formatter3 rounded-3xl backdrop-blur-sm bg-opacity-[30%] md:scale-75 sm:scale-[60%] xs:scale-[60%]'> */}
{/* <div id = 'bio' class="bg-black h-[700px] scale-[60%] formatter3 rounded-bl-full rounded-br-full backdrop-blur-sm bg-opacity-[30%]"> */}
<h4 className="formatter3 pt-32">
    <span className='craft z-0 text-white drop-shadow-2xl'>CRAFTING </span><span className=''><img src= './digital.png' alt= "Image Description" className='-mt-[15%] scale-[60%]'/></span>
</h4>
<h4 className="formatter3 md:-mt-[7%] md:pt-[3%] sm:pt-[0%]">
  <span className=' text-white craft md:text-[100px] sm:text-[100px] xs:text-[85px]'>WORLDS</span>
</h4>
<div className='lg:scale-100 md:scale-[70%] sm:scale-[60%] xs:scale-[60%] lg:mt-0 md:mt-[20px] sm:mt-[25px]  xs:mt-[95px] sm:mr-[0px] xs:mr-[27%] md:block sm:hidden xs:hidden'>
<div id = 'bio' class="bg-black h-[450px] w-[450px] scale-[60%] formatter3 rounded-full backdrop-blur-sm bg-opacity-[30%] -mb-[0px] -mt-[500px] md:block sm:hidden xs:hidden">
<video id = 'bio' src="./earth1.mp4" autoPlay muted loop className='invert absolute bg-black h-[450px] w-[450px] rounded-full opacity-[100%]'/>  
</div>
</div>


<div className='sm:scale-[70%] xs:scale-[60%] md:hidden pt-[40px]'>
<div id = 'bio' class="bg-black h-[350px] w-[350px] scale-[60%] formatter3 rounded-full backdrop-blur-sm bg-opacity-[30%] -mb-[0px] -mt-[500px] md:hidden">
<video id = 'bio' src="./earth1.mp4" autoPlay muted loop className='invert absolute bg-black h-[350px] w-[350px] rounded-full opacity-[100%]'/>  
</div>
</div>


{/* <h1 id = 'bio' className='formatter1 xs:text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl text-white lg:mb-14 sm:mb-8 xs-mb-4 '>More About Me.</h1> */}

</div>

<div className='pb-12 pt-32 mt-0'>
<fieldset disabled>
<video src="./test1.mp4" autoplay loop muted defaultMuted className='absolute appear lg:w-1/2 bg-black rounded-2xl px-0 max-w-[1200px] max-h-[800px] min-w-[370px] min-h-[800px] lg:float-left xs:scale-[88%] bg-opacity-10 opacity-50 -ml-4'/>  
<div className="appear lg:w-1/2 bg-black rounded-2xl px-12 max-w-[1200px] max-h-[800px] min-w-[370px] min-h-[800px] lg:float-left xs:scale-[88%] bg-opacity-50 -ml-4" >
  
  <h2 className='imagine xl:text-[75px] lg:text-[30px] sm:text-[50px] xs:text-[30px] px-8 text-white '> From Imagination to Immersion, <br/> I Craft Digital Tales That Bring Ideas to Life</h2>
</div>
</fieldset>

{/* mobile stuff only */}

<div className='text-left px-6 '>
<div class="-mt-[92px] formatter3 mobile lg:mt-[50px] md:mt-[0px] sm:mt-[0px] xs:mt-[0px] rounded-2xl text-left relative flex max-w-[750px] min-w-[330px] h-fit flex-col bg-zinc-50 bg-opacity-[25%] bg-clip-border text-gray-700 shadow-md backdrop-blur-sm">
  <div className='pl-6 pt-8'>
  <img src = './avatar1.png' className='w-32 h-32 rounded-full object-contain bg-black'></img>
  </div>
  <div class="p-6">
    <h5 class="pb-6 mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     Meet the Developer
    </h5>
    <p class="justify-start float-left block font-sans text-base font-light leading-relaxed text-inherit antialiased">
    Michael Musa is a freelance software 
        developer based in Houston, TX. His pursuit of user-centric design and development processes is 
        founded on co-design principles and aims to explore cultural relativism with the World Wide Web 
        as a primary landscape.  <span className='block mt-6'>In essence, Musa is a storyteller turned developer who strives to create compelling applications 
        and designs for corporations. Coupling his knowledge in the realm of Web Development with his 
        passion for Data Science and Sociology, Musa aims to create efficient, data-driven solutions that 
        are a visual aid to a corporation's philosophies and best practices. </span>
    </p>
  </div>
  <div class="p-6">
    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-[#cba787] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Read More
    </button>
  </div>
  <div className='pt-6'>
  </div>
</div>
</div>





<div id='about' className="lg:w-[50%] article mockup-browser bg-base-300 max-w-[800px] max-h-[800px] min-w-[600px] min-h-[370px]  lg:float-right xs:scale-[88%] bg-opacity-[55%] backdrop-blur-sm">
  {/* <div className="mockup-browser-toolbar">
    <div className="input">https://michaelkmusa.com</div>
  </div> */}
  <div className="mockup-browser-toolbar">
      <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-[68.5px] mr-[9px] h-[12px] w-4 text-red-500/20 z-40">
        <circle r="12" cy="12" cx="12"></circle>
      </svg>
      <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.65 mr-2.5 h-3 w-3 text-yellow-500/20 bg-yellow z-40">
        <circle r="12" cy="12" cx="12"></circle>
      </svg>
      <svg viewBox="0 0 24 24" fill="currentColor" className="mr-1.5 h-3 w-3 text-green-500/20 z-40">
        <circle r="12" cy="12" cx="12"></circle>
      </svg>
      <div className="input bg-opacity-20">https://michaelkmusa.com</div>
      {/* possibly add the react typed there when doing animations */}
  </div>
  <div className="px-0 md:py-0 sm:py-0 xs:py-0 transparent bg-opacity-[10%] -pb-[50px]">
  
  <img src="./booklogo.png" className='scale-[50%] -mt-[10%]'></img>
  <div className='bg-base-300 -mt-[40%] py-[40%] bg-opacity-[55%]'>
  <h3 className='text-center text-[20px] -mt-[10%] pb-2'>Crafting Digital Worlds: Meet the Architect of this Online Experiences
</h3>
  <div className='-mt-[18%] book md:scale-[60%] sm:scale-[60%] xs:scale-[60%] article rounded-2xl lg:h-[900px] md:h-[820px] sm:h-[500px] xs:h-[500px]  mx-auto md:justify-center md:items-center sm:justify-center sm:items-center xs:justify-center xs:items-center opacity-[75%] max-w-[800px] min-w-[370px]'>
        <div className='overflow-y-auto p-12 text-black md:h-[700px] sm:h-[500px] xs:h-[500px]'>
        <img src="./novel.png" className='scale-90 w-52 h-50 opacity-100 mb-10 rounded-3xl -mt-4'></img>
        <p className='text-[30px] text-black'>Michael Musa is a freelance software 
        developer based in Houston, TX. His pursuit of user-centric design and development processes is 
        founded on co-design principles and aims to explore cultural relativism with the World Wide Web 
        as a primary landscape. 
        </p>
        <p className='text-[30px] py-[2.5%] text-black'>
        In essence, Musa is a storyteller turned developer who strives to create compelling applications 
        and designs for corporations. Coupling his knowledge in the realm of Web Development with his 
        passion for Data Science and Sociology, Musa aims to create efficient, data-driven solutions that 
        are a visual aid to a corporation's philosophies and best practices. 
        </p>
        </div>

</div>



</div>
  </div>
</div>
</div>







<div className="slider bg-transparent pt-16">
	<div className="slide-track bg-transparent">
		<div className="slide">
      <h1 className='craft2 text-[50px] h-[70px] w-[650px]'> YEARS OF EXPERIENCE</h1>
		</div>
		<div className="slide">
    <h1 className='craft text-[#cba787] h-[70px] w-[1000px] pl-[360px]'> YEARS OF EXPERIENCE</h1>
		</div>
    <div className="slide">
    <h1 className='craft2 text-[50px] h-[70px] w-[1350px] pl-[720px]'> YEARS OF EXPERIENCE</h1>
		</div>
    <div className="slide">
    <h1 className='craft text-[#cba787] h-[70px] w-[1700px] pl-[1080px]'> YEARS OF EXPERIENCE</h1>
		</div>
    <div className="slide">
    <h1 className='craft2 text-[50px] h-[70px] w-[2050px] pl-[1440px]'> YEARS OF EXPERIENCE</h1>
		</div>
    <div className="slide">
    <h1 className='craft text-[#cba787] h-[70px] w-[2400px] pl-[1800px]'> YEARS OF EXPERIENCE</h1>
		</div>
	</div>
</div>





<div className="slider2 bg-transparent -mt-16">
	<div className="slide-track2 bg-transparent">
		<div className="slide2">
      <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm ">
        <div className="flex gap-2">
          <img alt="" src= './reactlogo.png' className="bg-base-300 w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">REACT</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              3 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
		<div className="slide2 pl-[130px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './javaslogo.png' alt="" className="bg-base-300 w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">JAVASCRIPT</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              3.5 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[270px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './pythonlogo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">PYTHON</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              3.5 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './sqllogo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">SQL</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              4 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './javalogo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">JAVA</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              2 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './nextlogo.png' alt="" className="bg-base-300 w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">NEXT</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              2 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './djangologo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">DJANGO</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              1 YEAR
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './flasklogo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">FLASK</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              4 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './csslogo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">CSS</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              4 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './pandaslogo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">PANDAS</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              2.5 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './htmllogo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">HTML</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              5 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './javaslogo.png' alt="" className="bg-base-300 w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">JAVASCRIPT</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              3.5 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './pythonlogo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">PYTHON</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              3.5 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './sqllogo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">SQL</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              4 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './javalogo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">JAVA</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              2 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './nextlogo.png' alt="" className="bg-base-300 w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">NEXT</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              2 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './djangologo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">DJANGO</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              1 YEAR
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './flasklogo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">FLASK</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              4 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './csslogo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">CSS</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              4 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './pandaslogo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">PANDAS</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              2.5 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './htmllogo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">HTML</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              5 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
      <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm ">
        <div className="flex gap-2">
          <img alt="" src= './reactlogo.png' className="bg-base-300 w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">REACT</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              3 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
		<div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './javaslogo.png' alt="" className="bg-base-300 w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">JAVASCRIPT</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              3.5 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './pythonlogo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">PYTHON</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              3.5 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './sqllogo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">SQL</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              4 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './javalogo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">JAVA</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              2 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './nextlogo.png' alt="" className="bg-base-300 w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">NEXT</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              2 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './djangologo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">DJANGO</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              1 YEAR
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './flasklogo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">FLASK</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              4 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './csslogo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">CSS</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              4 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './pandaslogo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">PANDAS</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              2.5 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './htmllogo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">HTML</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              5 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './javaslogo.png' alt="" className="bg-base-300 w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">JAVASCRIPT</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              3.5 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './pythonlogo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">PYTHON</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              3.5 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './sqllogo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">SQL</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              4 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './javalogo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">JAVA</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              2 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './nextlogo.png' alt="" className="bg-base-300 w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">NEXT</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              2 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './djangologo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">DJANGO</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              1 YEAR
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './flasklogo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">FLASK</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              4 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './csslogo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">CSS</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              4 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './pandaslogo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">PANDAS</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              2.5 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
    <div className="slide2 pl-[410px]">
    <div className="border-[1px] border-[#cba787] w-72 h-[120px] flex flex-col justify-center gap-2 bg-transparent rounded-full p-2 backdrop-blur-sm">
        <div className="flex gap-2">
          <img src= './htmllogo.png' alt="" className="bg-transparent w-24 h-24 shrink-0 rounded-full object-contain" />
          <div className="flex flex-col text-black">
            <span className="universalfont text-[25px]">HTML</span>
            <p className="line-clamp-3 font-bold text-[#cba787] text-[18px] bg-base-300 rounded-lg p-2 text-center">
              5 YEARS
            </p>
          </div>
        </div>
      </div>
		</div>
	</div>
</div>












</div>















<div id="vanta" className='xl:h-[1400px] lg:h-[1380px] md:h-[1280px] sm:h-[1200px] xs:h-[1200px] -mt-5'>
    <h1 id = 'projects' className='formatter1 text-5xl mt-5 text-black hover:text-[#fdacd5] pt-32 pb-24 universalfont'>PROJECTS</h1>
    <div className='formatter2 flex items-center justify-center space-x-4'>









 <div className='codebar1'>
    <div class="relative rounded-lg bg-slate-900">
  <div class="relative flex text-center">
    <div class="flex pl-3.5 pt-3"><svg viewBox="0 0 24 24" fill="currentColor" class="-ml-0.5 mr-1.5 h-3 w-3 text-red-500/20">
        <circle r="12" cy="12" cx="12"></circle>
      </svg><svg viewBox="0 0 24 24" fill="currentColor" class="-ml-0.75 mr-1.5 h-3 w-3 text-yellow-500/20">
        <circle r="12" cy="12" cx="12"></circle>
      </svg><svg viewBox="0 0 24 24" fill="currentColor" class="-ml-0.75 mr-1.5 h-3 w-3 text-green-500/20">
        <circle r="12" cy="12" cx="12"></circle>
      </svg></div><span class="absolute inset-x-0 top-2 text-xs text-slate-500">LifeLine.tsx</span>
  </div>
  <div class="mt-5 space-y-1.5 px-5 pb-10">
    <p class="mt-4 font-mono text-xs font-normal tracking-wide text-violet-400">
      <span class="text-slate-500">&lt;</span><span class="text-pink-400">Card</span><span class="text-slate-500">&gt;</span>
    </p>
    <p class="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
      <span class="text-slate-500">&lt;</span><span class="text-pink-400">Text</span><span class="text-slate-500">&gt;</span><span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span class="relative text-blue-400">KIDLIN LAW</span></span><span class="text-slate-500">&lt;/</span><span class="text-pink-400">Text</span><span class="text-slate-500">&gt;</span>
    </p>
    <p class="ml-3 font-mono text-xs font-normal leading-4 tracking-wide text-violet-400">
      <span class="text-slate-500">&lt;</span><span class="text-pink-400">Text</span><span class="text-slate-500">&gt;</span><span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span class="relative text-blue-400">if you write a problem down</span></span><span class="text-slate-500">&lt;/</span><span class="text-pink-400">Text</span><span class="text-slate-500">&gt;</span>
    </p>
    <p class="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
      <span class="text-slate-500">&lt;</span><span class="text-pink-400">Flex</span><span class="ml-2 text-violet-400">className<span class="text-slate-500">=</span><span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span class="relative text-blue-400">"clearly-and-specifically"</span></span></span><span class="text-slate-500">&gt;</span>
    </p>
    <p class="ml-6 font-mono text-xs font-normal tracking-wide text-violet-400">
      <span class="text-slate-500">&lt;</span><span class="text-pink-400">Text</span><span class="text-slate-500">&gt;</span><span class="text-slate-500">&lt;</span><span class="text-pink-400">Bold</span><span class="text-slate-500">&gt;</span><span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span class="relative text-blue-400">YOU</span></span><span class="text-slate-500">&lt;/</span><span class="text-pink-400">Bold</span><span class="text-slate-500">&gt;</span><span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span class="relative text-blue-400">have solved</span></span><span class="text-slate-500">&lt;/</span><span class="text-pink-400">Text</span><span class="text-slate-500">&gt;</span>
    </p>
    <p class="ml-6 font-mono text-xs font-normal tracking-wide text-violet-400">
      <span class="text-slate-500">&lt;</span><span class="text-pink-400">Metric</span><span class="text-slate-500">&gt;</span><span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span class="relative text-blue-400">50%</span></span><span class="text-slate-500">&lt;/</span><span class="text-pink-400">Metric</span><span class="text-slate-500">&gt;</span>
    </p>
    <p class="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
      <span class="text-slate-500">&lt;/</span><span class="text-pink-400">Flex</span><span class="text-slate-500">&gt;</span>
    </p>
    <p class="ml-3 font-mono text-xs font-normal leading-4 tracking-wide text-violet-400">
      <span class="text-slate-500">&lt;</span><span class="text-pink-400">LifeLine</span><span class="ml-2 text-violet-400">value<span class="text-slate-500">=</span><span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span class="relative text-blue-400">{ 50 }</span></span></span><span class="ml-2 text-violet-400">className<span class="text-slate-500">=</span><span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span class="relative text-blue-400">"of-it"</span></span></span><span class="text-slate-500">/&gt;</span>
    </p>
    <p class="font-mono text-xs font-normal tracking-wide text-violet-400">
      <span class="text-slate-500">&lt;/</span><span class="text-pink-400">Card</span><span class="text-slate-500">&gt;</span>
    </p>
  </div>
</div>   
</div>














    {/* grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-2 xl:grid-cols-3 gap-12 */} 
    {/* bg-[#ede9fe] */}
    <div className='carousel carousel-center max-w-3xl min-w-[350px] p-4 space-x-4 rounded-box bg-[#ede9fe] bg-opacity-40 sm:pr-30px'>
    <div id="proj1" class="max-w-sm min-w-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:bg-opacity-95 dark:border-gray-400 lg:scale-100 md:scale-80 sm:scale-70 xs:scale-70">
    <a href="#">
        <img class="rounded-t-lg" src="./lcmarket.png" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white min-w-[150px]">Luther Marketplace</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A full-stack Web App that allows students to donate goods internally and help Luther College reach its sustainability 
                                                                    goals by improving the product lifespan of items used or purchased by students</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        <div className='inline-flex sm:pl-4 space-x-2 lg:text-base md:text-base sm:text-sm xs:text-xs xs:pl-2'>
        <p className='text-[#FFD700]'>#NextJS</p>
        <p className='text-[#009900]'>#Django</p>
        <p className='text-[#960018]'>#REST</p>
        </div>
    </div>
    </div>


    <div id="proj2" class="max-w-sm min-w-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 lg:scale-100 md:scale-80 sm:scale-70 xs:scale-70">
    <a href="#">
        <img class="rounded-t-lg" src="./lcmarket.png" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Luther Marketplace</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A full-stack Web App that allows students to donate goods internally and help Luther College reach its sustainability 
                                                                    goals by improving the product lifespan of items used or purchased by students</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        <div className='inline-flex sm:pl-4 space-x-2 lg:text-base md:text-base sm:text-sm xs:text-xs xs:pl-2'>
        <p className='text-[#FFD700]'>#NextJS</p>
        <p className='text-[#009900]'>#Django</p>
        <p className='text-[#960018]'>#REST</p>
        </div>
    </div>
    </div>




    <div id="proj3" class="max-w-sm min-w-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 lg:scale-100 md:scale-80 sm:scale-70 xs:scale-70">
    <a href="#">
        <img class="rounded-t-lg" src="./lcmarket.png" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Luther Marketplace</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A full-stack Web App that allows students to donate goods internally and help Luther College reach its sustainability 
                                                                    goals by improving the product lifespan of items used or purchased by students</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        <div className='inline-flex sm:pl-4 space-x-2 lg:text-base md:text-base sm:text-sm xs:text-xs xs:pl-2'>
        <p className='text-[#FFD700]'>#NextJS</p>
        <p className='text-[#009900]'>#Django</p>
        <p className='text-[#960018]'>#REST</p>
        </div>
    </div>
    </div>




    <div id="proj4" class="max-w-sm min-w-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 lg:scale-100 md:scale-80 sm:scale-70 xs:scale-70">
    <a href="#">
        <img class="rounded-t-lg" src="./lcmarket.png" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Luther Marketplace</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A full-stack Web App that allows students to donate goods internally and help Luther College reach its sustainability 
                                                                    goals by improving the product lifespan of items used or purchased by students</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        <div className='inline-flex sm:pl-4 space-x-2 lg:text-base md:text-base sm:text-sm xs:text-xs xs:pl-2'>
        <p className='text-[#FFD700]'>#NextJS</p>
        <p className='text-[#009900]'>#Django</p>
        <p className='text-[#960018]'>#REST</p>
        </div>
    </div>
    </div>





    <div id="proj5" class="max-w-sm min-w-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 lg:scale-100 md:scale-80 sm:scale-70 xs:scale-70">
    <a href="#">
        <img class="rounded-t-lg" src="./lcmarket.png" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Luther Marketplace</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A full-stack Web App that allows students to donate goods internally and help Luther College reach its sustainability 
                                                                    goals by improving the product lifespan of items used or purchased by students</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        <div className='inline-flex sm:pl-4 space-x-2 lg:text-base md:text-base sm:text-sm xs:text-xs xs:pl-2'>
        <p className='text-[#FFD700]'>#NextJS</p>
        <p className='text-[#009900]'>#Django</p>
        <p className='text-[#960018]'>#REST</p>
        </div>
    </div>
    </div>




    <div id="proj6" class="max-w-sm min-w-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 lg:scale-100 md:scale-80 sm:scale-70 xs:scale-70">
    <a href="#">
        <img class="rounded-t-lg" src="./lcmarket.png" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Luther Marketplace</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A full-stack Web App that allows students to donate goods internally and help Luther College reach its sustainability 
                                                                    goals by improving the product lifespan of items used or purchased by students</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        <div className='inline-flex sm:pl-4 space-x-2 lg:text-base md:text-base sm:text-sm xs:text-xs xs:pl-2'>
        <p className='text-[#FFD700]'>#NextJS</p>
        <p className='text-[#009900]'>#Django</p>
        <p className='text-[#960018]'>#REST</p>
        </div>
    </div>
    </div>
</div>









<div className='codebar1'>
    <div class="relative rounded-lg bg-slate-900">
  <div class="relative flex text-center">
    <div class="flex pl-3.5 pt-3"><svg viewBox="0 0 24 24" fill="currentColor" class="-ml-0.5 mr-1.5 h-3 w-3 text-red-500/20">
        <circle r="12" cy="12" cx="12"></circle>
      </svg><svg viewBox="0 0 24 24" fill="currentColor" class="-ml-0.75 mr-1.5 h-3 w-3 text-yellow-500/20">
        <circle r="12" cy="12" cx="12"></circle>
      </svg><svg viewBox="0 0 24 24" fill="currentColor" class="-ml-0.75 mr-1.5 h-3 w-3 text-green-500/20">
        <circle r="12" cy="12" cx="12"></circle>
      </svg></div><span class="absolute inset-x-0 top-2 text-xs text-slate-500">WorkEthic.tsx</span>
  </div>
  <div class="mt-5 space-y-1.5 px-5 pb-10">
    <p class="mt-4 font-mono text-xs font-normal tracking-wide text-violet-400">
      <span class="text-slate-500">&lt;</span><span class="text-pink-400">Card</span><span class="text-slate-500">&gt;</span>
    </p>
    <p class="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
      <span class="text-slate-500">&lt;</span><span class="text-pink-400">Text</span><span class="text-slate-500">&gt;</span><span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span class="relative text-blue-400">GILBERT LAW</span></span><span class="text-slate-500">&lt;/</span><span class="text-pink-400">Text</span><span class="text-slate-500">&gt;</span>
    </p>
    <p class="ml-3 font-mono text-xs font-normal leading-4 tracking-wide text-violet-400">
      <span class="text-slate-500">&lt;</span><span class="text-pink-400">Text</span><span class="text-slate-500">&gt;</span><span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span class="relative text-blue-400">if you take on a new task</span></span><span class="text-slate-500">&lt;/</span><span class="text-pink-400">Text</span><span class="text-slate-500">&gt;</span>
    </p>
    <p class="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
      <span class="text-slate-500">&lt;</span><span class="text-pink-400">Flex</span><span class="ml-2 text-violet-400">className<span class="text-slate-500">=</span><span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span class="relative text-blue-400">"finding-the-best-way-to"</span></span></span><span class="text-slate-500">&gt;</span>
    </p>
    <p class="ml-6 font-mono text-xs font-normal tracking-wide text-violet-400">
      <span class="text-slate-500">&lt;</span><span class="text-pink-400">Text</span><span class="text-slate-500">&gt;</span><span class="text-slate-500">&lt;</span><span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span class="relative text-blue-400">ACHIEVE</span></span><span class="text-slate-500">&lt;/</span><span class="text-pink-400">Text</span><span class="text-slate-500">&gt;</span>
    </p>
    <p class="ml-6 font-mono text-xs font-normal tracking-wide text-violet-400">
      <span class="text-slate-500">&lt;</span><span class="text-pink-400">Text</span><span class="text-slate-500">&gt;</span><span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span class="relative text-blue-400">the desired result is</span></span><span class="text-slate-500">&lt;/</span><span class="text-pink-400">Text</span><span class="text-slate-500">&gt;</span>
    </p>
    <p class="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
      <span class="text-slate-500">&lt;/</span><span class="text-pink-400">Flex</span><span class="text-slate-500">&gt;</span>
    </p>
    <p class="ml-3 font-mono text-xs font-normal leading-4 tracking-wide text-violet-400">
      <span class="text-slate-500">&lt;</span><span class="text-pink-400">WorkEthic</span><span class="ml-2 text-violet-400">value<span class="text-slate-500">=</span><span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span class="relative text-blue-400">{ 50 }</span></span></span><span class="ml-2 text-violet-400">className<span class="text-slate-500">=</span><span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span class="relative text-blue-400">"on-you"</span></span></span><span class="text-slate-500">/&gt;</span>
    </p>
    <p class="font-mono text-xs font-normal tracking-wide text-violet-400">
      <span class="text-slate-500">&lt;/</span><span class="text-pink-400">Card</span><span class="text-slate-500">&gt;</span>
    </p>
  </div>
</div>   
</div>









</div>










<div className="join flex justify-center w-full py-8 gap-2 pb-36">
  <a href="#proj1" className="join-item btn btn-xs" type="radio" name="options" aria-label="1" checked>1</a> 
  <a href="#proj2" className="join-item btn btn-xs" type="radio" name="options" aria-label="2">2</a> 
  <a href="#proj3" className="join-item btn btn-xs" type="radio" name="options" aria-label="3">3</a> 
  <a href="#proj4" className="join-item btn btn-xs" type="radio" name="options" aria-label="4">4</a>
  <a href="#proj5" className="join-item btn btn-xs" type="radio" name="options" aria-label="5">5</a>
  <a href="#proj6" className="join-item btn btn-xs" type="radio" name="options" aria-label="6">6</a>
</div>







<div className='bg-[#202428] pt-40 pb-20'>
<h1 id = 'experiences' className='pb-16 formatter1 text-5xl text-white mb-16 universalfont'>EXPERIENCES</h1>

<VerticalTimeline className='pt-12'>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(0,153,0)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(0,153,0)' }}
    date="August 2023 - Current"
    iconStyle={{ background: 'rgb(0,153,0)', color: '#fff' }}
    icon={<img src={'./micodes.png'} className = "scale-[125%]" alt="myLogo" />} 
  >
    <h3 className="vertical-timeline-element-title">Freelance Software Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Houston, TX</h4>
    <p>
      Utilize Typescript, Django and REST API to create inventory and listing Web Applications for IDrive and Infiniti Auto Group LLC
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="September 2021 - June 2023"
    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#3c74a8' }}
    contentStyle={{ background: 'rgb(60,116,168)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid rgb(60,116,168)' }}
    icon={<img src={'./luthercollege.png'} alt="myLogo" />} 
  >
    <h3 className="vertical-timeline-element-title">Website Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Decorah, IA</h4>
    <p>
      Design, update and deploy Luther College`s website content using Reason CMS and WordPress with a goal to meet W3C standards for accessibility and performance.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="January 2022 - November 2022"
    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
    contentStyle={{ background: 'rgb(253,134,14)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid rgb(253,134,14)' }}
    icon={<img src={'./dc.jpeg'} alt="myLogo" className='scale-[70%]'/>} 
  >
    <h3 className="vertical-timeline-element-title">Intranet Administrator | Website Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Rochester, MN</h4>
    <p>
    Administered SharePoint sites for successful collaboration with external contractors such as Mayo Clinic and Destination
    Medical Center.
    </p>
    <p>
    Designed and maintained static and full-stack Web Applications for Rochester community service initiatives such as Project Healings that aimed to reduce the COVID-19 vaccine disparity in the community.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="May 2022 - October 2022"
    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
    contentStyle={{ background: 'rgb(60,116,168)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid rgb(60,116,168)' }}
    icon={<img src={'./luthercollege.png'} alt="myLogo" />} 
  >
    <h3 className="vertical-timeline-element-title">Marketing Staff</h3>
    <h4 className="vertical-timeline-element-subtitle">Decorah, IA</h4>
    <p>
      Developed and maintained website content using WordPress as a primary tool.
    </p>
    <p>
      Utilized Figma for website migration planning and design outlook to visualize potential deficiencies as we shifted from Reason CMS to WordPress.
    </p>

  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="August 2019 - May 2023"
    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
    contentStyle={{ background: 'rgb(60,116,168)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid rgb(60,116,168)' }}
    icon={<img src={'./luthercollege.png'} alt="myLogo" />} 
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Arts in Computer and Data Science</h3>
    <p>
      Cum laude graduate majoring in Computer Science with a minor in Data Science
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
</div>


<div className=' waver bgsec3 pb-52'>
<div id = 'contact' className='formatter3 xs:text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl text-white'><h1 className='pt-32 universalfont'>Get In Touch</h1></div>
<div class="flex flex-col items-center justify-center min-h-[250px] dark mt-20">
  <div class="w-full bg-gray-800 rounded-3xl bg-opacity-[63%] backdrop-blur-sm shadow-md pt-14 lg:w-[950px] md:w-[650px] sm:w-[550px] xs:w-[370px] pb-30 formatter1">
    <div className="avatar online">
          <div className="w-24 rounded-full">
            <img src="./avatar.jpg" />
          </div>
    </div>
    <h2 class="text-2xl font-bold text-gray-200 mb-4 universalfont">Contact Michael</h2>

    <form className='pb-[100px]'>
      <div class="flex flex-wrap formatter3">
      <input
        type="text"
        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-[48%] mr-[2%]"
        placeholder="Full Name"
      />
      <input
        type="email"
        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-[48%] ml-[2%]"
        placeholder="Email"
      />
      <input
        type="number"
        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-[48%] mr-[2%]"
        placeholder="Phone Number"
      />
      <input
        type="text"
        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-[48%] ml-[2%]"
        placeholder="Company Name"
      />
      <input
        type="text"
        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-[48%] mr-[2%]"
        placeholder="Job Title"
      />
      <input
        type="date"
        id="dateInput"
        name="dateInput"
        value={date}
        onChange={handleDateChange}
        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-[48%] ml-[2%]"
        // placeholder="Date"
      />
      <textarea
        name="message"
        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-auto md:mb-auto w-full focus:bg-gray-md:focus:outline-none:focus:ring-blue-md:focus:border-transparent transition ease-in-out duration-fastest h-52"
        placeholder="Type message or click mic to Dictate"
        disabled = {isListening}
        value={isListening ? textInput + (transcript.length ? (textInput.length ? ' ' : '') + transcript : '') : textInput}
        onChange = {(e) => {setTextInput(e.target.value)}}
        type="textarea"
      >
    </textarea>
    </div>
    <button className="float-left py-[5px] mt-2 transition ease-in-out duration-150 " type="button" onClick={()=>{startStopListening()}}> {isListening ? <img src="micactive.png" className = "invert w-12 h-12 bg-[#06b6d4] rounded-full p-2" alt="ActiveMic" /> : <img src="micinactive.png" className = "invert w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full p-2 " alt="InactiveMic" />}</button>
    <p className="mt-[8px] ml-4 float-left " type="text"> {isListening ? <p className='py-2 mt-2 transition ease-in-out duration-150 animate-pulse text-red-600 text-lg'>Listening</p> : <p className='hidden'>Not Listening</p>}</p>
      <button
        type="submit"
        class=" float-right bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
      >
        Send
      </button>
    </form>
  </div>
</div>
</div>

<div className='backdropp bg-black pt-24 pb-16 lg:px-32'>
<div className="spinner w-12 h-12 formatter3">
  <div className="spinner1 w-12 h-12"></div>
</div>
<h1 id = 'ai' className='formatter3 text-5xl pt-4 text-white pt-8 universalfont'>MUS.AI</h1>
<h1 className='formatter3 text-3xl mt-10 mb-8 italic xs:hidden md:block text-white'>"How my journey takes shape."</h1>
<iframe
src="https://www.chatbase.co/chatbot-iframe/PSmPZQ8je3ifqFsQFT1Lp"
width="50%"
height='70%'
className='framee max-h-[800px] min-h-[787px] formatter3 lg:pt-28 mt-[25px] pb-20 min-w-[300px] max-w-[1000px] xs:pl-[15px] xs:pt-24 md:hidden'
frameborder="0"
></iframe>
<iframe
src="https://www.chatbase.co/chatbot-iframe/PSmPZQ8je3ifqFsQFT1Lp"
width="50%"
height='70%'
className='frame2 relative max-h-[450px] min-h-[420px] formatter3 min-w-[700px] max-w-[1000px] object-scale-down lg:scale-[100%] md:scale-[70%] sm:scale-[50%]'
frameborder="0"
></iframe>
<div className='backdrop1'>
</div>
</div>

<footer className="bg-[#202428] footer footer-center p-10 text-base-content rounded">
  <nav className="grid grid-flow-col gap-4">
    <a href='#bio' className="link link-hover text-white">About</a> 
    <a href='#projects' className="link link-hover text-white">Projects</a> 
    <a href='#experiences' className="link link-hover text-white">Experiences</a> 
    <a href='#contact' className="link link-hover text-white">Contact</a>
  </nav> 
  <nav>
    <div className="flex justify-center space-x-6">
    <a className='' href="https://github.com/1935-a11ly" target="_blank">
  <     img
            src= './github.png'
            alt= "Image Description"
            className='filter invert w-6 h-6'
        />
    </a>
    <a className='' href="https://www.linkedin.com/in/michaeltkmusa/" target="_blank">
        <img
                src= './linkedin.png'
                alt= "Image Description"
                className='w-6 h-6'
        />
    </a>
    <a className='' href="https://www.instagram.com/michaeltkmusa/" target="_blank">
        <img
                    src= './instagram.png'
                    alt= "Image Description"
                    className='w-[29px] h-[29px] mt-[-0.15rem]'
        />
    </a>

    </div>
  </nav> 
  <aside>
    <p>Copyright © 2023 | Michael Musa</p>
  </aside>
</footer>


    </div>
    </>
  )
}

export default App


