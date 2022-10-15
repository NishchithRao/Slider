import react from '@vitejs/plugin-react';
import { sharedConfig } from '../../vite.config';
import pkgJSON from './package.json';

/** @type {import('vite').UserConfig} */
export default {
  plugins: [react(), ...sharedConfig(pkgJSON).plugins],
  ...sharedConfig(pkgJSON)
};
