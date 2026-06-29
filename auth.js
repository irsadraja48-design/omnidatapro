
const ui = {
    show: (id) => {
        document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
        document.getElementById(id).style.display = 'block';
    }
};
const auth = {
    login: () => {
        const uid = document.getElementById('uid').value;
        if(uid) {
            document.getElementById('auth-container').style.display = 'none';
            document.getElementById('dashboard-container').style.display = 'block';
            document.getElementById('display-uid').innerText = "ID: " + uid;
        } else { alert("आईडी डालें"); }
    }
};
