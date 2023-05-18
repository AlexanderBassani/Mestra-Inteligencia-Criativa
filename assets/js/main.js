const url = 'https://mestrainteligencia.com.br/'
const urlHash = window.location.hash
// const url = window.location.href

$(document).ready(() => {
    $('.hash').each(function (e) {
        let ycord =  $(this).offset().top;
        let hash = $(this).attr('href');
        console.log(ycord)
        if(urlHash == ('#' + hash)){
            scroll(0, ycord - 30)
        }
    })
});


$(function () {
    $(document).scroll(function () {
        let currentHash = ''
        let top = window.pageYOffset;

        if(top == 0){
            window.history.pushState({}, "", url);
        }
        
        $('.hash').each(function () {
            let distance = top - $(this).offset().top;
            let hash = $(this).attr('href');

            if(distance == 0){
                window.history.pushState({}, "", url);
            }

            if (distance < 30 && distance > -30 && currentHash != hash) {
                // alert(hash);
                currentHash = hash;
                console.log(url + '/teste')
                window.history.pushState({}, "", url + '#' + hash);
                
            }
            
            // if((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight){
            //     window.history.pushState({}, "", url + 'contato');
            // }
        });
    });
});