import Image from 'next/image';

export default function Skills() {
  return (
    <>
    <div id="skills-heading" className="flex justify-start text-5xl min-[2560px]:text-8xl min-[2560px]:m-12 font-sans text-white items-center">
      <h1>
        Skills
      </h1>
    </div>
    <div id="skills" className="flex flex-col gap-y-20 min-[2560px]:m-12">  
        <div id="languages" className="mx-auto lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl px-6 lg:px-8">
          <h2 className="text-center mt-5 text-2xl font-semibold leading-8 text-white"> {/*Remember to add text dynamic sizing for responsive adjustments */}
            Languages
          </h2>
          <div className="mx-auto mt-10 flex flex-wrap justify-center items-center gap-x-10 gap-y-20 sm:gap-x-14 lg:mx-0 lg:max-w-none lg:flex-nowrap">
            <div className="flex items-center justify-center min-[320px]:w-[50px] md:w-[75px] lg:w-[100px] xl:w-[250px]">
              <Image
                src="images/pythonsvgrepocom.svg"
                alt="Python"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center min-[320px]:w-[50px] md:w-[75px] lg:w-[100px] xl:w-[250px]">
              <Image
                src="images/jssvgrepocom.svg"
                alt="JavaScript"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center min-[320px]:w-[50px] md:w-[75px] lg:w-[100px] xl:w-[250px]">
              <Image
                src="images/c.svg"
                alt="C++"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center min-[320px]:w-[50px] md:w-[75px] lg:w-[100px] xl:w-[250px]">
              <Image
                src="images/javasvgrepocom.svg"
                alt="Java"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center min-[320px]:w-[50px] md:w-[75px] lg:w-[100px] xl:w-[250px]">
              <Image
                src="images/sqlsvgrepocom.svg"
                alt="SQL"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center min-[320px]:w-[50px] md:w-[75px] lg:w-[100px] xl:w-[250px] invert">
              <Image
                src="images/html501svgrepocom.svg"
                alt="HTML5"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center min-[320px]:w-[50px] md:w-[75px] lg:w-[100px] xl:w-[250px]">
              <Image
                src="images/scalasvgrepocom.svg"
                alt="Scala"
                width={100}
                height={100}
                className="object-contain"
              />
            </div> 
          </div>
        </div>
        <div id="frameworks" className="mx-auto lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl px-6 lg:px-8">
          <h2 className="text-center mt-5 text-2xl font-semibold leading-8 text-white"> {/*Remember to add text dynamic sizing for responsive adjustments */}
            Frameworks
          </h2>
          <div className="mx-auto mt-10 flex flex-wrap justify-center items-center gap-x-10 gap-y-20 sm:gap-x-14 lg:mx-0 lg:max-w-none lg:flex-nowrap">
            <div className="flex items-center justify-center min-[320px]:w-[50px] md:w-[75px] lg:w-[100px] xl:w-[250px] invert">
              <Image
                src="images/nextjssvgrepocom.svg"
                alt="NextJS"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center min-[320px]:w-[50px] md:w-[75px] lg:w-[100px] xl:w-[250px] invert">
              <Image
                src="images/react16svgrepocom.svg"
                alt="ReactJS"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center min-[320px]:w-[50px] md:w-[75px] lg:w-[100px] xl:w-[250px]">
              <Image
                src="images/nodejssvgrepocom.svg"
                alt="NodeJS"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center min-[320px]:w-[50px] md:w-[75px] lg:w-[100px] xl:w-[250px] invert">
              <Image
                src="images/graphqlsvgrepocom.svg"
                alt="GraphQL"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>  
            <div className="flex items-center justify-center min-[320px]:w-[50px] md:w-[75px] lg:w-[100px] xl:w-[250px] invert">
              <Image
                src="images/ApacheSparklogo.svg"
                alt="Apache Spark"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>  
            <div className="flex items-center justify-center min-[320px]:w-[50px] md:w-[75px] lg:w-[100px] xl:w-[250px]">
              <Image
                src="images/Hadooplogo.svg"
                alt="Hadoop"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>  
          </div>
        </div>
        <div id="databases" className="mx-auto lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl px-6 lg:px-8">
          <h2 className="text-center mt-5 text-2xl font-semibold leading-8 text-white"> {/*Remember to add text dynamic sizing for responsive adjustments */}
            Databases
          </h2>
          <div className="mx-auto mt-10 flex flex-wrap justify-center items-center gap-x-10 gap-y-20 sm:gap-x-14 lg:mx-0 lg:max-w-none lg:flex-nowrap">
            <div className="flex items-center justify-center min-[320px]:w-[50px] md:w-[75px] lg:w-[100px] xl:w-[250px]">
              <Image
                src="images/mongodbsvgrepocom.svg"
                alt="MongoDB"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center min-[320px]:w-[50px] md:w-[75px] lg:w-[100px] xl:w-[250px]">
              <Image
                src="images/ApacheHivelogo.svg"
                alt="Hive"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div id="tools-and-tech" className="mx-auto lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl px-6 lg:px-8">
          <h2 className="text-center mt-5 text-2xl font-semibold leading-8 text-white"> {/*Remember to add text dynamic sizing for responsive adjustments */}
            Tools & Technologies
          </h2>
          <div className="mx-auto mt-10 flex flex-wrap justify-center items-center gap-x-10 gap-y-20 sm:gap-x-14 lg:mx-0 lg:max-w-none lg:flex-nowrap">
            <div className="flex items-center justify-center min-[320px]:w-[50px] md:w-[75px] lg:w-[100px] xl:w-[250px]">
              <Image
                src="images/Gitlogo.svg"
                alt="Git"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center min-[320px]:w-[50px] md:w-[75px] lg:w-[100px] xl:w-[250px]">
              <Image
                src="images/JiraLogo.svg"
                alt="Jira"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center min-[320px]:w-[50px] md:w-[75px] lg:w-[100px] xl:w-[250px]">
              <Image
                src="images/GitLablogo.svg"
                alt="GitLab"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center min-[320px]:w-[50px] md:w-[75px] lg:w-[100px] xl:w-[250px]">
              <Image
                src="images/AmazonWebServicesLogo.svg"
                alt="Amazon AWS"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center min-[320px]:w-[50px] md:w-[75px] lg:w-[100px] xl:w-[250px]">
              <Image
                src="images/dockersvgrepocom.svg"
                alt="Docker"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>
    </div>
    </>
  );
}
