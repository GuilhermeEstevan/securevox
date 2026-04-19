import Image from "next/image";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Bot,
  Briefcase,
  CheckCircle2,
  Cloud,
  DollarSign,
  GraduationCap,
  Headphones,
  History,
  Home,
  Lock,
  MapPin,
  Maximize2,
  MessageSquare,
  Mic,
  Network,
  Phone,
  Plug,
  Plus,
  Rocket,
  Search,
  Server,
  Settings,
  Shield,
  Smile,
  Smartphone,
  Target,
  TrendingDown,
  UserX,
  Users,
  Zap,
} from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";

const WA =
  "https://wa.me/558181312506?text=Quero%20uma%20demonstra%C3%A7%C3%A3o%20da%20SecureVox";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-16">
        <Hero />
        <Challenges />
        <Solutions />
        <Portfolio />
        <Connectivity />
        <Security />
        <Savings />
        <UseCases />
        <Journey />
        <Implementation />
        <FinalCta />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      <div className="grid-pattern absolute inset-0 opacity-40" />
      <div className="animate-pulse-glow absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[color:var(--cyan-glow)]/20 blur-3xl" />
      <div className="animate-pulse-glow absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[color:var(--cyan-glow)]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:py-32 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--cyan-glow)]/40 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--cyan-glow)]">
            <Shield className="h-3 w-3" />
            Soluções em Telefonia IP
          </span>
          <h1 className="balanced-wrap mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Comunicação{" "}
            <span className="text-glow text-[color:var(--cyan-glow)]">
              Empresarial
            </span>{" "}
            em Nuvem
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75">
            A <span className="font-semibold text-white">SecureVox</span>{" "}
            entrega tecnologia corporativa para empresas que valorizam
            eficiência, mobilidade e redução de custos. Unifique voz, dados e
            WhatsApp em uma plataforma 100% em nuvem.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-cyan px-7 font-semibold text-[color:var(--navy-deep)] shadow-glow transition-transform hover:scale-105"
            >
              Solicitar demonstração <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#solucoes"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/30 px-7 text-white transition-colors hover:bg-white/10"
            >
              Ver soluções
            </a>
          </div>
          <div className="mt-12 grid max-w-md grid-cols-3 gap-6">
            <Stat value="40%" label="Economia mensal" />
            <Stat value="99.9%" label="Disponibilidade" />
            <Stat value="100%" label="Em nuvem" />
          </div>
        </div>

        <div className="relative isolate mx-auto w-full max-w-[30rem] lg:max-w-none">
          <div className="animate-pulse-glow absolute inset-0 rounded-[2rem] bg-gradient-cyan opacity-25 blur-3xl" />

          <Image
            src="/images/hero-callcenter.jpg"
            alt="Central de atendimento corporativa da SecureVox"
            width={1280}
            height={960}
            priority
            className="relative aspect-[4/3] rounded-3xl border border-white/10 object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-bold text-[color:var(--cyan-glow)]">
        {value}
      </div>
      <div className="mt-1 text-xs text-white/60">{label}</div>
    </div>
  );
}

function Challenges() {
  const items = [
    {
      icon: DollarSign,
      title: "Alto custo de infraestrutura",
      desc: "Manutenção cara de hardware físico e necessidade constante de atualizações técnicas.",
    },
    {
      icon: Smartphone,
      title: "Falta de mobilidade",
      desc: "Equipes presas aos telefones de mesa, dificultando o trabalho remoto ou híbrido.",
    },
    {
      icon: Maximize2,
      title: "Dificuldade de expansão",
      desc: "Adicionar novos ramais ou linhas exige tempo, cabos e investimento em hardware.",
    },
    {
      icon: Plug,
      title: "Baixa integração digital",
      desc: "Sistemas isolados que não conversam com CRM, WhatsApp ou ferramentas modernas.",
    },
    {
      icon: UserX,
      title: "Imagem corporativa desatualizada",
      desc: "Sinais de ocupado e falta de atendimento profissional impactam a percepção do cliente.",
    },
  ];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Desafios da telefonia tradicional
        </span>
        <h2 className="mt-3 max-w-3xl text-4xl font-bold text-foreground md:text-5xl">
          Por que as empresas estão migrando para a nuvem
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="interactive-card group rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--cyan-soft)] transition-transform duration-200 group-hover:scale-105 group-hover:-rotate-3">
                <item.icon className="h-6 w-6 text-[color:var(--navy)]" />
              </div>
              <h3 className="relative z-10 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="relative z-10 mt-2 text-sm text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  const items = [
    { icon: Server, label: "PABX em nuvem escalável" },
    { icon: Bot, label: "URA inteligente e personalizável" },
    { icon: Home, label: "Ramais remotos para home office" },
    { icon: MessageSquare, label: "Integração oficial WhatsApp Business" },
    { icon: Briefcase, label: "Experiência corporativa moderna" },
  ];

  return (
    <section
      id="solucoes"
      className="relative overflow-hidden bg-gradient-hero py-24 text-white"
    >
      <div className="grid-pattern absolute inset-0 opacity-30" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <h2 className="balanced-wrap text-4xl font-bold leading-tight md:text-5xl">
            Comunicação{" "}
            <span className="text-glow text-[color:var(--cyan-glow)]">
              inteligente
            </span>
            , escalável e 100% em nuvem
          </h2>
          <p className="mt-5 max-w-xl text-white/75">
            Transforme a maneira como sua empresa se conecta. Nossa plataforma
            unifica voz, dados e mobilidade em uma infraestrutura segura e de
            alta performance.
          </p>
          <div className="mt-10 space-y-3">
            {items.map((item) => (
              <div
                key={item.label}
                className="interactive-card group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur hover:border-[color:var(--cyan-glow)]/40"
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-cyan transition-transform duration-200 group-hover:scale-105">
                  <item.icon className="h-5 w-5 text-[color:var(--navy-deep)]" />
                </div>
                <span className="relative z-10 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto h-[360px] w-[360px] max-w-full">
          <div className="animate-pulse-glow absolute inset-10 rounded-full bg-gradient-cyan opacity-20 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          <div className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

          <div className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[color:var(--navy-deep)] shadow-glow">
            <Cloud className="h-14 w-14" strokeWidth={1.6} />
          </div>

          <Connector className="left-1/2 top-[29%] h-14 -translate-x-1/2 -translate-y-full" />
          <Connector
            className="left-[29%] top-1/2 h-px w-14 -translate-x-full -translate-y-1/2"
            horizontal
          />
          <Connector
            className="left-[71%] top-1/2 h-px w-14 -translate-y-1/2"
            horizontal
          />
          <Connector className="left-1/2 top-[71%] h-14 -translate-x-1/2" />

          <OrbitalNode className="absolute left-1/2 top-[12%] z-20 -translate-x-1/2">
            <Phone className="h-6 w-6" />
          </OrbitalNode>
          <OrbitalNode
            className="absolute left-[12%] top-1/2 z-20 -translate-y-1/2"
            delayClass="[animation-delay:0.8s]"
          >
            <Shield className="h-6 w-6" />
          </OrbitalNode>
          <OrbitalNode
            className="absolute right-[12%] top-1/2 z-20 -translate-y-1/2"
            delayClass="[animation-delay:1.6s]"
          >
            <Users className="h-6 w-6" />
          </OrbitalNode>
          <OrbitalNode
            className="absolute bottom-[12%] left-1/2 z-20 -translate-x-1/2"
            delayClass="[animation-delay:2.4s]"
          >
            <Headphones className="h-6 w-6" />
          </OrbitalNode>
        </div>
      </div>
    </section>
  );
}

function OrbitalNode({
  children,
  className,
  delayClass,
}: {
  children: React.ReactNode;
  className?: string;
  delayClass?: string;
}) {
  return (
    <div className={className}>
      <CloudNode className={`animate-float ${delayClass ?? ""}`}>
        {children}
      </CloudNode>
    </div>
  );
}

function CloudNode({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-cyan text-[color:var(--navy-deep)] shadow-glow ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

function Connector({
  className,
  horizontal,
}: {
  className?: string;
  horizontal?: boolean;
}) {
  return (
    <div
      className={`absolute z-0 rounded-full bg-gradient-to-b from-[color:var(--cyan-glow)]/50 to-transparent ${
        horizontal
          ? "h-px bg-gradient-to-r from-[color:var(--cyan-glow)]/50 to-transparent"
          : "w-px"
      } ${className ?? ""}`}
    />
  );
}

function Portfolio() {
  const items = [
    {
      icon: Cloud,
      title: "PABX em Nuvem",
      desc: "Central telefônica completa, virtual e escalável sem custos de hardware.",
    },
    {
      icon: Mic,
      title: "Gravação de Chamadas",
      desc: "Armazenamento seguro de áudios para auditoria e controle de qualidade.",
    },
    {
      icon: Phone,
      title: "Números Nacionais",
      desc: "Ativação imediata de 0800, 4003, 3003 ou números locais.",
    },
    {
      icon: Users,
      title: "Fila Inteligente",
      desc: "Distribuição automática de chamadas para otimizar o tempo de espera.",
    },
    {
      icon: Bot,
      title: "URA Personalizada",
      desc: "Menus de autoatendimento configuráveis com navegação intuitiva.",
    },
    {
      icon: Network,
      title: "Canais Simultâneos",
      desc: "Capacidade elástica para receber múltiplas chamadas ao mesmo tempo.",
    },
    {
      icon: MapPin,
      title: "DDD Flexível",
      desc: "Tenha presença local em qualquer estado com números virtuais.",
    },
    {
      icon: Plus,
      title: "Expansão Ilimitada",
      desc: "APIs, Webhooks e integrações sob medida para o seu negócio.",
    },
  ];

  return (
    <section id="portfolio" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Portfólio de soluções
        </span>
        <h2 className="mt-3 max-w-3xl text-4xl font-bold text-foreground md:text-5xl">
          Tudo o que sua empresa precisa em um único ecossistema
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`interactive-card group rounded-2xl border p-6 ${
                index === items.length - 1
                  ? "border-[color:var(--cyan-glow)]/30 bg-gradient-hero text-white shadow-glow"
                  : "border-border bg-card shadow-card"
              }`}
            >
              <div
                className={`relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-200 group-hover:scale-105 group-hover:-rotate-3 ${
                  index === items.length - 1
                    ? "bg-gradient-cyan"
                    : "bg-[color:var(--cyan-soft)]"
                }`}
              >
                <item.icon
                  className={`h-7 w-7 ${
                    index === items.length - 1
                      ? "text-[color:var(--navy-deep)]"
                      : "text-[color:var(--navy)]"
                  }`}
                />
              </div>
              <h3
                className={`relative z-10 text-lg font-semibold ${
                  index === items.length - 1 ? "text-white" : "text-foreground"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`relative z-10 mt-2 text-sm ${
                  index === items.length - 1
                    ? "text-white/75"
                    : "text-muted-foreground"
                }`}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Connectivity() {
  const features = [
    { icon: Target, label: "Atendimento centralizado em uma única tela" },
    { icon: History, label: "Histórico unificado de todas as conversas" },
    { icon: Zap, label: "Respostas mais rápidas com automação" },
    { icon: Smile, label: "Melhor experiência para o cliente" },
  ];

  return (
    <section className="relative overflow-hidden bg-[color:var(--navy-deep)] py-24 text-white">
      <div className="grid-pattern absolute inset-0 opacity-20" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--cyan-glow)]">
            Conectividade total
          </span>
          <h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
            Telefone + WhatsApp <br />+ Painel de Gestão
          </h2>
          <div className="mt-10 space-y-4">
            {features.map((feature) => (
              <div key={feature.label} className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--cyan-glow)]/30 bg-[color:var(--cyan-glow)]/15">
                  <feature.icon className="h-5 w-5 text-[color:var(--cyan-glow)]" />
                </div>
                <span className="font-medium">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-cyan opacity-20 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white text-foreground shadow-2xl">
            <div className="flex items-center gap-2 border-b px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div className="space-y-3 p-6">
              <ChatBubble side="left">
                Olá, gostaria de saber mais sobre os planos corporativos.
              </ChatBubble>
              <ChatBubble side="right">
                Claro! Nossa equipe pode agendar uma demo para sua empresa hoje
                mesmo.
              </ChatBubble>
              <div className="text-[10px] font-bold uppercase text-green-600">
                via WhatsApp
              </div>
              <ChatBubble side="left">
                Isso seria ótimo. Pode ser às 14h?
              </ChatBubble>
              <ChatBubble side="right">Agendado! Enviaremos o link.</ChatBubble>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatBubble({
  side,
  children,
}: {
  side: "left" | "right";
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex ${side === "right" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
          side === "right"
            ? "rounded-br-sm bg-[color:var(--cyan-glow)]/30 text-foreground"
            : "rounded-bl-sm bg-muted text-foreground"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function Security() {
  const items = [
    {
      icon: Cloud,
      title: "Hospedagem Amazon Web Services",
      desc: "Infraestrutura líder global garantindo estabilidade e tecnologia de ponta para sua operação.",
    },
    {
      icon: Activity,
      title: "Alta disponibilidade (99.9%)",
      desc: "Redundância geográfica e backups automáticos para manter sua empresa sempre online.",
    },
    {
      icon: TrendingDown,
      title: "Escalabilidade automática",
      desc: "Recursos que crescem instantaneamente conforme a demanda de chamadas aumenta.",
    },
    {
      icon: Lock,
      title: "Segurança corporativa & LGPD",
      desc: "Criptografia ponta a ponta e conformidade total com a LGPD e normas internacionais.",
    },
  ];

  return (
    <section id="seguranca" className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Infraestrutura cloud & cibersegurança
          </span>
          <h2 className="mt-3 text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Segurança e desempenho de nível mundial
          </h2>
          <div className="mt-10 space-y-6">
            {items.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[color:var(--cyan-soft)]">
                  <item.icon className="h-6 w-6 text-[color:var(--navy)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/datacenter.jpg"
            alt="Data center AWS com servidores SecureVox"
            width={1280}
            height={960}
            className="w-full rounded-3xl object-cover shadow-card"
          />
          <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold shadow-card">
            <BadgeCheck className="h-5 w-5 text-primary" />
            Powered by AWS Cloud
          </div>
        </div>
      </div>
    </section>
  );
}

function Savings() {
  return (
    <section className="bg-muted py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Redução de custos
          </span>
          <h2 className="mt-3 text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Economize até <span className="text-primary">40%</span> com
            Telefonia IP
          </h2>
          <p className="mt-5 max-w-lg text-muted-foreground">
            Elimine gastos excessivos com manutenção de hardware, infraestrutura
            física e tarifas abusivas de operadoras tradicionais.
          </p>
          <div className="mt-8 border-l-4 border-[color:var(--cyan-glow)] pl-6">
            <div className="text-6xl font-bold text-[color:var(--navy)]">
              40%
            </div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              de economia mensal
            </div>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              Média de redução de custos operacionais relatada por clientes que
              migraram da telefonia analógica para a SecureVox.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] bg-card p-8 shadow-card">
          <div className="rounded-[1.75rem] border border-border/70 bg-white p-6">
            <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Cenário Atual
                </div>
                <h3 className="mt-3 text-2xl font-bold text-foreground">
                  Telefonia Tradicional
                </h3>
                <div className="mt-6 h-3 rounded-full bg-slate-200">
                  <div className="h-3 w-full rounded-full bg-slate-300" />
                </div>

                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  Mais gastos com infraestrutura física, manutenção recorrente e
                  tarifas elevadas.
                </p>
              </div>

              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-[4px] border-[color:var(--cyan-glow)]/20 bg-[color:var(--cyan-soft)] text-center shadow-glow">
                <div className="flex flex-col items-center justify-center leading-none">
                  <div className="text-3xl font-black text-[color:var(--navy)] leading-none ml-2">
                    40%
                  </div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600 leading-none ml-1">
                    Economia
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-cyan-100 bg-cyan-50/70 p-6 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Proposta SecureVox
                </div>
                <h3 className="mt-3 text-2xl font-bold text-foreground">
                  SecureVox Cloud
                </h3>
                <div className="mt-6 h-3 rounded-full bg-cyan-100">
                  <div className="h-3 w-[60%] rounded-full bg-gradient-cyan shadow-glow" />
                </div>

                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  Operação em nuvem com menos custo fixo, implantação leve e
                  escalabilidade sem hardware.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  const items = [
    {
      icon: Headphones,
      title: "Call Centers",
      desc: "Gerencie grandes volumes de chamadas com filas inteligentes, monitoramento em tempo real e gravação automática.",
      image: "/images/case-callcenter.jpg",
    },
    {
      icon: TrendingDown,
      title: "Equipes de Vendas",
      desc: "Mobilidade total para fechar negócios de qualquer lugar, integrado ao WhatsApp e CRM para não perder leads.",
      image: "/images/team-comms.jpg",
    },
    {
      icon: Settings,
      title: "Suporte Técnico",
      desc: "Resolução ágil de tickets com histórico unificado e fácil escalonamento de chamadas entre níveis de suporte.",
      image: "/images/case-support.jpg",
    },
    {
      icon: Smile,
      title: "Atendimento ao Cliente",
      desc: "Ofereça uma experiência humanizada e personalizada, com URA inteligente que direciona ao setor correto.",
      image: "/images/case-customer.jpg",
    },
  ];

  return (
    <section
      id="casos"
      className="relative overflow-hidden bg-gradient-hero py-24 text-white"
    >
      <div className="grid-pattern absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--cyan-glow)]">
          Casos de uso
        </span>
        <h2 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
          Ideal para equipes que dependem de comunicação eficiente
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="interactive-card group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:border-[color:var(--cyan-glow)]/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover opacity-70 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-deep)] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 z-10 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-cyan">
                  <item.icon className="h-5 w-5 text-[color:var(--navy-deep)]" />
                </div>
              </div>
              <div className="relative z-10 p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const steps = [
    {
      icon: Smartphone,
      title: "Cliente entra em contato",
      desc: "O cliente liga para o número único ou envia uma mensagem via WhatsApp Business API.",
    },
    {
      icon: Network,
      title: "URA Inteligente",
      desc: "O sistema identifica o cliente e a URA (ou Chatbot) direciona automaticamente para a área correta.",
    },
    {
      icon: Users,
      title: "Fila Organizada",
      desc: "A fila inteligente prioriza demandas urgentes e distribui a carga entre os agentes disponíveis.",
    },
    {
      icon: Headphones,
      title: "Atendimento Ágil",
      desc: "O atendente recebe a chamada com o histórico do cliente e resolve a solicitação.",
    },
  ];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Jornada do cliente
        </span>
        <h2 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-foreground md:text-5xl">
          Do contato ao atendimento em poucos segundos
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Mapeamos um fluxo de comunicação otimizado para garantir que nenhum
          cliente fique sem resposta, integrando automação inteligente e
          atendimento humano.
        </p>

        <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center">
              <div className="relative inline-flex">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[color:var(--cyan-soft)]">
                  <step.icon className="h-10 w-10 text-[color:var(--navy)]" />
                </div>
                <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-cyan text-sm font-bold text-[color:var(--navy-deep)] shadow-glow">
                  {index + 1}
                </div>
              </div>
              {index < steps.length - 1 ? (
                <ArrowRight className="absolute -right-4 top-12 hidden h-6 w-6 text-muted-foreground/40 lg:block" />
              ) : null}
              <h3 className="mt-6 font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 px-2 text-sm text-muted-foreground">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Implementation() {
  const steps = [
    {
      n: 1,
      icon: Search,
      title: "Diagnóstico da empresa",
      desc: "Análise detalhada da infraestrutura atual e necessidades de ramais e fluxos.",
    },
    {
      n: 2,
      icon: Settings,
      title: "Configuração da plataforma",
      desc: "Personalização da URA, filas de atendimento e horários de funcionamento.",
    },
    {
      n: 3,
      icon: GraduationCap,
      title: "Treinamento da equipe",
      desc: "Capacitação remota para gestores e atendentes utilizarem todo o potencial do sistema.",
    },
    {
      n: 4,
      icon: Rocket,
      title: "Entrada em operação rápida",
      desc: "Virada de chave programada e acompanhada para garantir continuidade total.",
    },
  ];

  return (
    <section
      id="implantacao"
      className="relative overflow-hidden bg-[color:var(--navy-deep)] py-24 text-white"
    >
      <div className="grid-pattern absolute inset-0 opacity-20" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--cyan-glow)]/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--cyan-glow)]">
            Modelo de implantação
          </span>
          <h2 className="mt-3 text-5xl font-bold leading-[1.05] md:text-6xl">
            Rápido, simples e sem complicações
          </h2>
          <p className="mt-6 max-w-md text-white/70">
            Nossa metodologia proprietária garante que sua empresa migre para a
            nuvem com zero impacto na operação e total segurança de dados.
          </p>
        </div>

        <div className="relative space-y-4">
          <div className="absolute bottom-7 left-7 top-7 w-px bg-gradient-to-b from-[color:var(--cyan-glow)] via-[color:var(--cyan-glow)]/40 to-transparent" />
          {steps.map((step) => (
            <div key={step.n} className="relative flex items-start gap-5">
              <div className="relative shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[color:var(--cyan-glow)] bg-[color:var(--navy-deep)] shadow-glow">
                  <step.icon className="h-6 w-6 text-[color:var(--cyan-glow)]" />
                </div>
                <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--cyan-glow)] text-xs font-bold text-[color:var(--navy-deep)]">
                  {step.n}
                </div>
              </div>
              <div className="flex-1 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm text-white/70">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-12 text-white shadow-glow md:p-16">
          <div className="grid-pattern absolute inset-0 opacity-30" />
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[color:var(--cyan-glow)]/20 blur-3xl" />
          <div className="relative grid items-center gap-10 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                Pronto para transformar a comunicação da sua empresa?
              </h2>
              <p className="mt-4 max-w-xl text-white/75">
                Fale com um especialista{" "}
                <span className="font-semibold text-white">SecureVox</span> e
                descubra como a SecureVox pode migrar sua operação para a nuvem
                com economia, segurança e zero complicação.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-cyan px-5 py-3 text-center font-semibold leading-tight text-[color:var(--navy-deep)] shadow-glow transition-transform hover:scale-105 sm:h-12 sm:w-auto sm:px-7 sm:py-0 sm:text-left"
                >
                  <span>Solicitar demonstração SecureVox</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/30 px-7 transition-colors hover:bg-white/10 sm:w-auto"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                "Sem hardware, 100% nuvem",
                "Implantação em poucos dias",
                "Suporte humanizado 24/7",
                "Conformidade LGPD",
              ].map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-3 text-white/90"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[color:var(--cyan-glow)]" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
