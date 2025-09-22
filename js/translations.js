// ===========================================
// FURSUIT MAKERS - TRANSLATION SYSTEM
// ===========================================

const translations = {
    de: {
        // Navigation
        'nav.title': 'FurSuitMakers',
        'nav.home': 'Home',
        'nav.makers': 'Makers',
        'nav.search.placeholder': 'Suchen...',
        'nav.login': 'Anmelden',
        
        // Home Page
        'home.hero.title': '🎭 Willkommen bei <span class="BrandName">FurSuitMakers</span>',
        'home.hero.subtitle': 'Deine zentrale Plattform für die kreative Welt der Fursuit-Kunst',
        'home.hero.btn.discover': '🔍 Maker entdecken',
        'home.hero.btn.register': '📝 Jetzt registrieren',
        
        'home.intro.title': 'Was ist FurSuitMakers?',
        'home.intro.text1': 'Du suchst nach einem passenden Fursuit Maker oder willst einfach sehen, was die Szene gerade so macht? Dann bist du hier genau richtig!',
        'home.intro.text2': '<strong>FurSuitMakers</strong> ist die zentrale Plattform für alle, die sich für Fursuits interessieren – egal ob du selbst einen bauen willst, bereits ein Suit besitzt oder einfach neugierig bist.',
        
        'home.feature1.title': 'Maker-Verzeichnis',
        'home.feature1.desc': 'Umfassende Liste von Fursuit Makern – ständig erweitert und aktuell gehalten',
        'home.feature2.title': 'Portfolio-Galerie',
        'home.feature2.desc': 'Detaillierte Profile mit Bildern abgeschlossener Projekte und Referenzen',
        'home.feature3.title': 'Live-Status',
        'home.feature3.desc': 'Aktuelle Infos zu Aufträgen, Wartelisten und Projektfortschritten',
        'home.feature4.title': 'Community',
        'home.feature4.desc': 'Registriere dich oder stöbere als Gast durch unsere lebendige Community',
        
        // Makers Page
        'makers.title': '🎭 Fursuit Makers',
        'makers.subtitle': 'Entdecke talentierte Maker und finde den perfekten Künstler für deinen Fursuit',
        'makers.filter.style': 'Stil:',
        'makers.filter.style.all': 'Alle Stile',
        'makers.filter.style.cartoon': 'Cartoon',
        'makers.filter.style.realistic': 'Realistisch',
        'makers.filter.style.kemono': 'Kemono',
        'makers.filter.style.protogen': 'Protogen',
        'makers.filter.status': 'Status:',
        'makers.filter.status.all': 'Alle',
        'makers.filter.status.open': 'Aufträge offen',
        'makers.filter.status.waitlist': 'Warteliste',
        'makers.filter.status.closed': 'Geschlossen',
        'makers.filter.reset': '🔄 Filter zurücksetzen',
        
        'makers.status.open': '✅ Aufträge offen',
        'makers.status.waitlist': '⏳ Warteliste',
        'makers.status.closed': '❌ Geschlossen',
        
        'makers.spec.price': '💰 Preis:',
        'makers.spec.waittime': '⏱️ Wartezeit:',
        'makers.spec.location': '📍 Standort:',
        
        'makers.btn.contact': '📧 Kontakt',
        'makers.btn.portfolio': '🖼️ Portfolio',
        'makers.btn.favorite': '❤️',
        
        'makers.load.more': '📦 Weitere Maker laden',
        'makers.results.info': 'Zeige {current} von {total} Makern',
        
        // Login Page
        'login.tab.login': '🔐 Anmelden',
        'login.tab.register': '✨ Registrieren',
        
        'login.title': 'Willkommen zurück!',
        'login.subtitle': 'Melde dich an, um Zugang zu exklusiven Maker-Features zu erhalten',
        'login.email': '📧 E-Mail-Adresse',
        'login.password': '🔒 Passwort',
        'login.remember': 'Angemeldet bleiben',
        'login.forgot': 'Passwort vergessen?',
        'login.btn': '🚀 Anmelden',
        'login.social.text': 'Oder anmelden mit:',
        
        'register.title': 'Werde Teil der Community!',
        'register.subtitle': 'Erstelle deinen Account und entdecke die Welt der Fursuit-Maker',
        'register.firstname': '👤 Vorname',
        'register.lastname': '👤 Nachname',
        'register.username': '🎭 Benutzername',
        'register.email': '📧 E-Mail-Adresse',
        'register.password': '🔒 Passwort',
        'register.confirm': '🔒 Passwort bestätigen',
        'register.usertype': '🎨 Ich bin...',
        'register.usertype.select': 'Wähle eine Option',
        'register.usertype.customer': '🎭 Fursuit-Interessent',
        'register.usertype.maker': '🔨 Fursuit-Maker',
        'register.usertype.both': '🌟 Beides',
        'register.usertype.curious': '👀 Nur neugierig',
        'register.terms': 'Ich akzeptiere die <a href="#" class="Link">AGB</a> und <a href="#" class="Link">Datenschutzbestimmungen</a>',
        'register.newsletter': 'Newsletter mit neuesten Maker-Updates erhalten',
        'register.btn': '✨ Account erstellen',
        'register.social.text': 'Oder registrieren mit:',
        
        'login.success.login': 'Anmeldung erfolgreich! Du wirst weitergeleitet...',
        'login.success.register': 'Account erfolgreich erstellt! Willkommen bei FurSuitMakers!',
        
        'login.features.title': '💎 Warum bei uns registrieren?',
        'login.features.contact.title': 'Direkter Maker-Kontakt',
        'login.features.contact.desc': 'Kommuniziere direkt mit deinen Lieblings-Makern',
        'login.features.favorites.title': 'Favoriten-Liste',
        'login.features.favorites.desc': 'Speichere und verfolge deine Lieblings-Maker',
        'login.features.notifications.title': 'Benachrichtigungen',
        'login.features.notifications.desc': 'Erhalte Updates wenn Maker neue Slots öffnen',
        'login.features.dashboard.title': 'Maker-Dashboard',
        'login.features.dashboard.desc': 'Verwalte dein Portfolio und Projekte (für Maker)',
        
        // Footer
        'footer.text': '&copy;2025 <strong>FurSuitMakers</strong> | Dev v0.0.1 | Development by Anigx',
        
        // Language
        'language.german': '🇩🇪 Deutsch',
        'language.english': '🇺🇸 English',
        
        // Password Strength
        'password.strength.weak': 'Sehr schwach',
        'password.strength.fair': 'Schwach',
        'password.strength.good': 'Mittel',
        'password.strength.strong': 'Stark',
        'password.strength.excellent': 'Sehr stark',
        'password.strength.enter': 'Passwort eingeben'
    },
    
    en: {
        // Navigation
        'nav.title': 'FurSuitMakers',
        'nav.home': 'Home',
        'nav.makers': 'Makers',
        'nav.search.placeholder': 'Search...',
        'nav.login': 'Login',
        
        // Home Page
        'home.hero.title': '🎭 Welcome to <span class="BrandName">FurSuitMakers</span>',
        'home.hero.subtitle': 'Your central platform for the creative world of fursuit art',
        'home.hero.btn.discover': '🔍 Discover Makers',
        'home.hero.btn.register': '📝 Sign Up Now',
        
        'home.intro.title': 'What is FurSuitMakers?',
        'home.intro.text1': 'Looking for a suitable fursuit maker or just want to see what the scene is up to? Then you\'ve come to the right place!',
        'home.intro.text2': '<strong>FurSuitMakers</strong> is the central platform for everyone interested in fursuits – whether you want to build one yourself, already own a suit, or are just curious.',
        
        'home.feature1.title': 'Maker Directory',
        'home.feature1.desc': 'Comprehensive list of fursuit makers – constantly expanded and kept up to date',
        'home.feature2.title': 'Portfolio Gallery',
        'home.feature2.desc': 'Detailed profiles with images of completed projects and references',
        'home.feature3.title': 'Live Status',
        'home.feature3.desc': 'Current info on commissions, waitlists and project progress',
        'home.feature4.title': 'Community',
        'home.feature4.desc': 'Register or browse as a guest through our vibrant community',
        
        // Makers Page
        'makers.title': '🎭 Fursuit Makers',
        'makers.subtitle': 'Discover talented makers and find the perfect artist for your fursuit',
        'makers.filter.style': 'Style:',
        'makers.filter.style.all': 'All Styles',
        'makers.filter.style.cartoon': 'Cartoon',
        'makers.filter.style.realistic': 'Realistic',
        'makers.filter.style.kemono': 'Kemono',
        'makers.filter.style.protogen': 'Protogen',
        'makers.filter.status': 'Status:',
        'makers.filter.status.all': 'All',
        'makers.filter.status.open': 'Commissions Open',
        'makers.filter.status.waitlist': 'Waitlist',
        'makers.filter.status.closed': 'Closed',
        'makers.filter.reset': '🔄 Reset Filters',
        
        'makers.status.open': '✅ Commissions Open',
        'makers.status.waitlist': '⏳ Waitlist',
        'makers.status.closed': '❌ Closed',
        
        'makers.spec.price': '💰 Price:',
        'makers.spec.waittime': '⏱️ Wait Time:',
        'makers.spec.location': '📍 Location:',
        
        'makers.btn.contact': '📧 Contact',
        'makers.btn.portfolio': '🖼️ Portfolio',
        'makers.btn.favorite': '❤️',
        
        'makers.load.more': '📦 Load More Makers',
        'makers.results.info': 'Showing {current} of {total} makers',
        
        // Login Page
        'login.tab.login': '🔐 Sign In',
        'login.tab.register': '✨ Sign Up',
        
        'login.title': 'Welcome Back!',
        'login.subtitle': 'Sign in to get access to exclusive maker features',
        'login.email': '📧 Email Address',
        'login.password': '🔒 Password',
        'login.remember': 'Stay signed in',
        'login.forgot': 'Forgot password?',
        'login.btn': '🚀 Sign In',
        'login.social.text': 'Or sign in with:',
        
        'register.title': 'Join the Community!',
        'register.subtitle': 'Create your account and discover the world of fursuit makers',
        'register.firstname': '👤 First Name',
        'register.lastname': '👤 Last Name',
        'register.username': '🎭 Username',
        'register.email': '📧 Email Address',
        'register.password': '🔒 Password',
        'register.confirm': '🔒 Confirm Password',
        'register.usertype': '🎨 I am...',
        'register.usertype.select': 'Choose an option',
        'register.usertype.customer': '🎭 Fursuit Enthusiast',
        'register.usertype.maker': '🔨 Fursuit Maker',
        'register.usertype.both': '🌟 Both',
        'register.usertype.curious': '👀 Just Curious',
        'register.terms': 'I accept the <a href="#" class="Link">Terms</a> and <a href="#" class="Link">Privacy Policy</a>',
        'register.newsletter': 'Receive newsletter with latest maker updates',
        'register.btn': '✨ Create Account',
        'register.social.text': 'Or sign up with:',
        
        'login.success.login': 'Login successful! Redirecting...',
        'login.success.register': 'Account created successfully! Welcome to FurSuitMakers!',
        
        'login.features.title': '💎 Why register with us?',
        'login.features.contact.title': 'Direct Maker Contact',
        'login.features.contact.desc': 'Communicate directly with your favorite makers',
        'login.features.favorites.title': 'Favorites List',
        'login.features.favorites.desc': 'Save and track your favorite makers',
        'login.features.notifications.title': 'Notifications',
        'login.features.notifications.desc': 'Get updates when makers open new slots',
        'login.features.dashboard.title': 'Maker Dashboard',
        'login.features.dashboard.desc': 'Manage your portfolio and projects (for makers)',
        
        // Footer
        'footer.text': '&copy;2025 <strong>FurSuitMakers</strong> | Dev v0.0.1 | Development by Anigx',
        
        // Language
        'language.german': '🇩🇪 Deutsch',
        'language.english': '🇺🇸 English',
        
        // Password Strength
        'password.strength.weak': 'Very Weak',
        'password.strength.fair': 'Weak',
        'password.strength.good': 'Fair',
        'password.strength.strong': 'Strong',
        'password.strength.excellent': 'Excellent',
        'password.strength.enter': 'Enter password'
    }
};

// Language System Class
class LanguageSystem {
    constructor() {
        this.currentLanguage = localStorage.getItem('fursuit-language') || 'de';
        this.translations = translations;
        this.init();
    }
    
    init() {
        this.updatePageLanguage();
        // Add small delay to ensure DOM is fully ready
        setTimeout(() => {
            this.addLanguageToggle();
            this.bindEvents();
        }, 100);
    }
    
    addLanguageToggle() {
        // Add language toggle to navigation
        const navContainer = document.querySelector('.NavbarLinksSearchLoginContainer');
        if (navContainer) {
            const languageToggle = document.createElement('div');
            languageToggle.className = 'LanguageToggle';
            languageToggle.innerHTML = `
                <button class="LanguageButton" data-lang="de" ${this.currentLanguage === 'de' ? 'class="active"' : ''}>
                    🇩🇪
                </button>
                <button class="LanguageButton" data-lang="en" ${this.currentLanguage === 'en' ? 'class="active"' : ''}>
                    🇺🇸
                </button>
            `;
            
            // Insert before login button
            navContainer.insertBefore(languageToggle, navContainer.lastElementChild);
        }
    }
    
    bindEvents() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('LanguageButton')) {
                const newLang = e.target.getAttribute('data-lang');
                this.changeLanguage(newLang);
            }
        });
    }
    
    changeLanguage(lang) {
        if (lang === this.currentLanguage) return;
        
        this.currentLanguage = lang;
        localStorage.setItem('fursuit-language', lang);
        
        // Update active state
        document.querySelectorAll('.LanguageButton').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
        
        this.updatePageLanguage();
    }
    
    updatePageLanguage() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            
            if (element.tagName === 'INPUT' && element.type !== 'submit') {
                element.placeholder = translation;
            } else {
                element.innerHTML = translation;
            }
        });
        
        // Update document language
        document.documentElement.lang = this.currentLanguage;
    }
    
    getTranslation(key) {
        const keys = key.split('.');
        let translation = this.translations[this.currentLanguage];
        
        for (const k of keys) {
            translation = translation?.[k];
        }
        
        return translation || key;
    }
    
    // Helper method for dynamic content
    t(key, replacements = {}) {
        let translation = this.getTranslation(key);
        
        // Replace placeholders like {current} and {total}
        Object.keys(replacements).forEach(placeholder => {
            translation = translation.replace(`{${placeholder}}`, replacements[placeholder]);
        });
        
        return translation;
    }
}

// Initialize language system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.langSystem = new LanguageSystem();
});

// Fallback initialization if DOMContentLoaded already fired
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.langSystem = new LanguageSystem();
    });
} else {
    window.langSystem = new LanguageSystem();
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, LanguageSystem };
}
