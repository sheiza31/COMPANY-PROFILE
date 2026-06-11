'use client'
import Link from 'next/link';
import { ArrowBigRight, MapPin } from 'lucide-react';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[450px] flex items-center justify-center bg-gray-50 rounded-xl border border-[#C5C5D3]">
      <div className="text-gray-500 font-light flex flex-col items-center gap-2">
        <svg className="animate-spin h-8 w-8 text-[#0058BE]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span className="text-sm font-medium">Memuat peta...</span>
      </div>
    </div>
  )
});

const MapSection = () => {
  return (
    <>
      <section className="py-6 px-6 md:py-6 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between lg:items-end items-start mb-12 gap-6">
            <div>
              <h2 className="font-semibold text-[32px] text-[#00236F] mb-2">
                Lokasi Kami
              </h2>
              <p className="text-black text-[16px] font-light">
                Kunjungi kantor pusat kami di jantung kota Jakarta.
              </p>
            </div>
            <div className="flex gap-4 items-center text-secondary">
              <MapPin className="text-[#0058BE]" size={20} />
              <span className="font-medium text-[#0058BE]">
                Sudirman Central Business District, Jakarta
              </span>
            </div>
          </div>
          <div className="relative group">
            <MapComponent />
            <div className="absolute bottom-6 right-6 z-[1000] bg-white/90 backdrop-blur-md p-4 rounded-lg shadow-xl hidden md:block max-w-xs">
              <h4 className="font-bold text-[#00236F] mb-1">
                Kantor Pusat ProService
              </h4>
              <p className="text-sm text-[#444651] mb-3">
                Gedung Sudirman Lantai 42, Jakarta <br /> Selatan.
              </p>
              <Link className="text-[#0058BE] text-sm font-semibold hover:underline flex items-center gap-1" href="https://maps.google.com/?q=-6.224434,106.809755" target="_blank" rel="noopener noreferrer">
                Petunjuk Arah
                <ArrowBigRight className="text-[#0058BE]" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MapSection;
