import "./App.css";

function App() {
  return (
    <main className="app-shell">
      <aside className="sidebar" aria-label="Agent providers">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">
            H
          </div>
          <div>
            <p className="eyebrow">Local Control</p>
            <h1>Hypervisor</h1>
          </div>
        </div>

        <nav className="provider-list">
          <button className="provider active" type="button">
            <span className="provider-dot codex" aria-hidden="true" />
            Codex
            <span className="provider-count">0</span>
          </button>
          <button className="provider" type="button">
            <span className="provider-dot claude" aria-hidden="true" />
            Claude Code
            <span className="provider-count">0</span>
          </button>
          <button className="provider" type="button">
            <span className="provider-dot cursor" aria-hidden="true" />
            Cursor
            <span className="provider-count">0</span>
          </button>
        </nav>

        <div className="sidebar-footer">
          <span className="pulse" aria-hidden="true" />
          Watcher offline
        </div>
      </aside>

      <section className="workspace" aria-label="Session dashboard">
        <header className="topbar">
          <div>
            <p className="eyebrow">Sessions</p>
            <h2>Active agent work</h2>
          </div>
          <div className="summary-strip" aria-label="Session summary">
            <div>
              <span>0</span>
              Running
            </div>
            <div>
              <span>0</span>
              Needs input
            </div>
            <div>
              <span>0</span>
              Completed
            </div>
          </div>
        </header>

        <section className="session-panel">
          <div className="session-table-header">
            <span>Agent</span>
            <span>Workspace</span>
            <span>Status</span>
            <span>Updated</span>
          </div>

          <div className="empty-state">
            <div className="empty-grid" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <h3>No live sessions detected yet</h3>
            <p>
              The app shell is ready. Session adapters and notifications will be
              added in the next milestone.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}

export default App;
