// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_esercizi_funzioni_piu_variabili.js',
    num:   'ESERCIZI',
    title: 'Esercizi su funzioni di più variabili',
    sub:   'Dominio · Curve di livello · Limiti · Continuità'
  },

  sections: [

    {
      id: 's01', secNum: '§01', navLabel: '§01 Dominio',
      heading: 'Determinazione del dominio',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 1 — Frazione e radice</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova il dominio di $f(x,y) = \\dfrac{\\sqrt{x-y}}{x^2+y^2-4}$.</p></div>
    <div class="ex-sol">
      $$\\begin{cases} x - y \\geq 0 \\\\ x^2+y^2 - 4 \\neq 0 \\end{cases} \\iff \\begin{cases} y \\leq x \\\\ x^2+y^2 \\neq 4 \\end{cases}$$
      <div class="sl">// Semipiano y≤x privato della circonferenza di raggio 2 centrata nell'origine</div>
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 2 — Logaritmo composto</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova il dominio di $f(x,y) = \\ln(y - x^2)$.</p></div>
    <div class="ex-sol">
      $$y - x^2 > 0 \\iff y > x^2$$
      <div class="sl">// Regione del piano sopra la parabola y = x² (parabola esclusa)</div>
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 3 — Sistema di vincoli</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova il dominio di $f(x,y) = \\sqrt{9 - x^2 - y^2} \\cdot \\arcsin(x+y)$.</p></div>
    <div class="ex-sol">
      $$\\begin{cases} 9 - x^2 - y^2 \\geq 0 \\\\ -1 \\leq x+y \\leq 1 \\end{cases} \\iff \\begin{cases} x^2+y^2 \\leq 9 \\\\ -1 \\leq x+y \\leq 1 \\end{cases}$$
      <div class="sl">// Disco chiuso di raggio 3 intersecato con la striscia tra le rette x+y=±1</div>
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 4 — Esponenziale di logaritmo</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova il dominio di $f(x,y) = \\dfrac{1}{\\ln(xy)}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Servono: argomento di ln positivo (xy>0) E ln(xy)≠0 (cioè xy≠1)</div>
      $$\\begin{cases} xy > 0 \\\\ xy \\neq 1 \\end{cases}$$
      <div class="sl">// I quadranti I e III privati dell'iperbole xy=1</div>
    </div>
  </div>
</div>
</div>`
    },

    {
      id: 's02', secNum: '§02', navLabel: '§02 Curve di livello',
      heading: 'Curve di livello',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 5 — Sella iperbolica</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Descrivi le curve di livello di $f(x,y) = x^2 - y^2$.</p></div>
    <div class="ex-sol">
      $$x^2 - y^2 = k$$
      <div class="sl">// k=0: due rette y=±x</div>
      <div class="sl">// k>0: iperboli con asse trasverso sull'asse x: x²/k - y²/k = 1</div>
      <div class="sl">// k<0: iperboli con asse trasverso sull'asse y: y²/(-k) - x²/(-k) = 1</div>
      <div class="sl">// La superficie z = x²-y² è una sella (paraboloide iperbolico)</div>
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 6 — Funzione esponenziale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Descrivi le curve di livello di $f(x,y) = e^{x+y}$.</p></div>
    <div class="ex-sol">
      $$e^{x+y} = k \\iff x+y = \\ln k \\quad (k > 0)$$
      <div class="sl">// Per ogni k>0 si ottiene una retta x+y=ln k. Famiglia di rette parallele di pendenza -1</div>
      <div class="sl">// Per k≤0 nessuna soluzione: l'esponenziale è sempre positivo</div>
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 7 — Cono</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Descrivi le curve di livello di $f(x,y) = \\sqrt{x^2+y^2}$.</p></div>
    <div class="ex-sol">
      $$\\sqrt{x^2+y^2} = k \\quad (k \\geq 0)$$
      <div class="sl">// k=0: il punto (0,0)</div>
      <div class="sl">// k>0: circonferenza di raggio k centrata in (0,0)</div>
      <div class="sl">// La superficie è un cono retto con vertice in O. Le curve di livello sono cerchi a distanze uguali (proporzionali a k): pendenza costante</div>
    </div>
  </div>
</div>
</div>`
    },

    {
      id: 's03', secNum: '§03', navLabel: '§03 Limiti',
      heading: 'Limiti in due variabili',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 8 — Limite con restrizione</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Studia $\\lim\\limits_{(x,y) \\to (0,0)} \\dfrac{x^2-y^2}{x^2+y^2}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Lungo y=0: f(x,0) = x²/x² = 1 → limite = 1</div>
      <div class="sl">// Lungo x=0: f(0,y) = -y²/y² = -1 → limite = -1</div>
      <div class="sl">// Valori diversi su rette diverse → il limite NON esiste</div>
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 9 — Limite in polari</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\lim\\limits_{(x,y) \\to (0,0)} \\dfrac{x^3 + y^3}{x^2+y^2}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// In polari: x=ρcosθ, y=ρsinθ</div>
      $$f = \\frac{\\rho^3(\\cos^3\\theta+\\sin^3\\theta)}{\\rho^2} = \\rho(\\cos^3\\theta + \\sin^3\\theta)$$
      $$|f| \\leq \\rho(|\\cos^3\\theta|+|\\sin^3\\theta|) \\leq 2\\rho \\to 0$$
      <div class="sl">// Maggiorazione uniforme in θ → limite = 0</div>
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 10 — Limite tipo 0/0 risolvibile</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\lim\\limits_{(x,y) \\to (0,0)} \\dfrac{\\sin(x^2+y^2)}{x^2+y^2}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Sostituzione t = x²+y²: t→0⁺ quando (x,y)→(0,0)</div>
      $$\\lim_{t \\to 0^+} \\frac{\\sin t}{t} = 1$$
      <div class="sl">// Il limite vale 1</div>
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 11 — Estensione continua</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>La funzione $f(x,y) = \\dfrac{xy^2}{x^2+y^2}$ può essere estesa con continuità in $(0,0)$?</p></div>
    <div class="ex-sol">
      <div class="sl">// In polari:</div>
      $$f = \\frac{\\rho\\cos\\theta \\cdot \\rho^2 \\sin^2\\theta}{\\rho^2} = \\rho\\cos\\theta\\sin^2\\theta$$
      $$|f| \\leq \\rho \\to 0$$
      <div class="sl">// Sì: definendo f(0,0)=0 si ottiene una funzione continua in (0,0)</div>
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 12 — Limite "trappola" lungo parabole</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Studia $\\lim\\limits_{(x,y) \\to (0,0)} \\dfrac{xy^2}{x^2+y^4}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Lungo y=mx: f = m²x³/(x²+m⁴x⁴) = m²x/(1+m⁴x²) → 0. Lo stesso lungo x=0 e y=0</div>
      <div class="sl">// Tutte le rette danno 0. Tentiamo lungo x = y²:</div>
      $$f(y^2, y) = \\frac{y^2 \\cdot y^2}{y^4 + y^4} = \\frac{y^4}{2y^4} = \\frac{1}{2}$$
      <div class="sl">// Lungo le rette: 0. Lungo la parabola x=y²: 1/2 → limite NON esiste</div>
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
