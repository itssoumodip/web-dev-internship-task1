document.addEventListener('DOMContentLoaded', function() {
    const alertButton = document.getElementById('alertButton');
    const statusElement = document.getElementById('status');
    const resultBox = document.getElementById('interaction-result');
    
    setTimeout(() => {
        document.querySelectorAll('.skill-progress').forEach(skill => {
            skill.style.width = skill.style.width;
        });
    }, 500);
    
    let clickCount = 0;
    
    alertButton.addEventListener('click', function() {
        clickCount++;
        
        statusElement.textContent = 'Button clicked! Processing...';
        statusElement.style.color = '#2c7873';
        
        resultBox.classList.add('processing');
        resultBox.style.backgroundColor = '#e8f4f4';
        
        setTimeout(() => {
            alert('Hello! You just triggered a JavaScript alert. This demonstrates basic interactivity in web development.');
        }, 100);
        
        this.textContent = 'Thanks!';
        
        this.classList.add('clicked');
        
        setTimeout(function() {
            statusElement.textContent = `Interaction successful! (Click count: ${clickCount})`;
            statusElement.style.color = 'green';
            resultBox.style.backgroundColor = '#e8f5e9';
            resultBox.classList.remove('processing');
        }, 1200);
        
        setTimeout(function() {
            alertButton.textContent = 'Click Me Again!';
            alertButton.classList.remove('clicked');
        }, 3000);
    });
    
    const image = document.querySelector('img');
    if (image) {
        image.addEventListener('mouseover', function() {
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        image.addEventListener('mouseout', function() {
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
        });
    }
    
    console.log('JavaScript has been successfully loaded and executed!');
    
    const style = document.createElement('style');
    style.textContent = `
        .clicked {
            animation: buttonPulse 1s;
        }
        
        @keyframes buttonPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        
        .processing {
            transition: all 0.3s ease;
            box-shadow: 0 0 10px rgba(44, 120, 115, 0.3);
        }
    `;
    document.head.appendChild(style);
});