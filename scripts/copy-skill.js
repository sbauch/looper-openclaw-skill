import fs from 'node:fs/promises';
import path from 'node:path';

const baseDir = path.resolve(new URL('.', import.meta.url).pathname, '..');
const srcSkill = path.join(baseDir, 'SKILL.md');
const srcRefs = path.join(baseDir, 'references');
const distDir = path.join(baseDir, 'dist');
const distSkill = path.join(distDir, 'SKILL.md');
const distRefs = path.join(distDir, 'references');

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  for (const entry of await fs.readdir(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

async function copySkill() {
  await fs.mkdir(distDir, { recursive: true });
  await fs.copyFile(srcSkill, distSkill);

  // Copy references/ directory if it exists
  try {
    await fs.access(srcRefs);
    await copyDir(srcRefs, distRefs);
  } catch {
    // No references directory — skip
  }
}

copySkill().catch((error) => {
  console.error(error);
  process.exit(1);
});
