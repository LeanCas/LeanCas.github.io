document.addEventListener('DOMContentLoaded', function() {
    const terminalContent = document.getElementById('terminal-content');
    const logo = document.getElementById('logo');
    const terminalBox = document.querySelector('.terminal');
    const enterSiteButton = document.getElementById('enter-site');
    const mainContent = document.getElementById('main-content');
    const animatedItems = document.querySelectorAll('.animated-item');
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebarLogo = document.getElementById('sidebar-logo');
    const fixedLogo = document.querySelector('#fixed-logo img');
    const darkModeToggle = document.querySelector('.tdnn');
    const languageToggleButton = document.getElementById('language-toggle-button');

    const translations = {
        fr: {
            homeTitle: "Bienvenue chez Algoseed Labs",
            homeDescription: "Leader dans les solutions innovantes et la technologie de pointe. Découvrez nos services et voyez comment nous pouvons vous aider à atteindre vos objectifs.",
            getStartedButton: "Commencer",
            servicesTitle: "Nos Services",
            servicesSubtitle: "Ce que nous offrons",
            service1Title: "Service 1",
            service1Description: "Description du service 1...",
            service2Title: "Service 2",
            service2Description: "Description du service 2...",
            service3Title: "Service 3",
            service3Description: "Description du service 3...",
            contactTitle: "Nous Contacter",
            contactDescription: "Nous serions ravis de vous entendre. Que vous ayez une question sur nos services ou que vous souhaitiez discuter d'un projet, notre équipe est prête à vous aider.",
            nameLabel: "Nom:",
            emailLabel: "Email:",
            messageLabel: "Message:",
            sendMessageButton: "Envoyer le Message",
            navHome: "Accueil",
            navAbout: "À Propos",
            navServices: "Services",
            navPortfolio: "Portfolio",
            navCaseStudies: "Études de Cas",
            navBlog: "Blog",
            navContact: "Contact",
            loadingText: [
                "Collecte des exigences...",
                "Planification de l'architecture et des conceptions...",
                "Assemblage de l'équipe d'experts...",
                "Création de logiciels et intégrations...",
                "Déploiement sur le cloud...",
                "Sécurisation...",
                "Test des bugs et du trafic...",
                "Formulation de la stratégie de lancement...",
                "Surveillance de l'utilisation et des analyses...",
                "Optimisation...",
                "Terminé !"
            ]
        },
        en: {
            homeTitle: "Welcome to Algoseed Labs",
            homeDescription: "Leading the way in innovative solutions and groundbreaking technology. Discover our services and see how we can help you achieve your goals.",
            getStartedButton: "Get Started",
            servicesTitle: "Our Services",
            servicesSubtitle: "What We Offer",
            service1Title: "Service 1",
            service1Description: "Description of service 1...",
            service2Title: "Service 2",
            service2Description: "Description of service 2...",
            service3Title: "Service 3",
            service3Description: "Description of service 3...",
            contactTitle: "Contact Us",
            contactDescription: "We'd love to hear from you. Whether you have a question about our services or want to discuss a project, our team is ready to assist you.",
            nameLabel: "Name:",
            emailLabel: "Email:",
            messageLabel: "Message:",
            sendMessageButton: "Send Message",
            navHome: "Home",
            navAbout: "About",
            navServices: "Services",
            navPortfolio: "Portfolio",
            navCaseStudies: "Case Studies",
            navBlog: "Blog",
            navContact: "Contact",
            loadingText: [
                "Gathering Requirements...",
                "Planning Architecture and Designs...",
                "Assembling Expert Team ...",
                "Building Software and Integrations..",
                "Deploying On Cloud...",
                "Securing...",
                "Testing For Bugs And Traffic...",
                "Formulating Launch Strategy...",
                "Monitoring Usage and Analytics...",
                "Optimizing ...",
                "Done!"
            ]
        }
    };

    let currentLanguage = 'en';

    function translatePage(language) {
        document.getElementById('home-title').textContent = translations[language].homeTitle;
        document.getElementById('home-description').textContent = translations[language].homeDescription;
        document.getElementById('get-started-button').textContent = translations[language].getStartedButton;
        document.getElementById('services-title').textContent = translations[language].servicesTitle;
        document.getElementById('services-subtitle').textContent = translations[language].servicesSubtitle;
        document.getElementById('service1-title').textContent = translations[language].service1Title;
        document.getElementById('service1-description').textContent = translations[language].service1Description;
        document.getElementById('service2-title').textContent = translations[language].service2Title;
        document.getElementById('service2-description').textContent = translations[language].service2Description;
        document.getElementById('service3-title').textContent = translations[language].service3Title;
        document.getElementById('service3-description').textContent = translations[language].service3Description;
        document.getElementById('contact-title').textContent = translations[language].contactTitle;
        document.getElementById('contact-description').textContent = translations[language].contactDescription;
        document.getElementById('name-label').textContent = translations[language].nameLabel;
        document.getElementById('email-label').textContent = translations[language].emailLabel;
        document.getElementById('message-label').textContent = translations[language].messageLabel;
        document.getElementById('send-message-button').textContent = translations[language].sendMessageButton;
        document.getElementById('nav-home').textContent = translations[language].navHome;
        document.getElementById('nav-about').textContent = translations[language].navAbout;
        document.getElementById('nav-services').textContent = translations[language].navServices;
        document.getElementById('nav-portfolio').textContent = translations[language].navPortfolio;
        document.getElementById('nav-casestudies').textContent = translations[language].navCaseStudies;
        document.getElementById('nav-blog').textContent = translations[language].navBlog;
        document.getElementById('nav-contact').textContent = translations[language].navContact;
    }

    languageToggleButton.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
        translatePage(currentLanguage);
        languageToggleButton.textContent = currentLanguage === 'en' ? 'FR' : 'EN';
    });

    const loadingText = translations[currentLanguage].loadingText;
    let index = 0;

    function typeText() {
        let charIndex = 0;
        const currentText = loadingText[index];

        function typeChar() {
            if (charIndex < currentText.length) {
                terminalContent.innerHTML += currentText[charIndex];
                charIndex++;
                setTimeout(typeChar, 10); // Adjust typing speed here
            } else {
                terminalContent.innerHTML += '\n';
                index++;
                if (index < loadingText.length) {
                    setTimeout(typeText, 100); // Delay before next line
                } else {
                    setTimeout(hideTerminal, 1000);
                }
            }
        }
        typeChar();
    }

    function hideTerminal() {
        terminalBox.style.opacity = '0';
        terminalBox.style.transform = 'scale(0.9)';
        setTimeout(showLogo, 1000);
    }

    function showLogo() {
        terminalBox.style.display = 'none';
        logo.classList.remove('hidden');
        setTimeout(() => {
            logo.style.opacity = 1;
            enterSiteButton.classList.remove('hidden');
            setTimeout(() => {
                enterSiteButton.style.opacity = 1;
            }, 100);
        }, 100);
    }

    enterSiteButton.addEventListener('click', () => {
        console.log("Enter Site button clicked");
        logo.style.opacity = '0';
        setTimeout(() => {
            logo.style.display = 'none';
            mainContent.classList.remove('hidden');
            setTimeout(() => {
                mainContent.style.opacity = 1;
                animatedItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('show-item');
                    }, index * 300);
                });
            }, 100);
        }, 1000);
    });

    sidebarToggle.addEventListener('click', () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 768) {
            sidebar.classList.toggle('active');
        } else {
            sidebar.classList.toggle('collapsed');
        }
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 768 && sidebar.classList.contains('active')) {
            if (!sidebar.contains(e.target) && e.target !== sidebarToggle) {
                sidebar.classList.remove('active');
            }
        }
    });
    
    // Update sidebar state on window resize
    window.addEventListener('resize', () => {
        const screenWidth = window.innerWidth;
        if (screenWidth > 768) {
            sidebar.classList.remove('active');
        }
    });

    $(document).ready(function() {
        $('.tdnn').click(function () {
            $("body").toggleClass('dark-mode');
            $(".moon").toggleClass('sun');
            $(".tdnn").toggleClass('day');

            if ($("body").hasClass('dark-mode')) {
                sidebarLogo.src = 'Assets/WhiteSquere.png';
                fixedLogo.src = 'Assets/WhiteSquere.png';
            } else {
                sidebarLogo.src = 'Assets/ICON BLACK AND WHITE.png';
                fixedLogo.src = 'Assets/ICON BLACK AND WHITE.png';
            }
        });
    });

    document.addEventListener('mousemove', function(e) {
        const homeImage = document.getElementById('home-image');
        const x = (window.innerWidth - e.pageX) / 50;
        const y = (window.innerHeight - e.pageY) / 50;
        homeImage.style.transform = `translate(${x}px, ${y}px)`;
    });

    typeText();
});
