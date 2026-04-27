// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_esercizi_derivate_parziali.js',
    num:   'ESERCIZI',
    title: 'Esercizi su derivate parziali',
    sub:   'Calcolo · Gradiente · Derivata direzionale · Piano tangente · Schwarz'
  },

  sections: [

    {
      id: 's01', secNum: '§01', navLabel: '§01 Calcolo delle derivate parziali',
      heading: 'Calcolo delle derivate parziali',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 1 — Polinomio</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $f_x$ e $f_y$ per $f(x,y) = 4x^3 y^2 - 2xy + 5y^4$.</p></div>
    <div class="ex-sol">
      $$f_x = 12x^2 y^2 - 2y$$
      $$f_y = 8x^3 y - 2x + 20 y^3$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 2 — Esponenziale composto</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $f_x$ e $f_y$ per $f(x,y) = e^{x^2 + y^2}$.</p></div>
    <div class="ex-sol">
      $$f_x = 2x\\,e^{x^2+y^2}$$
      $$f_y = 2y\\,e^{x^2+y^2}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 3 — Quoziente</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $f_x$ e $f_y$ per $f(x,y) = \\dfrac{x}{x^2+y^2}$.</p></div>
    <div class="ex-sol">
      $$f_x = \\frac{(x^2+y^2) - x \\cdot 2x}{(x^2+y^2)^2} = \\frac{y^2-x^2}{(x^2+y^2)^2}$$
      $$f_y = \\frac{0 \\cdot (x^2+y^2) - x \\cdot 2y}{(x^2+y^2)^2} = \\frac{-2xy}{(x^2+y^2)^2}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 4 — Logaritmo e trigonometria</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $f_x$ e $f_y$ per $f(x,y) = \\ln(x^2+y) + \\sin(xy)$.</p></div>
    <div class="ex-sol">
      $$f_x = \\frac{2x}{x^2+y} + y\\cos(xy)$$
      $$f_y = \\frac{1}{x^2+y} + x\\cos(xy)$$
    </div>
  </div>
</div>
</div>`
    },

    {
      id: 's02', secNum: '§02', navLabel: '§02 Gradiente e derivata direzionale',
      heading: 'Gradiente e derivata direzionale',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 5 — Derivata direzionale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Per $f(x,y) = x^2 - y^2$, calcola la derivata direzionale in $(2,1)$ nella direzione di $\\mathbf{u} = (1,1)$.</p></div>
    <div class="ex-sol">
      $$\\nabla f = (2x, -2y),\\quad \\nabla f(2,1) = (4, -2)$$
      <div class="sl">// Versore: ‖u‖=√2, v=(1/√2, 1/√2)</div>
      $$D_{\\mathbf v} f = (4,-2) \\cdot \\left(\\tfrac{1}{\\sqrt 2}, \\tfrac{1}{\\sqrt 2}\\right) = \\frac{4-2}{\\sqrt 2} = \\sqrt{2}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 6 — Direzione di massima crescita</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Per $f(x,y) = e^{x}\\sin y$, trova la direzione di massima crescita in $(0, \\pi/4)$ e il suo valore.</p></div>
    <div class="ex-sol">
      $$f_x = e^x \\sin y,\\quad f_y = e^x \\cos y$$
      $$\\nabla f(0, \\pi/4) = \\left(\\tfrac{\\sqrt 2}{2}, \\tfrac{\\sqrt 2}{2}\\right)$$
      <div class="sl">// Direzione: il versore del gradiente</div>
      $$\\mathbf v_{\\max} = \\left(\\tfrac{1}{\\sqrt 2}, \\tfrac{1}{\\sqrt 2}\\right),\\quad D_{\\max} = \\|\\nabla f\\| = 1$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 7 — Direzione di derivata nulla</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Per $f(x,y) = x^2 + y^2$, in $(1,2)$ trova la direzione lungo cui la derivata direzionale è nulla.</p></div>
    <div class="ex-sol">
      $$\\nabla f(1,2) = (2,4)$$
      <div class="sl">// D_v f = ∇f·v = 0 ⇔ v è perpendicolare a ∇f</div>
      <div class="sl">// Versori perpendicolari a (2,4): direzione (-4,2) normalizzata</div>
      $$\\mathbf v = \\pm\\left(-\\tfrac{2}{\\sqrt 5}, \\tfrac{1}{\\sqrt 5}\\right)$$
      <div class="sl">// Sono le direzioni tangenti alle curve di livello</div>
    </div>
  </div>
</div>
</div>`
    },

    {
      id: 's03', secNum: '§03', navLabel: '§03 Piano tangente',
      heading: 'Piano tangente e approssimazione lineare',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 8 — Piano tangente al paraboloide</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova il piano tangente al grafico di $f(x,y) = x^2 + 2y^2$ in $(1,1)$.</p></div>
    <div class="ex-sol">
      $$f(1,1) = 3,\\quad f_x = 2x,\\ f_y = 4y$$
      $$f_x(1,1) = 2,\\quad f_y(1,1) = 4$$
      $$z = 3 + 2(x-1) + 4(y-1) = 2x + 4y - 3$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 9 — Stima con linearizzazione</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Stima $\\sqrt{4{,}02 \\cdot 8{,}94}$ usando l'approssimazione lineare di $f(x,y)=\\sqrt{xy}$ in $(4,9)$.</p></div>
    <div class="ex-sol">
      $$f(4,9) = \\sqrt{36} = 6,\\quad f_x = \\frac{y}{2\\sqrt{xy}},\\ f_y = \\frac{x}{2\\sqrt{xy}}$$
      $$f_x(4,9) = \\tfrac{9}{12} = \\tfrac{3}{4},\\quad f_y(4,9) = \\tfrac{4}{12} = \\tfrac{1}{3}$$
      $$f \\approx 6 + \\tfrac{3}{4}(x-4) + \\tfrac{1}{3}(y-9)$$
      $$f(4{,}02,\\ 8{,}94) \\approx 6 + 0{,}75 \\cdot 0{,}02 + 0{,}33 \\cdot (-0{,}06) \\approx 6 + 0{,}015 - 0{,}02 = 5{,}995$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 10 — Piano orizzontale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova i punti del grafico di $f(x,y) = x^2 - 4xy + y^3$ in cui il piano tangente è orizzontale.</p></div>
    <div class="ex-sol">
      <div class="sl">// Piano tangente orizzontale ⇔ ∇f = (0,0)</div>
      $$f_x = 2x - 4y = 0 \\implies x = 2y$$
      $$f_y = -4x + 3y^2 = 0 \\implies 3y^2 = 4x = 8y \\implies y(3y-8)=0$$
      <div class="sl">// y=0 → x=0; y=8/3 → x=16/3</div>
      <div class="sl">// Punti: (0,0) e (16/3, 8/3)</div>
    </div>
  </div>
</div>
</div>`
    },

    {
      id: 's04', secNum: '§04', navLabel: '§04 Schwarz e derivate seconde',
      heading: 'Derivate di ordine superiore',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 11 — Verifica Schwarz</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Per $f(x,y) = x^2 e^{xy}$, calcola $f_{xy}$ e $f_{yx}$ e verifica che coincidano.</p></div>
    <div class="ex-sol">
      $$f_x = 2x e^{xy} + x^2 y e^{xy} = e^{xy}(2x + x^2 y)$$
      $$f_y = x^3 e^{xy}$$
      $$f_{xy} = \\partial_y f_x = e^{xy}\\cdot x \\cdot(2x+x^2 y) + e^{xy}\\cdot x^2 = e^{xy}(2x^2 + x^3 y + x^2) = e^{xy}(3x^2 + x^3 y)$$
      $$f_{yx} = \\partial_x f_y = 3x^2 e^{xy} + x^3 y e^{xy} = e^{xy}(3x^2 + x^3 y)$$
      <div class="sl">// f_xy = f_yx ✓</div>
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 12 — Equazione di Laplace</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Verifica che $f(x,y) = \\ln(x^2+y^2)$ soddisfa l'equazione di Laplace $f_{xx} + f_{yy} = 0$ (per $(x,y) \\neq (0,0)$).</p></div>
    <div class="ex-sol">
      $$f_x = \\frac{2x}{x^2+y^2}$$
      $$f_{xx} = \\frac{2(x^2+y^2) - 2x \\cdot 2x}{(x^2+y^2)^2} = \\frac{2(y^2-x^2)}{(x^2+y^2)^2}$$
      <div class="sl">// Per simmetria, scambiando x↔y:</div>
      $$f_{yy} = \\frac{2(x^2-y^2)}{(x^2+y^2)^2}$$
      $$f_{xx} + f_{yy} = \\frac{2(y^2-x^2) + 2(x^2-y^2)}{(x^2+y^2)^2} = 0 \\quad \\checkmark$$
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
