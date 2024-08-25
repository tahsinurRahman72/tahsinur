import Image from 'next/image';

export default function Education() {
    return (
    <>
    <div id="education-heading" className="flex my-6 justify-start text-5xl min-[2560px]:text-8xl min-[2560px]:m-12 font-sans text-white items-center">
      <h1>
        Education
      </h1>
    </div>  

    <div id="education" className="flex flex-col min-[2560px]:m-12">
      <div className="institution flex-row mt-10 flex flex-wrap justify-center items-center gap-x-10 gap-y-10 sm:gap-x-14 lg:mx-0 lg:max-w-none lg:flex-nowrap rounded-md border-2 p-5 min-[2560px]:p-10">
        <div id="institution-image" className="flex items-center justify-center w-[300px] h-[200px] bg-white p-3">
          <Image
            src="images/latrobeuniversity.svg"
            alt="La Trobe University"
            width={250}
            height={150}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col min-[2560px]:text-2xl lg:flex-row justify-between w-full">
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
      
      <div className="institution flex-row mt-10 flex flex-wrap justify-center items-center gap-x-10 gap-y-10 sm:gap-x-14 lg:mx-0 lg:max-w-none lg:flex-nowrap rounded-md border-2 p-5 min-[2560px]:p-10">
        <div id="institution-image" className="flex items-center justify-center w-[300px] h-[200px] bg-white p-3">
          <Image
            src="images/braculogo.webp"
            alt="BRAC University"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col min-[2560px]:text-2xl lg:flex-row justify-between w-full">
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
    </>
    )
}