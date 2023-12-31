import { UserConfigExport, defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'  

export default () => {
  const config: UserConfigExport = {
    plugins: [
      react(),
    ],
    define: {
      'process.env': {
        API_URL: process.env.VITE_API_URL,
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: [
        '.js',
        '.json',
        '.jsx',
        '.mjs',
        '.ts',
        '.tsx',
      ],
    },
  }

  return defineConfig(config)
}
