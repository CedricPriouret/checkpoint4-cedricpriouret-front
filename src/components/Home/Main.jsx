/* eslint-disable react/jsx-no-target-blank */
import profile from "./img/profile.png";

function Main() {
  return (
    <div className="container-card">
      <div className="card">
        <img className="round" src={profile} alt="user" />
        <h3>Cédric PRIOURET</h3>
        <h6>Hérault</h6>
        <p>Développeur Junior Fullstack JS</p>
        <div className="buttons">
          <button className="btn-github">
            <a
              href="https://github.com/CedricPriouret"
              title="GitHub Profile"
              target="_blank"
            >
              <i className="fab fa-github btn-icon-git"></i>
            </a>
          </button>
          <button className="btn-linkedin">
            <a
              href="https://www.linkedin.com/in/cedricpriouret/"
              title="LinkedIn de
          Cédric Priouret"
              target="_blank"
            >
              <i className="fab fa-linkedin btn-icon-linkedin"></i>
            </a>
          </button>
        </div>
        <div className="skills">
          <h6>Compétences</h6>
          <ul>
            <li>Front End Development</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
            <li>WordPress</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Main;
