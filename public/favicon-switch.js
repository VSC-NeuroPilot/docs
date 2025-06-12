(function() {
  'use strict';

  // Function to update the favicon based on the current theme.
  function updateFavicon() {
    var theme = document.documentElement.getAttribute('data-theme');
    // Set the favicon based on your theme configuration
    var faviconUrl = theme === 'dark'
      ? '/neuropilot/evilpilot.svg'
      : '/neuropilot/neuropilot.svg';

    // Try to find an existing favicon link element:
    var faviconLink = document.querySelector("link[rel~='icon']");
    
    // If one exists, update its href. Otherwise, create one.
    if (faviconLink) {
      faviconLink.href = faviconUrl;
    } else {
      faviconLink = document.createElement('link');
      faviconLink.rel = 'icon';
      faviconLink.href = faviconUrl;
      document.head.appendChild(faviconLink);
    }
  }

  // Initial favicon update
  updateFavicon();

  // Observe for changes in data-theme on the <html> element
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === 'data-theme') {
        updateFavicon();
      }
    });
  });

  observer.observe(document.documentElement, { attributes: true });

  // Expose updateFavicon to window for manual triggering if needed
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = updateFavicon;
  } else {
    window.updateFavicon = updateFavicon;
  }
})();