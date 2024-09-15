import { blockContentType } from './schemaTypes/blockContentType';
import { categoryType } from './schemaTypes/categoryType';
import { postType } from './schemaTypes/postType';
import { authorType } from './schemaTypes/authorType';
import exercise from './schemaTypes/exercise';
import track from './schemaTypes/track';
import pageInfo from './schemaTypes/pageInfo';
import progress from './schemaTypes/progress';
import social from './schemaTypes/social';
import tag from './schemaTypes/tag';
import landingPage from './schemaTypes/landingPage';
import heroSection from './schemaTypes/heroSection';
import aboutSection from './schemaTypes/aboutSection';
import elevatorPitch from './schemaTypes/elevatorPitch';
import pricingSection from './schemaTypes/pricingSection';
import benefitsSection from './schemaTypes/benefitsSection';
import testimonialsSection from './schemaTypes/testimonialsSection';
import gallerySection from './schemaTypes/gallerySection';
import contactSection from './schemaTypes/contactSection';
import plan from './schemaTypes/Plan';
import About from './schemaTypes/About';

export const schema = {
  types: [
    About,
    blockContentType,
    categoryType,
    postType,
    authorType,
    exercise,
    track,
    pageInfo,
    progress,
    social,
    tag,
    landingPage,
    heroSection,
    aboutSection,
    elevatorPitch,
    pricingSection,
    benefitsSection,
    testimonialsSection,
    gallerySection,
    contactSection,
    plan, // Plan should be referenced correctly here
  ],
};
