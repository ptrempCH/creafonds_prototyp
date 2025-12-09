/**
 * Creafonds AG - Modern Website JavaScript
 * Mobile-First Interactive Features
 */

// ========== DOM Elements ==========
const header = document.getElementById('header');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav__link');
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');
const modal = document.getElementById('portfolioModal');
const modalBody = document.getElementById('modalBody');

// ========== Portfolio Data ==========
const portfolioData = {
    basel: {
        title: 'Basel BS',
        category: 'Renditeliegenschaft',
        description: `Ein Industrieareal mit hoher Nutzfläche. Geführt als Renditeobjekt eignet sich das Areal 
            hervorragend für die Projektentwicklung mit bis zu 40m Bauhöhe. Die Lage ist am Einfallstor zu Basel, 
            direkt neben der Autobahn und dem St. Jakobs-Stadion. Die aktuelle Zwischennutzung bietet eine 
            vielfältige Mischung von Kleingewerbe und lässt viel Raum für Kultur, Sport und Begegnungen.`,
        images: [
            'images/portfolio/basel.jpg',
            'images/home/slide-1.jpg',
            'images/home/slide-2.jpg',
            'images/home/slide-3.jpg'
        ],
        homegate: null
    },
    ennetbuergen: {
        title: 'Ennetbürgen NW',
        category: 'Entwicklungsareal',
        description: `Entwicklungsareal mit attraktivem Standort am Vierwaldstättersee. 
            Kaufrecht erworben im März 2024. Grosses Potenzial für Wohnbauentwicklung in 
            privilegierter Lage mit Seesicht.`,
        images: [
            'images/portfolio/ennetbuergen.jpg'
        ],
        homegate: null
    },
    obfelden: {
        title: 'Obfelden ZH',
        category: 'Renditeliegenschaft',
        description: `Renditeliegenschaft in der Agglomeration Zürich mit stabilen Erträgen. 
            Gut erschlossen und mit solider Mieterstruktur.`,
        images: [
            'images/portfolio/obfelden.jpg'
        ],
        homegate: null
    },
    reinach: {
        title: 'Reinach AG',
        category: 'Entwicklungsareal',
        description: `Entwicklungsareal mit Potenzial für Wohnbauprojekt in attraktiver Lage 
            im Kanton Aargau. Die Gemeinde Reinach bietet eine hohe Lebensqualität und 
            ist verkehrstechnisch gut erschlossen.`,
        images: [
            'images/portfolio/reinach.jpg'
        ],
        homegate: null
    },
    schoenenwerd: {
        title: 'Schönenwerd SO',
        category: 'Entwicklungsareal',
        description: `Entwicklungsareal mit signifikantem Transformationspotenzial. 
            Historischer Industriestandort mit interessanten Entwicklungsmöglichkeiten.`,
        images: [
            'images/portfolio/schoenenwerd.jpg'
        ],
        homegate: null
    },
    spreitenbach: {
        title: 'Spreitenbach AG',
        category: 'Entwicklungsareal',
        description: `Entwicklungsareal bestehend aus Parzellen 830 und 3593, erworben im März 2025. 
            Strategisch günstig gelegenes Grundstück in der wirtschaftsstarken Region Limmattal 
            mit exzellenter Verkehrsanbindung.`,
        images: [
            'images/portfolio/spreitenbach.jpg'
        ],
        homegate: null
    },
    steinhausen: {
        title: 'Steinhausen ZG',
        category: 'Renditeliegenschaft',
        description: `Renditeliegenschaft im wirtschaftsstarken Kanton Zug mit exzellenter Anbindung. 
            Profitiert von der attraktiven Steuersituation und der hohen Standortqualität.`,
        images: [
            'images/portfolio/steinhausen.jpg'
        ],
        homegate: null
    },
    unterkulm: {
        title: 'Unterkulm AG',
        category: 'Entwicklungsareal',
        description: `Entwicklungsareal mit Potenzial für zukünftige Wohnnutzung. 
            Gut erschlossene Gemeinde im Wynental mit ländlichem Charakter.`,
        images: [
            'images/portfolio/unterkulm.jpg'
        ],
        homegate: null
    },
    wohlen: {
        title: 'Wohlen AG',
        category: 'Entwicklungsareal',
        description: `Die Liegenschaft befindet sich im Zentrum von Wohlen. Das Neubauprojekt 
            umfasst mehrere Wohnbaukörper in einer modernen Gesamtüberbauung. Das Projekt 
            wirkt zentrumsprägend und wird das Ortsbild nachhaltig aufwerten.`,
        images: [
            'images/portfolio/wohlen.jpg'
        ],
        homegate: null
    }
};

// ========== Header Scroll Effect ==========
let lastScroll = 0;

function handleScroll() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
}

window.addEventListener('scroll', handleScroll, { passive: true });

// ========== Mobile Navigation ==========
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ========== Smooth Scroll ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========== Portfolio Filter ==========
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        
        // Filter cards
        portfolioCards.forEach(card => {
            const category = card.dataset.category;
            
            if (filter === 'all' || category === filter) {
                card.classList.remove('hidden');
                card.style.animation = 'fadeInUp 0.5s ease forwards';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ========== Modal Functions ==========
function openModal(projectId) {
    const project = portfolioData[projectId];
    
    if (!project) return;
    
    // Generate modal content
    let imagesHtml = '';
    
    if (project.images.length > 0) {
        imagesHtml = `
            <div class="modal__gallery">
                <div class="modal__gallery-main">
                    <img src="${project.images[0]}" alt="${project.title}" id="modalMainImage">
                </div>
                ${project.images.length > 1 ? `
                    <div class="modal__gallery-thumbs">
                        ${project.images.map((img, index) => `
                            <div class="modal__gallery-thumb ${index === 0 ? 'active' : ''}" 
                                 onclick="changeModalImage('${img}', this)">
                                <img src="${img}" alt="${project.title} ${index + 1}">
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        `;
    }
    
    let homegateBtn = '';
    if (project.homegate) {
        homegateBtn = `
            <a href="${project.homegate}" target="_blank" rel="noopener noreferrer" class="modal__homegate">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Auf Homegate ansehen
            </a>
        `;
    }
    
    modalBody.innerHTML = `
        ${imagesHtml}
        <h2 class="modal__title">${project.title}</h2>
        <span class="modal__badge">${project.category}</span>
        <p class="modal__description">${project.description}</p>
        ${homegateBtn}
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function changeModalImage(src, thumbElement) {
    const mainImage = document.getElementById('modalMainImage');
    mainImage.src = src;
    
    // Update active state
    document.querySelectorAll('.modal__gallery-thumb').forEach(thumb => {
        thumb.classList.remove('active');
    });
    thumbElement.classList.add('active');
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ========== Intersection Observer for Animations ==========
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.portfolio-card, .team-card, .feature, .stat, .contact-item').forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
});

// ========== Active Navigation Link ==========
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollPos = window.pageYOffset + header.offsetHeight + 50;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink, { passive: true });

// ========== Lazy Loading Images ==========
if ('loading' in HTMLImageElement.prototype) {
    // Browser supports lazy loading
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for older browsers
    const lazyLoadScript = document.createElement('script');
    lazyLoadScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(lazyLoadScript);
}

// ========== Preload Critical Images ==========
function preloadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
    });
}

// Preload hero image
preloadImage('images/home/slide-1.jpg');

// ========== Console Greeting ==========
console.log('%c🏢 Creafonds AG', 'font-size: 24px; font-weight: bold; color: #4F91D5;');
console.log('%cImmobilien Anlagegesellschaft - Luzern', 'font-size: 14px; color: #4a5568;');
console.log('%cWebsite by Cursor AI', 'font-size: 12px; color: #718096;');

// ========== Performance Monitoring ==========
if (window.performance && window.performance.mark) {
    window.performance.mark('app-interactive');
}

// ========== Initialize ==========
document.addEventListener('DOMContentLoaded', () => {
    // Initial scroll check
    handleScroll();
    highlightNavLink();
    
    // Add loaded class to body
    document.body.classList.add('loaded');
});
