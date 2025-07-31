// Script de teste para verificar se as rotas estão funcionando
// Execute este arquivo para testar os endpoints

const testLogin = async () => {
  try {
    console.log('🧪 Testando LOGIN...');
    const response = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'teste@email.com',
        password: '123456'
      })
    });
    
    console.log('Status:', response.status);
    const data = await response.text();
    console.log('Response:', data);
  } catch (error) {
    console.error('Erro no login:', error);
  }
};

const testRegister = async () => {
  try {
    console.log('\n🧪 Testando REGISTER...');
    const response = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome_completo: 'Teste Usuario',
        email: 'teste@email.com',
        senha: '123456',
        tipo: 'ALUNO',
        instituicao: 'Universidade Teste'
      })
    });
    
    console.log('Status:', response.status);
    const data = await response.text();
    console.log('Response:', data);
  } catch (error) {
    console.error('Erro no registro:', error);
  }
};

// Executa os testes
const runTests = async () => {
  console.log('🚀 Iniciando testes de API...\n');
  await testLogin();
  await testRegister();
  console.log('\n✅ Testes concluídos');
};

runTests();
