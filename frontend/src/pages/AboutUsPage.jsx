export default function AboutUsPage() {
  return (
    <section className="page">
      <div className="page__panel">
        <p className="page__eyebrow">About Us</p>
        <p className="page__lead page__lead--compact">
          NextStep is designed to keep the flow clear: browse universities, review scholarships, then sign in or register when you are ready to continue.
        </p>
        <div className="info-list">
          <div>
            <strong>Backend driven</strong>
            <span>University and scholarship data load from live API endpoints.</span>
          </div>
          <div>
            <strong>Student focused</strong>
            <span>Login and sign up connect directly to the auth routes.</span>
          </div>
          <div>
            <strong>Classic presentation</strong>
            <span>The interface stays simple, readable, and formal.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
