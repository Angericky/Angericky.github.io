document.addEventListener('DOMContentLoaded', function () {
    if (typeof ($.fn.lightGallery) === 'function') {
        $('.article').lightGallery({ selector: '.gallery-item' });
    }
    if (typeof ($.fn.justifiedGallery) === 'function') {
        $('.justified-gallery').justifiedGallery({rowHeight: 300, margins: 10});
    }
    $('.icon-douban').remove();
    $('.icon-linkedin').remove();
    $('.icon-diandian').remove();
    $('.icon-google').remove();
});