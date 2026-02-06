"use client";

import { FormEvent, memo } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Contact = () => {
  const { t } = useTranslation();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      className="relative bg-[#0a0a0a] text-white py-32 px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm tracking-[0.4em] text-blue-500 font-bold mb-4 uppercase">
            {t("contact.title")}
          </h2>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {t("contact.title")}
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-6">
              <ContactItem
                icon={<Mail size={20} />}
                label="Email"
                value="info@example.com"
                href="mailto:info@example.com"
              />
              <ContactItem
                icon={<Phone size={20} />}
                label="Telefon"
                value="+998 90 123 45 67"
                href="tel:+998901234567"
              />
              <ContactItem
                icon={<MapPin size={20} />}
                label="Manzil"
                value="Toshkent, O‘zbekiston"
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/5 border border-white/10 rounded-2xl p-10"
            >
              <Input label={t("contact.name")} placeholder={t("contact.name")} />
              <Input
                label={t("contact.email")}
                placeholder="email@example.com"
                type="email"
              />
              <Input
                label="Phone"
                placeholder="xx xxx xx xx"
                type="phoneNumber"
              />

              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-sm text-gray-300">{t("contact.message")}</label>
                <textarea
                  placeholder=""
                  className="bg-transparent border-b border-white/20 py-3 outline-none focus:border-blue-500 transition resize-none h-32 placeholder:text-gray-500"
                  required
                />
              </div>

              <div className="md:col-span-2 pt-6">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-bold tracking-widest uppercase
                  bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition cursor-pointer"
                >
                  {t("contact.send")}
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-blue-400">
      {icon}
    </div>
    <div>
      <p className="text-xs uppercase tracking-widest text-gray-500">{label}</p>
      {href ? (
        <a href={href} className="text-lg hover:text-blue-400 transition">
          {value}
        </a>
      ) : (
        <p className="text-lg">{value}</p>
      )}
    </div>
  </div>
);

const Input = ({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm text-gray-300">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="bg-transparent border-b border-white/20 py-3 outline-none focus:border-blue-500 transition placeholder:text-gray-500"
      required
    />
  </div>
);

export default memo(Contact);
