@echo off
echo ========================================
echo    DevPortfolioHub - Inicializacao
echo ========================================
echo.

echo Verificando se o Node.js esta instalado...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERRO: Node.js nao encontrado!
    echo Por favor, instale o Node.js 18+ em: https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js encontrado!
echo.

echo Instalando dependencias...
npm install
if errorlevel 1 (
    echo ERRO: Falha ao instalar dependencias!
    pause
    exit /b 1
)

echo.
echo Dependencias instaladas com sucesso!
echo.

echo Configurando ambiente...
if not exist .env (
    echo Criando arquivo .env...
    copy env.example .env
    echo Arquivo .env criado! Configure as variaveis se necessario.
) else (
    echo Arquivo .env ja existe.
)

echo.
echo Iniciando servidor de desenvolvimento...
echo O projeto estara disponivel em: http://localhost:5000
echo.
echo Pressione Ctrl+C para parar o servidor.
echo.

npm run dev 