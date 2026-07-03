const deploySteps = [
  "Next.js app boots successfully",
  "Firebase App Hosting config is checked in",
  "GitHub pushes can trigger Firebase rollouts"
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero" aria-labelledby="page-title">
        <p className="eyebrow">Firebase deploy pipeline</p>
        <h1 id="page-title">Hello from Dub Lite</h1>
        <p className="summary">
          This is the first deployable slice: a tiny Next.js app prepared for
          Firebase App Hosting and GitOps-style rollouts from GitHub.
        </p>
        <div className="status-grid" aria-label="Deployment readiness">
          {deploySteps.map((step) => (
            <div className="status-item" key={step}>
              <span className="status-dot" aria-hidden="true" />
              <span>{step}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

