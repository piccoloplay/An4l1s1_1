// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_ripasso_logaritmi.js',
    num:   'LEZIONE 02',
    title: 'Ripasso di logaritmi',
    sub:   'Definizione · Proprietà · Cambiamento di base · Equazioni e disequazioni · Funzione esponenziale e logaritmica'
  },

  sections: [

    // ── §01 ──────────────────────────────────────────────────────────
    {
      id:       's01',
      secNum:   '§01',
      navLabel: '§01 Definizione',
      heading:  'Definizione di logaritmo',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Logaritmo in base $a$</div>
  <p>Dati $a > 0$, $a \\neq 1$ e $x > 0$, il <strong>logaritmo in base $a$ di $x$</strong> è l'esponente a cui bisogna elevare $a$ per ottenere $x$:</p>
  $$\\log_a x = y \\iff a^y = x$$
  <p>In altre parole: $\\log_a x$ risponde alla domanda "a quale potenza devo elevare $a$ per ottenere $x$?"</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">CASI PARTICOLARI</div>
  <div class="box-title">Logaritmo naturale e decimale</div>
  <p><strong>Logaritmo naturale:</strong> base $e \\approx 2.718$. Si scrive $\\ln x = \\log_e x$. È il logaritmo usato in analisi.</p>
  <p><strong>Logaritmo decimale:</strong> base $10$. Si scrive $\\log x = \\log_{10} x$. Usato in applicazioni pratiche.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">VALORI IMMEDIATI</div>
  <div class="box-title">Da memorizzare</div>
  <p>Per ogni base $a > 0$, $a \\neq 1$:</p>
  $$\\log_a 1 = 0 \\qquad (\\text{perché } a^0 = 1)$$
  $$\\log_a a = 1 \\qquad (\\text{perché } a^1 = a)$$
  $$\\log_a a^k = k \\qquad (\\text{per ogni } k \\in \\mathbb{R})$$
  $$a^{\\log_a x} = x \\qquad (\\text{per ogni } x > 0)$$
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Definizione</span><span class="vfscore" id="vfs01">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="log_a(x) = y ↔ a^y = x. Quindi log_2(8) = 3 perché 2³ = 8.">
      <div class="vq-text">1. $\\log_2 8 = 3$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="log_a(1) = 0 per ogni base a, perché a^0 = 1.">
      <div class="vq-text">2. $\\log_a 1 = 0$ per ogni $a > 0$, $a \\neq 1$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: il logaritmo è definito solo per x > 0. log(-1) non esiste nei reali.">
      <div class="vq-text">3. $\\log_a(-1)$ è definito per ogni base $a > 1$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="ln x = log_e x: il logaritmo naturale è il logaritmo in base e ≈ 2.718.">
      <div class="vq-text">4. $\\ln x$ è il logaritmo in base $e$.</div>
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
      navLabel: '§02 Proprietà',
      heading:  'Proprietà dei logaritmi',
      html: `
<div class="fade">
<div class="box thm">
  <div class="box-label">PROPRIETÀ</div>
  <div class="box-title">Regole di calcolo</div>
  <p>Per $a > 0$, $a \\neq 1$, $x > 0$, $y > 0$:</p>
  <p><strong>Prodotto:</strong> $\\log_a(xy) = \\log_a x + \\log_a y$</p>
  <p><strong>Quoziente:</strong> $\\log_a\\!\\left(\\dfrac{x}{y}\\right) = \\log_a x - \\log_a y$</p>
  <p><strong>Potenza:</strong> $\\log_a(x^k) = k\\log_a x$ &nbsp; per ogni $k \\in \\mathbb{R}$</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">CAMBIAMENTO DI BASE</div>
  <div class="box-title">Formula</div>
  <p>Per passare da base $a$ a base $b$ ($b > 0$, $b \\neq 1$):</p>
  $$\\log_a x = \\frac{\\log_b x}{\\log_b a}$$
  <p>Caso più usato: esprimere tutto in base $e$ (logaritmo naturale):</p>
  $$\\log_a x = \\frac{\\ln x}{\\ln a}$$
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 1 — Semplificare con le proprietà</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Semplifica $\\log_2 24 - \\log_2 3$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Proprietà del quoziente</div>
      $$\\log_2 24 - \\log_2 3 = \\log_2\\frac{24}{3} = \\log_2 8 = 3$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 2 — Cambiamento di base</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\log_4 32$ usando il cambiamento di base.</p></div>
    <div class="ex-sol">
      <div class="sl">// Usa base 2 (comoda perché 4=2² e 32=2⁵)</div>
      $$\\log_4 32 = \\frac{\\log_2 32}{\\log_2 4} = \\frac{5}{2}$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Proprietà</span><span class="vfscore" id="vfs02">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Proprietà del prodotto: log_a(xy) = log_a(x) + log_a(y).">
      <div class="vq-text">1. $\\log_a(xy) = \\log_a x + \\log_a y$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: log_a(x+y) non si semplifica ulteriormente. Non esiste una regola per il logaritmo di una somma.">
      <div class="vq-text">2. $\\log_a(x + y) = \\log_a x + \\log_a y$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Proprietà della potenza: log_a(x^k) = k·log_a(x). Quindi log(x²) = 2log(x).">
      <div class="vq-text">3. $\\log(x^2) = 2\\log x$ per $x > 0$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Cambiamento di base: log_a(x) = ln(x)/ln(a).">
      <div class="vq-text">4. $\\log_a x = \\dfrac{\\ln x}{\\ln a}$.</div>
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
      navLabel: '§03 Funzioni exp e log',
      heading:  'Funzione esponenziale e funzione logaritmica',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">FUNZIONE ESPONENZIALE</div>
  <div class="box-title">$f(x) = a^x$</div>
  <p><strong>Dominio:</strong> $\\mathbb{R}$. &nbsp; <strong>Codominio:</strong> $(0, +\\infty)$.</p>
  <p>Se $a > 1$: funzione strettamente crescente, $a^x \\to 0$ per $x \\to -\\infty$, $a^x \\to +\\infty$ per $x \\to +\\infty$.</p>
  <p>Se $0 < a < 1$: funzione strettamente decrescente, $a^x \\to +\\infty$ per $x \\to -\\infty$, $a^x \\to 0$ per $x \\to +\\infty$.</p>
  <p>In entrambi i casi: $a^0 = 1$, quindi il grafico passa sempre per $(0, 1)$.</p>
</div>
</div>

<div class="fade">
<div class="box def">
  <div class="box-label">FUNZIONE LOGARITMICA</div>
  <div class="box-title">$f(x) = \\log_a x$</div>
  <p><strong>Dominio:</strong> $(0, +\\infty)$. &nbsp; <strong>Codominio:</strong> $\\mathbb{R}$.</p>
  <p>È la funzione inversa di $a^x$: i grafici di $a^x$ e $\\log_a x$ sono simmetrici rispetto alla retta $y = x$.</p>
  <p>Se $a > 1$: crescente. $\\log_a x \\to -\\infty$ per $x \\to 0^+$, $\\log_a x \\to +\\infty$ per $x \\to +\\infty$.</p>
  <p>Se $0 < a < 1$: decrescente.</p>
  <p>In entrambi i casi: $\\log_a 1 = 0$, quindi il grafico passa per $(1, 0)$.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">GERARCHIA DEGLI INFINITI</div>
  <div class="box-title">Confronto di crescita per $x \\to +\\infty$</div>
  <p>Per $x \\to +\\infty$, le funzioni crescono nell'ordine:</p>
  $$\\ln x \\ll x^\\alpha \\ll a^x \\ll x^x \\qquad (\\alpha > 0,\\; a > 1)$$
  <p>In parole: il logaritmo cresce più lentamente di qualsiasi potenza, che a sua volta cresce più lentamente di qualsiasi esponenziale.</p>
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Funzioni exp e log</span><span class="vfscore" id="vfs03">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="a^x > 0 per ogni x ∈ R e ogni base a > 0: la funzione esponenziale è sempre positiva.">
      <div class="vq-text">1. $a^x > 0$ per ogni $x \\in \\mathbb{R}$ e ogni $a > 0$, $a \\neq 1$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: il dominio di log_a(x) è (0,+∞), non tutto R. Il logaritmo non è definito per x ≤ 0.">
      <div class="vq-text">2. La funzione $\\log_a x$ è definita per ogni $x \\in \\mathbb{R}$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="I grafici di a^x e log_a(x) sono simmetrici rispetto a y=x: sono funzioni inverse l'una dell'altra.">
      <div class="vq-text">3. I grafici di $a^x$ e $\\log_a x$ sono simmetrici rispetto alla retta $y = x$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Per x→+∞: ln x cresce più lentamente di x^α (qualsiasi α>0), che a sua volta cresce più lentamente di a^x (a>1).">
      <div class="vq-text">4. Per $x \\to +\\infty$, $\\ln x$ cresce più lentamente di $x^2$.</div>
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
      navLabel: '§04 Equazioni e disequazioni',
      heading:  'Equazioni e disequazioni logaritmiche',
      html: `
<div class="fade">
<div class="box prop">
  <div class="box-label">EQUAZIONI LOGARITMICHE</div>
  <div class="box-title">Metodo di risoluzione</div>
  <p>Per risolvere $\\log_a f(x) = \\log_a g(x)$: poiché $\\log_a$ è iniettiva, si ha $f(x) = g(x)$, con le condizioni di esistenza $f(x) > 0$ e $g(x) > 0$.</p>
  <p>Per risolvere $\\log_a f(x) = k$: si trasforma in $f(x) = a^k$, con la condizione $f(x) > 0$.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">DISEQUAZIONI LOGARITMICHE</div>
  <div class="box-title">Attenzione alla base</div>
  <p>Per risolvere $\\log_a f(x) > \\log_a g(x)$:</p>
  <p>Se $a > 1$: $\\log_a$ è crescente → $f(x) > g(x)$ (con condizioni di esistenza).</p>
  <p>Se $0 < a < 1$: $\\log_a$ è decrescente → $f(x) < g(x)$ (il verso si inverte).</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 1 — Equazione logaritmica</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Risolvi $\\log_2(x+3) = 4$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Trasforma: x+3 = 2⁴ = 16</div>
      $$x + 3 = 16 \\implies x = 13$$
      <div class="sl">// Verifica condizione di esistenza: x+3 = 16 > 0 ✓</div>
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 2 — Equazione con due logaritmi</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Risolvi $\\ln(x^2 - 1) = \\ln(2x + 2)$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Stessa base → x²-1 = 2x+2, con c.e.: x²-1>0 e 2x+2>0</div>
      $$x^2 - 2x - 3 = 0 \\implies (x-3)(x+1) = 0 \\implies x = 3 \\text{ o } x = -1$$
      <div class="sl">// Verifica c.e.: per x=3: x²-1=8>0 e 2x+2=8>0 ✓</div>
      <div class="sl">// per x=-1: x²-1=0, non > 0 → escluso</div>
      $$x = 3$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 3 — Disequazione logaritmica</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Risolvi $\\log_3(2x - 1) > 2$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Base 3 > 1: log crescente. Trasforma: 2x-1 > 3² = 9</div>
      $$2x - 1 > 9 \\implies x > 5$$
      <div class="sl">// Condizione di esistenza: 2x-1 > 0 → x > 1/2. Già soddisfatta da x > 5.</div>
      $$x \\in (5, +\\infty)$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Equazioni e disequazioni</span><span class="vfscore" id="vfs04">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="log_a è iniettiva: log_a(f) = log_a(g) ↔ f = g (con condizioni di esistenza).">
      <div class="vq-text">1. $\\log_a f(x) = \\log_a g(x)$ implica $f(x) = g(x)$ (con le condizioni di esistenza).</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: se la base è 0 < a < 1 il logaritmo è decrescente e il verso della disequazione si inverte.">
      <div class="vq-text">2. In una disequazione logaritmica il verso non cambia mai.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="log_2(x+3)=4 → x+3=2⁴=16 → x=13. Condizione: x+3=16>0 ✓.">
      <div class="vq-text">3. La soluzione di $\\log_2(x+3) = 4$ è $x = 13$.</div>
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
      navLabel: '§05 Limiti notevoli',
      heading:  'Limiti notevoli con esponenziali e logaritmi',
      html: `
<div class="fade">
<div class="box prop">
  <div class="box-label">LIMITI FONDAMENTALI</div>
  <div class="box-title">Da memorizzare</div>
  $$\\lim_{x\\to 0}\\frac{\\ln(1+x)}{x} = 1$$
  $$\\lim_{x\\to 0}\\frac{e^x - 1}{x} = 1$$
  $$\\lim_{x\\to+\\infty}\\left(1+\\frac{1}{x}\\right)^x = e$$
  $$\\lim_{x\\to 0}(1+x)^{1/x} = e$$
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 1 — Limite con logaritmo</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to 0}\\frac{\\ln(1+3x)}{x}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Riconduce al limite notevole: moltiplica e dividi per 3</div>
      $$\\lim_{x\\to 0}\\frac{\\ln(1+3x)}{x} = \\lim_{x\\to 0}\\frac{\\ln(1+3x)}{3x}\\cdot 3 = 1 \\cdot 3 = 3$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 2 — Limite con esponenziale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to 0}\\frac{e^{2x}-1}{x}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Riconduce al limite notevole: moltiplica e dividi per 2</div>
      $$\\lim_{x\\to 0}\\frac{e^{2x}-1}{x} = \\lim_{x\\to 0}\\frac{e^{2x}-1}{2x}\\cdot 2 = 1\\cdot 2 = 2$$
    </div>
  </div>
</div>

<div class="quiz fade">
  <div class="quiz-hdr"><span>QUIZ RIEPILOGO FINALE</span><span class="qscore" id="sc_fin">0/5</span></div>
  <div class="quiz-body">
    <div class="qq" data-ok="c" data-why="log_a(x) = y ↔ a^y = x. Quindi log_3(27) = 3 perché 3³ = 27.">
      <div class="qq-text">1. $\\log_3 27$ vale:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr1"> $9$</label>
        <label class="opt"><input type="radio" name="qr1"> $\\dfrac{1}{3}$</label>
        <label class="opt"><input type="radio" name="qr1"> $3$</label>
        <label class="opt"><input type="radio" name="qr1"> $27$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="b" data-why="Proprietà del prodotto: log(xy) = log(x) + log(y). Non esiste una regola analoga per la somma.">
      <div class="qq-text">2. Quale proprietà è corretta?</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr2"> $\\log(x+y) = \\log x + \\log y$</label>
        <label class="opt"><input type="radio" name="qr2"> $\\log(xy) = \\log x + \\log y$</label>
        <label class="opt"><input type="radio" name="qr2"> $\\log(xy) = \\log x \\cdot \\log y$</label>
        <label class="opt"><input type="radio" name="qr2"> $\\log(x-y) = \\log x - \\log y$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="a" data-why="Il dominio di log_a(x) è (0,+∞): il logaritmo è definito solo per argomenti strettamente positivi.">
      <div class="qq-text">3. Il dominio della funzione $f(x) = \\ln x$ è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr3"> $(0, +\\infty)$</label>
        <label class="opt"><input type="radio" name="qr3"> $\\mathbb{R}$</label>
        <label class="opt"><input type="radio" name="qr3"> $[0, +\\infty)$</label>
        <label class="opt"><input type="radio" name="qr3"> $(-\\infty, 0)$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="d" data-why="lim_{x→0} ln(1+x)/x = 1 è un limite notevole fondamentale.">
      <div class="qq-text">4. $\\displaystyle\\lim_{x\\to 0}\\frac{\\ln(1+x)}{x}$ vale:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr4"> $0$</label>
        <label class="opt"><input type="radio" name="qr4"> $+\\infty$</label>
        <label class="opt"><input type="radio" name="qr4"> $e$</label>
        <label class="opt"><input type="radio" name="qr4"> $1$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="b" data-why="Se 0 < a < 1 il logaritmo è decrescente, quindi in una disequazione log_a(f)>log_a(g) il verso si inverte: f < g.">
      <div class="qq-text">5. Se $0 < a < 1$ e $\\log_a f(x) > \\log_a g(x)$, allora:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr5"> $f(x) > g(x)$</label>
        <label class="opt"><input type="radio" name="qr5"> $f(x) < g(x)$</label>
        <label class="opt"><input type="radio" name="qr5"> $f(x) = g(x)$</label>
        <label class="opt"><input type="radio" name="qr5"> Non si può concludere nulla</label>
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
