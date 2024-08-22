import Image from "next/image";

export default function Home() {
  return (
  <main className="flex min-h-screen flex-col justify-between p-12">
    
    <div id="name" className="flex justify-start text-5xl font-sans text-white items-center">
      <h1>Tahsinur Rahman</h1>
    </div>
      
    {/* <div id="header" className="flex justify-between items-center p-4 bg-black">
      <div id="name" className="text-5xl font-sans text-white">
        <h1>Tahsinur Rahman</h1>
      </div>
      <div id="menu" className="flex space-x-6">
        <button className="text-white font-sans text-lg">Experience</button>
        <button className="text-white font-sans text-lg">Skills</button>
        <button className="text-white font-sans text-lg">Education</button>
        <button className="text-white font-sans text-lg">Publications</button>
      </div>
    </div> */}

    <div id="intro-and-photo"className="flex min-h-screen flex-col min-[1000px]:flex-row justify-around items-center"> 
      <div id="intro" className="flex">
          <p className="p-12 pl-[0.7rem] mb-3 text-xl font-light"><i>
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
      

  </main>

  );
}
