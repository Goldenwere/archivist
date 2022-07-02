import * as path from 'path'
import { readdirSync } from 'fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://stackoverflow.com/a/69431838
const absolutePathAliases: { [key: string]: string } = {};
// Root resources folder
const srcPath = path.resolve('./');
// Ajust the regex here to include .vue, .js, .jsx, etc.. files from the root folder
const srcRootContent = readdirSync(srcPath, { withFileTypes: true }).map((dirent) => dirent.name.replace(/(\.ts){1}(x?)/, ''));

srcRootContent.forEach((directory) => {
  absolutePathAliases[directory] = path.join(srcPath, directory);
});

// https://vitejs.dev/config/
export default defineConfig({
  root: '',
  resolve: {
    alias: {
      ...absolutePathAliases
    }
  },
  base: process.env.ELECTRON == "true" ? './' : ".",
  plugins: [react()],
})
