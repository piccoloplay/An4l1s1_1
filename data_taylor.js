// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_taylor.js',
    num:   'LEZIONE 07A',
    title: 'Formula di Taylor',
    sub:   'Polinomio di Taylor · Sviluppi notevoli · Tecniche di sostituzione · Limiti con Taylor · Curiosità: Taylor nelle animazioni'
  },

  sections: [

    // ── §01 ──────────────────────────────────────────────────────────
    {
      id:       's01',
      secNum:   '§01',
      navLabel: '§01 Polinomio di Taylor',
      heading:  'Polinomio di Taylor e resto di Peano',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">IDEA</div>
  <div class="box-title">Approssimare con un polinomio</div>
  <p>L'approssimazione lineare $f(x) \\approx f(x_0) + f'(x_0)(x-x_0)$ è precisa vicino a $x_0$ ma peggiora allontanandosi. La formula di Taylor generalizza questa idea usando derivate di ordine superiore per ottenere un'approssimazione polinomiale sempre più precisa.</p>
</div>
</div>

<div class="fade">
<div class="box thm">
  <div class="box-label">FORMULA</div>
  <div class="box-title">Polinomio di Taylor di ordine $n$ centrato in $x_0$</div>
  <p>Se $f$ è $n$ volte derivabile in $x_0$:</p>
  $$T_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k = f(x_0) + f'(x_0)(x-x_0) + \\frac{f''(x_0)}{2!}(x-x_0)^2 + \\cdots + \\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n$$
</div>
</div>

<div class="fade">
<div class="box thm">
  <div class="box-label">RESTO DI PEANO</div>
  <div class="box-title">Quanto è precisa l'approssimazione?</div>
  <p>Il <strong>resto di Peano</strong> quantifica l'errore:</p>
  <div class="sl">// f(x) = T_n(x) + o((x-x₀)^n) per x → x₀</div>
  <p>Il simbolo $o((x-x_0)^n)$ indica un termine che, diviso per $(x-x_0)^n$, tende a $0$. In parole: l'errore è trascurabile rispetto a $(x-x_0)^n$ quando $x$ è vicino a $x_0$.</p>
  <p>Più grande è $n$, più precisa è l'approssimazione vicino a $x_0$.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">CASO $x_0 = 0$</div>
  <div class="box-title">Serie di Maclaurin</div>
  <p>Quando il centro è $x_0 = 0$ il polinomio si chiama <strong>polinomio di Maclaurin</strong>:</p>
  $$T_n(x) = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 + \\cdots + \\frac{f^{(n)}(0)}{n!}x^n$$
  <p>È il caso più usato perché i calcoli sono più semplici.</p>
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Polinomio di Taylor</span><span class="vfscore" id="vfs01">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Il coefficiente di (x-x₀)^k nel polinomio di Taylor è f^(k)(x₀)/k!.">
      <div class="vq-text">1. Il coefficiente di $(x-x_0)^k$ nel polinomio di Taylor è $\\dfrac{f^{(k)}(x_0)}{k!}$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: il resto di Peano dice che l'errore è o((x-x₀)^n), cioè trascurabile rispetto a (x-x₀)^n. Non è esattamente zero (a meno che f sia un polinomio di grado ≤n).">
      <div class="vq-text">2. Il polinomio di Taylor di ordine $n$ è uguale a $f(x)$ per ogni $x$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="La serie di Maclaurin è il polinomio di Taylor centrato in x₀=0.">
      <div class="vq-text">3. Il polinomio di Maclaurin è il polinomio di Taylor centrato in $x_0 = 0$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Aumentando n si aggiungono termini che correggono l'errore, rendendo l'approssimazione sempre più precisa vicino a x₀.">
      <div class="vq-text">4. Aumentando l'ordine $n$, il polinomio di Taylor approssima meglio $f$ vicino a $x_0$.</div>
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
      navLabel: '§02 Sviluppi notevoli',
      heading:  'Sviluppi notevoli di Maclaurin',
      html: `
<div class="fade">
<div class="box prop">
  <div class="box-label">TABELLA</div>
  <div class="box-title">Sviluppi notevoli centrati in $x_0=0$</div>
  $$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\frac{x^4}{4!} + \\cdots + \\frac{x^n}{n!} + o(x^n)$$
  $$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} + \\cdots + (-1)^n\\frac{x^{2n+1}}{(2n+1)!} + o(x^{2n+2})$$
  $$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} + \\cdots + (-1)^n\\frac{x^{2n}}{(2n)!} + o(x^{2n+1})$$
  $$\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} + \\cdots + (-1)^{n+1}\\frac{x^n}{n} + o(x^n)$$
  $$(1+x)^\\alpha = 1 + \\alpha x + \\frac{\\alpha(\\alpha-1)}{2!}x^2 + \\frac{\\alpha(\\alpha-1)(\\alpha-2)}{3!}x^3 + \\cdots + o(x^n)$$
  $$\\arctan x = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\frac{x^7}{7} + \\cdots + o(x^{2n+2})$$
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">OSSERVAZIONE</div>
  <div class="box-title">Struttura degli sviluppi</div>
  <p>$e^x$: tutti i termini, con denominatori $n!$.</p>
  <p>$\\sin x$: solo potenze <strong>dispari</strong>, segni alternati.</p>
  <p>$\\cos x$: solo potenze <strong>pari</strong>, segni alternati.</p>
  <p>$\\ln(1+x)$: potenze con denominatori interi (non fattoriali), segni alternati.</p>
  <p>$(1+x)^\\alpha$: si riduce al binomio di Newton per $\\alpha \\in \\mathbb{N}$.</p>
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Sviluppi notevoli</span><span class="vfscore" id="vfs02">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Sviluppo di sin x contiene solo potenze dispari: x, x³/6, x⁵/120, ...">
      <div class="vq-text">1. Lo sviluppo di $\\sin x$ contiene solo potenze dispari di $x$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: lo sviluppo di e^x ha tutti i segni positivi: 1+x+x²/2!+x³/3!+... Non ci sono segni alternati.">
      <div class="vq-text">2. Lo sviluppo di $e^x$ ha segni alternati.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="cos x = 1 - x²/2 + x⁴/24 - ... Il termine in x² è -1/2.">
      <div class="vq-text">3. Il coefficiente di $x^2$ nello sviluppo di $\\cos x$ è $-\\dfrac{1}{2}$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="ln(1+x) = x - x²/2 + x³/3 - ... I denominatori sono 1,2,3,... non fattoriali.">
      <div class="vq-text">4. Nello sviluppo di $\\ln(1+x)$ i denominatori sono interi, non fattoriali.</div>
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
      navLabel: '§03 Tecniche di sviluppo',
      heading:  'Tecniche: sostituzione, composizione, prodotto',
      html: `
<div class="fade">
<div class="box prop">
  <div class="box-label">TECNICA 1</div>
  <div class="box-title">Sostituzione</div>
  <p>Se si conosce lo sviluppo di $f(t)$ e si vuole quello di $f(g(x))$, si sostituisce $t = g(x)$ e si tronca all'ordine desiderato.</p>
  <p><strong>Regola pratica:</strong> sostituisci $t=g(x)$ nello sviluppo di $f$, espandi e raccogli le potenze di $x$, poi scarta i termini di ordine superiore a quello richiesto.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 1 — Sostituzione: $\\sin(2x)$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Scrivi il polinomio di Taylor di ordine 5 di $f(x) = \\sin(2x)$ centrato in $0$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Poni t=2x nello sviluppo di sin t:</div>
      $$\\sin t = t - \\frac{t^3}{6} + \\frac{t^5}{120} + o(t^5)$$
      <div class="sl">// Sostituisci t=2x:</div>
      $$\\sin(2x) = 2x - \\frac{(2x)^3}{6} + \\frac{(2x)^5}{120} + o(x^5)$$
      $$= 2x - \\frac{8x^3}{6} + \\frac{32x^5}{120} + o(x^5)$$
      $$= 2x - \\frac{4x^3}{3} + \\frac{4x^5}{15} + o(x^5)$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 2 — Sostituzione: $e^{x^2}$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Scrivi il polinomio di Taylor di ordine 4 di $f(x) = e^{x^2}$ centrato in $0$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Poni t=x² nello sviluppo di e^t all'ordine 2 (perché t²=x⁴):</div>
      $$e^t = 1 + t + \\frac{t^2}{2} + o(t^2)$$
      $$e^{x^2} = 1 + x^2 + \\frac{x^4}{2} + o(x^4)$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 3 — Sostituzione: $\\cos(x^2)$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Scrivi il polinomio di Taylor di ordine 4 di $f(x) = \\cos(x^2)$ centrato in $0$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Poni t=x². Sviluppo di cos t all'ordine 2:</div>
      $$\\cos t = 1 - \\frac{t^2}{2} + o(t^2)$$
      <div class="sl">// Con t=x²: t²=x⁴</div>
      $$\\cos(x^2) = 1 - \\frac{x^4}{2} + o(x^4)$$
    </div>
  </div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">TECNICA 2</div>
  <div class="box-title">Prodotto di sviluppi</div>
  <p>Per sviluppare $f(x) \\cdot g(x)$: moltiplica i due polinomi di Taylor e scarta i termini di ordine superiore a quello richiesto.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 4 — Prodotto: $e^x \\sin x$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Scrivi il polinomio di Taylor di ordine 3 di $f(x) = e^x \\sin x$ centrato in $0$.</p></div>
    <div class="ex-sol">
      $$e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + o(x^3)$$
      $$\\sin x = x - \\frac{x^3}{6} + o(x^3)$$
      <div class="sl">// Moltiplica e scarta termini di ordine > 3:</div>
      $$e^x\\sin x = \\left(1+x+\\frac{x^2}{2}+\\frac{x^3}{6}\\right)\\left(x-\\frac{x^3}{6}\\right) + o(x^3)$$
      $$= x + x^2 + \\frac{x^3}{2} - \\frac{x^3}{6} + o(x^3) = x + x^2 + \\frac{x^3}{3} + o(x^3)$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Tecniche</span><span class="vfscore" id="vfs03">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Con t=2x: sin(2x)=2x-(2x)³/6+(2x)⁵/120+... = 2x-4x³/3+4x⁵/15+...">
      <div class="vq-text">1. $\\sin(2x) = 2x - \\dfrac{4x^3}{3} + \\dfrac{4x^5}{15} + o(x^5)$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Con t=x²: e^(x²) = 1+x²+x⁴/2+... Il termine x³ non compare (solo potenze pari).">
      <div class="vq-text">2. $e^{x^2} = 1 + x^2 + \\dfrac{x^4}{2} + o(x^4)$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: nel prodotto bisogna moltiplicare i termini e poi scartare quelli di ordine superiore a quello richiesto, non troncare prima di moltiplicare.">
      <div class="vq-text">3. Per sviluppare $e^x\\sin x$ all'ordine 3 si possono troncare $e^x$ e $\\sin x$ all'ordine 1 prima di moltiplicare.</div>
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
      navLabel: '§04 Limiti con Taylor',
      heading:  'Calcolo di limiti con Taylor',
      html: `
<div class="fade">
<div class="box prop">
  <div class="box-label">METODO</div>
  <div class="box-title">Perché Taylor semplifica i limiti</div>
  <p>Molti limiti in forma $0/0$ per $x\to 0$ si risolvono sostituendo numeratore e denominatore con i rispettivi sviluppi di Taylor, poi semplificando le potenze dominanti.</p>
  <p><strong>Regola pratica:</strong> sviluppa fino all'ordine necessario per far apparire il termine non nullo che determina il limite.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 5 — Limite classico $\\sin x / x$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to 0}\\frac{\\sin x}{x}$.</p></div>
    <div class="ex-sol">
      $$\\frac{\\sin x}{x} = \\frac{x - x^3/6 + o(x^3)}{x} = 1 - \\frac{x^2}{6} + o(x^2) \\to 1$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 6 — Confronto tra infinitesimi</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to 0}\\frac{e^x - 1 - \\sin x}{x^2}$.</p></div>
    <div class="ex-sol">
      $$e^x - 1 - \\sin x = \\left(1+x+\\frac{x^2}{2}+o(x^2)\\right) - 1 - \\left(x - \\frac{x^3}{6}+o(x^2)\\right)$$
      $$= \\frac{x^2}{2} + o(x^2)$$
      $$\\frac{e^x-1-\\sin x}{x^2} \\to \\frac{1}{2}$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 7 — Limite con sostituzione</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to 0}\\frac{\\sin(2x) - 2x}{x^3}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Usa lo sviluppo di sin(2x) trovato in ES 1:</div>
      $$\\sin(2x) - 2x = \\left(2x - \\frac{4x^3}{3} + o(x^3)\\right) - 2x = -\\frac{4x^3}{3} + o(x^3)$$
      $$\\frac{\\sin(2x)-2x}{x^3} \\to -\\frac{4}{3}$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 8 — Ordine superiore</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{x\\to 0}\\frac{\\cos x - 1 + x^2/2}{x^4}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Serve Taylor di cos x all'ordine 4:</div>
      $$\\cos x = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} + o(x^4)$$
      $$\\cos x - 1 + \\frac{x^2}{2} = \\frac{x^4}{24} + o(x^4)$$
      $$\\frac{\\cos x - 1 + x^2/2}{x^4} \\to \\frac{1}{24}$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Limiti con Taylor</span><span class="vfscore" id="vfs04">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="sin(x)/x = (x-x³/6+...)/x = 1-x²/6+... → 1 per x→0.">
      <div class="vq-text">1. $\\displaystyle\\lim_{x\\to 0}\\dfrac{\\sin x}{x} = 1$ si ricava dallo sviluppo di Taylor.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="sin(2x)-2x = -4x³/3+o(x³). Diviso x³: -4/3.">
      <div class="vq-text">2. $\\displaystyle\\lim_{x\\to 0}\\dfrac{\\sin(2x)-2x}{x^3} = -\\dfrac{4}{3}$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: se si sviluppa all'ordine sbagliato il termine dominante può cancellarsi e il limite risulta 0/0 ancora. Bisogna sviluppare abbastanza da far apparire il termine non nullo.">
      <div class="vq-text">3. Per calcolare un limite con Taylor è sempre sufficiente sviluppare al primo ordine.</div>
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
      navLabel: '§05 Taylor nelle animazioni',
      heading:  'Curiosità: Taylor nel keyframing e nelle animazioni',
      html: `
<div class="fade">
<div class="box prop">
  <div class="box-label">CONTESTO</div>
  <div class="box-title">Come funziona un'animazione digitale</div>
  <p>In un'animazione (film, videogioco, interfaccia grafica) ogni oggetto ha una posizione, rotazione o opacità che cambia nel tempo. Il computer conosce solo i valori in certi istanti chiave — i <strong>keyframe</strong> — e deve <em>interpolare</em> tutto il resto.</p>
  <p>Il problema è: data una quantità $f$ che vale $f_0$ al tempo $t=0$ e $f_1$ al tempo $t=1$, come calcolare $f(t)$ per $t \in (0,1)$ in modo che il movimento sembri naturale?</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">INTERPOLAZIONE LINEARE</div>
  <div class="box-title">La soluzione più semplice — e perché non basta</div>
  <p>La scelta più ovvia è l'interpolazione lineare (<strong>lerp</strong>):</p>
  $$f(t) = (1-t)f_0 + t f_1$$
  <p>Questo è esattamente il polinomio di Taylor di ordine 1! Ma il risultato è un movimento meccanico, senza accelerazione o decelerazione. Un oggetto reale non parte e si ferma di scatto.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">EASING FUNCTIONS</div>
  <div class="box-title">Polinomi di ordine superiore per movimenti naturali</div>
  <p>Per simulare l'inerzia, i motori grafici usano <strong>easing functions</strong> — funzioni polinomiali che approssimano il comportamento fisico reale. Le più comuni sono:</p>
  <p><strong>ease-in</strong> (accelerazione): $f(t) = t^2$ oppure $t^3$</p>
  <p><strong>ease-out</strong> (decelerazione): $f(t) = 1-(1-t)^2$</p>
  <p><strong>ease-in-out</strong> (entrambe): $f(t) = 3t^2 - 2t^3$ (polinomio di Hermite)</p>
  <p>Il polinomio $3t^2-2t^3$ soddisfa $f(0)=0$, $f(1)=1$, $f'(0)=0$, $f'(1)=0$: parte e finisce dolcemente, esattamente come Taylor garantisce che le derivate concordino.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">CURVE DI BÉZIER</div>
  <div class="box-title">Taylor e la grafica vettoriale</div>
  <p>Le <strong>curve di Bézier</strong> usate in Illustrator, Figma, After Effects e in tutti i font digitali sono polinomi parametrici. Una curva di Bézier cubica è:</p>
  $$\\mathbf{B}(t) = (1-t)^3\\mathbf{P}_0 + 3(1-t)^2 t\\,\\mathbf{P}_1 + 3(1-t)t^2\\,\\mathbf{P}_2 + t^3\\mathbf{P}_3$$
  <p>I coefficienti $(1-t)^3$, $3(1-t)^2t$, $3(1-t)t^2$, $t^3$ sono esattamente i <strong>polinomi di Bernstein</strong>, che formano una base dello spazio dei polinomi di grado 3 — la stessa struttura del polinomio di Taylor.</p>
  <p>Quando un animatore trascina un <em>handle</em> in After Effects, sta spostando il punto di controllo $\\mathbf{P}_1$ o $\\mathbf{P}_2$, modificando le derivate prime della curva — esattamente come Taylor usa le derivate per controllare la forma del polinomio.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">APPLICAZIONI PRATICHE</div>
  <div class="box-title">Dove Taylor appare senza che ce ne accorgiamo</div>
  <p><strong>CSS animations:</strong> la proprietà <code>transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1)</code> definisce una curva di Bézier cubica. Il browser calcola migliaia di frame al secondo interpolando con quella curva polinomiale.</p>
  <p><strong>Motori fisici nei videogiochi:</strong> l'integrazione numerica delle equazioni del moto usa metodi come Runge-Kutta, che sono essenzialmente Taylor applicato alle EDO.</p>
  <p><strong>Font rendering:</strong> ogni lettera in un font TrueType è definita da spline quadratiche (polinomi di grado 2). I font OpenType usano cubiche di Bézier.</p>
  <p><strong>Compressione video:</strong> i codec come H.264 approssimano blocchi di pixel con trasformate polinomiali (DCT — Discrete Cosine Transform), che è la versione discreta degli sviluppi di Taylor in coseno.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">IL PUNTO CHIAVE</div>
  <div class="box-title">Perché i polinomi sono ovunque</div>
  <p>I polinomi sono lo strumento ideale per l'interpolazione perché:</p>
  <p>1. Sono <strong>facili da calcolare</strong>: solo moltiplicazioni e somme.</p>
  <p>2. Sono <strong>controllabili</strong>: le derivate determinano la forma.</p>
  <p>3. Approssimano <strong>qualsiasi funzione liscia</strong> — questo è esattamente il teorema di Taylor.</p>
  <p>Ogni volta che un'animazione sembra naturale, o un font appare leggibile, o un videogioco gira fluidamente, c'è un polinomio — e dietro al polinomio c'è Taylor.</p>
</div>
</div>`
    }

  ],

  disclaimer: `
<div class="fade" style="margin-top:4rem;padding:1.2rem 1.4rem;border:2px solid #aaa;background:#f9f9f6;font-size:.82rem;color:var(--ink-soft);line-height:1.7;">
  <div style="font-family:'Fira Code',monospace;font-size:.63rem;font-weight:600;letter-spacing:.12em;margin-bottom:.4rem;color:#aaa;">DISCLAIMER</div>
  <p>Questo materiale è stato elaborato e distribuito a titolo integrativo e gratuito dal docente, a supporto della didattica curricolare. Non costituisce adozione ufficiale né sostituisce i testi in adozione. Le formule, le definizioni e gli esempi sono di dominio pubblico scientifico. Il docente declina ogni responsabilità per eventuali imprecisioni. La riproduzione parziale è consentita per uso didattico non commerciale con citazione della fonte. © 2026 — uso interno scolastico.</p>
</div>`

};
