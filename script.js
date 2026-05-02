const levelData = {
    N5: {
        fee: '150,000',
        slots: [
            { day: 'Weekends', time: 'Unavailable' },
            { day: 'Weekdays', time: 'Unavailable' }
        ],
        notes: [
            'Minna no nihongo pdf file, vocabulary file.',
            'sensei ထုတ်ထားတဲ့ grammar file, old question files, and kanji file.',
            'exam ready old question လေးစုံ practice.'
        ]
    },
    N4: {
        fee: '150,000',
        slots: [
            { day: 'Weekends', time: 'Unavailable' },
            { day: 'Weekdays', time: 'Unavailable' }
        ],
        notes: [
            'Minna no nihongo pdf file, vocabulary file.',
            'sensei ထုတ်ထားတဲ့ grammar file, old question files, kanji file.',
            'exam ready old question လေးစုံ practice.'
        ]
    },
    N3: {
        fee: '180,000',
        slots: [
            { day: 'Weekends', time: 'Unavailable' },
            { day: 'Weekdays', time: 'Unavailable' }
        ],
        notes: [
            'Vocabulary file.',
            'sensei ထုတ်ထားတဲ့ grammar file, old question files, kanji master file, Other necessary kanji file.',
            'exam ready old question ငါးစုံ practice.'
        ]
    },
    N2: {
        fee: '220,000',
        slots: [
            { day: 'Weekends', time: 'Unavailable' },
            { day: 'Weekdays', time: 'Unavailable' }
        ],
        notes: [
            'Vocabulary file.',
            'sensei ထုတ်ထားတဲ့ grammar file, old question files, and kanji file.',
            'exam ready old question ငါးစုံ practice.'
        ]
    }
};

const levelCards = document.querySelectorAll('.level-v2-card');
const levelPopup = document.getElementById('levelPopup');
const closePopup = document.getElementById('closePopup');
const popupLevel = document.getElementById('popup-level');
const popupFee = document.getElementById('popup-fee');
const popupSlots = document.getElementById('popup-slots');
const popupNotes = document.getElementById('popup-notes');

function openLevelPopup(level) {
    const data = levelData[level];
    if (!data) return;

    popupLevel.textContent = `Level ${level}`;
    popupFee.textContent = data.fee;

    popupSlots.innerHTML = data.slots.map(slot => `
        <li class="flex justify-between items-center bg-surface-container-low p-4 rounded-2xl">
            <span class="font-semibold text-on-surface">${slot.day}</span>
            <span class="text-on-surface-variant">${slot.time}</span>
        </li>
    `).join('');

    popupNotes.innerHTML = data.notes.map(note => `
        <li class="flex gap-3 bg-surface-container-low p-4 rounded-2xl">
            <span class="material-symbols-outlined text-tertiary">check_circle</span>
            <span class="text-on-surface-variant leading-7">${note}</span>
        </li>
    `).join('');

    levelPopup.classList.remove('hidden');
    levelPopup.classList.add('flex');
}

function closeLevelPopup() {
    levelPopup.classList.add('hidden');
    levelPopup.classList.remove('flex');
}

levelCards.forEach(card => {
    card.addEventListener('click', () => {
        const level = card.dataset.level;
        openLevelPopup(level);
    });
});

closePopup.addEventListener('click', closeLevelPopup);

levelPopup.addEventListener('click', (event) => {
    if (event.target === levelPopup) {
        closeLevelPopup();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeLevelPopup();
        closeContactPopupFn();
    }
});

const levelsSection = document.getElementById('levels');
const aboutSection = document.getElementById('about');
const heroCoursesBtn = document.getElementById('heroCoursesBtn');
const heroLearnBtn = document.getElementById('heroLearnBtn');
const enrollBtn = document.getElementById('enrollBtn');
const navContactBtn = document.getElementById('navContactBtn');
const footerContactBtn = document.getElementById('footerContactBtn');
const contactPopup = document.getElementById('contactPopup');
const closeContactPopup = document.getElementById('closeContactPopup');

function scrollToSection(section) {
    if (!section) return;
    section.scrollIntoView({ behavior: 'smooth' });
}

heroCoursesBtn.addEventListener('click', () => scrollToSection(levelsSection));
heroLearnBtn.addEventListener('click', () => scrollToSection(aboutSection));
enrollBtn.addEventListener('click', () => scrollToSection(levelsSection));

function openContactPopup() {
    contactPopup.classList.remove('hidden');
    contactPopup.classList.add('flex');
}

function closeContactPopupFn() {
    contactPopup.classList.add('hidden');
    contactPopup.classList.remove('flex');
}

navContactBtn.addEventListener('click', openContactPopup);
footerContactBtn.addEventListener('click', openContactPopup);
closeContactPopup.addEventListener('click', closeContactPopupFn);

contactPopup.addEventListener('click', (event) => {
    if (event.target === contactPopup) {
        closeContactPopupFn();
    }
});
