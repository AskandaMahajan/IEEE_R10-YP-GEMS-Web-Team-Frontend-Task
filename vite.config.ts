import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "IEEE_R10-YP-GEMS-Web-Team-Frontend-Task",
  plugins: [react()],
})
