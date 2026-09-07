import React from 'react';
import { createRoot } from 'react-dom/client';
import { open } from '@tauri-apps/plugin-shell';
import './styles.css';

const JOTFORM_APP_URL = 'https://app.jotform.com/262494997278379';

function App() {
  const openSystem = async () => {
    await open(JOTFORM_APP_URL);
  };

  return (
    <main className="widget">
      <div className="topbar">
        <div className="brand">
          <div className="logo">✓</div>
          <div>
            <div className="title">Заявки</div>
            <div className="subtitle">Корпоративная система</div>
          </div>
        </div>
        <div className="status-dot" title="Система доступна" />
      </div>

      <section className="primary">
        <button className="new-request" onClick={openSystem}>
          <span className="plus">+</span>
          <span>
            <strong>Новая заявка</strong>
            <small>Создать обращение</small>
          </span>
        </button>
      </section>

      <section className="stats">
        <button onClick={openSystem} className="stat">
          <span className="stat-number">—</span>
          <span className="stat-label">Новые</span>
        </button>
        <button onClick={openSystem} className="stat">
          <span className="stat-number">—</span>
          <span className="stat-label">В работе</span>
        </button>
        <button onClick={openSystem} className="stat">
          <span className="stat-number">—</span>
          <span className="stat-label">Мои заявки</span>
        </button>
      </section>

      <button className="secondary" onClick={openSystem}>
        <span>Открыть систему заявок</span>
        <span className="arrow">→</span>
      </button>

      <div className="footer">
        <span>Система заявок</span>
        <span>v0.1</span>
      </div>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode><App /></React.StrictMode>,
);
