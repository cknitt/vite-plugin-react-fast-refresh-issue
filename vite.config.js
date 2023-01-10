import react from "@vitejs/plugin-react";

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
const config = {
  plugins: [
    react({
      include: "**/*.bs.js",
    }),
  ],
};

export default config;
