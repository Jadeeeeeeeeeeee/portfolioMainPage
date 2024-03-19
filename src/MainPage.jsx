import GitHub from './assets/GItHub.png'
import nissan from './assets/nissansx200.jpeg'
import reddit from './assets/redditLogo.png'
import tiktok from './assets/tiktok.png'
import React, {useState} from 'react'

function MainPage() {

    const [clicked, setClick] = useState(1);
    
    function switchClick() {
        var img = document.getElementsByClassName("pfp")[0]; 
        var header = document.getElementsByClassName("Header")[0];
        var header2 = document.getElementsByClassName("Header2")[0];
        var text = document.querySelector(".text h3");
        var text2 = document.querySelector(".text2 h3")
        var socialIcons = document.getElementsByClassName('SocialIcon');
        var me = document.getElementsByClassName("Me")[0];
    
        if (clicked === 1) {
            img.style.left = "5%";
            img.style.transition = "1s";
            header.style.opacity = "0"; 
            text.style.opacity = "0"; 
            header2.style.opacity = "1";
            text2.style.opacity = "1";
            me.style.background = "black"
            // Hide social icons
            for (let icon of socialIcons) {
                icon.style.opacity = "0";
            }
            setClick(2);
        } else if (clicked === 2) {
            img.style.left = "63%";
            img.style.transition = "1s";
            header.style.visibility = "visible";
            header.style.opacity = "1"; 
            text.style.opacity = "1"; 
            header2.style.opacity = "0";
            text2.style.opacity = "0";
            me.style.background = "white"
            // Show social icons
            for (let icon of socialIcons) {
                icon.style.opacity = "1";
            }
            setClick(1);
        }
    }
    
    
 

    return(<>
    <div className="MainPage">
        <div className='Me'>
        <div className='text'>
        <h1 className='Header'>JadeYeti</h1>
        <h3 className='h31'>hello i am a -18 web dev with average knowledge of css html and js and a beginner in react.js</h3>
        </div>
        <div className='text2'>
        <h1 className='Header2'>JadeYeti</h1>
        <h3 className='h32'>i like proggraming alot and planning to work in the programming field, i am also intrested in game dev and i know a bit of c#</h3>
        </div>
        <img className='pfp' src={nissan} alt="Pfp" onClick={switchClick} />
        <div className='socials'>
            <a href="https://github.com/Jadeeeeeeeeeeee"><img src={GitHub} className='SocialIcon'/></a>
            <a href="https://www.reddit.com/user/JadeYeti1234/"><img src={reddit} className='SocialIcon'/></a>
            <a href="https://www.tiktok.com/@jadeyetis"><img src={tiktok} className='SocialIcon'/></a>
        </div>
        </div>
        <h4>yes this is a switch dawg click on the pfp</h4>
    </div>
    </>);
}

export default MainPage