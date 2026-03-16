// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_esercizi_limiti.js',
    num:   'ESERCIZI',
    title: 'Limiti di successioni<br>numeriche e di funzioni',
    sub:   'Esercizi svolti · difficoltà crescente'
  },

  sections: [

    // ── §01 ──────────────────────────────────────────────────────────
    {
      id:       's01',
      secNum:   '§01',
      navLabel: '§01 Limiti di successioni',
      heading:  'Limiti di successioni numeriche',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 1 — Raccoglimento semplice</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty} \\frac{n+3}{n}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Raccogli n al numeratore</div>
      $$\\frac{n+3}{n} = 1 + \\frac{3}{n} \\xrightarrow{n\\to\\infty} 1 + 0 = 1$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 2 — Polinomi stesso grado</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty} \\frac{3n^2 + 5n - 1}{2n^2 - 7}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Dividi numeratore e denominatore per n²</div>
      $$\\frac{3n^2+5n-1}{2n^2-7} = \\frac{3 + 5/n - 1/n^2}{2 - 7/n^2} \\to \\frac{3}{2}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 3 — Numeratore domina</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty} \\frac{n^3 - 2n}{4n^2 + 1}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Dividi per n² (grado del denominatore)</div>
      $$\\frac{n^3-2n}{4n^2+1} = \\frac{n - 2/n}{4 + 1/n^2} \\to \\frac{+\\infty}{4} = +\\infty$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 4 — Denominatore domina</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty} \\frac{5n^2 - 3}{n^4 + 2n}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Dividi per n⁴</div>
      $$\\frac{5n^2-3}{n^4+2n} = \\frac{5/n^2 - 3/n^4}{1 + 2/n^3} \\to \\frac{0}{1} = 0$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 5 — Successioni geometriche in competizione</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty} \\frac{3^n + 2^n}{3^n - 1}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Dividi per 3^n (termine dominante)</div>
      $$\\frac{3^n+2^n}{3^n-1} = \\frac{1 + (2/3)^n}{1 - (1/3)^n} \\to \\frac{1+0}{1-0} = 1$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 6 — Teorema dei carabinieri</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty} \\frac{\\cos(n^2)}{n}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// |cos(n²)| ≤ 1 per ogni n</div>
      $$-\\frac{1}{n} \\leq \\frac{\\cos(n^2)}{n} \\leq \\frac{1}{n} \\xrightarrow{n\\to\\infty} 0$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 7 — Forma $\\infty - \\infty$: coniugato</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty} \\left(\\sqrt{n^2+n} - n\\right)$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Moltiplica per il coniugato (√(n²+n) + n) / (√(n²+n) + n)</div>
      $$\\sqrt{n^2+n}-n = \\frac{n^2+n-n^2}{\\sqrt{n^2+n}+n} = \\frac{n}{\\sqrt{n^2+n}+n}$$
      <div class="sl">// Dividi numeratore e denominatore per n</div>
      $$= \\frac{1}{\\sqrt{1+1/n}+1} \\to \\frac{1}{1+1} = \\frac{1}{2}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 8 — Limite notevole $(1+1/n)^n$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty} \\left(1 + \\frac{2}{n}\\right)^n$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Riscrivi esponendo il limite notevole</div>
      $$\\left(1+\\frac{2}{n}\\right)^n = \\left[\\left(1+\\frac{1}{n/2}\\right)^{n/2}\\right]^2 \\to e^2$$
    </div>
  </div>
</div>
</div>`
    },

    
    // ── §02 ──────────────────────────────────────────────────────────
    {
      id:       's02',
      secNum:   '§02',
      navLabel: '§02 Limiti di funzioni',
      heading:  'Limiti di funzioni',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 9 — Forma $0/0$ con fattorizzazione</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to 2}\\frac{x^2 - 4}{x - 2}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Forma 0/0. Fattorizza il numeratore</div>
      $$\\frac{x^2-4}{x-2} = \\frac{(x-2)(x+2)}{x-2} = x+2 \\xrightarrow{x\\to 2} 4$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 10 — Forma $0/0$ con coniugato</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to 0}\\frac{\\sqrt{1+x}-1}{x}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Moltiplica per il coniugato</div>
      $$\\frac{\\sqrt{1+x}-1}{x} \\cdot \\frac{\\sqrt{1+x}+1}{\\sqrt{1+x}+1} = \\frac{(1+x)-1}{x(\\sqrt{1+x}+1)} = \\frac{1}{\\sqrt{1+x}+1} \\to \\frac{1}{2}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 11 — Limite notevole $\\sin x / x$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to 0}\\frac{\\sin(3x)}{x}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Riconduce al limite notevole sin(t)/t → 1 con t = 3x</div>
      $$\\frac{\\sin(3x)}{x} = 3\\cdot\\frac{\\sin(3x)}{3x} \\to 3 \\cdot 1 = 3$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 12 — Limite notevole con $1-\\cos x$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to 0}\\frac{1-\\cos x}{x^2}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Limite notevole: (1-cos x)/x² → 1/2</div>
      $$\\frac{1-\\cos x}{x^2} \\to \\frac{1}{2}$$
      <div class="sl">// Si dimostra con Taylor: cos x = 1 - x²/2 + o(x²), quindi 1-cos x = x²/2 + o(x²)</div>
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 13 — Limite all'infinito di funzione razionale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to+\\infty}\\frac{2x^3 - x + 5}{x^3 + 4x^2}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Dividi numeratore e denominatore per x³</div>
      $$\\frac{2x^3-x+5}{x^3+4x^2} = \\frac{2 - 1/x^2 + 5/x^3}{1 + 4/x} \\to \\frac{2}{1} = 2$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 14 — Limite con $\\ln$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to 0^+} x\\ln x$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Forma 0·(-∞). Riscrivi come rapporto e applica L'Hospital</div>
      $$x\\ln x = \\frac{\\ln x}{1/x} \\xrightarrow{\\text{L'H}} \\frac{1/x}{-1/x^2} = \\frac{-x^2}{x} = -x \\to 0$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 15 — Limite con $e^x$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to+\\infty}\\frac{e^x}{x^2}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Forma ∞/∞. L'Hospital due volte</div>
      $$\\frac{e^x}{x^2} \\xrightarrow{\\text{L'H}} \\frac{e^x}{2x} \\xrightarrow{\\text{L'H}} \\frac{e^x}{2} \\to +\\infty$$
      <div class="sl">// L'esponenziale domina qualsiasi potenza</div>
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
