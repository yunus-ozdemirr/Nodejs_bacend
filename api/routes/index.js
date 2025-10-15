import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

const routes = fs.readdirSync(__dirname);

for (const route of routes) {
  if (route.endsWith('.js') && route !== 'index.js') {
    const modulePath = path.join(__dirname, route);
    // Windows yolu → URL’ye çevir
    const fileUrl = pathToFileURL(modulePath).href;

    const module = await import(fileUrl); // Artık geçerli bir URL
    router.use('/' + route.replace('.js', ''), module.default);
  }
}

export default router;
