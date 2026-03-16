// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_esercizi_ripasso.js',
    num:   'ESERCIZI',
    title: 'Esercizi di ripasso',
    sub:   'Trigonometria: valori notevoli · identità · equazioni · Logaritmi: proprietà · equazioni · disequazioni · limiti'
  },

  sections: [

    // ── §01 ──────────────────────────────────────────────────────────
    {
      id:       's01',
      secNum:   '§01',
      navLabel: '§01 Trigonometria — valori e identità',
      heading:  'Trigonometria: valori notevoli e identità',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 1 — Valori notevoli</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola senza calcolatrice: $\\sin\\dfrac{\\pi}{3} + \\cos\\dfrac{\\pi}{6} - \\tan\\dfrac{\\pi}{4}$.</p></div>
    <div class="ex-sol">
      $$\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}, \\quad \\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}, \\quad \\tan\\frac{\\pi}{4} = 1$$
      $$\\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{3}}{2} - 1 = \\sqrt{3} - 1$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 2 — Conversione gradi ↔ radianti</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Converti in radianti: $150^\\circ$, $225^\\circ$, $315^\\circ$.</p></div>
    <div class="ex-sol">
      $$150^\\circ = \\frac{150\\pi}{180} = \\frac{5\\pi}{6}$$
      $$225^\\circ = \\frac{225\\pi}{180} = \\frac{5\\pi}{4}$$
      $$315^\\circ = \\frac{315\\pi}{180} = \\frac{7\\pi}{4}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 3 — Identità fondamentale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Sapendo che $\\cos\\alpha = -\\dfrac{5}{13}$ e $\\alpha \\in (\\pi/2, \\pi)$, calcola $\\sin\\alpha$, $\\tan\\alpha$ e $\\sin(2\\alpha)$.</p></div>
    <div class="ex-sol">
      <div class="sl">// α ∈ (π/2,π) → sin α > 0</div>
      $$\\sin\\alpha = \\sqrt{1 - \\frac{25}{169}} = \\sqrt{\\frac{144}{169}} = \\frac{12}{13}$$
      $$\\tan\\alpha = \\frac{12/13}{-5/13} = -\\frac{12}{5}$$
      $$\\sin(2\\alpha) = 2\\sin\\alpha\\cos\\alpha = 2\\cdot\\frac{12}{13}\\cdot\\left(-\\frac{5}{13}\\right) = -\\frac{120}{169}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 4 — Angoli associati</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\sin\\dfrac{5\\pi}{6}$, $\\cos\\dfrac{4\\pi}{3}$, $\\tan\\dfrac{7\\pi}{4}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// 5π/6 = π - π/6 → sin(π-α) = sin α</div>
      $$\\sin\\frac{5\\pi}{6} = \\sin\\frac{\\pi}{6} = \\frac{1}{2}$$
      <div class="sl">// 4π/3 = π + π/3 → cos(π+α) = -cos α</div>
      $$\\cos\\frac{4\\pi}{3} = -\\cos\\frac{\\pi}{3} = -\\frac{1}{2}$$
      <div class="sl">// 7π/4 = 2π - π/4 → tan(2π-α) = -tan α</div>
      $$\\tan\\frac{7\\pi}{4} = -\\tan\\frac{\\pi}{4} = -1$$
    </div>
  </div>
</div>
</div>`
    },

    // ── §02 ──────────────────────────────────────────────────────────
    {
      id:       's02',
      secNum:   '§02',
      navLabel: '§02 Trigonometria — formule',
      heading:  'Trigonometria: formule di addizione e duplicazione',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 5 — Formula di addizione</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\cos(15^\\circ)$ usando la formula di sottrazione.</p></div>
    <div class="ex-sol">
      <div class="sl">// 15° = 45° - 30°</div>
      $$\\cos(45^\\circ - 30^\\circ) = \\cos 45^\\circ\\cos 30^\\circ + \\sin 45^\\circ\\sin 30^\\circ$$
      $$= \\frac{\\sqrt{2}}{2}\\cdot\\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2}\\cdot\\frac{1}{2} = \\frac{\\sqrt{6}+\\sqrt{2}}{4}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 6 — Formula di duplicazione</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Dato $\\tan\\alpha = 2$ con $\\alpha \\in (0, \\pi/2)$, calcola $\\sin(2\\alpha)$ e $\\cos(2\\alpha)$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Da tan α = 2 e sin²+cos²=1: sin α = 2/√5, cos α = 1/√5</div>
      $$\\sin(2\\alpha) = 2\\sin\\alpha\\cos\\alpha = 2\\cdot\\frac{2}{\\sqrt{5}}\\cdot\\frac{1}{\\sqrt{5}} = \\frac{4}{5}$$
      $$\\cos(2\\alpha) = \\cos^2\\alpha - \\sin^2\\alpha = \\frac{1}{5} - \\frac{4}{5} = -\\frac{3}{5}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 7 — Verifica di identità</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Verifica che $\\dfrac{\\sin(2\\alpha)}{1 + \\cos(2\\alpha)} = \\tan\\alpha$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Sostituisci sin(2α) = 2sinαcosα e cos(2α) = 2cos²α-1</div>
      $$\\frac{2\\sin\\alpha\\cos\\alpha}{1 + (2\\cos^2\\alpha - 1)} = \\frac{2\\sin\\alpha\\cos\\alpha}{2\\cos^2\\alpha} = \\frac{\\sin\\alpha}{\\cos\\alpha} = \\tan\\alpha \\checkmark$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 8 — Equazione trigonometrica</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Risolvi $2\\sin^2 x - \\sin x - 1 = 0$ per $x \\in [0, 2\\pi)$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Poni t = sin x: 2t²-t-1=0 → (2t+1)(t-1)=0</div>
      $$t = 1 \\quad \\text{oppure} \\quad t = -\\frac{1}{2}$$
      <div class="sl">// sin x = 1 → x = π/2</div>
      <div class="sl">// sin x = -1/2 → x = π+π/6 = 7π/6 oppure x = 2π-π/6 = 11π/6</div>
      $$x \\in \\left\\{\\frac{\\pi}{2},\\; \\frac{7\\pi}{6},\\; \\frac{11\\pi}{6}\\right\\}$$
    </div>
  </div>
</div>
</div>`
    },

    // ── §03 ──────────────────────────────────────────────────────────
    {
      id:       's03',
      secNum:   '§03',
      navLabel: '§03 Logaritmi — proprietà e calcolo',
      heading:  'Logaritmi: proprietà e calcolo',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 9 — Calcolo diretto</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola: $\\log_2 64$, $\\log_5 \\dfrac{1}{25}$, $\\ln e^3$, $\\log_4 2$.</p></div>
    <div class="ex-sol">
      $$\\log_2 64 = \\log_2 2^6 = 6$$
      $$\\log_5 \\frac{1}{25} = \\log_5 5^{-2} = -2$$
      $$\\ln e^3 = 3$$
      $$\\log_4 2 = \\log_4 4^{1/2} = \\frac{1}{2}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 10 — Semplificazione con le proprietà</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Semplifica $\\log_3 18 + \\log_3 \\dfrac{1}{2} - \\log_3 3$.</p></div>
    <div class="ex-sol">
      $$\\log_3 18 + \\log_3\\frac{1}{2} - \\log_3 3 = \\log_3\\frac{18 \\cdot \\frac{1}{2}}{3} = \\log_3\\frac{9}{3} = \\log_3 3 = 1$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 11 — Cambiamento di base</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\log_8 27$ usando il cambiamento di base in base $2$ o $3$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Usa base 3: log_8(27) = ln(27)/ln(8) = log_3(27)/log_3(8)</div>
      $$\\log_8 27 = \\frac{\\log_3 27}{\\log_3 8} = \\frac{3}{\\log_3 2^3} = \\frac{3}{3\\log_3 2} = \\frac{1}{\\log_3 2}$$
      <div class="sl">// Oppure: usa base 2: log_8(27) = log(27)/log(8) = (3log3)/(3log2) = log3/log2 = log_2(3)</div>
      $$\\log_8 27 = \\log_2 3 \\approx 1.585$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 12 — Espressione con logaritmi</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Scrivi come logaritmo singolo: $3\\ln x - \\dfrac{1}{2}\\ln(x^2+1) + \\ln 2$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Proprietà della potenza poi del prodotto/quoziente</div>
      $$3\\ln x = \\ln x^3, \\quad \\frac{1}{2}\\ln(x^2+1) = \\ln\\sqrt{x^2+1}$$
      $$3\\ln x - \\frac{1}{2}\\ln(x^2+1) + \\ln 2 = \\ln\\frac{2x^3}{\\sqrt{x^2+1}}$$
    </div>
  </div>
</div>
</div>`
    },

    // ── §04 ──────────────────────────────────────────────────────────
    {
      id:       's04',
      secNum:   '§04',
      navLabel: '§04 Logaritmi — equazioni e disequazioni',
      heading:  'Equazioni e disequazioni logaritmiche',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 13 — Equazione semplice</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Risolvi $\\log_3(x^2 - 4) = 2$.</p></div>
    <div class="ex-sol">
      <div class="sl">// x²-4 = 3² = 9</div>
      $$x^2 = 13 \\implies x = \\pm\\sqrt{13}$$
      <div class="sl">// Condizione di esistenza: x²-4 > 0 → |x|>2. Entrambe le soluzioni soddisfano |x|=√13 > 2 ✓</div>
      $$x = \\pm\\sqrt{13}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 14 — Equazione con due log</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Risolvi $\\log_2(x+5) = \\log_2(3x-1)$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Stessa base: x+5 = 3x-1</div>
      $$6 = 2x \\implies x = 3$$
      <div class="sl">// C.e.: x+5=8>0 ✓ e 3x-1=8>0 ✓</div>
      $$x = 3$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 15 — Equazione riducibile a quadratica</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Risolvi $\\ln^2 x - 3\\ln x + 2 = 0$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Poni t = ln x: t²-3t+2=0 → (t-1)(t-2)=0</div>
      $$t = 1 \\implies \\ln x = 1 \\implies x = e$$
      $$t = 2 \\implies \\ln x = 2 \\implies x = e^2$$
      $$x \\in \\{e,\\; e^2\\}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 16 — Disequazione con base $> 1$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Risolvi $\\log_2(x-1) + \\log_2(x+1) < 3$.</p></div>
    <div class="ex-sol">
      <div class="sl">// C.e.: x-1>0 e x+1>0 → x>1</div>
      $$\\log_2[(x-1)(x+1)] < 3 \\implies (x-1)(x+1) < 2^3 = 8$$
      $$x^2 - 1 < 8 \\implies x^2 < 9 \\implies -3 < x < 3$$
      <div class="sl">// Interseco con la c.e. x > 1:</div>
      $$x \\in (1, 3)$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 17 — Disequazione con base $< 1$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Risolvi $\\log_{1/2}(x+1) > -2$.</p></div>
    <div class="ex-sol">
      <div class="sl">// C.e.: x+1 > 0 → x > -1</div>
      <div class="sl">// Base 1/2 < 1: log decrescente → verso si inverte</div>
      $$x + 1 < \\left(\\frac{1}{2}\\right)^{-2} = 4$$
      $$x < 3$$
      <div class="sl">// Interseco con c.e. x > -1:</div>
      $$x \\in (-1, 3)$$
    </div>
  </div>
</div>
</div>`
    },

    // ── §05 ──────────────────────────────────────────────────────────
    {
      id:       's05',
      secNum:   '§05',
      navLabel: '§05 Limiti con log ed exp',
      heading:  'Limiti con logaritmi ed esponenziali',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 18 — Limite notevole con log</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to 0}\\frac{\\ln(1+5x)}{3x}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Riconduce a lim_{t→0} ln(1+t)/t = 1 con t=5x</div>
      $$\\lim_{x\\to 0}\\frac{\\ln(1+5x)}{3x} = \\frac{5}{3}\\lim_{x\\to 0}\\frac{\\ln(1+5x)}{5x} = \\frac{5}{3}\\cdot 1 = \\frac{5}{3}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 19 — Limite notevole con esponenziale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to 0}\\frac{e^{3x}-1}{\\sin x}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Moltiplica e dividi strategicamente</div>
      $$\\lim_{x\\to 0}\\frac{e^{3x}-1}{\\sin x} = \\lim_{x\\to 0}\\frac{e^{3x}-1}{3x}\\cdot\\frac{3x}{\\sin x} = 1\\cdot 3 = 3$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 20 — Limite con gerarchia degli infiniti</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to+\\infty}\\frac{\\ln x}{\\sqrt{x}}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// ln x cresce più lentamente di qualsiasi potenza di x</div>
      <div class="sl">// Più formalmente: L'Hospital (forma ∞/∞)</div>
      $$\\lim_{x\\to+\\infty}\\frac{\\ln x}{\\sqrt{x}} = \\lim_{x\\to+\\infty}\\frac{1/x}{1/(2\\sqrt{x})} = \\lim_{x\\to+\\infty}\\frac{2\\sqrt{x}}{x} = \\lim_{x\\to+\\infty}\\frac{2}{\\sqrt{x}} = 0$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 21 — Limite della forma $1^\\infty$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to+\\infty}\\left(1+\\frac{3}{x}\\right)^x$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Riconduce al limite notevole (1+1/t)^t = e con t = x/3</div>
      $$\\left(1+\\frac{3}{x}\\right)^x = \\left[\\left(1+\\frac{1}{x/3}\\right)^{x/3}\\right]^3 \\to e^3$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 22 — Limite con log e polinomio</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to 1}\\frac{\\ln x}{x-1}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Forma 0/0. Poni t = x-1, quindi x = 1+t e t→0:</div>
      $$\\lim_{t\\to 0}\\frac{\\ln(1+t)}{t} = 1$$
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
