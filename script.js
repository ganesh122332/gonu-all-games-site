function toggleMenu() {
    const panel = document.getElementById('sidePanel');
    if (panel.style.right === '0px') {
        panel.style.right = '-250px';
    } else {
        panel.style.right = '0px';
    }
}
