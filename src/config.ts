export const config = {
    developer: {
        name: "Latish",
        fullName: "Latish Kumeriya",
        title: "Full Stack Developer",
        description: "Results-driven Full Stack Developer with experience in Java (Spring Boot), React, Angular, REST APIs, MySQL and MongoDB. Proficient in OOP, MVC Architecture, and RESTful API design."
    },
    social: {
        github: "latishkumeriya",
        email: "latish.kumeriya.tech@gmail.com",
        location: "Pune, India"
    },
    about: {
        title: "About Me",
        description: "Results-driven Full Stack Developer with deep expertise in Java (Spring Boot), React, and Angular, specializing in designing and developing scalable, high-performance web applications."
    },
    experiences: [
        {
            position: "IT Associate",
            company: "Impulse Engineers",
            period: "Dec 2024 - Apr 2025",
            location: "Boisar",
            description: "Managed real-time data transmission and automated data collection workflows, optimizing processes and reducing manual effort significantly.",
            responsibilities: [
                "Automated IoT data collection with Python scripts, reducing manual effort by 40%",
                "Managed real-time data transmission via REST APIs ensuring 99% uptime",
                "Built Python data pipelines for live client monitoring dashboards",
                "Debugged hardware/software issues and maintained optimal system performance",
                "Collaborated using Agile workflows to deploy company device solutions"
            ],
            technologies: ["Python", "REST APIs", "IoT"]
        },
        {
            position: "BCA Graduate",
            company: "K. B. Sumeria College, Vapi",
            period: "2021 - 2024",
            location: "Vapi",
            description: "Graduated with Distinction (CGPA: 7.53) from Veer Narmad South Gujarat University, building a strong foundation in computer applications.",
            responsibilities: [
                "Studied core computer science concepts including OOP and MVC",
                "Built multiple projects as part of the curriculum",
                "Focused on software engineering principles and database management"
            ],
            technologies: ["Java", "Web Development", "Databases", "Software Engineering"]
        },
        {
            position: "Class XII (CBSE)",
            company: "Lions English School",
            period: "2014 - 2015",
            location: "Silvassa",
            description: "Completed higher secondary education under the Central Board of Secondary Education.",
            responsibilities: [
                "Studied academic fundamentals and foundational subjects",
                "Participated in active school curricular activities"
            ],
            technologies: ["High School", "CBSE"]
        },
        {
            position: "Class X (CBSE)",
            company: "Lions English School",
            period: "2012 - 2013",
            location: "Silvassa",
            description: "Completed secondary education under the Central Board of Secondary Education with a CGPA of 7.6.",
            responsibilities: [
                "Built a strong foundation in science, mathematics, and languages",
                "Active participant in school academic programs"
            ],
            technologies: ["Secondary Education", "CBSE"]
        }
    ],
    certifications: [
        {
            title: "Full-Stack Web Development",
            issuer: "SEED Infotech",
            date: "2025",
            description: "Completed hands-on training in front-end and back-end web development, covering modern technologies, database integration, and responsive UI design. Gained practical experience in building dynamic, scalable web applications with real-world project-based learning."
        },
        {
            title: "Introduction to Generative AI",
            issuer: "Google Cloud Skills Boost",
            date: "2025",
            description: "Certified validation of technical proficiency and dedication to continuous learning in advanced software engineering principles."
        },
        {
            title: "AI Boost Bites: Prompting Like a Pro",
            issuer: "Google Cloud Skills Boost",
            date: "2025",
            description: "Certified validation of technical proficiency and dedication to continuous learning in advanced software engineering principles."
        },
        {
            title: "AI Boost Bites: Your Personal AI Tutor",
            issuer: "Google Cloud Skills Boost",
            date: "2025",
            description: "Certified validation of technical proficiency and dedication to continuous learning in advanced software engineering principles."
        },
        {
            title: "AI Boost Bites: Create Productivity Tools",
            issuer: "Google Cloud Skills Boost",
            date: "2025",
            description: "Certified validation of technical proficiency and dedication to continuous learning in advanced software engineering principles."
        }
    ],
    projects: [
        {
            id: 1,
            title: "TicTacToe AI",
            category: "AI / Web Application",
            technologies: "Java 17, Spring Boot, Thymeleaf, Maven, Docker",
            image: "/images/tictactoe.png",
            description: "AI-powered TicTacToe web application where users can play against different AI difficulty levels. Implements game logic using Random Move, Win/Block Strategy, and Minimax Algorithm with Spring Boot MVC architecture and session-based state management.",
            liveLink: "https://tictactoe-ai-production.up.railway.app",
            githubLink: "https://github.com/latishkumeriya/tictactoe-ai"
        },
        {
            id: 2,
            title: "Employee Management System",
            category: "Full Stack",
            technologies: "Java 17, Spring Boot, Angular, MySQL, Spring Security, JWT, Maven, Spring Data JPA",
            image: "/images/employee-management.png",
            description: "Full-stack Employee Management System to manage employee records with secure login and protected routes. Includes CRUD operations, JWT-based authentication, Spring Security, REST API integration, and Angular frontend communication with Spring Boot backend.",
            liveLink: "",
            githubLink: ""
        },
        {
            id: 3,
            title: "Portfolio Website",
            category: "Frontend / Web",
            technologies: "React, TypeScript, GSAP, ThreeJS, WebGL, HTML, CSS, JavaScript",
            image: "/images/portfolio.png",
            description: "Modern interactive developer portfolio website showcasing projects, certifications, technical skills, and professional experience. Features responsive layouts, smooth animations, reusable React components, and visual effects using GSAP, ThreeJS, and WebGL.",
            liveLink: "https://portfolio-seven-xi-61.vercel.app",
            githubLink: ""
        }
    ],
    contact: {
        email: "latish.kumeriya.tech@gmail.com",
        github: "https://github.com/latishkumeriya",
        linkedin: "https://linkedin.com/in/latish-kumeriya",
        resume: "/resume.pdf"
    },
    skills: {
        develop: {
            title: "BACKEND & DATABASES",
            description: "Building scalable backend services",
            details: "Specializing in developing robust RESTful APIs and microservices using Java (Spring Boot) and Python. Experienced in managing complex data with MySQL, MongoDB, and Oracle.",
            tools: ["Java", "Spring Boot", "Spring Security", "Python", "Microservices", "REST APIs", "MySQL", "MongoDB", "Oracle"]
        },
        design: {
            title: "FRONTEND & TOOLS",
            description: "Modern UI/UX & DevOps pipelines",
            details: "Creating dynamic, responsive frontends using React and Angular. Managing complete software development lifecycles utilizing Git, GitHub Actions, Docker, and standard CI/CD practices.",
            tools: ["React", "Angular", "JavaScript", "HTML", "CSS", "Bootstrap", "Docker", "GitHub Actions", "CI/CD", "Postman"]
        }
    }
};
