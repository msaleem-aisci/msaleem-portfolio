document.addEventListener('DOMContentLoaded', () => {
    renderHome();
    renderEducation();
    renderExperience();
    renderProjects();
});

function renderHome() {
    const container = document.getElementById('home');
    container.innerHTML = `
        <div class="home-container">
            <div class="home-text">
                <h1>${cvData.home.name}</h1>
                <p><strong>${cvData.home.title}</strong></p>
                <p style="margin-top: 20px;">${cvData.home.bio}</p>
                <p style="margin-top: 20px;"><a href="mailto:example@example.com">Contact Me</a></p>
            </div>
            <div class="home-image">
                <img src="${cvData.home.image}" alt="${cvData.home.name}">
            </div>
        </div>
    `;
}

function renderEducation() {
    const container = document.getElementById('education');
    let html = `<h2>Education</h2>`;
    cvData.education.forEach(edu => {
        html += `
            <div class="cv-item">
                <div class="cv-main">
                    <h3>${edu.degree}</h3>
                    <p>${edu.institution}</p>
                </div>
                <div class="cv-meta">
                    <p>${edu.location}</p>
                    <p>${edu.date}</p>
                    <p><span class="cgpa">CGPA: </span><strong>${edu.cgpa}</strong></p>
                    <p><a href="${edu.transcriptLink}" target="_blank">View Transcript</a></p>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function renderExperience() {
    const container = document.getElementById('experience');
    let html = `<h2>Experience</h2>`;
    cvData.experience.forEach(exp => {
        html += `
            <div class="cv-item">
                <div class="cv-main">
                    <h3>${exp.role}</h3>
                    <p><strong>${exp.company}</strong></p>
                    <p style="margin-top: 10px;">${exp.description}</p>
                </div>
                <div class="cv-meta">
                    <p>${exp.location}</p>
                    <p>${exp.date}</p>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function renderProjects() {
    const container = document.getElementById('projects');
    let html = `<h2>Projects</h2>`;
    cvData.projects.forEach(proj => {
        html += `
            <div class="cv-item">
                <div class="cv-main">
                    <h3>${proj.name}</h3>
                    <p style="margin-top: 10px;">${proj.description}</p>
                </div>
                <div class="cv-meta">
                    <p>${proj.date}</p>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}
