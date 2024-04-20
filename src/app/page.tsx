import Image from 'next/image';
import MainImage from '../../public/home-hero.jpg';
import { OurMission } from '@/components/OurMission';
import { Footer } from '@/components/Footer';
import { Galery } from '@/components/Galery';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="flex flex-row items-center py-6 border-2 border-[#1E5044]">
        <div className="pl-4">
          <h1 className="text-2xl font-bold">Cultivo do bem</h1>
        </div>
      </header>
      <section className='flex relative justify-center'>
        <Image
          className="h-[700px] w-full object-cover object-top"
          src={MainImage}
          alt="Agriculture image"
        />
        <div className='flex absolute gap-[2.5rem] items-center max-w-[650px] flex-col bottom-4 bg-[#1E5044] pt-[2.5vw] pb-[3vw] px-[6vw]'>
          <p className='text-base text-center text-white font-medium uppercase'>Bem-vindo à</p>

          <h1 className='text-base uppercase text-center text-[2.5rem] font-medium text-white'>Cultivo do Bem</h1>
        </div>
      </section>
      <OurMission />
      <Galery />
      <Footer />
    </main>
  );
}
