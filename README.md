# Webpack Boilerplate

A boilerplate for building web projects with Webpack 5.

**Features**

* CSS
  * Sass compilation
  * PostCSS transformation (Tailwindcss, Autoprefixer)
  * Remove unused CSS with PurgeCSS
  * Minify
  * File versioning for cache-busting (in production)
* JavaScript
  * Minify with terser
  * File versioning for cache-busting (in production)
* Images
  * Copy
  * Optimize with imagemin (in production)
* Fonts
  * Copy
* Web server (Browsersync)
  * Watch files changes, inject style, browser auto-refresh and cross-device synchronization

## Getting Started

### Quick Start

1. Clone repository
2. Install Node dependencies `npm install`.
3. Run tasks:
  * Development server `npm run dev`
  * Production build `npm run build`

## License

MIT © [Florian Bouvot](https://github.com/florianbouvot)
