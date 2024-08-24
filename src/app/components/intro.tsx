import Image from 'next/image';

export default function Intro() {
  return (
    <div id="intro-and-photo" className="flex min-h-screen flex-col min-[1000px]:flex-row justify-around items-center min-[2560px]:m-12"> 
      <div id="intro" className="flex">
        <p className="p-12 pl-[0.7rem] mb-3 text-xl min-[2560px]:text-3xl max-[320px]:text-base font-light">
          <i>
            I&apos;m Tahsinur Rahman, currently completing Master&apos;s in Data Science at La Trobe University,
            passionate about data manipulation, visualization, and automation with language proficiency in Scala, Python,
            JavaScript and respective frameworks. Focused on advancing data engineering to enhance data quality and accessibility,
            I&apos;m driven to unlock insights and innovate through data.
          </i>
        </p>
      </div>
      <Image
        className="relative rounded-e-full min-[2560px]:w-[1000px] min-[2560px]:h-[1000px]"
        src="/img.jpeg"
        alt="profile-photo"
        width={500}
        height={700}
        priority
      />
    </div>
  );
}
