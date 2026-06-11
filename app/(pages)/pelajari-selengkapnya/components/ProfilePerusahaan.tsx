"use client";
import Image from 'next/image';
const ProfilePerusahaan = () => {
    return (
        <>
        <section id ="about" className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
        <span className="text-[#0058BE] dark:text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4 block">Profil Perusahaan</span>
        <h1 className="text-[#00236F] font-bold text-3xl md:text-4xl lg:text-5xl dark:text-blue-400 mb-8 leading-tight">Dedikasi Terhadap Presisi dan Keunggulan Layanan</h1>
        <div className="space-y-6 text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
        <p>Sejak didirikan, ProService telah menjadi pionir dalam menghadirkan solusi operasional kelas dunia bagi perusahaan-perusahaan terkemuka. Sejarah kami berakar pada komitmen untuk mengubah kompleksitas menjadi kejelasan melalui strategi yang terukur.</p>
        <p>Kami percaya bahwa setiap bisnis berhak mendapatkan mitra yang tidak hanya memahami tantangan teknis, tetapi juga memiliki integritas untuk memberikan hasil yang nyata. Dengan tim ahli lintas industri, kami terus berinnovasi untuk menjaga standar kualitas tertinggi di pasar global.</p>
        </div>
        </div>
        <div className="relative group">
        <div className="absolute -inset-4 bg-[#00236F]/5 dark:bg-blue-900/10 rounded-xl transition-all group-hover:bg-[#00236F]/10 dark:group-hover:bg-blue-900/20 -z-10"></div>
        <Image  width={2000} height={1334} alt="ProService Corporate Building"
        className="rounded-xl shadow-xl w-full object-cover h-[500px]"
        data-alt="A grand, ultra-modern corporate office building with sharp glass architecture reflecting a bright blue sky. The scene is shot from a low angle to emphasize power and stability, with clean lines and generous whitespace in the composition. The atmosphere is professional and high-end, utilizing a palette of deep blues and crisp whites."
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDXvHapNW-1fvbeGyAfswEZrq-OB-cvQgZR7whhfe2AzjTKM19yPuONxQEF_FUKYWnyEqEQvtueHpbbl6Khu7-_v2vXub4JoVTGUXrcPHE5f6iSW6-LpmpSNJ6Zx1pKUOBCvIy6yzaEfdTGoKrl3WhWr8vzad-aGwEHOukg997mWUkny5O3WizOqVHz21yzhn1b05Ju-84_iMfrrWpNGzW6ZMCoECKF4GDb3Np9Fd6d_QjxjUYXb2H4qdIl0KqSZ0XuzhLb1JxCMY"/>
        </div>
        </div>
        </section>
        </>
    )
}

export default ProfilePerusahaan;
