import { blockContentType } from './schemaTypes/blockContentType';
import { categoryType } from './schemaTypes/categoryType';
import pageInfo from './schemaTypes/pageInfo';
import progress from './schemaTypes/progress';
import social from './schemaTypes/social';
import tag from './schemaTypes/tag';
import heroSection from './schemaTypes/heroSection';
import aboutSection from './schemaTypes/aboutSection';
import elevatorPitch from './schemaTypes/elevatorPitch';
import pricingSection from './schemaTypes/pricingSection';
import testimonialsSection from './schemaTypes/testimonialsSection';
import gallerySection from './schemaTypes/gallerySection';
import contactSection from './schemaTypes/contactSection';
import plan from './schemaTypes/Plan';
import About from './schemaTypes/About';
import agents from './schemaTypes/agents';
import founders from './schemaTypes/founders';
import termsConditionsPage from './schemaTypes/termsConditionsPage';
import contactsPage from './schemaTypes/contactsPage';
import blockchainPage from './schemaTypes/blockchainPage';
import blogPost from './schemaTypes/blogPost';
import author from './schemaTypes/author';
export const schema = {
  types: [
    About,
    blockContentType,
    categoryType,
    founders,
    termsConditionsPage,
    contactsPage,
    agents,
    author,
    blogPost,
    blockchainPage,
    pageInfo,
    progress,
    social,
    tag,
    heroSection,
    aboutSection,
    elevatorPitch,
    pricingSection,
    testimonialsSection,
    gallerySection,
    contactSection,
    plan, // Plan should be referenced correctly here
  ],
};
