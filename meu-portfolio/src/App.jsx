import React, { useEffect } from 'react';
import { 
  BookOpen, 
  Code, 
  FileText, 
  Video, 
  User, 
  Layers, 
  Target, 
  Leaf, 
  Check, 
  ExternalLink, 
  MonitorPlay, 
  FolderOpen 
} from 'lucide-react';
import fotoPerfil from '/assets/foto_perfil.jpeg';

const LINK_PASTA_ESTADOS = "https://drive.google.com/drive/folders/1KPTScyxEYAf_h4qpm23ZSvwKZLwZ2WGi?usp=drive_link";
const LINK_PASTA_SEQUENCIA = "https://drive.google.com/drive/folders/15na6tngDHGJmwHUVSfO1VbaB42euEyoX?usp=drive_link";

export default function Portfolio() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const casosDeUso = [
    {
      id: "UC01",
      titulo: "Visualizar Informações de Mercado",
      badge: "MERCADO / COTAÇÕES",
      badgeColor: "bg-amber-100 text-amber-800",
      imagem: "assets/aba_mercado.png",
      descricao: "Tela inicial do aplicativo que centraliza as cotações de câmbio/índices (Dólar PTAX e Dólar Comercial) e os contratos futuros das bolsas agrícolas (Milho e Soja em Chicago - CBOT), exibindo último preço, máxima, mínima, fechamento e variação percentual em tempo real para auxiliar na tomada de decisão.",
      tags: ["Atualização Automática (Scraper)", "Cotações CBOT e PTAX", "Painel Gerencial"]
    },
    {
      id: "UC02",
      titulo: "Gerenciar e Moderar Propostas",
      badge: "COMPRA / VENDA",
      badgeColor: "bg-emerald-100 text-emerald-800",
      imagem: "assets/aba_propostas.png",
      descricao: "Permite aos usuários criar, editar, excluir e consultar ofertas de compra e venda de grãos (Soja, Milho, Trigo). Conta com busca dinâmica e filtros por tipo de grão, safra, localidade e modalidade de frete (CIF/FOB), além de permitir iniciar negociações com propostas de terceiros e moderação pelo perfil Administrador/Corretor.",
      tags: ["Propostas Pessoais e de Terceiros", "Filtros Dinâmicos (CIF/FOB)", "Moderação Admin"]
    },
    {
      id: "UC03",
      titulo: "Negociar via Chat e Gerenciar Negociação",
      badge: "COMUNICAÇÃO REALTIME",
      badgeColor: "bg-blue-100 text-blue-800",
      imagem: "assets/aba_chats.png",
      descricao: "Ambiente de mensageria integrada em tempo real para negociação direta entre comprador, vendedor e corretor. Organiza o histórico em abas (Ativas, Fechadas e Abandonadas), suporta confirmação de leitura, resposta a mensagens específicas e envio de propostas formais de fechamento de negócio (Aceita/Recusada).",
      tags: ["Supabase Realtime (WSS)", "Proposta de Fechamento", "Histórico de Acordos"]
    },
    {
      id: "UC04",
      titulo: "Gerenciar Usuários",
      badge: "ADMINISTRAÇÃO",
      badgeColor: "bg-purple-100 text-purple-800",
      imagem: "assets/aba_usuarios.png",
      descricao: "Funcionalidade administrativa restrita aos corretores e administradores da Resultagro para cadastrar novos clientes, editar dados, buscar por nome ou e-mail, filtrar por perfil de acesso (Administrador, Corretor, Produtor, Trade, Cerealista e Cooperativa) e ativar ou inativar contas no sistema.",
      tags: ["Controle de Acesso (RBAC)", "Gestão de Perfis", "Ativação/Inativação"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-emerald-200">
      
      {/* Navegação Fixa estilo Resultagro */}
      <header className="fixed top-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-emerald-800" fill="currentColor" />
              <span className="font-bold text-xl text-emerald-900 tracking-tight">RESULTAGRO</span>
              <span className="ml-2 text-sm text-gray-400 hidden sm:inline">| Portfólio de Estágio</span>
            </div>
            <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
              <a href="#inicio" className="hover:text-emerald-700 transition-colors">Início</a>
              <a href="#sobre" className="hover:text-emerald-700 transition-colors">Sobre</a>
              <a href="#casos-uso" className="hover:text-emerald-700 transition-colors">Casos de Uso</a>
              <a href="#documentacao" className="hover:text-emerald-700 transition-colors">Documentação</a>
              <a href="#relatorio" className="hover:text-emerald-700 transition-colors">Relatório</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <div className="pt-24 pb-12">
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* 1. Página Inicial */}
          <section id="inicio" className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 lg:p-12 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-emerald-50 rounded-full mb-6">
              <Target className="w-8 h-8 text-emerald-800" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Resultagro APP
            </h1>
            <h2 className="text-xl text-emerald-800 font-medium mb-6">
              Plataforma Web/Mobile para Originação, Cotações e Negociação de Grãos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              O Resultagro APP é uma solução multiplataforma desenvolvida para otimizar e digitalizar 
              o processo de corretagem agrícola da empresa Resultagro. O sistema conecta corretores parceiros, vendedores e compradores, 
              oferecendo cotações de mercado em tempo real e um fluxo estruturado para compartilhamento de ofertas e fechamento de negócios.
            </p>
          </section>

          {/* 2. Sobre o Projeto */}
          <section id="sobre" className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-50 rounded-lg">
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">O Problema</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                A corretagem de grãos frequentemente depende de processos manuais, planilhas dispersas e comunicação 
                sem histórico adequado. Isso gera lentidão, perda de histórico de negociações e 
                dificuldade no acompanhamento de ofertas.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Layers className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Arquitetura e Tecnologias</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                Arquitetura baseada em serviços em nuvem: front-end compilado para Web e Mobile em Flutter, 
                persistência relacional e mensageria via WebSockets no Supabase (PostgreSQL + Realtime), e 
                automação de captura de cotações via scraper Python em instância AWS EC2.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-md border border-gray-200">Flutter 3.44 / Dart 3.12</span>
                <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-md border border-green-200">Supabase (BaaS / Realtime)</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-md border border-blue-200">PostgreSQL</span>
                <span className="px-3 py-1 bg-orange-50 text-orange-700 text-xs font-semibold rounded-md border border-orange-200">AWS (EC2 / S3)</span>
                <span className="px-3 py-1 bg-yellow-50 text-yellow-700 text-xs font-semibold rounded-md border border-yellow-200">Python 3.12 (Web Scraping)</span>
              </div>
            </div>
          </section>

          {/* 3. Casos de Uso e Telas */}
          <section id="casos-uso" className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-emerald-50 rounded-lg">
                <MonitorPlay className="w-5 h-5 text-emerald-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Casos de Uso e Telas do Sistema</h3>
            </div>

            {/* Diagrama de Caso de Uso Geral */}
            <div className="mb-10 p-6 bg-gray-50 border border-gray-200 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-gray-800 text-base">Diagrama Geral de Casos de Uso</h4>
                <a 
                  href="assets/diagrama_uso.png" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-900"
                >
                  Abrir imagem em nova guia <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <a href="/assets/diagrama_uso.png" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg bg-white border border-gray-200">
                <img 
                  src="assets/diagrama_uso.png" 
                  alt="Diagrama de Caso de Uso do Resultagro APP" 
                  className="w-full max-h-[460px] object-contain mx-auto hover:scale-[1.01] transition-transform"
                />
              </a>
            </div>

            {/* Lista dos 4 Casos de Uso com Telas */}
            <div className="space-y-6">
              {casosDeUso.map((uc) => (
                <div 
                  key={uc.id} 
                  className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow bg-white flex flex-col lg:flex-row gap-6 items-center"
                >
                  <a 
                    href={uc.imagem} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full lg:w-5/12 bg-gray-50 rounded-lg overflow-hidden border border-gray-200 group relative block"
                    title="Clique para ampliar a tela em uma nova guia"
                  >
                    <img 
                      src={uc.imagem} 
                      alt={`${uc.id} - ${uc.titulo}`} 
                      className="w-full h-56 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </a>

                  <div className="w-full lg:w-7/12 flex flex-col justify-center">
                    <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                      <h4 className="text-lg font-bold text-gray-900">
                        {uc.id}: {uc.titulo}
                      </h4>
                      <span className={`px-2.5 py-1 text-xs font-bold rounded ${uc.badgeColor}`}>
                        {uc.badge}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {uc.descricao}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                      {uc.tags.map((tag) => (
                        <span key={tag} className="flex items-center gap-1 font-medium">
                          <Check className="w-3.5 h-3.5 text-emerald-600" /> {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Documentação e 5. Demonstração em Vídeo */}
          <section id="documentacao" className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Documentação e Diagramas</h3>
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  Acesse os artefatos de modelagem UML do sistema. Os diagramas individuais abrem em uma nova guia e os conjuntos de sequência e estados direcionam para os respectivos diretórios.
                </p>

                <div className="space-y-3">
                  {/* Diagrama de Classe - Abre imagem em nova guia */}
                  <a 
                    href="assets/diagrama_classe.png" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between p-3.5 border border-gray-200 rounded-lg hover:bg-emerald-50/50 hover:border-emerald-300 transition-colors group"
                  >
                    <span className="text-sm font-medium text-gray-700 group-hover:text-emerald-900">
                      Diagrama de Classe (Visualizar Imagem)
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-emerald-600" />
                  </a>

                  {/* Diagrama de Implantação - Abre imagem em nova guia */}
                  <a 
                    href="assets/diagrama_implantacao.png" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between p-3.5 border border-gray-200 rounded-lg hover:bg-emerald-50/50 hover:border-emerald-300 transition-colors group"
                  >
                    <span className="text-sm font-medium text-gray-700 group-hover:text-emerald-900">
                      Diagrama de Implantação (Visualizar Imagem)
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-emerald-600" />
                  </a>

                  {/* Pasta de Diagramas de Sequência */}
                  <a 
                    href={LINK_PASTA_SEQUENCIA} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between p-3.5 border border-gray-200 rounded-lg hover:bg-emerald-50/50 hover:border-emerald-300 transition-colors group"
                  >
                    <span className="text-sm font-medium text-gray-700 group-hover:text-emerald-900 flex items-center gap-2">
                      <FolderOpen className="w-4 h-4 text-emerald-700" />
                      Diagramas de Sequência (Acessar Pasta)
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-emerald-600" />
                  </a>

                  {/* Pasta de Diagramas de Estados */}
                  <a 
                    href={LINK_PASTA_ESTADOS} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between p-3.5 border border-gray-200 rounded-lg hover:bg-emerald-50/50 hover:border-emerald-300 transition-colors group"
                  >
                    <span className="text-sm font-medium text-gray-700 group-hover:text-emerald-900 flex items-center gap-2">
                      <FolderOpen className="w-4 h-4 text-emerald-700" />
                      Diagramas de Estados (Acessar Pasta)
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-emerald-600" />
                  </a>
                </div>
              </div>
            </div>

            {/* Player de Vídeo de Demonstração */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-50 rounded-lg">
                    <Video className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Vídeo de Demonstração</h3>
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  Demonstração prática do funcionamento do Resultagro APP (duração de 4m33s), apresentando os fluxos de cotação, propostas e negociação em tempo real.
                </p>
              </div>
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-inner aspect-video">
                <video 
                  src="assets/video_demons.mp4" 
                  controls 
                  preload="metadata"
                  className="w-full h-full object-contain"
                >
                  Seu navegador não suporta a reprodução de vídeo.
                </video>
              </div>
            </div>
          </section>

          {/* 6. Relatório de Estágio e 7. Identificação do Aluno */}
          <section id="relatorio" className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-900 rounded-xl shadow-sm p-8 text-white flex flex-col justify-center items-start relative overflow-hidden">
              <Leaf className="absolute -right-10 -bottom-10 w-48 h-48 text-emerald-800 opacity-50 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 rounded-full text-xs font-medium text-emerald-100 mb-4">
                  <FileText className="w-3.5 h-3.5" /> Documento Oficial
                </div>
                <h3 className="text-2xl font-bold mb-2">Relatório de Estágio</h3>
                <p className="text-emerald-100/90 text-sm mb-6 max-w-sm leading-relaxed">
                  Consulte o documento PDF atualizado contendo a introdução, proposta, justificativa, diagramas de caso de uso, workflow BPMN e especificações técnicas.
                </p>
                <a 
                  href="assets/ResultagroAPP_RelatorioDeEstagio.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-emerald-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-sm text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Abrir Relatório em Nova Guia (PDF)
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <User className="w-5 h-5 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Identificação do Aluno</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                {/* Coluna da Esquerda: Nome, Matrícula e Orientador */}
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">
                      Nome Completo
                    </p>
                    <p className="font-semibold text-gray-900 text-sm">
                      Felipe Furlan da Silva
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">
                      Matrícula
                    </p>
                    <p className="font-semibold text-gray-900 text-sm">
                      242041017
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">
                      Professor Orientador
                    </p>
                    <p className="font-semibold text-gray-900 text-sm">
                      Prof. João Brustolin
                    </p>
                  </div>
                </div>

                {/* Coluna da Direita: Instituição/Curso no topo e Foto embaixo */}
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">
                      Instituição / Curso
                    </p>
                    <p className="font-semibold text-gray-900 text-sm">
                      UniFil — Ciência da Computação
                    </p>
                  </div>

                  <div className="pt-1">
                    <img
                      src={fotoPerfil}
                      alt="Foto de perfil de Felipe Furlan da Silva"
                      className="w-32 h-32 rounded-xl object-cover border-2 border-emerald-800/20 shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
      
      <footer className="bg-white border-t border-gray-200 py-8 text-center text-sm text-gray-500">
        <p>© 2026 Felipe Furlan da Silva — Bacharelado em Ciência da Computação (UniFil).</p>
      </footer>
    </div>
  );
}