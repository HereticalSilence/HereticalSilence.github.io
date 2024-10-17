function openSubPage(url) {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal-iframe').src = url;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modal-iframe').src = '';
}