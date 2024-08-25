import Image from 'next/image';

export default function Experience() {
    return (
    <>
    <div id="experience-heading" className="flex my-6 justify-start text-5xl min-[2560px]:text-8xl font-sans text-white items-center min-[2560px]:m-12">
        <h1>
        Experience
        </h1>
    </div>

    <br />
        
    <div id="experiences" className="flex min-[1000px]:space-x-3 flex-col min-[1000px]:flex-row max-[1000px]:items-center max-[1000px]:space-y-2 justify-center min-[2560px]:m-12">
    <div className="expbox 
        transition-colors
        hover:dark:bg-teal-700
        min-[2560px]:p-10">
        <Image
        className="relative"
        src="images/invtech.svg"
        alt="invisible-technologies"
        width={200}
        height={200}
        priority
        />
        <br />
        <h3 className="mb-3 text-xl min-[2560px]:text-3xl font-semibold">
            Invisible Technologies | Advanced AI Data Trainer
        </h3>
        <h6 className="min-[2560px]:text-xl">San Francisco, California | Jul 2022 - Aug 2024</h6>
        <br />
        <ul className="m-0 max-w-[50ch] min-[2560px]:text-2xl text-balance text-sm">
            <li>Responsible for taking a deep dive on data driven behavior of machine models and reporting anomalies in such results.</li>
            <br />  
            <li>Enhancing model&apos;s approach on data by implementing various methods to improve behavior that benefits on the user end.</li>
        </ul>
    </div>
        
    <div className="expbox
        transition-colors
        hover:dark:bg-teal-700
        min-[2560px]:p-10">
        <Image
        className="relative"
        src="images/daraz.png"
        alt="daraz"
        width={100}
        height={100}
        priority
        />
        <br />
        <h3 className="mb-3 text-xl min-[2560px]:text-3xl font-semibold">
            Daraz (Hungrynaki) | Product (Tech) Intern
        </h3>
        <h6 className="min-[2560px]:text-xl">Dhaka, Bangladesh | Feb 2022 - May 2022</h6>
        <br />
        <ul className="m-0 max-w-[50ch] min-[2560px]:text-2xl text-balance text-sm">
            <li>Handled API Documentation on GraphQL schemas of the entire product codebase to ensure better understanding of each API</li>
            <br />  
            <li>Conducted breakdown explanation of logical calculations of each API present in the codebase</li>
        </ul>
    </div>

    <div className="expbox 
        transition-colors
        hover:dark:bg-teal-700
        min-[2560px]:p-10">
        <Image
        className="relative"
        src="images/intelligenttr.png"
        alt="intelligent-machines"
        width={150}
        height={100}
        priority
        />
        <br />
        <h3 className="mb-3 text-xl min-[2560px]:text-3xl font-semibold">
            Intelligent Machines | AI Data Annotator
        </h3>
        <h6 className="min-[2560px]:text-xl">Dhaka, Bangladesh | Mar 2020 - Nov 2021</h6>
        <br />
        <ul className="m-0 max-w-[50ch] min-[2560px]:text-2xl text-balance text-sm">
            <li>Annotated specific keywords recorded in audio clips and labeled them with corresponding tags based on requirements using custom annotation hosting servers provided by the clients</li>
            <br />  
            <li>Annotated specific words on images and labeled them with corresponding tags based on requirements using custom annotation hosting servers provided by the clients</li>
        </ul>
    </div>  
    </div>
    </>  
    
  );
}
