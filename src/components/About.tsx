import { memo } from "react";
import { Layers, Database, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative bg-[#0a0a0a] text-white py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-sm tracking-[0.4em] text-blue-500 font-bold mb-4 uppercase">
            Mening tajribam
          </h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-8">
            Fullstack <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Dasturchi</span>
          </h1>
          <p className="max-w-3xl text-center text-gray-400 text-lg leading-relaxed">
            Men murakkab veb-tizimlarning ham tashqi (Client-side), ham ichki (Server-side) qismlarini qurishda ixtisoslashganman. 
            Maqsadim — faqat kod yozish emas, balki biznes muammolariga samarali va kengayuvchan raqamli yechimlar topish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
            <div className="w-14 h-14 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
              <Layers size={30} />
            </div>
            <h3 className="text-xl font-bold mb-4">Frontend Architecture</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              React va Next.js ekotizimida yuqori tezlikda ishlovchi, SEO-friendly va barcha qurilmalarga moslashuvchan (Responsive) interfeyslar yarataman.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-[10px] bg-white/10 px-2 py-1 rounded">React</span>
              <span className="text-[10px] bg-white/10 px-2 py-1 rounded">Next.js</span>
              <span className="text-[10px] bg-white/10 px-2 py-1 rounded">Tailwind</span>
            </div>
          </div>

          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <div className="w-14 h-14 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
              <Database size={30} />
            </div>
            <h3 className="text-xl font-bold mb-4">Backend & API</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Node.js yoki Python yordamida xavfsiz serverlar, murakkab ma'lumotlar bazasi arxitekturasi va uchinchi tomon xizmatlari bilan integratsiyalarni amalga oshiraman.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-[10px] bg-white/10 px-2 py-1 rounded">Node.js</span>
              <span className="text-[10px] bg-white/10 px-2 py-1 rounded">PostgreSQL</span>
              <span className="text-[10px] bg-white/10 px-2 py-1 rounded">Redis</span>
            </div>
          </div>

          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all duration-300">
            <div className="w-14 h-14 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <Zap size={30} />
            </div>
            <h3 className="text-xl font-bold mb-4">Optimization & DevOps</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Saytni deploy qilish, CI/CD jarayonlarini sozlash va server yuklamasini optimallashtirish orqali loyihaning barqaror ishlashini ta'minlayman.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-[10px] bg-white/10 px-2 py-1 rounded">Docker</span>
              <span className="text-[10px] bg-white/10 px-2 py-1 rounded">AWS/Vercel</span>
              <span className="text-[10px] bg-white/10 px-2 py-1 rounded">Nginx</span>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-12 md:gap-24 opacity-70">
          <div className="text-center">
            <div className="text-3xl font-bold">20+</div>
            <div className="text-xs text-gray-500 uppercase tracking-widest">Loyihalar</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">99%</div>
            <div className="text-xs text-gray-500 uppercase tracking-widest">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">A+</div>
            <div className="text-xs text-gray-500 uppercase tracking-widest">Security</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);