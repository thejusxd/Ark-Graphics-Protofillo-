/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Globe, 
  Mail, 
  ExternalLink,
  Youtube,
  MessageCircle,
  Share2,
  Check
} from "lucide-react";
import { useState, type ReactNode } from "react";

interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon?: ReactNode;
  image?: string;
  color: string;
}

const LogoParticles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible flex items-center justify-center">
      {[...Array(20)].map((_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const distance = 120 + Math.random() * 180;
        const targetX = Math.cos(angle) * distance;
        const targetY = Math.sin(angle) * distance;
        
        return (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
            animate={{ 
              x: targetX, 
              y: targetY, 
              scale: [0, 2.5, 0], 
              opacity: [0, 0.8, 0] 
            }}
            transition={{
              duration: 2.5 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut"
            }}
            className="absolute w-1 h-1 bg-yellow-400/40 rounded-full blur-[1px]"
          />
        );
      })}
    </div>
  );
};

const LINKS: LinkItem[] = [
  {
    id: "4",
    title: "Thoppi Discord Server",
    url: "https://discord.gg/mrz-thoppi-1080457490849857580",
    image: "https://cdn.discordapp.com/attachments/1488274956214079671/1490396283750318180/1775408545553.jpg?ex=69d3e734&is=69d295b4&hm=6da6c191b74b2dafe78f5ddfc4c7a206c0a1649e56fa1062c14184e6f7cae276&",
    color: "from-indigo-500 to-purple-600",
  },
  {
    id: "1",
    title: "Shameer Discord Server",
    url: "https://discord.gg/zNTEWnM3A",
    image: "https://cdn.discordapp.com/attachments/1488274956214079671/1490377933511196752/1775401926450.png?ex=69d3d61d&is=69d2849d&hm=1528f9616359cec4fffb7cde7c337f017557e23524485c55f092bc1711b3bb5e&",
    color: "from-indigo-500 to-purple-600",
  },
  {
    id: "2",
    title: "Sheikh Discord Server",
    url: "https://discord.gg/taE8c5ErNQ",
    image: "https://cdn.discordapp.com/attachments/1488274956214079671/1490377933108281384/1775401784728.png?ex=69d3d61d&is=69d2849d&hm=ef3583385bee2c3e85264a1c1704dc783b43fe9ea05cf83243e2af2d85c71bf6&",
    color: "from-indigo-600 to-blue-700",
  },
  {
    id: "3",
    title: "Sheikh Whatsapp Groups",
    url: "https://sheikh-gaming.vercel.app/",
    image: "https://cdn.discordapp.com/attachments/1488274956214079671/1490385431580377218/sheikh.official__14050116_214917519.jpg?ex=69d3dd18&is=69d28b98&hm=848bfd32493bd128cdb84180c170924b1e9f31fdf51c026af75a7274772ab2b8&",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "5",
    title: "Mack Discord Server",
    url: "https://discord.gg/h7ASDkX6ZV",
    image: "https://cdn.discordapp.com/attachments/1488274956214079671/1490397721205542952/1775408857274.jpg?ex=69d3e88a&is=69d2970a&hm=8f235baaf3ebd8d8eb8f62b814fe12c6c8d917b50cd47bc4c63e52b74b6dae67&",
    color: "from-indigo-500 to-purple-600",
  },
  {
    id: "6",
    title: "Mack Whatsapp Group",
    url: "https://chat.whatsapp.com/KVQWkBqOECRHJL4FtL1D0E?mode=gi_t",
    image: "https://cdn.discordapp.com/attachments/1488274956214079671/1490397721205542952/1775408857274.jpg?ex=69d3e88a&is=69d2970a&hm=8f235baaf3ebd8d8eb8f62b814fe12c6c8d917b50cd47bc4c63e52b74b6dae67&",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "7",
    title: "Appapan Discord Server",
    url: "https://discord.gg/FwDt9JnEgx",
    image: "https://cdn.discordapp.com/attachments/1488274956214079671/1490557672217378987/1775446937425.png?ex=69d47d82&is=69d32c02&hm=1212f054ec5c295207e74d8a11ae182cdad6ad6d5c55dac01785e4c143812009&",
    color: "from-indigo-500 to-purple-600",
  },
  {
    id: "8",
    title: "Appapan Whatsapp Group",
    url: "https://chat.whatsapp.com/IfbpRcr2MlF97yhycpGFJB?mode=gi_t",
    image: "https://cdn.discordapp.com/attachments/1488274956214079671/1490557672217378987/1775446937425.png?ex=69d47d82&is=69d32c02&hm=1212f054ec5c295207e74d8a11ae182cdad6ad6d5c55dac01785e4c143812009&",
    color: "from-green-500 to-emerald-600",
  },
];

export default function App() {
  const [showNotification, setShowNotification] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-sans selection:bg-yellow-500/30">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 z-[1] opacity-[0.03] pointer-events-none mix-blend-overlay"
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

      {/* iOS Style Notification */}
      <AnimatePresence>
        {showNotification && (
          <div className="fixed top-6 left-0 right-0 z-[100] flex justify-center pointer-events-none px-6">
            <motion.div
              initial={{ opacity: 0, y: -100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -100, scale: 0.8 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 30,
                mass: 0.8
              }}
              className="liquid-glass pointer-events-auto px-5 py-3 rounded-[24px] flex items-center gap-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] min-w-[240px] border-yellow-500/20"
            >
              <div className="glossy-highlight" />
              <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-yellow-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-yellow-400 text-sm font-semibold">Success</span>
                <span className="text-slate-400 text-xs">Link copied to clipboard</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Background Elements - Optimized for performance */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] rounded-full bg-yellow-600/[0.05] blur-[40px]" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] rounded-full bg-amber-600/[0.05] blur-[40px]" />
      </div>

      <main className="relative z-10 max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-6 pt-16 pb-12 sm:pt-24 md:pt-32">
        {/* Profile Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative inline-block mb-6 md:mb-8 group"
          >
            <LogoParticles />
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-amber-600 rounded-full blur-lg opacity-30" />
            <img 
              src="https://cdn.discordapp.com/attachments/1488274956214079671/1490390558852649162/1775407166979.png?ex=69d3e1df&is=69d2905f&hm=ea1a3917d954489edc9c188817297f743fe3737069edc7a0227785213b02b1b1&" 
              alt="MRZ FAMILY Logo" 
              className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border border-yellow-500/20 object-cover shadow-xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: [0, -8, 0],
            }}
            transition={{ 
              opacity: { duration: 1, delay: 0.2 },
              y: { 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1.2
              }
            }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-2 md:mb-4 tracking-tight text-white drop-shadow-sm"
          >
            MRZ GTA FAMILY 💛
          </motion.h1>
          <p className="text-slate-400 text-base sm:text-lg md:text-xl mb-8 font-light max-w-xs md:max-w-md mx-auto">
            Here you could find every offical community related to MRZ GTA Family .
          </p>
        </motion.div>

        {/* Links List */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {LINKS.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ x: 8, y: -2 }}
              whileTap={{ x: 4, scale: 0.98 }}
              transition={{ 
                delay: index * 0.05 + 0.3, 
                duration: 0.5,
                x: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group block relative will-change-transform"
            >
              <div className="liquid-glass liquid-glass-hover p-4 sm:p-5 md:p-6 rounded-[28px] flex items-center justify-between overflow-hidden">
                <div className="glossy-highlight" />
                <div className="liquid-shine" />
                
                <div className="relative z-10 flex items-center gap-4 sm:gap-5 md:gap-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${link.color} flex items-center justify-center shadow-lg overflow-hidden border border-white/10`}>
                    {link.image ? (
                      <img 
                        src={link.image} 
                        alt={link.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="text-white">{link.icon}</div>
                    )}
                  </div>
                  <span className="font-semibold text-slate-200 text-base sm:text-lg md:text-xl group-hover:text-yellow-400 transition-colors duration-200">
                    {link.title}
                  </span>
                </div>
                <div className="relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors duration-200">
                  <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-slate-500 group-hover:text-yellow-400 transition-colors" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer Actions */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 sm:mt-24 text-center"
        >
          <button 
            onClick={handleShare}
            className="glass glass-hover px-8 py-4 rounded-full text-sm font-semibold flex items-center gap-3 mx-auto text-slate-300 hover:text-yellow-400 shadow-xl"
          >
            <Share2 className="w-4 h-4" />
            Share Profile
          </button>
          
          <p className="mt-10 text-slate-600 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold">
            &copy; 2026 <a href="https://www.instagram.com/mrzgta.official?igsh=dzVmd3Fjb2hiczE2" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">MRZ GTA</a> | <a href="https://www.instagram.com/_thejus_xd?igsh=cXNyaGt2ZjQxbTZ6" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">ARK GRAPHICS</a>
          </p>
          <p className="mt-2 text-slate-700 text-[8px] sm:text-[10px] uppercase tracking-[0.3em] font-medium opacity-60">
            ALL RIGHTS RECEIVED
          </p>
        </motion.div>
      </main>

      {/* Decorative background grid */}
      <div className="fixed inset-0 z-[-1] opacity-[0.08] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </div>
  );
}
