// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_equazioni_differenziali.js',
    num:   'LEZIONE 12',
    title: 'Equazioni differenziali',
    sub:   'Definizione · Variabili separabili · Lineari del primo ordine · Coefficienti costanti · Problema di Cauchy'
  },

  sections: [

    // ── §01 ──────────────────────────────────────────────────────────
    {
      id:       's01',
      secNum:   '§01',
      navLabel: '§01 Definizione e classificazione',
      heading:  'Definizione e classificazione',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Equazione differenziale ordinaria (EDO)</div>
  <p>Un'<strong>equazione differenziale ordinaria</strong> (EDO) è un'equazione che coinvolge una funzione incognita $y = y(x)$ e le sue derivate:</p>
  $$F(x,\\, y,\\, y',\\, y'',\\, \\ldots,\\, y^{(n)}) = 0$$
  <p>L'<strong>ordine</strong> dell'equazione è l'ordine della derivata più alta che compare. Una <strong>soluzione</strong> è una funzione $y(x)$ che soddisfa l'equazione su un intervallo.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">CLASSIFICAZIONE</div>
  <div class="box-title">Tipi principali</div>
  <p><strong>Lineare:</strong> $y^{(n)} + a_{n-1}(x)y^{(n-1)} + \\ldots + a_0(x)y = b(x)$. La funzione incognita e le sue derivate compaiono solo al primo grado.</p>
  <p><strong>A coefficienti costanti:</strong> i coefficienti $a_k$ sono costanti (non dipendono da $x$).</p>
  <p><strong>Omogenea:</strong> $b(x) = 0$; <strong>non omogenea</strong>: $b(x) \\neq 0$.</p>
  <p><strong>A variabili separabili:</strong> si può scrivere come $g(y)y' = f(x)$.</p>
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Definizione</span><span class="vfscore" id="vfs01">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="L'ordine è determinato dalla derivata di ordine più alto presente nell'equazione.">
      <div class="vq-text">1. L'ordine di $y'' + 3y' - y = 0$ è $2$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: y·y' non è lineare in y (è quadratico). Un'EDO lineare richiede che y e le sue derivate compaiano solo al primo grado.">
      <div class="vq-text">2. L'equazione $y\\cdot y' = x$ è lineare.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Un'EDO omogenea è quella con termine noto nullo: b(x)=0.">
      <div class="vq-text">3. L'equazione $y'' + 2y' + y = 0$ è omogenea.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="L'EDO generale di ordine n ha una soluzione generale con n costanti arbitrarie, una per ogni integrazione necessaria.">
      <div class="vq-text">4. La soluzione generale di un'EDO di ordine $n$ contiene $n$ costanti arbitrarie.</div>
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
      navLabel: '§02 Variabili separabili',
      heading:  'Equazioni a variabili separabili',
      html: `
<div class="fade">
<div class="box thm">
  <div class="box-label">METODO</div>
  <div class="box-title">Separazione delle variabili</div>
  <p>Un'EDO del primo ordine è a <strong>variabili separabili</strong> se si può scrivere:</p>
  $$y' = f(x)\\cdot g(y)$$
  <p><strong>Procedura:</strong> si separa $y$ da $x$ e si integra:</p>
  $$\\frac{dy}{g(y)} = f(x)\\,dx \\implies \\int\\frac{dy}{g(y)} = \\int f(x)\\,dx$$
  <p>Si ottiene una relazione implicita (o esplicita) tra $x$ e $y$.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 1 — Separazione semplice</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Risolvi $y' = xy$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Separa: dy/y = x dx</div>
      $$\\int\\frac{dy}{y} = \\int x\\,dx \\implies \\ln|y| = \\frac{x^2}{2} + c_1$$
      $$|y| = e^{x^2/2+c_1} = e^{c_1}e^{x^2/2} \\implies y = Ce^{x^2/2} \\quad (C \\in \\mathbb{R})$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 2 — Con condizione iniziale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Risolvi $y' = -2y$ con $y(0) = 3$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Separa: dy/y = -2 dx</div>
      $$\\ln|y| = -2x + c_1 \\implies y = Ce^{-2x}$$
      <div class="sl">// Condizione iniziale: y(0)=C=3</div>
      $$y = 3e^{-2x}$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Variabili separabili</span><span class="vfscore" id="vfs02">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="y'=xy è separabile: dy/y = x dx. Integrando: ln|y|=x²/2+c → y=Ce^(x²/2).">
      <div class="vq-text">1. La soluzione generale di $y' = xy$ è $y = Ce^{x^2/2}$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: y'+x²y non è separabile in senso stretto (è però lineare del primo ordine). Separabile significa y'=f(x)g(y).">
      <div class="vq-text">2. L'equazione $y' + x^2 y = 0$ non è a variabili separabili.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="y'=-2y → y=Ce^(-2x). Con y(0)=3: C=3 → y=3e^(-2x).">
      <div class="vq-text">3. La soluzione di $y'=-2y$, $y(0)=3$ è $y=3e^{-2x}$.</div>
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
      navLabel: '§03 Lineari del primo ordine',
      heading:  'Equazioni lineari del primo ordine',
      html: `
<div class="fade">
<div class="box thm">
  <div class="box-label">METODO</div>
  <div class="box-title">Fattore integrante</div>
  <p>L'equazione lineare del primo ordine ha la forma:</p>
  $$y' + a(x)y = b(x)$$
  <p>Si moltiplica per il <strong>fattore integrante</strong> $\\mu(x) = e^{\\int a(x)\\,dx}$:</p>
  $$\\frac{d}{dx}[\\mu(x)\\cdot y] = \\mu(x)\\cdot b(x)$$
  <p>Integrando ambo i membri:</p>
  $$y(x) = \\frac{1}{\\mu(x)}\\left[\\int \\mu(x)\\cdot b(x)\\,dx + C\\right]$$
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 3 — Equazione lineare del primo ordine</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Risolvi $y' - 2y = e^x$.</p></div>
    <div class="ex-sol">
      <div class="sl">// a(x) = -2 → μ(x) = e^(-2x)</div>
      $$\\frac{d}{dx}[e^{-2x}y] = e^{-2x}\\cdot e^x = e^{-x}$$
      $$e^{-2x}y = \\int e^{-x}\\,dx = -e^{-x}+C$$
      $$y = e^{2x}(-e^{-x}+C) = -e^x + Ce^{2x}$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 4 — Con coefficiente variabile</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Risolvi $y' + \\dfrac{y}{x} = x$ (per $x > 0$).</p></div>
    <div class="ex-sol">
      <div class="sl">// a(x)=1/x → μ(x)=e^(∫1/x dx)=e^(ln x)=x</div>
      $$\\frac{d}{dx}[xy] = x\\cdot x = x^2$$
      $$xy = \\int x^2\\,dx = \\frac{x^3}{3}+C \\implies y = \\frac{x^2}{3}+\\frac{C}{x}$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Lineari del primo ordine</span><span class="vfscore" id="vfs03">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Il fattore integrante per y'+a(x)y=b(x) è μ=e^(∫a(x)dx). Con a(x)=-2: μ=e^(-2x).">
      <div class="vq-text">1. Il fattore integrante di $y' - 2y = e^x$ è $e^{-2x}$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Dopo moltiplicazione per μ si ha d/dx[μy]=μb(x), che si integra direttamente.">
      <div class="vq-text">2. Moltiplicando per il fattore integrante, il membro sinistro diventa la derivata di $\\mu(x)y$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: la soluzione è y=-e^x+Ce^(2x). La costante C compare dalla costante di integrazione, non è il termine noto.">
      <div class="vq-text">3. La soluzione generale di $y'-2y=e^x$ è $y=e^x+C$.</div>
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
      navLabel: '§04 Coefficienti costanti',
      heading:  'Equazioni a coefficienti costanti del secondo ordine',
      html: `
<div class="fade">
<div class="box thm">
  <div class="box-label">METODO</div>
  <div class="box-title">Equazione caratteristica</div>
  <p>L'equazione omogenea $ay'' + by' + cy = 0$ (con $a,b,c$ costanti reali, $a\\neq 0$) si risolve cercando soluzioni del tipo $y = e^{\\lambda x}$. Si ottiene l'<strong>equazione caratteristica</strong>:</p>
  $$a\\lambda^2 + b\\lambda + c = 0$$
  <p>con discriminante $\\Delta = b^2 - 4ac$. La soluzione generale dipende dal segno di $\\Delta$:</p>
  <p><strong>$\\Delta > 0$:</strong> due radici reali distinte $\\lambda_1, \\lambda_2$. Soluzione: $y = C_1 e^{\\lambda_1 x} + C_2 e^{\\lambda_2 x}$</p>
  <p><strong>$\\Delta = 0$:</strong> radice reale doppia $\\lambda$. Soluzione: $y = (C_1 + C_2 x)e^{\\lambda x}$</p>
  <p><strong>$\\Delta < 0$:</strong> radici complesse coniugate $\\lambda = \\alpha \\pm i\\beta$. Soluzione: $y = e^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 5 — Discriminante positivo</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Risolvi $y'' - 5y' + 6y = 0$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Equazione caratteristica: λ²-5λ+6=0 → (λ-2)(λ-3)=0</div>
      $$\\lambda_1 = 2, \\quad \\lambda_2 = 3$$
      $$y = C_1 e^{2x} + C_2 e^{3x}$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 6 — Radici complesse</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Risolvi $y'' + 4y = 0$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Equazione caratteristica: λ²+4=0 → λ=±2i (α=0, β=2)</div>
      $$y = C_1\\cos(2x) + C_2\\sin(2x)$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 7 — Non omogenea: soluzione particolare</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova la soluzione generale di $y'' - y = e^{2x}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Omogenea associata: λ²-1=0 → λ=±1. y_om = C₁eˣ + C₂e^(-x)</div>
      <div class="sl">// Soluzione particolare: cerca y_p = Ae^(2x)</div>
      $$y_p'' - y_p = 4Ae^{2x} - Ae^{2x} = 3Ae^{2x} = e^{2x} \\implies A = \\frac{1}{3}$$
      $$y = C_1 e^x + C_2 e^{-x} + \\frac{e^{2x}}{3}$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Coefficienti costanti</span><span class="vfscore" id="vfs04">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Per y''-5y'+6y=0: λ²-5λ+6=0 → λ=2,3. Soluzione: C₁e^(2x)+C₂e^(3x).">
      <div class="vq-text">1. La soluzione generale di $y''-5y'+6y=0$ è $C_1e^{2x}+C_2e^{3x}$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="λ²+4=0 → λ=±2i (radici complesse, α=0, β=2). Soluzione: C₁cos(2x)+C₂sin(2x).">
      <div class="vq-text">2. La soluzione di $y''+4y=0$ è $C_1\\cos(2x)+C_2\\sin(2x)$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: con radice doppia λ la soluzione è (C₁+C₂x)e^(λx), non C₁e^(λx)+C₂e^(λx) (che darebbe una sola costante).">
      <div class="vq-text">3. Con radice caratteristica doppia $\\lambda$, la soluzione è $C_1e^{\\lambda x}+C_2e^{\\lambda x}$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="La soluzione generale di una non omogenea è y=y_om+y_p: omogenea associata più una soluzione particolare.">
      <div class="vq-text">4. La soluzione generale di un'EDO non omogenea è la somma della soluzione dell'omogenea e di una soluzione particolare.</div>
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
      navLabel: '§05 Problema di Cauchy',
      heading:  'Problema di Cauchy',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Problema di Cauchy</div>
  <p>Il <strong>problema di Cauchy</strong> consiste nel trovare una soluzione di un'EDO che soddisfi determinate <strong>condizioni iniziali</strong>. Per un'EDO del secondo ordine:</p>
  $$\\begin{cases} y'' + by' + cy = f(x) \\\\ y(x_0) = y_0 \\\\ y'(x_0) = y_1 \\end{cases}$$
  <p>Le condizioni iniziali determinano univocamente le costanti $C_1$ e $C_2$ nella soluzione generale.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 8 — Problema di Cauchy del secondo ordine</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Risolvi $\\begin{cases} y'' - 5y' + 6y = 0 \\\\ y(0) = 1 \\\\ y'(0) = 1 \\end{cases}$</p></div>
    <div class="ex-sol">
      <div class="sl">// Soluzione generale (dall'ES 5): y = C₁e^(2x) + C₂e^(3x)</div>
      <div class="sl">// Condizione y(0)=1: C₁+C₂=1</div>
      <div class="sl">// y'(x) = 2C₁e^(2x)+3C₂e^(3x). Condizione y'(0)=1: 2C₁+3C₂=1</div>
      <div class="sl">// Sistema: C₁+C₂=1, 2C₁+3C₂=1 → C₂=-1, C₁=2</div>
      $$y = 2e^{2x} - e^{3x}$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 9 — Cauchy con radici complesse</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Risolvi $\\begin{cases} y'' + 4y = 0 \\\\ y(0) = 2 \\\\ y'(0) = -4 \\end{cases}$</p></div>
    <div class="ex-sol">
      <div class="sl">// Soluzione generale: y = C₁cos(2x)+C₂sin(2x)</div>
      <div class="sl">// y(0)=C₁=2</div>
      <div class="sl">// y'(x)=-2C₁sin(2x)+2C₂cos(2x). y'(0)=2C₂=-4 → C₂=-2</div>
      $$y = 2\\cos(2x) - 2\\sin(2x)$$
    </div>
  </div>
</div>

<div class="quiz fade">
  <div class="quiz-hdr"><span>QUIZ RIEPILOGO FINALE</span><span class="qscore" id="sc_fin">0/5</span></div>
  <div class="quiz-body">
    <div class="qq" data-ok="b" data-why="y'=xy è separabile: dy/y=x dx → ln|y|=x²/2+c → y=Ce^(x²/2).">
      <div class="qq-text">1. La soluzione generale di $y' = xy$ è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr1"> $y = Ce^x$</label>
        <label class="opt"><input type="radio" name="qr1"> $y = Ce^{x^2/2}$</label>
        <label class="opt"><input type="radio" name="qr1"> $y = x^2/2 + C$</label>
        <label class="opt"><input type="radio" name="qr1"> $y = Ce^{2x}$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="c" data-why="Il fattore integrante per y'+a(x)y=b(x) è μ=e^(∫a(x)dx). Con a(x)=1/x: μ=e^(ln x)=x.">
      <div class="qq-text">2. Il fattore integrante di $y' + \\dfrac{y}{x} = x$ è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr2"> $e^x$</label>
        <label class="opt"><input type="radio" name="qr2"> $\\ln x$</label>
        <label class="opt"><input type="radio" name="qr2"> $x$</label>
        <label class="opt"><input type="radio" name="qr2"> $1/x$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="a" data-why="λ²-5λ+6=0 → λ=2,3 (Δ>0, due radici reali distinte). Soluzione: C₁e^(2x)+C₂e^(3x).">
      <div class="qq-text">3. L'equazione caratteristica di $y''-5y'+6y=0$ ha:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr3"> Due radici reali distinte $2$ e $3$</label>
        <label class="opt"><input type="radio" name="qr3"> Una radice doppia</label>
        <label class="opt"><input type="radio" name="qr3"> Radici complesse coniugate</label>
        <label class="opt"><input type="radio" name="qr3"> Nessuna radice reale</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="d" data-why="Con radice doppia λ: y=(C₁+C₂x)e^(λx). Con λ=-1: y=(C₁+C₂x)e^(-x).">
      <div class="qq-text">4. La soluzione di $y''+2y'+y=0$ (radice doppia $\\lambda=-1$) è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr4"> $C_1e^{-x}+C_2e^{x}$</label>
        <label class="opt"><input type="radio" name="qr4"> $C_1\\cos x + C_2\\sin x$</label>
        <label class="opt"><input type="radio" name="qr4"> $C_1e^{-x}$</label>
        <label class="opt"><input type="radio" name="qr4"> $(C_1+C_2 x)e^{-x}$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="b" data-why="y=C₁e^(2x)+C₂e^(3x). y(0)=C₁+C₂=1, y'(0)=2C₁+3C₂=1 → C₁=2, C₂=-1. y=2e^(2x)-e^(3x).">
      <div class="qq-text">5. La soluzione di $y''-5y'+6y=0$, $y(0)=1$, $y'(0)=1$ è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr5"> $e^{2x}+e^{3x}$</label>
        <label class="opt"><input type="radio" name="qr5"> $2e^{2x}-e^{3x}$</label>
        <label class="opt"><input type="radio" name="qr5"> $e^{2x}$</label>
        <label class="opt"><input type="radio" name="qr5"> $-e^{2x}+2e^{3x}$</label>
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
