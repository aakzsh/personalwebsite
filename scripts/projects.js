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
     if(a!='hindi'){
         english();
     }
     else{
         hindi();
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
    document.getElementById('awestruck').innerHTML = "ऑस्ट्रक एक सोशल मिडिया एप है जिसमे आप काफी कुछ कर सकते है जैसे कि चैटिंग, स्टेप काउंटर, तारों को देखना आदि।";
    document.getElementById('cloudees').innerHTML = 'क्लाइडीज एक एप है जिसमे आप बादलों की तस्वीर डाल सकते है और फिर वह आपको बताएगा की जिस बादल की तस्वीर आपने अपलोड की है वह किस कैटेगरी का है। यह एप 9 प्रकार की कैटेगरी को पहचानने में सक्षम है।';
    document.getElementById('visualise').innerHTML = "विजुलाइज एक वेब एप्लीकेशन है जिसमे आप अपनी वीडियो चालू करके यह देख सकते है की पूरी वीडियो में आपने कितने प्रकार की अभिव्यक्ति की। अंत में आप उसका पूरा डाटा भी देख पाएंगे।";
    document.getElementById('icesicle').innerHTML = 'आइसिकल एक स्लाइड पजल गेम है जो की फ्लटर पर बनाया गया है। इसके एनिमेशंस के किए राईव का प्रयोग किया गया है। पूरा गेम समुंदर की थीम पर आधारित है।';
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