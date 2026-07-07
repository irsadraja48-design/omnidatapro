function showScreen(screenId) {
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('signup-box').style.display = 'none';
    document.getElementById('forget-box').style.display = 'none';
    document.getElementById(screenId).style.display = 'block';
}
