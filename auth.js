const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

loginBtn.onclick = () => {
  loginBtn.classList.add('active');
  registerBtn.classList.remove('active');

  loginForm.classList.add('active');
  registerForm.classList.remove('active');
};

registerBtn.onclick = () => {
  registerBtn.classList.add('active');
  loginBtn.classList.remove('active');

  registerForm.classList.add('active');
  loginForm.classList.remove('active');
};

document.querySelectorAll('.eye-toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const input = toggle.previousElementSibling;
    const isPassword = input.type === 'password';

    input.type = isPassword ? 'text' : 'password';
    toggle.classList.toggle('active', isPassword);
  });
});

function goProfile(){
  window.location.href = "profile.html";
}
