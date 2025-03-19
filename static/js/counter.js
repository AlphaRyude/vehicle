// Counter animation for statistics section
document.addEventListener('DOMContentLoaded', () => {
    const stats = document.querySelectorAll('.stat-number');
    let animated = false;

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const getRandomTarget = (currentTarget) => {
        switch(currentTarget) {
            case '7000': return getRandomNumber(7000, 7500);
            case '56': return getRandomNumber(50, 60);
            case '127': return getRandomNumber(120, 130);
            case '589': return getRandomNumber(580, 600);
            case '93': return getRandomNumber(90, 95);
            default: return parseInt(currentTarget);
        }
    };

    const animateValue = (obj, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentValue = Math.floor(progress * (end - start) + start);
            const formattedValue = currentValue >= 1000 ? 
                currentValue.toLocaleString('en-US') : 
                currentValue;
            obj.textContent = formattedValue + (obj.closest('.stat-item').querySelector('.stat-label').textContent.includes('%') ? '%' : '');
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    const startAnimation = () => {
        if (animated) return;
        animated = true;
        stats.forEach(stat => {
            const originalTarget = stat.dataset.target;
            const randomTarget = getRandomTarget(originalTarget);
            animateValue(stat, 0, randomTarget, 2000);
        });
    };

    // Start animation immediately and on scroll
    const handleScroll = () => {
        const statsSection = document.querySelector('.statistics');
        if (!statsSection) return;

        const rect = statsSection.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.75);

        if (isVisible) {
            startAnimation();
            window.removeEventListener('scroll', handleScroll);
        }
    };

    // Initial check for visibility
    handleScroll();
    if (!animated) {
        window.addEventListener('scroll', handleScroll);
    }
});