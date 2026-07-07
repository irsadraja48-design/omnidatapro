// आपकी दी गई Keys यहाँ सुरक्षित हैं
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

async function loginUser() {
    if (document.getElementById('honeytrap').value !== "") return;
    const { error } = await supabase.auth.signInWithPassword({ 
        email: document.getElementById('email').value, 
        password: document.getElementById('password').value 
    });
    if (error) alert(error.message); else alert("Login Successful!");
}

async function signUpUser() {
    const { error } = await supabase.auth.signUp({ 
        email: document.getElementById('s-email').value, 
        password: document.getElementById('s-password').value 
    });
    if (error) alert(error.message); else alert("Check email for verification!");
}

async function resetPassword() {
    const { error } = await supabase.auth.resetPasswordForEmail(document.getElementById('f-email').value);
    if (error) alert(error.message); else alert("Reset link sent!");
}
