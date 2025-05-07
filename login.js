document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const showRegister = document.getElementById("showRegister");
  const showLogin = document.getElementById("showLogin");

  // Show Register Form
  showRegister.addEventListener("click", function (e) {
    e.preventDefault();
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
  });

  // Show Login Form
  showLogin.addEventListener("click", function (e) {
    e.preventDefault();
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  });

  // Handle Login
  loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = loginForm.querySelector('input[name="email"]').value;
    const password = loginForm.querySelector('input[name="password"]').value;

    try {
      const res = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const text = await res.text();

      if (res.ok) {
        alert('✅ ' + text);
        window.location.href = 'index.html'; // Redirect to homepage (change if needed)
      } else {
        alert('❌ ' + text);
      }
    } catch (err) {
      console.error('Login error:', err.message);
      alert('Something went wrong during login.');
    }
  });

  // Handle Registration
  registerForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = registerForm.querySelector('input[name="email"]').value;
    const password = registerForm.querySelector('input[name="password"]').value;

    try {
      const res = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const text = await res.text();

      if (res.ok) {
        alert('✅ ' + text);
        window.location.href = 'index.html'; // Redirect to homepage (change if needed)
      } else {
        alert('❌ ' + text);
      }
    } catch (err) {
      console.error('Register error:', err.message);
      alert('Something went wrong during registration.');
    }
  });
});
