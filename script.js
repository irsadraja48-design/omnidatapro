// अपनी नई जनरेट की हुई Keys यहाँ डालें
const SUPABASE_URL = 'https://your-project-id.supabase.co'; 
const SUPABASE_KEY = 'YOUR_NEW_ANON_KEY';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function showScreen(id) {
    document.getElementById('login-box').style.display = (id === 'login-box') ? 'block' : 'none';
    document.getElementById('signup-box').style.display = (id === 'signup-box') ? 'block' : 'none';
}

async function loginUser() {
    // HoneyTrap Check
    if (document.getElementById('honeytrap').value !== "") return;

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    else alert("Login Successful!");
}

async function signUpUser() {
    const email = document.getElementById('s-email').value;
    const password = document.getElementById('s-password').value;

    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else alert("Sign Up Successful! Please check your email.");
}
