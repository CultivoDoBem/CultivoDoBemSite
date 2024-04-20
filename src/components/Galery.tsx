'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
// In order
import ReceptionImage from '../../public/galery/reception.jpg';
import FirstMeetingImage from '../../public/galery/firstMeeting.jpg';
import PlowedLandImage from '../../public/galery/plowedLand.jpg';
import FertilizerDonationImage from '../../public/galery/fertilizerDonation.jpg';
import SeedsDonationImage from '../../public/galery/seedsDonation.jpg';
import BeansPlantationImage from '../../public/galery/beansPlantation.jpg';
import BeansHarvestImage from '../../public/galery/beansHarvest.jpg';
import BeansClassificationImage from '../../public/galery/beansClassification.jpg';
import BeansClassification2Image from '../../public/galery/beansClassification2.jpg';
import SecondMeetingImage from '../../public/galery/secondMeeting.jpg';
import LoadingImage from '../../public/galery/loading.jpg';
import Loading2Image from '../../public/galery/loading2.jpg';
import ArrivalImage from '../../public/galery/arrival.jpg';
import PackagingImage from '../../public/galery/packaging.jpg';
import SupermarketLaunchImage from '../../public/galery/supermarketLaunch.jpg';
import SupermarketLaunch2Image from '../../public/galery/supermarketLaunch2.jpg';

const items = [
  ReceptionImage,
  FirstMeetingImage,
  PlowedLandImage,
  FertilizerDonationImage,
  SeedsDonationImage,
  BeansPlantationImage,
  BeansHarvestImage,
  BeansClassificationImage,
  BeansClassification2Image,
  SecondMeetingImage,
  LoadingImage,
  Loading2Image,
  ArrivalImage,
  PackagingImage,
  SupermarketLaunchImage,
  SupermarketLaunch2Image,
];

const Galery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section className="my-[40px] items-center max-w-[1210px] mx-auto">
      <h2 className="font-bold pb-5  text-center text-[#232b2b] text-[2.5rem]">
        Galeria
      </h2>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider bg-slate-50">
          {items.map((image) => (
            <div className="keen-slider__slide number-slide1">
              <Image
                src={image}
                className="h-[800px] align-bottom max-w-full object-cover"
                alt="Image"
              />
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {Array.from({
            length: instanceRef.current.track.details.slides.length,
          })
            .fill('')
            .map((_, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={'dot' + (currentSlide === idx ? ' active' : '')}
                ></button>
              );
            })}
        </div>
      )}
    </section>
  );
};

function Arrow(props: any) {
  const disabled = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

// 11

export { Galery };
