import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Cpu, User, Home, MessageSquare, Heart, MessageCircle, Send, Share2, MoreHorizontal, Mail, ThumbsUp, Reply, Sparkles, Github, Twitter, Linkedin, Camera, Zap, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- MAIN WRAPPER COMPONENT ---
export default function App() {
  return (
    <Router>
      <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-cyan-500/30">
        <Navbar />
        <div className="pt-24 pb-12">
          <Routes>
            <Route path="/" element={<MainFeed />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </div>
        <ContactFooter />
      </div>
    </Router>
  );
}

// --- 1. NAVBAR COMPONENT ---
const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <Link opacity={1} to="/" className="flex items-center gap-2 group">
        <div className="p-2 bg-cyan-500 rounded-lg text-black group-hover:rotate-12 transition">
          <Cpu size={24} />
        </div>
        <span className="text-2xl font-black tracking-tighter">AI WORLD</span>
      </Link>
      <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
        <Link to="/" className="hover:text-cyan-400 transition flex items-center gap-2 text-xs"><Home size={16}/> Feed</Link>
        <Link to="/auth" className="hover:text-cyan-400 transition flex items-center gap-2 text-xs"><MessageSquare size={16}/> Join</Link>
        <Link to="/profile" className="hover:text-cyan-400 transition flex items-center gap-2 text-xs"><User size={16}/> Profile</Link>
      </div>
      <Link to="/auth" className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-cyan-400 transition text-sm">
        Get Started
      </Link>
    </div>
  </nav>
);

// --- 2. MAIN FEED COMPONENT ---
const MainFeed = () => (
  <div className="max-w-2xl mx-auto px-4">
    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-[32px] mb-8">
      <div className="flex gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500"></div>
        <input type="text" placeholder="What's happening in AI World?" className="bg-transparent border-none outline-none w-full text-lg text-white" />
      </div>
    </div>
    <PostCard user="Neural_Architect" content="The future of decentralized AI starts here. #AIWorld #Web3" likes="1.2k" comments="45" />
  </div>
);

const PostCard = ({ user, content, likes, comments }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-[#0f0f0f] border border-white/5 rounded-[32px] overflow-hidden mb-8 shadow-2xl">
    <div className="p-5 flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-purple-500"></div>
      <div><h4 className="font-bold text-white leading-none">{user}</h4><span className="text-[10px] text-gray-500 uppercase">2m ago</span></div>
    </div>
    <div className="px-5 pb-4"><p className="text-gray-300">{content}</p></div>
    <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-700 font-black italic">AI GENERATED IMAGE HOST</div>
    <div className="p-5 flex items-center justify-between border-t border-white/5">
      <div className="flex gap-6">
        <button className="flex items-center gap-2 hover:text-pink-500 text-gray-400 transition"><Heart size={20} /> <span className="text-xs">{likes}</span></button>
        <button className="flex items-center gap-2 hover:text-cyan-400 text-gray-400 transition"><MessageCircle size={20} /> <span className="text-xs">{comments}</span></button>
      </div>
      <Share2 size={20} className="text-gray-400 cursor-pointer hover:text-white" />
    </div>
  </motion.div>
);

// --- 3. AUTH PAGE COMPONENT ---
const AuthPage = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  return (
    <div className="flex items-center justify-center p-6">
      <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[40px]">
        <h2 className="text-3xl font-black mb-8 text-center">{isLogin ? 'SIGN IN' : 'SIGN UP'}</h2>
        <div className="space-y-4">
          <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-cyan-400 transition" />
          <input type="password" placeholder="Password" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-cyan-400 transition" />
          <button className="w-full bg-cyan-500 text-black font-black py-4 rounded-2xl hover:bg-cyan-400 transition mt-4">{isLogin ? 'LOGIN' : 'REGISTER'}</button>
          <p onClick={() => setIsLogin(!isLogin)} className="text-center text-gray-500 text-sm cursor-pointer hover:text-white transition mt-4">Switch to {isLogin ? 'Sign Up' : 'Login'}</p>
        </div>
      </motion.div>
    </div>
  );
};

// --- 4. USER PROFILE COMPONENT ---
const UserProfile = () => (
  <div className="max-w-4xl mx-auto px-6">
    <div className="h-48 rounded-[40px] bg-gradient-to-r from-blue-900 to-purple-900 shadow-2xl mb-[-60px] relative z-0"></div>
    <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-8 rounded-[40px] relative z-10 shadow-2xl">
      <div className="w-32 h-32 rounded-full border-4 border-cyan-500 bg-gray-800 mb-6 overflow-hidden"></div>
      <h1 className="text-4xl font-black">AI_ARCHITECT</h1>
      <p className="text-gray-400 mt-2">Building the future of neural interfaces. 🚀</p>
      <div className="flex gap-8 mt-8 border-t border-white/5 pt-6">
        <div className="text-center"><div className="text-xl font-bold">128</div><div className="text-[10px] text-gray-500 uppercase tracking-widest">Posts</div></div>
        <div className="text-center"><div className="text-xl font-bold">42K</div><div className="text-[10px] text-gray-500 uppercase tracking-widest">Followers</div></div>
      </div>
    </div>
  </div>
);

// --- 5. CONTACT & FOOTER COMPONENT ---
const ContactFooter = () => (
  <footer className="mt-20 border-t border-white/5 bg-black/40 backdrop-blur-lg pt-20">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 pb-20">
      <div className="bg-white/5 p-8 rounded-[32px] border border-white/10">
        <h3 className="text-2xl font-black mb-6 flex items-center gap-2 tracking-tighter">CONTACT ADMIN <Mail className="text-cyan-400" /></h3>
        <div className="space-y-4">
          <input type="text" placeholder="Name" className="w-full bg-black/50 border border-white/10 rounded-xl py-4 px-6 outline-none focus:border-cyan-400 transition" />
          <textarea placeholder="Message" className="w-full bg-black/50 border border-white/10 rounded-xl p-6 outline-none focus:border-cyan-400 transition h-32"></textarea>
          <button className="w-full bg-white text-black font-black py-4 rounded-xl hover:bg-cyan-400 transition">SEND MESSAGE</button>
        </div>
      </div>
      <div>
        <h2 className="text-5xl font-black tracking-tighter mb-4">AI WORLD</h2>
        <p className="text-gray-500 mb-8 max-w-sm uppercase text-xs tracking-widest font-bold">The next evolution of digital connection.</p>
        <div className="flex gap-4">
          <div className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition cursor-pointer"><Github size={20}/></div>
          <div className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition cursor-pointer"><Twitter size={20}/></div>
        </div>
      </div>
    </div>
  </footer>
);

