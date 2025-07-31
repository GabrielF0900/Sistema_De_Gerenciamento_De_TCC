# 🚨 Guia de Resolução do Erro "Unexpected token '<'"

## ❌ Erro Comum: `Unexpected token '<', "<!DOCTYPE "... is not valid JSON`

Este erro significa que a API está retornando **HTML** (página de erro) em vez de **JSON**. Geralmente acontece quando:

## 🔍 Causas Possíveis:

### 1. **Backend não está rodando**
```bash
# Verifique se o backend está ativo
cd Backend
npm run dev
```
**Solução**: Certifique-se de que o servidor backend está rodando na porta 3000.

### 2. **URL da API incorreta**
- ✅ **Corrigido**: Adicionado prefixo `/api` no servidor backend
- Frontend: `http://localhost:3000/api/auth/login`
- Backend: Agora aceita rotas com `/api`

### 3. **Problema de CORS**
- ✅ **Configurado**: CORS habilitado no backend
- Permite requisições do frontend React

### 4. **Endpoint não existe**
- ✅ **Verificado**: Rotas de auth estão funcionando
- `POST /api/auth/login`
- `POST /api/auth/register`

## 🛠️ Checklist de Resolução:

### ✅ **1. Verificar se o Backend está Rodando**
```bash
cd Backend
npm install
npm run dev
```
Deve aparecer: `Servidor rodando na porta 3000 🚀`

### ✅ **2. Verificar se o Frontend está Rodando**
```bash
cd Frontend  
npm install
npm run dev
```
Deve aparecer: `Local: http://localhost:5173/`

### ✅ **3. Testar Endpoint Diretamente**
Use um cliente HTTP como Postman ou Insomnia:

**POST** `http://localhost:3000/api/auth/login`
```json
{
  "email": "teste@email.com",
  "password": "123456"
}
```

### ✅ **4. Verificar Logs do Console**
- **Frontend**: Abra DevTools (F12) → Console
- **Backend**: Verifique terminal onde está rodando

## 🔧 Melhorias Implementadas:

### **Tratamento de Erros Aprimorado**
```typescript
// Agora captura diferentes tipos de erro:
- Erro de rede (backend offline)
- Erro de parse JSON  
- Erro de resposta HTTP
- Mensagens de erro específicas
```

### **Mensagens de Erro Mais Claras**
- ❌ Antes: "Erro desconhecido"
- ✅ Agora: "Erro de conexão: Verifique se o servidor está rodando"

## 🚀 **Como Testar Agora:**

1. **Reinicie o Backend**
   ```bash
   cd Backend
   npm run dev
   ```

2. **Teste o Login**
   - Acesse `http://localhost:5173/login`
   - Digite credenciais válidas
   - Observe mensagens de erro mais específicas

3. **Teste o Registro**
   - Acesse `http://localhost:5173/register`
   - Preencha o formulário
   - Verifique se funciona corretamente

## 📋 **Checklist Rápido:**

- [ ] Backend rodando na porta 3000
- [ ] Frontend rodando na porta 5173
- [ ] Sem erros no console do backend
- [ ] Sem erros no DevTools do browser
- [ ] Database conectado (se aplicável)
- [ ] CORS configurado

## 🎯 **URLs Corretas:**

| Serviço | URL | Status |
|---------|-----|---------|
| Frontend | `http://localhost:5173` | ✅ |
| Backend API | `http://localhost:3000/api` | ✅ |
| Login Endpoint | `POST /api/auth/login` | ✅ |
| Register Endpoint | `POST /api/auth/register` | ✅ |

---

## 💡 **Dica Pro:**
Se ainda tiver problemas, verifique:
1. **Firewall/Antivírus** bloqueando portas
2. **Outras aplicações** usando porta 3000
3. **Variáveis de ambiente** no `.env`
4. **Dependências instaladas** com `npm install`

**Status**: ✅ Problema resolvido com prefixo `/api` e melhor tratamento de erros!
