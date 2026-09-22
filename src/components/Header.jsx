import { useEffect, useRef, useState } from "react";
import { navigation } from "../data/portfolio";
import Icon from "./Icon";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          className="wordmark"
          href="#inicio"
          aria-label="Brianis Ruiz, inicio"
          onClick={() => setOpen(false)}
        >
          br<span>.</span>
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Cerrar" : "Menú"}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <nav
          id="main-navigation"
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Navegación principal"
          onBlur={(event) => {
            if (
              !event.currentTarget.contains(event.relatedTarget) &&
              event.relatedTarget !== toggle.current
            )
              setOpen(false);
          }}
        >
          {navigation.map(([id, title]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {title}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Hablemos <Icon name="external" size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}
