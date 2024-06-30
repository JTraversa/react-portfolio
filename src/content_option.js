import alliance from "./assets/images/alliance.png";
import framework from "./assets/images/framework.png";
import spheron from "./assets/images/spheron.png";
import allianceInverted from "./assets/images/alliance-inverted.png";
import frameworkInverted from "./assets/images/framework-inverted.png";
import spheronInverted from "./assets/images/spheron-inverted.png";

const logotext = "Julian Traversa";
const meta = {
    title: "Julian Traversa",
    description: "I’m Julian Traversa, a lending and pricing infrastructure architect and founder based in Miami and NYC.",
};

const introdata = {
    title: "I’m Julian Traversa",
    animated: {
        first: "I architect financial infra",
        second: "I lead organizations",
        third: "I develop smart contracts",
        fourth: "I invest in first principals",
    },
    description: "I am a lending and oracle infrastructure architect and founder based in Miami and NYC.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "Introduction",
    aboutme: "I'm a Founder and Software Engineer/Architect with 10 years of professional experience ideating and developing financial infrastructure. I specialize in the development of decentralized finance infrastructure and applications, with expertise in fixed-rates, oracle, MEV & rebalancing infrastructure. I have a strong background in organizational management and smart contract engineering, with a passion for open-source software. Furthermore, I have previously founded companies that have raised ~$15m in funding, have created mechanism designs that currently secure over $7b, and have designed technical standards like EIP-4626 which back $10b in assets."
};   

const worktimeline = [
    {
        jobtitle: "COO & Technical Architect",
        where: "Warlock Labs",
        date: "2024 - now"
    },
    {
        jobtitle: "Chief Executive & Full-Stack",
        where: "DefiHedge Corporation (Swivel Finance)",
        date: "2020 - 2024",
    },
    {
        jobtitle: "Chief Executive & Full-Stack",
        where: "Nescience Software & Capital",
        date: "2017 - 2020",
    },
    {
        jobtitle: "Professional MOBA Player",
        where: "Blizzard Entertainment (Tempo Storm)",
        date: "2016 - 2018",
    },
];


const oshighlights = [
    {
        thing: "EIP-7724",
        impact: "Contributed to EIP-7724, the standard for oracle infrastructure.",
        date: "2024",
    },
    {
        thing: "EIP-5095",
        impact: "Principally authored EIP-5095, the fixed-rate lending standard.",
        date: "2023",
    },
    {
        thing: "EIP-4626",
        impact: "Contributed to EIP-4626 lending standard, currently securing over $10b in assets.",
        date: "2022"
    },
    {
        thing: "PyAlly",
        impact: "Developed PyAlly, the python library for interacting Ally Bank's API.",
        date: "2019",
    }
];

const skills = [{
        name: "Solidity",
        value: 90,
    },
    {
        name: "Python",
        value: 80,
    },
    {
        name: "Java/Typescript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const experience = [{
        title: "UI & UX Design",
        date: "2019 - 2020",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
        bullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sed at nisl euismod urna bibendum sollicitudin."],
    },
    {
        title: "Mobile Apps",
        date: "2019 - 2020",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
        bullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sed at nisl euismod urna bibendum sollicitudin."],
    },
    {
        title: "Wordpress Design",
        date: "2019 - 2020",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
        bullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sed at nisl euismod urna bibendum sollicitudin."],
    },
];

const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const datainvestments = [{
    img: allianceInverted,
    imgdark: alliance,
    description: "Alliance DAO, the industry consensus #1 accellerator in crypto/web3.",
    link: "https://alliance.xyz/",
},
{
    img: frameworkInverted,
    imgdark: framework,
    description: "The company behind the Framework, a modular laptop that can be repaired and upgraded.",
    link: "https://frame.work/",
},
{
    img: spheronInverted,
    imgdark: spheron,
    description: "Spheron, decentralized hosting & on-demand DePIN for GPU Compute.",
    link: "https://www.spheron.network/",
},
];

const contactConfig = {
    YOUR_EMAIL: "julian@traversa.dev",
    YOUR_FONE: "NEVER-CALL-ME",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/jtraversa",
    substack: "https://TraversaJulian",
    linkedin: "https://www.linkedin.com/in/juliant94/",
    twitter: "https://twitter.com/TraversaJulian",
};
export {
    meta,
    dataabout,
    dataportfolio,
    datainvestments,
    worktimeline,
    skills,
    experience,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    oshighlights,
};