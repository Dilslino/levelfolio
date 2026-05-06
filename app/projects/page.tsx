import { ProjectUnlockCard } from '@/components/sections';
import { portfolio } from '@/config/portfolio.config';
export default function ProjectsPage(){return <section><p className="text-sm text-muted">Unlocked chapters</p><h1 className="mt-2 text-4xl font-semibold tracking-[-.03em]">Projects</h1><p className="mt-4 max-w-2xl text-secondary">Empat studi kasus yang menunjukkan cara berpikir: masalah dulu, interface kemudian, dampak selalu diukur.</p><div className="mt-8 grid gap-4 md:grid-cols-2">{portfolio.projects.map(p=><ProjectUnlockCard key={p.slug} project={p}/>)}</div></section>}
