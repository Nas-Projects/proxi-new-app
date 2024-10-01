import SectionWrapper from "../../hoc/SectionWrapper";

const SectionHeader = ({ title, subtitle, description }) => {
  console.log("SECTION_TITLE", title, subtitle, description);
  
  return (
    <div className="section-header lg:mx-[4em] mb-4 lg:mb-8 text-mainText opacity-1 fade-in-from-bottom ">
      <h1 className='!text-left text-center py-6 text-custom-gradient'>{title}</h1>
      <div
        data-w-id="c61ae90e-5b42-2ae8-3af4-27a1254fdfcd"
        style={{
          opacity: 1,
          transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d"
        }}
        className="title-wrap pb-12 max-w-xl lg:max-w-[34vw]"
      >
     { subtitle &&  <h2 className="text-left text-2xl">{subtitle}</h2>}
        <div className="space-08" />
        <div className="limit-560">
        {  description && <p className="paragraph-big text-left">{description}</p>}
        </div>
      </div>
    </div>
  );
};

SectionHeader.defaultProps = {
  title: 'Default Title',
  subtitle: 'Default Subtitle',
  description: 'Default Description'
};

export default SectionWrapper(SectionHeader, 'SectionHeader');
