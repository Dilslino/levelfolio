import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
export function Button({ className, asChild=false, variant='primary', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean; variant?: 'primary'|'ghost'|'outline' }) {
 const Comp = asChild ? Slot : 'button';
 return <Comp className={cn('focus-ring inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition disabled:opacity-50', variant==='primary' && 'bg-primary text-background hover:bg-white', variant==='ghost' && 'text-secondary hover:bg-white/5 hover:text-primary', variant==='outline' && 'border border-line bg-white/[.02] text-primary hover:bg-white/[.05]', className)} {...props} />;
}
