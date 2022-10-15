import { sharedConfig } from '../../vite.config';
import pkgJSON from './package.json';

/** @type {import('vite').UserConfig} */
export default {
  ...sharedConfig(pkgJSON)
};
