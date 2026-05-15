import './ImageCard.css'

type AspectRatio = '16/9' | '4/3' | '1/1' | '3/4'
type Layout = 'vertical' | 'horizontal' | 'square' | 'overlay'

type Props = {
  src: string
  alt: string
  title?: string
  description?: string
  credit?: string
  aspectRatio?: AspectRatio
  layout?: Layout
  href?: string
}

const layoutAspect: Record<Layout, AspectRatio> = {
  vertical: '3/4',
  horizontal: '4/3',
  square: '1/1',
  overlay: '4/3',
}

export default function ImageCard({
  src,
  alt,
  title,
  description,
  credit,
  layout = 'vertical',
  aspectRatio,
  href,
}: Props) {
  const ratio = aspectRatio ?? layoutAspect[layout]

  const inner = (
    <>
      <figure
        className="image-card__media"
        style={{ aspectRatio: ratio.replace('/', ' / ') }}
      >
        <img src={src} alt={alt} className="image-card__img" loading="lazy" />
        {credit && (
          <figcaption className="image-card__credit">
            Photo by {credit} · Unsplash
          </figcaption>
        )}
        {layout === 'overlay' && (title || description) && (
          <div className="image-card__overlay">
            {title && <h3 className="image-card__overlay-title">{title}</h3>}
            {description && <p className="image-card__overlay-desc">{description}</p>}
          </div>
        )}
      </figure>

      {layout !== 'overlay' && (title || description) && (
        <div className="image-card__body">
          {title && <h3 className="image-card__title">{title}</h3>}
          {description && <p className="image-card__desc">{description}</p>}
        </div>
      )}
    </>
  )

  if (href) {
    return <a href={href} className={`image-card image-card--${layout} image-card--link`}>{inner}</a>
  }

  return <article className={`image-card image-card--${layout}`}>{inner}</article>
}
