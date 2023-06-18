window.addEventListener('wheel', function(event) {
    event.preventDefault();
    var scrollAmount = event.deltaX || event.deltaY || event.deltaZ;
    document.documentElement.scrollLeft += scrollAmount;
});