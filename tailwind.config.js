/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
  ],
  
    compilerOptions: {
      // ...
      "baseUrl": ".",
      "paths": {
        "@/*": [
          "./src/*"
        ]
      }
      // ...
    },
  
  
  
  theme: {
    extend: {},
  },
  plugins: [],
}

