import { memo } from "react";
import { ExternalLink, Layout, Package, Code2, Layers } from "lucide-react";

const projects = [
  {
    title: "Style AP",
    type: "Fullstack Dashboard",
    description: "Sartaroshxona biznesini avtomatlashtirish uchun mo'ljallangan murakkab boshqaruv tizimi. Band qilishlar va mijozlar bazasini real-vaqt rejimida boshqaradi.",
    link: "https://styleap.netlify.app/login",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
    icon: <Layout className="w-6 h-6" />,
    color: "from-purple-600 to-indigo-600",
  },
  {
    title: "BeePost",
    type: "Logistics Solution",
    description: "Kuryerlik xizmati uchun buyurtmalarni kuzatish va marshrutlarni optimallashtirish paneli. Yuqori yuklamaga chidamli arxitektura.",
    link: "https://beepost.uz/orders?lang=en",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    icon: <Package className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-[#050505] py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-500 font-bold tracking-[0.3em] text-sm uppercase mb-4">
              Tanlangan loyihalar
            </h2>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
              PORTFOLIO
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#0f0f0f] border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500"
            >
              <div className="p-8 md:p-10">
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.color} shadow-lg shadow-black/20`}>
                    {project.icon}
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase border border-white/10 px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-8 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-medium text-gray-300 bg-white/5 px-3 py-1 rounded-md border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white font-bold hover:text-blue-500 transition-colors group/link"
                  >
                    LOYIHANI KO'RISH
                    <ExternalLink size={18} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                  <div className="flex gap-4 opacity-30">
                    <Code2 size={20} />
                    <Layers size={20} />
                  </div>
                </div>
              </div>

              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none`} />
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-500 mb-6">Boshqa loyihalarim GitHub profilimda mavjud</p>
          <a 
            href="https://github.com" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-black rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            GITHUB-NI OCHISH
          </a>
        </div>
      </div>
    </section>
  );
};

export default memo(Portfolio);