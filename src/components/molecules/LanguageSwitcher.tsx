"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { flagIcons } from '../../flagIcons';

const LANGUAGES = [
  { code: 'al' as const, short: 'AL', flag: flagIcons.al },
  { code: 'en' as const, short: 'EN', flag: flagIcons.en },
  { code: 'de' as const, short: 'DE', flag: flagIcons.de },
];

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  const active = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  return (
    <div ref={ref} className="relative select-none">
      <button
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#DEC984]/40 bg-black/30 hover:bg-[#DEC984]/10 transition-all shadow-sm"
        onClick={() => setOpen(v => !v)}
        aria-label="Change language"
        type="button"
      >
        <span className="w-5 h-3.5 flex items-center justify-center">{active.flag}</span>
        <span className="text-xs font-bold text-[#DEC984] tracking-widest">{active.short}</span>
        <svg className={`ml-1 w-3 h-3 text-[#DEC984] transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 min-w-[150px] bg-[#181818] border border-[#DEC984]/30 rounded-xl shadow-xl z-50 py-2">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => { setLanguage(lang.code); setOpen(false); }}
              className={`flex items-center w-full gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all text-left ${
                language === lang.code
                  ? 'bg-[#DEC984]/20 text-[#DEC984] font-bold'
                  : 'hover:bg-[#DEC984]/10 text-white/90'
              }`}
              type="button"
            >
              <span className="w-5 h-3.5 flex items-center justify-center">{lang.flag}</span>
              <span>{lang.short}</span>
              {language === lang.code && (
                <svg className="ml-auto w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;