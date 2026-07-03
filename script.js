<script>
    // Supabase Initialization
    const supabaseUrl = 'https://uenidxhrocphbtxpuyxr.supabase.co';
    const supabaseKey = 'sb_publishable_5RtT4h_eU42vaLH5RhMC2g_PScPgKc1';
    const supabase = supabase.createClient(supabaseUrl, supabaseKey);

    // डेटा सेव करने वाला फंक्शन
    async function saveData() {
        // फॉर्म से डेटा उठाएं
        const entryValue = document.getElementById('data-entry-input').value;
        
        if (!entryValue) {
            alert("कृपया कुछ लिखें!");
            return;
        }

        // Supabase में डेटा भेजें
        const { error } = await supabase
            .from('user_data') // आपकी टेबल का नाम
            .insert([{ data_entry: entryValue }]); // कॉलम का नाम

        if (error) {
            alert("एरर: " + error.message);
        } else {
            alert("डेटा सफलतापूर्वक सेव हो गया!");
            document.getElementById('data-entry-input').value = ""; // बॉक्स खाली करें
        }
    }
</script>
