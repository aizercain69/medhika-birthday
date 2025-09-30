// === APP CONFIGURATION ===
const CONFIG = {
    friendName: "Medhika",
    loginSecret: "MEDHaunty",
    birthYear: 2006,
    gallerySong: "22.mp3",
    birthdaySong: "song.mp3", 
    videoEdits: [
        { videoSrc: "edits/hopeful-mahanati.mp4", caption: "Starting off with your FAVOURITE movie OAT, W choice! 🥰🥰" },
        { videoSrc: "edits/happy-sita-ramam.mp4", caption: "the best song chosen for this movie, W selection 🫡🫡" },
        { videoSrc: "edits/Kdrama.mp4", caption: "at first I thought this was an edit on an anime or smtg(still fire tho lol) 😣😣" },
        { videoSrc: "edits/heeramandi.mp4", caption: "you were embarrased abt this edit, but idk why tho 🥲" },
        { videoSrc: "edits/emma-watson.mp4", caption: "EMMMAAA WATSONNNNNN😭😭😭" },
        { videoSrc: "edits/timothee-chalamet.mp4", caption: "W frames man, I see how much u worked for this🫡🫡" },
        { videoSrc: "edits/pawah-stah.mp4", caption: "respect for making an edit on pawah star bro 🙏🙏" },
        { videoSrc: "edits/majili.mp4", caption: "but he changed for good in the END tho, IFYKYK 😜😜" },
        { videoSrc: "edits/lala-land.mp4", caption: "made an edit highlighting the color concept in this movie, requires a lot of dedication😭😭" },
        { videoSrc: "edits/sad-sita-ramam.mp4", caption: "we have a sad edit for this movie asw? 😭😭" },
        { videoSrc: "edits/hopeless-mahanati.mp4", caption: "The fact that you saw both the ends of the spectrum of this movie and MADE an edit on both of them says everything man!!" },
        { videoSrc: "edits/frens.mp4", caption: "Not only movies, but your skills are useful to make edits like these as well, damn ra😏😏" },
    ],
    poetry: [
        { imageSrc: "stories/good.png", caption: "you ARE a good enough friend tho, I can tell u that lol 😝😝" },
        { imageSrc: "stories/evening.png", caption: "shakespeare type shi bro wtf 😭😭" },
        { imageSrc: "stories/laya.png", caption: "what a story telling man, shldn't go unnoticed 🫡🫡" },
        { imageSrc: "stories/weak.png", caption: "It is what It is bro 😪😪" },
        { imageSrc: "stories/cheesy.png", caption: "well it's easy to capture the left side of the face with the right hand so 🤷🤷" },
        { imageSrc: "stories/8.png", caption: "8 is not you unlucky number gng, stfu 😔😔" },
        { imageSrc: "stories/poem.jpg", caption: "a poet as well 😭😭" },
        { imageSrc: "stories/mosh.jpg", caption: "not only a writer, but a drawer as well 😭😭" },
    ],
    gallery: [
        { image: "photos/1.jpg", caption: "Let's start off with your baby picsss, look how cute u were back then😭😭😭" },
        { image: "photos/2.jpg", caption: "this is how u should celebrate HOLI man." },
        { image: "photos/3.jpg", caption: "eppudu edhokati tinadame😝😝" },
        { image: "photos/4.jpg", caption: "W nature enjoyer." },
        { image: "photos/5.jpg", caption: "why this lwk give off the boss lady VIBESS 😭😭." },
        { image: "photos/6.jpg", caption: "always looks at the camera as if they're committing a crime." },
        { image: "photos/7.jpg", caption: "wash yo mouth bro tffff" },
        { image: "photos/8.jpg", caption: "so happy in the photo thereeeeee" },
        { image: "photos/9.jpg", caption: "this photo js has such a deep meaning to it man" },
        { image: "photos/10.jpg", caption: "aipoyay nee baby pics, dumbo eating a mango" },
        { image: "photos/11.jpg", caption: "neee bonda laa unnai glasses neeku😭😭" },
        { image: "photos/12.jpg", caption: "such wannabees man istg 🙏🙏" },
        { image: "photos/13.jpg", caption: "your fav snapchat filterrrr😭😭" },
        { image: "photos/14.jpg", caption: "W candid, shld award the photographer here lol!" },
        { image: "photos/15.png", caption: "now lets start looking at your spam photos😜😜" },
        { image: "photos/16.jpg", caption: "AUNTY AUNTY AUNTY AUNTY, lolololololol 🤣🤣" },
        { image: "photos/17.png", caption: "mogging aa akka😏😏" },
        { image: "photos/18.jpg", caption: "sadly the spam pics are done now, makeup photos chuskovali ippudu😓😓" },
        { image: "photos/19.png", caption: "aestheticcc medhAUNTY😝😝" },
        { image: "photos/20.jpg", caption: "venakala luggage saddakunda photolu teskuntunnav chi🤦🤦" },
        { image: "photos/21.jpg", caption: "inko angle ledha, asala prathi photo same angle😭😭" },
        { image: "photos/22.png", caption: "kapi ela undhi akka😏😏 or milkshake idk" },
        { image: "photos/23.png", caption: "the long hair era was peak bro, why'd u cut ittt😭😭" },
        { image: "photos/24.png", caption: "aesthetic MEDHAUNTY fr" },
        { image: "photos/25.png", caption: "LinkedIn cover photo ikkadi nunche kada, ewwww😒😒" },
        { image: "photos/26.mp4", caption: "silly medhAUNTY loll!" },
        { image: "photos/27.mp4", caption: "W instagram filter bro, antha correct ga ela cheppindi😭😭" },
        { image: "photos/28.jpg", caption: "the crying MEDHIKAAAA😔😔" },
        { image: "photos/29.mp4", caption: "but i also kinda vibe with the short hair tho🙂‍↔️" },
        { image: "photos/30.jpg", caption: "the best photo in this whole collection man😭😭😭😭" },
        { image: "photos/31.png", caption: "there u go, ending it with your fav photo in your fav dress(according to what u said LO)😋😋😋" },
    ],
    notepadMessages: ["       So, yes that person was u obv(regd the prev slides), ik you hate this day a lot that u js wanna skip this day every year,","        but since idk what the issue is(not like i'm asking u to tell) as in to why you hate this day so much, I js wanted to help", "       I thought If I forced u to lift the call or come to disc or smtg I could try and make your day a bit better", "       but it's alr, I get that you do not wanna do anything today, I get that","         but cmon man, I mean you are such a good person, a great friend and idt that one should celebrate their birthday like this", "       again this is js a suggestion so don't get angry at me for saying all this😭😭", "       but yes, I'm glad that you are my frend, thankful for all the discord calls we had, val games we played and the fights we had, lol!", "       no problem, do your thing today, I don wanna disturb... we can have fun another day😭😭"],
    birthdayMessage: "HAPPY BIRTHDAY RAWWWWWWW!!!!!! 🥳🥳🥳🥳🥳 ik you dont like all this, but cmon it's your bday at the end of the dayyyy🫣🫣",
    credits: `Thank you for being here, Medhika! And a special thanks for being an incredible friend.`
};

// === GLOBAL VARIABLES ===
let currentVideoIndex = 0, currentPoetryIndex = 0, currentGalleryIndex = 0;
let nextPageAfterPopup = '';
let gallerySong = new Audio(); // Dedicated audio for the gallery
let typeItInstance = null;
let notepadTyped = false; // NEW: Track if notepad has been typed

// === PAGE NAVIGATION & POP-UP LOGIC ===
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => { page.style.display = 'none'; });

    const activePage = document.getElementById(pageId);
    if (activePage) {
        if (!gallerySong.paused) gallerySong.pause();
        const videoPlayer = document.getElementById('video-player');
        if (!videoPlayer.paused) videoPlayer.pause();
        const galleryVideoPlayer = document.getElementById('gallery-video');
        if (!galleryVideoPlayer.paused) galleryVideoPlayer.pause();
        const birthdayAudio = document.getElementById('birthday-song');
        if (!birthdayAudio.paused) birthdayAudio.pause();

        activePage.style.display = 'block';
        if (pageId === 'birthday-page' || pageId === 'gallery-page') {
             activePage.style.display = 'flex';
        }

        const pageSetups = {
            'history-page': setupHistoryPage, 'video-edits-page': setupVideoEditsPage,
            'poetry-page': setupPoetryPage, 'gallery-page': setupGalleryPage,
            'notepad-page': setupNotepadPage, 'birthday-page': setupBirthdayPage,
            'credits-page': setupCreditsPage
        };
        if (pageSetups[pageId]) pageSetups[pageId]();
    }
}

function showPopup(message, buttonTheme) {
    const popup = document.getElementById('transition-popup');
    document.getElementById('popup-message').textContent = message;

    document.querySelectorAll('.popup-action-button').forEach(btn => btn.style.display = 'none');

    const themedButton = document.getElementById(`popup-${buttonTheme}-button`);
    if (themedButton) {
        themedButton.style.display = 'inline-block';
        nextPageAfterPopup = themedButton.getAttribute('data-next');
    }

    popup.style.display = 'flex';
}

// === PAGE SETUP FUNCTIONS ===
function setupHistoryPage() {
    const factEl = document.getElementById('history-fact');
    const albumCoverEl = document.getElementById('album-cover');

    factEl.textContent = `In ${CONFIG.birthYear}, Taylor Swift released her debut album in the same month that you were born in!`;
    albumCoverEl.src = 'cover.png'; 
    albumCoverEl.style.display = 'block';
}

function setupVideoEditsPage() {
    const player = document.getElementById('video-player');
    const captionEl = document.getElementById('video-caption');
    const nextSectionButton = document.querySelector('#video-edits-page .generic-next-section-button');
    const nextButton = document.getElementById('next-video-button');

    function updateVideo() {
        const item = CONFIG.videoEdits[currentVideoIndex];
        player.src = item.videoSrc;
        captionEl.textContent = item.caption;
        
        if (currentVideoIndex === CONFIG.videoEdits.length - 1) {
            nextSectionButton.style.display = 'inline-block';
            nextButton.style.display = 'none';
        } else {
            nextSectionButton.style.display = 'none';
            nextButton.style.display = 'inline-block';
        }
    }
    document.getElementById('prev-video-button').onclick = () => { 
        currentVideoIndex = (currentVideoIndex - 1 + CONFIG.videoEdits.length) % CONFIG.videoEdits.length;
        updateVideo(); 
    };
    nextButton.onclick = () => { currentVideoIndex++; updateVideo(); };
    updateVideo();
}

function setupPoetryPage() {
    const imageEl = document.getElementById('poetry-image');
    const captionEl = document.getElementById('poetry-caption');
    const nextSectionButton = document.querySelector('#poetry-page .generic-next-section-button');
    const nextButton = document.getElementById('next-poetry-button');

    function updatePoetry() {
        const item = CONFIG.poetry[currentPoetryIndex];
        imageEl.src = item.imageSrc;
        captionEl.textContent = item.caption;
        
        // FIXED THE CRITICAL TYPO HERE from 'currentPoentryIndex' to 'currentPoetryIndex'
        if (currentPoetryIndex === CONFIG.poetry.length - 1) {
            nextSectionButton.style.display = 'inline-block';
            nextButton.style.display = 'none';
        } else {
            nextSectionButton.style.display = 'none';
            nextButton.style.display = 'inline-block';
        }
    }
    document.getElementById('prev-poetry-button').onclick = () => { 
        currentPoetryIndex = (currentPoetryIndex - 1 + CONFIG.poetry.length) % CONFIG.poetry.length;
        updatePoetry(); 
    };
    nextButton.onclick = () => { currentPoetryIndex++; updatePoetry(); };
    updatePoetry();
}

function setupGalleryPage() {
    gallerySong.src = CONFIG.gallerySong;
    gallerySong.loop = true;
    gallerySong.play().catch(e => console.error("Gallery song error:", e));

    const galleryImage = document.getElementById('gallery-image');
    const galleryVideo = document.getElementById('gallery-video');
    const galleryCaption = document.getElementById('gallery-caption');
    const nextSectionButton = document.querySelector('#gallery-page .generic-next-section-button');
    const nextButton = document.getElementById('next-gallery-button');

    function updateGallery() {
        const item = CONFIG.gallery[currentGalleryIndex];
        const isVideo = item.image.endsWith('.mp4');
        
        if (isVideo) {
            galleryImage.style.display = 'none';
            galleryVideo.style.display = 'block';
            galleryVideo.src = item.image;
            if (!gallerySong.paused) gallerySong.pause();
        } else {
            galleryVideo.style.display = 'none';
            galleryImage.style.display = 'block';
            galleryImage.src = item.image;
            if (gallerySong.paused) gallerySong.play();
        }
        galleryCaption.textContent = item.caption;

        if (currentGalleryIndex === CONFIG.gallery.length - 1) {
            nextSectionButton.style.display = 'inline-block';
            nextButton.style.display = 'none';
        } else {
            nextSectionButton.style.display = 'none';
            nextButton.style.display = 'inline-block';
        }
    }
    document.getElementById('prev-gallery-button').onclick = () => { 
        currentGalleryIndex = (currentGalleryIndex - 1 + CONFIG.gallery.length) % CONFIG.gallery.length;
        updateGallery(); 
    };
    nextButton.onclick = () => { currentGalleryIndex++; updateGallery(); };
    updateGallery();
}


function setupNotepadPage() {
    const continueButton = document.getElementById('notepad-continue-button');
    const notepadTextEl = document.getElementById('notepad-text');

    // FIXED: Properly check if notepad has already been typed
    if (notepadTyped) {
        // If already typed, just show the continue button
        continueButton.classList.remove('opacity-0');
        return;
    }

    notepadTextEl.innerHTML = '';
    continueButton.classList.add('opacity-0');

    // Destroy any existing TypeIt instance
    if (typeItInstance) {
        typeItInstance.destroy();
        typeItInstance = null;
    }

    typeItInstance = new TypeIt("#notepad-text", {
        speed: 60,
        lifeLike: true,
        waitUntilVisible: true,
        afterComplete: () => {
            continueButton.classList.remove('opacity-0');
            notepadTyped = true; // Mark as finished
        }
    });

    CONFIG.notepadMessages.forEach(msg => {
        typeItInstance.type(msg).break().pause(500);
    });

    typeItInstance.go();
}

function setupBirthdayPage() {
    const birthdayAudio = document.getElementById('birthday-song');
    birthdayAudio.play().catch(e => console.log("Birthday song failed:", e));
    
    runConfetti();
    document.getElementById('birthday-message').textContent = `"${CONFIG.birthdayMessage}"`;
}

function setupCreditsPage() {
    document.getElementById('credits-message').textContent = CONFIG.credits;
    const birthdayAudio = document.getElementById('birthday-song');
    if (!birthdayAudio.paused) {
        let vol = 1;
        const fadeOut = setInterval(() => {
            if (vol > 0.1) { vol -= 0.1; birthdayAudio.volume = vol; } 
            else { birthdayAudio.pause(); birthdayAudio.currentTime = 0; birthdayAudio.volume = 1; clearInterval(fadeOut); }
        }, 100);
    }
}

function runConfetti() {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
            return clearInterval(interval);
        }
        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}


// === INITIALIZATION ===
document.addEventListener('DOMContentLoaded', () => {
    showPage('login-page');
    document.getElementById('login-title').textContent = `A Journey for ${CONFIG.friendName}`;
    const unlockButton = document.getElementById('unlock-button'), secretInput = document.getElementById('secret-word-input'), errorMessage = document.getElementById('error-message');
    
    const handleLogin = () => {
        if (secretInput.value === CONFIG.loginSecret) { 
            showPage('history-page'); 
        } else { 
            errorMessage.style.display = 'block'; 
            setTimeout(() => errorMessage.style.display = 'none', 4000); 
        }
    };

    unlockButton.addEventListener('click', handleLogin);
    secretInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleLogin(); });

    document.querySelectorAll('.popup-action-button').forEach(button => {
        button.addEventListener('click', () => {
            document.getElementById('transition-popup').style.display = 'none';
            if (nextPageAfterPopup) {
                showPage(nextPageAfterPopup);
                nextPageAfterPopup = '';
            }
        });
    });

    document.querySelectorAll('.next-section-button-trigger').forEach(button => {
        button.addEventListener('click', () => {
            const popupMessage = button.getAttribute('data-popup');
            const buttonTheme = button.getAttribute('data-buttontheme');
            if (popupMessage) {
                showPopup(popupMessage, buttonTheme);
            }
        });
    });

    document.querySelectorAll('button[data-next]:not(.next-section-button-trigger)').forEach(button => {
        button.addEventListener('click', () => {
            const nextPage = button.getAttribute('data-next');
            showPage(nextPage);
        });
    });

});
