// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_integrali_doppi.js',
    num:   'LEZIONE 11',
    title: 'Integrali doppi',
    sub:   'Definizione · Domini normali · Integrazione iterata · Coordinate polari · Volumi e aree'
  },

  sections: [

    // ── §01 ──────────────────────────────────────────────────────────
    {
      id:       's01',
      secNum:   '§01',
      navLabel: '§01 Definizione e proprietà',
      heading:  'Definizione e proprietà degli integrali doppi',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Integrale doppio</div>
  <p>Sia $f : D \\to \\mathbb{R}$ limitata su un dominio limitato $D \\subseteq \\mathbb{R}^2$. Si suddivide $D$ in $n$ sottodomini di area $\\Delta A_k$ e si sceglie un punto $(x_k^*, y_k^*)$ in ciascuno. La <strong>somma di Riemann</strong> è:</p>
  $$S_n = \\sum_{k=1}^{n} f(x_k^*, y_k^*)\\,\\Delta A_k$$
  <p>Se questo limite esiste, si dice che $f$ è <strong>integrabile</strong> su $D$ e il limite è l'<strong>integrale doppio</strong>:</p>
  $$\\iint_D f(x,y)\\,dA = \\lim_{n\\to\\infty} S_n$$
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">INTERPRETAZIONE GEOMETRICA</div>
  <div class="box-title">Volume del solido</div>
  <p>Se $f(x,y) \\geq 0$ su $D$, l'integrale doppio $\\iint_D f\\,dA$ è il <strong>volume</strong> del solido compreso tra il piano $xy$ e la superficie $z = f(x,y)$ sopra il dominio $D$.</p>
  <p>In particolare, $\\iint_D 1\\,dA = \\text{Area}(D)$.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">PROPRIETÀ</div>
  <div class="box-title">Principali proprietà</div>
  <p><strong>Linearità:</strong> $\\iint_D [\\alpha f + \\beta g]\\,dA = \\alpha\\iint_D f\\,dA + \\beta\\iint_D g\\,dA$</p>
  <p><strong>Additività:</strong> se $D = D_1 \\cup D_2$ con $D_1 \\cap D_2$ di area nulla, allora $\\iint_D f\\,dA = \\iint_{D_1} f\\,dA + \\iint_{D_2} f\\,dA$</p>
  <p><strong>Monotonia:</strong> se $f \\leq g$ su $D$, allora $\\iint_D f\\,dA \\leq \\iint_D g\\,dA$</p>
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Definizione e proprietà</span><span class="vfscore" id="vfs01">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Se f≥0, l'integrale doppio coincide con il volume del solido tra il piano xy e la superficie z=f(x,y) sopra D.">
      <div class="vq-text">1. Se $f(x,y) \\geq 0$, allora $\\iint_D f\\,dA$ è il volume del solido sotto la superficie $z=f(x,y)$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="∬_D 1 dA = Area(D): integrare la funzione costante 1 su D dà l'area del dominio.">
      <div class="vq-text">2. $\\iint_D 1\\,dA = \\text{Area}(D)$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="L'integrale doppio è lineare: le costanti escono e si distribuisce sulla somma.">
      <div class="vq-text">3. $\\iint_D [f+g]\\,dA = \\iint_D f\\,dA + \\iint_D g\\,dA$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: l'integrale doppio è un numero reale (scalare), non una funzione di x e y. Le variabili x,y sono variabili mute di integrazione.">
      <div class="vq-text">4. $\\iint_D f(x,y)\\,dA$ è una funzione di $x$ e $y$.</div>
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
      navLabel: '§02 Domini normali',
      heading:  'Domini normali',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Dominio normale rispetto a $x$</div>
  <p>$D$ è <strong>normale rispetto a $x$</strong> se esistono $a, b$ e funzioni $g_1, g_2$ con $g_1(x) \\leq g_2(x)$ tali che:</p>
  $$D = \\{(x,y) : a \\leq x \\leq b,\\; g_1(x) \\leq y \\leq g_2(x)\\}$$
  <p>In parole: per ogni $x$ fissato, $y$ varia tra due funzioni di $x$.</p>
</div>
</div>

<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Dominio normale rispetto a $y$</div>
  <p>$D$ è <strong>normale rispetto a $y$</strong> se esistono $c, d$ e funzioni $h_1, h_2$ con $h_1(y) \\leq h_2(y)$ tali che:</p>
  $$D = \\{(x,y) : c \\leq y \\leq d,\\; h_1(y) \\leq x \\leq h_2(y)\\}$$
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">OSSERVAZIONE</div>
  <div class="box-title">Come descrivere un dominio</div>
  <p>La scelta tra le due descrizioni dipende dalla forma del dominio. Spesso è conveniente quella che semplifica di più i calcoli. Molti domini ammettono entrambe le descrizioni.</p>
  <p><strong>Esempio:</strong> il triangolo con vertici $(0,0)$, $(1,0)$, $(1,1)$:</p>
  <p>— Normale rispetto a $x$: $0 \\leq x \\leq 1$, $0 \\leq y \\leq x$</p>
  <p>— Normale rispetto a $y$: $0 \\leq y \\leq 1$, $y \\leq x \\leq 1$</p>
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Domini normali</span><span class="vfscore" id="vfs02">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="In un dominio normale rispetto a x, per ogni x fissato in [a,b], y varia tra g₁(x) e g₂(x).">
      <div class="vq-text">1. In un dominio normale rispetto a $x$, i limiti di integrazione in $y$ sono funzioni di $x$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Il triangolo con vertici (0,0),(1,0),(1,1) può essere descritto sia come normale rispetto a x (0≤x≤1, 0≤y≤x) che rispetto a y (0≤y≤1, y≤x≤1).">
      <div class="vq-text">2. Un dominio triangolare può essere normale sia rispetto a $x$ che rispetto a $y$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: non tutti i domini sono normali. Un dominio a forma di C, ad esempio, non è normale rispetto a nessuno dei due assi.">
      <div class="vq-text">3. Ogni dominio limitato è normale rispetto a $x$ o rispetto a $y$.</div>
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
      navLabel: '§03 Integrazione iterata',
      heading:  'Calcolo con integrazione iterata (Teorema di Fubini)',
      html: `
<div class="fade">
<div class="box thm">
  <div class="box-label">TEOREMA DI FUBINI</div>
  <div class="box-title">Riduzione a integrali iterati</div>
  <p>Se $D$ è normale rispetto a $x$, cioè $a \\leq x \\leq b$, $g_1(x) \\leq y \\leq g_2(x)$:</p>
  $$\\iint_D f(x,y)\\,dA = \\int_a^b \\left(\\int_{g_1(x)}^{g_2(x)} f(x,y)\\,dy\\right)dx$$
  <p>Se $D$ è normale rispetto a $y$, cioè $c \\leq y \\leq d$, $h_1(y) \\leq x \\leq h_2(y)$:</p>
  $$\\iint_D f(x,y)\\,dA = \\int_c^d \\left(\\int_{h_1(y)}^{h_2(y)} f(x,y)\\,dx\\right)dy$$
  <p>Si integra prima nella variabile "interna" (trattando l'altra come costante), poi nella "esterna".</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 1 — Integrale su un rettangolo</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\iint_D (x + 2y)\\,dA$ dove $D = [0,1] \\times [0,2]$.</p></div>
    <div class="ex-sol">
      $$\\int_0^1\\int_0^2(x+2y)\\,dy\\,dx = \\int_0^1\\Big[xy+y^2\\Big]_0^2\\,dx = \\int_0^1(2x+4)\\,dx = \\Big[x^2+4x\\Big]_0^1 = 5$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 2 — Integrale su un triangolo</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\iint_D xy\\,dA$ dove $D$ è il triangolo con vertici $(0,0)$, $(1,0)$, $(1,1)$.</p></div>
    <div class="ex-sol">
      <div class="sl">// D normale rispetto a x: 0≤x≤1, 0≤y≤x</div>
      $$\\int_0^1\\int_0^x xy\\,dy\\,dx = \\int_0^1 x\\left[\\frac{y^2}{2}\\right]_0^x\\,dx = \\int_0^1\\frac{x^3}{2}\\,dx = \\left[\\frac{x^4}{8}\\right]_0^1 = \\frac{1}{8}$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 3 — Inversione dell'ordine di integrazione</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\int_0^1\\int_y^1 e^{x^2}\\,dx\\,dy$ invertendo l'ordine di integrazione.</p></div>
    <div class="ex-sol">
      <div class="sl">// Dominio: 0≤y≤1, y≤x≤1. Equivalente: 0≤x≤1, 0≤y≤x (normale rispetto a y)</div>
      $$\\int_0^1\\int_0^x e^{x^2}\\,dy\\,dx = \\int_0^1 e^{x^2}\\cdot x\\,dx = \\left[\\frac{e^{x^2}}{2}\\right]_0^1 = \\frac{e-1}{2}$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Integrazione iterata</span><span class="vfscore" id="vfs03">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Fubini: su dominio normale rispetto a x si integra prima in y (trattando x come costante) poi in x.">
      <div class="vq-text">1. Nell'integrale iterato $\\int_a^b\\!\\int_{g_1}^{g_2} f\\,dy\\,dx$ si integra prima in $y$ poi in $x$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Invertire l'ordine di integrazione può semplificare il calcolo, ma bisogna ridescrivere correttamente il dominio.">
      <div class="vq-text">2. È possibile invertire l'ordine di integrazione in un integrale doppio (con opportuna ridescrittura del dominio).</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: i limiti di integrazione in y dipendono da x (se il dominio è normale rispetto a x). Non sono semplici costanti in generale.">
      <div class="vq-text">3. Nell'integrazione iterata i limiti interni sono sempre costanti.</div>
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
      navLabel: '§04 Coordinate polari',
      heading:  'Coordinate polari',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">CAMBIO DI VARIABILI</div>
  <div class="box-title">Coordinate polari</div>
  <p>Le coordinate polari $(r, \\theta)$ sono legate alle coordinate cartesiane da:</p>
  $$x = r\\cos\\theta, \\quad y = r\\sin\\theta, \\quad r \\geq 0, \\quad \\theta \\in [0, 2\\pi)$$
  <p>Il cambio di variabili nell'integrale doppio introduce il <strong>jacobiano</strong> $r$:</p>
  $$\\iint_D f(x,y)\\,dx\\,dy = \\iint_{D^*} f(r\\cos\\theta,\\, r\\sin\\theta)\\cdot r\\,dr\\,d\\theta$$
  <p>Il fattore $r$ è essenziale e non va mai dimenticato.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">QUANDO USARE LE POLARI</div>
  <div class="box-title">Domini circolari o con simmetria radiale</div>
  <p>Le coordinate polari sono convenienti quando il dominio è un disco, un settore circolare, o una corona circolare, oppure quando l'integrando contiene $x^2 + y^2$.</p>
  <p><strong>Disco:</strong> $x^2 + y^2 \\leq R^2$ diventa $0 \\leq r \\leq R$, $0 \\leq \\theta \\leq 2\\pi$.</p>
  <p><strong>Semicerchio superiore:</strong> $x^2+y^2 \\leq R^2$, $y \\geq 0$ diventa $0 \\leq r \\leq R$, $0 \\leq \\theta \\leq \\pi$.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 4 — Integrale su un disco</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\iint_D (x^2+y^2)\\,dA$ dove $D$ è il disco $x^2+y^2 \\leq 4$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Polari: x²+y²=r², dominio: 0≤r≤2, 0≤θ≤2π, jacobiano r</div>
      $$\\int_0^{2\\pi}\\int_0^2 r^2 \\cdot r\\,dr\\,d\\theta = \\int_0^{2\\pi}d\\theta\\int_0^2 r^3\\,dr = 2\\pi\\cdot\\left[\\frac{r^4}{4}\\right]_0^2 = 2\\pi\\cdot 4 = 8\\pi$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 5 — Area con coordinate polari</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola l'area del disco di raggio $R$.</p></div>
    <div class="ex-sol">
      $$\\text{Area} = \\iint_D 1\\,dA = \\int_0^{2\\pi}\\int_0^R r\\,dr\\,d\\theta = 2\\pi\\cdot\\frac{R^2}{2} = \\pi R^2$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Coordinate polari</span><span class="vfscore" id="vfs04">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Il jacobiano del cambio di variabili cartesiane→polari è r. Senza il fattore r il risultato è sbagliato.">
      <div class="vq-text">1. Nel cambio in coordinate polari compare il fattore $r$: $dx\\,dy = r\\,dr\\,d\\theta$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Il disco x²+y²≤R² in polari è semplicemente 0≤r≤R, 0≤θ≤2π: forma molto semplice.">
      <div class="vq-text">2. Il disco $x^2+y^2 \\leq R^2$ in coordinate polari è $0 \\leq r \\leq R$, $0 \\leq \\theta \\leq 2\\pi$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: le polari sono convenienti per domini con simmetria circolare o integrandi con x²+y². Per domini rettangolari le cartesiane sono più semplici.">
      <div class="vq-text">3. Le coordinate polari sono sempre più convenienti delle cartesiane.</div>
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
      navLabel: '§05 Volumi e aree',
      heading:  'Calcolo di volumi e aree',
      html: `
<div class="fade">
<div class="box prop">
  <div class="box-label">APPLICAZIONI</div>
  <div class="box-title">Volumi e aree con integrali doppi</div>
  <p><strong>Area del dominio:</strong> $\\text{Area}(D) = \\iint_D 1\\,dA$</p>
  <p><strong>Volume del solido</strong> tra $z=0$ e $z=f(x,y)\\geq 0$: $V = \\iint_D f(x,y)\\,dA$</p>
  <p><strong>Volume tra due superfici</strong> $f \\geq g$ su $D$: $V = \\iint_D [f(x,y)-g(x,y)]\\,dA$</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 6 — Volume di un paraboloide</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola il volume del solido delimitato da $z = 4 - x^2 - y^2$ e $z = 0$ (sopra il disco $x^2+y^2 \\leq 4$).</p></div>
    <div class="ex-sol">
      <div class="sl">// Polari: 0≤r≤2, 0≤θ≤2π, f=4-r²</div>
      $$V = \\int_0^{2\\pi}\\int_0^2(4-r^2)r\\,dr\\,d\\theta = 2\\pi\\int_0^2(4r-r^3)\\,dr = 2\\pi\\left[2r^2-\\frac{r^4}{4}\\right]_0^2 = 2\\pi(8-4) = 8\\pi$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 7 — Area di un dominio piano</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola l'area del dominio $D = \\{(x,y) : 0 \\leq x \\leq 1,\\; x^2 \\leq y \\leq x\\}$.</p></div>
    <div class="ex-sol">
      $$\\text{Area}(D) = \\int_0^1\\int_{x^2}^{x} 1\\,dy\\,dx = \\int_0^1(x-x^2)\\,dx = \\left[\\frac{x^2}{2}-\\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2}-\\frac{1}{3} = \\frac{1}{6}$$
    </div>
  </div>
</div>

<div class="quiz fade">
  <div class="quiz-hdr"><span>QUIZ RIEPILOGO FINALE</span><span class="qscore" id="sc_fin">0/5</span></div>
  <div class="quiz-body">
    <div class="qq" data-ok="b" data-why="∬_D 1 dA = Area(D). Per il rettangolo [0,1]×[0,2]: Area = 1·2 = 2.">
      <div class="qq-text">1. $\\iint_D 1\\,dA$ dove $D=[0,1]\\times[0,2]$ vale:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr1"> $1$</label>
        <label class="opt"><input type="radio" name="qr1"> $2$</label>
        <label class="opt"><input type="radio" name="qr1"> $4$</label>
        <label class="opt"><input type="radio" name="qr1"> $0$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="c" data-why="Triangolo 0≤x≤1, 0≤y≤x: ∫_0^1∫_0^x xy dy dx = ∫_0^1 x·(x²/2) dx = ∫_0^1 x³/2 dx = 1/8.">
      <div class="qq-text">2. $\\iint_D xy\\,dA$ sul triangolo $0\\leq x\\leq 1$, $0\\leq y\\leq x$ vale:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr2"> $\\dfrac{1}{4}$</label>
        <label class="opt"><input type="radio" name="qr2"> $\\dfrac{1}{6}$</label>
        <label class="opt"><input type="radio" name="qr2"> $\\dfrac{1}{8}$</label>
        <label class="opt"><input type="radio" name="qr2"> $\\dfrac{1}{2}$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="a" data-why="Nel cambio in polari: dx dy = r dr dθ. Il fattore r è il jacobiano della trasformazione.">
      <div class="qq-text">3. Nel cambio in coordinate polari, $dx\\,dy$ diventa:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr3"> $r\\,dr\\,d\\theta$</label>
        <label class="opt"><input type="radio" name="qr3"> $dr\\,d\\theta$</label>
        <label class="opt"><input type="radio" name="qr3"> $r^2\\,dr\\,d\\theta$</label>
        <label class="opt"><input type="radio" name="qr3"> $\\dfrac{1}{r}\\,dr\\,d\\theta$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="d" data-why="Polari: 0≤r≤2, 0≤θ≤2π. ∫_0^{2π}∫_0^2 r²·r dr dθ = 2π·[r⁴/4]_0^2 = 2π·4 = 8π.">
      <div class="qq-text">4. $\\iint_D (x^2+y^2)\\,dA$ sul disco $x^2+y^2\\leq 4$ vale:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr4"> $4\\pi$</label>
        <label class="opt"><input type="radio" name="qr4"> $16\\pi$</label>
        <label class="opt"><input type="radio" name="qr4"> $2\\pi$</label>
        <label class="opt"><input type="radio" name="qr4"> $8\\pi$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="b" data-why="V = ∬_D (4-r²) dA in polari: 2π∫_0^2(4r-r³)dr = 2π[2r²-r⁴/4]_0^2 = 2π·4 = 8π.">
      <div class="qq-text">5. Il volume sotto $z=4-x^2-y^2$ e sopra $x^2+y^2\\leq 4$ vale:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr5"> $4\\pi$</label>
        <label class="opt"><input type="radio" name="qr5"> $8\\pi$</label>
        <label class="opt"><input type="radio" name="qr5"> $16\\pi$</label>
        <label class="opt"><input type="radio" name="qr5"> $2\\pi$</label>
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
