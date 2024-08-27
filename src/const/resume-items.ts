import { mapWork } from '../utils/utils-map';
import { ContactProps } from '../Components/Contact/Contact';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';

export const summaryText = 'Experienced technical lead building scalable solutions across many industries in 11 years of software development experience. Effective leader, demonstrator, communicator. Collaborative team player with steady accountable growth. Expert in TypeScript, JavaScript, React, .NET, ASP, C#, HTML.';

const robertHalf = {
    header: {
        company: 'Robert Half / FM Systems',
        jobTitle: 'Senior Contract Developer',
        dates: {start: '11/1/2023',}
    },
    achievements: [
        "Led a team of 8 front-end developers, collaborated with lead engineers and POs in building complex inventory management scheduling software written in TypeScript React with Vite.",
        "Oversaw feature implementations and provided company-wide demos with mobile-first and responsive design controls built in Telerik KendoReact.",
        "Steered technical implementation and provided knowledge transfer with live code and peer sessions, approved merge requests and wrote documentation for developers.",
        "Added typescript-axios automation which authored code for endpoints and interfaces from Swagger JSON, resulting in significantly decreased development hours and effort.",
        "Delivered software with popular open-source packages and tools: typescript react, git (github), redux rtk, react-query, vite, swagger, openapi and managed delivery goals through JIRA."
    ]

}
const perficient = {
    header: {
        company: 'Perficient',
        jobTitle: 'Lead Technical Consultant',
        dates: {start: '7/1/2020', end: '8/1/2022'}
    },
    achievements: [
        "Created segmented CA State React SPAs (Single Page Applications) for users within Drupal: public, call centers, auto retailers, admins. Each with custom features and security, completing project start to finish in 1 year.",
        "Wrote software for mortgage buyers and loan underwriting service teams, migrating legacy applications to React.",
        "Charged 20% of time to advise clients on strategy / efforts to build realistic sprint expectations. Completed 2 major projects in 2 years. Worked in an agile global distributed team environment.",
        "Authored unit tests with 80% high-quality code test coverage. Wrote unit tests with Jest and used Cypress automation for end-to-end tests, functional and unit testing, regression analysis."
    ]
};


const chewy = {
    header: {
        company: 'Perficient / Chewy',
        jobTitle: 'Developer III',
        dates: {start: '6/1/2021', end: '2/1/2022'}
    },
    achievements: [
        "Developed new software for customer call center with a small development team. Wrote user interface, API, microservices in 9 months servicing all client needs by consolidating four legacy applications to one. Published to AWS ECS using Docker. Teamed with devops to successfully promote code through CICD pipeline.",
        "Created multi-sourced (noSQL, SQL, CSV, XML, JSON) chronological customer newsfeed. Built in React, all painted under one second.",
        "Integrated many API vendors (PayPal, Fedex, Google Maps) in building payments processing and order tracking application.",
        "Reduced call duration by 30% through eliminating mouse spanning, extraneous clicks, duplicate data entry and forms validation. Collaborated with UI/UX designers creating efficient intuitive workflows.",
        "Increased efficiency of web applications by 15% in 6 months through redesign and development of complex applications, debugging, performance profiling, and code optimization to deliver best possible customer experience."
    ]
}

const tronAir = {
    header: {
        company: 'Tronair',
        jobTitle: 'Senior Application Developer',
        dates: {start: '8/1/2017', end: '5/1/2020'}
    },
    achievements: [
        "Created multi-tenant ground control support inventory system from the ground up. Architect for Azure hosting and lead on application design.",
        "Utilized React with TypeScript within NextJS framework and Azure cloud. Built Web API with C# .NET Core 2.2 and MSSQL. OAuth secured access to business entities, provided through dependency injection.",
        "Designed and implemented normalized and persisted data from relational databases (MSSQL) into Redux middleware and created asynchronous messaging model, reducing load time over 40%."
    ]

}

const cars = {
    header: {
        company: 'cars.com',
        jobTitle: 'Application Developer',
        dates: {start: '3/1/2016', end: '8/1/2017'}
    },
    achievements: [
        "Created and managed reporting applications utilizing application frameworks C#, ASP.NET, Microsoft SQL Server.",
        "Created HR and assessment tools using HTML, CSS, C#, Entity Framework, Web API, Bootstrap, Knockout and JavaScript jQuery in 6 months.",
        "Wrote PowerShell scripts to automate Windows AD, Exchange, and Lync account administration. Authored ServiceNow and GreenHouse server/client side JavaScript in compliance with HR workflows.",
        "Developed ServiceNow orchestration application to streamline onboarding process for new employees and hiring managers. Wrote integration scripts with CMS SilkRoad OpenHire. Created trackable task management dashboards for HR."
    ]
}

const ahima = {
    header: {
        company: 'AHIMA',
        jobTitle: 'Application Developer',
        dates: {start: '6/1/2014', end: '3/1/2016'}
    },
    achievements: [
        "Authored features in HTML, CSS, C#, Microsoft SQL, JavaScript with application frameworks .NET and Web API for ahima.org. Hosted with SiteCore, coded for e-commerce transactions and product promotion management.",
        "Mentored 3 developers coding public e-commerce and association membership sites. Wrote technical requirements and worked on cross-functional team to complete new e-commerce solution.",
        "Created web applications and web services automating data-driven client communications. Created education assessment software with HTML, CSS, JavaScript, and C# with .NET framework and SiteCore.",
        "Implemented ETL system. Data imported to SQL Server 2008 from discrete systems with custom data cleaning and report integrations."
    ]
};

const hcrc = {
    header: {
        company: 'HCRC',
        jobTitle: 'Software Engineer / IT Manager',
        dates: {start: '4/1/2011', end: '5/1/2014'}
    },
    achievements: ['Designed and authored public facing tuition net price web application, scaled to 40 clients. Created data analytics dashboards, Microsoft Office automation tools, managed all IT Operations.']
};

export const workItems = [robertHalf, perficient, chewy, tronAir, cars, ahima, hcrc].map(x => mapWork(x));

export const skillItems = [
    "Agile",
    "TypeScript",
    "JavaScript",
    "React",
    "C#",
    "ASP.NET",
    "Microservices",
    "HTML",
    "SCSS",
    "CSS",
    "Responsive Design",
    "JIRA",
    ".NET",
    "Cloud-Native services",
    "E-commerce",
    "SaaS",
    "Webhooks",
    "CI/CD",
    "OAuth",
    "SQL",
    "git & GitHub",
    "Next.js",
    "react-query",
    "Telerik KendoReact",
    "Redux",
    "MUI",
    "Bootstrap",
    "jQuery",
    "Web API",
    "AWS",
    "Azure",
    "Web Services",
    "Sitecore CMS",
    "Cypress",
    "PowerShell",
    "Postman",
    "XML",
    "JSON",
    "SQL Database Schema Design",
    "Data Analysis"
];

export const contacts: ContactProps[] = [
    {text: '773-302-6027', icon: PhoneIcon, hrefProtocol: 'tel:'},
    {text: 'will@sammarco.me', icon: EmailIcon, hrefProtocol: 'mailto:'},
    {text: 'linkedin.com/in/williamsammarco', icon: LinkIcon, hrefProtocol: 'https://www.'}
];

export const major = 'B.S. in Computer Science';
export const minor = 'Minor in Economics';
export const university = 'University Of Illinois';
export const school = 'College of Engineering';
export const campusLoc = 'Chicago, Illinois';
export const gradDate = '8/1/2010';