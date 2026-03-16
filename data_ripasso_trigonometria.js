// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_ripasso_trigonometria.js',
    num:   'LEZIONE 01',
    title: 'Ripasso di trigonometria',
    sub:   'Angoli e misure · Funzioni trigonometriche · Valori notevoli · Identità · Formule di addizione e duplicazione'
  },

  sections: [

    // ── §01 ──────────────────────────────────────────────────────────
    {
      id:       's01',
      secNum:   '§01',
      navLabel: '§01 Angoli e misure',
      heading:  'Angoli e misura in radianti',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Radiante</div>
  <p>Il <strong>radiante</strong> è l'unità di misura degli angoli nel sistema internazionale. Un angolo di $1$ rad è l'angolo al centro di un cerchio di raggio $r$ che sottende un arco di lunghezza $r$.</p>
  <p>La relazione tra gradi e radianti è:</p>
  $$180^\\circ = \\pi \\text{ rad}$$
  <p>Conversioni: gradi $\\to$ radianti: moltiplica per $\\pi/180$. Radianti $\\to$ gradi: moltiplica per $180/\\pi$.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">ANGOLI NOTEVOLI</div>
  <div class="box-title">Conversione gradi ↔ radianti</div>
  <div class="tbl">
  <table>
    <thead><tr><th>Gradi</th><th>Radianti</th></tr></thead>
    <tbody>
      <tr><td>$0^\\circ$</td><td>$0$</td></tr>
      <tr><td>$30^\\circ$</td><td>$\\dfrac{\\pi}{6}$</td></tr>
      <tr><td>$45^\\circ$</td><td>$\\dfrac{\\pi}{4}$</td></tr>
      <tr><td>$60^\\circ$</td><td>$\\dfrac{\\pi}{3}$</td></tr>
      <tr><td>$90^\\circ$</td><td>$\\dfrac{\\pi}{2}$</td></tr>
      <tr><td>$120^\\circ$</td><td>$\\dfrac{2\\pi}{3}$</td></tr>
      <tr><td>$180^\\circ$</td><td>$\\pi$</td></tr>
      <tr><td>$270^\\circ$</td><td>$\\dfrac{3\\pi}{2}$</td></tr>
      <tr><td>$360^\\circ$</td><td>$2\\pi$</td></tr>
    </tbody>
  </table>
  </div>
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Misura degli angoli</span><span class="vfscore" id="vfs01">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="180° = π rad, quindi 90° = π/2 rad.">
      <div class="vq-text">1. $90^\\circ$ corrisponde a $\\dfrac{\\pi}{2}$ radianti.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: 360° = 2π rad, non π rad. π rad corrisponde a 180°.">
      <div class="vq-text">2. $360^\\circ$ corrisponde a $\\pi$ radianti.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="45° × (π/180) = π/4 rad.">
      <div class="vq-text">3. $45^\\circ$ corrisponde a $\\dfrac{\\pi}{4}$ radianti.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Per convertire da radianti a gradi: (π/3) × (180/π) = 60°.">
      <div class="vq-text">4. $\\dfrac{\\pi}{3}$ radianti corrisponde a $60^\\circ$.</div>
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
      navLabel: '§02 Funzioni trigonometriche',
      heading:  'Seno, coseno e tangente',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Definizione sul cerchio unitario</div>
  <p>Dato un angolo $\\alpha$ (in radianti), considera il punto $P$ sul cerchio di raggio $1$ centrato nell'origine, con l'angolo $\\alpha$ misurato in senso antiorario dall'asse $x$ positivo. Allora:</p>
  $$\\cos\\alpha = \\text{ascissa di } P, \\qquad \\sin\\alpha = \\text{ordinata di } P$$
  $$\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} \\quad (\\cos\\alpha \\neq 0)$$
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">PROPRIETÀ</div>
  <div class="box-title">Periodicità e simmetrie</div>
  <p><strong>Periodicità:</strong> $\\sin(\\alpha + 2\\pi) = \\sin\\alpha$, $\\;\\cos(\\alpha+2\\pi) = \\cos\\alpha$, $\\;\\tan(\\alpha+\\pi) = \\tan\\alpha$.</p>
  <p><strong>Parità:</strong> $\\cos(-\\alpha) = \\cos\\alpha$ (funzione pari); $\\;\\sin(-\\alpha) = -\\sin\\alpha$, $\\;\\tan(-\\alpha) = -\\tan\\alpha$ (funzioni dispari).</p>
  <p><strong>Dominio e codominio:</strong></p>
  <p>$\\sin, \\cos : \\mathbb{R} \\to [-1,1]$</p>
  <p>$\\tan : \\mathbb{R} \\setminus \\{\\pi/2 + k\\pi,\\, k\\in\\mathbb{Z}\\} \\to \\mathbb{R}$</p>
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Funzioni trigonometriche</span><span class="vfscore" id="vfs02">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="cos è una funzione pari: cos(-α) = cos(α) per definizione sul cerchio unitario.">
      <div class="vq-text">1. $\\cos(-\\alpha) = \\cos\\alpha$ per ogni $\\alpha$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: il codominio di sin e cos è [-1,1], non tutto R. Possono assumere solo valori tra -1 e 1.">
      <div class="vq-text">2. $\\sin\\alpha$ può assumere qualsiasi valore reale.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="sin ha periodo 2π: sin(α+2π) = sin(α) per ogni α.">
      <div class="vq-text">3. La funzione $\\sin$ ha periodo $2\\pi$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="tan = sin/cos, quindi non è definita dove cos=0, cioè in π/2 + kπ.">
      <div class="vq-text">4. $\\tan\\alpha$ non è definita per $\\alpha = \\dfrac{\\pi}{2} + k\\pi$, $k \\in \\mathbb{Z}$.</div>
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
      navLabel: '§03 Valori notevoli',
      heading:  'Valori notevoli',
      html: `
<div class="fade">
<div class="box prop">
  <div class="box-label">TABELLA</div>
  <div class="box-title">Valori notevoli di seno, coseno e tangente</div>
  <div class="tbl">
  <table>
    <thead><tr><th>$\\alpha$</th><th>$\\sin\\alpha$</th><th>$\\cos\\alpha$</th><th>$\\tan\\alpha$</th></tr></thead>
    <tbody>
      <tr><td>$0$</td><td>$0$</td><td>$1$</td><td>$0$</td></tr>
      <tr><td>$\\dfrac{\\pi}{6}$</td><td>$\\dfrac{1}{2}$</td><td>$\\dfrac{\\sqrt{3}}{2}$</td><td>$\\dfrac{1}{\\sqrt{3}}$</td></tr>
      <tr><td>$\\dfrac{\\pi}{4}$</td><td>$\\dfrac{\\sqrt{2}}{2}$</td><td>$\\dfrac{\\sqrt{2}}{2}$</td><td>$1$</td></tr>
      <tr><td>$\\dfrac{\\pi}{3}$</td><td>$\\dfrac{\\sqrt{3}}{2}$</td><td>$\\dfrac{1}{2}$</td><td>$\\sqrt{3}$</td></tr>
      <tr><td>$\\dfrac{\\pi}{2}$</td><td>$1$</td><td>$0$</td><td>$\\nexists$</td></tr>
      <tr><td>$\\pi$</td><td>$0$</td><td>$-1$</td><td>$0$</td></tr>
      <tr><td>$\\dfrac{3\\pi}{2}$</td><td>$-1$</td><td>$0$</td><td>$\\nexists$</td></tr>
    </tbody>
  </table>
  </div>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">TRUCCO MNEMONICO</div>
  <div class="box-title">La "mano" per i valori di seno e coseno</div>
  <p>Per $\\sin$ degli angoli $0, \\pi/6, \\pi/4, \\pi/3, \\pi/2$: i valori sono $\\sqrt{0}/2,\\, \\sqrt{1}/2,\\, \\sqrt{2}/2,\\, \\sqrt{3}/2,\\, \\sqrt{4}/2$, cioè $0,\\, 1/2,\\, \\sqrt{2}/2,\\, \\sqrt{3}/2,\\, 1$.</p>
  <p>Per $\\cos$ si legge la stessa sequenza al contrario: $1,\\, \\sqrt{3}/2,\\, \\sqrt{2}/2,\\, 1/2,\\, 0$.</p>
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Valori notevoli</span><span class="vfscore" id="vfs03">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="F" data-why="Falso: sin(π/3) = √3/2, non 1/2. È sin(π/6) = 1/2.">
      <div class="vq-text">1. $\\sin\\dfrac{\\pi}{3} = \\dfrac{1}{2}$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="cos(π/4) = √2/2. Angolo di 45°: triangolo rettangolo isoscele con cateti uguali.">
      <div class="vq-text">2. $\\cos\\dfrac{\\pi}{4} = \\dfrac{\\sqrt{2}}{2}$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="tan(π/3) = sin(π/3)/cos(π/3) = (√3/2)/(1/2) = √3.">
      <div class="vq-text">3. $\\tan\\dfrac{\\pi}{3} = \\sqrt{3}$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: sin(π/2) = 1, non 0. È sin(0) = sin(π) = 0.">
      <div class="vq-text">4. $\\sin\\dfrac{\\pi}{2} = 0$.</div>
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
      navLabel: '§04 Identità fondamentali',
      heading:  'Identità trigonometriche fondamentali',
      html: `
<div class="fade">
<div class="box thm">
  <div class="box-label">IDENTITÀ</div>
  <div class="box-title">Identità fondamentale</div>
  <p>Per ogni $\\alpha \\in \\mathbb{R}$:</p>
  $$\\sin^2\\alpha + \\cos^2\\alpha = 1$$
  <p>Segue direttamente dalla definizione sul cerchio unitario: il punto $P = (\\cos\\alpha, \\sin\\alpha)$ sta sul cerchio di raggio $1$, quindi $\\cos^2\\alpha + \\sin^2\\alpha = 1^2$.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">IDENTITÀ DERIVATE</div>
  <div class="box-title">Altre identità utili</div>
  <p>Dividendo $\\sin^2\\alpha + \\cos^2\\alpha = 1$ per $\\cos^2\\alpha$:</p>
  $$\\tan^2\\alpha + 1 = \\frac{1}{\\cos^2\\alpha}$$
  <p>Relazioni tra angoli supplementari ($\\pi - \\alpha$):</p>
  $$\\sin(\\pi - \\alpha) = \\sin\\alpha, \\qquad \\cos(\\pi-\\alpha) = -\\cos\\alpha$$
  <p>Relazioni tra angoli complementari ($\\pi/2 - \\alpha$):</p>
  $$\\sin\\!\\left(\\frac{\\pi}{2}-\\alpha\\right) = \\cos\\alpha, \\qquad \\cos\\!\\left(\\frac{\\pi}{2}-\\alpha\\right) = \\sin\\alpha$$
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Usare l'identità fondamentale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Sapendo che $\\sin\\alpha = 3/5$ e $\\alpha \\in (0, \\pi/2)$, trova $\\cos\\alpha$ e $\\tan\\alpha$.</p></div>
    <div class="ex-sol">
      $$\\cos^2\\alpha = 1 - \\sin^2\\alpha = 1 - \\frac{9}{25} = \\frac{16}{25}$$
      <div class="sl">// α ∈ (0,π/2) → cos α > 0</div>
      $$\\cos\\alpha = \\frac{4}{5}, \\qquad \\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} = \\frac{3/5}{4/5} = \\frac{3}{4}$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Identità</span><span class="vfscore" id="vfs04">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="È l'identità fondamentale della trigonometria, valida per ogni α.">
      <div class="vq-text">1. $\\sin^2\\alpha + \\cos^2\\alpha = 1$ per ogni $\\alpha \\in \\mathbb{R}$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="sin(π-α) = sin α: angolo supplementare. Si verifica sul cerchio unitario: i punti α e π-α hanno la stessa ordinata.">
      <div class="vq-text">2. $\\sin(\\pi - \\alpha) = \\sin\\alpha$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: cos(π-α) = -cos α, con il segno meno. I punti α e π-α hanno ascisse opposte.">
      <div class="vq-text">3. $\\cos(\\pi - \\alpha) = \\cos\\alpha$.</div>
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
      navLabel: '§05 Formule di addizione',
      heading:  'Formule di addizione e duplicazione',
      html: `
<div class="fade">
<div class="box thm">
  <div class="box-label">FORMULE</div>
  <div class="box-title">Addizione e sottrazione</div>
  $$\\sin(\\alpha \\pm \\beta) = \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta$$
  $$\\cos(\\alpha \\pm \\beta) = \\cos\\alpha\\cos\\beta \\mp \\sin\\alpha\\sin\\beta$$
  $$\\tan(\\alpha \\pm \\beta) = \\frac{\\tan\\alpha \\pm \\tan\\beta}{1 \\mp \\tan\\alpha\\tan\\beta}$$
</div>
</div>

<div class="fade">
<div class="box thm">
  <div class="box-label">FORMULE</div>
  <div class="box-title">Duplicazione</div>
  <p>Ponendo $\\beta = \\alpha$ nelle formule di addizione:</p>
  $$\\sin(2\\alpha) = 2\\sin\\alpha\\cos\\alpha$$
  $$\\cos(2\\alpha) = \\cos^2\\alpha - \\sin^2\\alpha = 2\\cos^2\\alpha - 1 = 1 - 2\\sin^2\\alpha$$
  $$\\tan(2\\alpha) = \\frac{2\\tan\\alpha}{1-\\tan^2\\alpha}$$
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">FORMULE</div>
  <div class="box-title">Bisezione (formule di Werner)</div>
  <p>Dalle formule di duplicazione si ricavano:</p>
  $$\\cos^2\\alpha = \\frac{1+\\cos(2\\alpha)}{2}, \\qquad \\sin^2\\alpha = \\frac{1-\\cos(2\\alpha)}{2}$$
  <p>Utili per abbassare il grado nelle integrazioni.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 1 — Formula di addizione</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\sin(75^\\circ) = \\sin\\!\\left(\\dfrac{5\\pi}{12}\\right)$ usando la formula di addizione.</p></div>
    <div class="ex-sol">
      <div class="sl">// 75° = 45° + 30°</div>
      $$\\sin(45^\\circ + 30^\\circ) = \\sin 45^\\circ\\cos 30^\\circ + \\cos 45^\\circ\\sin 30^\\circ$$
      $$= \\frac{\\sqrt{2}}{2}\\cdot\\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2}\\cdot\\frac{1}{2} = \\frac{\\sqrt{6}+\\sqrt{2}}{4}$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 2 — Formula di duplicazione</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\sin(2\\alpha)$ e $\\cos(2\\alpha)$ sapendo che $\\cos\\alpha = -\\dfrac{1}{3}$ e $\\alpha \\in (\\pi/2, \\pi)$.</p></div>
    <div class="ex-sol">
      <div class="sl">// α ∈ (π/2,π) → sin α > 0</div>
      $$\\sin\\alpha = \\sqrt{1-\\cos^2\\alpha} = \\sqrt{1-\\tfrac{1}{9}} = \\sqrt{\\tfrac{8}{9}} = \\frac{2\\sqrt{2}}{3}$$
      $$\\sin(2\\alpha) = 2\\sin\\alpha\\cos\\alpha = 2\\cdot\\frac{2\\sqrt{2}}{3}\\cdot\\left(-\\frac{1}{3}\\right) = -\\frac{4\\sqrt{2}}{9}$$
      $$\\cos(2\\alpha) = 2\\cos^2\\alpha - 1 = 2\\cdot\\frac{1}{9} - 1 = -\\frac{7}{9}$$
    </div>
  </div>
</div>

<div class="quiz fade">
  <div class="quiz-hdr"><span>QUIZ RIEPILOGO FINALE</span><span class="qscore" id="sc_fin">0/5</span></div>
  <div class="quiz-body">
    <div class="qq" data-ok="b" data-why="180° = π rad, quindi per convertire gradi in radianti si moltiplica per π/180.">
      <div class="qq-text">1. Per convertire un angolo da gradi a radianti si moltiplica per:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr1"> $180/\\pi$</label>
        <label class="opt"><input type="radio" name="qr1"> $\\pi/180$</label>
        <label class="opt"><input type="radio" name="qr1"> $\\pi$</label>
        <label class="opt"><input type="radio" name="qr1"> $360$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="c" data-why="sin(π/6) = 1/2. Angolo di 30°: nel triangolo equilatero di lato 2, l'altezza vale √3, quindi sin(30°) = 1/2.">
      <div class="qq-text">2. $\\sin\\dfrac{\\pi}{6}$ vale:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr2"> $\\dfrac{\\sqrt{3}}{2}$</label>
        <label class="opt"><input type="radio" name="qr2"> $\\dfrac{\\sqrt{2}}{2}$</label>
        <label class="opt"><input type="radio" name="qr2"> $\\dfrac{1}{2}$</label>
        <label class="opt"><input type="radio" name="qr2"> $1$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="a" data-why="sin²α + cos²α = 1 è l'identità fondamentale della trigonometria.">
      <div class="qq-text">3. L'identità fondamentale della trigonometria è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr3"> $\\sin^2\\alpha + \\cos^2\\alpha = 1$</label>
        <label class="opt"><input type="radio" name="qr3"> $\\sin^2\\alpha - \\cos^2\\alpha = 1$</label>
        <label class="opt"><input type="radio" name="qr3"> $\\sin\\alpha + \\cos\\alpha = 1$</label>
        <label class="opt"><input type="radio" name="qr3"> $\\tan^2\\alpha + \\sin^2\\alpha = 1$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="d" data-why="Formula di duplicazione: sin(2α) = 2 sin α cos α.">
      <div class="qq-text">4. $\\sin(2\\alpha)$ è uguale a:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr4"> $2\\sin^2\\alpha$</label>
        <label class="opt"><input type="radio" name="qr4"> $\\sin^2\\alpha + \\cos^2\\alpha$</label>
        <label class="opt"><input type="radio" name="qr4"> $\\cos^2\\alpha - \\sin^2\\alpha$</label>
        <label class="opt"><input type="radio" name="qr4"> $2\\sin\\alpha\\cos\\alpha$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="b" data-why="cos(α+β) = cos α cos β - sin α sin β. Attenzione al segno meno.">
      <div class="qq-text">5. $\\cos(\\alpha+\\beta)$ è uguale a:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr5"> $\\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$</label>
        <label class="opt"><input type="radio" name="qr5"> $\\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$</label>
        <label class="opt"><input type="radio" name="qr5"> $\\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$</label>
        <label class="opt"><input type="radio" name="qr5"> $\\sin\\alpha\\sin\\beta - \\cos\\alpha\\cos\\beta$</label>
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
