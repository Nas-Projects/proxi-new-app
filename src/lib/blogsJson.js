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
// import ipnoneImg from '@/images/iponeImg.png'
let blogsJson = [
  {
    image: build,
    author: { name: 'Nasser Sanou', href: '/about', image: author },
    href: 'blogs/building-for-everyone',
    date: '2023-01-02',
    title: 'Building for everyone',
    category: '  Personalization',
    description:
      'Athenia Rodney is a product of the upward mobility New York City once promised Black Americans. She grew up in mostly Black neighborhoods in Brooklyn, graduated from public schools and ',
    longDescription:
      'Athenia Rodney is a product of the upward mobility New York City once promised Black Americans. She grew up in mostly Black neighborhoods in Brooklyn, graduated from public schools and attended a liberal arts college on a full scholarship. She went on to start her own event-planning business in the city. But as Mrs. Rodney’s own family grew, she found herself living in a cramped one-bedroom rental, where her three children shared a bunk bed in the living room. It was hard to get them into programs that exposed them to green spaces or swim classes. As she scrolled through friends’ social media posts showing off trampolines in spacious backyards in Georgia, the solution became clearer: Leave.',
    type: 'social',
    cta: 'read',
    imageDescription:
      'Athenia Rodney at her new home in Snellville, Ga., with her  three children...',
    icon: ChatBubbleIcon,
    themeColor: '-pink-800',
    tag: {
      name: 'Article',
      // color: `${themeColor}`,
    },
    readTime: 8,
  },
  {
    author: { name: 'Nasser Sanou', href: '/about', image: author },
    href: 'blogs/meet-the-man',
    status_: 'new',
    category: 'Environment-technology',
    event: 'music',
    date: '2022-09-02',
    title: "Meet the man on a mission to clean up Africa's air",
    description:
      'Using the power of AI, Engineer Bainomugisha and his team at Makerere University are helping to improve the lives and air.',
    type: 'life-promises',
    cta: 'Watch video',
    image: meetTheMan,
    icon: ChatBubbleIcon,
  },
  {
    author: { name: 'Nasser Sanou', href: '/about', image: author },
    href: 'blogs/unlocking-opportunity',
    date: '2023-01-02',
    title: ' Unlocking opportunity',
    category: 'Self-development',
    description:
      "It has been said that opportunity is all around us. However, most of us, unfortunately, let opportunity slip-by every day because we are either untrained or unaware of the signals that life throws our way.",
    type: 'tech',
    cta: 'Watch video',
    image: unlock,
    icon: ChatBubbleIcon,
    themeColor: '-pink-800',
    tag: {
      name: 'Article',
      // color: `${themeColor}`,
    },
    readTime: 7,
  },
  {
    author: { name: 'Nasser Sanou', href: '/about', image: author },
    href: 'blogs/protecting-users',
    date: '2023-01-02',
    title: 'Protecting users',
    category: 'Technology',
    image: protect,
    description:
      'It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise',
    longDescription:
      'Athenia Rodney is a product of the upward mobility New York City once promised Black Americans. She grew up in mostly Black neighborhoods in Brooklyn, graduated from public schools and attended a liberal arts college on a full scholarship. She went on to start her own event-planning business in the city. But as Mrs. Rodney’s own family grew, she found herself living in a cramped one-bedroom rental, where her three children shared a bunk bed in the living room. It was hard to get them into programs that exposed them to green spaces or swim classes. As she scrolled through friends’ social media posts showing off trampolines in spacious backyards in Georgia, the solution became clearer: Leave.',
    type: 'social',
    cta: 'read',
    imageDescription:
      'Athenia Rodney at her new home in Snellville, Ga., with her  three children...',
    icon: ChatBubbleIcon,
    themeColor: '-pink-800',
    tag: {
      name: 'Article',
      // color: `${themeColor}`,
    },
    readTime: 8,
  },
  {
    author: { name: 'Nasser Sanou', href: '/about', image: author },
    href: 'blogs/introducing-animaginary',
    category: 'Technology',
    date: '2023-01-02',
    title: ' High performance web animations',
    description:
      'When you’re building a website for a company as ambitious as NasDesign you ne was written in Go. Go is a wonderful program...',
    type: 'tech',
    cta: 'Watch video',
    image: Image1,
    icon: ChatBubbleIcon,
    theme: { text: 'eyebrow-yellow', tagStyle: 'blog_list_card_tag' },
    tag: {
      name: 'Article',
      // color: `${themeColor}`,
    },
    readTime: 7,
  },
  {
    author: { name: 'Nasser Sanou', href: '/about', image: author },
    href: 'blogs/resolutions-youll-keep',
    date: '2022-09-02',
    category: 'Technology',
    title:
    'Resolution made a list of ambitious resolutions?',
    description:
      'They say that if you’re not embarassed by your first version, you’re doing it wrong. Well.was written in Go. Go is a wonderful program',
    cta: 'Watch video',
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
    href: 'blogs/rewriting-the-cosmos-kernel-in-rust',
    date: '2022-07-14',
    title: 'Rewriting the cosmOS kernel in Rust',
    category: 'Technology',
    description:
      'When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but it’s been a while.was written in Go. Go is a wonderful program...',
    type: 'tech',
    cta: 'Watch video',
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
  {
    author: { name: 'Nasser Sanou', href: '/about', image: author },
    status_: 'promotted',
    href: 'blogs/crafting-a-design-system-for-a-multiplanetary-future',
    event: 'music',
    date: '2022-09-02',
    category: 'Lessons',
    title: 'Lessons learned from our first product recall',
    description:
      'They say that if you’re not embarassed by your first version, you’re doing it wrong. was written in Go. Go is a wonderful program',
    type: 'life-promises',
    cta: 'Watch video',
    image: work,
    icon: ChatBubbleIcon,
  },
]

export default blogsJson
