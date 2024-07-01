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
        subSkills: ["Foundry", "Hardhat", "Truffle"]
    },
    {
        name: "Python",
        subSkills: ["NumPy", "Pandas", "Qt5", "PyTorch", "CCXT", "Mt5"]
    },
    {
        name: "Java/Typescript",
        subSkills: ["Ethers/Web3.js", "React", "Bootstrap", "Tailwind"]
    },
    {
        name: "Rust",
        subSkills: ["Erigon", "Reth"]
    },
    {
        name: "GoLang",
        subSkills: ["geth", "goest"]
    },
];

const experience = [{
        title: "COO & Technical Architect",
        where: "Warlock Labs",
        date: "2024 - now",
        description: "At Warlock I designed/architected/implemented the first JIT / MEV redistributing Oracle (Pricing Infrastructure).",
        bullets: [`Performed comprehensive data analysis on MEV, trade execution, and liquidation methodology.`,
        `Authored whitepaper / fundraising materials & raised 8m from top investors.`,
        `Designed / Architected the JIT (Just-In-Time) oracle, which captures and redistributes the value that it generates.`,
        `Implemented all smart contracts with full test coverage`, 
        `Created team workflows and managed all organizational responsibilities (HR, accounting, etc.)`,],
    },
    {
        title: "CEO & Full-Stack",
        where: "DefiHedge Corporation (Swivel Finance)",
        date: "2020 - 2024",
        description: "At Swivel I designed the first concept of yield tokenization (secures $7b+ in TVL), and brought two fixed-rate products to market: Swivel and Illuminate. During this time Swivel processed $300m+ and our team also developed EIP-5095, the Ethereum standard for fixed-rates.",
        bullets: ["Designed a highly flexible yield tokenization mechanism which is currently the backbone for nearly all decentralized fixed-rate lending.",
        "Raised two rounds of funding during bear environments (totaling ~4.75m).",
        "Recruited, hired, and maintained a healthy team of 10+ employees with nearly 0 turnover.",
        "Designed and developed principally all smart contracts.", 
        "Acted as principal marketing lead to bootstrap community efforts and drive user growth.",
        ],
    },
    {
        title: "CEO & Full-Stack ",
        where: "Nescience Software & Capital",
        date: "2018 - 2020",
        description: `At Nescience I managed a firm focused on the development of portfolio management tools, facilitating investment with significantly reduced risk which found found significant (at that time) adoption with $10m+ in deposits.`,
        bullets: ["Developed flexible, free and open-sourced cryptocurrency rebalancing software across a dozen exchanges (Python, R).",
        "Developed an equally flexible Direct Indexing tool, allowing users to replace traditional ETF's in their retirement accounts.",
        "Designed, developed our Direct Indexing tool's graphical interface (qt5).",
        "Designed/developed of Nescience's proprietary “smart” marketmaking tool.",
        ],
    },
    {
        title: "Professional Gaming",
        where: "Blizzard Entertainment (Tempo Storm)",
        date: "2016 - 2018",
        description: `Represented Tempo Storm in Heroes of the Storm before the formation of the official team and official Heroes Global Circuit.`,
        bullets: ["Participated weekly in 1-2 days of tournament play, ~35-45 hours of training and ~5-10 hours of coaching.",
        "Conducted quantitative analyses of historic strategic data to contribute our strategy development.",
        ],
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