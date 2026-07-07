// Environment Variables का उपयोग करें (Vercel Settings में सेट करें)
const SUPABASE_URL = 'YOUR_SUPABASE_URL_HERE'; 
const SUPABASE_KEY = 'YOUR_SUPABASE_KEY_HERE'; 

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// स्क्रीन बदलने का फंक्शन
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

// लॉगिन
async function loginUser() {
    if (document.getElementById('honeytrap').value !== "") return;
    const { error } = await supabase.auth.signInWithPassword({ 
        email: document.getElementById('email').value, 
        password: document.getElementById('password').value 
    });
    if (error) alert(error.message); else alert("Login Successful!");
}

// साइन अप
async function signUpUser() {
    const { error } = await supabase.auth.signUp({ 
        email: document.getElementById('s-email').value, 
        password: document.getElementById('s-password').value 
    });
    if (error) alert(error.message); else alert("Check email for verification!");
}

// फॉरगेट पासवर्ड
async function resetPassword() {
    const { error } = await supabase.auth.resetPasswordForEmail(document.getElementById('f-email').value);
    if (error) alert(error.message); else alert("Reset link sent!");
}
