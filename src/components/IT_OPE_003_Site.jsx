import React, { useState } from "react";
import { Menu, Star, StarOff, Printer } from "lucide-react";

export default function IT_OPE_003_Site(){
  const [openNav,setOpenNav]=useState(true);
  const [query,setQuery]=useState("");
  const [favorites,setFavorites]=useState({});
  const toggleFav=(id)=>setFavorites(f=>({...f,[id]:!f[id]}));
  const jump=(id)=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
  const sections=[
    {id:"intro",title:"Objetivo & Público"},
    {id:"respons",title:"Responsabilidades"},
    {id:"fluxograma",title:"Fluxograma do Processo"},
    {id:"prints",title:"Exemplos e Prints"},
    {id:"galeria",title:"Galeria Completa"},
    {id:"final",title:"Finalização"}
  ];
  const filtered=sections.filter(s=>!query||s.title.toLowerCase().includes(query.toLowerCase()));
  return(<div className="min-h-screen bg-[#F5F5F5] text-[#003366]">
    <header className="sticky top-0 bg-[#004C99] text-white p-4 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-3">
        <button onClick={()=>setOpenNav(o=>!o)} className="p-2 bg-white/20 rounded"><Menu/></button>
        <div>
          <h1 className="text-xl font-bold">Engeselt — IT-OPE_003</h1>
          <p className="text-sm opacity-80">Instrução de Trabalho da EPD – Análise Técnica</p>
        </div>
      </div>
      <button onClick={()=>window.print()} className="p-2 bg-[#FF6600] rounded shadow"><Printer/></button>
    </header>
    <div className="grid grid-cols-12 gap-4 p-4">
      {openNav&&(<aside className="col-span-12 lg:col-span-3">
        <div className="p-3 border rounded bg-white shadow-md">
          <input placeholder="Buscar seções..." value={query} onChange={e=>setQuery(e.target.value)} className="w-full p-2 border rounded mb-2"/>
          <div className="space-y-1">
            {filtered.map(s=>(<button key={s.id} onClick={()=>jump(s.id)} className="w-full flex items-center justify-between p-2 hover:bg-[#004C99]/10 rounded">
              <span className="text-sm">{s.title}</span>
              <button onClick={(e)=>{e.stopPropagation();toggleFav(s.id)}}>{favorites[s.id]?<Star/>:<StarOff/>}</button>
            </button>))}
          </div>
        </div>
      </aside>)}
      <main className={openNav?"col-span-12 lg:col-span-9":"col-span-12"}>
        <section id="intro" className="mb-6">
          <h2 className="text-2xl font-bold border-b-2 border-[#FF6600] mb-3">Objetivo & Público</h2>
          <p>Apresentar instruções para a etapa de Análise Técnica das solicitações oriundas do Levantamento de Campo. Destinado a colaboradores Engeselt.</p>
        </section>
        <section id="respons" className="mb-6">
          <h2 className="text-2xl font-bold border-b-2 border-[#FF6600] mb-3">Responsabilidades</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><b>Agente Técnico</b>: Revisar itens técnicos e documentais.</li>
            <li><b>Supervisor</b>: Acompanhar solicitações e orientar equipe.</li>
            <li><b>Coordenador</b>: Definir prazos e apoiar clientes.</li>
            <li><b>Gerente</b>: Gerir equipe e recursos.</li>
          </ul>
        </section>
        <section id="fluxograma" className="mb-6">
          <h2 className="text-2xl font-bold border-b-2 border-[#FF6600] mb-3">Fluxograma do Processo</h2>
          <img src="/doc_image_1.png" alt="Fluxograma" className="rounded shadow-md"/>
        </section>
        <section id="prints" className="mb-6">
          <h2 className="text-2xl font-bold border-b-2 border-[#FF6600] mb-3">Exemplos e Prints</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <img src="/doc_image_2.png" className="rounded shadow-md"/>
            <img src="/doc_image_3.png" className="rounded shadow-md"/>
            <img src="/doc_image_4.png" className="rounded shadow-md"/>
            <img src="/doc_image_5.png" className="rounded shadow-md"/>
          </div>
        </section>
        <section id="galeria" className="mb-6">
          <h2 className="text-2xl font-bold border-b-2 border-[#FF6600] mb-3">Galeria Completa</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {Array.from({length:15},(_,i)=>(<img key={i} src={`/doc_image_${i+1}.png`} alt={`Imagem ${i+1}`} className="rounded shadow-md"/>))}
          </div>
        </section>
        <section id="final" className="mb-6">
          <h2 className="text-2xl font-bold border-b-2 border-[#FF6600] mb-3">Finalização</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Anexar arquivos na pasta 'Análise Técnica' no eControl</li>
            <li>Aprovar para Desenho Técnico (IT-OPE_004)</li>
          </ul>
        </section>
      </main>
    </div>
    <footer className="mt-6 text-xs text-center text-[#003366]/70 p-3 bg-[#F5F5F5] border-t">© {new Date().getFullYear()} Engeselt — Uso interno.</footer>
  </div>)
}