export default function createGallery(arr) {
  return arr.map(createCard).join('');
}

function createCard({
  id,
  likes,
  urls,
  alt_description,
  user: { first_name, last_name, links },
}) {
  return `
  <li class="gallery__item">
   <a href="${urls.regular}" class="gallery__link-image">
   <div class="photo-card">
  <img src="${
    urls.small
  }" alt="${alt_description}"  class="gallery__image" loading="lazy" />
  </div>
  </a>
  
  <div class="info">
    <p class="info-item like" data-id="${id}">
      <b>Likes</b>
     <span class="info-item__value">${likes}
     </span>
    </p>
    <p class="info-item">
      <b>User</b>
      <span class="info-item__value">${first_name ? first_name : ''}
      <span class="info-item__value">${' ' + last_name ? last_name : ''}
    
    </span>
  
  </div>
  </div>
    `;
}
