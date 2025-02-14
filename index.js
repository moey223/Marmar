function playMessage(button) {
    button.remove();
    let message = "Ever since I met you on September 15, 2024 (when you told me to jump out of a plane with a parachute), my life has been nothing but heaven. I've started loving life because of you; I've started wanting to live because of you. You've been my greatest blessing and the most precious gem I have. I could keep yapping about how amazing you are until morning, but I'll keep it short—I love you, Anmar. I love you more than I've ever loved any other girl in my entire life. I've never felt so happy in someone's presence, and I've never felt that someone was as worthy of my care and attention as you are. Your eyes are so capable of turning me from this nervous and sad boy into a happy one. I've never been so thankful to have someone in my life and I hope i can be better for you. I'm sorry for being such a pain in your ass lately for that i apologize,  I'd love to be your man from October 27, 2024, until our last days on this Earth. From the bottom of my heart, I love you and Happy Valentine's Day.";
    const div = document.createElement("div");
    div.id = "messageDiv";
    div.style.backgroundColor = "pink";
    div.style.width = "600px";
    div.style.height = "400px";
    div.style.borderRadius = "20px";
    div.style.color = "red";
    div.style.padding = "10px";
    document.body.appendChild(div);
    setTimeout(() => {
      div.style.opacity = "1";
    }, 50);
    let index = 0;
    function typeWriter() {
      if (index < message.length) {
        div.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // Adjust typing speed if desired
      }
    }
    typeWriter();
  }
const messages = [
    "I couldn't not make you a Valentine's gift",
    "I made you a letter telling you",
    "How much i love you",
    "Im sorry for being an ass as of late",
    "Hope you like it princess Anmar😉",
];

let index = 0;
function changeText() {
    let heading = document.getElementById("marmar");

    heading.style.opacity = "0"; 
    setTimeout(() => {
        heading.innerText = messages[index]; 
        heading.style.opacity = "1"; 
        index++;

        if (index < messages.length) {
            setTimeout(changeText, 4000);t
        } else {
            setTimeout(() => {
                heading.style.opacity = "0";
                setTimeout(() => {
                    heading.style.display = "none"; 
                    document.getElementById("readyButton").style.display = "block"; 
                    setTimeout(() => {
                        document.getElementById("readyButton").style.opacity = "1";
                    }, 500);
                }, 1000);
            }, 4000);
        }
    }, 1000); 
}

setTimeout(changeText, 4000); 



