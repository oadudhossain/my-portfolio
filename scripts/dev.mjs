// Accept standard Next.js flags and the managed preview's equivalent Vite flags.
const incoming = process.argv.slice(2);
const args = incoming.filter(value => value !== '--strictPort').map(value => value === '--host' ? '--hostname' : value);
process.argv = [process.execPath, new URL('../node_modules/next/dist/bin/next', import.meta.url).pathname, 'dev', ...args];
await import('../node_modules/next/dist/bin/next');
