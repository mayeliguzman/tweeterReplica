const tweetText = document.getElementById("tweetText");
const charCount = document.getElementById("charCount");
const tweetBtn = document.getElementById("tweetBtn");

const MAX_CHARS = 160;

tweetBtn.disabled = true;

tweetText.addEventListener("input", updateCharCount);

function updateCharCount() {
    const textLength = tweetText.value.length;
    const remaining = MAX_CHARS - textLength;

    if (remaining < 0) {
        charCount.textContent = "Tweet exceeds 160 characters!";
        tweetBtn.disabled = true;
    } else {
        charCount.textContent = `${remaining} characters remaining`;
        tweetBtn.disabled = textLength === 0;
    }
}