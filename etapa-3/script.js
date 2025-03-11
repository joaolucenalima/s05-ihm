const dialog = document.querySelector('dialog');
const openDialogButton = document.querySelector('#open_dialog_icon');
const closeDialogButton = document.querySelector('#close_dialog_button');

openDialogButton.addEventListener('click', () => {
  dialog.showModal();
})

closeDialogButton.addEventListener('click', () => {
  dialog.close();
})

window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.classList.add(savedTheme);
  }
}

const inatel_theme = document.querySelector('#inatel_theme');
const dark_theme = document.querySelector('#dark_theme');

inatel_theme.addEventListener('click', () => {
  document.body.classList.remove('dark');
  document.body.classList.add('inatel');

  dialog.close()
  localStorage.setItem('theme', 'inatel');
})

dark_theme.addEventListener('click', () => {
  document.body.classList.remove('inatel');
  document.body.classList.add('dark');

  dialog.close()
  localStorage.setItem('theme', 'dark');
})