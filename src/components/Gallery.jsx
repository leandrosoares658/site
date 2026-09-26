import { useLanguage } from '../i18n/LanguageContext.jsx';
import './Gallery.css';

// Importa cada imagem e cada vídeo para o Vite processar e otimizar no build.
// Pra adicionar um item animado: solte o .mp4 em src/assets/, aponte "file"
// pra ele em galleryImages (pt.js e en.js) e marque type: 'video'.
const imageFiles = import.meta.glob('../assets/*.{jpg,png,webp}', { eager: true, import: 'default' });
const videoFiles = import.meta.glob('../assets/*.mp4', { eager: true, import: 'default' });

const src = (file) => imageFiles[`../assets/${file}`];
const videoSrc = (file) => videoFiles[`../assets/${file}`];

const NUM_COLUMNS = 4;

export default function Gallery() {
  const { t } = useLanguage();
  const { galleryImages } = t;
  const total = galleryImages.length;
  const reduceMotion = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Monta 4 colunas distribuindo os itens disponíveis com um deslocamento
  // diferente por coluna, e duplica cada uma para o loop de rolagem ficar contínuo.
  const columns = Array.from({ length: NUM_COLUMNS }, (_, col) => {
    const offset = Math.floor((col * total) / NUM_COLUMNS);
    const items = Array.from({ length: total }, (_, i) => galleryImages[(offset + i) % total]);
    return [...items, ...items];
  });

  return (
    <section className="gallery">
      <div className="wrap">
        <div className="gallery__shelf">
          <div className="gallery__viewport" aria-hidden="false">
            {columns.map((items, colIndex) => (
              <div
                className={`gallery__col ${colIndex % 2 === 1 ? 'gallery__col--reverse' : ''}`}
                key={colIndex}
                style={{ '--dur': `${26 + colIndex * 6}s` }}
              >
                {items.map((item, i) => (
                  <figure className="gallery__item" key={`${item.id}-${i}`}>
                    {item.type === 'video' ? (
                      <video
                        src={videoSrc(item.file)}
                        autoPlay={!reduceMotion}
                        loop={!reduceMotion}
                        muted
                        playsInline
                        controls={reduceMotion}
                        aria-label={`${t.gallerySection.altPrefix} ${item.title}`}
                      />
                    ) : item.type === 'placeholder' ? (
                      <div className="gallery__placeholder" role="img" aria-label={`${item.title} — ${t.gallerySection.soonLabel}`}>
                        <span>{item.title}</span>
                      </div>
                    ) : (
                      <img src={src(item.file)} alt={`${t.gallerySection.altPrefix} ${item.title}`} loading="lazy" />
                    )}
                    {item.type !== 'placeholder' && <figcaption>{item.title}</figcaption>}
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
