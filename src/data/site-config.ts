export type Image = {
    src: string;
    alt?: string;
};

export type Link = {
    href: string;
    text: string;
};

export type SocialLink = Link & {
    icon: 'codepen' | 'dev' | 'facebook' | 'github' | 'instagram' | 'youtube' | 'linkedin' | 'medium' | 'x-twitter';
};

export type Hero = {
    title?: string;
    text?: string;
    avatar?: Image;
    backgroundImage?: Image;
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    primaryNavLinks?: Link[];
    secondaryNavLinks?: Link[];
    socialLinks?: SocialLink[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
};

const siteConfig: SiteConfig = {
    logo: {
        src: '/logo.svg',
        alt: 'Miss Kreyn logo'
    },
    title: 'Miss Kreyn',
    description: 'Get better with me',
    image: {
        src: '/ovidius-preview.jpg',
        alt: 'Ovidius - Astro.js and Tailwind CSS theme'
    },
    primaryNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        // {
        //     text: 'Download Theme',
        //     href: 'https://github.com/JustGoodUI/ovidius-astro-theme'
        // }
    ],
    secondaryNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Terms of Service',
            href: '/terms'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        // {
        //     text: 'Download Theme',
        //     href: 'https://github.com/JustGoodUI/ovidius-astro-theme'
        // }
    ],
    socialLinks: [
        // {
        //     text: 'Go to GitHub repo',
        //     href: 'https://github.com/JustGoodUI/ovidius-astro-theme',
        //     icon: 'github'
        // },
        {
            text: 'Follow on Instagram',
            href: 'https://instagram.com/misskreyn',
            icon: 'instagram'
        },
        {
            text: 'Follow on YouTube',
            href: 'https://youtube.com/',
            icon: 'youtube'
        },
        // {
        //     text: 'Follow on X',
        //     href: 'https://twitter.com/justgoodui',
        //     icon: 'x-twitter'
        // }
    ],
    hero: {
        title: 'A Gentle Journey of Self Improvement.',
        text: "You don't have to hate yourself now to love yourself later. Let's find a more sustainable path together.",
        avatar: {
            src: '/avatar.webp',
            alt: 'Kirstin'
        },
        backgroundImage: {
            src: '/hero.webp'
        }
    },
    subscribe: {
        title: 'Subscribe for new content',
        text: 'One in a while, I may let you know about some of my new posts.',
        formUrl: '#'
    },
    postsPerPage: 5
};

export default siteConfig;
