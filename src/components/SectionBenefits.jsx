import Link from "next/link";
import { FadeIn, FadeInStagger } from "./FadeIn";  
import { useEffect, useRef } from "react";
const benefitsOfWorkingOut = [
    {
      title: "Improved Mood",
      description: "Regular exercise can help improve your mood and reduce feelings of anxiety and depression."
    },
    {
      title: "Increased Energy",
      description: "Engaging in physical activity can boost your energy levels and improve overall stamina."
    },
    {
      title: "Better Sleep",
      description: "Exercise can help you fall asleep faster and enjoy deeper sleep."
    },
    {
      title: "Weight Management",
      description: "Consistent workouts can help maintain a healthy weight and prevent obesity."
    },
    {
      title: "Enhanced Mental Health",
      description: "Physical activity stimulates various brain chemicals that may leave you feeling happier, more relaxed, and less anxious."
    }
  ];


export default function SectionBenefits() {


  const displayBenefits =  benefitsOfWorkingOut.slice(0, 4).map((benefit, index) => {
      return <div key={index} className="relative bg-slate-50 rounded-lg shadow-xl hover:bg-slate-100 py-4 my-4 px-4 hover:shadow-2xl hover:border hover:rounded-2xl 
      transition ease-out duration-200 hover:translate-y-1 transition ease-in duration-500">
        <FadeIn>
      <div className="relative flex py-4 px-6 lg:px-10 lg:py-4 py-6"  >
        <div >
          
          <div
            id="comp-kl6n0fgp"
            className="comp-kl6n0fgp wixui-vector-image h-12 object-contain w-44 h-58"
           
          >
            <div
              data-testid="svgRoot-comp-kl6n0fgp"
              className="aizuI7 TcoJIb comp-kl6n0fgp w-44 h-[58px]" 
            >
             
              <svg
                preserveAspectRatio="xMidYMid meet"
                data-bbox="39.022 20.084 121.954 159.831"
                viewBox="39.022 20.084 121.954 159.831"
                height={200}
                width={200}
                xmlns="http://www.w3.org/2000/svg"
                data-type="color"
                role="presentation"
                aria-hidden="true"
                aria-label=""
              >
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        '#comp-kl6n0fgp svg [data-color="1"] {fill: #000;}'
                    }}
                  />
                </defs>
                <g>
                  <path
                    d="M156.804 39.022c-21.687 0-33.939-.799-54.102-17.941a4.16 4.16 0 0 0-5.404 0C77.135 38.223 64.883 39.022 43.196 39.022a4.172 4.172 0 0 0-4.174 4.174V116c0 27.308 16.69 37.493 44.34 54.371 4.475 2.727 9.28 5.661 14.408 8.901a4.185 4.185 0 0 0 4.458 0c5.127-3.24 9.933-6.175 14.408-8.901 27.65-16.878 44.34-27.063 44.34-54.371V43.195a4.169 4.169 0 0 0-4.172-4.173zM152.63 116c0 22.62-13.483 30.849-40.342 47.242-3.852 2.352-7.952 4.854-12.288 7.569-4.337-2.714-8.437-5.217-12.288-7.569C60.852 146.85 47.37 138.621 47.37 116V47.352c19.739-.159 33.156-1.924 52.63-17.668 19.474 15.745 32.891 17.509 52.63 17.668V116z"
                    fill="#D64000"
                    data-color={1}
                  />
                  <path
                    d="M98.829 64.029a3.834 3.834 0 0 0-5.423 5.423l14.547 14.547-21.424 21.424-14.547-14.547a3.836 3.836 0 0 0-5.423 5.423l34.518 34.518a3.836 3.836 0 0 0 5.423-5.423l-14.547-14.547 21.424-21.424 14.547 14.547a3.834 3.834 0 0 0 5.423-5.423L98.829 64.029z"
                    fill="#D64000"
                    data-color={1}
                  />
                  <path
                    d="M71.982 121.559a3.834 3.834 0 0 0-5.423 5.423l3.835 3.835a3.836 3.836 0 0 0 5.423-5.423l-3.835-3.835z"
                    fill="#D64000"
                    data-color={1}
                  />
                  <path
                    d="M71.982 106.218a3.834 3.834 0 0 0-5.423 5.423l19.176 19.177.095.094a3.836 3.836 0 0 0 5.329-5.517l-19.177-19.177z"
                    fill="#D64000"
                    data-color={1}
                  />
                  <path
                    d="M127.923 73.288l.094.094a3.836 3.836 0 0 0 5.329-5.517l-3.835-3.835a3.834 3.834 0 1 0-5.423 5.423l3.835 3.835z"
                    fill="#D64000"
                    data-color={1}
                  />
                  <path
                    d="M127.923 88.629l.094.094a3.836 3.836 0 0 0 5.329-5.517L114.17 64.029a3.834 3.834 0 1 0-5.424 5.423l19.177 19.177z"
                    fill="#D64000"
                    data-color={1}
                  />
                </g>
              </svg>
            </div> 
          </div>
          <div  className="HcOXKn SxM0TO QxJLC3wixui-rich-text">
            <h3
              className="font_3 wixui-rich-text__text"
              style={{ fontSize: 30 }}
            >
              <span className="text-[black] text-[#7a7572]  wixui-rich-text__text pr-2">{benefit.title.split(' ')[0]}</span>
              <span className="text-[#7a7572] text-[#e4621c] wixui-rich-text__text">{benefit.title.split(' ')[1]}</span>
            </h3>
          </div>
          <div
            id="comp-kl6l5vuh1"
            className="HcOXKn SxM0TO QxJLC3 comp-kl6l5vuh1 wixui-rich-text"
            data-testid="richTextElement"
            data-motion-enter="done"
          >
            <p
              className="font_8 wixui-rich-text__text"
              style={{ lineHeight: "1.6em", fontSize: 16 }}
            >
              <span className="color_14 wixui-rich-text__text !text-slate-700">
              {benefit.description}
              </span>
            </p>
          </div>
        </div>
      </div>
      </FadeIn>
    </div>
      
    })
  
return <section  id="comp-lt8qptn11" 
 className="relative Oqnisf comp-lt8qptn11 wixui-section relative !block bg-[#76777a33] pt-6  lg:py-8 "
      data-block-level-container="ClassicSection "
      >
    <FadeInStagger key="Bennefits-FadenIn">
      <div className="pt-12">  
          <h1 class="h2 !ml-0 text-left color_14 uppercase text-center py-4">The Bennefits</h1>
        </div>
          
        <div className="block px-6 py-4 gap-y-4 lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-x-4">
            {displayBenefits}
          </div>
      </FadeInStagger>  
     <div
        id="bgLayers_comp-lt8qptn11"
        data-hook="bgLayers"
        data-motion-part="BG_LAYER"
        className="MW5IWV" >

          </div>
        <div
          data-mesh-id="comp-lt8qptn11inlineContent"
          data-testid="inline-content"
          className="">
          <div
            data-mesh-id="comp-lt8qptn11inlineContent-gridContainer"
            data-testid="mesh-container-content">
              <FadeIn> 
                <section
                  id="comp-kkr3era1"
                  className="comp-kkr3era1 CohWsy wixui-column-strip"
                >
                  <div
                    id="shadow"
                    data-hook="bgLayers"
                    data-motion-part="BG_LAYER"
                    className="if7Vw2"
                  >
                    <div data-testid="colorUnderlay" className="tcElKx i1tH8h" />
                    <div
                      id="bgMedia_comp-kkr3era1"
                      data-motion-part="BG_MEDIA"
                      className="wG8dni"
                    />
                  </div>
                  <div data-testid="columns" className="V5AUxf">
                    <div
                      id="comp-kkr3erc2"
                      className="comp-kkr3erc2 YzqVVZ wixui-column-strip__column"
                    >
                      <div
                        id="bgLayers_comp-kkr3erc2"
                        data-hook="bgLayers"
                        data-motion-part="BG_LAYER"
                        className="MW5IWV"
                      >
                        <div data-testid="colorUnderlay" className="LWbAav Kv1aVt" />
                        <div
                          id="bgMedia_comp-kkr3erc2"
                          data-motion-part="BG_MEDIA"
                          className="VgO9Yg"
                        />
                      </div>
                    
                      
                    </div>
                    <div
                      id="comp-kkr3gyea"
                      className="comp-kkr3gyea YzqVVZ wixui-column-strip__column"
                    >
                  
                    </div>
                  </div>
                </section>
            </FadeIn>
        
              <div
                id="bgLayers_comp-kkr3hmsw"
                data-hook="bgLayers"
                data-motion-part="BG_LAYER"
                className="if7Vw2"
              >
                <div data-testid="colorUnderlay" className="tcElKx i1tH8h" />
                <div
                  id="bgMedia_comp-kkr3hmsw"
                  data-motion-part="BG_MEDIA"
                  className="wG8dni"
                />
              </div>  
          </div>

      </div>



</section>


}