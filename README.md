## GhostLock Monorepo

This monorepo contains all core components of the GhostLock ecosystem.
It is managed using [pnpm](https://pnpm.io) workspaces to ensure fast, efficient dependency management.

### Structure

- `apps/`
  - End-user and admin-facing applications (Electron, dashboard, etc.)
- `packages/`
  - Shared libraries and utilities (e.g., signing, config, types)
- `services/`
  - API, OAuth server, and device integration services

### Getting Started

```bash
pnpm install
pnpm dev # starts dev servers or apps if configured
```

### Workspaces

All subfolders in `apps/`, `services/`, and `packages/` are registered as pnpm workspaces in `pnpm-workspace.yaml`.

---

🔐 Built for privacy-first authentication. Learn more at [GhostLock.io](https://ghostlock.io) _(coming soon)_
