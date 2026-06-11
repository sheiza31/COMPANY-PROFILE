"use client";
import {useRouter} from 'next/navigation';
const HeroSection = () => {
const router = useRouter();
return (
    <>
    <section 
    className="hero-gradient relative overflow-hidden px-6 pt-20 pb-section-padding-mobile md:px-6">
    <div 
    className="max-w-[1280px] mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div        
    className="flex flex-col gap-8">
    <h1 
    className="font-bold text-4xl md:font-bold md:text-3xl lg:text-[64px] text-[#00236F] leading-tight">
    Solusi Profesional untuk Bisnis Anda
    </h1>
    <p 
    className="font-bold text-xl opacity-80% text-[#444651] max-w-xl leading-8">
    Kami menghadirkan keunggulan operasional melalui strategi konsultasi inovatif dan manajemen teknologi terintegrasi untuk pertumbuhan bisnis berkelanjutan.
    </p>
    <div 
    className="flex flex-wrap gap-4">
    <button 
    onClick={() => router.push('https://wa.me/628886327297')}
    className="bg-secondary text-black border-2 border-black px-8 py-4 rounded-lg  text-medium font-semibold hover:opacity-90 transition-opacity hover:cursor-pointer hover:bg-blue-500 hover:text-white hover:border-white">
    Mulai Konsultasi
    </button>
    <button 
    onClick={() => router.push('/pelajari-selengkapnya')}
    className="border-2 border-black text-black px-8 py-4 rounded-lg hover:cursor-pointer  text-medium font-semibold hover:bg-blue-500 hover:text-white transition-all hover:border-white ">
     Pelajari Selengkapnya  
    </button>
    </div>
    </div>
    <div 
    className="relative">
    <div 
    className="aspect-video rounded-xl overflow-hidden shadow-2xl">
    <img 
    className="w-full h-full object-cover"
    data-alt="A bright and spacious modern corporate office environment with glass walls and minimalist white furniture. The scene is bathed in natural daylight, creating a high-contrast and professional atmosphere consistent with a clean blue and white corporate brand identity. In the background, professional team members are engaged in collaborative work, emphasizing a mood of stable and reliable business excellence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA98wXP3teMm_rj8TCYBHfenvnUlr_7VT59mF4e6JVgWV8x_CAtUim5dpYstViDpkOSY7gk3ic2tM5ljiBYXrFelbWoZV5kYOhpvs0VVx-8e9WR__I3t4ezcFas9Rs6q9sp1Rd5A4qUjoZh2WhBn1vd6U3b0laxxZ4Ni00Qma1IoCeSP0hWE7avIwPZzXWCehcUx5VQdpn04clVuno8Wis4gRCX8RhaRjgZcAh_9HLdx2ck7nkqpKDUFlfuLCQwIixkMlE7b9Fnwu0"/>
    </div>
    <div 
    className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-fixed opacity-20 rounded-full blur-3xl"></div>
    </div>
    </div>
    </section>
    </>
)
}

export default HeroSection;