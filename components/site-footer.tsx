import { Mail, MapPin, Phone, Shield } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[color:var(--navy-deep)] pb-8 pt-16 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-white">
            <Shield
              className="h-6 w-6 text-[color:var(--cyan-glow)]"
              strokeWidth={2.4}
            />
            <span className="font-display text-lg font-bold tracking-wide">
              SECUREVOX
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm">
            Soluções em telefonia IP corporativa em nuvem. Comunicação
            inteligente, escalável e segura para empresas que valorizam
            eficiência, mobilidade e redução de custos.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">Soluções</h4>
          <ul className="space-y-2 text-sm">
            <li>PABX em Nuvem</li>
            <li>URA Inteligente</li>
            <li>WhatsApp Business</li>
            <li>Ramais Virtuais</li>
            <li>Gravação de Chamadas</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">Contato</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[color:var(--cyan-glow)]" />
              (81) 8131-2506
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[color:var(--cyan-glow)]" />
              contato@securevox.com.br
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[color:var(--cyan-glow)]" />
              Recife · Brasil
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 px-6 pt-6 text-xs text-white/50 md:flex-row">
        <p>
          © {new Date().getFullYear()} SecureVox · Todos os direitos reservados.
        </p>
        <p>www.securevox.com.br · CNPJ 00.000.000/0001-00</p>
      </div>
    </footer>
  );
}
