import React, { useEffect, useState } from 'react';
import chapters from '../data/chapters.json';
import { Menu, Star, StarOff, Printer } from 'lucide-react';

export default function IT_OPE_003_Site(){
  const [openNav,setOpenNav]=useState(true);
  const [query,setQuery]=useState('');
  const [favorites,setFavorites]=useState({});
  const [active,setActive]=useState(chapters[0].id);
  useEffect(()=>{document.title='IT-OPE_003 — Engeselt'},[]);
  const jump=(id)=>{ setActive(id); document.getElementById(id)&&document.getElementById(id).scrollIntoView({behavior:'smooth'});} 
  const toggleFav=(id)=>setFavorites(f=>({...f,[id]:!f[id]}));
  const filtered = chapters.filter(c=> !query || c.title.toLowerCase().includes(query.toLowerCase()) || c.content.join(' ').toLowerCase().includes(query.toLowerCase()));
  return (<div className="min-h-screen bg-[#F5F5F5] text-[#003366]">
    <header className="sticky top-0 bg-[#004C99] text-white p-4 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-3">
        <button onClick={()=>setOpenNav(o=>!o)} className="p-2 bg-white/20 rounded"><Menu/></button>
        <div>
          <h1 className="text-xl font-bold">Engeselt — IT-OPE_003</h1>
          <p className="text-sm opacity-90">Instrução de Trabalho da EPD – Análise Técnica</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <input placeholder="Buscar no documento..." value={query} onChange={e=>setQuery(e.target.value)} className="p-2 rounded text-black" />
        <button onClick={()=>window.print()} className="p-2 bg-[#FF6600] rounded shadow"><Printer/></button>
      </div>
    </header>
    <div className="grid grid-cols-12 gap-4 p-4">
      {openNav && (<aside className="col-span-12 lg:col-span-3">
        <div className="p-3 border rounded bg-white shadow-md">
          <h3 className="font-semibold mb-2">Capítulos</h3>
          <div className="space-y-1 max-h-[60vh] overflow-auto">
            {filtered.map(c=> (
              <button key={c.id} onClick={()=>jump(c.id)} className={`w-full text-left p-2 rounded hover:bg-[#004C99]/10 ${active===c.id? 'bg-[#004C99]/6':''}`}>
                <div className="flex items-center justify-between">
                  <span>{c.title}</span>
                  <button onClick={(e)=>{e.stopPropagation(); toggleFav(c.id);}}>{favorites[c.id]?<Star/>:<StarOff/>}</button>
                </div>
              </button>
            ))}
          </div>
        </div>
      </aside>)}

      <main className={openNav? 'col-span-12 lg:col-span-9':'col-span-12'}>
        {chapters.map(ch=> (
          <section id={ch.id} key={ch.id} className="mb-8 p-4 bg-white rounded shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#003366]">{ch.title}</h2>
                <div className="mt-3 space-y-2 text-sm text-[#0f172a]">
                  {ch.content.map((p,i)=> <p key={i}>{p}</p>)}
                </div>
              </div>
              <div className="ml-4">
                <button className="px-3 py-1 bg-[#004C99] text-white rounded" onClick={()=>jump(ch.id)}>Ir para</button>
              </div>
            </div>
          </section>
        ))}

        <section id="galeria" className="mb-8 p-4 bg-white rounded shadow-sm">
          <h2 className="text-2xl font-bold text-[#003366] mb-4">Galeria de Imagens</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {Array.from({length:15}).map((_,i)=>{
              const idx=i+1; const src=`/doc_image_${idx}.png`;
              return (<div key={i} className="overflow-hidden rounded border"><img src={src} alt={`Imagem ${idx}`} className="w-full h-48 object-contain bg-[#f8fafc]"/></div>);
            })}
          </div>
        </section>

      </main>
    </div>
    <footer className="mt-6 text-xs text-center text-[#003366]/70 p-3 bg-[#F5F5F5] border-t">© {new Date().getFullYear()} Engeselt — Uso interno. contato: relacionamento@engeselt.com.br</footer>
  </div>);
}
