module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { username, password } = req.body;

    // This is a simulated authentication check.
    // In a real app, you would verify these credentials against a database.
    console.log(`Login attempt - User: ${username} | Password: ${password}`);

    // For demonstration, we'll simulate a failure to show how the UI handles it.
    // You can change this logic to "success" later.
    const isSuccess = false;

    // Simulate a bit of network delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (isSuccess) {
        res.status(200).json({ success: true, message: 'Successfully signed in!' });
    } else {
        res.status(401).json({
            success: false,
            error: "Your username or password may be incorrect, or you may need to update to a Riot Account if you haven't played in a few months."
        });
    }
};
