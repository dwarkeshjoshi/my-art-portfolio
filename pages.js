import React, { useState } from 'react';
import { ShoppingBag, Image as ImageIcon, User, Mail, ArrowRight, ExternalLink } from 'lucide-react';

// --- dummy data for your artwork ---
const ARTWORKS = [
  { id: 1, title: "Cinematic Solitude", category: "Originals", price: "$1,200", size: "24x36 Inches", img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80" },
  { id: 2, title: "Monochrome Study No. 4", category: "Limited Prints", price: "$180", size: "12x18 Inches", img: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=800&auto=format&fit=crop&q=80" },
  { id: 3, title: "Visions of the Avant-Garde", category: "Originals", price: "$2,400", size: "40x40 Inches", img: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=800&auto=format&fit=crop&q=80" },
  { id: 4, title: "Ethereal Landscapes", category: "Limited Prints", price: "$150", size: "16x20 Inches", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&auto=format&fit=crop&q=80" }
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('gallery');

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111] font-sans selection:bg-black selection:text-white">
      {/* Dynamic Inject Tailwind CDN for instant zero-config setup */}
      <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#fafafa]/80 backdrop-blur-md border-b border-zinc-200/50 px-6 py-4 flex justify-between items-center">
        <a href="#" onClick={() => setActiveTab('gallery')} className="text-xl font-bold tracking-tight uppercase">STUDIO ART</a>
        <nav className="flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
          <button onClick={() => setActiveTab('gallery')} className={`hover:text-zinc-500 transition-colors ${activeTab === 'gallery' ? 'underline underline-offset-4 decoration-2' : ''}`}>Gallery</button>
          <button onClick={() => setActiveTab('about')} className={`hover:text-zinc-500 transition-colors ${activeTab === 'about' ? 'underline underline-offset-4 decoration-2' : ''}`}>About</button>
          <button onClick={() => setActiveTab('contact')} className={`hover:text-zinc-500 transition-colors ${activeTab === 'contact' ? 'underline underline-offset-4 decoration-2' : ''}`}>Contact</button>
        </nav>
      </header>

      {/* Main Content Render */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        
        {/* TAB: GALLERY & SHOP */}
        {activeTab === 'gallery' && (
          <div>
            {/* Minimal Hero Statement */}
            <div className="mb-16 max-w-2xl">
              <h1 className="text-4xl font-light tracking-tight leading-tight mb-4 text-zinc-900">
                Curated contemporary works capturing light, texture, and industrial symmetry.
              </h1>
              <p className="text-zinc-500 text-sm">Available for worldwide shipping. Original canvas paintings accompanied by signed certificates of authenticity.</p>
            </div>

            {/* Premium Artwork Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {ARTWORKS.map((art) => (
                <div key={art.id} className="group relative flex flex-col justify-between">
                  <div className="overflow-hidden bg-zinc-100 aspect-[4/5] relative mb-4">
                    <img 
                      src={art.img} 
                      alt={art.title} 
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-102"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded-sm shadow-xs">
                      {art.category}
                    </div>
                  </div>
                  <div className="flex justify-between items-start px-1">
                    <div>
                      <h3 className="text-lg font-medium text-zinc-900">{art.title}</h3>
                      <p className="text-xs text-zinc-400 mt-0.5">{art.size}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-base font-semibold block text-zinc-900">{art.price}</span>
                      <a 
                        href={`mailto:studio@example.com?subject=Inquiry regarding: ${art.title}`}
                        className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-black mt-1 transition-colors group/link"
                      >
                        Inquire <ArrowRight size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: ABOUT THE ARTIST */}
        {activeTab === 'about' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center py-6">
            <div className="md:col-span-5 bg-zinc-200 aspect-[3/4] overflow-hidden shadow-xs">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80" 
                alt="Artist Portrait" 
                className="w-full h-full object-cover filter contrast-[1.05]"
              />
            </div>
            <div className="md:col-span-7 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">The Studio</span>
              <h2 className="text-3xl font-light mb-6 tracking-tight">Crafting visual narratives across traditional media and high-fidelity textures.</h2>
              <div className="space-y-4 text-zinc-600 text-sm leading-relaxed max-w-xl">
                <p>Based out of a dedicated daylight studio, my practice balances raw physical brushwork with sharp editorial-neutral presentation. Every piece is an exploration of form, light handling, and balanced negative spaces.</p>
                <p>My works have been featured in selective independent galleries and reside in private collections across the globe. Each original canvas features meticulously documented archival values and signed authenticity validation.</p>
              </div>
              
              <div className="mt-8 border-t border-zinc-200 pt-6 max-w-xl">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-3">Selected Exhibitions</h4>
                <ul className="text-xs text-zinc-500 space-y-2">
                  <li>• 2026 — Minimalist Dialogues, Metamodern Gallery</li>
                  <li>• 2025 — Structural Shadows (Solo), Linear Spaces</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB: SECURE CONTACT & COMMISSIONS */}
        {activeTab === 'contact' && (
          <div className="max-w-xl mx-auto py-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-light tracking-tight mb-2">Acquisitions & Commissions</h2>
              <p className="text-sm text-zinc-500">For direct gallery representation inquiries, bespoke commissions, or detailed catalog pricing.</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert('Message simulation sent successfully.'); }} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">Full Name</label>
                <input type="text" required className="w-full bg-white border border-zinc-200 rounded-xs px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">Email Address</label>
                <input type="email" required className="w-full bg-white border border-zinc-200 rounded-xs px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">Nature of Inquiry</label>
                <select className="w-full bg-white border border-zinc-200 rounded-xs px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors">
                  <option>Purchase Original Artwork</option>
                  <li>Order Custom Scale Commission</li>
                  <option>Gallery Representation / Press</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">Message</label>
                <textarea rows="5" required className="w-full bg-white border border-zinc-200 rounded-xs px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors rounded-xs shadow-xs">
                Send Secure Message
              </button>
            </form>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200/60 mt-20 px-6 py-8 text-center text-xs text-zinc-400 tracking-wide uppercase">
        © 2026 Studio Art. All Rights Reserved. Fully Responsive Premium Portfolio.
      </footer>
    </div>
  );
}