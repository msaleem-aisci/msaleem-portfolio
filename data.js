const cvData = {
    profile: {
        name: "Muhammad Saleem",
        bio: "AI Researcher specializing in biomedical and agricultural computer vision, 3D volumetric organelle segmentation, and explainable AI. Passionate about developing robust, interpretable machine learning models for critical domains.",
        image: "https://placehold.co/600x800/e2e8f0/475569?text=Profile+Photo"
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
            transcript: "#", 
            location: "Okara, Pakistan",
            date: "Aug 2021 – Aug 2025"
        }
    ],
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
    experience: [
        {
            role: "AI Engineer",
            company: "Elevate Business Solution",
            description: "Built an XGBoost baseline for time-series monthly sales forecasting, achieving an initial 86% R2. Upgraded the pipeline using an LSTM with attention mechanisms, enhancing prediction R2 to 91%.",
            location: "Lahore, Pakistan",
            date: "Dec 2024 – Dec 2025"
        }
    ],
    projects: [
        {
            title: "Hypo-TCN",
            description: "Architected a Residual Causal TCN with Self-Attention to predict hypotension 3-12 hours early.",
            link: "#"
        },
        {
            title: "GemmaSight",
            description: "Dual-path medical vision system integrated with MedGemma and FAISS for colorectal cancer diagnostic reports.",
            link: "#"
        }
    ]
};