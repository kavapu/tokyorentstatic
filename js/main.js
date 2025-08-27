// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // FAQ Accordion Functionality
    window.toggleFAQ = function(index) {
        const faqItem = document.querySelectorAll('.faq-item')[index];
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    };

    // Flat Details Modal
    const modal = document.getElementById('flatModal');
    const modalContent = document.getElementById('modalContent');
    const closeBtn = document.querySelector('.close');

    // Sample flat data for modal (in a real app, this would come from the server)
    const flatData = {
        1: {
            title: "Cozy Studio in Shibuya",
            price: "¥80,000/month",
            location: "Shibuya, Tokyo",
            size: "25㎡",
            bedrooms: 1,
            description: "Modern studio apartment in the heart of Shibuya, perfect for singles or couples.",
            amenities: ["Fully furnished", "Kitchen", "Bathroom", "WiFi", "Air conditioning", "Washing machine"],
            nearby: ["Shibuya Station (5 min walk)", "Shopping centers", "Restaurants", "Parks"],
            images: ["/images/flat1-1.jpg", "/images/flat1-2.jpg", "/images/flat1-3.jpg"]
        },
        2: {
            title: "Traditional Apartment in Asakusa",
            price: "¥65,000/month",
            location: "Asakusa, Tokyo",
            size: "30㎡",
            bedrooms: 1,
            description: "Charming traditional apartment near Senso-ji Temple with authentic Japanese atmosphere.",
            amenities: ["Traditional furnishings", "Kitchen", "Bathroom", "WiFi", "Heating", "Balcony"],
            nearby: ["Senso-ji Temple", "Asakusa Station", "Traditional shops", "Riverside"],
            images: ["/images/flat2-1.jpg", "/images/flat2-2.jpg", "/images/flat2-3.jpg"]
        }
        // Add more flat data as needed
    };

    // Add click event to flat detail buttons
    document.querySelectorAll('.flat-details-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const flatId = this.getAttribute('data-flat-id');
            const flat = flatData[flatId];
            
            if (flat) {
                modalContent.innerHTML = `
                    <h2>${flat.title}</h2>
                    <div class="modal-flat-details">
                        <div class="modal-flat-image">
                            <div class="flat-placeholder">
                                <i class="fas fa-home"></i>
                                <p>${flat.title}</p>
                            </div>
                        </div>
                        <div class="modal-flat-info">
                            <div class="modal-price">${flat.price}</div>
                            <div class="modal-location">
                                <i class="fas fa-map-marker-alt"></i> ${flat.location}
                            </div>
                            <div class="modal-specs">
                                <span><i class="fas fa-ruler-combined"></i> ${flat.size}</span>
                                <span><i class="fas fa-bed"></i> ${flat.bedrooms} Bedroom${flat.bedrooms > 1 ? 's' : ''}</span>
                            </div>
                            <p class="modal-description">${flat.description}</p>
                            
                            <div class="modal-amenities">
                                <h4>Amenities:</h4>
                                <ul>
                                    ${flat.amenities.map(amenity => `<li><i class="fas fa-check"></i> ${amenity}</li>`).join('')}
                                </ul>
                            </div>
                            
                            <div class="modal-nearby">
                                <h4>Nearby:</h4>
                                <ul>
                                    ${flat.nearby.map(item => `<li><i class="fas fa-map-marker-alt"></i> ${item}</li>`).join('')}
                                </ul>
                            </div>
                            
                            <div class="modal-actions">
                                <a href="/apply?flat=${flatId}" class="btn btn-primary">Apply Now</a>
                                <button class="btn btn-secondary" onclick="closeModal()">Close</button>
                            </div>
                        </div>
                    </div>
                `;
                modal.style.display = 'block';
            }
        });
    });

    // Close modal when clicking the close button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal function
    window.closeModal = function() {
        modal.style.display = 'none';
    };

    // Form validation and enhancement
    const applyForm = document.querySelector('.apply-form');
    if (applyForm) {
        // Set minimum date for move-in date to today
        const moveInDateInput = document.getElementById('moveInDate');
        if (moveInDateInput) {
            const today = new Date().toISOString().split('T')[0];
            moveInDateInput.setAttribute('min', today);
        }

        // Real-time form validation
        const requiredFields = applyForm.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            field.addEventListener('blur', function() {
                validateField(this);
            });
        });

        // Form submission enhancement
        applyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate all required fields
            let isValid = true;
            requiredFields.forEach(field => {
                if (!validateField(field)) {
                    isValid = false;
                }
            });

            if (isValid) {
                // Show loading state
                const submitBtn = applyForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Submitting...';
                submitBtn.disabled = true;

                // Submit form
                setTimeout(() => {
                    applyForm.submit();
                }, 1000);
            }
        });
    }

    // Field validation function
    function validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';

        // Remove existing error styling
        field.classList.remove('error');
        const existingError = field.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        // Validation rules
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required.';
        } else if (fieldName === 'email' && value && !isValidEmail(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address.';
        } else if (fieldName === 'phone' && value && !isValidPhone(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number.';
        } else if (fieldName === 'budget' && value) {
            const budget = parseInt(value);
            if (budget < 50000 || budget > 300000) {
                isValid = false;
                errorMessage = 'Budget must be between ¥50,000 and ¥300,000.';
            }
        }

        // Apply error styling and message
        if (!isValid) {
            field.classList.add('error');
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = errorMessage;
            errorDiv.style.color = '#dc2626';
            errorDiv.style.fontSize = '0.875rem';
            errorDiv.style.marginTop = '0.25rem';
            field.parentNode.appendChild(errorDiv);
        }

        return isValid;
    }

    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Phone validation
    function isValidPhone(phone) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation for images (placeholder for real images)
    document.querySelectorAll('.flat-placeholder').forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            // Simulate image loading
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i><p>Loading image...</p>';
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-home"></i><p>Image loaded</p>';
            }, 2000);
        });
    });

    // Add some interactive animations
    document.querySelectorAll('.feature-card, .flat-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add scroll-based animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-card, .flat-card, .faq-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add some CSS for error states
const style = document.createElement('style');
style.textContent = `
    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
        border-color: #dc2626;
        box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
    }
    
    .modal-flat-details {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 2rem;
    }
    
    .modal-flat-image {
        text-align: center;
    }
    
    .modal-flat-info {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    .modal-price {
        font-size: 1.5rem;
        font-weight: 600;
        color: #2563eb;
    }
    
    .modal-amenities ul,
    .modal-nearby ul {
        list-style: none;
        padding: 0;
    }
    
    .modal-amenities li,
    .modal-nearby li {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
    }
    
    .modal-amenities i,
    .modal-nearby i {
        margin-right: 0.5rem;
        color: #2563eb;
    }
    
    .modal-actions {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
    }
    
    @media (max-width: 768px) {
        .modal-flat-details {
            grid-template-columns: 1fr;
        }
        
        .modal-actions {
            flex-direction: column;
        }
    }
`;
document.head.appendChild(style);


