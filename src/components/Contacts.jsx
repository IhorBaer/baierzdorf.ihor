export function Contacts({ classPrefix, title, contacts, extraClass = '' }) {
  return (
    <div className={`${classPrefix} ${extraClass}`.trim()}>
      <h2 className={`${classPrefix}__title`}>{title}</h2>
      <ul className={`${classPrefix}__list`}>
        {contacts.map((contact) => (
          <li className={`${classPrefix}__item`} key={contact.id}>
            <a className={`${classPrefix}__link`} href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}>
              {contact.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
