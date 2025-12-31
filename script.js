// New Year 2026 countdown - January 1, 2026
const newYear2026 = new Date('2026-01-01T00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = newYear2026 - now;
    
    console.log('Current time:', new Date(now));
    console.log('Target time:', new Date(newYear2026));
    console.log('Time left (ms):', timeLeft);
    
    if (timeLeft > 0) {
        // Calculate time units
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        console.log(`Time remaining: ${days}d ${hours}h ${minutes}m ${seconds}s`);
        
        // Update the display with leading zeros
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        
        // Add special animation when seconds change
        const secondElement = document.getElementById('seconds');
        secondElement.style.transform = 'scale(1.1)';
        setTimeout(() => {
            secondElement.style.transform = 'scale(1)';
        }, 200);
        
    } else {
        // Chinese New Year has arrived!
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        
        // Show celebration message
        showCelebration();
    }
}

function showCelebration() {
    const countdownSection = document.querySelector('.countdown-section');
    
    // Prevent duplicate celebrations
    if (document.querySelector('.celebration-container')) {
        return;
    }

    const countdownDisplay = document.querySelector('.countdown-display');
    const countdownTitle = document.querySelector('.countdown-title');
    
    // Hide the countdown numbers
    if (countdownDisplay) countdownDisplay.style.display = 'none';
    if (countdownTitle) countdownTitle.style.display = 'none';
    
    // Create celebration container
    const celebrationContainer = document.createElement('div');
    celebrationContainer.className = 'celebration-container';
    celebrationContainer.innerHTML = `
        <h1 class="celebration-title"><span class="emoji">🎉</span> Happy New Year 2026! <span class="emoji">🎊</span></h1>
        <div class="celebration-text">
            <p>Welcome to 2026 Cherry hehe <span class="emoji">💕</span></p>
            <p>Happy New Year <33 <span class="emoji">🌟</span></p>
            <p>Open the letter below  <span class="emoji">😉</span></p>
        </div>
    `;
    
    countdownSection.appendChild(celebrationContainer);
    
    // Trigger intense fireworks
    window.fireworkChance = 0.4; // Increase frequency significantly
    console.log('🎆 Fireworks chance increased to 0.4');
    
    // Play fireworks sound
    // Using "Intense Fireworks Show" - heavy, rapid explosions
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2994/2994-preview.mp3');
    audio.volume = 0.3; // 30% volume
    audio.loop = true;
    audio.play().catch(e => console.log('Audio play failed (user interaction required):', e));

    // Launch immediate burst
    for(let i=0; i<10; i++) {
        setTimeout(() => fireworks.push(new Firework()), i * 100);
    }
}

function createCelebrationHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.zIndex = '1000';
        heart.style.pointerEvents = 'none';
        heart.style.animation = `celebration-heart ${Math.random() * 3 + 2}s ease-out forwards`;
        
        document.body.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 5000);
    }
}

// Add celebration heart animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes celebration-heart {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .number {
        transition: transform 0.2s ease-in-out;
    }
`;
document.head.appendChild(style);

// Add romantic background music toggle (optional)
function createMusicToggle() {
    const musicToggle = document.createElement('div');
    musicToggle.innerHTML = `
        <button id="music-toggle" style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(255, 182, 193, 0.8);
            border: 2px solid #ff69b4;
            border-radius: 50px;
            padding: 10px 20px;
            color: #8b0000;
            font-family: 'Playfair Display', serif;
            font-size: 1.1rem;
            cursor: pointer;
            backdrop-filter: blur(10px);
            z-index: 1000;
            transition: all 0.3s ease;
        ">
            🎵 Music
        </button>
    `;
    document.body.appendChild(musicToggle);
    
    document.getElementById('music-toggle').addEventListener('click', function() {
        // You can add audio functionality here if desired
        this.style.background = this.style.background === 'rgba(255, 182, 193, 0.8)' 
            ? 'rgba(144, 238, 144, 0.8)' 
            : 'rgba(255, 182, 193, 0.8)';
    });
}

// Add special effects for different milestones
function checkMilestones(timeLeft) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    
    // Last day countdown - extra fireworks
    if (days === 0) {
        addExtraFireworks();
    }
    
    // Last hour - romantic message
    if (days === 0 && hours === 0) {
        addLastHourMessage();
    }
}

function addExtraFireworks() {
    const fireworksContainer = document.querySelector('.fireworks-container');
    if (!fireworksContainer.querySelector('.extra-firework')) {
        for (let i = 0; i < 3; i++) {
            const firework = document.createElement('div');
            firework.className = 'firework extra-firework';
            firework.style.left = (25 + i * 25) + '%';
            firework.style.animationDelay = (i * 0.5) + 's';
            firework.style.background = ['#ff1744', '#e91e63', '#9c27b0'][i];
            fireworksContainer.appendChild(firework);
        }
    }
}

function addLastHourMessage() {
    if (!document.querySelector('.last-hour-message')) {
        const message = document.createElement('div');
        message.className = 'last-hour-message';
        message.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(255, 255, 255, 0.95);
                padding: 30px;
                border-radius: 20px;
                text-align: center;
                font-family: 'Playfair Display', serif;
                font-size: 1.5rem;
                color: #8b0000;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                z-index: 2000;
                border: 3px solid #ff69b4;
                animation: gentle-pulse 2s ease-in-out infinite;
            ">
                ✨ Less than an hour left, my love! ✨<br>
                <small style="font-size: 1.2rem; color: #666;">
                    Our magical moment is almost here! 💕
                </small>
            </div>
        `;
        document.body.appendChild(message);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            if (message.parentNode) {
                message.parentNode.removeChild(message);
            }
        }, 5000);
    }
}

// Initialize the countdown
updateCountdown();
setInterval(() => {
    updateCountdown();
    const now = new Date().getTime();
    const timeLeft = newYear2026 - now;
    checkMilestones(timeLeft);
}, 1000);

// Add music toggle on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Page loaded, initializing...');
    initializeEnvelope();
    
    // Add backup click detection for the entire document
    document.addEventListener('click', function(e) {
        const envelope = document.getElementById('envelope');
        // Check if the click was on the envelope or any of its children
        if (envelope && (e.target === envelope || envelope.contains(e.target))) {
            console.log('🎯 Backup click detector triggered!');
            // Trigger the click event on the envelope if it hasn't been handled
            if (!envelope.classList.contains('opening') && !envelope.classList.contains('opened')) {
                 // Manually trigger the opening logic if needed, but the main listener should catch it.
                 // If we are here, it means the click bubbled up.
                 // Let's try to dispatch a new click event directly to the envelope if it wasn't the target
                 if (e.target !== envelope) {
                     // This might cause a loop if not careful, but since we check for 'opening' class it should be fine.
                     // Actually, better to just call the open logic if we can access it.
                     // Since openEnvelope is scoped, we can't call it directly.
                     // But we can dispatch a custom event or just rely on the fact that the click happened.
                 }
            }
        }
    });
    
    // Add subtle entrance animation to the envelope
    const envelope = document.getElementById('envelope');
    if (envelope) {
        envelope.style.opacity = '0';
        envelope.style.transform = 'translateY(50px) scale(0.9)';
        envelope.style.transition = 'all 1.5s ease-out';
        
        setTimeout(() => {
            envelope.style.opacity = '1';
            envelope.style.transform = 'translateY(0) scale(1)';
        }, 500);
        
        // Add a visible indicator that it's clickable
        // Removed dynamic indicator as per user request
        
        // Fail-safe: Add a fixed button at the bottom if still not opened after 8 seconds
        // Removed fail-safe button as per user request
    }
});

// Add romantic cursor trail effect
document.addEventListener('mousemove', function(e) {
    if (Math.random() < 0.1) { // Only create trails occasionally to avoid performance issues
        const heart = document.createElement('div');
        heart.innerHTML = '💕';
        heart.style.position = 'fixed';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        heart.style.fontSize = '12px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '999';
        heart.style.animation = 'fade-out 2s ease-out forwards';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 2000);
    }
});

// Add fade-out animation for cursor trail
const trailStyle = document.createElement('style');
trailStyle.textContent = `
    @keyframes fade-out {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0.5) translateY(-20px);
        }
    }
`;
document.head.appendChild(trailStyle);

// Envelope Opening Functionality - Simplified and More Reliable
function initializeEnvelope() {
    console.log('🎄 Initializing envelope functionality...');
    
    const envelope = document.getElementById('envelope');
    const letterPaper = document.getElementById('letterPaper');
    
    if (!envelope) {
        console.error('❌ Envelope element not found!');
        return;
    }
    
    if (!letterPaper) {
        console.error('❌ Letter paper element not found!');
        return;
    }
    
    console.log('✅ Found envelope and letter elements');
    
    let isOpened = false;
    let isAnimating = false;
    
    // Make envelope very obviously clickable
    envelope.style.cursor = 'pointer';
    envelope.style.border = '3px solid rgba(255, 105, 180, 0.5)';
    envelope.title = 'Click me to open the love letter! 💕';
    
    // Use single click event for reliability
    envelope.addEventListener('click', function(e) {
        console.log('🎯 Envelope click detected!');
        e.preventDefault();
        e.stopPropagation();
        
        // Don't process if already opened
        if (isOpened) {
            console.log('Already opened, ignoring click');
            return;
        }
        
        // Check if it's New Year yet
        const now = new Date().getTime();
        console.log('Current time:', now, 'Target:', newYear2026, 'Is past?', now >= newYear2026);
        
        if (now < newYear2026) {
            // Shake animation
            envelope.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => envelope.style.animation = '', 500);
            
            // Show a toast message
            const toast = document.createElement('div');
            toast.textContent = "Wait for the countdown! 🕰️";
            toast.style.position = 'fixed';
            toast.style.top = '50%';
            toast.style.left = '50%';
            toast.style.transform = 'translate(-50%, -50%)';
            toast.style.background = 'rgba(139, 0, 0, 0.9)';
            toast.style.color = '#ffd700';
            toast.style.padding = '15px 30px';
            toast.style.borderRadius = '25px';
            toast.style.zIndex = '2000';
            toast.style.fontFamily = "'Playfair Display', serif";
            toast.style.fontSize = '1.5rem';
            toast.style.border = '2px solid #ffd700';
            toast.style.animation = 'fade-out 2s forwards';
            toast.style.pointerEvents = 'none';
            document.body.appendChild(toast);
            
            setTimeout(() => toast.remove(), 2000);
            return;
        }

        // Show Password Modal
        const modal = document.getElementById('passwordModal');
        const input = document.getElementById('passwordInput');
        const submitBtn = document.getElementById('submitBtn');
        const cancelBtn = document.getElementById('cancelBtn');
        
        // Don't show if already showing
        if (modal.classList.contains('show')) {
            console.log('Modal already showing');
            return;
        }
        
        console.log('📋 Showing password modal');
        modal.classList.add('show');
        input.value = '';
        setTimeout(() => input.focus(), 100); // Delay focus for mobile
        
        // Handle Submit
        const checkPassword = () => {
            if (input.value === "1025") {
                modal.classList.remove('show');
                console.log('💝 Opening envelope...');
                openEnvelope();
                isOpened = true;
                isAnimating = true;
                envelope.style.pointerEvents = 'none';
            } else {
                input.classList.add('shake');
                setTimeout(() => input.classList.remove('shake'), 400);
                input.value = '';
                input.placeholder = 'Try again...';
            }
        };
        
        // Event Listeners for Modal
        submitBtn.onclick = checkPassword;
        
        cancelBtn.onclick = () => {
            modal.classList.remove('show');
        };
        
        input.onkeypress = (e) => {
            if (e.key === 'Enter') checkPassword();
        };
        
        // Close on outside click
        modal.onclick = (e) => {
            if (e.target === modal) modal.classList.remove('show');
        };

    });
    
    // Visual feedback on hover
    envelope.addEventListener('mouseenter', function() {
        if (!isOpened && !isAnimating) {
            console.log('👆 Hover detected');
            envelope.style.transform = 'translateY(-10px) scale(1.05)';
            envelope.style.boxShadow = '0 30px 60px rgba(128, 0, 32, 0.5)';
        }
    });
    
    envelope.addEventListener('mouseleave', function() {
        if (!isOpened && !isAnimating) {
            envelope.style.transform = 'translateY(0) scale(1)';
            envelope.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5)';
        }
    });

    // Add click listener to letter to close it
    letterPaper.addEventListener('click', function(e) {
        if (isOpened && !isAnimating) {
            console.log('📥 Closing envelope...');
            closeEnvelope();
            e.stopPropagation(); // Prevent bubbling to envelope
        }
    });
    
    function openEnvelope() {
        console.log('🎊 Starting envelope opening animation...');
        
        // Immediate visual feedback
        envelope.style.transform = 'scale(1.1)';
        envelope.style.boxShadow = '0 30px 60px rgba(255, 215, 0, 0.4)';
        
        // Step 1: Flap opens
        setTimeout(() => {
            console.log('📬 Opening flap...');
            envelope.classList.add('opening');
            createOpeningEffects();
        }, 200);
        
        // Step 2: Letter slides out
        setTimeout(() => {
            console.log('💌 Sliding out letter...');
            letterPaper.classList.add('slide-out');
            envelope.classList.add('opened');
            envelope.classList.add('fade-out'); // Fade out envelope
            createLetterMagic();
            animateLetterContent();
        }, 1000);
        
        // Step 3: Cleanup
        setTimeout(() => {
            isAnimating = false;
            console.log('✨ Animation complete!');
        }, 2500);
    }

    function closeEnvelope() {
        isAnimating = true;
        
        // Step 1: Slide letter back in with animation
        letterPaper.classList.remove('slide-out');
        letterPaper.classList.add('closing');
        
        // Step 2: Bring envelope back
        setTimeout(() => {
            envelope.classList.remove('fade-out');
            envelope.classList.remove('opened');
        }, 800);
        
        // Step 3: Close flap
        setTimeout(() => {
            envelope.classList.remove('opening');
            letterPaper.classList.remove('closing'); // Remove closing class after animation
        }, 1500);
        
        // Step 4: Reset state
        setTimeout(() => {
            isOpened = false;
            isAnimating = false;
            envelope.style.pointerEvents = 'auto';
            envelope.style.transform = 'scale(1)'; // Reset scale
            envelope.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5)'; // Reset shadow
            console.log('✨ Envelope closed!');
        }, 2300);
    }
    
    function createLetterMagic() {
        // Create sparkles around the letter as it rises
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.innerHTML = '✨';
                sparkle.style.position = 'fixed'; // Fixed to screen to float up independently
                sparkle.style.left = (50 + (Math.random() * 40 - 20)) + '%'; // Center +/- 20%
                sparkle.style.top = '60%'; // Start from envelope area
                sparkle.style.fontSize = (Math.random() * 20 + 10) + 'px';
                sparkle.style.zIndex = '100';
                sparkle.style.pointerEvents = 'none';
                sparkle.style.animation = `float-up-fade 1.5s ease-out forwards`;
                
                document.body.appendChild(sparkle);
                
                setTimeout(() => {
                    if (sparkle.parentNode) sparkle.parentNode.removeChild(sparkle);
                }, 1500);
            }, i * 50); // Staggered creation
        }
    }
    
    function createOpeningEffects() {
        // Create heart burst effect when opening
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = ['💕', '💖', '💝', '🌹', '✨'][Math.floor(Math.random() * 5)];
            heart.style.position = 'fixed';
            heart.style.left = '50%';
            heart.style.top = '40%';
            heart.style.fontSize = (Math.random() * 15 + 20) + 'px';
            heart.style.zIndex = '1000';
            heart.style.pointerEvents = 'none';
            
            const angle = (Math.PI * 2 * i) / 15;
            const distance = Math.random() * 150 + 100;
            const endX = Math.cos(angle) * distance;
            const endY = Math.sin(angle) * distance;
            
            heart.style.animation = `envelope-burst 2s ease-out forwards`;
            heart.style.setProperty('--end-x', endX + 'px');
            heart.style.setProperty('--end-y', endY + 'px');
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 2000);
        }
        
        // Add glow effect to envelope
        envelope.style.boxShadow = `
            0 30px 60px rgba(128, 0, 32, 0.6),
            0 0 100px rgba(255, 215, 0, 0.4),
            inset 0 2px 10px rgba(255, 255, 255, 0.2)
        `;
    }
    
    function animateLetterContent() {
        const elements = letterPaper.querySelectorAll('.letter-header, .romantic-text, .countdown-section, .love-message, .decorative-hearts');
        
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, (index + 1) * 200);
        });
    }
}

// Add envelope burst animation to CSS
const envelopeStyle = document.createElement('style');
envelopeStyle.textContent = `
    @keyframes envelope-burst {
        0% {
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translate(calc(-50% + var(--end-x)), calc(-50% + var(--end-y))) scale(0.3) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(envelopeStyle);

// Canvas Fireworks Implementation
const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');

let fireworks = [];
let particles = [];
window.fireworkChance = 0.05; // Base probability (global)

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Firework {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height;
        this.sx = Math.random() * 3 - 1.5;
        this.sy = -(Math.random() * 4 + 4);
        this.size = Math.random() * 2 + 1;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.velocity = { x: this.sx, y: this.sy };
    }
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.velocity.y += 0.05; // gravity
        if (this.velocity.y >= 0) {
            this.explode();
            return false;
        }
        return true;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    explode() {
        for (let i = 0; i < 50; i++) {
            particles.push(new Particle(this.x, this.y, this.color));
        }
    }
}

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1;
        this.velocity = {
            x: Math.cos(angle) * speed,
            y: Math.sin(angle) * speed
        };
        this.alpha = 1;
        this.decay = Math.random() * 0.015 + 0.005;
    }
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.velocity.y += 0.05;
        this.alpha -= this.decay;
        return this.alpha > 0;
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }
}

function animateFireworks() {
    ctx.fillStyle = 'rgba(15, 12, 41, 0.2)'; // Trail effect
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (Math.random() < window.fireworkChance) {
        fireworks.push(new Firework());
    }
    fireworks = fireworks.filter(f => {
        f.draw();
        return f.update();
    });
    particles = particles.filter(p => {
        p.draw();
        return p.update();
    });
    requestAnimationFrame(animateFireworks);
}
animateFireworks();
