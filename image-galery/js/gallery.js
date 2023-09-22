export default function createGallery(arr) {
  return arr.map(createCard).join('');
}

function createCard({ likes, urls, alt_description, user }) {
  return `
   <a href="${urls.regular}" class="gallery__item">
   <div class="photo-card">
  <img src="${
    urls.small
  }" alt="${alt_description}"  class="gallery__image" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
     <span class="info-item__value">${likes}
     </span>
    </p>
    <p class="info-item">
      <b>User</b>
      <span class="info-item__value">${user.first_name + ' ' + user.last_name}
     </span>
    </p>
    
  </div>
  </div>
</a>
    `;
}
