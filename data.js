// Data structure acting as the single source of truth
const cvData = {
    profile: {
        name: "Muhammad Saleem",
        bio: `
        AI Research Fellow at the Fatima Institute of Global AI Research through a 9-month fellowship, collaborating on 3D cell organelle segmentation in electron microscopy volumes with a Senior Data Scientist at the MRC Laboratory of Molecular Biology, University of Cambridge, UK.

        <br> Furthermore, I am conducting research on crop diseases using AI under the mentorship of an Assistant Professor at the University of Malaysia, holds a PhD from the University of Oxford.
        `,
        image: "./dp.jpg"
    },
    research: [
        {
            role: "Research Fellow",
            institution: "Fatima Institute for Global AI Research",
            location: "Remote",
            date: "Apr. 2026 – Present",
            bullets: [
                "Collaborating on 3D cell organelle segmentation with a Senior Data Scientist from Cambridge (MRC LMB).",
                "Developing OrganelleNet, an end-to-end lightweight 3D segmentation pipeline for Janelia CellMap dataset.",
                "Designed a foreground-seeded patch sampling algorithm to address class imbalance.",
                "Training and evaluating 3D segmentation models using Dice score, IoU, precision, and recall."
            ]
        },
        {
            role: "Research Collaborator",
            institution: "Independent Research Collaboration",
            location: "Remote",
            date: "Jun. 2026 – Present",
            bullets: [
                "Collaborating with Dr. Hoi Leong Lee, Senior Lecturer at Universiti Malaysia Perlis, on crop disease benchmarking.",
                "Building a 10,000+ image benchmark dataset, with 2,000 field images collected across rice, maize, and sugarcane.",
                "Developing and benchmarking crop disease detection models against existing approaches."
            ]
        },
        {
            role: "Undergraduate Researcher",
            institution: "PhytoNet (Final Year Project)",
            location: "Okara, Pakistan",
            date: "2024 – 2025",
            bullets: [
                "Engineered a 3-parallel-branched CNN to extract spatial features simultaneously from leaf images.",
                "Achieved 92% accuracy classifying 13 diseases on test data via the Villageplant dataset.",
                "Implemented Explainable AI heatmaps to accurately visualize the model's diagnostic focus."
            ]
        }
    ],
    education: [
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "University of Okara",
            cgpa: "3.32",
            maxCgpa: "4",
            transcript: "#", // Add actual link here
            location: "Okara, Pakistan",
            date: "Nov. 2021– Aug. 2025"
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