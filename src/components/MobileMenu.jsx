import { useEffect } from 'react';
import { SpriteIcon } from './SpriteIcon';

export function MobileMenu({ isOpen, theme, title, contacts, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`modal backdrop ${isOpen ? '' : 'visually-hidden'}`}
      onClick={(event) => {
        if (event.currentTarget === event.target) {
          onClose();
        }
      }}
    >
      <div className={`modal-container ${theme}`} role="dialog" aria-modal="true" aria-labelledby="contacts-title">
        <button className={`btn-modal-close ${theme}`} type="button" aria-label="Close contacts" onClick={onClose}>
          <SpriteIcon id="icon-close" className="btn-close__icon" width="30" height="30" />
        </button>
        <h2 className="mobile-menu__title" id="contacts-title">
          {title}
        </h2>
        <ul className="mobile-menu__list">
          {contacts.map((contact) => (
            <li className="mobile-menu__item" key={contact.id}>
              <a className="mobile-menu__link" href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}>
                {contact.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
