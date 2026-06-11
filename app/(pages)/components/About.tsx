import Image from "next/image";
const About = () =>{
    return (
        <>
        
    <section id="about"
    className=" px-6 relative overflow-hidden pt-20 pb-section-padding-mobile md:px-6 mb-[128px]">
    <div 
    className="max-w-[1280px] mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div        
    className="flex flex-col gap-8 order-2">
    <h1 
    className="font-bold md:font-bold text-4xl md:text-2xl lg:text-[64px] text-[#00236F] leading-tight">
    Tentang Kami
    </h1>
    <p 
    className="font-bold text-xl opacity-80% text-[#444651] max-w-xl leading-8">
    Optimalkan operasional bisnis Anda dengan strategi manajemen teknologi yang tepat, efisien, dan berorientasi pada pertumbuhan.
    </p>
    <div 
    className="flex flex-wrap gap-4">
    </div>
    </div>
    <div 
    className="relative order-1">
    <div 
    className="aspect-video rounded-xl overflow-hidden shadow-2xl">
    <Image 
    className="w-full h-full object-cover" 
    width={1280} height={720} src="/assets/about.jpg" alt="about image"/>
    </div>
    <div 
    className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-fixed opacity-20 rounded-full blur-3xl"></div>
    </div>
    </div>
    </section>    
        </>
    )
}

export default About;