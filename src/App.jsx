import Header from "./components/Header";
import Hero from "./components/Hero";
import Icon from "./components/Icon";
import SectionHeading from "./components/SectionHeading";
import { experience, profile, projects, technologies } from "./data/portfolio";

function ProjectVisual({ type, previewImage, name }) {
  if (previewImage) {
    return (
      <div className="project-visual project-screenshot">
        <img
          src={`${import.meta.env.BASE_URL}${previewImage}`}
          alt={`Vista previa de la aplicación ${name}`}
          loading="lazy"
          decoding="async"
          width="1440"
          height="900"
        />
      </div>
    );
  }
  return (
    <div className={`project-visual ${type}`} aria-hidden="true">
      {type === "calendar" && (
        <div className="calendar-art">
          <div className="art-toolbar">
            <span />
            <span />
            <span />
          </div>
          <div className="calendar-grid">
            {Array.from({ length: 21 }, (_, i) => (
              <span
                key={i}
                className={[3, 9, 10, 17].includes(i) ? "filled" : ""}
              />
            ))}
          </div>
        </div>
      )}
      {type === "queue" && (
        <div className="queue-art">
          {[0, 1, 2].map((i) => (
            <div key={i}>
              <span className="queue-number">0{i + 1}</span>
              <span className="queue-line" />
              <span className="queue-state" />
            </div>
          ))}
        </div>
      )}
      {type === "certificate" && (
        <div className="certificate-art">
          <div className="certificate-seal">
            <Icon name="check" size={30} />
          </div>
          <span />
          <span />
          <div className="certificate-signature" />
        </div>
      )}
      <span className="art-caption">
        {type === "calendar"
          ? "ORGANIZAR"
          : type === "queue"
            ? "CONECTAR"
            : "VERIFICAR"}{" "}
        / CONCEPTO VISUAL
      </span>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const content = (
    <>
      <ProjectVisual
        type={project.visual}
        previewImage={project.previewImage}
        name={project.name}
      />
      <div className="project-content">
        <p className="project-category">
          {project.category}
          <span>0{index + 1}</span>
        </p>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        {project.technologies.length > 0 && (
          <div className="tech-tags">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        )}
        {project.liveUrl && (
          <div className="project-visit">
            <span>Ver aplicación <small>Se abre en una pestaña nueva</small></span>
            <Icon name="external" size={20} />
          </div>
        )}
      </div>
    </>
  );

  return (
    <article className="project-card">
      {project.liveUrl ? (
        <a
          className="project-card-link"
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver ${project.name}: se abre en una pestaña nueva`}
        >
          {content}
        </a>
      ) : content}
    </article>
  );
}

function About() {
  return (
    <section id="sobre-mi" className="section container">
      <SectionHeading
        number="01"
        label="SOBRE MÍ"
        title={
          <>
            La tecnología tiene sentido
            <br />
            cuando resuelve algo real.
          </>
        }
      />
      <div className="about-grid">
        <div className="experience-stat">
          <strong>
            5<span>+</span>
          </strong>
          <span>
            Años de experiencia
            <br />
            en desarrollo de software
          </span>
        </div>
        <div className="about-copy">
          <p>
            Soy Brianis, ingeniera de sistemas y desarrolladora web. Creo
            soluciones web enfocadas en seguridad, automatización e integración
            de servicios.
          </p>
          <p>
            Mi trabajo conecta interfaces, lógica de negocio y datos: desde la
            gestión de citas y turnos hasta certificaciones, dashboards y
            reportes.
          </p>
          <div className="about-tags">
            <span>Desarrollo web</span>
            <span>Atención a la experiencia de usuario</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="proyectos" className="section projects-section">
      <div className="container">
        <SectionHeading
          number="02"
          label="PROYECTOS DESTACADOS"
          title="Ideas que toman forma."
          description="Agendamiento, gestión de negocios y confianza digital. Una selección de soluciones de mi portafolio."
        />
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experiencia" className="section container experience-section">
      <div>
        <SectionHeading
          number="03"
          label="EXPERIENCIA"
          title={
            <>
              Una mirada integral.
              <br />
              Soluciones conectadas.
            </>
          }
        />
        <p className="section-description">
          Más de 5 años de experiencia, con foco en estas áreas de desarrollo.
        </p>
      </div>
      <div className="experience-list">
        {experience.map((item, index) => (
          <article key={item.title}>
            <span className="experience-index">0{index + 1}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <Icon name="external" size={18} />
          </article>
        ))}
      </div>
    </section>
  );
}

function Technologies() {
  return (
    <section id="tecnologias" className="section container">
      <SectionHeading
        number="04"
        label="TECNOLOGÍAS"
        title="Las herramientas detrás de cada solución."
      />
      <div className="technology-grid">
        {technologies.map((group) => (
          <div className="technology-group" key={group.label}>
            <h3>{group.label}</h3>
            <div>
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section container">
      <div className="contact-panel">
        <p className="eyebrow section-label">
          <span>05</span> CONTACTO
        </p>
        <div className="contact-layout">
          <div>
            <h2>
              Lo próximo empieza
              <br />
              con una <em>conversación.</em>
            </h2>
            <p>¿Tienes un proyecto en mente? Hablemos.</p>
          </div>
          <a className="button button-primary" href={`mailto:${profile.email}`}>
            Escríbeme <Icon name="external" />
          </a>
        </div>
        <div className="contact-bottom">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            Conectemos en LinkedIn <Icon name="external" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Technologies />
        <Contact />
      </main>
      <footer className="container footer">
        <a
          className="wordmark"
          href="#inicio"
          aria-label="Brianis Ruiz, volver al inicio"
        >
          br<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Brianis Ruiz</p>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
    </>
  );
}
