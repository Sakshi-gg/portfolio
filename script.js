// STARFIELD BACKGROUND ANIMATION ENGINE
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
            speed: Math.random() * 0.006 + 0.002, // Kept at slow, non-distracting pace
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
        ctx.fillStyle = `rgba(255, 255, 255, ${op})`; // Brightened to pure glowing white
        ctx.fill();
    });
    requestAnimationFrame(draw);
}

resize();
initStars();
requestAnimationFrame(draw);

window.addEventListener('resize', () => {
    resize();
    initStars();
});

// INTERACTIVE PROJECT TAB SWITCHER ENGINE
function showTab(tab) {
    document.querySelectorAll('.proj-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    
    const targetPanel = document.getElementById('tab-' + tab);
    if (targetPanel) {
        targetPanel.classList.add('active');
    }
    
    if (window.event && window.event.target) {
        window.event.target.classList.add('active');
    }
}
