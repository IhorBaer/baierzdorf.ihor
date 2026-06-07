export function ResumeDownloads({ downloads }) {
  if (!downloads?.files?.length) {
    return null;
  }

  return (
    <div className="resume-downloads" aria-label={downloads.title}>
      <p className="resume-downloads__title">{downloads.title}</p>
      <div className="resume-downloads__links">
        {downloads.files.map((file) => (
          <a
            className="resume-downloads__link"
            href={`${import.meta.env.BASE_URL}${file.href}`}
            download
            key={file.href}
          >
            {file.label}
          </a>
        ))}
      </div>
    </div>
  );
}
