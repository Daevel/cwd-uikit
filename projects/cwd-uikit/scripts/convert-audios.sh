#!/bin/bash

# --- Imposta permessi dello script stesso ---
chmod +x "$0"

# Percorso cartella audio relativa allo script
AUDIO_DIR="../src/assets/audios"
# Percorso file TS di destinazione
OUTPUT_FILE="../src/types/audio-const-base64.ts"

# Inizia il file TS
echo "// Questo file è generato automaticamente" > "$OUTPUT_FILE"

# Verifica se la cartella audio esiste e contiene file
if [ ! -d "$AUDIO_DIR" ] || [ -z "$(ls -A $AUDIO_DIR)" ]; then
  echo "Errore: la cartella $AUDIO_DIR è vuota o non esiste."
  exit 1
fi

# Cicla su ogni file audio
for file in "$AUDIO_DIR"/*; do
  filename=$(basename "$file")
  varname=$(echo "$filename" | sed -E 's/[^a-zA-Z0-9]/_/g' | tr '[:lower:]' '[:upper:]')
  base64content=$(base64 "$file" | tr -d '\n')
  echo "export const $varname = 'data:audio/${file##*.};base64,$base64content';" >> "$OUTPUT_FILE"
done

echo "Modulo audio-const-base64.ts generato con successo in src/types!"
