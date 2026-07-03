<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Omni Data Pro</title>
    <!-- Supabase Library -->
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
    <style>
        body { font-family: sans-serif; background: #0f172a; color: white; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
        .container { background: #1e293b; padding: 2rem; border-radius: 12px; width: 320px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3); }
        h2 { margin-bottom: 1.5rem; color: #38bdf8; }
        input { width: 100%; padding: 12px; margin: 8px 0; border-radius: 6px; border: none; box-sizing: border-box; }
        button { width: 100%; padding: 12px; margin: 8px 0; border-radius: 6px; border: none; cursor: pointer; font-weight: bold; color: white; transition: 0.3s; }
        .btn-login { background: #3b82f6; }
        .btn-signup { background: #10b981; }
        .btn-reset { background: #64748b; font-size: 0.8rem; }
    </style>
</head>
<body>

<div class="container">
    <h2>Omni Data Pro</h2>
    <input type="email" id="email" placeholder="Email">
    <input type="password" id="password" placeholder="Password">
    
    <button class="btn-login" onclick="login()">Login</button>
    <button class="btn-signup" onclick="signup()">Sign Up</button>
    <button class="btn-reset" onclick="resetPassword()">Forgot Password?</button>
</div>

<script>
    // Supabase Initialization
    const supabaseUrl = 'https://uenidxhrocphbtxpuyxr.supabase.co';
    const supabaseKey = 'sb_publishable_5RtT4h_eU42vaLH5RhMC2g_PScPgKc1';
    const supabase = supabase.createClient(supabaseUrl, supabaseKey);

    async function signup() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) alert(error.message); else alert("Sign up successful! Please check your email.");
    }

    async function login() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) alert(error.message); else alert("Login successful!");
    }

    async function resetPassword() {
        const email = document.getElementById('email').value;
        if (!email) { alert("Please enter your email first."); return; }
        const { error } = await supabase.auth.resetPasswordForEmail(email);
        if (error) alert(error.message); else alert("Password reset link sent to your email.");
    }
</script>

</body>
</html>
