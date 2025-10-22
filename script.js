
// ===== HERO IMAGE ROTATION (Mobile & Tablet Compatible) =====
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










document.addEventListener('DOMContentLoaded', () => {
  // Only target sections that should animate on scroll
  const animatedSections = document.querySelectorAll('.animate-on-scroll');

  if (animatedSections.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: stop observing after animation for performance
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

