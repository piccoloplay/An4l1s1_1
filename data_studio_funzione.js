// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_studio_funzione.js',
    num:   'LEZIONE 08',
    title: 'Studio di funzione',
    sub:   'Schema generale · Dominio e segno · Asintoti · Derivata prima · Derivata seconda · Grafico'
  },

  sections: [

    // ── §01 ──────────────────────────────────────────────────────────
    {
      id:       's01',
      secNum:   '§01',
      navLabel: '§01 Schema generale',
      heading:  'Schema generale dello studio di funzione',
      html: `
<div class="fade">
<div class="box prop">
  <div class="box-label">METODO</div>
  <div class="box-title">I passi in ordine</div>
  <p><strong>1. Dominio</strong> — trova l'insieme di definizione naturale di $f$.</p>
  <p><strong>2. Segno</strong> — studia dove $f(x) > 0$, $f(x) < 0$, $f(x) = 0$.</p>
  <p><strong>3. Simmetrie</strong> — verifica se $f$ è pari, dispari o periodica.</p>
  <p><strong>4. Limiti agli estremi del dominio</strong> — calcola i limiti nei punti di frontiera e all'infinito.</p>
  <p><strong>5. Asintoti</strong> — individua asintoti verticali, orizzontali e obliqui.</p>
  <p><strong>6. Derivata prima</strong> — calcola $f'$, studia il segno, trova massimi e minimi locali.</p>
  <p><strong>7. Derivata seconda</strong> — calcola $f''$, studia il segno, trova i flessi.</p>
  <p><strong>8. Grafico</strong> — raccogli tutte le informazioni e traccia il grafico qualitativo.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">OSSERVAZIONE</div>
  <div class="box-title">Non tutti i passi sono sempre necessari</div>
  <p>Per funzioni semplici alcuni passi sono immediati o superflui. Per esempio, un polinomio ha dominio $\\mathbb{R}$ e nessun asintoto. L'ordine può variare, ma la logica rimane: prima si capisce il dominio, poi il comportamento globale, poi i dettagli locali.</p>
</div>
</div>`
    },

    // ── §02 ──────────────────────────────────────────────────────────
    {
      id:       's02',
      secNum:   '§02',
      navLabel: '§02 Dominio e segno',
      heading:  'Dominio e segno',
      html: `
<div class="fade">
<div class="box prop">
  <div class="box-label">DOMINIO</div>
  <div class="box-title">Come trovarlo</div>
  <p>Il dominio naturale di $f$ è l'insieme dei valori di $x$ per cui $f(x)$ è definita. Le restrizioni più comuni:</p>
  <p>— <strong>Frazioni:</strong> il denominatore deve essere $\\neq 0$.</p>
  <p>— <strong>Radici pari:</strong> l'argomento deve essere $\\geq 0$.</p>
  <p>— <strong>Logaritmi:</strong> l'argomento deve essere $> 0$.</p>
  <p>— <strong>Composizioni:</strong> si applicano le restrizioni di ogni funzione componente.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">SEGNO</div>
  <div class="box-title">Studio del segno di $f(x)$</div>
  <p>Una volta trovato il dominio, si studia dove $f(x) > 0$ e dove $f(x) < 0$. Questo determina dove il grafico sta sopra o sotto l'asse $x$.</p>
  <p>Si trovano prima gli zeri ($f(x) = 0$), poi si analizza il segno negli intervalli tra uno zero e l'altro.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 1 — Dominio e segno di una funzione razionale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova dominio e segno di $f(x) = \\dfrac{x^2 - 1}{x - 2}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Dominio: denominatore ≠ 0</div>
      $$D = \\mathbb{R} \\setminus \\{2\\}$$
      <div class="sl">// Zeri: x²-1 = 0 → x = ±1</div>
      <div class="sl">// Segno: f(x) = (x-1)(x+1)/(x-2). Studio con tabella dei segni:</div>
      <div class="sl">// x < -1: (-)(-)/(-) = - → f < 0</div>
      <div class="sl">// -1 < x < 1: (-)(+)/(-) = + → f > 0</div>
      <div class="sl">// 1 < x < 2: (+)(+)/(-) = - → f < 0</div>
      <div class="sl">// x > 2: (+)(+)/(+) = + → f > 0</div>
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 2 — Dominio con logaritmo</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova il dominio di $f(x) = \\ln(x^2 - 4)$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Argomento del logaritmo > 0: x²-4 > 0</div>
      $$x^2 > 4 \\implies |x| > 2 \\implies x < -2 \\text{ oppure } x > 2$$
      $$D = (-\\infty, -2) \\cup (2, +\\infty)$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Dominio e segno</span><span class="vfscore" id="vfs02">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="ln(x) è definito solo per x>0. Il dominio di ln(x²-4) richiede x²-4>0, cioè |x|>2.">
      <div class="vq-text">1. Il dominio di $\\ln(x^2-4)$ è $(-\\infty,-2)\\cup(2,+\\infty)$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: il dominio di √(x) richiede x≥0 (anche x=0 è ammesso). Solo per le radici pari con argomento strettamente positivo si esclude lo zero.">
      <div class="vq-text">2. Il dominio di $\\sqrt{x}$ è $(0, +\\infty)$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Gli zeri di f separano gli intervalli dove f>0 da quelli dove f<0 (per le funzioni continue). È il metodo della tabella dei segni.">
      <div class="vq-text">3. Per studiare il segno di $f$ è utile trovare prima gli zeri di $f$.</div>
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
      navLabel: '§03 Limiti e asintoti',
      heading:  'Limiti agli estremi e asintoti',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Asintoti</div>
  <p><strong>Asintoto verticale</strong> in $x = a$: se $\\lim_{x \\to a^\\pm} f(x) = \\pm\\infty$.</p>
  <p><strong>Asintoto orizzontale</strong> $y = L$: se $\\lim_{x \\to \\pm\\infty} f(x) = L$.</p>
  <p><strong>Asintoto obliquo</strong> $y = mx + q$: se $\\lim_{x\\to\\pm\\infty}[f(x) - mx - q] = 0$, dove:</p>
  $$m = \\lim_{x\\to\\pm\\infty}\\frac{f(x)}{x}, \\qquad q = \\lim_{x\\to\\pm\\infty}[f(x) - mx]$$
  <p>Un asintoto obliquo esiste solo se $m \\neq 0$ e $m, q$ sono finiti.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 3 — Asintoti di una funzione razionale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova gli asintoti di $f(x) = \\dfrac{x^2 - 1}{x - 2}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Asintoto verticale: x=2 (denominatore nullo)</div>
      $$\\lim_{x\\to 2^+}\\frac{x^2-1}{x-2} = \\frac{3}{0^+} = +\\infty, \\quad \\lim_{x\\to 2^-}\\frac{x^2-1}{x-2} = -\\infty$$
      <div class="sl">// Asintoto orizzontale: grado num > grado den → nessuno</div>
      <div class="sl">// Asintoto obliquo: m = lim f(x)/x</div>
      $$m = \\lim_{x\\to\\infty}\\frac{x^2-1}{x(x-2)} = \\lim_{x\\to\\infty}\\frac{x^2-1}{x^2-2x} = 1$$
      $$q = \\lim_{x\\to\\infty}\\left[\\frac{x^2-1}{x-2} - x\\right] = \\lim_{x\\to\\infty}\\frac{x^2-1-x(x-2)}{x-2} = \\lim_{x\\to\\infty}\\frac{2x-1}{x-2} = 2$$
      $$\\text{Asintoto obliquo: } y = x + 2$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 4 — Asintoti con esponenziale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova gli asintoti di $f(x) = xe^{-x}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Dominio: R. Nessun asintoto verticale.</div>
      $$\\lim_{x\\to+\\infty} xe^{-x} = 0 \\quad (\\text{esponenziale domina}) \\implies y=0 \\text{ asintoto orizzontale}$$
      $$\\lim_{x\\to-\\infty} xe^{-x} = -\\infty \\cdot (+\\infty) = -\\infty \\quad \\text{(nessun asintoto a sinistra)}$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Asintoti</span><span class="vfscore" id="vfs03">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Un asintoto obliquo esiste se lim f(x)/x = m ≠ 0 finito e lim [f(x)-mx] = q finito.">
      <div class="vq-text">1. Per trovare l'asintoto obliquo si calcola $m = \\lim_{x\\to\\infty} f(x)/x$ e $q = \\lim_{x\\to\\infty}[f(x)-mx]$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: se lim f(x) = L finito per x→±∞, l'asintoto è orizzontale (m=0). L'asintoto obliquo richiede m≠0.">
      <div class="vq-text">2. Se $\\lim_{x\\to+\\infty} f(x) = 3$, allora $f$ ha un asintoto obliquo.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Se il denominatore si annulla in x=a e il numeratore no, il limite è ±∞: asintoto verticale in x=a.">
      <div class="vq-text">3. Se $g(a) = 0$ e $h(a) \\neq 0$, allora $x = a$ è un asintoto verticale di $f(x) = h(x)/g(x)$.</div>
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
      navLabel: '§04 Derivata prima',
      heading:  'Derivata prima: crescenza e punti critici',
      html: `
<div class="fade">
<div class="box prop">
  <div class="box-label">METODO</div>
  <div class="box-title">Studio della derivata prima</div>
  <p>1. Calcola $f'(x)$.</p>
  <p>2. Trova i punti critici: $f'(x) = 0$ oppure $f'(x)$ non esiste (nel dominio di $f$).</p>
  <p>3. Studia il segno di $f'$ negli intervalli tra i punti critici.</p>
  <p>4. Classifica i punti critici: se $f'$ cambia da $+$ a $-$ in $x_0$ → massimo locale; da $-$ a $+$ → minimo locale; non cambia → né massimo né minimo (flesso a tangente orizzontale).</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 5 — Derivata prima di una razionale fratta</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Studia crescenza e decrescenza di $f(x) = \\dfrac{x^2-1}{x-2}$.</p></div>
    <div class="ex-sol">
      $$f'(x) = \\frac{2x(x-2)-(x^2-1)}{(x-2)^2} = \\frac{x^2-4x+1}{(x-2)^2}$$
      <div class="sl">// f'=0: x²-4x+1=0 → x = 2±√3</div>
      $$x_1 = 2-\\sqrt{3} \\approx 0.27, \\quad x_2 = 2+\\sqrt{3} \\approx 3.73$$
      <div class="sl">// Il denominatore (x-2)² > 0 sempre. Segno di f' = segno di x²-4x+1:</div>
      <div class="sl">// x < x₁: f' > 0 (crescente)</div>
      <div class="sl">// x₁ < x < 2: f' < 0 (decrescente)</div>
      <div class="sl">// 2 < x < x₂: f' < 0 (decrescente)</div>
      <div class="sl">// x > x₂: f' > 0 (crescente)</div>
      $$\\text{Massimo locale in } x_1,\\quad \\text{minimo locale in } x_2$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 6 — Derivata prima con esponenziale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Studia crescenza e decrescenza di $f(x) = xe^{-x}$.</p></div>
    <div class="ex-sol">
      $$f'(x) = e^{-x} - xe^{-x} = e^{-x}(1-x)$$
      <div class="sl">// e^(-x) > 0 sempre. Segno di f' = segno di (1-x):</div>
      <div class="sl">// x < 1: f' > 0 → crescente</div>
      <div class="sl">// x > 1: f' < 0 → decrescente</div>
      $$\\text{Massimo in } x=1:\\quad f(1) = e^{-1} = \\frac{1}{e}$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Derivata prima</span><span class="vfscore" id="vfs04">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="F" data-why="Falso: f'(x₀)=0 è condizione necessaria ma non sufficiente. Se f' non cambia segno in x₀ (es. f(x)=x³ in x=0), non c'è né max né min.">
      <div class="vq-text">1. Se $f'(x_0) = 0$ allora $x_0$ è un massimo o minimo locale.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Se f' cambia segno da + a - in x₀, allora f cresce prima e decresce dopo: x₀ è un massimo locale.">
      <div class="vq-text">2. Se $f'$ cambia segno da $+$ a $-$ in $x_0$, allora $x_0$ è un massimo locale.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="f'(x) = e^(-x)(1-x). Il massimo è in x=1 dove f'=0 e f' cambia da + a -. f(1) = 1/e.">
      <div class="vq-text">3. $f(x) = xe^{-x}$ ha un massimo in $x=1$ con valore $1/e$.</div>
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
      navLabel: '§05 Derivata seconda',
      heading:  'Derivata seconda: concavità e flessi',
      html: `
<div class="fade">
<div class="box prop">
  <div class="box-label">METODO</div>
  <div class="box-title">Studio della derivata seconda</div>
  <p>1. Calcola $f''(x)$.</p>
  <p>2. Trova i candidati flessi: $f''(x) = 0$ oppure $f''$ non esiste.</p>
  <p>3. Studia il segno di $f''$: dove $f'' > 0$ la funzione è convessa ($\\cup$); dove $f'' < 0$ è concava ($\\cap$).</p>
  <p>4. Un punto $x_0$ è un <strong>flesso</strong> se $f''$ cambia segno in $x_0$.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 7 — Derivata seconda con esponenziale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Studia la concavità di $f(x) = xe^{-x}$ e trova i flessi.</p></div>
    <div class="ex-sol">
      $$f'(x) = e^{-x}(1-x)$$
      $$f''(x) = -e^{-x}(1-x) + e^{-x}(-1) = e^{-x}(x-2)$$
      <div class="sl">// e^(-x) > 0 sempre. Segno di f'' = segno di (x-2):</div>
      <div class="sl">// x < 2: f'' < 0 → concava</div>
      <div class="sl">// x > 2: f'' > 0 → convessa</div>
      <div class="sl">// f'' cambia segno in x=2 → flesso</div>
      $$\\text{Flesso in } x=2:\\quad f(2) = 2e^{-2} = \\frac{2}{e^2}$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Derivata seconda</span><span class="vfscore" id="vfs05">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="f''>0 → convessa (grafico a U, sopra le tangenti). f''<0 → concava (grafico a ∩, sotto le tangenti).">
      <div class="vq-text">1. Dove $f''(x) > 0$ la funzione è convessa.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: f''(x₀)=0 è condizione necessaria ma non sufficiente per un flesso. Serve che f'' cambi segno in x₀.">
      <div class="vq-text">2. Se $f''(x_0) = 0$ allora $x_0$ è un flesso.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="f''(x)=e^(-x)(x-2). Cambia segno in x=2 (da - a +): flesso. f(2)=2e^(-2)=2/e².">
      <div class="vq-text">3. $f(x) = xe^{-x}$ ha un flesso in $x = 2$.</div>
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
      navLabel: '§06 Studio completo',
      heading:  'Studio completo: esempi guidati',
      html: `
<div class="ex fade">
  <div class="ex-hdr"><span>ES 8 — Studio completo di $f(x) = xe^{-x}$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Esegui lo studio completo di $f(x) = xe^{-x}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// 1. DOMINIO</div>
      $$D = \\mathbb{R}$$
      <div class="sl">// 2. SEGNO: f(x)=0 ↔ x=0. f>0 per x>0, f<0 per x<0</div>
      <div class="sl">// 3. SIMMETRIE: né pari né dispari</div>
      <div class="sl">// 4-5. LIMITI E ASINTOTI</div>
      $$\\lim_{x\\to+\\infty}xe^{-x} = 0 \\implies y=0 \\text{ asintoto orizzontale}$$
      $$\\lim_{x\\to-\\infty}xe^{-x} = -\\infty \\quad \\text{(nessun asintoto)}$$
      <div class="sl">// 6. DERIVATA PRIMA</div>
      $$f'(x) = e^{-x}(1-x) = 0 \\implies x=1$$
      <div class="sl">// f' > 0 per x<1 (crescente), f' < 0 per x>1 (decrescente)</div>
      $$\\text{Massimo in } x=1:\\; f(1)=\\frac{1}{e}$$
      <div class="sl">// 7. DERIVATA SECONDA</div>
      $$f''(x) = e^{-x}(x-2) = 0 \\implies x=2$$
      <div class="sl">// f'' < 0 per x<2 (concava), f'' > 0 per x>2 (convessa)</div>
      $$\\text{Flesso in } x=2:\\; f(2)=\\frac{2}{e^2}$$
      <div class="sl">// 8. GRAFICO: parte da -∞ a sinistra, zero in x=0, max in (1,1/e), asintoto y=0 a destra, flesso in (2,2/e²)</div>
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 9 — Studio completo di $f(x) = \\dfrac{x^2}{x^2-1}$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Esegui lo studio completo di $f(x) = \\dfrac{x^2}{x^2-1}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// 1. DOMINIO: x²-1≠0 → x≠±1</div>
      $$D = \\mathbb{R}\\setminus\\{-1,1\\}$$
      <div class="sl">// 2. SEGNO: numeratore x²≥0 sempre. Segno = segno denominatore.</div>
      <div class="sl">// f>0 per |x|>1, f<0 per |x|<1, f=0 per x=0</div>
      <div class="sl">// 3. SIMMETRIE: f(-x)=(-x)²/((-x)²-1)=x²/(x²-1)=f(x) → PARI</div>
      <div class="sl">// 4-5. ASINTOTI</div>
      $$\\lim_{x\\to\\pm 1}f(x) = \\pm\\infty \\implies x=\\pm 1 \\text{ asintoti verticali}$$
      $$\\lim_{x\\to\\pm\\infty}\\frac{x^2}{x^2-1} = 1 \\implies y=1 \\text{ asintoto orizzontale}$$
      <div class="sl">// 6. DERIVATA PRIMA</div>
      $$f'(x) = \\frac{2x(x^2-1)-x^2\\cdot 2x}{(x^2-1)^2} = \\frac{-2x}{(x^2-1)^2}$$
      <div class="sl">// f'=0 → x=0. f'>0 per x<0, f'<0 per x>0 (escluso x=±1)</div>
      $$\\text{Massimo in } x=0:\\; f(0)=0$$
      <div class="sl">// 7. DERIVATA SECONDA</div>
      $$f''(x) = \\frac{-2(x^2-1)^2+2x\\cdot 2(x^2-1)\\cdot 2x}{(x^2-1)^4} = \\frac{2(3x^2+1)}{(x^2-1)^3}$$
      <div class="sl">// 3x²+1 > 0 sempre. Segno f'' = segno (x²-1)³ = segno (x²-1)</div>
      <div class="sl">// f''>0 per |x|>1 (convessa), f''<0 per |x|<1 (concava). Nessun flesso.</div>
    </div>
  </div>
</div>

<div class="quiz fade">
  <div class="quiz-hdr"><span>QUIZ RIEPILOGO FINALE</span><span class="qscore" id="sc_fin">0/5</span></div>
  <div class="quiz-body">
    <div class="qq" data-ok="c" data-why="L'ordine corretto è: dominio → segno → asintoti → f' → f''. Non si può studiare f' prima di avere il dominio.">
      <div class="qq-text">1. Qual è l'ordine corretto nello studio di funzione?</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr1"> $f' \\ \\to$ dominio $\\to$ asintoti $\\to f''$</label>
        <label class="opt"><input type="radio" name="qr1"> Asintoti $\\to$ dominio $\\to f' \\to f''$</label>
        <label class="opt"><input type="radio" name="qr1"> Dominio $\\to$ segno $\\to$ asintoti $\\to f' \\to f''$</label>
        <label class="opt"><input type="radio" name="qr1"> $f'' \\to f' \\to$ dominio $\\to$ asintoti</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="b" data-why="m = lim f(x)/x per x→∞. Se m è finito e ≠0, poi q = lim[f(x)-mx]. Se anche q è finito: asintoto obliquo y=mx+q.">
      <div class="qq-text">2. Come si trova un asintoto obliquo $y = mx+q$?</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr2"> $m = \\lim f(x)$, $q = \\lim f'(x)$</label>
        <label class="opt"><input type="radio" name="qr2"> $m = \\lim f(x)/x$, $q = \\lim[f(x)-mx]$</label>
        <label class="opt"><input type="radio" name="qr2"> $m = f'(0)$, $q = f(0)$</label>
        <label class="opt"><input type="radio" name="qr2"> $m = \\lim f'(x)$, $q = \\lim f''(x)$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="a" data-why="f'(x)=e^(-x)(1-x)=0 → x=1. f' cambia da + a - → massimo. f(1)=1/e.">
      <div class="qq-text">3. Il massimo di $f(x) = xe^{-x}$ è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr3"> $f(1) = 1/e$</label>
        <label class="opt"><input type="radio" name="qr3"> $f(0) = 0$</label>
        <label class="opt"><input type="radio" name="qr3"> $f(2) = 2/e^2$</label>
        <label class="opt"><input type="radio" name="qr3"> $f(-1) = -e$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="d" data-why="f(x)=x²/(x²-1): f(-x)=f(x) → pari. Asintoti verticali x=±1, orizzontale y=1. Massimo in x=0 con f(0)=0.">
      <div class="qq-text">4. La funzione $f(x) = x^2/(x^2-1)$ è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr4"> Dispari</label>
        <label class="opt"><input type="radio" name="qr4"> Né pari né dispari</label>
        <label class="opt"><input type="radio" name="qr4"> Pari, con asintoto orizzontale $y=0$</label>
        <label class="opt"><input type="radio" name="qr4"> Pari, con asintoto orizzontale $y=1$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="b" data-why="Un flesso richiede che f'' cambi segno. f''(x₀)=0 è solo condizione necessaria: serve verificare il cambio di segno.">
      <div class="qq-text">5. Per stabilire che $x_0$ è un flesso è sufficiente:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr5"> $f''(x_0) = 0$</label>
        <label class="opt"><input type="radio" name="qr5"> $f''(x_0) = 0$ e $f''$ cambia segno in $x_0$</label>
        <label class="opt"><input type="radio" name="qr5"> $f'(x_0) = 0$</label>
        <label class="opt"><input type="radio" name="qr5"> $f(x_0) = 0$</label>
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
