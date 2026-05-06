'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
export function ThemeToggle(){ const { theme, setTheme } = useTheme(); const light = theme === 'light'; return <Button variant="ghost" aria-label="Ganti tema" onClick={()=>setTheme(light?'dark':'light')} className="px-3">{light ? <Moon size={18}/> : <Sun size={18}/>}</Button>; }
