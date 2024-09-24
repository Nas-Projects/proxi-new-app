import { blockContentType } from './schemaTypes/blockContentType';
import { categoryType } from './schemaTypes/categoryType';
import pageInfo from './schemaTypes/pageInfo';
import progress from './schemaTypes/progress';
import social from './schemaTypes/social';
import tag from './schemaTypes/tag';
import heroSection from './schemaTypes/heroSection';
import aboutSection from './schemaTypes/aboutSection';
import elevatorPitch from './schemaTypes/elevatorPitch';
// import pricingSection from './schemaTypes/pricingSection';
import testimonialsSection from './schemaTypes/testimonialsSection';
import gallerySection from './schemaTypes/gallerySection';
import contactSection from './schemaTypes/contactSection';
// import plan from './schemaTypes/Plan';
import About from './schemaTypes/About';
import agents from './schemaTypes/agents';
import founders from './schemaTypes/founders';
import termsConditionsPage from './schemaTypes/termsConditionsPage';
import contactsPage from './schemaTypes/contactsPage';
import blockchainPage from './schemaTypes/blockchainPage';
import blogPost from './schemaTypes/blogPost';
import author from './schemaTypes/author';
import Property from './schemaTypes/Property';
import Payment from './schemaTypes/Payment';
import JoinUs from './schemaTypes/JoinUs';
import Offer from './schemaTypes/Offer';
import Client from './schemaTypes/Client';
import Reply from './schemaTypes/Reply';
import Comment from './schemaTypes/Comment';
import Message from './schemaTypes/Message';
import Admin from './schemaTypes/Admin';

export const schema = {
  types: [
    Property,
    Client,
    Payment,
    Offer,
    Comment,
    Reply,
    Message,
    Admin,
    JoinUs,
    About,
    contactsPage,
    agents,
    author,
    blogPost,
    blockchainPage,
    termsConditionsPage,
    blockContentType,
    categoryType,
    pageInfo,
    social,
    tag,
    heroSection,
    aboutSection,
    elevatorPitch,
    // pricingSection,
    testimonialsSection,
    gallerySection,
    contactSection,
    // plan, // Plan should be referenced correctly here  
    // founders, 
    // progress,
  ],
};
