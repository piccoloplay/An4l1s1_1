// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_esercizi_integrali_doppi.js',
    num:   'ESERCIZI',
    title: 'Esercizi sugli integrali doppi',
    sub:   'Rettangoli · Domini normali · Inversione ordine · Coordinate polari · Volumi e aree'
  },

  sections: [

    {
      id: 's01', secNum: '§01', navLabel: '§01 Integrazione iterata',
      heading: 'Integrazione iterata su domini normali',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 1 — Rettangolo</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\iint_D x^2 y\\,dA$ dove $D=[0,2]\\times[0,3]$.</p></div>
    <div class="ex-sol">
      $$\\int_0^2\\int_0^3 x^2 y\\,dy\\,dx = \\int_0^2 x^2\\left[\\frac{y^2}{2}\\right]_0^3\\,dx = \\int_0^2\\frac{9x^2}{2}\\,dx = \\frac{9}{2}\\cdot\\frac{8}{3} = 12$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 2 — Dominio triangolare</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\iint_D (x+y)\\,dA$ dove $D$ è il triangolo con vertici $(0,0)$, $(2,0)$, $(0,2)$.</p></div>
    <div class="ex-sol">
      <div class="sl">// D: 0≤x≤2, 0≤y≤2-x</div>
      $$\\int_0^2\\int_0^{2-x}(x+y)\\,dy\\,dx = \\int_0^2\\left[xy+\\frac{y^2}{2}\\right]_0^{2-x}\\,dx$$
      $$= \\int_0^2\\left[x(2-x)+\\frac{(2-x)^2}{2}\\right]dx = \\int_0^2\\left(2x-x^2+\\frac{(2-x)^2}{2}\\right)dx$$
      $$= \\int_0^2\\frac{4-x^2}{2}\\,dx = \\left[\\frac{4x}{2}-\\frac{x^3}{6}\\right]_0^2 = 4-\\frac{4}{3} = \\frac{8}{3}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 3 — Dominio tra due parabole</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\iint_D y\\,dA$ dove $D = \\{(x,y): 0\\leq x\\leq 1,\\; x^2\\leq y\\leq \\sqrt{x}\\}$.</p></div>
    <div class="ex-sol">
      $$\\int_0^1\\int_{x^2}^{\\sqrt{x}} y\\,dy\\,dx = \\int_0^1\\left[\\frac{y^2}{2}\\right]_{x^2}^{\\sqrt{x}}\\,dx = \\int_0^1\\frac{x-x^4}{2}\\,dx = \\frac{1}{2}\\left[\\frac{x^2}{2}-\\frac{x^5}{5}\\right]_0^1 = \\frac{1}{2}\\cdot\\frac{3}{10} = \\frac{3}{20}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 4 — Inversione dell'ordine</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\int_0^1\\int_x^1 e^{y^2}\\,dy\\,dx$ invertendo l'ordine di integrazione.</p></div>
    <div class="ex-sol">
      <div class="sl">// Dominio: 0≤x≤1, x≤y≤1. Invertito: 0≤y≤1, 0≤x≤y</div>
      $$\\int_0^1\\int_0^y e^{y^2}\\,dx\\,dy = \\int_0^1 y\\,e^{y^2}\\,dy = \\left[\\frac{e^{y^2}}{2}\\right]_0^1 = \\frac{e-1}{2}$$
    </div>
  </div>
</div>
</div>`
    },

    {
      id: 's02', secNum: '§02', navLabel: '§02 Coordinate polari',
      heading: 'Coordinate polari',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 5 — Integrale su corona circolare</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\iint_D \\sqrt{x^2+y^2}\\,dA$ dove $D$ è la corona $1\\leq x^2+y^2\\leq 4$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Polari: 1≤r≤2, 0≤θ≤2π. √(x²+y²)=r</div>
      $$\\int_0^{2\\pi}\\int_1^2 r\\cdot r\\,dr\\,d\\theta = 2\\pi\\int_1^2 r^2\\,dr = 2\\pi\\left[\\frac{r^3}{3}\\right]_1^2 = 2\\pi\\cdot\\frac{7}{3} = \\frac{14\\pi}{3}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 6 — Integrale con $e^{-(x^2+y^2)}$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\iint_D e^{-(x^2+y^2)}\\,dA$ dove $D$ è il disco $x^2+y^2\\leq R^2$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Polari: 0≤r≤R, 0≤θ≤2π. x²+y²=r²</div>
      $$\\int_0^{2\\pi}\\int_0^R e^{-r^2}r\\,dr\\,d\\theta = 2\\pi\\int_0^R re^{-r^2}\\,dr = 2\\pi\\left[-\\frac{e^{-r^2}}{2}\\right]_0^R = \\pi(1-e^{-R^2})$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 7 — Settore circolare</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\iint_D (x^2+y^2)\\,dA$ dove $D$ è il semicerchio $x^2+y^2\\leq 1$, $y\\geq 0$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Polari: 0≤r≤1, 0≤θ≤π</div>
      $$\\int_0^{\\pi}\\int_0^1 r^2\\cdot r\\,dr\\,d\\theta = \\pi\\int_0^1 r^3\\,dr = \\pi\\cdot\\frac{1}{4} = \\frac{\\pi}{4}$$
    </div>
  </div>
</div>
</div>`
    },

    {
      id: 's03', secNum: '§03', navLabel: '§03 Volumi e aree',
      heading: 'Calcolo di volumi e aree',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 8 — Area di un dominio</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola l'area del dominio $D=\\{(x,y): 0\\leq x\\leq 2,\\; 0\\leq y\\leq 4-x^2\\}$.</p></div>
    <div class="ex-sol">
      $$\\int_0^2\\int_0^{4-x^2}1\\,dy\\,dx = \\int_0^2(4-x^2)\\,dx = \\left[4x-\\frac{x^3}{3}\\right]_0^2 = 8-\\frac{8}{3} = \\frac{16}{3}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 9 — Volume sotto un piano</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola il volume del solido delimitato da $z=2-x-y$ e $z=0$ sul dominio $D=\\{x\\geq 0,\\,y\\geq 0,\\,x+y\\leq 2\\}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// D: 0≤x≤2, 0≤y≤2-x</div>
      $$V = \\int_0^2\\int_0^{2-x}(2-x-y)\\,dy\\,dx = \\int_0^2\\left[(2-x)y-\\frac{y^2}{2}\\right]_0^{2-x}\\,dx$$
      $$= \\int_0^2\\frac{(2-x)^2}{2}\\,dx = \\frac{1}{2}\\left[-\\frac{(2-x)^3}{3}\\right]_0^2 = \\frac{1}{2}\\cdot\\frac{8}{3} = \\frac{4}{3}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 10 — Volume con coordinate polari</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola il volume del solido sotto $z=\\sqrt{4-x^2-y^2}$ e sopra il disco $x^2+y^2\\leq 4$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Polari: 0≤r≤2, 0≤θ≤2π. z=√(4-r²)</div>
      $$V = \\int_0^{2\\pi}\\int_0^2\\sqrt{4-r^2}\\cdot r\\,dr\\,d\\theta = 2\\pi\\int_0^2 r\\sqrt{4-r^2}\\,dr$$
      <div class="sl">// Sostituzione t=4-r², dt=-2r dr</div>
      $$= 2\\pi\\int_4^0\\sqrt{t}\\cdot\\left(-\\frac{dt}{2}\\right) = \\pi\\int_0^4\\sqrt{t}\\,dt = \\pi\\left[\\frac{2}{3}t^{3/2}\\right]_0^4 = \\pi\\cdot\\frac{16}{3} = \\frac{16\\pi}{3}$$
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
