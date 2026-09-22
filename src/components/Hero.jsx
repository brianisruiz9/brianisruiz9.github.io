import { profile } from "../data/portfolio";
import Icon from "./Icon";

function SystemVisual() {
  return (
    <div className="system-visual" aria-hidden="true">
      <div className="visual-top">
        <span>IDEAS → SISTEMAS</span>
        <span className="visual-cross">+</span>
      </div>
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="system-core">
        <div className="core-symbol">
          <Icon name="layers" size={52} />
        </div>
        <span>
          Conectar.
          <br />
          Construir.
          <br />
          <em>Simplificar.</em>
        </span>
      </div>
      <span className="system-node node-front">
        <span className="node-dot" />
        Frontend
      </span>
      <span className="system-node node-back">
        <span className="node-dot" />
        Backend
      </span>
      <span className="system-node node-api">
        <span className="node-dot" />
        Integraciones
      </span>
      <div className="visual-bottom">
        <span>DE LA INTERFAZ A LA LÓGICA</span>
        <Icon name="code" size={21} />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="hero container"
      id="inicio"
      aria-labelledby="hero-title"
    >
      <div className="hero-main">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> INGENIERA DE SISTEMAS · COLOMBIA
          </p>
          <h1 id="hero-title">
            Brianis
            <br />
            Ruiz<span className="name-dot">.</span>
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-description">
            Más de 5 años convirtiendo ideas en soluciones web. Desarrollo
            integraciones, automatizaciones y sistemas empresariales que
            simplifican lo complejo.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#proyectos">
              Ver proyectos <Icon />
            </a>
            {profile.cvPath ? (
              <a
                className="button button-secondary"
                href={`${import.meta.env.BASE_URL}${profile.cvPath}`}
                download
              >
                Descargar CV <Icon name="download" />
              </a>
            ) : (
              <div className="cv-action">
                <button
                  className="button button-secondary"
                  disabled
                  aria-describedby="cv-status"
                >
                  Descargar CV <Icon name="download" />
                </button>
                <span id="cv-status">CV pendiente de publicación</span>
              </div>
            )}
          </div>
          <div className="social-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Icon name="github" size={18} /> GitHub{" "}
              <Icon name="external" size={13} />
            </a>
            <span className="social-divider" />
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Icon name="linkedin" size={18} /> LinkedIn{" "}
              <Icon name="external" size={13} />
            </a>
          </div>
        </div>
        <SystemVisual />
      </div>
      <div className="hero-foot">
        <span>SOFTWARE CON PROPÓSITO.</span>
        <a href="#sobre-mi">
          Un poco más sobre mí <span aria-hidden="true">↓</span>
        </a>
        <span>01 / HOME</span>
      </div>
    </section>
  );
}
