window.api.receive("update_percent", (progressData) => {
    $(".progressbars > div").css('width',progressData+"%");
});

window.api.receive("update_status", (data) => {
    console.log(data);
    $(".status").text(data);
});