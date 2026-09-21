import { galleryImages } from '../data/content';
import './Gallery.css';

// Importa cada imagem para o Vite processar e otimizar no build.
const files = import.meta.glob('../assets/*.jpg', { eager: true, import: 'default' });
const src = (file) => files[`../assets/${file}`];

// Monta 4 colunas distribuindo as imagens disponíveis com um deslocamento
// diferente por coluna, e duplica cada uma para o loop de rolagem ficar contínuo.
const NUM_COLUMNS = 4;
const total = galleryImages.length;
const columns = Array.from({ length: NUM_COLUMNS }, (_, col) => {
  const offset = Math.floor((col * total) / NUM_COLUMNS);
  const items = Array.from({ length: total }, (_, i) => galleryImages[(offset + i) % total]);
  return [...items, ...items];
});

export default function Gallery() {
  return (
    <section className="section gallery" id="galeria">
      <div className="wrap">
        <header className="section-head gallery__head">
          <h2>Um retrato rápido do que já saiu do papel</h2>
          <p>Telas iniciais de sites e sistemas que desenvolvi, direto do ar.</p>
        </header>
      </div>

      <div className="gallery__viewport" aria-hidden="false">
        {columns.map((items, colIndex) => (
          <div
            className={`gallery__col ${colIndex % 2 === 1 ? 'gallery__col--reverse' : ''}`}
            key={colIndex}
            style={{ '--dur': `${26 + colIndex * 6}s` }}
          >
            {items.map((img, i) => (
              <figure className="gallery__item" key={`${img.id}-${i}`}>
                <img src={src(img.file)} alt={`Tela inicial do projeto ${img.title}`} loading="lazy" />
                <figcaption>{img.title}</figcaption>
              </figure>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
