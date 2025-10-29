 

// JavaScript Document


//Owl
 $(document).ready(function () {
        $(".carousel-logo").owlCarousel({
          loop: true,
          margin: 1,
          rtl: false, // Right → Left direction
          autoplay: true,
          autoplayTimeout: 3000, // Time between slides
          smartSpeed: 1000, // Speed of the jerk (lower = faster jerk)
           slideTransition: "linear", // removes jerk effect
          dots: false,
          nav: false, // show next/prev arrows
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,
           responsive: {
      0: { items: 4 },
      576: { items: 4 },
      768: { items: 5 },
      992: { items: 5 },
      1200: { items: 5 }, // ✅ shows 5 items on large screens
    },
        
        });
      });

 $(document).ready(function () {
        $(".carousel-cause").owlCarousel({
          loop: true,
          margin: 20,
          rtl: false, // Right → Left direction
          autoplay: true,
          autoplayTimeout: 2000, // Time between slides
          smartSpeed: 700, // Speed of the jerk (lower = faster jerk)
          dots: false,
          nav: false, // show next/prev arrows
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,
          responsive: {
            0: { items: 1 },
            576: { items: 2 },
            992: { items: 3 },
          },
        });
      });

//Mobile Nav Bar
document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileNav = document.getElementById('mobileNav');

    if(mobileMenuToggle && mobileNav) {
      mobileMenuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
      });
    }
  });

 
 

 //Bg Image
   
      const backgrounds = document.querySelectorAll(".hero-bg");
      let current = 0;

      setInterval(() => {
        backgrounds[current].classList.remove("active");
        current = (current + 1) % backgrounds.length;
        backgrounds[current].classList.add("active");
      }, 3000); 
    


 //Back to Top
    
      const backToTopBtn = document.getElementById("backToTop");

      // Show button when scrolling down 200px
      window.onscroll = function () {
        if (
          document.body.scrollTop > 200 ||
          document.documentElement.scrollTop > 200
        ) {
          backToTopBtn.style.display = "block";
        } else {
          backToTopBtn.style.display = "none";
        }
      };

      // Scroll smoothly to top when clicked
      backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
   

        // Interactive Pricing Calculator
        const teamSlider = document.getElementById('teamSlider');
        const storageSlider = document.getElementById('storageSlider');
        const teamSizeDisplay = document.getElementById('teamSize');
        const storageSizeDisplay = document.getElementById('storageSize');
        
        const starterPriceEl = document.getElementById('starterPrice');
        const proPriceEl = document.getElementById('proPrice');
        const enterprisePriceEl = document.getElementById('enterprisePrice');

        function calculatePricing() {
            const teamSize = parseInt(teamSlider.value);
            const storageSize = parseInt(storageSlider.value);
            
            // Update displays
            teamSizeDisplay.textContent = teamSize;
            storageSizeDisplay.textContent = storageSize + ' GB';
            
            // Calculate prices based on team size and storage
            const baseStarterPrice = 29;
            const baseProPrice = 149;
            const baseEnterprisePrice = 299;
            
            // Price per additional team member
            const teamMultiplier = Math.max(1, teamSize / 10);
            const storageMultiplier = Math.max(1, storageSize / 500);
            
            const starterPrice = Math.round(baseStarterPrice * Math.min(teamMultiplier, 2) * Math.min(storageMultiplier, 1.5));
            const proPrice = Math.round(baseProPrice * Math.min(teamMultiplier, 3) * Math.min(storageMultiplier, 2));
            const enterprisePrice = Math.round(baseEnterprisePrice * teamMultiplier * storageMultiplier);
            
            // Animate price changes
            animatePrice(starterPriceEl, starterPrice);
            animatePrice(proPriceEl, proPrice);
            animatePrice(enterprisePriceEl, enterprisePrice);
        }

        function animatePrice(element, newPrice) {
            const currentPrice = parseInt(element.textContent);
            const difference = newPrice - currentPrice;
            const steps = 20;
            const stepValue = difference / steps;
            let step = 0;
            
            const interval = setInterval(() => {
                step++;
                element.textContent = Math.round(currentPrice + (stepValue * step));
                
                if (step >= steps) {
                    element.textContent = newPrice;
                    clearInterval(interval);
                }
            }, 20);
        }

        teamSlider.addEventListener('input', calculatePricing);
        storageSlider.addEventListener('input', calculatePricing);

        // Scroll animations
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.style.padding = '0.5rem 2rem';
                nav.style.background = 'rgba(15, 23, 42, 0.95)';
            } else {
                nav.style.padding = '1rem 2rem';
                nav.style.background = 'rgba(15, 23, 42, 0.8)';
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // Close mobile menu if open
                    mobileNav.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                }
            });
        });

        // Mobile menu functionality
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const mobileNav = document.getElementById('mobileNav');

        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
                mobileNav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });

        // Contact form handling
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                company: document.getElementById('company').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Simulate form submission
            const submitButton = this.querySelector('.submit-button');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                submitButton.textContent = 'Message Sent! ✓';
                submitButton.style.background = 'var(--secondary)';
                
                // Reset form
                this.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.style.background = '';
                    submitButton.disabled = false;
                }, 3000);
            }, 1500);
        });

        // Animate stats on scroll
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                }
            });
        }, observerOptions);

        // Observe stat cards
        document.querySelectorAll('.stat-card').forEach(card => {
            observer.observe(card);
        });

        // Hero background image rotation
        const heroBackgrounds = document.querySelectorAll('.hero-bg');
        let currentBgIndex = 0;

        function rotateBackgrounds() {
            // Remove active class from all backgrounds
            heroBackgrounds.forEach(bg => bg.classList.remove('active'));
            
            // Add active class to current background
            heroBackgrounds[currentBgIndex].classList.add('active');
            
            // Move to next background
            currentBgIndex = (currentBgIndex + 1) % heroBackgrounds.length;
        }

        // Start with first image
        heroBackgrounds[0].classList.add('active');

        // Rotate every 5 seconds
        setInterval(rotateBackgrounds, 5000);