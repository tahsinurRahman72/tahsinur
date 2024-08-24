import Image from 'next/image';

export default function Publications() {
    return (
        <>
            <div id="publications-heading" className="flex justify-start text-5xl min-[2560px]:text-8xl min-[2560px]:m-12 font-sans text-white items-center">
            <h1>
                Publications
            </h1>
            </div>
            
            <div id="publication" className="flex flex-col min-[2560px]:m-12">
            <div className="flex-row mt-10 flex flex-wrap justify-center items-center gap-x-10 gap-y-10 sm:gap-x-14 lg:mx-0 lg:max-w-none lg:flex-nowrap rounded-md border-2 p-5 min-[2560px]:p-10">
                <Image
                    className="relative"
                    src="/images/IEEE_logo.svg"
                    alt="IEEE"
                    width={200}
                    height={200}
                    priority
                />
                <h3 className="min-[2560px]:text-2xl text-xl font-semibold max-[320px]:text-base max-[375px]:text-lg max-[425px]:text-xl">
                    Blockchain and Machine Learning for Fraud Detection: A Privacy-Preserving and Adaptive Incentive Based Approach
                </h3>
                <h5 className="min-[2560px]:text-xl max-[320px]:text-xs max-[375px]:text-sm max-[425px]:text-base min-[2560px]:p-8">
                    Financial fraud is increasing despite technological advancements, primarily due to a lack of inter-organizational collaboration and privacy concerns, which limit access to authentic financial data. This study proposes a blockchain and smart contract-based approach to enhance e-commerce fraud detection by enabling secure, collaborative data sharing, leading to a 98.93% testing accuracy and 98.22% F-beta score over eight incremental ML model updates.
                </h5>
            </div>
            
            <div className="flex-row mt-10 flex flex-wrap justify-center items-center gap-x-10 gap-y-10 sm:gap-x-14 lg:mx-0 lg:max-w-none lg:flex-nowrap rounded-md border-2 p-5 min-[2560px]:p-10">
                <Image
                    className="relative"
                    src="/images/IEEE_logo.svg"
                    alt="IEEE"
                    width={200}
                    height={200}
                    priority
                />
                <h3 className="min-[2560px]:text-2xl text-xl font-semibold max-[320px]:text-base max-[375px]:text-lg max-[425px]:text-xl">
                    Interpreting Machine and Deep Learning Models for PDF Malware Detection using XAI and SHAP Framework
                </h3>
                <h5 className="min-[2560px]:text-xl max-[320px]:text-xs max-[375px]:text-sm max-[425px]:text-base">
                    As data transfer in Portable Document Format (PDF) becomes widespread in the digital era, PDF files are increasingly vulnerable to malware attacks that traditional anti-virus software may not effectively detect. This study proposes using Explainable AI (XAI) with the SHAP framework to enhance transparency in classifying PDF files as malicious or clean, employing models like SGD, XGBoost, Single Layer Perceptron, and ANN.
                </h5>
            </div>  
            </div>
        </>
    )
}