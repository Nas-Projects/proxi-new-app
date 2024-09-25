import Image1 from '@/images/blogsImages/what-is-blockchain-1.jpeg'
import resolutions from '@/images/blogsImages/resolution_keep.png'
import office from '@/images/blogsImages/office.png'
import work from '@/images/blogsImages/work_space.png'
import author from '../../public/assets/ryan_user_profile.png'
import BlackNewYorkers from '@/images/blogsImages/black-New-yorkers.webp'
import { ChatBubbleIcon } from '@/components/icons/ChatBubbleIcon'
import build from '@/images/blogsImages/social_blog_1.jpeg'
import unlock from '@/images/blogsImages/social_blog_2.jpeg'
import protect from '@/images/blogsImages/social_blog_3.jpeg'
import meetTheMan from '@/images/blogsImages/meetTheMan.jpeg'

let blogsJson = [
  {
    image: build,
    author: { name: 'Nasser Sanou', href: '/about', image: author },
    href: 'blogs/building-for-the-future',
    date: '2023-01-02',
    title: 'Building for the Future: Real Estate Innovation',
    category: 'Technology & Innovation',
    description:
      'Discover how Proxy is revolutionizing the real estate industry with blockchain technology, making transactions faster, more secure, and transparent.',
    longDescription:
      'Proxy is reshaping real estate with blockchain and AI, ensuring faster, more secure, and transparent transactions for buyers, sellers, and investors. From smart contracts to decentralized platforms, learn how Proxy is paving the way for future-forward real estate.',
    type: 'real-estate',
    cta: 'Read More',
    imageDescription:
      'A sleek modern property built using the latest in real estate innovation.',
    icon: ChatBubbleIcon,
    themeColor: '-blue-800',
    tag: {
      name: 'Article',
    },
    readTime: 8,
  },
  {
    author: { name: 'Nasser Sanou', href: '/about', image: author },
    href: 'blogs/clean-air-real-estate',
    status_: 'new',
    category: 'Environment & Real Estate',
    event: 'environment',
    date: '2022-09-02',
    title: "Green Buildings: A Mission to Clean Up Our Air",
    description:
      'Proxy is at the forefront of sustainable real estate, focusing on green building technologies to enhance air quality and reduce environmental impact.',
    type: 'sustainability',
    cta: 'Watch Video',
    image: meetTheMan,
    icon: ChatBubbleIcon,
  },
  {
    author: { name: 'Nasser Sanou', href: '/about', image: author },
    href: 'blogs/unlocking-real-estate-opportunity',
    date: '2023-01-02',
    title: 'Unlocking Opportunity in the Real Estate Market',
    category: 'Investment Strategies',
    description:
      "Opportunities in real estate are endless if you know where to look. Learn how Proxy is helping investors unlock hidden potential with data-driven insights.",
    type: 'investment',
    cta: 'Read More',
    image: work,
    icon: ChatBubbleIcon,
    themeColor: '-green-800',
    tag: {
      name: 'Article',
    },
    readTime: 7,
  },
  {
    author: { name: 'Nasser Sanou', href: '/about', image: author },
    href: 'blogs/protecting-real-estate-buyers',
    date: '2023-01-02',
    title: 'Protecting Buyers and Sellers with Blockchain',
    category: 'Technology & Security',
    image: protect,
    description:
      'Proxy uses blockchain technology to ensure every real estate transaction is secure, transparent, and tamper-proof, providing peace of mind for all parties.',
    longDescription:
      'By utilizing blockchain, Proxy offers a level of security and transparency in real estate that has never been seen before. Every transaction is recorded on an immutable ledger, protecting buyers and sellers from fraud and ensuring the integrity of each deal.',
    type: 'real-estate',
    cta: 'Read More',
    imageDescription:
      'A buyer and seller discussing property deals with confidence, knowing their transaction is protected by blockchain technology.',
    icon: ChatBubbleIcon,
    themeColor: '-blue-800',
    tag: {
      name: 'Article',
    },
    readTime: 8,
  },
  {
    author: { name: 'Nasser Sanou', href: '/about', image: author },
    href: 'blogs/introducing-real-estate-animations',
    category: 'Technology',
    date: '2023-01-02',
    title: 'High-Performance Web Animations in Real Estate',
    description:
      'Learn how Proxy uses high-performance web animations to bring real estate listings to life, making properties stand out in a crowded market.',
    type: 'tech',
    cta: 'Watch Video',
    image: Image1,
    icon: ChatBubbleIcon,
    theme: { text: 'eyebrow-yellow', tagStyle: 'blog_list_card_tag' },
    tag: {
      name: 'Article',
    },
    readTime: 7,
  },
  {
    author: { name: 'Nasser Sanou', href: '/about', image: author },
    href: 'blogs/resolutions-in-real-estate',
    date: '2022-09-02',
    category: 'Technology',
    title: 'Real Estate Resolutions You’ll Keep in 2023',
    description:
      'Want to stay ahead in real estate? Discover the top 2023 resolutions every buyer, seller, and investor should make, from adopting tech to market strategies.',
    cta: 'Watch Video',
    image: resolutions,
    icon: ChatBubbleIcon,
    themeColor: '-indigo-800',
    tag: {
      name: 'Video',
      color:
        'py-0.2 inline-flex items-center rounded-full bg-indigo-100 px-3 text-sm font-medium text-indigo-800',
    },
    readTime: 6,
  },
  {
    author: { name: 'Nasser Sanou', href: '/about', image: author },
    href: 'blogs/rewriting-the-real-estate-system',
    date: '2022-07-14',
    title: 'Rewriting the Real Estate System with Blockchain',
    category: 'Technology',
    description:
      'Learn how Proxy is rewriting the rules of real estate by integrating blockchain into every step of the process, making transactions faster, safer, and more efficient.',
    type: 'tech',
    cta: 'Watch Video',
    image: office,
    icon: ChatBubbleIcon,
    themeColor: '-green-800',
    tag: {
      name: 'Inspirational',
      color:
        'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800',
    },
    readTime: 5,
  },
  // {
  //   author: { name: 'Nasser Sanou', href: '/about', image: author },
  //   status_: 'promoted',
  //   href: 'blogs/real-estate-product-recall',
  //   event: 'lessons',
  //   date: '2022-09-02',
  //   category: 'Lessons',
  //   title: 'Lessons Learned from Our First Product Recall',
  //   description:
  //     'Every product launch has its challenges. Learn how Proxy navigated its first product recall and what it means for the future of real estate innovation.',
  //   type: 'lessons',
  //   cta: 'Watch Video',
  //   image: work,
  //   icon: ChatBubbleIcon,
  // },
]

export default blogsJson;



// import ipnoneImg from '@/images/iponeImg.png'
// let blogsJson = [
//   {
//     image: build,
//     author: { name: 'Nasser Sanou', href: '/about', image: author },
//     href: 'blogs/building-for-everyone',
//     date: '2023-01-02',
//     title: 'Building for everyone',
//     category: '  Personalization',
//     description:
//       'Athenia Rodney is a product of the upward mobility New York City once promised Black Americans. She grew up in mostly Black neighborhoods in Brooklyn, graduated from public schools and ',
//     longDescription:
//       'Athenia Rodney is a product of the upward mobility New York City once promised Black Americans. She grew up in mostly Black neighborhoods in Brooklyn, graduated from public schools and attended a liberal arts college on a full scholarship. She went on to start her own event-planning business in the city. But as Mrs. Rodney’s own family grew, she found herself living in a cramped one-bedroom rental, where her three children shared a bunk bed in the living room. It was hard to get them into programs that exposed them to green spaces or swim classes. As she scrolled through friends’ social media posts showing off trampolines in spacious backyards in Georgia, the solution became clearer: Leave.',
//     type: 'social',
//     cta: 'read',
//     imageDescription:
//       'Athenia Rodney at her new home in Snellville, Ga., with her  three children...',
//     icon: ChatBubbleIcon,
//     themeColor: '-pink-800',
//     tag: {
//       name: 'Article',
//       // color: `${themeColor}`,
//     },
//     readTime: 8,
//   },
//   {
//     author: { name: 'Nasser Sanou', href: '/about', image: author },
//     href: 'blogs/meet-the-man',
//     status_: 'new',
//     category: 'Environment-technology',
//     event: 'music',
//     date: '2022-09-02',
//     title: "Meet the man on a mission to clean up Africa's air",
//     description:
//       'Using the power of AI, Engineer Bainomugisha and his team at Makerere University are helping to improve the lives and air.',
//     type: 'life-promises',
//     cta: 'Watch video',
//     image: meetTheMan,
//     icon: ChatBubbleIcon,
//   },
//   {
//     author: { name: 'Nasser Sanou', href: '/about', image: author },
//     href: 'blogs/unlocking-opportunity',
//     date: '2023-01-02',
//     title: ' Unlocking opportunity',
//     category: 'Self-development',
//     description:
//       "It has been said that opportunity is all around us. However, most of us, unfortunately, let opportunity slip-by every day because we are either untrained or unaware of the signals that life throws our way.",
//     type: 'tech',
//     cta: 'Watch video',
//     image: unlock,
//     icon: ChatBubbleIcon,
//     themeColor: '-pink-800',
//     tag: {
//       name: 'Article',
//       // color: `${themeColor}`,
//     },
//     readTime: 7,
//   },
//   {
//     author: { name: 'Nasser Sanou', href: '/about', image: author },
//     href: 'blogs/protecting-users',
//     date: '2023-01-02',
//     title: 'Protecting users',
//     category: 'Technology',
//     image: protect,
//     description:
//       'It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise',
//     longDescription:
//       'Athenia Rodney is a product of the upward mobility New York City once promised Black Americans. She grew up in mostly Black neighborhoods in Brooklyn, graduated from public schools and attended a liberal arts college on a full scholarship. She went on to start her own event-planning business in the city. But as Mrs. Rodney’s own family grew, she found herself living in a cramped one-bedroom rental, where her three children shared a bunk bed in the living room. It was hard to get them into programs that exposed them to green spaces or swim classes. As she scrolled through friends’ social media posts showing off trampolines in spacious backyards in Georgia, the solution became clearer: Leave.',
//     type: 'social',
//     cta: 'read',
//     imageDescription:
//       'Athenia Rodney at her new home in Snellville, Ga., with her  three children...',
//     icon: ChatBubbleIcon,
//     themeColor: '-pink-800',
//     tag: {
//       name: 'Article',
//       // color: `${themeColor}`,
//     },
//     readTime: 8,
//   },
//   {
//     author: { name: 'Nasser Sanou', href: '/about', image: author },
//     href: 'blogs/introducing-animaginary',
//     category: 'Technology',
//     date: '2023-01-02',
//     title: ' High performance web animations',
//     description:
//       'When you’re building a website for a company as ambitious as NasDesign you ne was written in Go. Go is a wonderful program...',
//     type: 'tech',
//     cta: 'Watch video',
//     image: Image1,
//     icon: ChatBubbleIcon,
//     theme: { text: 'eyebrow-yellow', tagStyle: 'blog_list_card_tag' },
//     tag: {
//       name: 'Article',
//       // color: `${themeColor}`,
//     },
//     readTime: 7,
//   },
//   {
//     author: { name: 'Nasser Sanou', href: '/about', image: author },
//     href: 'blogs/resolutions-youll-keep',
//     date: '2022-09-02',
//     category: 'Technology',
//     title:
//     'Resolution made a list of ambitious resolutions?',
//     description:
//       'They say that if you’re not embarassed by your first version, you’re doing it wrong. Well.was written in Go. Go is a wonderful program',
//     cta: 'Watch video',
//     image: resolutions,
//     icon: ChatBubbleIcon,
//     themeColor: '-indigo-800',
//     tag: {
//       name: 'Video',
//       color:
//         'py-0.2 inline-flex items-center rounded-full bg-indigo-100 px-3 text-sm font-medium text-indigo-800',
//     },
//     readTime: 6,
//   },
//   {
//     author: { name: 'Nasser Sanou', href: '/about', image: author },
//     href: 'blogs/rewriting-the-cosmos-kernel-in-rust',
//     date: '2022-07-14',
//     title: 'Rewriting the cosmOS kernel in Rust',
//     category: 'Technology',
//     description:
//       'When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but it’s been a while.was written in Go. Go is a wonderful program...',
//     type: 'tech',
//     cta: 'Watch video',
//     image: office,
//     icon: ChatBubbleIcon,
//     themeColor: '-green-800',
//     tag: {
//       name: 'Inspirational',
//       color:
//         'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800',
//     },
//     readTime: 5,
//   },
//   {
//     author: { name: 'Nasser Sanou', href: '/about', image: author },
//     status_: 'promotted',
//     href: 'blogs/crafting-a-design-system-for-a-multiplanetary-future',
//     event: 'music',
//     date: '2022-09-02',
//     category: 'Lessons',
//     title: 'Lessons learned from our first product recall',
//     description:
//       'They say that if you’re not embarassed by your first version, you’re doing it wrong. was written in Go. Go is a wonderful program',
//     type: 'life-promises',
//     cta: 'Watch video',
//     image: work,
//     icon: ChatBubbleIcon,
//   },
// ]

// export default blogsJson
