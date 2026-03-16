// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_esercizi_applicazioni_derivate.js',
    num:   'ESERCIZI',
    title: 'Esercizi sulle applicazioni delle derivate',
    sub:   "L'Hospital · Monotonia · Massimi e minimi · Taylor: calcolo di polinomi · Taylor: limiti e approssimazioni"
  },

  sections: [

    // ── §01 ──────────────────────────────────────────────────────────
    {
      id:       's01',
      secNum:   '§01',
      navLabel: "§01 L'Hospital e monotonia",
      heading:  "L'Hospital e studio della monotonia",
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 1 — L'Hospital, forma $0/0$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to 0}\\frac{e^x - 1}{\\sin x}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Forma 0/0. Applica L'Hospital</div>
      $$\\lim_{x\\to 0}\\frac{e^x-1}{\\sin x} = \\lim_{x\\to 0}\\frac{e^x}{\\cos x} = \\frac{1}{1} = 1$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 2 — L'Hospital, forma $\\infty/\\infty$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to+\\infty}\\frac{x^2}{e^x}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Forma ∞/∞. Primo L'Hospital:</div>
      $$\\lim_{x\\to+\\infty}\\frac{x^2}{e^x} = \\lim_{x\\to+\\infty}\\frac{2x}{e^x}$$
      <div class="sl">// Ancora ∞/∞. Secondo L'Hospital:</div>
      $$= \\lim_{x\\to+\\infty}\\frac{2}{e^x} = 0$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 3 — L'Hospital, forma $0 \\cdot \\infty$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to 0^+} x\\ln x$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Forma 0·(-∞). Riscrivi come rapporto:</div>
      $$x\\ln x = \\frac{\\ln x}{1/x}$$
      <div class="sl">// Forma -∞/+∞. Applica L'Hospital:</div>
      $$\\lim_{x\\to 0^+}\\frac{\\ln x}{1/x} = \\lim_{x\\to 0^+}\\frac{1/x}{-1/x^2} = \\lim_{x\\to 0^+}(-x) = 0$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 4 — Studio della monotonia</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova gli intervalli di crescenza e decrescenza di $f(x) = xe^{-x}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Regola del prodotto: u=x, v=e^(-x)</div>
      $$f'(x) = e^{-x} + x(-e^{-x}) = e^{-x}(1-x)$$
      <div class="sl">// e^(-x) > 0 sempre. Segno determinato da (1-x):</div>
      <div class="sl">// x < 1: f' > 0 → crescente</div>
      <div class="sl">// x > 1: f' < 0 → decrescente</div>
      $$\\text{Massimo in } x=1:\\quad f(1) = e^{-1} = \\frac{1}{e}$$
    </div>
  </div>
</div>
</div>`
    },

    // ── §02 ──────────────────────────────────────────────────────────
    {
      id:       's02',
      secNum:   '§02',
      navLabel: '§02 Massimi e minimi',
      heading:  'Massimi, minimi e concavità',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 5 — Criterio della derivata seconda</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Classifica i punti stazionari di $f(x) = x^3 - 3x^2 - 9x + 5$.</p></div>
    <div class="ex-sol">
      $$f'(x) = 3x^2 - 6x - 9 = 3(x^2-2x-3) = 3(x-3)(x+1)$$
      <div class="sl">// Punti stazionari: x = 3 e x = -1</div>
      $$f''(x) = 6x - 6$$
      $$f''(-1) = -12 < 0 \\implies x=-1 \\text{ massimo locale},\\quad f(-1) = 10$$
      $$f''(3) = 12 > 0 \\implies x=3 \\text{ minimo locale},\\quad f(3) = -22$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 6 — Criterio con $f'' = 0$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Classifica il punto stazionario $x=0$ di $f(x) = x^4$.</p></div>
    <div class="ex-sol">
      $$f'(x) = 4x^3 = 0 \\implies x = 0$$
      $$f''(x) = 12x^2,\\quad f''(0) = 0 \\implies \\text{criterio non decide}$$
      <div class="sl">// Studio del segno di f': f'(x)=4x³ < 0 per x<0 e > 0 per x>0</div>
      <div class="sl">// f' cambia segno da - a + in x=0 → minimo locale. f(0)=0 ✓</div>
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 7 — Concavità e flessi</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova i punti di flesso di $f(x) = x^4 - 6x^2$.</p></div>
    <div class="ex-sol">
      $$f''(x) = 12x^2 - 12 = 12(x^2-1) = 12(x-1)(x+1)$$
      <div class="sl">// f''=0 per x=±1. Studio del segno di f'':</div>
      <div class="sl">// x < -1: f'' > 0 (convessa)</div>
      <div class="sl">// -1 < x < 1: f'' < 0 (concava)</div>
      <div class="sl">// x > 1: f'' > 0 (convessa)</div>
      <div class="sl">// f'' cambia segno in x=±1 → flessi</div>
      $$x=-1:\\; f(-1)=-5 \\qquad x=1:\\; f(1)=-5$$
    </div>
  </div>
</div>
</div>`
    },

    // ── §03 ──────────────────────────────────────────────────────────
    {
      id:       's03',
      secNum:   '§03',
      navLabel: '§03 Polinomio di Taylor',
      heading:  'Calcolo del polinomio di Taylor',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 8 — Taylor di $e^x$ in $x_0=0$, ordine 4</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Scrivi il polinomio di Taylor di ordine 4 di $f(x) = e^x$ centrato in $x_0 = 0$.</p></div>
    <div class="ex-sol">
      <div class="sl">// f(x)=e^x → f^(k)(x)=e^x per ogni k → f^(k)(0)=1</div>
      $$T_4(x) = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\frac{x^4}{4!} = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\frac{x^4}{24}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 9 — Taylor di $\\sin x$ in $x_0=0$, ordine 5</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Scrivi il polinomio di Taylor di ordine 5 di $f(x) = \\sin x$ centrato in $x_0 = 0$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Derivate cicliche: sin, cos, -sin, -cos, sin, cos, ...</div>
      <div class="sl">// In x=0: f(0)=0, f'(0)=1, f''(0)=0, f'''(0)=-1, f^(4)(0)=0, f^(5)(0)=1</div>
      <div class="sl">// I termini pari sono nulli</div>
      $$T_5(x) = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} = x - \\frac{x^3}{6} + \\frac{x^5}{120}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 10 — Taylor di $\\cos x$ in $x_0=0$, ordine 4</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Scrivi il polinomio di Taylor di ordine 4 di $f(x) = \\cos x$ centrato in $x_0 = 0$.</p></div>
    <div class="ex-sol">
      <div class="sl">// f(0)=1, f'(0)=0, f''(0)=-1, f'''(0)=0, f^(4)(0)=1</div>
      <div class="sl">// I termini dispari sono nulli</div>
      $$T_4(x) = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} = 1 - \\frac{x^2}{2} + \\frac{x^4}{24}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 11 — Taylor di $\\ln(1+x)$ in $x_0=0$, ordine 4</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Scrivi il polinomio di Taylor di ordine 4 di $f(x) = \\ln(1+x)$ centrato in $x_0 = 0$.</p></div>
    <div class="ex-sol">
      <div class="sl">// f(x)=ln(1+x): f(0)=0</div>
      <div class="sl">// f'(x)=1/(1+x) → f'(0)=1</div>
      <div class="sl">// f''(x)=-1/(1+x)² → f''(0)=-1</div>
      <div class="sl">// f'''(x)=2/(1+x)³ → f'''(0)=2</div>
      <div class="sl">// f^(4)(x)=-6/(1+x)⁴ → f^(4)(0)=-6</div>
      $$T_4(x) = x - \\frac{x^2}{2} + \\frac{2x^3}{6} - \\frac{6x^4}{24} = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 12 — Taylor in un punto $x_0 \\neq 0$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Scrivi il polinomio di Taylor di ordine 3 di $f(x) = \\ln x$ centrato in $x_0 = 1$.</p></div>
    <div class="ex-sol">
      <div class="sl">// f(x)=ln x. Calcola le derivate in x₀=1:</div>
      <div class="sl">// f(1)=0, f'(x)=1/x → f'(1)=1</div>
      <div class="sl">// f''(x)=-1/x² → f''(1)=-1</div>
      <div class="sl">// f'''(x)=2/x³ → f'''(1)=2</div>
      $$T_3(x) = 0 + 1\\cdot(x-1) + \\frac{-1}{2}(x-1)^2 + \\frac{2}{6}(x-1)^3$$
      $$= (x-1) - \\frac{(x-1)^2}{2} + \\frac{(x-1)^3}{3}$$
    </div>
  </div>
</div>
</div>`
    },

    // ── §04 ──────────────────────────────────────────────────────────
    {
      id:       's04',
      secNum:   '§04',
      navLabel: '§04 Taylor per i limiti',
      heading:  'Uso di Taylor per il calcolo di limiti',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 13 — Limite con $\\sin x$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to 0}\\frac{\\sin x - x}{x^3}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Sviluppo di sin x all'ordine 3:</div>
      $$\\sin x = x - \\frac{x^3}{6} + o(x^3)$$
      $$\\sin x - x = -\\frac{x^3}{6} + o(x^3)$$
      $$\\frac{\\sin x - x}{x^3} = \\frac{-x^3/6 + o(x^3)}{x^3} = -\\frac{1}{6} + o(1) \\to -\\frac{1}{6}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 14 — Limite con $\\cos x$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to 0}\\frac{1 - \\cos x}{x^2}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Sviluppo di cos x all'ordine 2:</div>
      $$\\cos x = 1 - \\frac{x^2}{2} + o(x^2)$$
      $$1 - \\cos x = \\frac{x^2}{2} + o(x^2)$$
      $$\\frac{1-\\cos x}{x^2} = \\frac{1}{2} + o(1) \\to \\frac{1}{2}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 15 — Limite con $\\ln$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to 0}\\frac{\\ln(1+x) - x}{x^2}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Sviluppo di ln(1+x) all'ordine 2:</div>
      $$\\ln(1+x) = x - \\frac{x^2}{2} + o(x^2)$$
      $$\\ln(1+x) - x = -\\frac{x^2}{2} + o(x^2)$$
      $$\\frac{\\ln(1+x)-x}{x^2} \\to -\\frac{1}{2}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 16 — Confronto tra infinitesimi</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to 0}\\frac{e^x - 1 - \\sin x}{x^2}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Sviluppi all'ordine 2:</div>
      $$e^x = 1 + x + \\frac{x^2}{2} + o(x^2)$$
      $$\\sin x = x - \\frac{x^3}{6} + o(x^3) = x + o(x^2)$$
      $$e^x - 1 - \\sin x = \\frac{x^2}{2} + o(x^2)$$
      $$\\frac{e^x - 1 - \\sin x}{x^2} \\to \\frac{1}{2}$$
    </div>
  </div>
</div>
</div>`
    },

    // ── §05 ──────────────────────────────────────────────────────────
    {
      id:       's05',
      secNum:   '§05',
      navLabel: '§05 Taylor: approssimazioni',
      heading:  'Taylor per approssimazioni numeriche',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 17 — Approssimazione di $e^{0.1}$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Approssima $e^{0.1}$ con il polinomio di Taylor di ordine 3 di $e^x$ in $x_0=0$.</p></div>
    <div class="ex-sol">
      $$e^x \\approx 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6}$$
      $$e^{0.1} \\approx 1 + 0.1 + \\frac{0.01}{2} + \\frac{0.001}{6} = 1 + 0.1 + 0.005 + 0.000167 \\approx 1.10517$$
      <div class="sl">// Valore esatto: e^0.1 ≈ 1.10517. L'approssimazione è ottima già all'ordine 3.</div>
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 18 — Approssimazione di $\\sin(0.2)$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Approssima $\\sin(0.2)$ con il polinomio di Taylor di ordine 3.</p></div>
    <div class="ex-sol">
      $$\\sin x \\approx x - \\frac{x^3}{6}$$
      $$\\sin(0.2) \\approx 0.2 - \\frac{0.008}{6} = 0.2 - 0.001\\overline{3} \\approx 0.19867$$
      <div class="sl">// Valore esatto: sin(0.2) ≈ 0.19867. Eccellente.</div>
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 19 — Taylor di funzione composta</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Scrivi il polinomio di Taylor di ordine 4 di $f(x) = e^{-x^2}$ centrato in $x_0 = 0$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Sostituisci t = -x² nello sviluppo di e^t:</div>
      $$e^t = 1 + t + \\frac{t^2}{2} + o(t^2)$$
      $$e^{-x^2} = 1 + (-x^2) + \\frac{(-x^2)^2}{2} + o(x^4) = 1 - x^2 + \\frac{x^4}{2} + o(x^4)$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 20 — Taylor di funzione composta (2)</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Scrivi il polinomio di Taylor di ordine 3 di $f(x) = \\sin(x^2)$ centrato in $x_0 = 0$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Sostituisci t = x² nello sviluppo di sin t all'ordine 3:</div>
      $$\\sin t = t - \\frac{t^3}{6} + o(t^3)$$
      <div class="sl">// Con t = x²: t³ = x^6, che è o(x^3) per x→0</div>
      $$\\sin(x^2) = x^2 - \\frac{x^6}{6} + o(x^6) = x^2 + o(x^3)$$
      <div class="sl">// Il polinomio di Taylor di ordine 3 in x₀=0 è semplicemente T₃(x) = x²</div>
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 21 — Limite con Taylor di ordine superiore</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to 0}\\frac{\\cos x - 1 + x^2/2}{x^4}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Serve Taylor di cos x all'ordine 4:</div>
      $$\\cos x = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} + o(x^4)$$
      $$\\cos x - 1 + \\frac{x^2}{2} = \\frac{x^4}{24} + o(x^4)$$
      $$\\frac{\\cos x - 1 + x^2/2}{x^4} \\to \\frac{1}{24}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 22 — Confronto tra sviluppi</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to 0}\\frac{e^x - 1 - x - x^2/2}{x^3}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Sviluppo di e^x all'ordine 3:</div>
      $$e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + o(x^3)$$
      $$e^x - 1 - x - \\frac{x^2}{2} = \\frac{x^3}{6} + o(x^3)$$
      $$\\frac{e^x - 1 - x - x^2/2}{x^3} \\to \\frac{1}{6}$$
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
