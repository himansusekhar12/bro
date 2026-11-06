
// =================================
// SECTION 1 TO SECTION 2
// =================================

const openButton = document.getElementById("openButton");
const openingSection = document.querySelector(".opening-section");
const letterSection = document.getElementById("letterSection");
const continueButton = document.getElementById("continueButton");
const proposalSection = document.getElementById("proposalSection");

openButton.addEventListener("click", () => {

    openingSection.style.display = "none";
    letterSection.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =================================
// ENVELOPE OPENING ANIMATION
// =================================

const envelope = document.getElementById("envelope");
const envelopeHint = document.getElementById("envelopeHint");
const letterMessage = document.getElementById("letterMessage");


// YOUR PERSONAL LETTER MESSAGE
const letterText = `My dearest Liebe,

I really don't know where to begin... But i really want to say you not only a friend of mine.

I can't understand how to say but you are much more than from AN ORDINARY FRIEND.

When we met I thought you are just an friend but now are been an important part of my life.

Now i can't imagine a single moment without you.

Finally I am confessing. 
I love you My favorite Girl.
Your dearest Bestie ❤️


`;

const typingSpeed = 65;

function typeLetter(text, element) {
    let index = 0;
    element.innerHTML = "";
    function typeNextCharacter() {
        if (index < text.length) {
            element.innerHTML +=
                text.charAt(index) === "\n"
                    ? "<br>"
                    : text.charAt(index);
            index++;
            setTimeout(typeNextCharacter, typingSpeed);
        }
        else {
            continueButton.style.display = "block";
        }
    }
    typeNextCharacter();
}

envelope.addEventListener("click", () => {
    if (envelope.classList.contains("open")) {
        return;
    }
    envelope.classList.add("open");
    envelopeHint.textContent =
        "Your little secret is unfolding... ♡";
    setTimeout(() => {
        typeLetter(letterText, letterMessage);
    }, 1800);
});

const noButton = document.getElementById("noButton");
const noArea = document.getElementById("noArea");
const noWarning = document.getElementById("noWarning");

let noAttempts = 0;

const warningMessage =
    "You really tried to reject me? Tap YES, Liebe... or I'll keep teasing you forever! 😂❤️";

noButton.addEventListener("click", () => {

    noAttempts++;

    if (noAttempts < 3) {

        const maxX = Math.max(0, noArea.clientWidth - noButton.offsetWidth);
        const maxY = Math.max(0, noArea.clientHeight - noButton.offsetHeight);

        noButton.style.left = Math.random() * maxX + "px";
        noButton.style.top = Math.random() * maxY + "px";
        noButton.style.transform = "none";

    } else {

        noButton.style.display = "none";
        noWarning.textContent = warningMessage;

    }

});

const yesButtons = document.querySelectorAll(".yes-btn");

const yesMessages = [
    "I KNEW YOU'D SAY YES! ❤️",
    "Well, I know we're already girlfriends! I just wanted to hear it again! 😂💗",
    "That's my girl! I knew you would say that! 😘"
];

yesButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        document.querySelector(".proposal-card").innerHTML = `
            <div class="proposal-success">
                <h1>YAYYYY! ❤️</h1>
                <h2>${yesMessages[index]}</h2>
                <p>Forever my favourite person, Liebe! ♡</p>
                <div class="celebration-hearts">
                    💗 💕 💖 💗
                </div>
                <button id="celebrationNextButton">
                    NEXT SURPRISE 😈 →
                </button>
            </div>
        `;

        document.getElementById("celebrationNextButton")
            .addEventListener("click", () => {
                document.getElementById("proposalSection").style.display = "none";
                document.getElementById("celebrationSection").style.display = "flex";
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            });
    });
});

continueButton.addEventListener("click", () => {

    letterSection.style.display = "none";
    proposalSection.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// =================================
// FIRST KISS BUTTON
// =================================

const kissButton = document.getElementById("kissButton");
const firstKissMessage = document.getElementById("firstKissMessage");

kissButton.addEventListener("click", () => {

    firstKissMessage.textContent =
        "MUAHH! 💋 Your first official kiss! ❤️";

    firstKissMessage.classList.remove("kiss-pop");

    void firstKissMessage.offsetWidth;

    firstKissMessage.classList.add("kiss-pop");

    kissButton.textContent = "KISS CLAIMED! 💗";
    kissButton.disabled = true;

});


// =================================
// FINAL KISS BUTTON
// =================================

const finalKissButton = document.getElementById("finalKissButton");
const kissMessage = document.getElementById("kissMessage");

finalKissButton.addEventListener("click", () => {

    kissMessage.innerHTML = `
        <div class="final-kiss">
            MUAHHHH! 💋❤️
            <div class="heart-explosion">
                💗 💕 💖 💗 💕
            </div>
            <p>
                One kiss for now...
                Unlimited kisses forever! ♡
            </p>
            <h3>Forever your favourite troublemaker! 😈</h3>
        </div>
    `;

    finalKissButton.textContent = "KISS DELIVERED! 💋";
    finalKissButton.disabled = true;

});