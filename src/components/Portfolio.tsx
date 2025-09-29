import { memo } from "react";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="inline-block border-4 px-10 py-4 mb-8">
        <h1 className="text-[30px] font-bold tracking-widest">PORTFOLIO</h1>
      </div>
    </section>
  );
};

export default memo(Portfolio);
