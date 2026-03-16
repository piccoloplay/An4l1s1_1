// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_applicazioni_derivate.js',
    num:   'LEZIONE 07',
    title: 'Applicazioni delle derivate',
    sub:   "L'Hospital · Crescenza e decrescenza · Concavità · Criterio della derivata seconda · Formula di Taylor"
  },

  sections: [

    // ── §01 ──────────────────────────────────────────────────────────
    {
      id:       's01',
      secNum:   '§01',
      navLabel: "§01 Teorema di L'Hospital",
      heading:  "Teorema di L'Hospital",
      html: `
<div class="fade">
<div class="box thm">
  <div class="box-label">TEOREMA</div>
  <div class="box-title">Teorema di L'Hospital</div>
  <p>Siano $f$ e $g$ derivabili in un intorno di $x_0$ (escluso eventualmente $x_0$ stesso) con $g'(x) \\neq 0$ in tale intorno. Se si è in una delle forme indeterminate $0/0$ oppure $\\infty/\\infty$:</p>
  $$\\lim_{x \\to x_0} f(x) = 0 \\text{ e } \\lim_{x \\to x_0} g(x) = 0 \\qquad \\text{oppure} \\qquad \\lim_{x \\to x_0} |f(x)| = \\lim_{x \\to x_0} |g(x)| = +\\infty$$
  <p>e se esiste il limite del rapporto delle derivate, allora:</p>
  $$\\lim_{x \\to x_0} \\frac{f(x)}{g(x)} = \\lim_{x \\to x_0} \\frac{f'(x)}{g'(x)}$$
  <p>Funziona anche per $x_0 = \\pm\\infty$.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">ATTENZIONE</div>
  <div class="box-title">Quando NON usare L'Hospital</div>
  <p>L'Hospital si applica solo a forme $0/0$ o $\\infty/\\infty$. Per altre forme ($0 \\cdot \\infty$, $\\infty - \\infty$, $1^\\infty$, $0^0$, $\\infty^0$) occorre prima riscrivere algebricamente il limite in una delle due forme ammesse.</p>
  <p>Inoltre: se il limite di $f'/g'$ non esiste, non si può concludere nulla sul limite di $f/g$ (il teorema non è un "se e solo se").</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 1 — Forma $0/0$ classica</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x \\to 0} \\frac{\\sin x}{x}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Forma 0/0: sin(0)=0, denominatore=0. Applica L'Hospital</div>
      $$\\lim_{x\\to 0}\\frac{\\sin x}{x} = \\lim_{x\\to 0}\\frac{\\cos x}{1} = \\cos(0) = 1$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 2 — Forma $\\infty/\\infty$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x \\to +\\infty} \\frac{\\ln x}{x}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Forma ∞/∞. Applica L'Hospital</div>
      $$\\lim_{x\\to+\\infty}\\frac{\\ln x}{x} = \\lim_{x\\to+\\infty}\\frac{1/x}{1} = \\lim_{x\\to+\\infty}\\frac{1}{x} = 0$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 3 — L'Hospital applicato due volte</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Forma 0/0. Primo L'Hospital:</div>
      $$\\lim_{x\\to 0}\\frac{e^x - 1 - x}{x^2} = \\lim_{x\\to 0}\\frac{e^x - 1}{2x}$$
      <div class="sl">// Ancora 0/0. Secondo L'Hospital:</div>
      $$= \\lim_{x\\to 0}\\frac{e^x}{2} = \\frac{1}{2}$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — L'Hospital</span><span class="vfscore" id="vfs01">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="F" data-why="Falso: L'Hospital si applica solo alle forme 0/0 e ∞/∞. Per altre forme bisogna prima riscrivere algebricamente.">
      <div class="vq-text">1. Il teorema di L'Hospital si applica a qualsiasi forma indeterminata.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Se dopo L'Hospital si ottiene ancora 0/0 o ∞/∞, si può applicare di nuovo (purché le ipotesi siano soddisfatte).">
      <div class="vq-text">2. L'Hospital può essere applicato più volte di seguito se la forma rimane indeterminata.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="lim sin(x)/x con x→0 è forma 0/0. L'Hospital: lim cos(x)/1 = 1.">
      <div class="vq-text">3. $\\displaystyle\\lim_{x\\to 0}\\dfrac{\\sin x}{x} = 1$ si ottiene con L'Hospital.</div>
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
      navLabel: '§02 Crescenza e decrescenza',
      heading:  'Crescenza, decrescenza e punti critici',
      html: `
<div class="fade">
<div class="box thm">
  <div class="box-label">TEOREMA</div>
  <div class="box-title">Segno della derivata prima e monotonia</div>
  <p>Sia $f$ derivabile su $(a,b)$. Allora:</p>
  <p>— $f' > 0$ su $(a,b)$ $\\implies$ $f$ è <strong>strettamente crescente</strong> su $(a,b)$;</p>
  <p>— $f' < 0$ su $(a,b)$ $\\implies$ $f$ è <strong>strettamente decrescente</strong> su $(a,b)$;</p>
  <p>— $f' = 0$ su $(a,b)$ $\\implies$ $f$ è <strong>costante</strong> su $(a,b)$.</p>
</div>
</div>

<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Punto critico e punto stazionario</div>
  <p>$x_0$ è un <strong>punto stazionario</strong> (o critico) di $f$ se $f'(x_0) = 0$. Geometricamente: la tangente è orizzontale.</p>
  <p>Un punto stazionario può essere un <strong>massimo locale</strong>, un <strong>minimo locale</strong>, oppure un <strong>flesso a tangente orizzontale</strong> (come $x=0$ per $f(x)=x^3$).</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Studio della monotonia di $f(x) = x^3 - 3x$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova gli intervalli di crescenza e decrescenza di $f(x) = x^3 - 3x$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Calcola f'(x)</div>
      $$f'(x) = 3x^2 - 3 = 3(x^2-1) = 3(x-1)(x+1)$$
      <div class="sl">// f'(x) = 0 per x = ±1. Studio del segno:</div>
      <div class="sl">// x < -1: f' > 0 (crescente)</div>
      <div class="sl">// -1 < x < 1: f' < 0 (decrescente)</div>
      <div class="sl">// x > 1: f' > 0 (crescente)</div>
      $$\\text{Massimo locale in } x=-1: f(-1)=2 \\qquad \\text{Minimo locale in } x=1: f(1)=-2$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Monotonia</span><span class="vfscore" id="vfs02">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="F" data-why="Falso: f'(x₀)=0 è condizione necessaria ma non sufficiente. x=0 per f(x)=x³ è un punto stazionario ma non è né massimo né minimo.">
      <div class="vq-text">1. Se $f'(x_0) = 0$ allora $x_0$ è necessariamente un massimo o minimo locale.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Se f'>0 su (a,b) allora f è strettamente crescente: per ogni x₁<x₂ in (a,b) si ha f(x₁)<f(x₂).">
      <div class="vq-text">2. Se $f'(x) > 0$ per ogni $x \\in (a,b)$, allora $f$ è crescente su $(a,b)$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="f'(x)=3x²-3=0 → x=±1. Per x in (-1,1): f'<0 (decrescente). Per |x|>1: f'>0 (crescente).">
      <div class="vq-text">3. $f(x) = x^3 - 3x$ è decrescente sull'intervallo $(-1, 1)$.</div>
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
      navLabel: '§03 Concavità e convessità',
      heading:  'Concavità, convessità e criterio della derivata seconda',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Concavità e convessità</div>
  <p>$f$ è <strong>convessa</strong> su $(a,b)$ se il grafico sta al di sopra di ogni sua tangente (la funzione "sorride": $\\cup$).</p>
  <p>$f$ è <strong>concava</strong> su $(a,b)$ se il grafico sta al di sotto di ogni sua tangente (la funzione "piange": $\\cap$).</p>
  <p>Un <strong>punto di flesso</strong> è un punto in cui la concavità cambia.</p>
</div>
</div>

<div class="fade">
<div class="box thm">
  <div class="box-label">TEOREMA</div>
  <div class="box-title">Segno della derivata seconda e concavità</div>
  <p>Sia $f$ due volte derivabile su $(a,b)$. Allora:</p>
  <p>— $f'' > 0$ su $(a,b)$ $\\implies$ $f$ è <strong>convessa</strong> su $(a,b)$;</p>
  <p>— $f'' < 0$ su $(a,b)$ $\\implies$ $f$ è <strong>concava</strong> su $(a,b)$.</p>
  <p>Se $f''(x_0) = 0$ e $f''$ cambia segno in $x_0$, allora $x_0$ è un punto di flesso.</p>
</div>
</div>

<div class="fade">
<div class="box thm">
  <div class="box-label">TEOREMA</div>
  <div class="box-title">Criterio della derivata seconda per massimi e minimi</div>
  <p>Sia $f'(x_0) = 0$ (punto stazionario). Allora:</p>
  <p>— $f''(x_0) > 0$ $\\implies$ $x_0$ è un <strong>minimo locale</strong> (grafico convesso, "sorride");</p>
  <p>— $f''(x_0) < 0$ $\\implies$ $x_0$ è un <strong>massimo locale</strong> (grafico concavo, "piange");</p>
  <p>— $f''(x_0) = 0$ $\\implies$ il criterio non decide: occorre un'analisi ulteriore.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Classificare i punti stazionari di $f(x) = x^3 - 3x$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Usa la derivata seconda per classificare i punti stazionari di $f(x) = x^3 - 3x$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Punti stazionari: f'(x) = 3x²-3 = 0 → x = ±1</div>
      $$f''(x) = 6x$$
      $$f''(-1) = -6 < 0 \\implies x=-1 \\text{ massimo locale}$$
      $$f''(1) = 6 > 0 \\implies x=1 \\text{ minimo locale}$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Concavità e derivata seconda</span><span class="vfscore" id="vfs03">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="f''>0 → convessa (grafico sopra le tangenti, forma a U). f''<0 → concava (forma a ∩).">
      <div class="vq-text">1. $f'' > 0$ su $(a,b)$ implica che $f$ è convessa su $(a,b)$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: se f''(x₀)=0 il criterio non decide. Esempio: f(x)=x⁴ ha f'(0)=0, f''(0)=0, ma x=0 è un minimo.">
      <div class="vq-text">2. Se $f'(x_0) = 0$ e $f''(x_0) = 0$ allora $x_0$ è un flesso.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="f'(x₀)=0 e f''(x₀)>0: punto stazionario con concavità verso l'alto → minimo locale.">
      <div class="vq-text">3. Se $f'(x_0) = 0$ e $f''(x_0) > 0$ allora $x_0$ è un minimo locale.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="f''(x)=2 > 0 per ogni x → f è convessa su tutto R. Geometricamente la parabola apre verso l'alto.">
      <div class="vq-text">4. $f(x) = x^2$ è convessa su $\\mathbb{R}$ perché $f''(x) = 2 > 0$.</div>
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
      navLabel: '§04 Formula di Taylor',
      heading:  'Formula di Taylor',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">IDEA</div>
  <div class="box-title">Approssimare una funzione con un polinomio</div>
  <p>La derivata fornisce un'approssimazione lineare di $f$ vicino a $x_0$:</p>
  $$f(x) \\approx f(x_0) + f'(x_0)(x-x_0)$$
  <p>La formula di Taylor generalizza questa idea: usando derivate di ordine superiore si ottiene un'approssimazione polinomiale più precisa.</p>
</div>
</div>

<div class="fade">
<div class="box thm">
  <div class="box-label">FORMULA</div>
  <div class="box-title">Polinomio di Taylor di ordine $n$ centrato in $x_0$</div>
  <p>Se $f$ è $n$ volte derivabile in $x_0$, il <strong>polinomio di Taylor</strong> di ordine $n$ è:</p>
  $$T_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k = f(x_0) + f'(x_0)(x-x_0) + \\frac{f''(x_0)}{2}(x-x_0)^2 + \\cdots + \\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n$$
  <p>Il <strong>resto di Peano</strong> garantisce che $f(x) = T_n(x) + o((x-x_0)^n)$ per $x \\to x_0$: l'errore è trascurabile rispetto a $(x-x_0)^n$.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">SVILUPPI NOTEVOLI</div>
  <div class="box-title">Centrati in $x_0 = 0$ (serie di Maclaurin)</div>
  $$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots + \\frac{x^n}{n!} + o(x^n)$$
  $$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots + o(x^{2n})$$
  $$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots + o(x^{2n+1})$$
  $$\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots + o(x^n)$$
  $$(1+x)^\\alpha = 1 + \\alpha x + \\frac{\\alpha(\\alpha-1)}{2}x^2 + \\cdots + o(x^n)$$
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 1 — Calcolo di un limite con Taylor</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}$ usando Taylor.</p></div>
    <div class="ex-sol">
      <div class="sl">// Sviluppo di e^x all'ordine 2:</div>
      $$e^x = 1 + x + \\frac{x^2}{2} + o(x^2)$$
      $$e^x - 1 - x = \\frac{x^2}{2} + o(x^2)$$
      $$\\frac{e^x-1-x}{x^2} = \\frac{x^2/2 + o(x^2)}{x^2} = \\frac{1}{2} + o(1) \\to \\frac{1}{2}$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 2 — Approssimazione lineare</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Approssima $\\sqrt{1.04}$ usando Taylor di ordine 1 di $f(x) = \\sqrt{1+x}$ in $x_0 = 0$.</p></div>
    <div class="ex-sol">
      <div class="sl">// f(x) = (1+x)^(1/2). f(0)=1, f'(x) = (1/2)(1+x)^(-1/2) → f'(0) = 1/2</div>
      $$\\sqrt{1+x} \\approx 1 + \\frac{1}{2}x \\quad \\text{per } x \\approx 0$$
      $$\\sqrt{1.04} = \\sqrt{1+0.04} \\approx 1 + \\frac{0.04}{2} = 1.02$$
      <div class="sl">// Valore esatto: ≈ 1.0198. L'approssimazione è ottima.</div>
    </div>
  </div>
</div>

<div class="quiz fade">
  <div class="quiz-hdr"><span>QUIZ RIEPILOGO FINALE</span><span class="qscore" id="sc_fin">0/5</span></div>
  <div class="quiz-body">
    <div class="qq" data-ok="b" data-why="L'Hospital si applica solo a 0/0 e ∞/∞. Forma 0·∞ va riscritta prima (ad es. come f·g = f/(1/g)).">
      <div class="qq-text">1. L'Hospital si applica direttamente alla forma indeterminata:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr1"> $0 \\cdot \\infty$</label>
        <label class="opt"><input type="radio" name="qr1"> $0/0$</label>
        <label class="opt"><input type="radio" name="qr1"> $\\infty - \\infty$</label>
        <label class="opt"><input type="radio" name="qr1"> $1^\\infty$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="c" data-why="f'>0 su (a,b) ↔ f crescente. f'<0 ↔ decrescente. f'=0 ↔ costante.">
      <div class="qq-text">2. Se $f'(x) < 0$ per ogni $x \\in (a,b)$, allora $f$ è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr2"> Costante</label>
        <label class="opt"><input type="radio" name="qr2"> Crescente</label>
        <label class="opt"><input type="radio" name="qr2"> Decrescente</label>
        <label class="opt"><input type="radio" name="qr2"> Convessa</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="a" data-why="f''(x₀)>0 e f'(x₀)=0: punto stazionario con concavità verso l'alto → minimo locale.">
      <div class="qq-text">3. Se $f'(x_0) = 0$ e $f''(x_0) > 0$, allora $x_0$ è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr3"> Un minimo locale</label>
        <label class="opt"><input type="radio" name="qr3"> Un massimo locale</label>
        <label class="opt"><input type="radio" name="qr3"> Un flesso</label>
        <label class="opt"><input type="radio" name="qr3"> Non si può concludere nulla</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="d" data-why="Sviluppo di e^x: 1 + x + x²/2! + x³/3! + ... Il termine di ordine 2 è x²/2.">
      <div class="qq-text">4. Nel polinomio di Taylor di $e^x$ centrato in $0$, il coefficiente di $x^2$ è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr4"> $1$</label>
        <label class="opt"><input type="radio" name="qr4"> $2$</label>
        <label class="opt"><input type="radio" name="qr4"> $1/3$</label>
        <label class="opt"><input type="radio" name="qr4"> $1/2$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="b" data-why="Il resto di Peano dice f(x) = T_n(x) + o((x-x₀)^n): l'errore è un infinitesimo di ordine superiore a n rispetto a (x-x₀).">
      <div class="qq-text">5. Il resto di Peano nella formula di Taylor indica che:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr5"> L'errore è zero</label>
        <label class="opt"><input type="radio" name="qr5"> L'errore è trascurabile rispetto a $(x-x_0)^n$ per $x \\to x_0$</label>
        <label class="opt"><input type="radio" name="qr5"> Il polinomio è esatto</label>
        <label class="opt"><input type="radio" name="qr5"> La funzione è un polinomio</label>
      </div><div class="qfb"></div>
    </div>
  </div>
  <div class="quiz-foot"><button class="q-reset" onclick="resetQ(this)">Ricomincia</button><span class="q-info" id="info_fin"></span></div>
</div>`
    }

  ],

  disclaimer: `
<div class="fade" style="margin-top:4rem;padding:1.2rem 1.4rem;border:2px solid #aaa;background:#f9f9f6;font-size:.82rem;color:var(--ink-soft);line-height:1.7;">
  <div style="font-family:'Fira Code',monospace;font-size:.63rem;font-weight:600;letter-spacing:.12em;margin-bottom:.4rem;color:#aaa;">DISCLAIMER</div>
  <p>Questo materiale è stato elaborato e distribuito a titolo integrativo e gratuito dal docente, a supporto della didattica curricolare. Non costituisce adozione ufficiale né sostituisce i testi in adozione. Le formule, le definizioni e gli esempi sono di dominio pubblico scientifico. Il docente declina ogni responsabilità per eventuali imprecisioni. La riproduzione parziale è consentita per uso didattico non commerciale con citazione della fonte. © 2026 — uso interno scolastico.</p>
</div>`

};
