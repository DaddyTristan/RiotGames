// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Close button functionality
const closeBtn = document.getElementById('closeBtn');
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        alert('Close button clicked! Add your functionality here.');
    });
}

// CTA Button functionality
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        const rouletteSection = document.getElementById('roulette');
        if (rouletteSection) {
            rouletteSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Login button functionality - Native HTML navigation used instead
// const loginBtn = document.querySelector('.login-btn');
// if (loginBtn) {
//     loginBtn.addEventListener('click', () => {
//         // alert('Login button clicked! Redirecting to login page...');
//     });
// }

// Language selector functionality
const languageBtn = document.querySelector('.language-btn');
const langDropdown = document.getElementById('langDropdown');
const langDisplay = document.getElementById('lang-display');
const langOptions = document.querySelectorAll('.lang-option');

// Map language codes to country codes
const langToCountryCode = {
    'en': 'US',
    'es': 'ES',
    'fr': 'FR',
    'de': 'DE',
    'pt': 'PT',
    'ru': 'RU',
    'ja': 'JP',
    'ko': 'KR'
};

const translations = {
    'en': {
        'nav_home': 'HOME',
        'nav_about': 'ABOUT',
        'nav_roulette': 'ROULETTE',
        'nav_prizes': 'PRIZES',
        'nav_faq': 'FAQ',
        'nav_login': 'LOG IN',
        'hero_tagline': 'TENZ GIFT FOR PLAYERS',
        'hero_title': 'THE ULTIMATE IN-GAME<br>FORTUNE AWAITS',
        'hero_description': 'Make your victories shine. Claim a free reward and expand your collection with rare items. No complicated rules — your reward is ready to reveal.',
        'hero_cta': 'GET YOUR SKIN',
        'about_title': 'ABOUT EVENT',
        'about_moment': 'YOUR MOMENT HAS COME',
        'about_tenz_partner': 'IN PARTNERSHIP WITH TYSON "TENZ" NGO',
        'about_tenz_rewards': 'VALORANT X TENZ EXCLUSIVE REWARDS',
        'about_guaranteed': 'GUARANTEED REWARD FOR EVERY SPIN',
        'about_description': 'NO COMPLICATED RULES. FIRST, USE THE WHEEL TO REVEAL YOUR REWARD. THEN, SIMPLY LOG IN WITH YOUR RIOT ID TO CLAIM IT — THE REWARD WILL BE SENT DIRECTLY TO YOUR ACCOUNT.',
        'about_claim': 'CLAIM YOUR SKIN',
        'roulette_subtitle': 'GOOD LUCK, AGENT!',
        'roulette_title': 'SPIN & WIN',
        'roulette_description': 'Spin the wheel to claim your free Valorant Skin.',
        'roulette_spin_now': 'SPIN NOW',
        'prize_pool_title': 'CASE CONTAINS',
        'rarity_legendary': 'Legendary',
        'rarity_epic': 'Epic',
        'rarity_rare': 'Rare',
        'faq_title': 'GOT QUESTIONS?<br>WE HAVE ANSWERS',
        'faq_q1': 'IS THIS REALLY FREE?',
        'faq_a1': 'Yes! This event is completely free for all players while supplies last.',
        'faq_q2': 'WHY IS RIOT ID LOGIN REQUIRED?',
        'faq_a2': 'We use your Riot ID to verify your account eligibility and to send the skins directly to your in-game inventory.',
        'faq_q3': 'WHAT HAPPENS IF I WIN A SKIN I ALREADY OWN?',
        'faq_a3': 'If you win a skin you already own, you will receive VP equivalent to the skin\'s value instead.',
        'faq_q4': 'HOW AND WHEN DO I RECEIVE MY PRIZE?',
        'faq_a4': 'Prizes are sent immediately to your account upon login. In rare cases, it may take up to 24 hours.',
        'faq_q5': 'ARE THERE ANY RESTRICTIONS?',
        'faq_a5': 'One spin per account. Accounts must be level 20 or higher to participate.'
    },
    'es': {
        'nav_home': 'INICIO',
        'nav_about': 'ACERCA DE',
        'nav_roulette': 'RULETA',
        'nav_prizes': 'PREMIOS',
        'nav_faq': 'PREGUNTAS',
        'nav_login': 'ENTRAR',
        'hero_tagline': 'REGALO DE TENZ PARA JUGADORES',
        'hero_title': 'LA FORTUNA DEFINITIVA<br>TE ESPERA',
        'hero_description': 'Haz que tus victorias brillen. Reclama una recompensa gratuita y amplía tu colección con objetos raros. Sin reglas complicadas — tu recompensa está lista para revelar.',
        'hero_cta': 'OBTÉN TU SKIN',
        'about_title': 'SOBRE EL EVENTO',
        'about_moment': 'TU MOMENTO HA LLEGADO',
        'about_tenz_partner': 'EN COLABORACIÓN CON TYSON "TENZ" NGO',
        'about_tenz_rewards': 'RECOMPENSAS EXCLUSIVAS DE VALORANT X TENZ',
        'about_guaranteed': 'RECOMPENSA GARANTIZADA EN CADA GIRO',
        'about_description': 'SIN REGLAS COMPLICADAS. PRIMERO, USA LA RUEDA PARA REVELAR TU RECOMPENSA. LUEGO, SIMPLEMENTE INICIA SESIÓN CON TU RIOT ID PARA RECLAMARLA — LA RECOMPENSA SE ENVIARÁ DIRECTAMENTE A TU CUENTA.',
        'about_claim': 'RECLAMA TU SKIN',
        'roulette_subtitle': '¡BUENA SUERTE, AGENTE!',
        'roulette_title': 'GIRA Y GANA',
        'roulette_description': 'Gira la rueda para reclamar tu Skin de Valorant gratis.',
        'roulette_spin_now': 'GIRAR AHORA',
        'prize_pool_title': 'LA CAJA CONTIENE',
        'rarity_legendary': 'Legendario',
        'rarity_epic': 'Épico',
        'rarity_rare': 'Raro',
        'faq_title': '¿TIENES PREGUNTAS?<br>TENEMOS RESPUESTAS',
        'faq_q1': '¿ES ESTO REALMENTE GRATIS?',
        'faq_a1': '¡Sí! Este evento es completamente gratuito para todos los jugadores hasta agotar existencias.',
        'faq_q2': '¿POR QUÉ SE REQUIERE RIOT ID?',
        'faq_a2': 'Usamos tu Riot ID para verificar la elegibilidad de tu cuenta y enviar las skins directamente a tu inventario del juego.',
        'faq_q3': '¿QUÉ PASA SI GANO UNA SKIN QUE YA TENGO?',
        'faq_a3': 'Si ganas una skin que ya posees, recibirás VP equivalente al valor de la skin en su lugar.',
        'faq_q4': '¿CÓMO Y CUÁNDO RECIBO MI PREMIO?',
        'faq_a4': 'Los premios se envían inmediatamente a tu cuenta al iniciar sesión. En casos raros, puede tardar hasta 24 horas.',
        'faq_q5': '¿HAY ALGUNA RESTRICCIÓN?',
        'faq_a5': 'Un giro por cuenta. Las cuentas deben ser nivel 20 o superior para participar.'
    },
    'fr': {
        'nav_home': 'ACCUEIL',
        'nav_about': 'À PROPOS',
        'nav_roulette': 'ROULETTE',
        'nav_prizes': 'PRIX',
        'nav_faq': 'FAQ',
        'nav_login': 'CONNEXION',
        'hero_tagline': 'CADEAU DE TENZ POUR LES JOUEURS',
        'hero_title': 'LA FORTUNE ULTIME<br>VOUS ATTEND',
        'hero_description': 'Faites briller vos victoires. Réclamez une récompense gratuite et élargissez votre collection avec des objets rares. Pas de règles compliquées — votre récompense est prête à être révélée.',
        'hero_cta': 'OBTENEZ VOTRE SKIN',
        'about_title': 'À PROPOS DE L\'ÉVÉNEMENT',
        'about_moment': 'VOTRE MOMENT EST ARRIVÉ',
        'about_tenz_partner': 'EN PARTENARIAT AVEC TYSON "TENZ" NGO',
        'about_tenz_rewards': 'RÉCOMPENSES EXCLUSIVES VALORANT X TENZ',
        'about_guaranteed': 'RÉCOMPENSE GARANTIE À CHAQUE LANCER',
        'about_description': 'PAS DE RÈGLES COMPLIQUÉES. D\'ABORD, UTILISEZ LA ROUE POUR RÉVÉLER VOTRE RÉCOMPENSE. ENSUITE, CONNECTEZ-VOUS SIMPLEMENT AVEC VOTRE RIOT ID POUR LA RÉCLAMER — LA RÉCOMPENSE SERA ENVOYÉE DIRECTEMENT SUR VOTRE COMPTE.',
        'about_claim': 'RÉCLAMEZ VOTRE SKIN',
        'roulette_subtitle': 'BONNE CHANCE, AGENT !',
        'roulette_title': 'TOURNEZ ET GAGNEZ',
        'roulette_description': 'Tournez la roue pour réclamer votre Skin Valorant gratuit.',
        'roulette_spin_now': 'TOURNER MAINTENANT',
        'prize_pool_title': 'LA CAISSE CONTIENT',
        'rarity_legendary': 'Légendaire',
        'rarity_epic': 'Épique',
        'rarity_rare': 'Rare',
        'faq_title': 'DES QUESTIONS ?<br>NOUS AVONS LES RÉPONSES',
        'faq_q1': 'EST-CE VRAIMENT GRATUIT ?',
        'faq_a1': 'Oui ! Cet événement est entièrement gratuit pour tous les joueurs jusqu\'à épuisement des stocks.',
        'faq_q2': 'POURQUOI LA CONNEXION RIOT ID EST-ELLE REQUISE ?',
        'faq_a2': 'Nous utilisons votre Riot ID pour vérifier l\'éligibilité de votre compte et envoyer les skins directement dans votre inventaire en jeu.',
        'faq_q3': 'QUE SE PASSE-T-IL SI JE GAGNE UN SKIN QUE JE POSSÈDE DÉJÀ ?',
        'faq_a3': 'Si vous gagnez un skin que vous possédez déjà, vous recevrez des VP équivalents à la valeur du skin à la place.',
        'faq_q4': 'COMMENT ET QUAND REÇOIS-JE MON PRIX ?',
        'faq_a4': 'Les prix sont envoyés immédiatement sur votre compte lors de la connexion. Dans de rares cas, cela peut prendre jusqu\'à 24 heures.',
        'faq_q5': 'Y A-T-IL DES RESTRICTIONS ?',
        'faq_a5': 'Un lancer par compte. Les comptes doivent être de niveau 20 ou plus pour participer.'
    },
    'de': {
        'nav_home': 'START',
        'nav_about': 'ÜBER UNS',
        'nav_roulette': 'ROULETTE',
        'nav_prizes': 'PREISE',
        'nav_faq': 'FAQ',
        'nav_login': 'LOGIN',
        'hero_tagline': 'TENZ GESCHENK FÜR SPIELER',
        'hero_title': 'DAS ULTIMATIVE IN-GAME<br>GLÜCK ERWARTET DICH',
        'hero_description': 'Lass deine Siege strahlen. Fordere eine kostenlose Belohnung an und erweitere deine Sammlung mit seltenen Gegenständen. Keine komplizierten Regeln — deine Belohnung ist bereit zur Enthüllung.',
        'hero_cta': 'HOL DIR DEINEN SKIN',
        'about_title': 'ÜBER DAS EVENT',
        'about_moment': 'DEIN MOMENT IST GEKOMMEN',
        'about_tenz_partner': 'IN PARTNERSCHAFT MIT TYSON "TENZ" NGO',
        'about_tenz_rewards': 'EXKLUSIVE VALORANT X TENZ BELOHNUNGEN',
        'about_guaranteed': 'GARANTIERTE BELOHNUNG BEI JEDEM DREH',
        'about_description': 'KEINE KOMPLIZIERTEN REGELN. NUTZE ZUERST DAS RAD, UM DEINE BELOHNUNG ZU ENTHÜLLEN. MELDE DICH DANN EINFACH MIT DEINER RIOT ID AN, UM SIE EINZUFORDERN — DIE BELOHNUNG WIRD DIREKT AN DEIN KONTO GESENDET.',
        'about_claim': 'FORDERE DEINEN SKIN AN',
        'roulette_subtitle': 'VIEL GLÜCK, AGENT!',
        'roulette_title': 'DREHEN & GEWINNEN',
        'roulette_description': 'Drehe das Rad, um deinen kostenlosen Valorant Skin zu erhalten.',
        'roulette_spin_now': 'JETZT DREHEN',
        'prize_pool_title': 'KISTE ENTHÄLT',
        'rarity_legendary': 'Legendär',
        'rarity_epic': 'Episch',
        'rarity_rare': 'Selten',
        'faq_title': 'HAST DU FRAGEN?<br>WIR HABEN ANTWORTEN',
        'faq_q1': 'IST DAS WIRKLICH KOSTENLOS?',
        'faq_a1': 'Ja! Dieses Event ist für alle Spieler völlig kostenlos, solange der Vorrat reicht.',
        'faq_q2': 'WARUM IST EIN RIOT ID LOGIN ERFORDERLICH?',
        'faq_a2': 'Wir verwenden deine Riot ID, um die Berechtigung deines Kontos zu überprüfen und die Skins direkt an dein In-Game-Inventar zu senden.',
        'faq_q3': 'WAS PASSIERT, WENN ICH EINEN SKIN GEWINNE, DEN ICH BEREITS HABE?',
        'faq_a3': 'Wenn du einen Skin gewinnst, den du bereits besitzt, erhältst du stattdessen VP im Wert des Skins.',
        'faq_q4': 'WIE UND WANN ERHALTE ICH MEINEN PREIS?',
        'faq_a4': 'Preise werden sofort nach dem Login an dein Konto gesendet. In seltenen Fällen kann es bis zu 24 Stunden dauern.',
        'faq_q5': 'GIBT ES EINSCHRÄNKUNGEN?',
        'faq_a5': 'Ein Dreh pro Konto. Konten müssen Level 20 oder höher sein, um teilzunehmen.'
    },
    'pt': {
        'nav_home': 'INÍCIO',
        'nav_about': 'SOBRE',
        'nav_roulette': 'ROLETA',
        'nav_prizes': 'PRÊMIOS',
        'nav_faq': 'FAQ',
        'nav_login': 'ENTRAR',
        'hero_tagline': 'PRESENTE DO TENZ PARA JOGADORES',
        'hero_title': 'A FORTUNA DEFINITIVA<br>NO JOGO TE AGUARDA',
        'hero_description': 'Faça suas vitórias brilharem. Resgate uma recompensa gratuita e expanda sua coleção com itens raros. Sem regras complicadas — sua recompensa está pronta para ser revelada.',
        'hero_cta': 'PEGUE SUA SKIN',
        'about_title': 'SOBRE O EVENTO',
        'about_moment': 'SEU MOMENTO CHEGOU',
        'about_tenz_partner': 'EM PARCERIA COM TYSON "TENZ" NGO',
        'about_tenz_rewards': 'RECOMPENSAS EXCLUSIVAS VALORANT X TENZ',
        'about_guaranteed': 'RECOMPENSA GARANTIDA A CADA GIRO',
        'about_description': 'SEM REGRAS COMPLICADAS. PRIMEIRO, USE A RODA PARA REVELAR SUA RECOMPENSA. EM SEGUIDA, BASTA FAZER LOGIN COM SEU RIOT ID PARA RESGATÁ-LA — A RECOMPENSA SERÁ ENVIADA DIRETAMENTE PARA SUA CONTA.',
        'about_claim': 'RESGATE SUA SKIN',
        'roulette_subtitle': 'BOA SORTE, AGENTE!',
        'roulette_title': 'GIRE E GANHE',
        'roulette_description': 'Gire a roda para resgatar sua Skin de Valorant gratuita.',
        'roulette_spin_now': 'GIRAR AGORA',
        'prize_pool_title': 'A CAIXA CONTÉM',
        'rarity_legendary': 'Lendário',
        'rarity_epic': 'Épico',
        'rarity_rare': 'Raro',
        'faq_title': 'TEM PERGUNTAS?<br>TEMOS RESPOSTAS',
        'faq_q1': 'ISSO É REALMENTE GRÁTIS?',
        'faq_a1': 'Sim! Este evento é totalmente gratuito para todos os jogadores enquanto durarem os estoques.',
        'faq_q2': 'POR QUE O LOGIN DO RIOT ID É NECESSÁRIO?',
        'faq_a2': 'Usamos seu Riot ID para verificar a elegibilidade da sua conta e enviar as skins diretamente para seu inventário no jogo.',
        'faq_q3': 'O QUE ACONTECE SE EU GANHAR UMA SKIN QUE JÁ TENHO?',
        'faq_a3': 'Se você ganhar uma skin que já possui, receberá VP equivalente ao valor da skin.',
        'faq_q4': 'COMO E QUANDO RECEBO MEU PRÊMIO?',
        'faq_a4': 'Os prêmios são enviados imediatamente para sua conta após o login. Em casos raros, pode levar até 24 horas.',
        'faq_q5': 'EXISTEM RESTRIÇÕES?',
        'faq_a5': 'Um giro por conta. Contas devem ser nível 20 ou superior para participar.'
    },
    'ru': {
        'nav_home': 'ГЛАВНАЯ',
        'nav_about': 'О НАС',
        'nav_roulette': 'РУЛЕТКА',
        'nav_prizes': 'ПРИЗЫ',
        'nav_faq': 'FAQ',
        'nav_login': 'ВОЙТИ',
        'hero_tagline': 'ПОДАРОК ОТ TENZ ИГРОКАМ',
        'hero_title': 'ВАША ГЛАВНАЯ ИГРОВАЯ<br>УДАЧА ЖДЕТ',
        'hero_description': 'Сделайте свои победы ярче. Получите бесплатную награду и расширьте свою коллекцию редкими предметами. Никаких сложных правил — ваша награда готова к открытию.',
        'hero_cta': 'ПОЛУЧИТЬ СКИН',
        'about_title': 'О СОБЫТИИ',
        'about_moment': 'ВАШ МОМЕНТ НАСТАЛ',
        'about_tenz_partner': 'В ПАРТНЕРСТВЕ С ТАЙСОНОМ "TENZ" НГО',
        'about_tenz_rewards': 'ЭКСКЛЮЗИВНЫЕ НАГРАДЫ VALORANT X TENZ',
        'about_guaranteed': 'ГАРАНТИРОВАННАЯ НАГРАДА ЗА КАЖДЫЙ СПИН',
        'about_description': 'НИКАКИХ СЛОЖНЫХ ПРАВИЛ. СНАЧАЛА ИСПОЛЬЗУЙТЕ КОЛЕСО, ЧТОБЫ УЗНАТЬ СВОЮ НАГРАДУ. ЗАТЕМ ПРОСТО ВОЙДИТЕ С ПОМОЩЬЮ RIOT ID, ЧТОБЫ ЗАБРАТЬ ЕЕ — НАГРАДА БУДЕТ ОТПРАВЛЕНА ПРЯМО НА ВАШ АККАУНТ.',
        'about_claim': 'ЗАБРАТЬ СВОЙ СКИН',
        'roulette_subtitle': 'УДАЧИ, АГЕНТ!',
        'roulette_title': 'КРУТИ И ВЫИГРЫВАЙ',
        'roulette_description': 'Крутите колесо, чтобы получить бесплатный скин Valorant.',
        'roulette_spin_now': 'КРУТИТЬ СЕЙЧАС',
        'prize_pool_title': 'КЕЙС СОДЕРЖИТ',
        'rarity_legendary': 'Легендарный',
        'rarity_epic': 'Эпический',
        'rarity_rare': 'Редкий',
        'faq_title': 'ЕСТЬ ВОПРОСЫ?<br>У НАС ЕСТЬ ОТВЕТЫ',
        'faq_q1': 'ЭТО ДЕЙСТВИТЕЛЬНО БЕСПЛАТНО?',
        'faq_a1': 'Да! Это событие полностью бесплатно для всех игроков, пока есть запасы.',
        'faq_q2': 'ПОЧЕМУ НУЖЕН ВХОД ЧЕРЕЗ RIOT ID?',
        'faq_a2': 'Мы используем ваш Riot ID для проверки права на участие и отправки скинов прямо в ваш игровой инвентарь.',
        'faq_q3': 'ЧТО БУДЕТ, ЕСЛИ Я ВЫИГРАЮ СКИН, КОТОРЫЙ У МЕНЯ УЖЕ ЕСТЬ?',
        'faq_a3': 'Если вы выиграете скин, который у вас уже есть, вы получите VP, эквивалентные стоимости скина.',
        'faq_q4': 'КАК И КОГДА Я ПОЛУЧУ СВОЙ ПРИЗ?',
        'faq_a4': 'Призы отправляются на ваш аккаунт сразу после входа. В редких случаях это может занять до 24 часов.',
        'faq_q5': 'ЕСТЬ ЛИ КАКИЕ-ЛИБО ОГРАНИЧЕНИЯ?',
        'faq_a5': 'Один спин на аккаунт. Аккаунты должны быть 20 уровня или выше для участия.'
    },
    'ja': {
        'nav_home': 'ホーム',
        'nav_about': '概要',
        'nav_roulette': 'ルーレット',
        'nav_prizes': '賞品',
        'nav_faq': 'よくある質問',
        'nav_login': 'ログイン',
        'hero_tagline': 'TENZからプレイヤーへの贈り物',
        'hero_title': '究極のゲーム内運勢が<br>あなたを待っています',
        'hero_description': '勝利を輝かせましょう。無料の報酬を受け取り、レアアイテムでコレクションを拡大してください。複雑なルールはありません — あなたの報酬はすぐに明らかになります。',
        'hero_cta': 'スキンを入手',
        'about_title': 'イベントについて',
        'about_moment': 'その時が来ました',
        'about_tenz_partner': 'TYSON "TENZ" NGO とのパートナーシップ',
        'about_tenz_rewards': 'VALORANT X TENZ 限定報酬',
        'about_guaranteed': 'すべてのスピンで報酬を保証',
        'about_description': '複雑なルールはありません。まず、ホイールを使って報酬を明らかにします。その後、RIOT IDでログインして受け取るだけです — 報酬は直接アカウントに送信されます。',
        'about_claim': 'スキンを受け取る',
        'roulette_subtitle': '幸運を祈る、エージェント！',
        'roulette_title': 'スピンして勝利',
        'roulette_description': 'ホイールを回して無料のValorantスキンを受け取りましょう。',
        'roulette_spin_now': '今すぐスピン',
        'prize_pool_title': 'ケースの内容',
        'rarity_legendary': 'レジェンダリー',
        'rarity_epic': 'エピック',
        'rarity_rare': 'レア',
        'faq_title': '質問がありますか？<br>私たちが答えます',
        'faq_q1': '本当に無料ですか？',
        'faq_a1': 'はい！このイベントは在庫がある限り、すべてのプレイヤーにとって完全に無料です。',
        'faq_q2': 'なぜRIOT IDでのログインが必要なのですか？',
        'faq_a2': 'アカウントの適格性を確認し、スキンをゲーム内インベントリに直接送信するためにRiot IDを使用します。',
        'faq_q3': 'すでに持っているスキンを獲得した場合はどうなりますか？',
        'faq_a3': 'すでに所有しているスキンを獲得した場合、代わりにそのスキンの価値に相当するVPを受け取ります。',
        'faq_q4': '賞品はいつ、どのように受け取れますか？',
        'faq_a4': '賞品はログイン後すぐにアカウントに送信されます。稀に、最大24時間かかる場合があります。',
        'faq_q5': '制限はありますか？',
        'faq_a5': '1アカウントにつき1回のスピン。参加するにはアカウントレベルが20以上である必要があります。'
    },
    'ko': {
        'nav_home': '홈',
        'nav_about': '소개',
        'nav_roulette': '룰렛',
        'nav_prizes': '상품',
        'nav_faq': 'FAQ',
        'nav_login': '로그인',
        'hero_tagline': '플레이어를 위한 TENZ의 선물',
        'hero_title': '궁극의 게임 속 행운이<br>기다리고 있습니다',
        'hero_description': '승리를 빛내세요. 무료 보상을 받고 희귀 아이템으로 컬렉션을 확장하세요. 복잡한 규칙은 없습니다 — 보상은 바로 공개됩니다.',
        'hero_cta': '스킨 받기',
        'about_title': '이벤트 소개',
        'about_moment': '당신의 순간이 왔습니다',
        'about_tenz_partner': 'TYSON "TENZ" NGO와 파트너십',
        'about_tenz_rewards': 'VALORANT X TENZ 독점 보상',
        'about_guaranteed': '모든 스핀에 보상 보장',
        'about_description': '복잡한 규칙은 없습니다. 먼저 휠을 사용하여 보상을 확인하세요. 그런 다음 RIOT ID로 로그인하여 수령하세요 — 보상은 계정으로 직접 전송됩니다.',
        'about_claim': '스킨 수령하기',
        'roulette_subtitle': '행운을 빕니다, 요원님!',
        'roulette_title': '스핀하고 승리하세요',
        'roulette_description': '휠을 돌려 무료 Valorant 스킨을 받으세요.',
        'roulette_spin_now': '지금 스핀',
        'prize_pool_title': '케이스 포함 내용',
        'rarity_legendary': '전설',
        'rarity_epic': '서사',
        'rarity_rare': '희귀',
        'faq_title': '질문이 있으신가요?<br>저희가 답해드립니다',
        'faq_q1': '정말 무료인가요?',
        'faq_a1': '네! 이 이벤트는 재고가 소진될 때까지 모든 플레이어에게 완전히 무료입니다.',
        'faq_q2': '왜 RIOT ID 로그인이 필요한가요?',
        'faq_a2': '계정 자격을 확인하고 스킨을 게임 내 인벤토리로 직접 보내기 위해 Riot ID를 사용합니다.',
        'faq_q3': '이미 보유한 스킨을 획득하면 어떻게 되나요?',
        'faq_a3': '이미 보유한 스킨을 획득하면, 대신 스킨 가치에 해당하는 VP를 받게 됩니다.',
        'faq_q4': '상품은 언제 어떻게 받나요?',
        'faq_a4': '상품은 로그인 시 계정으로 즉시 전송됩니다. 드문 경우지만 최대 24시간이 걸릴 수 있습니다.',
        'faq_q5': '제한 사항이 있나요?',
        'faq_a5': '계정당 1회 스핀. 참여하려면 계정 레벨이 20 이상이어야 합니다.'
    }
};

function updateLanguage(lang) {
    const t = translations[lang] || translations['en'];

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            if (key === 'hero_title') {
                element.innerHTML = t[key];
            } else {
                element.textContent = t[key];
            }
        }
    });
}

if (languageBtn) {
    languageBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('active');
    });
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-selector')) {
        langDropdown.classList.remove('active');
    }
});

// Handle language selection
langOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = option.getAttribute('data-lang');
        const countryCode = langToCountryCode[lang] || lang.toUpperCase();
        langDisplay.textContent = countryCode;

        updateLanguage(lang);

        langDropdown.classList.remove('active');
        console.log('Language selected:', lang);
    });
});

// Social media links - allow default behavior for external links
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', (e) => {
        // Allow default behavior - don't prevent it
        const href = icon.getAttribute('href');
        console.log('Social link clicked:', href);
    });
});

// Navbar background change on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar.style.background = 'linear-gradient(180deg, rgba(15, 20, 25, 0.98) 0%, rgba(15, 20, 25, 0.9) 100%)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'linear-gradient(180deg, rgba(15, 20, 25, 0.95) 0%, rgba(15, 20, 25, 0.7) 100%)';
        navbar.style.boxShadow = 'none';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Add animation on page load
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    const heroDescription = document.querySelector('.hero-description');
    const ctaBtn = document.querySelector('.cta-button');

    if (heroTitle) {
        heroTitle.style.animation = 'fadeInUp 0.8s ease 0.2s forwards';
    }
    if (heroDescription) {
        heroDescription.style.animation = 'fadeInUp 0.8s ease 0.4s forwards';
    }
    if (ctaBtn) {
        ctaBtn.style.animation = 'fadeInUp 0.8s ease 0.6s forwards';
    }
});

// Add fade in up animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Parallax effect for hero image on mouse move
document.addEventListener('mousemove', (e) => {
    const imagePlaceholder = document.querySelector('.image-placeholder');
    if (imagePlaceholder && window.innerWidth > 1024) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        const moveX = (mouseX - 0.5) * 20;
        const moveY = (mouseY - 0.5) * 20;

        imagePlaceholder.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});

// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    button.appendChild(ripple);
}

// Add ripple effect styles
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Apply ripple effect to CTA and login buttons
[ctaButton, loginBtn].forEach(button => {
    if (button) {
        button.addEventListener('click', createRipple);
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        console.log('Escape key pressed');
    }
});

// Roulette Spin Functionality

// Roulette
window.addEventListener('load', () => {
    const btn = document.getElementById('spinButton');
    const carousel = document.getElementById('cardsCarousel');
    const cards = document.querySelectorAll('.reward-card');

    if (!btn || !carousel || cards.length === 0) return;

    let spinning = false;

    btn.onclick = () => {
        if (spinning) return;
        spinning = true;
        btn.disabled = true;
        btn.textContent = 'SPINNING...';

        // Random card to win (0-14)
        const winIdx = Math.floor(Math.random() * cards.length);

        // Card size: 200px + 30px gap = 230px
        const cardSize = 230;
        const totalCards = cards.length;
        const carouselSize = totalCards * cardSize; // 3450px

        // Target position for winning card
        const targetPosition = winIdx * cardSize;

        // Starting position - spin fast at first
        let currentPosition = 0;
        let velocity = 15; // pixels per frame
        const deceleration = 0.98; // slow down factor
        const targetVelocity = 0.3; // minimum velocity before stopping

        const spinLoop = () => {
            // Keep scrolling with decreasing velocity
            currentPosition += velocity;

            // Wrap around carousel to create infinite loop effect
            currentPosition = currentPosition % carouselSize;

            // Apply deceleration
            velocity *= deceleration;

            // Update carousel position
            carousel.style.transform = `translateX(-${currentPosition}px)`;

            // Check if we should stop
            if (velocity > targetVelocity) {
                requestAnimationFrame(spinLoop);
            } else {
                // Snap to final position
                carousel.style.transform = `translateX(-${targetPosition}px)`;
                spinning = false;
                btn.disabled = false;
                btn.textContent = 'CLAIM';

                // Get the winning card details
                const winCard = cards[winIdx];
                const winCollection = winCard.querySelector('.roulette-collection').textContent;
                const winSkin = winCard.querySelector('.roulette-skin').textContent;

                btn.onclick = () => {
                    alert('🎉 YOU WON!\n\n' + winCollection + '\n' + winSkin);

                    // Reset
                    carousel.style.transform = 'translateX(0)';
                    btn.textContent = 'SPIN NOW';
                    btn.disabled = false;

                    // Re-enable spin
                    spinning = false;
                    btn.onclick = arguments.callee.caller;
                };
            }
        };

        loop();
    };
});

console.log('TENZ loaded!');

// Roulette Spin Functionality - Improved Version with Guaranteed Winner and Smooth Stop

const track = document.getElementById("rouletteTrack");
const btn = document.getElementById("spinBtn");
const mask = document.querySelector(".roulette-mask");
const finalPrize = document.getElementById("finalPrize");

let spinning = false;

btn.onclick = () => {
    if (btn.innerText === "CLAIM") {
        window.location.href = "login.html";
        return;
    }

    if (spinning) return;
    spinning = true;
    btn.innerText = "SPINNING...";
    btn.style.pointerEvents = "none";

    finalPrize.classList.add("hidden");
    finalPrize.innerHTML = "";
    track.parentElement.style.display = "block";
    document.querySelectorAll('.arrow').forEach(el => el.style.display = '');
    track.style.transition = "none";
    track.style.transform = "translateX(0px)";

    // 1. DUPLICATE ITEMS to ensure we never run out of track
    // We clone the existing list multiple times
    const initialItems = [...track.children];
    // Clone 20 times to be safe
    for (let i = 0; i < 20; i++) {
        initialItems.forEach(item => {
            track.appendChild(item.cloneNode(true));
        });
    }

    const items = [...track.children];
    const item = items[0];

    // 🔥 REAL measurements
    const itemWidth = item.offsetWidth;
    const gap = parseInt(getComputedStyle(track).gap) || 0;
    const step = itemWidth + gap;

    // 2. CHOOSE TARGET ahead of the current view
    // We want to spin forward (left) for a significant distance.
    // The fast spin runs for 2000ms. At ~16ms/frame, that's ~125 frames.
    // We move step/5 per frame => ~25 items distance just in the warmup.
    // We need to stop WAY beyond that.

    // Random index between 40 and 80 to be safe and varied
    const stopIndex = Math.floor(Math.random() * 40) + 40;

    const centerOffset = (mask.offsetWidth / 2) - (itemWidth / 2);
    const finalX = (stopIndex * step) - centerOffset;

    // FAST SPIN
    let tempX = 0;

    const spinInterval = setInterval(() => {
        // Increase speed slightly or keep constant. 
        // Moving positive X in transform(negative) => items move left.
        tempX += step / 4;
        // Wrap isn't strictly necessary if we have enough items, 
        // but just checking strict bounds isn't needed with our massive cloning.
        track.style.transform = `translateX(-${tempX}px)`;
    }, 16);

    setTimeout(() => {
        clearInterval(spinInterval);

        // SMOOTH STOP
        // We are at `tempX`. We want to go to `finalX`.
        // Ensure finalX > tempX so we keep moving left.
        // (If random logic failed, we'd jump back, so we ensure stopIndex is high enough above)

        track.style.transition = "transform 4s cubic-bezier(0.1, 0.9, 0.2, 1)";
        track.style.transform = `translateX(-${finalX}px)`;

        setTimeout(() => {
            // ✅ GUARANTEED correct winner
            const winItem = items[stopIndex];
            const prizeCard = winItem.cloneNode(true);

            track.parentElement.style.display = "none";
            document.querySelectorAll('.arrow').forEach(el => el.style.display = 'none');
            finalPrize.appendChild(prizeCard);
            finalPrize.classList.remove("hidden");

            // Update Header
            document.querySelector('.header h1').innerText = "INCREDIBLE!";
            const winRarity = winItem.classList.contains('epic') ? 'EPIC' : (winItem.classList.contains('legendary') ? 'LEGENDARY' : 'RARE');
            document.querySelector('.header p').innerText = `You won an ${winRarity} drop! Log in to claim your prize.`;
            document.querySelector('.subtitle').style.display = 'block';

            // Cleanup: Reset list to initial state to avoid infinite DOM growth?
            // Or just leave it, user performs one spin usually, or reload.
            // For a "real" app we'd reset, but for this demo, keeping it is fine 
            // or we can wipe `track.innerHTML` and re-add initialItems.
            // resetting for next spin:
            track.style.transition = "none";
            track.style.transform = "translateX(0)";
            // Remove the extras we added
            while (track.children.length > initialItems.length) {
                track.removeChild(track.lastChild);
            }

            spinning = false;
            btn.innerText = "CLAIM";
            btn.style.pointerEvents = "auto";
        }, 4000); // Wait for transition (4s)

    }, 2000);
};

/* ==================== FAQ ACCORDION ==================== */
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const isActive = faqItem.classList.contains('active');

        // Close all other FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.faq-answer').style.maxHeight = null;
        });

        // Toggle current item
        if (!isActive) {
            faqItem.classList.add('active');
            const answer = faqItem.querySelector('.faq-answer');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});
