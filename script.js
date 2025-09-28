document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');

    function resizeGridItem(item) {
        const rowHeight = parseInt(window.getComputedStyle(gallery).getPropertyValue('grid-auto-rows'));
        const rowGap = parseInt(window.getComputedStyle(gallery).getPropertyValue('grid-gap'));
        const img = item.querySelector('img');

        if (img.complete) {
            const itemHeight = img.getBoundingClientRect().height; 
            const rowSpan = Math.ceil((itemHeight + rowGap) / (rowHeight + rowGap));
            item.style.gridRowEnd = 'span ' + rowSpan;
        } else {
            img.addEventListener('load', () => resizeGridItem(item));
        }
    }

    function resizeAllGridItems() {
        gallery.querySelectorAll('.card').forEach(resizeGridItem);
    }

    resizeAllGridItems();
    window.addEventListener('resize', resizeAllGridItems);
});