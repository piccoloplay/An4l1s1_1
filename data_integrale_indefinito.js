// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_integrale_indefinito.js',
    num:   'LEZIONE 09',
    title: 'Integrale indefinito',
    sub:   'Primitiva · Integrali immediati · Sostituzione · Parti · Funzioni razionali fratte'
  },

  sections: [

    // ── §01 ──────────────────────────────────────────────────────────
    {
      id:       's01',
      secNum:   '§01',
      navLabel: '§01 Primitiva e integrale',
      heading:  'Primitiva e integrale indefinito',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Primitiva</div>
  <p>Sia $f : I \\to \\mathbb{R}$ definita su un intervallo $I$. Una funzione $F : I \\to \\mathbb{R}$ si dice <strong>primitiva</strong> di $f$ su $I$ se:</p>
  $$F'(x) = f(x) \\quad \\forall\\, x \\in I$$
  <p>Se $F$ è una primitiva di $f$, allora anche $F + c$ (con $c \\in \\mathbb{R}$ costante) è una primitiva di $f$. E sono tutte e sole le primitive di $f$ su $I$.</p>
</div>
</div>

<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Integrale indefinito</div>
  <p>L'<strong>integrale indefinito</strong> di $f$ è la famiglia di tutte le primitive di $f$:</p>
  $$\\int f(x)\\, dx = F(x) + c \\qquad (c \\in \\mathbb{R})$$
  <p>dove $F$ è una qualsiasi primitiva di $f$. La costante $c$ si chiama <strong>costante di integrazione</strong> e non va mai dimenticata.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">PROPRIETÀ</div>
  <div class="box-title">Linearità dell'integrale</div>
  $$\\int [\\alpha f(x) + \\beta g(x)]\\, dx = \\alpha\\int f(x)\\, dx + \\beta\\int g(x)\\, dx$$
  <p>L'integrale è lineare: si distribuisce sulla somma e le costanti escono fuori.</p>
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Primitiva e integrale</span><span class="vfscore" id="vfs01">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Se F'=f, allora (F+c)'=F'=f per ogni costante c. Quindi F+c è primitiva di f per ogni c∈R.">
      <div class="vq-text">1. Se $F$ è una primitiva di $f$, allora $F + 5$ è anch'essa una primitiva di $f$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: la costante di integrazione c è essenziale. Scrivere solo F(x) significa indicare una sola delle infinite primitive.">
      <div class="vq-text">2. Si può omettere la costante $c$ nell'integrale indefinito se si conosce la primitiva.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Per verificare un integrale basta derivare il risultato e controllare che si ottenga l'integrando.">
      <div class="vq-text">3. Per verificare un integrale indefinito si deriva il risultato ottenuto.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Linearità: ∫[αf+βg]dx = α∫f dx + β∫g dx. Si distribuisce sulla somma e le costanti escono.">
      <div class="vq-text">4. $\\int [f(x) + g(x)]\\, dx = \\int f(x)\\, dx + \\int g(x)\\, dx$.</div>
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
      navLabel: '§02 Integrali immediati',
      heading:  'Integrali immediati',
      html: `
<div class="fade">
<div class="box prop">
  <div class="box-label">TABELLA</div>
  <div class="box-title">Integrali fondamentali</div>
  <div class="tbl">
  <table>
    <thead><tr><th>$f(x)$</th><th>$\\int f(x)\\,dx$</th><th>Note</th></tr></thead>
    <tbody>
      <tr><td>$k$ (costante)</td><td>$kx + c$</td><td></td></tr>
      <tr><td>$x^n$</td><td>$\\dfrac{x^{n+1}}{n+1} + c$</td><td>$n \\neq -1$</td></tr>
      <tr><td>$\\dfrac{1}{x}$</td><td>$\\ln|x| + c$</td><td>$x \\neq 0$</td></tr>
      <tr><td>$e^x$</td><td>$e^x + c$</td><td></td></tr>
      <tr><td>$a^x$</td><td>$\\dfrac{a^x}{\\ln a} + c$</td><td>$a>0, a\\neq 1$</td></tr>
      <tr><td>$\\sin x$</td><td>$-\\cos x + c$</td><td></td></tr>
      <tr><td>$\\cos x$</td><td>$\\sin x + c$</td><td></td></tr>
      <tr><td>$\\dfrac{1}{\\cos^2 x}$</td><td>$\\tan x + c$</td><td></td></tr>
      <tr><td>$\\dfrac{1}{\\sqrt{1-x^2}}$</td><td>$\\arcsin x + c$</td><td>$|x|<1$</td></tr>
      <tr><td>$\\dfrac{1}{1+x^2}$</td><td>$\\arctan x + c$</td><td></td></tr>
    </tbody>
  </table>
  </div>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">INTEGRALI IMMEDIATI COMPOSTI</div>
  <div class="box-title">Regola della funzione interna</div>
  <p>Se $f$ è una funzione elementare e $g$ è una funzione derivabile, si ha:</p>
  $$\\int f(g(x))\\cdot g'(x)\\, dx = F(g(x)) + c$$
  <p>dove $F$ è la primitiva di $f$. In parole: se l'integrando è una funzione composta <em>moltiplicata per la derivata della funzione interna</em>, si integra direttamente.</p>
  <p>Esempi: $\\int 2x e^{x^2}dx = e^{x^2}+c$; $\\quad \\int \\dfrac{2x}{x^2+1}dx = \\ln(x^2+1)+c$.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 1 — Integrali immediati</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola: (a) $\\int (3x^2 - 2x + 1)\\,dx$, &nbsp; (b) $\\int \\dfrac{x^2+1}{x}\\,dx$.</p></div>
    <div class="ex-sol">
      <div class="sl">// (a) Linearità e regola x^n</div>
      $$\\int(3x^2-2x+1)\\,dx = x^3 - x^2 + x + c$$
      <div class="sl">// (b) Spezza la frazione</div>
      $$\\int\\frac{x^2+1}{x}\\,dx = \\int\\left(x + \\frac{1}{x}\\right)dx = \\frac{x^2}{2} + \\ln|x| + c$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Integrali immediati</span><span class="vfscore" id="vfs02">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="∫x^n dx = x^(n+1)/(n+1)+c per n≠-1. Con n=3: ∫x³dx = x⁴/4+c.">
      <div class="vq-text">1. $\\int x^3\\,dx = \\dfrac{x^4}{4} + c$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: ∫(1/x)dx = ln|x|+c, non ln(x)+c. Il valore assoluto è necessario perché ln è definito solo per x>0.">
      <div class="vq-text">2. $\\int \\dfrac{1}{x}\\,dx = \\ln x + c$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="∫e^x dx = e^x+c. La funzione e^x è uguale alla sua primitiva (a meno della costante).">
      <div class="vq-text">3. $\\int e^x\\,dx = e^x + c$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="2x è la derivata di x², quindi ∫2x·e^(x²)dx = e^(x²)+c per la regola della funzione composta.">
      <div class="vq-text">4. $\\int 2xe^{x^2}\\,dx = e^{x^2} + c$.</div>
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
      navLabel: '§03 Integrazione per sostituzione',
      heading:  'Integrazione per sostituzione',
      html: `
<div class="fade">
<div class="box thm">
  <div class="box-label">METODO</div>
  <div class="box-title">Cambio di variabile</div>
  <p>Si pone $t = g(x)$, quindi $dt = g'(x)\\,dx$. L'integrale diventa:</p>
  $$\\int f(g(x))\\cdot g'(x)\\,dx = \\int f(t)\\,dt = F(t) + c = F(g(x)) + c$$
  <p><strong>Procedura:</strong> (1) scegli la sostituzione $t=g(x)$; (2) calcola $dt = g'(x)dx$; (3) sostituisci tutto in termini di $t$; (4) integra in $t$; (5) torna alla variabile $x$.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 2 — Sostituzione semplice</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\int \\dfrac{x}{\\sqrt{x^2+1}}\\,dx$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Poni t = x²+1, dt = 2x dx → x dx = dt/2</div>
      $$\\int\\frac{x}{\\sqrt{x^2+1}}\\,dx = \\int\\frac{1}{\\sqrt{t}}\\cdot\\frac{dt}{2} = \\frac{1}{2}\\int t^{-1/2}\\,dt = \\frac{1}{2}\\cdot 2\\sqrt{t} + c = \\sqrt{x^2+1} + c$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 3 — Sostituzione trigonometrica</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\int \\sin^3 x\\cos x\\,dx$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Poni t = sin x, dt = cos x dx</div>
      $$\\int\\sin^3 x\\cos x\\,dx = \\int t^3\\,dt = \\frac{t^4}{4} + c = \\frac{\\sin^4 x}{4} + c$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 4 — Sostituzione con ln</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\int \\dfrac{\\ln x}{x}\\,dx$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Poni t = ln x, dt = dx/x</div>
      $$\\int\\frac{\\ln x}{x}\\,dx = \\int t\\,dt = \\frac{t^2}{2} + c = \\frac{(\\ln x)^2}{2} + c$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Sostituzione</span><span class="vfscore" id="vfs03">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Con t=x²+1, dt=2x dx. L'integrale diventa ∫(1/√t)(dt/2) = √t+c = √(x²+1)+c.">
      <div class="vq-text">1. $\\int \\dfrac{x}{\\sqrt{x^2+1}}\\,dx = \\sqrt{x^2+1} + c$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Con t=ln x, dt=dx/x: ∫(ln x/x)dx = ∫t dt = t²/2+c = (ln x)²/2+c.">
      <div class="vq-text">2. $\\int \\dfrac{\\ln x}{x}\\,dx = \\dfrac{(\\ln x)^2}{2} + c$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: dopo aver integrato in t bisogna tornare alla variabile originale x sostituendo t=g(x).">
      <div class="vq-text">3. Dopo la sostituzione $t = g(x)$ si può lasciare il risultato in termini di $t$.</div>
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
      navLabel: '§04 Integrazione per parti',
      heading:  'Integrazione per parti',
      html: `
<div class="fade">
<div class="box thm">
  <div class="box-label">FORMULA</div>
  <div class="box-title">Integrazione per parti</div>
  <p>Se $f$ e $g$ sono derivabili:</p>
  $$\\int f(x)g'(x)\\,dx = f(x)g(x) - \\int f'(x)g(x)\\,dx$$
  <p>Si sceglie come $f$ la funzione che "si semplifica" derivando (polinomi, logaritmi) e come $g'$ quella che "si semplifica" integrando (esponenziali, seno, coseno).</p>
  <p><strong>Regola pratica (LIATE):</strong> come $f$ si sceglie nell'ordine: <strong>L</strong>ogaritmi → <strong>I</strong>nverse trig → <strong>A</strong>lgebrici (polinomi) → <strong>T</strong>rig → <strong>E</strong>sponenziali.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 5 — Polinomio per esponenziale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\int xe^x\\,dx$.</p></div>
    <div class="ex-sol">
      <div class="sl">// f=x (si deriva: f'=1), g'=e^x (si integra: g=e^x)</div>
      $$\\int xe^x\\,dx = xe^x - \\int e^x\\,dx = xe^x - e^x + c = e^x(x-1) + c$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 6 — Logaritmo per polinomio</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\int x\\ln x\\,dx$.</p></div>
    <div class="ex-sol">
      <div class="sl">// f=ln x (si deriva: f'=1/x), g'=x (si integra: g=x²/2)</div>
      $$\\int x\\ln x\\,dx = \\frac{x^2}{2}\\ln x - \\int\\frac{x^2}{2}\\cdot\\frac{1}{x}\\,dx = \\frac{x^2}{2}\\ln x - \\frac{x^2}{4} + c$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 7 — Parti due volte</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\int x^2 e^x\\,dx$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Prima applicazione: f=x², g'=e^x</div>
      $$\\int x^2e^x\\,dx = x^2e^x - 2\\int xe^x\\,dx$$
      <div class="sl">// Seconda applicazione (vedi ES 5): ∫xe^x dx = e^x(x-1)+c</div>
      $$= x^2e^x - 2e^x(x-1) + c = e^x(x^2-2x+2) + c$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Integrazione per parti</span><span class="vfscore" id="vfs04">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="f=x, g'=e^x → g=e^x. ∫xe^x dx = xe^x - ∫e^x dx = xe^x-e^x+c = e^x(x-1)+c.">
      <div class="vq-text">1. $\\int xe^x\\,dx = e^x(x-1) + c$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Per ∫ln x dx si usa: f=ln x, g'=1 → g=x. Risultato: x ln x - x + c.">
      <div class="vq-text">2. $\\int \\ln x\\,dx = x\\ln x - x + c$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: il logaritmo va scelto come f (da derivare), non come g' (da integrare). La derivata di ln x è semplice; la sua primitiva è meno immediata.">
      <div class="vq-text">3. Nell'integrale $\\int x\\ln x\\,dx$ conviene scegliere $g' = \\ln x$.</div>
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
      navLabel: '§05 Funzioni razionali fratte',
      heading:  'Integrazione di funzioni razionali fratte',
      html: `
<div class="fade">
<div class="box prop">
  <div class="box-label">METODO</div>
  <div class="box-title">Frazioni parziali</div>
  <p>Per integrare $\\dfrac{p(x)}{q(x)}$ con $\\deg p < \\deg q$, si decompone in frazioni parziali in base alle radici di $q(x)$:</p>
  <p><strong>Radice semplice $x=a$:</strong> contribuisce con $\\dfrac{A}{x-a}$, che integra a $A\\ln|x-a|$.</p>
  <p><strong>Radice doppia $x=a$:</strong> contribuisce con $\\dfrac{A}{x-a}+\\dfrac{B}{(x-a)^2}$.</p>
  <p><strong>Fattore irriducibile $x^2+px+q$:</strong> contribuisce con $\\dfrac{Ax+B}{x^2+px+q}$.</p>
  <p>Se $\\deg p \\geq \\deg q$: prima si divide con la divisione tra polinomi.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 8 — Frazioni parziali con due radici</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\int \\dfrac{1}{x^2-1}\\,dx$.</p></div>
    <div class="ex-sol">
      <div class="sl">// x²-1 = (x-1)(x+1). Frazioni parziali:</div>
      $$\\frac{1}{x^2-1} = \\frac{A}{x-1}+\\frac{B}{x+1} \\implies A=\\frac{1}{2},\\; B=-\\frac{1}{2}$$
      $$\\int\\frac{1}{x^2-1}\\,dx = \\frac{1}{2}\\ln|x-1| - \\frac{1}{2}\\ln|x+1| + c = \\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + c$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 9 — Fattore irriducibile</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\int \\dfrac{x+1}{x^2+x+1}\\,dx$.</p></div>
    <div class="ex-sol">
      <div class="sl">// x²+x+1 è irriducibile (discriminante <0). Osserva che (x²+x+1)'=2x+1</div>
      $$\\frac{x+1}{x^2+x+1} = \\frac{1}{2}\\cdot\\frac{2x+1}{x^2+x+1} + \\frac{1}{2}\\cdot\\frac{1}{x^2+x+1}$$
      $$\\int\\frac{2x+1}{x^2+x+1}\\,dx = \\ln(x^2+x+1) + c$$
      <div class="sl">// Per il secondo termine: completa il quadrato x²+x+1=(x+1/2)²+3/4</div>
      $$\\int\\frac{1}{(x+1/2)^2+3/4}\\,dx = \\frac{2}{\\sqrt{3}}\\arctan\\frac{2x+1}{\\sqrt{3}} + c$$
      $$\\text{Risultato: } \\frac{1}{2}\\ln(x^2+x+1) + \\frac{1}{\\sqrt{3}}\\arctan\\frac{2x+1}{\\sqrt{3}} + c$$
    </div>
  </div>
</div>

<div class="quiz fade">
  <div class="quiz-hdr"><span>QUIZ RIEPILOGO</span><span class="qscore" id="sc_ric">0/5</span></div>
  <div class="quiz-body">
    <div class="qq" data-ok="b" data-why="∫x^n dx = x^(n+1)/(n+1)+c per n≠-1. Il caso n=-1 dà ∫(1/x)dx=ln|x|+c.">
      <div class="qq-text">1. $\\int x^n\\,dx$ vale (per $n \\neq -1$):</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr1"> $nx^{n-1}+c$</label>
        <label class="opt"><input type="radio" name="qr1"> $\\dfrac{x^{n+1}}{n+1}+c$</label>
        <label class="opt"><input type="radio" name="qr1"> $x^{n+1}+c$</label>
        <label class="opt"><input type="radio" name="qr1"> $\\dfrac{x^n}{n}+c$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="c" data-why="f=ln x (derivata semplice: 1/x), g'=1 → g=x. Parti: x ln x - ∫x·(1/x)dx = x ln x - x + c.">
      <div class="qq-text">2. $\\int \\ln x\\,dx$ vale:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr2"> $\\dfrac{1}{x}+c$</label>
        <label class="opt"><input type="radio" name="qr2"> $x\\ln x + c$</label>
        <label class="opt"><input type="radio" name="qr2"> $x\\ln x - x + c$</label>
        <label class="opt"><input type="radio" name="qr2"> $\\dfrac{(\\ln x)^2}{2}+c$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="a" data-why="Con t=sin x, dt=cos x dx: ∫sin³x cos x dx = ∫t³ dt = t⁴/4+c = sin⁴x/4+c.">
      <div class="qq-text">3. $\\int \\sin^3 x\\cos x\\,dx$ vale:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr3"> $\\dfrac{\\sin^4 x}{4}+c$</label>
        <label class="opt"><input type="radio" name="qr3"> $\\sin^4 x+c$</label>
        <label class="opt"><input type="radio" name="qr3"> $-\\cos^4 x+c$</label>
        <label class="opt"><input type="radio" name="qr3"> $3\\sin^2 x\\cos^2 x+c$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="d" data-why="Per parti con f=x², g'=e^x (applicate due volte): e^x(x²-2x+2)+c.">
      <div class="qq-text">4. $\\int x^2 e^x\\,dx$ vale:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr4"> $x^2e^x+c$</label>
        <label class="opt"><input type="radio" name="qr4"> $e^x(x^2+2x+2)+c$</label>
        <label class="opt"><input type="radio" name="qr4"> $e^x(x^2-2)+c$</label>
        <label class="opt"><input type="radio" name="qr4"> $e^x(x^2-2x+2)+c$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="b" data-why="1/(x²-1)=1/[(x-1)(x+1)]: frazioni parziali danno (1/2)ln|x-1|-(1/2)ln|x+1|+c = (1/2)ln|(x-1)/(x+1)|+c.">
      <div class="qq-text">5. $\\int \\dfrac{1}{x^2-1}\\,dx$ vale:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr5"> $\\ln|x^2-1|+c$</label>
        <label class="opt"><input type="radio" name="qr5"> $\\dfrac{1}{2}\\ln\\left|\\dfrac{x-1}{x+1}\\right|+c$</label>
        <label class="opt"><input type="radio" name="qr5"> $\\arctan x+c$</label>
        <label class="opt"><input type="radio" name="qr5"> $\\dfrac{-1}{x^2}+c$</label>
      </div><div class="qfb"></div>
    </div>
  </div>
  <div class="quiz-foot"><button class="q-reset" onclick="resetQ(this)">Ricomincia</button><span class="q-info" id="info_ric"></span></div>
</div>`
    }

  ],

  disclaimer: `
<div class="fade" style="margin-top:4rem;padding:1.2rem 1.4rem;border:2px solid #aaa;background:#f9f9f6;font-size:.82rem;color:var(--ink-soft);line-height:1.7;">
  <div style="font-family:'Fira Code',monospace;font-size:.63rem;font-weight:600;letter-spacing:.12em;margin-bottom:.4rem;color:#aaa;">DISCLAIMER</div>
  <p>Questo materiale è stato elaborato e distribuito a titolo integrativo e gratuito dal docente, a supporto della didattica curricolare. Non costituisce adozione ufficiale né sostituisce i testi in adozione. Le formule, le definizioni e gli esempi sono di dominio pubblico scientifico. Il docente declina ogni responsabilità per eventuali imprecisioni. La riproduzione parziale è consentita per uso didattico non commerciale con citazione della fonte. © 2026 — uso interno scolastico.</p>
</div>`

};
