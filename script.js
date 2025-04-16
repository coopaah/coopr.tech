document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        cursorFollower.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    });
    
    document.addEventListener('mousedown', () => {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(0.8)`;
        cursorFollower.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(0.8)`;
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(1)`;
        cursorFollower.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(1)`;
    });

    const hoverElements = document.querySelectorAll('a, button, .project-card');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(1.5)`;
            cursorFollower.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(1.5)`;
            cursorFollower.style.backgroundColor = "rgba(0, 102, 255, 0.1)";
            cursorFollower.style.border = "none";
            cursor.style.mixBlendMode = "normal";
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(1)`;
            cursorFollower.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(1)`;
            cursorFollower.style.backgroundColor = "transparent";
            cursorFollower.style.border = "1px solid var(--secondary)";
            cursor.style.mixBlendMode = "difference";
        });
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#91d67a"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#4ead5d",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// Project data
const projects = [
    {
        title: "FlashTags",
        description: "Smart AI search engine that gives you instant summaries and deeper results.",
        image: "https://flashtags.tech/logo.png",
        link: "#",
        tags: ["HTML", "Next.js", "JS"]
    },
    
];

const projectsGrid = document.querySelector('.projects-grid');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <a href="${project.link}" class="project-link" target="_blank">View Project</a>
        </div>
    `;
    projectsGrid.appendChild(projectCard);
});

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from('.logo-text', {
        duration: 1.5,
        y: -100,
        opacity: 0,
        ease: 'power4.out',
        delay: 0.2
    });
    
    gsap.from('.nav-link', {
        duration: 1,
        y: -50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.5
    });
    
    gsap.from('.glitch', {
        duration: 1.5,
        scale: 0.8,
        opacity: 0,
        ease: 'elastic.in(1, 0.3)',
        delay: 0.7
    });
    
    gsap.from('.subtitle', {
        duration: 1.2,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 1
    });
    
    gsap.from('.hero-description', {
        duration: 1.2,
        opacity: 0,
        ease: 'power2.out',
        delay: 1.3
    });
    
    gsap.from('.section-title', {
        scrollTrigger: {
            trigger: '.section-title',
            start: 'top 80%'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });
    
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 70%'
        },
        duration: 0.8,
        y: 100,
        opacity: 0,
        stagger: 0.15,
        ease: 'power3.out'
    });
    
    gsap.from('.discord-button', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 70%'
        },
        duration: 1,
        scale: 0.8,
        opacity: 0,
        ease: 'back.out(1.7)'
    });
    
    gsap.from('.social-link', {
        scrollTrigger: {
            trigger: '.social-links',
            start: 'top 80%'
        },
        duration: 0.6,
        opacity: 0,
        y: 20, 
        stagger: 0.1,
        ease: 'back.out(1.7)',
        onComplete: function() {
            document.querySelectorAll('.social-link').forEach(link => {
                link.style.width = '60px';
                link.style.height = '60px';
            });
        }
    });
});