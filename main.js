// Render Home Section
function renderHome() {
    const container = document.getElementById('home-section');
    container.innerHTML = `
        <section id="home" class="flex flex-col-reverse md:flex-row gap-10 items-center md:items-start pt-6">
            <!-- Left side: 60% -->
            <div class="md:w-[60%] w-full flex flex-col justify-center">
                <h1 class="text-4xl font-bold mb-4">${cvData.profile.name}</h1>
                <p class="text-gray-700 leading-relaxed mb-6">
                    ${cvData.profile.bio}
                </p>
                <div class="flex gap-3 font-medium">
                    <a href="mailto:contact@example.com">Email</a>
                    <div class="text-gray-400 ">|</div>
                    <a href="#">Google Scholar</a>
                    <div class="text-gray-400 ">|</div>
                    <a href="#">GitHub</a>
                   <div class="text-gray-400 ">|</div>
                    <a href="#">LinkedIn</a>
                </div>
            </div>
            <!-- Right side: 40% -->
            <div class="md:w-[40%] w-full flex justify-center md:justify-end">
                <img src="${cvData.profile.image}" 
                     alt="${cvData.profile.name}" 
                     style="border-radius: 20px;"
                     class="w-full max-w-[230px] h-auto object-cover shadow-lg">
            </div>
        </section>
    `;
}

// Render Education Section
function renderEducation() {
    const container = document.getElementById('education-section');
    let html = `<h2 id="education" class="section-title">Education</h2><div class="flex flex-col gap-8">`;
    
    cvData.education.forEach(edu => {
        html += `
            <div class="flex flex-col md:flex-row justify-between items-start gap-4">
                <!-- Left Details -->
                <div class="md:w-2/3">
                    <h3 class="font-semibold text-lg">${edu.degree}</h3>
                    <div class="text-gray-800 mt-1">${edu.institution}</div>
                    ${edu.cgpa ? `<div class="mt-2 text-gray-800"><strong>CGPA:</strong> ${edu.cgpa} /${edu.maxCgpa}</div>` : ''}
                    ${edu.transcript ? `<div class="mt-1"><a href="${edu.transcript}" target="_blank">View Transcript</a></div>` : ''}
                </div>
                <!-- Right Location & Date -->
                <div class="md:w-1/3 text-left md:text-right">
                    <div class="text-gray-800 font-medium">${edu.location}</div>
                    <div class="text-gray-500 mt-1">${edu.date}</div>
                </div>
            </div>
        `;
    });
    html += `</div>`;
    container.innerHTML = html;
}

// Render Experience Section
function renderExperience() {
    const container = document.getElementById('experience-section');
    let html = `<h2 id="experience" class="section-title">Experience</h2><div class="flex flex-col gap-8">`;
    
    cvData.experience.forEach(exp => {
        html += `
            <div class="flex flex-col md:flex-row justify-between items-start gap-4">
                <div class="md:w-2/3">
                    <h3 class="font-semibold text-lg">${exp.role}</h3>
                    <div class="text-gray-800 font-medium mt-1">${exp.company}</div>
                    <div class="text-gray-600 mt-2">${exp.description}</div>
                </div>
                <div class="md:w-1/3 text-left md:text-right">
                    <div class="text-gray-800 font-medium">${exp.location}</div>
                    <div class="text-gray-500 mt-1">${exp.date}</div>
                </div>
            </div>
        `;
    });
    html += `</div>`;
    container.innerHTML = html;
}

// Render Projects Section
function renderProjects() {
    const container = document.getElementById('projects-section');
    let html = `<h2 id="projects" class="section-title">Projects</h2><ul class="flex flex-col gap-6 pl-0 list-none">`;
    
    cvData.projects.forEach(proj => {
        html += `
            <li>
                <h3 class="font-semibold inline mr-2 text-lg">${proj.title}:</h3>
                <span class="text-gray-700">${proj.description}</span>
                ${proj.link !== '#' ? `<div class="mt-1"><a href="${proj.link}">View Project</a></div>` : ''}
            </li>
        `;
    });
    html += `</ul>`;
    container.innerHTML = html;
}

// Mobile Menu functionality
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const sidebar = document.getElementById('mobile-sidebar');
    const overlay = document.getElementById('mobile-overlay');
    const links = document.querySelectorAll('.mobile-nav-link');

    function toggleMenu() {
        sidebar.classList.toggle('sidebar-open');
        overlay.classList.toggle('overlay-open');
    }

    btn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
    links.forEach(link => link.addEventListener('click', toggleMenu));
}

// Scroll Spy (Active Links)
function initScrollSpy() {
    const sections = document.querySelectorAll('main > div[id$="-section"]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Adjust for sticky header
            if (scrollY >= sectionTop - 120) {
                current = section.getAttribute('id').replace('-section', '');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize and render all sections on page load
document.addEventListener('DOMContentLoaded', () => {
    renderHome();
    renderEducation();
    renderExperience();
    renderProjects();
    initMobileMenu();
    initScrollSpy();
});