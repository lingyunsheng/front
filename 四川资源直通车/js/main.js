+function() {
    window.onscroll = function() {
        var  scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var navTop = document.getElementById('xkw-nav');
        // console.log(scrollTop, navTop);
        if(navTop.offsetHeight>50) {
            navTop.style.display='none';
        }
        if(scrollTop>300) {
            navTop.style.display='block';
            navTop.style.position='fixed';
            navTop.style.top='200px';
            navTop.style.right='70px';
        }
        if(scrollTop>5000) {
            navTop.style.display='block';
            navTop.style.position='fixed';
            navTop.style.top='20px';
            navTop.style.right='70px';
        }
    }
}();