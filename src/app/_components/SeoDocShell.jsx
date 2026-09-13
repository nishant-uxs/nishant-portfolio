export function SeoDocShell({ title = "Notes", children }) {
  return (
    <main className="seo-doc-page">
      <header className="seo-doc-menubar">
        <a href="/" className="seo-doc-brand">
          nishantx.in
        </a>
        <nav className="seo-doc-nav">
          <a href="/">Desktop</a>
          <a href="/nishant-agarwal">Profile</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/files/resume.pdf">Resume</a>
        </nav>
      </header>

      <div className="seo-doc-window">
        <div className="seo-doc-titlebar">
          <div className="seo-doc-traffic" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <p className="seo-doc-window-title">{title}</p>
          <div className="seo-doc-titlebar-spacer" aria-hidden="true" />
        </div>
        <div className="seo-doc-content">{children}</div>
      </div>
    </main>
  );
}
