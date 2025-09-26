module.exports = {
  // Netlify build directory
  buildDir: '.next',
  
  // Netlify dev command
  dev: 'next dev',
  
  // Netlify functions directory
  functionsDir: 'netlify/functions',
  
  // Headers for the site
  headers: {
    '/*': [
      'Cache-Control: public, max-age=0, must-revalidate'
    ],
    '/static/*': [
      'Cache-Control: public, max-age=31536000, immutable'
    ]
  }
}