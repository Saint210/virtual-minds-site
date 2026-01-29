// This script will be injected into the iframe to handle real-time changes
(function() {
  // Listen for messages from the parent window
  window.addEventListener('message', function(event) {
    if (event.data.type === 'applyChange') {
      const change = event.data.change;
      applyChangeToPage(change);
    }
  });

  function applyChangeToPage(change) {
    console.log('Applying change:', change);
    
    switch (change.type) {
      case 'hero-headline':
        updateHeroHeadline(change);
        break;
      case 'pricing':
        updatePricing(change);
        break;
      case 'button-text':
        updateButtonText(change);
        break;
      case 'styling':
        updateStyling(change);
        break;
      default:
        console.log('Unknown change type:', change.type);
    }
  }

  function updateHeroHeadline(change) {
    // Find and update hero headlines
    const headlines = document.querySelectorAll('h1, h2, .hero-title, .headline');
    headlines.forEach(headline => {
      if (headline.textContent.includes(change.oldValue) || 
          headline.textContent.toLowerCase().includes('california') ||
          headline.textContent.toLowerCase().includes('psychiatric')) {
        headline.textContent = change.newValue;
        highlightElement(headline);
      }
    });
  }

  function updatePricing(change) {
    // Find and update pricing elements
    const priceElements = document.querySelectorAll('.price, .pricing, [class*="price"], [class*="pricing"]');
    priceElements.forEach(element => {
      if (element.textContent.includes(change.oldValue.replace('$', ''))) {
        element.textContent = change.newValue;
        highlightElement(element);
      }
    });
  }

  function updateButtonText(change) {
    // Find and update buttons
    const buttons = document.querySelectorAll('button, .btn, [class*="button"], [class*="cta"]');
    buttons.forEach(button => {
      if (button.textContent.includes(change.oldValue) || 
          button.textContent.toLowerCase().includes('get started') ||
          button.textContent.toLowerCase().includes('book')) {
        button.textContent = change.newValue;
        highlightElement(button);
      }
    });
  }

  function updateStyling(change) {
    // Apply color changes
    if (change.newValue.toLowerCase().includes('blue')) {
      document.body.style.setProperty('--primary-color', '#3B82F6', 'important');
    } else if (change.newValue.toLowerCase().includes('green')) {
      document.body.style.setProperty('--primary-color', '#10B981', 'important');
    } else if (change.newValue.toLowerCase().includes('red')) {
      document.body.style.setProperty('--primary-color', '#EF4444', 'important');
    }
    
    // Highlight the body to show change
    highlightElement(document.body);
  }

  function highlightElement(element) {
    // Add a temporary highlight effect
    element.style.transition = 'background-color 0.3s';
    element.style.backgroundColor = 'rgba(34, 197, 94, 0.2)';
    
    setTimeout(() => {
      element.style.backgroundColor = '';
    }, 2000);
  }

  // Add a visual indicator that the page is being edited
  function addEditingIndicator() {
    const indicator = document.createElement('div');
    indicator.id = 'vm-editing-indicator';
    indicator.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      background: #10B981;
      color: white;
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 14px;
      font-weight: bold;
      z-index: 9999;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    `;
    indicator.textContent = '🤖 AI Editing Mode Active';
    document.body.appendChild(indicator);
  }

  // Initialize
  addEditingIndicator();
})();
