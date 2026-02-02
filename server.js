#!/usr/bin/env node
const { spawn } = require('child_process');

// Spawn the correct Nuxt start command
const child = spawn('node', ['.output/server/index.mjs'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    HOST: process.env.HOST || '0.0.0.0',
    PORT: process.env.PORT || 3000
  }
});

child.on('error', (err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

child.on('exit', (code) => {
  process.exit(code);
});