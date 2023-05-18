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
        let topPage = window.pageYOffset;

        $('.hash').each(function () {
            let distance = topPage - $(this).offset().top;
            let hash = $(this).attr('href');

            console.log(topPage >= 0 && topPage <= ($('#a-mestra').offset().top - 30) && currentHash != '')

            if(topPage >= 0 && topPage <= ($('#a-mestra').offset().top - 30) && currentHash != ''){
                window.history.pushState({}, "", url);
                currentHash = ''
            }

            if (distance < 30 && distance > -30 && currentHash != hash) {
                // alert(hash);
                currentHash = hash;
                window.history.pushState({}, "", url + '#' + hash);
                
            }
            
            // if((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight){
            //     window.history.pushState({}, "", url + 'contato');
            // }
        });
    });
});