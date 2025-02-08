window.addEventListener('DOMContentLoaded', async ()=>{
    console.log("script is running")
    setTimeout(() => {
        main()
    }, 1);
})

function main(){
    let navBtn = document.getElementById('navBtn');
    let navBar = document.getElementById('nav-bar');
    let navUl  = document.getElementById('nav-ul');
    let BtnLns = document.getElementsByClassName('btnln');
    let navBtnUprBar = document.getElementById('nav-btn-upr-bar');
    let navBtnMdlBar = document.getElementById('nav-btn-mdl-bar');
    let navBtnLwrBar = document.getElementById('nav-btn-lwr-bar');
    let crsBar1 = document.getElementById('crs-bar1');
    let crsBar2 = document.getElementById('crs-bar2');
    let themeCh = document.getElementById('theme-ch');
    let r = document.querySelector(':root');
    let rs = getComputedStyle(r);

    // console.log(rs.getPropertyValue('--theme'));


    function navBarShow(){
        navBar.style.transform = 'translateX(0vw)';
        navBar.style.transitionDuration = '600ms';
        navBtnUprBar.style.transform = 'rotate(45deg) translateY(100%)';
        navBtnLwrBar.style.transform = 'rotate(-45deg) translateY(-100%)';
        navBtnMdlBar.style.transform = 'scaleX(0.1)';
        // navBtnMdlBar.style.display = 'none';
        navBtn.style.justifyContent = 'center';
        navBtn.style.textAlign = 'center';
        navBar.style.opacity = '1';
    }

    function navBarHide(){
        navBar.style.transform = 'translateX(-50vw)';
        navBar.style.transitionDuration = '200ms';
        navBtnUprBar.style.transform = 'rotate(0deg)';
        navBtnLwrBar.style.transform = 'rotate(0deg)';
        // navBtnMdlBar.style.display = 'block';
        navBtnMdlBar.style.transform = 'scaleX(1)';
        navBtn.style.justifyContent = 'space-around';
        navBar.style.opacity = '0';
    }

    function applyLightTheme(){
        r.style.setProperty('--theme', 1);
        r.style.setProperty('--defaultBgC', 'white');
        r.style.setProperty('--defaultFgC', 'black');
        r.style.setProperty('--activeBackground', 'rgba(169, 169, 169, 0.6)');
        r.style.setProperty('--nonActiveBorder', 'rgba(131, 131, 131, 0.6)');

    }

    function applyDarkTheme(){
        r.style.setProperty('--theme', 0);
        r.style.setProperty('--defaultBgC', 'black');
        r.style.setProperty('--defaultFgC', 'white');
        r.style.setProperty('--activeBackground', 'rgba(97, 97, 97, 0.473);');
        r.style.setProperty('--nonActiveBorder', 'rgba(255, 255, 255, 0.61)');
    }

    themeCh.addEventListener('click', ()=>{
        if (rs.getPropertyValue('--theme') == 0){
            applyLightTheme();
        }
        else{
            applyDarkTheme();
        }
    })

    themeCh.addEventListener(TouchEvent, ()=>{
        if (rs.getPropertyValue('--theme') == 0){
            applyLightTheme();
            console.log("touched")
        }
        else{
            applyDarkTheme();
        }
    })

    navBtn.addEventListener('touch', ()=>{
        if (navBar.style.transform == 'translateX(-50vw)'){
            navBarShow();
            console.log("touched")
        }
        else{
            navBarHide();
        }

    });

    navBtn.addEventListener('click', ()=>{
        if (navBar.style.transform == 'translateX(-50vw)'){
            navBarShow();
            console.log("clicked")
        }
        else{
            navBarHide();
        }

    });

}
