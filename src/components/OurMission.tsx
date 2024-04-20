import Image from 'next/image';

import DonateImage from '../../public/donate_icon.png';
import VolunteerImage from '../../public/heart_icon.png';
import ShovelImage from '../../public/spade_icon.png';

const OurMission = () => {
  return (
    <section className="py-10">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-4xl pb-5">Nossa Missão</h1>
        <p className="text-center max-w-[650px]">
          Unimos forças com a Renova e formamos uma parceria sólida com a
          comunidade, tendo como objetivo o lançamento de um produto único, de
          alta qualidade, com um apelo social e sustentável.
        </p>
      </div>
      <div className="flex flex-row gap-5 items-center justify-center py-5">
        <div className="flex flex-col items-center justify-center max-w-[350px] border-2 border-[#1E5044] px-[30px] pt-5 pb-[30px]">
          <div>
            <Image className="w-24" src={DonateImage} alt="Donate image" />
          </div>
          <h2 className="pb-2">Donate</h2>
          <p className="text-center">
            Your generous donation helps our nonprofit support the local
            community gardens and gardeners!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center max-w-[350px] border-2 border-[#1E5044] px-[30px] pt-5 pb-[30px]">
          <div>
            <Image
              className="w-24"
              src={VolunteerImage}
              alt="Volunteer image"
            />
          </div>
          <h2 className="pb-2">Volunteer</h2>
          <p className="text-center">
            Whether a short-term event, project, or longer-term commitment, we
            welcome you to join the effort.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center max-w-[350px] border-2 border-[#1E5044] px-[30px] pt-5 pb-[30px]">
          <div>
            <Image className="w-24" src={ShovelImage} alt="Shovel image" />
          </div>
          <h2 className="pb-2">Adopt</h2>
          <p className="text-center">
            Our members range from first-time gardeners to master gardeners
            happy to share their knowledge.
          </p>
        </div>
      </div>
    </section>
  );
};

export { OurMission };
