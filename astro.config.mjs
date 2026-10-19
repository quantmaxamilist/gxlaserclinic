import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://www.gerrardscrosslc.com',
  build: { format: 'file' },
  trailingSlash: 'ignore',
  scopedStyleStrategy: 'class',
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  server: { port: 4391 },
});
