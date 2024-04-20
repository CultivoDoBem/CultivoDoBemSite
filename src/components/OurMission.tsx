import Image from 'next/image';

import DonateImage from '../../public/donate_icon.png';
import VolunteerImage from '../../public/heart_icon.png';
import ShovelImage from '../../public/spade_icon.png';

const OurMission = () => {
  return (
    <section className="pt-10">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-4xl pb-5">Nossa Missão</h1>
        <p className="text-center max-w-[650px]">
          Unimos forças com a Renova e formamos uma parceria sólida com a
          comunidade, tendo como objetivo o lançamento de um produto único, de
          alta qualidade, com um apelo social e sustentável.
        </p>
      </div>
      <div className="flex flex-row gap-5 items-center justify-center pt-10">
        <div className="flex flex-col items-center justify-center max-w-[360px] border-2 border-[#1E5044] px-[30px] pt-5 pb-[30px]">
          <div>
            <Image className="w-24" src={DonateImage} alt="Donate image" />
          </div>
          <h2 className="pb-2">Crescimento</h2>
          <p className="text-center">
            Aumentamos do padrão comercial para um padrão premium, elevando de 80 reais para 235 reais o valor por saco!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center max-w-[360px] border-2 border-[#1E5044] px-[30px] pt-5 pb-[30px]">
          <div>
            <Image
              className="w-24"
              src={VolunteerImage}
              alt="Volunteer image"
            />
          </div>
          <h2 className="pb-2">Parceria</h2>
          <p className="text-center">
            Parceria com as comunidades à margem do Rio Doce, afetadas pela tragédia do rompimento da Barragem do Fundão, em Mariana
          </p>
        </div>
        <div className="flex flex-col items-center justify-center max-w-[360px] border-2 border-[#1E5044] px-[30px] pt-5 pb-[30px]">
          <div>
            <Image className="w-24" src={ShovelImage} alt="Shovel image" />
          </div>
          <h2 className="pb-2">Antes</h2>
          <p className="text-center">
            As vendas eram feitas separadamente, perdendo a possibilidade de venda coletiva com valores mais justos
          </p>
        </div>
      </div>
    </section>
  );
};

export { OurMission };
