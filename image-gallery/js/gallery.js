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
  const f = first_name ? first_name : '';
  const l = last_name ? ' ' + last_name : '';
  const fl = f + l;
  return `
  <li class="gallery__item">
   <div class="gallery__link-image">
  <img data-url="${urls.regular}" src="${urls.small}" alt="${alt_description}"  class="gallery__image" loading="lazy" />
  </div>
  
  <div class="info">
    <p class="info-item like" data-id="${id}">
      <b>Likes</b>
     <span class="info-item__value">${likes}
     </span>
    </p>
    <p class="info-item">
      <b>User</b>
      <span class="info-item__value">${fl}
    </span>
  
  </div>
  </div>
    `;
}
