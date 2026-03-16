// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_esercizi_derivate.js',
    num:   'ESERCIZI',
    title: 'Esercizi sulle derivate',
    sub:   'Derivate elementari · Prodotto e quoziente · Regola della catena · Composte avanzate · Applicazioni'
  },

  sections: [

    // ── §01 ──────────────────────────────────────────────────────────
    {
      id:       's01',
      secNum:   '§01',
      navLabel: '§01 Derivate elementari',
      heading:  'Derivate elementari e linearità',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 1 — Polinomio</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $f'(x)$ per $f(x) = 3x^4 - 2x^3 + 5x - 7$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Applica la regola x^n → nx^(n-1) termine per termine</div>
      $$f'(x) = 12x^3 - 6x^2 + 5$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 2 — Combinazione di elementari</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $f'(x)$ per $f(x) = 2e^x - 3\\sin x + \\ln x$.</p></div>
    <div class="ex-sol">
      $$f'(x) = 2e^x - 3\\cos x + \\frac{1}{x}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 3 — Potenze frazionarie</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $f'(x)$ per $f(x) = \\sqrt{x} + \\dfrac{1}{x^2} - x^{3/2}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Riscrivi come potenze: x^(1/2) + x^(-2) - x^(3/2)</div>
      $$f'(x) = \\frac{1}{2}x^{-1/2} - 2x^{-3} - \\frac{3}{2}x^{1/2} = \\frac{1}{2\\sqrt{x}} - \\frac{2}{x^3} - \\frac{3\\sqrt{x}}{2}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 4 — Derivata dalla definizione</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $f'(2)$ dalla definizione per $f(x) = x^2 - 3x$.</p></div>
    <div class="ex-sol">
      $$f'(2) = \\lim_{h\\to 0}\\frac{(2+h)^2 - 3(2+h) - (4-6)}{h} = \\lim_{h\\to 0}\\frac{4+4h+h^2-6-3h+2}{h}$$
      $$= \\lim_{h\\to 0}\\frac{h^2+h}{h} = \\lim_{h\\to 0}(h+1) = 1$$
    </div>
  </div>
</div>
</div>`
    },

    // ── §02 ──────────────────────────────────────────────────────────
    {
      id:       's02',
      secNum:   '§02',
      navLabel: '§02 Prodotto e quoziente',
      heading:  'Regola del prodotto e del quoziente',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 5 — Prodotto polinomio × esponenziale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $f'(x)$ per $f(x) = (x^2 + 1)e^x$.</p></div>
    <div class="ex-sol">
      <div class="sl">// (u·v)' = u'v + uv' con u = x²+1, v = e^x</div>
      $$f'(x) = 2x \\cdot e^x + (x^2+1) \\cdot e^x = e^x(x^2 + 2x + 1) = e^x(x+1)^2$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 6 — Prodotto con sin e cos</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $f'(x)$ per $f(x) = x^3 \\cos x$.</p></div>
    <div class="ex-sol">
      <div class="sl">// u = x³, v = cos x</div>
      $$f'(x) = 3x^2 \\cos x + x^3(-\\sin x) = 3x^2\\cos x - x^3\\sin x = x^2(3\\cos x - x\\sin x)$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 7 — Quoziente semplice</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $f'(x)$ per $f(x) = \\dfrac{x^2 - 1}{x^2 + 1}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// (u/v)' = (u'v - uv')/v² con u = x²-1, v = x²+1</div>
      $$f'(x) = \\frac{2x(x^2+1) - (x^2-1)\\cdot 2x}{(x^2+1)^2} = \\frac{2x[(x^2+1)-(x^2-1)]}{(x^2+1)^2} = \\frac{4x}{(x^2+1)^2}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 8 — Quoziente con esponenziale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $f'(x)$ per $f(x) = \\dfrac{e^x}{x^2 + 1}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// u = e^x, v = x²+1</div>
      $$f'(x) = \\frac{e^x(x^2+1) - e^x \\cdot 2x}{(x^2+1)^2} = \\frac{e^x(x^2-2x+1)}{(x^2+1)^2} = \\frac{e^x(x-1)^2}{(x^2+1)^2}$$
    </div>
  </div>
</div>
</div>`
    },

    // ── §03 ──────────────────────────────────────────────────────────
    {
      id:       's03',
      secNum:   '§03',
      navLabel: '§03 Regola della catena',
      heading:  'Regola della catena',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 9 — Catena semplice</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $f'(x)$ per $f(x) = (3x^2 - 5)^4$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Esterna: t^4 → 4t³. Interna: 3x²-5 → 6x</div>
      $$f'(x) = 4(3x^2-5)^3 \\cdot 6x = 24x(3x^2-5)^3$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 10 — Catena con esponenziale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $f'(x)$ per $f(x) = e^{\\sin x}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Esterna: e^t → e^t. Interna: sin x → cos x</div>
      $$f'(x) = e^{\\sin x} \\cdot \\cos x$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 11 — Catena con logaritmo</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $f'(x)$ per $f(x) = \\ln(x^2 + 3x + 1)$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Esterna: ln(t) → 1/t. Interna: x²+3x+1 → 2x+3</div>
      $$f'(x) = \\frac{1}{x^2+3x+1} \\cdot (2x+3) = \\frac{2x+3}{x^2+3x+1}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 12 — Catena con radice</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $f'(x)$ per $f(x) = \\sqrt{x^2 + 1}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Riscrivi come (x²+1)^(1/2). Esterna: (1/2)t^(-1/2). Interna: 2x</div>
      $$f'(x) = \\frac{1}{2}(x^2+1)^{-1/2} \\cdot 2x = \\frac{x}{\\sqrt{x^2+1}}$$
    </div>
  </div>
</div>
</div>`
    },

    // ── §04 ──────────────────────────────────────────────────────────
    {
      id:       's04',
      secNum:   '§04',
      navLabel: '§04 Composte avanzate',
      heading:  'Funzioni composte avanzate',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 13 — Catena doppia</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $f'(x)$ per $f(x) = e^{\\cos(x^2)}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Tre livelli: e^t → e^t, poi cos(s) → -sin(s), poi x² → 2x</div>
      $$f'(x) = e^{\\cos(x^2)} \\cdot (-\\sin(x^2)) \\cdot 2x = -2x\\sin(x^2)\\, e^{\\cos(x^2)}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 14 — Prodotto + catena</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $f'(x)$ per $f(x) = x^2 e^{x^2}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Regola del prodotto: u = x², v = e^(x²)</div>
      <div class="sl">// v' = e^(x²)·2x (catena)</div>
      $$f'(x) = 2x \\cdot e^{x^2} + x^2 \\cdot e^{x^2} \\cdot 2x = 2xe^{x^2}(1 + x^2)$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 15 — Quoziente + catena</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $f'(x)$ per $f(x) = \\dfrac{\\ln x}{\\sqrt{x}}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// u = ln x → u' = 1/x. v = x^(1/2) → v' = 1/(2√x)</div>
      $$f'(x) = \\frac{\\dfrac{1}{x} \\cdot \\sqrt{x} - \\ln x \\cdot \\dfrac{1}{2\\sqrt{x}}}{x} = \\frac{\\dfrac{1}{\\sqrt{x}} - \\dfrac{\\ln x}{2\\sqrt{x}}}{x} = \\frac{2 - \\ln x}{2x\\sqrt{x}}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 16 — Derivata logaritmica</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $f'(x)$ per $f(x) = x^x$ (con $x > 0$).</p></div>
    <div class="ex-sol">
      <div class="sl">// x^x non è né x^n né a^x: usa la derivata logaritmica</div>
      <div class="sl">// Scrivi f(x) = e^(x ln x), poi applica la catena</div>
      $$f(x) = e^{x\\ln x}$$
      $$f'(x) = e^{x\\ln x} \\cdot (\\ln x + x \\cdot \\tfrac{1}{x}) = x^x(\\ln x + 1)$$
    </div>
  </div>
</div>
</div>`
    },

    // ── §05 ──────────────────────────────────────────────────────────
    {
      id:       's05',
      secNum:   '§05',
      navLabel: '§05 Applicazioni',
      heading:  'Applicazioni della derivata',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 17 — Retta tangente</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova la retta tangente a $f(x) = \\ln x$ nel punto $x_0 = e$.</p></div>
    <div class="ex-sol">
      <div class="sl">// f'(x) = 1/x → f'(e) = 1/e. Punto: (e, f(e)) = (e, 1)</div>
      $$y = 1 + \\frac{1}{e}(x - e) = \\frac{x}{e}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 18 — Studio di monotonia</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova gli intervalli di crescenza e decrescenza di $f(x) = x^3 - 6x^2 + 9x + 1$.</p></div>
    <div class="ex-sol">
      $$f'(x) = 3x^2 - 12x + 9 = 3(x^2-4x+3) = 3(x-1)(x-3)$$
      <div class="sl">// f'=0 per x=1 e x=3. Studio del segno:</div>
      <div class="sl">// x < 1: f' > 0 → crescente</div>
      <div class="sl">// 1 < x < 3: f' < 0 → decrescente</div>
      <div class="sl">// x > 3: f' > 0 → crescente</div>
      $$\\text{Max locale in } x=1:\\ f(1)=5 \\qquad \\text{Min locale in } x=3:\\ f(3)=1$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 19 — Criterio della derivata seconda</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Classifica i punti stazionari di $f(x) = x^4 - 4x^2$ con la derivata seconda.</p></div>
    <div class="ex-sol">
      $$f'(x) = 4x^3 - 8x = 4x(x^2-2) = 0 \\implies x = 0,\\; x = \\pm\\sqrt{2}$$
      $$f''(x) = 12x^2 - 8$$
      $$f''(0) = -8 < 0 \\implies x=0 \\text{ massimo locale},\\ f(0)=0$$
      $$f''(\\sqrt{2}) = 24-8 = 16 > 0 \\implies x=\\sqrt{2} \\text{ minimo locale},\\ f(\\sqrt{2})=-4$$
      $$f''(-\\sqrt{2}) = 16 > 0 \\implies x=-\\sqrt{2} \\text{ minimo locale},\\ f(-\\sqrt{2})=-4$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 20 — L'Hospital e studio completo</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to 0}\\frac{x - \\sin x}{x^3}$ con L'Hospital.</p></div>
    <div class="ex-sol">
      <div class="sl">// Forma 0/0. Primo L'Hospital:</div>
      $$\\lim_{x\\to 0}\\frac{x-\\sin x}{x^3} = \\lim_{x\\to 0}\\frac{1-\\cos x}{3x^2}$$
      <div class="sl">// Ancora 0/0. Secondo L'Hospital:</div>
      $$= \\lim_{x\\to 0}\\frac{\\sin x}{6x}$$
      <div class="sl">// Ancora 0/0. Terzo L'Hospital:</div>
      $$= \\lim_{x\\to 0}\\frac{\\cos x}{6} = \\frac{1}{6}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 21 — Derivata $n$-esima di $e^x$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova la derivata $n$-esima di $f(x) = e^{2x}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// f'(x) = 2e^(2x), f''(x) = 4e^(2x), f'''(x) = 8e^(2x) → schema: 2^n e^(2x)</div>
      $$f^{(n)}(x) = 2^n e^{2x}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 22 — Problema di ottimizzazione</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Tra tutti i rettangoli con perimetro $20$, trova quello con area massima.</p></div>
    <div class="ex-sol">
      <div class="sl">// Sia l la lunghezza e l'altra base = 10-l (perimetro = 2l + 2(10-l) = 20)</div>
      $$A(l) = l(10-l) = 10l - l^2$$
      $$A'(l) = 10 - 2l = 0 \\implies l = 5$$
      $$A''(l) = -2 < 0 \\implies l=5 \\text{ è un massimo}$$
      <div class="sl">// Il rettangolo di area massima a perimetro fissato è il quadrato: 5×5, area = 25</div>
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
