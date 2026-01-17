const LOCATIONS = [
    "近所の公園（場所取り不要）",
    "皇居外苑（要・強い心）",
    "上野恩賜公園（激戦区）",
    "誰かの実家の庭",
    "サハラ砂漠",
    "月面（の静かの海）",
    "VR空間（メタバース）",
    "南極大陸（氷上花見）",
    "六本木ヒルズの屋上（無許可）",
    "近所の河川敷",
    "会社のエントランス",
    "知らない人の結婚式の二次会会場",
    "きみんち（アポなし）",
    "成層圏（気球で）",
    "国会議事堂の前",
    "マグマのそば"
];

const DATES = [
    "今週末",
    "来年の今日",
    "桜が散った翌日",
    "満開の瞬間（見逃し厳禁）",
    "雨天決行（嵐でも）",
    "気が向いたら",
    "来世",
    "明日（急募）",
    "3年後の4月1日",
    "毎日開催"
];

const MANAGERS = [
    "君（言い出しっぺ）",
    "隣の人",
    "この中で一番年下の人",
    "じゃんけんで負けた人",
    "AI（全自動）",
    "猫",
    "通りすがりの外国人",
    "不在（無法地帯）",
    "社長",
    "未来の自分"
];

const BUDGETS = [
    "0円（節約）",
    "500円（ワンコイン）",
    "1人1万円（富豪）",
    "5000兆円",
    "時価",
    "全額おごり（誰かの）",
    "ドングリ3つ",
    "PayPay送金のみ",
    "物々交換",
    "自腹",
    "全財産（文字通り）",
    "石油王のポケットマネー",
    "来月の給料全部"
];

const BRING_THINGS = [
    "ブルーシート",
    "現金（多めに）",
    "勇気",
    "着替え",
    "パスポート",
    "宇宙服",
    "印鑑証明",
    "婚姻届（念のため）",
    "ギター（弾けないけど）",
    "大量のからあげ",
    "正装",
    "寝袋"
];

const RULES = [
    "日本語禁止（英語Only）",
    "全員コスプレ必須",
    "上司は絶対服従",
    "完全無礼講（タメ口必須）",
    "スマホ操作禁止",
    "笑ってはいけない",
    "語尾に必ず『だニョン』をつける",
    "全員初対面のフリをする",
    "マナーモード厳守（会話禁止）",
    "花を見たら即帰宅",
    "語尾に『～だっちゃ』をつけて叫ぶ",
    "全員タキシード・ドレスコード",
    "10分おきに乾杯"
];

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomMulti = (arr, count) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

export const generatePlan = () => {
    return {
        location: getRandom(LOCATIONS),
        date: getRandom(DATES),
        manager: getRandom(MANAGERS),
        budget: getRandom(BUDGETS),
        items: getRandomMulti(BRING_THINGS, 3), // 3つ選出
        rule: getRandom(RULES),
        confidential: false // 責任放棄フラグ
    };
};
