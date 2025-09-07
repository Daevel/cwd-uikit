const fs = require('fs');
const path = require('path');
const solidIcons = require('@fortawesome/free-solid-svg-icons');
const brandIcons = require('@fortawesome/free-brands-svg-icons');

const outputFile = process.argv[2];
if (!outputFile) {
  console.error("Devi passare il percorso di output come argomento");
  process.exit(1);
}

let tsContent = `// Questo file è generato automaticamente\n\n`;
tsContent += `export const icons = {\n`;

// Funzione per filtrare le icone che iniziano con 'fa'
const getIconNames = (iconsObj) => Object.keys(iconsObj).filter(k => k.startsWith('fa'));

// Uniamo solid + brand
const allIcons = [...getIconNames(solidIcons), ...getIconNames(brandIcons)];

// Oggetto per tenere traccia dei duplicati
const seenNames = {};

allIcons.forEach((iconName, idx) => {
  const iconObj = solidIcons[iconName] || brandIcons[iconName];

  // Generiamo una chiave unica per l'oggetto TS
  let keyName = iconName;
  if (seenNames[iconName]) {
    keyName = `${iconName}_${seenNames[iconName]}`;
    seenNames[iconName]++;
  } else {
    seenNames[iconName] = 1;
  }

  tsContent += `  ${keyName}: ${JSON.stringify(iconObj)}`;
  tsContent += idx < allIcons.length - 1 ? ',\n' : '\n';
});

tsContent += '};\n';

fs.writeFileSync(outputFile, tsContent, 'utf8');
console.log(`Generate ${allIcons.length} icone in ${outputFile}`);

