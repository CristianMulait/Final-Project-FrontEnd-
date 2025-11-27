# Component Hierarchy — Coffee-Shop (Vite + React)

This file documents the component hierarchy for the project located at `src/`.

Overview (top-down):

- `main.jsx` — mounts the app and global styles
  - `App.jsx` — root router + layout selection
    - `components/layout/Navbar.jsx` — public navbar used by user pages
    - `components/layout/NavbarAdmin.jsx` — admin navbar used by admin pages
    - `components/common/Button.jsx` — small reusable button component
    - `components/hoc/ProtectedRoute.jsx` — route guard for admin routes
    - `pages/`
      - `auth/`
        - `LoginChoice.jsx` — role selection / login entry
      - `user/` (user-facing pages)
        - `Dashboard.jsx` — home / overview for users (cards, links to services)
        - `Services.jsx` — menu listing of coffee services
        - `Order.jsx` — order form (POST -> `/orders`)
        - `TrackingUser.jsx` — user-side order tracking (GET `/orders?phone=`)
        - `Contact.jsx` — contact information page
      - `admin/` (admin-facing pages)
        - `AdminDashboard.jsx` — admin analytics and charts (GET `/orders`)
        - `AdminOrders.jsx` — orders table with edit/delete (GET, PUT, DELETE)
        - `TrackingAdmin.jsx` — detailed order view and status updates (PATCH/PUT)

Notes on responsibilities and data flow:

- `App.jsx` configures routes and chooses which navbar to show depending on the route.
- Small reusable components live under `components/common/` (currently `Button.jsx`) and should be kept stateless when possible.
- `ProtectedRoute.jsx` wraps admin routes to protect them (auth logic / redirect to login choice).
- Pages are responsible for fetching data from the JSON Server endpoint `http://127.0.0.1:3000/orders` (or port configured in `package.json` scripts).
  - CRUD mapping (where used):
    - GET: `Dashboard.jsx`, `AdminDashboard.jsx`, `AdminOrders.jsx`, `TrackingUser.jsx`, `TrackingAdmin.jsx`
    - POST: `Order.jsx` (create new order)
    - PUT / PATCH: `AdminOrders.jsx` and `TrackingAdmin.jsx` (update order / status)
    - DELETE: `AdminOrders.jsx` (delete order)

Guidelines for adding new components:

- Keep components small and focused (single responsibility).
- Prefer composition over inheritance — use `Button.jsx` and other common controls.
- Place layout-level components in `components/layout/`, shared primitives in `components/common/`.
- Page-level components should live under `src/pages/<role>/`.

If you want, I can also add a mermaid diagram or a PNG export of this tree.

---
Generated on: 2025-11-27
