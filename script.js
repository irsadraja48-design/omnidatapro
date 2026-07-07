const supabase = supabase.createClient('YOUR_URL', 'YOUR_KEY');

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

async function loginUser() {
    const btn = document.getElementById('login-btn');
    btn.disabled = true;
    const { error } = await supabase.auth.signInWithPassword({ 
        email: document.getElementById('email').value, 
        password: document.getElementById('password').value 
    });
    btn.disabled = false;
    if (error) alert(error.message); else alert("Login Successful!");
}

async function signUpUser() {
    const btn = document.getElementById('signup-btn');
    btn.disabled = true;
    const { error } = await supabase.auth.signUp({ 
        email: document.getElementById('s-email').value, 
        password: document.getElementById('s-password').value 
    });
    btn.disabled = false;
    if (error) alert(error.message); else alert("Check email for verification!");
}

async function resetPassword() {
    const btn = document.getElementById('reset-btn');
    btn.disabled = true;
    const { error } = await supabase.auth.resetPasswordForEmail(document.getElementById('f-email').value);
    btn.disabled = false;
    if (error) alert(error.message); else alert("Reset link sent!");
}
