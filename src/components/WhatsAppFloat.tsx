const WHATSAPP_URL =
  "https://wa.me/5571983815959?text=" +
  encodeURIComponent(
    "Olá, vim pelo site e gostaria de mais informações sobre os serviços!"
  );

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chamar no WhatsApp"
    className="fixed bottom-5 right-5 z-50 w-16 h-16 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-pulse-slow"
    style={{ boxShadow: "0 8px 24px rgba(37, 211, 102, 0.5)" }}
  >
    {/* Logo oficial WhatsApp (SVG) */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="w-9 h-9 md:w-8 md:h-8"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.79 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.7-2.32-1.65-2.708-1.65zm-2.94 7.456c-.928 0-1.864-.13-2.764-.4l-1.97 1.187 1.224-1.93a8.93 8.93 0 0 1-3.8-7.355c0-4.964 4.04-9.005 9.005-9.005s9.005 4.04 9.005 9.005-4.04 9.005-9.005 9.005zm0-19.728c-5.91 0-10.722 4.81-10.722 10.722 0 1.95.526 3.842 1.527 5.51L4 27.495l5.18-1.703a10.66 10.66 0 0 0 5.99 1.83h.005c5.91 0 10.722-4.812 10.722-10.722 0-2.864-1.116-5.554-3.142-7.578a10.65 10.65 0 0 0-7.58-3.143z" />
    </svg>
  </a>
);

export default WhatsAppFloat;
