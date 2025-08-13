#!/bin/bash

# --- Imposta permessi dello script stesso ---
chmod +x "$0"

# --- Percorso cartella icone ---
ICONS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/../src/icons"
mkdir -p "$ICONS_DIR"

# --- File di output ---
OUTPUT_FILE="$ICONS_DIR/icons.ts"

# --- Percorso corretto dello script JS ---
SCRIPT_JS="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/generate-icons.js"

# Controlla che il file esista
if [ ! -f "$SCRIPT_JS" ]; then
  echo "Errore: $SCRIPT_JS non trovato!"
  exit 1
fi

# Esegui lo script Node
node "$SCRIPT_JS" "$OUTPUT_FILE"
