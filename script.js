const cardContainer = document.getElementById('cardContainer');

const cards = [
  { title: "Kad 1", desc: "Deskripsi 1", img: "gambar/1.jpg" },
  { title: "Kad 2", desc: "Deskripsi 2", img: "gambar/2.jpg" },
  { title: "Kad 3", desc: "Deskripsi 3", img: "gambar/3.jpg" },
  { title: "Kad 4", desc: "Deskripsi 4", img: "gambar/4.jpg" },
  { title: "Kad 5", desc: "Deskripsi 5", img: "gambar/5.jpg" },
  { title: "Kad 6", desc: "Deskripsi 6", img: "gambar/6.jpg" },
  { title: "Kad 7", desc: "Deskripsi 7", img: "gambar/7.jpg" },
  { title: "Kad 8", desc: "Deskripsi 8", img: "gambar/8.jpg" },
  { title: "Kad 9", desc: "Deskripsi 9", img: "gambar/9.jpg" },
  { title: "Kad 10", desc: "Deskripsi 10", img: "gambar/10.jpg" },
  { title: "Kad 11", desc: "Deskripsi 11", img: "gambar/11.jpg" },
  { title: "Kad 12", desc: "Deskripsi 12", img: "gambar/12.jpg" }
];

cards.forEach(card => {
  const cardElement = document.createElement('div');
  cardElement.className = 'card';
  cardElement.innerHTML = `
    <img src="${card.img}" alt="${card.title}" onerror="this.onerror=null;this.src='https://via.placeholder.com/300x180';">
    <div class="card-content">
      <h3>${card.title}</h3>
      <p>${card.desc}</p>
    </div>
  `;
  cardContainer.appendChild(cardElement);
});
