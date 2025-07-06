#!/bin/bash

echo "========================================"
echo "   DevPortfolioHub - Inicialização"
echo "========================================"
echo

echo "Verificando se o Node.js está instalado..."
if ! command -v node &> /dev/null; then
    echo "ERRO: Node.js não encontrado!"
    echo "Por favor, instale o Node.js 18+ em: https://nodejs.org/"
    exit 1
fi

echo "Node.js encontrado!"
echo

echo "Instalando dependências..."
npm install
if [ $? -ne 0 ]; then
    echo "ERRO: Falha ao instalar dependências!"
    exit 1
fi

echo
echo "Dependências instaladas com sucesso!"
echo

echo "Configurando ambiente..."
if [ ! -f .env ]; then
    echo "Criando arquivo .env..."
    cp env.example .env
    echo "Arquivo .env criado! Configure as variáveis se necessário."
else
    echo "Arquivo .env já existe."
fi

echo
echo "Iniciando servidor de desenvolvimento..."
echo "O projeto estará disponível em: http://localhost:5000"
echo
echo "Pressione Ctrl+C para parar o servidor."
echo

npm run dev 