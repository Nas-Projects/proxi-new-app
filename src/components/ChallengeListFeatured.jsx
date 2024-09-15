// src/components/ChallengeList.js
import Link from 'next/link';
import React from 'react';
import { FadeIn, FadeInStagger } from './FadeIn'
import  { urlFor } from "@/sanity/lib/image.js";
const challenges = [
  {
    id: '18055044-82ff-4f88-b041-dffb4e04182d',
    title: 'Core & Abs Challenge',
    participants: 473,
    sessions: 3,
    price: 'Free',
    image: 'https://static.wixstatic.com/media/c837a6_25f64eb6dc7c40ed8e4fad42007d085e~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp',
    link: 'https://www.wix.com/demone2/roy-pratt/challenge-page/18055044-82ff-4f88-b041-dffb4e04182d',
  },
  {
    id: '907f746d-4d5a-42bf-b374-016f616e5bd3',
    title: 'Upper Body Challenge',
    participants: 231,
    sessions: 5,
    price: 'Free',
    image: 'https://static.wixstatic.com/media/c837a6_be3f2b7431d748059fa9104b595c91ab~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp',
    link: 'https://www.wix.com/demone2/roy-pratt/challenge-page/907f746d-4d5a-42bf-b374-016f616e5bd3',
  },
  {
    id: 'bb7b8c48-93cf-4844-bc9b-689a8a14d86f',
    title: 'Movement Challenge',
    participants: 41,
    sessions: 3,
    price: 'Free',
    image: 'https://static.wixstatic.com/media/c837a6_0f4c434b9b8c4a159c8a67c2307aea48~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp',
    link: 'https://www.wix.com/demone2/roy-pratt/challenge-page/bb7b8c48-93cf-4844-bc9b-689a8a14d86f',
  },
];

const ChallengeListFeatured = ({tracks}) => {


  console.log("TRACKS--->",tracks);
  return (
    <div
      data-mesh-id="comp-kkr1kfydinlineContent"
      data-testid="inline-content"
      className="mwF7X1 bg-[black] !text-white -mt-[23em] sm:-mt-0  py-24 relative sm:static"
    >
      <div
        className=""
        data-testid="mesh-container-content"
      >
        <div
          id="comp-kkr1o0a8"
          className="HcOXKn c9GqVL QxJLC3 comp-kkr1o0a8 wixui-rich-text mt-[-9%] sm:mt-[-2em] z-20 !px-[5%]"
          data-testid="richTextElement"
        >
          <h1
            className="font_0 wixui-rich-text__text "
            style={{ lineHeight: 'normal', fontSize: 76 }}
          >
            <span
              style={{ letterSpacing: '0.02em' }}
              className="wixui-rich-text__text"
            >
              <span
                style={{
                  fontFamily: 'dinneuzeitgroteskltw01-_812426,sans-serif ',
                }}
                className="wixui-rich-text__text"
              >
                <span className="!text-slate-300 color_11 wixui-rich-text__text uppercase pl-[1%] !text-4xl">
                Get REAL Results.
                  <br className="wixui-rich-text__text" />
                  {/* YOU Desrve it  */}
                </span>
              </span>
            </span>
          </h1>
        </div>
      
        <div
          id="comp-kkr1spmf"
          className="HcOXKn c9GqVL QxJLC3 comp-kkr1spmf wixui-rich-text !px-[5%] p-[2%] !px-[5%]"
          data-testid="richTextElement"
        >
          <h2
            className="font_3 wixui-rich-text__text"
            style={{ lineHeight: 'normal', fontSize: 30 }}
          >
            <span
              style={{ letterSpacing: '0.02em' }}
              className="wixui-rich-text__text"
            >
              <span
                style={{
                  fontFamily: 'dinneuzeitgroteskltw01-_812426,sans-serif',
                }}
                className="wixui-rich-text__text"
              >
                <span className="color_11 wixui-rich-text__text">
                  JOIN THE PROXY TRAINING CLUB
                </span>
              </span>
            </span>
          </h2>
        </div>
        <div id="comp-kn8ukx5p" className="TWFxr5 !px-">
          <div className="comp-kn8ukx5p">
       
            <div
              data-hook="challenge-list-wrapper"
              className="sOHw2Yq ofoS0n_---titleAlignment-4-left "
            >
          <FadeInStagger key={"challenges-faddr-group-stagger"}>       
          <ul dir="ltr"
                data-hook="challenge-list"
                
              >
                {tracks.slice(0,4).map((challenge) => (
                     <FadeIn key={challenge._id}> 
                     <li key={challenge._id} className="sVi35Q0">
                  
                    <section className="!bg-[#3f4044ba] sDygOtP ow3GuWt---textAlignment-4-left ow3GuWt---imageShape-9-rectangle ow3GuWt---cropSelection-6-MIDDLE ow3GuWt---imageRatio-2-hd ow3GuWt---imageLayoutType-4-Left ow3GuWt---imageResize-4-Crop flex-col lg:grid grid-cols-2  my-4 lg:my-8 shadow-xl ">
                      <div className="szWTfoA">
                        <Link className=""
                          tabIndex={-1}
                          aria-hidden="true"
                          href={`tracks/${challenge._id}`}
                        >
                          <div className="sX7T2Ai h-full max-h-[10em] lg:max-h-[30em] object-cover w-full">
                            <img
                              alt={challenge.title}
                              data-hook="image-wrapper"
                              className="sMPyYgW"
                              src={urlFor(challenge?.images[0]).url()}
                              loading="eager"
                            />
                          </div>
                        </Link>
                      </div>
                      <div className="sldNKGy !px-[-10em] !py-[34px] lg:p-[6%] !z-20 min-w-[367px]">
                        <div data-hook="challenge-badge" />
                        <div
                          data-hook="info-wrapper"
                          style={{ position: 'absolute', width: '100%' }}
                        />
                        <div className=" lg:p-[calc(var(--cardTopBottomPadding) * 1px) calc(var(--cardSidesPadding) * 1px)]  text-xl space-y-1 text-left">
                          <h3 className="sNflT2O pb-4 !uppercase">
                           <Link  href={`tracks/${challenge._id}`} className="sNflT2O text-gray-200 text-2xl ">
                              <span className="sNflT2O">{challenge.title}</span>
                           </Link>
                          </h3>
                          <div
                            className="saWdPS_  !-mt-1  sm:!-mt-0 sm:!mt-2 "
                            data-hook="challenge-participants"
                          >
                            <span>Particiants:</span>  <span>{challenge?.participants.length}</span>
                          </div>
                          <div className='max-[600px]:hidden'>
                          <div
                            className="sEMVndD"
                            data-hook="challenge-price"
                          >
                             <span>Session: </span> {challenge.sessions}
                          </div>
                          <div
                            className="sEMVndD pb-4"
                            data-hook="challenge-price"
                          >
                             <span>Price: </span> {challenge.price}
                          </div>
                          </div>
                          <div/> 
                          <div className="challenge-timer sluL5Ep bg-white uppercase !text-black  !flex lg:!w-[40%] !py-4 content-center justify-center !mt-6">
                          <Link  href={`tracks/${challenge._id}`} className='text-black'>
                             <span>Join Now </span> 
                          </Link>
                          </div>
                          
                        </div>
                      
                      </div>
                    </section>
                   
                  </li> 
                  </FadeIn>
                ))}
              </ul> 
             </FadeInStagger>
            </div>
           
          </div>
        </div>
        {/* <div className="comp-kkr1spf9  p-[2%]" id="comp-kkr1spf9" aria-disabled="false">
         <Link
            data-testid="linkElement"
            href="https://www.wix.com/demone2/roy-pratt/challenges"
            target="_self"
            className="uDW_Qe wixui-button PlZyDq"
            aria-disabled="false"
          >
            <span className="l7_2fn wixui-button__label hover:!text-white">View All Challenges</span>
         </Link>
        </div> */}
      </div>
    </div>
  );
};

export default ChallengeListFeatured;


const Xbutton = () => {
  return <div
  className="!px-[4%] sq0w9FY ofebEaD---skin-7-success ofebEaD--shouldAnimate ofebEaD---placement-6-inline sc4WlNI"
  role="alert"
  data-is-shown="false"
  data-skin="success"
  data-mobile="false"
>
  <span role="presentation" className="sQO5b1Q" />
  <span className="sjfrB9d" data-hook="message" />
  <div className="sz282SS !bg-red-400 px-4 py-5  rounded-full w-8 flex justify-center ">
    <button
      className="shJzd7_ synIzLE stnApF2 oirxi33---skin-4-line oirxi33---theme-4-none s__60wrAV sMY3g5F"
      data-hook="closeButton"
      type="button"
      tabIndex={0}
    >
      <span className="soUKTnn">
        <span className="sFHF5Oe">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            width={24}
            height={24}
          >
            <path
              fillRule="evenodd"
              d="M19.2928932,3.99989322 L20,4.707 L12.7068932,11.9998932 L20,19.2928932 L19.2928932,20 L11.9998932,12.7068932 L4.707,20 L3.99989322,19.2928932 L11.2928932,11.9998932 L3.99989322,4.707 L4.707,3.99989322 L11.9998932,11.2928932 L19.2928932,3.99989322 Z"
            />
          </svg>
        </span>
      </span>
    </button>
  </div>
</div>
}