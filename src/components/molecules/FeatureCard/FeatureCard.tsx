import React from 'react'
import './FeatureCard.css'

type Props = {
  title: string
  description: string
  imageSrc?: string
  ctaText?: string
  href?: string
}

export default function FeatureCard({ title, description, imageSrc, ctaText = 'Learn more', href }: Props) {
  return (
    <article className="feature-card">
      {imageSrc && (
        <figure className="feature-card__media">
          <img src={imageSrc} alt="" className="feature-card__img" />
        </figure>
      )}
      <div className="feature-card__body">
        <h3 className="feature-card__title">{title}</h3>
        <p className="feature-card__desc">{description}</p>
        {href ? (
          <a className="feature-card__cta" href={href}>
            {ctaText}
          </a>
        ) : (
          <button className="feature-card__cta" type="button">{ctaText}</button>
        )}
      </div>
    </article>
  )
}
