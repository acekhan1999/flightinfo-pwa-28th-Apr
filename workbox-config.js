module.exports = {
    globDirectory: 'build/',
    globPatterns: [
      '**/*.{js,css,html,png,ico,svg,json,txt}'
    ],
    swDest: 'build/service-worker.js',
    runtimeCaching: [
      {
        // This pattern matches /v1/flights plus anything after it, including ?access_key=...
        urlPattern: /^https:\/\/api\.aviationstack\.com\/v1\/flights.*$/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'flight-api-cache',
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 60 * 30 // 30 minutes
          }
        }
      },
      {
        // Example for Google Fonts or other resources
        urlPattern: /^https:\/\/fonts\.gstatic\.com\//,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts',
          expiration: {
            maxAgeSeconds: 60 * 60 * 24 * 30
          }
        }
      }
    ]
  };