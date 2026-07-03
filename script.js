<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Omni Data Pro</title>
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
    <style>
        body { font-family: sans-serif; background: #0f172a; color: white; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
        .container { background: #1e293b; padding: 2rem; border-radius: 12px; width: 320px; text-align: center; }
        input { width: 100%; padding: 12px; margin: 10px 0; border-radius: 6px; border: 1px solid #334155; background: #0f172a; color: white; box-sizing: border-box; }
        .btn-main { width: 100%; padding: 12px; margin-top: 10px; border-radius: 6px; border: none; cursor: pointer; font-weight: bold; color: white; background: #3b82f6; }
        .btn-link { background: none; border: none; color: #94a3b8; cursor: pointer; font-size: 0.9rem; margin-top: 10px; text-decoration: underline; }
    </style>
</head>
<body>

<div class="container">
    <h2>Omni Data Pro</h2>
    <input type="email" id="email" placeholder="ईमेल">
    <input type="password" id="password" placeholder="पासवर्ड">
    
    <button class="btn-main" onclick="login()">लॉगिन</button>
    
    <!-- ये रहे आपके बटन्स -->
    <div style="margin-top: 15px;">
        <button class="btn-link" onclick="signup()">साइन अप</button> | 
        <button class="btn-link" onclick="resetPassword()">पासवर्ड भूल गए?</button>
    </div>
</div>

<script>
    const supabaseUrl = 'https://uenidxhrocphbtxpuyxr.supabase.co';
    const supabaseKey = 'sb_publishable_5RtT4h_eU42vaLH5RhMC2g_PScPgKc1';
    const supabase = supabase.createClient(supabaseUrl, supabaseKey);

    async function login() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) alert(error.message); else alert("लॉगिन सफल!");
    }

    async function signup() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) alert(error.message); else alert("साइन अप सफल! कृपया ईमेल चेक करें।");
    }

    async function resetPassword() {
        const email = document.getElementById('email').value;
        if (!email) { alert("कृपया ईमेल डालें"); return; }
        const { error } = await supabase.auth.resetPasswordForEmail(email);
        if (error) alert(error.message); else alert("पासवर्ड रीसेट लिंक आपके ईमेल पर भेज दिया गया है।");
    }
</script>

</body>
</html>
