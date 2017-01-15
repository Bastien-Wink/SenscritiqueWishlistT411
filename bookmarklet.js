$(".elco-anchor").each(function() {
    window.open("http://www.t411.li/torrents/search/?search=" + $(this).html() + "&order=seeders&type=desc", "_blank");
});
