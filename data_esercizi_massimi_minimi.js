// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_esercizi_massimi_minimi.js',
    num:   'ESERCIZI',
    title: 'Esercizi su massimi e minimi',
    sub:   'Punti stazionari · Classificazione · Massimi e minimi assoluti · Ottimizzazione'
  },

  sections: [

    {
      id: 's01', secNum: '§01', navLabel: '§01 Punti stazionari e classificazione',
      heading: 'Trovare e classificare i punti stazionari',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 1 — Polinomio di grado 3</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova e classifica i punti stazionari di $f(x) = 2x^3 - 9x^2 + 12x - 3$.</p></div>
    <div class="ex-sol">
      $$f'(x) = 6x^2-18x+12 = 6(x^2-3x+2) = 6(x-1)(x-2)$$
      $$f''(x) = 12x-18$$
      $$f''(1) = -6 < 0 \\implies x=1 \\text{ massimo locale},\\ f(1)=2$$
      $$f''(2) = 6 > 0 \\implies x=2 \\text{ minimo locale},\\ f(2)=1$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 2 — Criterio II non decide</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova e classifica i punti stazionari di $f(x) = x^5 - 5x^4$.</p></div>
    <div class="ex-sol">
      $$f'(x) = 5x^4-20x^3 = 5x^3(x-4)$$
      <div class="sl">// f'=0 per x=0 (triplo) e x=4</div>
      $$f''(x) = 20x^3-60x^2 = 20x^2(x-3)$$
      $$f''(0)=0 \\implies \\text{criterio non decide}$$
      <div class="sl">// Segno di f'=5x³(x-4): per x<0 f'<0, per 0<x<4 f'<0, per x>4 f'>0</div>
      <div class="sl">// In x=0: f' non cambia segno (rimane ≤0) → flesso a tangente orizzontale</div>
      $$f''(4) = 20\\cdot 16\\cdot 1 = 320 > 0 \\implies x=4 \\text{ minimo locale},\\ f(4)=-256$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 3 — Con esponenziale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova e classifica i punti stazionari di $f(x) = (x^2-2)e^x$.</p></div>
    <div class="ex-sol">
      $$f'(x) = 2xe^x+(x^2-2)e^x = e^x(x^2+2x-2)$$
      <div class="sl">// e^x>0 sempre. f'=0 ↔ x²+2x-2=0 → x=-1±√3</div>
      $$x_1=-1-\\sqrt{3}\\approx -2.73,\\quad x_2=-1+\\sqrt{3}\\approx 0.73$$
      $$f''(x) = e^x(x^2+4x) = xe^x(x+4)$$
      $$f''(x_1): x_1<0 \\text{ e } x_1+4>0 \\implies f''(x_1)<0 \\implies \\text{massimo locale}$$
      $$f''(x_2): x_2>0 \\text{ e } x_2+4>0 \\implies f''(x_2)>0 \\implies \\text{minimo locale}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 4 — Con logaritmo</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova e classifica i punti stazionari di $f(x) = x - \\ln x$ (per $x>0$).</p></div>
    <div class="ex-sol">
      $$f'(x) = 1-\\frac{1}{x} = \\frac{x-1}{x}$$
      <div class="sl">// f'=0 per x=1. Per x∈(0,1): f'<0. Per x>1: f'>0 → minimo</div>
      $$f''(x) = \\frac{1}{x^2} > 0 \\implies f''(1) = 1 > 0 \\implies \\text{minimo locale},\\ f(1)=1$$
    </div>
  </div>
</div>
</div>`
    },

    {
      id: 's02', secNum: '§02', navLabel: '§02 Massimi e minimi assoluti',
      heading: 'Massimi e minimi assoluti su intervalli chiusi',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 5 — Polinomio su intervallo chiuso</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova max e min assoluti di $f(x)=x^3-3x$ su $[-2,3]$.</p></div>
    <div class="ex-sol">
      $$f'(x)=3x^2-3=3(x-1)(x+1)=0 \\implies x=\\pm 1$$
      <div class="sl">// Valuta f nei punti critici e agli estremi:</div>
      $$f(-2)=-2,\\ f(-1)=2,\\ f(1)=-2,\\ f(3)=18$$
      $$\\text{Max assoluto: } 18 \\text{ in }x=3 \\qquad \\text{Min assoluto: } -2 \\text{ in }x=-2 \\text{ e }x=1$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 6 — Funzione trigonometrica</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova max e min assoluti di $f(x)=\\sin x + \\cos x$ su $[0, 2\\pi]$.</p></div>
    <div class="ex-sol">
      $$f'(x) = \\cos x - \\sin x = 0 \\implies \\tan x = 1 \\implies x=\\frac{\\pi}{4},\\ x=\\frac{5\\pi}{4}$$
      $$f(0)=1,\\ f\\!\\left(\\frac{\\pi}{4}\\right)=\\sqrt{2},\\ f\\!\\left(\\frac{5\\pi}{4}\\right)=-\\sqrt{2},\\ f(2\\pi)=1$$
      $$\\text{Max assoluto: }\\sqrt{2}\\text{ in }x=\\pi/4 \\qquad \\text{Min assoluto: }-\\sqrt{2}\\text{ in }x=5\\pi/4$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 7 — Funzione con radice</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova max e min assoluti di $f(x)=x\\sqrt{4-x^2}$ su $[-2,2]$.</p></div>
    <div class="ex-sol">
      $$f'(x) = \\sqrt{4-x^2}+x\\cdot\\frac{-2x}{2\\sqrt{4-x^2}} = \\frac{4-2x^2}{\\sqrt{4-x^2}} = \\frac{2(2-x^2)}{\\sqrt{4-x^2}}$$
      <div class="sl">// f'=0 per x²=2 → x=±√2 ∈ (-2,2)</div>
      $$f(-2)=0,\\ f(-\\sqrt{2})=-2,\\ f(\\sqrt{2})=2,\\ f(2)=0$$
      $$\\text{Max assoluto: }2\\text{ in }x=\\sqrt{2} \\qquad \\text{Min assoluto: }-2\\text{ in }x=-\\sqrt{2}$$
    </div>
  </div>
</div>
</div>`
    },

    {
      id: 's03', secNum: '§03', navLabel: '§03 Ottimizzazione',
      heading: 'Problemi di ottimizzazione',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 8 — Cilindro inscritto in una sfera</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova il cilindro di volume massimo inscritto in una sfera di raggio $R=1$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Raggio cilindro r, metà altezza h: r²+h²=1 → r²=1-h²</div>
      $$V = \\pi r^2 \\cdot 2h = 2\\pi h(1-h^2) = 2\\pi(h-h^3), \\quad h\\in(0,1)$$
      $$V'(h) = 2\\pi(1-3h^2)=0 \\implies h=\\frac{1}{\\sqrt{3}}$$
      $$r^2 = 1-\\frac{1}{3}=\\frac{2}{3} \\implies r=\\sqrt{\\frac{2}{3}}$$
      $$V_{\\max} = 2\\pi\\cdot\\frac{1}{\\sqrt{3}}\\cdot\\frac{2}{3} = \\frac{4\\pi}{3\\sqrt{3}}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 9 — Recinzione con muro</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Si vuole recintare un'area rettangolare usando un muro esistente come lato. Si dispone di $60$ m di rete. Trova le dimensioni che massimizzano l'area.</p></div>
    <div class="ex-sol">
      <div class="sl">// Il muro fa da un lato lungo. I lati da recintare: 2 lati corti x e 1 lato lungo y</div>
      $$2x+y=60 \\implies y=60-2x$$
      $$A(x) = xy = x(60-2x) = 60x-2x^2,\\quad x\\in(0,30)$$
      $$A'(x)=60-4x=0 \\implies x=15,\\ y=30$$
      $$A_{\\max} = 15\\cdot 30 = 450\\ \\text{m}^2$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 10 — Costo minimo</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Un contenitore cilindrico senza coperchio deve avere volume $V=\\pi$ litri. Il costo del materiale è proporzionale alla superficie. Trova le dimensioni che minimizzano il costo.</p></div>
    <div class="ex-sol">
      <div class="sl">// Volume: πr²h=π → h=1/r². Superficie (base + mantello):</div>
      $$S(r) = \\pi r^2 + 2\\pi r h = \\pi r^2 + \\frac{2\\pi}{r}$$
      $$S'(r) = 2\\pi r - \\frac{2\\pi}{r^2} = 0 \\implies r^3=1 \\implies r=1$$
      $$h = \\frac{1}{r^2} = 1 \\implies h=r=1$$
      <div class="sl">// Il cilindro ottimale ha h=r: l'altezza è uguale al raggio</div>
    </div>
  </div>
</div>
</div>`
    }

  ],

  disclaimer: `
<div class="fade" style="margin-top:4rem;padding:1.2rem 1.4rem;border:2px solid #aaa;background:#f9f9f6;font-size:.82rem;color:var(--ink-soft);line-height:1.7;">
  <div style="font-family:'Fira Code',monospace;font-size:.63rem;font-weight:600;letter-spacing:.12em;margin-bottom:.4rem;color:#aaa;">DISCLAIMER</div>
  <p>Questo materiale è stato elaborato e distribuito a titolo integrativo e gratuito dal docente, a supporto della didattica curricolare. Non costituisce adozione ufficiale né sostituisce i testi in adozione. Le formule, le definizioni e gli esempi sono di dominio pubblico scientifico. Il docente declina ogni responsabilità per eventuali imprecisioni. La riproduzione parziale è consentita per uso didattico non commerciale con citazione della fonte. © 2026 — uso interno scolastico.</p>
</div>`
};
