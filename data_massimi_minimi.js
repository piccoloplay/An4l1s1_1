// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_massimi_minimi.js',
    num:   'LEZIONE 07B',
    title: 'Massimi e minimi',
    sub:   'Massimi e minimi locali · Criterio della derivata seconda · Massimi e minimi assoluti · Ottimizzazione · Asintoti'
  },

  sections: [

    // ── §01 ──────────────────────────────────────────────────────────
    {
      id:       's01',
      secNum:   '§01',
      navLabel: '§01 Massimi e minimi locali',
      heading:  'Massimi e minimi locali',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Massimo e minimo locale</div>
  <p>$f$ ha un <strong>massimo locale</strong> in $x_0$ se esiste un intorno di $x_0$ tale che $f(x) \\leq f(x_0)$ per ogni $x$ nell'intorno.</p>
  <p>$f$ ha un <strong>minimo locale</strong> in $x_0$ se esiste un intorno di $x_0$ tale che $f(x) \\geq f(x_0)$ per ogni $x$ nell'intorno.</p>
  <p>Se le disuguaglianze sono strette si parla di massimo/minimo locale <strong>stretto</strong>.</p>
</div>
</div>

<div class="fade">
<div class="box thm">
  <div class="box-label">TEOREMA DI FERMAT</div>
  <div class="box-title">Condizione necessaria</div>
  <p>Se $f$ è derivabile in $x_0$ e $x_0$ è un massimo o minimo locale, allora:</p>
  $$f'(x_0) = 0$$
  <p><strong>Attenzione:</strong> il viceversa è falso. $f'(x_0)=0$ è condizione necessaria ma non sufficiente: $f(x)=x^3$ ha $f'(0)=0$ ma $x=0$ non è né massimo né minimo.</p>
</div>
</div>

<div class="fade">
<div class="box thm">
  <div class="box-label">CRITERIO</div>
  <div class="box-title">Criterio del segno della derivata prima</div>
  <p>Sia $f'(x_0) = 0$. Studiando il segno di $f'$ in un intorno di $x_0$:</p>
  <p>— $f'$ cambia da $+$ a $-$ in $x_0$ $\\\\implies$ $x_0$ è un <strong>massimo locale</strong></p>
  <p>— $f'$ cambia da $-$ a $+$ in $x_0$ $\\\\implies$ $x_0$ è un <strong>minimo locale</strong></p>
  <p>— $f'$ non cambia segno in $x_0$ $\\\\implies$ $x_0$ è un <strong>flesso a tangente orizzontale</strong></p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Trovare massimi e minimi locali</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova i massimi e minimi locali di $f(x) = x^3 - 6x^2 + 9x + 1$.</p></div>
    <div class="ex-sol">
      $$f'(x) = 3x^2 - 12x + 9 = 3(x^2-4x+3) = 3(x-1)(x-3)$$
      <div class="sl">// f'=0 per x=1 e x=3. Studio del segno:</div>
      <div class="sl">// x<1: f'>0, 1<x<3: f'<0, x>3: f'>0</div>
      <div class="sl">// x=1: f' cambia da + a - → massimo locale, f(1)=5</div>
      <div class="sl">// x=3: f' cambia da - a + → minimo locale, f(3)=1</div>
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Massimi e minimi locali</span><span class="vfscore" id="vfs01">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="F" data-why="Falso: f'(x₀)=0 è condizione necessaria ma non sufficiente. f(x)=x³ ha f'(0)=0 ma x=0 è un flesso, non un estremo.">
      <div class="vq-text">1. Se $f'(x_0)=0$ allora $x_0$ è un massimo o minimo locale.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Teorema di Fermat: se f è derivabile in x₀ e x₀ è un estremo locale, allora f'(x₀)=0.">
      <div class="vq-text">2. Se $x_0$ è un massimo locale e $f$ è derivabile in $x_0$, allora $f'(x_0)=0$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="f'>0 prima e f'<0 dopo x₀: la funzione cresce fino a x₀ e poi decresce → massimo locale.">
      <div class="vq-text">3. Se $f'$ cambia segno da $+$ a $-$ in $x_0$, allora $x_0$ è un massimo locale.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: se f non è derivabile in x₀ (es. f(x)=|x| in x=0) può comunque avere un estremo locale. Fermat si applica solo se f è derivabile.">
      <div class="vq-text">4. Un massimo locale può esistere solo in un punto dove $f'=0$.</div>
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
      navLabel: '§02 Criterio della derivata seconda',
      heading:  'Criterio della derivata seconda',
      html: `
<div class="fade">
<div class="box thm">
  <div class="box-label">TEOREMA</div>
  <div class="box-title">Criterio della derivata seconda</div>
  <p>Sia $f'(x_0) = 0$ e $f$ due volte derivabile in $x_0$. Allora:</p>
  <p>— $f''(x_0) > 0$ $\\\\implies$ $x_0$ è un <strong>minimo locale</strong> (grafico convesso, "sorride" $\\cup$)</p>
  <p>— $f''(x_0) < 0$ $\\\\implies$ $x_0$ è un <strong>massimo locale</strong> (grafico concavo, "piange" $\\cap$)</p>
  <p>— $f''(x_0) = 0$ $\\\\implies$ il criterio <strong>non decide</strong>: serve analisi ulteriore</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">CASO $f''(x_0)=0$</div>
  <div class="box-title">Come procedere</div>
  <p>Quando il criterio della derivata seconda non decide, si torna al criterio del segno di $f'$:</p>
  <p>— $f(x)=x^4$: $f'(0)=0$, $f''(0)=0$. Ma $f'(x)=4x^3$ cambia segno da $-$ a $+$ in $x=0$ → minimo.</p>
  <p>— $f(x)=x^3$: $f'(0)=0$, $f''(0)=0$. $f'(x)=3x^2 \\geq 0$ non cambia segno → flesso.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Classificare con la derivata seconda</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Classifica i punti stazionari di $f(x) = x^4 - 4x^3$.</p></div>
    <div class="ex-sol">
      $$f'(x) = 4x^3 - 12x^2 = 4x^2(x-3) = 0 \\\\implies x=0,\\ x=3$$
      $$f''(x) = 12x^2 - 24x$$
      $$f''(0) = 0 \\\\implies \\text{criterio non decide}$$
      <div class="sl">// Segno di f'=4x²(x-3): x²≥0 sempre, segno dipende da (x-3)</div>
      <div class="sl">// x<3: f'≤0, x>3: f'>0. In x=0 f' non cambia segno → flesso</div>
      $$f''(3) = 12\\cdot 9 - 72 = 36 > 0 \\\\implies x=3 \\text{ minimo locale},\\ f(3)=-27$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Criterio della derivata seconda</span><span class="vfscore" id="vfs02">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="f'(x₀)=0 e f''(x₀)>0: punto stazionario con concavità verso l'alto → minimo locale.">
      <div class="vq-text">1. Se $f'(x_0)=0$ e $f''(x_0)>0$, allora $x_0$ è un minimo locale.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: f''(x₀)=0 è inconclusivo. Può essere un massimo, minimo o flesso. Serve analisi del segno di f'.">
      <div class="vq-text">2. Se $f'(x_0)=0$ e $f''(x_0)=0$ allora $x_0$ è un flesso.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="f''(x₀)<0 e f'(x₀)=0: concavità verso il basso → il punto stazionario è un massimo locale.">
      <div class="vq-text">3. Se $f'(x_0)=0$ e $f''(x_0)<0$, allora $x_0$ è un massimo locale.</div>
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
      navLabel: '§03 Massimi e minimi assoluti',
      heading:  'Massimi e minimi assoluti',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Massimo e minimo assoluto</div>
  <p>$M = f(x_M)$ è il <strong>massimo assoluto</strong> di $f$ su $A$ se $f(x) \\leq M$ per ogni $x \\in A$.</p>
  <p>$m = f(x_m)$ è il <strong>minimo assoluto</strong> di $f$ su $A$ se $f(x) \\geq m$ per ogni $x \\in A$.</p>
  <p>Per il <strong>teorema di Weierstrass</strong>: se $f$ è continua su $[a,b]$ (chiuso e limitato), allora il massimo e il minimo assoluti esistono e vengono raggiunti.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">METODO</div>
  <div class="box-title">Come trovare max e min assoluti su $[a,b]$</div>
  <p>1. Trova tutti i punti stazionari interni: risolvi $f'(x)=0$ in $(a,b)$.</p>
  <p>2. Valuta $f$ in tutti i punti stazionari e negli estremi $a$ e $b$.</p>
  <p>3. Il massimo assoluto è il valore più grande, il minimo assoluto è il più piccolo.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Massimo e minimo assoluti su $[0,4]$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova massimo e minimo assoluti di $f(x) = x^3 - 6x^2 + 9x + 1$ su $[0,4]$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Punti stazionari interni: f'(x)=3(x-1)(x-3)=0 → x=1,3 ∈ (0,4)</div>
      <div class="sl">// Valuta f nei punti critici e agli estremi:</div>
      <div class="sl">// f(0)=1, f(1)=5, f(3)=1, f(4)=5</div>
      $$\\text{Massimo assoluto: } 5 \\text{ (raggiunto in } x=1 \\text{ e } x=4)$$
      $$\\text{Minimo assoluto: } 1 \\text{ (raggiunto in } x=0 \\text{ e } x=3)$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Massimi e minimi assoluti</span><span class="vfscore" id="vfs03">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Per Weierstrass: f continua su [a,b] chiuso e limitato → raggiunge massimo e minimo assoluti.">
      <div class="vq-text">1. Una funzione continua su $[a,b]$ raggiunge sempre il suo massimo e minimo assoluti.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Il massimo assoluto su [a,b] può essere raggiunto in un punto stazionario interno o in uno degli estremi a, b.">
      <div class="vq-text">2. Il massimo assoluto su $[a,b]$ può trovarsi in un estremo dell'intervallo.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: un massimo locale non è necessariamente il massimo assoluto. Il massimo assoluto è il più grande tra tutti i valori di f su A.">
      <div class="vq-text">3. Ogni massimo locale è anche un massimo assoluto.</div>
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
      navLabel: '§04 Problemi di ottimizzazione',
      heading:  'Problemi di ottimizzazione',
      html: `
<div class="fade">
<div class="box prop">
  <div class="box-label">METODO</div>
  <div class="box-title">Come impostare un problema di ottimizzazione</div>
  <p>1. <strong>Identifica la quantità da ottimizzare</strong> (area, volume, costo, distanza…).</p>
  <p>2. <strong>Scrivi la funzione obiettivo</strong> $f$ in termini di una sola variabile, usando le relazioni del problema come vincoli.</p>
  <p>3. <strong>Determina il dominio</strong> ammissibile (spesso un intervallo chiuso).</p>
  <p>4. <strong>Ottimizza</strong> con il metodo dei punti stazionari + estremi.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 1 — Rettangolo di area massima</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Tra tutti i rettangoli con perimetro $P=20$, trova quello con area massima.</p></div>
    <div class="ex-sol">
      <div class="sl">// Lati: l e w=10-l. Area: A(l)=l(10-l)=10l-l²</div>
      $$A'(l) = 10-2l = 0 \\\\implies l=5$$
      $$A''(5) = -2 < 0 \\\\implies \\text{massimo}$$
      <div class="sl">// Il rettangolo ottimale è il quadrato 5×5, Area=25</div>
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 2 — Volume massimo di una scatola</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Da un foglio quadrato di lato $a=12$ cm si ritagliano quadratini di lato $x$ agli angoli e si piega per formare una scatola aperta. Trova $x$ che massimizza il volume.</p></div>
    <div class="ex-sol">
      <div class="sl">// Base: (12-2x)×(12-2x), altezza: x. Dominio: 0<x<6</div>
      $$V(x) = x(12-2x)^2 = x(144-48x+4x^2) = 144x-48x^2+4x^3$$
      $$V'(x) = 144-96x+12x^2 = 12(x^2-8x+12) = 12(x-2)(x-6)$$
      <div class="sl">// x=2 ∈ (0,6). V''(x)=24x-96 → V''(2)=48-96=-48<0 → massimo</div>
      $$x = 2 \\text{ cm},\\ V_{\\max} = 2\\cdot 8^2 = 128 \\text{ cm}^3$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 3 — Punto più vicino su una parabola</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova il punto della parabola $y=x^2$ più vicino al punto $P=(0,1)$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Distanza al quadrato dal punto (x,x²) a (0,1):</div>
      $$d^2(x) = x^2 + (x^2-1)^2 = x^2+x^4-2x^2+1 = x^4-x^2+1$$
      <div class="sl">// Minimizza d²: (d²)'=4x³-2x=2x(2x²-1)=0 → x=0 o x=±1/√2</div>
      <div class="sl">// (d²)''=12x²-2. In x=0: -2<0 → massimo locale. In x=±1/√2: 6-2=4>0 → minimi</div>
      $$\\text{Punti: } \\left(\\pm\\frac{1}{\\sqrt{2}},\\ \\frac{1}{2}\\right),\\ \\text{distanza} = \\sqrt{\\frac{3}{4}} = \\frac{\\sqrt{3}}{2}$$
    </div>
  </div>
</div>

<div class="quiz fade">
  <div class="quiz-hdr"><span>QUIZ RIEPILOGO FINALE</span><span class="qscore" id="sc_fin">0/5</span></div>
  <div class="quiz-body">
    <div class="qq" data-ok="b" data-why="Fermat: se f è derivabile in x₀ e x₀ è un estremo locale, allora f'(x₀)=0. La condizione è necessaria, non sufficiente.">
      <div class="qq-text">1. Il teorema di Fermat afferma che:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr1"> $f'(x_0)=0$ implica che $x_0$ è un estremo locale</label>
        <label class="opt"><input type="radio" name="qr1"> Se $x_0$ è un estremo locale e $f$ è derivabile, allora $f'(x_0)=0$</label>
        <label class="opt"><input type="radio" name="qr1"> $f'(x_0)=0$ se e solo se $x_0$ è un estremo locale</label>
        <label class="opt"><input type="radio" name="qr1"> Ogni funzione ha almeno un estremo locale</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="c" data-why="f'(x₀)=0 e f''(x₀)>0: concavità verso l'alto → minimo locale. f''(x₀)<0 → massimo. f''(x₀)=0 → inconclusivo.">
      <div class="qq-text">2. Se $f'(x_0)=0$ e $f''(x_0)>0$, allora $x_0$ è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr2"> Un massimo locale</label>
        <label class="opt"><input type="radio" name="qr2"> Un flesso</label>
        <label class="opt"><input type="radio" name="qr2"> Un minimo locale</label>
        <label class="opt"><input type="radio" name="qr2"> Non si può concludere nulla</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="d" data-why="Su [a,b]: valuta f nei punti stazionari interni e negli estremi a,b. Il massimo assoluto è il valore più grande tra tutti.">
      <div class="qq-text">3. Per trovare il massimo assoluto di $f$ su $[a,b]$ si deve:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr3"> Trovare solo i punti con $f'=0$</label>
        <label class="opt"><input type="radio" name="qr3"> Valutare $f$ solo agli estremi</label>
        <label class="opt"><input type="radio" name="qr3"> Trovare solo i massimi locali</label>
        <label class="opt"><input type="radio" name="qr3"> Valutare $f$ nei punti stazionari interni e negli estremi $a$, $b$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="a" data-why="A(l)=l(10-l): A'=10-2l=0 → l=5. Il rettangolo di perimetro fisso con area massima è il quadrato.">
      <div class="qq-text">4. Il rettangolo di perimetro $20$ con area massima ha lati:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr4"> $5 \\times 5$</label>
        <label class="opt"><input type="radio" name="qr4"> $4 \\times 6$</label>
        <label class="opt"><input type="radio" name="qr4"> $3 \\times 7$</label>
        <label class="opt"><input type="radio" name="qr4"> $2 \\times 8$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="b" data-why="f'(x)=4x²(x-3). x²≥0 sempre, quindi il segno dipende da (x-3). Per x<3 (escluso x=0) f'≤0, per x>3 f'>0. In x=0 f' non cambia segno → flesso. In x=3: da - a + → minimo.">
      <div class="qq-text">5. Per $f(x)=x^4-4x^3$, il punto $x=0$ è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr5"> Un minimo locale</label>
        <label class="opt"><input type="radio" name="qr5"> Un flesso a tangente orizzontale</label>
        <label class="opt"><input type="radio" name="qr5"> Un massimo locale</label>
        <label class="opt"><input type="radio" name="qr5"> Non è un punto stazionario</label>
      </div><div class="qfb"></div>
    </div>
  </div>
  <div class="quiz-foot"><button class="q-reset" onclick="resetQ(this)">Ricomincia</button><span class="q-info" id="info_fin"></span></div>
</div>`
    },

    // ── §05 ──────────────────────────────────────────────────────────
    {
      id:       's05',
      secNum:   '§05',
      navLabel: '§05 Asintoti',
      heading:  'Asintoti',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Tipi di asintoto</div>
  <p><strong>Asintoto verticale</strong> in $x = a$: se almeno uno dei limiti laterali è infinito:</p>
  $$\\lim_{x\\to a^+} f(x) = \\pm\\infty \\quad \\text{oppure} \\quad \\lim_{x\\to a^-} f(x) = \\pm\\infty$$
  <p>Si cercano nei punti esclusi dal dominio (zeri del denominatore, argomenti nulli di logaritmi).</p>
  <p><strong>Asintoto orizzontale</strong> $y = L$: se $\\lim_{x\\to+\\infty} f(x) = L$ oppure $\\lim_{x\\to-\\infty} f(x) = L$, con $L$ finito.</p>
  <p><strong>Asintoto obliquo</strong> $y = mx+q$ (con $m\\neq 0$): se</p>
  $$m = \\lim_{x\\to\\pm\\infty}\\frac{f(x)}{x} \\in \\mathbb{R}\\setminus\\{0\\}, \\qquad q = \\lim_{x\\to\\pm\\infty}[f(x)-mx] \\in \\mathbb{R}$$
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">OSSERVAZIONE</div>
  <div class="box-title">Asintoto orizzontale vs obliquo</div>
  <p>Se $\\lim_{x\\to\\pm\\infty} f(x) = L$ finito, allora $f$ ha asintoto <strong>orizzontale</strong> $y=L$ e non può avere asintoto obliquo in quella direzione.</p>
  <p>L'asintoto obliquo esiste solo quando $f(x)$ cresce come una retta (né rimane limitata né diverge "più velocemente" di $x$).</p>
  <p>Le funzioni razionali $p(x)/q(x)$ hanno asintoto obliquo quando $\\deg p = \\deg q + 1$.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 1 — Asintoti di una razionale fratta</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova tutti gli asintoti di $f(x) = \\dfrac{2x^2+1}{x-1}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Asintoto verticale: x=1 (denominatore nullo, numeratore≠0)</div>
      $$\\lim_{x\\to 1^+}\\frac{2x^2+1}{x-1} = +\\infty, \\quad \\lim_{x\\to 1^-}\\frac{2x^2+1}{x-1} = -\\infty$$
      <div class="sl">// Asintoto orizzontale: grado num > grado den → nessuno</div>
      <div class="sl">// Asintoto obliquo: deg(num)=deg(den)+1 → esiste</div>
      $$m = \\lim_{x\\to\\infty}\\frac{2x^2+1}{x(x-1)} = \\lim_{x\\to\\infty}\\frac{2x^2+1}{x^2-x} = 2$$
      $$q = \\lim_{x\\to\\infty}\\left[\\frac{2x^2+1}{x-1}-2x\\right] = \\lim_{x\\to\\infty}\\frac{2x^2+1-2x(x-1)}{x-1} = \\lim_{x\\to\\infty}\\frac{2x+1}{x-1} = 2$$
      $$\\text{Asintoto obliquo: } y = 2x+2$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 2 — Asintoti con logaritmo</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova gli asintoti di $f(x) = \\ln\\left(\\dfrac{x}{x+1}\\right)$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Dominio: x/(x+1)>0 → x<-1 oppure x>0</div>
      <div class="sl">// Asintoti verticali: estremi del dominio x=0 e x=-1</div>
      $$\\lim_{x\\to 0^+}\\ln\\frac{x}{x+1} = \\ln 0 = -\\infty \\implies x=0 \\text{ asintoto verticale}$$
      $$\\lim_{x\\to -1^-}\\ln\\frac{x}{x+1}: \\frac{x}{x+1}\\to\\frac{-1}{0^-}=+\\infty \\implies \\ln\\to+\\infty \\implies x=-1 \\text{ asintoto verticale}$$
      <div class="sl">// Asintoto orizzontale:</div>
      $$\\lim_{x\\to+\\infty}\\ln\\frac{x}{x+1} = \\ln 1 = 0 \\implies y=0 \\text{ asintoto orizzontale}$$
      $$\\lim_{x\\to-\\infty}\\ln\\frac{x}{x+1} = \\ln 1 = 0 \\implies y=0 \\text{ anche a sinistra}$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Asintoti</span><span class="vfscore" id="vfs05">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Se il limite è finito L per x→±∞, il grafico si avvicina alla retta orizzontale y=L: asintoto orizzontale.">
      <div class="vq-text">1. Se $\\lim_{x\\to+\\infty} f(x) = 3$, allora $y=3$ è un asintoto orizzontale.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: se il limite è finito (asintoto orizzontale) non può esserci asintoto obliquo nella stessa direzione. L'obliquo richiede m≠0.">
      <div class="vq-text">2. Una funzione con asintoto orizzontale può avere anche un asintoto obliquo nella stessa direzione.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Le funzioni razionali con deg(num)=deg(den)+1 hanno sempre un asintoto obliquo (la divisione polinomiale dà una retta + resto).">
      <div class="vq-text">3. Se $f(x)=p(x)/q(x)$ con $\\deg p = \\deg q + 1$, allora $f$ ha un asintoto obliquo.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Gli asintoti verticali si cercano dove il denominatore si annulla (e il numeratore no), o dove l'argomento di log tende a 0.">
      <div class="vq-text">4. Gli asintoti verticali si trovano nei punti esclusi dal dominio dove il limite è infinito.</div>
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
  <p>Questo materiale è stato elaborato e distribuito a titolo integrativo e gratuito dal docente, a supporto della didattica curricolare. Non costituisce adozione ufficiale né sostituisce i testi in adozione. Le formule, le definizioni e gli esempi sono di dominio pubblico scientifico. Il docente declina ogni responsabilità per eventuali imprecisioni. La riproduzione parziale è consentita per uso didattico non commerciale con citazione della fonte. © 2026 — uso interno scolastico.</p>
</div>`

};
