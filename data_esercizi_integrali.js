// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_esercizi_integrali.js',
    num:   'ESERCIZI',
    title: 'Esercizi sugli integrali',
    sub:   'Integrali immediati · Sostituzione · Per parti · Razionali fratte · Integrali definiti · Aree'
  },

  sections: [

    // ── §01 ──────────────────────────────────────────────────────────
    {
      id:       's01',
      secNum:   '§01',
      navLabel: '§01 Integrali immediati',
      heading:  'Integrali immediati e linearità',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 1 — Polinomio</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\int (5x^4 - 3x^2 + 2x - 7)\\,dx$.</p></div>
    <div class="ex-sol">
      $$x^5 - x^3 + x^2 - 7x + c$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 2 — Potenze e radici</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\int \\left(\\sqrt{x} + \\dfrac{1}{x^2} - \\dfrac{3}{x}\\right)dx$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Riscrivi come potenze: x^(1/2) + x^(-2) - 3x^(-1)</div>
      $$\\frac{2}{3}x^{3/2} - \\frac{1}{x} - 3\\ln|x| + c$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 3 — Funzioni trigonometriche ed esponenziali</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\int (3\\sin x - 2\\cos x + e^x)\\,dx$.</p></div>
    <div class="ex-sol">
      $$-3\\cos x - 2\\sin x + e^x + c$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 4 — Immediato composto</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\int \\dfrac{\\cos x}{\\sin^2 x}\\,dx$.</p></div>
    <div class="ex-sol">
      <div class="sl">// cos x è la derivata di sin x. Poni t=sin x, dt=cos x dx</div>
      $$\\int\\frac{\\cos x}{\\sin^2 x}\\,dx = \\int t^{-2}\\,dt = -\\frac{1}{t} + c = -\\frac{1}{\\sin x} + c$$
    </div>
  </div>
</div>
</div>`
    },

    // ── §02 ──────────────────────────────────────────────────────────
    {
      id:       's02',
      secNum:   '§02',
      navLabel: '§02 Integrazione per sostituzione',
      heading:  'Integrazione per sostituzione',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 5 — Sostituzione lineare</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\int (2x+3)^5\\,dx$.</p></div>
    <div class="ex-sol">
      <div class="sl">// t=2x+3, dt=2dx → dx=dt/2</div>
      $$\\int(2x+3)^5\\,dx = \\frac{1}{2}\\int t^5\\,dt = \\frac{t^6}{12}+c = \\frac{(2x+3)^6}{12}+c$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 6 — Sostituzione con esponenziale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\int x^2 e^{x^3}\\,dx$.</p></div>
    <div class="ex-sol">
      <div class="sl">// t=x³, dt=3x²dx → x²dx=dt/3</div>
      $$\\int x^2 e^{x^3}\\,dx = \\frac{1}{3}\\int e^t\\,dt = \\frac{e^{x^3}}{3}+c$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 7 — Sostituzione con radice</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\int \\dfrac{e^{\\sqrt{x}}}{\\sqrt{x}}\\,dx$.</p></div>
    <div class="ex-sol">
      <div class="sl">// t=√x, dt=dx/(2√x) → dx/√x = 2dt</div>
      $$\\int\\frac{e^{\\sqrt{x}}}{\\sqrt{x}}\\,dx = 2\\int e^t\\,dt = 2e^{\\sqrt{x}}+c$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 8 — Sostituzione con arcotangente</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\int \\dfrac{1}{4+x^2}\\,dx$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Raccogli: 1/(4+x²) = (1/4)·1/(1+(x/2)²). Poni t=x/2, dt=dx/2</div>
      $$\\int\\frac{1}{4+x^2}\\,dx = \\frac{1}{2}\\int\\frac{1}{1+t^2}\\,dt = \\frac{1}{2}\\arctan\\frac{x}{2}+c$$
    </div>
  </div>
</div>
</div>`
    },

    // ── §03 ──────────────────────────────────────────────────────────
    {
      id:       's03',
      secNum:   '§03',
      navLabel: '§03 Integrazione per parti',
      heading:  'Integrazione per parti',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 9 — Polinomio per coseno</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\int x\\cos x\\,dx$.</p></div>
    <div class="ex-sol">
      <div class="sl">// f=x (f'=1), g'=cos x (g=sin x)</div>
      $$\\int x\\cos x\\,dx = x\\sin x - \\int\\sin x\\,dx = x\\sin x + \\cos x + c$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 10 — Logaritmo</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\int x^2\\ln x\\,dx$.</p></div>
    <div class="ex-sol">
      <div class="sl">// f=ln x (f'=1/x), g'=x² (g=x³/3)</div>
      $$\\int x^2\\ln x\\,dx = \\frac{x^3}{3}\\ln x - \\int\\frac{x^3}{3}\\cdot\\frac{1}{x}\\,dx = \\frac{x^3}{3}\\ln x - \\frac{x^3}{9}+c$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 11 — Parti con ritorno all'integrale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\int e^x\\sin x\\,dx$.</p></div>
    <div class="ex-sol">
      <div class="sl">// f=sin x, g'=e^x → g=e^x. Prima applicazione:</div>
      $$I = e^x\\sin x - \\int e^x\\cos x\\,dx$$
      <div class="sl">// Seconda applicazione con f=cos x, g'=e^x:</div>
      $$I = e^x\\sin x - \\left(e^x\\cos x + \\int e^x\\sin x\\,dx\\right) = e^x\\sin x - e^x\\cos x - I$$
      $$2I = e^x(\\sin x - \\cos x) \\implies I = \\frac{e^x(\\sin x-\\cos x)}{2}+c$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 12 — Arcotangente</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\int \\arctan x\\,dx$.</p></div>
    <div class="ex-sol">
      <div class="sl">// f=arctan x (f'=1/(1+x²)), g'=1 (g=x)</div>
      $$\\int\\arctan x\\,dx = x\\arctan x - \\int\\frac{x}{1+x^2}\\,dx = x\\arctan x - \\frac{1}{2}\\ln(1+x^2)+c$$
    </div>
  </div>
</div>
</div>`
    },

    // ── §04 ──────────────────────────────────────────────────────────
    {
      id:       's04',
      secNum:   '§04',
      navLabel: '§04 Integrali definiti',
      heading:  'Integrali definiti',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 13 — Integrale definito di polinomio</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\int_{-1}^{2}(x^2 - x)\\,dx$.</p></div>
    <div class="ex-sol">
      $$\\left[\\frac{x^3}{3}-\\frac{x^2}{2}\\right]_{-1}^{2} = \\left(\\frac{8}{3}-2\\right)-\\left(-\\frac{1}{3}-\\frac{1}{2}\\right) = \\frac{2}{3}+\\frac{5}{6} = \\frac{3}{2}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 14 — Integrale definito con sostituzione</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\int_0^1 xe^{x^2}\\,dx$.</p></div>
    <div class="ex-sol">
      <div class="sl">// t=x², dt=2x dx. Estremi: x=0→t=0, x=1→t=1</div>
      $$\\int_0^1 xe^{x^2}\\,dx = \\frac{1}{2}\\int_0^1 e^t\\,dt = \\frac{1}{2}\\Big[e^t\\Big]_0^1 = \\frac{e-1}{2}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 15 — Integrale definito per parti</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\int_1^e \\ln x\\,dx$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Per parti: f=ln x, g'=1 → g=x</div>
      $$\\int_1^e\\ln x\\,dx = \\Big[x\\ln x - x\\Big]_1^e = (e-e)-(1\\cdot 0-1) = 0+1 = 1$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 16 — Integrale con funzione di arctan</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\int_0^1 \\dfrac{1}{1+x^2}\\,dx$.</p></div>
    <div class="ex-sol">
      $$\\Big[\\arctan x\\Big]_0^1 = \\arctan 1 - \\arctan 0 = \\frac{\\pi}{4} - 0 = \\frac{\\pi}{4}$$
    </div>
  </div>
</div>
</div>`
    },

    // ── §05 ──────────────────────────────────────────────────────────
    {
      id:       's05',
      secNum:   '§05',
      navLabel: '§05 Calcolo di aree',
      heading:  'Calcolo di aree con integrali definiti',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 17 — Area tra parabola e retta</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola l'area della regione compresa tra $y = x^2$ e $y = 2x$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Intersezioni: x²=2x → x(x-2)=0 → x=0,2. Su [0,2]: 2x≥x²</div>
      $$A = \\int_0^2(2x-x^2)\\,dx = \\left[x^2-\\frac{x^3}{3}\\right]_0^2 = 4-\\frac{8}{3} = \\frac{4}{3}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 18 — Area tra sinusoide e asse $x$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola l'area della regione compresa tra $y = \\sin x$ e l'asse $x$ per $x \\in [0, 2\\pi]$.</p></div>
    <div class="ex-sol">
      <div class="sl">// sin x ≥ 0 su [0,π], sin x ≤ 0 su [π,2π]</div>
      $$A = \\int_0^{\\pi}\\sin x\\,dx + \\int_{\\pi}^{2\\pi}(-\\sin x)\\,dx$$
      $$= \\Big[-\\cos x\\Big]_0^{\\pi} + \\Big[\\cos x\\Big]_{\\pi}^{2\\pi} = 2 + 2 = 4$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 19 — Area tra parabola e retta obliqua</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola l'area compresa tra $y = x^2 - 2x$ e $y = x$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Intersezioni: x²-2x=x → x²-3x=0 → x(x-3)=0 → x=0,3</div>
      <div class="sl">// Su [0,3]: x ≥ x²-2x (verifica: in x=1, 1 > -1 ✓)</div>
      $$A = \\int_0^3[x-(x^2-2x)]\\,dx = \\int_0^3(3x-x^2)\\,dx = \\left[\\frac{3x^2}{2}-\\frac{x^3}{3}\\right]_0^3 = \\frac{27}{2}-9 = \\frac{9}{2}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 20 — Valor medio e teorema della media</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova il valor medio di $f(x) = \\sin x$ su $[0,\\pi]$ e il punto $c$ in cui viene assunto.</p></div>
    <div class="ex-sol">
      $$\\bar{f} = \\frac{1}{\\pi}\\int_0^{\\pi}\\sin x\\,dx = \\frac{1}{\\pi}\\Big[-\\cos x\\Big]_0^{\\pi} = \\frac{1}{\\pi}(1+1) = \\frac{2}{\\pi}$$
      <div class="sl">// Trova c: sin c = 2/π → c = arcsin(2/π) ≈ 0.69 rad ∈ (0,π) ✓</div>
      $$c = \\arcsin\\frac{2}{\\pi} \\approx 0.69 \\text{ rad}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 21 — Integrale con frazioni parziali</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\int_2^3 \\dfrac{1}{x^2-1}\\,dx$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Frazioni parziali (già calcolate in LEZIONE 09): 1/(x²-1) = (1/2)[1/(x-1)-1/(x+1)]</div>
      $$\\int_2^3\\frac{1}{x^2-1}\\,dx = \\frac{1}{2}\\Big[\\ln|x-1|-\\ln|x+1|\\Big]_2^3 = \\frac{1}{2}\\left[\\ln\\frac{x-1}{x+1}\\right]_2^3$$
      $$= \\frac{1}{2}\\left(\\ln\\frac{2}{4}-\\ln\\frac{1}{3}\\right) = \\frac{1}{2}\\left(\\ln\\frac{1}{2}+\\ln 3\\right) = \\frac{1}{2}\\ln\\frac{3}{2}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 22 — Area di una regione con tre curve</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola l'area della regione delimitata da $y=e^x$, $y=1$ e $x=2$.</p></div>
    <div class="ex-sol">
      <div class="sl">// e^x ≥ 1 per x ≥ 0. La regione è tra x=0 (dove e^x=1) e x=2</div>
      $$A = \\int_0^2(e^x-1)\\,dx = \\Big[e^x-x\\Big]_0^2 = (e^2-2)-(1-0) = e^2-3$$
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
