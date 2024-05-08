document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const searchForm = document.getElementById("search-form");

    // Clear input field when focused
    searchInput.addEventListener("focus", function() {
        this.value = "";
    });

    // Redirect to Google search results page on form submit
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query);
        }
    });
});


function changeLanguage() {
    var languageDropdown = document.getElementById("languageDropdown");
    var selectedLanguage = languageDropdown.value;

    var title = document.getElementById("title");
    var searchInput = document.getElementById("search-input");
    var searchButton = document.querySelector("button[type='submit']");
    var searchForm = document.getElementById("search-form");

    switch (selectedLanguage) {
      case "en":
        // title.textContent = "Google";
        searchInput.placeholder = "Search Google...";
        searchButton.textContent = "Search";
        searchForm.action = "https://www.google.com/search";
        break;
      case "es":
        // title.textContent = "Google";
        searchInput.placeholder = "Buscar en Google...";
        searchButton.textContent = "Buscar";
        searchForm.action = "https://www.google.com/search";
        break;
      case "fr":
        // title.textContent = "Google";
        searchInput.placeholder = "Rechercher sur Google...";
        searchButton.textContent = "Recherche";
        searchForm.action = "https://www.google.com/search";
        break;
      case "de":
        // title.textContent = "Google";
        searchInput.placeholder = "Google durchsuchen...";
        searchButton.textContent = "Suche";
        searchForm.action = "https://www.google.com/search";
        break;
      case "hn":
        // title.textContent = "Google";
        searchInput.placeholder = "Google हिंदी में";
        searchButton.textContent = "खोजो";
        searchForm.action = "https://www.google.com/search";
        break;
        
      // Add more cases for other languages
      default:
        // Default to English
        // title.textContent = "Google";
        searchInput.placeholder = "Search Google...";
        searchButton.textContent = "Search";
        searchForm.action = "https://www.google.com/search";
        break;
    }

    var footerContent = document.getElementById("footerContent");
    var links = footerContent.getElementsByTagName("a");

    for (var i = 0; i < links.length; i++) {
        var text = links[i].textContent;

        // Example translation for demonstration purposes
        if (text === "About") {
            links[i].textContent = "Sobre";
        } else if (text === "Advertising") {
            links[i].textContent = "Publicidad";
        } else if (text === "Business") {
            links[i].textContent = "Negocios";
        } else if (text === "How Search works") {
            links[i].textContent = "Cómo funciona la búsqueda";
        } else if (text === "Privacy") {
            links[i].textContent = "Privacidad";
        } else if (text === "Terms") {
            links[i].textContent = "Términos";
        } else if (text === "Settings") {
            links[i].textContent = "Configuración";
        }
    }
    
  }


  