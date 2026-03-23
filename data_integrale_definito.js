// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_integrale_definito.js',
    num:   'LEZIONE 10',
    title: 'Integrale definito',
    sub:   'Somme di Riemann · Teorema fondamentale · Proprietà · Calcolo di aree · Valor medio'
  },

  sections: [

    // ── §01 ──────────────────────────────────────────────────────────
    {
      id:       's01',
      secNum:   '§01',
      navLabel: '§01 Definizione',
      heading:  'Definizione di integrale definito',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Somme di Riemann e integrale definito</div>
  <p>Sia $f : [a,b] \\to \\mathbb{R}$ limitata. Si suddivide $[a,b]$ in $n$ sottointervalli di ampiezza $\\Delta x = (b-a)/n$ e si sceglie un punto $x_k^*$ in ciascuno. La <strong>somma di Riemann</strong> è:</p>
  $$S_n = \\sum_{k=1}^{n} f(x_k^*)\\,\\Delta x$$
  <p>Se questo limite esiste al variare delle suddivisioni e dei punti scelti, si dice che $f$ è <strong>integrabile secondo Riemann</strong> su $[a,b]$ e il limite è l'<strong>integrale definito</strong>:</p>
  $$\\int_a^b f(x)\\,dx = \\lim_{n\\to\\infty} S_n$$
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">INTERPRETAZIONE GEOMETRICA</div>
  <div class="box-title">Area con segno</div>
  <p>Se $f \\geq 0$ su $[a,b]$, l'integrale definito è l'<strong>area</strong> della regione compresa tra il grafico di $f$ e l'asse $x$.</p>
  <p>Se $f$ cambia segno, l'integrale è l'<strong>area con segno</strong>: le zone sotto l'asse $x$ contribuiscono negativamente.</p>
  <p>Funzioni continue su $[a,b]$ sono sempre integrabili secondo Riemann.</p>
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Definizione</span><span class="vfscore" id="vfs01">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Ogni funzione continua su [a,b] è limitata e integrabile secondo Riemann.">
      <div class="vq-text">1. Ogni funzione continua su $[a,b]$ è integrabile secondo Riemann.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: l'integrale definito è un numero reale, non una famiglia di funzioni. È l'integrale indefinito che produce una famiglia di funzioni.">
      <div class="vq-text">2. L'integrale definito $\\int_a^b f(x)\\,dx$ è una funzione di $x$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Se f≥0 su [a,b], l'integrale definito coincide con l'area della regione sotto il grafico di f e sopra l'asse x.">
      <div class="vq-text">3. Se $f(x) \\geq 0$ su $[a,b]$, allora $\\int_a^b f(x)\\,dx$ è l'area sotto il grafico.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: se f cambia segno, le zone sotto l'asse contribuiscono negativamente. L'integrale è l'area con segno, non l'area totale.">
      <div class="vq-text">4. $\\int_a^b f(x)\\,dx$ dà sempre l'area totale compresa tra grafico e asse $x$.</div>
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
      navLabel: '§02 Teorema fondamentale',
      heading:  'Teorema fondamentale del calcolo integrale',
      html: `
<div class="fade">
<div class="box thm">
  <div class="box-label">TEOREMA FONDAMENTALE</div>
  <div class="box-title">Formula di Leibniz-Newton</div>
  <p>Sia $f : [a,b] \\to \\mathbb{R}$ continua e $F$ una sua primitiva. Allora:</p>
  $$\\int_a^b f(x)\\,dx = F(b) - F(a) = \\Big[F(x)\\Big]_a^b$$
  <p>Questo teorema è il ponte tra integrale definito e indefinito: per calcolare un integrale definito basta trovare una primitiva e valutarla agli estremi.</p>
</div>
</div>

<div class="fade">
<div class="box thm">
  <div class="box-label">TEOREMA</div>
  <div class="box-title">Funzione integrale</div>
  <p>Sia $f$ continua su $[a,b]$. La funzione:</p>
  $$F(x) = \\int_a^x f(t)\\,dt$$
  <p>è derivabile su $[a,b]$ e $F'(x) = f(x)$. In parole: la derivata della funzione integrale è l'integrando valutato nel limite superiore.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 1 — Applicazione della formula</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\int_0^1 (x^2 + e^x)\\,dx$.</p></div>
    <div class="ex-sol">
      $$\\int_0^1(x^2+e^x)\\,dx = \\left[\\frac{x^3}{3}+e^x\\right]_0^1 = \\left(\\frac{1}{3}+e\\right)-(0+1) = \\frac{1}{3}+e-1 = e-\\frac{2}{3}$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 2 — Integrale con valore assoluto</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\int_{-1}^{2} |x|\\,dx$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Spezza nell'intervallo dove x<0 e dove x≥0</div>
      $$\\int_{-1}^2|x|\\,dx = \\int_{-1}^0(-x)\\,dx + \\int_0^2 x\\,dx = \\left[-\\frac{x^2}{2}\\right]_{-1}^0 + \\left[\\frac{x^2}{2}\\right]_0^2 = \\frac{1}{2} + 2 = \\frac{5}{2}$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Teorema fondamentale</span><span class="vfscore" id="vfs02">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Formula di Leibniz-Newton: ∫_a^b f dx = F(b)-F(a) dove F è una primitiva qualsiasi di f.">
      <div class="vq-text">1. $\\int_a^b f(x)\\,dx = F(b) - F(a)$ dove $F$ è una primitiva di $f$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="La funzione integrale F(x)=∫_a^x f(t)dt è derivabile con F'(x)=f(x): è una primitiva di f.">
      <div class="vq-text">2. Se $F(x) = \\int_a^x f(t)\\,dt$, allora $F'(x) = f(x)$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: la costante di integrazione scompare. F(b)-F(a) è uguale per qualsiasi primitiva: (F+c)(b)-(F+c)(a)=F(b)-F(a).">
      <div class="vq-text">3. Il risultato di $\\int_a^b f(x)\\,dx$ dipende dalla scelta della primitiva $F$.</div>
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
      navLabel: '§03 Proprietà',
      heading:  "Proprietà dell'integrale definito",
      html: `
<div class="fade">
<div class="box prop">
  <div class="box-label">PROPRIETÀ</div>
  <div class="box-title">Principali proprietà</div>
  <p><strong>Linearità:</strong> $\\int_a^b [\\alpha f + \\beta g]\\,dx = \\alpha\\int_a^b f\\,dx + \\beta\\int_a^b g\\,dx$</p>
  <p><strong>Additività:</strong> $\\int_a^b f\\,dx = \\int_a^c f\\,dx + \\int_c^b f\\,dx$ per ogni $c \\in [a,b]$</p>
  <p><strong>Inversione degli estremi:</strong> $\\int_a^b f\\,dx = -\\int_b^a f\\,dx$</p>
  <p><strong>Integrale nullo:</strong> $\\int_a^a f\\,dx = 0$</p>
  <p><strong>Monotonia:</strong> se $f \\leq g$ su $[a,b]$, allora $\\int_a^b f\\,dx \\leq \\int_a^b g\\,dx$</p>
  <p><strong>Stima:</strong> $\\left|\\int_a^b f\\,dx\\right| \\leq \\int_a^b |f|\\,dx \\leq M(b-a)$ dove $M = \\max_{[a,b]}|f|$</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 3 — Uso dell'additività</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\int_0^{2\\pi} |\\sin x|\\,dx$.</p></div>
    <div class="ex-sol">
      <div class="sl">// sin x ≥ 0 su [0,π], sin x ≤ 0 su [π,2π]</div>
      $$\\int_0^{2\\pi}|\\sin x|\\,dx = \\int_0^{\\pi}\\sin x\\,dx + \\int_{\\pi}^{2\\pi}(-\\sin x)\\,dx$$
      $$= \\Big[-\\cos x\\Big]_0^{\\pi} + \\Big[\\cos x\\Big]_{\\pi}^{2\\pi} = (1+1)+(1+1) = 4$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Proprietà</span><span class="vfscore" id="vfs03">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Additività: ∫_a^b = ∫_a^c + ∫_c^b per ogni c (anche fuori da [a,b] con opportune convenzioni).">
      <div class="vq-text">1. $\\int_0^3 f\\,dx = \\int_0^1 f\\,dx + \\int_1^3 f\\,dx$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Inversione: ∫_a^b f dx = -∫_b^a f dx.">
      <div class="vq-text">2. $\\int_1^0 f(x)\\,dx = -\\int_0^1 f(x)\\,dx$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: ∫_a^b f dx può essere negativo (se f<0). La stima dice |∫f dx| ≤ ∫|f| dx, non che sia positivo.">
      <div class="vq-text">3. $\\int_a^b f(x)\\,dx \\geq 0$ per ogni funzione $f$ continua.</div>
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
      navLabel: '§04 Calcolo di aree',
      heading:  'Calcolo di aree',
      html: `
<div class="fade">
<div class="box prop">
  <div class="box-label">METODO</div>
  <div class="box-title">Area di una regione piana</div>
  <p><strong>Area tra curva e asse $x$:</strong> se $f \\geq 0$ su $[a,b]$:</p>
  $$A = \\int_a^b f(x)\\,dx$$
  <p>Se $f$ cambia segno, si spezza l'integrale e si prendono i valori assoluti:</p>
  $$A = \\int_a^b |f(x)|\\,dx$$
  <p><strong>Area tra due curve</strong> $f$ e $g$ con $f(x) \\geq g(x)$ su $[a,b]$:</p>
  $$A = \\int_a^b [f(x) - g(x)]\\,dx$$
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 4 — Area sotto una parabola</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola l'area della regione compresa tra $f(x) = x^2$ e l'asse $x$ per $x \\in [0,3]$.</p></div>
    <div class="ex-sol">
      $$A = \\int_0^3 x^2\\,dx = \\left[\\frac{x^3}{3}\\right]_0^3 = 9$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 5 — Area tra due curve</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola l'area della regione compresa tra $f(x) = x^2$ e $g(x) = x$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Intersezioni: x²=x → x(x-1)=0 → x=0,1</div>
      <div class="sl">// Su [0,1]: g(x)=x ≥ x²=f(x)</div>
      $$A = \\int_0^1(x-x^2)\\,dx = \\left[\\frac{x^2}{2}-\\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2}-\\frac{1}{3} = \\frac{1}{6}$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 6 — Area con cambio di segno</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola l'area (geometrica) della regione compresa tra $f(x) = x^3 - x$ e l'asse $x$ per $x \\in [-1,1]$.</p></div>
    <div class="ex-sol">
      <div class="sl">// f=0 per x=0,±1. f>0 su (-1,0), f<0 su (0,1) (funzione dispari)</div>
      $$A = \\int_{-1}^0(x^3-x)\\,dx + \\int_0^1|x^3-x|\\,dx = \\int_{-1}^0(x^3-x)\\,dx + \\int_0^1(x-x^3)\\,dx$$
      $$= \\left[\\frac{x^4}{4}-\\frac{x^2}{2}\\right]_{-1}^0 + \\left[\\frac{x^2}{2}-\\frac{x^4}{4}\\right]_0^1 = \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Aree</span><span class="vfscore" id="vfs04">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="F" data-why="Falso: se f cambia segno, ∫f dx è l'area con segno, non l'area geometrica. Per l'area geometrica serve ∫|f| dx.">
      <div class="vq-text">1. L'area geometrica tra $f$ e l'asse $x$ è sempre $\\int_a^b f(x)\\,dx$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Intersezioni: x²=x → x=0,1. Su [0,1] si ha x≥x², quindi area = ∫_0^1(x-x²)dx = 1/2-1/3 = 1/6.">
      <div class="vq-text">2. L'area tra $y=x$ e $y=x^2$ su $[0,1]$ vale $1/6$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Se f≥g su [a,b], l'area tra le due curve è ∫_a^b [f(x)-g(x)] dx.">
      <div class="vq-text">3. L'area tra $f$ e $g$ con $f \\geq g$ su $[a,b]$ è $\\int_a^b [f(x)-g(x)]\\,dx$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
  </div>
  <div class="vf-foot"><button class="vf-reset" onclick="resetVF(this)">Ricomincia</button><span class="vf-info" id="vfi04"></span></div>
</div>`
    },

    // ── §05 ──────────────────────────────────────────────────────────
    {
      id:       's05',
      secNum:   '§05',
      navLabel: '§05 Valor medio',
      heading:  'Valor medio di una funzione',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Valor medio integrale</div>
  <p>Il <strong>valor medio</strong> di $f$ su $[a,b]$ è:</p>
  $$\\bar{f} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$$
  <p>Geometricamente: è l'altezza del rettangolo con base $[a,b]$ che ha la stessa area della regione sotto il grafico di $f$.</p>
</div>
</div>

<div class="fade">
<div class="box thm">
  <div class="box-label">TEOREMA</div>
  <div class="box-title">Teorema della media integrale</div>
  <p>Se $f$ è continua su $[a,b]$, esiste almeno un punto $c \\in (a,b)$ tale che:</p>
  $$f(c) = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$$
  <p>In parole: una funzione continua assume il suo valor medio in almeno un punto dell'intervallo.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 7 — Calcolo del valor medio</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola il valor medio di $f(x) = x^2$ su $[0,3]$ e trova il punto $c$ in cui viene assunto.</p></div>
    <div class="ex-sol">
      $$\\bar{f} = \\frac{1}{3-0}\\int_0^3 x^2\\,dx = \\frac{1}{3}\\cdot 9 = 3$$
      <div class="sl">// Trova c tale che f(c)=3: c²=3 → c=√3 ∈ (0,3) ✓</div>
      $$c = \\sqrt{3}$$
    </div>
  </div>
</div>

<div class="quiz fade">
  <div class="quiz-hdr"><span>QUIZ RIEPILOGO FINALE</span><span class="qscore" id="sc_fin">0/5</span></div>
  <div class="quiz-body">
    <div class="qq" data-ok="c" data-why="Formula di Leibniz-Newton: [x³/3+e^x]_0^1 = (1/3+e)-(0+1) = e-2/3.">
      <div class="qq-text">1. $\\displaystyle\\int_0^1(x^2+e^x)\\,dx$ vale:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr1"> $e + \\dfrac{1}{3}$</label>
        <label class="opt"><input type="radio" name="qr1"> $e$</label>
        <label class="opt"><input type="radio" name="qr1"> $e - \\dfrac{2}{3}$</label>
        <label class="opt"><input type="radio" name="qr1"> $\\dfrac{1}{3}$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="b" data-why="L'integrale definito è un numero reale (non dipende da x). La variabile x è una variabile muta di integrazione.">
      <div class="qq-text">2. $\\int_a^b f(x)\\,dx$ è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr2"> Una funzione di $x$</label>
        <label class="opt"><input type="radio" name="qr2"> Un numero reale</label>
        <label class="opt"><input type="radio" name="qr2"> Una famiglia di funzioni</label>
        <label class="opt"><input type="radio" name="qr2"> Sempre positivo</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="a" data-why="Area tra x e x²: intersezioni in 0 e 1, x≥x² su [0,1]. Area = ∫_0^1(x-x²)dx = 1/2-1/3 = 1/6.">
      <div class="qq-text">3. L'area tra $y=x$ e $y=x^2$ vale:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr3"> $\\dfrac{1}{6}$</label>
        <label class="opt"><input type="radio" name="qr3"> $\\dfrac{1}{3}$</label>
        <label class="opt"><input type="radio" name="qr3"> $\\dfrac{1}{2}$</label>
        <label class="opt"><input type="radio" name="qr3"> $1$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="d" data-why="Valor medio = (1/(b-a))∫_a^b f dx. Per f=x² su [0,3]: (1/3)∫_0^3 x² dx = (1/3)·9 = 3.">
      <div class="qq-text">4. Il valor medio di $f(x) = x^2$ su $[0,3]$ è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr4"> $1$</label>
        <label class="opt"><input type="radio" name="qr4"> $\\dfrac{9}{2}$</label>
        <label class="opt"><input type="radio" name="qr4"> $9$</label>
        <label class="opt"><input type="radio" name="qr4"> $3$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="b" data-why="F(x)=∫_a^x f(t)dt → F'(x)=f(x) per il teorema fondamentale (seconda parte).">
      <div class="qq-text">5. Se $F(x) = \\int_0^x \\sin(t^2)\\,dt$, allora $F'(x)$ vale:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr5"> $\\cos(x^2)$</label>
        <label class="opt"><input type="radio" name="qr5"> $\\sin(x^2)$</label>
        <label class="opt"><input type="radio" name="qr5"> $2x\\cos(x^2)$</label>
        <label class="opt"><input type="radio" name="qr5"> $\\sin(x^2)\\cdot 2x$</label>
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
