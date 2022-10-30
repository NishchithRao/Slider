import { sharedConfig } from '../../vite.config';
import pkgJSON from './package.json';

/** @type {import('vite').UserConfig} */
export default {
  plugins: [...sharedConfig(pkgJSON).plugins],
  ...sharedConfig(pkgJSON)
};
