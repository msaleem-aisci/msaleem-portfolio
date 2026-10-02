// Data structure acting as the single source of truth
const cvData = {
    profile: {
        name: "Muhammad Saleem",
        bio: "AI Researcher specializing in biomedical and agricultural computer vision, 3D volumetric organelle segmentation, and explainable AI. Passionate about developing robust, interpretable machine learning models for critical domains.",
        image: "/dp"
    },
    education: [
        {
            degree: "Master of Science in Computer Science",
            institution: "University of Arkansas at Little Rock",
            cgpa: null,
            maxCgpa: null,
            transcript: null,
            location: "Little Rock, AR",
            date: "Admitted"
        },
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "University of Okara",
            cgpa: "3.32",
            maxCgpa: "4",
            transcript: "#", // Add actual link here
            location: "Okara, Pakistan",
            date: "Aug 2025"
        }
    ],
    experience: [
        {
            role: "Research Fellow",
            company: "Fatima Institute for Global AI Research",
            description: "Focusing on 3D volumetric organelle segmentation and advanced biomedical imaging.",
            location: "Remote",
            date: "April 2026 – Present"
        },
        {
            role: "AI Engineer",
            company: "Elevate Business Solution",
            description: "Developed and deployed scalable machine learning models for enterprise solutions.",
            location: "Lahore, Pakistan",
            date: "Dec 2024 – Dec 2025"
        }
    ],
    projects: [
        {
            title: "PhytoNet",
            description: "Multi-branch CNN with explainable AI heatmaps for agricultural leaf disease classification.",
            link: "#"
        },
        {
            title: "GemmaSight",
            description: "Dual-path medical vision system integrated with MedGemma and FAISS for colorectal cancer diagnostic reports.",
            link: "#"
        }
    ]
};