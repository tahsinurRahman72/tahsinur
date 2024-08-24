'use client'
import Image from "next/image";
import { useState, useEffect } from 'react';
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (isOpen) {
      setIsOpen(false); // Close the menu if it's open
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
        setTimeout(() => setFadeIn(true), 100); // Delay the fade-in effect slightly
      } else {
        setFadeIn(false);
        setTimeout(() => setShowScrollButton(false), 100); // Delay hiding after fade-out
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  <main className="flex min-h-screen flex-col justify-between p-12">
    {showScrollButton && (
        <button
          onClick={handleScrollToTop}
          className={`fixed bottom-10 right-10 p-3 bg-slate-500 text-white w-12 h-12 rounded-full shadow-lg hover:bg-slate-600 focus:outline-none transition-opacity duration-500 ${
            fadeIn ? 'opacity-100' : 'opacity-0'
          }`}>
          ↑
        </button>
      )}
    {/* <div id="name" className="flex justify-start text-5xl font-sans text-white items-center">
      <h1>Tahsinur Rahman</h1>
    </div> */}
      
    <div>
      <div id="header" className="flex justify-between items-center p-4 bg-black">
        <div id="name" className="text-5xl max-[320px]:text-4xl font-sans text-white">
          <h1>Tahsinur Rahman</h1>
        </div>
        
        {/* Regular menu for larger screens */}
        <div id="menu" className="hidden md:flex space-x-6">
          <button onClick={() => handleScroll('experience-heading')} className="text-white font-sans text-lg">Experience</button>
          <button onClick={() => handleScroll('skills-heading')} className="text-white font-sans text-lg">Skills</button>
          <button onClick={() => handleScroll('education-heading')} className="text-white font-sans text-lg">Education</button>
          <button onClick={() => handleScroll('publications-heading')} className="text-white font-sans text-lg">Publications</button>
          <button onClick={() => handleScroll('contact-heading')} className="text-white font-sans text-lg">Contact</button>
        </div>

        {/* Hamburger menu for smaller screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-lg">
            {/* Hamburger icon */}
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown menu for small screens */}
      {isOpen && (
        <div className="bg-black text-white p-4 md:hidden">
          <button onClick={() => handleScroll('experience-heading')} className="block w-full text-left py-2">Experience</button>
          <button onClick={() => handleScroll('skills-heading')} className="block w-full text-left py-2">Skills</button>
          <button onClick={() => handleScroll('education-heading')} className="block w-full text-left py-2">Education</button>
          <button onClick={() => handleScroll('publications-heading')} className="block w-full text-left py-2">Publications</button>
        </div>
      )}
    </div>

    <div id="intro-and-photo"className="flex min-h-screen flex-col min-[1000px]:flex-row justify-around items-center"> 
      <div id="intro" className="flex">
          <p className="p-12 pl-[0.7rem] mb-3 text-xl max-[320px]:text-base font-light"><i>
                            I'm Tahsinur Rahman, currently completing Master's in Data Science at La Trobe University,
                            passionate about data manipulation, visualization, and automation with language proficiency in Scala, Python,
                            JavaScript and respective frameworks. Focused on advancing data engineering to enhance data quality and accessibility,
                            I'm driven to unlock insights and innovate through data.
          </i></p>
      </div>
      <Image
        className="relative rounded-e-full"
        src="/img.jpeg"
        alt="profile-photo"
        width={500}
        height={700}
        priority
      />
    </div>
      
    <br />
      
    <div id="experience-heading" className="flex justify-start text-5xl font-sans text-white items-center">
        <h1>
          Experience
        </h1>
    </div>
    
    <br />
      
    <div id="experiences" className="flex min-[1000px]:space-x-2 flex-col min-[1000px]:flex-row max-[1000px]:items-center max-[1000px]:space-y-2 justify-center">
      <div className="expbox 
          transition-colors
        hover:dark:bg-teal-700">
        <Image
          className="relative"
          src="/images/invtech.svg"
          alt="invisible-technologies"
          width={200}
          height={200}
          priority
        />
        <br />
        <h3 className="mb-3 text-xl font-semibold">
          Invisible Technologies | Advanced AI Data Trainer
        </h3>
        <h6>San Francisco, California | Jul 2022 - Aug 2024</h6>
        <br />
        <ul className="m-0 max-w-[50ch] text-balance text-sm">
          <li>Responsible for taking a deep dive on data driven behavior of machine models and reporting anomalies in such results.</li>
          <br />  
          <li>Enhancing model's approach on data by implementing various methods to improve behavior that benefits on the user end.</li>
        </ul>
      </div>
        
      <div className="expbox 
          transition-colors
        hover:dark:bg-teal-700">
        <Image
          className="relative"
          src="/images/daraz.png"
          alt="daraz"
          width={100}
          height={100}
          priority
        />
        <br />
        <h3 className="mb-3 text-xl font-semibold">
          Daraz (Hungrynaki) | Product (Tech) Intern
        </h3>
        <h6>Dhaka, Bangladesh | Feb 2022 - May 2022</h6>
        <br />
        <ul className="m-0 max-w-[50ch] text-balance text-sm">
          <li>Handled API Documentation on GraphQL schemas of the entire product codebase to ensure better understanding of each API</li>
          <br />  
          <li>Conducted breakdown explanation of logical calculations of each API present in the codebase</li>
        </ul>
      </div>

      <div className="expbox 
          transition-colors
        hover:dark:bg-teal-700">
        <Image
          className="relative"
          src="/images/intelligent-tr.png"
          alt="intelligent-machines"
          width={150}
          height={100}
          priority
        />
        <br />
        <h3 className="mb-3 text-xl font-semibold">
          Intelligent Machines | AI Data Annotator
        </h3>
        <h6>Dhaka, Bangladesh | Mar 2020 - Nov 2021</h6>
        <br />
        <ul className="m-0 max-w-[50ch] text-balance text-sm">
          <li>Annotated specific keywords recorded in audio clips and labeled them with corresponding tags based on requirements using custom annotation hosting servers provided by the clients</li>
          <br />  
          <li>Annotated specific words on images and labeled them with corresponding tags based on requirements using custom annotation hosting servers provided by the clients</li>
        </ul>
      </div>  
    </div>

    <br />
    <br />

    <div id="skills-heading" className="flex justify-start text-5xl font-sans text-white items-center">
      <h1>
        Skills
      </h1>
    </div>
    <div id="skills" className="flex flex-col gap-y-24">  
        <div id="languages" className="mx-auto max-w-xl px-6 lg:px-8">
          <h2 className="text-center mt-5 text-2xl font-semibold leading-8 text-white"> {/*Remember to add text dynamic sizing for responsive adjustments */}
            Languages
          </h2>
          <div className="mx-auto mt-10 flex flex-wrap justify-center items-center gap-x-10 gap-y-20 sm:gap-x-14 lg:mx-0 lg:max-w-none lg:flex-nowrap">
            <div className="flex items-center justify-center min-w-[100px] max-w-[150px] max-h-[100px]">
              <Image
                src="/images/python-svgrepo-com.svg"
                alt="Python"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center min-w-[100px] max-w-[150px] max-h-[100px]">
              <Image
                src="/images/js-svgrepo-com.svg"
                alt="JavaScript"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center min-w-[100px] max-w-[150px] max-h-[100px]">
              <Image
                src="/images/c.svg"
                alt="C++"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center min-w-[100px] max-w-[150px] max-h-[100px]">
              <Image
                src="/images/java-svgrepo-com.svg"
                alt="Java"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center min-w-[100px] max-w-[150px] max-h-[100px]">
              <Image
                src="/images/sql-svgrepo-com.svg"
                alt="SQL"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center min-w-[100px] max-w-[150px] max-h-[100px] invert">
              <Image
                src="/images/html5-01-svgrepo-com.svg"
                alt="HTML5"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center min-w-[100px] max-w-[150px] max-h-[100px]">
              <Image
                src="/images/scala-svgrepo-com.svg"
                alt="Scala"
                width={150}
                height={100}
                className="object-contain"
              />
            </div> 
          </div>
        </div>
        <div id="frameworks" className="mx-auto max-w-xl px-6 lg:px-8">
          <h2 className="text-center mt-5 text-2xl font-semibold leading-8 text-white"> {/*Remember to add text dynamic sizing for responsive adjustments */}
            Frameworks
          </h2>
          <div className="mx-auto mt-10 flex flex-wrap justify-center items-center gap-x-10 gap-y-20 sm:gap-x-14 lg:mx-0 lg:max-w-none lg:flex-nowrap">
            <div className="flex items-center justify-center min-w-[100px] max-w-[150px] max-h-[100px] invert">
              <Image
                src="/images/nextjs-svgrepo-com.svg"
                alt="NextJS"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center min-w-[100px] max-w-[150px] max-h-[100px] invert">
              <Image
                src="/images/react-16-svgrepo-com.svg"
                alt="ReactJS"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center min-w-[100px] max-w-[150px] max-h-[100px]">
              <Image
                src="/images/node-js-svgrepo-com.svg"
                alt="NodeJS"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center min-w-[100px] max-w-[150px] max-h-[100px] invert">
              <Image
                src="/images/graphql-svgrepo-com.svg"
                alt="GraphQL"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>  
            <div className="flex items-center justify-center min-w-[100px] max-w-[150px] max-h-[100px] invert">
              <Image
                src="/images/Apache_Spark_logo.svg"
                alt="Apache Spark"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>  
            <div className="flex items-center justify-center min-w-[100px] max-w-[150px] max-h-[100px]">
              <Image
                src="/images/Hadoop_logo.svg"
                alt="Hadoop"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>  
          </div>
        </div>
        <div id="databases" className="mx-auto max-w-xl px-6 lg:px-8">
          <h2 className="text-center mt-5 text-2xl font-semibold leading-8 text-white"> {/*Remember to add text dynamic sizing for responsive adjustments */}
            Databases
          </h2>
          <div className="mx-auto mt-10 flex flex-wrap justify-center items-center gap-x-10 gap-y-20 sm:gap-x-14 lg:mx-0 lg:max-w-none lg:flex-nowrap">
            <div className="flex items-center justify-center min-w-[100px] max-w-[150px] max-h-[100px]">
              <Image
                src="/images/mongodb-svgrepo-com.svg"
                alt="MongoDB"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center min-w-[100px] max-w-[150px] max-h-[100px]">
              <Image
                src="/images/Apache_Hive_logo.svg"
                alt="Hive"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div id="tools-and-tech" className="mx-auto max-w-xl px-6 lg:px-8">
          <h2 className="text-center mt-5 text-2xl font-semibold leading-8 text-white"> {/*Remember to add text dynamic sizing for responsive adjustments */}
            Tools & Technologies
          </h2>
          <div className="mx-auto mt-10 flex flex-wrap justify-center items-center gap-x-10 gap-y-20 sm:gap-x-14 lg:mx-0 lg:max-w-none lg:flex-nowrap">
            <div className="flex items-center justify-center min-w-[100px] max-w-[150px] max-h-[100px]">
              <Image
                src="/images/Git-logo.svg"
                alt="Git"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center min-w-[100px] max-w-[150px] max-h-[100px]">
              <Image
                src="/images/Jira_Logo.svg"
                alt="Jira"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center min-w-[100px] max-w-[150px] max-h-[100px]">
              <Image
                src="/images/GitLab_logo.svg"
                alt="GitLab"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center min-w-[100px] max-w-[150px] max-h-[100px]">
              <Image
                src="/images/Amazon_Web_Services_Logo.svg"
                alt="Amazon AWS"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center min-w-[100px] max-w-[150px] max-h-[100px]">
              <Image
                src="/images/docker-svgrepo-com.svg"
                alt="Docker"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>
    </div>
      
    <br />
    <br />
      
    <div id="education-heading" className="flex justify-start text-5xl font-sans text-white items-center">
      <h1>
        Education
      </h1>
    </div>  

    <div id="education" className="flex flex-col">
      <div className="institution flex-row mt-10 flex flex-wrap justify-center items-center gap-x-10 gap-y-10 sm:gap-x-14 lg:mx-0 lg:max-w-none lg:flex-nowrap rounded-md border-2 p-5">
        <div id="institution-image" className="flex items-center justify-center w-[300px] h-[200px] bg-white p-3">
          <Image
            src="/images/la_trobe_university.svg"
            alt="La Trobe University"
            width={250}
            height={150}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-between w-full">
          <div id="institution-info-left" className="flex flex-col">
            <h1>La Trobe University</h1>
            <h2>Degree: Master of Data Science</h2>
            <h2>Specialization: Artificial Intelligence Analytics</h2>
          </div>
          <div id="institution-info-right" className="flex flex-col lg:text-right mt-4 lg:mt-0">
            <h3>Melbourne, Victoria</h3>
            <h3>Graduation Date: Jul 2025</h3>
          </div>
        </div>
      </div>
      
      <div className="institution flex-row mt-10 flex flex-wrap justify-center items-center gap-x-10 gap-y-10 sm:gap-x-14 lg:mx-0 lg:max-w-none lg:flex-nowrap rounded-md border-2 p-5">
        <div id="institution-image" className="flex items-center justify-center w-[300px] h-[200px] bg-white p-3">
          <Image
            src="/images/bracu_logo.webp"
            alt="BRAC University"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-between w-full">
          <div id="institution-info-left" className="flex flex-col">
            <h1>BRAC University</h1>
            <h2>Degree: Bachelor of Computer Science and Engineering</h2>
            <h2>CGPA: 3.39/4.00</h2>
          </div>
          <div id="institution-info-right" className="flex flex-col lg:text-right mt-4 lg:mt-0">
            <h3>Dhaka, Bangladesh</h3>
            <h3>Graduation Date: Mar 2023</h3>
          </div>
        </div>
      </div>   
    </div>

    <br />
    <br />

    <div id="publications-heading" className="flex justify-start text-5xl font-sans text-white items-center">
      <h1>
        Publications
      </h1>
    </div>
    
    <div id="publication" className="flex flex-col">
      <div className="flex-row mt-10 flex flex-wrap justify-center items-center gap-x-10 gap-y-10 sm:gap-x-14 lg:mx-0 lg:max-w-none lg:flex-nowrap rounded-md border-2 p-5">
          <Image
            className="relative"
            src="/images/IEEE_logo.svg"
            alt="IEEE"
            width={200}
            height={200}
            priority
          />
          <h3 className="text-2xl font-semibold max-[320px]:text-base max-[375px]:text-lg max-[425px]:text-xl">
            Blockchain and Machine Learning for Fraud Detection: A Privacy-Preserving and Adaptive Incentive Based Approach
          </h3>
          <h5 className="max-[320px]:text-xs max-[375px]:text-sm max-[425px]:text-base">
            Financial fraud is increasing despite technological advancements, primarily due to a lack of inter-organizational collaboration and privacy concerns, which limit access to authentic financial data. This study proposes a blockchain and smart contract-based approach to enhance e-commerce fraud detection by enabling secure, collaborative data sharing, leading to a 98.93% testing accuracy and 98.22% F-beta score over eight incremental ML model updates.
          </h5>
      </div>
      
      <div className="flex-row mt-10 flex flex-wrap justify-center items-center gap-x-10 gap-y-10 sm:gap-x-14 lg:mx-0 lg:max-w-none lg:flex-nowrap rounded-md border-2 p-5">
          <Image
            className="relative"
            src="/images/IEEE_logo.svg"
            alt="IEEE"
            width={200}
            height={200}
            priority
          />
          <h3 className="text-2xl font-semibold max-[320px]:text-base max-[375px]:text-lg max-[425px]:text-xl">
            Interpreting Machine and Deep Learning Models for PDF Malware Detection using XAI and SHAP Framework
          </h3>
          <h5 className="max-[320px]:text-xs max-[375px]:text-sm max-[425px]:text-base">
            As data transfer in Portable Document Format (PDF) becomes widespread in the digital era, PDF files are increasingly vulnerable to malware attacks that traditional anti-virus software may not effectively detect. This study proposes using Explainable AI (XAI) with the SHAP framework to enhance transparency in classifying PDF files as malicious or clean, employing models like SGD, XGBoost, Single Layer Perceptron, and ANN.
          </h5>
      </div>  
    </div>

    <br />  
    <br />  

    <div id="contact-heading" className="flex justify-start text-5xl font-sans text-white items-center">
      <h1>
        Contact
      </h1>
    </div>

    <div className="mx-auto mt-10 flex flex-wrap justify-center items-center gap-x-10 gap-y-20 sm:gap-x-14 lg:mx-0 lg:max-w-none lg:flex-nowrap">
    {/* <!-- Github --> */}
    <button onClick={() => window.open('https://github.com/tahsinurRahman72/', '_blank')}
      type="button"
      data-twe-ripple-init
      data-twe-ripple-color="light"
      className="mb-2 inline-block rounded bg-[#333] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
      <span className="[&>svg]:h-4 [&>svg]:w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 496 512">
          <path
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
        </svg>
      </span>
    </button>

    {/* <!-- Facebook --> */}
    <button onClick={() => window.open('https://www.facebook.com/Tahsinur.Rahman2017/', '_blank')}
      type="button"
      data-twe-ripple-init
      data-twe-ripple-color="light"
      className="mb-2 inline-block rounded bg-[#1877f2] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
      <span className="[&>svg]:h-4 [&>svg]:w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 320 512">
          <path
            d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
        </svg>
      </span>
    </button>

    {/* <!-- Instagram --> */}
    <button onClick={() => window.open('https://www.instagram.com/tahsin.rafsan/', '_blank')}
      type="button"
      data-twe-ripple-init
      data-twe-ripple-color="light"
      className="mb-2 inline-block rounded bg-[#c13584] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
      <span className="[&>svg]:h-4 [&>svg]:w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 448 512">
          <path
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      </span>
    </button>

    {/* <!-- Google --> */}
    <button onClick={() => window.open('mailto:tahsinur72@gmail.com', '_blank')}
      type="button"
      data-twe-ripple-init
      data-twe-ripple-color="light"
      className="mb-2 inline-block rounded bg-[#ea4335] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
      <span className="[&>svg]:h-4 [&>svg]:w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 488 512">
          <path
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
        </svg>
      </span>
    </button>

    {/* <!-- Linkedin --> */}
    <button onClick={() => window.open('https://www.linkedin.com/in/tahsinur-rahman-674345181/', '_blank')}
      type="button"
      data-twe-ripple-init
      data-twe-ripple-color="light"
      className="mb-2 inline-block rounded bg-[#0077b5] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
      <span className="[&>svg]:h-4 [&>svg]:w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 448 512">
          <path
            d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
        </svg>
      </span>
    </button>
    </div>
    <br />
  </main>
  );
}
