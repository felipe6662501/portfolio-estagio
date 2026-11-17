import React, { useEffect } from 'react';
import { 
  BookOpen, 
  Code, 
  FileText, 
  Video, 
  User, 
  Download, 
  Image as ImageIcon,
  Layers,
  Settings,
  Target
} from 'lucide-react';

export default function Portfolio() {
  // Habilita a rolagem suave na página
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-blue-200">
      
      {/* Navegação Fixa */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="font-bold text-xl text-blue-700 tracking-tight">
              Portfólio de Estágio
            </div>
            <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
              <a href="#inicio" className="hover:text-blue-600 transition-colors">Início</a>
              <a href="#sobre" className="hover:text-blue-600 transition-colors">Sobre</a>
              <a href="#casos-uso" className="hover:text-blue-600 transition-colors">Casos de Uso</a>
              <a href="#documentacao" className="hover:text-blue-600 transition-colors">Documentação</a>
              <a href="#midia" className="hover:text-blue-600 transition-colors">Telas/Vídeos</a>
            </nav>
            {/* Mobile menu button (visual only for placeholder) */}
            <div className="md:hidden">
              <button className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 1. Página Inicial (Hero Section) */}
      <section id="inicio" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-block p-3 bg-blue-100 rounded-full mb-6">
            <Target className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Resultagro APP
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-700 font-medium mb-6">
            [Objetivo do Sistema: Ex: Sistema de gestão integrada para pequenos produtores rurais]
          </h2>
          <p className="max-w-2xl text-lg text-gray-600 leading-relaxed mb-10">
            [Breve descrição do projeto: Aqui você descreverá de forma sucinta o que é o seu projeto, 
            o contexto em que ele se insere e qual é a principal entrega realizada durante o período de estágio.]
          </p>
          <a href="#sobre" className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all">
            Conhecer o Projeto
          </a>
        </div>
      </section>

      {/* 2. Sobre o Projeto */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Sobre o Projeto</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Problema */}
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">O Problema</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                [Problema que o sistema busca resolver: Descreva as dores do usuário ou as falhas nos processos atuais que motivaram o desenvolvimento deste software.]
              </p>
            </div>

            {/* Tecnologias */}
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Tecnologias</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                [Liste as tecnologias utilizadas no front-end, back-end, banco de dados, etc.]
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">React</span>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-semibold">Tailwind CSS</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">JavaScript</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">Node.js</span>
              </div>
            </div>

            {/* Arquitetura */}
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Arquitetura</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                [Arquitetura ou descrição resumida da solução: Explique como as partes do sistema se comunicam, padrões de projeto utilizados (ex: MVC, Microsserviços, SPA) e infraestrutura.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Casos de Uso e Cronograma */}
      <section id="casos-uso" className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Casos de Uso e Cronograma</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Diagrama Geral */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-4 text-gray-700 text-center">Diagrama Geral de Casos de Uso</h3>
            <div className="w-full max-w-4xl mx-auto h-64 md:h-96 bg-gray-200 rounded-2xl flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-300">
              <ImageIcon className="w-12 h-12 mb-2" />
              <span>[Inserir Imagem do diagrama de caso de uso geral]</span>
            </div>
          </div>

          {/* Grid de Casos de Uso Específicos */}
          <h3 className="text-xl font-semibold mb-6 text-gray-700">Principais Casos de Uso (Telas)</h3>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Caso de uso 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="h-48 bg-gray-200 flex flex-col items-center justify-center text-gray-400">
                <ImageIcon className="w-8 h-8 mb-2" />
                <span className="text-sm">[Imagem da tela]</span>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">UC01: [Nome do caso de uso]</h4>
                <p className="text-gray-600 text-sm">
                  [Breve descrição: Explique o que o ator faz nesta tela, quais as regras de negócio aplicadas e o resultado esperado da ação.]
                </p>
              </div>
            </div>

            {/* Caso de uso 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="h-48 bg-gray-200 flex flex-col items-center justify-center text-gray-400">
                <ImageIcon className="w-8 h-8 mb-2" />
                <span className="text-sm">[Imagem da tela]</span>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">UC02: [Nome do caso de uso]</h4>
                <p className="text-gray-600 text-sm">
                  [Breve descrição: Explique o que o ator faz nesta tela, quais as regras de negócio aplicadas e o resultado esperado da ação.]
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Documentação */}
      <section id="documentacao" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Documentação do Sistema</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Links para todos os diagramas desenvolvidos durante o ciclo de engenharia de software do projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <button className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all group">
              <Settings className="w-10 h-10 text-gray-400 group-hover:text-blue-600 mb-4 transition-colors" />
              <span className="font-semibold text-gray-800 group-hover:text-blue-700">Diagrama de Classe</span>
              <span className="text-xs text-gray-500 mt-2 text-center">Visualizar PDF/Imagem</span>
            </button>
            <button className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all group">
              <Layers className="w-10 h-10 text-gray-400 group-hover:text-blue-600 mb-4 transition-colors" />
              <span className="font-semibold text-gray-800 group-hover:text-blue-700">Diagrama de Implantação</span>
              <span className="text-xs text-gray-500 mt-2 text-center">Visualizar PDF/Imagem</span>
            </button>
            <button className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all group">
              <FileText className="w-10 h-10 text-gray-400 group-hover:text-blue-600 mb-4 transition-colors" />
              <span className="font-semibold text-gray-800 group-hover:text-blue-700">Diagrama de Sequência</span>
              <span className="text-xs text-gray-500 mt-2 text-center">Visualizar PDF/Imagem</span>
            </button>
            <button className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all group">
              <Target className="w-10 h-10 text-gray-400 group-hover:text-blue-600 mb-4 transition-colors" />
              <span className="font-semibold text-gray-800 group-hover:text-blue-700">Diagrama de Estados</span>
              <span className="text-xs text-gray-500 mt-2 text-center">Visualizar PDF/Imagem</span>
            </button>
          </div>
        </div>
      </section>

      {/* 5. Telas/Vídeos & 6. Relatório */}
      <section id="midia" className="py-20 bg-gray-900 text-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Demonstração e Entrega</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* 5. Vídeo */}
          <div className="bg-gray-800 rounded-2xl p-2 mb-16 shadow-2xl">
            <div className="aspect-video bg-gray-950 rounded-xl flex flex-col items-center justify-center text-gray-500 border border-gray-700 relative group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500 transition-all shadow-lg">
                   <Video className="w-8 h-8 text-white ml-1" />
                 </div>
              </div>
              <p className="mt-32 text-sm z-10">[Vídeo demonstrando o sistema em funcionamento, com duração máxima de 5 minutos]</p>
            </div>
          </div>

          {/* 6. Relatório de Estágio */}
          <div className="flex flex-col items-center justify-center bg-gray-800/50 p-10 rounded-2xl border border-gray-700 backdrop-blur-sm">
            <BookOpen className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Relatório de Estágio</h3>
            <p className="text-gray-400 text-center max-w-lg mb-8">
              Documento PDF atualizado contendo o relatório completo correspondente às atividades desenvolvidas até a presente data.
            </p>
            <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              <Download className="w-5 h-5" />
              <span>Baixar Relatório (PDF)</span>
            </button>
          </div>

        </div>
      </section>

      {/* 7. Identificação do Aluno (Rodapé) */}
      <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-8 rounded-2xl shadow-sm mb-12">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">Felipe Furlan da Silva</h4>
                <p className="text-blue-600 font-medium">Aluno / Estagiário</p>
              </div>
            </div>
            
            <div className="flex flex-col md:text-right space-y-2 text-gray-600 bg-white p-4 rounded-xl shadow-sm border border-gray-100 w-full md:w-auto">
              <div className="flex justify-between md:justify-end md:space-x-4">
                <span className="font-semibold text-gray-700">Matrícula:</span>
                <span>[Inserir Matrícula]</span>
              </div>
              <div className="flex justify-between md:justify-end md:space-x-4">
                <span className="font-semibold text-gray-700">Orientador:</span>
                <span>[Inserir Nome do Professor]</span>
              </div>
            </div>
          </div>
          
          <div className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Felipe Furlan da Silva. Todos os direitos reservados. <br/>
            Portfólio de Estágio - Engenharia/Ciência da Computação.
          </div>
        </div>
      </footer>

    </div>
  );
}