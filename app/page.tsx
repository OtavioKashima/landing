"use client"

import React from 'react';
// Importando ícones da biblioteca lucide-react
import { 
  Leaf, 
  Lightbulb, 
  Eye, 
  DollarSign, 
  Linkedin, 
  Sun,
  Users 
} from 'lucide-react';

/**
 * Componente de Footer (separado para clareza)
 * Modernizado com a paleta 'slate' para um visual mais "tech" e limpo.
 */
function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} EcoInova Ltda. Todos os direitos reservados.</p>
        <p className="text-sm mt-2 opacity-75">CNPJ: 12.345.678/0001-99 | São Paulo - SP, Brasil</p>
      </div>
    </footer>
  );
}

/**
 * Componente de Página "Quem Somos" (Estilo Modernizado)
 * Foco em mais espaçamento, cores vibrantes (lime/emerald) e layouts dinâmicos.
 */
function QuemSomosPage() {
  
  // Dados simulados da equipe
  const teamMembers = [
    {
      name: 'Ana Silva',
      role: 'CEO & Co-fundadora',
      bio: 'Engenheira ambiental com paixão por energias renováveis.',
      imageUrl: 'https://placehold.co/200x200/a3e635/333?text=Ana',
      linkedinUrl: '#',
    },
    {
      name: 'Bruno Costa',
      role: 'CTO & Co-fundador',
      bio: 'Especialista em tecnologia solar e otimização de sistemas.',
      imageUrl: 'https://placehold.co/200x200/a3e635/333?text=Bruno',
      linkedinUrl: '#',
    },
    {
      name: 'Carla Moreira',
      role: 'COO & Co-fundadora',
      bio: 'Gerente de projetos focada em operações e experiência do cliente.',
      imageUrl: 'https://placehold.co/200x200/a3e635/333?text=Carla',
      linkedinUrl: '#',
    },
  ];

  // Dados dos valores (com cores modernizadas para os fundos dos ícones)
  const values = [
    {
      icon: Leaf,
      title: 'Sustentabilidade',
      description: 'Nosso compromisso central é com o planeta e com as futuras gerações.',
      iconBg: 'bg-lime-100',
      iconColor: 'text-lime-700',
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Buscamos constantemente as melhores e mais novas tecnologias.',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
    },
    {
      icon: Eye,
      title: 'Transparência',
      description: 'Processos claros e honestos, do orçamento à instalação final.',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-700',
    },
    {
      icon: DollarSign,
      title: 'Custo-benefício',
      description: 'Energia limpa não precisa ser cara. Oferecemos o melhor retorno.',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-700',
    },
  ];

  return (
    // Fonte padrão 'Inter' (font-sans no Tailwind)
    <div className="bg-white min-h-screen font-sans text-slate-800">
      
      {/* 1. Seção de Manifesto (Hero Otimista) */}
      <header className="bg-lime-50">
        <div className="container mx-auto px-6 text-center max-w-4xl py-24 md:py-40">
          <div className="flex justify-center mb-6">
            <Sun className="h-16 w-16 text-yellow-500" />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
            Democratizar o acesso à energia limpa no Brasil.
          </h1>
          <p className="text-xl md:text-2xl text-slate-600">
            Nossa visão é ser a empresa líder em soluções de energia solar residencial no país até 2030.
          </p>
        </div>
      </header>

      <main>
        {/* 2. Seção Nossa História (Layout de 2 colunas) */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6 max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
            {/* Coluna da Imagem */}
            <div>
              <img
                src="https://placehold.co/600x400/a3e635/1f2937?text=Instala%C3%A7%C3%A3o+Solar+Residencial"
                alt="Instalação de painel solar em uma residência"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
                // ⬇️ CORREÇÃO 1 AQUI ⬇️
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/d1d5db/333?text=Imagem'; }}
              />
            </div>
            
            {/* Coluna do Texto */}
            <div className="max-w-xl">
              <p className="text-lime-600 font-semibold uppercase tracking-wider mb-3">Como Tudo Começou</p>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Nossa História</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Fundada em 2023, a EcoInova nasceu do sonho de um grupo de engenheiros apaixonados por sustentabilidade. Vimos a necessidade de tornar a energia solar uma realidade acessível para todas as famílias e pequenos negócios brasileiros.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mt-4">
                Começamos com um pequeno escritório e uma grande missão, e hoje, nos orgulhamos de ter ajudado centenas de lares a economizar na conta de luz e a contribuir para um planeta mais verde.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Seção de Valores (Cards modernizados) */}
        <section className="py-20 md:py-32 bg-slate-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Nossos Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div 
                  key={value.title} 
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className={`h-16 w-16 rounded-full flex items-center justify-center mb-6 ${value.iconBg}`}>
                    <value.icon className={`h-8 w-8 ${value.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Seção A Equipe (Cards limpos) */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Nossos Fundadores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-slate-50 p-8 rounded-2xl text-center shadow-lg">
                  <img
                    src={member.imageUrl}
                    alt={`Foto de ${member.name}`}
                    className="rounded-full w-40 h-40 object-cover mx-auto mb-6 shadow-md"
                    // ⬇️ CORREÇÃO 2 AQUI ⬇️
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/200x200/d1d5db/333?text=Foto'; }}
                  />
                  <h3 className="text-2xl font-semibold text-slate-900">{member.name}</h3>
                  <p className="text-lime-600 font-medium mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm mb-5">{member.bio}</p>
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-blue-600 transition-colors"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="h-6 w-6 mx-auto" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Seção de Chamada para Ação (CTA com gradiente) */}
        <section className="bg-gradient-to-r from-lime-600 to-emerald-700 text-white">
          <div className="container mx-auto px-6 py-24 text-center flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-2/3 md:text-left mb-6 md:mb-0">
              <h2 className="text-4xl font-bold mb-4">Pronto para gerar sua própria energia?</h2>
              <p className="text-xl opacity-90">
                Veja como a EcoInova pode iluminar seu futuro e reduzir sua conta de luz.
              </p>
            </div>
            <div className="md:w-1/3 md:text-right">
              <a
                href="#orcamento" // Link para a página de orçamento ou formulário
                className="bg-yellow-400 text-emerald-900 font-bold py-4 px-10 rounded-lg text-lg hover:bg-yellow-300 transition-all duration-300 shadow-xl transform hover:scale-105 inline-block"
              >
                Faça um Orçamento
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 6. Footer importado */}
      <Footer />
    </div>
  );
}

/**
 * Componente principal da Aplicação
 * Este é o ponto de entrada que renderiza a página.
 */
export default function App() {
  return (
    <QuemSomosPage />
  );
}