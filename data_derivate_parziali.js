// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_derivate_parziali.js',
    num:   'LEZIONE 14',
    title: 'Derivate parziali',
    sub:   'Definizione · Gradiente · Differenziabilità · Piano tangente · Schwarz'
  },

  sections: [

    // ── §01 ──────────────────────────────────────────────────────────
    {
      id:       's01',
      secNum:   '§01',
      navLabel: '§01 Definizione e calcolo',
      heading:  'Derivate parziali: definizione e calcolo',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Derivata parziale</div>
  <p>La <strong>derivata parziale</strong> di $f(x,y)$ rispetto a $x$ in $(x_0,y_0)$ è</p>
  $$f_x(x_0,y_0) = \\frac{\\partial f}{\\partial x}(x_0,y_0) = \\lim_{h \\to 0} \\frac{f(x_0+h, y_0) - f(x_0,y_0)}{h}$$
  <p>Analogamente per $y$:</p>
  $$f_y(x_0,y_0) = \\frac{\\partial f}{\\partial y}(x_0,y_0) = \\lim_{k \\to 0} \\frac{f(x_0, y_0+k) - f(x_0,y_0)}{k}$$
  <p><strong>Idea operativa</strong>: per calcolare $f_x$, deriva rispetto a $x$ trattando $y$ come una <strong>costante</strong>. E viceversa per $f_y$.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">SIGNIFICATO GEOMETRICO</div>
  <div class="box-title">Pendenza nelle direzioni $x$ e $y$</div>
  <p>$f_x(x_0,y_0)$ è la pendenza della curva ottenuta intersecando la superficie $z=f(x,y)$ con il piano verticale $y=y_0$ (curva nello spazio, parametrizzata da $x$).</p>
  <p>$f_y(x_0,y_0)$ è la pendenza della curva ottenuta con $x=x_0$.</p>
  <p>Sono cioè le pendenze della superficie nelle due direzioni cardinali $x$ e $y$.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Calcolo diretto</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $f_x$ e $f_y$ per $f(x,y) = x^3 y^2 + 4xy - 5y$.</p></div>
    <div class="ex-sol">
      <div class="sl">// f_x: derivo rispetto a x trattando y come costante</div>
      $$f_x = 3x^2 y^2 + 4y$$
      <div class="sl">// f_y: derivo rispetto a y trattando x come costante</div>
      $$f_y = 2x^3 y + 4x - 5$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Con esponenziale e logaritmo</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $f_x$ e $f_y$ per $f(x,y) = e^{xy} + \\ln(x^2+y)$.</p></div>
    <div class="ex-sol">
      $$f_x = y\\,e^{xy} + \\frac{2x}{x^2+y}$$
      $$f_y = x\\,e^{xy} + \\frac{1}{x^2+y}$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Definizione e calcolo</span><span class="vfscore" id="vfs01">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Calcolare f_x significa derivare rispetto a x considerando y costante: regole della derivazione di una variabile.">
      <div class="vq-text">1. Per calcolare $f_x$ si deriva rispetto a $x$ trattando $y$ come costante.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: in più variabili l'esistenza delle derivate parziali NON implica la continuità (esistono funzioni con f_x, f_y in un punto ma discontinue lì).">
      <div class="vq-text">2. Se $f_x$ e $f_y$ esistono in $(x_0,y_0)$, allora $f$ è continua in $(x_0,y_0)$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="f_x è la derivata di f(x,y₀) come funzione della sola x: pendenza della sezione della superficie con y=y₀.">
      <div class="vq-text">3. $f_x(x_0,y_0)$ rappresenta la pendenza della curva $z=f(x,y_0)$ nel punto $x=x_0$.</div>
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
      navLabel: '§02 Gradiente e derivata direzionale',
      heading:  'Gradiente e derivata direzionale',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Gradiente</div>
  <p>Il <strong>gradiente</strong> di $f$ in $(x_0,y_0)$ è il vettore</p>
  $$\\nabla f(x_0,y_0) = \\big(f_x(x_0,y_0),\\ f_y(x_0,y_0)\\big)$$
  <p>È un campo vettoriale: a ogni punto associa un vettore in $\\mathbb{R}^2$.</p>
</div>
</div>

<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Derivata direzionale</div>
  <p>Sia $\\mathbf{v} = (v_1, v_2)$ versore (cioè $\\|\\mathbf{v}\\|=1$). La <strong>derivata direzionale</strong> di $f$ in $(x_0,y_0)$ nella direzione $\\mathbf{v}$ è</p>
  $$D_{\\mathbf{v}} f(x_0,y_0) = \\lim_{t \\to 0} \\frac{f(x_0+tv_1,\\ y_0+tv_2) - f(x_0,y_0)}{t}$$
  <p>Misura la pendenza di $f$ in direzione $\\mathbf{v}$.</p>
</div>
</div>

<div class="fade">
<div class="box thm">
  <div class="box-label">FORMULA DEL GRADIENTE</div>
  <div class="box-title">Calcolo della derivata direzionale</div>
  <p>Se $f$ è <strong>differenziabile</strong> in $(x_0,y_0)$, allora per ogni versore $\\mathbf{v}$:</p>
  $$D_{\\mathbf{v}} f(x_0,y_0) = \\nabla f(x_0,y_0) \\cdot \\mathbf{v}$$
  <p>Cioè il prodotto scalare del gradiente per il versore.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">PROPRIETÀ</div>
  <div class="box-title">Significato del gradiente</div>
  <p>— $\\nabla f$ punta nella direzione di <strong>massima crescita</strong> di $f$.</p>
  <p>— $-\\nabla f$ punta nella direzione di massima decrescita.</p>
  <p>— $\\|\\nabla f\\|$ è il valore della massima derivata direzionale.</p>
  <p>— Il gradiente è <strong>perpendicolare</strong> alle curve di livello.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Derivata direzionale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Per $f(x,y) = x^2+3xy+y^2$ calcola la derivata direzionale in $(1,2)$ nella direzione del vettore $\\mathbf{u}=(3,4)$.</p></div>
    <div class="ex-sol">
      $$\\nabla f = (2x+3y,\\ 3x+2y),\\quad \\nabla f(1,2) = (8,\\ 7)$$
      <div class="sl">// Versore: ‖u‖=5, v=(3/5, 4/5)</div>
      $$D_{\\mathbf{v}} f(1,2) = (8,7) \\cdot \\left(\\tfrac{3}{5}, \\tfrac{4}{5}\\right) = \\frac{24+28}{5} = \\frac{52}{5}$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Direzione di massima crescita</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Per $f(x,y) = x^2+y^2$ trova la direzione di massima crescita nel punto $(1,1)$ e il valore massimo della derivata direzionale.</p></div>
    <div class="ex-sol">
      $$\\nabla f = (2x, 2y),\\quad \\nabla f(1,1) = (2,2)$$
      <div class="sl">// Direzione di massima crescita: il versore del gradiente</div>
      $$\\mathbf{v}_{\\max} = \\frac{(2,2)}{\\sqrt{8}} = \\left(\\tfrac{1}{\\sqrt{2}}, \\tfrac{1}{\\sqrt{2}}\\right)$$
      $$D_{\\max} = \\|\\nabla f(1,1)\\| = 2\\sqrt{2}$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Gradiente</span><span class="vfscore" id="vfs02">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Il gradiente è perpendicolare alle curve di livello: in ogni punto, la curva di livello è la direzione di variazione nulla, mentre ∇f indica la direzione di massima variazione.">
      <div class="vq-text">1. Il gradiente è sempre perpendicolare alle curve di livello.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: la formula D_v f = ∇f·v vale solo se f è differenziabile. La sola esistenza delle derivate parziali non basta.">
      <div class="vq-text">2. Per ogni $f$ con derivate parziali, vale $D_{\\mathbf{v}} f = \\nabla f \\cdot \\mathbf{v}$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Il valore massimo di D_v f sui versori è ‖∇f‖, ottenuto quando v è il versore del gradiente.">
      <div class="vq-text">3. Il massimo della derivata direzionale è $\\|\\nabla f\\|$.</div>
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
      navLabel: '§03 Differenziabilità e piano tangente',
      heading:  'Differenziabilità e piano tangente',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Differenziabilità</div>
  <p>$f$ è <strong>differenziabile</strong> in $(x_0,y_0)$ se esistono $f_x(x_0,y_0)$, $f_y(x_0,y_0)$ e</p>
  $$\\lim_{(h,k)\\to(0,0)} \\frac{f(x_0+h,y_0+k) - f(x_0,y_0) - f_x(x_0,y_0)h - f_y(x_0,y_0)k}{\\sqrt{h^2+k^2}} = 0$$
  <p>Significato: $f$ può essere approssimata localmente con un piano (l'approssimazione lineare), con errore che va a zero più rapidamente della distanza.</p>
</div>
</div>

<div class="fade">
<div class="box thm">
  <div class="box-label">TEOREMA DEL DIFFERENZIALE TOTALE</div>
  <div class="box-title">Condizione sufficiente</div>
  <p>Se $f_x$ e $f_y$ esistono in un intorno di $(x_0,y_0)$ e sono <strong>continue</strong> in $(x_0,y_0)$, allora $f$ è differenziabile in $(x_0,y_0)$.</p>
  <p><strong>Conseguenza pratica</strong>: se $f$ è di classe $C^1$ (derivate parziali continue), è automaticamente differenziabile.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">CATENA IMPLICAZIONI</div>
  <div class="box-title">Gerarchia delle proprietà</div>
  <p>$$C^1 \\implies \\text{differenziabile} \\implies \\text{continua e derivabile parzialmente}$$</p>
  <p>Le implicazioni inverse sono <strong>false</strong>: esistono funzioni differenziabili ma non $C^1$, e funzioni con derivate parziali ma non differenziabili (e nemmeno continue).</p>
</div>
</div>

<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Piano tangente</div>
  <p>Se $f$ è differenziabile in $(x_0,y_0)$, il <strong>piano tangente</strong> al grafico in $(x_0,y_0,f(x_0,y_0))$ ha equazione</p>
  $$z = f(x_0,y_0) + f_x(x_0,y_0)(x-x_0) + f_y(x_0,y_0)(y-y_0)$$
  <p>È il piano che meglio approssima la superficie nell'intorno del punto.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Piano tangente</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova il piano tangente al grafico di $f(x,y) = x^2+y^2$ nel punto $(1,2)$.</p></div>
    <div class="ex-sol">
      $$f(1,2) = 1+4 = 5$$
      $$f_x = 2x \\implies f_x(1,2) = 2,\\quad f_y = 2y \\implies f_y(1,2) = 4$$
      $$z = 5 + 2(x-1) + 4(y-2) = 2x+4y - 5$$
      <div class="sl">// Piano tangente: z = 2x + 4y - 5</div>
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Approssimazione lineare</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Usa l'approssimazione lineare di $f(x,y)=\\sqrt{x^2+y^2}$ in $(3,4)$ per stimare $\\sqrt{(3{,}05)^2+(3{,}9)^2}$.</p></div>
    <div class="ex-sol">
      $$f(3,4)=5,\\quad f_x = \\frac{x}{\\sqrt{x^2+y^2}},\\ f_y = \\frac{y}{\\sqrt{x^2+y^2}}$$
      $$f_x(3,4)=\\tfrac{3}{5},\\quad f_y(3,4)=\\tfrac{4}{5}$$
      $$f(x,y) \\approx 5 + \\tfrac{3}{5}(x-3) + \\tfrac{4}{5}(y-4)$$
      $$f(3{,}05,\\ 3{,}9) \\approx 5 + 0{,}6\\cdot 0{,}05 + 0{,}8\\cdot(-0{,}1) = 5 + 0{,}03 - 0{,}08 = 4{,}95$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Differenziabilità</span><span class="vfscore" id="vfs03">0/3</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Differenziabile ⇒ continua: la differenziabilità è una condizione più forte della sola continuità.">
      <div class="vq-text">1. Se $f$ è differenziabile in $(x_0,y_0)$, allora $f$ è continua in $(x_0,y_0)$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Teorema del differenziale totale: f_x, f_y continue in un intorno ⇒ f differenziabile (condizione sufficiente, non necessaria).">
      <div class="vq-text">2. Se le derivate parziali di $f$ sono continue in un intorno di $(x_0,y_0)$, allora $f$ è differenziabile in $(x_0,y_0)$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: l'esistenza delle derivate parziali in un punto non implica la differenziabilità (né la continuità).">
      <div class="vq-text">3. L'esistenza di $f_x$ e $f_y$ in $(x_0,y_0)$ implica la differenziabilità in $(x_0,y_0)$.</div>
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
      navLabel: '§04 Derivate seconde · Schwarz · Quiz',
      heading:  'Derivate seconde, teorema di Schwarz e quiz',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Derivate parziali seconde</div>
  <p>Le <strong>derivate parziali seconde</strong> sono le derivate parziali di $f_x$ e $f_y$:</p>
  $$f_{xx} = \\frac{\\partial^2 f}{\\partial x^2},\\quad f_{yy} = \\frac{\\partial^2 f}{\\partial y^2}$$
  $$f_{xy} = \\frac{\\partial^2 f}{\\partial y \\partial x} = \\frac{\\partial}{\\partial y}(f_x),\\quad f_{yx} = \\frac{\\partial^2 f}{\\partial x \\partial y} = \\frac{\\partial}{\\partial x}(f_y)$$
  <p>$f_{xy}$ e $f_{yx}$ si chiamano <strong>derivate miste</strong>.</p>
</div>
</div>

<div class="fade">
<div class="box thm">
  <div class="box-label">TEOREMA DI SCHWARZ</div>
  <div class="box-title">Inversione dell'ordine di derivazione</div>
  <p>Se $f_{xy}$ e $f_{yx}$ esistono in un intorno di $(x_0,y_0)$ e sono <strong>continue</strong> in $(x_0,y_0)$, allora</p>
  $$f_{xy}(x_0,y_0) = f_{yx}(x_0,y_0)$$
  <p><strong>Conseguenza</strong>: per le funzioni di classe $C^2$, le derivate miste coincidono. L'ordine di derivazione non conta.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Verifica del teorema di Schwarz</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Per $f(x,y) = x^3 y^2 + \\sin(xy)$ calcola $f_{xy}$ e $f_{yx}$.</p></div>
    <div class="ex-sol">
      $$f_x = 3x^2 y^2 + y\\cos(xy),\\quad f_y = 2x^3 y + x\\cos(xy)$$
      $$f_{xy} = \\partial_y(f_x) = 6x^2 y + \\cos(xy) - xy\\sin(xy)$$
      $$f_{yx} = \\partial_x(f_y) = 6x^2 y + \\cos(xy) - xy\\sin(xy)$$
      <div class="sl">// f_xy = f_yx come previsto da Schwarz: f è C² ovunque</div>
    </div>
  </div>
</div>

<div class="quiz fade">
  <div class="quiz-hdr"><span>QUIZ RIEPILOGO FINALE</span><span class="qscore" id="sc_fin">0/5</span></div>
  <div class="quiz-body">
    <div class="qq" data-ok="b" data-why="f_x: deriva rispetto a x trattando y costante. ∂/∂x(x²y³) = 2xy³, ∂/∂x(2y) = 0.">
      <div class="qq-text">1. Per $f(x,y) = x^2 y^3 + 2y$, $f_x$ vale:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr1"> $3x^2 y^2 + 2$</label>
        <label class="opt"><input type="radio" name="qr1"> $2xy^3$</label>
        <label class="opt"><input type="radio" name="qr1"> $2xy^3 + 2$</label>
        <label class="opt"><input type="radio" name="qr1"> $x^2 \\cdot 3y^2$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="d" data-why="∇f=(f_x, f_y)=(2x, 2y), ∇f(1,1)=(2,2). D_v f = ∇f·v = (2,2)·(1/√2, 1/√2) = 4/√2 = 2√2.">
      <div class="qq-text">2. Per $f(x,y) = x^2+y^2$ in $(1,1)$, la derivata direzionale lungo $\\mathbf{v} = (1/\\sqrt{2}, 1/\\sqrt{2})$ vale:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr2"> $0$</label>
        <label class="opt"><input type="radio" name="qr2"> $\\sqrt{2}$</label>
        <label class="opt"><input type="radio" name="qr2"> $4$</label>
        <label class="opt"><input type="radio" name="qr2"> $2\\sqrt{2}$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="c" data-why="Piano tangente: z = f(x₀,y₀) + f_x(x-x₀) + f_y(y-y₀). Per f=xy in (1,2): f(1,2)=2, f_x=y=2, f_y=x=1. z = 2 + 2(x-1) + 1(y-2) = 2x + y - 2.">
      <div class="qq-text">3. Il piano tangente a $z = xy$ nel punto $(1,2)$ ha equazione:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr3"> $z = 2x+y$</label>
        <label class="opt"><input type="radio" name="qr3"> $z = x+2y-3$</label>
        <label class="opt"><input type="radio" name="qr3"> $z = 2x+y-2$</label>
        <label class="opt"><input type="radio" name="qr3"> $z = xy + 2$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="a" data-why="Schwarz: se le derivate miste sono continue, allora f_xy = f_yx. Per le funzioni C², l'ordine di derivazione non conta.">
      <div class="qq-text">4. Il teorema di Schwarz garantisce che $f_{xy} = f_{yx}$ se:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr4"> $f_{xy}$ e $f_{yx}$ sono continue</label>
        <label class="opt"><input type="radio" name="qr4"> $f$ è continua</label>
        <label class="opt"><input type="radio" name="qr4"> $f$ è limitata</label>
        <label class="opt"><input type="radio" name="qr4"> Esistono $f_x$ e $f_y$</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="b" data-why="Il gradiente indica la direzione di massima crescita; il suo modulo è il valore massimo della derivata direzionale.">
      <div class="qq-text">5. Il gradiente $\\nabla f$ in un punto:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr5"> È sempre tangente alle curve di livello</label>
        <label class="opt"><input type="radio" name="qr5"> Indica la direzione di massima crescita di $f$</label>
        <label class="opt"><input type="radio" name="qr5"> Indica la direzione in cui $f$ è costante</label>
        <label class="opt"><input type="radio" name="qr5"> Ha sempre modulo $1$</label>
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
