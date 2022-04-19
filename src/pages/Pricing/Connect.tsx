import '@/styles/pricing/connect.scss';

function Connect() {
  return (
    <section className="connect">
      <div className="container">
        <div className="connect-caption connect-box">
          <h2>
            Have a Project? Let's work<span> together.</span>
          </h2>
        </div>
        <div className="connect-box">
          <input
            type="text"
            className="email-input"
            placeholder="Enter your Phone number or email Address"
          />
        </div>
        <div className="connect-box btn-arrow">
          <button>Connect with Us</button>
        </div>
      </div>
    </section>
  );
}

export default Connect;
