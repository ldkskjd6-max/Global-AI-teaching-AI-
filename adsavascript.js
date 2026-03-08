/* script.js – Dynamic greeting for Global AI Teaching, धोजा शिंदे */

// Function to update greeting based on time of day
function setDynamicGreeting() {
    // Select the greeting element (class "greeting")
    const greetingEl = document.querySelector('.greeting');
    if (!greetingEl) return;

    // Get current hour (0–23)
    const currentHour = new Date().getHours();
    let greetingText = 'नमस्कार!'; // default

    if (currentHour >= 5 && currentHour < 12) {
        greetingText = 'शुभ सकाळ!';
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingText = 'शुभ दुपार!';
    } else {
        greetingText = 'शुभ संध्याकाळ!';
    }

    // Preserve the icon and the rest of the message, only change the greeting word
    // The current structure: <i class="fas fa-handshake"></i> नमस्कार! आता मोबाईलचा...
    // We'll replace the part after the icon until the first '!' (or simply reconstruct)
    const iconHtml = '<i class="fas fa-handshake"></i>';
    const messageBody = ' आता मोबाईलचा वापर फक्त टाईमपाससाठी नाही, तर प्रगतीसाठी करा! आपल्या गावात पहिल्यांदाच सुरू होत आहे \'Artificial Intelligence (AI)\' चे प्रॉक्टिकल क्लासेस.';
    
    greetingEl.innerHTML = `${iconHtml} ${greetingText}${messageBody}`;
}

// Execute after DOM is fully loaded
document.addEventListener('DOMContentLoaded', setDynamicGreeting);