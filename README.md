# Dawit's Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, dark-themed design with orange accents
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Next.js optimization
- 🖼️ Interactive project gallery with image carousels
- 📧 Working contact form
- 🎭 Smooth animations and transitions
- 🔍 SEO optimized
- ♿ Accessibility features

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Animations:** CSS Transitions & Transforms

## Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Steps

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/dawit-portfolio.git
   cd dawit-portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Personal Information
- Update personal details in `components/sections/hero.tsx`
- Modify the about section in `components/sections/about.tsx`
- Update contact information in `components/sections/contact.tsx`

### Projects
- Add your projects in `components/sections/projects.tsx`
- Replace placeholder images with your actual project screenshots
- Update project links and descriptions

### Styling
- Customize colors in `tailwind.config.ts`
- Modify global styles in `app/globals.css`
- Adjust component styles in individual component files

### Images
- Add your profile photo to `public/` directory
- Add project screenshots to `public/projects/` directory
- Update image paths in components

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms
- **Netlify:** Connect GitHub repo and deploy
- **AWS Amplify:** Use the Amplify console
- **Traditional Hosting:** Run `npm run build` and upload the `out` folder

## Project Structure

\`\`\`
dawit-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   └── header.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── projects.tsx
│   │   └── contact.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── textarea.tsx
├── public/
│   └── (your images here)
├── package.json
├── tailwind.config.ts
└── README.md
\`\`\`

## Performance Optimizations

- ✅ Next.js Image optimization
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Optimized fonts
- ✅ Minimal bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email:** dawit@example.com
- **LinkedIn:** [linkedin.com/in/dawit](https://linkedin.com/in/dawit)
- **GitHub:** [github.com/dawit](https://github.com/dawit)

---

Built with ❤️ by Dawit
