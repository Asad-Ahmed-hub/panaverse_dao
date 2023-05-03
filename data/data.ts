import { CoursesType, CourseSyllabus, Menu, Team } from "@/DataType/DataType";
import QuaterOne from '../app/components/QuaterOne'
 

export const menu:Menu[] = 
[
    {
    id: 1,
    title: "Home",
    url: "/"
    },
    {
        id: 2,
        title: "Courses",
        url: "/courses/web-3-and-metaverse-developer"
    },
    {
        id: 3,
        title: "About Us",
        url: "/about-us"
    },
    {
        id: 4,
        title: "Contact Us",
        url: "/contact-us"
    }
]

export const courses:CoursesType[] = 
[
{id: 1,basepath: "/courses/web-3-and-metaverse-developer",href: "/courses/web-3-and-metaverse-developer?quater=1",title: "Web 3.0 (Blockchain) and Metaverse", image: "/metaverse.png"  },
{id: 2,basepath: "/courses/artificial-intelligence" ,href: "/courses/artificial-intelligence?quater=1",title: "Artificial Intelligence (AI) and Deep Learning", image: "/artificial-intelligence.png"  },
{id: 3,basepath: "/courses/cloud-native" ,href: "/courses/cloud-native?quater=1",title: "Cloud-Native Computing", image: "/cloud-native.png"  },
{id: 4,basepath: "/courses/ambient-computing-and-iot",href: "/courses/ambient-computing-and-iot?quater=1",title: "Ambient Computing and IoT", image: "/internet-of-things.png"  },
{id: 5,basepath: "/courses/enomics-and-bioinformatics",href: "/courses/enomics-and-bioinformatics?quater=1",title: "Genomics and Bioinformatics", image: "/Genomics and Bioinformatics Specialization.png"  },
{id: 6,basepath: "/courses/network-programmability-and-automation",href: "/courses/network-programmability-and-automation?quater=1",title: "Network Programmability and Automation Specialization", image: "/Network Programmability.png"  },
]

export const ourteam:Team[] = [
    {
        id: 1,
        name: "Zia Khan",
        position: "CEO at Panacloud",
        profile_image: '/zia_khan.jpg',
        social_profiles: {
            facebook: "https://www.facebook.com/ziakhan",
            linkedin: "https://www.linkedin.com/in/ziaukhan/",
            github: "https://github.com/ziaukhan"

        }


    },
    {
        id: 2,
        name: "Hira Khan",
        position: "Director at the Women Empowerment  PIAIC",
        profile_image: '/hira_shoaib.jpg',
        social_profiles: {
            facebook: "https://www.facebook.com/heyhira",
            linkedin: "https://www.linkedin.com/in/hira-khan-76523540/?originalSubdomain=pk",
            github: "https://github.com/hirashoaib"

        }
    },
    {
        id: 3,
        name: "Zeeshan Hanif",
        position: "Head of Software Development at Panacloud Pvt Ltd",
        profile_image: '/zeshan-hanif.jfif',
        social_profiles: {
            facebook: "https://www.facebook.com/zeeshanhanif",
            linkedin: "https://www.linkedin.com/in/zeeshanhanif/?originalSubdomain=pk",
            github: "https://github.com/zeeshanhanif"

        }
    },
    {
        id: 4,
        name: "Adil Altaf",
        position: "Full Stack Developer",
        profile_image: '/adil_altaf.jpg',
        social_profiles: {
            facebook: "https://www.facebook.com/profile.php?id=100006937879362",
            linkedin: "https://www.linkedin.com/in/adilaltaf/",
            github: "https://github.com/adil-innovation-lab"

        }
    },
    {
        id: 5,
        name: "Daniyal Nagori",
        position: "Software Development Lead at Panacloud Pvt Ltd",
        profile_image: '/daniyal_nagori.jfif',
        social_profiles: {
            facebook: "https://www.facebook.com/daniyalnagori1237",
            linkedin: "https://www.linkedin.com/in/daniyalnagori/",
            github: "https://github.com/daniyalnagori"

        }
    },
    {
        id: 6,
        name: "Hamza Syed",
        position: "Software Development",
        profile_image: '/hamza.png',
        social_profiles: {
            facebook: "https://www.facebook.com/profile.php?id=100011483407599",
            linkedin: "https://www.linkedin.com/in/webdeveloper-react-jamstack-expert/",
            github: "https://github.com/Hamzah-syed"
            
        }
    }
]



export const coursesquaters:CourseSyllabus[] = [
        {
            id: 1,
            title: "Web 3.0 (Blockchain) and Metaverse",
            description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
            image: "/web-3.png",
            basepath: "/courses/web-3-and-metaverse-developer",
            quaters: [
                {
                    id: 1,
                    title: "Quater 1",
                    richtext: `<div class="mt-3 w-full"><h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">HTML and CSS (Homework)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Learn HTML by Hira Khan (Watch Recorded Videos)</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Learn CSS Intro by Hira Khan (Watch Recorded Videos)</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Web 3.0 and Metaverse Theory</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Introduction to Panaverse DAO</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Web 3.0 User Guide</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">Complete Web 3 Assignments included in the Web 3 User Guide</p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Virtual and Augmented  Metaverse User Guide</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Fundamentals of JavaScript (ECMAScript 2022 Language Specification)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Chapters 2-6, 13 of JavaScript from Beginner to Professional: Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">JavaScript Book Code</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Getting Started Exercises with JavaScript and Node.js</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Fundamentals of JavaScript and Node.js Quiz</h3>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Topics Covered in the Quiz:</h4>
                    <ol class="list-decimal mt-1 px-4 gap-y-1 text-justify w-full  ">
                    <li class="w-full">Background of JavaScript and How to use JavaScript in Browser</li>
                    <li class="w-full">Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full"><a target="_blank" href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm.</a>
                    How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. <a target="_blank" href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">The last example in this presentation shows you how to use prompt-sync library in your Node.js programs.</a>
                    Note: After this point, we will do all our class work and exercises using Node.js in .mjs files. We will also be able to develop interactive Node.js console programs which will greatly help the students to learn.</li>
                    <li class="w-full">Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">JavaScript promises, mastering the asynchronous</li>
                    </ol>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Javascript Promises by Codingame.</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">New JavaScript Features in ECMAScript 2022 and 2021.</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Object-Oriented Programming with TypeScript</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Chapters 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/learn-typescript" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Learning Repository</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.learningtypescript.com/" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">In Class Companion projects and articles for Learning TypeScript</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Homework Project</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/typescript-node-projects" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">typescript-node-projects</a>.</p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">TypeScript Quizzes</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">Fundamentals of TypeScript Quiz</p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">TypeScript Professional Proficiency Quiz</p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">TypeScript for React</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://profy.dev/article/react-typescript" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Minimal TypeScript Crash Course For React
                    With Interactive Code Exercises</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Quarter Break Assignments and Quizzes</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">During the Quarter Break, we do the following Assignments:</p>

                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">The best-developed Website will be hosted on www.panaverse.co domain.</p>
     
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">The best-developed Website will be hosted on <a target="_blank" href="www.piaic.org" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">www.piaic.org</a> domain.</p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">After completing the above Five Assignments everyone will appear in the following two Quizzes covering Github and TypeScript:</p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Fundamentals of Version Control with Git (Recorded Videos)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded Videos)</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">Chapters 1, 2, 3, and 4 Learn Version Control with Git: A step-by-step course for the complete beginner by Tobias Günther</p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">We will also cover these readings:</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://help.github.com/articles/markdown-basics/" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Markdown Basics</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Difference between fork and branch on github </a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Git branch, fork, fetch, merge, rebase and clone what are the differences</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://git-scm.com/book/en/v2/Git-Branching-Rebasing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Git Branching Rebasing </a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Git Branching Remote Branches</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://try.github.io/levels/1/challenges/1" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">For practice.</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Homework:</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.datacamp.com/courses/introduction-to-git-for-data-science" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">introduction to git for data science</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Git Cheatsheet</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Git data science cheatsheet.html</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">TypeScript Proficiency Quiz</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">Total Questions: 63
                    Duration: 120 minutes</p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Study Material:</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/learn-typescript" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">learn-typescript</a></p></div>`
                },
                {
                    id: 2,
                    title: "Quater 2",
                    richtext: `<div class="mt-3 w-full text-justify"><h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Next.js 13 Web Development</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://beta.nextjs.org/docs" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Next 13 Official Documentation</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://beta.reactjs.org/learn" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Latest Learn React Official Website</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/learn-nextjs" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Learn Next.js 13 Learning Repo</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Next.js 13 using Chakra UI (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.freecodecamp.org/news/css-flexbox-complete-guide/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">CSS Flexbox Explained – Complete Guide to Flexible Containers and Flex Items</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://chakra-ui.com/getting-started" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Chakra UI Docs</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote  Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color ">Designing and Prototyping Interfaces with Figma: Learn essential UX/UI design principles by creating interactive prototypes for mobile, tablet, and desktop by Fabio Staiano
                    <a target="_blank" href="https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa </a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.figma.com/community/file/768809027799962739" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Figma Design Kit for TailwindCSS</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.figma.com/community/file/971408767069651759" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Chakra UI Figma Kit</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">API Routes with Next.js (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://nextjs.org/docs/api-routes/introduction" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">API Routes</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">APIs with Next.js and tRPC (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Build a tRPC CRUD API Example with Next.js	</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Stop building REST APIs for your Next.js apps, use tRPC instead</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">SQL and Prisma</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Start from scratch with relational databases</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/watch?v=5hzZtqCNQKk" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">SQL For Beginners Video Tutorial</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.freecodecamp.org/news/dbms-and-sql-basics/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Database Management Systems and SQL – Tutorial for Beginners</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Next.js 13 using TailwindCSS (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Modern CSS with Tailwind, Second Edition by Noel Rappin</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">AWS Application Composer (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/watch?v=BujE_tik5r8" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">What is AWS Application Composer?</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/watch?v=p411uh363jQ" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Event-driven apps with AWS Application Composer</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://aws.amazon.com/application-composer/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Visually design and build serverless applications quickly</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] font-bold text-black my-2"><ins>Must Have: Create Free AWS Account</ins></h4>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] font-bold text-black my-2"><a target="_blank" href="https://aws.amazon.com/free/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">AWS Free Tier</a></h4>
                    <h5 class="whitespace-pre-line text-[16px] xl:text-14 font-bold text-black my-2">Note: For AWS Free Tier you will need a credit or debit card. The easiest way for Pakistani students is to open a bank account with Meezan Bank. Open a Meezan Aasan Account if you have no earning proof. Meezan Bank will charge Rs. 1100 for ATM Debit Card and there is a requirement of Rs. 100 minimum deposit. The card will be delivered in a few weeks. Our students have reported that this Debit card works with AWS.</h5>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color ">Now you can create a virtual VISA Debit card through the <a target="_blank" href="https://www.nayapay.com/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">NayaPay app</a> which can be used to create AWS/GCP/Azure accounts. This is good news for those students who find it difficult to create physical debit and credit cards from banks.</p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] font-bold text-black my-2">You can also get a $300 credit</h4>
                    <a target="_blank" href="https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">https://pages.awscloud.com/</a>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF) (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/learn-multicloud-api-development" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Learn Multicloud Serverless API Development using CDK Terraform in Baby Steps</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Web 2.0 Projects</h3>
                    <ul class="flex flex-col list-disc px-4 gap-y-1 ">
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/nextjs-projects" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Next.js Projects</a></p>
                    </li>
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/styling-nextjs-projects" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Styling Next.js Projects using TailwindCSS and Chakra UI</a></p>
                    </li>
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/ogzhanolguncu/min-todo" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Todo Full-Stack App</a></p>
                    </li>
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/watch?v=nzJsYJPCc80" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Build a Twitter Clone</a></p>
                    </li>
                    </ul></div>`
                },
                {
                    id: 3,
                    title: "Quater 3",
                    richtext: `<h1 class="text-justify text-3xl text-black font-bold">Earn While You Learn Projects:</h1>
                    <div class="mt-3 text-justify"><h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">A. Build Full-Stack Next.js 13 Jamstack Templates</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.</p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">The Template Standard
                    <a target="_blank" href="https://github.com/panaverse/panaverse-template-standard" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">https://github.com/panaverse/panaverse-template-standard </a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">B. Build QraphQL APIs</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">You will be assigned to build APIs for which you will sell subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.</p></div>`
                },
                {
                    id: 4,
                    title: "Quater 4",
                    richtext: `<h1 class="text-3xl text-justify text-black font-bold">Course Outline:</h1><div class="mt-3 text-justify"><h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Blockchain and Metaverse Theory</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">The Metaverse: And How It Will Revolutionize Everything by Matthew Ball</a></p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">Mastering Blockchain - Fourth Edition by Imran Bashir</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Smart Contract Development in Solidity</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">Solidity Programming Essentials - Second Edition By Ritesh Modi</a></p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/defi-dapps-solidity-smart-contracts" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">Solidity Learning Repo</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Dapp Development using Ethers.js and Next.js 13</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/dapps-nextjs" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">Dapp Learning Repo</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Tokennomics</h3>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Blockchain Project: Create a Token and Launch ICO/IEO/IDO</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">As you probably know, the ICO ("Initial Coin Offering") industry has been booming, and it's completely reinventing the way new startups kickstart themselves. In fact, have a look at Wikipedia's list of highest <a target="_blank" href="https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">crowdfunding projects</a>, and you'll notice that blockchain projects absolutely dominate the list.</p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://phemex.com/blogs/what-is-a-dex-ido" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">Understand the difference between IDO vs. IEO vs. ICO</a></p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">Also check these links for latest listings:</p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://icodrops.com" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">ICO list at ICO Drops</a></p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://topicolist.com/" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">ICO List of Best New Initial Coin Offerings</a></p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOsTop-Rated Crypto Token Sales: <a target="_blank" href="https://cryptototem.com/ico-list/" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">List of New ICOs, STOs, IEOs and IDOs </a></p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.icolistingonline.com" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">ICO List Online</a></p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://coincodex.com/ieo-list/binance/" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">Binance IEO List</a></p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.coinspeaker.com/ieo/platform/binance-launchpad/" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">Binance Launchpad</a></p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://icomarks.com/ieo" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">IEO List</a></p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://polkastarter.com" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">Polkastarter</a></p>
                    <h4 class="whitespace-pre-line text-[18px] xl:text-[18px] font-bold text-black my-2">Project Part 1: How to Launch a IEO on Binance Launchpad</h4>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://appinventiv.com/blog/how-to-launch-an-ieo/" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">Read How to Launch an IEO</a></p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">Your first task of the project is to make a google slides presentation on how to start a IEO on the <a target="_blank" href="https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">Binance Launch Pad </a></p>
                    <h5 class="whitespace-pre-line text-16 xl:text-14 font-bold text-black my-2">Note: Also document the alternatives to Binance Launchpad.</h5>
                    <h4 class="whitespace-pre-line text-[18px] xl:text-[18px] font-bold text-black my-2">Project Part 2: How to Launch a IDO on Polkastarter</h4>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">Review the list of top <a target="_blank" href="https://cryptorank.io/fundraising-platforms" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">fundraising platforms</a></p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">Your second task of the project is to make a google slides presentation on how to start a IDO on the <a target="_blank" href="https://polkastarter.com/" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">Polkastarter</a></p>
                    <h4 class="whitespace-pre-line text-[18px] xl:text-[18px] font-bold text-black my-2">Project Part 3: Create a Pako Token</h4>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">By creating a token and related contracts, you'll also learn how to handle money sent to your contracts, which should come in handy if you want to create some kind of paid decentralized service in the future.
                    &nbsp;
                    Therefore, for the sake of this chapter, let's imagine that our  Pako DApp uses its own coin – the Pako Token. We will create two contracts – one for the token itself and one for the token crowd sale (the ICO).
                    &nbsp;
                    Now Create your own Pako ERC20 Token and deploy it on a testnet. The Token should be to use OpenZeppelin contracts. You will use the Hardhat development environment. Also, write at least twenty automated tests. We will be using Solidity and Typescript for development.</p>
                    <h4 class="whitespace-pre-line text-[18px] xl:text-[18px] font-bold text-black my-2">Project Part 4: Develop Crowd Sale Contract</h4>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">This contract will be responsible for allowing users to exchange ETH for our Pako Token. In order to do that we need to set a price for our token (1 ETH = 100 Pako Token)
                    &nbsp;
                    Implement a payable buyToken() function.
                    &nbsp;
                    Emit a BuyTokens event that will log who’s the buyer, the amount of ETH sent and the amount of Token bought
                    &nbsp;
                    Transfer 75% of the Tokens to the Crowd Sale contract at deployment time. i.e. Right after the contract is deployed, we want the token contract to send 75% of our token supply to it. While 25% remain in our personal "owner" account.
                    &nbsp;
                    Transfer the ownership of the Crowd Sale contract (at deploy time) to our frontend address so that we are able to withdraw the ETH.
                    &nbsp;
                    You can use the openzeppelin <a target="_blank" href="https://docs.openzeppelin.com/contracts/4.x/crowdsales" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">crowd sale contracts</a>  however you will have to update the code to the latest solidity version.
                    &nbsp;
                    Also write extensive tests, for example we will simply send a transaction of 1 ETH from a random account to the contract. After the transaction, we should expect the account to have received Pako, while the contract's balance should have been reduced.
                    &nbsp;</p>
                    <h5 class="whitespace-pre-line text-16 xl:text-14 font-bold text-black my-2">Note: Before you get started writing the token contract we suggest you review the access control</h5>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://docs.openzeppelin.com/contracts/4.x/access-control" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">https://docs.openzeppelin.com/contracts/ </a></p>
                    <h4 class="whitespace-pre-line text-[18px] xl:text-[18px] font-bold text-black my-2">Project Part 5: Trying it with MetaMask</h4>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">While it's always good to test your code, it's often more satisfying to see the results of your work wrapped in a nice UI. Let's see how we can deploy our contracts and get some Pako tokens into our MetaMask wallet!
                    &nbsp;
                    We start by running our deployment scripts for the test network so that the new token contracts are uploaded and deployed.
                    &nbsp;
                    When it's done, take note of what addresses the contracts were uploaded to and copy it!
                    &nbsp;
                    Now head to MetaMask, and send a transaction of 1 ETH to the crowd sale contract address. If your MetaMask wallet doesn't have any ethers, remember that you can use any faucet.
                    &nbsp;
                    After the transaction has been confirmed, you might be confused about why you can't see any tokens in your wallet. It turns out that you need to manually add the token address in MetaMask in order to "register" it – after all, there are so many tokens out there, there's no way MetaMask could list them all by default!
                    &nbsp;
                    To do this, open the side menu and click on the "Add token" button to get started:
                    &nbsp;
                    Once you're on the token page, click on "Add custom token" and paste in the token contract's address in the address field.
                    &nbsp;
                    After confirming that you want to add the token, you should be able to see your Pako balance right next to your ETH balance in the wallet. How cool!
                    &nbsp;</p>
                    <h4 class="whitespace-pre-line text-[18px] xl:text-[18px] font-bold text-black my-2">Project Part 6: Trying it with Multisignature Wallets</h4>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">Read <a target="_blank" href="https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">https://www.coindesk.com/</a></p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://gnosis-safe.io/" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">Now use Gnosis Safe</a> with multi-sigs to do what you did in the last part.</p>
                    <h4 class="whitespace-pre-line text-[18px] xl:text-[18px] font-bold text-black my-2">Project Part 7: Sending Tokens using Ethers.js</h4>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">Write a Typescript program to send Pako Token to some friend's address using Ethers.js.</p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://ethereum.org/en/developers/tutorials/send-token-etherjs/" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">You may follow this tutorial</a></p>
                    <h4 class="whitespace-pre-line text-[18px] xl:text-[18px] font-bold text-black my-2">Project Part 8 Advance: Create, Deploy, Mint, and Sell an NFT</h4>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">Read this NFT tutorial series</a></p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">Create a NFT contract using the <a target="_blank" href="https://docs.openzeppelin.com/contracts/4.x/erc721" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">OpenZepplen ERC721 NFT Standard</a></p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">You may use the <a target="_blank" href="https://docs.openzeppelin.com/contracts/4.x/erc721#Presets" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">Preset ERC721 contract</a></p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">Deploy your NFT contract on a testnet, mint it, and view it on the MetaMask wallet and list it on <a target="_blank" href="https://opensea.io/" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">OpenSea Marketplace</a> for sale.</p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">Implement a <a target="_blank" href="https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">ERC721 Market</a></p></div>`
                },
                {
                    id: 5,
                    title: "Quater 5",
                    richtext: `<h1 class="text-3xl text-justify text-black font-bold">Course Outline:</h1><div class="mt-3 "><h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Open Metaverse Web Development</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/metaverse-web" class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify my-1.5 text-blue-600 underline font ">Open Metaverse Learning Repo </a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Blender 3D asset Creation for the Metaverse (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify my-1 font text-para-color ">Blender development is being funded by heavyweights in the real-time 3D (RT3D) space such as Apple, Unity, AMD, Intel, Meta, NVIDIA, AWS, Epic Games, Adobe, Microsoft, and Decentraland. It is expected to become the standard asset creation tool for metaverse.</p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify my-1 font text-para-color ">Blender 3.3+ <a target="_blank" href="https://www.blender.org/download/" class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify my-1.5 text-blue-600 underline font ">Download</a></p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD" class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify my-1.5 text-blue-600 underline font ">Blender 3.0 Beginner Tutorial</a></p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify my-1 font text-para-color "><a target="_blank" href="https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit" class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify my-1.5 text-blue-600 underline font ">Blender 3.0 Hotkey </a></p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify my-1 font text-para-color ">Blender Projects Textbook: <a target="_blank" href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561" class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify my-1.5 text-blue-600 underline font ">Blender by Example 2nd Edition</a></p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify my-1 font text-para-color ">Blender Textbook: The Complete Guide to Blender Graphics: <a target="_blank" href="https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5" class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify my-1.5 text-blue-600 underline font ">Computer Modeling &amp; Animation 7th Edition by John M. Blain </a></p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/watch?v=H7T0SzdFHwg" class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify my-1.5 text-blue-600 underline font ">Best Hardware Performance for Blender Rendering</a></p>
                    <h4 class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify font-bold text-black my-2">Assignment 1:</h4>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify my-1 font text-para-color ">Build a 3D Donut using Blender 3 as shown in these <a target="_blank" href="https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD" class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify my-1.5 text-blue-600 underline font ">video tutorials </a></p>
                    <h4 class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify font-bold text-black my-2">Assignment 2:</h4>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify my-1 font text-para-color ">Build a Viking Scene using Blender 3 as shown in chapter 2 of the Book <a target="_blank" href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561" class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify my-1.5 text-blue-600 underline font ">Blender by Example 2nd Edition</a></p>
                    <h4 class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify font-bold text-black my-2">Assignment 3:</h4>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify my-1 font text-para-color ">Modeling a Time Machine using Blender 3 as shown in chapters 3 and 4 of the Book <a target="_blank" href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561" class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify my-1.5 text-blue-600 underline font ">Blender by Example 2nd Edition</a></p>
                    <h4 class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify font-bold text-black my-2">Assignment 4:</h4>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify my-1 font text-para-color ">Build a Modern Kitchen using Blender 3 as shown in chapters 5, 6, and 7 of the Book <a target="_blank" href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561" class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify my-1.5 text-blue-600 underline font ">Blender by Example 2nd Edition</a></p>
                    <h4 class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify font-bold text-black my-2">Assignment 5:</h4>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify my-1 font text-para-color ">Illustrating an Alien Hero with Grease Pencil as shown in chapter 8 of the Book <a target="_blank" href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561" class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify my-1.5 text-blue-600 underline font ">Blender by Example 2nd Edition  </a></p>
                    <h4 class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify font-bold text-black my-2">Assignment 6:</h4>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify my-1 font text-para-color ">Build a 3D Sword in the Stone using Blender 3 as shown in these <a target="_blank" href="https://www.youtube.com/watch?v=bpvh-9H8S1g" class="whitespace-pre-line text-[18px] xl:text-[16px] text-justify my-1.5 text-blue-600 underline font ">video tutorials </a></p></div>`
                }
            ]
        },
        {
            id: 2,
            title: "Artificial Intelligence (AI) and Deep Learning",
            description: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
            basepath: "/courses/artificial-intelligence",
            image: "/ai.png",
            quaters: [
                {
                    id: 1,
                    title: "Quater 1",
                    richtext: `<div class="mt-3 w-full"><h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">HTML and CSS (Homework)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Learn HTML by Hira Khan (Watch Recorded Videos)</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Learn CSS Intro by Hira Khan (Watch Recorded Videos)</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Web 3.0 and Metaverse Theory</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Introduction to Panaverse DAO</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Web 3.0 User Guide</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">Complete Web 3 Assignments included in the Web 3 User Guide</p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Virtual and Augmented  Metaverse User Guide</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Fundamentals of JavaScript (ECMAScript 2022 Language Specification)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Chapters 2-6, 13 of JavaScript from Beginner to Professional: Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">JavaScript Book Code</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Getting Started Exercises with JavaScript and Node.js</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Fundamentals of JavaScript and Node.js Quiz</h3>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Topics Covered in the Quiz:</h4>
                    <ol class="list-decimal mt-1 px-4 gap-y-1 text-justify w-full  ">
                    <li class="w-full">Background of JavaScript and How to use JavaScript in Browser</li>
                    <li class="w-full">Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full"><a target="_blank" href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm.</a>
                    How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. <a target="_blank" href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">The last example in this presentation shows you how to use prompt-sync library in your Node.js programs.</a>
                    Note: After this point, we will do all our class work and exercises using Node.js in .mjs files. We will also be able to develop interactive Node.js console programs which will greatly help the students to learn.</li>
                    <li class="w-full">Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">JavaScript promises, mastering the asynchronous</li>
                    </ol>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Javascript Promises by Codingame.</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">New JavaScript Features in ECMAScript 2022 and 2021.</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Object-Oriented Programming with TypeScript</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Chapters 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/learn-typescript" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Learning Repository</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.learningtypescript.com/" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">In Class Companion projects and articles for Learning TypeScript</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Homework Project</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/typescript-node-projects" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">typescript-node-projects</a>.</p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">TypeScript Quizzes</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">Fundamentals of TypeScript Quiz</p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">TypeScript Professional Proficiency Quiz</p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">TypeScript for React</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://profy.dev/article/react-typescript" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Minimal TypeScript Crash Course For React
                    With Interactive Code Exercises</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Quarter Break Assignments and Quizzes</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">During the Quarter Break, we do the following Assignments:</p>

                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">The best-developed Website will be hosted on www.panaverse.co domain.</p>
     
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">The best-developed Website will be hosted on <a target="_blank" href="www.piaic.org" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">www.piaic.org</a> domain.</p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">After completing the above Five Assignments everyone will appear in the following two Quizzes covering Github and TypeScript:</p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Fundamentals of Version Control with Git (Recorded Videos)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded Videos)</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">Chapters 1, 2, 3, and 4 Learn Version Control with Git: A step-by-step course for the complete beginner by Tobias Günther</p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">We will also cover these readings:</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://help.github.com/articles/markdown-basics/" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Markdown Basics</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Difference between fork and branch on github </a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Git branch, fork, fetch, merge, rebase and clone what are the differences</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://git-scm.com/book/en/v2/Git-Branching-Rebasing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Git Branching Rebasing </a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Git Branching Remote Branches</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://try.github.io/levels/1/challenges/1" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">For practice.</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Homework:</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.datacamp.com/courses/introduction-to-git-for-data-science" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">introduction to git for data science</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Git Cheatsheet</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Git data science cheatsheet.html</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">TypeScript Proficiency Quiz</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">Total Questions: 63
                    Duration: 120 minutes</p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Study Material:</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/learn-typescript" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">learn-typescript</a></p></div>`
                },
                {
                    id: 2,
                    title: "Quater 2",
                    richtext: `<div class="mt-3 w-full text-justify"><h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Next.js 13 Web Development</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://beta.nextjs.org/docs" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Next 13 Official Documentation</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://beta.reactjs.org/learn" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Latest Learn React Official Website</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/learn-nextjs" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Learn Next.js 13 Learning Repo</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Next.js 13 using Chakra UI (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.freecodecamp.org/news/css-flexbox-complete-guide/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">CSS Flexbox Explained – Complete Guide to Flexible Containers and Flex Items</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://chakra-ui.com/getting-started" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Chakra UI Docs</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote  Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color ">Designing and Prototyping Interfaces with Figma: Learn essential UX/UI design principles by creating interactive prototypes for mobile, tablet, and desktop by Fabio Staiano
                    <a target="_blank" href="https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa </a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.figma.com/community/file/768809027799962739" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Figma Design Kit for TailwindCSS</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.figma.com/community/file/971408767069651759" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Chakra UI Figma Kit</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">API Routes with Next.js (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://nextjs.org/docs/api-routes/introduction" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">API Routes</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">APIs with Next.js and tRPC (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Build a tRPC CRUD API Example with Next.js	</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Stop building REST APIs for your Next.js apps, use tRPC instead</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">SQL and Prisma</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Start from scratch with relational databases</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/watch?v=5hzZtqCNQKk" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">SQL For Beginners Video Tutorial</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.freecodecamp.org/news/dbms-and-sql-basics/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Database Management Systems and SQL – Tutorial for Beginners</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Next.js 13 using TailwindCSS (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Modern CSS with Tailwind, Second Edition by Noel Rappin</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">AWS Application Composer (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/watch?v=BujE_tik5r8" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">What is AWS Application Composer?</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/watch?v=p411uh363jQ" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Event-driven apps with AWS Application Composer</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://aws.amazon.com/application-composer/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Visually design and build serverless applications quickly</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] font-bold text-black my-2"><ins>Must Have: Create Free AWS Account</ins></h4>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] font-bold text-black my-2"><a target="_blank" href="https://aws.amazon.com/free/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">AWS Free Tier</a></h4>
                    <h5 class="whitespace-pre-line text-[16px] xl:text-14 font-bold text-black my-2">Note: For AWS Free Tier you will need a credit or debit card. The easiest way for Pakistani students is to open a bank account with Meezan Bank. Open a Meezan Aasan Account if you have no earning proof. Meezan Bank will charge Rs. 1100 for ATM Debit Card and there is a requirement of Rs. 100 minimum deposit. The card will be delivered in a few weeks. Our students have reported that this Debit card works with AWS.</h5>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color ">Now you can create a virtual VISA Debit card through the <a target="_blank" href="https://www.nayapay.com/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">NayaPay app</a> which can be used to create AWS/GCP/Azure accounts. This is good news for those students who find it difficult to create physical debit and credit cards from banks.</p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] font-bold text-black my-2">You can also get a $300 credit</h4>
                    <a target="_blank" href="https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">https://pages.awscloud.com/</a>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF) (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/learn-multicloud-api-development" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Learn Multicloud Serverless API Development using CDK Terraform in Baby Steps</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Web 2.0 Projects</h3>
                    <ul class="flex flex-col list-disc px-4 gap-y-1 ">
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/nextjs-projects" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Next.js Projects</a></p>
                    </li>
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/styling-nextjs-projects" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Styling Next.js Projects using TailwindCSS and Chakra UI</a></p>
                    </li>
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/ogzhanolguncu/min-todo" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Todo Full-Stack App</a></p>
                    </li>
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/watch?v=nzJsYJPCc80" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Build a Twitter Clone</a></p>
                    </li>
                    </ul></div>`
                },
                {
                    id: 3,
                    title: "Quater 3",
                    richtext: `<h1 class="text-justify text-3xl text-black font-bold">Earn While You Learn Projects:</h1>
                    <div class="mt-3 text-justify"><h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">A. Build Full-Stack Next.js 13 Jamstack Templates</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.</p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">The Template Standard
                    <a target="_blank" href="https://github.com/panaverse/panaverse-template-standard" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">https://github.com/panaverse/panaverse-template-standard </a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">B. Build QraphQL APIs</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">You will be assigned to build APIs for which you will sell subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.</p></div>`
                },
                {
                    id: 4,
                    title: "Quater 4",
                    richtext: `<h1 class="text-3xl text-justify text-black font-bold">Course Outline:</h1><div class="mt-3 text-justify"><h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Introduction to Machine Learning, Data Science, and AI</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify "><a target="_blank" href="https://www.coursera.org/learn/ai-for-everyone" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline font ">AI for Everyone</a></p>
                    <h4 class="whitespace-pre-line text-[18px] xl:text-[16px] font-bold text-black my-2">AI for Everyone Quiz in Week 3</h4>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify ">Total Questions: 60, Total Time: 75 minutes</p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify ">Building Next-Gen Intelligent Apps with OpenAI’s Powerful Models
                    We will cover GPT-4, ChatGPT, etc. and Next.js 13
                    <a target="_blank" href="https://openai.com/api/" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline font ">https://openai.com/api/</a>
                    <a target="_blank" href="https://openai.com/api/https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline font ">https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Python Crash Course  for TypeScript Developers</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify ">Python Crash Course, 2nd Edition: <a target="_blank" href="https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline font ">A Hands-On, Project-Based Introduction to Programming 2nd Edition</a></p></div>`
                },
                {
                    id: 5,
                    title: "Quater 5",
                    richtext: `<h1 class="text-3xl text-justify text-black font-bold">Course Outline:</h1><div class="mt-3"><h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Deep Learning with Tensorflow</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify "><a target="_blank" href="https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline font ">Deep Learning with Python, Second Edition 2nd Edition</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Machine Learning Engineering for Production (MLOps) using Terraform for CDK</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify "><a target="_blank" href="https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline font ">A Comprehensive Guide to MLOps Terraform: Infrastructure As Code(IaC)</a></p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify "><a target="_blank" href="https://towardsdatascience.com/mlops-leveraging-aws-sagemaker-terraform-and-gitlab-e7d97eaa6dce" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline font ">MLOps leveraging AWS SageMaker and Terraform</a></p></div>`
                }
            ]
        },
        {
            id: 3,
            title: "Cloud-Native Computing",
            description: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
            basepath: "/courses/cloud-native",
            image: "/cloud-native.jpg",
            quaters: [
                {
                    id: 1,
                    title: "Quater 1",
                    richtext: `<div class="mt-3 w-full"><h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">HTML and CSS (Homework)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Learn HTML by Hira Khan (Watch Recorded Videos)</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Learn CSS Intro by Hira Khan (Watch Recorded Videos)</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Web 3.0 and Metaverse Theory</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Introduction to Panaverse DAO</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Web 3.0 User Guide</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">Complete Web 3 Assignments included in the Web 3 User Guide</p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Virtual and Augmented  Metaverse User Guide</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Fundamentals of JavaScript (ECMAScript 2022 Language Specification)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Chapters 2-6, 13 of JavaScript from Beginner to Professional: Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">JavaScript Book Code</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Getting Started Exercises with JavaScript and Node.js</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Fundamentals of JavaScript and Node.js Quiz</h3>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Topics Covered in the Quiz:</h4>
                    <ol class="list-decimal mt-1 px-4 gap-y-1 text-justify w-full  ">
                    <li class="w-full">Background of JavaScript and How to use JavaScript in Browser</li>
                    <li class="w-full">Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full"><a target="_blank" href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm.</a>
                    How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. <a target="_blank" href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">The last example in this presentation shows you how to use prompt-sync library in your Node.js programs.</a>
                    Note: After this point, we will do all our class work and exercises using Node.js in .mjs files. We will also be able to develop interactive Node.js console programs which will greatly help the students to learn.</li>
                    <li class="w-full">Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">JavaScript promises, mastering the asynchronous</li>
                    </ol>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Javascript Promises by Codingame.</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">New JavaScript Features in ECMAScript 2022 and 2021.</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Object-Oriented Programming with TypeScript</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Chapters 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/learn-typescript" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Learning Repository</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.learningtypescript.com/" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">In Class Companion projects and articles for Learning TypeScript</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Homework Project</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/typescript-node-projects" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">typescript-node-projects</a>.</p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">TypeScript Quizzes</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">Fundamentals of TypeScript Quiz</p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">TypeScript Professional Proficiency Quiz</p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">TypeScript for React</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://profy.dev/article/react-typescript" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Minimal TypeScript Crash Course For React
                    With Interactive Code Exercises</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Quarter Break Assignments and Quizzes</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">During the Quarter Break, we do the following Assignments:</p>

                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">The best-developed Website will be hosted on www.panaverse.co domain.</p>
     
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">The best-developed Website will be hosted on <a target="_blank" href="www.piaic.org" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">www.piaic.org</a> domain.</p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">After completing the above Five Assignments everyone will appear in the following two Quizzes covering Github and TypeScript:</p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Fundamentals of Version Control with Git (Recorded Videos)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded Videos)</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">Chapters 1, 2, 3, and 4 Learn Version Control with Git: A step-by-step course for the complete beginner by Tobias Günther</p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">We will also cover these readings:</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://help.github.com/articles/markdown-basics/" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Markdown Basics</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Difference between fork and branch on github </a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Git branch, fork, fetch, merge, rebase and clone what are the differences</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://git-scm.com/book/en/v2/Git-Branching-Rebasing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Git Branching Rebasing </a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Git Branching Remote Branches</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://try.github.io/levels/1/challenges/1" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">For practice.</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Homework:</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.datacamp.com/courses/introduction-to-git-for-data-science" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">introduction to git for data science</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Git Cheatsheet</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Git data science cheatsheet.html</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">TypeScript Proficiency Quiz</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">Total Questions: 63
                    Duration: 120 minutes</p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Study Material:</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/learn-typescript" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">learn-typescript</a></p></div>`
                },
                {
                    id: 2,
                    title: "Quater 2",
                    richtext: `<div class="mt-3 w-full text-justify"><h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Next.js 13 Web Development</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://beta.nextjs.org/docs" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Next 13 Official Documentation</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://beta.reactjs.org/learn" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Latest Learn React Official Website</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/learn-nextjs" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Learn Next.js 13 Learning Repo</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Next.js 13 using Chakra UI (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.freecodecamp.org/news/css-flexbox-complete-guide/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">CSS Flexbox Explained – Complete Guide to Flexible Containers and Flex Items</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://chakra-ui.com/getting-started" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Chakra UI Docs</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote  Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color ">Designing and Prototyping Interfaces with Figma: Learn essential UX/UI design principles by creating interactive prototypes for mobile, tablet, and desktop by Fabio Staiano
                    <a target="_blank" href="https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa </a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.figma.com/community/file/768809027799962739" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Figma Design Kit for TailwindCSS</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.figma.com/community/file/971408767069651759" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Chakra UI Figma Kit</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">API Routes with Next.js (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://nextjs.org/docs/api-routes/introduction" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">API Routes</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">APIs with Next.js and tRPC (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Build a tRPC CRUD API Example with Next.js	</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Stop building REST APIs for your Next.js apps, use tRPC instead</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">SQL and Prisma</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Start from scratch with relational databases</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/watch?v=5hzZtqCNQKk" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">SQL For Beginners Video Tutorial</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.freecodecamp.org/news/dbms-and-sql-basics/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Database Management Systems and SQL – Tutorial for Beginners</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Next.js 13 using TailwindCSS (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Modern CSS with Tailwind, Second Edition by Noel Rappin</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">AWS Application Composer (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/watch?v=BujE_tik5r8" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">What is AWS Application Composer?</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/watch?v=p411uh363jQ" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Event-driven apps with AWS Application Composer</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://aws.amazon.com/application-composer/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Visually design and build serverless applications quickly</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] font-bold text-black my-2"><ins>Must Have: Create Free AWS Account</ins></h4>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] font-bold text-black my-2"><a target="_blank" href="https://aws.amazon.com/free/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">AWS Free Tier</a></h4>
                    <h5 class="whitespace-pre-line text-[16px] xl:text-14 font-bold text-black my-2">Note: For AWS Free Tier you will need a credit or debit card. The easiest way for Pakistani students is to open a bank account with Meezan Bank. Open a Meezan Aasan Account if you have no earning proof. Meezan Bank will charge Rs. 1100 for ATM Debit Card and there is a requirement of Rs. 100 minimum deposit. The card will be delivered in a few weeks. Our students have reported that this Debit card works with AWS.</h5>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color ">Now you can create a virtual VISA Debit card through the <a target="_blank" href="https://www.nayapay.com/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">NayaPay app</a> which can be used to create AWS/GCP/Azure accounts. This is good news for those students who find it difficult to create physical debit and credit cards from banks.</p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] font-bold text-black my-2">You can also get a $300 credit</h4>
                    <a target="_blank" href="https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">https://pages.awscloud.com/</a>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF) (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/learn-multicloud-api-development" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Learn Multicloud Serverless API Development using CDK Terraform in Baby Steps</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Web 2.0 Projects</h3>
                    <ul class="flex flex-col list-disc px-4 gap-y-1 ">
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/nextjs-projects" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Next.js Projects</a></p>
                    </li>
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/styling-nextjs-projects" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Styling Next.js Projects using TailwindCSS and Chakra UI</a></p>
                    </li>
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/ogzhanolguncu/min-todo" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Todo Full-Stack App</a></p>
                    </li>
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/watch?v=nzJsYJPCc80" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Build a Twitter Clone</a></p>
                    </li>
                    </ul></div>`
                },
                {
                    id: 3,
                    title: "Quater 3",
                    richtext: `<h1 class="text-justify text-3xl text-black font-bold">Earn While You Learn Projects:</h1>
                    <div class="mt-3 text-justify"><h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">A. Build Full-Stack Next.js 13 Jamstack Templates</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.</p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">The Template Standard
                    <a target="_blank" href="https://github.com/panaverse/panaverse-template-standard" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">https://github.com/panaverse/panaverse-template-standard </a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">B. Build QraphQL APIs</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">You will be assigned to build APIs for which you will sell subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.</p></div>`
                },
                {
                    id: 4,
                    title: "Quater 4",
                    richtext: `<h1 class="text-3xl text-justify text-black font-bold">Course Outline:</h1><div class="mt-3 text-justify"><h3 class="whitespace-pre-line text-24 font-bold text-black mb-2 mt-3">Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify "><a target="_blank" href="https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline font ">https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3</a></p>
                    <h3 class="whitespace-pre-line text-24 font-bold text-black mb-2 mt-3">Cloud Development Kit for Kubernetes</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify "><a target="_blank" href="https://cdk8s.io/" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline font ">https://cdk8s.io/</a></p></div>`
                },
                {
                    id: 5,
                    title: "Quater 5",
                    richtext: `<h1 class="text-3xl text-justify text-black font-bold">Course Outline:</h1><div class="mt-3"><h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">CDK for Terraform</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify text-justify"><a target="_blank" href="https://developer.hashicorp.com/terraform/cdktf" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline text-justify">https://developer.hashicorp.com/</a></p></div>`
                }
            ]
        },
        {
            id: 4,
            title: "Ambient Computing and IoT",
            description: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
            image: "/iot.png",
            basepath: "/courses/ambient-computing-and-iot",
            quaters: [
                {
                    id: 1,
                    title: "Quater 1",
                    richtext: `<div class="mt-3 w-full"><h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">HTML and CSS (Homework)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Learn HTML by Hira Khan (Watch Recorded Videos)</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Learn CSS Intro by Hira Khan (Watch Recorded Videos)</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Web 3.0 and Metaverse Theory</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Introduction to Panaverse DAO</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Web 3.0 User Guide</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">Complete Web 3 Assignments included in the Web 3 User Guide</p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Virtual and Augmented  Metaverse User Guide</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Fundamentals of JavaScript (ECMAScript 2022 Language Specification)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Chapters 2-6, 13 of JavaScript from Beginner to Professional: Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">JavaScript Book Code</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Getting Started Exercises with JavaScript and Node.js</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Fundamentals of JavaScript and Node.js Quiz</h3>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Topics Covered in the Quiz:</h4>
                    <ol class="list-decimal mt-1 px-4 gap-y-1 text-justify w-full  ">
                    <li class="w-full">Background of JavaScript and How to use JavaScript in Browser</li>
                    <li class="w-full">Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full"><a target="_blank" href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm.</a>
                    How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. <a target="_blank" href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">The last example in this presentation shows you how to use prompt-sync library in your Node.js programs.</a>
                    Note: After this point, we will do all our class work and exercises using Node.js in .mjs files. We will also be able to develop interactive Node.js console programs which will greatly help the students to learn.</li>
                    <li class="w-full">Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">JavaScript promises, mastering the asynchronous</li>
                    </ol>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Javascript Promises by Codingame.</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">New JavaScript Features in ECMAScript 2022 and 2021.</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Object-Oriented Programming with TypeScript</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Chapters 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/learn-typescript" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Learning Repository</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.learningtypescript.com/" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">In Class Companion projects and articles for Learning TypeScript</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Homework Project</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/typescript-node-projects" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">typescript-node-projects</a>.</p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">TypeScript Quizzes</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">Fundamentals of TypeScript Quiz</p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">TypeScript Professional Proficiency Quiz</p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">TypeScript for React</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://profy.dev/article/react-typescript" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Minimal TypeScript Crash Course For React
                    With Interactive Code Exercises</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Quarter Break Assignments and Quizzes</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">During the Quarter Break, we do the following Assignments:</p>

                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">The best-developed Website will be hosted on www.panaverse.co domain.</p>
     
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">The best-developed Website will be hosted on <a target="_blank" href="www.piaic.org" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">www.piaic.org</a> domain.</p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">After completing the above Five Assignments everyone will appear in the following two Quizzes covering Github and TypeScript:</p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Fundamentals of Version Control with Git (Recorded Videos)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded Videos)</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">Chapters 1, 2, 3, and 4 Learn Version Control with Git: A step-by-step course for the complete beginner by Tobias Günther</p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">We will also cover these readings:</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://help.github.com/articles/markdown-basics/" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Markdown Basics</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Difference between fork and branch on github </a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Git branch, fork, fetch, merge, rebase and clone what are the differences</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://git-scm.com/book/en/v2/Git-Branching-Rebasing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Git Branching Rebasing </a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Git Branching Remote Branches</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://try.github.io/levels/1/challenges/1" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">For practice.</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Homework:</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.datacamp.com/courses/introduction-to-git-for-data-science" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">introduction to git for data science</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Git Cheatsheet</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Git data science cheatsheet.html</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">TypeScript Proficiency Quiz</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">Total Questions: 63
                    Duration: 120 minutes</p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Study Material:</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/learn-typescript" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">learn-typescript</a></p></div>`
                },
                {
                    id: 2,
                    title: "Quater 2",
                    richtext: `<div class="mt-3 w-full text-justify"><h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Next.js 13 Web Development</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://beta.nextjs.org/docs" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Next 13 Official Documentation</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://beta.reactjs.org/learn" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Latest Learn React Official Website</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/learn-nextjs" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Learn Next.js 13 Learning Repo</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Next.js 13 using Chakra UI (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.freecodecamp.org/news/css-flexbox-complete-guide/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">CSS Flexbox Explained – Complete Guide to Flexible Containers and Flex Items</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://chakra-ui.com/getting-started" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Chakra UI Docs</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote  Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color ">Designing and Prototyping Interfaces with Figma: Learn essential UX/UI design principles by creating interactive prototypes for mobile, tablet, and desktop by Fabio Staiano
                    <a target="_blank" href="https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa </a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.figma.com/community/file/768809027799962739" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Figma Design Kit for TailwindCSS</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.figma.com/community/file/971408767069651759" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Chakra UI Figma Kit</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">API Routes with Next.js (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://nextjs.org/docs/api-routes/introduction" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">API Routes</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">APIs with Next.js and tRPC (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Build a tRPC CRUD API Example with Next.js	</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Stop building REST APIs for your Next.js apps, use tRPC instead</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">SQL and Prisma</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Start from scratch with relational databases</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/watch?v=5hzZtqCNQKk" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">SQL For Beginners Video Tutorial</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.freecodecamp.org/news/dbms-and-sql-basics/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Database Management Systems and SQL – Tutorial for Beginners</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Next.js 13 using TailwindCSS (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Modern CSS with Tailwind, Second Edition by Noel Rappin</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">AWS Application Composer (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/watch?v=BujE_tik5r8" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">What is AWS Application Composer?</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/watch?v=p411uh363jQ" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Event-driven apps with AWS Application Composer</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://aws.amazon.com/application-composer/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Visually design and build serverless applications quickly</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] font-bold text-black my-2"><ins>Must Have: Create Free AWS Account</ins></h4>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] font-bold text-black my-2"><a target="_blank" href="https://aws.amazon.com/free/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">AWS Free Tier</a></h4>
                    <h5 class="whitespace-pre-line text-[16px] xl:text-14 font-bold text-black my-2">Note: For AWS Free Tier you will need a credit or debit card. The easiest way for Pakistani students is to open a bank account with Meezan Bank. Open a Meezan Aasan Account if you have no earning proof. Meezan Bank will charge Rs. 1100 for ATM Debit Card and there is a requirement of Rs. 100 minimum deposit. The card will be delivered in a few weeks. Our students have reported that this Debit card works with AWS.</h5>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color ">Now you can create a virtual VISA Debit card through the <a target="_blank" href="https://www.nayapay.com/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">NayaPay app</a> which can be used to create AWS/GCP/Azure accounts. This is good news for those students who find it difficult to create physical debit and credit cards from banks.</p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] font-bold text-black my-2">You can also get a $300 credit</h4>
                    <a target="_blank" href="https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">https://pages.awscloud.com/</a>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF) (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/learn-multicloud-api-development" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Learn Multicloud Serverless API Development using CDK Terraform in Baby Steps</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Web 2.0 Projects</h3>
                    <ul class="flex flex-col list-disc px-4 gap-y-1 ">
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/nextjs-projects" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Next.js Projects</a></p>
                    </li>
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/styling-nextjs-projects" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Styling Next.js Projects using TailwindCSS and Chakra UI</a></p>
                    </li>
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/ogzhanolguncu/min-todo" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Todo Full-Stack App</a></p>
                    </li>
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/watch?v=nzJsYJPCc80" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Build a Twitter Clone</a></p>
                    </li>
                    </ul></div>`
                },
                {
                    id: 3,
                    title: "Quater 3",
                    richtext: `<h1 class="text-justify text-3xl text-black font-bold">Earn While You Learn Projects:</h1>
                    <div class="mt-3 text-justify"><h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">A. Build Full-Stack Next.js 13 Jamstack Templates</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.</p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">The Template Standard
                    <a target="_blank" href="https://github.com/panaverse/panaverse-template-standard" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">https://github.com/panaverse/panaverse-template-standard </a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">B. Build QraphQL APIs</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">You will be assigned to build APIs for which you will sell subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.</p></div>`
                },
                {
                    id: 4,
                    title: "Quater 4",
                    richtext: `<h1 class="text-3xl text-justify text-black font-bold">Course Outline:</h1><div class="mt-3 text-justify"><h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Alexa Skill Developement</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify "><a target="_blank" href="https://developer.amazon.com/en-US/alexa" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline font ">https://developer.amazon.com/en-US/alexa </a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Alexa with Matter Protocol</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify "><a target="_blank" href="https://developer.amazon.com/en-US/alexa/matter" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline font ">https://developer.amazon.com/en-US/alexa/matter</a></p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify "><a target="_blank" href="https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline font ">https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html </a></p></div>`
                },
                {
                    id: 5,
                    title: "Quater 5",
                    richtext: `<h1 class="text-3xl text-justify text-black font-bold">Course Outline:</h1><div class="mt-3 text-justify"><h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Introduction to the Internet of Things and Embedded Systems (Week 1 and 2)</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify "><a target="_blank" href="https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=sharing" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline font ">https://docs.google.com/</a></p>
                    <ul class="flex flex-col list-disc px-4 gap-y-1 text-justify">
                    <li class="mx-6">What is the Fourth Industrial Revolution?</li>
                    <li class="mx-6">What is IoT?</li>
                    <li class="mx-6">Embedded Systems</li>
                    <li class="mx-6">Hardware and Software for IoT</li>
                    <li class="mx-6">Edge and Cloud Computing</li>
                    <li class="mx-6">The future of IoT is AI</li>
                    <li class="mx-6">Blockchain in the Internet of Things?</li>
                    <li class="mx-6">IoT + AI + Blockchain: The Fourth Industrial Revolution has begun</li>
                    <li class="mx-6">How will Matter change the IoT Infrastructure and address issues</li>
                    <li class="mx-6">Metaverse and IoT</li>
                    </ul>
                    <h4 class="whitespace-pre-line text-[18px] xl:text-[16px] font-medium text-black my-2">Mid-Term I: Introduction to the Internet of Things (IoT) Quiz in Week 3</h4>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify ">Total Questions: 46, Total Time: 60 minutes</p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">The C Reference Book: The C programming language</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify ">Embedded Programming book: Internet of things with ESP8266</p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify "><a target="_blank" href="https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline font ">Download Link:</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Introduction to C Part 1 (Weeks 3B, 4, and 5)</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify ">C environment Setup for (Windows, Linux, and Mac OS systems)
                    Chapters 1-2 of  <strong>“The C programming language”</strong></p>
                    <ul class="flex flex-col list-disc px-4 gap-y-1 text-justify">
                    <li class="mx-6">Variable names types</li>
                    <li class="mx-6">Data types and sizes</li>
                    <li class="mx-6">Constants</li>
                    <li class="mx-6">Arithmetic operations</li>
                    <li class="mx-6">Logical and relational operators</li>
                    <li class="mx-6">Type conversions.</li>
                    <li class="mx-6">Bitwise operators</li>
                    <li class="mx-6">Conditional expressions.</li>
                    </ul>
                    <h4 class="whitespace-pre-line text-[18px] xl:text-[16px] font-medium text-black my-2">Programming Assignments will also be given.</h4>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">C Programming Part 2 (Weeks 6 and 7)</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify ">Topics 3 and 4  of  <strong>“The C programming language”</strong></p>
                    <ul class="flex flex-col list-disc px-4 gap-y-1 ">
                    <li class="mx-6">Control flow statements (else if, loops, switch, break continue)</li>
                    <li class="mx-6">Function and Program structure(Returning and non-returning, scope rules, Recursion)</li>
                    </ul>
                    <h4 class="whitespace-pre-line text-[18px] xl:text-[16px] font-medium text-black my-2">Programming Assignments will also be given.</h4>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Introduction to Embedded systems Part 1 (Weeks 8)</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify ">Basic Electronics and Introduction to microcontrollers
                    Chapter 1 of  <strong>“Internet of things with ESP8266”</strong></p>
                    <ul class="flex flex-col list-disc px-4 gap-y-1 ">
                    <li class="mx-6">Arduino IDE installation and env setup for ESP8266</li>
                    <li class="mx-6">Burning your first code on ESP8266</li>
                    </ul>
                    <h4 class="whitespace-pre-line text-[18px] xl:text-[16px] font-medium text-black my-2">Project-based Assignments will also be given.</h4>
                    <h4 class="whitespace-pre-line text-[18px] xl:text-[16px] font-medium text-black my-2">Mid-Term II: C Programming Quiz 1 in Week 9</h4>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify ">Total Questions: 62, Total Time: 75 minutes</p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Introduction to Embedded systems Part 2 (Weeks 9-12)</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify ">Chapters 2-5 of  “Internet of things with ESP8266”</p>
                    <ul class="flex flex-col list-disc px-4 gap-y-1 text-justify">
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify "><a target="_blank" href="https://randomnerdtutorials.com/wifimanager-with-esp8266-autoconnect-custom-parameter-and-manage-your-ssid-and-password/" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline font ">Connecting your hardware to wifi.</a></p>
                    </li>
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify "><a target="_blank" href="https://randomnerdtutorials.com/esp8266-nodemcu-digital-inputs-outputs-arduino/#:~:text=ESP8266%20NodeMCU%20Read%20Digital%20Inputs,number" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline font ">Reading data from GPIOs.%20you%20are%20referring%20to. )</a></p>
                    </li>
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify ">Controlling LEDs.</p>
                    </li>
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify "><a target="_blank" href="https://randomnerdtutorials.com/esp32-dht11-dht22-temperature-humidity-sensor-arduino-ide/" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline font ">Reading data from digital sensors. </a></p>
                    </li>
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify ">Cloud data logging.</p>
                    <ul class="flex flex-col list-disc px-4 gap-y-1 ">
                    <li class="mx-6"><a target="_blank" href="https://tttapa.github.io/ESP8266/Chap16%20-%20Data%20Logging.html" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline font ">https://tttapa.github.io/</a></li>
                    <li class="mx-6"><a target="_blank" href="https://circuitdigest.com/microcontroller-projects/nodemcu-datalogger-to-save-temperature-and-pressure-data-on-thinger-io-cloud-platform" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline font ">https://circuitdigest.com/</a></li>
                    <li class="mx-6"><a target="_blank" href="https://iotdesignpro.com/projects/nodemcu-data-logger-to-upload-data-on-webserver" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline font ">https://iotdesignpro.com/</a></li>
                    </ul>
                    </li>
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify "><a target="_blank" href="https://github.com/adesolasamuel/NodeMCU-DHT-Data-to-Arduino-IoT-Cloud" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline font ">Displaying data on the cloud. </a></p>
                    </li>
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify "><a target="_blank" href="https://www.instructables.com/Control-ESP8266-Over-the-Internet-from-Anywhere/" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline font ">Controlling controller remotely. </a></p>
                    </li>
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify ">Controlling a lamp anywhere in the world.</p>
                    </li>
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color text-justify ">Interacting with different web services.</p>
                    </li>
                    </ul>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Embedded Programming using Rust (Extra Weeks in the Course)</h3>
                    <ul class="flex flex-col list-disc px-4 gap-y-1 ">
                    <li class="mx-6"><a target="_blank" href="https://www.rust-lang.org/what/embedded" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline font "> https://www.rust-lang.org/what/embedded </a></li>
                    <li class="mx-6"><a target="_blank" href="https://crates.io/crates/esp8266" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline font ">https://crates.io/crates/esp8266</a></li>
                    </ul>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Hardware Requirements:</h3>
                    <ol class="list-decimal mt-1 px-4 gap-y-1 ">
                    <li class="mx-6">Esp8266 (Node MCU)</li>
                    <li class="mx-6">Jumper Wires</li>
                    <li class="mx-6">Bread Board</li>
                    <li class="mx-6">LEDs</li>
                    <li class="mx-6">Sensors: (Dht11, ultrasonic sensor, IR sensor)</li>
                    </ol></div>`
                }
            ]
        },
        {
            id: 5,
            title: "Genomics and Bioinformatics",
            description: "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
            basepath: "/courses/enomics-and-bioinformatics",
            quaters: [
                {
                    id: 1,
                    title: "Quater 1",
                    richtext: `<div class="mt-3 w-full"><h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">HTML and CSS (Homework)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Learn HTML by Hira Khan (Watch Recorded Videos)</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Learn CSS Intro by Hira Khan (Watch Recorded Videos)</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Web 3.0 and Metaverse Theory</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Introduction to Panaverse DAO</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Web 3.0 User Guide</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">Complete Web 3 Assignments included in the Web 3 User Guide</p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Virtual and Augmented  Metaverse User Guide</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Fundamentals of JavaScript (ECMAScript 2022 Language Specification)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Chapters 2-6, 13 of JavaScript from Beginner to Professional: Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">JavaScript Book Code</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Getting Started Exercises with JavaScript and Node.js</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Fundamentals of JavaScript and Node.js Quiz</h3>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Topics Covered in the Quiz:</h4>
                    <ol class="list-decimal mt-1 px-4 gap-y-1 text-justify w-full  ">
                    <li class="w-full">Background of JavaScript and How to use JavaScript in Browser</li>
                    <li class="w-full">Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full"><a target="_blank" href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm.</a>
                    How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. <a target="_blank" href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">The last example in this presentation shows you how to use prompt-sync library in your Node.js programs.</a>
                    Note: After this point, we will do all our class work and exercises using Node.js in .mjs files. We will also be able to develop interactive Node.js console programs which will greatly help the students to learn.</li>
                    <li class="w-full">Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">JavaScript promises, mastering the asynchronous</li>
                    </ol>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Javascript Promises by Codingame.</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">New JavaScript Features in ECMAScript 2022 and 2021.</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Object-Oriented Programming with TypeScript</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Chapters 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/learn-typescript" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Learning Repository</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.learningtypescript.com/" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">In Class Companion projects and articles for Learning TypeScript</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Homework Project</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/typescript-node-projects" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">typescript-node-projects</a>.</p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">TypeScript Quizzes</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">Fundamentals of TypeScript Quiz</p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">TypeScript Professional Proficiency Quiz</p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">TypeScript for React</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://profy.dev/article/react-typescript" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Minimal TypeScript Crash Course For React
                    With Interactive Code Exercises</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Quarter Break Assignments and Quizzes</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">During the Quarter Break, we do the following Assignments:</p>

                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">The best-developed Website will be hosted on www.panaverse.co domain.</p>
     
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">The best-developed Website will be hosted on <a target="_blank" href="www.piaic.org" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">www.piaic.org</a> domain.</p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">After completing the above Five Assignments everyone will appear in the following two Quizzes covering Github and TypeScript:</p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Fundamentals of Version Control with Git (Recorded Videos)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded Videos)</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">Chapters 1, 2, 3, and 4 Learn Version Control with Git: A step-by-step course for the complete beginner by Tobias Günther</p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">We will also cover these readings:</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://help.github.com/articles/markdown-basics/" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Markdown Basics</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Difference between fork and branch on github </a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Git branch, fork, fetch, merge, rebase and clone what are the differences</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://git-scm.com/book/en/v2/Git-Branching-Rebasing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Git Branching Rebasing </a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Git Branching Remote Branches</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://try.github.io/levels/1/challenges/1" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">For practice.</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Homework:</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.datacamp.com/courses/introduction-to-git-for-data-science" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">introduction to git for data science</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Git Cheatsheet</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Git data science cheatsheet.html</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">TypeScript Proficiency Quiz</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">Total Questions: 63
                    Duration: 120 minutes</p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Study Material:</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/learn-typescript" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">learn-typescript</a></p></div>`
                },
                {
                    id: 2,
                    title: "Quater 2",
                    richtext: `<div class="mt-3 w-full text-justify"><h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Next.js 13 Web Development</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://beta.nextjs.org/docs" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Next 13 Official Documentation</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://beta.reactjs.org/learn" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Latest Learn React Official Website</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/learn-nextjs" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Learn Next.js 13 Learning Repo</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Next.js 13 using Chakra UI (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.freecodecamp.org/news/css-flexbox-complete-guide/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">CSS Flexbox Explained – Complete Guide to Flexible Containers and Flex Items</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://chakra-ui.com/getting-started" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Chakra UI Docs</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote  Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color ">Designing and Prototyping Interfaces with Figma: Learn essential UX/UI design principles by creating interactive prototypes for mobile, tablet, and desktop by Fabio Staiano
                    <a target="_blank" href="https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa </a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.figma.com/community/file/768809027799962739" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Figma Design Kit for TailwindCSS</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.figma.com/community/file/971408767069651759" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Chakra UI Figma Kit</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">API Routes with Next.js (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://nextjs.org/docs/api-routes/introduction" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">API Routes</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">APIs with Next.js and tRPC (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Build a tRPC CRUD API Example with Next.js	</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Stop building REST APIs for your Next.js apps, use tRPC instead</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">SQL and Prisma</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Start from scratch with relational databases</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/watch?v=5hzZtqCNQKk" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">SQL For Beginners Video Tutorial</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.freecodecamp.org/news/dbms-and-sql-basics/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Database Management Systems and SQL – Tutorial for Beginners</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Next.js 13 using TailwindCSS (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Modern CSS with Tailwind, Second Edition by Noel Rappin</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">AWS Application Composer (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/watch?v=BujE_tik5r8" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">What is AWS Application Composer?</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/watch?v=p411uh363jQ" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Event-driven apps with AWS Application Composer</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://aws.amazon.com/application-composer/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Visually design and build serverless applications quickly</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] font-bold text-black my-2"><ins>Must Have: Create Free AWS Account</ins></h4>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] font-bold text-black my-2"><a target="_blank" href="https://aws.amazon.com/free/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">AWS Free Tier</a></h4>
                    <h5 class="whitespace-pre-line text-[16px] xl:text-14 font-bold text-black my-2">Note: For AWS Free Tier you will need a credit or debit card. The easiest way for Pakistani students is to open a bank account with Meezan Bank. Open a Meezan Aasan Account if you have no earning proof. Meezan Bank will charge Rs. 1100 for ATM Debit Card and there is a requirement of Rs. 100 minimum deposit. The card will be delivered in a few weeks. Our students have reported that this Debit card works with AWS.</h5>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color ">Now you can create a virtual VISA Debit card through the <a target="_blank" href="https://www.nayapay.com/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">NayaPay app</a> which can be used to create AWS/GCP/Azure accounts. This is good news for those students who find it difficult to create physical debit and credit cards from banks.</p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] font-bold text-black my-2">You can also get a $300 credit</h4>
                    <a target="_blank" href="https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">https://pages.awscloud.com/</a>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF) (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/learn-multicloud-api-development" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Learn Multicloud Serverless API Development using CDK Terraform in Baby Steps</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Web 2.0 Projects</h3>
                    <ul class="flex flex-col list-disc px-4 gap-y-1 ">
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/nextjs-projects" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Next.js Projects</a></p>
                    </li>
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/styling-nextjs-projects" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Styling Next.js Projects using TailwindCSS and Chakra UI</a></p>
                    </li>
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/ogzhanolguncu/min-todo" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Todo Full-Stack App</a></p>
                    </li>
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/watch?v=nzJsYJPCc80" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Build a Twitter Clone</a></p>
                    </li>
                    </ul></div>`
                },
                {
                    id: 3,
                    title: "Quater 3",
                    richtext: `<h1 class="text-justify text-3xl text-black font-bold">Earn While You Learn Projects:</h1>
                    <div class="mt-3 text-justify"><h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">A. Build Full-Stack Next.js 13 Jamstack Templates</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.</p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">The Template Standard
                    <a target="_blank" href="https://github.com/panaverse/panaverse-template-standard" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">https://github.com/panaverse/panaverse-template-standard </a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">B. Build QraphQL APIs</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">You will be assigned to build APIs for which you will sell subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.</p></div>`
                },
                {
                    id: 4,
                    title: "Quater 4",
                    richtext: `<h1 class="text-3xl text-justify text-black font-bold">Course Outline:</h1><div class="mt-3 text-justify"><h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Textbook:</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.pythonforbiologists.org/" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline font ">https://www.pythonforbiologists.org/</a></p></div>`
                },
                {
                    id: 5,
                    title: "Quater 5",
                    richtext: `<h1 class="text-3xl text-justify text-black font-bold">Course Outline:</h1><div class="mt-3 text-justify"><h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Textbook:</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_1" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline font ">https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_1 </a></p></div>`
                }
            ]
        },
        {
            id: 6,
            title: "Network Programmability and Automation Specialization",
            description: "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
            basepath: "/courses/network-programmability-and-automation",
            quaters: [
                {
                    id: 1,
                    title: "Quater 1",
                    richtext: `<div class="mt-3 w-full"><h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">HTML and CSS (Homework)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Learn HTML by Hira Khan (Watch Recorded Videos)</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Learn CSS Intro by Hira Khan (Watch Recorded Videos)</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Web 3.0 and Metaverse Theory</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Introduction to Panaverse DAO</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Web 3.0 User Guide</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">Complete Web 3 Assignments included in the Web 3 User Guide</p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Virtual and Augmented  Metaverse User Guide</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Fundamentals of JavaScript (ECMAScript 2022 Language Specification)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Chapters 2-6, 13 of JavaScript from Beginner to Professional: Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">JavaScript Book Code</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Getting Started Exercises with JavaScript and Node.js</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Fundamentals of JavaScript and Node.js Quiz</h3>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Topics Covered in the Quiz:</h4>
                    <ol class="list-decimal mt-1 px-4 gap-y-1 text-justify w-full  ">
                    <li class="w-full">Background of JavaScript and How to use JavaScript in Browser</li>
                    <li class="w-full">Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full"><a target="_blank" href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm.</a>
                    How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. <a target="_blank" href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">The last example in this presentation shows you how to use prompt-sync library in your Node.js programs.</a>
                    Note: After this point, we will do all our class work and exercises using Node.js in .mjs files. We will also be able to develop interactive Node.js console programs which will greatly help the students to learn.</li>
                    <li class="w-full">Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)</li>
                    <li class="w-full">JavaScript promises, mastering the asynchronous</li>
                    </ol>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Javascript Promises by Codingame.</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">New JavaScript Features in ECMAScript 2022 and 2021.</a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Object-Oriented Programming with TypeScript</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Chapters 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/learn-typescript" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Learning Repository</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.learningtypescript.com/" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">In Class Companion projects and articles for Learning TypeScript</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Homework Project</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/typescript-node-projects" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">typescript-node-projects</a>.</p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">TypeScript Quizzes</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">Fundamentals of TypeScript Quiz</p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">TypeScript Professional Proficiency Quiz</p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">TypeScript for React</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://profy.dev/article/react-typescript" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Minimal TypeScript Crash Course For React
                    With Interactive Code Exercises</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Quarter Break Assignments and Quizzes</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">During the Quarter Break, we do the following Assignments:</p>

                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">The best-developed Website will be hosted on www.panaverse.co domain.</p>
     
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">The best-developed Website will be hosted on <a target="_blank" href="www.piaic.org" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">www.piaic.org</a> domain.</p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">After completing the above Five Assignments everyone will appear in the following two Quizzes covering Github and TypeScript:</p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Fundamentals of Version Control with Git (Recorded Videos)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded Videos)</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">Chapters 1, 2, 3, and 4 Learn Version Control with Git: A step-by-step course for the complete beginner by Tobias Günther</p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">We will also cover these readings:</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://help.github.com/articles/markdown-basics/" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Markdown Basics</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Difference between fork and branch on github </a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Git branch, fork, fetch, merge, rebase and clone what are the differences</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://git-scm.com/book/en/v2/Git-Branching-Rebasing" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Git Branching Rebasing </a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Git Branching Remote Branches</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://try.github.io/levels/1/challenges/1" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">For practice.</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Homework:</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.datacamp.com/courses/introduction-to-git-for-data-science" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">introduction to git for data science</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Git Cheatsheet</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">Git data science cheatsheet.html</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">TypeScript Proficiency Quiz</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color ">Total Questions: 63
                    Duration: 120 minutes</p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] font-bold text-black my-2">Study Material:</h4>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/learn-typescript" class="whitespace-pre-line text-[18px] text-justify xl:text-[16px] my-1.5 text-blue-600 underline font ">learn-typescript</a></p></div>`
                },
                {
                    id: 2,
                    title: "Quater 2",
                    richtext: `<div class="mt-3 w-full text-justify"><h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Next.js 13 Web Development</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://beta.nextjs.org/docs" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Next 13 Official Documentation</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://beta.reactjs.org/learn" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Latest Learn React Official Website</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/learn-nextjs" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Learn Next.js 13 Learning Repo</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Next.js 13 using Chakra UI (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.freecodecamp.org/news/css-flexbox-complete-guide/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">CSS Flexbox Explained – Complete Guide to Flexible Containers and Flex Items</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://chakra-ui.com/getting-started" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Chakra UI Docs</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote  Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color ">Designing and Prototyping Interfaces with Figma: Learn essential UX/UI design principles by creating interactive prototypes for mobile, tablet, and desktop by Fabio Staiano
                    <a target="_blank" href="https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa </a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.figma.com/community/file/768809027799962739" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Figma Design Kit for TailwindCSS</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.figma.com/community/file/971408767069651759" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Chakra UI Figma Kit</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">API Routes with Next.js (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://nextjs.org/docs/api-routes/introduction" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">API Routes</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">APIs with Next.js and tRPC (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Build a tRPC CRUD API Example with Next.js	</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Stop building REST APIs for your Next.js apps, use tRPC instead</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">SQL and Prisma</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Start from scratch with relational databases</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/watch?v=5hzZtqCNQKk" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">SQL For Beginners Video Tutorial</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.freecodecamp.org/news/dbms-and-sql-basics/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Database Management Systems and SQL – Tutorial for Beginners</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Next.js 13 using TailwindCSS (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Modern CSS with Tailwind, Second Edition by Noel Rappin</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">AWS Application Composer (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/watch?v=BujE_tik5r8" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">What is AWS Application Composer?</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/watch?v=p411uh363jQ" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Event-driven apps with AWS Application Composer</a></p>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://aws.amazon.com/application-composer/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Visually design and build serverless applications quickly</a></p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] font-bold text-black my-2"><ins>Must Have: Create Free AWS Account</ins></h4>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] font-bold text-black my-2"><a target="_blank" href="https://aws.amazon.com/free/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">AWS Free Tier</a></h4>
                    <h5 class="whitespace-pre-line text-[16px] xl:text-14 font-bold text-black my-2">Note: For AWS Free Tier you will need a credit or debit card. The easiest way for Pakistani students is to open a bank account with Meezan Bank. Open a Meezan Aasan Account if you have no earning proof. Meezan Bank will charge Rs. 1100 for ATM Debit Card and there is a requirement of Rs. 100 minimum deposit. The card will be delivered in a few weeks. Our students have reported that this Debit card works with AWS.</h5>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color ">Now you can create a virtual VISA Debit card through the <a target="_blank" href="https://www.nayapay.com/" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">NayaPay app</a> which can be used to create AWS/GCP/Azure accounts. This is good news for those students who find it difficult to create physical debit and credit cards from banks.</p>
                    <h4 class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] font-bold text-black my-2">You can also get a $300 credit</h4>
                    <a target="_blank" href="https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">https://pages.awscloud.com/</a>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF) (Remote Zoom Class)</h3>
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/learn-multicloud-api-development" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Learn Multicloud Serverless API Development using CDK Terraform in Baby Steps</a></p>
                    <h3 class="whitespace-pre-line text-xl text-justify font-bold text-black mb-2 mt-3">Web 2.0 Projects</h3>
                    <ul class="flex flex-col list-disc px-4 gap-y-1 ">
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/nextjs-projects" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Next.js Projects</a></p>
                    </li>
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/panaverse/styling-nextjs-projects" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Styling Next.js Projects using TailwindCSS and Chakra UI</a></p>
                    </li>
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://github.com/ogzhanolguncu/min-todo" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Todo Full-Stack App</a></p>
                    </li>
                    <li class="mx-6">
                    <p class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1 font text-para-color "><a target="_blank" href="https://www.youtube.com/watch?v=nzJsYJPCc80" class="whitespace-pre-line text-[18px] text-justify xl:text-[18px] my-1.5 text-blue-600 underline font ">Build a Twitter Clone</a></p>
                    </li>
                    </ul></div>`
                },
                {
                    id: 3,
                    title: "Quater 3",
                    richtext: `<h1 class="text-justify text-3xl text-black font-bold">Earn While You Learn Projects:</h1>
                    <div class="mt-3 text-justify"><h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">A. Build Full-Stack Next.js 13 Jamstack Templates</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.</p>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">The Template Standard
                    <a target="_blank" href="https://github.com/panaverse/panaverse-template-standard" class="whitespace-pre-line text-[18px] xl:text-[18px] my-1.5 text-blue-600 underline font ">https://github.com/panaverse/panaverse-template-standard </a></p>
                    <h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">B. Build QraphQL APIs</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[18px] my-1 font text-para-color ">You will be assigned to build APIs for which you will sell subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.</p></div>`
                },
                {
                    id: 4,
                    title: "Quater 4",
                    richtext: `<h1 class="text-3xl text-justify text-black font-bold">Course Outline:</h1><div class="mt-3 text-justify"><h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Textbook:</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.amazon.com/CCNA-200-301-Official-Guide-Library/dp/1587147149/ref=sr_1_1" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline font ">https://www.amazon.com/CCNA-200-301-Official-Guide-Library/dp/1587147149/ref=sr_1_1 </a></p></div>`
                },
                {
                    id: 5,
                    title: "Quater 5",
                    richtext: `<h1 class="text-3xl text-justify text-black font-bold">Course Outline:</h1><div class="mt-3"><h3 class="whitespace-pre-line text-xl font-bold text-black mb-2 mt-3">Textbook:</h3>
                    <p class="whitespace-pre-line text-[18px] xl:text-[16px] my-1 font text-para-color "><a target="_blank" href="https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3" class="whitespace-pre-line text-[18px] xl:text-[16px] my-1.5 text-blue-600 underline font ">https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3  </a></p></div>`
                }
            ]
        },
        
    ]