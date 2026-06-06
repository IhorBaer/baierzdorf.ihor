import sprite from '../images/sprite.svg';

export function SpriteIcon({ id, className, width, height }) {
  return (
    <svg className={className} width={width} height={height} aria-hidden="true">
      <use href={`${sprite}#${id}`} />
    </svg>
  );
}
