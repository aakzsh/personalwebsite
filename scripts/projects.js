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
 document.getElementById('title').innerHTML = 'projects';
 document.getElementById('awestruck').innerHTML = "Awestruck is the new generation all in one social media application. It is made with dart on top of flutter as an android application for now. The app supports multiple features like pedometer, stargazing, chatting and more!";
 document.getElementById('cloudees').innerHTML = "Cloudees is an application powered with deep learning that lets you click or upload pictures of clouds and predicts the category that the cloud falls into. The application is able to differentiate between 9 major types of cloud categories. It is available for android as well as for web.";
 document.getElementById('visualise').innerHTML = "Visualise is a web based application that lets you analyse your overall mood and expressions throughout online meets/speeches or anything of such sort. It runs mood detection throughout the session and gives a detailed summary at the end.";
 document.getElementById('icesicle').innerHTML = "IceSicle is a slide puzzle game made using flutter and is available for multi platforms including android, web and windows. The game is sea themed up with many animations integrated with the help of rive. The game is live at https://icesicle-puzzle.web.app";

 document.getElementById('lang-show').innerHTML = 'हिन्दी';

 document.getElementById('navhome').innerHTML = 'home';
 document.getElementById('navproj').innerHTML = 'projects';
 document.getElementById('navedits').innerHTML = 'edits';
 document.getElementById('navcontact').innerHTML = 'contact';
 document.getElementById('navabout').innerHTML = 'about';
 }
 
 function hindi(){
    document.getElementById('title').innerHTML = 'प्रोजेक्ट्स';
    document.getElementById('awestruck').innerHTML = "i'm aakash";
    document.getElementById('cloudees').innerHTML = 'i do things';
    document.getElementById('visualise').innerHTML = "i'm aakash";
    document.getElementById('icesicle').innerHTML = 'i do things';
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