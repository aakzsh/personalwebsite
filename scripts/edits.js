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
    document.getElementById('endless').innerHTML = 'dive into the world of endless<br>imagination, one frame at a time';
    document.getElementById('end').innerHTML = 'end.';
    document.getElementById('dandelions').innerHTML = 'dandelions';
    document.getElementById('cali').innerHTML = "california dreamin' 'bout you";
    document.getElementById('rearview').innerHTML = 'rEaR vIeW';
document.getElementById('lang-show').innerHTML = 'हिन्दी';

document.getElementById('navhome').innerHTML = 'home';
document.getElementById('navproj').innerHTML = 'projects';
document.getElementById('navedits').innerHTML = 'edits';
document.getElementById('navcontact').innerHTML = 'contact';
document.getElementById('navabout').innerHTML = 'about';
 }
 
 function hindi(){
    document.getElementById('endless').innerHTML = '।। इस अनूठी दुनिया में खो जाए ।। ';
    document.getElementById('end').innerHTML = 'एन्ड।';
    document.getElementById('dandelions').innerHTML = 'डैनडेलाइन्स ';
    document.getElementById('cali').innerHTML = "कैलिफ़ोर्निया ड्रीमिंग बाउट यू";
    document.getElementById('rearview').innerHTML = 'रियर व्यू';
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