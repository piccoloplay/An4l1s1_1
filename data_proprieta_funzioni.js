// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_proprieta_funzioni.js',
    num:   'LEZIONE 03B',
    title: 'Proprietà delle funzioni',
    sub:   'Monotonia · Funzioni limitate · Parità e disparità · Periodicità · Monotonia e invertibilità'
  },

  sections: [

    // ── §01 ──────────────────────────────────────────────────────────
    {
      id:       's01',
      secNum:   '§01',
      navLabel: '§01 Funzioni monotone',
      heading:  'Funzioni monotone',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Monotonia</div>
  <p>Sia $f : A \\to \\mathbb{R}$. Si dice che $f$ è:</p>
  <p><strong>Strettamente crescente</strong> su $A$ se per ogni $x_1, x_2 \\in A$:</p>
  $$x_1 < x_2 \\implies f(x_1) < f(x_2)$$
  <p><strong>Debolmente crescente</strong> (o non decrescente) se $x_1 < x_2 \\implies f(x_1) \\leq f(x_2)$.</p>
  <p><strong>Strettamente decrescente</strong> se $x_1 < x_2 \\implies f(x_1) > f(x_2)$.</p>
  <p><strong>Debolmente decrescente</strong> (o non crescente) se $x_1 < x_2 \\implies f(x_1) \\geq f(x_2)$.</p>
  <p>Una funzione si dice <strong>monotona</strong> se è (almeno debolmente) crescente o decrescente.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">ESEMPI</div>
  <div class="box-title">Funzioni monotone elementari</div>
  <p>$f(x) = x^2$ su $[0, +\\infty)$: strettamente crescente. Su $\\mathbb{R}$: non monotona.</p>
  <p>$f(x) = e^x$ su $\\mathbb{R}$: strettamente crescente.</p>
  <p>$f(x) = \\ln x$ su $(0, +\\infty)$: strettamente crescente.</p>
  <p>$f(x) = 1/x$ su $(0, +\\infty)$: strettamente decrescente.</p>
  <p>$f(x) = c$ (costante): debolmente crescente e debolmente decrescente, ma non strettamente.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Verificare la monotonia dalla definizione</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Dimostra che $f(x) = 2x + 3$ è strettamente crescente su $\\mathbb{R}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Prendi x₁ < x₂ e mostra f(x₁) < f(x₂)</div>
      $$x_1 < x_2 \\implies 2x_1 < 2x_2 \\implies 2x_1 + 3 < 2x_2 + 3 \\implies f(x_1) < f(x_2) \\checkmark$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Monotonia</span><span class="vfscore" id="vfs01">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="F" data-why="Falso: f(x)=x² non è monotona su R. Per x₁=-1 e x₂=1 si ha x₁<x₂ ma f(x₁)=f(x₂)=1. È crescente solo su [0,+∞).">
      <div class="vq-text">1. $f(x) = x^2$ è strettamente crescente su $\\mathbb{R}$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="e^x è strettamente crescente su tutto R: x₁<x₂ implica e^(x₁) < e^(x₂).">
      <div class="vq-text">2. $f(x) = e^x$ è strettamente crescente su $\\mathbb{R}$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Una funzione costante soddisfa sia f(x₁)≤f(x₂) che f(x₁)≥f(x₂) per ogni x₁<x₂: è debolmente crescente e debolmente decrescente.">
      <div class="vq-text">3. Una funzione costante è debolmente crescente.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: f(x)=1/x è strettamente decrescente su (0,+∞) ma anche su (-∞,0). Non è però monotona su R\{0}: -1 < 1 ma f(-1)=-1 < f(1)=1.">
      <div class="vq-text">4. $f(x) = 1/x$ è strettamente decrescente su $\\mathbb{R} \\setminus \\{0\\}$.</div>
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
      navLabel: '§02 Funzioni limitate',
      heading:  'Funzioni limitate',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Funzione limitata</div>
  <p>$f : A \\to \\mathbb{R}$ è <strong>limitata superiormente</strong> se esiste $M \\in \\mathbb{R}$ tale che $f(x) \\leq M$ per ogni $x \\in A$.</p>
  <p>$f$ è <strong>limitata inferiormente</strong> se esiste $m \\in \\mathbb{R}$ tale che $f(x) \\geq m$ per ogni $x \\in A$.</p>
  <p>$f$ è <strong>limitata</strong> se è limitata sia superiormente che inferiormente, ovvero se esiste $K > 0$ tale che $|f(x)| \\leq K$ per ogni $x \\in A$.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">ESEMPI</div>
  <div class="box-title">Limitata e non limitata</div>
  <p>$f(x) = \\sin x$: limitata su $\\mathbb{R}$ (si ha $|\\sin x| \\leq 1$).</p>
  <p>$f(x) = e^x$: limitata inferiormente ($e^x > 0$) ma non superiormente.</p>
  <p>$f(x) = x^2$: limitata inferiormente ($x^2 \\geq 0$) ma non superiormente.</p>
  <p>$f(x) = x$: né limitata superiormente né inferiormente.</p>
  <p>$f(x) = 1/x$ su $(0,1)$: limitata inferiormente (vale $> 1$) ma non superiormente ($\\to +\\infty$ per $x \\to 0^+$).</p>
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Funzioni limitate</span><span class="vfscore" id="vfs02">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="|sin x| ≤ 1 per ogni x ∈ R: sin è limitata sia superiormente (da 1) che inferiormente (da -1).">
      <div class="vq-text">1. $f(x) = \\sin x$ è limitata su $\\mathbb{R}$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: e^x > 0 per ogni x (limitata inferiormente) ma e^x → +∞ per x → +∞ (non limitata superiormente).">
      <div class="vq-text">2. $f(x) = e^x$ è limitata su $\\mathbb{R}$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="f limitata ↔ ∃K>0 : |f(x)|≤K per ogni x. Questo è equivalente a essere limitata sia sup. che inf.">
      <div class="vq-text">3. $f$ è limitata se e solo se esiste $K > 0$ tale che $|f(x)| \\leq K$ per ogni $x \\in A$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: x² ≥ 0 (limitata inf.) ma x² → +∞ (non limitata sup.). Una funzione può essere limitata da un lato solo.">
      <div class="vq-text">4. $f(x) = x^2$ è limitata su $\\mathbb{R}$.</div>
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
      navLabel: '§03 Parità e disparità',
      heading:  'Funzioni pari e dispari',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Funzione pari e dispari</div>
  <p>Sia $f : A \\to \\mathbb{R}$ con $A$ simmetrico rispetto all'origine ($x \\in A \\implies -x \\in A$).</p>
  <p>$f$ è <strong>pari</strong> se $f(-x) = f(x)$ per ogni $x \\in A$. Il grafico è simmetrico rispetto all'asse $y$.</p>
  <p>$f$ è <strong>dispari</strong> se $f(-x) = -f(x)$ per ogni $x \\in A$. Il grafico è simmetrico rispetto all'origine.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">ESEMPI</div>
  <div class="box-title">Funzioni pari, dispari, né l'uno né l'altro</div>
  <p><strong>Pari:</strong> $x^2$, $x^4$, $|x|$, $\\cos x$. In generale: potenze pari, $\\cos$.</p>
  <p><strong>Dispari:</strong> $x$, $x^3$, $\\sin x$, $\\tan x$. In generale: potenze dispari, $\\sin$, $\\tan$.</p>
  <p><strong>Né pari né dispari:</strong> $e^x$, $x^2 + x$, $\\ln x$ (il dominio non è nemmeno simmetrico).</p>
  <p><strong>Osservazione:</strong> se $f$ è dispari e $0 \\in A$, allora $f(0) = 0$ (poiché $f(0) = -f(0) \\implies f(0) = 0$).</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Determinare parità o disparità</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Stabilisci se $f(x) = x^3 - x$ è pari, dispari o nessuno dei due.</p></div>
    <div class="ex-sol">
      $$f(-x) = (-x)^3 - (-x) = -x^3 + x = -(x^3 - x) = -f(x)$$
      <div class="sl">// f(-x) = -f(x) per ogni x → f è dispari ✓</div>
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Parità e disparità</span><span class="vfscore" id="vfs03">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="cos(-x) = cos(x) per ogni x: il coseno è una funzione pari (simmetria rispetto all'asse y).">
      <div class="vq-text">1. $f(x) = \\cos x$ è una funzione pari.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Se f è dispari e 0 è nel dominio: f(0) = f(-0) = -f(0) → 2f(0)=0 → f(0)=0.">
      <div class="vq-text">2. Se $f$ è dispari e $0 \\in A$, allora $f(0) = 0$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: e^(-x) ≠ e^x e e^(-x) ≠ -e^x. La funzione e^x non è né pari né dispari.">
      <div class="vq-text">3. $f(x) = e^x$ è una funzione dispari.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="|{-x}| = |x|: la funzione valore assoluto è pari (simmetrica rispetto all'asse y).">
      <div class="vq-text">4. $f(x) = |x|$ è una funzione pari.</div>
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
      navLabel: '§04 Funzioni periodiche',
      heading:  'Funzioni periodiche',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Funzione periodica</div>
  <p>$f : A \\to \\mathbb{R}$ è <strong>periodica di periodo $T > 0$</strong> se per ogni $x \\in A$ si ha $x + T \\in A$ e:</p>
  $$f(x + T) = f(x) \\quad \\forall\\, x \\in A$$
  <p>Il più piccolo tale $T$ si chiama <strong>periodo fondamentale</strong>.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">ESEMPI</div>
  <div class="box-title">Funzioni periodiche elementari</div>
  <p>$\\sin x$: periodo fondamentale $2\\pi$.</p>
  <p>$\\cos x$: periodo fondamentale $2\\pi$.</p>
  <p>$\\tan x$: periodo fondamentale $\\pi$.</p>
  <p>$\\sin(kx)$: periodo $2\\pi/k$ per $k > 0$.</p>
  <p><strong>Osservazione:</strong> una funzione periodica non costante non può essere monotona su tutto il suo dominio.</p>
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Periodicità</span><span class="vfscore" id="vfs04">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="sin(x+2π) = sin(x) per ogni x: il seno ha periodo 2π.">
      <div class="vq-text">1. $f(x) = \\sin x$ ha periodo $2\\pi$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="sin(2x) ha periodo 2π/2 = π: completando un'oscillazione in metà spazio.">
      <div class="vq-text">2. $f(x) = \\sin(2x)$ ha periodo $\\pi$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: una funzione periodica non costante non può essere strettamente monotona su tutto R (tornerebbe su valori già assunti).">
      <div class="vq-text">3. Una funzione periodica è sempre monotona.</div>
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
      navLabel: '§05 Monotonia e invertibilità',
      heading:  'Relazione tra monotonia e invertibilità',
      html: `
<div class="fade">
<div class="box thm">
  <div class="box-label">TEOREMA</div>
  <div class="box-title">Monotonia implica iniettività</div>
  <p>Se $f$ è strettamente monotona su $A$, allora $f$ è <strong>iniettiva</strong> su $A$.</p>
  <p><em>Dimostrazione:</em> siano $x_1 \\neq x_2$. Allora o $x_1 < x_2$ o $x_1 > x_2$. In entrambi i casi, per la monotonia stretta, $f(x_1) \\neq f(x_2)$. $\\square$</p>
</div>
</div>

<div class="fade">
<div class="box thm">
  <div class="box-label">TEOREMA</div>
  <div class="box-title">Funzione inversa e monotonia</div>
  <p>Se $f : A \\to B$ è strettamente crescente e suriettiva, allora $f^{-1} : B \\to A$ esiste ed è anch'essa <strong>strettamente crescente</strong>.</p>
  <p>Se $f$ è strettamente decrescente, anche $f^{-1}$ è strettamente decrescente.</p>
  <p>In parole: l'inversa di una funzione strettamente monotona conserva il tipo di monotonia.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">ESEMPI</div>
  <div class="box-title">Inversione di funzioni monotone</div>
  <p>$f(x) = e^x$ è strettamente crescente su $\\mathbb{R}$ → $f^{-1}(x) = \\ln x$ è strettamente crescente su $(0,+\\infty)$.</p>
  <p>$f(x) = x^2$ su $[0,+\\infty)$ è strettamente crescente → $f^{-1}(x) = \\sqrt{x}$ è strettamente crescente.</p>
  <p>$f(x) = 1/x$ su $(0,+\\infty)$ è strettamente decrescente → $f^{-1}(x) = 1/x$ è strettamente decrescente.</p>
</div>
</div>

<div class="quiz fade">
  <div class="quiz-hdr"><span>QUIZ RIEPILOGO FINALE</span><span class="qscore" id="sc_fin">0/5</span></div>
  <div class="quiz-body">
    <div class="qq" data-ok="b" data-why="Monotonia stretta implica iniettività: se x₁≠x₂ allora f(x₁)≠f(x₂). Il viceversa non vale in generale.">
      <div class="qq-text">1. Una funzione strettamente crescente è sempre:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr1"> Suriettiva</label>
        <label class="opt"><input type="radio" name="qr1"> Iniettiva</label>
        <label class="opt"><input type="radio" name="qr1"> Limitata</label>
        <label class="opt"><input type="radio" name="qr1"> Periodica</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="c" data-why="f(x)=cos(x) è pari: cos(-x)=cos(x). Il grafico è simmetrico rispetto all'asse y.">
      <div class="qq-text">2. $f(x) = \\cos x$ è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr2"> Dispari</label>
        <label class="opt"><input type="radio" name="qr2"> Né pari né dispari</label>
        <label class="opt"><input type="radio" name="qr2"> Pari</label>
        <label class="opt"><input type="radio" name="qr2"> Strettamente crescente</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="a" data-why="sin(kx) ha periodo 2π/k. Con k=3: periodo = 2π/3.">
      <div class="qq-text">3. Il periodo di $f(x) = \\sin(3x)$ è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr3"> $\\dfrac{2\\pi}{3}$</label>
        <label class="opt"><input type="radio" name="qr3"> $2\\pi$</label>
        <label class="opt"><input type="radio" name="qr3"> $3\\pi$</label>
        <label class="opt"><input type="radio" name="qr3"> $6\\pi$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="d" data-why="L'inversa di una funzione strettamente crescente è strettamente crescente; l'inversa di una strettamente decrescente è strettamente decrescente.">
      <div class="qq-text">4. Se $f$ è strettamente decrescente e invertibile, allora $f^{-1}$ è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr4"> Strettamente crescente</label>
        <label class="opt"><input type="radio" name="qr4"> Costante</label>
        <label class="opt"><input type="radio" name="qr4"> Pari</label>
        <label class="opt"><input type="radio" name="qr4"> Strettamente decrescente</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="b" data-why="f(x)=sin(x) è limitata (|sin x|≤1), periodica (periodo 2π), dispari (sin(-x)=-sin(x)), ma non monotona su tutto R.">
      <div class="qq-text">5. $f(x) = \\sin x$ su $\\mathbb{R}$ è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr5"> Monotona crescente</label>
        <label class="opt"><input type="radio" name="qr5"> Limitata, periodica e dispari</label>
        <label class="opt"><input type="radio" name="qr5"> Limitata e pari</label>
        <label class="opt"><input type="radio" name="qr5"> Non limitata</label>
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
