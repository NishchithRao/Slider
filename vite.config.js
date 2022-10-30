import dts from 'vite-plugin-dts';
import { visualizer } from 'rollup-plugin-visualizer';

const sharedConfig = (pkgJSON) => ({
  plugins: [
    dts({
      tsConfigFilePath: './tsconfig.json'
    }),
    visualizer({
      filename: 'dist/stats.html'
    })
  ],
  build: {
    lib: {
      entry: pkgJSON.source,
      fileName: 'index',
      formats: ['cjs', 'es']
    },
    rollupOptions: {
      external: pkgJSON.peerDependencies
    },
    emptyOutDir: true,
    outDir: 'dist',
    minify: 'esbuild'
  }
});

export { sharedConfig };
