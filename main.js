import { getUserInfo } from "./api/userService"
import { worker } from "./mocks/browser"

// Start service workers
if (process.env.NODE_ENV === "development") {
    worker.start();
}

const loadInfo = async () => {
    // Hide user info block
    document.getElementById('userInfo').hidden = true;

    // show "loading" block
    document.getElementById('loading').hidden = false;

    // Fetch user info
    const info = await getUserInfo(2)

    // Fill fields with user's data
    if (info) {
        document.getElementById('firstName').innerHTML = info.firstName
        document.getElementById('lastName').innerHTML = info.lastName


        document.getElementById('email').innerHTML = info.email
        document.getElementById('login').innerHTML = info.login

        document.getElementById('registered').innerHTML = info.registered

        // Hide loading state and show user info
        document.getElementById('userInfo').hidden = false
        document.getElementById('loading').hidden = true
    }
}



// Fetch user info
loadInfo()
