        // Click Event Demo
        document.getElementById('clickDemo').addEventListener('click', function() {
            document.getElementById('clickOutput').textContent = "Button clicked! 🎉";
            this.textContent = "Clicked!";
        });
        
        // Hover Event Demo
        const hoverArea = document.getElementById('hoverArea');
        hoverArea.addEventListener('mouseenter', function() {
            document.getElementById('hoverOutput').textContent = "Mouse is hovering!";
            this.style.background = '#bfdbfe';
        });
        
        hoverArea.addEventListener('mouseleave', function() {
            document.getElementById('hoverOutput').textContent = "Mouse left the area";
            this.style.background = '#e2e8f0';
        });
        
        // Key Event Demo
        document.getElementById('keyInput').addEventListener('keyup', function(e) {
            document.getElementById('keyOutput').textContent = 
                `You pressed: ${e.key} (KeyCode: ${e.keyCode})`;
        });
// Form Submission Demo
        document.getElementById('formDemo').addEventListener('submit', function(e) {
            e.preventDefault();
            document.getElementById('formOutput').textContent = "Form submitted!";
        });
        
        // Event Bubbling Demo
        document.getElementById('bubbleInner').addEventListener('click', function(e) {
            document.getElementById('bubbleOutput').textContent += " → Inner div clicked";
        });
        
        document.getElementById('bubbleOuter').addEventListener('click', function() {
            document.getElementById('bubbleOutput').textContent += " → Outer div clicked";
        });
