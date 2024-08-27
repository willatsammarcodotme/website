import { mapWork } from '../utils/utils-map';
import { ContactProps } from '../Components/Contact/Contact';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';

const robertHalf = {
    header: {
        company: 'Robert Half / FM Systems',
        jobTitle: 'Senior Contract Developer',
        dates: {start: '11/1/2023', }
    },
    achievements : [
        "Led a team of 8 front-end developers, collaborated with lead engineers and POs in building complex inventory management scheduling software written in TypeScript React with Vite.",
        "Oversaw feature implementations and provided company-wide demos with mobile-first and responsive design controls built in Telerik KendoReact.",
        "Steered technical implementation and provided knowledge transfer with live coding and peer sessions, approving merge requests and writing documentation for developers.",
        "Added typescript-axios automation which authored code for endpoints and interfaces from Swagger JSON, resulting in significantly decreased development hours and effort.",
        "Delivered software with popular open-source packages and tools: typescript react, git (github), redux rtk, react-query, vite, swagger, openapi and managed delivery goals through JIRA."
    ]

}
const perficient = {
    header: {
        company: 'Perficient',
        jobTitle: 'Lead Technical Consultant',
        dates: {start: '7/1/2020', end: '8/1/2022' }
    },
    achievements : [
        "Created segmented CA State React SPAs (Single Page Applications) for users within Drupal: public, call centers, auto retailers, admins each with custom features and security, completing project start to finish in 1 year.",
        "Lead development for frontend technical solutions and REST API integrations. Agile environment, multiple projects. Specialized in React, MUI, JavaScript and Spring Boot. Wrote functional requirements in JIRA.",
        "Wrote software for mortgage buyers and loan underwriting service teams, migrating legacy applications to React.",
        "Charged 20% of time to advise managers on teamwork strategy, efforts to build realistic sprint expectations and write software documentation. Completed 2 major projects in 2 years. Worked in an agile global distributed team environment."
    ]
};


const chewy = {
    header: {
        company: 'Perficient / Chewy',
        jobTitle: 'Developer III',
        dates: {start: '6/1/2021', end: '2/1/2022' }
    },
    achievements : [
        "Developed new software for customer call center with a small development team. Wrote user interface, API, and microservices in 9 months, consolidating four legacy applications into one new solution containerized using AWS ECS and Docker. Teamed with DevOps to successfully promote code through the CICD pipeline.",
        "Created multi-sourced data (noSQL, SQL, CSV, XML, JSON) to build a chronological feed of customer history displayed in a news feed built in React, all rendered under one second. Integrated numerous merchant and vendor APIs.",
        "Integrated many API vendors such as PayPal and FedEx into the frontend for payments processing and order tracking.",
        "Reduced call duration by 30% through eliminating mouse spanning, extraneous clicks, duplicate data entry, and forms validation. Collaborated with UI/UX designers to create efficient, intuitive workflows."
    ]
}

const tronAir = {
    header: {
        company: 'Tronair',
        jobTitle: 'Senior Application Developer',
        dates: {start: '8/1/2017', end: '5/1/2020' }
    },
    achievements : [
        "Created a multi-tenant ground control support inventory system from the ground up to replace legacy Flash applications in 2 years. Primary contributor to software architecture and application design scaled in Azure cloud.",
        "Utilized React with TypeScript within the Next.js framework and Azure cloud. Built Web API with C# .NET Core 2.2 and MSSQL. OAuth secured access to business entities provided through dependency injection.",
        "Designed and implemented normalized and persisted data from relational databases (MSSQL) into Redux middleware and created an asynchronous messaging model, reducing load time by over 40%."
    ]

}

const cars = {
    header: {
        company: 'cars.com',
        jobTitle: 'Application Developer',
        dates: {start: '3/1/2016', end: '8/1/2017' }
    },
    achievements : [
        "Created and managed reporting applications utilizing application frameworks C#, ASP.NET, and Microsoft SQL Server.",
        "Developed HR and assessment tools using HTML, CSS, C#, Entity Framework, Web API, Bootstrap, Knockout, and JavaScript jQuery in 6 months.",
        "Wrote PowerShell scripts to automate Windows AD, Exchange, and Lync account administration. Authored ServiceNow and GreenHouse server-side and client-side JavaScript in compliance with HR workflows.",
        "Developed a ServiceNow orchestration application to streamline the onboarding process for new employees and hiring managers. Wrote integration scripts with CMS SilkRoad OpenHire and created trackable task management dashboards for HR."
    ]
}

const ahima = {
    header: {
        company: 'AHIMA',
        jobTitle: 'Application Developer',
        dates: {start: '6/1/2014', end: '3/1/2016' }
    },
    achievements : [
        "Authored features in HTML, CSS, C#, Microsoft SQL, and JavaScript with application frameworks .NET and Web API in SiteCore for the ecommerce site ahima.org to promote educational material sales and process transactions.",
        "Mentored 3 developers coding e-commerce and association membership sites. Built project technical requirements and worked on a cross-functional team to complete the e-commerce solution.",
        "Created web applications and web services automating data-driven client communications. Developed education assessment software using HTML, CSS, JavaScript, and C# with .NET framework and SiteCore.",
        "Implemented data import pipelines in SQL Server 2008 to connect discrete systems, cleanse, merge, and insert data into a local database, and provide reporting on consolidated data."
    ]
};

const hcrc = {
    header: {
        company: 'HCRC',
        jobTitle: 'Software Engineer / IT Manager',
        dates: {start: '4/1/2011', end: '5/1/2014' }
    },
    achievements : ['Designed and authored public facing tuition net price web application scaled to 40 clients, created data analytics dashboards, created Microsoft Office automation tools, and managed all company IT Operations'
    ]
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
    {text : '773-302-6027', icon : PhoneIcon, hrefProtocol : 'tel:'},
    {text : 'will@sammarco.me', icon : EmailIcon, hrefProtocol : 'mailto:'},
    {text : 'linkedin.com/in/williamsammarco', icon : LinkIcon, hrefProtocol : 'https:'}
];

export const major = 'B.S. in Computer Science';
export const minor = 'Minor in Economics';
export const university = 'University Of Illinois';
export const school = 'College of Engineering';
export const campusLoc = 'Chicago, Illinois';
export const gradDate = '8/1/2010';