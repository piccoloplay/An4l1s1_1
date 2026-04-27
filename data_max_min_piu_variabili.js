// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_max_min_piu_variabili.js',
    num:   'LEZIONE 15',
    title: 'Massimi e minimi in più variabili',
    sub:   'Punti stazionari · Hessiana · Estremi vincolati · Lagrange'
  },

  sections: [

    // ── §01 ──────────────────────────────────────────────────────────
    {
      id:       's01',
      secNum:   '§01',
      navLabel: '§01 Punti stazionari',
      heading:  'Punti stazionari',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Estremi locali in più variabili</div>
  <p>$(x_0,y_0)$ è un <strong>massimo locale</strong> di $f$ se esiste un intorno $U$ tale che $f(x,y) \\leq f(x_0,y_0)$ per ogni $(x,y) \\in U$.</p>
  <p>$(x_0,y_0)$ è un <strong>minimo locale</strong> se $f(x,y) \\geq f(x_0,y_0)$ in un intorno.</p>
  <p>Se le disuguaglianze sono strette, l'estremo è <strong>stretto</strong>.</p>
</div>
</div>

<div class="fade">
<div class="box thm">
  <div class="box-label">TEOREMA DI FERMAT (in 2 variabili)</div>
  <div class="box-title">Condizione necessaria</div>
  <p>Se $f$ è differenziabile in $(x_0,y_0)$ e $(x_0,y_0)$ è un estremo locale interno al dominio, allora</p>
  $$\\nabla f(x_0,y_0) = (0,0) \\iff f_x(x_0,y_0) = 0 \\text{ e } f_y(x_0,y_0) = 0$$
  <p>Un punto in cui il gradiente si annulla si chiama <strong>punto stazionario</strong> (o critico).</p>
  <p><strong>Attenzione</strong>: la condizione è necessaria ma non sufficiente. Un punto stazionario può essere massimo, minimo o <strong>punto di sella</strong>.</p>
</div>
</div>

<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Punto di sella</div>
  <p>Un punto stazionario $(x_0,y_0)$ è un <strong>punto di sella</strong> se in ogni intorno esistono punti dove $f > f(x_0,y_0)$ e punti dove $f < f(x_0,y_0)$.</p>
  <p>Esempio classico: $f(x,y)=x^2-y^2$ in $(0,0)$. Lungo $y=0$ è un minimo, lungo $x=0$ è un massimo. La superficie ha la forma di una sella da cavallo.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Trovare punti stazionari</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova i punti stazionari di $f(x,y) = x^3 - 3xy + y^3$.</p></div>
    <div class="ex-sol">
      $$f_x = 3x^2 - 3y = 0 \\implies y = x^2$$
      $$f_y = -3x + 3y^2 = 0 \\implies x = y^2$$
      <div class="sl">// Sostituendo: x = (x²)² = x⁴ → x⁴-x = x(x³-1) = 0</div>
      <div class="sl">// x=0 → y=0; x=1 → y=1</div>
      $$\\text{Punti stazionari: } (0,0) \\text{ e } (1,1)$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Punti stazionari</span><span class="vfscore" id="vfs01">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Fermat in 2 variabili: in un estremo locale interno con f differenziabile, ∇f=0.">
      <div class="vq-text">1. Se $(x_0,y_0)$ è un estremo locale interno e $f$ è differenziabile, allora $\\nabla f(x_0,y_0) = (0,0)$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: ∇f=0 è condizione necessaria ma non sufficiente. Un punto stazionario può essere un punto di sella.">
      <div class="vq-text">2. Se $\\nabla f(x_0,y_0) = (0,0)$ allora $(x_0,y_0)$ è un estremo locale.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="In un punto di sella, lungo direzioni diverse f è massimo e minimo: la superficie sale in alcune direzioni e scende in altre.">
      <div class="vq-text">3. In un punto di sella, $f$ ha valori sia maggiori sia minori di $f(x_0,y_0)$ in ogni intorno.</div>
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
      navLabel: '§02 Hessiana e classificazione',
      heading:  'Matrice hessiana e classificazione',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Matrice hessiana</div>
  <p>La <strong>matrice hessiana</strong> di $f$ in $(x_0,y_0)$ è</p>
  $$H_f(x_0,y_0) = \\begin{pmatrix} f_{xx} & f_{xy} \\\\ f_{yx} & f_{yy} \\end{pmatrix}_{(x_0,y_0)}$$
  <p>Per le funzioni $C^2$, per Schwarz $f_{xy}=f_{yx}$, quindi la hessiana è simmetrica.</p>
  <p>Determinante:</p>
  $$\\det H_f = f_{xx} f_{yy} - (f_{xy})^2$$
</div>
</div>

<div class="fade">
<div class="box thm">
  <div class="box-label">CRITERIO DELL'HESSIANA</div>
  <div class="box-title">Classificazione di un punto stazionario</div>
  <p>Sia $(x_0,y_0)$ stazionario, $f$ di classe $C^2$. Si calcolano $\\det H_f$ e $f_{xx}$ in $(x_0,y_0)$:</p>
  <p>— $\\det H_f > 0$ e $f_{xx} > 0 \\implies$ <strong>minimo locale</strong></p>
  <p>— $\\det H_f > 0$ e $f_{xx} < 0 \\implies$ <strong>massimo locale</strong></p>
  <p>— $\\det H_f < 0 \\implies$ <strong>punto di sella</strong></p>
  <p>— $\\det H_f = 0 \\implies$ <strong>caso dubbio</strong> (servono altri strumenti)</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">REGOLA MNEMONICA</div>
  <div class="box-title">Come ricordarla</div>
  <p>Se $\\det H_f > 0$ il punto è un <em>vero</em> estremo, e il segno di $f_{xx}$ ne dice il tipo (come per il criterio della derivata seconda in 1 variabile).</p>
  <p>Se $\\det H_f < 0$, le concavità nelle due direzioni sono opposte: la superficie sale in una direzione e scende in un'altra → sella.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Classificazione completa</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Classifica i punti stazionari di $f(x,y) = x^3 - 3xy + y^3$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Dal §01: punti stazionari (0,0) e (1,1)</div>
      $$f_{xx} = 6x,\\quad f_{yy} = 6y,\\quad f_{xy} = -3$$
      $$\\det H_f = 36xy - 9$$
      <div class="sl">// In (0,0): det = -9 < 0 → punto di sella</div>
      <div class="sl">// In (1,1): det = 36-9 = 27 > 0 e f_xx(1,1) = 6 > 0 → minimo locale</div>
      $$f(1,1) = 1 - 3 + 1 = -1$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Caso con esponenziale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Classifica i punti stazionari di $f(x,y) = (x^2+y^2)e^{-x}$.</p></div>
    <div class="ex-sol">
      $$f_x = 2x\\,e^{-x} - (x^2+y^2)e^{-x} = e^{-x}(2x-x^2-y^2)$$
      $$f_y = 2y\\,e^{-x}$$
      <div class="sl">// f_y=0 → y=0. f_x=0 con y=0: e^{-x}(2x-x²)=0 → x(2-x)=0 → x=0 o x=2</div>
      <div class="sl">// Punti stazionari: (0,0) e (2,0)</div>
      $$f_{xx}\\big|_{(0,0)} = (2-2x+x^2-2x+y^2)e^{-x}\\big|_{(0,0)} = 2$$
      $$f_{yy}\\big|_{(0,0)} = 2e^0 = 2,\\quad f_{xy}(0,0) = -2y\\,e^{-x}\\big|_{(0,0)}=0$$
      <div class="sl">// In (0,0): det = 4 > 0, f_xx = 2 > 0 → minimo locale, f(0,0)=0</div>
      <div class="sl">// In (2,0): calcoli analoghi danno det < 0 → punto di sella</div>
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Hessiana</span><span class="vfscore" id="vfs02">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Per il criterio: det H > 0 e f_xx > 0 → minimo locale. Le due condizioni insieme garantiscono concavità positiva in tutte le direzioni.">
      <div class="vq-text">1. Se in un punto stazionario $\\det H_f > 0$ e $f_{xx} > 0$, allora è un minimo locale.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="det H_f < 0 ⇒ gli autovalori della hessiana hanno segno opposto: f sale in una direzione e scende in un'altra → sella.">
      <div class="vq-text">2. Se $\\det H_f < 0$ in un punto stazionario, il punto è di sella.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: se det H = 0 il criterio non decide. Servono analisi ulteriori (es. studio diretto, sviluppi di Taylor di ordine superiore).">
      <div class="vq-text">3. Se $\\det H_f = 0$ allora il punto è certamente un punto di sella.</div>
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
      navLabel: '§03 Estremi assoluti',
      heading:  'Massimi e minimi assoluti su domini chiusi',
      html: `
<div class="fade">
<div class="box thm">
  <div class="box-label">WEIERSTRASS</div>
  <div class="box-title">Esistenza degli estremi assoluti</div>
  <p>Se $f$ è continua su $K \\subset \\mathbb{R}^2$ <strong>chiuso e limitato</strong>, allora $f$ raggiunge il massimo e il minimo assoluti su $K$.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">METODO</div>
  <div class="box-title">Procedura per gli estremi assoluti su $K$</div>
  <p>1. <strong>Punti interni</strong>: trova i punti stazionari di $f$ nell'interno di $K$ (risolvi $\\nabla f = 0$).</p>
  <p>2. <strong>Frontiera</strong>: studia $f$ ristretta al bordo di $K$. Se la frontiera è descritta da una curva, parametrizzala oppure usa Lagrange (§04). Se è composta da più tratti, esamina ciascuno separatamente.</p>
  <p>3. <strong>Vertici / spigoli</strong>: includi i vertici della frontiera (se presenti).</p>
  <p>4. <strong>Confronto</strong>: valuta $f$ in tutti i punti candidati e seleziona il valore più grande (max) e più piccolo (min).</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Estremi su un quadrato</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova max e min assoluti di $f(x,y) = x^2 + y^2 - xy$ su $K = [0,2] \\times [0,2]$.</p></div>
    <div class="ex-sol">
      <div class="sl">// 1. Interno: ∇f = (2x-y, 2y-x) = (0,0) → x=y=0. Solo (0,0), che è sul bordo (non interno).</div>
      <div class="sl">// 2. Frontiera: 4 lati del quadrato</div>
      <div class="sl">// — Lato x=0, y∈[0,2]: f=y² → min 0 in (0,0), max 4 in (0,2)</div>
      <div class="sl">// — Lato x=2, y∈[0,2]: f=4+y²-2y, f'=2y-2=0 → y=1, f(2,1)=3. f(2,0)=4, f(2,2)=4</div>
      <div class="sl">// — Lato y=0, x∈[0,2]: f=x² → min 0 in (0,0), max 4 in (2,0)</div>
      <div class="sl">// — Lato y=2, x∈[0,2]: f=x²+4-2x, f'=2x-2=0 → x=1, f(1,2)=3. f(0,2)=4, f(2,2)=4</div>
      $$\\text{Max assoluto: } 4 \\text{ in } (0,2),(2,0),(2,2) \\qquad \\text{Min assoluto: } 0 \\text{ in } (0,0)$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Estremi su un disco</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova max e min assoluti di $f(x,y) = x^2 + y^2 + xy$ sul disco $K=\\{x^2+y^2 \\leq 1\\}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// 1. Interno: ∇f=(2x+y, 2y+x)=(0,0) → x=y=0. f(0,0)=0</div>
      <div class="sl">// 2. Frontiera x²+y²=1: parametrizza x=cosθ, y=sinθ</div>
      $$g(\\theta) = 1 + \\cos\\theta\\sin\\theta = 1 + \\tfrac{1}{2}\\sin(2\\theta)$$
      <div class="sl">// max: 1+1/2 = 3/2 in 2θ=π/2 → θ=π/4 → (√2/2, √2/2)</div>
      <div class="sl">// min: 1-1/2 = 1/2 in 2θ=3π/2 → θ=3π/4 → (-√2/2, √2/2)</div>
      $$\\text{Max assoluto: } \\tfrac{3}{2} \\qquad \\text{Min assoluto: } 0 \\text{ in } (0,0)$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Estremi assoluti</span><span class="vfscore" id="vfs03">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Per Weierstrass: f continua su compatto K (chiuso e limitato) ⇒ esistenza di max e min assoluti.">
      <div class="vq-text">1. Una funzione continua su un insieme chiuso e limitato di $\\mathbb{R}^2$ ha sempre max e min assoluti.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: gli estremi assoluti possono essere all'interno (in un punto stazionario) oppure sulla frontiera. Vanno cercati in entrambi.">
      <div class="vq-text">2. Gli estremi assoluti su un dominio compatto si trovano sempre solo sulla frontiera.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Sui domini compatti di R² occorre confrontare i candidati interni (∇f=0) e i candidati di frontiera (parametrizzazione o Lagrange).">
      <div class="vq-text">3. Per cercare max e min assoluti su un dominio compatto bisogna controllare sia i punti stazionari interni sia il bordo.</div>
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
      navLabel: '§04 Lagrange · Quiz',
      heading:  'Moltiplicatori di Lagrange e quiz finale',
      html: `
<div class="fade">
<div class="box thm">
  <div class="box-label">METODO DI LAGRANGE</div>
  <div class="box-title">Estremi vincolati</div>
  <p>Per trovare gli estremi di $f(x,y)$ soggetta al vincolo $g(x,y) = 0$ (con $\\nabla g \\neq 0$ sui punti del vincolo):</p>
  <p>nei punti di estremo vincolato esiste $\\lambda \\in \\mathbb{R}$ (moltiplicatore di Lagrange) tale che</p>
  $$\\nabla f(x,y) = \\lambda\\,\\nabla g(x,y)$$
  <p>Il sistema da risolvere è</p>
  $$\\begin{cases} f_x = \\lambda\\,g_x \\\\ f_y = \\lambda\\,g_y \\\\ g(x,y) = 0 \\end{cases}$$
  <p>Tre equazioni nelle tre incognite $x, y, \\lambda$.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">INTERPRETAZIONE GEOMETRICA</div>
  <div class="box-title">Tangenza tra livelli e vincolo</div>
  <p>$\\nabla f \\parallel \\nabla g$ significa che il vincolo $g=0$ è <strong>tangente</strong> a una curva di livello di $f$ nel punto di estremo.</p>
  <p>Visivamente: lungo il vincolo, gli estremi di $f$ stanno dove il vincolo "tocca" senza attraversarla la curva di livello con valore più alto/basso.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Lagrange su circonferenza</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova max e min di $f(x,y) = x+y$ sul vincolo $x^2+y^2 = 1$.</p></div>
    <div class="ex-sol">
      $$\\nabla f = (1,1),\\quad g(x,y) = x^2+y^2-1,\\quad \\nabla g = (2x,2y)$$
      $$\\begin{cases} 1 = 2\\lambda x \\\\ 1 = 2\\lambda y \\\\ x^2+y^2 = 1 \\end{cases}$$
      <div class="sl">// Dalle prime due: x = y = 1/(2λ). Sostituendo: 2x²=1 → x = ±√2/2</div>
      $$\\text{Punti: } \\left(\\tfrac{\\sqrt 2}{2}, \\tfrac{\\sqrt 2}{2}\\right) \\text{ e } \\left(-\\tfrac{\\sqrt 2}{2}, -\\tfrac{\\sqrt 2}{2}\\right)$$
      $$f_{\\max} = \\sqrt{2},\\quad f_{\\min} = -\\sqrt{2}$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Rettangolo inscritto</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova le dimensioni del rettangolo di area massima inscritto nell'ellisse $\\dfrac{x^2}{4} + y^2 = 1$ con lati paralleli agli assi.</p></div>
    <div class="ex-sol">
      <div class="sl">// Vertici (±x, ±y) sull'ellisse, lati 2x e 2y. Area: A=4xy. Vincolo: g = x²/4 + y² - 1</div>
      $$\\nabla A = (4y, 4x),\\quad \\nabla g = (x/2, 2y)$$
      $$\\begin{cases} 4y = \\lambda \\cdot x/2 \\\\ 4x = \\lambda \\cdot 2y \\\\ x^2/4 + y^2 = 1 \\end{cases}$$
      <div class="sl">// Dalle prime due: 8y/x = 2x/y → 8y² = 2x² → x² = 4y²</div>
      <div class="sl">// Nel vincolo: 4y²/4 + y² = 1 → 2y² = 1 → y = √2/2, x = √2</div>
      $$\\text{Lati: } 2x = 2\\sqrt{2},\\ 2y = \\sqrt{2},\\quad A_{\\max} = 4$$
    </div>
  </div>
</div>

<div class="quiz fade">
  <div class="quiz-hdr"><span>QUIZ RIEPILOGO FINALE</span><span class="qscore" id="sc_fin">0/5</span></div>
  <div class="quiz-body">
    <div class="qq" data-ok="b" data-why="Fermat: in un estremo locale interno con f differenziabile, ∇f=0 (entrambe le derivate parziali nulle).">
      <div class="qq-text">1. La condizione necessaria per un estremo locale interno di $f$ differenziabile è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr1"> $f_{xx} = f_{yy} = 0$</label>
        <label class="opt"><input type="radio" name="qr1"> $\\nabla f = (0,0)$</label>
        <label class="opt"><input type="radio" name="qr1"> $\\det H_f = 0$</label>
        <label class="opt"><input type="radio" name="qr1"> $f$ continua</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="c" data-why="Punto di sella: det H_f < 0 in un punto stazionario. Le concavità nelle due direzioni hanno segni opposti.">
      <div class="qq-text">2. In un punto stazionario, se $\\det H_f < 0$ il punto è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr2"> Un massimo locale</label>
        <label class="opt"><input type="radio" name="qr2"> Un minimo locale</label>
        <label class="opt"><input type="radio" name="qr2"> Un punto di sella</label>
        <label class="opt"><input type="radio" name="qr2"> Un caso indeciso</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="a" data-why="∇f = (2x,2y) = 0 → (0,0). H_f = diag(2,2), det=4>0, f_xx=2>0 → minimo. f(0,0)=0.">
      <div class="qq-text">3. Per $f(x,y) = x^2+y^2$, il punto $(0,0)$ è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr3"> Un minimo locale</label>
        <label class="opt"><input type="radio" name="qr3"> Un massimo locale</label>
        <label class="opt"><input type="radio" name="qr3"> Un punto di sella</label>
        <label class="opt"><input type="radio" name="qr3"> Un caso dubbio</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="d" data-why="∇f = (2x,-2y) = 0 → (0,0). H_f = diag(2,-2), det = -4 < 0 → punto di sella.">
      <div class="qq-text">4. Per $f(x,y) = x^2 - y^2$, il punto $(0,0)$ è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr4"> Un minimo locale</label>
        <label class="opt"><input type="radio" name="qr4"> Un massimo locale</label>
        <label class="opt"><input type="radio" name="qr4"> Un caso dubbio</label>
        <label class="opt"><input type="radio" name="qr4"> Un punto di sella</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="b" data-why="Lagrange: nei punti di estremo vincolato, ∇f e ∇g sono paralleli, cioè ∇f = λ∇g per qualche λ.">
      <div class="qq-text">5. Il metodo dei moltiplicatori di Lagrange si basa sulla condizione:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr5"> $\\nabla f = 0$ e $g = 0$</label>
        <label class="opt"><input type="radio" name="qr5"> $\\nabla f = \\lambda\\,\\nabla g$ e $g = 0$</label>
        <label class="opt"><input type="radio" name="qr5"> $f \\cdot g = 0$</label>
        <label class="opt"><input type="radio" name="qr5"> $\\det H_f > 0$</label>
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
