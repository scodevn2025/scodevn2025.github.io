"use client";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const prompts = [
  {
    id: 1,
    title: "Video AI - Cyberpunk City",
    desc: "Prompt tạo video thành phố cyberpunk với hiệu ứng neon, xe bay, mưa đêm.",
    price: "99.000đ",
  },
  {
    id: 2,
    title: "Video AI - Futuristic Tech",
    desc: "Prompt tạo video công nghệ tương lai, robot, ánh sáng xanh tím.",
    price: "89.000đ",
  },
  {
    id: 3,
    title: "Video AI - Neon Street",
    desc: "Prompt tạo video phố đêm neon, bảng hiệu rực rỡ, phong cách anime.",
    price: "79.000đ",
  },
];

// Hiệu ứng typewriter cho slogan
function Typewriter({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const i = useRef(0);
  useEffect(() => {
    setDisplayed("");
    i.current = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i.current]);
      i.current++;
      if (i.current >= text.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [text]);
  return <span className="text-neon-blue font-semibold">{displayed}</span>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full fixed top-0 left-0 z-30 bg-[#18122b]/90 border-b border-neon-pink shadow-lg backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="text-neon-pink text-2xl font-bold font-[Orbitron] tracking-widest drop-shadow">⚡</span>
          <span className="text-neon-pink text-xl font-bold font-[Orbitron] tracking-widest">Scode Prompts</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#" className="text-neon-blue font-semibold hover:text-neon-yellow transition-colors">Trang chủ</a>
          <a href="#prompts" className="text-neon-blue font-semibold hover:text-neon-yellow transition-colors">Prompt Video</a>
          <a href="#contact" className="text-neon-blue font-semibold hover:text-neon-yellow transition-colors">Liên hệ</a>
        </nav>
        <button className="md:hidden text-neon-pink text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#18122b] border-t border-neon-pink px-4 pb-2 animate-fade-in">
          <a href="#" className="block py-2 text-neon-blue font-semibold hover:text-neon-yellow transition-colors">Trang chủ</a>
          <a href="#prompts" className="block py-2 text-neon-blue font-semibold hover:text-neon-yellow transition-colors">Prompt Video</a>
          <a href="#contact" className="block py-2 text-neon-blue font-semibold hover:text-neon-yellow transition-colors">Liên hệ</a>
        </div>
      )}
      <style jsx global>{`
        .animate-fade-in { animation: fadeIn 0.2s; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px);} to { opacity: 1; transform: none; } }
      `}</style>
    </header>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen relative flex flex-col items-center pt-20 pb-0 px-2 md:px-0 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 -z-10 animate-bg-move">
        <div className="w-full h-full bg-gradient-to-br from-[#0f051d] via-[#18122b] to-[#1a103d] opacity-95 absolute inset-0" />
        <div className="w-full h-full bg-gradient-to-tr from-transparent via-[#FF00CC22] to-transparent animate-gradient-x absolute inset-0" />
        <div className="w-full h-full bg-gradient-to-tr from-transparent via-[#00F0FF22] to-transparent animate-gradient-y absolute inset-0" />
        <div className="w-full h-full pointer-events-none bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_8px)]" />
      </div>
      <Header />
      <main className="w-full flex flex-col items-center">
        <section className="w-full max-w-2xl flex flex-col items-center gap-3 mb-10 mt-2">
          <h1 className="text-4xl md:text-5xl font-bold text-neon-pink drop-shadow-lg text-center" style={{letterSpacing:2}}>
            Scode Prompts
          </h1>
          <h2 className="text-lg md:text-xl text-neon-green font-[Orbitron] text-center">by Khac Huy (Scode)</h2>
          <div className="mt-2 text-base md:text-lg text-center">
            <Typewriter text="Chuyên cung cấp prompt tạo video AI phong cách cyberpunk, futuristic, neon độc đáo. Mua prompt, sáng tạo video chất riêng của bạn!" />
          </div>
        </section>
        <section id="prompts" className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {prompts.map((prompt) => (
            <Card key={prompt.id} className="bg-card border border-neon-pink rounded-xl shadow-lg hover:shadow-neon transition-all duration-200">
              <CardHeader>
                <CardTitle className="text-neon-yellow text-xl font-bold mb-2 text-center drop-shadow">{prompt.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neon-blue text-base mb-4 text-center min-h-[56px]">{prompt.desc}</p>
                <div className="flex flex-col items-center gap-2">
                  <span className="font-bold text-neon-green text-lg">{prompt.price}</span>
                  <Button className="bg-neon-pink text-black font-[Orbitron] shadow hover:bg-neon-blue hover:text-white transition-colors w-full rounded-full">Xem chi tiết</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
        <footer id="contact" className="w-full max-w-2xl text-center text-neon-purple py-6 border-t border-t-neon-pink mt-auto">
          Liên hệ Zalo: <span className="text-neon-green font-bold">033.999.8888</span> | Email: <span className="text-neon-yellow font-bold">scodevn@gmail.com</span>
        </footer>
      </main>
      <style jsx global>{`
        .text-neon-pink { color: #FF00CC; }
        .text-neon-blue { color: #00F0FF; }
        .text-neon-yellow { color: #F8FF00; }
        .text-neon-green { color: #39FF14; }
        .text-neon-purple { color: #A020F0; }
        .bg-card { background: #18122b; }
        .border-neon-pink { border-color: #FF00CC; }
        .shadow-neon { box-shadow: 0 0 16px #FF00CC, 0 0 32px #00F0FF; }
        @keyframes gradient-x {
          0%,100% { opacity: 0.3; transform: translateX(-10%); }
          50% { opacity: 0.5; transform: translateX(10%); }
        }
        .animate-gradient-x { animation: gradient-x 8s ease-in-out infinite alternate; }
        @keyframes gradient-y {
          0%,100% { opacity: 0.2; transform: translateY(-10%); }
          50% { opacity: 0.4; transform: translateY(10%); }
        }
        .animate-gradient-y { animation: gradient-y 10s ease-in-out infinite alternate; }
        @keyframes bg-move {
          0%,100% { filter: blur(0px) brightness(1); }
          50% { filter: blur(2px) brightness(1.05); }
        }
        .animate-bg-move { animation: bg-move 12s ease-in-out infinite alternate; }
      `}</style>
    </div>
  );
}
