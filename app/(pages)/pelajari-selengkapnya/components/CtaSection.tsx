"use client"
import {useRouter} from 'next/navigation';
// import html2pdf from "html2pdf.js";
//  function DownloadPDF() {
//           const element = document.getElementById("about")as HTMLElement;
//           html2pdf()
//             .from(element)
//             .save("company-profile.pdf");
//     }
const CtaSection = () => {
    const router = useRouter();
    return (
        <>
        <section id="services" className="mb-16 md:mb-24 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto bg-[#00236F] text-white rounded-xl p-12 text-center overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0058BE]/10 rounded-full -mr-32 -mt-32"></div>
        <div className="relative z-10">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Siap Mengoptimalkan Bisnis Anda?
        </h2>
        <p className="max-w-xl mx-auto mb-10 text-blue-100 text-lg md:text-xl leading-relaxed">
            Bicarakan tantangan Anda dengan konsultan kami dan temukan bagaimana ProService dapat membantu Anda mencapai target strategis tahun ini.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button onClick={() => router.push('https://wa.me/628886327297')}
        className="bg-[#0058BE] text-white px-10 py-4 rounded-lg font-bold hover:bg-[#00479E] transition-all hover:cursor-pointer">
            Hubungi Tim Kami
        </button>
       <button onClick={()=>window.print()}
        className="bg-[#0058BE]  text-white px-10 py-4 rounded-lg font-bold hover:bg-white hover:text-black transition-all hover:cursor-pointer">
            Unduh Company Profile
        </button>
        </div>
        </div>
        </div>
        </section>
        </>
    )
}
export default  CtaSection
