import dynamic from 'next/dynamic';
import RootLayout from './layout';
import Header from '@/app/(pages)/components/Header';
import HeroSection from '@/app/(pages)/components/HeroSection';
import Reveal from '@/app/(pages)/components/Reveal';


const ServicesSection = dynamic(() => import('@/app/(pages)/components/ServicesSection'), {
  loading: () => (
    <div className="py-[70px] md:py-[120px] px-6 max-w-[1280px] mx-auto animate-pulse">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mx-auto mb-4"></div>
      <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded w-20 mx-auto mb-16"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl h-64"></div>
        ))}
      </div>
    </div>
  )
});

const About = dynamic(() => import('@/app/(pages)/components/About'), {
  loading: () => (
    <div className="py-20 md:px-6 mb-[128px] max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-pulse">
      <div className="flex flex-col gap-8 order-2">
        <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
      </div>
      <div className="aspect-video rounded-xl bg-gray-100 dark:bg-gray-800 order-1 animate-pulse"></div>
    </div>
  )
});

const SolutionSection = dynamic(() => import('@/app/(pages)/components/SolutionSection'), {
  loading: () => (
    <div className="py-[70px] md:py-[120px] px-6 max-w-[1280px] mx-auto animate-pulse">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mx-auto mb-4"></div>
      <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded w-20 mx-auto mb-16"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl h-64"></div>
        ))}
      </div>
    </div>
  )
});

const MapSection = dynamic(() => import('@/app/(pages)/components/MapSection'), {
  loading: () => (
    <div className="py-6 max-w-[1280px] mx-auto px-4 animate-pulse">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="w-1/3">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
        </div>
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
      </div>
      <div className="w-full h-[450px] bg-gray-100 dark:bg-gray-800 rounded-xl"></div>
    </div>
  )
});

const Footer = dynamic(() => import('@/app/(pages)/components/Footer'), {
  loading: () => (
    <div className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-6 py-[48px] animate-pulse">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-64"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48"></div>
      </div>
    </div>
  )
});

export default async function Page() {
  return (
    <>
      <Header />
      <RootLayout>
        <Reveal direction="down" delay={0.3}>
          <HeroSection />
        </Reveal>
        <Reveal direction="up" delay={0.2}>
          <ServicesSection />
        </Reveal>
        <Reveal direction="left" delay={0.2}>
          <About />
        </Reveal>
        <Reveal direction="right" delay={0.2}>
          <SolutionSection />
        </Reveal>
        <Reveal direction="up" delay={0.2}>
          <MapSection />
        </Reveal>
      </RootLayout>
      <Reveal direction="none" delay={0.2}>
        <Footer />
      </Reveal>
    </>
  );
}