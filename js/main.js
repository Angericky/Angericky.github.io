(function($){
    $('.article img:not(".not-gallery-item")').each(function () {
        // wrap images with link and add caption if possible
        if ($(this).parent('a').length === 0) {
            $(this).wrap('<a class="gallery-item" href="' + $(this).attr('src') + '"></a>');
            if (this.alt) {
                $(this).after('<div class="has-text-centered is-size-6 has-text-grey caption">' + this.alt + '</div>');
            }
        }
    });

    /*if (typeof(moment) === 'function') {
        $('.article-meta time').each(function () {
            $(this).text(moment($(this).attr('datetime')).fromNow());
        });
    }*/

    function adjustNavbar() {
        const navbarWidth = $('.navbar-main .navbar-start').outerWidth() + $('.navbar-main .navbar-end').outerWidth();
        if ($(document).outerWidth() < navbarWidth) {
            $('.navbar-main .navbar-menu').addClass('is-flex-start');
        } else {
            $('.navbar-main .navbar-menu').removeClass('is-flex-start');
        }
    }
    adjustNavbar();
    $(window).resize(adjustNavbar);

    var $toc = $('#toc');
    if ($toc.length > 0) {
    var $mask = $('<div>');
        $mask.attr('id', 'toc-mask');

        $('body').append($mask);

        function toggleToc() {
            $toc.toggleClass('is-active');
            $mask.toggleClass('is-active');
        }

        $toc.on('click', toggleToc);
        $mask.on('click', toggleToc);
        $('.navbar-main .catalogue').on('click', toggleToc);
    }
})(jQuery);

var clickIcon = function(){
    $("#toc .menu-list li > i").click(function(){
        $(this).siblings(".menu-list").slideToggle(100);
        $(this).toggleClass("hide");
        $(this).siblings("i").toggleClass("hide");
    })
}()

var $itemHasChild = $("#toc .menu-list li:has(> .menu-list)");
var $titleHasChild = $itemHasChild.children("li");


var $tocToExpand = $("#toc .menu-list li> .fa-chevron-right");

// 默认展开目录，所以隐藏掉表示“目录已展开”的图标（向下的小三角）
var $tocToFold = $('#toc .menu-list li> .fa-chevron-down');
$tocToExpand.addClass("hide");
