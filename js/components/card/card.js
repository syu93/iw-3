export default `
  <article class="card">
    <header><figure><div class="placeholder"></div><img src="" alt=""></figure></header>
    <main>
      <h1></h1>
      <p></p>
    </main>
  </article>
`;

export function initCard(src, placeholder, title, description, card) {
  // const link = card.querySelector('a');
  const image = card.querySelector('img');
  const placeholderElement = card.querySelector('.placeholder');

  // link.href = `/read/${_slugify(title)}/`;

  card.querySelector('h1').innerHTML = title;
  card.querySelector('p').innerHTML = `${description.substring(0, 144)}...`;

  image.dataset.src = src;
  image.alt = title;

  placeholderElement.style.cssText = `background-image: url('${placeholder}');`;
};
