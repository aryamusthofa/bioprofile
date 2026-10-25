// ==========================================================================
// 1. DATA MASTER (Sosmed, Link Showcase, & Tema)
// ==========================================================================
const SOCIAL_LINKS = [
    {
        name: "Discord",
        url: "https://discord.com/users/868704971879768084",
        hoverClass: "hover:bg-indigo-600 hover:text-white hover:ring-indigo-600",
        svgIcon: `<svg class="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`
    },
    {
        name: "GitHub",
        url: "https://github.com/aryamusthofa",
        hoverClass: "hover:bg-slate-900 hover:text-white hover:ring-slate-900",
        svgIcon: `<svg class="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`
    },
    {
        name: "YouTube",
        url: "https://youtube.com/@officalrandyxchannel9885-1st",
        hoverClass: "hover:bg-red-600 hover:text-white hover:ring-red-600",
        svgIcon: `<svg class="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`
    },
    {
        name: "Instagram",
        url: "https://instagram.com/arya_musthofa_roja01",
        hoverClass: "hover:bg-pink-600 hover:text-white hover:ring-pink-600",
        svgIcon: `<svg class="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/arya-musthofa-a6770a333/",
        hoverClass: "hover:bg-blue-600 hover:text-white hover:ring-blue-600",
        svgIcon: `<svg class="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`
    },
    {
        name: "TikTok",
        url: "https://tiktok.com/@armusfanz",
        hoverClass: "hover:bg-black hover:text-white hover:ring-black",
        svgIcon: `<svg class="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.31 1.56-1.3 2.56.01.88.42 1.74 1.11 2.27.81.63 1.89.81 2.87.57 1.18-.27 2.12-1.22 2.37-2.4.08-.49.07-.99.07-1.48V.02z"/></svg>`
    }
];

const MASTER_LINKS = [
    {
        id: 1,
        title_id: "Website Portofolio Utama",
        title_en: "Main Portfolio Website",
        subtitle_id: "Website resmi showcase skill & pengalaman",
        subtitle_en: "Official showcase of skills & experience",
        url: "https://armuzzdev.infinityfreeapp.com/",
        category: "project",
        hoverRing: "hover:ring-amber-300",
        hoverText: "group-hover:text-amber-500",
        svgIcon: `<svg class="h-6 w-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>`
    },
    {
        id: 2,
        title_id: "Gaming & Vibe Code Lab",
        title_en: "Gaming & Vibe Code Lab",
        subtitle_id: "Eksperimentasi AI 3D & Web Vibe Studio",
        subtitle_en: "3D AI Experimentation & Web Vibe Studio",
        url: "https://sawit3d.ai.studio/",
        category: "project",
        hoverRing: "hover:ring-violet-300",
        hoverText: "group-hover:text-violet-500",
        svgIcon: `<svg class="h-6 w-6 text-violet-600 transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H9v2H7v-2H5v-2h2V9h2v2h2v2zm4.5 1c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5-1.5zm3-3c-.83 0-1.5-.67-1.5-1.5S17.67 9 18.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`
    },
    {
        id: 3,
        title_id: "Proyek Unggulan GitHub",
        title_en: "Featured GitHub Project",
        subtitle_id: "Aplikasi Mobile Flutter PDF Translator",
        subtitle_en: "Flutter Mobile App PDF Translator",
        url: "https://github.com/aryamusthofa/pdftranslatorflutter-latihan",
        category: "project",
        hoverRing: "hover:ring-slate-400",
        hoverText: "group-hover:text-slate-800",
        svgIcon: `<svg class="h-6 w-6 text-slate-800" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`
    },
    {
        id: 4,
        title_id: "Catatan Kursus Web 101 Tailwind",
        title_en: "Web 101 Course Notes",
        subtitle_id: "Modul & dokumentasi pembelajaran Notion",
        subtitle_en: "Notion learning modules & documentation",
        url: "https://universal-magpie-c9c.notion.site/Web-101-Build-Your-Own-Link-in-Bio-3ef2eddec75280b9878bfc6368b08376",
        category: "catatan",
        hoverRing: "hover:ring-amber-300",
        hoverText: "group-hover:text-amber-500",
        svgIcon: `<svg class="h-6 w-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`
    },
    {
        id: 5,
        title_id: "Hubungi via Email Direct",
        title_en: "Contact via Direct Email",
        subtitle_id: "Konsultasi project web/mobile UMKM & Kerja sama",
        subtitle_en: "Web/Mobile UMKM project consultation & collaboration",
        url: "mailto:armuzzbrotherdev@gmail.com",
        category: "kontak",
        hoverRing: "hover:ring-amber-300",
        hoverText: "group-hover:text-amber-500",
        svgIcon: `<svg class="h-6 w-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`
    },
    {
        id: 6,
        title_id: "Donate & Support Me",
        title_en: "Donate & Support Me",
        subtitle_id: "Dukungan karya & apresiasi via Tako ID",
        subtitle_en: "Support & appreciation via Tako ID",
        url: "https://tako.id/aryamusthofa",
        category: "kontak",
        hoverRing: "hover:ring-rose-300",
        hoverText: "group-hover:text-rose-500",
        svgIcon: `<svg class="h-5 w-5 fill-current text-rose-500" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`
    }
];

const TABS = [
    { category: "semua", label_id: "Semua", label_en: "All" },
    { category: "project", label_id: "Project & App", label_en: "Project & App" },
    { category: "catatan", label_id: "Catatan & Modul", label_en: "Notes & Docs" },
    { category: "kontak", label_id: "Kontak & Support", label_en: "Contact & Support" }
];

const THEMES = {
    terang: "bg-slate-100 text-slate-800",
    gelap: "bg-slate-900 text-slate-100",
    hangat: "bg-amber-50 text-amber-950",
    rgb: "bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white animate-pulse"
};

// ==========================================================================
// 2. STATE MANAGEMENT UTAMA
// ==========================================================================
const state = {
    activeCategory: "semua",
    searchQuery: "",
    currentTheme: localStorage.getItem("armuzz_theme") || "terang",
    currentLang: localStorage.getItem("armuzz_lang") || "id",
    links: MASTER_LINKS
};

function setState(newState) {
    Object.assign(state, newState);
    renderApp();
}

// ==========================================================================
// 3. UI COMPONENTS
// ==========================================================================
function SocialIcon(social) {
    return `
        <li>
            <a href="${social.url}" target="_blank" rel="noopener noreferrer" aria-label="${social.name} Profile"
                class="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-sm ring-1 ring-slate-200/80 transition-all duration-200 hover:-translate-y-1 ${social.hoverClass}">
                ${social.svgIcon}
            </a>
        </li>
    `;
}

function LinkCard(link) {
    const isHttp = link.url.startsWith("http");
    const targetAttr = isHttp ? 'target="_blank" rel="noopener noreferrer"' : '';
    const title = state.currentLang === "en" ? link.title_en : link.title_id;
    const subtitle = state.currentLang === "en" ? link.subtitle_en : link.subtitle_id;

    return `
        <li>
            <a href="${link.url}" ${targetAttr}
                class="group flex items-center justify-between rounded-xl bg-white/90 px-5 py-4 font-medium text-slate-800 shadow-sm ring-1 ring-slate-200/80 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md ${link.hoverRing} focus:outline-none focus:ring-2 focus:ring-amber-400">
                <div class="flex items-center gap-3.5">
                    <span class="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100/80 p-1">
                        ${link.svgIcon}
                    </span>
                    <div class="text-left">
                        <div class="text-sm font-bold text-slate-800 leading-tight">${title}</div>
                        ${subtitle ? `<div class="text-xs text-slate-500 font-normal mt-0.5">${subtitle}</div>` : ''}
                    </div>
                </div>
                <svg class="h-5 w-5 text-slate-400 transition-transform duration-200 group-hover:translate-x-1 ${link.hoverText}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </a>
        </li>
    `;
}

function EmptyState() {
    const dict = I18N[state.currentLang];
    return `
        <li class="rounded-2xl border-2 border-dashed border-slate-300/80 p-8 text-center bg-white/40 backdrop-blur-sm">
            <p class="text-3xl mb-2">🔎</p>
            <p class="text-sm font-bold text-slate-700">${dict.emptyTitle}</p>
            <p class="text-xs text-slate-500 mt-1">${dict.emptySub}</p>
        </li>
    `;
}

function FilterTabsUI() {
    return TABS.map(tab => {
        const isActive = tab.category === state.activeCategory;
        const label = state.currentLang === "en" ? tab.label_en : tab.label_id;
        return `
            <button type="button" 
                data-category="${tab.category}" 
                aria-pressed="${isActive}"
                class="filter-btn rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200/80 transition duration-200 aria-pressed:bg-indigo-600 aria-pressed:text-white aria-pressed:ring-indigo-600 focus:outline-none cursor-pointer">
                ${label}
            </button>
        `;
    }).join("");
}

// ==========================================================================
// 4. RENDER FUNCTIONS
// ==========================================================================
function renderSocials() {
    const socialContainer = document.getElementById("social-list");
    if (!socialContainer) return;
    socialContainer.innerHTML = SOCIAL_LINKS.map(item => SocialIcon(item)).join("");
}

function renderApp() {
    const dict = I18N[state.currentLang];

    // A. Update Teks Switcher Tema (Dinamis Sesuai Bahasa)
    const themeBtnTerang = document.querySelector('[data-theme="terang"]');
    const themeBtnGelap = document.querySelector('[data-theme="gelap"]');
    const themeBtnHangat = document.querySelector('[data-theme="hangat"]');
    const themeBtnRgb = document.querySelector('[data-theme="rgb"]');

    if (themeBtnTerang) themeBtnTerang.textContent = dict.themeTerang;
    if (themeBtnGelap) themeBtnGelap.textContent = dict.themeGelap;
    if (themeBtnHangat) themeBtnHangat.textContent = dict.themeHangat;
    if (themeBtnRgb) themeBtnRgb.textContent = dict.themeRgb;

    // B. Update Teks Statis Header & Main Content
    const roleEl = document.getElementById("header-role");
    const locationEl = document.getElementById("header-location");
    const sectionTitleEl = document.querySelector("main h2");
    const searchInput = document.getElementById("search-input");
    const backBtnText = document.querySelector("main a span");

    if (roleEl) roleEl.textContent = dict.role;
    if (locationEl) locationEl.textContent = dict.location;
    if (sectionTitleEl) sectionTitleEl.textContent = dict.sectionTitle;
    if (searchInput) searchInput.placeholder = dict.searchPlaceholder;
    if (backBtnText) backBtnText.textContent = dict.backText;

    // C. Highlight Tombol Bahasa Aktif
    document.querySelectorAll("#lang-switcher .lang-btn").forEach(btn => {
        const isSelected = btn.dataset.lang === state.currentLang;
        btn.className = `lang-btn cursor-pointer rounded-full px-3 py-1 text-xs font-bold transition-all ${
            isSelected ? "bg-indigo-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
        }`;
    });

    // D. Render Filter Tabs
    const filterTabsContainer = document.getElementById("filter-tabs");
    if (filterTabsContainer) {
        filterTabsContainer.innerHTML = FilterTabsUI();
    }

    // E. Filter Data Link
    const query = state.searchQuery.toLowerCase().trim();
    const filteredLinks = state.links.filter(link => {
        const matchCategory = state.activeCategory === "semua" || link.category === state.activeCategory;
        const title = state.currentLang === "en" ? link.title_en : link.title_id;
        const subtitle = state.currentLang === "en" ? link.subtitle_en : link.subtitle_id;
        return matchCategory && (title.toLowerCase().includes(query) || (subtitle && subtitle.toLowerCase().includes(query)));
    });

    // F. Update Badge Counter
    const linkCountBadge = document.getElementById("link-count");
    if (linkCountBadge) {
        linkCountBadge.textContent = `${filteredLinks.length} ${dict.from} ${state.links.length} ${dict.linkSuffix}`;
    }

    // G. Render List Kartu
    const linkListContainer = document.getElementById("link-list");
    if (linkListContainer) {
        if (filteredLinks.length === 0) {
            linkListContainer.innerHTML = EmptyState();
        } else {
            linkListContainer.innerHTML = filteredLinks.map(link => LinkCard(link)).join("");
        }
    }
}

function applyTheme(themeName) {
    const body = document.body;
    Object.values(THEMES).forEach(cls => body.classList.remove(...cls.split(" ")));
    const themeClasses = THEMES[themeName] || THEMES.terang;
    body.classList.add(...themeClasses.split(" "));
    localStorage.setItem("armuzz_theme", themeName);
}

function applyLanguage(lang) {
    localStorage.setItem("armuzz_lang", lang);
    setState({ currentLang: lang });
}

// ==========================================================================
// 5. INITIALIZATION & LISTENERS
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    // Render Awal
    applyTheme(state.currentTheme);
    renderSocials();
    renderApp();

    // Event Listener Tab Filter
    const filterTabsContainer = document.getElementById("filter-tabs");
    if (filterTabsContainer) {
        filterTabsContainer.addEventListener("click", (event) => {
            const button = event.target.closest("[data-category]");
            if (!button) return;
            setState({ activeCategory: button.dataset.category });
        });
    }

    // Event Listener Live Search
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("input", (event) => {
            setState({ searchQuery: event.target.value });
        });
    }

    // Event Listener Switcher Tema
    const themeSwitcherContainer = document.getElementById("theme-switcher");
    if (themeSwitcherContainer) {
        themeSwitcherContainer.addEventListener("click", (event) => {
            const button = event.target.closest("[data-theme]");
            if (!button) return;
            const selectedTheme = button.dataset.theme;
            state.currentTheme = selectedTheme;
            applyTheme(selectedTheme);
        });
    }

    // Event Listener Switcher Bahasa
    const langSwitcherContainer = document.getElementById("lang-switcher");
    if (langSwitcherContainer) {
        langSwitcherContainer.addEventListener("click", (event) => {
            const button = event.target.closest("[data-lang]");
            if (!button) return;
            applyLanguage(button.dataset.lang);
        });
    }
});