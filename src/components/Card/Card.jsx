import { motion } from "framer-motion";


export default function Card({ title, children, rarity = "common" }) {
const rarityStyle = {
common: "border-slate-700",
rare: "border-cyan-500 shadow-cyan-500/40",
epic: "border-violet-500 shadow-violet-500/40",
legendary: "border-yellow-400 shadow-yellow-400/50"
};


return (
<motion.div
whileHover={{ scale: 1.05 }}
className={`w-[280px] h-[380px] rounded-2xl bg-slate-900 border-2 ${rarityStyle[rarity]} shadow-xl p-6 flex flex-col justify-between`}
>
<h2 className="text-xl font-bold text-white">{title}</h2>
<div className="text-slate-300">{children}</div>
</motion.div>
);
}