const Footer = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload on form submission
    // Additional functionality, e.g., submitting the email
  };

  return (
    <div className="bg-black flex justify-center items-center flex-col gap-6 mt-48 md:mt-64">
      <div className=" mt-40">
        <img src="./images/logo-footer.png" alt="" />
      </div>
      <footer className="footer flex flex-col mx-auto md:flex-row text-[rgba(255,255,255,0.6)] p-10">
        <nav className="flex-1">
          <h6 className="footer-title text-white">About Us</h6>
          <p className="w-full md:w-[80%]">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </nav>
        <nav className="flex-1">
          <h6 className="footer-title text-white">Quick Links</h6>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>

        <form onSubmit={handleSubmit} className="flex-1">
          <h6 className="footer-title text-white">Subscribe</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-[rgba(255,255,255,0.6)]">
                Subscribe to our newsletter for the latest updates.
              </span>
            </label>
            <div className="md:join flex flex-col md:flex-row gap-4 md:gap-0 ">
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered join-item text-black"
              />
              <button
                type="submit"
                className="btn join-item bg-gradient-to-r from-yellow-400 to-pink-300 "
              >
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
