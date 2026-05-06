'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { Search } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { portfolio } from '@/config/portfolio.config';

export function CommandPalette(){
 const [open,setOpen]=useState(false); const [q,setQ]=useState(''); const router=useRouter();
 useEffect(()=>{ const on=(e:KeyboardEvent)=>{ if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();setOpen(v=>!v)} }; window.addEventListener('keydown',on); return()=>window.removeEventListener('keydown',on);},[]);
 const items=useMemo(()=>[
  ...portfolio.projects.map(p=>({type:'Project',label:p.title,href:`/projects/${p.slug}`})),
  ...portfolio.skills.flatMap(c=>c.skills.map(s=>({type:'Skill',label:s.name,href:'/#skills'}))),
  ...portfolio.experience.map(e=>({type:'Experience',label:`${e.role} — ${e.company}`,href:'/experience'})),
  {type:'Resume',label:'Ringkasan rekruter',href:'/resume'}, {type:'Contact',label:'Hubungi xdil',href:'/contact'}
 ],[]);
 const filtered=items.filter(i=>(i.label+i.type).toLowerCase().includes(q.toLowerCase())).slice(0,8);
 function go(href:string){ setOpen(false); setQ(''); router.push(href); }
 return <Dialog.Root open={open} onOpenChange={setOpen}><Dialog.Portal><Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"/><Dialog.Content className="fixed left-1/2 top-20 z-50 w-[92vw] max-w-2xl -translate-x-1/2 overflow-hidden rounded-2xl border border-line bg-elevated shadow-soft"><Dialog.Title className="sr-only">Command palette</Dialog.Title><div className="flex items-center gap-3 border-b border-line px-4 py-3"><Search size={18} className="text-muted"/><input autoFocus value={q} onChange={e=>setQ(e.target.value)} placeholder="Cari proyek, skill, pengalaman..." className="w-full bg-transparent text-sm outline-none placeholder:text-muted"/></div><div className="p-2">{filtered.map(i=><button key={i.type+i.label} onClick={()=>go(i.href)} className="focus-ring flex w-full items-center justify-between rounded-xl px-3 py-3 text-left hover:bg-white/5"><span>{i.label}</span><span className="text-xs text-muted">{i.type}</span></button>)}{filtered.length===0&&<p className="px-3 py-8 text-center text-sm text-muted">Tidak ada hasil yang cocok.</p>}</div></Dialog.Content></Dialog.Portal></Dialog.Root>;
}
