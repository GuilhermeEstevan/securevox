import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/558181312506?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20SecureVox"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" />
    </a>
  );
}
