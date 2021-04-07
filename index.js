if (/#.*?$/.test(window.location.href)) {
    const text = atob(window.location.href.split('#')[1]);
    document.getElementById('text').textContent = text;
    document.getElementById('view').style.display = 'flex';
} else {
    document.getElementById('create').style.display = 'flex';
}

document.getElementById('submit').onclick = () => {
    const text = btoa(document.getElementById('input').value);
    const link = `${window.location.protocol}//${window.location.hostname}/#${text}`;
    document.getElementById('link').value = link;
};

document.getElementById('copy').onclick = () => {
    const link = document.getElementById('link');
    link.select();
    link.setSelectionRange(0, link.value.length);
    document.execCommand('copy');
};
