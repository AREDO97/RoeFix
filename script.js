

// ===== HERO IMAGE ROTATION WITH ENTRANCE ANIMATIONS =====
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.hero-image');
    
    console.log(`Found ${images.length} hero images`);
    
    if (images.length === 0) {
        console.error('No hero images found!');
        return;
    }

    let currentIndex = 0;
    let isAnimating = false;
    const rotationInterval = 3000;

    function rotateImages() {
        if (isAnimating || images.length <= 1) return;
        
        isAnimating = true;
        
        const currentImage = images[currentIndex];
        const nextIndex = (currentIndex + 1) % images.length;
        const nextImage = images[nextIndex];
        
        console.log(`Rotating from image ${currentIndex + 1} to ${nextIndex + 1}`);
        
        // Add exiting animation to current image
        currentImage.classList.add('exiting');
        currentImage.classList.remove('active');
        
        // Add entering animation to next image
        nextImage.classList.remove('exiting');
        nextImage.classList.add('active');
        
        // After exit transition completes, reset current image
        setTimeout(() => {
            currentImage.classList.remove('exiting');
            currentIndex = nextIndex;
            isAnimating = false;
        }, 800);
    }

    // Initialize first image with entrance animation
    if (images.length > 0) {
        setTimeout(() => {
            images[0].classList.add('active');
            console.log('First image activated with entrance animation');
        }, 1000); // Delay to sync with text animations
    }

    // Start rotation after initial entrance
    setTimeout(() => {
        const rotationTimer = setInterval(rotateImages, rotationInterval);
        console.log('Image rotation started');
        
        // Optional: Pause on hover
        const imageSlider = document.querySelector('.image-slider');
        if (imageSlider) {
            imageSlider.addEventListener('mouseenter', () => {
                clearInterval(rotationTimer);
                console.log('Rotation paused');
            });
            
            imageSlider.addEventListener('mouseleave', () => {
                clearInterval(rotationTimer);
                setInterval(rotateImages, rotationInterval);
                console.log('Rotation resumed');
            });
        }
    }, 4000); // Start rotation after all entrance animations
});









//section animation
document.addEventListener('DOMContentLoaded', () => {
  const animatedSections = document.querySelectorAll('.animate-on-scroll');
  if (animatedSections.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15, // Trigger when 15% of the section is visible
    rootMargin: '0px 0px -50px 0px' // Optional: trigger slightly before fully in view
  });

  animatedSections.forEach(section => {
    observer.observe(section);
  });
});








        
       

        // Optional: Trigger animations on scroll (if you want it to animate when scrolled into view)
            document.addEventListener('DOMContentLoaded', function () {
                const heroSection = document.getElementById('hero');
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }
                    });
                }, { threshold: 0.1 });

                observer.observe(heroSection);
            });



            // Optional: Animate cards as they scroll into view
                document.addEventListener('DOMContentLoaded', function () {
                    const cards = document.querySelectorAll('.category-card');
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                entry.target.style.opacity = '1';
                                entry.target.style.transform = 'translateY(0)';
                            }
                        });
                    }, { threshold: 0.1 });

                    cards.forEach(card => observer.observe(card));
                });


        // ===== ANIMATE SECTION ON LOAD =====
            document.addEventListener('DOMContentLoaded', () => {
                const featuredSection = document.querySelector('.featured-products');
                setTimeout(() => {
                    featuredSection.classList.add('visible');
                }, 300); // Delay for smoother page load
            });





            document.addEventListener('DOMContentLoaded', function () {
                    // ===== HANDLE SIZE SELECTION (your original logic, enhanced) =====
                    document.querySelectorAll('.product-card').forEach(card => {
                        const sizeButtons = card.querySelectorAll('.size-btn');
                        if (sizeButtons.length <= 1) return;

                        let autoRotateInterval = null;
                        let isUserInteracted = false;

                        // Function to update image and selection
                        const updateImage = (button) => {
                            const imgElement = card.querySelector('.shoe-image');
                            const newImgSrc = button.getAttribute('data-img');

                            imgElement.src = newImgSrc;

                            sizeButtons.forEach(btn => btn.classList.remove('selected'));
                            button.classList.add('selected');
                        };

                        // Set up click listeners
                        sizeButtons.forEach(btn => {
                            btn.addEventListener('click', function () {
                                isUserInteracted = true; // Mark user interaction
                                if (autoRotateInterval) {
                                    clearInterval(autoRotateInterval);
                                    autoRotateInterval = null;
                                }
                                updateImage(this);
                            });
                        });

                        // ===== AUTO-ROTATION (only if no user interaction yet) =====
                        let currentIndex = 0;

                        const startAutoRotate = () => {
                            autoRotateInterval = setInterval(() => {
                                if (isUserInteracted) {
                                    clearInterval(autoRotateInterval);
                                    return;
                                }

                                currentIndex = (currentIndex + 1) % sizeButtons.length;
                                const nextButton = sizeButtons[currentIndex];
                                updateImage(nextButton);
                            }, 3000);
                        };

                        // Start auto-rotation
                        startAutoRotate();

                        // Optional: Pause on hover (without stopping permanently)
                        card.addEventListener('mouseenter', () => {
                            if (autoRotateInterval && !isUserInteracted) {
                                clearInterval(autoRotateInterval);
                                autoRotateInterval = null;
                            }
                        });

                        card.addEventListener('mouseleave', () => {
                            if (!isUserInteracted) {
                                // Resume from current index
                                currentIndex = Array.from(sizeButtons).findIndex(btn => btn.classList.contains('selected'));
                                if (currentIndex === -1) currentIndex = 0;
                                startAutoRotate();
                            }
                        });
                    });
                });

            //BANNER ANIMATION
            // Animate banners on page load
                document.addEventListener('DOMContentLoaded', () => {
                    const bannerItems = document.querySelectorAll('.banner-item');

                    bannerItems.forEach((item, index) => {
                        if (index === 0) {
                            item.classList.add('left-enter');
                        } else if (index === 1) {
                            item.classList.add('right-enter');
                        }

                        // Trigger animation after a small delay for staggered effect
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, 300 + (index * 100)); // Stagger by 100ms per item
                    });
                });

//catergory
    
document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.carousel-wrapper');
        const cards = document.querySelectorAll('.category-cards');
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');

        if (cards.length === 0) return;

        let currentSlide = 0;
        let autoSlideInterval = null;

        // Get number of cards per slide based on screen
        function getCardsPerSlide() {
        const width = window.innerWidth;
        if (width >= 1024) return 3;   // Desktop
        if (width >= 768) return 2;    // Tablet
        return 1;                      // Mobile
    }

        // Total number of slides needed
        function getTotalSlides() {
        const perSlide = getCardsPerSlide();
        return Math.ceil(cards.length / perSlide);
    }

        // Calculate offset to show a specific slide
        function getSlideOffset(slideIndex) {
        if (cards.length === 0) return 0;
        const perSlide = getCardsPerSlide();
        const card = cards[0];
        const cardWidth = card.offsetWidth;

        // Get computed gap between cards (from CSS gap or margin)
        const style = window.getComputedStyle(wrapper);
        const gap = parseFloat(style.getPropertyValue('gap')) || 0;

        const totalCardWidth = cardWidth + gap;
        return -slideIndex * perSlide * totalCardWidth;
    }

        // Update navigation button states
        function updateButtons() {
            prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide >= getTotalSlides() - 1;
    }

        // Go to a specific slide
        function goToSlide(slideIndex) {
        const totalSlides = getTotalSlides();
        if (slideIndex < 0 || slideIndex >= totalSlides) return;

        currentSlide = slideIndex;
        const offset = getSlideOffset(currentSlide);
        wrapper.style.transform = `translateX(${offset}px)`;
        wrapper.style.transition = 'transform 0.6s ease-in-out';
        updateButtons();
    }

        // Auto-rotate: advance one slide, loop back to 0 at end
        function startAutoRotate() {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            const totalSlides = getTotalSlides();
            if (currentSlide >= totalSlides - 1) {
            goToSlide(0); // Loop to start
            } else {
            goToSlide(currentSlide + 1);
            }
        }, 8000); // 5 seconds
    }

        // Stop auto-rotate (on user interaction)
        function stopAutoRotate() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        autoSlideInterval = null;
        }
    }

        // Initialize carousel
        function initCarousel() {
            // Reset transition for instant initial layout
            wrapper.style.transition = 'none';
        goToSlide(currentSlide);
        // Trigger reflow
        void wrapper.offsetWidth;
        // Re-enable transition
        wrapper.style.transition = 'transform 0.6s ease-in-out';
        startAutoRotate();
    }

    // Event listeners
    prevBtn.addEventListener('click', () => {
            stopAutoRotate();
        if (currentSlide > 0) {
            goToSlide(currentSlide - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
            stopAutoRotate();
        if (currentSlide < getTotalSlides() - 1) {
            goToSlide(currentSlide + 1);
        }
    });

        // Handle resize
        let resizeTimer;
    window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Try to preserve logical slide position
            const oldPerSlide = getCardsPerSlide(); // This is new value after resize
        // We keep currentSlide index, but it may need clamping
        currentSlide = Math.min(currentSlide, getTotalSlides() - 1);
        initCarousel();
        }, 250);
    });

        // Start
        initCarousel();
});

        


//FEATURED PRODUCTS
        document.addEventListener('DOMContentLoaded', () => {
            const section = document.getElementById('featured-clothes-section');

            if (!section) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            section.classList.add('animate');
                            observer.unobserve(section); // Trigger only once
                        }
                    });
                },
                {
                    threshold: 0.1 // Trigger when 10% of the section is visible
                }
            );

            observer.observe(section);
        });

// category section animation

    document.addEventListener('DOMContentLoaded', () => {
        const section = document.getElementById('shop-categories-section');
        if (!section) return;

        // Observe section for entrance
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        section.classList.add('visible');
                        observer.unobserve(section);
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(section);
    });


    //footer
    // Adds a subtle hover animation on scroll
document.addEventListener("DOMContentLoaded", () => {
  const columns = document.querySelectorAll(".shopcat-column");

  const revealOnScroll = () => {
    const triggerPoint = window.innerHeight * 0.9;
    columns.forEach(col => {
      const colTop = col.getBoundingClientRect().top;
      if (colTop < triggerPoint) {
        col.classList.add("shopcat-visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});


//email

// Email validation and message
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupPromo-form");
  const emailInput = document.getElementById("signupPromo-email");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (email === "" || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("🎉 Thank you for signing up! Check your inbox for your 20% discount code.");
    form.reset();
  });
});

       //section animation
        document.addEventListener('DOMContentLoaded', () => {
            const animatedSections = document.querySelectorAll('.animate-on-scroll');
            if (animatedSections.length === 0) return;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.15, // Trigger when 15% of the section is visible
                rootMargin: '0px 0px -50px 0px' // Optional: trigger slightly before fully in view
            });

            animatedSections.forEach(section => {
                observer.observe(section);
            });
        });




        // ===== SHARED DATA =====
        const categoryData = {
            shoes: {
                title1: "Men's Footwear",
                items1: ["Running Shoes", "Basketball", "Sneakers", "Sandals", "Slippers", "Formal Shoes"],
                title2: "Women's Footwear",
                items2: ["Heels", "Flats", "Boots", "Athletic Shoes", "Espadrilles", "Loafers"]
            },
            clothes: {
                title1: "Men's Clothing",
                items1: ["T-Shirts", "Shirts", "Jeans", "Jackets", "Suits", "Shorts"],
                title2: "Women's Clothing",
                items2: ["Dresses", "Tops", "Skirts", "Jeans", "Blazers", "Loungewear"]
            },
            bags: {
                title1: "Backpacks & Luggage",
                items1: ["Laptop Backpacks", "Travel Bags", "Duffel Bags", "Suitcases", "Gym Bags"],
                title2: "Handbags & Wallets",
                items2: ["Tote Bags", "Clutches", "Crossbody Bags", "Wallets", "Evening Bags"]
            },
            accessories: {
                title1: "Wearable Tech",
                items1: ["Smartwatches", "Wireless Earbuds", "Fitness Trackers"],
                title2: "Fashion Accessories",
                items2: ["Sunglasses", "Hats", "Belts", "Scarves", "Jewelry", "Watches"]
            }
        };

        const products = {
            clothes: [
                { name: "Cotton T-Shirt", price: "UGX 20000", img: "https://via.placeholder.com/200?text=T-Shirt" },
                { name: "Denim Jacket", price: "UGX 25000", img: "https://via.placeholder.com/200?text=Jacket" },
                { name: "Summer Dress", price: "UGX 15000", img: "https://via.placeholder.com/200?text=Dress" },
                { name: "Formal Shirt", price: "UGX 10000", img: "https://via.placeholder.com/200?text=Shirt" },
            ],
            shoes: [
                { name: "Running Sneakers", price: "$89.99", img: "https://via.placeholder.com/200?text=Sneakers" },
                { name: "Leather Loafers", price: "$129.99", img: "https://via.placeholder.com/200?text=Loafers" },
                { name: "Hiking Boots", price: "$149.99", img: "https://via.placeholder.com/200?text=Boots" },
                { name: "Flip Flops", price: "$19.99", img: "https://via.placeholder.com/200?text=Flip+Flops" },
            ],
            bags: [
                { name: "Leather Tote Bag", price: "$99.99", img: "https://via.placeholder.com/200?text=Tote+Bag" },
                { name: "Backpack", price: "$69.99", img: "https://via.placeholder.com/200?text=Backpack" },
                { name: "Crossbody Purse", price: "$59.99", img: "https://via.placeholder.com/200?text=Purse" },
                { name: "Weekend Duffel", price: "$89.99", img: "https://via.placeholder.com/200?text=Duffel" },
            ],
            accessories: [
                { name: "Sunglasses", price: "$39.99", img: "https://via.placeholder.com/200?text=Sunglasses" },
                { name: "Smart Watch", price: "$199.99", img: "https://via.placeholder.com/200?text=Watch" },
                { name: "Silk Scarf", price: "$29.99", img: "https://via.placeholder.com/200?text=Scarf" },
                { name: "Leather Belt", price: "$24.99", img: "https://via.placeholder.com/200?text=Belt" },
            ]
        };

        // ===== DESKTOP LOGIC =====
        const categoriesToggle = document.getElementById('categories-toggle');
        const megaMenu = document.getElementById('mega-menu');
        const sidebarItems = document.querySelectorAll('.sidebar-item');
        const col1 = document.getElementById('column1');
        const col2 = document.getElementById('column2');

        function renderCategoryContent(categoryKey) {
            const data = categoryData[categoryKey];
            if (!data) return;
            col1.innerHTML = `<h4>${data.title1}</h4>` + data.items1.map(item => `<a href="/shop.html">${item}</a>`).join('');
            col2.innerHTML = `<h4>${data.title2}</h4>` + data.items2.map(item => `<a href="/shop.html">${item}</a>`).join('');
        }

        // Initialize desktop
        renderCategoryContent('shoes');

        categoriesToggle.addEventListener('mouseenter', () => megaMenu.classList.add('active'));
        categoriesToggle.addEventListener('mouseleave', () => setTimeout(() => {
            if (!megaMenu.matches(':hover')) megaMenu.classList.remove('active');
        }, 250));
        megaMenu.addEventListener('mouseenter', () => megaMenu.classList.add('active'));
        megaMenu.addEventListener('mouseleave', () => megaMenu.classList.remove('active'));

        sidebarItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                sidebarItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                renderCategoryContent(item.dataset.category);
            });
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-menu') && !e.target.closest('.mega-menu')) {
                megaMenu.classList.remove('active');
            }
        });

       // ===== MOBILE MENU TOGGLE =====
        const mobileToggle = document.getElementById('mobile-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const closeMenu = document.getElementById('close-menu');
        const mobileCategories = document.getElementById('mobile-categories');
        const subMenu = document.getElementById('sub-menu');

        // Open/close main menu
        if (mobileToggle) {
            mobileToggle.addEventListener('click', () => {
                mobileMenu.classList.add('active');
            });
        }

        if (closeMenu) {
            closeMenu.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        }

        // Toggle categories submenu
        if (mobileCategories) {
            mobileCategories.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevents interference
                subMenu.classList.toggle('active');
            });
        }

        // Auto-close mobile menu when any link is clicked
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                subMenu.classList.remove('active'); // Also close submenu
            });
        });


        // Optional: Trigger animations on scroll (if you want it to animate when scrolled into view)
        document.addEventListener('DOMContentLoaded', function () {
            const heroSection = document.getElementById('hero');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });

            observer.observe(heroSection);
        });



        // Optional: Animate cards as they scroll into view
        document.addEventListener('DOMContentLoaded', function () {
            const cards = document.querySelectorAll('.category-card');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });

            cards.forEach(card => observer.observe(card));
        });


        // ===== ANIMATE SECTION ON LOAD =====
        document.addEventListener('DOMContentLoaded', () => {
            const featuredSection = document.querySelector('.featured-products');
            setTimeout(() => {
                featuredSection.classList.add('visible');
            }, 300); // Delay for smoother page load
        });






//SHOE SECTION 1 & 2
    document.addEventListener('DOMContentLoaded', function () {
        const container = document.querySelector('.quality-shoe-scroll-container');
        const arrow = document.querySelector('.quality-shoe-scroll-right-arrow');

        if (container && arrow) {
            function updateArrow() {
                const maxScroll = container.scrollWidth - container.clientWidth;
                const isAtEnd = container.scrollLeft >= maxScroll - 10;
                const hasOverflow = container.scrollWidth > container.clientWidth;
                arrow.style.opacity = hasOverflow && !isAtEnd ? '1' : '0';
                arrow.style.pointerEvents = hasOverflow && !isAtEnd ? 'auto' : 'none';
            }

            arrow.addEventListener('click', () => {
                const card = container.querySelector('.quality-shoe-card');
                const cardWidth = card ? card.offsetWidth + 16 : 200;
                container.scrollBy({ left: cardWidth, behavior: 'smooth' });
            });

            container.addEventListener('scroll', updateArrow);
            window.addEventListener('load', updateArrow);
            setTimeout(updateArrow, 300);
        }
    });





//SHOE SECTION 3
    document.addEventListener('DOMContentLoaded', function () {
        const container = document.querySelector('.s-scroll-container');
        const arrow = document.querySelector('.s-scroll-right-arrow');

        if (container && arrow) {
            function updateArrow() {
                const maxScroll = container.scrollWidth - container.clientWidth;
                const isAtEnd = container.scrollLeft >= maxScroll - 10;
                const hasOverflow = container.scrollWidth > container.clientWidth;
                arrow.style.opacity = hasOverflow && !isAtEnd ? '1' : '0';
                arrow.style.pointerEvents = hasOverflow && !isAtEnd ? 'auto' : 'none';
            }

            arrow.addEventListener('click', () => {
                const card = container.querySelector('.s-card');
                const cardWidth = card ? card.offsetWidth + 16 : 200;
                container.scrollBy({ left: cardWidth, behavior: 'smooth' });
            });

            

            container.addEventListener('scroll', updateArrow);
            window.addEventListener('load', updateArrow);
            setTimeout(updateArrow, 300);
        }
    });




        //FEATURED PRODUCTS
        document.addEventListener('DOMContentLoaded', () => {
            const section = document.getElementById('featured-clothes-section');

            if (!section) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            section.classList.add('animate');
                            observer.unobserve(section); // Trigger only once
                        }
                    });
                },
                {
                    threshold: 0.1 // Trigger when 10% of the section is visible
                }
            );

            observer.observe(section);
        });

        // category section animation

        document.addEventListener('DOMContentLoaded', () => {
            const section = document.getElementById('shop-categories-section');
            if (!section) return;

            // Observe section for entrance
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            section.classList.add('visible');
                            observer.unobserve(section);
                        }
                    });
                },
                { threshold: 0.1 }
            );

            observer.observe(section);
        });


        //footer
        // Adds a subtle hover animation on scroll
        document.addEventListener("DOMContentLoaded", () => {
            const columns = document.querySelectorAll(".shopcat-column");

            const revealOnScroll = () => {
                const triggerPoint = window.innerHeight * 0.9;
                columns.forEach(col => {
                    const colTop = col.getBoundingClientRect().top;
                    if (colTop < triggerPoint) {
                        col.classList.add("shopcat-visible");
                    }
                });
            };

            window.addEventListener("scroll", revealOnScroll);
            revealOnScroll();
        });









        //CLOTHES SECTION ROTATING ELEMENTS
        document.addEventListener('DOMContentLoaded', () => {

            document.querySelectorAll('.shoes-size-selector').forEach(el => el.remove());


            const productImageSets = [
                // Card 1 (sports)
                ["Images/TeamJerseys.jpg",
                    "Images/TeamJerseys1.jpg",
                    "Images/TeamJerseys2.jpg"
                ],

                ["Images/TeamJerseys3.jpg",
                    "Images/TeamJerseys4.jpg",
                    "Images/TeamJerseys5.jpg"
                ],

                ["Images/TeamJerseys6.jpg",
                    "Images/TeamJerseys7.jpg",
                    "Images/TeamJerseys8.jpg"
                ],

                ["Images/TeamJerseys9.jpg",
                    "Images/TeamJerseys10.jpg",
                    "Images/TeamJerseys11.jpg",
                    "Images/TeamJerseys12.jpg",
                ],

                ["Images/TeamJerseys13.jpg",
                    "Images/TeamJerseys14.jpg",
                    "Images/TeamJerseys15.jpg"
                ],

                ["Images/TeamJerseys16.jpg",
                    "Images/TeamJerseys17.jpg",
                    "Images/TeamJerseys18.jpg"
                ],

                ["Images/TeamJerseys19.jpg",
                    "Images/TeamJerseys20.jpg",
                    "Images/TeamJerseys21.jpg"
                ],

                ["Images/TeamJerseys22.jpg",
                    "Images/TeamJerseys23.jpg",
                    "Images/TeamJerseys24.jpg"]
            ];

            // Apply image rotation to all product cards
            document.querySelectorAll('.shoes-product-card').forEach((card, index) => {
                const imgElement = card.querySelector('.shoes-image');
                const images = productImageSets[index] || productImageSets[0]; // Fallback to first set if undefined
                let currentIndex = 0;

                // Set initial image
                imgElement.src = images[0];

                // Rotate images every 3 seconds
                if (images.length > 1) {
                    setInterval(() => {
                        currentIndex = (currentIndex + 1) % images.length;
                        imgElement.src = images[currentIndex];
                    }, 4000);
                }
            });
        });






    //PHONES SECTION
    // === ANIMATE CATEGORIES ON SCROLL INTO VIEW ===
    const catItems = document.querySelectorAll('.phone-cat-item');
    const catSection = document.getElementById('phoneCatSection');

    const catObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                catItems.forEach((item, i) => {
                    setTimeout(() => {
                        item.classList.add('animate-in');
                    }, i * 100); // Staggered entrance
                });
            }
        });
    }, { threshold: 0.1 });

    catObserver.observe(catSection);

    // === BACK TO TOP ===
    const backBtn = document.getElementById('backToTopBtn');
    backBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        backBtn.classList.toggle('visible', window.scrollY > 300);
    });

    // === OFFER CARD CLICKS ===
    document.querySelectorAll('.phone-offer-card').forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('.offer-title').textContent;
            alert(`You clicked on: ${title}`);
        });
    });

    // === SEE ALL LINK ===
    document.querySelector('.see-all-link').addEventListener('click', (e) => {
        e.preventDefault();
        alert('Navigate to all phone offers page');
    });

    // === DISCOUNT BADGE HOVER ===
    document.querySelectorAll('.offer-discount').forEach(badge => {
        badge.addEventListener('mouseenter', () => {
            badge.style.transform = 'scale(1.1)';
        });
        badge.addEventListener('mouseleave', () => {
            badge.style.transform = 'scale(1)';
        });
    });








               document.addEventListener('DOMContentLoaded', () => {
            const section = document.getElementById('featured-clothes-section');

            if (!section) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            section.classList.add('animate');
                            observer.unobserve(section); // Trigger only once
                        }
                    });
                },
                {
                    threshold: 0.1 // Trigger when 10% of the section is visible
                }
            );

            observer.observe(section);
        });



//LAPTOPS
   // Scrolling logic only (no specs toggle needed)
    document.addEventListener('DOMContentLoaded', function () {
        const container = document.querySelector('.laptop-scroll-container');
        const arrow = document.querySelector('.laptop-scroll-right-arrow');

        if (container && arrow) {
            function updateArrow() {
                const maxScroll = container.scrollWidth - container.clientWidth;
                const isAtEnd = container.scrollLeft >= maxScroll - 10;
                const hasOverflow = container.scrollWidth > container.clientWidth;
                arrow.style.opacity = hasOverflow && !isAtEnd ? '1' : '0';
                arrow.style.pointerEvents = hasOverflow && !isAtEnd ? 'auto' : 'none';
            }

            arrow.addEventListener('click', () => {
                const card = container.querySelector('.laptop-product-card');
                const cardWidth = card ? card.offsetWidth + 16 : 200;
                container.scrollBy({ left: cardWidth, behavior: 'smooth' });
            });

            container.addEventListener('wheel', e => {
                if (e.deltaY !== 0) {
                    e.preventDefault();
                    container.scrollLeft += e.deltaY;
                }
            }, { passive: false });

            container.addEventListener('scroll', updateArrow);
            window.addEventListener('load', updateArrow);
            setTimeout(updateArrow, 300);
        }
    });     






//JESEY SECTION
    // Fade-in animation on load
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.jersey-featured').forEach(section => {
            section.classList.add('visible');
        });
    });





//section 3 art pieces
    document.querySelector('.sec3-nav-arrow.right-arrow').addEventListener('click', function () {
        const container = document.querySelector('.sec3-grid-container');
        // Scrolls the container 300 pixels to the right
        container.scrollLeft += 300;
    });








    //T-SHIRTS
                    document.addEventListener('DOMContentLoaded', function () {
                            const container = document.getElementById('t-shirts-container');
                            const btn = document.getElementById('t-shirts-scroll-btn');

                            if (!container || !btn) return;

                            // Update button visibility
                            function updateButtonVisibility() {
                                const maxScroll = container.scrollWidth - container.clientWidth;
                                const isAtEnd = container.scrollLeft >= maxScroll - 5;
                                const hasOverflow = container.scrollWidth > container.clientWidth;

                                if (hasOverflow && !isAtEnd) {
                                    btn.style.opacity = '1';
                                    btn.style.pointerEvents = 'auto';
                                } else {
                                    btn.style.opacity = '0';
                                    btn.style.pointerEvents = 'none';
                                }
                            }

                            // Scroll right button
                            btn.addEventListener('click', () => {
                                const cardWidth = container.querySelector('.t-shirts-product-card')?.offsetWidth || 160;
                                const scrollAmount = Math.min(
                                    cardWidth * 1.5,
                                    container.scrollWidth - container.scrollLeft - container.clientWidth
                                );
                                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                            });

                            // SMART WHEEL HANDLER: Only intercept horizontal scroll
                            container.addEventListener('wheel', (e) => {
                                // Allow vertical page scroll to work normally
                                if (!e.deltaX && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                                    // This is a vertical scroll → DO NOT prevent default
                                    return;
                                }

                                // Horizontal scroll (or diagonal): handle it
                                e.preventDefault();
                                container.scrollLeft += e.deltaX || e.deltaY; // Use deltaX if available, else fall back to deltaY for mouse
                            }, { passive: false });

                            // Update on scroll and resize
                            container.addEventListener('scroll', updateButtonVisibility);
                            window.addEventListener('resize', updateButtonVisibility);
                            setTimeout(updateButtonVisibility, 100);
                        });
    








       //FOOTER 
        
            document.addEventListener("DOMContentLoaded", () => {
                const columns = document.querySelectorAll(".shopcat-column");

                const revealOnScroll = () => {
                    const triggerPoint = window.innerHeight * 0.9;
                    columns.forEach(col => {
                        const colTop = col.getBoundingClientRect().top;
                        if (colTop < triggerPoint) {
                            col.classList.add("shopcat-visible");
                        }
                    });
                };

                window.addEventListener("scroll", revealOnScroll);
                revealOnScroll();
            });




           

            