// vite.config.js
import { defineConfig } from "file:///C:/Users/Wall-E/Desktop/Projects/Hilal%20Projects/Lash/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Wall-E/Desktop/Projects/Hilal%20Projects/Lash/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setup.js",
    css: true,
    coverage: {
      reporter: ["text"]
    }
  },
  build: {
    outDir: "./public"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxXYWxsLUVcXFxcRGVza3RvcFxcXFxQcm9qZWN0c1xcXFxIaWxhbCBQcm9qZWN0c1xcXFxMYXNoXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxXYWxsLUVcXFxcRGVza3RvcFxcXFxQcm9qZWN0c1xcXFxIaWxhbCBQcm9qZWN0c1xcXFxMYXNoXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9XYWxsLUUvRGVza3RvcC9Qcm9qZWN0cy9IaWxhbCUyMFByb2plY3RzL0xhc2gvdml0ZS5jb25maWcuanNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGUvY2xpZW50XCIgLz5cblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgdGVzdDp7XG4gICAgZ2xvYmFsczogdHJ1ZSxcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgICBzZXR1cEZpbGVzOiAnLi9zcmMvc2V0dXAuanMnLFxuICAgIGNzczogdHJ1ZSxcbiAgICBjb3ZlcmFnZToge1xuICAgICAgcmVwb3J0ZXI6IFtcInRleHRcIl1cbiAgICB9XG4gIH0sXG4gIGJ1aWxkOntcbiAgICBvdXREaXI6ICcuL3B1YmxpYydcbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFFQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLE1BQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxJQUNiLFlBQVk7QUFBQSxJQUNaLEtBQUs7QUFBQSxJQUNMLFVBQVU7QUFBQSxNQUNSLFVBQVUsQ0FBQyxNQUFNO0FBQUEsSUFDbkI7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFNO0FBQUEsSUFDSixRQUFRO0FBQUEsRUFDVjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==