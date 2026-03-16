// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_derivate.js',
    num:   'LEZIONE 06',
    title: 'Derivate',
    sub:   'Rapporto incrementale · Definizione · Significato geometrico · Derivate elementari · Regole di derivazione'
  },

  sections: [

    // ── §01 ──────────────────────────────────────────────────────────
    {
      id:       's01',
      secNum:   '§01',
      navLabel: '§01 Rapporto incrementale',
      heading:  'Dal rapporto incrementale alla derivata',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Rapporto incrementale</div>
  <p>Sia $f : A \\to \\mathbb{R}$ e sia $x_0 \\in A$. Fissato un incremento $h \\neq 0$ tale che $x_0 + h \\in A$, il <strong>rapporto incrementale</strong> di $f$ in $x_0$ con incremento $h$ è:</p>
  $$\\frac{f(x_0 + h) - f(x_0)}{h}$$
  <p>Geometricamente è il coefficiente angolare della retta secante passante per i punti $(x_0,\\, f(x_0))$ e $(x_0+h,\\, f(x_0+h))$.</p>
</div>
</div>

<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Derivata in un punto</div>
  <p>$f$ è <strong>derivabile</strong> in $x_0$ se esiste finito il limite del rapporto incrementale per $h \\to 0$:</p>
  $$f'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0+h) - f(x_0)}{h}$$
  <p>Il valore $f'(x_0)$ si chiama <strong>derivata di $f$ in $x_0$</strong>. Si scrive anche $\\dfrac{df}{dx}(x_0)$ o $Df(x_0)$.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">COLLEGAMENTO CON LA CONTINUITÀ</div>
  <div class="box-title">Derivabilità implica continuità</div>
  <p>Se $f$ è derivabile in $x_0$, allora $f$ è continua in $x_0$.</p>
  <p>Il viceversa è falso: $f(x) = |x|$ è continua in $x_0 = 0$ ma non derivabile (il rapporto incrementale tende a $-1$ da sinistra e a $+1$ da destra).</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Derivata di $f(x) = x^2$ dalla definizione</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $f'(x_0)$ per $f(x) = x^2$ usando la definizione.</p></div>
    <div class="ex-sol">
      $$f'(x_0) = \\lim_{h\\to 0} \\frac{(x_0+h)^2 - x_0^2}{h} = \\lim_{h\\to 0} \\frac{2x_0 h + h^2}{h} = \\lim_{h\\to 0}(2x_0 + h) = 2x_0$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Rapporto incrementale e derivata</span><span class="vfscore" id="vfs01">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Il rapporto incrementale è il coefficiente angolare della secante tra (x₀, f(x₀)) e (x₀+h, f(x₀+h)). Passando al limite si ottiene la tangente.">
      <div class="vq-text">1. Il rapporto incrementale è il coefficiente angolare della retta secante.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Derivabilità implica continuità. La dimostrazione usa il fatto che f(x₀+h)-f(x₀) = [rapporto incrementale]·h → f'(x₀)·0 = 0.">
      <div class="vq-text">2. Se $f$ è derivabile in $x_0$ allora $f$ è continua in $x_0$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: |x| è continua in 0 ma non derivabile (limite da sinistra = -1, da destra = +1). Continuità non implica derivabilità.">
      <div class="vq-text">3. Ogni funzione continua è derivabile.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Dalla definizione: (x²+2xh+h²-x²)/h = 2x+h → 2x. Quindi la derivata di x² è 2x.">
      <div class="vq-text">4. La derivata di $f(x) = x^2$ calcolata dalla definizione è $f'(x) = 2x$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
  </div>
  <div class="vf-foot"><button class="vf-reset" onclick="resetVF(this)">Ricomincia</button><span class="vf-info" id="vfi01"></span></div>
</div>`
    },

    // ── §02 ──────────────────────────────────────────────────────────
    {
      id:       's02',
      secNum:   '§02',
      navLabel: '§02 Significato geometrico',
      heading:  'Significato geometrico della derivata',
      html: `
<div class="fade">
<div class="box prop">
  <div class="box-label">INTERPRETAZIONE GEOMETRICA</div>
  <div class="box-title">La derivata è il coefficiente angolare della tangente</div>
  <p>Quando $h \\to 0$, la retta secante si avvicina alla <strong>retta tangente</strong> al grafico di $f$ nel punto $(x_0, f(x_0))$. La derivata $f'(x_0)$ è il coefficiente angolare di questa tangente:</p>
  $$\\text{retta tangente in } x_0: \\quad y = f(x_0) + f'(x_0)(x - x_0)$$
  <p>Se $f'(x_0) > 0$ la tangente è inclinata verso l'alto (funzione localmente crescente). Se $f'(x_0) < 0$ è inclinata verso il basso (localmente decrescente). Se $f'(x_0) = 0$ la tangente è orizzontale.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">CASI PARTICOLARI</div>
  <div class="box-title">Tangente verticale e punto angoloso</div>
  <p><strong>Tangente verticale:</strong> se il rapporto incrementale tende a $\\pm\\infty$, il grafico ha una tangente verticale in $x_0$: la funzione non è derivabile ma il grafico ha comunque una "direzione" ben definita.</p>
  <p><strong>Punto angoloso:</strong> se i limiti del rapporto incrementale da sinistra e da destra esistono ma sono diversi (come in $|x|$ in $x=0$), il grafico ha uno "spigolo". La funzione non è derivabile.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Equazione della retta tangente</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova la retta tangente a $f(x) = x^2$ nel punto $x_0 = 3$.</p></div>
    <div class="ex-sol">
      <div class="sl">// f'(x) = 2x → f'(3) = 6. Punto di tangenza: (3, f(3)) = (3, 9)</div>
      $$y = f(3) + f'(3)(x-3) = 9 + 6(x-3) = 6x - 9$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Significato geometrico</span><span class="vfscore" id="vfs02">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="La retta tangente in x₀ è y = f(x₀) + f'(x₀)(x-x₀): passa per (x₀, f(x₀)) con coefficiente angolare f'(x₀).">
      <div class="vq-text">1. La retta tangente al grafico di $f$ in $x_0$ ha equazione $y = f(x_0) + f'(x_0)(x-x_0)$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: f'(x₀)=0 significa che la tangente è orizzontale, non necessariamente che x₀ è un massimo o minimo. Potrebbe essere un flesso a tangente orizzontale.">
      <div class="vq-text">2. Se $f'(x_0) = 0$ allora $x_0$ è un punto di massimo o minimo.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Se f'(x₀)>0 la tangente è inclinata verso l'alto: la funzione è localmente crescente in x₀.">
      <div class="vq-text">3. Se $f'(x_0) > 0$ la funzione è localmente crescente in $x_0$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
  </div>
  <div class="vf-foot"><button class="vf-reset" onclick="resetVF(this)">Ricomincia</button><span class="vf-info" id="vfi02"></span></div>
</div>`
    },

    // ── §03 ──────────────────────────────────────────────────────────
    {
      id:       's03',
      secNum:   '§03',
      navLabel: '§03 Derivate elementari',
      heading:  'Derivate delle funzioni elementari',
      html: `
<div class="fade">
<div class="box prop">
  <div class="box-label">TAVOLA DELLE DERIVATE</div>
  <div class="box-title">Da memorizzare</div>
  <div class="tbl">
  <table>
    <thead><tr><th>$f(x)$</th><th>$f'(x)$</th><th>Note</th></tr></thead>
    <tbody>
      <tr><td>$c$ (costante)</td><td>$0$</td><td></td></tr>
      <tr><td>$x^n$</td><td>$n x^{n-1}$</td><td>$n \\in \\mathbb{R}$</td></tr>
      <tr><td>$\\sqrt{x}$</td><td>$\\dfrac{1}{2\\sqrt{x}}$</td><td>$x > 0$</td></tr>
      <tr><td>$\\dfrac{1}{x}$</td><td>$-\\dfrac{1}{x^2}$</td><td>$x \\neq 0$</td></tr>
      <tr><td>$e^x$</td><td>$e^x$</td><td></td></tr>
      <tr><td>$a^x$</td><td>$a^x \\ln a$</td><td>$a > 0,\\, a \\neq 1$</td></tr>
      <tr><td>$\\ln x$</td><td>$\\dfrac{1}{x}$</td><td>$x > 0$</td></tr>
      <tr><td>$\\log_a x$</td><td>$\\dfrac{1}{x \\ln a}$</td><td>$x > 0$</td></tr>
      <tr><td>$\\sin x$</td><td>$\\cos x$</td><td></td></tr>
      <tr><td>$\\cos x$</td><td>$-\\sin x$</td><td></td></tr>
      <tr><td>$\\tan x$</td><td>$\\dfrac{1}{\\cos^2 x}$</td><td>$\\cos x \\neq 0$</td></tr>
    </tbody>
  </table>
  </div>
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Derivate elementari</span><span class="vfscore" id="vfs03">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Dalla regola x^n → nx^(n-1) con n=3: derivata di x³ è 3x².">
      <div class="vq-text">1. La derivata di $x^3$ è $3x^2$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="e^x è l'unica funzione (a meno di costanti moltiplicative) uguale alla propria derivata: (e^x)' = e^x.">
      <div class="vq-text">2. La derivata di $e^x$ è $e^x$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: (cos x)' = -sin x, con il segno meno. Solo (sin x)' = cos x è positivo.">
      <div class="vq-text">3. La derivata di $\\cos x$ è $\\sin x$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="(ln x)' = 1/x per x>0. Si verifica dalla definizione o come inversa di e^x.">
      <div class="vq-text">4. La derivata di $\\ln x$ è $1/x$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
  </div>
  <div class="vf-foot"><button class="vf-reset" onclick="resetVF(this)">Ricomincia</button><span class="vf-info" id="vfi03"></span></div>
</div>`
    },

    // ── §04 ──────────────────────────────────────────────────────────
    {
      id:       's04',
      secNum:   '§04',
      navLabel: '§04 Regole di derivazione',
      heading:  'Regole di derivazione',
      html: `
<div class="fade">
<div class="box thm">
  <div class="box-label">REGOLE</div>
  <div class="box-title">Somma, prodotto, quoziente</div>
  <p>Siano $f$ e $g$ derivabili. Allora:</p>
  <p><strong>Linearità:</strong> $(\\alpha f + \\beta g)' = \\alpha f' + \\beta g'$</p>
  <p><strong>Prodotto (Leibniz):</strong> $(f \\cdot g)' = f' g + f g'$</p>
  <p><strong>Quoziente:</strong> $\\left(\\dfrac{f}{g}\\right)' = \\dfrac{f'g - fg'}{g^2}$ &nbsp; (dove $g \\neq 0$)</p>
</div>
</div>

<div class="fade">
<div class="box thm">
  <div class="box-label">REGOLA DELLA CATENA</div>
  <div class="box-title">Derivata di funzione composta</div>
  <p>Se $g$ è derivabile in $x_0$ e $f$ è derivabile in $g(x_0)$, allora $f \\circ g$ è derivabile in $x_0$ e:</p>
  $$(f \\circ g)'(x_0) = f'(g(x_0)) \\cdot g'(x_0)$$
  <p>In parole: "derivata della funzione esterna valutata nell'interna, per la derivata dell'interna".</p>
  <p>Esempio: $(\\sin(x^2))' = \\cos(x^2) \\cdot 2x$.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 1 — Regola del prodotto</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola la derivata di $f(x) = x^2 \\sin x$.</p></div>
    <div class="ex-sol">
      <div class="sl">// f = x² · sin x → regola del prodotto con u=x², v=sin x</div>
      $$f'(x) = 2x \\cdot \\sin x + x^2 \\cdot \\cos x$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 2 — Regola del quoziente</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola la derivata di $f(x) = \\dfrac{x^2 + 1}{x - 1}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// f = g/h con g = x²+1, h = x-1</div>
      $$f'(x) = \\frac{2x(x-1) - (x^2+1) \\cdot 1}{(x-1)^2} = \\frac{2x^2-2x-x^2-1}{(x-1)^2} = \\frac{x^2-2x-1}{(x-1)^2}$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 3 — Regola della catena</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola la derivata di $f(x) = e^{x^2 + 3x}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Funzione esterna: e^t con t = x²+3x. Derivata esterna: e^t. Derivata interna: 2x+3</div>
      $$f'(x) = e^{x^2+3x} \\cdot (2x+3)$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 4 — Catena doppia</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola la derivata di $f(x) = \\ln(\\sin x)$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Esterna: ln(t) con t = sin x. Derivata esterna: 1/t. Derivata interna: cos x</div>
      $$f'(x) = \\frac{1}{\\sin x} \\cdot \\cos x = \\frac{\\cos x}{\\sin x}$$
    </div>
  </div>
</div>

<div class="quiz fade">
  <div class="quiz-hdr"><span>QUIZ RIEPILOGO</span><span class="qscore" id="sc_ric">0/5</span></div>
  <div class="quiz-body">
    <div class="qq" data-ok="b" data-why="Regola del prodotto: (f·g)' = f'g + fg'. Con f=x³, g=e^x: 3x²·e^x + x³·e^x = e^x(3x²+x³).">
      <div class="qq-text">1. La derivata di $x^3 e^x$ è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr1"> $3x^2 e^x$</label>
        <label class="opt"><input type="radio" name="qr1"> $e^x(3x^2 + x^3)$</label>
        <label class="opt"><input type="radio" name="qr1"> $3x^2 + e^x$</label>
        <label class="opt"><input type="radio" name="qr1"> $x^3 e^x$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="c" data-why="Regola della catena: esterna cos(t) con t=3x, derivata esterna -sin(t), interna 3. Risultato: -sin(3x)·3 = -3sin(3x).">
      <div class="qq-text">2. La derivata di $\\cos(3x)$ è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr2"> $\\sin(3x)$</label>
        <label class="opt"><input type="radio" name="qr2"> $-\\sin(3x)$</label>
        <label class="opt"><input type="radio" name="qr2"> $-3\\sin(3x)$</label>
        <label class="opt"><input type="radio" name="qr2"> $3\\cos(3x)$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="a" data-why="Regola del quoziente: (f/g)' = (f'g-fg')/g². Con f=sin x, g=x: (cos x·x - sin x·1)/x² = (x cos x - sin x)/x².">
      <div class="qq-text">3. La derivata di $\\dfrac{\\sin x}{x}$ è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr3"> $\\dfrac{x\\cos x - \\sin x}{x^2}$</label>
        <label class="opt"><input type="radio" name="qr3"> $\\dfrac{\\cos x}{x}$</label>
        <label class="opt"><input type="radio" name="qr3"> $\\dfrac{\\cos x}{1}$</label>
        <label class="opt"><input type="radio" name="qr3"> $\\dfrac{\\sin x + x\\cos x}{x^2}$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="d" data-why="Catena: esterna ln(t), derivata 1/t, interna x²+1, derivata 2x. Risultato: 2x/(x²+1).">
      <div class="qq-text">4. La derivata di $\\ln(x^2+1)$ è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr4"> $\\dfrac{1}{x^2+1}$</label>
        <label class="opt"><input type="radio" name="qr4"> $\\dfrac{1}{2x}$</label>
        <label class="opt"><input type="radio" name="qr4"> $\\ln(2x)$</label>
        <label class="opt"><input type="radio" name="qr4"> $\\dfrac{2x}{x^2+1}$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="b" data-why="Derivabilità implica continuità ma non viceversa. |x| è continua in 0 ma non derivabile (punto angoloso).">
      <div class="qq-text">5. Quale affermazione è corretta?</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr5"> Continuità implica derivabilità</label>
        <label class="opt"><input type="radio" name="qr5"> Derivabilità implica continuità</label>
        <label class="opt"><input type="radio" name="qr5"> Derivabilità e continuità sono indipendenti</label>
        <label class="opt"><input type="radio" name="qr5"> Sono equivalenti</label>
      </div><div class="qfb"></div>
    </div>
  </div>
  <div class="quiz-foot"><button class="q-reset" onclick="resetQ(this)">Ricomincia</button><span class="q-info" id="info_ric"></span></div>
</div>`
    }

  ],

  disclaimer: `
<div class="fade" style="margin-top:4rem;padding:1.2rem 1.4rem;border:2px solid #aaa;background:#f9f9f6;font-size:.82rem;color:var(--ink-soft);line-height:1.7;">
  <div style="font-family:'Fira Code',monospace;font-size:.63rem;font-weight:600;letter-spacing:.12em;margin-bottom:.4rem;color:#aaa;">DISCLAIMER</div>
  <p>Questo materiale è stato elaborato e distribuito a titolo integrativo e gratuito dal docente, a supporto della didattica curricolare. Non costituisce adozione ufficiale né sostituisce i testi in adozione. Le formule, le definizioni e gli esempi sono di dominio pubblico scientifico. Il docente declina ogni responsabilità per eventuali imprecisioni. La riproduzione parziale è consentita per uso didattico non commerciale con citazione della fonte. © 2026 — uso interno scolastico.</p>
</div>`

};
