
        document.addEventListener('DOMContentLoaded', function () {

            // Navbar scroll effect
            window.addEventListener('scroll', function () {
                const header = document.querySelector('.header');
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // Floating CTA
            const floatingCta = document.getElementById('floatingCta');
            const hero = document.querySelector('.hero');

            if (floatingCta && hero) {
                window.addEventListener('scroll', function () {
                    const heroBottom = hero.offsetTop + hero.offsetHeight;
                    const scrollPosition = window.scrollY;

                    if (scrollPosition > heroBottom) {
                        floatingCta.classList.add('visible');
                    } else {
                        floatingCta.classList.remove('visible');
                    }
                });
            }

            // Smooth scrolling
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        const headerHeight = document.querySelector('.header').offsetHeight;
                        const targetPosition = target.offsetTop - headerHeight;
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Intersection Observer for animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function (entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            // Observe elements for animation
            document.querySelectorAll('.fade-in-up').forEach(el => {
                observer.observe(el);
            });

            // Initialize Testimonials Swiper
            const testimonialsSwiper = document.querySelector('.testimonials-swiper');
            if (testimonialsSwiper && typeof Swiper !== 'undefined') {
                const swiper = new Swiper('.testimonials-swiper', {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: true,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        }
                    }
                });
            }

            // Form submission
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function (e) {
                    e.preventDefault();

                    alert('Thank you for your request! We will contact you within 48 hours.');
                    this.reset();
                });
            }

            // Add active nav link highlighting
            window.addEventListener('scroll', function () {
                let current = '';
                const sections = document.querySelectorAll('section[id]');

                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    if (scrollY >= (sectionTop - 200)) {
                        current = section.getAttribute('id');
                    }
                });

                document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + current) {
                        link.classList.add('active');
                    }
                });
            });

        });
  

// JavaScript to handle download on click 
function downloadFile(fileUrl) {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Section Allways Center Script

window.addEventListener("load", function () {
    if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      target.scrollIntoView({
        behavior: "auto", 
        block: "center"
      });
    }
  }
});
