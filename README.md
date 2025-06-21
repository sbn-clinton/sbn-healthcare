# MediCare+ Healthcare Website Template

A modern, responsive healthcare website template built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## ✨ Features

- **🎨 Modern Design**: Clean, professional healthcare-focused design
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **🌙 Dark Mode**: Built-in dark/light mode toggle
- **⚡ Performance**: Optimized for speed and SEO
- **♿ Accessible**: WCAG compliant with proper ARIA labels
- **🎭 Animations**: Subtle, professional animations throughout
- **🧩 Modular**: Component-based architecture for easy customization

## 🏗️ Project Structure

\`\`\`
healthcare-template/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and animations
├── components/
│   ├── navigation.tsx      # Header navigation
│   ├── hero-section.tsx    # Hero/landing section
│   ├── services-section.tsx # Healthcare services
│   ├── doctors-section.tsx # Doctor profiles
│   ├── appointment-form-section.tsx # Booking form
│   ├── testimonials-section.tsx # Patient reviews
│   ├── pricing-section.tsx # Insurance & pricing
│   ├── about-section.tsx   # Company information
│   ├── contact-section.tsx # Contact form & info
│   ├── footer.tsx          # Footer component
│   ├── scroll-to-top.tsx   # Scroll to top button
│   ├── animated-logo.tsx   # Animated logo component
│   └── animated-background.tsx # Background animations
├── components/ui/          # shadcn/ui components
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.mjs        # Next.js configuration
└── package.json           # Dependencies
\`\`\`

## 🚀 Getting Started

1. **Install Dependencies**
   \`\`\`bash
   npm install
   \`\`\`

2. **Run Development Server**
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Open in Browser**
   Navigate to `http://localhost:3000`

## 🎯 Sections Included

- **Navigation**: Responsive header with logo and menu
- **Hero**: Eye-catching landing section with CTAs
- **Services**: Healthcare services grid with icons
- **Doctors**: Team member profiles with ratings
- **Appointment**: Booking form with validation
- **Testimonials**: Patient reviews and ratings
- **Pricing**: Insurance plans and pricing tables
- **About**: Company information and statistics
- **Contact**: Contact form and information
- **Footer**: Links, social media, and company info

## 🎨 Customization

### Colors
The template uses a healthcare-focused color palette defined in `tailwind.config.js`:
- **Primary**: Blue tones for trust and professionalism
- **Secondary**: Green tones for health and wellness
- **Accent**: Purple and orange for highlights

### Components
Each section is a separate component that can be:
- Reordered or removed
- Customized independently
- Reused in other projects

### Content
Update the data arrays in each component file to customize:
- Services offered
- Doctor profiles
- Testimonials
- Pricing plans
- Contact information

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Responsive across all screen sizes
- **Touch Friendly**: Optimized for touch interactions
- **Performance**: Optimized images and lazy loading

## ♿ Accessibility

- **WCAG Compliant**: Follows accessibility guidelines
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Color Contrast**: High contrast ratios for readability

## 🔧 Built With

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality React components
- **Lucide React**: Beautiful icons
- **Radix UI**: Accessible component primitives

## 📦 Production Build

\`\`\`bash
npm run build
npm start
\`\`\`

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is licensed under the MIT License.
