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
 document.getElementById('contact').innerHTML = "contact me";
 document.getElementById('lang-show').innerHTML = 'हिन्दी';

 document.getElementById('navhome').innerHTML = 'home';
document.getElementById('navproj').innerHTML = 'projects';
document.getElementById('navedits').innerHTML = 'edits';
document.getElementById('navcontact').innerHTML = 'contact';
document.getElementById('navabout').innerHTML = 'about';
 }
 
 function hindi(){
    document.getElementById('contact').innerHTML = "संपर्क साधन";
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