/**
 * Created by InspireUI on 20/12/2016.
 *
 * @format
 */

import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Constants = {
  RTL: false, // default to set redux. Only use first time
  useReactotron: true,

  Language: "fr", // ar, en. Default to set redux. Only use first time
  fontFamily: "Roboto-Light",
  fontHeader: "Baloo",
  fontHeaderAndroid: "Baloo",
  WordPress: {
    defaultDateFormat: "YYYY-MM-DD HH:mm:ss",
    checkout: "mstore-checkout",
  },
  SplashScreen: {
    Duration: 2000,
  },
  AsyncCode: {
    Intro: "async.intro",
  },
  EmitCode: {
    SideMenuOpen: "OPEN_SIDE_MENU",
    SideMenuClose: "CLOSE_SIDE_MENU",
    SideMenuToggle: "TOGGLE_SIDE_MENU",
    Toast: "toast",
    MenuReload: "menu.reload",
  },
  Dimension: {
    ScreenWidth(percent = 1) {
      return Dimensions.get("window").width * percent;
    },
    ScreenHeight(percent = 1) {
      return Dimensions.get("window").height * percent;
    },
  },
  LimitAddToCart: 100,
  TagIdForProductsInMainCategory: 263,
  Window: {
    width,
    height,
    headerHeight: (65 * height) / 100,
    headerBannerAndroid: (55 * height) / 100,
    profileHeight: (45 * height) / 100,
  },

  PostImage: {
    small: "small",
    medium: "medium",
    medium_large: "medium_large",
    large: "large",
  },
  tagIdBanner: 273, // cat ID for Sticky Products
  stickyPost: true, // default is true (else false)
  PostList: {
    // Custom get All Products in Home Screen
    order: "desc", // or asc - default is "desc" column
    orderby: "date", // date, id, title and slug - default is "date" column
  },
  Layout: {
    card: "card",
    twoColumn: "twoColumn",
    simple: "simple",
    list: "list",
    advance: "advance",
    threeColumn: "threeColumn",
    horizon: "horizon",
    twoColumnHigh: "twoColumnHigh",
    BannerLarge: "bannerLarge",
    Banner: "banner",
    BannerSale: "bannerSale",
    Blog: "Blog",

    circleCategory: "circleCategory",
    BannerHigh: "bannerHigh",
    BannerSlider: "bannerSlider",
    BannerImage: "bannerImage",
  },
  pagingLimit: 10,

  fontText: {
    size: 16,
  },
  productAttributeColor: "color",

  CategoriesLayout: {
    card: "card",
    sideMenu: "side-menu",
    column: "column",
    topMenu: "top-menu",
  },

  AppleData: "@appleData",

  ProductType: {
    simple: "simple",
    external: "external", // affiliate
    variable: "variable",
  },

  Languages: {
    en: "en",
    ar: "ar",
  },

  NewSummaries: {
    id: "1003",
    nom_en: "New summaries",
    desc_en: "How can your company succeed? Managing companies is the single most discussed topic across all business literature. Find the answers you seek here.",
    nom_fr: "Gestion d'entreprise",
    desc_fr: "Comment faire prospérer votre entreprise ? La gestion d'entreprise est le sujet le plus débattu dans la littérature sur le management. Vous trouverez ici les réponses aux questions que vous vous posez.",
    nom_es: "Gestión",
    desc_es: "¿Cómo puede tener éxito su empresa? Administrar una compañía es el tema más discutido en toda la literatura sobre los negocios. Encuentre aquí las respuestas que busca.",
    nom_de: "Unternehmensführung",
    desc_de: "Wie führt man eine Firma zum Erfolg? Hier finden Sie alles über die Gründung und Leitung von Unternehmen, über Strategie und Managementkonzepte sowie über Projektmanagement, Geschäftserfolg im Ausland, Fragen der Wirtschaftsethik und Corporate Governance.",
    bookCount: "224"
  },

  HomeItmesName: {
    LatestSummaries: "Latest Summaries",
    Recommended: "Recommended For You",
    AuthorPicks: "Editors' Picks"
  },
  
  
  Library: [
    {
      "id": "1002",
      "nom_en": "Leadership",
      "desc_en":"One for all and all for one: This strategy only works if you set a good example as a leader. Learn how to stimulate your employees so they perform to the best of their abilities.",
      "nom_fr":"Leadership",
      "desc_fr":"Un pour tous et tous pour un : cette strat\u00e9gie n'est efficace que si vous donnez le bon exemple en tant que leader. Apprenez \u00e0 encourager vos collaborateurs pour qu'ils donnent le meilleur d'eux-m\u00eames.",
      "sub_cat": [
        {
          "id": "1120",
          "nom_en": "Being CEO",
          "desc_en":"Welcome to the corner office. Here are your instruction manuals, war stories and cautionary tales.",
          "nom_fr":"\u00catre PDG",
          "desc_fr":"Bienvenue au dernier \u00e9tage ! Vous trouverez ici vos manuels d'instruction, des histoires de guerre... et des mises en garde.",
        },

        {
          "id": "1001",
          "nom_en": "Business Leaders",
          "desc_en":"The biographies and autobiographies of business leaders offer insights into their successes and failures, their industries, their ambition and their purpose. Go behind the scenes and meet them, face to face.",
          "nom_fr":"Biographies d\u2019entrepreneurs",
          "desc_fr":"Qui sont les grandes personnalit\u00e9s du monde des affaires ? Quel est le secret de leur r\u00e9ussite ? Comment s'en inspirer ?",

        },

        {

          "id": "1338",
          "nom_en": "Coaching",
          "desc_en":"How much of coaching your employees is guiding them, how much is teaching, and how much is asking the right questions and listening to the answers? As a coach, you have the opportunity to guide people to greater career growth, professional achievement and personal satisfaction while supporting the goals of your organization. Stepping into a role this important takes some preparation, background and, perhaps, even coaching itself.",
          "nom_fr":"Coaching",
          "desc_fr":"Dans le coaching, quelle composante consiste \u00e0 guider vos collaborateurs, laquelle porte sur l'enseignement, et laquelle implique de poser les bonnes questions et... d'\u00e9couter les r\u00e9ponses ? En tant que coach, vous avez la possibilit\u00e9 de guider les gens vers un d\u00e9veloppement de carri\u00e8re plus efficace, un plus grand professionalisme et plus de satisfaction personnelle, tout en soutenant les objectifs de votre entreprise. Endosser l'habit de coach requiert de la pr\u00e9paration, de l'exp\u00e9rience, et peut-\u00eatre m\u00eame de se coacher soi-m\u00eame. Trouvez ici les ressources n\u00e9cessaires.",
        },

        {
          "id": "1217",
          "nom_en": "Decision Making",
          "desc_en":"How to face tough choices with strategy and sense.",
          "nom_fr":"Prise de d\u00e9cision",
          "desc_fr":"Prendre la meilleure d\u00e9cision en combinant pragmatisme et vision \u00e0 long terme",
        },
        {
          "id": "1288",
          "nom_en": "Leadership Mistakes",
          "desc_en":"Learn from other bosses' mistakes.",
          "nom_fr":"Erreurs de leadership",
          "desc_fr":"Apprenez des erreurs des autres patrons.",
        },

        {
          "id": "118955",
          "nom_en": "Lessons from Sports",
          "desc_en":"Athletic competition offers a familiar but meaningful metaphor for winning, succeeding, pursing excellence and being disciplined. From deciding how to attack business challenges to seeking personal motivation, the answers you want may come from the multifaceted world of sports where learning to play ball has a myriad of meanings.",
          "nom_fr":"Les leçons du sport",
          "desc_fr":"La compétition sportive est une métaphore familière mais significative de la victoire, de la réussite, de la recherche de l'excellence et de la discipline. Qu'il s'agisse de décider comment relever des défis commerciaux ou de rechercher une motivation personnelle, les réponses que vous cherchez peuvent provenir du monde multiforme du sport, où apprendre à jouer au ballon a une myriade de significations.",
        },
        {
          "id": "1433",
          "nom_en": "Middle Management",
          "desc_en":"You can make an impact from the middle of the action \u2013 how to lead up and down.",
          "nom_fr":"Gestion intermédiaire",
          "desc_fr":"Vous pouvez avoir un impact à partir du milieu de l'action : comment mener de haut en bas.",
        },

        {
          "id": "1185",
          "nom_en": "Motivating People",
          "desc_en":"Your most valuable employees are motivated and engaged. They look forward to coming to work and pouring their energy into getting things done. Where does motivation come from? How can you leverage intrinsic motivation? And do external drivers, such as perks, bonuses, raises, praise or promotions, work?",
          "nom_fr":"Motivation au travail",
          "desc_fr":"Trouver les bons outils pour motiver vos collaborateurs",
        },
        {
          "id": "1328",
          "nom_en": "Power",
           "desc_en":"A tricky topic \u2013 what does the sensible use of power look like?",
          "nom_fr":"Puissance",
          "desc_fr":"Un sujet délicat : à quoi ressemble l'utilisation raisonnable du pouvoir ?",
        },
        {
          "id": "1007",
          "nom_en": "Leading Teams",
          "desc_en":"The way you lead your team makes all the difference in whether your team members work well together, feel motivated, and meet their goals and your organization's objectives. Working as a team can be an efficient, smart way to pool talent and boost effectiveness or just a contentious waste of time. It depends on how you lead.",
          "nom_fr":"Gestion d'\u00e9quipe",
          "desc_fr":"La fa\u00e7on dont vous g\u00e9rez votre \u00e9quipe incitera ses membres \u00e0 mieux collaborer, \u00e0 \u00eatre motiv\u00e9s et \u00e0 atteindre leurs objectifs, ainsi que ceux de l'entreprise. Travailler en \u00e9quipe peut permettre d'am\u00e9liorer l'efficacit\u00e9 et de stimuler les talents... ou n'\u00eatre qu'une perte de temps conflictuelle. Tout d\u00e9pend de vous.",
          "sub_cat": [
            {
              "id": "1207",
              "nom_en": "Remote Teams",
              "desc_en":"The home office trend became the home office mandate with the outbreak of COVID-19, leaving managers with a challenge. Getting team members to function together smoothly is hard enough when everyone can meet. How do you generate teamwork in cyberspace? How do you work with far-flung employees at every step, from supervision to advancement. The experts recommend connection, communication, culture and mutual accountability. Here's how that works.",
              "nom_fr":"Équipes à distance",
              "desc_fr":"Alors que la pandémie de Covid-19 s'installe dans la durée, de plus en plus de personnes optent pour le télétravail. Si faire collaborer les membres d’une équipe présents sur un même site relève déjà du défi, comment faire pour instaurer un esprit d’équipe dans le cyberespace ? Les spécialistes recommandent de favoriser la création de liens et de renforcer la communication, la culture organisationnelle et la responsabilité mutuelle.",
            }
          ]
        },
        {
          "id": "1148",
          "nom_en": "Performance Reviews",
          "desc_en":"Performance reviews \u2013 done right \u2013 can be a very effective personnel management tool. Find out how you can do a better job of evaluating your staff members.",
          "nom_fr":"Revue de performance",
          "desc_fr":"Bien faite, la revue des performances peut devenir un outil efficace de gestion du personnel. D\u00e9couvrez comment mieux \u00e9valuer vos collaborateurs.",
        },
        {
          "id": "1600",
          "nom_en": "Delegating",
          "desc_en":"Learning to delegate is hard especially if you're new to management. Find out how much work you should delegate to whom and how to prepare yourself and team members.",
          "nom_fr":"Déléguer",
          "desc_fr":"Apprendre à déléguer est difficile, surtout si vous êtes novice en matière de management. Découvrez quelle quantité de travail vous devez déléguer à qui et comment vous préparer et préparer les membres de votre équipe.",
        },


      ]
    },


    ////////////////////////////////////////////

    ////////////////////////////////////////////
    {
      "id": "1003",
      "nom_en": "Management",
      "desc_en":"How can your company succeed? Managing companies is the single most discussed topic across all business literature. Find the answers you seek here.",
      "nom_fr":"Gestion d'entreprise",
      "desc_fr":"Comment faire prosp\u00e9rer votre entreprise ? La gestion d'entreprise est le sujet le plus d\u00e9battu dans la litt\u00e9rature sur le management. Vous trouverez ici les r\u00e9ponses aux questions que vous vous posez.",
      "sub_cat": [

        {
          "id": "1120",
          "nom_en": "Being CEO",
          "desc_en":"Welcome to the corner office. Here are your instruction manuals, war stories and cautionary tales.",
          "nom_fr":"\u00catre PDG",
          "desc_fr":"Bienvenue au dernier \u00e9tage ! Vous trouverez ici vos manuels d'instruction, des histoires de guerre... et des mises en garde.",
        },

        {
          "id": "1034",
          "nom_en": "Corporate Governance",
          "desc_en":"Corporate Governance is where the buck stops: the Board of Directors, the CEO and other top executives are responsible for honest, profitable and accountable overall performance. Here, experts address many of the attendant questions: What rights and responsibilities does the board have? How do you monitor compliance? What is the appropriate remuneration structure? In other words, how do you keep all the moving parts in line, starting at the top?",
          "nom_fr":"Gouvernance d'entreprise",
          "desc_fr":"La gouvernance d'entreprise est l'un des sujets les plus importants de notre \u00e9poque : commant garantir une gestion responsable de l'entreprise ? Quels droits et quelles responsabilit\u00e9s poss\u00e8de le conseil d'administration ? Comment contr\u00f4ler la conformit\u00e9 ? Quel est le syst\u00e8me de r\u00e9mun\u00e9ration ad\u00e9quat pour vos managers ?",
          "sub_cat": [
            {
              "id": "1031",
              "nom_en": "Compliance",
              "desc_en":"Policies, laws and rules of the game are among the most important external constraints that a company faces. Peruse these summaries for an insight into the relationships between corporations and regulations.",
              "nom_fr":"Conformit\u00e9",
              "desc_fr":"Les politiques, la loi et les normes font partie des contraintes externes majeures qui s'imposent aux entreprises. Parcourez ces résumés pour découvrir un aperçu des relations qu'entretiennent les entreprises avec la réglementation.",
            },
          ]
        },

        {
          "id": "1012",
          "nom_en": "Corporate Vision & Mission",
           "desc_en":"Corporate executives and entrepreneurs have a clear vision about their companies and their purpose. Yet reality challenges this vision, so leaders must continuously adjust it. Having a vision is crucial to mastering your mission with courage and commitment.",
           "nom_fr":"Vision d'entreprise",
           "desc_fr":"Les entrepreneurs ont une vision claire de l'avenir de leur entreprise. Toutefois, la r\u00e9alit\u00e9 remet en cause cette vision, ce qui les oblige \u00e0 continuellement revoir leur position. Il est important d'avoir une vision pour pouvoir ma\u00eetriser votre mission avec courage et volont\u00e9.",
        },

        {
          "id": "1010",
          "nom_en": "Crisis Management",
          "desc_en":"If your organization faces a crisis \u2013 whether a public health emergency, a natural disaster, or a public relations or product calamity \u2013 you often can make it better or worse for your people by how you manage it before, during and after. Eventually, a crisis will hit. You won\u2019t be able to prevent it, but you can prepare for it, overcome it and emerge stronger.",
          "nom_fr":"Gestion de crise",
          "desc_fr":"Si votre entreprise doit affronter une crise, qu'il s'agisse d'une crise sanitaire, d'une catastrophe naturelle, d'une atteinte \u00e0 la r\u00e9putation ou d'un rappel de produit, c'est votre mode de management qui fera avancer les choses \u2013 ou non \u2013 avant, pendant et apr\u00e8s la perturbation. \u00c0 terme, la crise frappera et vous n'aurez aucun moyen de l'emp\u00eacher, mais vous pourrez en revanche vous y pr\u00e9parer, la surmonter et en sortir plus forts.",
        },
        {
          "id": "1044",
          "nom_en": "Digital Transformation",
          "desc_en":"You\u2019ve used the same traditional and established workflows your entire career. They\u2019re trustworthy and have proven useful to your company. So, why should you change anything now? Digital transformation isn\u2019t just about the technology itself; it\u2019s also about how technology can offer better solutions to traditional problems, enable creativity and innovation, and keep you competitive in an increasingly digital world.",
          "nom_fr":"Transformation digitale",
          "desc_fr":"La digitalisation offre autant d'avantages que d'inconv\u00e9nients comme en t\u00e9moigne le \u00ab\u00a0paradoxe de la productivit\u00e9\u00a0\u00bb. En effet, les investissements massifs en technologies de l'information ne se traduisent pas n\u00e9cessairement par une forte augmentation de la productivit\u00e9. Pourtant, personne ne peut se permettre d'ignorer la digitalisation. La course est engag\u00e9e pour les entreprises qui souhaitent optimiser la transition.",
        },

        {
          "id": "1096",
          "nom_en": "Doing Business Abroad",
          "desc_en":"When you invest offshore, engage in international trade or do business outside your home country, you must understand the market you\u2019re entering and how commerce works there. This Channel showcases books on doing business abroad. It\u2019s not about etiquette or specific regions or taking a job overseas \u2013 all of which have their own channels. It\u2019s about money \u2013 making it, earning it or investing it in other countries. Once you get off the plane, this is how business is done.",
          "nom_fr":"Entreprendre \u00e0 l'international",
          "desc_fr":"Lorsque vous investissez \u00e0 l'\u00e9tranger, vous lancez dans le commerce international ou faites des affaires dans d'autres pays, vous devez comprendre le march\u00e9 sur lequel vous p\u00e9n\u00e9trez et les r\u00e8gles commeciales qui y pr\u00e9valent. Il ne s'agit ni d'\u00e9tiquette, ni de particularismes r\u00e9gionaux, ni de partir travailler \u00e0 l'\u00e9tranger \u2013 d'autres cha\u00eenes sont consacr\u00e9s \u00e0 ces th\u00e8mes. La question centrale ici, est celle de l'argent : en cr\u00e9er, en gagner ou l'investir dans d'autres pays. Osez l'international avec les bonnes cartes en main.",
        },
        {
          "id": "1094",
          "nom_en": "Doing Business in Africa",
          "desc_en":"Once known as \u201cthe Dark Continent\u201d due to its mysterious, unexplored territories, Africa is fast becoming a bustling hub for innovation, commerce and connectivity. Get enlightened about this region of opportunity.",
          "nom_fr":"Afrique",
          "desc_fr":"Jadis surnomm\u00e9e le 'continent noir' pour ses territoires myst\u00e9rieux et inexplor\u00e9s, l'Afrique est en passe de devenir un centre incontournable de l'innovation, du commerce et de la connectivit\u00e9. Apprenez-en davantage sur cette terre d'opportunit\u00e9s.",
        },
        {
          "id": "1091",
          "nom_en": "Doing Business in Asia",
          "desc_en":"If you judge Asian nations on their economic importance alone, China, India and Japan pretty much dominate the continent. iferu\u2019s journey through Asia focuses mainly on these three countries.",
          "nom_fr":"Commerce avec l'Asie",
          "desc_fr":"Si l'on ne juge les pays asiatiques que sur leur importance \u00e9conomique, on pourrait dire que la Chine, l'Inde et le Japon sont des forces dominantes sur le continent. D\u00e9couvrez les r\u00e9sum\u00e9s suivants qui se focalisent essentiellement sur ces trois pays.",
        },

        {
          "id": "1089",
          "nom_en": "Doing Business in Europe",
          "desc_en":"Europe is the birthplace of Western culture, but has Europe stalled in postcolonial times? As the most diverse continent politically, economically, culturally and socially, how will Europe deal with the future challenges it faces?",
          "nom_fr":"Commerce en Europe",
          "desc_fr":"L'Europe est le berceau de la culture occidentale mais est-elle rest\u00e9e enlis\u00e9e dans l'\u00e8re post-coloniale ? En tant que continent le plus diversifi\u00e9 sur le plan politique, \u00e9conomique, culturel et social, l'Europe pourra-t-elle faire face aux nombreux d\u00e9fis qui l'attendent ?",
        },
        {
          "id": "1093",
          "nom_en": "Doing Business in Latin America",
          "desc_en":"Economic boom-bust cycles defined Latin America in the 20th century, but this emerging region is become increasingly affluent and is primed to play a major role in the global economy.",
          "nom_fr":"Commerce avec l'Am\u00e9rique latine",
          "desc_fr":"Les cycles d'expansion et de r\u00e9cession \u00e9conomiques ont marqu\u00e9 l\u2019Am\u00e9rique latine du 20e si\u00e8cle. Pourtant, cette r\u00e9gion \u00e9mergente conna\u00eet une prosp\u00e9rit\u00e9 croissante et est pr\u00eate \u00e0 jouer un r\u00f4le majeur dans l\u2019\u00e9conomie mondiale.",
        },
        {
          "id": "1088",
          "nom_en": "Doing Business in North America",
          "desc_en":"Tu vu\u00f2 fa l\u2019americano? Most of us are \u2013 whether we want to admit it or not \u2013 more or less \u201cAmericanized.\u201d Explore American culture, which runs much deeper than singing rock \u2019n\u2019 roll and playing baseball.",
          "nom_fr":"Commerce avec l'Am\u00e9rique du Nord",
          "desc_fr":"Tu vu\u00f2 fa l\u2019americano? La plupart d'entre nous, que nous l'admettions ou pas, sommes plus ou moins \"am\u00e9ricanis\u00e9s\". D\u00e9couvrez la culture am\u00e9ricaine qui ne se limite pas uniquement au rock \u2019n\u2019 roll et au baseball.",
        },
        {
          "id": "1095",
          "nom_en": "Doing Business in Oceania",
          "desc_en":"In George Orwell\u2019s masterpiece 1984, Oceania is perpetually at war. The reality couldn\u2019t be further from the truth, though the region is vulnerable to other global threats. How will Oceania respond to challenges such as climate change?",
          "nom_fr":"Commerce avec l'Asie-Pacifique",
          "desc_fr":"Dans 1984, le chef-d'\u0153uvre de Georges Orwell, l'Oc\u00e9ania est perp\u00e9tuellement en guerre. La r\u00e9alit\u00e9 ne pourrait s'\u00e9loigner davantage de la v\u00e9rit\u00e9, bien que la r\u00e9gion soit vuln\u00e9rable \u00e0 d'autres menaces mondiales. Comment l'Oc\u00e9ania pourra-t-elle r\u00e9pondre \u00e0 des d\u00e9fis tels que le changement climatique\u00a0?",
        },
        {
          "id": "1090",
          "nom_en": "Doing Business in Russia",
          "desc_en":"",
          "nom_fr":"Commerce avec la Russie",
          "desc_fr":"",
        },
        {
          "id": "1092",
          "nom_en": "Doing Business in the Middle East",
          "desc_en":"From Turkey via the Gulf States to Iran: The Middle East is a mine field \u2013 but it\u2019s also a gold mine.",
          "nom_fr":"Commerce avec le Moyen-Orient",
          "desc_fr":"De la Turquie aux \u00c9tats du Golfe en passant par l'Iran : le Moyen-Orient est un v\u00e9ritable champ de mines, mais c'est \u00e9galement une mine d'or.",
        },
        {
          "id": "1008",
          "nom_en": "Management Concepts",
          "desc_en":"Just because you\u2019ve always done something a certain way doesn\u2019t mean it\u2019s the right way; particularly not in the business world that is spinning faster than ever. Discard your habitual thinking patterns and embrace alternative management concepts.",
          "nom_fr":"Concepts de management",
          "desc_fr":"Le fait d'avoir toujours proc\u00e9d\u00e9 de la m\u00eame mani\u00e8re n'implique pas que cela soit la mani\u00e8re la plus juste, plus particuli\u00e8rement dans le monde de l'entreprise en \u00e9volution rapide. D\u00e9barrassez-vous de vos sch\u00e9mas de pens\u00e9e habituels et exp\u00e9rimentez des concepts alternatifs de gestion.",
          "sub_cat": [
            {
              "id": "1651",
              "nom_en": "Agility",
              "desc_en":"What worked nicely yesterday may no longer work today. Learn how to make your organization agile: Adapt rapidly to market and environmental changes in productive and cost-effective ways.",
              "nom_fr":"Agilité",
              "desc_fr":"Les solutions d'hier pourraient ne pas convenir demain. Découvrez comment améliorer l'agilité de votre entreprise, et vous adapter rapidement aux évolutions du marché et de l'environnement de façon productive et rentable.",
              "sub_cat": [
                {
                  "id": "1716",
                  "nom_en": "Scrum",
                  "desc_en":"The scrum approach to software development is partially to blame for the hype about agile project management. Find out what scrum really accomplishes, what a scrum master does (compared to a product owner), and learn about scrum boards, sprints and back logs.",
                  "nom_fr":"Scrum",
                  "desc_fr":"The scrum approach to software development is partially to blame for the hype about agile project management. Find out what scrum really accomplishes, what a scrum master does (compared to a product owner), and learn about scrum boards, sprints and back logs.",
                },
              ]
            },
            {
              "id": "1369",
              "nom_en": "Business Process Management",
              "desc_en":"The redesign of business processes isn't witchcraft, but it is anything but trivial. As you look at how you do business, check here for expertise on making your processes work.",
              "nom_fr":"Gestion des processus métier",
              "desc_fr":"Sans être ésotérique, la redéfinition des processus métier est tout sauf insignifiante. Alors que vous passez en revue les moindres détails de votre activité, trouvez ici l'expertise nécessaire pour concevoir des processus fonctionnels.",
            },
            {
              "id": "1257",
              "nom_en": "Lean Management",
              "desc_en":"The lean manufacturing method is built on eliminating waste in the production system – that's any waste, including waste of materials, time, energy, talent and processing effort. Built historically on Toyota's strategies, Lean is based in the world of manufacturing where it is intrinsic to systematic attempts to save time and money and to increase efficiency by simplifying processes and procedures.",
              "nom_fr":"Qu’est-ce que le lean ?",
              "desc_fr":"Augmenter la productivité, en réduisant les coûts",
            },
          ]
        },
        {
          "id": "1149",
          "nom_en": "Measuring Business Performance",
          "desc_en":"You can\u2019t manage it if you don\u2019t measure it. Find out how which measurements matter in fulfilling your goals and assessing your performance. Whether you're fine-tuning an ongoing system or just ramping up, here's access to expertise at every level.",
          "nom_fr":"Measuring Business Performance",
          "desc_fr":"You can\u2019t manage it if you don\u2019t measure it. Find out how which measurements matter in fulfilling your goals and assessing your performance. Whether you're fine-tuning an ongoing system or just ramping up, here's access to expertise at every level.",
        },
        {
          "id": "1433",
          "nom_en": "Middle Management",
          "desc_en":"You can make an impact from the middle of the action \u2013 how to lead up and down.",
          "nom_fr":"Middle Management",
          "desc_fr":"You can make an impact from the middle of the action \u2013 how to lead up and down.",
        },
        {
          "id": "1006",
          "nom_en": "Project Management",
          "desc_en":"Who does what, when and how? Badly managed implementation is the chief reason many good ideas fall by the wayside. Learn how to direct all facets of a project through every stage from planning to execution, including scheduling workflow, managing teams and achieving your goals.",
          "nom_fr":"Gestion de projets",
          "desc_fr":"Qui fait quoi, quand et comment ? Une mauvaise gestion de la mise en oeuvre est la raison principale pour laquelle beaucoup de bonnes id\u00e9es n'aboutissent jamais. Apprenez \u00e0 g\u00e9rer toutes les facettes d'un projet, de la planification \u00e0 l'ex\u00e9cution, y compris l'organisation des workflows, la gestion d'\u00e9quipe et la r\u00e9alisation des objectifs.",
          "sub_cat": [
            {
              "id": "1281",
              "nom_en": "Event Management",
              "desc_en":"Get the biggest bang for your buck with these event-management manuals.",
              "nom_fr":"Événementiel et marketing",
              "desc_fr":"Obtenez le maximum de votre investissement avec ces guides de gestion événementielle.",
            },
          ]
        },
        {
          "id": "1295",
          "nom_en": "Restructuring",
          "desc_en":"Whether you have to rebuild from financial trauma or reorganize to rearrange your internal flow and boost profits, restructuring is an opportunity to streamline and update your organization. That doesn't mean its easy, but here some experts point the way.",
          "nom_fr":"Restructuration",
          "desc_fr":"  Que vous deviez vous reconstruire après un traumatisme financier ou vous réorganiser pour réorganiser votre flux interne et augmenter vos bénéfices, la restructuration est une occasion de rationaliser et de mettre à jour votre organisation. Cela ne veut pas dire que c'est facile, mais certains experts vous indiquent la voie à suivre. ",
        },
        {
          "id": "1030",
          "nom_en": "Risk Management",
          "desc_en":"Doing business always bears risks, such as a supply shortfall or even a black swan, like the 2008 stock market crash. Learn what strategic risk managers have up their sleeves to preempt these perils.",
          "nom_fr":"Gestion des risques",
          "desc_fr":"L'activit\u00e9 commerciale comporte de nombreux risques tels que des d\u00e9ficits d'approvisionnement, voire des \"cygnes noirs\", comme le crash financier de 2008. D\u00e9couvrez les nombreuses strat\u00e9gies que les gestionnaires de risque ont \u00e0 disposition pour \u00e9viter ces p\u00e9rils.",
        },
        {
          "id": "1067",
          "nom_en": "Small Business",
          "desc_en":"A small or midsized business faces a unique set of challenges. These summaries address those special issues, teach the particulars of family businesses, and show you what you need to take into account if you're planning to start a company. A veritable goldmine for entrepreneurs!",
          "nom_fr":"Petites et moyennes entreprises",
          "desc_fr":"Une petite ou moyenne entreprise doit faire face \u00e0 un ensemble de d\u00e9fis tout \u00e0 fait particuliers. Nos r\u00e9sum\u00e9s abordent ces enjeux de mani\u00e8re sp\u00e9cifique, enseignent les particularit\u00e9s propres aux entreprises familiales et soulignent les points essentiels \u00e0 prendre en consid\u00e9ration si vous envisagez de cr\u00e9er une entreprise. Une v\u00e9ritable mine d'or pour les entrepreneurs !",
          "sub_cat": [
            {
              "id": "1065",
              "nom_en": "Family Business",
              "desc_en":"In a family business, your work life and your private life unfold in the same places with the same people. Learn the challenges and benefits – including learning from the ground up, participating in decision making and building a legacy – that come with running a family business.",
              "nom_fr":"Entreprises familiales",
              "desc_fr":"Dans une entreprise familiale, votre vie professionnelle et votre vie privée sont intrinsèquement liées. Découvrez quels en sont les défis et les avantages, d'un apprentissage qui commence dès l'enfance à la prise de décision en commun, avec pour objectif la transmission de l'héritage familial.",
            },
          ]
        },
        {
          "id": "1698",
          "nom_en": "Social Entrepreneurship",
          "desc_en":"As the Doomsday Clock ticks ever closer to midnight, many entrepreneurs are attempting to turn the tide by developing, funding and executing solutions to the world's most inextricable social, cultural and environmental problems. Learn how some have succeeded, how some have failed and why putting people and the environment before profits can be a lucrative strategy.",
          "nom_fr":"Entrepreneuriat social",
          "desc_fr":"Alors que l'horloge du Jugement dernier se rapproche de minuit, de nombreux entrepreneurs tentent de renverser la vapeur en développant, finançant et mettant en œuvre des solutions aux problèmes sociaux, culturels et environnementaux les plus inextricables du monde. Découvrez comment certains ont réussi, comment d'autres ont échoué et pourquoi faire passer les gens et l'environnement avant les profits peut être une stratégie lucrative.",
        },
        {

          "id": "1417",
          "nom_en": "Stakeholder Management",
          "desc_en":"Shareholders, employees, customers, suppliers, banks, politicians \u2013 stakeholders, businesses are in no short supply of them. How can you satisfy everyone?",
          "nom_fr":"Gestion des parties prenantes",
          "desc_fr":"Actionnaires, employés, clients, fournisseurs, banques, politiciens \u2013 les parties prenantes, les entreprises n'en manquent pas. Comment satisfaire tout le monde ?",

        },
        {
          "id": "1066",
          "nom_en": "Starting a Business",
          "desc_en":"The decision to start your own business is a daunting one. Let these summaries provide you with all the knowledge you need to create your business plan and get your enterprise off the ground.",
          "nom_fr":"Cr\u00e9ation d'entreprise",
          "desc_fr":"D\u00e9cider de cr\u00e9er sa propre entreprise peut s'av\u00e9rer ardu. Ces r\u00e9sum\u00e9s vous permettront d'acqu\u00e9rir les connaissances n\u00e9cessaires pour \u00e9tablir un business plan et faire d\u00e9coller votre projet.",
        },
        {
          "id": "1004",
          "nom_en": "Change Management",
          "desc_en":"Change can be exciting \u2013 or it can produce stress and anxiety. One thing is for sure: Organizations can\u2019t grow without change, so it\u2019s time to reinvent your company.",
          "nom_fr":"Gestion du changement",
          "desc_fr":"Le changement peut engendrer l'enthousiasme ou au contraire g\u00e9n\u00e9rer du stress et de l'anxi\u00e9t\u00e9. Une chose est s\u00fbre\u00a0: les entreprises ont besoin de changement pour se d\u00e9velopper. Il est temps pour vous de r\u00e9inventer votre entreprise.",
        },

        {
          "id": "1017",
          "nom_en": "Strategy",
          "desc_en":"To lead your organization with a strong vision, check the channels that fill this section; learn all you need to know about strategic planning, organizational development, corporate social responsibility, partnerships, alliances and more.",
          "nom_fr":"Strat\u00e9gie",
          "desc_fr":"\u00c0 tous les strat\u00e8ges et \u00e0 ceux qui veulent diriger leur entreprise vers des perspectives claires et fermes : cette s\u00e9lection de r\u00e9sum\u00e9s est faite pour vous. Apprenez tout ce que vous devez savoir sur la planification strat\u00e9gique, le d\u00e9veloppement organisationnel, la responsabilit\u00e9 sociale des entreprises, les partenariats, les alliances et plus encore.",
          "sub_cat": [
            {
              "id": "1014",
              "nom_en": "Corporate Alliances",
              "desc_en":"What other organization is your perfect match? How can you form the right alliance to benefit your company? Applying the same strategies you'd use for private networking, build a network of alliances to form links with other organizations for your mutual benefit.",
              "nom_fr":"Alliances stratégiques",
              "desc_fr":"Qui vous correspond le plus ? Qui peut vous aider à gérer votre entreprise ? En affaires, il vous suffit d'appliquer les mêmes stratégies que vous utilisez pour votre réseau privé. Construisez un vaste réseau d'alliances pour vous aider à progresser rapidement.",
            },
            {
              "id": "1032",
              "nom_en": "Mergers & Acquisitions",
              "desc_en":"The merger of two corporate entities could be the result of a mutual agreement or a hostile takeover. Whatever the case may be, focus on the benefits of the newly established company.",
              "nom_fr":"Fusions & acquisitions",
              "desc_fr":"La fusion de deux entreprises peut être le résultat d'un accord mutuel ou d'une OPA hostile. Quel que soit le cas, concentrez-vous sur les avantages que peut apporter l'entreprise nouvellement créée.",
            },
            {
              "id": "1016",
              "nom_en": "Organizational Development",
              "desc_en":"Organizational Development is two things. First, it is a specific strategy for corporate effectiveness and strength that uses ideas from behavioral science. Second, it's a generic term for discussing concepts and strategies for improving your organization. While other channels cover organizational design, growth, change, management, restructuring, and more, here you will find expert authors' general ideas about the overall effort to create strong, lasting organizations.",
              "nom_fr":"Développement organisationnel",
              "desc_fr":"Le développement organisationnel est une stratégie spécifique pour améliorer l'efficacité à l'échelle de l'entreprise en s'appuyant sur les sciences comportementales. Mais c'est aussi un terme générique désignant des méthodes visant à améliorer le fonctionnement de votre organisation. Si d'autres chaînes vous en apprendront davantage sur le design organisationnel, la croissance, la gestion du changement, les restructurations et autres, trouvez ici l'inspiration pour créer une organisation solide et pérenne.",
            },
            {
              "id": "1013",
              "nom_en": "Strategic Planning",
              "desc_en":"If you focus only on your day-to-day business, you’ll see the trees but not the forest. To plan for the long range, look beyond today's fads and buzz words. Consider the crucial objectives that must fall into place to realize the best future for your organization and its people, and then think about the steps you must take to achieve those goals. That's the big picture. Here's how to tackle it.",
              "nom_fr":"Planification stratégique",
              "desc_fr":"Si vous concentrez votre attention uniquement sur la gestion opérationnelle au quotidien, vous risquez de vous égarer. Ce qui est important aujourd'hui pourra être insignifiant demain, et vice versa. Ne pensez-vous pas qu'il est temps de prendre de la hauteur et de considérer la situation dans son ensemble ?",
            },
          ]
        },

        {
          "id": "1009",
          "nom_en": "Business Ethics",
          "desc_en":"Ethically correct behavior benefits your conscience and your business. But how do you define it, teach it and keep your company clean when every issue, every transaction and every personnel decision presents potential ethical pitfalls. To always be one of the good guys, check here.",
          "nom_fr":"\u00c9thique des affaires",
          "desc_fr":"Le respect de l'\u00e9thique est profitable \u00e0 la fois \u00e0 vos affaires... et \u00e0 votre conscience. Mais comment le d\u00e9finir, l'enseigner et veiller \u00e0 ce que votre entreprise suive ses principes lorsque chaque question, chaque transaction et chaque d\u00e9cision personnelles pr\u00e9sente des pi\u00e8ges \u00e9thiques potentiels. Cette section contient des r\u00e9sum\u00e9s pour vous aider \u00e0 toujours \u00eatre du bon c\u00f4t\u00e9.",
          "sub_cat": [
            {
              "id": "1015",
              "nom_en": "Corporate Social Responsibility",
              "desc_en":"Profit is not everything. Businesses that value ethically correct behavior are more successful in the long term. Assume corporate responsibility to benefit your company.",
              "nom_fr":"Responsabilité sociale des entreprises",
              "desc_fr":"Le profit ne suffit pas. Les entreprises qui valorisent un comportement éthiquement correct en bénéficient plus sur le long terme. Adoptez une attitude responsable pour le bien de votre entreprise.",
            },
          ]
        },
        {
          "id": "1828",
          "nom_en": "Disruption",
          "desc_en":"How do nimble little companies keep disrupting established companies in one industry after another even when the big guys focus on their customers and continually improve crucial features of their products and services? Since the late Clayton Christensen explained that phenomenon, much has been written about disruptive innovation. Learn how to understand it, defend against it or become the disruptor yourself.",
          "nom_fr":"Technologies disruptives",
          "desc_fr":"Quelle entreprise n'a jamais r\u00eav\u00e9 de modifier les r\u00e8gles du march\u00e9 gr\u00e2ce \u00e0 ses innovations ? D\u00e9couvrez comment les innovations de rupture r\u00e9volutionnent des march\u00e9s et des soci\u00e9t\u00e9s toutes enti\u00e8res et sur quels business models elles reposent.",
        },

      ]

    },
    ////////////////////////////////////////////
    {
      "id": "1050",
      "nom_en": "Career",
      "desc_en":"You can see your career in many lights. Are you pursuing corporate or entrepreneurial success? Are you focused on personal growth? How about redefining success as purposeful work, sufficient profit and satisfying results? For a career that embraces all your potential, generates fresh opportunities, and builds your expertise, satisfaction, knowledge and networks, start here. Make a living and a life.",
      "nom_fr":"Carri\u00e8re",
      "desc_fr":"Vous pouvez envisager votre carri\u00e8re sous plusieurs angles. Souhaitez-vous atteindre la r\u00e9ussite professionnelle ou conna\u00eetre le succ\u00e8s en tant qu'entrepreneur ? Ou privil\u00e9giez-vous votre croissance personnelle ? Pourquoi ne pas red\u00e9finir la r\u00e9ussite en termes de sens, de revenus suffisants et de bon r\u00e9sultats ? Si vous voulez que votre parcours professionnel optimise votre potentiel, vous offre de nouvelles opportunit\u00e9s et am\u00e9liore \u00e0 la fois vos comp\u00e9tences, votre satisfaction, votre savoir et vos relations, vous \u00eates au bon endroit.",
      "sub_cat": [
        {

          "id": "89200",
          "nom_en": "Career Change",
          "desc_en":"Broader than job search.",
          "nom_fr":"Changement de carrière",
          "desc_fr":"Plus large que la recherche d'emploi.",
        },
        {

          "id": "1362",
          "nom_en": "Personal Branding",
          "desc_en":"Personal branding is the platform from which the world sees you. If you don\u2019t shape it yourself, other forces shape it for you. You don't have to be a household name to employ personal branding strategies. Such skills may help you land a job or get your budding business off the ground. In life, many people will try to define you. Take control of your identity and of the ways others may perceive you. Remember that makes you different can be your strength and your competitive edge.",
          "nom_fr":"L'image de marque personnelle",
          "desc_fr":"L'image de marque personnelle est la plateforme à partir de laquelle le monde vous voit. Si vous ne la façonnez pas vous-même, d'autres forces la façonnent pour vous. Vous n'avez pas besoin d'être un grand nom pour utiliser des stratégies de marque personnelle. Ces compétences peuvent vous aider à décrocher un emploi ou à faire décoller votre entreprise naissante. Dans la vie, de nombreuses personnes tenteront de vous définir. Prenez le contrôle de votre identité et de la façon dont les autres peuvent vous percevoir. N'oubliez pas que ce qui vous rend différent peut être votre force et votre avantage concurrentiel.",
        },
        {

          "id": "1532",
          "nom_en": "The MBA",
          "desc_en":"What is it worth?",
          "nom_fr":"The MBA",
          "desc_fr":"Quelle est sa valeur ?",
        },
        {

          "id": "88033",
          "nom_en": "Career Strategies",
          "desc_en":"From application to promotion to work transitions: Learn what it takes to create a career that you'll be proud to look back on.",
          "nom_fr":"Stratégies de carrière",
          "desc_fr":"De la candidature à la promotion en passant par les transitions professionnelles : Apprenez ce qu'il faut faire pour créer une carrière dont vous serez fier de vous souvenir.",
        },
        {

          "id": "1058",
          "nom_en": "Job Search",
          "desc_en":"The traditional linear career path is fast disappearing. Today, you can navigate the career lattice \u2013 moving up, down or sideways within your organization or industry \u2013 or you can leap from one career to a completely unrelated career. Or how about starting your own business? Discover the wealth of opportunities available to you.",
          "nom_fr":"Recherche d'emploi",
          "desc_fr":"La carri\u00e8re professionnelle lin\u00e9aire classique n'est plus d'actualit\u00e9. D\u00e9sormais, vous pouvez progresser professionnellement vers le haut ou de mani\u00e8re lat\u00e9rale, tout comme vous pouvez changer radicalement de carri\u00e8re. Pourquoi ne pas d\u00e9marrer votre propre entreprise ? D\u00e9couvrez toutes les opportunit\u00e9s qui s'offrent \u00e0 vous.",
        },
        {

          "id": "1429",
          "nom_en": "Starting a New Job",
          "desc_en":"Start your new job in a way that makes your intentions, ambitions and abilities clear.",
          "nom_fr":"Commencer un nouvel emploi",
          "desc_fr":"Commencez \u00e0 votre nouveau poste en montrant clairement quelles sont vos intentions, vos ambitions et vos comp\u00e9tences.",
        },
        {
          "id": "90745",
          "nom_en": "Future of Work",
          "desc_en":"How will factors like globalization, urbanization, and technological advances like automatization and integration of artificial intelligence influence the way people will work in the future?",
          "nom_fr":"L'avenir du travail",
          "desc_fr":"Comment des facteurs tels que la mondialisation et l'urbanisation, et des avanc\u00e9es technologiques telles que l'automatisation et l'int\u00e9gration de l'Intelligence artificielle influenceront-ils les modes de travail \u00e0 l'avenir ?",
        }
      ]
    },


    ////////////////////////////////////////////

    {
      "id": "94151",
      "nom_en": "Personal Development",
      "desc_en":"Do you want to grow and reach your full potential? Your personal development is a lifelong journey you can (re)start at any time. Learn new skills that will help you reach your goals, step by step. Stay motivated and celebrate every success \u2013 even the small ones.",
      "nom_fr":"D\u00e9veloppement personnel",
      "desc_fr":"Voulez-vous atteindre votre plein potentiel ? Le d\u00e9veloppement personnel est un cheminement continu que vous pouvez (re)commencer \u00e0 tout moment. Apprenez de nouvelles comp\u00e9tences qui vous aideront \u00e0 atteindre vos objectifs, \u00e9tape par \u00e9tape. Gardez votre motivation intacte et c\u00e9l\u00e9brez chaque victoire \u2013 de la plus modeste \u00e0 la plus \u00e9clatante.",

      "sub_cat": [{

        "id": "1169",
        "nom_en": "Assertiveness",
        "desc_en":"Stand up and be heard: Master the business advantage of clear, articulate, forceful speech.",
        "nom_fr":"Confiance en soi",
        "desc_fr":"Osez vous exprimer et faites-vous entendre. Ma\u00eetrisez cet atout professionnel en pratiquant un discours clair, articul\u00e9 et percutant.",

      },
      {

        "id": "89309",
        "nom_en": "Authenticity",
        "desc_en":"Nobody wants to come across as phony or false. However, standing up for what you believe in and speaking the truth as it seems to you is easier said than done. Learn how to find the right balance between being friendly and being frank.",
        "nom_fr":"Authenticité",
        "desc_fr":"Personne ne veut passer pour quelqu'un de faux ou d'hypocrite. Cependant, défendre ce en quoi vous croyez et dire la vérité telle qu'elle vous semble est plus facile à dire qu'à faire. Apprenez à trouver le juste équilibre entre l'amabilité et la franchise.",


      },
      {
        "id": "1391",
        "nom_en": "Change Your Attitude",
        "desc_en":"Take a new approach to your life and work: Turn that frown upside down!",
        "nom_fr":"Changez votre attitude",
        "desc_fr":"Adoptez une nouvelle approche de votre vie et de votre travail : Renversez la situation !",
      },
      {
        "id": "1184",
        "nom_en": "Charisma",
        "desc_en":"How to inspire by just being you, only more magnetic.",
        "nom_fr":"Charisma",
        "desc_fr":"Comment inspirer en étant simplement vous, mais en étant plus magnétique.",
      },
      {
        "id": "1191",
        "nom_en": "Emotional Intelligence",
        "desc_en":"You may think you are smart, but how smart do you feel? How to heighten your sensitivity, awareness and emotional depth to make your business brighter.",
        "nom_fr":"Intelligence \u00e9motionnelle",
        "desc_fr":"Vous pouvez penser que vous \u00eates intelligent(e).... mais vous sentez-vous intelligent(e) ? Comment d\u00e9velopper votre sensitivit\u00e9, votre perception et votre profondeur \u00e9motionnelle pour am\u00e9liorer votre quotidien professionnel.",

      },

      {
        "id": "1541",
        "nom_en": "Habits",
        "desc_en":"When we repeat a behavior over and over, our brain forms a habit that grows stronger with every iteration. Eventually that behavior becomes an automatic routine. We often call this process \u201clearning by doing.\u201d This type of learning works for athletes and musicians, but it also works for business people. Professionals in any area can create habits to positively shape their life and career.",
        "nom_fr":"Habitudes",
        "desc_fr":"Lorsque nous r\u00e9p\u00e9tons le m\u00eame comportement encore et encore, le cerveau cr\u00e9e une habitude qui se renforce \u00e0 chaque it\u00e9ration. Puis ce comportement finit par devenir une routine. C'est ce qu'on appelle souvent \"l'apprentissage par la pratique\". Ce processus fonctionne pour les athl\u00e8tes et les musiciens, mais \u00e9galement pour les professionnels de l'entreprise. Tous les professionnels, quel que soit leur domaine, peuvent cr\u00e9er des habitudes qui les aideront \u00e0 optimiser leur vie et leur carri\u00e8re.",
      },
      {
        "id": "1696",
        "nom_en": "Personal Accountability",
        "desc_en":"Winston Churchill said, \"The prize of greatness is responsibility.\" To achieve this greatness, take ownership and be accountable. Here's how.",
        "nom_fr":"Responsabilité personnelle",
        "desc_fr":"Winston Churchill a dit : \"Le prix de la grandeur est la responsabilité\". Pour atteindre cette grandeur, assumez votre responsabilité et soyez responsable. Voici comment.",
      },

      {
        "id": "1612",
        "nom_en": "Resilience",
        "desc_en":"Life\u2019s tough. Here\u2019s how to weather life\u2019s storms and keep going.",
        "nom_fr":"R\u00e9silience",
        "desc_fr":"La vie est une lutte constante. Voici comment naviguer dans la temp\u00eate sans perdre le cap.",


      },

      {
        "id": "1664",
        "nom_en": "Mindfulness",
        "desc_en":"Learn how to become more aware of what\u2019s going on \u2013 right here, right now.",
        "nom_fr":"Pleine conscience",
        "desc_fr":"Ayez pleinement conscience du monde qui vous entoure - ici et maintenant.",

      },

      {
        "id": "1055",
        "nom_en": "Creativity",
        "desc_en":"You can tap the creative potential that lies dormant in most people. To foster your employees' creativity, give them the space to develop and share ideas. As an employee, take the time to let your ideas flow so you can put the best ones into practice.",
        "nom_fr":"Cr\u00e9ativit\u00e9",
        "desc_fr":"Vous pouvez exploiter le potentiel cr\u00e9atif qui sommeille chez la plupart d'entre nous. Pour stimuler la cr\u00e9ativit\u00e9 de vos collaborateurs, offrez-leur l'espace n\u00e9cessaire pour d\u00e9velopper et partager leurs id\u00e9es. En tant qu'employ\u00e9, laissez libre cours \u00e0 votre imagination pour mettre en pratique vos meilleures id\u00e9es.",
      },
      ]
    },
    /////////////////////////////////////////////////////

    {
      "id": "90873",
      "nom_en": "Workplace Skills",
      "desc_en":"You can become more capable in any field by learning and practicing skills such as time management, decision making, or goal setting. Pull up your sleeves and get started!",
      "nom_fr":"Comp\u00e9tences professionnelles",
      "desc_fr":"Vous pouvez vous am\u00e9liorer dans n'importe quel domaine en acqu\u00e9rant et en pratiquant de nouvelles comp\u00e9tences telles que la gestion du temps, la prise de d\u00e9cision ou la d\u00e9finition d'objectifs. Commencez sans tarder !",
      "sub_cat": [
        {
          "id": "1173",
          "nom_en": "Getting Organized",
          "desc_en":"How to use your time, master your clutter and clear your calendar for unbeaten effectiveness.",
          "nom_fr":"Savoir s\u2019organiser",
          "desc_fr":"Comment organiser votre travail, mieux g\u00e9rer votre temps et \u00e9liminer le superflu pour plus d\u2019efficacit\u00e9.",

        },
        {
          "id": "92780",
          "nom_en": "Goal Setting",
          "desc_en":"Goal setting can go wrong so many ways \u2013 scope, time, targets, teams, even a grasp of reality. Here's how to set goals that are doable, timely, inspiring, productive, motivating and realistic (sometimes all at once).",
          "nom_fr":"Fixation des objectifs",
          "desc_fr":"La fixation d'objectifs peut mal tourner à bien des égards : portée, temps, cibles, équipes, voire même appréhension de la réalité. Voici comment fixer des objectifs réalisables, opportuns, inspirants, productifs, motivants et réalistes (parfois tout à la fois).",

        },
        {
          "id": "1541",
          "nom_en": "Habits",
          "desc_en":"When we repeat a behavior over and over, our brain forms a habit that grows stronger with every iteration. Eventually that behavior becomes an automatic routine. We often call this process \u201clearning by doing.\u201d This type of learning works for athletes and musicians, but it also works for business people. Professionals in any area can create habits to positively shape their life and career.",
          "nom_fr":"Habitudes",
          "desc_fr":"Lorsque nous r\u00e9p\u00e9tons le m\u00eame comportement encore et encore, le cerveau cr\u00e9e une habitude qui se renforce \u00e0 chaque it\u00e9ration. Puis ce comportement finit par devenir une routine. C'est ce qu'on appelle souvent \"l'apprentissage par la pratique\". Ce processus fonctionne pour les athl\u00e8tes et les musiciens, mais \u00e9galement pour les professionnels de l'entreprise. Tous les professionnels, quel que soit leur domaine, peuvent cr\u00e9er des habitudes qui les aideront \u00e0 optimiser leur vie et leur carri\u00e8re.",

        },
        {
          "id": "1277",
          "nom_en": "Holding Meetings",
          "desc_en":"Meetings can be productive or deadly; it's all in the planning.",
          "nom_fr":"Holding Meetings",
          "desc_fr":"Meetings can be productive or deadly; it's all in the planning.",

        },
        {
          "id": "1142",
          "nom_en": "Learning Techniques",
          "desc_en":"You can be a life-long student.",
          "nom_fr":"Techniques d'apprentissage",
          "desc_fr":"Vous pouvez être un étudiant à vie.",
        },
        {
          "id": "1165",
          "nom_en": "Office Politics",
          "desc_en":"Think election campaigns are tough? Just look at the power struggles in your office. Get your survival manuals right here.",
          "nom_fr":"Politique du bureau",
          "desc_fr":"Vous pensez que les campagnes électorales sont difficiles ? Il suffit de regarder les luttes de pouvoir dans votre bureau. Obtenez vos manuels de survie ici même.",

        },
        {
          "id": "1052",
          "nom_en": "Speak, Write, Present",
          "desc_en":"Master the skills to be an effective communicator.",
          "nom_fr":"Parler, \u00e9crire, pr\u00e9senter",
          "desc_fr":"Pr\u00eat pour le grand show ? Vous trouverez ici les meilleurs conseils pour captiver votre auditoire, avec des pr\u00e9sentations percutantes et des discours efficaces.",
          "sub_cat": [
            {
              "id": "1175",
              "nom_en": "Presenting",
              "desc_en":"You’ve made it to the the podium, pointer at the ready. Now learn how to wow the crowd!",
              "nom_fr":"Réussir vos présentations",
              "desc_fr":"Remportez l’adhésion avec des présentations réussies",
            },
            {
              "id": "1676",
              "nom_en": "Public Speaking",
              "desc_en":"Once upon a time...",
              "nom_fr":"Parler en public",
              "desc_fr":"Boostez votre capital compétence grâce à des présentations efficaces",
            },
            {
              "id": "1475",
              "nom_en": "Storytelling",
              "desc_en":"Once upon a time, a company spun a rich, meaningful narrative that engaged its employees, moved its customers and inspired its investors. The moral of this fable? Stories are memorable tales that allow you to create strong emotional bonds with your clients and stakeholders.",
              "nom_fr":"Storytelling",
              "desc_fr":"Il était une fois une entreprise qui créa un récit riche et plein de sens, et parvint à motiver ses employés, toucher ses clients et inspirer ses investisseurs. La morale de cette fable ? Les histoires sont des contes mémorables qui vous permettent de créer un lien fort avec vos clients et toutes vos parties prenantes.",
            },
          ]
        },
        {

          "id": "1171",
          "nom_en": "Become More Productive",
          "desc_en":"Banish lethargy, get organized and sharpen your focus to become more productive at work.",
          "nom_fr":"D\u00e9veloppez votre productivit\u00e9",
          "desc_fr":"Fuyez l'inertie, organisez-vous et apprenez \u00e0 mieux vous concentrer pour am\u00e9liorer votre productivit\u00e9 au travail.",
          "sub_cat": [
            {
              "id": "1054",
              "nom_en": "Time Management",
              "desc_en":"Invest time to save time: Read all the relevant information about time management here.",
              "nom_fr":"Gestion du temps",
              "desc_fr":"Investissez du temps pour en économiser : voici tout ce que vous devez savoir sur la gestion du temps. Car selon l'adage, un point à temps en vaut cent...",
            },
          ]
        },

        {
          "id": "1054",
          "nom_en": "Time Management",
          "desc_en":"Invest time to save time: Read all the relevant information about time management here.",
          "nom_fr":"Gestion du temps",
          "desc_fr":"Investissez du temps pour en \u00e9conomiser : voici tout ce que vous devez savoir sur la gestion du temps. Car selon l'adage, un point \u00e0 temps en vaut cent...",

        },
        {
          "id": "1217",
          "nom_en": "Decision Making",
          "desc_en":"How to face tough choices with strategy and sense.",
          "nom_fr":"Prise de d\u00e9cision",
          "desc_fr":"Prendre la meilleure d\u00e9cision en combinant pragmatisme et vision \u00e0 long terme",

        },
        {
          "id": "1599",
          "nom_en": "Problem-Solving Techniques",
          "desc_en":"Have you ever been stumped with a complex problem that you couldn't figure out how to resolve? Such dilemmas can wreak havoc on your life, productivity and mental health. Alas, in life and at work, we face complex problems every day. Learn about the mental models that can help you untangle those thorny issues.",
          "nom_fr":"Techniques de résolution de problèmes",
          "desc_fr":"Avez-vous déjà été confronté à un problème complexe que vous ne parveniez pas à résoudre ? De tels dilemmes peuvent faire des ravages dans votre vie, votre productivité et votre santé mentale. Hélas, dans la vie comme au travail, nous sommes tous les jours confrontés à des problèmes complexes. Découvrez les modèles mentaux qui peuvent vous aider à démêler ces problèmes épineux.",

        },
        {
          "id": "1609",
          "nom_en": "Reading",
          "desc_en":"Many of the world's most successful entrepreneurs \u2013 including Bill Gates, Elon Musk and Warren Buffett \u2013 attribute their success to reading at least one hour each day. Yet as the internet increasingly encroaches on everyday life, human attention span is waning and reading is becoming a lost art. Schedule some reading time into your day to draw novel connections, learn new information and boost your skills.",
          "nom_fr":"Lecture",
          "desc_fr":"Bon nombre des entrepreneurs les plus prospères du monde \u2013, dont Bill Gates, Elon Musk et Warren Buffett \u2013, attribuent leur réussite à la lecture d'au moins une heure par jour. Pourtant, alors qu'Internet empiète de plus en plus sur la vie quotidienne, la durée d'attention humaine diminue et la lecture devient un art perdu. Prévoyez du temps de lecture dans votre journée pour établir de nouveaux liens, apprendre de nouvelles informations et renforcer vos compétences.",
        },
      ]
    },
    //////////////////////////////////////////////////

    {
      "id": "104343",
      "nom_en": "Social Skills",
      "desc_en":"Improve the skills that help you to interact with others. Be a better team player, negotiator, and business partner. Use the power of collective intelligence!",
      "nom_fr":"Comp\u00e9tences relationnelles",
      "desc_fr":"Am\u00e9liorez vos comp\u00e9tences interpersonnelles. Soyez mieux int\u00e9gr\u00e9(e) dans votre \u00e9quipe, am\u00e9liorez vos talents de n\u00e9gociation, devenez un(e) associ\u00e9(e) plus efficace. Optimisez le pouvoir de l'intelligence collective !",
      "sub_cat": [
        {

          "id": "1297",
          "nom_en": "Asking Questions",
          "desc_en":"Like listening, asking is an underutilized social skill in business and in life. While those who talk the talk are eager to dominate conversations with their arrogant, self-involved opinions, individuals who thoughtfully take a step back to ask about and explore the nub of an issue often stumble across more considerate solutions. Learning how to ask with genuine sincerity can change your outlook and help you to achieve your ambitions in life.",
          "nom_fr":"Poser des questions ",
          "desc_fr":"Comme l'écoute, la question est une compétence sociale sous-utilisée dans les affaires et dans la vie. Alors que ceux qui ont la langue bien pendue s'empressent de dominer les conversations avec leurs opinions arrogantes et égocentriques, les personnes qui prennent un peu de recul pour poser des questions et explorer le cœur d'un problème tombent souvent sur des solutions plus réfléchies. Apprendre à demander avec une sincérité authentique peut changer votre vision des choses et vous aider à réaliser vos ambitions dans la vie.",

        },
        {

          "id": "1339",
          "nom_en": "Conflict Resolution",
          "desc_en":"Cut through the anger and solve the problem.",
          "nom_fr":"R\u00e9solution de conflit",
          "desc_fr":"Oubliez la col\u00e8re et passez en mode r\u00e9solution.",


        },
        {
          "id": "1166",
          "nom_en": "Dealing with Difficult People at Work",
          "desc_en":"Sure, there are jerks in the world, but why do they all work at your office? How to cope with creeps and cretins.",
          "nom_fr":"G\u00e9rer les personnalit\u00e9s difficiles au travail",
          "desc_fr":"Bien s\u00fbr, le monde est rempli d\u2019imb\u00e9ciles... mais pourquoi travaillent-ils tous dans votre entreprise ? Apprenez \u00e0 g\u00e9rer les sales types, les harpies et les sombres cr\u00e9tins.",

        },
        {
          "id": "1410",
          "nom_en": "Effective Communication",
          "desc_en":"Good communicators know how to get what they want by saying what they mean. Avoid misunderstandings and learn to convey your ideas clearly and effectively so you know that people get your message \u2013 every time.",
          "nom_fr":"L\u2019art de communiquer",
          "desc_fr":"Am\u00e9liorez vos techniques de communication",
        },

        {
          "id": "1621",
          "nom_en": "Feedback",
          "desc_en":"Feedback works if it is fair, factual and focused on specific steps employees can take to improve and succeed. Learn how to give productive feedback that helps and motivates as well as how to receive it with grace.",
          "nom_fr":"Commentaires",
          "desc_fr":"Le retour d'information fonctionne s'il est juste, factuel et axé sur les mesures spécifiques que les employés peuvent prendre pour s'améliorer et réussir. Apprenez à donner un feedback productif qui aide et motive, et à le recevoir avec grâce.",
        },
        {
          "id": "1087",
          "nom_en": "Intercultural Competence",
          "desc_en":"In the age of globalization, managers and other employees require intercultural competence. How do you deal with people from different cultural backgrounds? What are the dos and don\u2019ts of etiquette? Learn how to avoid putting your foot in your mouth when working in, or with people from, different cultures.",
          "nom_fr":"Comp\u00e9tence interculturelle",
          "desc_fr":"\u00c0 l'\u00e8re de la globalisation, managers et employ\u00e9s requi\u00e8rent des comp\u00e9tences interculturelles. Comment g\u00e9rer des collaborateurs issus de cultures diff\u00e9rentes ? Quelles sont les choses \u00e0 faire et \u00e0 ne pas faire ? Apprenez \u00e0 \u00e9viter les faux pas lorsque vous travaillez dans un pays ou avec des personnes de culture diff\u00e9rente.",
        },
        {
          "id": "1248",
          "nom_en": "Listening",
          "desc_en":"Heed the golden rule of communication: Listen first, then respond. Learn how to hear what people are saying and tune into what they're not saying.",
          "nom_fr":"Écoute",
          "desc_fr":"Respectez la règle d'or de la communication : Écouter d'abord, répondre ensuite. Apprenez à entendre ce que les gens disent et à vous intéresser à ce qu'ils ne disent pas.",
        },

        {
          "id": "1053",
          "nom_en": "Negotiation",
          "desc_en":"What\u2019s your tactic: a soft approach or a hard-hitting attack? Successful negotiators leverage both methods. They know that a solution is effective only if both parties benefit from it. Learn how to create win-win situations.",
          "nom_fr":"N\u00e9gociation",
          "desc_fr":"Quelle est votre strat\u00e9gie : \u00eates-vous plut\u00f4t soft ou plut\u00f4t percutant ? Les n\u00e9gociateurs efficaces combinent les deux tactiques, car ils savent qu'une solution n'est valable que si les deux parties y gagnent. Voici comment cr\u00e9er des solutions win-win.",
        },
        {
          "id": "1161",
          "nom_en": "Networking",
          "desc_en":"Seven degrees of separation is six too many: How to network all your contacts into the perfect career.",
          "nom_fr":"R\u00e9seautage",
          "desc_fr":"Six degr\u00e9s de s\u00e9paration, ce sont cinq de trop. Comment r\u00e9seauter avec tous vos contacts pour parfaire votre carri\u00e8re.",
        },
        {
          "id": "1619",
          "nom_en": "Nonverbal Communication",
          "desc_en":"Only 7% of a statement's effect is from what you say \u2013 the other 93% is determined by your body language.",
          "nom_fr":"Communication non verbale",
          "desc_fr":"Seuls 7 % de l'effet d'une déclaration proviennent de ce que vous dites ; les 93 % restants sont déterminés par votre langage corporel.",
        },
        {
          "id": "1540",
          "nom_en": "Parenting",
          "desc_en":"Bringing a child into the world is the easy part. Now you are in charge of not only nurturing and nourishing your little person but shaping your rug rat into a well-rounded, resilient, content, confident individual. The weight of that responsibility can feel overwhelming, but that's completely natural. Luckily you're not the world's first parent! Heed the advice of the sage moms and dads who have gone before you.",
          "nom_fr":"L'éducation des enfants",
          "desc_fr":"Mettre un enfant au monde est la partie facile. Maintenant, vous êtes en charge non seulement de nourrir et d'élever votre petit être, mais aussi de le transformer en un individu équilibré, résilient, satisfait et confiant. Le poids de cette responsabilité peut vous sembler écrasant, mais c'est tout à fait naturel. Heureusement, vous n'êtes pas le premier parent du monde ! Tenez compte des conseils des sages mamans et papas qui vous ont précédés.",
        },
        {
          "id": "1298",
          "nom_en": "Persuasion",
          "desc_en":"Learn to captivate, convince and coax your audience.",
          "nom_fr":"L\u2019art de la persuasion",
          "desc_fr":"Les attitudes fondamentales pour convaincre",
        },
        {
          "id": "1359",
          "nom_en": "Small Talk",
          "desc_en":"Why your business relationships may hinge on the large role of small talk.",
          "nom_fr":"Petite conversation",
          "desc_fr":"Pourquoi vos relations d'affaires peuvent dépendre du rôle important des petites conversations.",
        },
        {
          "id": "1143",
          "nom_en": "Teamwork",
          "desc_en":"So much of work now is organized around teams, which is a great thing if you have a great team. Learn how to work smoothly with your co-workers and unite to reach your team goals.",
          "nom_fr":"Travail en \u00e9quipe",
          "desc_fr":"Une grande partie du travail aujourd'hui est organis\u00e9e autour des \u00e9quipes \u2013 ce qui fonctionne parfaitement si vous avez une bonne \u00e9quipe. Pour aider votre \u00e9quipe \u00e0 se d\u00e9passer, apprenez comment faire pour que tous ses membres collaborent en harmonie, \u00e9changent leurs id\u00e9es, partagent leur expertise, se soutiennent les uns les autres, pratiquent l'\u00e9mulation et s'unissent pour leurs objectifs communs.",
        },
        {
          "id": "1376",
          "nom_en": "Trust",
          "desc_en":"You can\u2019t measure it, but you must have it. You can\u2019t see it, but you can see its absence: trust in the workplace. How to get it and keep it.",
          "nom_fr":"La confiance",
          "desc_fr":"Miser sur une valeur s\u00fbre",
        },

      ]
    },
    ////////////////////////////////////////////////////////////////////////////
    {

      "id": "1063",
      "nom_en": "Life Advice",
      "desc_en":"When your life suddenly turns upside down or when you just want to make improvements, get advice from the experts \u2013 even if it\u2019s just to help you analyze your own views. These personal development summaries provide trustworthy guidance.",
      "nom_fr":"Conseils de vie",
      "desc_fr":"Si votre vie bascule soudainement, vous aurez certainement besoin d'avis objectifs, ne serait-ce que pour vous aider \u00e0 analyser vos propres points de vue. Ces r\u00e9sum\u00e9s seront pour vous une source de conseils fiable.",
      "sub_cat": [
        {

          "id": "96245",
          "nom_en": "Advice for Graduates",
          "desc_en":"",
          "nom_fr":"Conseils pour les diplômés",
          "desc_fr":"",

        },
        {

          "id": "1391",
          "nom_en": "Change Your Attitude",
          "desc_en":"Take a new approach to your life and work: Turn that frown upside down!",
          "nom_fr":"Changez votre attitude",
          "desc_fr":"Adoptez une nouvelle approche de votre vie et de votre travail : Renversez la situation !",

        },
        {
          "id": "1697",
          "nom_en": "Happiness",
          "desc_en":"What does it take to make you happy?",
          "nom_fr":"Bonheur",
          "desc_fr":"Qu'est-ce qui vous apporte le bonheur ?",
        },
        {
          "id": "118955",
          "nom_en": "Lessons from Sports",
          "desc_en":"Athletic competition offers a familiar but meaningful metaphor for winning, succeeding, pursing excellence and being disciplined. From deciding how to attack business challenges to seeking personal motivation, the answers you want may come from the multifaceted world of sports where learning to play ball has a myriad of meanings.",
          "nom_fr":"Les leçons du sport",
          "desc_fr":"La compétition sportive est une métaphore familière mais significative de la victoire, de la réussite, de la recherche de l'excellence et de la discipline. Qu'il s'agisse de décider comment relever des défis commerciaux ou de rechercher une motivation personnelle, les réponses que vous cherchez peuvent provenir du monde multiforme du sport, où apprendre à jouer au ballon a une myriade de significations.",
        },
        {

          "id": "92888",
          "nom_en": "Love & Partnership",
          "desc_en":"",
          "nom_fr":"Amour et partenariat",
          "desc_fr":"",

        },
        {
          "id": "1540",
          "nom_en": "Parenting",
          "desc_en":"Bringing a child into the world is the easy part. Now you are in charge of not only nurturing and nourishing your little person but shaping your rug rat into a well-rounded, resilient, content, confident individual. The weight of that responsibility can feel overwhelming, but that's completely natural. Luckily you're not the world's first parent! Heed the advice of the sage moms and dads who have gone before you.",
          "nom_fr":"L'éducation des enfants",
          "desc_fr":"Mettre un enfant au monde est la partie facile. Maintenant, vous êtes en charge non seulement de nourrir et d'élever votre petit être, mais aussi de le transformer en un individu équilibré, résilient, satisfait et confiant. Le poids de cette responsabilité peut vous sembler écrasant, mais c'est tout à fait naturel. Heureusement, vous n'êtes pas le premier parent du monde ! Tenez compte des conseils des sages mamans et papas qui vous ont précédés.",
        },
        {
          "id": "1035",
          "nom_en": "Personal Finances",
          "desc_en":"Money makes the world go around, so master it: Here's how to earn, save, spend and invest.",
          "nom_fr":"Argent",
          "desc_fr":"L'argent dirige le monde... alors ma\u00eetrisez-le ! Trouvez ici des conseils pour en gagner, l'\u00e9conomiser, le d\u00e9penser et l'investir.",
        },
        {
          "id": "1057",
          "nom_en": "Psychology",
          "desc_en":"Why do you think, feel and behave the way you do? Psychologists all over the world have spent centuries trying to understand how the human mind ticks. Dive into the world of psychology and find answers to fundamental questions of life.",
          "nom_fr":"Psychologie",
          "desc_fr":"Quelle structure bat les super ordinateurs en complexit\u00e9 et en intelligence\u00a0? Le cerveau humain, bien s\u00fbr. Les ordinateurs parviendront-ils un jour \u00e0 surpasser l'intelligence humaine\u00a0? Comment le cerveau est-il configur\u00e9\u00a0? Quel impact aura l'\u00e9volution sur notre cerveau\u00a0? Connectez vos synapses aux derni\u00e8res avanc\u00e9es en sciences cognitives.",
          "sub_cat": [
            {
              "id": "1191",
              "nom_en": "Emotional Intelligence",
              "desc_en":"You may think you are smart, but how smart do you feel? How to heighten your sensitivity, awareness and emotional depth to make your business brighter.",
              "nom_fr":"Intelligence émotionnelle",
              "desc_fr":"Vous pouvez penser que vous êtes intelligent(e).... mais vous sentez-vous intelligent(e) ? Comment développer votre sensitivité, votre perception et votre profondeur émotionnelle pour améliorer votre quotidien professionnel.",
            },
            {
              "id": "1612",
              "nom_en": "Resilience",
              "desc_en":"Life’s tough. Here’s how to weather life’s storms and keep going.",
              "nom_fr":"Résilience",
              "desc_fr":"La vie est une lutte constante. Voici comment naviguer dans la tempête sans perdre le cap.",
            },
          ]
        },
        {
          "id": "1164",
          "nom_en": "Purpose",
          "desc_en":"Finding real meaning in your work and in your life.",
          "nom_fr":"Objectif",
          "desc_fr":"Trouver un véritable sens à son travail et à sa vie.",
        },
        {
          "id": "1612",
          "nom_en": "Resilience",
          "desc_en":"Life\u2019s tough. Here\u2019s how to weather life\u2019s storms and keep going.",
          "nom_fr":"R\u00e9silience",
          "desc_fr":"La vie est une lutte constante. Voici comment naviguer dans la temp\u00eate sans perdre le cap.",
        },
        {
          "id": "1196",
          "nom_en": "Retirement",
          "desc_en":"",
          "nom_fr":"Retirement",
          "desc_fr":"",
        },
        {
          "id": "1051",
          "nom_en": "Health & Fitness",
          "desc_en":"\u201cHow are you feeling?\u201d isn't just a polite question. Your well-being is the linchpin of your work and personal life. From medical science to the latest on fitness and wellness, here's to your health!",
          "nom_fr":"Sant\u00e9 et forme",
          "desc_fr":"\u00ab Comment allez-vous ? \u00bb n'est pas qu'une question polie. Votre bien-\u00eatre joue un r\u00f4le fondamental au travail comme dans votre vie priv\u00e9e. Des sciences m\u00e9dicales aux derni\u00e8res nouveaut\u00e9s en mati\u00e8re d'activit\u00e9 physique et de bien-\u00eatre\u2026 et si nous parlions sant\u00e9 ?",
        },
        {
          "id": "89919",
          "nom_en": "Work-Life-Balance",
          "desc_en":"",
          "nom_fr":"\u00c9quilibre vie priv\u00e9e \u2013 vie professionnelle",
          "desc_fr":"\u00c0 l'\u00e8re de la digitalisation, du t\u00e9l\u00e9travail et de la disponibilit\u00e9 non-stop, la fronti\u00e8re entre la vie priv\u00e9e et la vie professionnelle devient de plus en plus floue. Vous trouverez ici des ouvrages qui peuvent vous aider \u00e0 retrouver un sain \u00e9quilibre.",
        },
        {
          "id": "1059",
          "nom_en": "Stress",
          "desc_en":"The pressure's on. Here's how to deal with it before it crushes you.",
          "nom_fr":"Gestion du stress",
          "desc_fr":"Nous sommes continuellement sous pression. Apprenez \u00e0 r\u00e9sister au stress pour ne pas y succomber.",
        },
        {
          "id": "1664",
          "nom_en": "Mindfulness",
          "desc_en":"Learn how to become more aware of what\u2019s going on \u2013 right here, right now.",
          "nom_fr":"Pleine conscience",
          "desc_fr":"Ayez pleinement conscience du monde qui vous entoure - ici et maintenant.",
        },
        {

          "id": "1217",
          "nom_en": "Decision Making",
          "desc_en":"How to face tough choices with strategy and sense.",
          "nom_fr":"Prise de d\u00e9cision",
          "desc_fr":"Prendre la meilleure d\u00e9cision en combinant pragmatisme et vision \u00e0 long terme",

        },
      ]
    },

    ////////////////////////////////////////////

    {
      "id": "112978",
      "nom_en": "Coronavirus Pandemic",
      "desc_en":"Coronavirus disease 2019 (COVID-19) is an infectious viral respiratory disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2), also known as \u201cnovel coronavirus.\u201d Reports in December 2019, from Wuhan, China, first cited the disease, which has spread globally, resulting in the ongoing coronavirus pandemic that affects people and businesses worldwide.",
      "nom_fr":"Pand\u00e9mie de coronavirus 2019\u201320",
      "desc_fr":"La maladie Covid-19 est provoqu\u00e9e par le coronavirus 2 du syndrome respiratoire aigu s\u00e9v\u00e8re (SRAS-CoV-2), \u00e9galement connu sous le nom de \"nouveau coronavirus\". La maladie a \u00e9t\u00e9 signal\u00e9e pour la premi\u00e8re fois en d\u00e9cembre 2019, \u00e0 Wuhan, en Chine, et s'est depuis propag\u00e9e dans le monde entier pour entra\u00eener la pand\u00e9mie de coronavirus 2019-20 qui touche les individus et les entreprises du monde entier. Consultez cette cha\u00eene pour de nouveaux r\u00e9sum\u00e9s !",
    },

    ///////////////////////////////////////////////////////////////////////

    {
      "id": "1099",
      "nom_en": "Science",
      "desc_en":"What is the universe made of? What is consciousness? What makes us humans? Will we ever cure cancer? Is human-induced climate change reversible? What are the limits of manipulating nature? Scientists work hard to answers these and many other questions about the world. Keep up to date with the latest advancements in science and find the answers you\u2019re looking for.",
      "nom_fr":"Sciences",
      "desc_fr":"De quoi est fait l'univers ? Qu'est-ce que la conscience ? Qu'est-ce qui nous rend humains ? Pourra-t-on un jour vaincre le cancer ? Le r\u00e9chauffement climatique d'origine humaine est-il r\u00e9versible ? Jusqu'o\u00f9 peut-on manipuler la nature ? Les scientifiques s'efforcent de r\u00e9pondre \u00e0 ces questions, ainsi qu'\u00e0 toutes les autres qui concernent notre monde. D\u00e9couvrez les derni\u00e8res avanc\u00e9es scientifiques et trouvez les r\u00e9ponses \u00e0 vos questions.",
      "sub_cat": [
        {
          "id": "1874",
          "nom_en": "Biology",
          "desc_en":"What is life? Biologists tackle this question by studying living organisms, their development, anatomy, physiology, molecular and cellular mechanisms, and evolution.",
          "nom_fr":"Biologie",
          "desc_fr":"Qu'est-ce que la vie ? Les biologistes abordent cette question en étudiant les organismes vivants, leur développement, leur anatomie, leur physiologie, les mécanismes moléculaires et cellulaires, et l'évolution.",
        },
        {
          "id": "1895",
          "nom_en": "History of Science",
          "desc_en":"",
          "nom_fr":"",
          "desc_fr":"",
        },  
        {
          "id": "1899",           
          "nom_en": "Mathematics",
          "desc_en":"",
          "nom_fr":"",
          "desc_fr":"",
        },
        {
          "id": "1883",
          "nom_en": "Medicine",
          "desc_en":"How can diseases be treated or even be prevented? And how to diagnose diseases in the first place? The science and practice of medicine seeks to find answers to these questions and to maintain and restore health using a variety of interventions, methods and therapies.",
          "nom_fr":"Médecine",
          "desc_fr":"Comment traiter les maladies ou même les prévenir ? Et comment diagnostiquer les maladies en premier lieu ? La science et la pratique de la médecine cherchent à trouver des réponses à ces questions et à maintenir et rétablir la santé à l'aide d'une variété d'interventions, de méthodes et de thérapies.",
        },
        {
          "id": "1877",
          "nom_en": "Neuroscience",
          "desc_en":"How does the brain work? To find out, neuroscientists study the nervous system, including its development, anatomy, physiology, circuitry, molecular and cellular mechanisms, and functions \u2013 such as memory, sleep, behavior and cognition. But will the brain ever understand itself completely?",
          "nom_fr":"Neurosciences",
          "desc_fr":"Comment le cerveau fonctionne-t-il ? Pour le découvrir, les neuroscientifiques étudient le système nerveux, y compris son développement, son anatomie, sa physiologie, ses circuits, ses mécanismes moléculaires et cellulaires, et ses fonctions \u2013 telles que la mémoire, le sommeil, le comportement et la cognition. Mais le cerveau pourra-t-il un jour se comprendre complètement ?",
        },
        {
          "id": "1897",
          "nom_en": "Paleontology",
          "desc_en":"",
          "nom_fr":"",
          "desc_fr":"",
        },
        {
          "id": "1355",
          "nom_en": "Physics",
          "desc_en":"How does the universe work and what is it made of? To find out, physicists study space and time, as well as the structure, behavior, and motion of matter. Will they ever find a theory that explains it all, a theory of everything?",
          "nom_fr":"Physique",
          "desc_fr":"Comment fonctionne l'univers et de quoi est-il fait ? Pour le découvrir, les physiciens étudient l'espace et le temps, ainsi que la structure, le comportement et le mouvement de la matière. Trouveront-ils un jour une théorie qui explique tout, une théorie du tout ?",
        },
        {
          "id": "1893",
          "nom_en": "Agriculture",
          "desc_en":"The moment people began cultivating land and breeding plants and animals became a turning point for human civilization. Today, the global demand for food is rising along with the dramatic increase of the world\u2019s population. How can humanity meet the world\u2019s unprecedented demand for food?",
          "nom_fr":"Agriculture",
          "desc_fr":"La civilisation est n\u00e9e lorsque les hommes ont commenc\u00e9 \u00e0 cultiver la terre et \u00e0 pratiquer l'\u00e9levage. Aujourd'hui, la demande mondiale de nourriture augmente au m\u00eame rythme rapide que la population mondiale. Comment l'humanit\u00e9 peut-elle r\u00e9pondre \u00e0 cet accroissement sans pr\u00e9c\u00e9dent de la demande alimentaire mondiale ?",
        },
        {
          "id": "1894",
          "nom_en": "Pharmacology",
          "desc_en":"",
          "nom_fr":"",
          "desc_fr":"",
        },
        {
          "id": "1747",
          "nom_en": "Artificial Intelligence",
          "desc_en":"What\u2019s artificial intelligence? Some say it\u2019s about machine intelligence that\u2019s comparable to natural intelligence or human cognition, such as learning or problem solving. Larry Tesler turns it around and says \u201cIntelligence is whatever machines haven\u2019t done yet.\u201d",
          "nom_fr":"Intelligence artificielle",
          "desc_fr":"Qu'est-ce que l'Intelligence Artificielle (IA) ? Certains \u00e9voquent l'IA d\u00e8s que les actions d'une machine semblent comparables \u00e0 un processus cognitif humain comme l'apprentissage ou la r\u00e9solution de probl\u00e8me. D'autres adoptent une perspective diff\u00e9rente \u2013 tel Larry Tesler : \u00ab L'intelligence, c'est ce que les machines n'ont pas encore fait. \u00bb",
          "sub_cat": [
            {
              "id": "1896",
              "nom_en": "AI in the Workplace",
              "desc_en":"If your workplace isn't the home office, you'll appreciate meeting colleagues in person. Some of them at the coffee machine. The human ones, at least. But chances are that some of your collaborators are AI-powered. It doesn't have to be in the physical form of a robot, though.",
              "nom_fr":"L'Intelligence Artificielle au travail",
              "desc_fr":"If your workplace isn't the home office, you'll appreciate meeting colleagues in person. Some of them at the coffee machine. The human ones, at least. But chances are that some of your collaborators are AI-powered. It doesn't have to be in the physical form of a robot, though.",
            },
            {
              "id": "1913",
              "nom_en": "AI Applications",
              "desc_en":"Machines haven’t taken over the world yet, but artificial intelligence is seeping into our daily lives with astonishing speed. Whether it’s robots, language processing or computer vision, the possible applications of AI are endless.",
              "nom_fr":"Applications de l'IA",
              "desc_fr":"Les machines n'ont pas encore conquis le monde, mais l'intelligence artificielle s'impose dans nos vies avec une rapidité stupéfiante. Qu'il s'agisse de robotisation, de traitement du langage ou de la vision par ordinateur, les applications de l'intelligence artificielle sont illimitées.",
              "sub_cat": [
                {
                  "id": "1799",
                  "nom_en": "Autonomous Cars",
                  "desc_en":"Can you imagine a day when the streets belong to autonomous cars? It may seem far-fetched, but self-driving cars and other autonomous vehicles already navigate their surroundings without human control – to varying degrees of success.",
                  "nom_fr":"Voitures autonomes",
                  "desc_fr":"Pouvez-vous imaginer un futur où les rues seront pleines de voitures autonomes ? Si cette idée semble utopique, les véhicules autonomes circulent pourtant déjà dans notre environnement, sans personne au volant et... avec un succès mitigé.",
                },
              ]
            },
          ]
        },
        {
          "id": "1200",
          "nom_en": "Bioethics",
          "desc_en":"Bioethical concerns are probably as old as medical practice. Technological advancements in the life sciences, such as genome editing, pose new and unprecedented ethical questions that humanity will have to deal with.",
          "nom_fr":"Bioéthique",
          "desc_fr":"Les préoccupations bioéthiques sont probablement aussi anciennes que la pratique médicale. Les avancées technologiques dans les sciences de la vie, telles que l'édition du génome, posent des questions éthiques nouvelles et sans précédent auxquelles l'humanité devra faire face.",
        },
        {
          "id": "1101",
          "nom_en": "Environment",
          "desc_en":"Human development and survival depends on the environment, including other organisms and non-living surroundings. For the time being, this is provided by Earth. But how are we treating our host planet? It\u2019s clear that our activities reshape our environment \u2013 some even fear they may endanger our very existence as a species. So what are our plans for the future?",
          "nom_fr":"Environnement",
          "desc_fr":"Le d\u00e9veloppement et la survie de l'homme d\u00e9pendent de son environnement, qui combine le milieu et les autres organismes. Jusqu'a pr\u00e9sent, la Terre a assur\u00e9 ce r\u00f4le. Mais comment traitons-nous notre plan\u00e8te ? Il est clair que notre activit\u00e9 remod\u00e8le l'environnement \u2013 certains pensent m\u00eame qu'elle met en danger notre futur en tant qu'esp\u00e8ce. Quel avenir souhaitons-nous ?",
          "sub_cat": [
            {
              "id": "1428",
              "nom_en": "Climate Change",
              "desc_en":"The industrial revolution was the starting point of an unstoppable increase in carbon emissions, which inevitably leads to global warming. Many scientists believe that a 2°C (3.6°F) rise in global temperature would lead to a major environmental catastrophe. Learn about the climate crisis, current developments in climate research and the emerging technologies that could save the world.",
              "nom_fr":"Changement climatique",
              "desc_fr":"La Révolution industrielle a été le point de départ d'une augmentation exponentielle des émissions de carbone, qui ont inévitablement mené au changement climatique. De nombreux scientifiques pensent qu'une augmentation de 2° C de la température mondiale engendrerait une catastrophe à l'échelle planétaire. Découvrez les derniers développements de la recherche sur le climat et les technologies émergentes qui pourraient sauver le monde.",
            },
            {
              "id": "1189",
              "nom_en": "Sustainability",
              "desc_en":"Are economic growth and protecting the environment mutually exclusive? Or is it possible to exploit the Earth’s resources sustainably to ensure the survival of our species?",
              "nom_fr":"Durabilité",
              "desc_fr":"La croissance économique et la protection de l'environnement s'excluent-elles mutuellement ? Ou est-il possible d'exploiter les ressources de notre planète tout en assurant notre survie en tant qu'espèce ?",
            },
          ]
        },

        {
          "id": "1889",
          "nom_en": "Science & Society",
          "desc_en":"Science has always had the power to change societies. And sometimes, roles are reversed and science itself is put under the microscope...",
          "nom_fr":"Science et soci\u00e9t\u00e9",
          "desc_fr":"La science a toujours eu le pouvoir de changer la soci\u00e9t\u00e9. Il arrive quelquefois que les r\u00f4les soient invers\u00e9s et que la science elle-m\u00eame soit scrut\u00e9e \u00e0 la loupe...",
        },
        {
          "id": "1901",
          "nom_en": "Astronomy",
          "desc_en":"",
          "nom_fr":"",
          "desc_fr":"",
        }

      ],
    },
    ///////////////////////////////////////////////////////////////////////
    {
      "id": "1898",
      "nom_en": "Technology",
      "desc_en":"From the first use of tools, controlling of fire, inventing the wheel and using electricity, to manipulations of the genetic code and the development of robots \u2013 technologies change the ways in which humans live on planet Earth and beyond.",
      "nom_fr":"Technologie",
      "desc_fr":"Depuis la première utilisation d'outils, la maîtrise du feu, l'invention de la roue et l'utilisation de l'électricité, jusqu'aux manipulations du code génétique et au développement des robots, les technologies changent la façon dont les humains vivent sur la planète Terre et au-delà.",
      "sub_cat": [
        {
          "id": "1704",
          "nom_en": "Blockchain",
          "desc_en":"Blockchains link digital records \u2013 data blocks \u2013 using cryptography. This ledger technology promises to disrupt the economic landscape and facilitate trade by creating transparency and establishing trust through indelible records of transactions. While blockchain technology has become widely known as the underlying technology of cryptocurrencies such as bitcoin, it holds potential for many other applications.",
          "nom_fr":"Blockchain",
          "desc_fr":"D\u00e9couvrez comment fonctionne cette innovation disruptive et son impact potentiel sur l\u2019\u00e9conomie.",
        },
        {
          "id": "1916",
          "nom_en": "Man-Machine-Interface",
          "desc_en":"Any interaction between humans and machines needs an interface. It doesn\u2019t have to be a fancy thought translation device, but one way or another, humans need to tell machines what to do. Making this interaction as seamless as possible is essential to optimize how machines can assist human decision making. Everyday examples include turn-by-turn navigation or virtual assistants that can answer questions or act upon instruction, such as Siri, Alexa, Cortana, Bixby or Google Assistant.",
          "nom_fr":"Interface homme-machine",
          "desc_fr":"Toute interaction entre les humains et les machines nécessite une interface. Il ne s'agit pas nécessairement d'un dispositif de traduction de pensée sophistiqué, mais d'une manière ou d'une autre, les humains doivent dire aux machines ce qu'elles doivent faire. Il est essentiel de rendre cette interaction aussi transparente que possible pour optimiser la façon dont les machines peuvent aider l'homme à prendre des décisions. Parmi les exemples quotidiens, citons la navigation virage par virage ou les assistants virtuels capables de répondre à des questions ou d'agir sur instruction, tels que Siri, Alexa, Cortana, Bixby ou Google Assistant.",
        },
        {
          "id": "1914",
          "nom_en": "Robots",
          "desc_en":"A robot doesn\u2019t need to be intelligent to perform mechanical tasks, such as assembling a car. Artificial intelligence, however, can reduce the need for human instruction so that robots can make decisions and take action on their own. But, how much autonomy are we willing to give them?",
          "nom_fr":"Robots",
          "desc_fr":"Un robot n'a pas besoin d'être intelligent pour effectuer des tâches mécaniques, comme l'assemblage d'une voiture. L'intelligence artificielle peut toutefois réduire le besoin d'instruction humaine, de sorte que les robots puissent prendre des décisions et agir par eux-mêmes. Mais quel degré d'autonomie sommes-nous prêts à leur accorder ?",
        },
        {

          "id": "1637",
          "nom_en": "Big Data",
          "desc_en":"Never before have we collected data the way we do today. In this so-called Information Age, everything is tracked and digitized. Traditional IT systems can\u2019t process the massive data sets we\u2019re producing, so engineers are developing new systems for that purpose. But even if we manage to acquire, store and process this never-ending stream of incoming data, one question remains: How will that information be used?",
          "nom_fr":"Big Data",
          "desc_fr":"Le Big Data d\u00e9signe de hauts volumes de donn\u00e9es, complexes ou non structur\u00e9s, qu'il n'est pas possible d'utiliser \u00e0 l'aide des processus de traitement de donn\u00e9es traditionnels. Alors que les entreprises esp\u00e8rent optimiser ces masses de donn\u00e9es, de nombreux consommateurs se pr\u00e9occupent de ce qu'il advient de leurs donn\u00e9es et du respect de leur vie priv\u00e9e.",


        },
        {
          "id": "1747",
          "nom_en": "Artificial Intelligence",
          "desc_en":"What\u2019s artificial intelligence? Some say it\u2019s about machine intelligence that\u2019s comparable to natural intelligence or human cognition, such as learning or problem solving. Larry Tesler turns it around and says \u201cIntelligence is whatever machines haven\u2019t done yet.\u201d",
          "nom_fr":"Intelligence artificielle",
          "desc_fr":"Qu'est-ce que l'Intelligence Artificielle (IA) ? Certains \u00e9voquent l'IA d\u00e8s que les actions d'une machine semblent comparables \u00e0 un processus cognitif humain comme l'apprentissage ou la r\u00e9solution de probl\u00e8me. D'autres adoptent une perspective diff\u00e9rente \u2013 tel Larry Tesler : \u00ab L'intelligence, c'est ce que les machines n'ont pas encore fait. \u00bb",
          "sub_cat": [
            {
              "id": "1896",
              "nom_en": "AI in the Workplace",
              "desc_en":"If your workplace isn't the home office, you'll appreciate meeting colleagues in person. Some of them at the coffee machine. The human ones, at least. But chances are that some of your collaborators are AI-powered. It doesn't have to be in the physical form of a robot, though.",
              "nom_fr":"L'Intelligence Artificielle au travail",
              "desc_fr":"If your workplace isn't the home office, you'll appreciate meeting colleagues in person. Some of them at the coffee machine. The human ones, at least. But chances are that some of your collaborators are AI-powered. It doesn't have to be in the physical form of a robot, though.",
            },
            {
              "id": "1913",
              "nom_en": "AI Applications",
              "desc_en":"Machines haven’t taken over the world yet, but artificial intelligence is seeping into our daily lives with astonishing speed. Whether it’s robots, language processing or computer vision, the possible applications of AI are endless.",
              "nom_fr":"Applications de l'IA",
              "desc_fr":"Les machines n'ont pas encore conquis le monde, mais l'intelligence artificielle s'impose dans nos vies avec une rapidité stupéfiante. Qu'il s'agisse de robotisation, de traitement du langage ou de la vision par ordinateur, les applications de l'intelligence artificielle sont illimitées.",
              "sub_cat": [
                {
                  "id": "1799",
                  "nom_en": "Autonomous Cars",
                  "desc_en":"Can you imagine a day when the streets belong to autonomous cars? It may seem far-fetched, but self-driving cars and other autonomous vehicles already navigate their surroundings without human control – to varying degrees of success.",
                  "nom_fr":"Voitures autonomes",
                  "desc_fr":"Pouvez-vous imaginer un futur où les rues seront pleines de voitures autonomes ? Si cette idée semble utopique, les véhicules autonomes circulent pourtant déjà dans notre environnement, sans personne au volant et... avec un succès mitigé.",
                },
              ]
            },
          ]
        },
        {
          "id": "1803",
          "nom_en": "IT Security",
          "desc_en":"How do you protect yourself and your company from cyberattacks? Every day, criminals find new ways to break the most sophisticated security systems and exploit their vulnerabilities. Without the right precautions someone may steal your data, interfere with your software, damage your hardware, misdirect your services and jeopardize the integrity of your corporate IT systems. The best protection is for you and your team to stay informed and alert so that you can react swiftly to necessary updates and other security measures.",
          "nom_fr":"Cybers\u00e9curit\u00e9",
          "desc_fr":"Comment vous prot\u00e9ger, vous et votre entreprise, contre les cyberattaques ? Chaque jour, les cybercriminels trouvent de nouveaux moyens de briser les syst\u00e8mes de s\u00e9curit\u00e9 les plus sophistiqu\u00e9s et d'exploiter leurs vuln\u00e9rabilit\u00e9s. Sans strat\u00e9gie de s\u00e9curit\u00e9, un acteur malintentionn\u00e9 peut voler vos donn\u00e9es, interf\u00e9rer avec vos logiciels, endommager vos \u00e9quipements, d\u00e9tourner vos services et mettre en p\u00e9ril l'int\u00e9grit\u00e9 des syst\u00e8mes TI de votre entreprise. La meilleure protection pour vous et votre \u00e9quipe consiste \u00e0 rester inform\u00e9s et vigilants afin d'impl\u00e9menter rapidement les mises \u00e0 jour n\u00e9cessaires et autres mesures de s\u00e9curit\u00e9.",
        },

        {
          "id": "1880",
          "nom_en": "Digitalization",
          "desc_en":"How often do you use your smart phone, smart watch, wearable or fitness tracker? Do you go cashless when buying groceries or do you program your coffee machine to have your first cup ready before you get out of bed? If your answer is yes to any of the above, then you know how digital technologies are invading every aspect of our personal lives. How will new technologies continue to change our lives and society as a whole?",
          "nom_fr":"Technologies num\u00e9riques",
          "desc_fr":"Vous utilisez constamment votre smartphone, votre smart watch ou votre fitness tracker ? Vous ne payez plus vos achats en esp\u00e8ces et vous programmez votre cafeti\u00e8re pour d\u00e9guster votre premi\u00e8re tasse de caf\u00e9 au saut du lit ? Si vous avez r\u00e9pondu par \u00ab Oui \u00bb aux questions ci-dessus, vous savez \u00e0 quel point les technologies num\u00e9riques envahissent notre vie. Quel impact ces nouvelles technologies auront-elles sur nos existences, et sur la soci\u00e9t\u00e9 dans sa globalit\u00e9 ?",

        },



        {
          "id": "2021",
          "nom_en": "X Reality",
          "desc_en":"X Reality, or cross reality, refers to virtual reality (VR), mixed reality (MR), augmented reality (AR) and others. These \u201cnew realities\u201d use hardware and software to fuse our perception of the physical world with the digital world. Are you really here, or are you already in The Matrix?",
          "nom_fr":"Réalité X",
          "desc_fr":"La réalité X, ou réalité croisée, désigne la réalité virtuelle (VR), la réalité mixte (MR), la réalité augmentée (AR) et d'autres encore. Ces \"nouvelles réalités\" utilisent du matériel et des logiciels pour fusionner notre perception du monde physique avec le monde numérique. Êtes-vous vraiment ici, ou êtes-vous déjà dans The Matrix ?",
        },


      ]
    },
    ///////////////////////////////////////////////////////////////////////
    {
      "id": "1179",
      "nom_en": "Women in Business",
      "desc_en":"Today\u2019s working woman is known for her competence, diligence, talent, skill, emotional intelligence, leadership, grace and work ethic, just for starters. Whether you\u2019re a salesperson, service provider, educator, professional or executive, the information you need to succeed is here.",
      "nom_fr":"Femmes en entreprise",
      "desc_fr":"Aujourd'hui, la femme au travail est reconnue pour ses comp\u00e9tences, son application, son talent, son intelligence \u00e9motionnelle, ses capacit\u00e9s de leadership, sa gr\u00e2ce et son \u00e9thique professionnelle, parmi tant d'autres qualit\u00e9s. Que vous soyez commerciale, prestataire de services, enseignante ou dirigeante, l'information dont vous avez besoin pour r\u00e9ussir se trouve ici.",
      
      "sub_cat": [
        {
          "id": "87404",
          "nom_en": "Women’s Careers",
          "desc_en":"Today\u2019s career ladder is more like a climbing a tree with multiple branches. You learn from every twist as you navigate work, family, personal growth and community. Your branches may take you to building a great team, unlocking the executive suite, surfing the next disruptive innovation, opening your own enterprise, even raising the next generation\u2026the knowledge here can help you own your path, whatever you want it to go.",
          "nom_fr":"Carrières des femmes",
          "desc_fr":"L'échelle de carrière d'aujourd'hui ressemble davantage à l'ascension d'un arbre aux multiples branches. Vous apprenez à chaque fois que vous naviguez entre travail, famille, développement personnel et communauté. Vos branches peuvent vous amener à former une équipe formidable, à accéder à la direction, à surfer sur la prochaine innovation perturbatrice, à ouvrir votre propre entreprise, voire à élever la prochaine génération. Les connaissances présentées ici peuvent vous aider à suivre votre propre chemin, quelle que soit la direction que vous souhaitez prendre.",
        },
        {
          "id": "87411",
          "nom_en": "Women in Leadership",
          "desc_en":"You\u2019d think the female boss would be ubiquitous by now, but leadership roles still pose particular challenges for women \u2013 from overcoming old stereotypes to mastering disruptive innovation. In an era of women political leaders and board members (albeit too few), new role models abound, and many of them are role models with great advice to offer.",
          "nom_fr":"Les femmes dans le leadership",
          "desc_fr":"On pourrait penser que la femme patron serait omniprésente à l'heure actuelle, mais les rôles de direction posent toujours des défis particuliers aux femmes \u2013, qu'il s'agisse de surmonter les vieux stéréotypes ou de maîtriser l'innovation disruptive. À l'heure où les femmes occupent des postes de direction politique et siègent dans des conseils d'administration (même si elles sont trop peu nombreuses), les nouveaux modèles de rôle abondent, et beaucoup d'entre eux ont de bons conseils à donner.",
        }
      ],
    },
    ///////////////////////////////////////////////////////////////////////
    {
      "id": "1005",
      "nom_en": "Innovation",
      "desc_en":"Innovation is arguably the most crucial and, at the same time, the most elusive skill to master for any business. Systematically developing novel products, services and processes to stay ahead of the competition requires concerted action on virtually all levels of your organization. Join the vanguard!",
      "nom_fr":"Innovation",
      "desc_fr":"C'est sans conteste la comp\u00e9tence \u00e0 la fois la plus fondamentale et la plus difficile \u00e0 ma\u00eetriser dans une entreprise. D\u00e9velopper de mani\u00e8re m\u00e9thodique des nouveaux produits, services et processus pour garder une longueur d'avance sur la concurrence n\u00e9cessite une action concert\u00e9e \u00e0 tous les niveaux de l'organisation ou presque. C'est pour cette raison que le champ d'application de notre s\u00e9lection de r\u00e9sum\u00e9s sur l\u2019innovation \u00e9gale le volume de conseils pratiques qu'ils prodiguent.",

      "sub_cat": [
        {
          "id": "1019",
          "nom_en": "Product Development",
          "desc_en":"Some companies include their customers in the development of new products. Others follow Steve Jobs\u2019s approach: \u201cPeople don\u2019t know what they want until you give it to them.\u201d Irrespective of the method you prefer, you carefully must plan and design the next product you release on the market.",
          "nom_fr":"D\u00e9veloppement de produits",
          "desc_fr":"Certaines entreprises font participer leurs clients dans le d\u00e9veloppement de nouveaux produits. D'autres suivent l'approche de Steve Jobs : \"Les gens ne savent pas ce qu'ils veulent jusqu'\u00e0 ce que vous le leur donniez.\" Quelle que soit la m\u00e9thode que vous pr\u00e9f\u00e9rez, vous devez planifier et concevoir soigneusement tout nouveau produit avant son lancement sur le march\u00e9.",
          "sub_cat": [
            {
              "id": "1691",
              "nom_en": "Design Thinking",
              "desc_en":"Design Thinking is becoming more popular as an approach to solving problems and generating ideas. Find out how to implement this flexible method that urges you to plan your product or service from the perspective of your end user.",
              "nom_fr":"Design thinking",
              "desc_fr":"Design Thinking is becoming more popular as an approach to solving problems and generating ideas. Find out how to implement this flexible method that urges you to plan your product or service from the perspective of your end user.",
            },
            {
              "id": "1455",
              "nom_en": "Product Design",
              "desc_en":"Making coffee? Every detail of the mug, the bag holding the beans, the grinder and the percolator has been designed and engineered to be easy to use – and appealing to buy. Get the scoop on how that happened.",
              "nom_fr":"Design produit",
              "desc_fr":"Vous vous faites un petit café ? Chaque détail, de la tasse au filtre, en passant par la cafetière ont été conçus et fabriqués pour être simples à utiliser – et susciter votre envie d'acheter. Découvrez les mille et une facettes du design produit.",
            },
          ]
        },
        {

          "id": "1374",
          "nom_en": "Innovation Management",
          "desc_en":"Generating an innovative idea is one thing (and not so easy to do), however, in business that idea matters most if your organization can bring it to life and to profitability. This channel covers both step one, generating a great new idea within your company, and step two, implementing it. (For disruptive technologies, creativity techniques and product development, please see those channels.)",
          "nom_fr":"Gestion de l'innovation",
          "desc_fr":"G\u00e9n\u00e9rer une id\u00e9e innovante est une chose (par ailleurs plut\u00f4t complexe). Toutefois, dans le monde des affaires, cette id\u00e9e n'a d'importance que si votre entreprise peut la concr\u00e9tiser et l'exploiter. Cette cha\u00eene couvre la premi\u00e8re \u00e9tape, \u00e0 savoir g\u00e9n\u00e9rer une grande nouvelle id\u00e9e dans votre entreprise, et la deuxi\u00e8me \u00e9tape, c'est-\u00e0-dire son impl\u00e9mentation. (Pour les technologies disruptives, les techniques de cr\u00e9ativit\u00e9 et le d\u00e9veloppement de produits, veuillez consulter les cha\u00eenes correspondantes.)",


        },
         {
        "id": "1055",
        "nom_en": "Creativity",
        "desc_en":"You can tap the creative potential that lies dormant in most people. To foster your employees' creativity, give them the space to develop and share ideas. As an employee, take the time to let your ideas flow so you can put the best ones into practice.",
        "nom_fr":"Cr\u00e9ativit\u00e9",
        "desc_fr":"Vous pouvez exploiter le potentiel cr\u00e9atif qui sommeille chez la plupart d'entre nous. Pour stimuler la cr\u00e9ativit\u00e9 de vos collaborateurs, offrez-leur l'espace n\u00e9cessaire pour d\u00e9velopper et partager leurs id\u00e9es. En tant qu'employ\u00e9, laissez libre cours \u00e0 votre imagination pour mettre en pratique vos meilleures id\u00e9es.",
      },
      ]
    },
    ///////////////////////////////////////////////////////////
    {
      "id": "1026",
      "nom_en": "Marketing",
      "desc_en":"The action or business of promoting and selling products or services, including market research and advertising. Often using tools including branding, corporate communications and social media.",
      "nom_fr":"Marketing","desc_fr":"Le marketing d\u00e9signe la vente ou la promotion et la vente de produits et services, et inclut notamment les \u00e9tudes de march\u00e9 et la publicit\u00e9. Il s'appuie sur des outils tels que le branding, la communication d'entreprise et les r\u00e9seaux sociaux.",

      "sub_cat": [
        {
          "id": "1021",
          "nom_en": "Branding",
          "desc_en":"Branding, differentiating, positioning, segmenting, targeting: How can you make your product unique in the eyes of your ideal customer?",
          "nom_fr":"Strat\u00e9gie de marque",
          "desc_fr":"Strat\u00e9gie de marque, de diff\u00e9renciation, de positionnement, de segmentation, de ciblage : comment parvenir \u00e0 faire de votre produit une offre unique aux yeux de votre client id\u00e9al ?",

        },
        {
          "id": "1245",
          "nom_en": "Competitor Analysis",
          "desc_en":"Keep your friends close but your competitors closer.",
          "nom_fr":"Analyse de la concurrence",
          "desc_fr":"Gardez vos amis proches mais vos concurrents plus proches.",
        },
        {
          "id": "1379",
          "nom_en": "Consumer Behavior",
          "desc_en":"If you could see into your customers' thoughts, how much more could you sell? Learn how you can motivate today's shoppers.",
          "nom_fr":"Comportement des consommateurs",
          "desc_fr":"Si vous pouviez voir dans les pensées de vos clients, combien plus pourriez-vous vendre ? Découvrez comment vous pouvez motiver les acheteurs d'aujourd'hui.",
        },
        {
          "id": "1024",
          "nom_en": "Customer Relations",
          "desc_en":"Customers come first. But as more and more businesses emphasize personal contact with their clients, they are raising the bar regarding what constitutes good customer service. Learn how to stay ahead of the pack.",
          "nom_fr":"Relations client",
          "desc_fr":"Le client est roi. De plus en plus d'entreprises mettent l'accent sur le contact personnel avec leurs clients et se fixent des objectifs plus ambitieux en mati\u00e8re de service client. Apprenez \u00e0 vous d\u00e9marquer dans ce domaine.",
          "sub_cat": [
            {
              "id": "1020",
              "nom_en": "Customer Relationship Management",
              "desc_en":"Is good marketing intuitive? Not at all, say the developers of ingenious CRM technologies, which allow you to assess customer requirements with high accuracy and, thus, provide highly customized offerings.",
              "nom_fr":"Gestion de la relation client",
              "desc_fr":"Le marketing efficace est-il intuitif ? \"Rien n'est moins vrai !\" assurent les concepteurs de technologies marketing astucieuses. Celles-ci vous permettent en effet de déterminer avec précision quels sont les besoins de vos clients pour leur offrir des produits totalement personnalisés.",
            },
            {
              "id": "1845",
              "nom_en": "Customer Service",
              "desc_en":"The customer is your boss – or at least he or she pays your salary. Better to listen to clients, then, identify and anticipate their needs, and always give a little bit more than expected. They'll pay back your attention.",
              "nom_fr":"Service à la clientèle",
              "desc_fr":"La satisfaction du client est un idéal. Les employés, quel que soit le département de l'entreprise, doivent être orientés client. Mais s'il est un département dans lequel cette orientation est essentielle, c'est le Service client lui-même. Vous trouverez ici les titres les plus importants et les plus utiles sur ce thème.",
            },
          ]
        },
        {
          "id": "1020",
          "nom_en": "Customer Relationship Management",
          "desc_en":"Is good marketing intuitive? Not at all, say the developers of ingenious CRM technologies, which allow you to assess customer requirements with high accuracy and, thus, provide highly customized offerings.",
          "nom_fr":"Gestion de la relation client",
          "desc_fr":"Le marketing efficace est-il intuitif ? \"Rien n'est moins vrai !\" assurent les concepteurs de technologies marketing astucieuses. Celles-ci vous permettent en effet de d\u00e9terminer avec pr\u00e9cision quels sont les besoins de vos clients pour leur offrir des produits totalement personnalis\u00e9s.",

        },


        {
          "id": "1186",
          "nom_en": "Direct Marketing",
          "desc_en":"The hotline to your customers.",
          "nom_fr":"Marketing direct",
          "desc_fr":"Le chemin le plus court vers vos clients.",
        },
        {

          "id": "1512",
          "nom_en": "Gender Marketing",
          "desc_en":"How to sell to the right men, women or people in general.",
          "nom_fr":"Marketing de genre",
          "desc_fr":"Comment vendre aux bons hommes, femmes ou personnes en général.",

        },
        {
          "id": "1548",
          "nom_en": "Market Research",
          "desc_en":"",
          "nom_fr":"\u00c9tudes de march\u00e9",
          "desc_fr":"",
        },
        {
          "id": "1018",
          "nom_en": "Marketing Strategy",
          "desc_en":"Where and how can you reach your clients? Are expensive TV and print campaigns still worth the money, or does successful marketing now happen exclusively on the Internet? To survive in the marketing jungle, equip yourself with a clear strategy.",
          "nom_fr":"Strat\u00e9gie marketing",
          "desc_fr":"O\u00f9 et comment pouvez-vous atteindre vos clients ? Les co\u00fbteuses campagnes publicitaires pour la t\u00e9l\u00e9vision et pour la presse \u00e9crite sont-elles encore justifi\u00e9es ou pensez-vous qu'une campagne publicitaire r\u00e9ussie devrait passer exclusivement par Internet ? Pour survivre dans la jungle du marketing, armez-vous d'une strat\u00e9gie claire et pr\u00e9cise.",

        },
        {
          "id": "1128",
          "nom_en": "Positioning",
          "desc_en":"What place does your brand occupy in the minds of customers? How does it distinguish itself from its competitors? Every company logo stands for something \u2013 here's how to make sure your brand holds the position you target in the marketplace and means exactly what you intend for it to mean.",
          "nom_fr":"Positionnement",
          "desc_fr":"O\u00f9 se situe votre marque dans l'esprit de vos clients ? Comment se distingue-t-elle de celle de vos concurrents ? Chaque logo d'entreprise porte une id\u00e9e \u2013 id\u00e9alement, celle-ci illustre la raison d'\u00eatre de votre entreprise.",

        },
        {

          "id": "1296",
          "nom_en": "Pricing Strategies",
          "desc_en":"When you set that price, are you considering every single profit-factor, from cost to value? Here's how to take it all into account.",
          "nom_fr":"Stratégies de fixation des prix",
          "desc_fr":"Lorsque vous fixez ce prix, tenez-vous compte de tous les facteurs de rentabilité, du coût à la valeur ? Voici comment les prendre tous en compte.",

        },
        {

          "id": "1022",
          "nom_en": "Advertising",
          "desc_en":"Which ads are more effective: those that receive an award in Cannes or those that wield a brightly colored discount sticker? Ideally, your customers love your ads and, thus, buy your products.",
          "nom_fr":"Publicit\u00e9",
          "desc_fr":"Quelles annonces publicitaires sont les plus efficaces : celles qui re\u00e7oivent une r\u00e9compense \u00e0 Cannes ou celles qui affichent un autocollant de couleur voyante mentionnant un rabais ? Vos clients devraient, dans l'id\u00e9al, appr\u00e9cier vos annonces publicitaires et donc acheter vos produits.",


        },
        {
          "id": "1844",
          "nom_en": "Social Media Marketing",
          "desc_en":"\u201cMarketers ruin everything\u201d \u2013 says marketing guru Gary Vaynerchuk. They occupy every new, popular platform and turn it into a profit machine. As CEO of a big social media agency, Vaynerchuk has no problem with this. Quite the opposite: Like many other authors you\u2019ll find in this channel, he recommends that you make hay while the sun shines \u2013 and then move on to the next big thing.",
          "nom_fr":"Marketing social",
          "desc_fr":"Facebook, LinkedIn, Twitter, Instagram : votre entreprise \u00e0 l'assaut des r\u00e9seaux sociaux.",

        },
      ]
    },
    ////////////////////////////////////////////////////////



    {
      "id": "1023",
      "nom_en": "Sales",
      "desc_en":"Successful selling provides the subject matter for countless works of business literature. Obviously, experts still disagree on what the best sales strategy is. Discover which strategy works best for you and your company.",
      "nom_fr":"Vente",
      "desc_fr":"R\u00e9ussir ses ventes est le sujet de discussion par excellence d\u00e9battu dans un nombre incalculable d'ouvrages de management et il semble \u00e9vident que les experts ne sont pas d'accord sur la meilleure strat\u00e9gie \u00e0 adopter. D\u00e9couvrez quelle est la strat\u00e9gie la plus efficace pour vous et pour votre entreprise.",

      "sub_cat": [
        {

          "id": "1488",
          "nom_en": "B2B Selling",
          "desc_en":"Learn the most effective business-to-business sales methods and tactics.",
          "nom_fr":"Vente B2B",
          "desc_fr":"Apprenez les méthodes et tactiques de vente interentreprises les plus efficaces",

        },
        {

          "id": "1580",
          "nom_en": "Bidding and Contracting",
          "desc_en":"Creating a winning proposal is a bold venture. Get some good advice to ensure your success.",
          "nom_fr" : "Appels d'offres et contrats",
          "desc_fr" : "Créer une proposition gagnante est une entreprise audacieuse. Obtenez de bons conseils pour assurer votre succès.",
        },
        {

          "id": "1133",
          "nom_en": "Closing",
          "desc_en":"How to get the bottom line signed.",
          "nom_fr":"Fermeture",
          "desc_fr":"Comment obtenir la signature de la ligne de fond.",

        },
        {

          "id": "1134",
          "nom_en": "Complex Sale",
          "desc_en":"The more complicated the sale, the more political skill it takes.",
          "nom_fr":"Vente complexe",
          "desc_fr":"Plus la vente est compliquée, plus il faut de compétences politiques.",

        },
        {

          "id": "1129",
          "nom_en": "Hard Selling",
          "desc_en":"Don\u2019t waste your time being nice. It\u2019s selling you want.",
          "nom_fr":"Vente forcée",
          "desc_fr":"Ne perds pas ton temps à être gentil. C'est la vente que tu veux.",
        },
        {

          "id": "1130",
          "nom_en": "Soft Selling",
          "desc_en":"The best sales come from the best relationships. Build sincere connections that lead to profit.",
          "nom_fr":"Vente douce",
          "desc_fr":"Les meilleures ventes proviennent des meilleures relations. Établissez des liens sincères qui mènent au profit.",

        },
        {

          "id": "1131",
          "nom_en": "Cold Calling",
          "desc_en":"Experts advise approaching cold calling as a productive challenge, an opportunity to win someone over to your product or service, find a customer, make an appointment and start a relationship. To find success as a friendly and helpful voice on the phone, start with a little advice from the pros.",
          "nom_fr":"Appel à froid",
          "desc_fr":"Les experts conseillent d'aborder l'appel à froid comme un défi productif, une occasion de convaincre quelqu'un de votre produit ou service, de trouver un client, de prendre un rendez-vous et de commencer une relation. Pour réussir en tant que voix amicale et utile au téléphone, commencez par suivre les conseils des professionnels.",


        },
        {

          "id": "1135",
          "nom_en": "Sales Management",
          "desc_en":"How to send your sales team out to win.",
          "nom_fr":"Fonction Vente",
          "desc_fr":"Optimiser son organisation commerciale",

        },
      ]
    },
    ////////////////////////////////////////////////////////
    {
      "id": "1043",
      "nom_en": "Human Resources",
      "desc_en":"What's the most important part of a company? Right, the human or intellectual capital. With these summaries, you'll learn how to find the best people, develop them and get them to stay with your organization. You'll also learn how to make HR a force in shaping and executing your organization's strategy.",
      "nom_fr":"Ressources humaines",
      "desc_fr":"Quel est le facteur le plus important au sein d'une entreprise ? Vous avez raison : c'est bien le capital humain et intellectuel. Gr\u00e2ce \u00e0 ces r\u00e9sum\u00e9s, vous apprendrez \u00e0 rep\u00e9rer les meilleurs profils, vous les aiderez \u00e0 s'\u00e9panouir tout en assurant leur fid\u00e9lit\u00e9 \u00e0 l'entreprise. Vous d\u00e9couvrirez \u00e9galement comment d\u00e9velopper une culture d'entreprise efficace qui suscitera l'envie de vos concurrents.",

      "sub_cat": [
        {
          "id": "1038",
          "nom_en": "Employee Retention",
          "desc_en":"Hiring good employees is one thing; retaining them is quite another. To avoid high labor turnover, many employers resort to high salaries. But what really engages and motivates workers to stay at a given job?",
          "nom_fr":"Fid\u00e9lisation du personnel",
          "desc_fr":"Recruter de bons collaborateurs est une chose mais parvenir \u00e0 les retenir dans l'entreprise en est une autre. Pour faire face au probl\u00e8me de rotation \u00e9lev\u00e9e du personnel, la plupart des employeurs proposent de hauts salaires \u00e0 leurs collaborateurs. Mais quels \u00e9l\u00e9ments motivent r\u00e9ellement la fid\u00e9lit\u00e9 des employ\u00e9s ?",

        },
        {
          "id": "1850",
          "nom_en": "Employer Branding",
          "desc_en":"The competition for talent is getting stiffer. To position your company ahead of its rivals, create a great employer brand so the members of your workforce feel attached to your culture, values and mission. Help your employees proudly answer the questions: \"Who do you work for?\" \"What are they like?\" And, most importantly, \"What matters to them?\"",
          "nom_fr":"Image de marque de l'employeur",
          "desc_fr":"La concurrence pour attirer les talents se fait de plus en plus rude. Pour positionner votre entreprise devant ses rivaux, créez une excellente marque employeur afin que les membres de votre personnel se sentent attachés à votre culture, vos valeurs et votre mission. Aidez vos employés à répondre fièrement aux questions suivantes : \"Pour qui travaillez-vous ? \" \"Comment sont-ils ?\" Et, surtout, \"Qu'est-ce qui compte pour eux ?\"",

        },
        {
          "id": "1851",
          "nom_en": "Healthy Workplace",
          "desc_en":"",
          "nom_fr":"Le bon environnement de travail",
          "desc_fr":"",
        },
        {
          "id": "1253",
          "nom_en": "How to Dismiss Employees",
          "desc_en":"Whether for cause or due to hard circumstances, dismissing an employee is always difficult. Learn how to say goodbye in a professional, empathetic way.",
          "nom_fr":"Comment licencier des employés",
          "desc_fr":"Que ce soit pour un motif valable ou en raison de circonstances difficiles, le licenciement d'un employé est toujours difficile. Apprenez à lui dire au revoir de manière professionnelle et empathique.",

        },
        {
          "id": "1214",
          "nom_en": "Intellectual Capital",
          "desc_en":"Can you protect your firm\u2019s ideas, writings, images and creative process? What's it worth to you?",
          "nom_fr":"Capital intellectuel",
          "desc_fr":"Pouvez-vous protéger les idées, les écrits, les images et le processus créatif de votre entreprise ? Quelle en est la valeur pour vous ?",

        },
        {
          "id": "1040",
          "nom_en": "Knowledge Management",
          "desc_en":"When employees retire or leave your firm, do they take all their knowledge with them? This is a huge risk and expense to your organization. While you can\u2019t force people to stay with your company, you can retain their expertise. Record their wisdom, store it and use it.",
          "nom_fr":"Gestion des connaissances",
          "desc_fr":"Lorsque vos collaborateurs prennent leur retraite ou lorsqu'ils quittent votre entreprise, emportent-ils leur savoir avec eux ? Cette situation repr\u00e9sente un risque important et une perte inestimable pour votre entreprise. Si vous ne pouvez forcer vos employ\u00e9s \u00e0 rester au sein de l'entreprise, vous pouvez n\u00e9anmoins pr\u00e9server leur expertise. D\u00e9couvrez les moyens de conserver ce savoir-faire pour l'utiliser ensuite.",

        },
        {
          "id": "1039",
          "nom_en": "Learning & Development",
          "desc_en":"It\u2019s never too late to learn. Find out how to develop your team members continuously, efficiently and cost-effectively.",
          "nom_fr":"Formation et d\u00e9veloppement",
          "desc_fr":"Il n'est jamais trop tard pour apprendre. Apprenez \u00e0 faire progresser votre \u00e9quipe de mani\u00e8re continue, efficace et au moindre co\u00fbt.",
          "sub_cat": [
            {
              "id": "1338",
              "nom_en": "Coaching",
              "desc_en":"How much of coaching your employees is guiding them, how much is teaching, and how much is asking the right questions and listening to the answers? As a coach, you have the opportunity to guide people to greater career growth, professional achievement and personal satisfaction while supporting the goals of your organization. Stepping into a role this important takes some preparation, background and, perhaps, even coaching itself.",
              "nom_fr":"Coaching",
              "desc_fr":"Dans le coaching, quelle composante consiste à guider vos collaborateurs, laquelle porte sur l'enseignement, et laquelle implique de poser les bonnes questions et... d'écouter les réponses ? En tant que coach, vous avez la possibilité de guider les gens vers un développement de carrière plus efficace, un plus grand professionalisme et plus de satisfaction personnelle, tout en soutenant les objectifs de votre entreprise. Endosser l'habit de coach requiert de la préparation, de l'expérience, et peut-être même de se coacher soi-même. Trouvez ici les ressources nécessaires.",
            },
            {
              "id": "1205",
              "nom_en": "Leadership Development",
              "desc_en":"Every organization depends on first-class leaders – but not every competent staff member is a natural leader. Leadership development turns your skilled staffers into great leaders.",
              "nom_fr":"Développement du leadership",
              "desc_fr":"Chaque organisation dépend de l'excellence de ses dirigeants. Pourtant, être compétent(e) ne signifie pas nécessairement posséder des qualités de leadership. Le développement du leadership permet de transformer les collaborateurs doués en grands dirigeants.",
            },
          ]
        },
        {
          "id": "1037",
          "nom_en": "Recruitment",
          "desc_en":"Every employer only wants to hire the cream of the crop. Yet finding excellent employees can be a challenge. Learn how to recruit the best workers.",
          "nom_fr":"Recrutement",
          "desc_fr":"Tous les employeurs cherchent \u00e0 recruter les meilleurs \u00e9l\u00e9ments. Toutefois, trouver des collaborateurs comp\u00e9tents peut s'av\u00e9rer compliqu\u00e9. Apprenez \u00e0 ne recruter que les meilleurs.",

        },
        {
          "id": "1858",
          "nom_en": "Remuneration",
          "desc_en":"Can you hit the salary sweet spot? That means paying your employees enough to make them feel valued, but not so much that it undermines your fiscal goals; enough to keep them, but not so much that you can't afford them. And what are your other policies around pay: transparency or discretion? Merit-based or automatic raises? It's a hot topic for a reason, but you can cool it here.",
          "nom_fr":"R\u00e9mun\u00e9ration",
          "desc_fr":"Pouvez-vous atteindre le juste \u00e9quilibre dans votre politique de r\u00e9mun\u00e9ration ? Cela implique de payer vos employ\u00e9s suffisamment pour qu'ils se sentent valoris\u00e9s, sans mettre en p\u00e9ril vos objectifs financiers. Assez pour les garder, sans les payer au point de ne plus pouvoir les assumer. Et quels sont les autres aspects de votre politique de r\u00e9mun\u00e9ration : la transparence ou la discr\u00e9tion ? la r\u00e9mun\u00e9ration au m\u00e9rite ou les augmentations r\u00e9guli\u00e8res ? Puisez ici l'inspiration pour vous y retrouver dans la jungle des politiques salariales.",

        },
        {
          "id": "1140",
          "nom_en": "Rewarding Employees",
          "desc_en":"Done right, rewards can motivate your employees, boost productivity, increase retention, inspire teamwork and spark innovation. Do it wrong, and you will get the opposite outcomes.",
          "nom_fr":"Récompenser les employés",
          "desc_fr":"Bien utilisées, les récompenses peuvent motiver vos employés, stimuler la productivité, accroître la rétention, inspirer le travail d'équipe et susciter l'innovation. Si vous vous y prenez mal, vous obtiendrez les résultats inverses.",

        },
        {

          "id": "1215",
          "nom_en": "Succession Planning",
          "desc_en":"The transition from one CEO to the next presents immense challenge for a company. Learn how to succeed at succession.",
          "nom_fr":"Planification de la succession",
          "desc_fr":"La transition d'un PDG à un autre représente un immense défi pour une entreprise. Apprenez comment réussir la succession.",

        },
        {

          "id": "1446",
          "nom_en": "Talent Management",
          "desc_en":"To keep the best employees, you have to be the best manager: how to recruit, hire, retrain and nurture the cream of the crop.",
          "nom_fr":"Recrutement et fid\u00e9lisation des talents",
          "desc_fr":"Un enjeu majeur pour l\u2019entreprise",


        },
        {
          "id": "1041",
          "nom_en": "Working Time Arrangements",
          "desc_en":"Anyone with children, a relative in need of care, a long commute, a second gig or even a special hobby appreciates a less rigid working schedule, one that doesn't require physical presence from 9 am to 5 pm, five days a week. Learn how various organizations offer flex-time and the opportunity to work remotely. How do they and their employees benefit and what are the signs that flex-time can be a mixed blessing.",
          "nom_fr":"Am\u00e9nagement du temps de travail",
          "desc_fr":"Vous devez vous occuper de vos enfants, prendre soin d'une personne malade ou consacrer des heures de trajet pour vous rendre \u00e0 votre travail ? Ce ne sont l\u00e0 que quelques-uns des arguments qui s'opposent aux emplois \u00e0 horaire fixe sur cinq jours par semaine. Les entreprises performantes proposent, elles, des horaires flexibles \u00e0 leurs employ\u00e9s.",

        },
        {
          "id": "1607",
          "nom_en": "Millennials",
          "desc_en":"The Internet, smartphones, one great recession, the rise of flex-work, multiple housing crises and avocados on toast \u2013 Millennials have grown up in a time of rapid change and instability. Find out what this unique generation has to offer and understand what makes them tick.",
          "nom_fr":"G\u00e9n\u00e9ration Y",
          "desc_fr":"D\u00e9couvrez en quoi les millenials travaillent diff\u00e9remment de tous les autres.",
        },
        {
          "id": "1148",
          "nom_en": "Performance Reviews",
          "desc_en":"Performance reviews \u2013 done right \u2013 can be a very effective personnel management tool. Find out how you can do a better job of evaluating your staff members.",
          "nom_fr":"Revue de performance",
          "desc_fr":"Bien faite, la revue des performances peut devenir un outil efficace de gestion du personnel. D\u00e9couvrez comment mieux \u00e9valuer vos collaborateurs.",

        },
        {

          "id": "1447",
          "nom_en": "Generation X",
          "desc_en":"Gen X marks the spot: how to create the flexible, meaningful workplace the next generation demands.",
          "nom_fr":"Génération X",
          "desc_fr":"La génération X marque le pas : comment créer le lieu de travail flexible et utile qu'exige la nouvelle génération.",

        },
        {

          "id": "88085",
          "nom_en": "HR Strategies",
          "desc_en":"HR staffers have the reputation of wrapping red tape around everyday processes. Show how your department can contribute to your company's bottom line by crafting HR strategies that support the company's overall goals.",
          "nom_fr":"Stratégies RH",
          "desc_fr":"Les employés des RH ont la réputation d'entourer les processus quotidiens de paperasserie. Montrez comment votre service peut contribuer aux résultats de votre entreprise en élaborant des stratégies RH qui soutiennent les objectifs généraux de l'entreprise.",


        },
        {
          "id": "87966",
          "nom_en": "Workplace Bullying",
          "desc_en":"A workplace bully can turn your dream job into a nightmare. Whether they are sly and manipulative or bossy and insulting, learn how to keep your abusers in check.",
          "nom_fr":"Harc\u00e8lement au travail",
          "desc_fr":"Une personne qui vous harc\u00e8le au travail peut transformer l'emploi de vos r\u00eaves en cauchemar. Qu'ils soient rus\u00e9s et manipulateurs ou autoritaires et insultants, apprenez \u00e0 contr\u00f4ler ceux qui vous agressent.",

        },
        {

          "id": "1642",
          "nom_en": "Diversity & Inclusion",
          "desc_en":"Diversity and inclusion are crucial aspects of every company's recruitment and retention strategy. Understanding diversity helps your employees work well together and create a safe environment where ideas flourish.",
          "nom_fr":"Diversit\u00e9 et inclusion",
          "desc_fr":"La diversit\u00e9 et l'inclusion sont des aspects essentiels de la strat\u00e9gie de recrutement et de fid\u00e9lisation de chaque entreprise. Appr\u00e9hender pleinement la diversit\u00e9 aide vos employ\u00e9s \u00e0 bien travailler ensemble et \u00e0 cr\u00e9er un environnement s\u00fbr o\u00f9 les id\u00e9es s'\u00e9panouissent.",

        },
        {

          "id": "1042",
          "nom_en": "Corporate Culture",
          "desc_en":"Your organization's culture \u2013 its shared beliefs and environment \u2013 shapes its success. Corporate culture is the vessel for your employees' engagement, productivity, motivation and collaboration. How can you make your culture real, authentic, meaningful and good \u2013 and how good can you make it?",
          "nom_fr":"Culture d'entreprise",
          "desc_fr":"L'ambiance de travail, la culture et la communication au sein de votre entreprise influencent sa r\u00e9ussite. Ces facteurs fa\u00e7onnent l'implication, la productivit\u00e9, l'enthousiasme et la collaboration. D'ailleurs, les grandes entreprises d'aujourd'hui, comme Google, construisent leur image sur ces facteurs. Mais comment pouvez-vous am\u00e9liorer votre culture d'entreprise... et surtout, dans quelle mesure pouvez-vous l'am\u00e9liorer ?",
          "sub_cat": [
            {
              "id": "1376",
              "nom_en": "Trust",
              "desc_en":"You can’t measure it, but you must have it. You can’t see it, but you can see its absence: trust in the workplace. How to get it and keep it.",
              "nom_fr":"La confiance",
              "desc_fr":"Miser sur une valeur sûre",
            },
          ]
        },
        {
          "id": "90745",
          "nom_en": "Future of Work",
          "desc_en":"How will factors like globalization, urbanization, and technological advances like automatization and integration of artificial intelligence influence the way people will work in the future?",
          "nom_fr":"L'avenir du travail",
          "desc_fr":"Comment des facteurs tels que la mondialisation et l'urbanisation, et des avanc\u00e9es technologiques telles que l'automatisation et l'int\u00e9gration de l'Intelligence artificielle influenceront-ils les modes de travail \u00e0 l'avenir ?",
        },
      ]
    },
    ///////////////////////////////////////////////////////////////////////
    {
      "id": "1073",
      "nom_en": "Economics",
      "desc_en":"What\u2019s going on behind the scenes in leadership, economics and government? It helps to follow the money \u2026 and the politics. That\u2019s what we\u2019re doing in this overview of the interactions among national leaders, political movements, big money players and the hottest issues of the day. While iferu is politically neutral, we don\u2019t shy away from bringing you the most compelling voices from all sides. If you own the information behind the disruption, you know what to do. From the newest takes on history and economics to the pros and cons of globalization, here\u2019s your seat on the front row.",
      "nom_fr":"\u00c9conomie",
      "desc_fr":"Vous aimeriez savoir ce qui se passe au-del\u00e0 du monde de l'entreprise ? Vous trouverez ici une vue d'ensemble sur les interactions entre \u00e9conomie et politique. Vous en apprendrez plus sur les grandes th\u00e9ories \u00e9conomiques, et sur les avantages et les inconv\u00e9nients de la globalisation, et vous perfectionnerez votre connaissance des th\u00e9matiques actuelles en b\u00e9n\u00e9ficiant d'un regard neuf sur l'histoire de l'\u00e9conomie.",

      "sub_cat": [{

        "id": "1072",
        "nom_en": "Economic History",
        "desc_en":"Nobody can predict the future, but everyone can analyze the past and learn from it. These summaries tell the story of capitalism, currencies, the stock exchange and much more.",
        "nom_fr":"Histoire de l'\u00e9conomie",
        "desc_fr":"Personne ne peut pr\u00e9dire l'avenir, mais nous pouvons n\u00e9anmoins analyser le pass\u00e9 et en tirer les le\u00e7ons qui s'imposent. D\u00e9couvrez ces r\u00e9sum\u00e9s qui relatent, entre autres, l'histoire du capitalisme, des monnaies et de la Bourse.",
        "sub_cat": [
          {
            "id": "1103",
            "nom_en": "Company Portraits",
            "desc_en":"How does a company come into being, how does it grow, how does it succeed or fail? Turn here for in-depth answers from insiders. Each company biography is a business world in microcosm; each one is an object lesson.",
            "nom_fr":"Biographies d'entreprises",
            "desc_fr":"Si votre entreprise fait l'objet d'un livre, cela sous-entend que vous avez fait quelque chose de positif. Si, au contraire, vous avez pris les mauvaise décisions, il est encore temps d'apprendre de vos erreurs.",
          }, 
        ]
      },
      {
        "id": "1849",
        "nom_en": "Economic Policy",
        "desc_en":"",
        "nom_fr":"Politique \u00e9conomique",
        "desc_fr":"",
      },
      {
        "id": "1070",
        "nom_en": "Economic Theory",
        "desc_en":"If you\u2019re interested in society\u2019s economic foundations, this is just the right category for you. From classical theories by Adam Smith, Karl Marx and John Maynard Keynes to current economic approaches, you\u2019ll find an array of answers to the question, \u201cwhich economic policy is the best?\u201d",
        "nom_fr":"Th\u00e9ories \u00e9conomiques",
        "desc_fr":"Si vous vous int\u00e9ressez aux fondements \u00e9conomiques de la soci\u00e9t\u00e9, cette cat\u00e9gorie est faite pour vous. Des th\u00e9ories classiques d'Adam Smith, de Karl Marx et de John Maynard Keynes aux approches \u00e9conomiques contemporaines, vous trouverez certainement une palette de r\u00e9ponses \u00e0 la question suivante : \"Quelle est la meilleure politique \u00e9conomique ?\"",
      },
      {
        "id": "1155",
        "nom_en": "Emerging Markets",
        "desc_en":"How to profit in new places amid the confusion of growth.",
        "nom_fr":"Marchés émergents",
        "desc_fr":"Comment faire du profit dans de nouveaux endroits au milieu de la confusion de la croissance.",
      },
      {
        "id": "1027",
        "nom_en": "Financial Markets",
        "desc_en":"Capital markets play an important role in today\u2019s business world. However, some critics think the function of capital markets is overrated. Form your own opinion by learning more about their principles, whether you\u2019re a private or an institutional investor.",
        "nom_fr":"March\u00e9s financiers",
        "desc_fr":"Les march\u00e9s financiers jouent un r\u00f4le crucial dans notre monde \u00e9conomique actuel. Toutefois, certains experts consid\u00e8rent que ce r\u00f4le est sur\u00e9valu\u00e9. Que vous soyez un investisseur priv\u00e9 ou institutionnel, forgez-vous votre propre opinion en en apprenant plus sur leurs principes.",
        "sub_cat": [
          {
            "id": "1453",
            "nom_en": "Private Equity",
            "desc_en":"As the nature of business and the global economy changes, private equity takes on a much greater role in financing up-and-coming companies and in restructuring firms in need of help. But the question remains: How can investors sift the gold from the gravel?",
            "nom_fr":"Capital-investissement",
            "desc_fr":"Alors que la nature de l’activité économique et de l’économie mondiale est en train de changer, les fonds privés jouent un rôle de plus en plus important dans le financement des jeunes pousses et dans la restructuration des entreprises en difficulté. Toutefois, une question subsiste : comment les investisseurs peuvent-ils séparer le bon grain de l’ivraie au moment de choisir où investir leur argent ?",
          },
        ]
      },
      {
        "id": "89921",
        "nom_en": "Labor Market",
        "desc_en":"",
        "nom_fr":"Marché du travail",
        "desc_fr":"",
      },
      {
        "id": "1863",
        "nom_en": "Markets in Asia",
        "desc_en":"",
        "nom_fr":"",
        "desc_fr":"",

      },
      {
        "id": "1870",
        "nom_en": "Globale Trade",
        "desc_en":"",
        "nom_fr":"",
        "desc_fr":"",
      },
      {
        "id": "1068",
        "nom_en": "Globalization",
        "desc_en":"Globalization: undoubtedly the megatrend of our time. The Internet facilitates the flow of information, money and goods all around the globe. Emerging nations, particularly China, reveal the flipside of globalization to Western countries. Read these summaries to keep up-to-date on this topic.",
        "nom_fr":"Globalisation",
        "desc_fr":"La globalisation est sans aucun doute LA m\u00e9gatendance actuelle. Internet facilite les flux d'information, d'argent et de marchandises \u00e0 l'\u00e9chelle mondiale. Toutefois, l'\u00e9mergence de puissances telles que la Chine d\u00e9voile le revers de cette globalisation pour les pays occidentaux. D\u00e9couvrez nos r\u00e9sum\u00e9s et actualisez vos connaissances en la mati\u00e8re.",
      },
      {
        "id": "91756",
        "nom_en": "Sharing Economy",
        "desc_en":"Is sharing the new buying\/selling? What effect would that have on the economy, and on our society in general?",
        "nom_fr":"Économie de partage",
        "desc_fr":"Le partage est-il le nouvel achat/la vente ? Quel effet cela aurait-il sur l'économie, et sur notre société en général ?",
      },
      ]
    },
    ///////////////////////////////////////////////////////////////////////
    {
      "id": "1086",
      "nom_en": "Industries",

      "desc_en":"General business knowledge is fine and dandy. But certain industries display characteristics that don't receive the attention they deserve. This category will keep you up-to-date on these special sectors. Whether you want to know about financial services, the auto industry, energy firms or NGOs, you'll find interesting tales and topics here.",
      "nom_fr":"Industries",
      "desc_fr":"Avoir une connaissance g\u00e9n\u00e9rale du monde de l'entreprise, c'est appr\u00e9ciable. Certains secteurs d'activit\u00e9s pr\u00e9sentent toutefois des caract\u00e9ristiques trop souvent ignor\u00e9es. Cette cat\u00e9gorie de r\u00e9sum\u00e9s vous tiendra inform\u00e9 des derniers d\u00e9veloppements de ces secteurs sp\u00e9cifiques. Si vous souhaitez en savoir plus sur les services financiers, l'industrie automobile, le secteur de l'\u00e9nergie ou les ONG, vous trouverez ici de nombreux cas d'\u00e9tude et d'int\u00e9ressantes th\u00e9matiques.",
      "sub_cat": [
        {
          "id": "1074",
          "nom_en": "Financial Industry",
          "desc_en":"What drives the financial industry in today\u2019s global economy, and what do financial professionals need to know? Retail bankers, corporate financiers, traders, investors, asset managers \u2013 and those who aspire to be \u2013 will find these titles a worthwhile investment of their time.",
          "nom_fr":"Secteur financier",
          "desc_fr":"Quel est le moteur de l'industrie financi\u00e8re ? Comment fonctionne-t-il ? Quels facteurs ont d\u00e9clench\u00e9 la crise financi\u00e8re de 2007-2008 ? Quel r\u00f4le ont jou\u00e9 les banquiers et quel a \u00e9t\u00e9 l'impact sur leurs clients ? Le secteur bancaire est une industrie complexe : que vous soyez profane ou financier aguerri, vous trouverez dans ces r\u00e9sum\u00e9s la r\u00e9ponse \u00e0 toutes ces questions.",
          "sub_cat": [
            {
              "id": "1453",
              "nom_en": "Private Equity",
              "desc_en":"As the nature of business and the global economy changes, private equity takes on a much greater role in financing up-and-coming companies and in restructuring firms in need of help. But the question remains: How can investors sift the gold from the gravel?",
              "nom_fr":"Capital-investissement",
              "desc_fr":"Alors que la nature de l’activité économique et de l’économie mondiale est en train de changer, les fonds privés jouent un rôle de plus en plus important dans le financement des jeunes pousses et dans la restructuration des entreprises en difficulté. Toutefois, une question subsiste : comment les investisseurs peuvent-ils séparer le bon grain de l’ivraie au moment de choisir où investir leur argent ?",
            },
          ]
        },
        {
          "id": "1408",
          "nom_en": "Logistics Industry",
          "desc_en":"UPS, FedEx, DHL and smaller services that move packages between neighborhoods and around the world compete in a booming industry. If you absolutely, positively have to read about it by morning...start here.",
          "nom_fr":"Industrie de la logistique",
          "desc_fr":"UPS, FedEx, DHL et d'autres services plus petits qui transportent des colis entre les quartiers et dans le monde entier sont en concurrence dans un secteur en plein essor. Si vous devez absolument, positivement, lire ce sujet avant demain matin... commencez ici.",
        },
        {
          "id": "1872",
          "nom_en": "Commodities Trading",
          "desc_en":"",
          "nom_fr":"Industrie des mati\u00e8res premi\u00e8res",
          "desc_fr":"",
        },

        {

          "id": "1893",
          "nom_en": "Agriculture",
          "desc_en":"The moment people began cultivating land and breeding plants and animals became a turning point for human civilization. Today, the global demand for food is rising along with the dramatic increase of the world\u2019s population. How can humanity meet the world\u2019s unprecedented demand for food?",
          "nom_fr":"Agriculture",
          "desc_fr":"La civilisation est n\u00e9e lorsque les hommes ont commenc\u00e9 \u00e0 cultiver la terre et \u00e0 pratiquer l'\u00e9levage. Aujourd'hui, la demande mondiale de nourriture augmente au m\u00eame rythme rapide que la population mondiale. Comment l'humanit\u00e9 peut-elle r\u00e9pondre \u00e0 cet accroissement sans pr\u00e9c\u00e9dent de la demande alimentaire mondiale ?",

        },
        {
          "id": "94203",
          "nom_en": "Insurance Industry",
          "desc_en":"Learn everything about different types of insurance and the insurance industry.",
          "nom_fr":"Secteur des assurances",
          "desc_fr":"Apprenez tout sur les différents types d'assurance et le secteur des assurances.",
        },
        {
          "id": "94434",
          "nom_en": "Metals and Minerals",
          "desc_en":"",
          "nom_fr":"Métaux et minéraux",
          "desc_fr":"",
        },
        {
          "id": "97464",
          "nom_en": "Telecommunications",
          "desc_en":"",
          "nom_fr":"Telecommunications",
          "desc_fr":"",
        },
        {
          "id": "125553",
          "nom_en": "Aviation Industry",
          "desc_en":"From the pioneering work of the Wright brothers and the first powered flight in 1903 aviation has become a $2.5 trillion a year industry. Encompassing leisure travel, commercial freight, military applications, manufacturing\u00a0and research and development the aviation industry makes up 3.5% of world GDP.",
          "nom_fr":"Industrie de l'aviation",
          "desc_fr":"Depuis le travail de pionnier des frères Wright et le premier vol motorisé en 1903, l'aviation est devenue une industrie de 2 500 milliards de dollars par an. Englobant les voyages d'agrément, le fret commercial, les applications militaires, la fabrication et la recherche et développement, l'industrie aéronautique représente 3,5 % du PIB mondial.",
        },
        {
          "id": "1075",
          "nom_en": "Technology Industry",
          "desc_en":"Welcome to the world of technology. Here you\u2019ll learn about a range of technology subjects \u2013 from the creation of the first computer to the development of spaceships that will take men to Mars and all the hardware and software advances that have occurred in between.",
          "nom_fr":"Industrie des technologies",
          "desc_fr":"Bienvenue dans le monde de la technologie. Vous d\u00e9couvrirez ici un vaste choix de th\u00e9matiques li\u00e9es \u00e0 la technologie : de la cr\u00e9ation du premier ordinateur au d\u00e9veloppement de vaisseaux spatiaux, en passant par une succession d'innovations dans le domaine informatique.",

        },
        {
          "id": "1076",
          "nom_en": "Consumer Goods Industry",
          "desc_en":"Consumer goods, such as groceries, clothes and furniture, shape our world more than we realize. These summaries unlock the mysteries of everyday life.",
          "nom_fr":"Industrie des biens de consommation",
          "desc_fr":"Les biens de consommation tels que les produits alimentaires, les habits et l'ameublement fa\u00e7onnent notre univers bien plus que nous pouvons l'imaginer. Ces r\u00e9sum\u00e9s vous permettront d'appr\u00e9hender les petits myst\u00e8res de la vie quotidienne.",
        },
        {
          "id": "1077",
          "nom_en": "Consulting Industry",
          "desc_en":"Consulting ranks among the booming industry of capitalism. This category will introduce you to the industry\u2019s two perspectives: Advice for consultants on how to best deal with clients and advice for clients on how to deal with consultants. Pick the viewpoint that matches your needs.",
          "nom_fr":"Secteur du conseil",
          "desc_fr":"Le conseil est un secteur en plein essor du capitalisme. Cette cat\u00e9gorie vous permettra d'en d\u00e9couvrir deux perspectives : en tant que consultant, comment agir au mieux avec vos clients et en tant que client, comment agir au mieux avec des consultants. Choisissez la perspective qui vous convient le mieux !",

        },

        {
          "id": "1078",
          "nom_en": "Automotive Industry",
          "desc_en":"Auto making is one of the world\u2019s most important manufacturing industries \u2013 but for how much longer? Learn about traditional American brands, Japanese management methods, alternative fuel engines and the future prospects for an industry that runs on oil.",
          "nom_fr":"Industrie automobile",
          "desc_fr":"L'industrie automobile est l'une des industries les plus importantes au monde mais pour combien de temps encore ? Apprenez-en plus sur les marques am\u00e9ricaines traditionnelles, les m\u00e9thodes de gestion japonaises, les moteurs \u00e0 carburant alternatif et les perspectives d'avenir d'une industrie essentiellement bas\u00e9e sur le p\u00e9trole.",
          "sub_cat": [
            {
              "id": "1799",
              "nom_en": "Autonomous Cars",
              "desc_en":"Can you imagine a day when the streets belong to autonomous cars? It may seem far-fetched, but self-driving cars and other autonomous vehicles already navigate their surroundings without human control – to varying degrees of success.",
              "nom_fr":"Voitures autonomes",
              "desc_fr":"Pouvez-vous imaginer un futur où les rues seront pleines de voitures autonomes ? Si cette idée semble utopique, les véhicules autonomes circulent pourtant déjà dans notre environnement, sans personne au volant et... avec un succès mitigé.",
            },
          ]
        },
        {
          "id": "1079",
          "nom_en": "Nonprofit Sector",
          "desc_en":"It\u2019s possible to make the world a better place: That\u2019s the motto of many nonprofit organizations and social enterprises. Learn about their everyday challenges as they work to make their inspiring visions a reality.",
          "nom_fr":"Secteur associatif",
          "desc_fr":"Il est possible de faire du monde un endroit o\u00f9 il fait bon vivre. C'est l\u00e0 la devise de nombreuses organisations sociales et \u00e0 but non lucratif. D\u00e9couvrez quelles sont les visions novatrices de ces organisations.",
        },
        {
          "id": "1080",
          "nom_en": "Public Sector",
          "desc_en":"An industry like no other: The public sector operates differently from the private sector. Is this a good thing or should it change as soon as possible? Covering the spectrum from traditional bureaucracy to new public management, these summaries will help you form your own opinion.",
          "nom_fr":"Secteur public",
          "desc_fr":"Le secteur public est une industrie unique en son genre et fonctionne diff\u00e9remment du le secteur priv\u00e9. Est-ce un avantage ou cela doit-il \u00eatre modifi\u00e9 au plus vite ? Parce qu'ils couvrent \u00e0 la fois le domaine de l'administration traditionnelle et celui de la gestion publique moderne, ces r\u00e9sum\u00e9s vous aideront \u00e0 vous forger votre propre opinion.",

        },
        {
          "id": "1081",
          "nom_en": "Education",
          "desc_en":"As Nelson Mandela said, \u201cEducation is the most powerful weapon which you can use to change the world.\u201d Arm yourself with knowledge on the latest trends in global education.",
          "nom_fr":"\u00c9ducation",
          "desc_fr":"Comme l'affirmait Nelson Mandela\u00a0: \u00ab\u00a0L'\u00e9ducation est l'arme la plus puissante qu'on puisse utiliser pour changer le monde.\u00a0\u00bb Armez-vous de connaissances sur les derni\u00e8res tendances en mati\u00e8re d'\u00e9ducation globale.",
        },
        {
          "id": "1082",
          "nom_en": "Health Industry",
          "desc_en":"",
          "nom_fr":"Secteur de la sant\u00e9",
          "desc_fr":"",
        },
        {
          "id": "1083",
          "nom_en": "Media Industry",
          "desc_en":"We live in an information society. Books, newspapers, TV, radio and the Internet permeate our daily lives. Learn how the media industry works and how to deal with it.",
          "nom_fr":"Industrie des m\u00e9dias",
          "desc_fr":"Nous vivons dans l'\u00e8re de l'information. Les livres, les quotidiens, la t\u00e9l\u00e9vision, la radio et Internet font partie de notre vie quotidienne. D\u00e9couvrez comment fonctionnent les m\u00e9dias et apprenez \u00e0 vous en servir.",
        },

        {
          "id": "1084",
          "nom_en": "Energy",
          "desc_en":"We\u2019re standing at the precipice of a historic change: Eventually we will leave fossil fuels behind and turn to wind, solar and hydraulic energy. Read about the effects this change will have on energy providers, companies, consumers and society.",
          "nom_fr":"Secteur \u00e9nerg\u00e9tique",
          "desc_fr":"Nous sommes \u00e0 l'aube d'un changement historique. En effet, nous serons probablement amen\u00e9s \u00e0 abandonner l'\u00e9nergie fossile au profit de l'\u00e9nergie \u00e9olienne, solaire et hydraulique. D\u00e9couvrez quel sera l'impact de cette mutation sur les fournisseurs d'\u00e9nergie, les entreprises, les consommateurs et la soci\u00e9t\u00e9.",
          "sub_cat": [
            {
              "id": "",
              "nom_en": "",
              "desc_en":"",
              "nom_fr":"",
              "desc_fr":"",
            },
          ]
        },

      ]
    },
    ///////////////////////////////////////////////////////////////////////

    {
      "id": "1047",
      "nom_en": "Manufacturing",
      "desc_en":"Whether you opt for lean manufacturing, Six Sigma, the balanced scorecard or another quality management technique, you\u2019ll find all you need to know to create a first-rate, efficient, sustainable value chain here.",
      "nom_fr":"Production",
      "desc_fr":"Que vous optiez pour le lean management, Six Sigma, le tableau de bord prospectif ou toute autre strat\u00e9gie de gestion de la qualit\u00e9, vous trouverez ici tous les \u00e9l\u00e9ments n\u00e9cessaires pour cr\u00e9er une cha\u00eene de valeur durable, efficace et performante.",

      "sub_cat": [{

        "id": "1826",
        "nom_en": "Quality Management",
        "desc_en":"Today\u2019s consumers are value-conscious, so companies can't afford to lose sight of their products' quality. Here's how to prioritize quality \u2013 including using Six Sigma, Lean and other systems \u2013\u00a0as you produce, evaluate, monitor, sell and improve your goods and services.",
        "nom_fr":"Gestion de la qualit\u00e9",
        "desc_fr":"Les consommateurs d'aujourd'hui sont conscients de la valeur de leurs produits. Les entreprises ne peuvent donc pas se permettre de perdre de vue la qualité de leurs produits. Voici comment donner la priorité à la qualité - y compris en utilisant Six Sigma, Lean et d'autres systèmes - lors de la production, de l'évaluation, du suivi, de la vente et de l'amélioration de vos produits et services..",

      },
      {
        "id": "1046",
        "nom_en": "Supply Chain Management",
        "desc_en":"Your suppliers can offer you so much more than raw materials and parts. Become an expert in logistics and learn how to leverage your supplier network while saving time and money.",
        "nom_fr":"Gestion de la cha\u00eene logistique",
        "desc_fr":"Vos fournisseurs peuvent vous offrir bien plus que des mati\u00e8res premi\u00e8res et des pi\u00e8ces d\u00e9tach\u00e9es. Devenez un expert en logistique et apprenez \u00e0 mieux exploiter votre r\u00e9seau de fournisseurs tout en \u00e9conomisant du temps et de l'argent.",
      },
      ]
    },
    ////////////////////////////////////////////////////////////////////
    {
      "id": "1859",
      "nom_en": "Corporate Communication",
      "desc_en":"Learn to orchestrate all your business's internal and external communications to gain favor with the stakeholders upon whom your company relies.",
      "nom_fr":"Communication d'entreprise",
      "desc_fr":"Apprenez \u00e0 orchestrer toutes les communications internes et externes de votre entreprise afin de gagner les faveurs des parties prenantes sur lesquelles votre entreprise s'appuie.",
      "sub_cat": [
        {
          "id": "1025",
          "nom_en": "Public Relations",
          "desc_en":"In the Internet age, concealing the truth about your company can have immediate and disastrous repercussions. Whitewashing techniques are pass\u00e9. Instead, make wise and conscious communication decisions. Do good work and good deeds and talk about your actions in a professional, eloquent way.",
          "nom_fr":"Relations publiques",
          "desc_fr":"\u00c0 l'\u00e8re d'Internet, dissimuler la r\u00e9alit\u00e9 \u00e0 propos de votre entreprise peut avoir des r\u00e9percussions imm\u00e9diates et d\u00e9sastreuses. Les techniques de camouflage de la v\u00e9rit\u00e9 appartiennent d\u00e9sormais au pass\u00e9. \u00c0 l'inverse, prenez des d\u00e9cisions avis\u00e9es et r\u00e9fl\u00e9chies en mati\u00e8re de communication. Accomplissez un travail assidu, agissez de mani\u00e8re positive et parlez de vos actions en termes professionnels et \u00e9loquents.",
        },
        {
          "id": "1033",
          "nom_en": "Investor Relations",
          "desc_en":"Financial communications involves three groups of people: investors, analysts and the media. These summaries will help you learn how to best communicate with each group according to their varying expectations.",
          "nom_fr":"Relations investisseurs",
          "desc_fr":"La communication financi\u00e8re implique les trois cat\u00e9gories de personnes suivantes : les investisseurs, les analystes et les m\u00e9dias. Ces r\u00e9sum\u00e9s vous aideront \u00e0 mieux communiquer avec chacune de ces cat\u00e9gories, en fonction de leurs attentes propres.",
        },
        {
          "id": "1315",
          "nom_en": "Business Reputation",
          "desc_en":"In the sharing economy, reputation plays a part in every exchange. Moreover, image makes up some 63% of the value of most corporations. As \u201creputation capital\u201d will become increasingly important and could eventually redefine who has power in society, learn how to leverage and to defend your good name.",
          "nom_fr":"Réputation de l'entreprise",
          "desc_fr":"Dans l'économie du partage, la réputation joue un rôle dans chaque échange. De plus, l'image représente environ 63 % de la valeur de la plupart des entreprises. Comme le \"capital réputation\" va devenir de plus en plus important et pourrait éventuellement redéfinir les détenteurs du pouvoir dans la société, apprenez à tirer parti de votre réputation et à la défendre.",
        },
        {
          "id": "1412",
          "nom_en": "Corporate Blogging",
          "desc_en":"Don't ignore the powerful potential that a blog can offer. This valuable extension of your PR, marketing and social media strategy can help you create a corporate narrative and build a deeper connection with your customer while promoting your offerings. Learn how to create engaging blog content that your customers will value.",
          "nom_fr":"Blogs d'entreprise",
          "desc_fr":"N'ignorez pas le potentiel puissant que peut offrir un blog. Cette extension précieuse de votre stratégie de relations publiques, de marketing et de médias sociaux peut vous aider à créer un récit d'entreprise et à établir un lien plus profond avec vos clients tout en promouvant vos offres. Apprenez à créer un contenu de blog attrayant que vos clients apprécieront.",
        },
        {
          "id": "1686",
          "nom_en": "Lobbying",
          "desc_en":"The ethics behind lobbying are murky. Self-serving groups that wield the most money and influence essentially pay politicians to swing legislation in their favor. Yet lobbying is a necessary evil and is an important lever for a productive government. Learn how the lobby industry works and how you can influence your public officials.",
          "nom_fr":"Lobbying",
          "desc_fr":"L'éthique derrière le lobbying est obscure. Les groupes intéressés qui ont le plus d'argent et d'influence paient essentiellement les politiciens pour qu'ils fassent évoluer la législation en leur faveur. Pourtant, le lobbying est un mal nécessaire et constitue un levier important pour un gouvernement productif. Découvrez comment fonctionne l'industrie du lobbying et comment vous pouvez influencer vos agents publics.",
        },
        {
          "id": "1860",
          "nom_en": "Internal Communication",
          "desc_en":"",
          "nom_fr":"Communication interne",
          "desc_fr":"La communication interne est un facteur de succ\u00e8s \u00e0 ne pas sous-estimer, pour la satisfaction des employ\u00e9s comme pour celle des clients et des autres parties prenantes.",
        },

      ],
    },
    ///////////////////////////////////////////////////////////////////////




    {
      "id": "1048",
      "nom_en": "Corporate IT",
      "desc_en":"Ensuring data security is becoming more challenging, marketing is happening mainly through social media and employees are educating themselves via e-learning offerings. These developments emphasize the increasing importance of the IT department.",
      "nom_fr":"Informatique d'entreprise",
      "desc_fr":"Dans un contexte o\u00f9 garantir la s\u00e9curit\u00e9 des donn\u00e9es devient de plus en plus difficile, o\u00f9 le marketing op\u00e8re d\u00e9sormais au travers des m\u00e9dias sociaux et o\u00f9 les employ\u00e9s ont recours \u00e0 la formation en ligne pour leur apprentissage, le r\u00f4le du service informatique rev\u00eat une importance cruciale.",
      "sub_cat": [

        {
          "id": "1803",
          "nom_en": "IT Security",
          "desc_en":"How do you protect yourself and your company from cyberattacks? Every day, criminals find new ways to break the most sophisticated security systems and exploit their vulnerabilities. Without the right precautions someone may steal your data, interfere with your software, damage your hardware, misdirect your services and jeopardize the integrity of your corporate IT systems. The best protection is for you and your team to stay informed and alert so that you can react swiftly to necessary updates and other security measures.",
          "nom_fr":"Cybers\u00e9curit\u00e9",
          "desc_fr":"Comment vous prot\u00e9ger, vous et votre entreprise, contre les cyberattaques ? Chaque jour, les cybercriminels trouvent de nouveaux moyens de briser les syst\u00e8mes de s\u00e9curit\u00e9 les plus sophistiqu\u00e9s et d'exploiter leurs vuln\u00e9rabilit\u00e9s. Sans strat\u00e9gie de s\u00e9curit\u00e9, un acteur malintentionn\u00e9 peut voler vos donn\u00e9es, interf\u00e9rer avec vos logiciels, endommager vos \u00e9quipements, d\u00e9tourner vos services et mettre en p\u00e9ril l'int\u00e9grit\u00e9 des syst\u00e8mes TI de votre entreprise. La meilleure protection pour vous et votre \u00e9quipe consiste \u00e0 rester inform\u00e9s et vigilants afin d'impl\u00e9menter rapidement les mises \u00e0 jour n\u00e9cessaires et autres mesures de s\u00e9curit\u00e9.",

        },
        {

          "id": "124387",
          "nom_en": "Cloud Computing",
          "desc_en":"Much of your day-to-day business already happens in the cloud - and that's just the beginning. Since the cloud allows users and businesses to access servers, storage, databases and software online, companies have increased flexibility to speed up innovation and drive new business models.",
          "nom_fr":"Cloud computing",
          "desc_fr":"Une grande partie de vos activit\u00e9s quotidiennes se d\u00e9roule d\u00e9j\u00e0 dans le cloud - et ce n'est que le d\u00e9but ! Parce que le cloud permet aux utilisateurs et aux entreprises d'acc\u00e9der aux serveurs, au stockage, aux bases de donn\u00e9es et aux applications en ligne, les entreprises disposent d'une plus grande flexibilit\u00e9 pour acc\u00e9l\u00e9rer l'innovation et favoriser de nouveaux mod\u00e8les commerciaux.",


        },

      ]
    },
    ///////////////////////////////////////////////////////////////////////
    {
      "id": "1036",
      "nom_en": "Corporate Finance",
      "desc_en":"This is the hardcore business section. If the numbers aren't right, you can forget everything else. We offer solid titles in all areas of company finance: treasury, risk management, funding, mergers and acquisitions, investor relations, and lots more.",
      "nom_fr":"Finance d'entreprise",
      "desc_fr":"Le noyau dur de l'entreprise. Si les chiffres sont erron\u00e9s, le reste n'a plus d'importance. Nous vous proposons ici des titres incontournables dans tous les domaines de la finance d'entreprise: contr\u00f4le de gestion, budg\u00e9tisation, gestion du risque, fusions et acquisitions, relations investisseurs et bien d'autres sujets encore.",

      "sub_cat": [{

        "id": "1847",
        "nom_en": "Budgeting",
        "desc_en":"Gerenciar as entradas e sa\u00eddas de caixa s\u00e3o essenciais para a sobreviv\u00eancia de uma empresa. Os contadores e tesoureiros corporativos precisam se manter atualizados sobre as ferramentas, estrat\u00e9gias e procedimentos de or\u00e7amento.",
        "nom_fr":"Budg\u00e9tisation",
        "desc_fr":"L'\u00e9tablissement du budget est une t\u00e2che centrale du d\u00e9partement financier des entreprises autant que des administrations. Trouvez ici les informations qui vous int\u00e9ressent sur un domaine complexe.",


      },
      {

        "id": "1271",
        "nom_en": "Business Valuation",
        "desc_en":"Buyers frequently overpay in corporate acquisitions, and that's just one indication that assessing a company's current and future value is challenging. How do you know which factors to consider? How do you weigh stock price, patents, equipment, facilities, talent, and hard and soft assets? Ask the experts.",
        "nom_fr":"Évaluation des entreprises",
        "desc_fr":"Les acheteurs paient souvent trop cher lors des acquisitions d'entreprises, ce qui montre bien qu'il est difficile d'évaluer la valeur actuelle et future d'une société. Comment savoir quels sont les facteurs à prendre en compte ? Comment évaluer le cours de l'action, les brevets, l'équipement, les installations, le talent et les biens matériels et immatériels ? Demandez aux experts.",


      },
      {
        "id": "1031",
        "nom_en": "Compliance",
        "desc_en":"Policies, laws and rules of the game are among the most important external constraints that a company faces. Peruse these summaries for an insight into the relationships between corporations and regulations.",
        "nom_fr":"Conformit\u00e9",
        "desc_fr":"Les politiques, la loi et les normes font partie des contraintes externes majeures qui s'imposent aux entreprises. Parcourez ces r\u00e9sum\u00e9s pour d\u00e9couvrir un aper\u00e7u des relations qu'entretiennent les entreprises avec la r\u00e9glementation.",

      },
      {
        "id": "1150",
        "nom_en": "Cutting Costs",
        "desc_en":"When you take an ax to your budget, how do you target only the deadwood?",
        "nom_fr":"Réduire les coûts",
        "desc_fr":"Quand on passe à la hache dans son budget, comment faire pour ne cibler que le bois mort ?",
      },
      {
        "id": "1028",
        "nom_en": "Financing",
        "desc_en":"Going public or going private? Private equity, venture capital, mezzanine financing? Learn about the variety of options businesses have to raise capital \u2013 other than the traditional bank loan.",
        "nom_fr":"Financement",
        "desc_fr":"Introduire en bourse ou privatiser ? Capital-investissement, capital-risque, financement mezzanine ? Apprenez-en plus sur les possibilit\u00e9s de lev\u00e9e de fonds autres que l'emprunt bancaire traditionnel.",
        "sub_cat": [
          {
            "id": "1453",
            "nom_en": "Private Equity",
            "desc_en":"As the nature of business and the global economy changes, private equity takes on a much greater role in financing up-and-coming companies and in restructuring firms in need of help. But the question remains: How can investors sift the gold from the gravel?",
            "nom_fr":"Capital-investissement",
            "desc_fr":"Alors que la nature de l’activité économique et de l’économie mondiale est en train de changer, les fonds privés jouent un rôle de plus en plus important dans le financement des jeunes pousses et dans la restructuration des entreprises en difficulté. Toutefois, une question subsiste : comment les investisseurs peuvent-ils séparer le bon grain de l’ivraie au moment de choisir où investir leur argent ?",
          },
        ]
      },
      {
        "id": "1032",
        "nom_en": "Mergers & Acquisitions",
        "desc_en":"The merger of two corporate entities could be the result of a mutual agreement or a hostile takeover. Whatever the case may be, focus on the benefits of the newly established company.",
        "nom_fr":"Fusions & acquisitions",
        "desc_fr":"La fusion de deux entreprises peut \u00eatre le r\u00e9sultat d'un accord mutuel ou d'une OPA hostile. Quel que soit le cas, concentrez-vous sur les avantages que peut apporter l'entreprise nouvellement cr\u00e9\u00e9e.",

      },
      {
        "id": "1033",
        "nom_en": "Investor Relations",
        "desc_en":"Financial communications involves three groups of people: investors, analysts and the media. These summaries will help you learn how to best communicate with each group according to their varying expectations.",
        "nom_fr":"Relations investisseurs",
        "desc_fr":"La communication financi\u00e8re implique les trois cat\u00e9gories de personnes suivantes : les investisseurs, les analystes et les m\u00e9dias. Ces r\u00e9sum\u00e9s vous aideront \u00e0 mieux communiquer avec chacune de ces cat\u00e9gories, en fonction de leurs attentes propres.",

      },
      {
        "id": "1029",
        "nom_en": "Controlling",
        "desc_en":"Welcome to the world of numbers and reports. The rules and processes companies establish to ensure the integrity of their financial information are critical to corporate success.",
        "nom_fr":"Contr\u00f4le de gestion",
        "desc_fr":"Bienvenue dans le monde des chiffres et des rapports. Le contr\u00f4le de gestion est un v\u00e9ritable casse-t\u00eate pour toutes les entreprises, mais constitue l'un des \u00e9l\u00e9ments fondamentaux de la planification financi\u00e8re.",

      },
      {
        "id": "1848",
        "nom_en": "Taxes",
        "desc_en":"Taxes may be as inevitable as death, but learning to manage them well is crucial for the life of your business or your family budget. Learn the ins, outs and regulatory wrinkles that make taxation such a pivotal aspect of the world of finance and government at all levels.",
        "nom_fr":"Fiscalit\u00e9",
        "desc_fr":"Difficile d'\u00e9viter l'imp\u00f4t, mais apprendre \u00e0 bien le g\u00e9rer est essentiel, pour la vie de votre entreprise comme pour votre budget domestique. D\u00e9couvrez les tenants et aboutissants qui d\u00e9terminent le r\u00f4le cl\u00e9 jou\u00e9 par la taxation \u00e0 tous les niveaux du secteur financier, et des pouvoirs publics.",
      },
      ]
    },
    ///////////////////////////////////////////////////////////////////////
    {
      "id": "1098",
      "nom_en": "Society",
      "desc_en":"Here you will find summaries on all kinds of topics that have to do with our societies: trends, analyses, visions, challenges.",
      "nom_fr":"Soci\u00e9t\u00e9",
      "desc_fr":"Dispositifs de communication sans fil, pyramides des \u00e2ges invers\u00e9es et femmes chefs d'entreprise, voici quelques \u00e9volutions que nos grands-parents n'auraient jamais pu imaginer en leur temps. Apprenez quels sont les rouages du d\u00e9veloppement de notre soci\u00e9t\u00e9 et restez inform\u00e9 des derni\u00e8res tendances.",

      "sub_cat": [

        {
          "id": "1889",
          "nom_en": "Science & Society",
          "desc_en":"Science has always had the power to change societies. And sometimes, roles are reversed and science itself is put under the microscope...",
          "nom_fr":"Science et soci\u00e9t\u00e9",
          "desc_fr":"La science a toujours eu le pouvoir de changer la soci\u00e9t\u00e9. Il arrive quelquefois que les r\u00f4les soient invers\u00e9s et que la science elle-m\u00eame soit scrut\u00e9e \u00e0 la loupe...",

        },
        {
          "id": "85774",
          "nom_en": "Media Manipulation",
          "desc_en":"One of the most dangerous trends of our time: Harnessing the vast new possibilities of the digital age, malicious actors find it easier than ever to disseminate lies and conspiracy theories. With minimal effort and resources they can destabilize whole societies and even influence elections. Read these summaries and learn how they operate, what damage they inflict and how a free and open society can defend against them.",
          "nom_fr":"Manipulation des médias",
          "desc_fr":"L'une des tendances les plus dangereuses de notre époque : Exploitant les vastes possibilités nouvelles de l'ère numérique, les acteurs malveillants trouvent plus facile que jamais de diffuser des mensonges et des théories du complot. Avec un minimum d'efforts et de ressources, ils peuvent déstabiliser des sociétés entières et même influencer des élections. Lisez ces résumés et apprenez comment ils opèrent, quels dommages ils infligent et comment une société libre et ouverte peut s'en défendre.",
        },
        {
          "id": "87406",
          "nom_en": "Gender Equality",
          "desc_en":"Women make a unique contribution and face unique opportunities in the business world. Gender equity affects more than equal pay for equal work (though that would be nice, at last). It\u2019s a mark of progress that you no longer stand out in the world of business just for being a female, though you'll still hear naysayers. Just pass them by, and fight the battles that matter. You\u2019ve got this covered.",
          "nom_fr":"Égalité des sexes",
          "desc_fr":"Les femmes apportent une contribution unique et sont confrontées à des opportunités uniques dans le monde des affaires. L'équité entre les sexes ne se limite pas à un salaire égal pour un travail égal (même si ce serait bien, enfin). Le fait que vous ne vous démarquiez plus dans le monde des affaires du simple fait d'être une femme est une marque de progrès, même si vous entendrez encore des détracteurs. Passez outre et menez les batailles qui comptent. Vous avez tout prévu.",
        },
        {
          "id": "87420",
          "nom_en": "Famous Women",
          "desc_en":"Fame has pluses and minuses: the power, influence, ability to make a difference and possible fortune versus the inevitable, inescapable spotlight on every achievement and every mistake. Women in the glare earned their top spots \u2013 often with a hard climb; they know the pros and cons, and now they\u2019re sharing what they\u2019ve learned.",
          "nom_fr":"Femmes célèbres",
          "desc_fr":"La célébrité a des avantages et des inconvénients : le pouvoir, l'influence, la capacité à faire la différence et la fortune possible, par opposition à l'inévitable et inéluctable mise en lumière de chaque réalisation et de chaque erreur. Les femmes qui sont sous les feux de la rampe ont gagné leur place au sommet \u2013 souvent au prix d'une ascension difficile ; elles connaissent les avantages et les inconvénients, et maintenant elles partagent ce qu'elles ont appris.",

        },
        {
          "id": "88020",
          "nom_en": "Women’s Economic Empowerment",
          "desc_en":"Investing in women's economic empowerment sets a direct path towards gender equality, poverty eradication and inclusive economic growth. Check the latest research and the most inspiring success stories from around the world.",
          "nom_fr":"Autonomisation économique des femmes",
          "desc_fr":"Investir dans l'autonomisation économique des femmes ouvre la voie à l'égalité des sexes, à l'éradication de la pauvreté et à une croissance économique inclusive. Consultez les dernières recherches et les histoires de réussite les plus inspirantes du monde entier.",


        },
        {
          "id": "88538",
          "nom_en": "Gig Economy",
          "desc_en":"Are workers in the gig economy glad to move flexibly from one temporary assignment to the next? Or do they miss the reliability of a steady job with benefits? Do companies prefer a well-trained, loyal workforce or the flexibility of hiring people as needed? What are the costs and the benefits for employees, companies and society overall?",
          "nom_fr":"Gig Economy",
          "desc_fr":"Les travailleurs de la \"gig economy\" sont-ils heureux de pouvoir passer d'une mission temporaire à l'autre de manière flexible ? Ou la fiabilité d'un emploi stable avec des avantages sociaux leur manque-t-elle ? Les entreprises préfèrent-elles une main-d'œuvre loyale et bien formée ou la possibilité d'embaucher des personnes en fonction des besoins ? Quels sont les coûts et les avantages pour les employés, les entreprises et la société en général ?",
        },
        {
          "id": "90745",
          "nom_en": "Future of Work",
          "desc_en":"How will factors like globalization, urbanization, and technological advances like automatization and integration of artificial intelligence influence the way people will work in the future?",
          "nom_fr":"L'avenir du travail",
          "desc_fr":"Comment des facteurs tels que la mondialisation et l'urbanisation, et des avanc\u00e9es technologiques telles que l'automatisation et l'int\u00e9gration de l'Intelligence artificielle influenceront-ils les modes de travail \u00e0 l'avenir ?",
        },
        {
          "id": "1880",
          "nom_en": "Digitalization",
          "desc_en":"How often do you use your smart phone, smart watch, wearable or fitness tracker? Do you go cashless when buying groceries or do you program your coffee machine to have your first cup ready before you get out of bed? If your answer is yes to any of the above, then you know how digital technologies are invading every aspect of our personal lives. How will new technologies continue to change our lives and society as a whole?",
          "nom_fr":"Technologies num\u00e9riques",
          "desc_fr":"Vous utilisez constamment votre smartphone, votre smart watch ou votre fitness tracker ? Vous ne payez plus vos achats en esp\u00e8ces et vous programmez votre cafeti\u00e8re pour d\u00e9guster votre premi\u00e8re tasse de caf\u00e9 au saut du lit ? Si vous avez r\u00e9pondu par \u00ab Oui \u00bb aux questions ci-dessus, vous savez \u00e0 quel point les technologies num\u00e9riques envahissent notre vie. Quel impact ces nouvelles technologies auront-elles sur nos existences, et sur la soci\u00e9t\u00e9 dans sa globalit\u00e9 ?",

        },
        {
          "id": "1787",
          "nom_en": "Universal Basic Income",
          "desc_en":"The idea has already been around for a while, but is only recently gaining mainstream support. With employment in long-term decline as a consequence of automation and digital transformation, a growing number of experts tout a basic income guarantee as a means of averting the emergence of a new class of losers.",
          "nom_fr":"Le revenu de base universel",
          "desc_fr":"L'idée existe déjà depuis un certain temps, mais ne gagne que récemment le soutien du grand public. L'emploi étant en déclin à long terme en raison de l'automatisation et de la transformation numérique, un nombre croissant d'experts vantent les mérites d'un revenu de base garanti comme moyen d'éviter l'émergence d'une nouvelle classe de perdants.",
        },
        {
          "id": "1640",
          "nom_en": "Surveillance",
          "desc_en":"",
          "nom_fr":"Surveillance",
          "desc_fr":"",
        },
        {
          "id": "1200",
          "nom_en": "Bioethics",
          "desc_en":"Bioethical concerns are probably as old as medical practice. Technological advancements in the life sciences, such as genome editing, pose new and unprecedented ethical questions that humanity will have to deal with.",
          "nom_fr":"Bioéthique",
          "desc_fr":"Les préoccupations bioéthiques sont probablement aussi anciennes que la pratique médicale. Les avancées technologiques dans les sciences de la vie, telles que l'édition du génome, posent des questions éthiques nouvelles et sans précédent auxquelles l'humanité devra faire face.",
        },
        {
          "id": "1227",
          "nom_en": "privacy",
          "desc_en":"The privacy of your information \u2013 and your identity \u2013 is a growing concern in this digital age. Every time you allow cookies, fill in an online form, join a social media channel or subscribe to a streaming service, you leave a trail. As long as that gives you access to what you want, and protects your individual information, it's not a problem \u2013 but you should be aware when your data is a commodity that is bought and sold, and when hackers can dig into your personal information. How can you protect yourself individually and still enjoy the collective information and entertainment the internet offers?",
          "nom_fr":"Confidentialit\u00e9 des donn\u00e9es",
          "desc_fr":"La confidentialit\u00e9 de vos informations, et de votre identit\u00e9, est une pr\u00e9occupation croissante de l'\u00e8re num\u00e9rique. Chaque fois que vous autorisez les cookies, remplissez un formulaire en ligne, rejoignez un r\u00e9seau social ou vous abonnez \u00e0 un service de streaming, vous laissez une trace. Tant que cela vous donne acc\u00e8s au contenu souhait\u00e9 et prot\u00e8ge vos donn\u00e9es personnelles, ce n'est pas un probl\u00e8me, mais vous devez savoir que vos donn\u00e9es sont une marchandise qui s'ach\u00e8te et se vend, et que des pirates informatiques peuvent fouiller dans vos informations personnelles. Comment vous prot\u00e9ger individuellement tout en profitant des informations et des divertissements collectifs qu'offre Internet ?",

        },
        {
          "id": "1438",
          "nom_en": "Sexual Harassment",
          "desc_en":"Sexual harassment is bullying or coercion of a sexual nature and the unwelcome or inappropriate promise of rewards in exchange for sexual favors. Worldwide, women and men are standing together against this abuse of power. Victims are proclaiming \u201cMeToo!\u201d as they muster the courage to share their painful experiences and their resolute strength in the face of verbal, emotional and physical mistreatment. If you experience inappropriate behavior in the workplace, what recourse do you have? Companies must update their corporate policies to reflect a shifting reality, but what changes must they make? Discover how to curb workplace sexual harassment.",
          "nom_fr":"Harcèlement sexuel",
          "desc_fr":"Le harcèlement sexuel est une forme d'intimidation ou de coercition de nature sexuelle et la promesse importune ou inappropriée de récompenses en échange de faveurs sexuelles. Dans le monde entier, des femmes et des hommes s'unissent contre cet abus de pouvoir. Les victimes proclament \"MeToo !\" en trouvant le courage de partager leurs expériences douloureuses et leur force résolue face à la maltraitance verbale, émotionnelle et physique. Si vous êtes victime d'un comportement inapproprié sur le lieu de travail, de quel recours disposez-vous ? Les entreprises doivent mettre à jour leurs politiques d'entreprise pour refléter une réalité changeante, mais quels changements doivent-elles apporter ? Découvrez comment enrayer le harcèlement sexuel sur le lieu de travail.",
        },
        {
          "id": "1447",
          "nom_en": "Generation X",
          "desc_en":"Gen X marks the spot: how to create the flexible, meaningful workplace the next generation demands.",
          "nom_fr":"Génération X",
          "desc_fr":"La génération X marque le pas : comment créer le lieu de travail flexible et utile qu'exige la nouvelle génération.",
        },
        {
          "id": "1456",
          "nom_en": "Social Media",
          "desc_en":"Until recently, using Twitter or Facebook at work looked like goofing off; now, plying the social media is work, especially if your job involves marketing, networking or advocating a cause. Here's how to do it right.",
          "nom_fr":"R\u00e9seaux sociaux",
          "desc_fr":"Jusque r\u00e9cemment, utiliser Twitter ou Facebook au travail faisait de vous un(e) 'geek'. Aujourd'hui, entretenir vos r\u00e9seaux sociaux fait partie du travail, notamment si celui-ci implique du marketing, du r\u00e9seautage ou la d\u00e9fense d'une cause particuli\u00e8re. Laissez vous guider.",

        },
        {
          "id": "1544",
          "nom_en": "Internet",
          "desc_en":"Friend or foe? Take a look at our need to be connected and the dangers that tag along.",
          "nom_fr":"Internet",
          "desc_fr":"Ami ou ennemi ? Examinez notre besoin d'être connecté et les dangers qui l'accompagnent..",
        },

        {
          "id": "1607",
          "nom_en": "Millennials",
          "desc_en":"The Internet, smartphones, one great recession, the rise of flex-work, multiple housing crises and avocados on toast \u2013 Millennials have grown up in a time of rapid change and instability. Find out what this unique generation has to offer and understand what makes them tick.",
          "nom_fr":"G\u00e9n\u00e9ration Y",
          "desc_fr":"D\u00e9couvrez en quoi les millenials travaillent diff\u00e9remment de tous les autres.",

        },

        {
          "id": "117247",
          "nom_en": "Discrimination",
          "desc_en":"Discrimination can be blatantly obvious or very subtle. Either way it's harm- and hurtful. Understand what shape discrimination can take and how to counter it.",
          "nom_fr":"Discrimination",
          "desc_fr":"La discrimination peut \u00eatre manifeste ou subtile. Quelle qu'en soit la nature, elle est toxique. Apprenez en plus sur les diverses formes que peut prendre la discrimination et comment la combattre.",

        },
      ],
    },
    ///////////////////////////////////////////////////////////////////////

    {
      "id": "1071",
      "nom_en": "Politics",
      "desc_en":"Here you will find summaries on all things political. Get up to speed on political developments in individual nations or regions, unravel complex events such as the conflicts in Syria, Yemen or Ukraine, meet the most siginficant actors on today's political stage, learn from the foremost experts on global politics or expand your background knowledge with summaries on political theory, philosophy and psychology.",
      "nom_fr":"Politique",
      "desc_fr":"Cette cat\u00e9gorie couvre la plupart des probl\u00e9matiques politiques mondiales pass\u00e9es, pr\u00e9sentes et futures. Comment les relations entre les \u00c9tats-Unis et l'Iran se sont-elles d\u00e9t\u00e9rior\u00e9es ? En quoi l'\u00e9mergence de l'Asie influence-t-elle la g\u00e9opolitique ? Comment les gouvernements vont-ils faire face au r\u00e9chauffement climatique ? Parcourez ces titres pour entrer dans le vif du sujet.",
      "sub_cat": [
        {
          "id": "1068",
          "nom_en": "Globalization",
          "desc_en":"Globalization: undoubtedly the megatrend of our time. The Internet facilitates the flow of information, money and goods all around the globe. Emerging nations, particularly China, reveal the flipside of globalization to Western countries. Read these summaries to keep up-to-date on this topic.",
          "nom_fr":"Globalisation",
          "desc_fr":"La globalisation est sans aucun doute LA m\u00e9gatendance actuelle. Internet facilite les flux d'information, d'argent et de marchandises \u00e0 l'\u00e9chelle mondiale. Toutefois, l'\u00e9mergence de puissances telles que la Chine d\u00e9voile le revers de cette globalisation pour les pays occidentaux. D\u00e9couvrez nos r\u00e9sum\u00e9s et actualisez vos connaissances en la mati\u00e8re.",
        },
        {
        
          "id": "1775",
          "nom_en": "Domestic Politics of China",
          "desc_en":"In this channel you will find summaries on important domestic issues that inform today's political landscape in the People's Republic.",
          "nom_fr":"Politique : Chine",
          "desc_fr":"Dans cette cha\u00eene, vous trouverez des r\u00e9sum\u00e9s consacr\u00e9s aux questions nationales importantes qui fa\u00e7onnent aujourd'hui le paysage politique de la R\u00e9publique populaire, ainsi qu'au r\u00f4le de la Chine sur la sc\u00e8ne internationale.",

        },
        {
          "id": "1778",
          "nom_en": "Democratic Recession",
          "desc_en":"All over the world a seemingly unassailable liberal world order finds itself under attack. Nationalism, populism and tribal politics, long thought to be a thing of the past, are experiencing a massive comeback. These summaries will help you make sense of this worrying trend.",
          "nom_fr":"Récession démocratique",
          "desc_fr":"Partout dans le monde, un ordre mondial libéral apparemment inattaquable se trouve attaqué. Le nationalisme, le populisme et les politiques tribales, longtemps considérés comme une chose du passé, connaissent un retour en force. Ces résumés vous aideront à comprendre cette tendance inquiétante..",

        },
        {
          "id": "1790",
          "nom_en": "Global Security",
          "desc_en":"This channel is dedicated to summaries on topics such as warfare, military strategy, international cooperation or disarmament.",
          "nom_fr":"Sécurité mondiale",
          "desc_fr":"Cette chaîne est dédiée aux résumés sur des sujets tels que la guerre, la stratégie militaire, la coopération internationale ou le désarmement.",
        },
        {
          "id": "1792",
          "nom_en": "Political Figures",
          "desc_en":"",
          "nom_fr":"",
          "desc_fr":"",
        },
        {
          "id": "1793",
          "nom_en": "Politics of Pakistan",
          "desc_en":"",
          "nom_fr":"",
          "desc_fr":"",
        },
        {
          "id": "1811",
          "nom_en": "Global Risks",
          "desc_en":"In this channel you will find summaries on acute threats or worrisome trends such as terrorism, climate-change, corruption or deadly pandemics.",
          "nom_fr":"Risque global",
          "desc_fr":"Dans cette cha\u00eene, vous trouverez des r\u00e9sum\u00e9s consacr\u00e9s aux menaces s\u00e9v\u00e8res ou aux tendances inqui\u00e9tantes que constituent le terrorisme, le r\u00e9chauffement climatique, la corruption ou les pand\u00e9mies mortelles.",
          "sub_cat": [
            {
              "id": "1428",
              "nom_en": "Climate Change",
              "desc_en":"The industrial revolution was the starting point of an unstoppable increase in carbon emissions, which inevitably leads to global warming. Many scientists believe that a 2°C (3.6°F) rise in global temperature would lead to a major environmental catastrophe. Learn about the climate crisis, current developments in climate research and the emerging technologies that could save the world.",
              "nom_fr":"Changement climatique",
              "desc_fr":"La Révolution industrielle a été le point de départ d'une augmentation exponentielle des émissions de carbone, qui ont inévitablement mené au changement climatique. De nombreux scientifiques pensent qu'une augmentation de 2° C de la température mondiale engendrerait une catastrophe à l'échelle planétaire. Découvrez les derniers développements de la recherche sur le climat et les technologies émergentes qui pourraient sauver le monde.",
            },
            {
              "id": "112978",
              "nom_en": "Coronavirus Pandemic",
              "desc_en":"Coronavirus disease 2019 (COVID-19) is an infectious viral respiratory disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2), also known as \u201cnovel coronavirus.\u201d Reports in December 2019, from Wuhan, China, first cited the disease, which has spread globally, resulting in the ongoing coronavirus pandemic that affects people and businesses worldwide.",
              "nom_fr":"Pand\u00e9mie de coronavirus 2019\u201320",
              "desc_fr":"La maladie Covid-19 est provoqu\u00e9e par le coronavirus 2 du syndrome respiratoire aigu s\u00e9v\u00e8re (SRAS-CoV-2), \u00e9galement connu sous le nom de \"nouveau coronavirus\". La maladie a \u00e9t\u00e9 signal\u00e9e pour la premi\u00e8re fois en d\u00e9cembre 2019, \u00e0 Wuhan, en Chine, et s'est depuis propag\u00e9e dans le monde entier pour entra\u00eener la pand\u00e9mie de coronavirus 2019-20 qui touche les individus et les entreprises du monde entier. Consultez cette cha\u00eene pour de nouveaux r\u00e9sum\u00e9s !",
            },
            {
              "id": "1069",
              "nom_en": "Terrorism",
              "desc_en":"September 11, 2001, was just the beginning: Terrorism has become a constant trend of this generation. Too, it takes many different forms: religious fundamentalism, political extremism from the right or the left, bombings, shootings, stabbings or cyber attacks on critical infrastructure.These summaries will tell you all about it.",
              "nom_fr":"Terrorisme",
              "desc_fr":"Le 11 septembre 2001 n'était que le commencement. Le terrorisme est devenu une tendance constante de la génération actuelle et, à l'avenir, les actes terroristes s'orienteront probablement davantage vers les technologies de communication en ligne. Les entreprises doivent se prémunir contre ce danger et autres attaques imprévisibles.",
            },
          ]
        },
        {
          "id": "86468",
          "nom_en": "Foreign Politics of China",
          "desc_en":"In this channel you will find summaries on China and its relations to the rest of the world.",
          "nom_fr":"Politique étrangère de la Chine",
          "desc_fr":"Dans ce canal, vous trouverez des résumés sur la Chine et ses relations avec le reste du monde..",

        },
        {
          "id": "1774",
          "nom_en": "Foreign Politics of the USA",
          "desc_en":"The world's policeman or splendid isolation \u2013 the role of the US on the world stage has historically shifted between extremes. With each new administration it might take yet another turn. Learn from these summaries what strategies experts prescribe for todays's geopolitical challenges or how they view the current dealings between the US and their partners or adversaries.",
          "nom_fr":"Politique étrangère des Etats-Unis",
          "desc_fr":"Le gendarme du monde ou le splendide isolement ? Historiquement, le rôle des États-Unis sur la scène mondiale a oscillé entre deux extrêmes. Avec chaque nouvelle administration, il pourrait prendre un nouveau tournant. Découvrez dans ces résumés les stratégies que les experts prescrivent pour relever les défis géopolitiques d'aujourd'hui ou comment ils voient les relations actuelles entre les États-Unis et leurs partenaires ou adversaires.",
        },
        {
          "id": "1773",
          "nom_en": "Domestic Politics of the USA",
          "desc_en":"In this channel you will find summaries on important domestic issues that inform today's political landscape in the USA.",
          "nom_fr":"Politique int\u00e9rieure des \u00c9tats-Unis",
          "desc_fr":"Dans cette cha\u00eene, vous trouverez des r\u00e9sum\u00e9s consacr\u00e9s aux probl\u00e9matiques nationales importantes qui fa\u00e7onnent le paysage politique actuel des \u00c9tats-Unis.",

        },
        {
          "id": "1771",
          "nom_en": "Politics of Europe",
          "desc_en":"In this channel you will find summaries on important domestic issues that inform today's political landscape in Europe, as well as summaries on Europe's role in international politics.",
          "nom_fr":"Politique : Europe",
          "desc_fr":"Dans cette cha\u00eene, vous trouverez des r\u00e9sum\u00e9s consacr\u00e9s aux probl\u00e9matiques importantes qui fa\u00e7onnent aujourd'hui le paysage politique europ\u00e9en, ainsi que des r\u00e9sum\u00e9s sur le r\u00f4le de l'Europe sur l'\u00e9chiquier politique international.",
          "sub_cat": [
            {
              "id": "1772",
              "nom_en": "Brexit",
              "desc_en":"On June 23rd 2016, the United Kingdom decided to leave the European Union. These summaries will bring you up to speed as to all things Brexit: what led to the decision, what has happened since and what will happen now.",
              "nom_fr":"Brexit",
              "desc_fr":"On June 23rd 2016, the United Kingdom decided to leave the European Union. These summaries will bring you up to speed as to all things Brexit: what led to the decision, what has happened since and what will happen now.",
            },
          ]
        },
        {
          "id": "1759",
          "nom_en": "Political Theory",
          "desc_en":"This channel is dedicated to summaries that will provide you with the foundational knowlegde you need to make sense of today's political events and developments.",
          "nom_fr":"Th\u00e9orie politique",
          "desc_fr":"Cette cha\u00eene contient des r\u00e9sum\u00e9s destin\u00e9s \u00e0 vous fournir la connaissance de base afin de comprendre les \u00e9v\u00e9nements et les d\u00e9veloppements politiques d'aujourd'hui.",

        },
        {
          "id": "1760",
          "nom_en": "Political Psychology",
          "desc_en":"From these summaries you will learn what informs the political behaviour of individuals as well as masses.",
          "nom_fr":"Psychologie politique",
          "desc_fr":"Ces résumés vous permettront d'apprendre ce qui motive le comportement politique des individus et des masses.",

        },
        {
          "id": "1761",
          "nom_en": "Politics of Africa",
          "desc_en":"In this channel you will find summaries on important domestic issues that inform today's political landscape in African countries, as well as summaries on their respective roles in international politics.",
          "nom_fr":"Politique de l'Afrique",
          "desc_fr":"Dans ce canal, vous trouverez des résumés sur les questions nationales importantes qui influencent le paysage politique actuel des pays africains, ainsi que des résumés sur leurs rôles respectifs dans la politique internationale.",
        },
        {
          "id": "1762",
          "nom_en": "Global Politics",
          "desc_en":"Geopolitical considerations, while not always apparent, do in fact determine all greater political interactions between nations. Learn from these summaries what today's global power structure looks like and which are the greater interests pursued by individual nations.",
          "nom_fr":"G\u00e9opolitique",
          "desc_fr":"M\u00eame si elles ne sont pas toujours apparentes, les motivations g\u00e9opolitiques r\u00e9gissent les grandes interactions politiques entre les pays. Avec nos r\u00e9sum\u00e9s, d\u00e9couvrez quelles sont les grandes structures du pouvoir aujourd'hui et o\u00f9 se situent les int\u00e9r\u00eats des nations.",
        },
        {
          "id": "1763",
          "nom_en": "Politics of Latin America",
          "desc_en":"In this channel you will find summaries on important domestic issues that inform today's political landscape in Latin American countries, as well as summaries on their respective roles in international politics.",
          "nom_fr":"Politique de l'Amérique latine",
          "desc_fr":"Dans ce canal, vous trouverez des résumés sur les questions nationales importantes qui influencent le paysage politique actuel des pays d'Amérique latine, ainsi que des résumés sur leurs rôles respectifs dans la politique internationale.",
        },
        {
          "id": "1764",
          "nom_en": "Politics of the Middle East",
          "desc_en":"In this channel you will find summaries on today's political landscape of the Middle East and its many political, religious or military conflicts.",
          "nom_fr":"Politique du Moyen-Orient",
          "desc_fr":"Dans cette chaîne, vous trouverez des résumés sur le paysage politique actuel du Moyen-Orient et ses nombreux conflits politiques, religieux ou militaires.",

        },
         {
          "id": "1767",
          "nom_en": "Politics of Russia",
          "desc_en":"In this channel you will find summaries on important domestic issues that inform today's political landscape in Russia, as well as summaries on Russia as an actor on the international stage.",
          "nom_fr":"Politique : Russie",
          "desc_fr":"Dans cette cha\u00eene, vous trouverez des r\u00e9sum\u00e9s consacr\u00e9s aux probl\u00e9matiques nationales actuelles qui fa\u00e7onnent le paysage politique russe, ainsi que des r\u00e9sum\u00e9s sur la place de la Russie sur l'\u00e9chiquier politique international.",

        },
        {
          "id": "1770",
          "nom_en": "Politics of India",
          "desc_en":"In this channel you will find summaries on important domestic issues that inform today's political landscape in India, as well as summaries on India as an actor on the international stage.",
          "nom_fr":"Politique de l'Inde",
          "desc_fr":"Dans cette chaîne, vous trouverez des résumés sur les questions nationales importantes qui influencent le paysage politique actuel de l'Inde, ainsi que des résumés sur l'Inde en tant qu'acteur sur la scène internationale..",

        },

      ],
    },
    ///////////////////////////////////////////////////////////////////////

    {
      "id": "1100",
      "nom_en": "History",
      "desc_en":"How did society arrive at where it stands today? To learn about the politicians, scientists, innovators, leaders and rulers whose actions shaped the present, peruse these summaries.",
      "nom_fr":"Histoire",
      "desc_fr":"Comment la soci\u00e9t\u00e9 en est-elle arriv\u00e9e l\u00e0 o\u00f9 elle est aujourd'hui ? Pour en savoir plus sur les actions des hommes politiques, des scientifiques, des innovateurs, des leaders et des dirigeants qui ont model\u00e9 la soci\u00e9t\u00e9, parcourez ces r\u00e9sum\u00e9s.",
      "sub_cat": [
        {
          "id": "1072",
          "nom_en": "Economic History",
          "desc_en":"Nobody can predict the future, but everyone can analyze the past and learn from it. These summaries tell the story of capitalism, currencies, the stock exchange and much more.",
          "nom_fr":"Histoire de l'\u00e9conomie",
          "desc_fr":"Personne ne peut pr\u00e9dire l'avenir, mais nous pouvons n\u00e9anmoins analyser le pass\u00e9 et en tirer les le\u00e7ons qui s'imposent. D\u00e9couvrez ces r\u00e9sum\u00e9s qui relatent, entre autres, l'histoire du capitalisme, des monnaies et de la Bourse.",
          "sub_cat": [
            {
              "id": "1103",
              "nom_en": "Company Portraits",
              "desc_en":"How does a company come into being, how does it grow, how does it succeed or fail? Turn here for in-depth answers from insiders. Each company biography is a business world in microcosm; each one is an object lesson.",
              "nom_fr":"Biographies d'entreprises",
              "desc_fr":"Si votre entreprise fait l'objet d'un livre, cela sous-entend que vous avez fait quelque chose de positif. Si, au contraire, vous avez pris les mauvaise décisions, il est encore temps d'apprendre de vos erreurs.",
            }, 
          ]
        },
        {
          "id": "1105",
          "nom_en": "Historical Figures",
          "desc_en":"While you can absorb a lot of information from reading theories, practical examples will help you understand those theories. Meet some interesting personalities, learn lessons from their lives and adopt some of their characteristics to help you become more successful.",
          "nom_fr":"Personnages historiques",
          "desc_fr":"Si lire la th\u00e9orie vous permet d'assimiler une grande quantit\u00e9 d'informations, la compr\u00e9hension passe par les exemples pratiques. Rencontrez des personnalit\u00e9s sortant de l'ordinaire, tirez les enseignements de leur exp\u00e9rience et appropriez-vous certaines de leurs qualit\u00e9s pour accro\u00eetre vos chances de succ\u00e8s.",
        },
        {
          "id": "1895",
          "nom_en": "History of Science",
          "desc_en":"",
          "nom_fr":"",
          "desc_fr":"",
        },
      ],
    },
    ///////////////////////////////////////////////////////////////////////
    {
      "id": "1117",
      "nom_en": "Classics",
      "desc_en":"Books you have to know! iferu presents you with important classics in world history \u2013 from literature, philosophy, psychology, economics and other fields. This is an indispensable library for anyone who wants to familiarize themselves with the masterpieces of the people who have left their mark on history with their ideas, analyses and stories.",
      "nom_fr":"Classiques",
      "desc_fr":"Les livres que vous devez connaître ! iferu vous présente les grands classiques de l'histoire du monde : littérature, philosophie, psychologie, économie, etc. Il s'agit d'une bibliothèque indispensable pour tous ceux qui veulent se familiariser avec les chefs-d'œuvre des personnes qui ont marqué l'histoire par leurs idées, leurs analyses et leurs récits.",
      "sub_cat": [
        {
          "id": "88711",
          "nom_en": "Literary Classics",
          "desc_en":"Step on board the ill-fated Pequod to hunt down an elusive white whale, fall down a rabbit hole and explore a world of wonder, or spend your afternoon as a giant among Lilliputians. Let our literary classics summaries transport you to other worlds. Go beyond the book to learn about the historical settings in which authors were writing, understand why their texts are important and see how their narratives became permanent cultural touchstones for subsequent generations.",
          "nom_fr":"Classiques littéraires",
          "desc_fr":"Montez à bord de l'infortuné Pequod pour chasser une baleine blanche insaisissable, tombez dans un terrier de lapin et explorez un monde merveilleux, ou passez votre après-midi comme un géant parmi les Lilliputiens. Laissez nos résumés de classiques littéraires vous transporter dans d'autres mondes. Allez au-delà du livre pour découvrir le contexte historique dans lequel les auteurs écrivaient, comprenez pourquoi leurs textes sont importants et voyez comment leurs récits sont devenus des pierres de touche culturelles permanentes pour les générations suivantes.",
        },
      ],
    },
    ///////////////////////////////////////////////////////////////////////



  ]

};

export default Constants;
