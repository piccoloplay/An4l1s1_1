// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'succ_funzioni.html',
    num:   'LEZIONE 04',
    title: 'Successioni numeriche<br>e limiti notevoli',
    sub:   'Successioni numeriche · Limiti di successioni · Limiti notevoli · Da successioni a funzioni · Limiti notevoli di funzioni'
  },

  sections: [

    // ── §01 ──────────────────────────────────────────────────────────
    {
      id:       's01',
      secNum:   '§01',
      navLabel: '§01 Successioni numeriche',
      heading:  'Successioni numeriche',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Successione numerica</div>
  <p>Una <strong>successione numerica</strong> è una funzione che associa ad ogni numero naturale $n$ un numero reale $a_n$:</p>
  $$a : \\mathbb{N} \\to \\mathbb{R}, \\quad n \\mapsto a_n$$
  <p>Si scrive $(a_n)_{n \\in \\mathbb{N}}$ oppure $a_1, a_2, a_3, \\ldots$ Il numero $a_n$ si chiama <strong>termine di indice $n$</strong>.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">ESEMPI</div>
  <div class="box-title">Successioni tipiche</div>
  <p><strong>Aritmetica:</strong> $a_n = 2n + 1$ &nbsp;→&nbsp; $3, 5, 7, 9, \\ldots$ (cresce senza limite)</p>
  <p><strong>Geometrica:</strong> $a_n = \\left(\\dfrac{1}{2}\\right)^n$ &nbsp;→&nbsp; $\\dfrac{1}{2}, \\dfrac{1}{4}, \\dfrac{1}{8}, \\ldots$ (si avvicina a 0)</p>
  <p><strong>Oscillante:</strong> $a_n = (-1)^n$ &nbsp;→&nbsp; $-1, 1, -1, 1, \\ldots$ (non si stabilizza)</p>
  <p><strong>Razionale:</strong> $a_n = \\dfrac{n}{n+1}$ &nbsp;→&nbsp; $\\dfrac{1}{2}, \\dfrac{2}{3}, \\dfrac{3}{4}, \\ldots$ (si avvicina a 1)</p>
</div>
</div>

<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Successione monotona</div>
  <p>Una successione è <strong>monotona crescente</strong> se $a_n \\leq a_{n+1}$ per ogni $n$, e <strong>monotona decrescente</strong> se $a_n \\geq a_{n+1}$ per ogni $n$.</p>
  <p>È <strong>limitata</strong> se esiste $M > 0$ tale che $|a_n| \\leq M$ per ogni $n$.</p>
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Successioni numeriche</span><span class="vfscore" id="vfs01">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Ogni successione associa esattamente un numero reale a ogni indice naturale: è per definizione una funzione da N a R.">
      <div class="vq-text">1. Una successione numerica è una funzione da $\\mathbb{N}$ a $\\mathbb{R}$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: a_n = (-1)^n è limitata (|a_n| = 1 per ogni n) ma oscilla tra +1 e -1 senza convergere.">
      <div class="vq-text">2. Una successione limitata converge sempre.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Teorema fondamentale: una successione monotona crescente e limitata superiormente converge al proprio estremo superiore.">
      <div class="vq-text">3. Una successione monotona e limitata converge sempre.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="a_n = (1/2)^n è decrescente (ogni termine è la metà del precedente) e limitata inferiormente da 0.">
      <div class="vq-text">4. La successione $a_n = (1/2)^n$ è monotona decrescente e limitata.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
  </div>
  <div class="vf-foot"><button class="vf-reset" onclick="resetVF(this)">Ricomincia</button><span class="vf-info" id="vfi01"></span></div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 01.1 — Monotonia di $a_n = n/(n+1)$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Mostra che $a_n = \\dfrac{n}{n+1}$ è monotona crescente e limitata superiormente da 1.</p></div>
    <div class="ex-sol">
      <div class="sl">// Monotonia: calcola a_{n+1} - a_n</div>
      $$a_{n+1} - a_n = \\frac{n+1}{n+2} - \\frac{n}{n+1} = \\frac{(n+1)^2 - n(n+2)}{(n+2)(n+1)} = \\frac{1}{(n+2)(n+1)} > 0$$
      <div class="sl">// Quindi è crescente. Limite superiore: n/(n+1) = 1 - 1/(n+1) < 1 per ogni n</div>
      $$\\frac{n}{n+1} < 1 \\quad \\forall\\, n \\implies \\text{limitata superiormente da 1.}$$
    </div>
  </div>
</div>`
    },

    // ── §02 ──────────────────────────────────────────────────────────
    {
      id:       's02',
      secNum:   '§02',
      navLabel: '§02 Limiti di successioni',
      heading:  'Limiti di successioni numeriche',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Limite di una successione</div>
  <p>Si dice che $(a_n)$ <strong>converge</strong> al limite $L \\in \\mathbb{R}$ se, fissato qualsiasi margine di errore $\\varepsilon > 0$, da un certo indice $N$ in poi tutti i termini distano da $L$ meno di $\\varepsilon$:</p>
  $$\\lim_{n \\to \\infty} a_n = L \\quad \\iff \\quad \\forall\\, \\varepsilon > 0,\\; \\exists\\, N \\in \\mathbb{N} : n \\geq N \\implies |a_n - L| < \\varepsilon$$
  <p>Il numero $N$ dipende solo da $\\varepsilon$: una volta scelto il margine, esiste un indice di partenza che funziona per tutti i termini successivi.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">LIMITI FONDAMENTALI</div>
  <div class="box-title">Da ricordare</div>
  <p>$\\displaystyle\\lim_{n\\to\\infty} \\frac{1}{n} = 0$ &nbsp;·&nbsp;
     $\\displaystyle\\lim_{n\\to\\infty} \\frac{1}{n^k} = 0$ per ogni $k > 0$ &nbsp;·&nbsp;
     $\\displaystyle\\lim_{n\\to\\infty} r^n = 0$ se $|r| < 1$</p>
  <p>$\\displaystyle\\lim_{n\\to\\infty} \\sqrt[n]{n} = 1$ &nbsp;·&nbsp;
     $\\displaystyle\\lim_{n\\to\\infty} \\left(1 + \\frac{1}{n}\\right)^n = e$</p>
</div>
</div>

<div class="fade">
<div class="box thm">
  <div class="box-label">TEOREMI</div>
  <div class="box-title">Strumenti per calcolare i limiti</div>
  <p><strong>Algebra dei limiti:</strong> se $a_n \\to L$ e $b_n \\to M$, allora $a_n + b_n \\to L + M$, $a_n b_n \\to LM$, e $a_n/b_n \\to L/M$ se $M \\neq 0$.</p>
  <p><strong>Teorema dei carabinieri:</strong> se $b_n \\leq a_n \\leq c_n$ per ogni $n$ e $b_n, c_n \\to L$, allora $a_n \\to L$.</p>
  <p><strong>Monotona limitata:</strong> ogni successione monotona e limitata converge.</p>
</div>
</div>

<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Successione divergente</div>
  <p>$(a_n)$ <strong>diverge a $+\\infty$</strong> se per ogni $M > 0$ esiste $N$ tale che $n \\geq N \\implies a_n > M$. Analogamente per $-\\infty$.</p>
  <p>Una successione che non converge e non diverge si dice <strong>indeterminata</strong> (es. $(-1)^n$).</p>
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Limiti di successioni</span><span class="vfscore" id="vfs02">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="r^n → 0 per ogni r con |r| < 1: conseguenza diretta della definizione con stima geometrica |r^n - 0| = |r|^n → 0.">
      <div class="vq-text">1. Se $|r| < 1$ allora $r^n \\to 0$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: (-1)^n non converge (oscilla) e non diverge a ±∞: è indeterminata.">
      <div class="vq-text">2. Ogni successione o converge o diverge a $\\pm\\infty$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Il criterio di Cauchy è equivalente alla convergenza: i termini si avvicinano tra loro ↔ converge a qualche limite.">
      <div class="vq-text">3. Una successione converge se e solo se i suoi termini diventano arbitrariamente vicini tra loro.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="n/(n+1) = 1 - 1/(n+1) → 1 - 0 = 1.">
      <div class="vq-text">4. $\\displaystyle\\lim_{n\\to\\infty} \\frac{n}{n+1} = 1$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
  </div>
  <div class="vf-foot"><button class="vf-reset" onclick="resetVF(this)">Ricomincia</button><span class="vf-info" id="vfi02"></span></div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 02.1 — Limite di $a_n = (3n^2+1)/(n^2-2)$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty} \\frac{3n^2+1}{n^2-2}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Dividi numeratore e denominatore per n² (termine dominante)</div>
      $$\\frac{3n^2+1}{n^2-2} = \\frac{3 + 1/n^2}{1 - 2/n^2} \\xrightarrow{n\\to\\infty} \\frac{3+0}{1-0} = 3$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 02.2 — Carabinieri: $a_n = \\sin(n)/n$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Mostra che $a_n = \\sin(n)/n \\to 0$.</p></div>
    <div class="ex-sol">
      <div class="sl">// |sin(n)| ≤ 1 per ogni n, quindi:</div>
      $$-\\frac{1}{n} \\leq \\frac{\\sin(n)}{n} \\leq \\frac{1}{n}$$
      <div class="sl">// Entrambi i lati → 0 → per i carabinieri: sin(n)/n → 0 ✓</div>
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 02.3 — Forma indeterminata $\\infty/\\infty$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty} \\frac{2n^3 - n}{5n^3 + 4n^2}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Dividi per n³ (grado massimo)</div>
      $$\\frac{2n^3-n}{5n^3+4n^2} = \\frac{2 - 1/n^2}{5 + 4/n} \\to \\frac{2}{5}$$
    </div>
  </div>
</div>`
    },

    // ── §03 (NUOVA) ──────────────────────────────────────────────────
    {
      id:       's_not',
      secNum:   '§03',
      navLabel: '§03 Limiti notevoli',
      heading:  'Limiti notevoli di successioni',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">COSA SONO</div>
  <div class="box-title">Limiti notevoli</div>
  <p>I <strong>limiti notevoli</strong> sono risultati che si incontrano così spesso da valere la pena di memorizzare. Permettono di calcolare limiti di forme apparentemente indeterminate senza ogni volta ricominciare da zero.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">GRUPPO 1</div>
  <div class="box-title">Infinitesimi: $1/n$, $1/n^k$, $r^n$</div>
  $$\\lim_{n\\to\\infty} \\frac{1}{n} = 0 \\qquad \\lim_{n\\to\\infty} \\frac{1}{n^k} = 0 \\text{ per ogni } k > 0$$
  $$\\lim_{n\\to\\infty} r^n = 0 \\quad \\text{se } |r| < 1$$
  <p>La successione $r^n$ con $|r| &lt; 1$ è la più usata: ogni numero con valore assoluto minore di 1, elevato a potenza crescente, tende a 0. Esempio: $(0.9)^n \\to 0$, $(-0.5)^n \\to 0$.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">GRUPPO 2</div>
  <div class="box-title">Il numero $e$</div>
  $$\\lim_{n\\to\\infty} \\left(1 + \\frac{1}{n}\\right)^n = e \\approx 2.718\\ldots$$
  $$\\lim_{n\\to\\infty} \\left(1 + \\frac{k}{n}\\right)^n = e^k \\quad \\text{per ogni } k \\in \\mathbb{R}$$
  <p>Generalizzazione: se $\\alpha_n \\to 0$ e $n\\,\\alpha_n \\to k$, allora $(1+\\alpha_n)^n \\to e^k$.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">GRUPPO 3</div>
  <div class="box-title">Radici e logaritmi</div>
  $$\\lim_{n\\to\\infty} \\sqrt[n]{n} = 1 \\qquad \\lim_{n\\to\\infty} \\sqrt[n]{c} = 1 \\text{ per ogni } c > 0$$
  $$\\lim_{n\\to\\infty} \\frac{\\ln n}{n} = 0 \\qquad \\lim_{n\\to\\infty} \\frac{n^k}{a^n} = 0 \\text{ per ogni } k > 0,\\, a > 1$$
  <p>L'ultimo dice che le successioni esponenziali $a^n$ crescono più in fretta di qualsiasi potenza $n^k$.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">GRUPPO 4</div>
  <div class="box-title">Confronto tra infiniti</div>
  <p>Per $a > 1$ e $k > 0$, in ordine di crescita:</p>
  $$\\ln n \\ll n^k \\ll a^n \\ll n! \\ll n^n$$
  <p>Il simbolo $\\ll$ significa "cresce molto più lentamente di". Quindi ad esempio $n^{100} / 2^n \\to 0$ e $2^n / n! \\to 0$.</p>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES — Uso diretto di $(1+k/n)^n$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty}\\left(1-\\frac{3}{n}\\right)^n$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Riconosci la forma (1 + k/n)^n con k = -3</div>
      $$\\left(1-\\frac{3}{n}\\right)^n = \\left(1+\\frac{-3}{n}\\right)^n \\to e^{-3}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES — Confronto esponenziale e potenza</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty}\\frac{n^5}{2^n}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// n^k / a^n → 0 per ogni k > 0 e a > 1: l'esponenziale domina sempre</div>
      $$\\lim_{n\\to\\infty}\\frac{n^5}{2^n} = 0$$
    </div>
  </div>
</div>
</div>`
    },


    // ── §04 ──────────────────────────────────────────────────────────
    {
      id:       's04',
      secNum:   '§04',
      navLabel: '§04 Da successioni a funzioni',
      heading:  'Da successioni a funzioni: cosa cambia',
      html: `
<div class="fade">
<div class="box prop">
  <div class="box-label">IL SALTO</div>
  <div class="box-title">Da $\\mathbb{N}$ a $\\mathbb{R}$: una differenza fondamentale</div>
  <p>Nelle successioni numeriche la variabile $n$ è un intero che cresce verso $+\\infty$: c'è un solo modo di andare a infinito.</p>
  <p>Nelle funzioni reali $f : A \\subseteq \\mathbb{R} \\to \\mathbb{R}$ la variabile $x$ è continua e può avvicinarsi a un punto $x_0$ da sinistra, da destra, oppure tendere a $\\pm\\infty$. Questo rende la nozione di limite molto più ricca.</p>
</div>
</div>

<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Limite di funzione per $x \\to x_0$</div>
  <p>$\\displaystyle\\lim_{x \\to x_0} f(x) = L$ significa: per ogni $\\varepsilon > 0$ esiste $\\delta > 0$ tale che</p>
  $$0 < |x - x_0| < \\delta \\implies |f(x) - L| < \\varepsilon$$
  <p>La differenza chiave con le successioni: $x$ si avvicina a $x_0$ in modo <strong>continuo</strong>, e $x_0$ non deve appartenere al dominio di $f$. Il limite descrive il comportamento <em>vicino</em> a $x_0$, non <em>in</em> $x_0$.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">CONFRONTO</div>
  <div class="box-title">Successioni vs funzioni</div>
  <div class="tbl">
  <table>
    <thead><tr><th></th><th>Successione $(a_n)$</th><th>Funzione $f(x)$</th></tr></thead>
    <tbody>
      <tr><td><strong>Variabile</strong></td><td>$n \\in \\mathbb{N}$, discreta</td><td>$x \\in \\mathbb{R}$, continua</td></tr>
      <tr><td><strong>Limite</strong></td><td>$n \\to +\\infty$ (un solo modo)</td><td>$x \\to x_0$, $x \\to \\pm\\infty$, da destra/sinistra</td></tr>
      <tr><td><strong>Condizione</strong></td><td>$|a_n - L| < \\varepsilon$ per $n \\geq N$</td><td>$|f(x)-L| < \\varepsilon$ per $0<|x-x_0|<\\delta$</td></tr>
      <tr><td><strong>Collegamento</strong></td><td colspan="2">$\\lim_{x\\to x_0}f(x)=L \\iff$ per ogni $x_n\\to x_0$ si ha $f(x_n)\\to L$</td></tr>
    </tbody>
  </table>
  </div>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">FORME INDETERMINATE</div>
  <div class="box-title">Casi in cui il limite non è immediato</div>
  <p>Come per le successioni, anche per le funzioni esistono forme indeterminate: $\\dfrac{0}{0}$, $\\dfrac{\\infty}{\\infty}$, $0 \\cdot \\infty$, $\\infty - \\infty$, $1^\\infty$, $0^0$, $\\infty^0$.</p>
  <p>Per risolverle si usano: manipolazioni algebriche, limiti notevoli, regola di L'Hospital, sviluppi di Taylor.</p>
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Da successioni a funzioni</span><span class="vfscore" id="vfs04">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="F" data-why="Falso: il limite di f(x) per x→x₀ non richiede che f sia definita in x₀. Descrive il comportamento vicino a x₀, non in x₀.">
      <div class="vq-text">1. Per calcolare $\\lim_{x\\to x_0} f(x)$ è necessario che $f$ sia definita in $x_0$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Caratterizzazione sequenziale: lim f(x)=L ↔ per ogni successione x_n→x₀ si ha f(x_n)→L. Questo collega i due concetti.">
      <div class="vq-text">2. $\\lim_{x\\to x_0} f(x) = L$ se e solo se per ogni successione $x_n \\to x_0$ si ha $f(x_n) \\to L$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Per le funzioni reali x può avvicinarsi a x₀ da sinistra, da destra, o tendere a ±∞: molti più modi rispetto alle successioni dove n va solo a +∞.">
      <div class="vq-text">3. Per le funzioni reali esistono più tipi di limite rispetto alle successioni numeriche.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: 0/0 è una forma indeterminata anche per le funzioni. Serve analisi ulteriore (L'Hospital, Taylor, manipolazioni algebriche).">
      <div class="vq-text">4. Se $\\lim_{x\\to x_0} f(x) = 0$ e $\\lim_{x\\to x_0} g(x) = 0$, allora $\\lim_{x\\to x_0} f(x)/g(x) = 1$.</div>
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
      navLabel: '§05 Limiti notevoli di funzioni',
      heading:  'Limiti notevoli di funzioni',
      html: `
<div class="fade">
<div class="box prop">
  <div class="box-label">LIMITI NOTEVOLI</div>
  <div class="box-title">Da memorizzare</div>
  <p><strong>Trigonometrici:</strong></p>
  $$\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1 \\qquad \\lim_{x\\to 0}\\frac{1-\\cos x}{x^2} = \\frac{1}{2} \\qquad \\lim_{x\\to 0}\\frac{\\tan x}{x} = 1$$
  <p><strong>Esponenziali e logaritmici:</strong></p>
  $$\\lim_{x\\to 0}\\frac{e^x-1}{x} = 1 \\qquad \\lim_{x\\to 0}\\frac{\\ln(1+x)}{x} = 1 \\qquad \\lim_{x\\to 0}(1+x)^{1/x} = e$$
  <p><strong>Potenze:</strong></p>
  $$\\lim_{x\\to 0}\\frac{(1+x)^\\alpha - 1}{x} = \\alpha \\qquad \\lim_{x\\to+\\infty}\\left(1+\\frac{1}{x}\\right)^x = e$$
  <p><strong>Gerarchia degli infiniti</strong> per $x\\to+\\infty$:</p>
  $$\\ln x \\ll x^\\alpha \\ll a^x \\ll x^x \\qquad (\\alpha>0,\\; a>1)$$
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">COME USARLI</div>
  <div class="box-title">Ricondurre alla forma standard</div>
  <p>I limiti notevoli valgono con argomento che tende a $0$ (o a $\\infty$ nelle forme con $1/x$). Per applicarli con argomenti diversi si usa la sostituzione.</p>
  <p>Esempio: $\\displaystyle\\lim_{x\\to 0}\\frac{\\sin(3x)}{x}$. Non è nella forma standard, ma:</p>
  $$\\frac{\\sin(3x)}{x} = 3\\cdot\\frac{\\sin(3x)}{3x} \\to 3\\cdot 1 = 3$$
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 1 — Limite notevole con $\\sin$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to 0}\\frac{\\sin(5x)}{3x}$.</p></div>
    <div class="ex-sol">
      $$\\frac{\\sin(5x)}{3x} = \\frac{5}{3}\\cdot\\frac{\\sin(5x)}{5x} \\to \\frac{5}{3}\\cdot 1 = \\frac{5}{3}$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 2 — Limite con $e^x - 1$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to 0}\\frac{e^{2x}-1}{x}$.</p></div>
    <div class="ex-sol">
      $$\\frac{e^{2x}-1}{x} = 2\\cdot\\frac{e^{2x}-1}{2x} \\to 2\\cdot 1 = 2$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 3 — Forma $0/0$ con fattorizzazione</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to 2}\\frac{x^2-4}{x-2}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Forma 0/0. Fattorizza il numeratore</div>
      $$\\frac{x^2-4}{x-2} = \\frac{(x-2)(x+2)}{x-2} = x+2 \\to 4$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 4 — Gerarchia degli infiniti</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to+\\infty}\\frac{x^3}{e^x}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// e^x cresce molto più velocemente di x³: gerarchia degli infiniti</div>
      $$\\lim_{x\\to+\\infty}\\frac{x^3}{e^x} = 0$$
      <div class="sl">// Formalmente: L'Hospital tre volte oppure confronto con la serie di e^x</div>
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Limiti notevoli</span><span class="vfscore" id="vfs05">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="lim sin(x)/x = 1 per x→0 è il limite notevole trigonometrico fondamentale.">
      <div class="vq-text">1. $\\displaystyle\\lim_{x\\to 0}\\dfrac{\\sin x}{x} = 1$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="(e^x-1)/x → 1 per x→0: è il limite notevole esponenziale fondamentale, equivalente alla definizione di e come base del logaritmo naturale.">
      <div class="vq-text">2. $\\displaystyle\\lim_{x\\to 0}\\dfrac{e^x-1}{x} = 1$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: lim sin(3x)/x = 3, non 1. Bisogna ricondurre alla forma standard: sin(3x)/(3x)·3 → 1·3 = 3.">
      <div class="vq-text">3. $\\displaystyle\\lim_{x\\to 0}\\dfrac{\\sin(3x)}{x} = 1$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Gerarchia degli infiniti: e^x domina qualsiasi potenza x^α per x→+∞. Quindi x^3/e^x → 0.">
      <div class="vq-text">4. $\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{x^3}{e^x} = 0$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
  </div>
  <div class="vf-foot"><button class="vf-reset" onclick="resetVF(this)">Ricomincia</button><span class="vf-info" id="vfi05"></span></div>
</div>`
    }
  ],

  disclaimer: `
<div class="fade" style="margin-top:4rem;padding:1.2rem 1.4rem;border:2px solid #aaa;background:#f9f9f6;font-size:.82rem;color:var(--ink-soft);line-height:1.7;">
  <div style="font-family:'Fira Code',monospace;font-size:.63rem;font-weight:600;letter-spacing:.12em;margin-bottom:.4rem;color:#aaa;">DISCLAIMER</div>
  <p>Questo materiale è stato elaborato e distribuito a titolo integrativo e gratuito dal docente, a supporto della didattica curricolare. Non costituisce adozione ufficiale né sostituisce i testi in adozione. Le formule, le definizioni e gli esempi sono di dominio pubblico scientifico; le curiosità storiche sono rielaborazioni originali. Il docente declina ogni responsabilità per eventuali imprecisioni ed errori di stampa. La riproduzione parziale è consentita per uso didattico non commerciale con citazione della fonte. © 2026 — uso interno scolastico.</p>
</div>`

};
