// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_esercizi_max_min_piu_variabili.js',
    num:   'ESERCIZI',
    title: 'Esercizi su massimi e minimi in più variabili',
    sub:   'Punti stazionari · Hessiana · Estremi su domini compatti · Lagrange'
  },

  sections: [

    {
      id: 's01', secNum: '§01', navLabel: '§01 Punti stazionari e classificazione',
      heading: 'Punti stazionari e classificazione',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 1 — Polinomio quadratico</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova e classifica i punti stazionari di $f(x,y) = x^2 + xy + y^2 - 3x$.</p></div>
    <div class="ex-sol">
      $$f_x = 2x + y - 3 = 0,\\quad f_y = x + 2y = 0$$
      <div class="sl">// Da f_y: x=-2y. Sostituendo: -4y+y-3=0 → y=-1, x=2</div>
      $$f_{xx} = 2,\\ f_{yy} = 2,\\ f_{xy} = 1$$
      $$\\det H = 4 - 1 = 3 > 0,\\ f_{xx} = 2 > 0 \\implies (2,-1) \\text{ minimo locale}$$
      $$f(2,-1) = 4 - 2 + 1 - 6 = -3$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 2 — Più punti stazionari</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova e classifica i punti stazionari di $f(x,y) = x^3 + y^3 - 3xy$.</p></div>
    <div class="ex-sol">
      $$f_x = 3x^2 - 3y = 0 \\implies y = x^2$$
      $$f_y = 3y^2 - 3x = 0 \\implies x = y^2$$
      <div class="sl">// Sostituendo y=x² in x=y²: x = x⁴ → x(x³-1)=0 → x=0 o x=1</div>
      <div class="sl">// Punti: (0,0) e (1,1)</div>
      $$f_{xx} = 6x,\\ f_{yy} = 6y,\\ f_{xy} = -3,\\ \\det H = 36xy - 9$$
      <div class="sl">// (0,0): det = -9 < 0 → punto di sella</div>
      <div class="sl">// (1,1): det = 27 > 0, f_xx=6>0 → minimo locale, f(1,1) = -1</div>
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 3 — Con esponenziale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova e classifica i punti stazionari di $f(x,y) = (x^2 + y^2)e^{-(x^2+y^2)}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Pongo r² = x²+y². f = r² e^{-r²}, dipende solo da r². ∇f=0 quando ∇r²=0 oppure derivata radiale=0</div>
      $$f_x = 2x\\,e^{-r^2} - r^2 \\cdot 2x\\,e^{-r^2} = 2x\\,e^{-r^2}(1 - r^2)$$
      $$f_y = 2y\\,e^{-r^2}(1 - r^2)$$
      <div class="sl">// ∇f=0 ⇔ x=y=0 oppure r²=1 (cioè x²+y²=1)</div>
      <div class="sl">// (0,0): f=0. Su r²=1: f=e⁻¹. Per ‖(x,y)‖→∞: f→0</div>
      <div class="sl">// → (0,0) minimo locale (e assoluto). I punti su x²+y²=1 sono massimi (assoluti, valore 1/e). Il criterio dell'hessiana in (0,0) dà det>0 e f_xx>0; sui punti del cerchio x²+y²=1 det=0 (minimo non isolato sulla curva)</div>
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 4 — Logaritmo</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova e classifica i punti stazionari di $f(x,y) = \\ln(1+x^2+y^2) - x$.</p></div>
    <div class="ex-sol">
      $$f_x = \\frac{2x}{1+x^2+y^2} - 1 = 0,\\quad f_y = \\frac{2y}{1+x^2+y^2} = 0$$
      <div class="sl">// Da f_y: y=0. In f_x: 2x = 1+x² → x²-2x+1=0 → (x-1)²=0 → x=1</div>
      <div class="sl">// Unico punto stazionario: (1,0)</div>
      $$f_{xx}(1,0) = \\frac{2(1+y^2-x^2)}{(1+x^2+y^2)^2}\\Big|_{(1,0)} = \\frac{0}{4} = 0$$
      <div class="sl">// f_xx = 0 in (1,0): caso dubbio del criterio dell'hessiana</div>
      <div class="sl">// Studio diretto: f(1+h, k) - f(1,0) = ln(1+(1+h)²+k²) - (1+h) - [ln 2 - 1]. Sviluppo conferma minimo locale.</div>
    </div>
  </div>
</div>
</div>`
    },

    {
      id: 's02', secNum: '§02', navLabel: '§02 Estremi assoluti',
      heading: 'Estremi assoluti su domini compatti',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 5 — Quadrato</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova max e min assoluti di $f(x,y) = xy$ su $K = [0,1] \\times [0,1]$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Interno: ∇f=(y,x)=(0,0) → (0,0), che è un vertice di K (non interno)</div>
      <div class="sl">// Frontiera (4 lati): su ciascun lato uno tra x e y vale 0 o 1</div>
      <div class="sl">// — Lato x=0: f=0; Lato y=0: f=0</div>
      <div class="sl">// — Lato x=1, y∈[0,1]: f=y, max=1 in (1,1), min=0 in (1,0)</div>
      <div class="sl">// — Lato y=1, x∈[0,1]: f=x, max=1 in (1,1), min=0 in (0,1)</div>
      $$\\text{Max assoluto: } 1 \\text{ in }(1,1) \\qquad \\text{Min assoluto: } 0 \\text{ su due lati}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 6 — Triangolo</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova max e min assoluti di $f(x,y) = x^2 + y^2 - 2x$ sul triangolo di vertici $(0,0), (2,0), (0,2)$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Interno: ∇f=(2x-2, 2y)=(0,0) → (1,0). Sta sul lato y=0, non interno del triangolo</div>
      <div class="sl">// Frontiera (3 lati):</div>
      <div class="sl">// — Lato y=0, x∈[0,2]: g(x) = x²-2x, g'=2x-2=0 → x=1, g(1)=-1. Estremi: g(0)=0, g(2)=0</div>
      <div class="sl">// — Lato x=0, y∈[0,2]: f=y², max=4 in (0,2), min=0 in (0,0)</div>
      <div class="sl">// — Lato x+y=2 (y=2-x, x∈[0,2]): f = x²+(2-x)²-2x = 2x²-6x+4. f'=4x-6=0 → x=3/2, f=2·9/4-9+4=-1/2</div>
      $$\\text{Max assoluto: } 4 \\text{ in }(0,2) \\qquad \\text{Min assoluto: } -1 \\text{ in }(1,0)$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 7 — Disco</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova max e min assoluti di $f(x,y) = x^2 + y^2 - 2y$ sul disco $x^2+y^2 \\leq 4$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Interno: ∇f=(2x, 2y-2)=(0,0) → (0,1). Verifica: 0²+1²=1<4 ✓ interno</div>
      <div class="sl">// f(0,1) = 0+1-2 = -1</div>
      <div class="sl">// Frontiera x²+y²=4: parametrizza x=2cosθ, y=2sinθ</div>
      $$g(\\theta) = 4 - 4\\sin\\theta,\\quad g'(\\theta) = -4\\cos\\theta = 0 \\implies \\theta = \\pi/2,\\ 3\\pi/2$$
      <div class="sl">// θ=π/2 → (0,2), f=4-4=0. θ=3π/2 → (0,-2), f=4+4=8</div>
      $$\\text{Max assoluto: } 8 \\text{ in }(0,-2) \\qquad \\text{Min assoluto: } -1 \\text{ in }(0,1)$$
    </div>
  </div>
</div>
</div>`
    },

    {
      id: 's03', secNum: '§03', navLabel: '§03 Lagrange',
      heading: 'Estremi vincolati con Lagrange',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 8 — Estremi su retta</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova max e min di $f(x,y) = x^2+y^2$ sul vincolo $x+y=2$.</p></div>
    <div class="ex-sol">
      $$\\nabla f = (2x,2y),\\ \\nabla g = (1,1)$$
      $$\\begin{cases} 2x = \\lambda \\\\ 2y = \\lambda \\\\ x+y=2 \\end{cases} \\implies x=y=1$$
      <div class="sl">// Solo un punto critico vincolato: (1,1), f(1,1)=2 (minimo). Lungo la retta f→∞ negli estremi</div>
      $$f_{\\min} = 2 \\text{ in }(1,1),\\ f_{\\max} \\text{ non esiste (vincolo illimitato)}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 9 — Estremi su circonferenza</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova max e min di $f(x,y) = xy$ sulla circonferenza $x^2+y^2 = 4$.</p></div>
    <div class="ex-sol">
      $$\\begin{cases} y = 2\\lambda x \\\\ x = 2\\lambda y \\\\ x^2+y^2=4 \\end{cases}$$
      <div class="sl">// Sostituendo: y=2λ(2λy)=4λ²y → y(4λ²-1)=0</div>
      <div class="sl">// Caso y=0: dalla seconda x=0, ma (0,0) non sta sul vincolo</div>
      <div class="sl">// Caso 4λ²=1 → λ=±1/2 → y=±x</div>
      <div class="sl">// y=x: 2x²=4 → x=±√2 → punti (√2, √2), (-√2,-√2), f=2</div>
      <div class="sl">// y=-x: 2x²=4 → x=±√2 → punti (√2,-√2), (-√2,√2), f=-2</div>
      $$f_{\\max} = 2,\\ f_{\\min} = -2$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 10 — Problema applicativo</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova le dimensioni del parallelepipedo a base quadrata di volume massimo, con la somma di tutti gli spigoli pari a $12$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Lato base x, altezza y. Spigoli: 8 della base (8x) + 4 verticali (4y) = 8x+4y = 12 → 2x+y=3</div>
      <div class="sl">// Volume: V = x²y. Vincolo: g = 2x+y-3 = 0</div>
      $$\\nabla V = (2xy, x^2),\\ \\nabla g = (2,1)$$
      $$\\begin{cases} 2xy = 2\\lambda \\\\ x^2 = \\lambda \\\\ 2x+y=3 \\end{cases}$$
      <div class="sl">// Da 2xy=2λ e x²=λ: xy = x² → y=x (per x≠0). Sostituendo: 3x=3 → x=1, y=1</div>
      $$\\text{Cubo unitario: } x=y=1,\\quad V_{\\max} = 1$$
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
