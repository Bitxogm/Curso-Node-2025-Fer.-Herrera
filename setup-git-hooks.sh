#!/bin/bash
# Script para configurar git con hook pre-commit que ejecuta check-secrets.sh

# 1. Inicializar git si no existe
if [ ! -d ".git" ]; then
  echo "Inicializando repositorio git..."
  git init
else
  echo "Repositorio git ya existe."
fi

# 2. Crear carpeta scripts si no existe
mkdir -p scripts

# 3. Crear script check-secrets.sh con contenido
cat > scripts/check-secrets.sh << 'EOF'
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
EOF

# 4. Dar permisos de ejecución al script
chmod +x scripts/check-secrets.sh
echo "Permisos asignados a scripts/check-secrets.sh"

# 5. Crear hook pre-commit en .git/hooks/
HOOK_PATH=".git/hooks/pre-commit"
cat > "$HOOK_PATH" << 'EOF'
#!/bin/bash
./scripts/check-secrets.sh
EOF

# 6. Dar permisos de ejecución al hook
chmod +x "$HOOK_PATH"
echo "Hook pre-commit creado y permisos asignados."

# 7. Crear un ejemplo básico de .gitignore si no existe
if [ ! -f ".gitignore" ]; then
  cat > .gitignore << EOF
node_modules/
.env*
functions/.runtimeconfig.json
firebase-config.js
.sh
EOF
  echo ".gitignore creado con configuración básica."
else
  echo ".gitignore ya existe, no se modificó."
fi

echo "Configuración completa. Ahora cada commit ejecutará el script check-secrets.sh."
