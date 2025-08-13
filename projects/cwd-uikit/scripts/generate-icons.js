const fs = require('fs');
const path = require('path');
const solidIcons = require('@fortawesome/free-solid-svg-icons');

const outputFile = process.argv[2];
if (!outputFile) {
  console.error("Devi passare il percorso di output come argomento");
  process.exit(1);
}

let tsContent = `// Questo file è generato automaticamente\n\n`;
tsContent += `export const icons = {\n`;

const iconNames = Object.keys(solidIcons).filter(k => k.startsWith('fa'));

iconNames.forEach((iconName, idx) => {
  tsContent += `  ${iconName}: ${JSON.stringify(solidIcons[iconName])}`;
  tsContent += idx < iconNames.length - 1 ? ',\n' : '\n';
});

tsContent += '};\n';

fs.writeFileSync(outputFile, tsContent, 'utf8');
console.log(`Generate ${iconNames.length} icone in ${outputFile}`);
