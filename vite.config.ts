import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // Load env file based on `mode` in the current working directory.
    const env = loadEnv(mode, process.cwd(), '');
    
    return {
      // 1. Base path ko './' rakha hai taake files relative milen (404 fix)
      base: './', 
      
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      
      // 2. Netlify par API_KEY ko recognize karne ke liye ye format behtar hai
     // Isay replace karen
define: {
  'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
},
      
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './'),
        }
      },
      
      // 3. Build options add kiye hain taake output folder 'dist' hi banay
      build: {
        outDir: 'dist',
        assetsDir: 'assets',
      }
    };
});