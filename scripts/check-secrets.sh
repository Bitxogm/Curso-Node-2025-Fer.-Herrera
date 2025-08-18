#!/bin/bash

echo "🔍 Escaneando posibles secretos en el código..."

keywords=("apikey" "api_key" "secret" "token" "password" "firebase" "key" "API_KEY")

found=0

for word in "${keywords[@]}"; do
  results=$(grep -r -i --exclude-dir={node_modules,.git} --binary-files=without-match "$word" .)
  if [ ! -z "$results" ]; then
    echo "❗ Se encontraron posibles coincidencias para la palabra '$word':"
    echo "$results"
    echo
    found=1
  fi
done

if [ $found -eq 0 ]; then
  echo "✅ No se encontraron posibles secretos."
  exit 0
else
  echo "⚠️ ¡Advertencia! Se detectaron posibles secretos."
  read -r -p "¿Quieres continuar con el commit de todas formas? (s/N): " confirm < /dev/tty
  if [[ "$confirm" == "s" || "$confirm" == "S" ]]; then
    echo "✅ Continuando con el commit..."
    exit 0
  else
    echo "❌ Commit cancelado. Revisa los archivos señalados."
    exit 1
  fi
fi
