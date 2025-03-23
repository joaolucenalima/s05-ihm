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
  document.body.classList.add(savedTheme ?? "inatel");
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

const events = [
  {
      id: 1,
      title: 'Semana do Software 2025',
      date: '12/05',
      time: '10:00',
      location: 'Salão de Eventos',
      type: 'tech',
      description: 'Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400'
  },
  {
      id: 2,
      title: 'Workshop de IoT',
      date: '12/01',
      time: '08:00',
      location: 'Laboratório CS&I',
      type: 'tech',
      description: 'Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400'
  },
  {
      id: 3,
      title: 'Festa dos Alunos 2025',
      date: '18/05',
      time: '19:00',
      location: 'Área Esportiva do Inatel',
      type: 'cultural',
      description: 'Venha comemorar a melhor Festa dos Alunos de todos os tempos!',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400'
  },
  {
      id: 4,
      title: 'Feira de Oportunidades',
      date: '04/05',
      time: '10:00',
      location: 'Salão de Eventos',
      type: 'academic',
      description: 'Venha conhecer empresas e projetos com destaque na área da engenharia.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400'
  }
];

const carouselElement = document.getElementById("carousel")

events.forEach((event) => {
  carouselElement.innerHTML += `
    <div class="card">
      <img src="${event.image}" alt="${event.title}">
      <div class="info">
          <h3>${event.title}</h3>
          <p>${event.description}</p>
          <p>
            <i data-lucide="calendar"></i> ${event.date} às ${event.time} 
            <i data-lucide="map-pin"></i> ${event.location}
          </p>
      </div>
    <div class="card">
  `
})
