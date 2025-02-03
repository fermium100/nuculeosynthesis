// 元素の定義（原子番号、元素記号、価格）
const elements = [
    { number: 1, symbol: 'H', price: 1 },
    { number: 2, symbol: 'He', price: 2 },
    { number: 3, symbol: 'Li', price: 10 },
    { number: 4, symbol: 'Be', price: 80 },
    { number: 5, symbol: 'B', price: 50 },
    { number: 6, symbol: 'C', price: 1 },
    { number: 7, symbol: 'N', price: 1 },
    { number: 8, symbol: 'O', price: 1 },
    { number: 9, symbol: 'F', price: 100 },
    { number: 10, symbol: 'Ne', price: 10 },
    { number: 11, symbol: 'Na', price: 1 },
    { number: 12, symbol: 'Mg', price: 1 },
    { number: 13, symbol: 'Al', price: 1 },
    { number: 14, symbol: 'Si', price: 1 },
    { number: 15, symbol: 'P', price: 1 },
    { number: 16, symbol: 'S', price: 1 },
    { number: 17, symbol: 'Cl', price: 1 },
    { number: 18, symbol: 'Ar', price: 1 },
    { number: 19, symbol: 'K', price: 2 },
    { number: 20, symbol: 'Ca', price: 1 },
    { number: 21, symbol: 'Sc', price: 310 },
    { number: 22, symbol: 'Ti', price: 6 },
    { number: 23, symbol: 'V', price: 38 },
    { number: 24, symbol: 'Cr', price: 1 },
    { number: 25, symbol: 'Mn', price: 1 },
    { number: 26, symbol: 'Fe', price: 1 },
    { number: 27, symbol: 'Co', price: 4 },
    { number: 28, symbol: 'Ni', price: 3 },
    { number: 29, symbol: 'Cu', price: 2 },
    { number: 30, symbol: 'Zn', price: 1 },
    { number: 31, symbol: 'Ga', price: 14 },
    { number: 32, symbol: 'Ge', price: 100 },
    { number: 33, symbol: 'As', price: 1 },
    { number: 34, symbol: 'Se', price: 3 },
    { number: 35, symbol: 'Br', price: 1 },
    { number: 36, symbol: 'Kr', price: 100 },
    { number: 37, symbol: 'Rb', price: 3500 },
    { number: 38, symbol: 'Sr', price: 24 },
    { number: 39, symbol: 'Y', price: 3 },
    { number: 40, symbol: 'Zr', price: 5 },
    { number: 41, symbol: 'Nb', price: 4 },
    { number: 42, symbol: 'Mo', price: 4 },
    { number: 43, symbol: 'Tc', price: 1000 },
    { number: 44, symbol: 'Ru', price: 980 },
    { number: 45, symbol: 'Rh', price: 9000 },
    { number: 46, symbol: 'Pd', price: 4700 },
    { number: 47, symbol: 'Ag', price: 52 },
    { number: 48, symbol: 'Cd', price: 1 },
    { number: 49, symbol: 'In', price: 110 },
    { number: 50, symbol: 'Sn', price: 5 },
    { number: 51, symbol: 'Sb', price: 1 },
    { number: 52, symbol: 'Te', price: 6 },
    { number: 53, symbol: 'I', price: 1 },
    { number: 54, symbol: 'Xe', price: 1000 },
    { number: 55, symbol: 'Cs', price: 3700 },
    { number: 56, symbol: 'Ba', price: 18 },
    { number: 57, symbol: 'La', price: 1 },
    { number: 58, symbol: 'Ce', price: 1 },
    { number: 59, symbol: 'Pr', price: 10 },
    { number: 60, symbol: 'Nd', price: 6 },
    { number: 61, symbol: 'Pm', price: 1 },
    { number: 62, symbol: 'Sm', price: 2 },
    { number: 63, symbol: 'Eu', price: 84 },
    { number: 64, symbol: 'Gd', price: 1600 },
    { number: 65, symbol: 'Tb', price: 64 },
    { number: 66, symbol: 'Dy', price: 33 },
    { number: 67, symbol: 'Ho', price: 26 },
    { number: 68, symbol: 'Er', price: 1940 },
    { number: 69, symbol: 'Tm', price: 95 },
    { number: 70, symbol: 'Yb', price: 19 },
    { number: 71, symbol: 'Lu', price: 350 },
    { number: 72, symbol: 'Hf', price: 600 },
    { number: 73, symbol: 'Ta', price: 15 },
    { number: 74, symbol: 'W', price: 4 },
    { number: 75, symbol: 'Re', price: 280 },
    { number: 76, symbol: 'Os', price: 1400 },
    { number: 77, symbol: 'Ir', price: 5200 },
    { number: 78, symbol: 'Pt', price: 2900 },
    { number: 79, symbol: 'Au', price: 4700 },
    { number: 80, symbol: 'Hg', price: 6 },
    { number: 81, symbol: 'Tl', price: 54 },
    { number: 82, symbol: 'Pb', price: 1 },
    { number: 83, symbol: 'Bi', price: 2 },
    { number: 84, symbol: 'Po', price: 1 },
    { number: 85, symbol: 'At', price: 1 },
    { number: 86, symbol: 'Rn', price: 10000 },
    { number: 87, symbol: 'Fr', price: 870 },
    { number: 88, symbol: 'Ra', price: 880 },
    { number: 89, symbol: 'Ac', price: 890 },
    { number: 90, symbol: 'Th', price: 900 },
    { number: 91, symbol: 'Pa', price: 910 },
    { number: 92, symbol: 'U', price: 920 },
    { number: 93, symbol: 'Np', price: 930 },
    { number: 94, symbol: 'Pu', price: 940 },
    { number: 95, symbol: 'Am', price: 950 },
    { number: 96, symbol: 'Cm', price: 960 },
    { number: 97, symbol: 'Bk', price: 970 },
    { number: 98, symbol: 'Cf', price: 980 },
    { number: 99, symbol: 'Es', price: 990 },
    { number: 100, symbol: 'Fm', price: 1000 },
    { number: 101, symbol: 'Md', price: 1010 },
    { number: 102, symbol: 'No', price: 1020 },
    { number: 103, symbol: 'Lr', price: 1030 },
    { number: 104, symbol: 'Rf', price: 1040 },
    { number: 105, symbol: 'Db', price: 1050 },
    { number: 106, symbol: 'Sg', price: 1060 },
    { number: 107, symbol: 'Bh', price: 1070 },
    { number: 108, symbol: 'Hs', price: 1080 },
    { number: 109, symbol: 'Mt', price: 1090 },
    { number: 110, symbol: 'Ds', price: 1100 },
    { number: 111, symbol: 'Rg', price: 1110 },
    { number: 112, symbol: 'Cn', price: 1120 },
    { number: 113, symbol: 'Nh', price: 1130 },
    { number: 114, symbol: 'Fl', price: 1140 },
    { number: 115, symbol: 'Mc', price: 1150 },
    { number: 116, symbol: 'Lv', price: 1160 },
    { number: 117, symbol: 'Ts', price: 1170 },
    { number: 118, symbol: 'Og', price: 1000000 }
];
// 元素の定義（原子番号、元素記号、価格 [単位: ゲーム内通貨]）
// const elements = [
//     { number: 1, symbol: 'H', price: 0.0001 },    // 水素
//     { number: 2, symbol: 'He', price: 0.0002 },   // ヘリウム
//     { number: 3, symbol: 'Li', price: 10 },       // リチウム
//     { number: 4, symbol: 'Be', price: 100 },      // ベリリウム
//     { number: 5, symbol: 'B', price: 5 },         // ホウ素
//     { number: 6, symbol: 'C', price: 1 },         // 炭素（黒鉛）
//     { number: 6, symbol: 'C (ダイヤモンド)', price: 55000 }, // 炭素（ダイヤモンド）
//     { number: 7, symbol: 'N', price: 0.0001 },    // 窒素
//     { number: 8, symbol: 'O', price: 0.0001 },    // 酸素
//     { number: 9, symbol: 'F', price: 190 },       // フッ素
//     { number: 10, symbol: 'Ne', price: 0.30 },    // ネオン
//     { number: 11, symbol: 'Na', price: 0.15 },    // ナトリウム
//     { number: 12, symbol: 'Mg', price: 0.02 },    // マグネシウム
//     { number: 13, symbol: 'Al', price: 0.0018 },  // アルミニウム
//     { number: 14, symbol: 'Si', price: 0.0006 },  // ケイ素
//     { number: 15, symbol: 'P', price: 0.002 },    // リン
//     { number: 16, symbol: 'S', price: 0.0005 },   // 硫黄
//     { number: 17, symbol: 'Cl', price: 0.10 },    // 塩素
//     { number: 18, symbol: 'Ar', price: 0.05 },    // アルゴン
//     { number: 19, symbol: 'K', price: 0.75 },     // カリウム
//     { number: 20, symbol: 'Ca', price: 0.02 },    // カルシウム
//     { number: 22, symbol: 'Ti', price: 6 },       // チタン
//     { number: 24, symbol: 'Cr', price: 0.20 },    // クロム
//     { number: 25, symbol: 'Mn', price: 0.15 },    // マンガン
//     { number: 26, symbol: 'Fe', price: 0.0005 },  // 鉄
//     { number: 28, symbol: 'Ni', price: 0.006 },   // ニッケル
//     { number: 29, symbol: 'Cu', price: 0.009 },   // 銅
//     { number: 30, symbol: 'Zn', price: 0.003 },   // 亜鉛
//     { number: 47, symbol: 'Ag', price: 0.80 },    // 銀
//     { number: 50, symbol: 'Sn', price: 0.018 },   // スズ
//     { number: 53, symbol: 'I', price: 0.25 },     // ヨウ素
//     { number: 74, symbol: 'W', price: 0.02 },     // タングステン
//     { number: 78, symbol: 'Pt', price: 35 },      // 白金
//     { number: 79, symbol: 'Au', price: 60 },      // 金
//     { number: 80, symbol: 'Hg', price: 0.85 },    // 水銀
//     { number: 82, symbol: 'Pb', price: 0.002 },   // 鉛
//     { number: 92, symbol: 'U', price: 0.10 },     // ウラン
//     { number: 94, symbol: 'Pu', price: 4000 },    // プルトニウム
//     { number: 118, symbol: 'Og', price: 1000000 } // オガネソン（架空の高値）
// ];

// アクションカードの定義を修正
const actionCards = [
    '中性子線照射', 'α崩壊', '核融合', '核分裂', 
    '元素ガチャ', '元素ガチャ', // 元素ガチャを2回追加
    '科研費獲得'
];

// 豆知識の定義を追加
const trivia = {
    '中性子線照射': [
        '中性子線照射は原子炉で新しい元素を作る方法の一つです。',
        '中性子線照射により、ウランから新しい元素のプルトニウムが発見されました。',
        '中性子を吸収した原子核は、不安定になりやすい性質があります。',
        '原子力発電所では、制御された中性子線照射により核分裂反応を維持します。',
        '中性子線は電荷を持たないため、原子核に近づきやすい特徴があります。',
        '中性子線照射は、物質の性質を調べる研究にも使われています。',
        '医療分野では、中性子線を使ったがん治療も研究されています。',
        '自然界でも宇宙線による中性子線照射が起きています。',
        '中性子線照射による突然変異は、品種改良にも利用されています。',
        '中性子線は物質を透過しやすい性質があります。'
    ],
    'α崩壊': [
        'α崩壊ではヘリウム原子核（α粒子）が放出されます。',
        'α崩壊は重い原子核で自然に起こる現象です。',
        'α線は紙一枚で遮断できるほど透過力が弱いです。',
        'ラジウムの発見は、α崩壊の研究から始まりました。',
        'α崩壊では原子番号が2つ減少します。',
        '質量数は4つ減少します。',
        'α崩壊は放射性元素の半減期に関係します。',
        'α線は電離作用が強い特徴があります。',
        '自然界に存在するラドンは、α崩壊を起こします。',
        'α崩壊は核図表で予測可能です。'
    ],
    '核融合': [
        '核融合は太陽がエネルギーを生み出す仕組みです。',
        '核融合には超高温（1億度以上）が必要です。',
        '水素の核融合でヘリウムが生まれます。',
        '核融合は、原子力発電の次世代エネルギーとして期待されています。',
        'ITERは国際核融合実験炉のプロジェクトです。',
        '核融合では質量が減少し、エネルギーに変換されます。',
        '地球上で最初の核融合実験は1950年代に行われました。',
        '核融合は宇宙の元素合成の主要なプロセスです。',
        '核融合炉の実用化には、プラズマの制御が課題です。',
        '重水素と三重水素の核融合が、最も起こりやすいとされています。'
    ],
    '核分裂': [
        '核分裂は原子力発電所でエネルギーを取り出す原理です。',
        'ウラン235は核分裂を起こしやすい元素です。',
        '核分裂では中性子が放出され、連鎖反応が起こります。',
        '制御された核分裂反応により、安定したエネルギー供給が可能です。',
        '核分裂は1938年にドイツで発見されました。',
        '核分裂では質量欠損によりエネルギーが放出されます。',
        '原子炉では減速材を使って中性子の速度を制御します。',
        '核分裂生成物には放射性物質が含まれます。',
        '核分裂の制御には制御棒が使用されます。',
        '自然界でも核分裂は起きています（オクロ天然原子炉）。'
    ],
    '元素ガチャ': [
        '周期表は1869年にメンデレーエフにより提案されました。',
        '現在確認されている最も重い元素は原子番号118のオガネソンです。',
        '人工元素は原子番号95以降のすべての元素です。',
        '希少元素のレアアースは、現代技術に不可欠です。',
        '元素記号は世界共通の科学言語です。',
        '日本人の名前が付いた元素はニホニウム（Nh）です。',
        '周期表は元素の性質の周期性を示しています。',
        '超重元素は非常に不安定で、すぐに崩壊します。',
        '元素の周期表は、化学の発展に大きく貢献しました。',
        '新元素の発見には加速器が使用されます。'
    ],
    '科研費獲得': [
        '科研費は日本の学術研究を支える重要な研究費です。',
        '科研費の採択率は約30%程度です。',
        '若手研究者向けの研究費カテゴリーもあります。',
        '科研費は1939年に設立された制度です。',
        '科研費は競争的研究資金の代表例です。',
        '年間予算は約2,000億円規模です。',
        '科研費は基礎研究を支援する重要な制度です。',
        '研究成果は一般公開が原則です。',
        '国際共同研究も支援対象です。',
        '分野を問わず幅広い研究を支援しています。'
    ]
};

// アクションカード画像のマッピングを追加
const ACTION_CARD_IMAGES = {
    '中性子線照射': 'neutronIrradiation.png',
    'α崩壊': 'alphaDecay.png',
    '核融合': 'nuclearFusion.png',
    '核分裂': 'nuclearFission.png',
    '元素ガチャ': 'elementGacha.png',
    '科研費獲得': 'grantFunding.png'
};

// アクションカードの種類を定義
const ACTION_TYPES = {
    '中性子線照射': 'requires_element',
    'α崩壊': 'requires_element',
    '核融合': 'requires_elements',
    '核分裂': 'requires_element',
    '元素ガチャ': 'instant',
    '科研費獲得': 'instant'
};

// プレイヤーの手札と場
let playerHand = [];
let playerField = [{ number: 1, symbol: 'H', price: 1 }]; // 初期は水素

// 研究費
let researchFunding = 100;

// 選択中の元素カードのインデックス
let selectedElementIndices = [];

// 現在使用中のアクションカードのインデックス
let currentActionCardIndex = null;

// 通知を管理するためのグローバル変数を追加
let notifications = [];
let notificationCounter = 0;

// 難易度設定
let currentDifficulty = 'hard'; // デフォルトはハードモード

// 難易度に応じた初期研究費を設定
const INITIAL_FUNDING = {
    easy: 10000,
    normal: 1000,
    hard: 100
};

// 手札の上限を管理する変数を追加
let handLimit = 5;

// 手札拡張の価格を定義
const EXPANSION_COSTS = [1000, 10000, 100000, 1000000];

// 手札拡張の価格を取得する関数
function getExpansionCost(currentLimit) {
    if (currentLimit < 8) {
        return EXPANSION_COSTS[currentLimit - 5];
    }
    return 1000000; // 8枚以降は常に100万
}

// 難易度設定関数を修正
function setDifficulty(difficulty) {
    currentDifficulty = difficulty;
    
    // 難易度選択画面を非表示に
    document.getElementById('difficulty-select').style.display = 'none';
    
    // ゲームボードとリセットボタンを表示
    document.getElementById('game-board').style.display = 'block';
    document.getElementById('reset-container').style.display = 'block';
    
    // ゲーム状態の初期化
    playerHand = [];
    playerField = [{ number: 1, symbol: 'H', price: 1 }];
    researchFunding = INITIAL_FUNDING[difficulty];
    currentActionCardIndex = null;
    selectedElementIndices = [];
    handLimit = 5;

    // 初期手札を5枚引く
    for (let i = 0; i < 5; i++) {
        drawActionCard();
    }

    // ゲームボードを更新
    updateGameBoard();

    // 手札関連の要素をリセット
    const handCountElement = document.getElementById('hand-count');
    const expandButton = document.getElementById('expand-hand-button');
    handCountElement.setAttribute('data-hand-limit', '5');
    expandButton.setAttribute('data-current-limit', '5');
}

// ゲームボードを更新
updateGameBoard();

// リセットボタンのイベントリスナー
document.getElementById('reset-button').addEventListener('click', () => {
    resetGame();
});

// アクションカードを引く関数を修正
function drawActionCard() {
    console.log('drawActionCard called'); // デバッグ用ログ
    
    if (playerHand.length >= handLimit) {
        showNotification(`手札が上限（${handLimit}枚）に達しています。`, 'error');
        return false;
    }

    // 各アクションカードの所持数をカウント
    const cardCounts = {};
    playerHand.forEach(card => {
        cardCounts[card] = (cardCounts[card] || 0) + 1;
    });

    // 3枚未満のカードのみを抽選対象にする
    const availableCards = actionCards.filter(card => 
        !cardCounts[card] || cardCounts[card] < 3
    );

    if (availableCards.length === 0) {
        showNotification('これ以上獲得可能なカードがありません。', 'error');
        return false;
    }

    const randomIndex = Math.floor(Math.random() * availableCards.length);
    const card = availableCards[randomIndex];
    playerHand.push(card);
    return true;
}

// ゲームボードを更新する関数
function updateGameBoard() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';

    // 元素価格リストの表示（折りたたみ可能）
    const priceListContainer = document.createElement('div');
    priceListContainer.className = 'price-list-container';
    
    // 折りたたみボタンの作成
    const toggleButton = document.createElement('button');
    toggleButton.className = 'toggle-price-list';
    toggleButton.innerText = '価格表を表示';
    
    // 価格表本体
    const priceListDiv = document.createElement('div');
    priceListDiv.className = 'price-list';
    priceListDiv.style.display = 'none'; // 初期状態では非表示
    
    const priceTable = document.createElement('div');
    priceTable.className = 'price-table';
    elements.forEach(element => {
        const elementPrice = document.createElement('div');
        elementPrice.className = 'element-price';
        elementPrice.innerHTML = `${element.number}. ${element.symbol}: ¥${element.price}`;
        priceTable.appendChild(elementPrice);
    });
    
    // トグルボタンのクリックイベント
    toggleButton.addEventListener('click', () => {
        const isHidden = priceListDiv.style.display === 'none';
        priceListDiv.style.display = isHidden ? 'block' : 'none';
        toggleButton.innerText = isHidden ? '価格表を隠す' : '価格表を表示';
    });
    
    priceListDiv.appendChild(priceTable);
    priceListContainer.appendChild(toggleButton);
    priceListContainer.appendChild(priceListDiv);
    gameBoard.appendChild(priceListContainer);

    // 研究費の表示を更新
    document.getElementById('research-funding').innerText = `研究費: ${researchFunding}`;

    // 場の元素カードを表示
    const fieldDiv = document.createElement('div');
    fieldDiv.className = 'field-container';
    fieldDiv.innerHTML = '<h3>場の元素:</h3>';
    
    const elementsDiv = document.createElement('div');
    elementsDiv.className = 'elements-container';
    
    // 元素カードを原子番号の降順にソート
    const sortedElements = playerField.slice().sort((a, b) => b.number - a.number);

    sortedElements.forEach((element, index) => {
        // オリジナルのインデックスを取得（アクション実行時に必要）
        const originalIndex = playerField.indexOf(element);
        
        const elementContainer = document.createElement('div');
        elementContainer.className = 'element-container';
        
        const elementDiv = document.createElement('div');
        elementDiv.className = 'element-card';
        if (selectedElementIndices.includes(originalIndex)) {
            elementDiv.classList.add('selected');
        }

        // 画像要素を作成
        const elementImage = document.createElement('img');
        elementImage.src = getElementImage(element.number);
        elementImage.className = 'element-image';
        elementDiv.appendChild(elementImage);

        // 元素情報を表示
        const elementInfo = document.createElement('div');
        elementInfo.className = 'element-info';
        elementInfo.innerHTML = `
            <div class="element-symbol">${element.symbol}</div>
            <div class="element-number">原子番号: ${element.number}</div>
            <div class="element-price">価格: ${element.price}</div>
        `;
        elementContainer.appendChild(elementDiv);
        elementContainer.appendChild(elementInfo);

        // 売却ボタンを追加
        const sellButton = document.createElement('button');
        sellButton.className = 'sell-button';
        sellButton.innerText = '売却';
        sellButton.addEventListener('click', (e) => {
            e.stopPropagation();
            sellElement(originalIndex);
        });
        elementContainer.appendChild(sellButton);

        // クリックイベントリスナーでは originalIndex を使用
        elementDiv.addEventListener('click', () => {
            selectElementCard(originalIndex);
        });
        
        elementDiv.addEventListener('touchend', (e) => {
            e.preventDefault();
            selectElementCard(originalIndex);
        });

        elementsDiv.appendChild(elementContainer);
    });

    fieldDiv.appendChild(elementsDiv);
    gameBoard.appendChild(fieldDiv);

    // 手札の表示部分をクリア
    const handDiv = document.getElementById('hand');
    handDiv.innerHTML = '';
    
    // 既存の手札情報を更新
    const handCountElement = document.getElementById('hand-count');
    handCountElement.innerText = `手札: ${playerHand.length}/${handLimit}`;
    handCountElement.setAttribute('data-hand-limit', handLimit);
    
    // 既存の拡張ボタンを更新
    const expandButton = document.getElementById('expand-hand-button');
    expandButton.innerText = `手札枠を拡張 (¥${getExpansionCost(handLimit).toLocaleString()})`;
    expandButton.setAttribute('data-current-limit', handLimit);
    
    if (researchFunding >= getExpansionCost(handLimit)) {
        expandButton.disabled = false;
        expandButton.classList.remove('disabled');
    } else {
        expandButton.disabled = true;
        expandButton.classList.add('disabled');
    }

    // 手札のカードを表示
    playerHand.forEach((card, index) => {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-container';
        
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        if (currentActionCardIndex === index) {
            cardDiv.classList.add('selected');
        }
        
        // 画像要素を作成
        const cardImage = document.createElement('img');
        cardImage.src = ACTION_CARD_IMAGES[card];
        cardImage.alt = card;
        cardImage.className = 'card-image';
        cardDiv.appendChild(cardImage);

        // カード名を表示
        const cardName = document.createElement('div');
        cardName.className = 'card-name';
        cardName.textContent = card;
        
        // 処分ボタンを追加（カード名の下に配置）
        const discardButton = document.createElement('button');
        discardButton.className = 'discard-button';
        discardButton.innerText = '処分';
        discardButton.addEventListener('click', (e) => {
            e.stopPropagation();
            discardActionCard(index);
        });
        
        cardDiv.addEventListener('click', () => {
            selectActionCard(index);
        });
        
        cardContainer.appendChild(cardDiv);
        cardContainer.appendChild(cardName);
        cardContainer.appendChild(discardButton);  // カード名の後に追加
        handDiv.appendChild(cardContainer);
    });

    // 敗北条件のチェック
    checkDefeatCondition();
}

// selectActionCard関数を修正
function selectActionCard(index) {
    console.log('Action card selected:', index);
    const cardName = playerHand[index];
    const actionType = ACTION_TYPES[cardName];
    
    if (actionType === 'instant') {
        // 即時実行タイプのカード
        currentActionCardIndex = index;
        playActionCard();
    } else {
        // 元素選択が必要なカード
        currentActionCardIndex = index;
        selectedElementIndices = [];
        showNotification('元素カードを選択してください', 'info');
        updateGameBoard();
    }
}

// selectElementCard関数を修正
function selectElementCard(index) {
    console.log('Element card selected:', index);
    console.log('Current action card:', currentActionCardIndex);
    
    if (currentActionCardIndex === null) {
        showNotification('先にアクションカードを選んでください。', 'error');
        return;
    }

    const cardName = playerHand[currentActionCardIndex];
    const actionType = ACTION_TYPES[cardName];
    
    if (actionType === 'requires_element') {
        // 1枚の元素カードを必要とするアクション
        selectedElementIndices = [index];
        playActionCard();
    } else if (actionType === 'requires_elements') {
        // 2枚の元素カードを必要とするアクション（核融合）
        if (!selectedElementIndices.includes(index)) {
            selectedElementIndices.push(index);
            if (selectedElementIndices.length === 2) {
                playActionCard();
            } else {
                showNotification('もう1枚の元素カードを選択してください', 'info');
                updateGameBoard();
            }
        }
    }
}

// playActionCard関数を修正
function playActionCard() {
    if (currentActionCardIndex === null) return;
    
    const card = playerHand[currentActionCardIndex];
    const actionType = ACTION_TYPES[card];

    // アクションの実行
    try {
        switch (card) {
            case '中性子線照射':
                neutronIrradiation(selectedElementIndices[0]);
                break;
            case 'α崩壊':
                alphaDecay(selectedElementIndices[0]);
                break;
            case '核融合':
                if (selectedElementIndices.length !== 2) {
                    showNotification('2つの元素を選択してください', 'error');
                    return;
                }
                nuclearFusion(selectedElementIndices[0], selectedElementIndices[1]);
                break;
            case '核分裂':
                nuclearFission(selectedElementIndices[0]);
                break;
            case '元素ガチャ':
                elementGacha();
                break;
            case '科研費獲得':
                grantFunding();
                break;
            default:
                showNotification('未知のアクションカードです。', 'error');
                return;
        }

        // 豆知識の表示
        if (trivia[card]) {
            const randomTrivia = trivia[card][Math.floor(Math.random() * trivia[card].length)];
            showNotification(`豆知識: ${randomTrivia}`, 'info');
        }

        // 使用したアクションカードを手札から削除
        playerHand.splice(currentActionCardIndex, 1);
        currentActionCardIndex = null;
        selectedElementIndices = [];
        updateGameBoard();
        checkWinCondition();
        
    } catch (error) {
        console.error('Action execution error:', error);
        showNotification('アクションの実行中にエラーが発生しました', 'error');
    }
}

// アクションカードの効果実装
function neutronIrradiation(index) {
    let element = playerField[index];
    element.number += 1;
    element.symbol = getElementSymbol(element.number);
    element.price = getElementPrice(element.number);
    if (!element.symbol) {
        alert('未知の元素が生成されました。ゲームから除外されます。');
        playerField.splice(index, 1);
    }
}

function alphaDecay(index) {
    let element = playerField[index];
    element.number -= 2;
    if (element.number < 1) {
        showNotification('元素が消滅しました。', 'error');
        playerField.splice(index, 1);
    } else {
        element.symbol = getElementSymbol(element.number);
        element.price = getElementPrice(element.number);
    }
}

function nuclearFusion(index1, index2) {
    const element1 = playerField[index1];
    const element2 = playerField[index2];
    const newAtomicNumber = element1.number + element2.number;
    const newSymbol = getElementSymbol(newAtomicNumber);
    const newPrice = getElementPrice(newAtomicNumber);

    if (!newSymbol) {
        showNotification('核融合に失敗しました。元素が不安定です。', 'error');
    } else {
        playerField.push({ number: newAtomicNumber, symbol: newSymbol, price: newPrice });
    }
    // 元の元素カードを削除
    removeElementsFromField([index1, index2]);
}

function nuclearFission(index) {
    const element = playerField[index];
    const combinations = getFissionCombinations(element.number);
    if (combinations.length === 0) {
        showNotification('核分裂できる組み合わせがありません。', 'error');
        return;
    }
    const randomIndex = Math.floor(Math.random() * combinations.length);
    const [num1, num2] = combinations[randomIndex];
    const symbol1 = getElementSymbol(num1);
    const symbol2 = getElementSymbol(num2);
    const price1 = getElementPrice(num1);
    const price2 = getElementPrice(num2);

    playerField.push({ number: num1, symbol: symbol1, price: price1 });
    playerField.push({ number: num2, symbol: symbol2, price: price2 });
    // 元の元素カードを削除
    playerField.splice(index, 1);
}

function elementGacha() {
    // 軽元素のみをフィルタリング
    const lightElements = elements.filter(element => element.number <= 20);
    
    // ランダムに1つ選択
    const randomIndex = Math.floor(Math.random() * lightElements.length);
    const element = lightElements[randomIndex];
    
    // 場に追加
    playerField.push({ ...element });
    
    // 通知を表示
    showNotification(`${element.symbol}（原子番号: ${element.number}）を獲得しました！`, 'success');
}

function grantFunding() {
    const fundingAmount = 250; // 科研費獲得で得られる研究費
    researchFunding += fundingAmount;
    showNotification(`研究費を${fundingAmount}獲得しました。`);
}

// 通知を削除する関数を修正
function removeNotification(id) {
    const index = notifications.findIndex(n => n.id === id);
    if (index !== -1) {
        const notification = notifications[index].element;
        
        notification.style.opacity = '0';
        
        notification.addEventListener('transitionend', function handler(e) {
            if (e.propertyName === 'opacity') {
                notification.removeEventListener('transitionend', handler);
                notification.remove();
                notifications.splice(index, 1);
                
                // 残りの通知を1つずつ上に移動（隙間を含む）
                notifications.forEach((n, i) => {
                    const yOffset = i * 85; // 60px + 25px の隙間
                    n.element.style.transform = `translateY(${yOffset}px)`;
                });
            }
        });
    }
}

// 通知を表示する関数を修正
function showNotification(message, type = 'normal') {
    const notificationId = notificationCounter++;
    const displayTime = type === 'info' ? 8000 : 4000;
    const expire_at = Date.now() + displayTime;
    
    const wrapper = document.createElement('div');
    wrapper.className = 'notification-wrapper';
    wrapper.style.opacity = '0';
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    wrapper.appendChild(notification);
    
    requestAnimationFrame(() => {
        switch (type) {
            case 'success':
                notification.style.backgroundColor = '#4CAF50';
                break;
            case 'error':
                notification.style.backgroundColor = '#f44336';
                break;
            case 'info':
                notification.style.backgroundColor = '#2196F3';
                break;
        }
        wrapper.style.opacity = '1';
    });
    
    const container = document.getElementById('notification-banner');
    container.appendChild(wrapper);
    
    notifications.push({
        id: notificationId,
        element: wrapper,
        expire_at: expire_at,
        removing: false
    });
    
    setTimeout(() => {
        removeExpiredNotifications();
    }, displayTime);
}

// 期限切れの通知を削除する関数を改善
function removeExpiredNotifications() {
    const currentTime = Date.now();
    const expiredIndices = [];
    
    notifications.forEach((notification, index) => {
        if (notification.expire_at <= currentTime && !notification.removing) {
            expiredIndices.push(index);
        }
    });
    
    expiredIndices.sort((a, b) => b - a).forEach(index => {
        const notification = notifications[index];
        notification.removing = true;
        
        notification.element.style.opacity = '0';
        
        notification.element.addEventListener('transitionend', function handler(e) {
            if (e.propertyName === 'opacity') {
                notification.element.removeEventListener('transitionend', handler);
                notification.element.remove();
                
                const currentIndex = notifications.findIndex(n => n.id === notification.id);
                if (currentIndex !== -1) {
                    notifications.splice(currentIndex, 1);
                }
            }
        }, { once: true });
    });
}

// 定期的なクリーンアップを追加
setInterval(() => {
    // 長時間残っている通知を強制的に削除
    const currentTime = Date.now();
    notifications = notifications.filter(notification => {
        if (notification.expire_at <= currentTime - 10000) { // 期限から10秒以上経過
            notification.element.remove();
            return false;
        }
        return true;
    });
    
    // 位置を更新
    notifications.forEach((n, i) => {
        const yOffset = i * 60;
        n.element.style.transform = `translateY(${yOffset}px)`;
    });
}, 5000); // 5秒ごとにチェック

// 元素を売却する関数
function sellElement(index) {
    const element = playerField[index];
    researchFunding += element.price;
    playerField.splice(index, index + 1);
    showNotification(`研究費 ${element.price} を獲得しました！`);
    updateGameBoard();
}

// アクションカードを購入する関数を修正
function buyActionCard() {
    const actionCardCost = 50;
    
    // 手札制限のチェック
    if (playerHand.length >= handLimit) {
        showNotification(`手札が上限（${handLimit}枚）に達しています。`, 'error');
        return;
    }
    
    // 研究費のチェック
    if (researchFunding < actionCardCost) {
        showNotification('研究費が不足しています。', 'error');
        return;
    }

    // カードを1枚だけ引く
    if (drawActionCard()) {
        researchFunding -= actionCardCost;
        updateGameBoard();
        showNotification('アクションカードを1枚購入しました。');
    }
}

// ヘルパー関数
function getElementSymbol(atomicNumber) {
    const element = elements.find(el => el.number === atomicNumber);
    return element ? element.symbol : null;
}

function getElementPrice(atomicNumber) {
    const element = elements.find(el => el.number === atomicNumber);
    return element ? element.price : null;
}

function getFissionCombinations(number) {
    const combinations = [];
    for (let i = 1; i <= number / 2; i++) {
        const j = number - i;
        if (i > 0 && j > 0 && getElementSymbol(i) && getElementSymbol(j)) {
            combinations.push([i, j]);
        }
    }
    return combinations;
}

function removeElementsFromField(indices) {
    // インデックスの大きい方から削除する
    indices.sort((a, b) => b - a);
    indices.forEach(index => {
        playerField.splice(index, 1);
    });
}

function checkWinCondition() {
    if (playerField.some(el => el.number === 118)) {
        alert('おめでとうございます！オガネソンを生成しました！ゲームクリアです。');
        showResetButton();
    }
}

function checkDefeatCondition() {
    if (playerField.length === 0 && researchFunding < 50 && playerHand.length === 0) {
        alert('元素カード、アクションカードがなく、研究費も不足しています。ゲームオーバーです。');
        showResetButton();
    }
}

function showResetButton() {
    document.getElementById('reset-button').style.display = 'inline-block';
}

function resetGame() {
    // リセット時の確認（ただし初回のゲーム開始時は確認しない）
    if (playerHand.length > 0 || playerField.length > 1 || researchFunding !== INITIAL_FUNDING[currentDifficulty]) {
        if (!confirm('本当にリセットしますか？\nゲームの進行状況がすべて失われます。')) {
            return;
        }
    }

    // 全ての画面要素を一旦非表示に
    document.getElementById('game-board').style.display = 'none';
    document.getElementById('reset-container').style.display = 'none';
    
    // 難易度選択画面を表示
    const difficultySelect = document.getElementById('difficulty-select');
    difficultySelect.style.display = 'block';

    // 難易度選択ボタンのイベントリスナーを再設定
    const buttons = difficultySelect.getElementsByTagName('button');
    for (let button of buttons) {
        const difficulty = button.getAttribute('data-difficulty');
        // 既存のイベントリスナーを削除（重複防止）
        button.replaceWith(button.cloneNode(true));
        // 新しいイベントリスナーを追加
        difficultySelect.querySelector(`[data-difficulty="${difficulty}"]`)
            .addEventListener('click', () => setDifficulty(difficulty));
    }

    // ゲーム状態のリセット
    playerHand = [];
    playerField = [{ number: 1, symbol: 'H', price: 1 }];
    researchFunding = INITIAL_FUNDING[currentDifficulty];
    currentActionCardIndex = null;
    selectedElementIndices = [];
    handLimit = 5;

    // 手札関連の要素をリセット
    const handCountElement = document.getElementById('hand-count');
    const expandButton = document.getElementById('expand-hand-button');
    handCountElement.setAttribute('data-hand-limit', '5');
    expandButton.setAttribute('data-current-limit', '5');
}

// アクションカード処分関数を追加
function discardActionCard(index) {
    const discardCost = 100;
    if (researchFunding < discardCost) {
        showNotification('研究費が不足しています。', 'error');
        return;
    }

    researchFunding -= discardCost;
    playerHand.splice(index, 1);
    showNotification(`アクションカードを${discardCost}で処分しました。`);
    
    if (currentActionCardIndex === index) {
        currentActionCardIndex = null;
        selectedElementIndices = [];
    } else if (currentActionCardIndex > index) {
        currentActionCardIndex--;
    }
    
    updateGameBoard();
}

// 手札枠を拡張する関数を修正
function expandHandLimit() {
    const currentLimit = handLimit;
    const expansionCost = getExpansionCost(currentLimit);

    if (researchFunding >= expansionCost) {
        researchFunding -= expansionCost;
        handLimit += 1;
        
        showNotification(`手札の上限を${handLimit}枚に拡張しました！`);
        updateGameBoard();
    } else {
        showNotification('研究費が不足しています。', 'error');
    }
}

// スタイルを更新
function initializeStyles() {
    const style = document.createElement('style');
    style.textContent += `
        #game-board {
            margin-bottom: 20px;
        }

        .elements-container {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            justify-content: center;
            padding: 10px;
            margin-bottom: 20px;  /* 手札コントロールとの間隔 */
        }

        /* 手札コントロール（枚数表示と拡張ボタン）のコンテナ */
        #hand-controls {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            margin: 0 15px 20px 15px;  /* 上右下左のマージン */
        }

        /* 手札（アクションカード）のコンテナ */
        #hand {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            justify-content: center;
            padding: 10px;
        }

        /* スマートフォン向けの調整 */
        @media (max-width: 768px) {
            #hand-controls {
                align-items: center;
            }

            #buy-action-card {
                padding: 15px 30px;
                font-size: 18px;
                margin: 10px;
            }
        }

        /* 以下は変更なし */
        .card-container {
            position: relative;
            margin: 10px;
            transition: transform 0.2s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
        }

        .card {
            width: 90px;
            height: 90px;
            border-radius: 8px;
            cursor: pointer;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            overflow: hidden;
            background-color: white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        .card-image {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .element-card {
            width: 90px;
            height: 90px;
            border-radius: 8px;
            cursor: pointer;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            overflow: hidden;
            background-color: white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .element-image {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .card-name {
            font-size: 14px;
            text-align: center;
            margin-top: 5px;
            word-wrap: break-word;
            max-width: 90px;
        }

        .discard-button {
            display: none;
            padding: 5px 10px;
            background-color: #ff4444;
            color: white;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            margin-top: 5px;  /* カード名との間隔 */
        }

        /* PCでのホバー時のみ処分ボタンを表示 */
        @media (hover: hover) {
            .card-container:hover .discard-button {
                display: block;
            }
        }
    `;
    document.head.appendChild(style);
}

// 既存のHTMLの notification-banner 要素を空にする
document.getElementById('notification-banner').innerHTML = '';

// スタイルの初期化を呼び出す
initializeStyles();

// CSSも追加
const styles = `
.card-container {
    display: inline-block;
    margin: 5px;
}

.discard-button {
    display: block;
    margin-top: 5px;
    padding: 2px 5px;
    font-size: 0.8em;
    background-color: #ff4444;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

.discard-button:hover {
    background-color: #cc0000;
}

#difficulty-select button {
    margin: 0 5px;
    padding: 5px 10px;
    cursor: pointer;
}

#difficulty-select button:hover {
    background-color: #e0e0e0;
}

.hand-info {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 10px;
}

.expand-hand-button {
    padding: 5px 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-size: 0.8em;
}

.expand-hand-button:hover {
    background-color: #45a049;
}

.expand-hand-button.disabled {
    background-color: #ccc;
    cursor: not-allowed;
}
`;

// スタイルを適用
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// DOMContentLoadedイベントリスナーの中で
document.addEventListener('DOMContentLoaded', function() {
    // 難易度選択ボタンのイベントリスナーを設定
    const difficultySelect = document.getElementById('difficulty-select');
    const buttons = difficultySelect.getElementsByTagName('button');
    for (let button of buttons) {
        const difficulty = button.getAttribute('data-difficulty');
        button.addEventListener('click', () => setDifficulty(difficulty));
    }

    // アクションカード購入ボタンのイベントリスナー（ここだけに設定）
    document.getElementById('buy-action-card').addEventListener('click', buyActionCard);
    
    // その他の初期化処理
    document.getElementById('reset-button').addEventListener('click', resetGame);
    initializeStyles();

    // 手札拡張ボタンのイベントリスナーを設定
    document.getElementById('expand-hand-button').addEventListener('click', expandHandLimit);

    // 手札全処分ボタンのイベントリスナーを設定
    document.getElementById('discard-all-button').addEventListener('click', discardAllCards);
});

class NotificationManager {
    constructor() {
        this.notifications = [];
        this.counter = 0;
        this.initializeContainer();
        this.startPeriodicCleanup();
    }

    initializeContainer() {
        const style = document.createElement('style');
        style.textContent = `
            .notification-container {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                pointer-events: none;
            }

            .notification {
                position: absolute;
                right: 0;
                background-color: #333;
                color: white;
                padding: 10px 20px;
                border-radius: 4px;
                min-width: 200px;
                max-width: 400px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                opacity: 1;
                transition: all 0.3s ease;
                pointer-events: auto;
                transform: translateY(0);
            }

            .notification.dissolving {
                opacity: 0;
            }
        `;
        document.head.appendChild(style);

        const container = document.createElement('div');
        container.className = 'notification-container';
        document.body.appendChild(container);
        this.container = container;
    }

    updatePositions() {
        let currentOffset = 0;
        this.notifications.forEach(notification => {
            if (!notification.isDissolving) {
                notification.element.style.transform = `translateY(${currentOffset}px)`;
                currentOffset += notification.element.offsetHeight + 24; // 24pxは通知間の間隔
            }
        });
    }

    show(message, type = 'normal') {
        const id = this.counter++;
        const element = document.createElement('div');
        element.className = 'notification';
        element.textContent = message;

        const config = {
            normal: { duration: 4000, color: '#333' },
            success: { duration: 4000, color: '#4CAF50' },
            error: { duration: 4000, color: '#f44336' },
            info: { duration: 8000, color: '#2196F3' }
        }[type] || config.normal;

        element.style.backgroundColor = config.color;
        const expireAt = Date.now() + config.duration;

        // 初期位置を設定
        element.style.transform = `translateY(${this.getTotalHeight()}px)`;
        this.container.appendChild(element);

        const notification = {
            id,
            element,
            expireAt,
            isDissolving: false,
            timeoutId: setTimeout(() => this.remove(id), config.duration)
        };

        this.notifications.push(notification);

        // 要素が追加された後に位置を更新
        requestAnimationFrame(() => {
            this.updatePositions();
        });
    }

    getTotalHeight() {
        let height = 0;
        this.notifications.forEach(notification => {
            if (!notification.isDissolving) {
                height += notification.element.offsetHeight + 24;
            }
        });
        return height;
    }

    remove(id) {
        const index = this.notifications.findIndex(n => n.id === id);
        if (index === -1) return;

        const notification = this.notifications[index];
        if (notification.isDissolving) return;

        if (notification.timeoutId) {
            clearTimeout(notification.timeoutId);
        }

        notification.isDissolving = true;
        notification.element.classList.add('dissolving');

        notification.element.addEventListener('transitionend', (e) => {
            if (e.propertyName === 'opacity') {
                notification.element.removeEventListener('transitionend', handler);
                notification.element.remove();
                
                const currentIndex = notifications.findIndex(n => n.id === notification.id);
                if (currentIndex !== -1) {
                    notifications.splice(currentIndex, 1);
                }
            }
        }, { once: true });

        // 即座に位置更新を開始
        this.updatePositions();
    }

    startPeriodicCleanup() {
        setInterval(() => {
            const now = Date.now();
            for (let i = this.notifications.length - 1; i >= 0; i--) {
                const notification = this.notifications[i];
                if (notification.expireAt <= now && !notification.isDissolving) {
                    this.remove(notification.id);
                }
                else if (notification.expireAt <= now - 10000) {
                    if (notification.element.parentNode) {
                        notification.element.remove();
                    }
                    this.notifications.splice(i, 1);
                    this.updatePositions();
                }
            }
        }, 1000);
    }
}

// グローバルなNotificationManagerのインスタンスを作成
const notificationManager = new NotificationManager();

// showNotification関数を新しいマネージャーを使用するように更新
function showNotification(message, type = 'normal') {
    notificationManager.show(message, type);
}

// getElementImage関数を修正
function getElementImage(atomicNumber) {
    if (atomicNumber <= 20) {
        return 'lightElements.png';
    } else if (atomicNumber <= 92) {
        return 'middleElements.png';
    } else if (atomicNumber <= 117) {
        return 'heavyElements.png';
    } else if (atomicNumber === 118) {
        return 'ultraheavyElements.png';
    }
    return 'lightElements.png';  // デフォルトとして軽元素の画像を使用
}

// カードとタッチイベントの処理を追加
function initializeEventListeners() {
    // アクションカードのイベントリスナー
    function addActionCardListeners(cardDiv, index) {
        // クリックイベント（PC用）
        cardDiv.addEventListener('click', () => {
            selectActionCard(index);
        });

        // タッチイベント（スマートフォン用）
        cardDiv.addEventListener('touchstart', (e) => {
            e.preventDefault(); // デフォルトの動作を防止
            selectActionCard(index);
        });
    }

    // 元素カードのイベントリスナー
    function addElementCardListeners(elementDiv, index) {
        // クリックイベント（PC用）
        elementDiv.addEventListener('click', () => {
            selectElementCard(index);
        });

        // タッチイベント（スマートフォン用）
        elementDiv.addEventListener('touchstart', (e) => {
            e.preventDefault(); // デフォルトの動作を防止
            selectElementCard(index);
        });
    }

    // updateGameBoard関数内でのイベントリスナー追加部分を修正
    function updateGameBoard() {
        // ... 既存のコード ...

        // アクションカードの処理
        playerHand.forEach((card, index) => {
            const cardContainer = document.createElement('div');
            cardContainer.className = 'card-container';
            
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';
            if (currentActionCardIndex === index) {
                cardDiv.classList.add('selected');
            }
            
            // 画像要素を作成
            const cardImage = document.createElement('img');
            cardImage.src = ACTION_CARD_IMAGES[card];
            cardImage.alt = card;
            cardImage.className = 'card-image';
            cardDiv.appendChild(cardImage);

            // カード名を表示
            const cardName = document.createElement('div');
            cardName.className = 'card-name';
            cardName.textContent = card;
            
            // イベントリスナーを追加
            addActionCardListeners(cardDiv, index);
            
            cardContainer.appendChild(cardDiv);
            cardContainer.appendChild(cardName);
            
            // ... 処分ボタンの処理 ...
            
            handDiv.appendChild(cardContainer);
        });

        // 元素カードの処理
        playerField.forEach((element, index) => {
            const elementContainer = document.createElement('div');
            elementContainer.className = 'element-container';
            
            const elementDiv = document.createElement('div');
            elementDiv.className = 'element-card';
            if (selectedElementIndices.includes(index)) {
                elementDiv.classList.add('selected');
            }

            // ... 元素カードの内容を作成 ...

            // イベントリスナーを追加
            addElementCardListeners(elementDiv, index);
            
            // ... 残りの処理 ...
            
            elementsDiv.appendChild(elementContainer);
        });

        // ... 残りのコード ...
    }
}

// スタイルを追加して、タッチデバイスでの選択をより確実にする
function addTouchStyles() {
    const style = document.createElement('style');
    style.textContent += `
        @media (hover: none) {
            .card, .element-card {
                -webkit-tap-highlight-color: transparent;
                touch-action: manipulation;
            }
            
            .card.selected, .element-card.selected {
                background-color: rgba(76, 175, 80, 0.1);
            }
            
            .card:active, .element-card:active {
                background-color: rgba(0, 0, 0, 0.1);
            }
        }
    `;
    document.head.appendChild(style);
}

// 初期化時に実行
window.addEventListener('load', () => {
    initializeEventListeners();
    addTouchStyles();
});

// 手札全処分の機能を追加
function discardAllCards() {
    if (playerHand.length === 0) {
        showNotification('処分する手札がありません。', 'error');
        return;
    }
    
    playerHand = [];
    currentActionCardIndex = null;
    selectedElementIndices = [];
    updateGameBoard();
    showNotification('手札を全て処分しました。', 'info');
}
