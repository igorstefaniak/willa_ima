/* $('#bookmarks').mouseenter(
    function(){ $(this).removeClass('bx-bookmark-alt'); $(this).addClass('bxs-bookmark-alt')},)
$('#bookmarks').mouseleave(
    function(){ $(this).removeClass('bxs-bookmark-alt'); $(this).addClass('bx-bookmark-alt')},)

$('#love').mouseenter(
    function(){ $(this).removeClass('bx-heart'); $(this).addClass('bxs-heart'); $(this).attr('style', 'color:#e91e43');},)
$('#love').mouseleave(
    function(){ $(this).removeClass('bxs-heart'); $(this).addClass('bx-heart'); $(this).attr('style', 'color:#ffffff');},)

$('#search').mouseenter(
    function(){ $(this).removeClass('bx-search'); $(this).addClass('bxs-search')},)
$('#search').mouseleave(
    function(){ $(this).removeClass('bxs-search'); $(this).addClass('bx-search')},)

$('#add').mouseenter(
    function(){ $(this).removeClass('bx-message-add'); $(this).addClass('bxs-message-add')},)
$('#add').mouseleave(
    function(){ $(this).removeClass('bxs-message-add'); $(this).addClass('bx-message-add')},) */


$('nav .right-navbar a').mouseenter(
    function(){
        var boxicons = $(this).find('i').attr('class').substring(3);
        $(this).find('i').removeClass(boxicons).addClass('bxs'+ boxicons.substring(2));
    },
);
$('nav .right-navbar a').mouseleave(
    function(){
        var boxicons = $(this).find('i').attr('class').substring(3);
        console.log(boxicons)
        $(this).find('i').removeClass(boxicons).addClass('bx'+ boxicons.substring(3));
    },
);



    let isTransparent = true;
const tag = document.querySelector('nav');

window.addEventListener('scroll', event => {
    if (window.scrollY > 70 && isTransparent) {
        tag.classList.add('_menu-darker');
        isTransparent = false;
    }

    if (window.scrollY <= 70 && !isTransparent) {
        tag.classList.remove('_menu-darker');
        isTransparent = true;
    }

    
});

$('img[data-enlargable]').addClass('img-enlargable').click(function () {
    var src = $(this).attr('src');
    $('<div class="gallery">').css({
        opacity: '0',
        background: 'RGBA(0,0,0,.5)',
        backgroundSize: 'contain',
        width: '100%', height: '100%',
        position: 'fixed',
        zIndex: '10000',
        top: '0', left: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 500ms'
    }).appendTo('body');
    $('<img class="image">').attr('src', src).css({
        cursor: 'zoom-out',
        height: '95vh',
        opacity: '0',
        borderRadius: '12px',
        transition: 'all 500ms'}).click(function () {
            $('.gallery').css('opacity','0');
            setTimeout(function () {$('.gallery').remove();}, 300)
        
        }).appendTo($('.gallery'));

    setTimeout(function () {
        $('.gallery').css('opacity', '1')[0];
        $('.image').css('opacity', '1')[0];
    }
        , 5);
});