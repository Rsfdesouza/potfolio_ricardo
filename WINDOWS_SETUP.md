# Configuração no Windows

## 🚀 Inicialização Rápida

### Opção 1: Script Automático (Recomendado)

1. Clique duas vezes no arquivo `start-dev.bat`
2. Aguarde a instalação das dependências
3. O projeto abrirá automaticamente em http://localhost:5000

### Opção 2: Manual

1. Abra o PowerShell ou Command Prompt
2. Navegue até a pasta do projeto:
```cmd
cd C:\caminho\para\DevPortfolioHub-1
```

3. Instale as dependências:
```cmd
npm install
```

4. Configure o ambiente:
```cmd
copy env.example .env
```

5. Execute o projeto:
```cmd
npm run dev
```

## 🔧 Solução de Problemas

### Erro: "NODE_ENV não é reconhecido"

Este erro ocorre no Windows quando as variáveis de ambiente não são definidas corretamente.

**Solução:** O projeto já está configurado com `cross-env` para resolver este problema. Se ainda ocorrer, execute:

```cmd
npm install cross-env --save-dev
```

### Erro: "Porta 5000 já está em uso"

**Solução:** Mude a porta no arquivo `server/index.ts`:

```typescript
const port = 3000; // ou qualquer outra porta disponível
```

### Erro: "Módulo não encontrado"

**Solução:** Limpe o cache e reinstale as dependências:

```cmd
rmdir /s node_modules
del package-lock.json
npm install
```

### Erro: "Permissão negada"

**Solução:** Execute o PowerShell como administrador ou use:

```cmd
npm install --no-optional
```

## 📁 Estrutura de Arquivos Importantes

```
DevPortfolioHub-1/
├── start-dev.bat          # Script de inicialização Windows
├── env.example            # Exemplo de variáveis de ambiente
├── .env                   # Suas variáveis de ambiente (criar)
├── package.json           # Dependências e scripts
└── README.md             # Documentação completa
```

## 🌐 Acessando o Projeto

Após a inicialização bem-sucedida:

- **Frontend:** http://localhost:5000
- **API:** http://localhost:5000/api/projects

## 🛠️ Comandos Úteis

```cmd
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar produção
npm start

# Verificar tipos TypeScript
npm run check

# Executar migrações (se usar PostgreSQL)
npm run db:push
```

## 📞 Suporte

Se encontrar problemas:

1. Verifique se o Node.js 18+ está instalado
2. Certifique-se de que a porta 5000 está livre
3. Verifique se o arquivo `.env` foi criado corretamente
4. Consulte o `README.md` para instruções completas 