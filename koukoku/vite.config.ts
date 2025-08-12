import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import dts from "vite-plugin-dts"
import { resolve } from "node:path"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({ rollupTypes: true })
  ],
  resolve: {
    alias: {
      "@uragawa": resolve(__dirname, "../uragawa/src")
    }
  },
  build: {
    lib: {
      entry: "src/index.ts",
      name: "koukoku",
      fileName: (format) => `koukoku.${format}.js`,
      formats: ["es", "cjs", "umd"]
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React"
        }
      }
    }
  }
})
