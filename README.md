# Thiqah Real Estate Website

A modern, responsive real estate website built with React, TypeScript, and Tailwind CSS. The website features bilingual support (English/Arabic) and comprehensive real estate services.

## Features

### 🏠 Pages
- **Home** (`/`) - Landing page with hero section, services overview, and features
- **About Us** (`/about`) - Company information, mission, vision, values, and team
- **Our Services** (`/services`) - Comprehensive services landing page with detailed service sections
- **Contact Us** (`/contact`) - Contact form and company information
- **Track Shipment** (`/track`) - Shipment tracking functionality with real-time status

### 🌐 Bilingual Support
- Full English and Arabic language support
- RTL (Right-to-Left) layout for Arabic
- Language switching functionality
- Arabic font (Cairo) integration

### 🎨 Design Features
- Modern, responsive design
- Mobile-first approach
- Beautiful gradients and animations
- Professional color scheme (Thiqah Blue)
- Interactive components and hover effects

### 🛠 Services Offered
1. **Real Estate Marketing** - Digital marketing, photography, social media management
2. **Interior Design Finishing** - Custom design, space planning, material selection
3. **Post-Finishing Cleaning** - Construction debris removal, deep cleaning
4. **Rental Services** - Furnished accommodations across Cairo
5. **General Finishing Supplies** - Quality materials and tools
6. **Furniture Moving** - Safe and reliable moving services

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router DOM
- **UI Components**: Shadcn/ui components
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: React hooks

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd thiqah
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/            # Shadcn/ui components
│   ├── Navbar.tsx     # Navigation component
│   ├── Footer.tsx     # Footer component
│   ├── Hero.tsx       # Hero section
│   ├── Services.tsx   # Services overview
│   ├── Features.tsx   # Features section
│   └── CallToAction.tsx
├── pages/             # Page components
│   ├── Index.tsx      # Home page
│   ├── AboutUs.tsx    # About page
│   ├── ContactUs.tsx  # Contact page
│   ├── TrackShipment.tsx # Tracking page
│   ├── OurServices.tsx # Services landing page
│   └── NotFound.tsx   # 404 page
├── lib/               # Utility functions
├── hooks/             # Custom React hooks
└── App.tsx           # Main app component
```

## Key Features

### Responsive Design
- Mobile-first approach
- Responsive grid layouts
- Adaptive navigation
- Touch-friendly interfaces

### Performance
- Optimized bundle size
- Lazy loading capabilities
- Efficient routing
- Fast development server

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility

### SEO Ready
- Meta tags support
- Semantic HTML
- Fast loading times
- Mobile-friendly

## Customization

### Colors
The website uses a custom color scheme defined in `tailwind.config.ts`:
- Primary: `thiqah-blue` (#1e40af)
- Secondary colors for different service sections

### Fonts
- English: System fonts
- Arabic: Cairo font family

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For any questions or support, please contact the development team. 