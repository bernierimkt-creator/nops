import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Check, Star, Clock, Zap } from "lucide-react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hora em segundos
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 3600);
    }, 1000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const testimonials = [
    {
      name: "Carlos M.",
      role: "Vendedor de Cursos",
      text: "Comecei a usar as 3 frases e meus leads começaram a responder em minutos. Triplicou minha taxa de conversão."
    },
    {
      name: "Juliana P.",
      role: "Consultora de Negócios",
      text: "Não acreditava que 3 frases simples fariam tanta diferença. Agora tenho conversas ativas todos os dias."
    },
    {
      name: "Roberto S.",
      role: "Empreendedor Digital",
      text: "Esse é o tipo de coisa que você procura por anos. Simples, direto e funciona. Recomendo demais."
    },
    {
      name: "Amanda L.",
      role: "Gerente de Vendas",
      text: "Minha equipe toda está usando. O ROI foi imediato. Melhor investimento que fiz esse mês."
    },
    {
      name: "Felipe T.",
      role: "Coach de Vendas",
      text: "Passei a recomendar para meus clientes. Todos têm o mesmo resultado: leads respondendo rápido."
    },
    {
      name: "Marina D.",
      role: "Proprietária de Agência",
      text: "Simples demais para ser verdade, mas funciona. Meus clientes estão pedindo para usar também."
    }
  ];

  const faqs = [
    {
      question: "Como funciona exatamente?",
      answer: "Você recebe 3 frases prontas, testadas e otimizadas. Copia, cola no WhatsApp e vê o lead responder em até 60 segundos. Sem teoria, sem complicação."
    },
    {
      question: "Funciona para qualquer nicho?",
      answer: "Sim. A linguagem é universal e adaptável. Vendedores, consultores, coaches, agências... todos têm o mesmo resultado."
    },
    {
      question: "E se não funcionar?",
      answer: "Garantia de 15 dias. Sem perguntas, sem burocracia. Se não gostar, devolvemos 100% do seu dinheiro."
    },
    {
      question: "Qual é a diferença entre os dois planos?",
      answer: "O plano básico tem as 3 frases. O plano completo adiciona template de follow-up, mensagem de fechamento e lista de gatilhos anti-vácuo."
    },
    {
      question: "Preciso estudar copywriting?",
      answer: "Não. Tudo está pronto para usar. Você só copia e cola. Sem estudar, sem aprender, sem enrolação."
    },
    {
      question: "Quanto tempo levo para ver resultados?",
      answer: "Alguns veem no primeiro dia. A maioria vê em 3 dias. Se não ver em 15 dias, a gente devolve seu dinheiro."
    },
    {
      question: "Posso usar em múltiplos números?",
      answer: "Sim. Você compra uma vez e pode usar em quantos números quiser. Sem limite."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-cyan-400 bg-clip-text text-transparent">
            ⚡ Copy Instantânea para Whatsapp
          </div>
          <Button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-lg px-6">
            Comprar Agora
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <img src="/hero-icon.png" alt="Hero Icon" className="w-32 h-32 sm:w-40 sm:h-40 animate-pulse" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight">
            Faça qualquer lead responder em até <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 bg-clip-text text-transparent animate-pulse">60 segundos</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Usando <strong>3 frases prontas</strong> que você copia, cola e vê o WhatsApp acender.
          </p>

          <p className="text-base sm:text-lg text-cyan-300 mb-12 font-semibold">
            Acesso imediato • Sem teoria • Sem enrolação
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg py-6 px-8 rounded-lg shadow-lg shadow-orange-500/50 hover:shadow-orange-500/75 transition-all">
              🔥 Comprar por R$ 1,99
            </Button>
            <Button variant="outline" className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 font-bold text-lg py-6 px-8 rounded-lg">
              Pacote completo - R$ 7,99
            </Button>
          </div>


        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950/50 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
                Você conhece esse sentimento?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Manda mensagem para o lead, ele visualiza... e some. Deixa você ali, esperando, sem saber o que escrever para trazer ele de volta.
              </p>
              <p className="text-xl font-bold text-orange-400 mb-6 italic">
                "Eu só queria saber o que escrever para não perder cliente."
              </p>
              <p className="text-gray-400 text-lg">
                Sim, eu sei como é ter mensagem visualizada e ignorada. Aquela sensação de vazio. De impotência. De estar fazendo algo errado.
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/problem-section.png" alt="Problem" className="w-full max-w-md rounded-lg shadow-2xl shadow-orange-500/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <img src="/solution-section.png" alt="Solution" className="w-full max-w-md rounded-lg shadow-2xl shadow-cyan-400/20" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
                Agora imagine o oposto
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Você manda a mensagem certa. Em menos de 1 minuto, o celular vibra. O lead respondeu.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Conversas ativas. Pipeline fluindo. Leads respondendo imediatamente. Sem esperar. Sem dúvida.
              </p>
              <p className="text-xl font-bold text-cyan-300">
                Isso é possível. E é mais simples do que você pensa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-blue-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-center mb-12 leading-tight">
            Apresentamos: <span className="bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">3 Frases Instantâneas</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="flex justify-center">
              <img src="/offer-mockup.png" alt="Offer" className="w-full max-w-sm rounded-lg shadow-2xl shadow-cyan-400/30" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Como funciona em 3 passos:</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center font-bold text-lg">1</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Acesso Imediato</h4>
                    <p className="text-gray-400">Você recebe as 3 frases prontas na hora. Sem esperar, sem delay.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-lg text-slate-950">2</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Copie e Cole</h4>
                    <p className="text-gray-400">Abra o WhatsApp, copie a frase e mande. Leva 10 segundos.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center font-bold text-lg">3</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Veja o Resultado</h4>
                    <p className="text-gray-400">Em até 60 segundos, o lead responde. Conversação ativa. Venda fluindo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secret Sauce Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-500/10 to-cyan-400/10 border border-orange-500/30 rounded-2xl p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-6 flex items-center gap-3">
              <Zap className="w-8 h-8 text-orange-400" /> Por que isso funciona?
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Isso <strong>não é mais um script</strong>. Não é teoria de copywriting. Não é um curso de 10 horas.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              É o único material pensado especificamente para gerar resposta em 60 segundos, sem persuasão complexa, sem você precisar estudar nada.
            </p>
            <p className="text-lg text-cyan-300 font-semibold">
              Testado com centenas de leads. Resultado comprovado. Garantia de 15 dias.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-blue-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-center mb-16 leading-tight">
            O que você ganha
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '💬', title: '3 Frases Prontas', desc: 'Mensagens impossíveis de ignorar', result: 'Leads respondem rápido' },
              { icon: '🎯', title: 'Estrutura Anti-Vácuo', desc: 'Nunca mais "sumiu"', result: 'Mais conversas ativas' },
              { icon: '🌍', title: 'Linguagem Universal', desc: 'Serve para qualquer nicho', result: 'Facilidade total' },
              { icon: '⚡', title: 'Resposta em 60 Segundos', desc: 'Sem esperar, sem demora', result: 'Ação imediata' },
              { icon: '🔓', title: 'Sem Copywriting', desc: 'Nada de teoria complexa', result: 'Qualquer um consegue usar' },
              { icon: '✅', title: 'Garantia de 15 Dias', desc: 'Sem risco, sem burocracia', result: 'Seu dinheiro de volta' }
            ].map((benefit, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-900 to-slate-800 border border-orange-500/20 rounded-xl p-6 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/10">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{benefit.desc}</p>
                <p className="text-orange-400 font-semibold text-sm">→ {benefit.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-center mb-16 leading-tight">
            O que as pessoas estão dizendo
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                <p className="font-bold text-cyan-300">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-blue-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-center mb-16 leading-tight">
            Escolha seu plano
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Plan 1 */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-orange-500/30 rounded-2xl p-8 hover:shadow-lg hover:shadow-orange-500/20 transition-all">
              <h3 className="text-2xl font-bold mb-2">Plano Básico</h3>
              <p className="text-gray-400 mb-6">Tudo que você precisa para começar</p>
              <div className="mb-8">
                <span className="text-5xl font-black text-orange-400">R$ 1,99</span>
                <p className="text-gray-400 text-sm mt-2">Acesso vitalício</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  '✓ 3 Frases Instantâneas',
                  '✓ Acesso imediato',
                  '✓ Uso ilimitado',
                  '✓ Garantia de 15 dias'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-orange-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button onClick={() => window.location.href = 'https://www.ggcheckout.com/checkout/v2/VC7orS6gWVhQlSmgPjkY'} className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 rounded-lg">
                Comprar Agora
              </Button>
            </div>

            {/* Plan 2 */}
            <div className="bg-gradient-to-br from-cyan-900/30 to-orange-900/20 border-2 border-gradient-to-r from-cyan-400 to-orange-500 rounded-2xl p-8 shadow-lg shadow-cyan-400/20 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full font-bold text-sm">
                🔥 MAIS POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2 mt-4">Plano Completo</h3>
              <p className="text-gray-300 mb-6">Tudo + Bônus exclusivos</p>
              <div className="mb-8">
                <span className="text-5xl font-black text-cyan-300">R$ 7,99</span>
                <p className="text-gray-400 text-sm mt-2">Acesso vitalício</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  '✓ 3 Frases Instantâneas',
                  '✓ Template de Follow-up',
                  '✓ Mensagem Final de Fechamento',
                  '✓ Lista de Gatilhos Anti-Vácuo',
                  '✓ Acesso imediato',
                  '✓ Uso ilimitado',
                  '✓ Garantia de 15 dias'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button onClick={() => window.location.href = 'https://www.ggcheckout.com/checkout/v2/41fCputvnbMYc8ZeuDo2'} className="w-full bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-slate-950 font-bold py-3 rounded-lg">
                Comprar Agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-6 flex items-center justify-center gap-3">
            <Clock className="w-8 h-8 text-orange-400" /> Garantia de 15 Dias
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Não gostou? Sem perguntas. Sem burocracia. Seu dinheiro de volta.
          </p>
          <p className="text-gray-400">
            Queremos que você tenha 100% de certeza. Se as 3 frases não gerarem resposta em 15 dias, devolvemos cada centavo.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-blue-950/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-center mb-16 leading-tight">
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-gradient-to-br from-slate-900 to-slate-800 border border-orange-500/20 rounded-lg p-6 cursor-pointer hover:border-orange-500/50 transition-all group">
                <summary className="font-bold text-lg flex items-center justify-between">
                  {faq.question}
                  <span className="text-orange-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-400 mt-4 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-8">Quem está por trás disso?</h2>
          <div className="bg-gradient-to-br from-orange-500/10 to-cyan-400/10 border border-orange-500/30 rounded-2xl p-8 sm:p-12">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Marco Bernieri. Especialista em vendas no WhatsApp há mais de 5 anos. Testei centenas de abordagens, scripts e estratégias.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Essas 3 frases são o resultado de anos de teste, refinamento e validação com milhares de leads reais.
            </p>
            <p className="text-xl font-bold text-cyan-300">
              Funciona. E estou aqui para provar.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-blue-950/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-8 leading-tight">
            Pronto para começar?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Escolha seu plano. Acesso imediato. Resultados em até 60 segundos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg py-6 px-8 rounded-lg shadow-lg shadow-orange-500/50 hover:shadow-orange-500/75 transition-all">
              🚀 Começar Agora - R$ 1,99
            </Button>
            <Button variant="outline" className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 font-bold text-lg py-6 px-8 rounded-lg">
              Ver Plano Completo - R$ 7,99
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-orange-500/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Copy Instantânea</h4>
              <p className="text-gray-400 text-sm">Respostas instantâneas. Vendas fluindo. Resultados reais.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-orange-400 transition">Termos de Serviço</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">Política de Privacidade</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Nossa Missão</h4>
              <p className="text-gray-400 text-sm">Tornar vendas no WhatsApp simples, rápida e acessível para todos.</p>
            </div>
          </div>
          <div className="border-t border-orange-500/20 pt-8 text-center text-gray-500 text-sm">
            <p>© 2025 Copy Instantânea. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
