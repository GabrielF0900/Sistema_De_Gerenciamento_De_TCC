import { $Enums, PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

type AreasConhecimento = Record<$Enums.CategoriasAreasConhecimento, string[]>;

const areasConhecimento: AreasConhecimento = {
  CIENCIAS_EXATAS: [
    "Matemática",
    "Probabilidade e Estatística",
    "Ciência da Computação",
    "Astronomia",
    "Física",
    "Química",
    "Geociências",
    "Oceanografia",
  ],
  CIENCIAS_HUMANAS: [
    "Filosofia",
    "Sociologia",
    "Antropologia",
    "Arqueologia",
    "História",
    "Geografia",
    "Psicologia",
    "Educação",
    "Ciência Política",
    "Teologia",
  ],
  CIENCIAS_BIOLOGICAS: [
    "Biologia Geral",
    "Genética",
    "Botânica",
    "Zoologia",
    "Ecologia",
    "Morfologia",
    "Fisiologia",
    "Bioquímica",
    "Biofísica",
    "Farmacologia",
    "Imunologia",
    "Microbiologia",
    "Parasitologia",
    "Biotecnologia",
  ],
  ENGENHARIAS: [
    "Engenharia Civil",
    "Engenharia de Minas",
    "Engenharia de Materiais e Metalúrgica",
    "Engenharia Elétrica",
    "Engenharia Mecânica",
    "Engenharia Química",
    "Engenharia Sanitária",
    "Engenharia de Produção",
    "Engenharia Nuclear",
    "Engenharia de Transportes",
    "Engenharia Naval e Oceânica",
    "Engenharia Aeroespacial",
    "Engenharia Biomédica",
    "Engenharia de Software",
    "Engenharia de Controle e Automação",
    "Engenharia Ambiental",
    "Engenharia de Alimentos",
    "Engenharia Florestal",
    "Engenharia Agrícola",
    "Engenharia de Pesca",
    "Engenharia Cartográfica",
    "Engenharia Textil",
    "Engenharia de Petróleo",
    "Engenharia de Telecomunicações",
  ],
  SAUDE: [
    "Medicina",
    "Odontologia",
    "Farmácia",
    "Enfermagem",
    "Nutrição",
    "Saúde Coletiva",
    "Fonoaudiologia",
    "Fisioterapia e Terapia Ocupacional",
    "Educação Física",
    "Medicina Veterinária",
    "Psicologia",
    "Biomedicina",
    "Radiologia",
    "Terapia Ocupacional",
  ],
  CIENCIAS_AGRARIAS: [
    "Agronomia",
    "Recursos Florestais e Engenharia Florestal",
    "Engenharia Agrícola",
    "Zootecnia",
    "Medicina Veterinária",
    "Recursos Pesqueiros e Engenharia de Pesca",
    "Ciência e Tecnologia de Alimentos",
  ],
  CIENCIAS_SOCIAIS: [
    "Direito",
    "Administração",
    "Economia",
    "Arquitetura e Urbanismo",
    "Planejamento Urbano e Regional",
    "Demografia",
    "Ciência da Informação",
    "Museologia",
    "Comunicação",
    "Serviço Social",
    "Economia Doméstica",
    "Desenho Industrial",
    "Turismo",
    "Relações Internacionais",
    "Contabilidade",
    "Marketing",
    "Recursos Humanos",
    "Logística",
    "Comércio Exterior",
    "Gestão Pública",
    "Gestão Ambiental",
    "Secretariado Executivo",
  ],
  ARTES: [
    "Artes",
    "Música",
    "Teatro",
    "Dança",
    "Cinema",
    "Fotografia",
    "Design Gráfico",
    "Design de Moda",
    "Artes Visuais",
  ],
  LINGUISTICA: [
    "Linguística",
    "Letras",
    "Literatura",
    "Tradução",
    "Jornalismo",
    "Publicidade e Propaganda",
    "Rádio e TV",
    "Relações Públicas",
  ],
  TECNOLOGIA: [
    "Nanotecnologia",
    "Robótica",
    "Inteligência Artificial",
    "Análise de Dados",
    "Segurança da Informação",
    "Banco de Dados",
    "Redes de Computadores",
    "Sistemas de Informação",
    "Jogos Digitais",
    "Design de Interação",
    "UX/UI Design",
    "E-commerce",
    "Empreendedorismo",
    "Inovação",
    "Sustentabilidade",
    "Energia Renovável",
    "Automação Industrial",
    "Internet das Coisas (IoT)",
    "Blockchain",
    "Realidade Virtual",
    "Realidade Aumentada",
  ],
  OUTROS: [
    "Multidisciplinar",
    "Ensino",
    "Materiais",
    "Biotecnologia",
    "Ciências Ambientais",
    "Bioética",
    "Divulgação Científica",
    "Política Científica e Tecnológica",
    "Desenvolvimento Sustentável",
    "Estudos de Gênero",
    "Estudos Culturais",
    "Gerontologia",
    "Neurociências",
    "Bioengenharia",
  ],
};

// Dados dos professores para seed
const professores = [
  {
    nome_completo: "Dr. Carlos Silva",
    email: "carlos.silva@universidade.edu.br",
    area_atuacao: "Ciência da Computação",
  },
  {
    nome_completo: "Dra. Maria Santos",
    email: "maria.santos@universidade.edu.br", 
    area_atuacao: "Engenharia de Software",
  },
  {
    nome_completo: "Dr. João Oliveira",
    email: "joao.oliveira@universidade.edu.br",
    area_atuacao: "Inteligência Artificial",
  },
  {
    nome_completo: "Dra. Ana Costa",
    email: "ana.costa@universidade.edu.br",
    area_atuacao: "Banco de Dados",
  },
  {
    nome_completo: "Dr. Pedro Ferreira",
    email: "pedro.ferreira@universidade.edu.br",
    area_atuacao: "Redes de Computadores",
  },
  {
    nome_completo: "Dra. Lucia Pereira",
    email: "lucia.pereira@universidade.edu.br",
    area_atuacao: "Segurança da Informação",
  },
  {
    nome_completo: "Dr. Roberto Lima",
    email: "roberto.lima@universidade.edu.br",
    area_atuacao: "Sistemas Distribuídos",
  },
  {
    nome_completo: "Dra. Fernanda Rocha",
    email: "fernanda.rocha@universidade.edu.br",
    area_atuacao: "Interface Humano-Computador",
  },
  {
    nome_completo: "Dr. Marcos Almeida",
    email: "marcos.almeida@universidade.edu.br",
    area_atuacao: "Algoritmos e Estruturas de Dados",
  },
  {
    nome_completo: "Dra. Patricia Gomes",
    email: "patricia.gomes@universidade.edu.br",
    area_atuacao: "Computação Gráfica",
  },
];

async function seedProfessores() {
  console.log("🎓 Iniciando seed dos professores...");

  const existingProfessores = await prisma.professor.count();

  if (existingProfessores > 0) {
    console.log(`⚠️  Já existem ${existingProfessores} professores cadastrados.`);
    console.log("🔄 Adicionando apenas os novos professores...");
  }

  let adicionados = 0;
  let ignorados = 0;

  for (const professorData of professores) {
    try {
      // Verificar se o usuário já existe
      const existingUsuario = await prisma.usuario.findUnique({
        where: { email: professorData.email },
      });

      if (existingUsuario) {
        ignorados++;
        console.log(`⚪ Professor "${professorData.nome_completo}" já existe, ignorando.`);
        continue;
      }

      // Criar senha padrão hash
      const senhaHash = await bcrypt.hash("123456", 10);

      // Criar usuário e professor
      await prisma.usuario.create({
        data: {
          nome_completo: professorData.nome_completo,
          email: professorData.email,
          senha: senhaHash,
          tipo: "PROFESSOR",
          Professor: {
            create: {
              area_atuacao: professorData.area_atuacao,
              disponibilidade: true,
            },
          },
        },
      });

      adicionados++;
      console.log(`✅ Professor "${professorData.nome_completo}" adicionado com sucesso.`);
    } catch (error) {
      console.error(`❌ Erro ao adicionar professor "${professorData.nome_completo}":`, error);
    }
  }

  console.log("\n📊 Resumo dos professores:");
  console.log(`✅ Professores adicionados: ${adicionados}`);
  console.log(`⚪ Professores já existentes: ${ignorados}`);
  console.log(`👨‍🏫 Total de professores: ${adicionados + existingProfessores}`);
}

async function main() {
  console.log("Rodando seed...");

  // Criar admin se não existir
  const existingAdmin = await prisma.usuario.findUnique({
    where: { email: "Gabrielcfonline0900@gmail.com" },
  });

  if (!existingAdmin) {
    await prisma.usuario.create({
      data: {
        nome_completo: "Admin do Sistema",
        email: "Gabrielcfonline0900@gmail.com",
        senha: "10668889730",
        tipo: "ADMIN",
      },
    });
    console.log("✅ Admin criado com sucesso.");
  } else {
    console.log("⚪ Admin já existe, ignorando.");
  }

  console.log("\n" + "=".repeat(50) + "\n");

  // Seed dos professores
  await seedProfessores();

  console.log("\n" + "=".repeat(50) + "\n");

  console.log("🌱 Iniciando seed das áreas de conhecimento...");

  // Verificar se já existem áreas cadastradas
  const existingAreas = await prisma.areaConhecimento.count();

  if (existingAreas > 0) {
    console.log(`⚠️  Já existem ${existingAreas} áreas cadastradas.`);
    console.log("🔄 Adicionando apenas as novas áreas...");
  }

  let adicionadas = 0;
  let ignoradas = 0;

  for (const [categoria, areas] of Object.entries(areasConhecimento)) {
    for (const nome of areas) {
      try {
        await prisma.areaConhecimento.upsert({
          where: { nome },
          update: {},
          create: {
            categoria: categoria as $Enums.CategoriasAreasConhecimento,
            nome,
          },
        });
        adicionadas++;
        console.log(`✅ Área "${nome}" adicionada com sucesso.`);
      } catch (error) {
        if (
          error instanceof PrismaClientKnownRequestError &&
          error.code === "P2002"
        ) {
          // Erro de unicidade, área já existe
          ignoradas++;
          console.log(`⚪ Área "${nome}" já existe, ignorando.`);
        } else {
          console.error(`❌ Erro ao adicionar a área "${nome}":`, error);
        }
      }
    }
  }

  console.log("\n📊 Resumo:");
  console.log(`✅ Áreas adicionadas: ${adicionadas}`);
  console.log(`⚪ Áreas já existentes: ${ignoradas}`);
  console.log(`📚 Total de áreas: ${adicionadas + existingAreas}`);
  console.log("\n🎉 Seed concluído com sucesso!");
}

main()
  .catch((e) => {
    console.error("❌ Erro no seed:", e);
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

console.log("Seed concluído com sucesso.");
