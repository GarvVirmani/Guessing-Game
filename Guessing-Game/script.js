const max=prompt("Enter the max number");
const random=Math.floor(Math.random()*max)+1;

let guess=prompt("Guess the number");

while(true){
    if(guess=="quit"){
        console.log("User Quit.....");
        break;
    }
    if(guess==random){
        console.log("You are Right! Congrats!");
        break;
    }
    else if(guess<random){
        guess=prompt("Hint:Your guess was too small.Please try again");
    }
    else{
        guess=prompt("Hint:Your guess was too large.Please try again");
    }

}
