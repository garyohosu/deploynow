const cards = [
  {
    name: "愚者",
    upright: "新しい一歩。軽やかに始めるほど流れが開きます。",
    reversed: "勢いだけで進むと空回り。足元の確認を。",
    advice: "完璧さより、まず試すことを優先して。",
  },
  {
    name: "魔術師",
    upright: "言葉と行動が噛み合う日。提案や発信に強さがあります。",
    reversed: "準備不足のまま動くと伝わりにくい。整理が先。",
    advice: "ひとつの強みをはっきり見せると効きます。",
  },
  {
    name: "女教皇",
    upright: "静かな直感が冴えます。答えは急がず待って。",
    reversed: "考えすぎで動けないかも。小さな行動に切り替えて。",
    advice: "今日は“静観して見抜く”が勝ち筋です。",
  },
  {
    name: "女帝",
    upright: "育てる力が強い日。人や企画を豊かにできます。",
    reversed: "甘やかしすぎ、または詰め込みすぎに注意。",
    advice: "心地よさを整えると全体が回りやすくなります。",
  },
  {
    name: "皇帝",
    upright: "方針が決まる日。迷うより決めると流れが安定します。",
    reversed: "強引さが出やすいので、相手の余地も残して。",
    advice: "ルールと段取りを先に置くと強いです。",
  },
  {
    name: "教皇",
    upright: "信頼できる助言が鍵。経験者の一言が役立ちます。",
    reversed: "常識に縛られすぎていないか見直して。",
    advice: "独断より、信頼できる知恵を借りるのが吉。",
  },
  {
    name: "恋人",
    upright: "選択の質が運勢を変える日。気持ちに正直で。",
    reversed: "優先順位が揺れやすい。曖昧な返事は避けて。",
    advice: "大事なのは“何を選ぶか”より“何を選ばないか”。",
  },
  {
    name: "戦車",
    upright: "勢いと集中力が出ます。短期決戦に向いています。",
    reversed: "急ぎすぎて周囲とずれるかも。速度を少し落として。",
    advice: "ゴールを一つに絞ると突破力が増します。",
  },
  {
    name: "力",
    upright: "やさしさが強さになる日。丁寧な対応が効きます。",
    reversed: "我慢のしすぎで疲れが出やすい。休息も戦略。",
    advice: "押すより、落ち着いて整えるほうが成果につながります。",
  },
  {
    name: "隠者",
    upright: "ひとり時間が答えをくれます。深く考えるほど整う。",
    reversed: "閉じこもりすぎに注意。外の声も少し入れて。",
    advice: "今日は情報を減らすと、見えるものが増えます。",
  },
  {
    name: "運命の輪",
    upright: "流れが変わる兆し。偶然のチャンスを見逃さないで。",
    reversed: "タイミング待ちが長引くかも。準備を先に。",
    advice: "変化に乗るために、身軽さを保って。",
  },
  {
    name: "正義",
    upright: "判断が冴えます。事実ベースで決めると安心です。",
    reversed: "片側だけで見てしまうかも。公平さを取り戻して。",
    advice: "感情は大事、でも結論は公平さで。",
  },
  {
    name: "吊るされた男",
    upright: "いったん止まることで見える景色があります。",
    reversed: "停滞感に焦りが出やすい。視点を変えるのが先。",
    advice: "今日は“進める”より“見直す”が有利です。",
  },
  {
    name: "死神",
    upright: "切り替えの時期。終わるものを終わらせると軽くなります。",
    reversed: "手放し切れず停滞しがち。少しずつ区切って。",
    advice: "終わりは悪いことではなく、更新の入口です。",
  },
  {
    name: "節制",
    upright: "ちょうどよさが鍵。無理なく続く形に整えると吉。",
    reversed: "偏りが出やすい日。極端な判断は避けて。",
    advice: "足し算より、バランス調整で運が整います。",
  },
  {
    name: "悪魔",
    upright: "誘惑や依存に気づくチャンス。切り離すと楽になります。",
    reversed: "縛りから抜ける兆し。小さな解放を大切に。",
    advice: "“本当に必要？”を一度だけ自分に聞いて。",
  },
  {
    name: "塔",
    upright: "想定外の変化。でも壊れることで真実が見えます。",
    reversed: "崩れる前に修正できるサイン。早めの見直しを。",
    advice: "急変はショックでも、無駄なものを壊してくれます。",
  },
  {
    name: "星",
    upright: "希望が戻る日。未来のイメージがやさしく広がります。",
    reversed: "理想が遠く感じるかも。小さな希望から再点火を。",
    advice: "大きくなくていい。光っている方向を見て。",
  },
  {
    name: "月",
    upright: "不確かさが強い日。答えはまだ輪郭の外にあります。",
    reversed: "不安の正体が少し見えてきます。確認を重ねて。",
    advice: "曖昧なときほど、直感と事実を両方見ると安心。",
  },
  {
    name: "太陽",
    upright: "明るい流れ。素直さとオープンさがそのまま追い風に。",
    reversed: "元気はあるのに空回りしやすい。シンプルに行こう。",
    advice: "難しく考えすぎず、今ある楽しさを拾って。",
  },
  {
    name: "審判",
    upright: "再スタートの合図。過去の経験が今つながります。",
    reversed: "判断が遅れがち。決めるタイミングを逃さないで。",
    advice: "振り返りが、次の一歩を軽くします。",
  },
  {
    name: "世界",
    upright: "ひと区切りの完成。やってきたことが形になります。",
    reversed: "あと一歩で完成。詰めを丁寧にすると整います。",
    advice: "最後の微調整が、満足度を大きく変えます。",
  },
];

const positions = [
  { label: "過去", key: "past" },
  { label: "現在", key: "present" },
  { label: "未来", key: "future" },
];

const cardsEl = document.getElementById("cards");
const drawButton = document.getElementById("drawButton");
const resetButton = document.getElementById("resetButton");
const summaryEl = document.getElementById("summary");
const adviceEl = document.getElementById("advice");
const readingDateEl = document.getElementById("readingDate");

const today = new Date();
readingDateEl.textContent = today.toLocaleDateString("ja-JP", {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "short",
});

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildReading() {
  const picked = shuffle(cards).slice(0, 3).map((card) => ({
    ...card,
    reversed: Math.random() < 0.35,
  }));

  const rendered = picked
    .map((card, index) => {
      const pos = positions[index];
      const meaning = card.reversed ? card.reversed : card.upright;
      const orientation = card.reversed ? "逆位置" : "正位置";
      return `
        <article class="tarot-card reveal">
          <div class="pos">${pos.label}</div>
          <div>
            <div class="name">${card.name}</div>
            <p class="meaning">${meaning}</p>
          </div>
          <div class="orientation">${orientation}</div>
        </article>
      `;
    })
    .join("");

  cardsEl.innerHTML = rendered;

  const opening = picked[0].reversed ? picked[0].reversed : picked[0].upright;
  const middle = picked[1].reversed ? picked[1].reversed : picked[1].upright;
  const closing = picked[2].reversed ? picked[2].reversed : picked[2].upright;

  summaryEl.textContent = `${picked[0].name} → ${picked[1].name} → ${picked[2].name}。${opening} ${middle} ${closing}`;
  adviceEl.textContent = picked[1].advice;
}

function resetReading() {
  cardsEl.innerHTML = `
    <article class="tarot-card placeholder">
      <span>1</span>
      <p>過去</p>
    </article>
    <article class="tarot-card placeholder">
      <span>2</span>
      <p>現在</p>
    </article>
    <article class="tarot-card placeholder">
      <span>3</span>
      <p>未来</p>
    </article>
  `;
  summaryEl.textContent = "「占う」を押すと、今日の流れが表示されます。";
  adviceEl.textContent = "迷ったら、まずは深呼吸。答えは静かなほうにあります。";
}

drawButton.addEventListener("click", buildReading);
resetButton.addEventListener("click", resetReading);

resetReading();
