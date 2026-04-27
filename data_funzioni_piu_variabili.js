// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_funzioni_piu_variabili.js',
    num:   'LEZIONE 13',
    title: 'Funzioni di più variabili',
    sub:   'Dominio · Curve di livello · Limiti · Continuità in $\\mathbb{R}^2$'
  },

  sections: [

    // ── §01 ──────────────────────────────────────────────────────────
    {
      id:       's01',
      secNum:   '§01',
      navLabel: '§01 Definizione e dominio',
      heading:  'Definizione e dominio',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Funzione di due variabili</div>
  <p>Una <strong>funzione di due variabili</strong> è una legge $f: A \\subseteq \\mathbb{R}^2 \\to \\mathbb{R}$ che associa a ogni coppia $(x,y) \\in A$ un unico numero reale $z = f(x,y)$.</p>
  <p>$A$ è il <strong>dominio</strong>, $\\mathbb{R}$ il codominio. Il <strong>grafico</strong> di $f$ è l'insieme $\\{(x,y,f(x,y)) : (x,y) \\in A\\} \\subset \\mathbb{R}^3$ (una superficie).</p>
  <p>Esempi: $f(x,y) = x^2+y^2$ (paraboloide), $f(x,y) = \\sqrt{1-x^2-y^2}$ (semisfera).</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">METODO</div>
  <div class="box-title">Determinare il dominio</div>
  <p>Il dominio è il più grande sottoinsieme di $\\mathbb{R}^2$ in cui le operazioni che definiscono $f$ hanno senso.</p>
  <p>— <strong>Frazione</strong>: denominatore $\\neq 0$.</p>
  <p>— <strong>Radice pari</strong>: radicando $\\geq 0$.</p>
  <p>— <strong>Logaritmo</strong>: argomento $> 0$.</p>
  <p>— <strong>$\\arcsin, \\arccos$</strong>: argomento in $[-1,1]$.</p>
  <p>Il dominio è una regione del piano: si rappresenta graficamente.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Dominio di una funzione razionale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Determina il dominio di $f(x,y) = \\dfrac{x+y}{x^2-y}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Servono i punti in cui il denominatore non si annulla:</div>
      $$x^2 - y \\neq 0 \\iff y \\neq x^2$$
      $$D = \\{(x,y) \\in \\mathbb{R}^2 : y \\neq x^2\\}$$
      <div class="sl">// Tutto il piano tranne la parabola y = x²</div>
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Dominio con radice e logaritmo</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Determina il dominio di $f(x,y) = \\sqrt{4-x^2-y^2} + \\ln(x-y)$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Sistema di condizioni:</div>
      $$\\begin{cases} 4-x^2-y^2 \\geq 0 \\\\ x-y > 0 \\end{cases} \\iff \\begin{cases} x^2+y^2 \\leq 4 \\\\ y < x \\end{cases}$$
      <div class="sl">// Disco chiuso di raggio 2 intersecato con il semipiano sotto la retta y = x</div>
      $$D = \\{(x,y) : x^2+y^2 \\leq 4 \\text{ e } y < x\\}$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Dominio</span><span class="vfscore" id="vfs01">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Il grafico è il luogo dei punti (x,y,z) con z=f(x,y) e (x,y) nel dominio: una superficie in R³.">
      <div class="vq-text">1. Il grafico di $f(x,y)$ è una superficie in $\\mathbb{R}^3$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: il dominio di una funzione di due variabili è in generale una regione del piano (2D), non una curva.">
      <div class="vq-text">2. Il dominio di una funzione di due variabili è sempre una curva.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Per la radice pari serve radicando ≥ 0: x²+y² ≤ 1, cioè il disco unitario chiuso.">
      <div class="vq-text">3. Il dominio di $f(x,y) = \\sqrt{1-x^2-y^2}$ è il disco unitario chiuso.</div>
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
      navLabel: '§02 Curve di livello',
      heading:  'Curve di livello',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Curva di livello</div>
  <p>La <strong>curva di livello</strong> $k$ di $f(x,y)$ è l'insieme dei punti $(x,y)$ del dominio tali che $f(x,y) = k$:</p>
  $$L_k = \\{(x,y) \\in D : f(x,y) = k\\}$$
  <p>Geometricamente: si interseca la superficie $z=f(x,y)$ con il piano orizzontale $z=k$ e si proietta sul piano $xy$.</p>
  <p>Le curve di livello sono come le <strong>isoipse</strong> di una carta topografica: punti alla stessa quota.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">UTILITÀ</div>
  <div class="box-title">Cosa raccontano le curve di livello</div>
  <p>— Permettono di "vedere" una superficie 3D usando una mappa 2D.</p>
  <p>— Curve di livello molto ravvicinate $\\Leftrightarrow$ pendenza ripida.</p>
  <p>— Curve di livello distanti $\\Leftrightarrow$ pendenza dolce.</p>
  <p>— Una curva di livello chiusa che si riduce a un punto $\\Leftrightarrow$ massimo o minimo locale (cima o fondo).</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Curve di livello del paraboloide</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Disegna le curve di livello di $f(x,y) = x^2+y^2$.</p></div>
    <div class="ex-sol">
      $$x^2+y^2 = k$$
      <div class="sl">// Per k<0: nessuna soluzione (insieme vuoto)</div>
      <div class="sl">// Per k=0: il solo punto (0,0)</div>
      <div class="sl">// Per k>0: circonferenza centrata in O di raggio √k</div>
      <div class="sl">// Le curve di livello sono cerchi concentrici, più ravvicinati man mano che k cresce</div>
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Curve di livello di un piano</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Disegna le curve di livello di $f(x,y) = 2x+3y$.</p></div>
    <div class="ex-sol">
      $$2x+3y = k \\iff y = \\frac{k-2x}{3}$$
      <div class="sl">// Famiglia di rette parallele con pendenza -2/3, una per ogni valore di k</div>
      <div class="sl">// Per piani z=ax+by+c, le curve di livello sono sempre rette parallele</div>
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Curve di livello con prodotto</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Descrivi le curve di livello di $f(x,y) = xy$.</p></div>
    <div class="ex-sol">
      $$xy = k$$
      <div class="sl">// Per k=0: gli assi cartesiani (x=0 oppure y=0)</div>
      <div class="sl">// Per k>0: iperboli equilatere nei quadranti I e III, y=k/x</div>
      <div class="sl">// Per k<0: iperboli equilatere nei quadranti II e IV, y=k/x</div>
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Curve di livello</span><span class="vfscore" id="vfs02">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Per definizione: L_k è il luogo dei punti (x,y) con f(x,y)=k. Nessun punto può appartenere contemporaneamente a livelli diversi.">
      <div class="vq-text">1. Due curve di livello distinte $L_{k_1}$ e $L_{k_2}$ con $k_1 \\neq k_2$ non possono intersecarsi.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: i piani z=ax+by+c hanno curve di livello rette parallele, non cerchi.">
      <div class="vq-text">2. Le curve di livello di un piano $z = ax+by+c$ sono cerchi concentrici.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Curve di livello molto vicine indicano grandi variazioni di z su piccole distanze, cioè una pendenza ripida.">
      <div class="vq-text">3. Curve di livello molto ravvicinate indicano pendenza ripida.</div>
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
      navLabel: '§03 Limiti in $\\mathbb{R}^2$',
      heading:  'Limiti di funzioni di due variabili',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Limite in due variabili</div>
  <p>$\\lim\\limits_{(x,y) \\to (x_0,y_0)} f(x,y) = L$ se per ogni $\\varepsilon > 0$ esiste $\\delta > 0$ tale che</p>
  $$0 < \\sqrt{(x-x_0)^2+(y-y_0)^2} < \\delta \\implies |f(x,y) - L| < \\varepsilon$$
  <p><strong>Differenza fondamentale</strong> rispetto a una variabile: $(x,y)$ può avvicinarsi a $(x_0,y_0)$ da <strong>infinite direzioni</strong> e lungo <strong>infiniti percorsi</strong>. Il limite esiste solo se il valore è lo stesso lungo tutti i percorsi.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">METODO 1</div>
  <div class="box-title">Mostrare che il limite NON esiste — restrizione lungo rette</div>
  <p>Se calcolando il limite lungo due rette diverse passanti per $(x_0,y_0)$ si trovano valori diversi, il limite non esiste.</p>
  <p>Tipicamente per $(x_0,y_0)=(0,0)$: si pone $y = mx$ e si studia il limite della funzione di una variabile $f(x,mx)$ per $x \\to 0$, in funzione di $m$.</p>
  <p>Se il risultato dipende da $m$, il limite non esiste.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Limite che non esiste</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Mostra che $\\lim\\limits_{(x,y) \\to (0,0)} \\dfrac{xy}{x^2+y^2}$ non esiste.</p></div>
    <div class="ex-sol">
      <div class="sl">// Restrizione lungo y = mx:</div>
      $$f(x,mx) = \\frac{x \\cdot mx}{x^2+m^2x^2} = \\frac{mx^2}{x^2(1+m^2)} = \\frac{m}{1+m^2}$$
      <div class="sl">// Il valore dipende da m: per m=0 dà 0, per m=1 dà 1/2 → limite non esiste</div>
    </div>
  </div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">METODO 2</div>
  <div class="box-title">Coordinate polari per $(x,y) \\to (0,0)$</div>
  <p>Si pone $x = \\rho\\cos\\theta$, $y = \\rho\\sin\\theta$ con $\\rho \\geq 0$. Allora $(x,y) \\to (0,0) \\iff \\rho \\to 0^+$.</p>
  <p>Il limite esiste e vale $L$ se e solo se $\\lim_{\\rho \\to 0^+} f(\\rho\\cos\\theta, \\rho\\sin\\theta) = L$ <strong>uniformemente in $\\theta$</strong> (cioè senza dipendere dall'angolo).</p>
  <p><strong>Strumento utile</strong>: se $|f(\\rho\\cos\\theta,\\rho\\sin\\theta) - L| \\leq g(\\rho)$ con $g(\\rho) \\to 0$, allora il limite vale $L$.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Limite che esiste (polari)</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\lim\\limits_{(x,y) \\to (0,0)} \\dfrac{x^2 y}{x^2+y^2}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// In polari: x=ρcosθ, y=ρsinθ. Numeratore = ρ³cos²θ sinθ, denominatore = ρ²</div>
      $$f = \\frac{\\rho^3 \\cos^2\\theta \\sin\\theta}{\\rho^2} = \\rho \\cos^2\\theta \\sin\\theta$$
      $$|f| \\leq \\rho \\to 0 \\quad (\\rho \\to 0^+)$$
      <div class="sl">// La maggiorazione non dipende da θ: limite = 0</div>
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Limiti</span><span class="vfscore" id="vfs03">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Il limite esiste solo se è lo stesso lungo OGNI percorso. Restrizioni diverse con valori diversi escludono l'esistenza del limite.">
      <div class="vq-text">1. Se le restrizioni di $f$ lungo due rette diverse danno valori distinti, il limite non esiste.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: avere lo stesso valore lungo tutte le rette NON è sufficiente. Esistono funzioni il cui limite lungo ogni retta è 0 ma lungo una parabola è diverso (es. xy²/(x²+y⁴)).">
      <div class="vq-text">2. Se la restrizione di $f$ lungo ogni retta passante per $(0,0)$ dà $0$, allora il limite in $(0,0)$ è $0$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Se in coordinate polari |f-L| ≤ g(ρ) → 0 indipendentemente da θ, allora il limite esiste e vale L (criterio di maggiorazione uniforme).">
      <div class="vq-text">3. Se $|f(\\rho\\cos\\theta, \\rho\\sin\\theta)| \\leq \\rho^2$ per ogni $\\theta$, allora il limite per $(x,y)\\to(0,0)$ è $0$.</div>
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
      navLabel: '§04 Continuità e quiz',
      heading:  'Continuità e quiz finale',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Continuità</div>
  <p>$f$ è <strong>continua</strong> in $(x_0,y_0) \\in D$ se</p>
  $$\\lim_{(x,y) \\to (x_0,y_0)} f(x,y) = f(x_0,y_0)$$
  <p>$f$ è continua in $D$ se è continua in ogni punto di $D$.</p>
  <p>Le funzioni elementari (polinomi, esponenziali, logaritmi, trigonometriche) e le loro composizioni sono continue nei rispettivi domini.</p>
</div>
</div>

<div class="fade">
<div class="box thm">
  <div class="box-label">TEOREMA DI WEIERSTRASS</div>
  <div class="box-title">In due variabili</div>
  <p>Se $f$ è continua su un insieme $K \\subset \\mathbb{R}^2$ <strong>chiuso e limitato</strong>, allora $f$ è limitata e raggiunge il massimo e il minimo assoluti su $K$.</p>
  <p>"Chiuso e limitato" $\\Leftrightarrow$ <strong>compatto</strong> in $\\mathbb{R}^2$ (Heine-Borel).</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Estensione continua</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Stabilisci se $f(x,y) = \\dfrac{x^3+y^3}{x^2+y^2}$ può essere estesa con continuità in $(0,0)$.</p></div>
    <div class="ex-sol">
      <div class="sl">// In polari:</div>
      $$f = \\frac{\\rho^3(\\cos^3\\theta+\\sin^3\\theta)}{\\rho^2} = \\rho(\\cos^3\\theta+\\sin^3\\theta)$$
      $$|f| \\leq \\rho \\cdot 2 \\to 0 \\quad (\\rho \\to 0^+)$$
      <div class="sl">// Sì: definendo f(0,0)=0 la funzione diventa continua in (0,0)</div>
    </div>
  </div>
</div>

<div class="quiz fade">
  <div class="quiz-hdr"><span>QUIZ RIEPILOGO FINALE</span><span class="qscore" id="sc_fin">0/5</span></div>
  <div class="quiz-body">
    <div class="qq" data-ok="b" data-why="Le condizioni vanno combinate: radicando ≥ 0 (per la radice) e argomento del logaritmo > 0.">
      <div class="qq-text">1. Il dominio di $f(x,y) = \\sqrt{1-x^2} + \\ln(y)$ è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr1"> $\\{(x,y) : x \\in [-1,1]\\}$</label>
        <label class="opt"><input type="radio" name="qr1"> $\\{(x,y) : x \\in [-1,1] \\text{ e } y > 0\\}$</label>
        <label class="opt"><input type="radio" name="qr1"> $\\{(x,y) : x^2+y^2 \\leq 1\\}$</label>
        <label class="opt"><input type="radio" name="qr1"> Tutto $\\mathbb{R}^2$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="c" data-why="x²+y²=k è una circonferenza di raggio √k centrata nell'origine, per ogni k>0.">
      <div class="qq-text">2. Le curve di livello di $f(x,y) = x^2+y^2$ sono:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr2"> Rette parallele</label>
        <label class="opt"><input type="radio" name="qr2"> Iperboli</label>
        <label class="opt"><input type="radio" name="qr2"> Cerchi concentrici</label>
        <label class="opt"><input type="radio" name="qr2"> Parabole</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="d" data-why="Lungo y=mx: f=mx²/(x²+m²x²)=m/(1+m²). Dipende da m → limite non esiste.">
      <div class="qq-text">3. Il limite $\\lim_{(x,y)\\to(0,0)} \\dfrac{xy}{x^2+y^2}$:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr3"> Vale $0$</label>
        <label class="opt"><input type="radio" name="qr3"> Vale $1$</label>
        <label class="opt"><input type="radio" name="qr3"> Vale $1/2$</label>
        <label class="opt"><input type="radio" name="qr3"> Non esiste</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="a" data-why="In polari: f = ρ²cos²θ sin²θ / ρ² · ρ = ρcos²θ sin²θ, |f|≤ρ→0 indipendentemente da θ. Limite = 0.">
      <div class="qq-text">4. Il limite $\\lim_{(x,y)\\to(0,0)} \\dfrac{x^2 y^2}{x^2+y^2}$:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr4"> Vale $0$</label>
        <label class="opt"><input type="radio" name="qr4"> Vale $1$</label>
        <label class="opt"><input type="radio" name="qr4"> Non esiste</label>
        <label class="opt"><input type="radio" name="qr4"> Vale $\\infty$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="b" data-why="Weierstrass in più variabili: f continua su compatto (chiuso e limitato) raggiunge max e min assoluti.">
      <div class="qq-text">5. Il teorema di Weierstrass in due variabili afferma che $f$ raggiunge max e min assoluti se:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr5"> $f$ è derivabile su $\\mathbb{R}^2$</label>
        <label class="opt"><input type="radio" name="qr5"> $f$ è continua su un insieme chiuso e limitato</label>
        <label class="opt"><input type="radio" name="qr5"> $f$ è limitata sul dominio</label>
        <label class="opt"><input type="radio" name="qr5"> $f$ ha curve di livello chiuse</label>
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
