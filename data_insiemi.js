// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_insiemi.js',
    num:   'LEZIONE 02',
    title: 'Insiemi numerici, massimi e minimi',
    sub:   'Insiemi numerici · Maggioranti e minoranti · Massimo e minimo · Estremo superiore e inferiore · Completezza di ℝ'
  },

  sections: [

    // ── §01 ──────────────────────────────────────────────────────────
    {
      id:       's01',
      secNum:   '§01',
      navLabel: '§01 Insiemi numerici',
      heading:  'Insiemi numerici',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">I principali insiemi numerici</div>
  <p>$\\mathbb{N} = \\{0, 1, 2, 3, \\ldots\\}$ — numeri <strong>naturali</strong>.</p>
  <p>$\\mathbb{Z} = \\{\\ldots, -2, -1, 0, 1, 2, \\ldots\\}$ — numeri <strong>interi</strong>.</p>
  <p>$\\mathbb{Q} = \\left\\{\\dfrac{p}{q} : p \\in \\mathbb{Z},\\, q \\in \\mathbb{N},\\, q \\neq 0\\right\\}$ — numeri <strong>razionali</strong>.</p>
  <p>$\\mathbb{R}$ — numeri <strong>reali</strong>: comprende i razionali e gli irrazionali (come $\\sqrt{2}$, $\\pi$, $e$).</p>
  <p>Le inclusioni sono strette: $\\mathbb{N} \\subsetneq \\mathbb{Z} \\subsetneq \\mathbb{Q} \\subsetneq \\mathbb{R}$.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">DENSITÀ</div>
  <div class="box-title">$\\mathbb{Q}$ è denso in $\\mathbb{R}$</div>
  <p>Tra due numeri reali qualsiasi esiste sempre un numero razionale (e anche un irrazionale). Questo si dice che $\\mathbb{Q}$ è <strong>denso</strong> in $\\mathbb{R}$.</p>
  <p>Tuttavia $\\mathbb{Q}$ ha "buchi": $\\sqrt{2} \\in \\mathbb{R} \\setminus \\mathbb{Q}$, cioè $\\sqrt{2}$ è reale ma non razionale.</p>
</div>
</div>

<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Intervalli</div>
  <p>Dati $a, b \\in \\mathbb{R}$ con $a < b$:</p>
  <p>$(a,b) = \\{x \\in \\mathbb{R} : a < x < b\\}$ — intervallo <strong>aperto</strong></p>
  <p>$[a,b] = \\{x \\in \\mathbb{R} : a \\leq x \\leq b\\}$ — intervallo <strong>chiuso</strong></p>
  <p>$[a,b)$, $(a,b]$ — intervalli <strong>semiaperti</strong></p>
  <p>$(a, +\\infty)$, $(-\\infty, b]$, ecc. — intervalli <strong>illimitati</strong></p>
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Insiemi numerici</span><span class="vfscore" id="vfs01">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="N ⊂ Z ⊂ Q ⊂ R: ogni naturale è intero, ogni intero è razionale (p/1), ogni razionale è reale.">
      <div class="vq-text">1. $\\mathbb{N} \\subsetneq \\mathbb{Z} \\subsetneq \\mathbb{Q} \\subsetneq \\mathbb{R}$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: √2 è irrazionale, cioè non appartiene a Q. Si dimostra per assurdo supponendo √2 = p/q con p,q interi e MCD(p,q)=1.">
      <div class="vq-text">2. $\\sqrt{2} \\in \\mathbb{Q}$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Q è denso in R: tra due reali qualsiasi esiste sempre un razionale (e anche infiniti razionali).">
      <div class="vq-text">3. Tra due numeri reali qualsiasi esiste sempre un numero razionale.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: (a,b) è aperto, gli estremi a e b non appartengono all'intervallo.">
      <div class="vq-text">4. L'intervallo $(a,b)$ contiene i suoi estremi $a$ e $b$.</div>
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
      navLabel: '§02 Maggioranti e minoranti',
      heading:  'Insiemi limitati, maggioranti e minoranti',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Insieme limitato superiormente</div>
  <p>Un insieme $A \\subseteq \\mathbb{R}$ è <strong>limitato superiormente</strong> se esiste $M \\in \\mathbb{R}$ tale che:</p>
  $$a \\leq M \\quad \\forall\\, a \\in A$$
  <p>Ogni tale $M$ si chiama <strong>maggiorante</strong> di $A$.</p>
  <p>Analogamente, $A$ è <strong>limitato inferiormente</strong> se esiste $m \\in \\mathbb{R}$ con $m \\leq a$ per ogni $a \\in A$. Ogni tale $m$ è un <strong>minorante</strong>.</p>
  <p>$A$ è <strong>limitato</strong> se è limitato sia superiormente che inferiormente.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">ESEMPI</div>
  <div class="box-title">Insiemi limitati e illimitati</div>
  <p>$A = (0, 1)$: limitato. Maggioranti: tutti gli $M \\geq 1$. Minoranti: tutti gli $m \\leq 0$.</p>
  <p>$B = \\{1/n : n \\in \\mathbb{N},\\, n \\geq 1\\} = \\{1, 1/2, 1/3, \\ldots\\}$: limitato. Maggiorante minimo: $1$. Minorante massimo: $0$ (ma $0 \\notin B$).</p>
  <p>$C = \\mathbb{N}$: limitato inferiormente (minorante $0$), ma non superiormente.</p>
  <p>$D = \\mathbb{Z}$: né limitato superiormente né inferiormente.</p>
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Maggioranti e minoranti</span><span class="vfscore" id="vfs02">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Se M è maggiorante di A, allora anche M+1, M+2, ... sono maggioranti. I maggioranti sono infiniti.">
      <div class="vq-text">1. Se $M$ è un maggiorante di $A$, allora anche $M + 1$ è un maggiorante di $A$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: N è limitato inferiormente (0 è minorante) ma non superiormente: per ogni M ∈ R esiste n ∈ N con n > M.">
      <div class="vq-text">2. L'insieme $\\mathbb{N}$ è limitato.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="L'insieme vuoto è limitato per vacuità: qualsiasi numero è sia maggiorante che minorante di ∅.">
      <div class="vq-text">3. L'insieme vuoto $\\emptyset$ è limitato.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="A = (0,1): tutti gli x con x ≥ 1 sono maggioranti, tutti gli x con x ≤ 0 sono minoranti.">
      <div class="vq-text">4. L'insieme $(0,1)$ è limitato superiormente e inferiormente.</div>
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
      navLabel: '§03 Massimo e minimo',
      heading:  'Massimo e minimo di un insieme',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Massimo e minimo</div>
  <p>$M \\in A$ è il <strong>massimo</strong> di $A$ se $a \\leq M$ per ogni $a \\in A$. Si scrive $M = \\max A$.</p>
  <p>$m \\in A$ è il <strong>minimo</strong> di $A$ se $m \\leq a$ per ogni $a \\in A$. Si scrive $m = \\min A$.</p>
  <p>La differenza fondamentale rispetto ai maggioranti: il massimo deve <strong>appartenere all'insieme</strong>. Se esiste, è unico.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">ATTENZIONE</div>
  <div class="box-title">Il massimo può non esistere</div>
  <p>Un insieme limitato superiormente non necessariamente ha massimo:</p>
  <p>$A = (0, 1)$: limitato superiormente, ma $\\max A$ non esiste. Ogni candidato $x < 1$ viene superato da $(x+1)/2 \\in A$; e $1 \\notin A$.</p>
  <p>$B = [0, 1]$: $\\max B = 1$ (esiste perché l'intervallo è chiuso).</p>
  <p>$C = \\{1/n : n \\geq 1\\}$: $\\max C = 1$ (appartiene a $C$, con $n=1$).</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Determinare max e min</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Per ciascun insieme, stabilisci se esiste massimo e/o minimo: (a) $[2, 5)$, &nbsp; (b) $\\{n \\in \\mathbb{N} : n^2 < 10\\}$, &nbsp; (c) $\\{x \\in \\mathbb{R} : x^2 \\leq 4\\}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// (a) [2,5): min = 2 (appartiene), max non esiste (5 ∉ A)</div>
      $$\\min[2,5) = 2, \\quad \\max[2,5) \\text{ non esiste}$$
      <div class="sl">// (b) {n ∈ N : n²<10} = {0,1,2,3}: insieme finito</div>
      $$\\min = 0, \\quad \\max = 3$$
      <div class="sl">// (c) x²≤4 ↔ -2≤x≤2, cioè [-2,2]: intervallo chiuso</div>
      $$\\min = -2, \\quad \\max = 2$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Massimo e minimo</span><span class="vfscore" id="vfs03">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Il massimo deve appartenere all'insieme ed essere ≥ di tutti gli altri elementi. Se esiste, è unico.">
      <div class="vq-text">1. Se $\\max A$ esiste, allora $\\max A \\in A$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: (0,1) è limitato superiormente ma non ha massimo: 1 ∉ (0,1) e nessun elemento di (0,1) è maggiorante di (0,1).">
      <div class="vq-text">2. Ogni insieme limitato superiormente ha massimo.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Ogni insieme finito e non vuoto ha sia massimo che minimo: basta prendere il più grande e il più piccolo elemento.">
      <div class="vq-text">3. Ogni insieme finito non vuoto ha massimo e minimo.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: min[2,5) = 2 (appartiene), ma max non esiste perché 5 ∉ [2,5).">
      <div class="vq-text">4. L'insieme $[2, 5)$ ha sia massimo che minimo.</div>
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
      navLabel: '§04 Estremo superiore e inferiore',
      heading:  'Estremo superiore e inferiore',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Estremo superiore (sup)</div>
  <p>Sia $A \\subseteq \\mathbb{R}$ limitato superiormente. L'<strong>estremo superiore</strong> di $A$ è il <strong>minimo dei maggioranti</strong> di $A$:</p>
  $$s = \\sup A \\iff \\begin{cases} a \\leq s & \\forall\\, a \\in A \\\\ \\forall\\, \\varepsilon > 0,\\; \\exists\\, a \\in A : a > s - \\varepsilon \\end{cases}$$
  <p>La seconda condizione dice che $s$ è il <strong>più piccolo</strong> maggiorante: nessun numero minore di $s$ è ancora un maggiorante.</p>
</div>
</div>

<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Estremo inferiore (inf)</div>
  <p>Sia $A \\subseteq \\mathbb{R}$ limitato inferiormente. L'<strong>estremo inferiore</strong> di $A$ è il <strong>massimo dei minoranti</strong> di $A$:</p>
  $$i = \\inf A \\iff \\begin{cases} i \\leq a & \\forall\\, a \\in A \\\\ \\forall\\, \\varepsilon > 0,\\; \\exists\\, a \\in A : a < i + \\varepsilon \\end{cases}$$
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">RELAZIONE TRA sup/inf E max/min</div>
  <div class="box-title">Quando coincidono</div>
  <p>$\\sup A = \\max A$ se e solo se $\\sup A \\in A$.</p>
  <p>$\\inf A = \\min A$ se e solo se $\\inf A \\in A$.</p>
  <p><strong>Esempi:</strong></p>
  <p>$A = (0,1)$: $\\sup A = 1 \\notin A$ (non è massimo), $\\inf A = 0 \\notin A$ (non è minimo).</p>
  <p>$B = [0,1]$: $\\sup B = 1 = \\max B$, $\\inf B = 0 = \\min B$.</p>
  <p>$C = \\{1/n : n \\geq 1\\}$: $\\sup C = 1 = \\max C$, $\\inf C = 0 \\notin C$ (non è minimo).</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Calcolare sup e inf</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova $\\sup$ e $\\inf$ dei seguenti insiemi, specificando se sono max/min: (a) $A = \\left\\{\\dfrac{n}{n+1} : n \\in \\mathbb{N}\\right\\}$, &nbsp; (b) $B = \\left\\{x \\in \\mathbb{R} : x^2 < 3\\right\\}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// (a) n/(n+1) = 1 - 1/(n+1): crescente in n, tende a 1 ma non lo raggiunge</div>
      $$\\inf A = \\min A = 0 \\quad (n=0), \\qquad \\sup A = 1 \\notin A \\text{ (non è max)}$$
      <div class="sl">// (b) x²<3 ↔ -√3 < x < √3, cioè B = (-√3, √3)</div>
      $$\\inf B = -\\sqrt{3} \\notin B, \\qquad \\sup B = \\sqrt{3} \\notin B$$
      <div class="sl">// B è aperto: né max né min esistono</div>
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Sup e inf</span><span class="vfscore" id="vfs04">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="F" data-why="Falso: sup A può non appartenere ad A (es. sup(0,1) = 1 ∉ (0,1)). Se sup A ∈ A allora coincide con il massimo.">
      <div class="vq-text">1. $\\sup A$ appartiene sempre ad $A$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Se max A esiste, allora max A ∈ A ed è maggiorante di A: è quindi il minimo dei maggioranti, cioè sup A.">
      <div class="vq-text">2. Se $\\max A$ esiste, allora $\\sup A = \\max A$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="sup(0,1) = 1: è il minimo dei maggioranti (tutti gli x ≥ 1). Ma 1 ∉ (0,1), quindi non è il massimo.">
      <div class="vq-text">3. $\\sup(0,1) = 1$ ma $\\max(0,1)$ non esiste.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: se s = sup A e ε > 0, esiste a ∈ A con a > s-ε. Questo significa che s-ε non è un maggiorante, cioè s è il minimo dei maggioranti.">
      <div class="vq-text">4. Se $s = \\sup A$, allora non esiste alcun $a \\in A$ con $a > s - 1$.</div>
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
      navLabel: '§05 Completezza di ℝ',
      heading:  'Proprietà di completezza di ℝ',
      html: `
<div class="fade">
<div class="box thm">
  <div class="box-label">ASSIOMA / TEOREMA</div>
  <div class="box-title">Completezza di $\\mathbb{R}$</div>
  <p>Ogni sottoinsieme non vuoto di $\\mathbb{R}$ che sia limitato superiormente ammette estremo superiore in $\\mathbb{R}$:</p>
  $$A \\subseteq \\mathbb{R},\\; A \\neq \\emptyset,\\; A \\text{ limitato sup.} \\implies \\exists\\, \\sup A \\in \\mathbb{R}$$
  <p>Analogamente per l'estremo inferiore. Questa proprietà distingue $\\mathbb{R}$ da $\\mathbb{Q}$: in $\\mathbb{Q}$, l'insieme $\\{x \\in \\mathbb{Q} : x^2 < 2\\}$ è limitato superiormente ma il suo sup ($\\sqrt{2}$) non appartiene a $\\mathbb{Q}$.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">CONSEGUENZA</div>
  <div class="box-title">Proprietà archimedea</div>
  <p>Per ogni $x \\in \\mathbb{R}$ esiste $n \\in \\mathbb{N}$ tale che $n > x$. In parole: $\\mathbb{N}$ non è limitato superiormente in $\\mathbb{R}$.</p>
  <p>Equivalentemente: per ogni $\\varepsilon > 0$ esiste $n \\in \\mathbb{N}$ con $1/n < \\varepsilon$.</p>
  <p>Questa proprietà è fondamentale per la teoria dei limiti: permette di rendere $1/n$ piccolo quanto si vuole.</p>
</div>
</div>

<div class="quiz fade">
  <div class="quiz-hdr"><span>QUIZ RIEPILOGO FINALE</span><span class="qscore" id="sc_fin">0/5</span></div>
  <div class="quiz-body">
    <div class="qq" data-ok="c" data-why="Il massimo deve appartenere all'insieme. sup A è il minimo dei maggioranti e può non appartenere ad A.">
      <div class="qq-text">1. Qual è la differenza tra $\\max A$ e $\\sup A$?</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr1"> Sono sempre uguali</label>
        <label class="opt"><input type="radio" name="qr1"> $\\sup A \\leq \\max A$ sempre</label>
        <label class="opt"><input type="radio" name="qr1"> $\\max A \\in A$, mentre $\\sup A$ può non appartenere ad $A$</label>
        <label class="opt"><input type="radio" name="qr1"> $\\max A$ è il minimo dei maggioranti</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="b" data-why="sup(0,1) = 1 (minimo dei maggioranti), inf(0,1) = 0 (massimo dei minoranti). Né 0 né 1 appartengono all'insieme aperto.">
      <div class="qq-text">2. Per l'insieme $A = (0,1)$:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr2"> $\\max A = 1$ e $\\min A = 0$</label>
        <label class="opt"><input type="radio" name="qr2"> $\\sup A = 1$ e $\\inf A = 0$, ma né max né min esistono</label>
        <label class="opt"><input type="radio" name="qr2"> $\\sup A$ non esiste</label>
        <label class="opt"><input type="radio" name="qr2"> $\\inf A = 0 = \\min A$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="d" data-why="La completezza di R garantisce che ogni sottoinsieme non vuoto e limitato superiormente ha sup in R. Q non gode di questa proprietà.">
      <div class="qq-text">3. La proprietà di completezza di $\\mathbb{R}$ afferma che:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr3"> Ogni insieme ha massimo</label>
        <label class="opt"><input type="radio" name="qr3"> $\\mathbb{R}$ è numerabile</label>
        <label class="opt"><input type="radio" name="qr3"> Ogni intervallo è chiuso</label>
        <label class="opt"><input type="radio" name="qr3"> Ogni sottoinsieme non vuoto limitato superiormente ha $\\sup$ in $\\mathbb{R}$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="a" data-why="A = {n/(n+1) : n ∈ N}: il termine con n=0 vale 0 (minimo), i termini crescono verso 1 senza raggiungerlo (sup=1, non max).">
      <div class="qq-text">4. Per $A = \\left\\{\\dfrac{n}{n+1} : n \\in \\mathbb{N}\\right\\}$:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr4"> $\\inf A = \\min A = 0$ e $\\sup A = 1$ (non è max)</label>
        <label class="opt"><input type="radio" name="qr4"> $\\min A = 1/2$ e $\\max A = 1$</label>
        <label class="opt"><input type="radio" name="qr4"> $A$ non è limitato</label>
        <label class="opt"><input type="radio" name="qr4"> $\\sup A$ non esiste</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="b" data-why="Proprietà archimedea: per ogni ε>0 esiste n ∈ N con 1/n < ε. Questo permette di rendere 1/n arbitrariamente piccolo.">
      <div class="qq-text">5. La proprietà archimedea afferma che:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr5"> $\\mathbb{N}$ è limitato superiormente</label>
        <label class="opt"><input type="radio" name="qr5"> Per ogni $\\varepsilon > 0$ esiste $n \\in \\mathbb{N}$ con $1/n < \\varepsilon$</label>
        <label class="opt"><input type="radio" name="qr5"> Ogni reale è intero</label>
        <label class="opt"><input type="radio" name="qr5"> $\\mathbb{Q}$ è completo</label>
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
