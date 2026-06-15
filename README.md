# Portfolio <img src="https://vitejs.dev/logo.svg" alt="Vite" width="25" height="25"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="25" height="25"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind" width="25" height="25">

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-4B4B4B?style=for-the-badge&logo=gmail&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

Personal portfolio built with **React 19**, **Vite 7**, and **Tailwind CSS v4**. Features multi-language support, dark/light theme, a contact form via EmailJS, and an interactive starry background.

## Features

- 🌍 **Multi-language**: Spanish, English, and Chinese
- 🌓 **Dark/Light theme** with system preference detection
- ⭐ **Animated star background** with meteor showers
- 📱 **Fully responsive** — mobile-first design
- 📬 **Functional contact form** powered by EmailJS
- 📄 **Downloadable CV** and certificate viewer
- 🎯 **SEO optimized** with Open Graph and Twitter Cards
- ⚡ **Blazing fast** with Vite 7

## Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | React 19, React Router DOM v7 |
| **Build Tool** | Vite 7 |
| **Styling** | Tailwind CSS v4 (CSS-first config) |
| **Icons** | Lucide React, React Icons |
| **Email** | EmailJS (browser SDK) |
| **UI** | Radix UI Toast, class-variance-authority |
| **Deployment** | Vercel (SPA rewrites) |

## Project Structure

```
src/
├── assets/           # CV PDF, certificates, icons
├── components/       # UI components & sections
│   └── ui/           # Toast primitives
├── context/          # Language context & translations
├── hooks/            # Custom hooks (use-toast)
├── lib/              # Utilities (cn function)
└── pages/            # Home & NotFound pages
```

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/DeusNoctifer/Portafolio-React-Tailwind
   cd Portafolio-React-Tailwind
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your EmailJS credentials:

   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

   > Get these from [EmailJS](https://www.emailjs.com/) after creating a free account.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint across the project |

## Live Demo

Check out the live version at [juanma-tech.vercel.app](https://juanma-tech.vercel.app/)

## License

This project is licensed under the **GNU General Public License v3.0**. See the [LICENSE](LICENSE) file for details.