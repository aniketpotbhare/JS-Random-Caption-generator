const caption = [
    "Too glam to give a damn🔥",
    "Her smile was like armor and every day she went to war🙈.",
    "People will stare. Make it worth their while😎",
    "If you obey all the rules, you miss all the fun.😁",
    "Life isn’t perfect but your outfit can be.💋",
    " I like my coffee how I like myself: Dark, bitter, and too hot for you.💖",
    "My height is 5’2”, but my attitude 6’1”😂.",
    " Looks aren't everything, but I have them just in case.🤩",
    "😈I can. I will. You better watch me.",
    "Be you, do you, for you.💎",
     "❤Live in the moment."

];
const generateBtn = document.getElementById("capGenerateBtn");
const cap = document.querySelector(".caption");

// generate random number 
generateRandomNumber = () => {
    return Math.floor(Math.random() * caption.length);
}
// generate random color 
generateBtn.addEventListener("click", () => {
    cap.textContent = caption[generateRandomNumber()];
})