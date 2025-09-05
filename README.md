# 🚀 Modern Developer Portfolio

A stunning, fully responsive developer portfolio built with React, Tailwind CSS, Framer Motion, and React Three Fiber. Features interactive 3D animations, smooth transitions, and a modern design perfect for showcasing your development skills.

![Portfolio Preview](https://via.placeholder.com/800x400/0ea5e9/ffffff?text=Portfolio+Preview)

## ✨ Features

- **🎨 Modern Design**: Clean, professional UI with a vibrant color scheme
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **🎬 Smooth Animations**: Powered by Framer Motion for fluid interactions
- **🎯 3D Elements**: Interactive 3D models using React Three Fiber
- **⚡ Fast Performance**: Built with Vite for optimal loading speeds
- **♿ Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **🎭 Interactive Loader**: Custom animated loading screen
- **📧 Contact Form**: Functional contact form with validation
- **🔄 Smooth Scrolling**: Seamless navigation between sections
- **📊 Scroll Progress**: Visual progress indicator
- **🌙 Glass Morphism**: Modern glassmorphism effects throughout

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber, Three.js, Drei
- **Icons**: Heroicons, Lucide React
- **Typography**: Inter, JetBrains Mono fonts
- **Development**: Hot reload, ESLint

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/developer-portfolio.git
   cd developer-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see your portfolio in action!

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── 3d/              # 3D components and scenes
│   │   ├── FloatingCube.jsx
│   │   ├── FloatingSphere.jsx
│   │   └── Scene3D.jsx
│   ├── layout/          # Layout components
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   ├── sections/        # Main page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   └── Contact.jsx
│   └── ui/              # UI components
│       └── Loader.jsx
├── hooks/               # Custom React hooks
│   └── useScrollProgress.js
├── data/                # Static data files
├── utils/               # Utility functions
├── index.css           # Global styles
├── App.jsx             # Main app component
└── main.jsx            # App entry point
```

## 🎨 Customization

### 1. Personal Information

Update your personal details in the following files:

- `src/components/sections/Hero.jsx` - Name, title, description
- `src/components/sections/About.jsx` - Skills, experience, story
- `src/components/sections/Contact.jsx` - Contact information
- `src/components/layout/Footer.jsx` - Social links, email

### 2. Projects

Modify the projects array in `src/components/sections/Projects.jsx`:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description...',
    image: 'project-image-url',
    tags: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/you/project',
    featured: true,
  },
  // Add more projects...
];
```

### 3. Services

Update services in `src/components/sections/Services.jsx`:

```javascript
const services = [
  {
    icon: CodeBracketIcon,
    title: 'Your Service',
    description: 'Service description...',
    features: ['Feature 1', 'Feature 2'],
    price: 'Starting at $X',
    popular: false,
  },
  // Add more services...
];
```

### 4. Colors & Theme

Customize the color palette in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your primary colors
      },
      secondary: {
        // Your secondary colors
      },
    },
  },
},
```

### 5. 3D Elements

Modify 3D scenes in the `src/components/3d/` directory:

- Adjust colors, materials, and animations
- Add new 3D models or shapes
- Customize camera controls and lighting

## 🔧 Performance Optimizations

- **Lazy Loading**: Components are optimized for performance
- **Image Optimization**: Use WebP format for images
- **Code Splitting**: Automatic code splitting with Vite
- **Tree Shaking**: Unused code is automatically removed
- **Minification**: Production build is minified and compressed

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader friendly descriptions
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Proper focus handling
- **Color Contrast**: WCAG AA compliant color ratios
- **Reduced Motion**: Respects user motion preferences

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with customization, please open an issue or reach out to me at [john@developer.com](mailto:john@developer.com).

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for amazing animations
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) for 3D capabilities
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Heroicons](https://heroicons.com/) for beautiful icons
- [Unsplash](https://unsplash.com/) for stock images

---

Built with ❤️ by [John Developer](https://github.com/johndeveloper)

⭐ Star this repo if you found it helpful!
