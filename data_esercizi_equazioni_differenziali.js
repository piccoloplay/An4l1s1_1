// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_esercizi_equazioni_differenziali.js',
    num:   'ESERCIZI',
    title: 'Esercizi sulle equazioni differenziali',
    sub:   'Variabili separabili · Lineari del primo ordine · Coefficienti costanti · Problema di Cauchy'
  },

  sections: [

    {
      id: 's01', secNum: '§01', navLabel: '§01 Variabili separabili',
      heading: 'Equazioni a variabili separabili',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 1 — Separazione base</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Risolvi $y' = \\dfrac{x}{y}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// y dy = x dx</div>
      $$\\int y\\,dy = \\int x\\,dx \\implies \\frac{y^2}{2} = \\frac{x^2}{2}+c \\implies y^2 = x^2 + C$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 2 — Con Cauchy</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Risolvi $y' = y^2 x$ con $y(0) = 1$.</p></div>
    <div class="ex-sol">
      <div class="sl">// dy/y² = x dx</div>
      $$-\\frac{1}{y} = \\frac{x^2}{2}+c \\implies y = \\frac{-1}{x^2/2+c}$$
      <div class="sl">// y(0)=1: -1/c=1 → c=-1</div>
      $$y = \\frac{1}{1-x^2/2} = \\frac{2}{2-x^2}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 3 — Legge di decadimento</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Una sostanza radioattiva si dimezza ogni $T$ anni. Scrivi e risolvi l'EDO che descrive la quantità $y(t)$ con $y(0)=y_0$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Il decadimento è proporzionale alla quantità: y' = -ky</div>
      $$y = y_0 e^{-kt}$$
      <div class="sl">// Dimezzamento: y(T) = y₀/2 → e^(-kT)=1/2 → k=ln(2)/T</div>
      $$y(t) = y_0\\, e^{-\\frac{\\ln 2}{T}\\,t} = y_0\\cdot 2^{-t/T}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 4 — Separabile non lineare</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Risolvi $y' = \\dfrac{1+y^2}{1+x^2}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// dy/(1+y²) = dx/(1+x²)</div>
      $$\\arctan y = \\arctan x + c \\implies y = \\tan(\\arctan x + c)$$
    </div>
  </div>
</div>
</div>`
    },

    {
      id: 's02', secNum: '§02', navLabel: '§02 Lineari del primo ordine',
      heading: 'Equazioni lineari del primo ordine',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 5 — Fattore integrante costante</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Risolvi $y' + 3y = 6$.</p></div>
    <div class="ex-sol">
      <div class="sl">// μ = e^(3x)</div>
      $$\\frac{d}{dx}[e^{3x}y] = 6e^{3x} \\implies e^{3x}y = 2e^{3x}+C \\implies y = 2+Ce^{-3x}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 6 — Fattore integrante variabile</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Risolvi $y' - \\dfrac{2}{x}y = x^2$ (per $x > 0$).</p></div>
    <div class="ex-sol">
      <div class="sl">// a(x)=-2/x → μ=e^(-∫2/x dx)=e^(-2ln x)=x^(-2)=1/x²</div>
      $$\\frac{d}{dx}\\left[\\frac{y}{x^2}\\right] = \\frac{x^2}{x^2} = 1 \\implies \\frac{y}{x^2} = x+C \\implies y = x^3+Cx^2$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 7 — Lineare con Cauchy</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Risolvi $y' + y = e^{-x}$ con $y(0) = 0$.</p></div>
    <div class="ex-sol">
      <div class="sl">// μ = e^x</div>
      $$\\frac{d}{dx}[e^x y] = e^x\\cdot e^{-x} = 1 \\implies e^x y = x+C \\implies y = (x+C)e^{-x}$$
      <div class="sl">// y(0)=C=0</div>
      $$y = xe^{-x}$$
    </div>
  </div>
</div>
</div>`
    },

    {
      id: 's03', secNum: '§03', navLabel: '§03 Coefficienti costanti',
      heading: 'Equazioni a coefficienti costanti',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 8 — Radice doppia</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Risolvi $y'' + 2y' + y = 0$.</p></div>
    <div class="ex-sol">
      <div class="sl">// λ²+2λ+1=(λ+1)²=0 → λ=-1 radice doppia</div>
      $$y = (C_1+C_2 x)e^{-x}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 9 — Radici complesse</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Risolvi $y'' - 2y' + 5y = 0$.</p></div>
    <div class="ex-sol">
      <div class="sl">// λ²-2λ+5=0 → λ=(2±√(4-20))/2=(2±4i)/2=1±2i. α=1, β=2</div>
      $$y = e^x(C_1\\cos 2x+C_2\\sin 2x)$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 10 — Non omogenea con termine polinomiale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Risolvi $y'' - y' - 2y = 4x$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Omogenea: λ²-λ-2=0 → (λ-2)(λ+1)=0 → λ=2,-1</div>
      $$y_{om} = C_1 e^{2x}+C_2 e^{-x}$$
      <div class="sl">// Particolare: cerca y_p=Ax+B</div>
      $$y_p'=A,\\ y_p''=0 \\implies 0-A-2(Ax+B)=4x$$
      $$-2Ax+(-A-2B)=4x \\implies A=-2,\\ B=1$$
      $$y = C_1e^{2x}+C_2e^{-x}-2x+1$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 11 — Cauchy del secondo ordine</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Risolvi $\\begin{cases} y''+y=0 \\\\ y(0)=1,\\; y'(0)=2 \\end{cases}$</p></div>
    <div class="ex-sol">
      <div class="sl">// λ²+1=0 → λ=±i. y=C₁cos x+C₂sin x</div>
      <div class="sl">// y(0)=C₁=1. y'(x)=-C₁sin x+C₂cos x → y'(0)=C₂=2</div>
      $$y = \\cos x + 2\\sin x$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 12 — Cauchy non omogeneo</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Risolvi $\\begin{cases} y''-3y'+2y=e^{3x} \\\\ y(0)=0,\\; y'(0)=0 \\end{cases}$</p></div>
    <div class="ex-sol">
      <div class="sl">// Omogenea: λ²-3λ+2=0 → λ=1,2. y_om=C₁eˣ+C₂e^(2x)</div>
      <div class="sl">// Particolare: y_p=Ae^(3x). y_p'=3Ae^(3x), y_p''=9Ae^(3x)</div>
      $$9A-9A+2A=1 \\implies 2A=1 \\implies A=\\frac{1}{2}$$
      $$y = C_1e^x+C_2e^{2x}+\\frac{e^{3x}}{2}$$
      <div class="sl">// y(0)=C₁+C₂+1/2=0 → C₁+C₂=-1/2</div>
      <div class="sl">// y'(0)=C₁+2C₂+3/2=0 → C₁+2C₂=-3/2</div>
      <div class="sl">// Sistema: C₂=-1, C₁=1/2</div>
      $$y = \\frac{e^x}{2}-e^{2x}+\\frac{e^{3x}}{2}$$
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
