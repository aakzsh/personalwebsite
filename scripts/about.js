window.onload = ()=>{
    var a = 'english'
     try{
 a = localStorage.getItem('aakzsh-lang');
     }
     catch{
 localStorage.setItem('aakzsh-lang', 'english')
     }
 
     console.log(a)
 
     check(a);
 }
 
 
 function check(a){
     if(a=='english'){
        hindi();
     }
     else{
         
         english();
     }
 }
 
 function english(){
 document.getElementById('intro').innerHTML = "who am i?";
 document.getElementById('desc').innerHTML = "i'm aakash shrivastava, persuading a degree of btech in ECE from USICT, delhi. I am very proud of my identify, all about it. I'm about a lot more than just my academic life, and thats the least of me. Gonna keep it really concise, i'm 19 yo from noida, india. i like to do a lot of things, it includes coding, listening to music, editing videos plus all the basic likeable things, like traveling and food. About my coding path, i've made a number of projects, even featured some of them in the projects tab. i wont be bragging about the tech stack i know or the prizes ive won, because i feel what matters in the end is how far youve come along your journey and how are you keeping up with it. i'm learning everyday, hopefully getting better and better. I like stargazing, feels good to see things that'll never be as close as you might dream of them to be.<br>video editing helps me feel nice, to put my imagination into work and to make my frames do something surreal and just amazing, its been a part of me for a long time now, and im hoping to learn more in that aspect and make my imaginations even more vivid. so yea, that was a little about me.";
 document.getElementById('lang-show').innerHTML = 'हिन्दी';
 document.getElementById('navhome').innerHTML = 'home';
document.getElementById('navproj').innerHTML = 'projects';
document.getElementById('navedits').innerHTML = 'edits';
document.getElementById('navcontact').innerHTML = 'contact';
document.getElementById('navabout').innerHTML = 'about';
 }
 
 function hindi(){
    document.getElementById('intro').innerHTML = "मैं कौन हूँ ?";
    document.getElementById('desc').innerHTML = 'hindi baazi';
    document.getElementById('lang-show').innerHTML = 'english';
 
    document.getElementById('navhome').innerHTML = 'होम';
document.getElementById('navproj').innerHTML = 'प्रोजेक्ट्स';
document.getElementById('navedits').innerHTML = 'एडिट्स';
document.getElementById('navcontact').innerHTML = 'संपर्क';
document.getElementById('navabout').innerHTML = 'अबाउट';
}


 
 
 function set(){
     var x = document.getElementById('lang-show').textContent;
 
     if (x!='english'){
         document.getElementById('lang-show').innerHTML = 'english';
         hindi();
         localStorage.setItem('aakzsh-lang', 'hindi')
     }
     else{
         document.getElementById('lang-show').innerHTML = 'हिन्दी';
         english();
         localStorage.setItem('aakzsh-lang', 'english')
     }
 }