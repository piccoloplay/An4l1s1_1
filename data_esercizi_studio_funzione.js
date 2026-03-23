// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_esercizi_studio_funzione.js',
    num:   'ESERCIZI',
    title: 'Esercizi sullo studio di funzione',
    sub:   'Polinomi · Razionali fratte · Con logaritmo · Con esponenziale · Studi completi'
  },

  sections: [

    // ── §01 ──────────────────────────────────────────────────────────
    {
      id:       's01',
      secNum:   '§01',
      navLabel: '§01 Polinomi',
      heading:  'Studio di funzioni polinomiali',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 1 — Polinomio di grado 3</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Studia $f(x) = x^3 - 3x$.</p></div>
    <div class="ex-sol">
      <div class="sl">// DOMINIO: R</div>
      <div class="sl">// SEGNO: f(x)=x(x²-3)=x(x-√3)(x+√3)=0 per x=0,±√3</div>
      <div class="sl">// f<0 per x∈(-∞,-√3)∪(0,√3), f>0 per x∈(-√3,0)∪(√3,+∞)</div>
      <div class="sl">// SIMMETRIE: f(-x)=-f(x) → dispari</div>
      <div class="sl">// LIMITI: lim_{x→±∞} f(x) = ±∞. Nessun asintoto.</div>
      <div class="sl">// DERIVATA PRIMA</div>
      $$f'(x) = 3x^2 - 3 = 3(x-1)(x+1)$$
      <div class="sl">// f'>0 per |x|>1 (crescente), f'<0 per |x|<1 (decrescente)</div>
      $$\\text{Max locale in } x=-1:\\; f(-1)=2 \\qquad \\text{Min locale in } x=1:\\; f(1)=-2$$
      <div class="sl">// DERIVATA SECONDA</div>
      $$f''(x) = 6x$$
      <div class="sl">// f''<0 per x<0 (concava), f''>0 per x>0 (convessa)</div>
      $$\\text{Flesso in } x=0:\\; f(0)=0$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 2 — Polinomio di grado 4</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Studia $f(x) = x^4 - 8x^2$.</p></div>
    <div class="ex-sol">
      <div class="sl">// DOMINIO: R. SIMMETRIE: f(-x)=f(x) → pari</div>
      <div class="sl">// SEGNO: f(x)=x²(x²-8)=0 per x=0,±2√2</div>
      <div class="sl">// f<0 per x∈(-2√2,0)∪(0,2√2), f>0 per |x|>2√2</div>
      <div class="sl">// LIMITI: +∞ per x→±∞. Nessun asintoto.</div>
      <div class="sl">// DERIVATA PRIMA</div>
      $$f'(x) = 4x^3 - 16x = 4x(x^2-4) = 4x(x-2)(x+2)$$
      <div class="sl">// f'=0 per x=0,±2. Segno: f'>0 per x∈(-2,0)∪(2,+∞)</div>
      $$\\text{Max locale in } x=0:\\; f(0)=0$$
      $$\\text{Min locale in } x=\\pm 2:\\; f(\\pm 2)=-16$$
      <div class="sl">// DERIVATA SECONDA</div>
      $$f''(x) = 12x^2 - 16$$
      <div class="sl">// f''=0 per x=±2/√3. f''>0 per |x|>2/√3 (convessa), f''<0 per |x|<2/√3 (concava)</div>
      $$\\text{Flessi in } x=\\pm\\frac{2}{\\sqrt{3}}:\\; f=\\left(-\\frac{80}{9}\\right)$$
    </div>
  </div>
</div>
</div>`
    },

    // ── §02 ──────────────────────────────────────────────────────────
    {
      id:       's02',
      secNum:   '§02',
      navLabel: '§02 Razionali fratte',
      heading:  'Funzioni razionali fratte',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 3 — Razionale con asintoto orizzontale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Studia $f(x) = \\dfrac{x}{x^2+1}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// DOMINIO: R (denominatore sempre >0)</div>
      <div class="sl">// SEGNO: f=0 per x=0. f>0 per x>0, f<0 per x<0</div>
      <div class="sl">// SIMMETRIE: f(-x)=-f(x) → dispari</div>
      <div class="sl">// ASINTOTI</div>
      $$\\lim_{x\\to\\pm\\infty}\\frac{x}{x^2+1} = 0 \\implies y=0 \\text{ asintoto orizzontale}$$
      <div class="sl">// DERIVATA PRIMA</div>
      $$f'(x) = \\frac{(x^2+1)-x\\cdot 2x}{(x^2+1)^2} = \\frac{1-x^2}{(x^2+1)^2}$$
      <div class="sl">// f'=0 per x=±1. f'>0 per |x|<1 (crescente), f'<0 per |x|>1 (decrescente)</div>
      $$\\text{Max in } x=1:\\; f(1)=\\tfrac{1}{2} \\qquad \\text{Min in } x=-1:\\; f(-1)=-\\tfrac{1}{2}$$
      <div class="sl">// DERIVATA SECONDA</div>
      $$f''(x) = \\frac{-2x(x^2+1)^2 - (1-x^2)\\cdot 2(x^2+1)\\cdot 2x}{(x^2+1)^4} = \\frac{2x(x^2-3)}{(x^2+1)^3}$$
      <div class="sl">// f''=0 per x=0,±√3. Flessi in x=0 e x=±√3</div>
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 4 — Razionale con asintoto obliquo</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Studia $f(x) = \\dfrac{x^2}{x-1}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// DOMINIO: R\{1}</div>
      <div class="sl">// SEGNO: f=0 per x=0. f>0 per x∈(-∞,0)∪(1,+∞), f<0 per x∈(0,1)</div>
      <div class="sl">// ASINTOTI</div>
      $$\\lim_{x\\to 1^\\pm}\\frac{x^2}{x-1} = \\pm\\infty \\implies x=1 \\text{ asintoto verticale}$$
      $$m = \\lim_{x\\to\\infty}\\frac{x^2}{x(x-1)} = 1, \\quad q = \\lim_{x\\to\\infty}\\left[\\frac{x^2}{x-1}-x\\right] = \\lim_{x\\to\\infty}\\frac{x}{x-1} = 1$$
      $$\\text{Asintoto obliquo: } y = x+1$$
      <div class="sl">// DERIVATA PRIMA</div>
      $$f'(x) = \\frac{2x(x-1)-x^2}{(x-1)^2} = \\frac{x^2-2x}{(x-1)^2} = \\frac{x(x-2)}{(x-1)^2}$$
      <div class="sl">// f'=0 per x=0,2. f'>0 per x∈(-∞,0)∪(2,+∞), f'<0 per x∈(0,1)∪(1,2)</div>
      $$\\text{Max in } x=0:\\; f(0)=0 \\qquad \\text{Min in } x=2:\\; f(2)=4$$
      <div class="sl">// DERIVATA SECONDA</div>
      $$f''(x) = \\frac{2}{(x-1)^3}$$
      <div class="sl">// f''>0 per x>1 (convessa), f''<0 per x<1 (concava). Nessun flesso.</div>
    </div>
  </div>
</div>
</div>`
    },

    // ── §03 ──────────────────────────────────────────────────────────
    {
      id:       's03',
      secNum:   '§03',
      navLabel: '§03 Con logaritmo',
      heading:  'Funzioni con logaritmo',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 5 — Funzione con $\\ln x$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Studia $f(x) = x\\ln x$.</p></div>
    <div class="ex-sol">
      <div class="sl">// DOMINIO: (0,+∞)</div>
      <div class="sl">// SEGNO: f=0 per x=1 (ln1=0). f<0 per x∈(0,1), f>0 per x>1</div>
      <div class="sl">// LIMITI AGLI ESTREMI</div>
      $$\\lim_{x\\to 0^+} x\\ln x = 0 \\quad (\\text{limite notevole}) \\implies \\text{prolungamento continuo in 0}$$
      $$\\lim_{x\\to+\\infty} x\\ln x = +\\infty$$
      <div class="sl">// Nessun asintoto. La funzione si estende per continuità in x=0 con valore 0.</div>
      <div class="sl">// DERIVATA PRIMA</div>
      $$f'(x) = \\ln x + x\\cdot\\frac{1}{x} = \\ln x + 1$$
      <div class="sl">// f'=0 per ln x = -1 → x = e^{-1} = 1/e</div>
      <div class="sl">// f'<0 per x∈(0,1/e) (decrescente), f'>0 per x>1/e (crescente)</div>
      $$\\text{Min in } x=\\tfrac{1}{e}:\\; f\\!\\left(\\tfrac{1}{e}\\right) = \\tfrac{1}{e}\\cdot(-1) = -\\tfrac{1}{e}$$
      <div class="sl">// DERIVATA SECONDA</div>
      $$f''(x) = \\frac{1}{x} > 0 \\quad \\forall\\, x > 0 \\implies \\text{convessa su tutto il dominio}$$
      <div class="sl">// Nessun flesso.</div>
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 6 — $\\ln$ con argomento razionale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Studia $f(x) = \\ln\\dfrac{x+1}{x-1}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// DOMINIO: (x+1)/(x-1) > 0 → x<-1 oppure x>1</div>
      $$D = (-\\infty,-1)\\cup(1,+\\infty)$$
      <div class="sl">// SIMMETRIE: f(-x) = ln((-x+1)/(-x-1)) = ln((x-1)/(x+1)) = -f(x) → dispari</div>
      <div class="sl">// ASINTOTI</div>
      $$\\lim_{x\\to 1^+}f(x) = +\\infty,\\; \\lim_{x\\to -1^-}f(x) = -\\infty \\implies x=\\pm 1 \\text{ asintoti verticali}$$
      $$\\lim_{x\\to\\pm\\infty}\\ln\\frac{x+1}{x-1} = \\ln 1 = 0 \\implies y=0 \\text{ asintoto orizzontale}$$
      <div class="sl">// DERIVATA PRIMA</div>
      $$f'(x) = \\frac{x-1}{x+1}\\cdot\\frac{(x-1)-(x+1)}{(x-1)^2} = \\frac{-2}{x^2-1}$$
      <div class="sl">// Per x>1: x²-1>0 → f'<0 (decrescente). Per x<-1: x²-1>0 → f'<0 (decrescente)</div>
      <div class="sl">// Nessun punto critico. f sempre decrescente su ciascun ramo.</div>
      <div class="sl">// DERIVATA SECONDA</div>
      $$f''(x) = \\frac{4x}{(x^2-1)^2}$$
      <div class="sl">// Per x>1: f''>0 (convessa). Per x<-1: f''<0 (concava). Nessun flesso nel dominio.</div>
    </div>
  </div>
</div>
</div>`
    },

    // ── §04 ──────────────────────────────────────────────────────────
    {
      id:       's04',
      secNum:   '§04',
      navLabel: '§04 Con esponenziale',
      heading:  'Funzioni con esponenziale',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 7 — Gaussiana</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Studia $f(x) = e^{-x^2}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// DOMINIO: R. SIMMETRIE: f(-x)=e^{-x²}=f(x) → pari</div>
      <div class="sl">// SEGNO: f(x)=e^{-x²}>0 sempre → grafico sempre sopra l'asse x</div>
      <div class="sl">// ASINTOTI</div>
      $$\\lim_{x\\to\\pm\\infty}e^{-x^2} = 0 \\implies y=0 \\text{ asintoto orizzontale}$$
      <div class="sl">// DERIVATA PRIMA</div>
      $$f'(x) = -2xe^{-x^2}$$
      <div class="sl">// f'=0 per x=0. f'>0 per x<0 (crescente), f'<0 per x>0 (decrescente)</div>
      $$\\text{Massimo assoluto in } x=0:\\; f(0)=1$$
      <div class="sl">// DERIVATA SECONDA</div>
      $$f''(x) = (-2+4x^2)e^{-x^2} = 2(2x^2-1)e^{-x^2}$$
      <div class="sl">// f''=0 per x=±1/√2. f''>0 per |x|>1/√2 (convessa), f''<0 per |x|<1/√2 (concava)</div>
      $$\\text{Flessi in } x=\\pm\\frac{1}{\\sqrt{2}}:\\; f=e^{-1/2}=\\frac{1}{\\sqrt{e}}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 8 — Esponenziale con polinomio</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Studia $f(x) = (x^2-2)e^x$.</p></div>
    <div class="ex-sol">
      <div class="sl">// DOMINIO: R. SEGNO: f=0 per x=±√2. f>0 per |x|>√2, f<0 per |x|<√2</div>
      <div class="sl">// ASINTOTI</div>
      $$\\lim_{x\\to+\\infty}(x^2-2)e^x = +\\infty, \\quad \\lim_{x\\to-\\infty}(x^2-2)e^x = 0 \\implies y=0 \\text{ asintoto orizzontale a sinistra}$$
      <div class="sl">// DERIVATA PRIMA</div>
      $$f'(x) = 2xe^x + (x^2-2)e^x = e^x(x^2+2x-2)$$
      <div class="sl">// f'=0: x²+2x-2=0 → x=-1±√3</div>
      $$x_1 = -1-\\sqrt{3}\\approx -2.73, \\quad x_2 = -1+\\sqrt{3}\\approx 0.73$$
      <div class="sl">// f'>0 per x<x₁ e x>x₂ (crescente), f'<0 per x₁<x<x₂ (decrescente)</div>
      $$\\text{Max locale in } x_1, \\quad \\text{min locale in } x_2$$
      <div class="sl">// DERIVATA SECONDA</div>
      $$f''(x) = e^x(x^2+4x) = xe^x(x+4)$$
      <div class="sl">// f''=0 per x=0 e x=-4. Flessi in x=0 e x=-4.</div>
    </div>
  </div>
</div>
</div>`
    },

    // ── §05 ──────────────────────────────────────────────────────────
    {
      id:       's05',
      secNum:   '§05',
      navLabel: '§05 Studi completi',
      heading:  'Studi completi avanzati',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 9 — Studio completo avanzato</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Studia $f(x) = \\dfrac{x^2-x+1}{x-1}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// DOMINIO: R\{1}</div>
      <div class="sl">// SEGNO: numeratore x²-x+1. Discriminante: 1-4=-3<0 → sempre >0</div>
      <div class="sl">// f>0 per x>1, f<0 per x<1</div>
      <div class="sl">// ASINTOTI</div>
      $$\\lim_{x\\to 1^\\pm}f(x) = \\pm\\infty \\implies x=1 \\text{ asintoto verticale}$$
      $$m=\\lim_{x\\to\\infty}\\frac{x^2-x+1}{x(x-1)}=1, \\quad q=\\lim_{x\\to\\infty}\\left[f(x)-x\\right]=\\lim_{x\\to\\infty}\\frac{1}{x-1}=0$$
      $$\\text{Asintoto obliquo: } y=x$$
      <div class="sl">// DERIVATA PRIMA</div>
      $$f'(x)=\\frac{(2x-1)(x-1)-(x^2-x+1)}{(x-1)^2}=\\frac{x^2-2x}{(x-1)^2}=\\frac{x(x-2)}{(x-1)^2}$$
      <div class="sl">// f'=0 per x=0,2. f'>0 per x∈(-∞,0)∪(2,+∞), f'<0 per x∈(0,1)∪(1,2)</div>
      $$\\text{Max in }x=0:\\;f(0)=-1 \\qquad \\text{Min in }x=2:\\;f(2)=3$$
      <div class="sl">// DERIVATA SECONDA</div>
      $$f''(x)=\\frac{2}{(x-1)^3}$$
      <div class="sl">// f''>0 per x>1 (convessa), f''<0 per x<1 (concava). Nessun flesso.</div>
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 10 — Studio con radice</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Studia $f(x) = x\\sqrt{1-x^2}$ (suggerimento: usa la sostituzione $x=\\sin\\theta$).</p></div>
    <div class="ex-sol">
      <div class="sl">// DOMINIO: 1-x²≥0 → |x|≤1, cioè [-1,1]</div>
      <div class="sl">// SEGNO: f=0 per x=0,±1. f>0 per x∈(0,1), f<0 per x∈(-1,0)</div>
      <div class="sl">// SIMMETRIE: f(-x)=-x√(1-x²)=-f(x) → dispari</div>
      <div class="sl">// LIMITI AGLI ESTREMI: f(±1)=0 (punti del dominio, non asintoti)</div>
      <div class="sl">// DERIVATA PRIMA</div>
      $$f'(x) = \\sqrt{1-x^2} + x\\cdot\\frac{-2x}{2\\sqrt{1-x^2}} = \\sqrt{1-x^2} - \\frac{x^2}{\\sqrt{1-x^2}} = \\frac{1-2x^2}{\\sqrt{1-x^2}}$$
      <div class="sl">// f'=0 per x=±1/√2. f'>0 per |x|<1/√2, f'<0 per 1/√2<|x|≤1</div>
      $$\\text{Max in }x=\\tfrac{1}{\\sqrt{2}}:\\;f=\\tfrac{1}{2} \\qquad \\text{Min in }x=-\\tfrac{1}{\\sqrt{2}}:\\;f=-\\tfrac{1}{2}$$
      <div class="sl">// Il grafico è la metà superiore e inferiore di un'ellisse: x²+(y/?)²=... in realtà è la sinusoide y=(1/2)sin(2θ)</div>
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
