//variables
const heading = document.querySelector("#heading");
let answer = document.querySelector("#answer");

//functions
answer.oninput = function(){
    if (answer.value == "Hello Kitty"){
        heading.innerHTML = "You've Chosen Hello Kitty.";
    }
    else if (answer.value == 'My Melody'){
        heading.innerHTML = "You've Chosen My Melody.";
    }
    else if (answer.value == "Kuromi"){
        heading.innerHTML = "You've Chosen Kuromi.";
    }
    
    
answer.oninput = function(){
    if (answer.value == "Twin Stars"){
        heading.innerHTML = "You've Chosen Twin Stars.";
    }
    else if (answer.value == "Cinnamoroll"){
        heading.innerHTML = "You've Chosen Cinnamoroll.";
    }
    else if (answer.value == "Pompompurin"){
        heading.innerHTML = "You've Chosen PompomPurin.";
    }
}
}

