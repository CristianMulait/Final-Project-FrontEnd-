# Coffee-Shop - Premium Coffee Shop Management System

A modern, premium coffee shop management web application built with Vite, React, and Tailwind CSS featuring a clean, minimalistic, and futuristic design.

## Features

- **Full CRUD Operations**: Create, Read, Update, Delete coffee orders
- **Premium Design**: Glassmorphism effects, gradient backgrounds, subtle animations
- **Responsive Layout**: Works seamlessly on desktop and mobile devices
- **Real-time Data**: JSON Server for backend simulation
- **Modern UI Components**: Reusable components with consistent styling

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS with custom premium theme
- **Backend**: JSON Server (for development)
- **Routing**: React Router DOM

## Color Palette

### Primary Colors
- Primary: Blue gradient (#0ea5e9 to #0284c7)
- Secondary: Purple gradient (#a855f7 to #7c3aed)
- Accent: Cyan gradient (#06b6d4 to #0891b2)

### Background
- Gradient: Linear gradient from blue to purple (135deg)

## Tailwind Classes Used

### Glassmorphism Effects
```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}
```

### Animations
- `animate-fade-in`: Smooth fade-in with slight upward movement
- `animate-slide-in`: Slide-in from top with opacity
- `animate-bounce-subtle`: Subtle bouncing effect

### Custom Utilities
- `text-gradient`: Gradient text effect
- `gradient-bg`: Full background gradient
- `glass-input`: Glassmorphism input styling

## Wireframe / Layout Description

### Overall Layout
- **Navbar**: Fixed top with logo, menu toggle (mobile), and user avatar
- **Sidebar**: Collapsible navigation menu with icons and labels
- **Main Content**: Flexible area with page-specific content

### Dashboard Page
- Header with title and action button
- Grid of stat cards (4 columns on desktop, stacked on mobile)
- Recent orders section with list items

### List View Page
- Header with title and "New Order" button
- Filter section with search input and status dropdown
- Data table with sortable columns and action buttons
- Delete confirmation modal

### Create/Edit Pages
- Centered form layout (max-width 2xl)
- Two-column grid for form fields
- Validation with error messages
- Action buttons at bottom

## Project Structure

```
Laundry-New/
├── db.json                    # JSON Server database
├── index.html                 # Main HTML file
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind configuration
├── vite.config.js             # Vite configuration
├── README.md                  # This file
└── src/
    ├── components/            # Reusable UI components
    │   ├── Button.jsx         # Button component with variants
    │   ├── Card.jsx           # Card wrapper with glass effect
    │   ├── Input.jsx          # Input field with validation
    │   ├── Modal.jsx          # Modal dialog component
    │   ├── Navbar.jsx         # Top navigation bar
    │   ├── Sidebar.jsx        # Side navigation menu
    │   └── Table.jsx          # Data table component
    ├── pages/                 # Page components
    │   ├── Dashboard.jsx      # Main dashboard with stats
    │   ├── ListView.jsx       # Orders list with filters
    │   ├── CreatePage.jsx     # Create new order form
    │   └── EditPage.jsx       # Edit existing order form
    ├── App.jsx                # Main app component with routing
    ├── main.jsx               # App entry point
    └── index.css              # Global styles and utilities
```

## Installation & Setup

1. **Clone or download the project**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start JSON Server** (in one terminal):
   ```bash
   npm run server
   ```
4. **Start development server** (in another terminal):
   ```bash
   npm run dev
   ```
5. **Open browser** to `http://localhost:5173`

## API Endpoints

- `GET /orders` - Get all orders
- `GET /orders/:id` - Get specific order
- `POST /orders` - Create new order
- `PUT /orders/:id` - Update order
- `DELETE /orders/:id` - Delete order

## Sample Data Structure

```json
{
  "id": 1,
  "customerName": "John Doe",
  "serviceType": "Wash & Fold",
  "weight": 5,
  "status": "Pending",
  "date": "2023-10-01",
  "phone": "08123456789",
  "address": "Jl. Sudirman No. 1"
}
```

## Component Examples

### Button Variants
```jsx
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="danger">Delete</Button>
<Button variant="ghost">Cancel</Button>
```

### Card Usage
```jsx
<Card className="p-6">
  <h3>Card Title</h3>
  <p>Card content...</p>
</Card>
```

### Modal Usage
```jsx
<Modal isOpen={isOpen} onClose={closeModal} title="Modal Title">
  <p>Modal content...</p>
  <div className="flex justify-end space-x-3">
    <Button variant="secondary" onClick={closeModal}>Cancel</Button>
    <Button variant="primary">Confirm</Button>
  </div>
</Modal>
```

## Design Philosophy

- **Minimalism**: Clean layouts with ample white space
- **Glassmorphism**: Subtle transparency and blur effects
- **Gradients**: Soft color transitions for modern feel
- **Animations**: Subtle hover effects and transitions
- **Responsiveness**: Mobile-first design approach
- **Accessibility**: Proper contrast ratios and keyboard navigation

## Future Enhancements

- User authentication and authorization
- Order status tracking with timeline
- Payment integration
- Customer management
- Analytics and reporting
- Push notifications
- Multi-language support

---

Built with ❤️ using modern web technologies for a premium laundry management experience.
