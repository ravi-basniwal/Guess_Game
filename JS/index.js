let computerguess;
let userguess=[];
let userguessresult=document.getElementById("status");
let userNumberfill= document.getElementById("inputBox");
let audioclick= new Audio("./audio/click_game.wav");
let audioloose = new Audio("./audio/loose_game.wav");
let audiofull = new Audio("./audio/full.wav");
let audiowin =new Audio("./audio/win.wav")
const init=()=>
{
    audiofull.play();
    audiofull.volume=0.2;
    computerguess = Math.floor(Math.random() * 100);
    document.getElementById("Newgame").style.display="none"
    document.getElementById("gamearea").style.display="none"
};
const loosegame=()=>
{
    audioloose.play();
}
const startgame = () =>
{
    document.getElementById("welcomeScreen").style.display="none"
    document.getElementById("gamearea").style.display="block"
}
const newgamebegin =()=>
{   
    window.location.reload();
    // audioclick.play();
}
const startNewGame=()=>
{
    audioclick.play();
    document.getElementById("Newgame").style.display="inline"
    userNumberfill.setAttribute("disabled",true);
}
const compare_guess= ()=>
{
    const userNumber =document.getElementById("inputBox").value;
    userguess=[ ...userguess, userNumber];
    document.getElementById("guesses").innerHTML=userguess;
    if(userguess.length<maxgess){
    if(userNumber>computerguess)
    {
       userguessresult.innerHTML = "Your guess is high";
       userNumberfill.value="";
    }
    else if( userNumber<computerguess)
    {
        userguessresult.innerHTML = "Your guess is low";
        userNumberfill.value="";
    }
    else
    {
        userguessresult.innerHTML = "Your guess is correct";
        userNumberfill.value="";
        audiowin.play();
        startNewGame();
    }
    document.getElementById("attempts").innerHTML=userguess.length;}
    else if(userguess.length==maxgess)
    {
        if(userNumber==computerguess)
        {
           userguessresult.innerHTML = "You win the game wow!!";
           userNumberfill.value="";
           audiowin.play();
        }
        else
        {
            
            userguessresult.innerHTML = `Your loose the game lol !! corret guess was ${computerguess}`;
            userNumberfill.value="";
            loosegame();
        }
        document.getElementById("attempts").innerHTML=userguess.length;
        startNewGame();
    }
   
    
};
const Easy_mode= () =>{
    audioclick.play();
     maxgess=10;
    startgame();
}
const Hard_mode= () =>{
    audioclick.play();
    maxgess=5;
    startgame();
}
