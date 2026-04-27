document.querySelectorAll('.field.editable').forEach(field => {
  const btn = field.querySelector('.edit-btn');
  const input = field.querySelector('input, textarea');

  btn.addEventListener('click', () => {

    const isEditing = field.classList.contains('active');

    if (!isEditing) {
      field.classList.add('active');
      input.disabled = false;
      input.focus();
      btn.textContent = '✔';
    } else {
      field.classList.remove('active');
      input.disabled = true;
      btn.textContent = '✏';
    }

  });
});

const avatarInput = document.getElementById('avatarInput');
const avatarCircle = document.getElementById('avatarCircle');
const avatarPreview = document.getElementById('avatarPreview');
const avatarPlus = document.getElementById('avatarPlus');

avatarCircle.addEventListener('click', () => {
  avatarInput.click();
});

avatarInput.addEventListener('change', () => {
  const file = avatarInput.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = (e) => {
    avatarPreview.src = e.target.result;
    avatarPreview.style.display = 'block';
    avatarPlus.style.display = 'none';
  };

  reader.readAsDataURL(file);
});

const menuItems = document.querySelectorAll('.menu-item');
const tabs = document.querySelectorAll('.tab');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuItems.forEach(i => i.classList.remove('active'));
    tabs.forEach(t => t.classList.remove('active'));

    item.classList.add('active');

    const tab = document.getElementById(item.dataset.tab);
    tab.classList.add('active');
  });
});