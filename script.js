// Navigation function
function navigateToPage(page) {
    window.location.href = page;
}

// Add smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
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

    // Add interactive hover effects to cards
    const cards = document.querySelectorAll('.choice-card, .content-card, .benefit-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click animation to buttons
    const buttons = document.querySelectorAll('.explore-btn, .back-home-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add floating animation to emojis
    const emojis = document.querySelectorAll('.card-icon, .logo-icon, .page-icon');
    emojis.forEach(emoji => {
        emoji.addEventListener('mouseenter', function() {
            this.style.animation = 'bounce 0.6s ease-in-out';
        });
        
        emoji.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });

    // Add progressive reveal animation for content cards
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

    // Observe all content cards for animation
    const contentCards = document.querySelectorAll('.content-card');
    contentCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Add interactive affirmations
    const affirmations = document.querySelectorAll('.affirmation');
    affirmations.forEach(affirmation => {
        affirmation.addEventListener('click', function() {
            this.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            this.style.color = 'white';
            this.style.transform = 'scale(1.05)';
            
            setTimeout(() => {
                this.style.background = 'rgba(252, 182, 159, 0.3)';
                this.style.color = '#5a4fcf';
                this.style.transform = 'scale(1)';
            }, 1000);
        });
    });

    // Add interactive features and possibilities
    const features = document.querySelectorAll('.feature, .possibility, .gratitude-item');
    features.forEach(feature => {
        feature.addEventListener('click', function() {
            this.style.background = 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)';
            this.style.transform = 'scale(1.05)';
            
            setTimeout(() => {
                this.style.background = '';
                this.style.transform = 'scale(1)';
            }, 800);
        });
    });

    // Add motivational quotes rotation (if on homepage)
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        const quotes = [
            "✨ You are capable of amazing things! ✨",
            "🌟 Your journey to growth starts with a single step 🌟",
            "💫 Believe in yourself - you're stronger than you think 💫",
            "🌈 Every day is a new opportunity to become better 🌈",
            "🦋 Transform your thoughts, transform your life 🦋"
        ];
        
        const footerText = document.querySelector('.footer-content p');
        if (footerText) {
            let currentQuote = 0;
            setInterval(() => {
                footerText.style.opacity = '0';
                setTimeout(() => {
                    footerText.textContent = quotes[currentQuote];
                    footerText.style.opacity = '1';
                    currentQuote = (currentQuote + 1) % quotes.length;
                }, 300);
            }, 4000);
        }
    }

    // Add success celebration for SMART goals
    const smartItems = document.querySelectorAll('.smart-item');
    smartItems.forEach(item => {
        item.addEventListener('click', function() {
            const letter = this.querySelector('.smart-letter');
            letter.style.animation = 'bounce 0.6s ease-in-out';
            this.style.background = 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';
            this.style.color = 'white';
            
            setTimeout(() => {
                letter.style.animation = '';
                this.style.background = 'rgba(252, 182, 159, 0.1)';
                this.style.color = '';
            }, 1200);
        });
    });

    // Add interactive tip highlighting
    const tipItems = document.querySelectorAll('.tip-item, .method, .strategy-point');
    tipItems.forEach(tip => {
        tip.addEventListener('click', function() {
            this.style.background = 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)';
            this.style.transform = 'scale(1.02)';
            
            setTimeout(() => {
                this.style.background = '';
                this.style.transform = 'scale(1)';
            }, 1000);
        });
    });

    // Add progress tracking for study tips
    if (window.location.pathname.includes('study-tips.html')) {
        let completedTips = 0;
        const totalTips = document.querySelectorAll('.tip-item, .method, .food-category').length;
        
        document.querySelectorAll('.tip-item, .method, .food-category').forEach(tip => {
            tip.addEventListener('click', function() {
                if (!this.classList.contains('completed')) {
                    this.classList.add('completed');
                    this.style.background = 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';
                    this.style.color = 'white';
                    completedTips++;
                    
                    if (completedTips === totalTips) {
                        setTimeout(() => {
                            alert('🎉 Congratulations! You\'ve reviewed all study tips! Your brain is ready for success! 🧠✨');
                        }, 500);
                    }
                }
            });
        });
    }

    // Add confidence boost for mental health page
    if (window.location.pathname.includes('mental-health.html')) {
        const confidenceTips = document.querySelectorAll('.confidence-tip, .wisdom-item');
        confidenceTips.forEach(tip => {
            tip.addEventListener('click', function() {
                this.style.background = 'linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)';
                this.style.transform = 'scale(1.02)';
                
                // Add sparkle effect
                const sparkle = document.createElement('span');
                sparkle.innerHTML = '✨';
                sparkle.style.position = 'absolute';
                sparkle.style.fontSize = '1.5rem';
                sparkle.style.animation = 'sparkle 1s ease-out forwards';
                sparkle.style.pointerEvents = 'none';
                this.style.position = 'relative';
                this.appendChild(sparkle);
                
                setTimeout(() => {
                    this.style.background = '';
                    this.style.transform = 'scale(1)';
                    sparkle.remove();
                }, 1200);
            });
        });
    }
});

// Add CSS for ripple effect and sparkle animation
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes sparkle {
        0% {
            transform: translateY(0) scale(0);
            opacity: 1;
        }
        50% {
            transform: translateY(-20px) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-40px) scale(0);
            opacity: 0;
        }
    }
    
    .completed {
        position: relative;
    }
    
    .completed::after {
        content: '✓';
        position: absolute;
        top: 10px;
        right: 15px;
        color: white;
        font-weight: bold;
        font-size: 1.2rem;
    }
`;
document.head.appendChild(style);

