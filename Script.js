let comp = 0;
let user = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#btn");

const userscore = document.querySelector("#Score-your")
const compscore = document.querySelector("#Score-comp")



const GenCompResponse = () => {
    const options = ["rock", "paper", "scissors"];
    value = Math.floor(Math.random() * 3);
    return options[value];
}

const showwinner = (userwin, userChoice,CompResponse) => {
    if (userwin) {
        user++;
        userscore.innerHTML = user;
        console.log("You Win!");
        msg.innerHTML = `You Win! Your Choice ${userChoice} beats Comp Choice ${CompResponse} `;
        msg.style.backgroundColor = "green";
        }
    else {
        comp++;
        compscore.innerHTML = comp;
        console.log("You Lose");
        msg.innerHTML = `You Lose `;
        msg.style.backgroundColor = "red";
    }
}

const Draw = () =>{
    console.log("Draw")
    msg.innerHTML = `Draw , Try again!`;
    msg.style.backgroundColor = "#081b31";
}

const playgame = ((userChoice) => {
    console.log("user choices", userChoice);
    // Generate Computer Response
    const CompResponse = GenCompResponse();
    console.log("Com choices", CompResponse);
    if (userChoice === CompResponse) {
        Draw();
    } else {
        let userwin = true;
        if (userChoice === "rock") {
            userwin = CompResponse === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userwin = CompResponse === "scissors" ? false : true;
        }
        else {
            userwin = CompResponse === "rock" ? false : true;
        }
        showwinner(userwin,userChoice,CompResponse);
    }
});
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })
})
