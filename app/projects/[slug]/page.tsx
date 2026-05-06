import { notFound } from 'next/navigation';
import { ExternalLink } from 'lucide-react';
import { portfolio } from '@/config/portfolio.config';
import { Button } from '@/components/ui/button';

export function generateStaticParams(){ return portfolio.projects.map(p=>({slug:p.slug})); }
export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }){
 const { slug } = await params;
 const p=portfolio.projects.find(x=>x.slug===slug); if(!p) notFound();
 return <article><p className="text-sm text-muted">{p.difficulty} / {p.status}</p><h1 className="mt-2 text-4xl font-semibold tracking-[-.03em]">{p.title}</h1><p className="mt-4 max-w-3xl text-xl leading-8 text-secondary">{p.solution}</p><div className="mt-6 flex gap-3"><Button asChild><a href={p.demoUrl} target="_blank">Live demo <ExternalLink size={16}/></a></Button><Button asChild variant="outline"><a href={p.githubUrl} target="_blank">GitHub</a></Button></div><div className="mt-10 grid gap-5 md:grid-cols-[.7fr_1.3fr]"><aside className="rounded-3xl border border-line bg-card p-5"><h2 className="font-medium">Stack</h2><div className="mt-3 flex flex-wrap gap-2">{p.stack.map(s=><span key={s} className="rounded-lg border border-line px-2 py-1 text-xs text-secondary">{s}</span>)}</div><h2 className="mt-6 font-medium">Role</h2><p className="mt-2 text-sm leading-6 text-secondary">{p.role}</p><h2 className="mt-6 font-medium">Impact</h2><p className="mt-2 text-sm leading-6 text-success">{p.impact}</p></aside><section className="space-y-5"><Block title="Overview">{p.problem}</Block><Block title="Problem">{p.problem}</Block><Block title="Process"><List items={p.process}/></Block><Block title="Solution">{p.solution}</Block><Block title="Technical Decisions"><List items={p.decisions}/></Block><Block title="Screenshots placeholder"><div className="grid gap-3 md:grid-cols-3">{p.screenshots.map(s=><div key={s} className="grid aspect-[4/3] place-items-center rounded-2xl border border-line bg-white/[.03] text-sm text-muted">{s}</div>)}</div></Block></section></div></article>;
}
function Block({title,children}:{title:string;children:React.ReactNode}){return <section className="rounded-3xl border border-line bg-card p-5"><h2 className="text-xl font-semibold">{title}</h2><div className="mt-3 leading-7 text-secondary">{children}</div></section>}
function List({items}:{items:string[]}){return <ul className="space-y-2">{items.map(i=><li key={i}>• {i}</li>)}</ul>}
