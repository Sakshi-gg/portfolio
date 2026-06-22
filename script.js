// STARFIELD ANIMATION ENGINE
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let stars = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function initStars() {
    stars = [];
    for (let i = 0; i < 260; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.6 + 0.2,
            o: Math.random() * 0.6 + 0.1,
            speed: Math.random() * 0.012 + 0.003,
            phase: Math.random() * Math.PI * 2
        });
    }
}

function draw(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
        const op = s.o * (0.5 + 0.5 * Math.sin(t * s.speed + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 215, 255, ${op})`;
        ctx.fill();
    });
    requestAnimationFrame(draw);
}

// Event Listeners for Starfield
resize();
initStars();
requestAnimationFrame(draw);
window.addEventListener('resize', () => {
    resize();
    initStars();
});

// INTERACTIVE PROJECT TAB SWITCHER
function showTab(tabId, event) {
    // Hide all project grid panels
    document.querySelectorAll('.proj-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    // Deactivate all tab control buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Display the targeted grid panel
    const targetPanel = document.getElementById('tab-' + tabId);
    if (targetPanel) {
        targetPanel.classList.add('active');
    }
    
    // Set clicked button state to active
    if (event && event.target) {
        event.target.classList.add('active');
    }
}
