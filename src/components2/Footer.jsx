const Footer = () => {
  return (
    <footer>
      <div className="containerbox">
        <div className="socialmainbox">
          <div className="emailtextbootm">
            Email:{" "}
            <a href="mailto:wecare@eagetutor.com">wecare@eagetutor.com</a>
          </div>
          <ul className="socialicon">
            <li>
              <a href="https://twitter.com/eagespoken">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/eagetutor">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/eagespokenenglish/">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/user/eagespokenenglish">
                <i className="fa fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-skype"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-google-plus"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
