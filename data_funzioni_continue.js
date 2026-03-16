// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_funzioni_continue.js',
    num:   'LEZIONE 05',
    title: 'Funzioni continue',
    sub:   'Definizione · Discontinuità · Permanenza del segno · Teorema degli zeri · Weierstrass · Valori intermedi'
  },

  sections: [

    // ── §01 ──────────────────────────────────────────────────────────
    {
      id:       's01',
      secNum:   '§01',
      navLabel: '§01 Definizione',
      heading:  'Definizione di continuità',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Continuità in un punto</div>
  <p>Sia $f : A \\to \\mathbb{R}$ e sia $x_0 \\in A$. Si dice che $f$ è <strong>continua in $x_0$</strong> se, per ogni margine di errore $\\varepsilon > 0$, esiste un intorno di $x_0$ entro il quale $f$ si discosta da $f(x_0)$ meno di $\\varepsilon$:</p>
  $$\\forall\\, \\varepsilon > 0, \\; \\exists\\, \\delta > 0 : |x - x_0| < \\delta \\implies |f(x) - f(x_0)| < \\varepsilon$$
  <p>In parole: piccole variazioni di $x$ attorno a $x_0$ producono piccole variazioni di $f(x)$ attorno a $f(x_0)$.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">COLLEGAMENTO CON I LIMITI</div>
  <div class="box-title">Continuità = il limite coincide col valore</div>
  <p>$f$ è continua in $x_0$ se e solo se:</p>
  $$\\lim_{x \\to x_0} f(x) = f(x_0)$$
  <p>Questo richiede tre cose simultaneamente: che il limite esista, che $f$ sia definita in $x_0$, e che i due valori coincidano.</p>
</div>
</div>

<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Continuità su un intervallo</div>
  <p>$f$ è <strong>continua su un intervallo</strong> $I$ se è continua in ogni punto di $I$.</p>
  <p>Per gli estremi di un intervallo chiuso $[a,b]$: si richiede la continuità da destra in $a$ e da sinistra in $b$.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">COLLEGAMENTO CON LE SUCCESSIONI</div>
  <div class="box-title">Caratterizzazione sequenziale</div>
  <p>$f$ è continua in $x_0$ se e solo se per ogni successione $(x_n)$ con $x_n \\to x_0$ si ha $f(x_n) \\to f(x_0)$.</p>
  <p>Questo è utile per <em>dimostrare che una funzione non è continua</em>: basta trovare una successione $x_n \\to x_0$ per cui $f(x_n)$ non tende a $f(x_0)$.</p>
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Definizione di continuità</span><span class="vfscore" id="vfs01">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="È la definizione: lim f(x) = f(x₀) quando x→x₀, equivalente alla definizione epsilon-delta.">
      <div class="vq-text">1. $f$ è continua in $x_0$ se e solo se $\\displaystyle\\lim_{x \\to x_0} f(x) = f(x_0)$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: serve anche che f sia definita in x₀ e che il limite esista. Un punto isolato o un limite che non esiste violano la continuità.">
      <div class="vq-text">2. Se il limite $\\displaystyle\\lim_{x \\to x_0} f(x)$ esiste, allora $f$ è continua in $x_0$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Caratterizzazione sequenziale: f continua in x₀ ↔ per ogni x_n → x₀ si ha f(x_n) → f(x₀).">
      <div class="vq-text">3. $f$ continua in $x_0$ implica che per ogni $x_n \\to x_0$ si ha $f(x_n) \\to f(x_0)$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="La composizione di funzioni continue è continua: se g è continua in x₀ e f è continua in g(x₀), allora f∘g è continua in x₀.">
      <div class="vq-text">4. La composizione di due funzioni continue è continua.</div>
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
      navLabel: '§02 Esempi e discontinuità',
      heading:  'Esempi di funzioni continue e discontinue',
      html: `
<div class="fade">
<div class="box prop">
  <div class="box-label">FUNZIONI CONTINUE ELEMENTARI</div>
  <div class="box-title">Continue su tutto il loro dominio naturale</div>
  <p><strong>Polinomi:</strong> $p(x) = a_n x^n + \\ldots + a_0$ è continua su $\\mathbb{R}$.</p>
  <p><strong>Funzioni razionali:</strong> $p(x)/q(x)$ è continua dove $q(x) \\neq 0$.</p>
  <p><strong>$\\sin x$, $\\cos x$:</strong> continue su $\\mathbb{R}$.</p>
  <p><strong>$e^x$:</strong> continua su $\\mathbb{R}$.</p>
  <p><strong>$\\sqrt{x}$:</strong> continua su $[0, +\\infty)$.</p>
  <p><strong>$|x|$:</strong> continua su $\\mathbb{R}$ (anche in $x=0$, dove non è "liscia" ma è continua).</p>
</div>
</div>

<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Tipi di discontinuità</div>
  <p><strong>Discontinuità eliminabile:</strong> il limite esiste ma non coincide con il valore della funzione (o la funzione non è definita in quel punto). Si "aggiusta" ridefinendo $f(x_0) = \\lim_{x\\to x_0} f(x)$.</p>
  <p><strong>Discontinuità a salto:</strong> i limiti destro e sinistro esistono ma sono diversi: $\\lim_{x\\to x_0^-} f(x) \\neq \\lim_{x\\to x_0^+} f(x)$.</p>
  <p><strong>Discontinuità essenziale:</strong> almeno uno dei due limiti laterali non esiste (o è infinito).</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">ESEMPI DI DISCONTINUITÀ</div>
  <div class="box-title">Un caso per ogni tipo</div>
  <p><strong>Eliminabile:</strong> $f(x) = \\dfrac{\\sin x}{x}$ non è definita in $x=0$, ma $\\lim_{x\\to 0} \\dfrac{\\sin x}{x} = 1$. Definendo $f(0) = 1$ la funzione diventa continua.</p>
  <p><strong>A salto:</strong> $f(x) = \\begin{cases} 0 & x < 0 \\\\ 1 & x \\geq 0 \\end{cases}$. Il limite sinistro in $0$ è $0$, quello destro è $1$: salto di ampiezza $1$.</p>
  <p><strong>Essenziale:</strong> $f(x) = \\sin(1/x)$ in $x = 0$. La funzione oscilla infinitamente veloce avvicinandosi a $0$: nessun limite esiste.</p>
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Discontinuità</span><span class="vfscore" id="vfs02">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="I polinomi sono somme e prodotti di funzioni continue (la funzione identità x e le costanti), quindi continui su tutto R.">
      <div class="vq-text">1. Ogni polinomio è continuo su $\\mathbb{R}$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: nella discontinuità eliminabile il limite esiste, ma non coincide col valore (o la funzione non è definita). Si può 'eliminare' ridefinendo f in quel punto.">
      <div class="vq-text">2. Una discontinuità eliminabile significa che il limite non esiste.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="La funzione |x| è continua in x=0: lim_{x→0}|x| = 0 = |0|. Non è 'liscia' (non ha derivata in 0) ma è continua.">
      <div class="vq-text">3. $f(x) = |x|$ è continua in $x = 0$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: nella discontinuità a salto entrambi i limiti laterali esistono (sono finiti), ma sono diversi tra loro.">
      <div class="vq-text">4. In una discontinuità a salto almeno uno dei limiti laterali è infinito.</div>
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
      navLabel: '§03 Permanenza del segno',
      heading:  'Teorema della permanenza del segno',
      html: `
<div class="fade">
<div class="box thm">
  <div class="box-label">TEOREMA</div>
  <div class="box-title">Permanenza del segno</div>
  <p>Sia $f$ continua in $x_0$ e supponi $f(x_0) > 0$. Allora esiste un intorno di $x_0$ in cui $f$ è positiva:</p>
  $$\\exists\\, \\delta > 0 : |x - x_0| < \\delta \\implies f(x) > 0$$
  <p>Analogamente se $f(x_0) < 0$: esiste un intorno in cui $f$ è negativa.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">INTUIZIONE</div>
  <div class="box-title">Perché è vero</div>
  <p>Se $f(x_0) = c > 0$ e $f$ è continua, per la definizione con $\\varepsilon = c/2$ esiste $\\delta$ tale che $|f(x) - c| < c/2$ per $|x - x_0| < \\delta$. Questo implica:</p>
  $$f(x) > c - \\frac{c}{2} = \\frac{c}{2} > 0$$
  <p>La continuità impedisce alla funzione di "saltare" bruscamente da un valore positivo a uno negativo senza passare per zero.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">APPLICAZIONE</div>
  <div class="box-title">Uso pratico</div>
  <p>Il teorema dice che se $f$ è continua e positiva in un punto, lo è anche in un intorno. Quindi: se vuoi dimostrare che $f$ cambia segno, devi passare per uno zero (o avere una discontinuità).</p>
  <p>Esempio: $f(x) = x^2 - 1$. Si ha $f(0) = -1 < 0$ e $f(2) = 3 > 0$. Poiché $f$ è continua, da qualche parte tra $0$ e $2$ deve annullarsi (anticipa il teorema degli zeri).</p>
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Permanenza del segno</span><span class="vfscore" id="vfs03">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="È esattamente il teorema: continuità + f(x₀)>0 garantisce f>0 in un intorno di x₀.">
      <div class="vq-text">1. Se $f$ è continua in $x_0$ e $f(x_0) > 0$, allora $f > 0$ in un intorno di $x_0$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: serve la continuità. Una funzione discontinua può valere 5 in x₀ ma essere negativa in ogni intorno.">
      <div class="vq-text">2. Il teorema vale anche se $f$ è discontinua in $x_0$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Una funzione continua non può cambiare segno senza passare per zero: questo è il contenuto del teorema.">
      <div class="vq-text">3. Una funzione continua che cambia segno deve passare per zero.</div>
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
      navLabel: '§04 Teorema degli zeri',
      heading:  'Teorema degli zeri',
      html: `
<div class="fade">
<div class="box thm">
  <div class="box-label">TEOREMA</div>
  <div class="box-title">Teorema degli zeri (Bolzano)</div>
  <p>Sia $f : [a,b] \\to \\mathbb{R}$ continua su $[a,b]$. Se $f(a)$ e $f(b)$ hanno segni opposti:</p>
  $$f(a) \\cdot f(b) < 0$$
  <p>allora esiste almeno un punto $c \\in (a,b)$ tale che $f(c) = 0$.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">INTUIZIONE</div>
  <div class="box-title">Perché è vero</div>
  <p>Il grafico di $f$ parte sotto (o sopra) l'asse $x$ in $a$ e finisce sopra (o sotto) in $b$. Poiché $f$ è continua — il suo grafico si traccia senza staccare la matita dal foglio — deve attraversare l'asse $x$ almeno una volta.</p>
  <p>La continuità è essenziale: una funzione con un salto potrebbe passare da negativa a positiva senza annullarsi.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">ATTENZIONE</div>
  <div class="box-title">Il teorema garantisce esistenza, non unicità</div>
  <p>Possono esistere più zeri in $(a,b)$. Il teorema dice solo che almeno uno c'è.</p>
  <p>Esempio: $f(x) = \\sin(x)$ su $[0, 4\\pi]$ ha $f(0) = 0$... ma se prendiamo $[0.1, 4\\pi - 0.1]$ la funzione ha più zeri.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Localizzare uno zero di $f(x) = x^3 - x - 1$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Mostra che $f(x) = x^3 - x - 1$ ha almeno uno zero in $(1, 2)$.</p></div>
    <div class="ex-sol">
      <div class="sl">// f è un polinomio → continua su tutto R, in particolare su [1,2]</div>
      $$f(1) = 1 - 1 - 1 = -1 < 0$$
      $$f(2) = 8 - 2 - 1 = 5 > 0$$
      <div class="sl">// f(1) < 0 e f(2) > 0: segni opposti → per il teorema degli zeri</div>
      $$\\exists\\, c \\in (1,2) : f(c) = 0 \\checkmark$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Affinare l'intervallo per bisezione</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Per $f(x) = x^3 - x - 1$, restringe lo zero a un intervallo di ampiezza $0.5$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Calcola f nel punto medio dell'intervallo [1, 2]</div>
      $$f(1.5) = 3.375 - 1.5 - 1 = 0.875 > 0$$
      <div class="sl">// f(1) < 0 e f(1.5) > 0 → lo zero è in (1, 1.5)</div>
      $$f(1.25) = 1.953 - 1.25 - 1 = -0.297 < 0$$
      <div class="sl">// f(1.25) < 0 e f(1.5) > 0 → lo zero è in (1.25, 1.5), ampiezza 0.25 ✓</div>
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Teorema degli zeri</span><span class="vfscore" id="vfs04">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="F" data-why="Falso: il teorema garantisce almeno uno zero, ma potrebbero essercene molti. Ad esempio f(x)=sin(x) su [π/2, 5π/2] ha f(π/2)=1>0 e f(5π/2)=1>0, ma questo non è il caso. Corretto è: possono esserci più zeri.">
      <div class="vq-text">1. Il teorema degli zeri garantisce che lo zero è unico.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="La continuità è ipotesi necessaria: una funzione con una discontinuità a salto può passare da negativa a positiva senza annullarsi.">
      <div class="vq-text">2. Senza l'ipotesi di continuità il teorema degli zeri può essere falso.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="f(0)=0-0-2=-2<0 e f(2)=8-2-2=4>0: segni opposti, f è un polinomio (continuo) → almeno uno zero in (0,2).">
      <div class="vq-text">3. $f(x) = x^3 - x - 2$ ha almeno uno zero in $(0, 2)$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: il teorema richiede che i valori agli estremi abbiano segni opposti. Se f(a) e f(b) hanno lo stesso segno il teorema non si applica (ma potrebbero comunque esserci zeri).">
      <div class="vq-text">4. Se $f(a) > 0$ e $f(b) > 0$ il teorema degli zeri garantisce l'assenza di zeri in $(a,b)$.</div>
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
      navLabel: '§05 Weierstrass',
      heading:  'Teorema di Weierstrass',
      html: `
<div class="fade">
<div class="box thm">
  <div class="box-label">TEOREMA</div>
  <div class="box-title">Teorema di Weierstrass</div>
  <p>Sia $f : [a,b] \\to \\mathbb{R}$ continua su un intervallo <strong>chiuso e limitato</strong> $[a,b]$. Allora:</p>
  <p>1. $f$ è <strong>limitata</strong> su $[a,b]$;</p>
  <p>2. $f$ <strong>raggiunge</strong> il suo massimo e il suo minimo assoluti, cioè esistono $x_M, x_m \\in [a,b]$ tali che:</p>
  $$f(x_m) \\leq f(x) \\leq f(x_M) \\quad \\forall\\, x \\in [a,b]$$
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">LE IPOTESI SONO NECESSARIE</div>
  <div class="box-title">Cosa succede se manca qualcosa</div>
  <p><strong>Intervallo aperto:</strong> $f(x) = 1/x$ su $(0,1)$ è continua ma non limitata (tende a $+\\infty$ per $x\\to 0^+$). L'intervallo deve essere chiuso.</p>
  <p><strong>Intervallo illimitato:</strong> $f(x) = x$ su $[0,+\\infty)$ è continua ma non limitata superiormente. L'intervallo deve essere limitato.</p>
  <p><strong>Funzione discontinua:</strong> $f(x) = \\begin{cases} x & x \\in [0,1) \\\\ 0 & x=1 \\end{cases}$ è discontinua in $1$, l'estremo superiore $1$ non viene raggiunto.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">OSSERVAZIONE</div>
  <div class="box-title">Differenza tra estremo superiore e massimo</div>
  <p>Il teorema dice che il massimo viene <em>raggiunto</em>: esiste un punto $x_M \\in [a,b]$ in cui $f(x_M)$ è il valore massimo. Non è sufficiente che il valore massimo esista come limite: deve essere assunto da qualche $x$ nel dominio.</p>
  <p>Questo è il motivo per cui "chiuso e limitato" è fondamentale: senza di esso la funzione potrebbe avvicinarsi indefinitamente a un valore senza raggiungerlo.</p>
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Weierstrass</span><span class="vfscore" id="vfs05">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="È il teorema di Weierstrass: f continua su [a,b] chiuso e limitato → raggiunge massimo e minimo assoluti.">
      <div class="vq-text">1. Una funzione continua su $[a,b]$ raggiunge sempre il suo massimo e minimo assoluti.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: f(x)=1/x su (0,1) è continua ma non limitata. Serve l'intervallo chiuso [a,b].">
      <div class="vq-text">2. $f(x) = 1/x$ è limitata su $(0,1)$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="f(x)=x² è continua su [-1,1] (chiuso e limitato): per Weierstrass raggiunge massimo e minimo. Minimo: f(0)=0, massimo: f(-1)=f(1)=1.">
      <div class="vq-text">3. $f(x) = x^2$ su $[-1,1]$ raggiunge massimo e minimo per il teorema di Weierstrass.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: serve sia che l'intervallo sia chiuso E limitato. Su [0,+∞) f(x)=x è continua ma non limitata superiormente.">
      <div class="vq-text">4. Il teorema di Weierstrass vale per qualsiasi intervallo chiuso, anche $[0,+\\infty)$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
  </div>
  <div class="vf-foot"><button class="vf-reset" onclick="resetVF(this)">Ricomincia</button><span class="vf-info" id="vfi05"></span></div>
</div>`
    },

    // ── §06 ──────────────────────────────────────────────────────────
    {
      id:       's06',
      secNum:   '§06',
      navLabel: '§06 Valori intermedi',
      heading:  'Teorema dei valori intermedi',
      html: `
<div class="fade">
<div class="box thm">
  <div class="box-label">TEOREMA</div>
  <div class="box-title">Teorema dei valori intermedi</div>
  <p>Sia $f : [a,b] \\to \\mathbb{R}$ continua. Per ogni valore $k$ compreso tra $f(a)$ e $f(b)$:</p>
  $$\\min(f(a), f(b)) \\leq k \\leq \\max(f(a), f(b))$$
  <p>esiste almeno un punto $c \\in [a,b]$ tale che $f(c) = k$.</p>
  <p>In parole: una funzione continua assume tutti i valori intermedi tra i valori agli estremi.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">COLLEGAMENTO CON GLI ALTRI TEOREMI</div>
  <div class="box-title">Come si incastrano</div>
  <p><strong>Teorema degli zeri</strong> è un caso particolare del teorema dei valori intermedi: prendi $k = 0$ e ipotizza $f(a) < 0 < f(b)$.</p>
  <p><strong>Weierstrass + valori intermedi:</strong> se $f$ è continua su $[a,b]$, per Weierstrass raggiunge un minimo $m$ e un massimo $M$. Per i valori intermedi, $f$ assume tutti i valori in $[m, M]$. Quindi l'immagine di $f$ è esattamente l'intervallo $[m, M]$.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">INTUIZIONE</div>
  <div class="box-title">Il grafico non può "saltare" un valore</div>
  <p>Immagina di tracciare il grafico di $f$ senza staccare la matita. Se parti da $f(a)$ e arrivi a $f(b)$, devi necessariamente passare per ogni quota intermedia.</p>
  <p>Una funzione con un salto (discontinuità) può invece "saltare" un valore: pensa alla funzione a gradino che vale $0$ per $x < 0$ e $1$ per $x \\geq 0$, che non assume mai il valore $0.5$.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Applicazione del teorema dei valori intermedi</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Sia $f(x) = x^2 - 2$ su $[0,2]$. Mostra che esiste $c \\in [0,2]$ con $f(c) = 0.5$.</p></div>
    <div class="ex-sol">
      <div class="sl">// f è un polinomio → continua su [0,2]</div>
      $$f(0) = -2, \\quad f(2) = 2$$
      <div class="sl">// f(0) = -2 < 0.5 < 2 = f(2): il valore 0.5 è compreso tra f(0) e f(2)</div>
      <div class="sl">// Per il teorema dei valori intermedi:</div>
      $$\\exists\\, c \\in [0,2] : f(c) = 0.5 \\checkmark$$
      <div class="sl">// Esplicitamente: c = √2.5 ≈ 1.58</div>
    </div>
  </div>
</div>

<div class="quiz fade">
  <div class="quiz-hdr"><span>QUIZ RIEPILOGO FINALE</span><span class="qscore" id="sc_fin">0/5</span></div>
  <div class="quiz-body">
    <div class="qq" data-ok="b" data-why="Continuità in x₀ significa lim_{x→x₀} f(x) = f(x₀): il limite esiste, f è definita in x₀, e i due valori coincidono.">
      <div class="qq-text">1. $f$ è continua in $x_0$ se e solo se:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr1"> $f$ è definita in $x_0$</label>
        <label class="opt"><input type="radio" name="qr1"> $\\displaystyle\\lim_{x\\to x_0} f(x) = f(x_0)$</label>
        <label class="opt"><input type="radio" name="qr1"> Il limite esiste in $x_0$</label>
        <label class="opt"><input type="radio" name="qr1"> $f(x_0) = 0$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="c" data-why="Discontinuità eliminabile: il limite esiste ma non coincide con il valore (o la funzione non è definita). A salto: i limiti laterali esistono ma sono diversi. Essenziale: almeno un limite laterale non esiste.">
      <div class="qq-text">2. Quali sono i tre tipi di discontinuità?</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr2"> Leggera, media, grave</label>
        <label class="opt"><input type="radio" name="qr2"> Puntuale, laterale, globale</label>
        <label class="opt"><input type="radio" name="qr2"> Eliminabile, a salto, essenziale</label>
        <label class="opt"><input type="radio" name="qr2"> Destra, sinistra, bilaterale</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="a" data-why="Weierstrass: f continua su [a,b] chiuso e limitato → limitata e raggiunge massimo e minimo. Senza 'chiuso' o senza 'limitato' il teorema può fallire.">
      <div class="qq-text">3. Il teorema di Weierstrass richiede che l'intervallo sia:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr3"> Chiuso e limitato</label>
        <label class="opt"><input type="radio" name="qr3"> Solo chiuso</label>
        <label class="opt"><input type="radio" name="qr3"> Solo limitato</label>
        <label class="opt"><input type="radio" name="qr3"> Aperto e limitato</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="d" data-why="Il teorema degli zeri è il caso k=0 del teorema dei valori intermedi: f(a)<0<f(b) e si cerca c con f(c)=0.">
      <div class="qq-text">4. Il teorema degli zeri è un caso particolare di:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr4"> Teorema di Weierstrass</label>
        <label class="opt"><input type="radio" name="qr4"> Permanenza del segno</label>
        <label class="opt"><input type="radio" name="qr4"> Caratterizzazione sequenziale</label>
        <label class="opt"><input type="radio" name="qr4"> Teorema dei valori intermedi</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="b" data-why="f continua su [a,b]: per Weierstrass raggiunge minimo m e massimo M; per i valori intermedi assume tutti i valori in [m,M]. L'immagine è esattamente [m,M].">
      <div class="qq-text">5. Se $f$ è continua su $[a,b]$ con minimo $m$ e massimo $M$, l'immagine di $f$ è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr5"> Un insieme finito di punti</label>
        <label class="opt"><input type="radio" name="qr5"> L'intervallo $[m, M]$</label>
        <label class="opt"><input type="radio" name="qr5"> L'intervallo $(m, M)$</label>
        <label class="opt"><input type="radio" name="qr5"> Dipende dalla funzione</label>
      </div><div class="qfb"></div>
    </div>
  </div>
  <div class="quiz-foot"><button class="q-reset" onclick="resetQ(this)">Ricomincia</button><span class="q-info" id="info_fin"></span></div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — RIEPILOGO FINALE</span><span class="vfscore" id="vfs06">0/5</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="È la caratterizzazione sequenziale della continuità, equivalente alla definizione epsilon-delta.">
      <div class="vq-text">1. $f$ continua in $x_0$ $\\iff$ per ogni $x_n \\to x_0$ si ha $f(x_n) \\to f(x_0)$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: il teorema degli zeri garantisce almeno uno zero, non uno solo. Possono essercene molti.">
      <div class="vq-text">2. Il teorema degli zeri garantisce l'esistenza di esattamente uno zero.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Weierstrass + valori intermedi: f raggiunge m e M e assume tutti i valori intermedi → immagine = [m,M].">
      <div class="vq-text">3. L'immagine di una funzione continua su $[a,b]$ è un intervallo chiuso $[m,M]$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: serve f(a)·f(b)<0 (segni opposti). Se f(a)=f(b)=2 il teorema non si applica (ma potrebbero comunque esserci zeri).">
      <div class="vq-text">4. Se $f$ è continua su $[a,b]$, il teorema degli zeri garantisce sempre l'esistenza di uno zero.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Permanenza del segno: continuità + f(x₀)>0 → f>0 in un intorno di x₀. La continuità impedisce salti istantanei di segno.">
      <div class="vq-text">5. Una funzione continua non può passare da positiva a negativa senza annullarsi.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
  </div>
  <div class="vf-foot"><button class="vf-reset" onclick="resetVF(this)">Ricomincia</button><span class="vf-info" id="vfi06"></span></div>
</div>`
    }

  ],

  disclaimer: `
<div class="fade" style="margin-top:4rem;padding:1.2rem 1.4rem;border:2px solid #aaa;background:#f9f9f6;font-size:.82rem;color:var(--ink-soft);line-height:1.7;">
  <div style="font-family:'Fira Code',monospace;font-size:.63rem;font-weight:600;letter-spacing:.12em;margin-bottom:.4rem;color:#aaa;">DISCLAIMER</div>
  <p>Questo materiale è stato elaborato e distribuito a titolo integrativo e gratuito dal docente, a supporto della didattica curricolare. Non costituisce adozione ufficiale né sostituisce i testi in adozione. Le formule, le definizioni e gli esempi sono di dominio pubblico scientifico. Il docente declina ogni responsabilità per eventuali imprecisioni. La riproduzione parziale è consentita per uso didattico non commerciale con citazione della fonte. © 2026 — uso interno scolastico.</p>
</div>`

};
