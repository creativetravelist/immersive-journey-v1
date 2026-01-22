# Interactive Postcard Journey

An innovative interactive digital postcard application that allows users to create personalized postcards and experience an immersive journey.

## 🌐 Demo

**[🚀 Live Demo](https://creativetravelist.github.io/immersive-journey-v1/)**


https://github.com/user-attachments/assets/60cfa8ba-3368-4f45-a8ec-ca118d85bfe2


## 🌟 Features

- **Interactive Experience**: Provides an engaging user journey from postcard selection to creation completion
- **Multiple Postcard Options**: Users can choose from various design templates
- **Digital Signature**: Support for digital signatures to add personal touch to postcards
- **Real-time Audio Experience**: Integrated music playback functionality to enhance user experience
- **Responsive Design**: Optimized for mobile devices with support for multiple screen sizes

## 🚀 Tech Stack

### Frontend Framework & Libraries

- **React 18.2.0**: Modern user interface framework
- **Material-UI v5**: Google Material Design system
- **React Router 6**: Single-page application routing management
- **Swiper**: Touch slider component for smooth carousel experience

### Core Functionality Libraries

- **html2canvas**: Convert web elements to images for download
- **react-signature-canvas**: Digital signature functionality
- **react-spring**: Smooth animation effects
- **dayjs**: Lightweight date manipulation library
- **axios**: HTTP request handling

### Integration Services

- **react-ga4**: Google Analytics 4 tracking
- **notistack**: Elegant notification system

## 📱 Application Flow

1. **Home Guide** (`/home`) - Welcome page with music controls
2. **Choose Postcard** (`/choose-postcard`) - Browse and select postcard templates
3. **Write Postcard** (`/write-postcard`) - Add personal messages and signatures
4. **Receive Postcard** (`/receive-postcard`) - View completed postcard
5. **Complete Page** (`/complete`) - Finish creation process
6. **Download Feature** (`/download`) - Download postcard images
7. **Thank You Page** (`/thankyou`) - Thank users for participation

## 🛠️ Development Commands

### Install Dependencies

```bash
yarn install
```

### Local Development

```bash
yarn start
```

Development server will start at `http://localhost:3000`

### Build Project

```bash
# Development build
yarn build:dev

# Production build
yarn build:prod
```

### Code Linting and Formatting

```bash
# ESLint check
yarn lint

# Prettier format
yarn format
```

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
├── pages/             # Page components
│   ├── ChoosePostcard/    # Choose postcard page
│   ├── WritePostcard/     # Write postcard page
│   ├── ReceivePostcard/   # Receive postcard page
│   ├── Journey/           # Main journey page
│   ├── Download/          # Download page
│   ├── Complete/          # Complete page
│   └── ThankyouPage/      # Thank you page
├── configs/           # Configuration files
├── hooks/             # Custom React Hooks
├── layouts/           # Layout components
├── providers/         # Context Providers
├── routes/            # Route configuration
├── themes/            # Theme settings
└── utils/             # Utility functions
```

## 🔧 Configuration

### Environment Variables

Project supports multi-environment configuration:

- `.env.development` - Development environment
- `.env.production` - Production environment

### Main Configuration Files

- `src/configs/constant.js` - Constants definition
- `src/configs/journey.js` - Journey flow configuration
- `src/configs/themeConfig.js` - Theme configuration

## 🎨 Design System

- **Theme Switching**: Support for light and dark themes
- **Responsive Design**: Adapted for mobile, tablet, and desktop devices
- **Material Design**: Following Google Material Design guidelines
- **Custom SCSS**: Flexible styling system

## 📊 Performance Optimization

- **Code Splitting**: Using React.lazy for route-level code splitting
- **Image Optimization**: CDN image loading with preloading
- **Bundle Analysis**: Built-in source-map-explorer analysis tool

## 🚀 Deployment

Project supports Firebase Hosting deployment:

```bash
# Deploy to development environment
yarn deploy:dev

# Deploy to production environment
yarn deploy:prod
```

## 💡 Development Highlights

1. **Modular Architecture**: Clear file structure and component separation
2. **Type Safety**: PropTypes validation ensures component property correctness
3. **Performance Monitoring**: Integrated Google Analytics for user behavior analysis
4. **Accessibility Design**: Support for keyboard navigation and screen readers
5. **Internationalization Ready**: Using react-intl for multi-language expansion support

## 📱 Technical Features

- **PWA Ready**: Support for Progressive Web App functionality
- **Offline Support**: Service Worker provides basic offline functionality
- **Touch Friendly**: Optimized interactive experience for touch devices
- **Performance First**: Optimized loading times and smooth animation effects

---

**Note**: This project is a portfolio showcase demonstrating modern React development best practices and user experience design.
