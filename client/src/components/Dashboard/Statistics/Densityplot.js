import React, { Component } from "react"
import * as d3 from "d3"

class Densityplot extends Component {
  state = {
    data: [
      {
        type: "Aidan Tolkien",
        value: -1.77631469016691,
      },
      {
        type: "Aidan Tolkien",
        value: 1.64657632287532,
      },
      {
        type: "Aidan Tolkien",
        value: 0.488817419851397,
      },
      {
        type: "Aidan Tolkien",
        value: -0.124094377926691,
      },
      {
        type: "Aidan Tolkien",
        value: -0.0235808204897442,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0633392229143902,
      },
      {
        type: "Aidan Tolkien",
        value: -1.12003877806003,
      },
      {
        type: "Aidan Tolkien",
        value: -0.588100796118183,
      },
      {
        type: "Aidan Tolkien",
        value: -0.910824156455993,
      },
      {
        type: "Aidan Tolkien",
        value: 0.962126919708827,
      },
      {
        type: "Aidan Tolkien",
        value: -1.01869346346051,
      },
      {
        type: "Aidan Tolkien",
        value: -1.35875640761682,
      },
      {
        type: "Aidan Tolkien",
        value: 1.24427385193651,
      },
      {
        type: "Aidan Tolkien",
        value: 0.239585475810887,
      },
      {
        type: "Aidan Tolkien",
        value: -0.568272231735263,
      },
      {
        type: "Aidan Tolkien",
        value: -0.0103423314045569,
      },
      {
        type: "Aidan Tolkien",
        value: 0.953989539491403,
      },
      {
        type: "Aidan Tolkien",
        value: -1.60633418356557,
      },
      {
        type: "Aidan Tolkien",
        value: 1.26566678276414,
      },
      {
        type: "Aidan Tolkien",
        value: -1.79205408275276,
      },
      {
        type: "Aidan Tolkien",
        value: 0.718862570787166,
      },
      {
        type: "Aidan Tolkien",
        value: 0.114161283633124,
      },
      {
        type: "Aidan Tolkien",
        value: 0.766087332515152,
      },
      {
        type: "Aidan Tolkien",
        value: 0.4779682399818,
      },
      {
        type: "Aidan Tolkien",
        value: -0.307722929823103,
      },
      {
        type: "Aidan Tolkien",
        value: -0.603045323791256,
      },
      {
        type: "Aidan Tolkien",
        value: -0.23486140968107,
      },
      {
        type: "Aidan Tolkien",
        value: 1.02798996488556,
      },
      {
        type: "Aidan Tolkien",
        value: 1.16253110266955,
      },
      {
        type: "Aidan Tolkien",
        value: 0.232048323842101,
      },
      {
        type: "Aidan Tolkien",
        value: 0.402099878205056,
      },
      {
        type: "Aidan Tolkien",
        value: -0.495800637547683,
      },
      {
        type: "Aidan Tolkien",
        value: -1.61692856709375,
      },
      {
        type: "Aidan Tolkien",
        value: -1.32167688498653,
      },
      {
        type: "Aidan Tolkien",
        value: 0.30307812291066,
      },
      {
        type: "Aidan Tolkien",
        value: 1.53544912637131,
      },
      {
        type: "Aidan Tolkien",
        value: -1.19321384485454,
      },
      {
        type: "Aidan Tolkien",
        value: -0.137873941879154,
      },
      {
        type: "Aidan Tolkien",
        value: -1.45163314995325,
      },
      {
        type: "Aidan Tolkien",
        value: -0.297258222827512,
      },
      {
        type: "Aidan Tolkien",
        value: 0.105896280654485,
      },
      {
        type: "Aidan Tolkien",
        value: 1.91694220476315,
      },
      {
        type: "Aidan Tolkien",
        value: -0.198328764516995,
      },
      {
        type: "Aidan Tolkien",
        value: 1.67752491649217,
      },
      {
        type: "Aidan Tolkien",
        value: 1.54854238966108,
      },
      {
        type: "Aidan Tolkien",
        value: -1.40403900215512,
      },
      {
        type: "Aidan Tolkien",
        value: -0.151513125904659,
      },
      {
        type: "Aidan Tolkien",
        value: 1.91027696636761,
      },
      {
        type: "Aidan Tolkien",
        value: -0.365013103801853,
      },
      {
        type: "Aidan Tolkien",
        value: -0.435740938063273,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0987419517106402,
      },
      {
        type: "Aidan Tolkien",
        value: -0.580780307908968,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0114739302343987,
      },
      {
        type: "Aidan Tolkien",
        value: 0.313340953566299,
      },
      {
        type: "Aidan Tolkien",
        value: 0.174708917631921,
      },
      {
        type: "Aidan Tolkien",
        value: -0.50282017411911,
      },
      {
        type: "Aidan Tolkien",
        value: 0.856420261719245,
      },
      {
        type: "Aidan Tolkien",
        value: -0.280404317366103,
      },
      {
        type: "Aidan Tolkien",
        value: 1.31929387042381,
      },
      {
        type: "Aidan Tolkien",
        value: 1.70363595692657,
      },
      {
        type: "Aidan Tolkien",
        value: -0.872771229948977,
      },
      {
        type: "Aidan Tolkien",
        value: -1.24901499857157,
      },
      {
        type: "Aidan Tolkien",
        value: -0.684326977089372,
      },
      {
        type: "Aidan Tolkien",
        value: -0.749948150599547,
      },
      {
        type: "Aidan Tolkien",
        value: 0.505884184475694,
      },
      {
        type: "Aidan Tolkien",
        value: 0.336252872196366,
      },
      {
        type: "Aidan Tolkien",
        value: -0.922477692878372,
      },
      {
        type: "Aidan Tolkien",
        value: 0.100576235503017,
      },
      {
        type: "Aidan Tolkien",
        value: -0.164312401515456,
      },
      {
        type: "Aidan Tolkien",
        value: -0.371742589529233,
      },
      {
        type: "Aidan Tolkien",
        value: 0.907189866738376,
      },
      {
        type: "Aidan Tolkien",
        value: 0.609577357183098,
      },
      {
        type: "Aidan Tolkien",
        value: 1.43903689428755,
      },
      {
        type: "Aidan Tolkien",
        value: -0.190630994635708,
      },
      {
        type: "Aidan Tolkien",
        value: 0.30902348323525,
      },
      {
        type: "Aidan Tolkien",
        value: 1.08184489758,
      },
      {
        type: "Aidan Tolkien",
        value: 0.19862997251326,
      },
      {
        type: "Aidan Tolkien",
        value: -0.757620749950119,
      },
      {
        type: "Aidan Tolkien",
        value: -0.34069362108153,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0797417552381486,
      },
      {
        type: "Aidan Tolkien",
        value: 1.78600647032595,
      },
      {
        type: "Aidan Tolkien",
        value: -0.498319614504085,
      },
      {
        type: "Aidan Tolkien",
        value: 0.253613753271703,
      },
      {
        type: "Aidan Tolkien",
        value: 0.396110674892336,
      },
      {
        type: "Aidan Tolkien",
        value: -0.430653519500597,
      },
      {
        type: "Aidan Tolkien",
        value: 0.265039244117706,
      },
      {
        type: "Aidan Tolkien",
        value: 0.260080320604823,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0652738691947021,
      },
      {
        type: "Aidan Tolkien",
        value: -0.590794772943826,
      },
      {
        type: "Aidan Tolkien",
        value: 0.838461892153048,
      },
      {
        type: "Aidan Tolkien",
        value: 1.43960617559651,
      },
      {
        type: "Aidan Tolkien",
        value: 0.649836010851656,
      },
      {
        type: "Aidan Tolkien",
        value: 0.298419095616351,
      },
      {
        type: "Aidan Tolkien",
        value: 0.421420032274433,
      },
      {
        type: "Aidan Tolkien",
        value: 0.227899355827048,
      },
      {
        type: "Aidan Tolkien",
        value: 0.692937492673722,
      },
      {
        type: "Aidan Tolkien",
        value: 0.800267557423017,
      },
      {
        type: "Aidan Tolkien",
        value: -1.37079182443376,
      },
      {
        type: "Aidan Tolkien",
        value: 0.248399389701904,
      },
      {
        type: "Aidan Tolkien",
        value: 1.07159155498822,
      },
      {
        type: "Aidan Tolkien",
        value: 0.692292654749765,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0748613708954729,
      },
      {
        type: "Aidan Tolkien",
        value: -0.509022531531418,
      },
      {
        type: "Aidan Tolkien",
        value: 0.688580368712123,
      },
      {
        type: "Aidan Tolkien",
        value: -1.14207961336888,
      },
      {
        type: "Aidan Tolkien",
        value: 1.33522496362082,
      },
      {
        type: "Aidan Tolkien",
        value: 0.646981157326786,
      },
      {
        type: "Aidan Tolkien",
        value: 0.24145740820343,
      },
      {
        type: "Aidan Tolkien",
        value: 1.112578066954,
      },
      {
        type: "Aidan Tolkien",
        value: 1.84746350454289,
      },
      {
        type: "Aidan Tolkien",
        value: -0.51551960161722,
      },
      {
        type: "Aidan Tolkien",
        value: -0.834718975927522,
      },
      {
        type: "Aidan Tolkien",
        value: 1.12780324488107,
      },
      {
        type: "Aidan Tolkien",
        value: -1.42818755068781,
      },
      {
        type: "Aidan Tolkien",
        value: 0.502994274683518,
      },
      {
        type: "Aidan Tolkien",
        value: -0.408036709216105,
      },
      {
        type: "Aidan Tolkien",
        value: -0.916053528128831,
      },
      {
        type: "Aidan Tolkien",
        value: 0.171935068523988,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0177353651858595,
      },
      {
        type: "Aidan Tolkien",
        value: -1.12699480905614,
      },
      {
        type: "Aidan Tolkien",
        value: 0.515713800460095,
      },
      {
        type: "Aidan Tolkien",
        value: 0.211497494681865,
      },
      {
        type: "Aidan Tolkien",
        value: -0.0703845474656272,
      },
      {
        type: "Aidan Tolkien",
        value: 0.477555349388922,
      },
      {
        type: "Aidan Tolkien",
        value: 1.1907504269784,
      },
      {
        type: "Aidan Tolkien",
        value: 0.438662436279123,
      },
      {
        type: "Aidan Tolkien",
        value: 1.09681416913652,
      },
      {
        type: "Aidan Tolkien",
        value: 1.04642638367958,
      },
      {
        type: "Aidan Tolkien",
        value: -0.350340579926685,
      },
      {
        type: "Aidan Tolkien",
        value: -0.504287804342402,
      },
      {
        type: "Aidan Tolkien",
        value: -0.357033894494894,
      },
      {
        type: "Aidan Tolkien",
        value: -0.279120761608134,
      },
      {
        type: "Aidan Tolkien",
        value: -0.142910807253543,
      },
      {
        type: "Aidan Tolkien",
        value: -0.649613057205143,
      },
      {
        type: "Aidan Tolkien",
        value: -1.59551038454701,
      },
      {
        type: "Aidan Tolkien",
        value: 0.350312636838644,
      },
      {
        type: "Aidan Tolkien",
        value: -0.748651208756859,
      },
      {
        type: "Aidan Tolkien",
        value: 0.54912673347707,
      },
      {
        type: "Aidan Tolkien",
        value: 0.563648804697956,
      },
      {
        type: "Aidan Tolkien",
        value: 1.27863699859648,
      },
      {
        type: "Aidan Tolkien",
        value: -1.05020132574171,
      },
      {
        type: "Aidan Tolkien",
        value: 0.349456142545891,
      },
      {
        type: "Aidan Tolkien",
        value: -0.85529139246364,
      },
      {
        type: "Aidan Tolkien",
        value: 1.2173302185765,
      },
      {
        type: "Aidan Tolkien",
        value: -0.276582159953143,
      },
      {
        type: "Aidan Tolkien",
        value: 0.31166706086929,
      },
      {
        type: "Aidan Tolkien",
        value: -0.426473665648378,
      },
      {
        type: "Aidan Tolkien",
        value: 2.57436679725317,
      },
      {
        type: "Aidan Tolkien",
        value: -0.306402842977318,
      },
      {
        type: "Aidan Tolkien",
        value: 0.920823434599499,
      },
      {
        type: "Aidan Tolkien",
        value: 1.77928310419017,
      },
      {
        type: "Aidan Tolkien",
        value: 0.532089059303082,
      },
      {
        type: "Aidan Tolkien",
        value: -0.633622557431526,
      },
      {
        type: "Aidan Tolkien",
        value: -0.635607414281638,
      },
      {
        type: "Aidan Tolkien",
        value: -0.1296257274616,
      },
      {
        type: "Aidan Tolkien",
        value: -0.0707379424381593,
      },
      {
        type: "Aidan Tolkien",
        value: 0.840500220944046,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0842389370223095,
      },
      {
        type: "Aidan Tolkien",
        value: 0.932604325419917,
      },
      {
        type: "Aidan Tolkien",
        value: -1.18941740821727,
      },
      {
        type: "Aidan Tolkien",
        value: -0.8955586794962,
      },
      {
        type: "Aidan Tolkien",
        value: 0.736684114686044,
      },
      {
        type: "Aidan Tolkien",
        value: -1.34283704860041,
      },
      {
        type: "Aidan Tolkien",
        value: -0.685773911079547,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0139522732158818,
      },
      {
        type: "Aidan Tolkien",
        value: 1.81591896124438,
      },
      {
        type: "Aidan Tolkien",
        value: 1.03264757482343,
      },
      {
        type: "Aidan Tolkien",
        value: 0.950339092976834,
      },
      {
        type: "Aidan Tolkien",
        value: 0.038843225798471,
      },
      {
        type: "Aidan Tolkien",
        value: -1.34936449505282,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0908859444314637,
      },
      {
        type: "Aidan Tolkien",
        value: 1.14060291801025,
      },
      {
        type: "Aidan Tolkien",
        value: 1.68655614831337,
      },
      {
        type: "Aidan Tolkien",
        value: -0.25768628809786,
      },
      {
        type: "Aidan Tolkien",
        value: 0.77961971895373,
      },
      {
        type: "Aidan Tolkien",
        value: 0.116639770156707,
      },
      {
        type: "Aidan Tolkien",
        value: 0.146771422317187,
      },
      {
        type: "Aidan Tolkien",
        value: 0.349030934390303,
      },
      {
        type: "Aidan Tolkien",
        value: -1.60696020657892,
      },
      {
        type: "Aidan Tolkien",
        value: -0.527450691901211,
      },
      {
        type: "Aidan Tolkien",
        value: 0.654963301991331,
      },
      {
        type: "Aidan Tolkien",
        value: 0.744371460678533,
      },
      {
        type: "Aidan Tolkien",
        value: -0.970162671920518,
      },
      {
        type: "Aidan Tolkien",
        value: -1.4346980779679,
      },
      {
        type: "Aidan Tolkien",
        value: 0.781818276405243,
      },
      {
        type: "Aidan Tolkien",
        value: 0.823496710682671,
      },
      {
        type: "Aidan Tolkien",
        value: -0.880534277781444,
      },
      {
        type: "Aidan Tolkien",
        value: 1.23673386611523,
      },
      {
        type: "Aidan Tolkien",
        value: -0.174329125997129,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0320351714224449,
      },
      {
        type: "Aidan Tolkien",
        value: -0.166233174030385,
      },
      {
        type: "Aidan Tolkien",
        value: 1.90205778442266,
      },
      {
        type: "Aidan Tolkien",
        value: -0.786138132229225,
      },
      {
        type: "Aidan Tolkien",
        value: 0.262080805008428,
      },
      {
        type: "Aidan Tolkien",
        value: 0.291954354843401,
      },
      {
        type: "Aidan Tolkien",
        value: -0.508125905601758,
      },
      {
        type: "Aidan Tolkien",
        value: 0.905800599803613,
      },
      {
        type: "Aidan Tolkien",
        value: 1.21090080678689,
      },
      {
        type: "Aidan Tolkien",
        value: 1.1365094664158,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0476315215848367,
      },
      {
        type: "Aidan Tolkien",
        value: 0.34705160003871,
      },
      {
        type: "Aidan Tolkien",
        value: 0.111742782796895,
      },
      {
        type: "Aidan Tolkien",
        value: -0.8213374787026,
      },
      {
        type: "Aidan Tolkien",
        value: 1.33114118062915,
      },
      {
        type: "Aidan Tolkien",
        value: -1.90354314855266,
      },
      {
        type: "Aidan Tolkien",
        value: 1.12748418261124,
      },
      {
        type: "Aidan Tolkien",
        value: 1.71575052918318,
      },
      {
        type: "Aidan Tolkien",
        value: -0.944940062709235,
      },
      {
        type: "Aidan Tolkien",
        value: -1.96390566728158,
      },
      {
        type: "Aidan Tolkien",
        value: -1.63083959739529,
      },
      {
        type: "Aidan Tolkien",
        value: 0.654002492706821,
      },
      {
        type: "Aidan Tolkien",
        value: -1.55406764647858,
      },
      {
        type: "Aidan Tolkien",
        value: -1.74596274956721,
      },
      {
        type: "Aidan Tolkien",
        value: 0.626530905299107,
      },
      {
        type: "Aidan Tolkien",
        value: 0.103547478692159,
      },
      {
        type: "Aidan Tolkien",
        value: -0.240260655503409,
      },
      {
        type: "Aidan Tolkien",
        value: 0.337912097792632,
      },
      {
        type: "Aidan Tolkien",
        value: -0.210724232695212,
      },
      {
        type: "Aidan Tolkien",
        value: -0.198800373781965,
      },
      {
        type: "Aidan Tolkien",
        value: 1.6974584469881,
      },
      {
        type: "Aidan Tolkien",
        value: -0.448695424820659,
      },
      {
        type: "Aidan Tolkien",
        value: 0.188948814199613,
      },
      {
        type: "Aidan Tolkien",
        value: 0.696134904203245,
      },
      {
        type: "Aidan Tolkien",
        value: -1.13443199905912,
      },
      {
        type: "Aidan Tolkien",
        value: -0.527405473265847,
      },
      {
        type: "Aidan Tolkien",
        value: 0.619124592245063,
      },
      {
        type: "Aidan Tolkien",
        value: -0.440673891483413,
      },
      {
        type: "Aidan Tolkien",
        value: 0.425955895338581,
      },
      {
        type: "Aidan Tolkien",
        value: -0.0251200760504208,
      },
      {
        type: "Aidan Tolkien",
        value: 0.741147682949136,
      },
      {
        type: "Aidan Tolkien",
        value: -2.10158962039462,
      },
      {
        type: "Aidan Tolkien",
        value: -1.256567337705,
      },
      {
        type: "Aidan Tolkien",
        value: -2.07466967934614,
      },
      {
        type: "Aidan Tolkien",
        value: -0.142487223576348,
      },
      {
        type: "Aidan Tolkien",
        value: 1.50386886884296,
      },
      {
        type: "Aidan Tolkien",
        value: 0.102302564026395,
      },
      {
        type: "Aidan Tolkien",
        value: 0.922742091546596,
      },
      {
        type: "Aidan Tolkien",
        value: -1.34126567015426,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0665358539383805,
      },
      {
        type: "Aidan Tolkien",
        value: 0.509245659614518,
      },
      {
        type: "Aidan Tolkien",
        value: -1.51271743272799,
      },
      {
        type: "Aidan Tolkien",
        value: -0.407070361780782,
      },
      {
        type: "Aidan Tolkien",
        value: -0.457005018240274,
      },
      {
        type: "Aidan Tolkien",
        value: 1.18311228497644,
      },
      {
        type: "Aidan Tolkien",
        value: 0.747630499696016,
      },
      {
        type: "Aidan Tolkien",
        value: 0.825267452697861,
      },
      {
        type: "Aidan Tolkien",
        value: 1.02410589451897,
      },
      {
        type: "Aidan Tolkien",
        value: -0.0678063530763343,
      },
      {
        type: "Aidan Tolkien",
        value: 0.439645503232819,
      },
      {
        type: "Aidan Tolkien",
        value: 1.19282643582904,
      },
      {
        type: "Aidan Tolkien",
        value: -1.08957561099067,
      },
      {
        type: "Aidan Tolkien",
        value: -1.14287110339942,
      },
      {
        type: "Aidan Tolkien",
        value: 0.800297879226223,
      },
      {
        type: "Aidan Tolkien",
        value: 0.706005333015349,
      },
      {
        type: "Aidan Tolkien",
        value: -0.19696954414309,
      },
      {
        type: "Aidan Tolkien",
        value: -0.100172765982082,
      },
      {
        type: "Aidan Tolkien",
        value: 0.85323217151236,
      },
      {
        type: "Aidan Tolkien",
        value: 1.28191208150568,
      },
      {
        type: "Aidan Tolkien",
        value: -0.0459085989689733,
      },
      {
        type: "Aidan Tolkien",
        value: -1.29685963053915,
      },
      {
        type: "Aidan Tolkien",
        value: 1.22305466707461,
      },
      {
        type: "Aidan Tolkien",
        value: -2.78593335097539,
      },
      {
        type: "Aidan Tolkien",
        value: 0.357015256979645,
      },
      {
        type: "Aidan Tolkien",
        value: 0.560681113452721,
      },
      {
        type: "Aidan Tolkien",
        value: 0.430188869751462,
      },
      {
        type: "Aidan Tolkien",
        value: 0.209398070370287,
      },
      {
        type: "Aidan Tolkien",
        value: -0.624053358791984,
      },
      {
        type: "Aidan Tolkien",
        value: -0.350092658564894,
      },
      {
        type: "Aidan Tolkien",
        value: 0.361170355224208,
      },
      {
        type: "Aidan Tolkien",
        value: 0.733625529445184,
      },
      {
        type: "Aidan Tolkien",
        value: -0.409440889637936,
      },
      {
        type: "Aidan Tolkien",
        value: 0.384145741587682,
      },
      {
        type: "Aidan Tolkien",
        value: 0.463646204787893,
      },
      {
        type: "Aidan Tolkien",
        value: 0.509320772049528,
      },
      {
        type: "Aidan Tolkien",
        value: -0.347902983570553,
      },
      {
        type: "Aidan Tolkien",
        value: -0.833555622941997,
      },
      {
        type: "Aidan Tolkien",
        value: -0.928315063137006,
      },
      {
        type: "Aidan Tolkien",
        value: 1.1880024450548,
      },
      {
        type: "Aidan Tolkien",
        value: 1.85995197635261,
      },
      {
        type: "Aidan Tolkien",
        value: 0.853371129822413,
      },
      {
        type: "Aidan Tolkien",
        value: -1.31574619843078,
      },
      {
        type: "Aidan Tolkien",
        value: -0.0905793150376138,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0556576492520869,
      },
      {
        type: "Aidan Tolkien",
        value: -0.189903457995174,
      },
      {
        type: "Aidan Tolkien",
        value: -1.80053400013445,
      },
      {
        type: "Aidan Tolkien",
        value: 0.314929091666782,
      },
      {
        type: "Aidan Tolkien",
        value: -0.936395258843109,
      },
      {
        type: "Aidan Tolkien",
        value: 1.81345001529216,
      },
      {
        type: "Aidan Tolkien",
        value: -1.30849434293259,
      },
      {
        type: "Aidan Tolkien",
        value: 1.45481321474949,
      },
      {
        type: "Aidan Tolkien",
        value: -3.50594421731902,
      },
      {
        type: "Aidan Tolkien",
        value: 1.86498599523494,
      },
      {
        type: "Aidan Tolkien",
        value: 2.61580570493104,
      },
      {
        type: "Aidan Tolkien",
        value: 0.244160938798585,
      },
      {
        type: "Aidan Tolkien",
        value: -1.59040828280344,
      },
      {
        type: "Aidan Tolkien",
        value: -0.657119286040774,
      },
      {
        type: "Aidan Tolkien",
        value: 1.11444808130286,
      },
      {
        type: "Aidan Tolkien",
        value: -0.756956990191673,
      },
      {
        type: "Aidan Tolkien",
        value: -2.16573117871612,
      },
      {
        type: "Aidan Tolkien",
        value: 0.334368462149139,
      },
      {
        type: "Aidan Tolkien",
        value: 0.12751507398452,
      },
      {
        type: "Aidan Tolkien",
        value: -0.669669113127795,
      },
      {
        type: "Aidan Tolkien",
        value: 0.585390552933652,
      },
      {
        type: "Aidan Tolkien",
        value: 0.348456258267102,
      },
      {
        type: "Aidan Tolkien",
        value: 0.851253548397375,
      },
      {
        type: "Aidan Tolkien",
        value: 1.01797434491064,
      },
      {
        type: "Aidan Tolkien",
        value: -1.80453812602563,
      },
      {
        type: "Aidan Tolkien",
        value: -1.29179086491562,
      },
      {
        type: "Aidan Tolkien",
        value: -1.71851690340551,
      },
      {
        type: "Aidan Tolkien",
        value: 1.23291763341473,
      },
      {
        type: "Aidan Tolkien",
        value: 0.192114834586251,
      },
      {
        type: "Aidan Tolkien",
        value: -1.2879616787075,
      },
      {
        type: "Aidan Tolkien",
        value: 0.259613659151695,
      },
      {
        type: "Aidan Tolkien",
        value: -0.98050522355092,
      },
      {
        type: "Aidan Tolkien",
        value: -1.18448271636462,
      },
      {
        type: "Aidan Tolkien",
        value: -0.462754915392224,
      },
      {
        type: "Aidan Tolkien",
        value: -0.23714096790591,
      },
      {
        type: "Aidan Tolkien",
        value: 0.625998926835165,
      },
      {
        type: "Aidan Tolkien",
        value: -0.614556524885064,
      },
      {
        type: "Aidan Tolkien",
        value: 1.52785311208555,
      },
      {
        type: "Aidan Tolkien",
        value: -2.13101395991171,
      },
      {
        type: "Aidan Tolkien",
        value: 0.67817812651585,
      },
      {
        type: "Aidan Tolkien",
        value: -0.715549322466154,
      },
      {
        type: "Aidan Tolkien",
        value: -0.0269733334480004,
      },
      {
        type: "Aidan Tolkien",
        value: 0.960245200021654,
      },
      {
        type: "Aidan Tolkien",
        value: 1.00718093684254,
      },
      {
        type: "Aidan Tolkien",
        value: 0.794558620182907,
      },
      {
        type: "Aidan Tolkien",
        value: 1.51715982597433,
      },
      {
        type: "Aidan Tolkien",
        value: 0.194986728531335,
      },
      {
        type: "Aidan Tolkien",
        value: -0.867360351000256,
      },
      {
        type: "Aidan Tolkien",
        value: -0.091398815769171,
      },
      {
        type: "Aidan Tolkien",
        value: -0.0567381272147842,
      },
      {
        type: "Aidan Tolkien",
        value: 1.5761890026181,
      },
      {
        type: "Aidan Tolkien",
        value: 0.408958553776662,
      },
      {
        type: "Aidan Tolkien",
        value: -1.17731408667032,
      },
      {
        type: "Aidan Tolkien",
        value: 0.147329556272223,
      },
      {
        type: "Aidan Tolkien",
        value: -0.711080651195667,
      },
      {
        type: "Aidan Tolkien",
        value: 0.952091865504397,
      },
      {
        type: "Aidan Tolkien",
        value: 1.0353037984167,
      },
      {
        type: "Aidan Tolkien",
        value: 0.323605496034808,
      },
      {
        type: "Aidan Tolkien",
        value: -0.392341404388882,
      },
      {
        type: "Aidan Tolkien",
        value: -0.435304640841965,
      },
      {
        type: "Aidan Tolkien",
        value: -0.228510719181855,
      },
      {
        type: "Aidan Tolkien",
        value: -1.16351083945058,
      },
      {
        type: "Aidan Tolkien",
        value: -0.881261066499063,
      },
      {
        type: "Aidan Tolkien",
        value: -0.702746758569098,
      },
      {
        type: "Aidan Tolkien",
        value: -1.00335379087253,
      },
      {
        type: "Aidan Tolkien",
        value: 2.20792450457246,
      },
      {
        type: "Aidan Tolkien",
        value: 0.425077201990368,
      },
      {
        type: "Aidan Tolkien",
        value: -0.792647028018007,
      },
      {
        type: "Aidan Tolkien",
        value: 0.770152749529976,
      },
      {
        type: "Aidan Tolkien",
        value: 0.95628163309937,
      },
      {
        type: "Aidan Tolkien",
        value: -0.555920987985749,
      },
      {
        type: "Aidan Tolkien",
        value: 0.943823532953522,
      },
      {
        type: "Aidan Tolkien",
        value: 0.802353914995272,
      },
      {
        type: "Aidan Tolkien",
        value: 0.45245718674193,
      },
      {
        type: "Aidan Tolkien",
        value: 1.4844471728045,
      },
      {
        type: "Aidan Tolkien",
        value: 0.575965658844219,
      },
      {
        type: "Aidan Tolkien",
        value: -0.0537687907622965,
      },
      {
        type: "Aidan Tolkien",
        value: -0.393649257430987,
      },
      {
        type: "Aidan Tolkien",
        value: -0.54832600959828,
      },
      {
        type: "Aidan Tolkien",
        value: 0.91384710044939,
      },
      {
        type: "Aidan Tolkien",
        value: 0.256801025885881,
      },
      {
        type: "Aidan Tolkien",
        value: -0.642588585387068,
      },
      {
        type: "Aidan Tolkien",
        value: -2.41131739462017,
      },
      {
        type: "Aidan Tolkien",
        value: -1.57708847791836,
      },
      {
        type: "Aidan Tolkien",
        value: 1.47152939995423,
      },
      {
        type: "Aidan Tolkien",
        value: 1.23503160569005,
      },
      {
        type: "Aidan Tolkien",
        value: -1.30586019615921,
      },
      {
        type: "Aidan Tolkien",
        value: -0.618103014746121,
      },
      {
        type: "Aidan Tolkien",
        value: -0.721038405192118,
      },
      {
        type: "Aidan Tolkien",
        value: 0.534591680218683,
      },
      {
        type: "Aidan Tolkien",
        value: 0.408641346887846,
      },
      {
        type: "Aidan Tolkien",
        value: 1.3390983756701,
      },
      {
        type: "Aidan Tolkien",
        value: -0.0667192709887128,
      },
      {
        type: "Aidan Tolkien",
        value: 1.07425969038637,
      },
      {
        type: "Aidan Tolkien",
        value: 0.726486120773545,
      },
      {
        type: "Aidan Tolkien",
        value: -0.178628757124002,
      },
      {
        type: "Aidan Tolkien",
        value: -1.55734586374734,
      },
      {
        type: "Aidan Tolkien",
        value: 0.814331625152238,
      },
      {
        type: "Aidan Tolkien",
        value: 0.698428895318392,
      },
      {
        type: "Aidan Tolkien",
        value: 0.25129851505021,
      },
      {
        type: "Aidan Tolkien",
        value: 0.849758472486651,
      },
      {
        type: "Aidan Tolkien",
        value: 0.694852873523169,
      },
      {
        type: "Aidan Tolkien",
        value: 0.611186309883227,
      },
      {
        type: "Aidan Tolkien",
        value: -1.43459272198634,
      },
      {
        type: "Aidan Tolkien",
        value: 0.128785789005622,
      },
      {
        type: "Aidan Tolkien",
        value: 0.495702024060098,
      },
      {
        type: "Aidan Tolkien",
        value: 2.51074916442246,
      },
      {
        type: "Aidan Tolkien",
        value: -0.482248626663133,
      },
      {
        type: "Aidan Tolkien",
        value: -0.134069112613607,
      },
      {
        type: "Aidan Tolkien",
        value: -1.36806029998031,
      },
      {
        type: "Aidan Tolkien",
        value: 0.702598961836526,
      },
      {
        type: "Aidan Tolkien",
        value: 0.258910599880245,
      },
      {
        type: "Aidan Tolkien",
        value: 0.589391094903451,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0262642512813902,
      },
      {
        type: "Aidan Tolkien",
        value: 1.13057339639464,
      },
      {
        type: "Aidan Tolkien",
        value: 1.07910189654172,
      },
      {
        type: "Aidan Tolkien",
        value: -2.43881479019546,
      },
      {
        type: "Aidan Tolkien",
        value: -0.746997308205242,
      },
      {
        type: "Aidan Tolkien",
        value: 1.69230881949704,
      },
      {
        type: "Aidan Tolkien",
        value: -1.33320573274152,
      },
      {
        type: "Aidan Tolkien",
        value: 1.48476385353151,
      },
      {
        type: "Aidan Tolkien",
        value: -1.09199484626742,
      },
      {
        type: "Aidan Tolkien",
        value: -0.818443438104646,
      },
      {
        type: "Aidan Tolkien",
        value: -1.04895555200285,
      },
      {
        type: "Aidan Tolkien",
        value: -0.593275958365904,
      },
      {
        type: "Aidan Tolkien",
        value: -0.900608699746879,
      },
      {
        type: "Aidan Tolkien",
        value: 0.718550122114772,
      },
      {
        type: "Aidan Tolkien",
        value: 0.244267142541887,
      },
      {
        type: "Aidan Tolkien",
        value: 0.216210791381863,
      },
      {
        type: "Aidan Tolkien",
        value: 1.06260829549735,
      },
      {
        type: "Aidan Tolkien",
        value: 0.801209126774246,
      },
      {
        type: "Aidan Tolkien",
        value: 1.09516318167776,
      },
      {
        type: "Aidan Tolkien",
        value: 0.135512951152735,
      },
      {
        type: "Aidan Tolkien",
        value: -0.536360170526738,
      },
      {
        type: "Aidan Tolkien",
        value: -0.00218844256893489,
      },
      {
        type: "Aidan Tolkien",
        value: -0.377929201983968,
      },
      {
        type: "Aidan Tolkien",
        value: 0.20941041943815,
      },
      {
        type: "Aidan Tolkien",
        value: -0.0567085388024048,
      },
      {
        type: "Aidan Tolkien",
        value: 1.10412186996891,
      },
      {
        type: "Aidan Tolkien",
        value: 0.668775407739912,
      },
      {
        type: "Aidan Tolkien",
        value: 0.549229919378919,
      },
      {
        type: "Aidan Tolkien",
        value: 0.240744899907173,
      },
      {
        type: "Aidan Tolkien",
        value: -0.503621584518574,
      },
      {
        type: "Aidan Tolkien",
        value: -0.533704367472546,
      },
      {
        type: "Aidan Tolkien",
        value: 0.975936890217842,
      },
      {
        type: "Aidan Tolkien",
        value: 0.154360662715599,
      },
      {
        type: "Aidan Tolkien",
        value: -0.356990401961095,
      },
      {
        type: "Aidan Tolkien",
        value: 0.200014957558072,
      },
      {
        type: "Aidan Tolkien",
        value: -2.17716931519937,
      },
      {
        type: "Aidan Tolkien",
        value: 1.14559785431086,
      },
      {
        type: "Aidan Tolkien",
        value: -0.55314812603638,
      },
      {
        type: "Aidan Tolkien",
        value: 0.269782269015066,
      },
      {
        type: "Aidan Tolkien",
        value: 0.127354472049115,
      },
      {
        type: "Aidan Tolkien",
        value: 0.708799516797812,
      },
      {
        type: "Aidan Tolkien",
        value: -0.307474146117214,
      },
      {
        type: "Aidan Tolkien",
        value: 1.34567340237831,
      },
      {
        type: "Aidan Tolkien",
        value: 0.787033757610007,
      },
      {
        type: "Aidan Tolkien",
        value: -0.49120928241567,
      },
      {
        type: "Aidan Tolkien",
        value: -1.65291848583832,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0233363815704592,
      },
      {
        type: "Aidan Tolkien",
        value: 0.767319688217159,
      },
      {
        type: "Aidan Tolkien",
        value: -0.381012428642754,
      },
      {
        type: "Aidan Tolkien",
        value: -0.472108130875811,
      },
      {
        type: "Aidan Tolkien",
        value: 0.75743175335856,
      },
      {
        type: "Aidan Tolkien",
        value: -0.653822070610848,
      },
      {
        type: "Aidan Tolkien",
        value: 1.31219981094986,
      },
      {
        type: "Aidan Tolkien",
        value: -1.89101612848005,
      },
      {
        type: "Aidan Tolkien",
        value: -0.478066276256009,
      },
      {
        type: "Aidan Tolkien",
        value: 1.95236405088342,
      },
      {
        type: "Aidan Tolkien",
        value: -0.39876917881868,
      },
      {
        type: "Aidan Tolkien",
        value: -2.03730131384219,
      },
      {
        type: "Aidan Tolkien",
        value: -0.419577516260083,
      },
      {
        type: "Aidan Tolkien",
        value: 0.466747718339508,
      },
      {
        type: "Aidan Tolkien",
        value: -0.325162541522102,
      },
      {
        type: "Aidan Tolkien",
        value: -0.240425898522446,
      },
      {
        type: "Aidan Tolkien",
        value: 1.64225638104815,
      },
      {
        type: "Aidan Tolkien",
        value: -0.590470884454383,
      },
      {
        type: "Aidan Tolkien",
        value: 1.54499841246943,
      },
      {
        type: "Aidan Tolkien",
        value: 0.919376076795626,
      },
      {
        type: "Aidan Tolkien",
        value: -0.946235577475321,
      },
      {
        type: "Aidan Tolkien",
        value: 1.98750364846889,
      },
      {
        type: "Aidan Tolkien",
        value: -0.104496120975884,
      },
      {
        type: "Aidan Tolkien",
        value: 0.211523205021308,
      },
      {
        type: "Aidan Tolkien",
        value: -0.506471754617422,
      },
      {
        type: "Aidan Tolkien",
        value: -0.683457028553245,
      },
      {
        type: "Aidan Tolkien",
        value: -0.600409090977575,
      },
      {
        type: "Aidan Tolkien",
        value: -0.83648334445122,
      },
      {
        type: "Aidan Tolkien",
        value: -0.139671172557107,
      },
      {
        type: "Aidan Tolkien",
        value: 0.438545833301776,
      },
      {
        type: "Aidan Tolkien",
        value: 0.140162903399619,
      },
      {
        type: "Aidan Tolkien",
        value: -1.20110911068291,
      },
      {
        type: "Aidan Tolkien",
        value: -1.77708359932295,
      },
      {
        type: "Aidan Tolkien",
        value: 0.111208157579262,
      },
      {
        type: "Aidan Tolkien",
        value: -0.0773322337300189,
      },
      {
        type: "Aidan Tolkien",
        value: -0.148505450939909,
      },
      {
        type: "Aidan Tolkien",
        value: -0.379423118934028,
      },
      {
        type: "Aidan Tolkien",
        value: 0.343555461976724,
      },
      {
        type: "Aidan Tolkien",
        value: 1.09949938549779,
      },
      {
        type: "Aidan Tolkien",
        value: -1.27348100606617,
      },
      {
        type: "Aidan Tolkien",
        value: -1.19223807489702,
      },
      {
        type: "Aidan Tolkien",
        value: 1.87153444150842,
      },
      {
        type: "Aidan Tolkien",
        value: 1.19449311514391,
      },
      {
        type: "Aidan Tolkien",
        value: 0.722523091147097,
      },
      {
        type: "Aidan Tolkien",
        value: -0.0318172221236906,
      },
      {
        type: "Aidan Tolkien",
        value: -0.198589072731269,
      },
      {
        type: "Aidan Tolkien",
        value: -1.06061982310181,
      },
      {
        type: "Aidan Tolkien",
        value: 0.141612140858491,
      },
      {
        type: "Aidan Tolkien",
        value: -0.943999295373735,
      },
      {
        type: "Aidan Tolkien",
        value: -0.161573962089914,
      },
      {
        type: "Aidan Tolkien",
        value: 2.64634769294747,
      },
      {
        type: "Aidan Tolkien",
        value: 1.48262949746228,
      },
      {
        type: "Aidan Tolkien",
        value: -0.338623512664429,
      },
      {
        type: "Aidan Tolkien",
        value: 1.22089613261726,
      },
      {
        type: "Aidan Tolkien",
        value: -0.634293086122909,
      },
      {
        type: "Aidan Tolkien",
        value: 0.442385291552865,
      },
      {
        type: "Aidan Tolkien",
        value: -0.298724171135196,
      },
      {
        type: "Aidan Tolkien",
        value: 1.05510687193814,
      },
      {
        type: "Aidan Tolkien",
        value: 1.2281328615261,
      },
      {
        type: "Aidan Tolkien",
        value: 0.656463265121104,
      },
      {
        type: "Aidan Tolkien",
        value: 0.360115698736818,
      },
      {
        type: "Aidan Tolkien",
        value: -2.1735844979327,
      },
      {
        type: "Aidan Tolkien",
        value: -1.50590458762652,
      },
      {
        type: "Aidan Tolkien",
        value: -0.837406317114121,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0516485842107923,
      },
      {
        type: "Aidan Tolkien",
        value: 1.30960492954656,
      },
      {
        type: "Aidan Tolkien",
        value: -0.271783667392857,
      },
      {
        type: "Aidan Tolkien",
        value: 1.07046070117244,
      },
      {
        type: "Aidan Tolkien",
        value: 0.675448791980992,
      },
      {
        type: "Aidan Tolkien",
        value: 1.58832986836535,
      },
      {
        type: "Aidan Tolkien",
        value: 1.85995824757993,
      },
      {
        type: "Aidan Tolkien",
        value: -0.0863002769898336,
      },
      {
        type: "Aidan Tolkien",
        value: -1.39052097211725,
      },
      {
        type: "Aidan Tolkien",
        value: -0.452286269709715,
      },
      {
        type: "Aidan Tolkien",
        value: 0.564328426881463,
      },
      {
        type: "Aidan Tolkien",
        value: -0.416085258025054,
      },
      {
        type: "Aidan Tolkien",
        value: 0.772625964816034,
      },
      {
        type: "Aidan Tolkien",
        value: -1.23951613057692,
      },
      {
        type: "Aidan Tolkien",
        value: -1.65937409466501,
      },
      {
        type: "Aidan Tolkien",
        value: 1.23551059139762,
      },
      {
        type: "Aidan Tolkien",
        value: -0.478167300649581,
      },
      {
        type: "Aidan Tolkien",
        value: 1.56143040977733,
      },
      {
        type: "Aidan Tolkien",
        value: 0.864999613288115,
      },
      {
        type: "Aidan Tolkien",
        value: 0.204634205971248,
      },
      {
        type: "Aidan Tolkien",
        value: 0.286373323932789,
      },
      {
        type: "Aidan Tolkien",
        value: -2.07569973399254,
      },
      {
        type: "Aidan Tolkien",
        value: 0.719118425624412,
      },
      {
        type: "Aidan Tolkien",
        value: 2.48088605848923,
      },
      {
        type: "Aidan Tolkien",
        value: -0.678755631723779,
      },
      {
        type: "Aidan Tolkien",
        value: -1.23912416738401,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0565469153540672,
      },
      {
        type: "Aidan Tolkien",
        value: -1.28167314550816,
      },
      {
        type: "Aidan Tolkien",
        value: 0.594029495624233,
      },
      {
        type: "Aidan Tolkien",
        value: -0.598419552540801,
      },
      {
        type: "Aidan Tolkien",
        value: -1.20562589909205,
      },
      {
        type: "Aidan Tolkien",
        value: 0.452490129170124,
      },
      {
        type: "Aidan Tolkien",
        value: -0.620200319430699,
      },
      {
        type: "Aidan Tolkien",
        value: -1.95018601323985,
      },
      {
        type: "Aidan Tolkien",
        value: -1.17105017974242,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0843009018294492,
      },
      {
        type: "Aidan Tolkien",
        value: -1.3902269852843,
      },
      {
        type: "Aidan Tolkien",
        value: 0.30907773078812,
      },
      {
        type: "Aidan Tolkien",
        value: 0.155271656300751,
      },
      {
        type: "Aidan Tolkien",
        value: -0.292616056630591,
      },
      {
        type: "Aidan Tolkien",
        value: 0.30181096859034,
      },
      {
        type: "Aidan Tolkien",
        value: -0.0372201896753214,
      },
      {
        type: "Aidan Tolkien",
        value: 0.358217778065714,
      },
      {
        type: "Aidan Tolkien",
        value: -0.307952851072267,
      },
      {
        type: "Aidan Tolkien",
        value: -0.515550867943546,
      },
      {
        type: "Aidan Tolkien",
        value: 0.340734245577699,
      },
      {
        type: "Aidan Tolkien",
        value: -1.45449692848265,
      },
      {
        type: "Aidan Tolkien",
        value: 2.01506591609875,
      },
      {
        type: "Aidan Tolkien",
        value: 2.36851476754157,
      },
      {
        type: "Aidan Tolkien",
        value: 0.67349841590729,
      },
      {
        type: "Aidan Tolkien",
        value: 0.395597110481871,
      },
      {
        type: "Aidan Tolkien",
        value: 1.2544127064985,
      },
      {
        type: "Aidan Tolkien",
        value: 1.30817302720366,
      },
      {
        type: "Aidan Tolkien",
        value: -0.257135171895442,
      },
      {
        type: "Aidan Tolkien",
        value: -1.25540735486299,
      },
      {
        type: "Aidan Tolkien",
        value: 0.827899047339341,
      },
      {
        type: "Aidan Tolkien",
        value: 0.619205004983409,
      },
      {
        type: "Aidan Tolkien",
        value: 2.34232223209564,
      },
      {
        type: "Aidan Tolkien",
        value: 0.130147101490965,
      },
      {
        type: "Aidan Tolkien",
        value: 0.397062732412453,
      },
      {
        type: "Aidan Tolkien",
        value: 1.05808598734961,
      },
      {
        type: "Aidan Tolkien",
        value: -0.461205296811059,
      },
      {
        type: "Aidan Tolkien",
        value: -1.48514533302868,
      },
      {
        type: "Aidan Tolkien",
        value: 1.92745573885298,
      },
      {
        type: "Aidan Tolkien",
        value: 0.99330567296386,
      },
      {
        type: "Aidan Tolkien",
        value: 1.65300452265034,
      },
      {
        type: "Aidan Tolkien",
        value: -0.42850566181871,
      },
      {
        type: "Aidan Tolkien",
        value: -2.01422486527963,
      },
      {
        type: "Aidan Tolkien",
        value: 0.598436981843468,
      },
      {
        type: "Aidan Tolkien",
        value: 1.8901078443881,
      },
      {
        type: "Aidan Tolkien",
        value: 1.23419978317447,
      },
      {
        type: "Aidan Tolkien",
        value: -1.81894481658391,
      },
      {
        type: "Aidan Tolkien",
        value: 0.932209241294651,
      },
      {
        type: "Aidan Tolkien",
        value: 0.31388858812648,
      },
      {
        type: "Aidan Tolkien",
        value: -1.4356775794975,
      },
      {
        type: "Aidan Tolkien",
        value: -0.287092157131634,
      },
      {
        type: "Aidan Tolkien",
        value: 1.37398803182363,
      },
      {
        type: "Aidan Tolkien",
        value: 1.37696098745949,
      },
      {
        type: "Aidan Tolkien",
        value: -0.857054033101197,
      },
      {
        type: "Aidan Tolkien",
        value: 0.476170700260757,
      },
      {
        type: "Aidan Tolkien",
        value: -0.179819111767417,
      },
      {
        type: "Aidan Tolkien",
        value: -1.3592352253486,
      },
      {
        type: "Aidan Tolkien",
        value: -1.35080555511003,
      },
      {
        type: "Aidan Tolkien",
        value: -1.11446613141611,
      },
      {
        type: "Aidan Tolkien",
        value: 1.63533858296185,
      },
      {
        type: "Aidan Tolkien",
        value: 0.751479016710911,
      },
      {
        type: "Aidan Tolkien",
        value: -0.723091269122939,
      },
      {
        type: "Aidan Tolkien",
        value: 0.122740086396294,
      },
      {
        type: "Aidan Tolkien",
        value: 1.22830402380792,
      },
      {
        type: "Aidan Tolkien",
        value: -0.521883896854516,
      },
      {
        type: "Aidan Tolkien",
        value: -1.49736107004879,
      },
      {
        type: "Aidan Tolkien",
        value: -0.889470837281296,
      },
      {
        type: "Aidan Tolkien",
        value: -0.56091862262184,
      },
      {
        type: "Aidan Tolkien",
        value: 0.210800631548912,
      },
      {
        type: "Aidan Tolkien",
        value: 0.716279387716621,
      },
      {
        type: "Aidan Tolkien",
        value: -0.415651237478095,
      },
      {
        type: "Aidan Tolkien",
        value: -0.953698329025762,
      },
      {
        type: "Aidan Tolkien",
        value: 1.31934752015253,
      },
      {
        type: "Aidan Tolkien",
        value: -0.0619696421617973,
      },
      {
        type: "Aidan Tolkien",
        value: 1.34313619939034,
      },
      {
        type: "Aidan Tolkien",
        value: -0.292932505314644,
      },
      {
        type: "Aidan Tolkien",
        value: 0.110486398224234,
      },
      {
        type: "Aidan Tolkien",
        value: -0.34385836949526,
      },
      {
        type: "Aidan Tolkien",
        value: -1.40606275705706,
      },
      {
        type: "Aidan Tolkien",
        value: 1.42495180326693,
      },
      {
        type: "Aidan Tolkien",
        value: 0.228682860675508,
      },
      {
        type: "Aidan Tolkien",
        value: -0.121139545225128,
      },
      {
        type: "Aidan Tolkien",
        value: 2.08623124339571,
      },
      {
        type: "Aidan Tolkien",
        value: -0.93244485233178,
      },
      {
        type: "Aidan Tolkien",
        value: 0.835049428740539,
      },
      {
        type: "Aidan Tolkien",
        value: 2.86665648837723,
      },
      {
        type: "Aidan Tolkien",
        value: -0.72717636534863,
      },
      {
        type: "Aidan Tolkien",
        value: 1.04404071930327,
      },
      {
        type: "Aidan Tolkien",
        value: -0.81284179301742,
      },
      {
        type: "Aidan Tolkien",
        value: -0.961741013428974,
      },
      {
        type: "Aidan Tolkien",
        value: 0.340739442985552,
      },
      {
        type: "Aidan Tolkien",
        value: -1.07843520059911,
      },
      {
        type: "Aidan Tolkien",
        value: 0.992115397180361,
      },
      {
        type: "Aidan Tolkien",
        value: 0.101196777411518,
      },
      {
        type: "Aidan Tolkien",
        value: 1.31504183639461,
      },
      {
        type: "Aidan Tolkien",
        value: 0.262679742336339,
      },
      {
        type: "Aidan Tolkien",
        value: -0.848042449282639,
      },
      {
        type: "Aidan Tolkien",
        value: -0.822011786339723,
      },
      {
        type: "Aidan Tolkien",
        value: -2.75671593356607,
      },
      {
        type: "Aidan Tolkien",
        value: 0.235086108349832,
      },
      {
        type: "Aidan Tolkien",
        value: -1.75744239240497,
      },
      {
        type: "Aidan Tolkien",
        value: 1.53667150788009,
      },
      {
        type: "Aidan Tolkien",
        value: 0.615300868673721,
      },
      {
        type: "Aidan Tolkien",
        value: 2.47125825466308,
      },
      {
        type: "Aidan Tolkien",
        value: 2.85988571444325,
      },
      {
        type: "Aidan Tolkien",
        value: -1.4853248148956,
      },
      {
        type: "Aidan Tolkien",
        value: 1.19674661675338,
      },
      {
        type: "Aidan Tolkien",
        value: 0.340910688229329,
      },
      {
        type: "Aidan Tolkien",
        value: -1.16004620026345,
      },
      {
        type: "Aidan Tolkien",
        value: -0.643644201929467,
      },
      {
        type: "Aidan Tolkien",
        value: -1.2792654454047,
      },
      {
        type: "Aidan Tolkien",
        value: 0.378906748744274,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0831542434082756,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0412592987609482,
      },
      {
        type: "Aidan Tolkien",
        value: -0.472557573670961,
      },
      {
        type: "Aidan Tolkien",
        value: -0.495112648340786,
      },
      {
        type: "Aidan Tolkien",
        value: -2.88788351932443,
      },
      {
        type: "Aidan Tolkien",
        value: -0.468857292384786,
      },
      {
        type: "Aidan Tolkien",
        value: 0.380633087147368,
      },
      {
        type: "Aidan Tolkien",
        value: -1.11131853725848,
      },
      {
        type: "Aidan Tolkien",
        value: 1.46480932606847,
      },
      {
        type: "Aidan Tolkien",
        value: 0.873771613027574,
      },
      {
        type: "Aidan Tolkien",
        value: -0.951421857667963,
      },
      {
        type: "Aidan Tolkien",
        value: 0.448073368615977,
      },
      {
        type: "Aidan Tolkien",
        value: -0.0454679686054943,
      },
      {
        type: "Aidan Tolkien",
        value: -0.642674811717771,
      },
      {
        type: "Aidan Tolkien",
        value: -1.28721823786927,
      },
      {
        type: "Aidan Tolkien",
        value: 0.926392065335381,
      },
      {
        type: "Aidan Tolkien",
        value: 0.261795805515844,
      },
      {
        type: "Aidan Tolkien",
        value: -1.24168885477745,
      },
      {
        type: "Aidan Tolkien",
        value: 0.21446312666819,
      },
      {
        type: "Aidan Tolkien",
        value: 1.61653274558845,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0105465198606492,
      },
      {
        type: "Aidan Tolkien",
        value: -0.283020399521008,
      },
      {
        type: "Aidan Tolkien",
        value: -0.895316609851309,
      },
      {
        type: "Aidan Tolkien",
        value: 1.67761510926703,
      },
      {
        type: "Aidan Tolkien",
        value: -0.777270547486444,
      },
      {
        type: "Aidan Tolkien",
        value: -1.12809846823464,
      },
      {
        type: "Aidan Tolkien",
        value: 2.00245036025985,
      },
      {
        type: "Aidan Tolkien",
        value: -0.361331264603911,
      },
      {
        type: "Aidan Tolkien",
        value: -0.0950489381093848,
      },
      {
        type: "Aidan Tolkien",
        value: -0.149432673544347,
      },
      {
        type: "Aidan Tolkien",
        value: 0.183817004924402,
      },
      {
        type: "Aidan Tolkien",
        value: 0.35328238837331,
      },
      {
        type: "Aidan Tolkien",
        value: -0.747645699579441,
      },
      {
        type: "Aidan Tolkien",
        value: 1.12647074668127,
      },
      {
        type: "Aidan Tolkien",
        value: -1.14831472736523,
      },
      {
        type: "Aidan Tolkien",
        value: -1.35632307540433,
      },
      {
        type: "Aidan Tolkien",
        value: 0.845581187678951,
      },
      {
        type: "Aidan Tolkien",
        value: -0.424235251570954,
      },
      {
        type: "Aidan Tolkien",
        value: 1.38701473870691,
      },
      {
        type: "Aidan Tolkien",
        value: 0.810573052431407,
      },
      {
        type: "Aidan Tolkien",
        value: 0.759959788074483,
      },
      {
        type: "Aidan Tolkien",
        value: -0.399035632394402,
      },
      {
        type: "Aidan Tolkien",
        value: 0.679693002668364,
      },
      {
        type: "Aidan Tolkien",
        value: -1.29446281313636,
      },
      {
        type: "Aidan Tolkien",
        value: 0.982098324007749,
      },
      {
        type: "Aidan Tolkien",
        value: 0.532587244020208,
      },
      {
        type: "Aidan Tolkien",
        value: 1.07700058702766,
      },
      {
        type: "Aidan Tolkien",
        value: 1.4132554422486,
      },
      {
        type: "Aidan Tolkien",
        value: 0.811880317757234,
      },
      {
        type: "Aidan Tolkien",
        value: -0.527932508875404,
      },
      {
        type: "Aidan Tolkien",
        value: -1.14808214077555,
      },
      {
        type: "Aidan Tolkien",
        value: -0.67039696053621,
      },
      {
        type: "Aidan Tolkien",
        value: 1.07534322864821,
      },
      {
        type: "Aidan Tolkien",
        value: -0.28494457742136,
      },
      {
        type: "Aidan Tolkien",
        value: 0.632440305933603,
      },
      {
        type: "Aidan Tolkien",
        value: -1.91727675574744,
      },
      {
        type: "Aidan Tolkien",
        value: 0.564183890368849,
      },
      {
        type: "Aidan Tolkien",
        value: -0.151407118526608,
      },
      {
        type: "Aidan Tolkien",
        value: -1.484108730742,
      },
      {
        type: "Aidan Tolkien",
        value: -0.447659228581837,
      },
      {
        type: "Aidan Tolkien",
        value: -0.780923166975598,
      },
      {
        type: "Aidan Tolkien",
        value: -0.312472816348511,
      },
      {
        type: "Aidan Tolkien",
        value: -0.776090057082163,
      },
      {
        type: "Aidan Tolkien",
        value: -0.18597282869414,
      },
      {
        type: "Aidan Tolkien",
        value: 0.608726945996968,
      },
      {
        type: "Aidan Tolkien",
        value: 1.0196725829307,
      },
      {
        type: "Aidan Tolkien",
        value: 0.749180941324865,
      },
      {
        type: "Aidan Tolkien",
        value: 0.262663865487365,
      },
      {
        type: "Aidan Tolkien",
        value: 0.74598713375227,
      },
      {
        type: "Aidan Tolkien",
        value: -0.551706118843498,
      },
      {
        type: "Aidan Tolkien",
        value: -0.261392814349022,
      },
      {
        type: "Aidan Tolkien",
        value: 0.391510520629434,
      },
      {
        type: "Aidan Tolkien",
        value: -1.41746892521068,
      },
      {
        type: "Aidan Tolkien",
        value: 0.494105309056791,
      },
      {
        type: "Aidan Tolkien",
        value: 0.536431780823202,
      },
      {
        type: "Aidan Tolkien",
        value: 0.602106740681958,
      },
      {
        type: "Aidan Tolkien",
        value: -0.572206682586419,
      },
      {
        type: "Aidan Tolkien",
        value: 0.82133402831883,
      },
      {
        type: "Aidan Tolkien",
        value: -1.59228521022665,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0141782772878216,
      },
      {
        type: "Aidan Tolkien",
        value: 0.275205224963036,
      },
      {
        type: "Aidan Tolkien",
        value: -0.387743049316094,
      },
      {
        type: "Aidan Tolkien",
        value: 0.133971888298983,
      },
      {
        type: "Aidan Tolkien",
        value: 1.00878094378271,
      },
      {
        type: "Aidan Tolkien",
        value: -0.55806241164559,
      },
      {
        type: "Aidan Tolkien",
        value: -0.547623278823479,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0140375791838019,
      },
      {
        type: "Aidan Tolkien",
        value: 2.08514166700316,
      },
      {
        type: "Aidan Tolkien",
        value: 0.160326240239758,
      },
      {
        type: "Aidan Tolkien",
        value: -1.81241749919008,
      },
      {
        type: "Aidan Tolkien",
        value: -0.207021445650255,
      },
      {
        type: "Aidan Tolkien",
        value: 1.92060782910034,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0752804246881621,
      },
      {
        type: "Aidan Tolkien",
        value: -1.24890832599232,
      },
      {
        type: "Aidan Tolkien",
        value: -0.220720796570181,
      },
      {
        type: "Aidan Tolkien",
        value: -0.0586963988096726,
      },
      {
        type: "Aidan Tolkien",
        value: 0.460375199277795,
      },
      {
        type: "Aidan Tolkien",
        value: -0.656008596961268,
      },
      {
        type: "Aidan Tolkien",
        value: 0.532151536378986,
      },
      {
        type: "Aidan Tolkien",
        value: -0.908602729129699,
      },
      {
        type: "Aidan Tolkien",
        value: 0.717314345337335,
      },
      {
        type: "Aidan Tolkien",
        value: 0.121007155382388,
      },
      {
        type: "Aidan Tolkien",
        value: -0.599600153817115,
      },
      {
        type: "Aidan Tolkien",
        value: 0.451207497985254,
      },
      {
        type: "Aidan Tolkien",
        value: 0.152174806807856,
      },
      {
        type: "Aidan Tolkien",
        value: 0.209477124455222,
      },
      {
        type: "Aidan Tolkien",
        value: 0.433992298889997,
      },
      {
        type: "Aidan Tolkien",
        value: -1.29089825799811,
      },
      {
        type: "Aidan Tolkien",
        value: -1.61163354085241,
      },
      {
        type: "Aidan Tolkien",
        value: 2.08165272658594,
      },
      {
        type: "Aidan Tolkien",
        value: 0.4935829415854,
      },
      {
        type: "Aidan Tolkien",
        value: 2.15458344191751,
      },
      {
        type: "Aidan Tolkien",
        value: -1.25936024020768,
      },
      {
        type: "Aidan Tolkien",
        value: -0.874885908813823,
      },
      {
        type: "Aidan Tolkien",
        value: -1.38024174499362,
      },
      {
        type: "Aidan Tolkien",
        value: -0.405261328006398,
      },
      {
        type: "Aidan Tolkien",
        value: -0.509524596850097,
      },
      {
        type: "Aidan Tolkien",
        value: 0.200324931607767,
      },
      {
        type: "Aidan Tolkien",
        value: 1.62460098386898,
      },
      {
        type: "Aidan Tolkien",
        value: -0.503163284522945,
      },
      {
        type: "Aidan Tolkien",
        value: 1.64687056476687,
      },
      {
        type: "Aidan Tolkien",
        value: -0.203664326940486,
      },
      {
        type: "Aidan Tolkien",
        value: 1.16978556881425,
      },
      {
        type: "Aidan Tolkien",
        value: 0.766104389661304,
      },
      {
        type: "Aidan Tolkien",
        value: -0.61405372366008,
      },
      {
        type: "Aidan Tolkien",
        value: 0.521655228249976,
      },
      {
        type: "Aidan Tolkien",
        value: 0.163530849820609,
      },
      {
        type: "Aidan Tolkien",
        value: -0.570806046478196,
      },
      {
        type: "Aidan Tolkien",
        value: 0.497586868863842,
      },
      {
        type: "Aidan Tolkien",
        value: -1.18605315375422,
      },
      {
        type: "Aidan Tolkien",
        value: -1.20470400038851,
      },
      {
        type: "Aidan Tolkien",
        value: 0.471154740579346,
      },
      {
        type: "Aidan Tolkien",
        value: -0.687473102364755,
      },
      {
        type: "Aidan Tolkien",
        value: -0.340944155257588,
      },
      {
        type: "Aidan Tolkien",
        value: -0.98009351021655,
      },
      {
        type: "Aidan Tolkien",
        value: -0.14274727304765,
      },
      {
        type: "Aidan Tolkien",
        value: -0.780563371064499,
      },
      {
        type: "Aidan Tolkien",
        value: 0.590776402230727,
      },
      {
        type: "Aidan Tolkien",
        value: 1.40775365437373,
      },
      {
        type: "Aidan Tolkien",
        value: -1.01823561912732,
      },
      {
        type: "Aidan Tolkien",
        value: 1.8327390408009,
      },
      {
        type: "Aidan Tolkien",
        value: -0.857368193176295,
      },
      {
        type: "Aidan Tolkien",
        value: -0.438374179570676,
      },
      {
        type: "Aidan Tolkien",
        value: -0.57770687043757,
      },
      {
        type: "Aidan Tolkien",
        value: 0.53823824340867,
      },
      {
        type: "Aidan Tolkien",
        value: -0.032656742322889,
      },
      {
        type: "Aidan Tolkien",
        value: -0.874452528948422,
      },
      {
        type: "Aidan Tolkien",
        value: -1.04599109604584,
      },
      {
        type: "Aidan Tolkien",
        value: 0.420121618471219,
      },
      {
        type: "Aidan Tolkien",
        value: 1.42648262064021,
      },
      {
        type: "Aidan Tolkien",
        value: -0.223177397316805,
      },
      {
        type: "Aidan Tolkien",
        value: -0.824705632573846,
      },
      {
        type: "Aidan Tolkien",
        value: 0.30858774332699,
      },
      {
        type: "Aidan Tolkien",
        value: 0.632073728586436,
      },
      {
        type: "Aidan Tolkien",
        value: 0.913149902773845,
      },
      {
        type: "Aidan Tolkien",
        value: -0.615007524393076,
      },
      {
        type: "Aidan Tolkien",
        value: 0.877215363427896,
      },
      {
        type: "Aidan Tolkien",
        value: 0.516916838469275,
      },
      {
        type: "Aidan Tolkien",
        value: 1.01725928405555,
      },
      {
        type: "Aidan Tolkien",
        value: -0.592963645134916,
      },
      {
        type: "Aidan Tolkien",
        value: -0.22965495457479,
      },
      {
        type: "Aidan Tolkien",
        value: 1.67864125428678,
      },
      {
        type: "Aidan Tolkien",
        value: -0.129492938122675,
      },
      {
        type: "Aidan Tolkien",
        value: 0.262188493064098,
      },
      {
        type: "Aidan Tolkien",
        value: -1.33080420694815,
      },
      {
        type: "Aidan Tolkien",
        value: -0.0219829524008097,
      },
      {
        type: "Aidan Tolkien",
        value: 0.912671934572519,
      },
      {
        type: "Aidan Tolkien",
        value: 0.50141783677902,
      },
      {
        type: "Aidan Tolkien",
        value: 0.326457529101651,
      },
      {
        type: "Aidan Tolkien",
        value: 0.347999952656108,
      },
      {
        type: "Aidan Tolkien",
        value: -0.285975684354228,
      },
      {
        type: "Aidan Tolkien",
        value: -0.529904461495489,
      },
      {
        type: "Aidan Tolkien",
        value: 0.323035439718,
      },
      {
        type: "Aidan Tolkien",
        value: -0.832443603629278,
      },
      {
        type: "Aidan Tolkien",
        value: 0.431754199751727,
      },
      {
        type: "Aidan Tolkien",
        value: 0.905228758240486,
      },
      {
        type: "Aidan Tolkien",
        value: -1.02822021066921,
      },
      {
        type: "Aidan Tolkien",
        value: -1.86431415852055,
      },
      {
        type: "Aidan Tolkien",
        value: 0.495288341561458,
      },
      {
        type: "Aidan Tolkien",
        value: -0.0801250897344454,
      },
      {
        type: "Aidan Tolkien",
        value: 0.133082658406885,
      },
      {
        type: "Aidan Tolkien",
        value: -0.453803617207271,
      },
      {
        type: "Aidan Tolkien",
        value: -1.03876183554865,
      },
      {
        type: "Aidan Tolkien",
        value: -0.318517743918652,
      },
      {
        type: "Aidan Tolkien",
        value: 0.138228825192388,
      },
      {
        type: "Aidan Tolkien",
        value: -1.24246264214053,
      },
      {
        type: "Aidan Tolkien",
        value: -1.70506782857474,
      },
      {
        type: "Aidan Tolkien",
        value: 0.141844370509377,
      },
      {
        type: "Aidan Tolkien",
        value: -1.27275008942505,
      },
      {
        type: "Aidan Tolkien",
        value: -0.0434924843026766,
      },
      {
        type: "Aidan Tolkien",
        value: -0.91906068691175,
      },
      {
        type: "Aidan Tolkien",
        value: -0.886769575532302,
      },
      {
        type: "Aidan Tolkien",
        value: 0.782037234707943,
      },
      {
        type: "Aidan Tolkien",
        value: 1.8598697914717,
      },
      {
        type: "Aidan Tolkien",
        value: -0.216010798086449,
      },
      {
        type: "Aidan Tolkien",
        value: 1.10322668112569,
      },
      {
        type: "Aidan Tolkien",
        value: 0.341739822127313,
      },
      {
        type: "Aidan Tolkien",
        value: -1.17783802369831,
      },
      {
        type: "Aidan Tolkien",
        value: 0.408162357825023,
      },
      {
        type: "Aidan Tolkien",
        value: 0.63251581343465,
      },
      {
        type: "Aidan Tolkien",
        value: 1.24235231214653,
      },
      {
        type: "Aidan Tolkien",
        value: -0.571712429658314,
      },
      {
        type: "Aidan Tolkien",
        value: -1.86990003425807,
      },
      {
        type: "Aidan Tolkien",
        value: -0.164041800434492,
      },
      {
        type: "Aidan Tolkien",
        value: -2.17624169623109,
      },
      {
        type: "Aidan Tolkien",
        value: 1.82493086303235,
      },
      {
        type: "Aidan Tolkien",
        value: 1.22478770629731,
      },
      {
        type: "Aidan Tolkien",
        value: 1.81092080526663,
      },
      {
        type: "Aidan Tolkien",
        value: 0.685270504768254,
      },
      {
        type: "Aidan Tolkien",
        value: -0.547620279231571,
      },
      {
        type: "Aidan Tolkien",
        value: 0.142845528110485,
      },
      {
        type: "Aidan Tolkien",
        value: 1.6087439934666,
      },
      {
        type: "Aidan Tolkien",
        value: -0.410793412530354,
      },
      {
        type: "Aidan Tolkien",
        value: 0.961333960175801,
      },
      {
        type: "Aidan Tolkien",
        value: -1.05036510186733,
      },
      {
        type: "Aidan Tolkien",
        value: -0.808299080460989,
      },
      {
        type: "Aidan Tolkien",
        value: 0.653763552651453,
      },
      {
        type: "Aidan Tolkien",
        value: 0.353629614875469,
      },
      {
        type: "Aidan Tolkien",
        value: 2.4781302607924,
      },
      {
        type: "Aidan Tolkien",
        value: -0.164991845052828,
      },
      {
        type: "Aidan Tolkien",
        value: 0.382542070822413,
      },
      {
        type: "Aidan Tolkien",
        value: -1.09023566558401,
      },
      {
        type: "Aidan Tolkien",
        value: 1.23532342894693,
      },
      {
        type: "Aidan Tolkien",
        value: 1.55542359199315,
      },
      {
        type: "Aidan Tolkien",
        value: 0.24759410248237,
      },
      {
        type: "Aidan Tolkien",
        value: 1.39757641355161,
      },
      {
        type: "Aidan Tolkien",
        value: -0.724537548865583,
      },
      {
        type: "Aidan Tolkien",
        value: -0.87375117672738,
      },
      {
        type: "Aidan Tolkien",
        value: 0.227340031753763,
      },
      {
        type: "Aidan Tolkien",
        value: 1.81781928723273,
      },
      {
        type: "Aidan Tolkien",
        value: -0.240400424992919,
      },
      {
        type: "Aidan Tolkien",
        value: -0.660260746017571,
      },
      {
        type: "Aidan Tolkien",
        value: 1.07873366713949,
      },
      {
        type: "Aidan Tolkien",
        value: -1.45929980170279,
      },
      {
        type: "Aidan Tolkien",
        value: 0.842837768030142,
      },
      {
        type: "Aidan Tolkien",
        value: -1.0843440245915,
      },
      {
        type: "Aidan Tolkien",
        value: -0.148834433609813,
      },
      {
        type: "Aidan Tolkien",
        value: -1.46844259986115,
      },
      {
        type: "Aidan Tolkien",
        value: 1.33260587436836,
      },
      {
        type: "Aidan Tolkien",
        value: 0.51484887569917,
      },
      {
        type: "Aidan Tolkien",
        value: 1.24231879601992,
      },
      {
        type: "Aidan Tolkien",
        value: 0.225283424471205,
      },
      {
        type: "Aidan Tolkien",
        value: 1.91877581151417,
      },
      {
        type: "Aidan Tolkien",
        value: 1.76309688897762,
      },
      {
        type: "Aidan Tolkien",
        value: -2.32918670890843,
      },
      {
        type: "Aidan Tolkien",
        value: 0.221417716169295,
      },
      {
        type: "Aidan Tolkien",
        value: -0.412521716374191,
      },
      {
        type: "Aidan Tolkien",
        value: -0.482495551775325,
      },
      {
        type: "Aidan Tolkien",
        value: -1.49940547501053,
      },
      {
        type: "Aidan Tolkien",
        value: -0.046260592822585,
      },
      {
        type: "Aidan Tolkien",
        value: 1.72812501185015,
      },
      {
        type: "Aidan Tolkien",
        value: 0.649691569628414,
      },
      {
        type: "Aidan Tolkien",
        value: 0.369680074933985,
      },
      {
        type: "Aidan Tolkien",
        value: -1.87196622888645,
      },
      {
        type: "Aidan Tolkien",
        value: -0.260933043881513,
      },
      {
        type: "Aidan Tolkien",
        value: -0.615227665157141,
      },
      {
        type: "Aidan Tolkien",
        value: -0.331154076232479,
      },
      {
        type: "Aidan Tolkien",
        value: 1.21057189019311,
      },
      {
        type: "Aidan Tolkien",
        value: -0.576355799624985,
      },
      {
        type: "Aidan Tolkien",
        value: -0.98375374366599,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0569107971511641,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0683031784636413,
      },
      {
        type: "Aidan Tolkien",
        value: -0.0797434408958469,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0974688288292297,
      },
      {
        type: "Aidan Tolkien",
        value: -1.05549186426937,
      },
      {
        type: "Aidan Tolkien",
        value: -2.1251322044854,
      },
      {
        type: "Aidan Tolkien",
        value: 1.31893092063992,
      },
      {
        type: "Aidan Tolkien",
        value: 0.593337633390877,
      },
      {
        type: "Aidan Tolkien",
        value: 1.16232701720332,
      },
      {
        type: "Aidan Tolkien",
        value: 1.18194029077801,
      },
      {
        type: "Aidan Tolkien",
        value: 1.11755593481262,
      },
      {
        type: "Aidan Tolkien",
        value: 0.867270654334035,
      },
      {
        type: "Aidan Tolkien",
        value: -0.412088909216928,
      },
      {
        type: "Aidan Tolkien",
        value: -0.877085117231653,
      },
      {
        type: "Aidan Tolkien",
        value: 0.352550856342501,
      },
      {
        type: "Aidan Tolkien",
        value: 1.0461877168671,
      },
      {
        type: "Aidan Tolkien",
        value: -0.184984158842206,
      },
      {
        type: "Aidan Tolkien",
        value: 0.850192735236842,
      },
      {
        type: "Aidan Tolkien",
        value: -0.165300513829091,
      },
      {
        type: "Aidan Tolkien",
        value: 0.971286820358688,
      },
      {
        type: "Aidan Tolkien",
        value: 0.085894266391598,
      },
      {
        type: "Aidan Tolkien",
        value: -1.74454895398468,
      },
      {
        type: "Aidan Tolkien",
        value: 2.39945642594414,
      },
      {
        type: "Aidan Tolkien",
        value: -0.0000611747406349804,
      },
      {
        type: "Aidan Tolkien",
        value: -0.0816608750454089,
      },
      {
        type: "Aidan Tolkien",
        value: -1.66227487093112,
      },
      {
        type: "Aidan Tolkien",
        value: -1.57216998319334,
      },
      {
        type: "Aidan Tolkien",
        value: -0.410901470624614,
      },
      {
        type: "Aidan Tolkien",
        value: -1.07355170717043,
      },
      {
        type: "Aidan Tolkien",
        value: 0.470081101287491,
      },
      {
        type: "Aidan Tolkien",
        value: -1.25894797990535,
      },
      {
        type: "Aidan Tolkien",
        value: -0.303300735224903,
      },
      {
        type: "Aidan Tolkien",
        value: -3.26402378242533,
      },
      {
        type: "Aidan Tolkien",
        value: 1.20767932026504,
      },
      {
        type: "Aidan Tolkien",
        value: 1.20954005262099,
      },
      {
        type: "Aidan Tolkien",
        value: -1.66679640838004,
      },
      {
        type: "Aidan Tolkien",
        value: 0.638225235620041,
      },
      {
        type: "Aidan Tolkien",
        value: 0.796098327177592,
      },
      {
        type: "Aidan Tolkien",
        value: -0.268470584446244,
      },
      {
        type: "Aidan Tolkien",
        value: -0.594943615070936,
      },
      {
        type: "Aidan Tolkien",
        value: -0.918766799234585,
      },
      {
        type: "Aidan Tolkien",
        value: -1.08782028845848,
      },
      {
        type: "Aidan Tolkien",
        value: 0.129658122519403,
      },
      {
        type: "Aidan Tolkien",
        value: 0.486383501607885,
      },
      {
        type: "Aidan Tolkien",
        value: -0.213078610803258,
      },
      {
        type: "Aidan Tolkien",
        value: 0.362871929076757,
      },
      {
        type: "Aidan Tolkien",
        value: -1.25066423826388,
      },
      {
        type: "Aidan Tolkien",
        value: 0.251364121086521,
      },
      {
        type: "Aidan Tolkien",
        value: 0.220617231779298,
      },
      {
        type: "Aidan Tolkien",
        value: -2.11066592166223,
      },
      {
        type: "Aidan Tolkien",
        value: 0.421331802325743,
      },
      {
        type: "Aidan Tolkien",
        value: -0.484780208073652,
      },
      {
        type: "Aidan Tolkien",
        value: 1.70044400704093,
      },
      {
        type: "Aidan Tolkien",
        value: 2.35512807436571,
      },
      {
        type: "Aidan Tolkien",
        value: -1.25397625868407,
      },
      {
        type: "Aidan Tolkien",
        value: -0.503285062829127,
      },
      {
        type: "Aidan Tolkien",
        value: 0.436976296248792,
      },
      {
        type: "Aidan Tolkien",
        value: 0.615523526744162,
      },
      {
        type: "Aidan Tolkien",
        value: 0.138728714406229,
      },
      {
        type: "Aidan Tolkien",
        value: 1.14475993711051,
      },
      {
        type: "Aidan Tolkien",
        value: -0.950579961225688,
      },
      {
        type: "Aidan Tolkien",
        value: 0.473700263937331,
      },
      {
        type: "Aidan Tolkien",
        value: 2.28546032597365,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0503286910416296,
      },
      {
        type: "Aidan Tolkien",
        value: 1.51349622017072,
      },
      {
        type: "Aidan Tolkien",
        value: -0.0141290927753844,
      },
      {
        type: "Aidan Tolkien",
        value: -0.546444985722314,
      },
      {
        type: "Aidan Tolkien",
        value: -0.00845901408276695,
      },
      {
        type: "Aidan Tolkien",
        value: -1.45594264191826,
      },
      {
        type: "Aidan Tolkien",
        value: -0.424389887041976,
      },
      {
        type: "Aidan Tolkien",
        value: -0.357267062061069,
      },
      {
        type: "Aidan Tolkien",
        value: 0.0979987960465006,
      },
      {
        type: "Aidan Tolkien",
        value: -0.383695677476418,
      },
      {
        type: "Aidan Tolkien",
        value: 0.81112004184662,
      },
      {
        type: "Aidan Tolkien",
        value: -1.23221509344734,
      },
      {
        type: "Aidan Tolkien",
        value: 1.01753093793033,
      },
      {
        type: "Aidan Tolkien",
        value: -0.499592088573252,
      },
      {
        type: "Aidan Tolkien",
        value: 1.22352371088843,
      },
      {
        type: "Aidan Tolkien",
        value: -0.129659566392772,
      },
      {
        type: "Aidan Tolkien",
        value: -0.279517027704935,
      },
      {
        type: "Aidan Tolkien",
        value: -0.577580236771149,
      },
      {
        type: "Aidan Tolkien",
        value: 0.832641295963345,
      },
      {
        type: "Aidan Tolkien",
        value: -0.664285541727547,
      },
      {
        type: "Aidan Tolkien",
        value: 1.22392595347933,
      },
      {
        type: "Aidan Tolkien",
        value: 1.2944878237605,
      },
      {
        type: "Aidan Tolkien",
        value: -0.269668690297391,
      },
      {
        type: "Aidan Tolkien",
        value: 1.49823284538012,
      },
      {
        type: "Aidan Tolkien",
        value: -1.0932957727146,
      },
      {
        type: "Aidan Tolkien",
        value: -0.837536360650845,
      },
      {
        type: "Aidan Tolkien",
        value: -0.850635128077276,
      },
      {
        type: "Aidan Tolkien",
        value: -1.24808813926818,
      },
      {
        type: "Aidan Tolkien",
        value: -0.778730461920734,
      },
      {
        type: "Aidan Tolkien",
        value: -0.666522484845759,
      },
      {
        type: "Aidan Tolkien",
        value: 0.635452586113947,
      },
      {
        type: "Aidan Tolkien",
        value: -0.479578977429342,
      },
      {
        type: "Aidan Tolkien",
        value: -1.06251645715651,
      },
      {
        type: "Aidan Tolkien",
        value: -1.86311900688074,
      },
      {
        type: "Aidan Tolkien",
        value: 0.395935082114742,
      },
      {
        type: "Daniel Green",
        value: 1.92715703780071,
      },
      {
        type: "Daniel Green",
        value: 3.01175005106708,
      },
      {
        type: "Daniel Green",
        value: 2.29286470737091,
      },
      {
        type: "Daniel Green",
        value: 4.16520266886014,
      },
      {
        type: "Daniel Green",
        value: 3.77175941579828,
      },
      {
        type: "Daniel Green",
        value: 4.56319387998927,
      },
      {
        type: "Daniel Green",
        value: 4.44265981147223,
      },
      {
        type: "Daniel Green",
        value: 3.85872271791127,
      },
      {
        type: "Daniel Green",
        value: 2.92021671051106,
      },
      {
        type: "Daniel Green",
        value: 3.66899028801479,
      },
      {
        type: "Daniel Green",
        value: 4.05029835156948,
      },
      {
        type: "Daniel Green",
        value: 2.77504697141501,
      },
      {
        type: "Daniel Green",
        value: 2.91900477750825,
      },
      {
        type: "Daniel Green",
        value: 5.41824782623836,
      },
      {
        type: "Daniel Green",
        value: 2.96720990465816,
      },
      {
        type: "Daniel Green",
        value: 5.52539120872203,
      },
      {
        type: "Daniel Green",
        value: 2.82879641058106,
      },
      {
        type: "Daniel Green",
        value: 3.94364775876168,
      },
      {
        type: "Daniel Green",
        value: 3.30672778292722,
      },
      {
        type: "Daniel Green",
        value: 6.19769792272544,
      },
      {
        type: "Daniel Green",
        value: 5.11232219557474,
      },
      {
        type: "Daniel Green",
        value: 2.19884961773764,
      },
      {
        type: "Daniel Green",
        value: 4.63162616941453,
      },
      {
        type: "Daniel Green",
        value: 5.0611413779667,
      },
      {
        type: "Daniel Green",
        value: 4.98652198716552,
      },
      {
        type: "Daniel Green",
        value: 5.00122090079423,
      },
      {
        type: "Daniel Green",
        value: 3.36454880002254,
      },
      {
        type: "Daniel Green",
        value: 4.53607212488818,
      },
      {
        type: "Daniel Green",
        value: 4.58655741660547,
      },
      {
        type: "Daniel Green",
        value: 5.12514456799041,
      },
      {
        type: "Daniel Green",
        value: 4.52282041586771,
      },
      {
        type: "Daniel Green",
        value: 3.95900361866147,
      },
      {
        type: "Daniel Green",
        value: 5.29854589869785,
      },
      {
        type: "Daniel Green",
        value: 3.18425198999098,
      },
      {
        type: "Daniel Green",
        value: 6.11050670087703,
      },
      {
        type: "Daniel Green",
        value: 4.43350484691411,
      },
      {
        type: "Daniel Green",
        value: 4.68849900822886,
      },
      {
        type: "Daniel Green",
        value: 2.06661446503321,
      },
      {
        type: "Daniel Green",
        value: 3.0915663392481,
      },
      {
        type: "Daniel Green",
        value: 4.52206802579118,
      },
      {
        type: "Daniel Green",
        value: 4.28195580825486,
      },
      {
        type: "Daniel Green",
        value: 2.54146215741104,
      },
      {
        type: "Daniel Green",
        value: 5.61912663725297,
      },
      {
        type: "Daniel Green",
        value: 4.40661085588452,
      },
      {
        type: "Daniel Green",
        value: 2.86889229921107,
      },
      {
        type: "Daniel Green",
        value: 3.61231474078335,
      },
      {
        type: "Daniel Green",
        value: 4.03496681416056,
      },
      {
        type: "Daniel Green",
        value: 3.81443447869046,
      },
      {
        type: "Daniel Green",
        value: 2.80633261679899,
      },
      {
        type: "Daniel Green",
        value: 5.03488220803178,
      },
      {
        type: "Daniel Green",
        value: 4.37795731619215,
      },
      {
        type: "Daniel Green",
        value: 2.5129424096776,
      },
      {
        type: "Daniel Green",
        value: 4.77206153452628,
      },
      {
        type: "Daniel Green",
        value: 2.7981210507338,
      },
      {
        type: "Daniel Green",
        value: 4.25154026220093,
      },
      {
        type: "Daniel Green",
        value: 5.28822247037937,
      },
      {
        type: "Daniel Green",
        value: 2.99802733632814,
      },
      {
        type: "Daniel Green",
        value: 4.45724794438583,
      },
      {
        type: "Daniel Green",
        value: 3.71838173610415,
      },
      {
        type: "Daniel Green",
        value: 4.75830165539873,
      },
      {
        type: "Daniel Green",
        value: 2.83048342678804,
      },
      {
        type: "Daniel Green",
        value: 3.42975112275818,
      },
      {
        type: "Daniel Green",
        value: 2.62951409242299,
      },
      {
        type: "Daniel Green",
        value: 6.5817699293072,
      },
      {
        type: "Daniel Green",
        value: 4.65585012623052,
      },
      {
        type: "Daniel Green",
        value: 4.44784932761291,
      },
      {
        type: "Daniel Green",
        value: 3.09745874347423,
      },
      {
        type: "Daniel Green",
        value: 3.55615118380916,
      },
      {
        type: "Daniel Green",
        value: 4.31987334140467,
      },
      {
        type: "Daniel Green",
        value: 3.22173288354147,
      },
      {
        type: "Daniel Green",
        value: 3.39628626890808,
      },
      {
        type: "Daniel Green",
        value: 2.6690055403316,
      },
      {
        type: "Daniel Green",
        value: 4.93217989135242,
      },
      {
        type: "Daniel Green",
        value: 3.11387414461427,
      },
      {
        type: "Daniel Green",
        value: 3.66580717783073,
      },
      {
        type: "Daniel Green",
        value: 5.05352622130446,
      },
      {
        type: "Daniel Green",
        value: 4.9566697052665,
      },
      {
        type: "Daniel Green",
        value: 3.17694932876715,
      },
      {
        type: "Daniel Green",
        value: 3.77897407341246,
      },
      {
        type: "Daniel Green",
        value: 2.51247275670549,
      },
      {
        type: "Daniel Green",
        value: 4.43142151984478,
      },
      {
        type: "Daniel Green",
        value: 2.66707677744665,
      },
      {
        type: "Daniel Green",
        value: 3.18870034001533,
      },
      {
        type: "Daniel Green",
        value: 5.17156219582984,
      },
      {
        type: "Daniel Green",
        value: 2.99585677434194,
      },
      {
        type: "Daniel Green",
        value: 3.55401495014793,
      },
      {
        type: "Daniel Green",
        value: 4.53041996703601,
      },
      {
        type: "Daniel Green",
        value: 3.61661436501126,
      },
      {
        type: "Daniel Green",
        value: 5.3319935002367,
      },
      {
        type: "Daniel Green",
        value: 4.6249855024301,
      },
      {
        type: "Daniel Green",
        value: 3.80026878384996,
      },
      {
        type: "Daniel Green",
        value: 1.87972109856866,
      },
      {
        type: "Daniel Green",
        value: 3.06908723750622,
      },
      {
        type: "Daniel Green",
        value: 2.51973309294538,
      },
      {
        type: "Daniel Green",
        value: 3.71652832497142,
      },
      {
        type: "Daniel Green",
        value: 4.0234359540261,
      },
      {
        type: "Daniel Green",
        value: 2.75307871973158,
      },
      {
        type: "Daniel Green",
        value: 4.03188368518866,
      },
      {
        type: "Daniel Green",
        value: 5.61280427655634,
      },
      {
        type: "Daniel Green",
        value: 5.73728195003297,
      },
      {
        type: "Daniel Green",
        value: 4.63310278291583,
      },
      {
        type: "Daniel Green",
        value: 3.27126947697808,
      },
      {
        type: "Daniel Green",
        value: 3.08981798548539,
      },
      {
        type: "Daniel Green",
        value: 4.82078572762278,
      },
      {
        type: "Daniel Green",
        value: 3.55893819208197,
      },
      {
        type: "Daniel Green",
        value: 5.13606413462996,
      },
      {
        type: "Daniel Green",
        value: 2.85128022090342,
      },
      {
        type: "Daniel Green",
        value: 2.41511003227178,
      },
      {
        type: "Daniel Green",
        value: 4.83895265573949,
      },
      {
        type: "Daniel Green",
        value: 5.40956668071133,
      },
      {
        type: "Daniel Green",
        value: 4.4734686136171,
      },
      {
        type: "Daniel Green",
        value: 4.51949664334318,
      },
      {
        type: "Daniel Green",
        value: 4.72739225916055,
      },
      {
        type: "Daniel Green",
        value: 3.31046955195161,
      },
      {
        type: "Daniel Green",
        value: 3.68876540669797,
      },
      {
        type: "Daniel Green",
        value: 4.23978630656545,
      },
      {
        type: "Daniel Green",
        value: 3.43414020832626,
      },
      {
        type: "Daniel Green",
        value: 4.16008657657895,
      },
      {
        type: "Daniel Green",
        value: 2.68837859007252,
      },
      {
        type: "Daniel Green",
        value: 3.96825859423304,
      },
      {
        type: "Daniel Green",
        value: 5.97015900449687,
      },
      {
        type: "Daniel Green",
        value: 4.58438041043834,
      },
      {
        type: "Daniel Green",
        value: 4.29146306562372,
      },
      {
        type: "Daniel Green",
        value: 2.68199441689061,
      },
      {
        type: "Daniel Green",
        value: 3.39829946100657,
      },
      {
        type: "Daniel Green",
        value: 6.18562121555244,
      },
      {
        type: "Daniel Green",
        value: 4.14251446206136,
      },
      {
        type: "Daniel Green",
        value: 3.09708446679203,
      },
      {
        type: "Daniel Green",
        value: 6.16872334246871,
      },
      {
        type: "Daniel Green",
        value: 4.20689657782731,
      },
      {
        type: "Daniel Green",
        value: 5.12232373603286,
      },
      {
        type: "Daniel Green",
        value: 4.80367249913822,
      },
      {
        type: "Daniel Green",
        value: 6.07121644300021,
      },
      {
        type: "Daniel Green",
        value: 5.21172812807103,
      },
      {
        type: "Daniel Green",
        value: 3.34821417514141,
      },
      {
        type: "Daniel Green",
        value: 5.4764008478353,
      },
      {
        type: "Daniel Green",
        value: 4.15061580830985,
      },
      {
        type: "Daniel Green",
        value: 2.23010849662051,
      },
      {
        type: "Daniel Green",
        value: 4.9602466052069,
      },
      {
        type: "Daniel Green",
        value: 3.35807631018362,
      },
      {
        type: "Daniel Green",
        value: 4.57404254548779,
      },
      {
        type: "Daniel Green",
        value: 4.21816668423118,
      },
      {
        type: "Daniel Green",
        value: 4.31115387997542,
      },
      {
        type: "Daniel Green",
        value: 3.14471211694101,
      },
      {
        type: "Daniel Green",
        value: 4.23777639764956,
      },
      {
        type: "Daniel Green",
        value: 3.69114359707396,
      },
      {
        type: "Daniel Green",
        value: 3.38126800986096,
      },
      {
        type: "Daniel Green",
        value: 5.27594801810313,
      },
      {
        type: "Daniel Green",
        value: 3.37809450622227,
      },
      {
        type: "Daniel Green",
        value: 4.26655909160311,
      },
      {
        type: "Daniel Green",
        value: 4.09610021079029,
      },
      {
        type: "Daniel Green",
        value: 1.3112109424973,
      },
      {
        type: "Daniel Green",
        value: 4.7437370338061,
      },
      {
        type: "Daniel Green",
        value: 5.42719271369582,
      },
      {
        type: "Daniel Green",
        value: 4.03236222641869,
      },
      {
        type: "Daniel Green",
        value: 5.30405492758638,
      },
      {
        type: "Daniel Green",
        value: 2.90613372604675,
      },
      {
        type: "Daniel Green",
        value: 3.12317666875359,
      },
      {
        type: "Daniel Green",
        value: 3.04047991991044,
      },
      {
        type: "Daniel Green",
        value: 4.81329189977148,
      },
      {
        type: "Daniel Green",
        value: 4.1828794789652,
      },
      {
        type: "Daniel Green",
        value: 5.32036891075834,
      },
      {
        type: "Daniel Green",
        value: 6.12566946361527,
      },
      {
        type: "Daniel Green",
        value: 4.22901062881276,
      },
      {
        type: "Daniel Green",
        value: 5.89802310828919,
      },
      {
        type: "Daniel Green",
        value: 3.20846842172331,
      },
      {
        type: "Daniel Green",
        value: 4.49076676222116,
      },
      {
        type: "Daniel Green",
        value: 4.75455976104005,
      },
      {
        type: "Daniel Green",
        value: 4.27211343089341,
      },
      {
        type: "Daniel Green",
        value: 3.9217360348271,
      },
      {
        type: "Daniel Green",
        value: 3.7809936011136,
      },
      {
        type: "Daniel Green",
        value: 4.14658838172615,
      },
      {
        type: "Daniel Green",
        value: 3.962649953656,
      },
      {
        type: "Daniel Green",
        value: 3.72626077491568,
      },
      {
        type: "Daniel Green",
        value: 2.80484050884585,
      },
      {
        type: "Daniel Green",
        value: 5.05924005643902,
      },
      {
        type: "Daniel Green",
        value: 4.9625478459314,
      },
      {
        type: "Daniel Green",
        value: 3.14521262570732,
      },
      {
        type: "Daniel Green",
        value: 4.41417705623449,
      },
      {
        type: "Daniel Green",
        value: 3.9048114136324,
      },
      {
        type: "Daniel Green",
        value: 3.51842200430475,
      },
      {
        type: "Daniel Green",
        value: 4.52398413240507,
      },
      {
        type: "Daniel Green",
        value: 4.00854356227864,
      },
      {
        type: "Daniel Green",
        value: 4.84945124913855,
      },
      {
        type: "Daniel Green",
        value: 5.01018780826482,
      },
      {
        type: "Daniel Green",
        value: 4.33794718936546,
      },
      {
        type: "Daniel Green",
        value: 5.10620179530999,
      },
      {
        type: "Daniel Green",
        value: 4.1376913505229,
      },
      {
        type: "Daniel Green",
        value: 1.70064283612053,
      },
      {
        type: "Daniel Green",
        value: 4.71456332914854,
      },
      {
        type: "Daniel Green",
        value: 4.94060606718717,
      },
      {
        type: "Daniel Green",
        value: 5.25686538016987,
      },
      {
        type: "Daniel Green",
        value: 4.12843526660127,
      },
      {
        type: "Daniel Green",
        value: 3.49772457882282,
      },
      {
        type: "Daniel Green",
        value: 3.88463714489871,
      },
      {
        type: "Daniel Green",
        value: 3.24782873116194,
      },
      {
        type: "Daniel Green",
        value: 3.92998203741783,
      },
      {
        type: "Daniel Green",
        value: 2.22540997708289,
      },
      {
        type: "Daniel Green",
        value: 3.39719975928829,
      },
      {
        type: "Daniel Green",
        value: 4.64579172255258,
      },
      {
        type: "Daniel Green",
        value: 3.42760766756894,
      },
      {
        type: "Daniel Green",
        value: 3.30298340270161,
      },
      {
        type: "Daniel Green",
        value: 3.70714046232464,
      },
      {
        type: "Daniel Green",
        value: 3.46064779290549,
      },
      {
        type: "Daniel Green",
        value: 5.11814923075914,
      },
      {
        type: "Daniel Green",
        value: 4.27840373085733,
      },
      {
        type: "Daniel Green",
        value: 6.07335780338459,
      },
      {
        type: "Daniel Green",
        value: 2.79915574974699,
      },
      {
        type: "Daniel Green",
        value: 4.11263051985816,
      },
      {
        type: "Daniel Green",
        value: 5.46767295388467,
      },
      {
        type: "Daniel Green",
        value: 3.37380640495842,
      },
      {
        type: "Daniel Green",
        value: 4.20838460971392,
      },
      {
        type: "Daniel Green",
        value: 4.80971956019262,
      },
      {
        type: "Daniel Green",
        value: 2.72485989625263,
      },
      {
        type: "Daniel Green",
        value: 3.58000558682711,
      },
      {
        type: "Daniel Green",
        value: 4.30271257981931,
      },
      {
        type: "Daniel Green",
        value: 4.11838704387818,
      },
      {
        type: "Daniel Green",
        value: 2.95821464346227,
      },
      {
        type: "Daniel Green",
        value: 4.01225659207715,
      },
      {
        type: "Daniel Green",
        value: 4.60625715339232,
      },
      {
        type: "Daniel Green",
        value: 4.14374100782446,
      },
      {
        type: "Daniel Green",
        value: 3.1801695259638,
      },
      {
        type: "Daniel Green",
        value: 4.2142833618192,
      },
      {
        type: "Daniel Green",
        value: 3.72083732873316,
      },
      {
        type: "Daniel Green",
        value: 4.31579244515041,
      },
      {
        type: "Daniel Green",
        value: 4.08534688008329,
      },
      {
        type: "Daniel Green",
        value: 4.68492112527021,
      },
      {
        type: "Daniel Green",
        value: 3.39879038526059,
      },
      {
        type: "Daniel Green",
        value: 4.12671539330013,
      },
      {
        type: "Daniel Green",
        value: 2.64327765750327,
      },
      {
        type: "Daniel Green",
        value: 3.98380005012128,
      },
      {
        type: "Daniel Green",
        value: 6.6690173880946,
      },
      {
        type: "Daniel Green",
        value: 4.39095808345006,
      },
      {
        type: "Daniel Green",
        value: 4.44255771099604,
      },
      {
        type: "Daniel Green",
        value: 4.85619782010237,
      },
      {
        type: "Daniel Green",
        value: 4.57345882327135,
      },
      {
        type: "Daniel Green",
        value: 3.95200497246039,
      },
      {
        type: "Daniel Green",
        value: 4.37202765663846,
      },
      {
        type: "Daniel Green",
        value: 3.27076387070465,
      },
      {
        type: "Daniel Green",
        value: 4.59543404228285,
      },
      {
        type: "Daniel Green",
        value: 4.19175034676564,
      },
      {
        type: "Daniel Green",
        value: 3.87405583162858,
      },
      {
        type: "Daniel Green",
        value: 3.31697066802449,
      },
      {
        type: "Daniel Green",
        value: 1.75543894721229,
      },
      {
        type: "Daniel Green",
        value: 4.04400638644551,
      },
      {
        type: "Daniel Green",
        value: 4.73295812457811,
      },
      {
        type: "Daniel Green",
        value: 5.06488266769065,
      },
      {
        type: "Daniel Green",
        value: 4.71424588752924,
      },
      {
        type: "Daniel Green",
        value: 4.57714485060104,
      },
      {
        type: "Daniel Green",
        value: 3.38210712502589,
      },
      {
        type: "Daniel Green",
        value: 4.11862256757225,
      },
      {
        type: "Daniel Green",
        value: 3.06600507518045,
      },
      {
        type: "Daniel Green",
        value: 4.31006528274048,
      },
      {
        type: "Daniel Green",
        value: 5.06925629431003,
      },
      {
        type: "Daniel Green",
        value: 4.91155722049267,
      },
      {
        type: "Daniel Green",
        value: 4.5921656349774,
      },
      {
        type: "Daniel Green",
        value: 3.84008517462514,
      },
      {
        type: "Daniel Green",
        value: 2.80942501291609,
      },
      {
        type: "Daniel Green",
        value: 3.18383095247554,
      },
      {
        type: "Daniel Green",
        value: 4.55297562253916,
      },
      {
        type: "Daniel Green",
        value: 5.07272250379192,
      },
      {
        type: "Daniel Green",
        value: 3.46536147830368,
      },
      {
        type: "Daniel Green",
        value: 3.96359599113987,
      },
      {
        type: "Daniel Green",
        value: 4.83148251654042,
      },
      {
        type: "Daniel Green",
        value: 3.94414130474083,
      },
      {
        type: "Daniel Green",
        value: 4.08984553024626,
      },
      {
        type: "Daniel Green",
        value: 4.62832651024899,
      },
      {
        type: "Daniel Green",
        value: 3.23248961549123,
      },
      {
        type: "Daniel Green",
        value: 2.60645444828036,
      },
      {
        type: "Daniel Green",
        value: 4.1533737719586,
      },
      {
        type: "Daniel Green",
        value: 2.8998175746661,
      },
      {
        type: "Daniel Green",
        value: 4.50090100842449,
      },
      {
        type: "Daniel Green",
        value: 4.86308410822224,
      },
      {
        type: "Daniel Green",
        value: 2.963768082963,
      },
      {
        type: "Daniel Green",
        value: 4.50471515037215,
      },
      {
        type: "Daniel Green",
        value: 3.86628516288434,
      },
      {
        type: "Daniel Green",
        value: 3.98501682922081,
      },
      {
        type: "Daniel Green",
        value: 4.75094108949501,
      },
      {
        type: "Daniel Green",
        value: 4.49040271724779,
      },
      {
        type: "Daniel Green",
        value: 2.62504737576339,
      },
      {
        type: "Daniel Green",
        value: 2.26002614246914,
      },
      {
        type: "Daniel Green",
        value: 5.80277293051822,
      },
      {
        type: "Daniel Green",
        value: 4.22063936021018,
      },
      {
        type: "Daniel Green",
        value: 3.07963644182694,
      },
      {
        type: "Daniel Green",
        value: 3.55976921153519,
      },
      {
        type: "Daniel Green",
        value: 5.70482791748789,
      },
      {
        type: "Daniel Green",
        value: 2.61237774191346,
      },
      {
        type: "Daniel Green",
        value: 3.34549565316185,
      },
      {
        type: "Daniel Green",
        value: 2.86439616892527,
      },
      {
        type: "Daniel Green",
        value: 3.72359679178409,
      },
      {
        type: "Daniel Green",
        value: 3.56915775717088,
      },
      {
        type: "Daniel Green",
        value: 3.74204200542408,
      },
      {
        type: "Daniel Green",
        value: 5.27460009553632,
      },
      {
        type: "Daniel Green",
        value: 4.73866267853892,
      },
      {
        type: "Daniel Green",
        value: 3.70219394890368,
      },
      {
        type: "Daniel Green",
        value: 3.52466924742454,
      },
      {
        type: "Daniel Green",
        value: 4.6859930179646,
      },
      {
        type: "Daniel Green",
        value: 3.33007715949349,
      },
      {
        type: "Daniel Green",
        value: 3.17104215238952,
      },
      {
        type: "Daniel Green",
        value: 3.20125547150722,
      },
      {
        type: "Daniel Green",
        value: 4.68172051492659,
      },
      {
        type: "Daniel Green",
        value: 3.65409628970942,
      },
      {
        type: "Daniel Green",
        value: 3.12051329547179,
      },
      {
        type: "Daniel Green",
        value: 3.88419521824309,
      },
      {
        type: "Daniel Green",
        value: 4.84909703192798,
      },
      {
        type: "Daniel Green",
        value: 5.54248126551704,
      },
      {
        type: "Daniel Green",
        value: 2.59663968159011,
      },
      {
        type: "Daniel Green",
        value: 3.85661680056062,
      },
      {
        type: "Daniel Green",
        value: 4.23191027826733,
      },
      {
        type: "Daniel Green",
        value: 5.6252868981076,
      },
      {
        type: "Daniel Green",
        value: 1.74107095437678,
      },
      {
        type: "Daniel Green",
        value: 6.07056508776174,
      },
      {
        type: "Daniel Green",
        value: 5.28276157231583,
      },
      {
        type: "Daniel Green",
        value: 4.75504967045242,
      },
      {
        type: "Daniel Green",
        value: 1.65772266824258,
      },
      {
        type: "Daniel Green",
        value: 4.13051170056847,
      },
      {
        type: "Daniel Green",
        value: 3.62961527741702,
      },
      {
        type: "Daniel Green",
        value: 3.79004775393609,
      },
      {
        type: "Daniel Green",
        value: 6.0598581072695,
      },
      {
        type: "Daniel Green",
        value: 3.87367954564361,
      },
      {
        type: "Daniel Green",
        value: 3.25600084276851,
      },
      {
        type: "Daniel Green",
        value: 4.70364248563106,
      },
      {
        type: "Daniel Green",
        value: 3.22172374626842,
      },
      {
        type: "Daniel Green",
        value: 2.60595802256354,
      },
      {
        type: "Daniel Green",
        value: 6.64806991808888,
      },
      {
        type: "Daniel Green",
        value: 2.73149807418538,
      },
      {
        type: "Daniel Green",
        value: 2.65635809542417,
      },
      {
        type: "Daniel Green",
        value: 3.67884764080831,
      },
      {
        type: "Daniel Green",
        value: 3.34546764916297,
      },
      {
        type: "Daniel Green",
        value: 1.56714869942661,
      },
      {
        type: "Daniel Green",
        value: 3.1428737079587,
      },
      {
        type: "Daniel Green",
        value: 3.83178134936462,
      },
      {
        type: "Daniel Green",
        value: 5.13120591576654,
      },
      {
        type: "Daniel Green",
        value: 4.74957859023925,
      },
      {
        type: "Daniel Green",
        value: 3.86657971835758,
      },
      {
        type: "Daniel Green",
        value: 2.81882617931782,
      },
      {
        type: "Daniel Green",
        value: 3.8693708466287,
      },
      {
        type: "Daniel Green",
        value: 2.94025414399023,
      },
      {
        type: "Daniel Green",
        value: 2.17209835008007,
      },
      {
        type: "Daniel Green",
        value: 2.70454896291244,
      },
      {
        type: "Daniel Green",
        value: 5.80431634108542,
      },
      {
        type: "Daniel Green",
        value: 3.57371135835201,
      },
      {
        type: "Daniel Green",
        value: 4.32076069413954,
      },
      {
        type: "Daniel Green",
        value: 4.10178198694607,
      },
      {
        type: "Daniel Green",
        value: 4.90767657946574,
      },
      {
        type: "Daniel Green",
        value: 3.9050773783803,
      },
      {
        type: "Daniel Green",
        value: 3.8404093536067,
      },
      {
        type: "Daniel Green",
        value: 4.59122974118349,
      },
      {
        type: "Daniel Green",
        value: 3.28589800049913,
      },
      {
        type: "Daniel Green",
        value: 3.24469738266209,
      },
      {
        type: "Daniel Green",
        value: 2.66023119760878,
      },
      {
        type: "Daniel Green",
        value: 4.5374675429094,
      },
      {
        type: "Daniel Green",
        value: 4.22349063289708,
      },
      {
        type: "Daniel Green",
        value: 3.26018101727071,
      },
      {
        type: "Daniel Green",
        value: 4.42772152309455,
      },
      {
        type: "Daniel Green",
        value: 4.26228871995274,
      },
      {
        type: "Daniel Green",
        value: 5.16238856039061,
      },
      {
        type: "Daniel Green",
        value: 4.69523519899287,
      },
      {
        type: "Daniel Green",
        value: 2.93083594615915,
      },
      {
        type: "Daniel Green",
        value: 4.52881999467929,
      },
      {
        type: "Daniel Green",
        value: 3.89264388867354,
      },
      {
        type: "Daniel Green",
        value: 1.75665436825712,
      },
      {
        type: "Daniel Green",
        value: 3.06411378348578,
      },
      {
        type: "Daniel Green",
        value: 3.37375616202929,
      },
      {
        type: "Daniel Green",
        value: 3.33123071473586,
      },
      {
        type: "Daniel Green",
        value: 3.62058004012785,
      },
      {
        type: "Daniel Green",
        value: 3.64078232219769,
      },
      {
        type: "Daniel Green",
        value: 4.85287853414747,
      },
      {
        type: "Daniel Green",
        value: 3.14374212460684,
      },
      {
        type: "Daniel Green",
        value: 4.46460269396352,
      },
      {
        type: "Daniel Green",
        value: 3.08558911124939,
      },
      {
        type: "Daniel Green",
        value: 4.25299919087401,
      },
      {
        type: "Daniel Green",
        value: 5.44302672058432,
      },
      {
        type: "Daniel Green",
        value: 3.41325770408934,
      },
      {
        type: "Daniel Green",
        value: 4.92704015433294,
      },
      {
        type: "Daniel Green",
        value: 4.08050814383118,
      },
      {
        type: "Daniel Green",
        value: 1.25210956323382,
      },
      {
        type: "Daniel Green",
        value: 3.77443907296873,
      },
      {
        type: "Daniel Green",
        value: 4.01415534276904,
      },
      {
        type: "Daniel Green",
        value: 4.2701585145874,
      },
      {
        type: "Daniel Green",
        value: 4.68380030850727,
      },
      {
        type: "Daniel Green",
        value: 3.69689752933118,
      },
      {
        type: "Daniel Green",
        value: 4.26478254763399,
      },
      {
        type: "Daniel Green",
        value: 4.01117033517546,
      },
      {
        type: "Daniel Green",
        value: 4.70854941401082,
      },
      {
        type: "Daniel Green",
        value: 3.86797254669481,
      },
      {
        type: "Daniel Green",
        value: 3.05754203006519,
      },
      {
        type: "Daniel Green",
        value: 3.24433033598231,
      },
      {
        type: "Daniel Green",
        value: 5.83824334138123,
      },
      {
        type: "Daniel Green",
        value: 4.17400386191461,
      },
      {
        type: "Daniel Green",
        value: 2.7442115533481,
      },
      {
        type: "Daniel Green",
        value: 4.06021551272561,
      },
      {
        type: "Daniel Green",
        value: 3.47969841330308,
      },
      {
        type: "Daniel Green",
        value: 3.61368613037147,
      },
      {
        type: "Daniel Green",
        value: 4.09571067824495,
      },
      {
        type: "Daniel Green",
        value: 4.44742581691805,
      },
      {
        type: "Daniel Green",
        value: 4.54531636877615,
      },
      {
        type: "Daniel Green",
        value: 3.2891134997808,
      },
      {
        type: "Daniel Green",
        value: 4.45216365867885,
      },
      {
        type: "Daniel Green",
        value: 3.21431237485159,
      },
      {
        type: "Daniel Green",
        value: 3.36122822913423,
      },
      {
        type: "Daniel Green",
        value: 2.92439554382525,
      },
      {
        type: "Daniel Green",
        value: 3.77441578183842,
      },
      {
        type: "Daniel Green",
        value: 3.76970503517883,
      },
      {
        type: "Daniel Green",
        value: 2.77852811630358,
      },
      {
        type: "Daniel Green",
        value: 2.42582467395043,
      },
      {
        type: "Daniel Green",
        value: 5.15396154919223,
      },
      {
        type: "Daniel Green",
        value: 3.90479110712221,
      },
      {
        type: "Daniel Green",
        value: 4.78069990409575,
      },
      {
        type: "Daniel Green",
        value: 4.21267534496662,
      },
      {
        type: "Daniel Green",
        value: 2.74136123323698,
      },
      {
        type: "Daniel Green",
        value: 3.27813945631767,
      },
      {
        type: "Daniel Green",
        value: 5.29848222712117,
      },
      {
        type: "Daniel Green",
        value: 5.32514586586198,
      },
      {
        type: "Daniel Green",
        value: 3.82510508453949,
      },
      {
        type: "Daniel Green",
        value: 4.81368572336506,
      },
      {
        type: "Daniel Green",
        value: 3.67346953783527,
      },
      {
        type: "Daniel Green",
        value: 5.17643382433956,
      },
      {
        type: "Daniel Green",
        value: 3.45255313230501,
      },
      {
        type: "Daniel Green",
        value: 3.45095190051741,
      },
      {
        type: "Daniel Green",
        value: 2.95660229831864,
      },
      {
        type: "Daniel Green",
        value: 3.76566172652457,
      },
      {
        type: "Daniel Green",
        value: 4.64564706759233,
      },
      {
        type: "Daniel Green",
        value: 3.80624328484108,
      },
      {
        type: "Daniel Green",
        value: 4.62442485653397,
      },
      {
        type: "Daniel Green",
        value: 5.22013666773772,
      },
      {
        type: "Daniel Green",
        value: 4.70627756434427,
      },
      {
        type: "Daniel Green",
        value: 3.77716050375096,
      },
      {
        type: "Daniel Green",
        value: 3.73317401112327,
      },
      {
        type: "Daniel Green",
        value: 4.49167598083419,
      },
      {
        type: "Daniel Green",
        value: 4.82068628166964,
      },
      {
        type: "Daniel Green",
        value: 2.96689929069279,
      },
      {
        type: "Daniel Green",
        value: 3.3508172438745,
      },
      {
        type: "Daniel Green",
        value: 4.56613624005424,
      },
      {
        type: "Daniel Green",
        value: 4.26327160185945,
      },
      {
        type: "Daniel Green",
        value: 2.8518031194032,
      },
      {
        type: "Daniel Green",
        value: 4.74947925711203,
      },
      {
        type: "Daniel Green",
        value: 4.09432690521208,
      },
      {
        type: "Daniel Green",
        value: 3.61654494755605,
      },
      {
        type: "Daniel Green",
        value: 4.46016696346869,
      },
      {
        type: "Daniel Green",
        value: 4.76946204762591,
      },
      {
        type: "Daniel Green",
        value: 2.24362459953442,
      },
      {
        type: "Daniel Green",
        value: 4.56675017482456,
      },
      {
        type: "Daniel Green",
        value: 1.64426667402479,
      },
      {
        type: "Daniel Green",
        value: 3.46344715362581,
      },
      {
        type: "Daniel Green",
        value: 2.49874379964974,
      },
      {
        type: "Daniel Green",
        value: 4.95687419055584,
      },
      {
        type: "Daniel Green",
        value: 4.79252643586848,
      },
      {
        type: "Daniel Green",
        value: 3.52067138075215,
      },
      {
        type: "Daniel Green",
        value: 2.39599802542716,
      },
      {
        type: "Daniel Green",
        value: 4.33008620631285,
      },
      {
        type: "Daniel Green",
        value: 3.20034196722749,
      },
      {
        type: "Daniel Green",
        value: 2.97838414707859,
      },
      {
        type: "Daniel Green",
        value: 2.45050213442371,
      },
      {
        type: "Daniel Green",
        value: 3.38336574920916,
      },
      {
        type: "Daniel Green",
        value: 4.0687737026197,
      },
      {
        type: "Daniel Green",
        value: 2.09917317925361,
      },
      {
        type: "Daniel Green",
        value: 2.72071658765059,
      },
      {
        type: "Daniel Green",
        value: 3.32571138021126,
      },
      {
        type: "Daniel Green",
        value: 4.46716152738889,
      },
      {
        type: "Daniel Green",
        value: 3.12005866268191,
      },
      {
        type: "Daniel Green",
        value: 4.51588446394813,
      },
      {
        type: "Daniel Green",
        value: 2.67720441478769,
      },
      {
        type: "Daniel Green",
        value: 5.83556940618181,
      },
      {
        type: "Daniel Green",
        value: 4.159600264742,
      },
      {
        type: "Daniel Green",
        value: 3.70491285882899,
      },
      {
        type: "Daniel Green",
        value: 4.61000855710149,
      },
      {
        type: "Daniel Green",
        value: 2.43894966838946,
      },
      {
        type: "Daniel Green",
        value: 2.78899039037966,
      },
      {
        type: "Daniel Green",
        value: 3.61404848295946,
      },
      {
        type: "Daniel Green",
        value: 4.48088819194621,
      },
      {
        type: "Daniel Green",
        value: 3.95904126117395,
      },
      {
        type: "Daniel Green",
        value: 5.72071257567839,
      },
      {
        type: "Daniel Green",
        value: 3.8328808257382,
      },
      {
        type: "Daniel Green",
        value: 4.34522361909472,
      },
      {
        type: "Daniel Green",
        value: 4.30993429353616,
      },
      {
        type: "Daniel Green",
        value: 4.22629332087336,
      },
      {
        type: "Daniel Green",
        value: 3.42751948538598,
      },
      {
        type: "Daniel Green",
        value: 3.20066941184682,
      },
      {
        type: "Daniel Green",
        value: 3.13660239991581,
      },
      {
        type: "Daniel Green",
        value: 2.72729354900796,
      },
      {
        type: "Daniel Green",
        value: 4.9778914797168,
      },
      {
        type: "Daniel Green",
        value: 4.54407406856257,
      },
      {
        type: "Daniel Green",
        value: 4.14424242281366,
      },
      {
        type: "Daniel Green",
        value: 3.5497239915095,
      },
      {
        type: "Daniel Green",
        value: 4.29853777864852,
      },
      {
        type: "Daniel Green",
        value: 4.17503832247591,
      },
      {
        type: "Daniel Green",
        value: 4.33664934215583,
      },
      {
        type: "Daniel Green",
        value: 5.08311846277689,
      },
      {
        type: "Daniel Green",
        value: 3.38833335851137,
      },
      {
        type: "Daniel Green",
        value: 2.6116197424059,
      },
      {
        type: "Daniel Green",
        value: 3.6994633658212,
      },
      {
        type: "Daniel Green",
        value: 5.0814875769566,
      },
      {
        type: "Daniel Green",
        value: 4.12068908018424,
      },
      {
        type: "Daniel Green",
        value: 5.013521836077,
      },
      {
        type: "Daniel Green",
        value: 4.58081060903987,
      },
      {
        type: "Daniel Green",
        value: 2.87599142425317,
      },
      {
        type: "Daniel Green",
        value: 5.04153817577397,
      },
      {
        type: "Daniel Green",
        value: 4.20038225491883,
      },
      {
        type: "Daniel Green",
        value: 5.36261570333622,
      },
      {
        type: "Daniel Green",
        value: 3.91775012944213,
      },
      {
        type: "Daniel Green",
        value: 3.4607371943248,
      },
      {
        type: "Daniel Green",
        value: 3.17149900224243,
      },
      {
        type: "Daniel Green",
        value: 5.72144069881365,
      },
      {
        type: "Daniel Green",
        value: 4.74023583105067,
      },
      {
        type: "Daniel Green",
        value: 4.02168250481216,
      },
      {
        type: "Daniel Green",
        value: 4.31050162908127,
      },
      {
        type: "Daniel Green",
        value: 5.60800392820641,
      },
      {
        type: "Daniel Green",
        value: 3.28649502250446,
      },
      {
        type: "Daniel Green",
        value: 3.23385679725138,
      },
      {
        type: "Daniel Green",
        value: 5.34434289462365,
      },
      {
        type: "Daniel Green",
        value: 3.40729796006084,
      },
      {
        type: "Daniel Green",
        value: 3.85076484605878,
      },
      {
        type: "Daniel Green",
        value: 3.35745925865511,
      },
      {
        type: "Daniel Green",
        value: 3.53672228274685,
      },
      {
        type: "Daniel Green",
        value: 3.2083332547507,
      },
      {
        type: "Daniel Green",
        value: 4.53338774911634,
      },
      {
        type: "Daniel Green",
        value: 5.58104404140571,
      },
      {
        type: "Daniel Green",
        value: 4.63711443944993,
      },
      {
        type: "Daniel Green",
        value: 5.33250640185968,
      },
      {
        type: "Daniel Green",
        value: 2.17852151138076,
      },
      {
        type: "Daniel Green",
        value: 4.60668463647335,
      },
      {
        type: "Daniel Green",
        value: 4.13131090436911,
      },
      {
        type: "Daniel Green",
        value: 4.43255442359394,
      },
      {
        type: "Daniel Green",
        value: 4.36174765168743,
      },
      {
        type: "Daniel Green",
        value: 2.78919241952748,
      },
      {
        type: "Daniel Green",
        value: 4.23683534716692,
      },
      {
        type: "Daniel Green",
        value: 3.11680274304767,
      },
      {
        type: "Daniel Green",
        value: 3.84227827417556,
      },
      {
        type: "Daniel Green",
        value: 5.12958341283653,
      },
      {
        type: "Daniel Green",
        value: 4.45764896704152,
      },
      {
        type: "Daniel Green",
        value: 5.50788630935339,
      },
      {
        type: "Daniel Green",
        value: 3.24878306091882,
      },
      {
        type: "Daniel Green",
        value: 2.95167640349231,
      },
      {
        type: "Daniel Green",
        value: 4.04151693983027,
      },
      {
        type: "Daniel Green",
        value: 3.31369069557069,
      },
      {
        type: "Daniel Green",
        value: 3.54705499648382,
      },
      {
        type: "Daniel Green",
        value: 2.99575803654724,
      },
      {
        type: "Daniel Green",
        value: 4.15122310054075,
      },
      {
        type: "Daniel Green",
        value: 4.60780244088961,
      },
      {
        type: "Daniel Green",
        value: 3.40562194690298,
      },
      {
        type: "Daniel Green",
        value: 5.55855095312984,
      },
      {
        type: "Daniel Green",
        value: 0.99026898001381,
      },
      {
        type: "Daniel Green",
        value: 3.79147247831165,
      },
      {
        type: "Daniel Green",
        value: 5.20777996386848,
      },
      {
        type: "Daniel Green",
        value: 4.88107706073967,
      },
      {
        type: "Daniel Green",
        value: 3.98394889835078,
      },
      {
        type: "Daniel Green",
        value: 4.67578203341043,
      },
      {
        type: "Daniel Green",
        value: 2.23783044843607,
      },
      {
        type: "Daniel Green",
        value: 4.55941461127701,
      },
      {
        type: "Daniel Green",
        value: 5.12860645690969,
      },
      {
        type: "Daniel Green",
        value: 4.9135008248684,
      },
      {
        type: "Daniel Green",
        value: 3.5081642652034,
      },
      {
        type: "Daniel Green",
        value: 4.22197398854883,
      },
      {
        type: "Daniel Green",
        value: 3.38037116254722,
      },
      {
        type: "Daniel Green",
        value: 4.94334495525192,
      },
      {
        type: "Daniel Green",
        value: 3.94506676856033,
      },
      {
        type: "Daniel Green",
        value: 4.38855268742246,
      },
      {
        type: "Daniel Green",
        value: 4.15750219024216,
      },
      {
        type: "Daniel Green",
        value: 4.66385871110194,
      },
      {
        type: "Daniel Green",
        value: 2.10061148779139,
      },
      {
        type: "Daniel Green",
        value: 2.91273793734905,
      },
      {
        type: "Daniel Green",
        value: 4.1480081019734,
      },
      {
        type: "Daniel Green",
        value: 2.64438560605052,
      },
      {
        type: "Daniel Green",
        value: 4.17602539756335,
      },
      {
        type: "Daniel Green",
        value: 3.69185444606495,
      },
      {
        type: "Daniel Green",
        value: 4.19443845023768,
      },
      {
        type: "Daniel Green",
        value: 2.44564581995189,
      },
      {
        type: "Daniel Green",
        value: 5.64213823635679,
      },
      {
        type: "Daniel Green",
        value: 4.99873621685632,
      },
      {
        type: "Daniel Green",
        value: 3.92752975873272,
      },
      {
        type: "Daniel Green",
        value: 3.1088522900305,
      },
      {
        type: "Daniel Green",
        value: 5.00792828115522,
      },
      {
        type: "Daniel Green",
        value: 4.36211608703828,
      },
      {
        type: "Daniel Green",
        value: 2.89054402264884,
      },
      {
        type: "Daniel Green",
        value: 3.95373680486482,
      },
      {
        type: "Daniel Green",
        value: 4.26206342182037,
      },
      {
        type: "Daniel Green",
        value: 4.47332173232433,
      },
      {
        type: "Daniel Green",
        value: 3.76350877541632,
      },
      {
        type: "Daniel Green",
        value: 3.19240235548807,
      },
      {
        type: "Daniel Green",
        value: 2.97766124339882,
      },
      {
        type: "Daniel Green",
        value: 3.67612948480439,
      },
      {
        type: "Daniel Green",
        value: 5.16199825189535,
      },
      {
        type: "Daniel Green",
        value: 2.67050306680982,
      },
      {
        type: "Daniel Green",
        value: 4.37498834438776,
      },
      {
        type: "Daniel Green",
        value: 3.0335637485441,
      },
      {
        type: "Daniel Green",
        value: 2.46497943684578,
      },
      {
        type: "Daniel Green",
        value: 3.28668844489634,
      },
      {
        type: "Daniel Green",
        value: 3.39384522793832,
      },
      {
        type: "Daniel Green",
        value: 5.21432743931171,
      },
      {
        type: "Daniel Green",
        value: 5.4832195321735,
      },
      {
        type: "Daniel Green",
        value: 4.90530558959242,
      },
      {
        type: "Daniel Green",
        value: 2.79201077598119,
      },
      {
        type: "Daniel Green",
        value: 3.7342126087159,
      },
      {
        type: "Daniel Green",
        value: 3.03180817992892,
      },
      {
        type: "Daniel Green",
        value: 5.46505037186903,
      },
      {
        type: "Daniel Green",
        value: 4.30597055372171,
      },
      {
        type: "Daniel Green",
        value: 2.89581696591958,
      },
      {
        type: "Daniel Green",
        value: 3.99372403499717,
      },
      {
        type: "Daniel Green",
        value: 3.76137211203946,
      },
      {
        type: "Daniel Green",
        value: 3.95493803669226,
      },
      {
        type: "Daniel Green",
        value: 2.93261162682781,
      },
      {
        type: "Daniel Green",
        value: 4.78315788957956,
      },
      {
        type: "Daniel Green",
        value: 4.61011826795511,
      },
      {
        type: "Daniel Green",
        value: 3.6293352747207,
      },
      {
        type: "Daniel Green",
        value: 4.49372944036594,
      },
      {
        type: "Daniel Green",
        value: 4.50367035757202,
      },
      {
        type: "Daniel Green",
        value: 4.26214435056136,
      },
      {
        type: "Daniel Green",
        value: 4.77988335241255,
      },
      {
        type: "Daniel Green",
        value: 5.02256016454576,
      },
      {
        type: "Daniel Green",
        value: 4.32965540154175,
      },
      {
        type: "Daniel Green",
        value: 4.19747452949287,
      },
      {
        type: "Daniel Green",
        value: 2.79623462279098,
      },
      {
        type: "Daniel Green",
        value: 3.51600676402198,
      },
      {
        type: "Daniel Green",
        value: 4.95819919589043,
      },
      {
        type: "Daniel Green",
        value: 4.264965506618,
      },
      {
        type: "Daniel Green",
        value: 3.19954855257092,
      },
      {
        type: "Daniel Green",
        value: 5.83319667258012,
      },
      {
        type: "Daniel Green",
        value: 3.07278165837968,
      },
      {
        type: "Daniel Green",
        value: 2.84305983004351,
      },
      {
        type: "Daniel Green",
        value: 3.93103968520589,
      },
      {
        type: "Daniel Green",
        value: 3.69394800496717,
      },
      {
        type: "Daniel Green",
        value: 5.06067374751431,
      },
      {
        type: "Daniel Green",
        value: 4.11612273652569,
      },
      {
        type: "Daniel Green",
        value: 4.77107309619784,
      },
      {
        type: "Daniel Green",
        value: 5.8344278675705,
      },
      {
        type: "Daniel Green",
        value: 6.20610022582634,
      },
      {
        type: "Daniel Green",
        value: 2.94643779143752,
      },
      {
        type: "Daniel Green",
        value: 4.82649898524156,
      },
      {
        type: "Daniel Green",
        value: 5.23838249839822,
      },
      {
        type: "Daniel Green",
        value: 2.7133420613383,
      },
      {
        type: "Daniel Green",
        value: 3.63718698869754,
      },
      {
        type: "Daniel Green",
        value: 4.53728498227572,
      },
      {
        type: "Daniel Green",
        value: 3.63001514837048,
      },
      {
        type: "Daniel Green",
        value: 1.53925571448197,
      },
      {
        type: "Daniel Green",
        value: 4.25755328788205,
      },
      {
        type: "Daniel Green",
        value: 4.03647840570593,
      },
      {
        type: "Daniel Green",
        value: 4.80417325573943,
      },
      {
        type: "Daniel Green",
        value: 4.90649124911063,
      },
      {
        type: "Daniel Green",
        value: 3.83265807027607,
      },
      {
        type: "Daniel Green",
        value: 4.64829495801713,
      },
      {
        type: "Daniel Green",
        value: 4.11778685878165,
      },
      {
        type: "Daniel Green",
        value: 2.97578345182362,
      },
      {
        type: "Daniel Green",
        value: 2.09605002285071,
      },
      {
        type: "Daniel Green",
        value: 4.36226532186154,
      },
      {
        type: "Daniel Green",
        value: 4.02608873276806,
      },
      {
        type: "Daniel Green",
        value: 6.22824506115542,
      },
      {
        type: "Daniel Green",
        value: 3.4498943794518,
      },
      {
        type: "Daniel Green",
        value: 3.29835408796579,
      },
      {
        type: "Daniel Green",
        value: 4.32624959416328,
      },
      {
        type: "Daniel Green",
        value: 4.90322666874213,
      },
      {
        type: "Daniel Green",
        value: 4.38704139209742,
      },
      {
        type: "Daniel Green",
        value: 4.20712162615109,
      },
      {
        type: "Daniel Green",
        value: 4.35820668265807,
      },
      {
        type: "Daniel Green",
        value: 3.72506863456728,
      },
      {
        type: "Daniel Green",
        value: 4.03728046607836,
      },
      {
        type: "Daniel Green",
        value: 3.5285561569464,
      },
      {
        type: "Daniel Green",
        value: 4.62158514066786,
      },
      {
        type: "Daniel Green",
        value: 5.83705060494348,
      },
      {
        type: "Daniel Green",
        value: 4.61312241816273,
      },
      {
        type: "Daniel Green",
        value: 4.93334305920547,
      },
      {
        type: "Daniel Green",
        value: 3.29186855030416,
      },
      {
        type: "Daniel Green",
        value: 4.8526344969574,
      },
      {
        type: "Daniel Green",
        value: 4.08951392748202,
      },
      {
        type: "Daniel Green",
        value: 2.83206794371461,
      },
      {
        type: "Daniel Green",
        value: 6.69117892629632,
      },
      {
        type: "Daniel Green",
        value: 6.12675810544903,
      },
      {
        type: "Daniel Green",
        value: 2.0478224428096,
      },
      {
        type: "Daniel Green",
        value: 5.22282307340657,
      },
      {
        type: "Daniel Green",
        value: 5.76375831528005,
      },
      {
        type: "Daniel Green",
        value: 5.21523714120059,
      },
      {
        type: "Daniel Green",
        value: 4.68230760276584,
      },
      {
        type: "Daniel Green",
        value: 3.11062012057515,
      },
      {
        type: "Daniel Green",
        value: 3.8854662085379,
      },
      {
        type: "Daniel Green",
        value: 4.69177492440091,
      },
      {
        type: "Daniel Green",
        value: 3.96219477795994,
      },
      {
        type: "Daniel Green",
        value: 4.86645882469235,
      },
      {
        type: "Daniel Green",
        value: 3.44545540831258,
      },
      {
        type: "Daniel Green",
        value: 3.5194114719044,
      },
      {
        type: "Daniel Green",
        value: 4.98561825050971,
      },
      {
        type: "Daniel Green",
        value: 5.21522797117029,
      },
      {
        type: "Daniel Green",
        value: 4.16537699352201,
      },
      {
        type: "Daniel Green",
        value: 4.13118932140386,
      },
      {
        type: "Daniel Green",
        value: 5.1343208228929,
      },
      {
        type: "Daniel Green",
        value: 3.65933115985767,
      },
      {
        type: "Daniel Green",
        value: 4.23223262636394,
      },
      {
        type: "Daniel Green",
        value: 4.09928358848231,
      },
      {
        type: "Daniel Green",
        value: 3.93013142404119,
      },
      {
        type: "Daniel Green",
        value: 3.83615472782091,
      },
      {
        type: "Daniel Green",
        value: 3.91372913628725,
      },
      {
        type: "Daniel Green",
        value: 4.58109750169728,
      },
      {
        type: "Daniel Green",
        value: 3.61712566513452,
      },
      {
        type: "Daniel Green",
        value: 2.71965392336359,
      },
      {
        type: "Daniel Green",
        value: 5.42138132602893,
      },
      {
        type: "Daniel Green",
        value: 2.33142425251317,
      },
      {
        type: "Daniel Green",
        value: 3.17587263819764,
      },
      {
        type: "Daniel Green",
        value: 3.23344269615126,
      },
      {
        type: "Daniel Green",
        value: 3.11391988339955,
      },
      {
        type: "Daniel Green",
        value: 5.11913483538592,
      },
      {
        type: "Daniel Green",
        value: 2.24056110353286,
      },
      {
        type: "Daniel Green",
        value: 3.3947312641662,
      },
      {
        type: "Daniel Green",
        value: 5.03211255988346,
      },
      {
        type: "Daniel Green",
        value: 3.54251229483888,
      },
      {
        type: "Daniel Green",
        value: 3.52036800172313,
      },
      {
        type: "Daniel Green",
        value: 2.62588036836499,
      },
      {
        type: "Daniel Green",
        value: 3.52080034277126,
      },
      {
        type: "Daniel Green",
        value: 5.29202249014717,
      },
      {
        type: "Daniel Green",
        value: 3.37053218023272,
      },
      {
        type: "Daniel Green",
        value: 3.46816120081831,
      },
      {
        type: "Daniel Green",
        value: 3.45361886700871,
      },
      {
        type: "Daniel Green",
        value: 2.34381324017798,
      },
      {
        type: "Daniel Green",
        value: 2.56364873766458,
      },
      {
        type: "Daniel Green",
        value: 4.71028812494519,
      },
      {
        type: "Daniel Green",
        value: 1.88051023591337,
      },
      {
        type: "Daniel Green",
        value: 5.47416681574974,
      },
      {
        type: "Daniel Green",
        value: 4.64764705182203,
      },
      {
        type: "Daniel Green",
        value: 4.3704326608943,
      },
      {
        type: "Daniel Green",
        value: 4.16992456267013,
      },
      {
        type: "Daniel Green",
        value: 3.58220181007215,
      },
      {
        type: "Daniel Green",
        value: 4.53674559624478,
      },
      {
        type: "Daniel Green",
        value: 3.52992850898347,
      },
      {
        type: "Daniel Green",
        value: 1.82891032354679,
      },
      {
        type: "Daniel Green",
        value: 3.07535366181673,
      },
      {
        type: "Daniel Green",
        value: 4.26923292861021,
      },
      {
        type: "Daniel Green",
        value: 3.52009873852261,
      },
      {
        type: "Daniel Green",
        value: 5.770010613052,
      },
      {
        type: "Daniel Green",
        value: 3.42181255023772,
      },
      {
        type: "Daniel Green",
        value: 4.84496127338773,
      },
      {
        type: "Daniel Green",
        value: 3.56761358079042,
      },
      {
        type: "Daniel Green",
        value: 4.53481963119943,
      },
      {
        type: "Daniel Green",
        value: 5.60031853210726,
      },
      {
        type: "Daniel Green",
        value: 2.92406312077574,
      },
      {
        type: "Daniel Green",
        value: 4.39099244196296,
      },
      {
        type: "Daniel Green",
        value: 6.01612582318756,
      },
      {
        type: "Daniel Green",
        value: 3.61599841236721,
      },
      {
        type: "Daniel Green",
        value: 4.1111891528918,
      },
      {
        type: "Daniel Green",
        value: 3.91180290040716,
      },
      {
        type: "Daniel Green",
        value: 3.46858250695384,
      },
      {
        type: "Daniel Green",
        value: 4.46445782371734,
      },
      {
        type: "Daniel Green",
        value: 2.67507989100948,
      },
      {
        type: "Daniel Green",
        value: 4.46117839173114,
      },
      {
        type: "Daniel Green",
        value: 4.74696376335737,
      },
      {
        type: "Daniel Green",
        value: 3.4184862912645,
      },
      {
        type: "Daniel Green",
        value: 3.24454113631426,
      },
      {
        type: "Daniel Green",
        value: 4.57129072049615,
      },
      {
        type: "Daniel Green",
        value: 2.82332550339626,
      },
      {
        type: "Daniel Green",
        value: 2.78726239722325,
      },
      {
        type: "Daniel Green",
        value: 1.47687135830876,
      },
      {
        type: "Daniel Green",
        value: 3.73577715438908,
      },
      {
        type: "Daniel Green",
        value: 4.3946847950581,
      },
      {
        type: "Daniel Green",
        value: 4.4743059122762,
      },
      {
        type: "Daniel Green",
        value: 4.35303990001541,
      },
      {
        type: "Daniel Green",
        value: 2.66354518123465,
      },
      {
        type: "Daniel Green",
        value: 3.81924054007042,
      },
      {
        type: "Daniel Green",
        value: 3.38443028971557,
      },
      {
        type: "Daniel Green",
        value: 3.7562922215457,
      },
      {
        type: "Daniel Green",
        value: 6.96423311195863,
      },
      {
        type: "Daniel Green",
        value: 3.89695941439327,
      },
      {
        type: "Daniel Green",
        value: 4.5828563119713,
      },
      {
        type: "Daniel Green",
        value: 4.9852097934865,
      },
      {
        type: "Daniel Green",
        value: 3.50214819392518,
      },
      {
        type: "Daniel Green",
        value: 3.53831250358511,
      },
      {
        type: "Daniel Green",
        value: 2.29524964240655,
      },
      {
        type: "Daniel Green",
        value: 3.96335915842317,
      },
      {
        type: "Daniel Green",
        value: 1.44932368675905,
      },
      {
        type: "Daniel Green",
        value: 4.21813674755926,
      },
      {
        type: "Daniel Green",
        value: 4.74979574724758,
      },
      {
        type: "Daniel Green",
        value: 4.71754356581116,
      },
      {
        type: "Daniel Green",
        value: 5.49714910603624,
      },
      {
        type: "Daniel Green",
        value: 4.7930994695749,
      },
      {
        type: "Daniel Green",
        value: 4.61573396928532,
      },
      {
        type: "Daniel Green",
        value: 2.56332020588862,
      },
      {
        type: "Daniel Green",
        value: 2.95548491879588,
      },
      {
        type: "Daniel Green",
        value: 3.77230290465476,
      },
      {
        type: "Daniel Green",
        value: 4.98143785481939,
      },
      {
        type: "Daniel Green",
        value: 3.56363989294856,
      },
      {
        type: "Daniel Green",
        value: 3.55065396801214,
      },
      {
        type: "Daniel Green",
        value: 4.73937651103805,
      },
      {
        type: "Daniel Green",
        value: 4.30231840480772,
      },
      {
        type: "Daniel Green",
        value: 2.60413319357863,
      },
      {
        type: "Daniel Green",
        value: 2.06613250368052,
      },
      {
        type: "Daniel Green",
        value: 5.13625537124036,
      },
      {
        type: "Daniel Green",
        value: 3.48136154260762,
      },
      {
        type: "Daniel Green",
        value: 6.47517521844831,
      },
      {
        type: "Daniel Green",
        value: 2.92731440018657,
      },
      {
        type: "Daniel Green",
        value: 5.04551133105752,
      },
      {
        type: "Daniel Green",
        value: 2.86351713496212,
      },
      {
        type: "Daniel Green",
        value: 4.7523464406764,
      },
      {
        type: "Daniel Green",
        value: 4.27891548637163,
      },
      {
        type: "Daniel Green",
        value: 2.69618370005337,
      },
      {
        type: "Daniel Green",
        value: 6.31134537161063,
      },
      {
        type: "Daniel Green",
        value: 4.04166937995478,
      },
      {
        type: "Daniel Green",
        value: 1.62504378028498,
      },
      {
        type: "Daniel Green",
        value: 3.46171251931862,
      },
      {
        type: "Daniel Green",
        value: 3.6188664989187,
      },
      {
        type: "Daniel Green",
        value: 4.26004136612389,
      },
      {
        type: "Daniel Green",
        value: 5.50878188399732,
      },
      {
        type: "Daniel Green",
        value: 3.01723847657771,
      },
      {
        type: "Daniel Green",
        value: 3.70455206562476,
      },
      {
        type: "Daniel Green",
        value: 2.44692747872421,
      },
      {
        type: "Daniel Green",
        value: 3.05453304567046,
      },
      {
        type: "Daniel Green",
        value: 3.01971131142149,
      },
      {
        type: "Daniel Green",
        value: 3.76872249854122,
      },
      {
        type: "Daniel Green",
        value: 2.87861211505809,
      },
      {
        type: "Daniel Green",
        value: 4.66280431554361,
      },
      {
        type: "Daniel Green",
        value: 3.73297114707905,
      },
      {
        type: "Daniel Green",
        value: 2.94480189690947,
      },
      {
        type: "Daniel Green",
        value: 3.09118973094835,
      },
      {
        type: "Daniel Green",
        value: 5.15245979322195,
      },
      {
        type: "Daniel Green",
        value: 3.62474415260476,
      },
      {
        type: "Daniel Green",
        value: 3.25781946279844,
      },
      {
        type: "Daniel Green",
        value: 4.88290596148206,
      },
      {
        type: "Daniel Green",
        value: 2.72329619915538,
      },
      {
        type: "Daniel Green",
        value: 3.3094067311814,
      },
      {
        type: "Daniel Green",
        value: 2.83254685697218,
      },
      {
        type: "Daniel Green",
        value: 4.03709289538525,
      },
      {
        type: "Daniel Green",
        value: 3.31521582752996,
      },
      {
        type: "Daniel Green",
        value: 4.26269755481215,
      },
      {
        type: "Daniel Green",
        value: 4.20462989451223,
      },
      {
        type: "Daniel Green",
        value: 4.30728230182286,
      },
      {
        type: "Daniel Green",
        value: 3.47899157317083,
      },
      {
        type: "Daniel Green",
        value: 5.42773821475495,
      },
      {
        type: "Daniel Green",
        value: 4.13258446876803,
      },
      {
        type: "Daniel Green",
        value: 3.25668226137345,
      },
      {
        type: "Daniel Green",
        value: 3.84910425462503,
      },
      {
        type: "Daniel Green",
        value: 4.31741287351839,
      },
      {
        type: "Daniel Green",
        value: 4.38739169013066,
      },
      {
        type: "Daniel Green",
        value: 5.77047494483057,
      },
      {
        type: "Daniel Green",
        value: 4.48752581901282,
      },
      {
        type: "Daniel Green",
        value: 3.85162244196605,
      },
      {
        type: "Daniel Green",
        value: 3.9682057740186,
      },
      {
        type: "Daniel Green",
        value: 5.25474989886427,
      },
      {
        type: "Daniel Green",
        value: 4.11747026750313,
      },
      {
        type: "Daniel Green",
        value: 6.02795245239624,
      },
      {
        type: "Daniel Green",
        value: 2.91413692300487,
      },
      {
        type: "Daniel Green",
        value: 5.07980058294115,
      },
      {
        type: "Daniel Green",
        value: 4.73701318236108,
      },
      {
        type: "Daniel Green",
        value: 4.12163898586562,
      },
      {
        type: "Daniel Green",
        value: 5.55853914536569,
      },
      {
        type: "Daniel Green",
        value: 3.91018668274225,
      },
      {
        type: "Daniel Green",
        value: 1.89122749015339,
      },
      {
        type: "Daniel Green",
        value: 5.83283416067762,
      },
      {
        type: "Daniel Green",
        value: 4.61893618831346,
      },
      {
        type: "Daniel Green",
        value: 3.96484643284704,
      },
      {
        type: "Daniel Green",
        value: 3.24106094230435,
      },
      {
        type: "Daniel Green",
        value: 4.75606215054119,
      },
      {
        type: "Daniel Green",
        value: 4.78393515597056,
      },
      {
        type: "Daniel Green",
        value: 4.82175665210082,
      },
      {
        type: "Daniel Green",
        value: 2.71119452789071,
      },
      {
        type: "Daniel Green",
        value: 3.42115846037898,
      },
      {
        type: "Daniel Green",
        value: 2.77248046910466,
      },
      {
        type: "Daniel Green",
        value: 4.17329004391636,
      },
      {
        type: "Daniel Green",
        value: 2.19866763205607,
      },
      {
        type: "Daniel Green",
        value: 4.11089665246367,
      },
      {
        type: "Daniel Green",
        value: 4.62033845330054,
      },
      {
        type: "Daniel Green",
        value: 4.31659144929584,
      },
      {
        type: "Daniel Green",
        value: 1.90340838946303,
      },
      {
        type: "Daniel Green",
        value: 2.52000517811696,
      },
      {
        type: "Daniel Green",
        value: 4.86591388545473,
      },
      {
        type: "Daniel Green",
        value: 3.76513974270003,
      },
      {
        type: "Daniel Green",
        value: 4.1560314105107,
      },
      {
        type: "Daniel Green",
        value: 4.16939200190744,
      },
      {
        type: "Daniel Green",
        value: 4.27503358456088,
      },
      {
        type: "Daniel Green",
        value: 4.17044749957709,
      },
      {
        type: "Daniel Green",
        value: 3.98453590922923,
      },
      {
        type: "Daniel Green",
        value: 4.90982174429767,
      },
      {
        type: "Daniel Green",
        value: 6.09507232383576,
      },
      {
        type: "Daniel Green",
        value: 6.06151608487555,
      },
      {
        type: "Daniel Green",
        value: 4.72710976844128,
      },
      {
        type: "Daniel Green",
        value: 4.21731481150285,
      },
      {
        type: "Daniel Green",
        value: 1.54442449631662,
      },
      {
        type: "Daniel Green",
        value: 4.12265352428763,
      },
      {
        type: "Daniel Green",
        value: 3.48034229890769,
      },
      {
        type: "Daniel Green",
        value: 5.2763967111388,
      },
      {
        type: "Daniel Green",
        value: 1.98560150561547,
      },
      {
        type: "Daniel Green",
        value: 5.27545345680946,
      },
      {
        type: "Daniel Green",
        value: 3.48101586637265,
      },
      {
        type: "Daniel Green",
        value: 3.62552930070947,
      },
      {
        type: "Daniel Green",
        value: 5.88823921680562,
      },
      {
        type: "Daniel Green",
        value: 4.50198024988547,
      },
      {
        type: "Daniel Green",
        value: 3.76231725169906,
      },
      {
        type: "Daniel Green",
        value: 2.78842235060945,
      },
      {
        type: "Daniel Green",
        value: 4.21411045994389,
      },
      {
        type: "Daniel Green",
        value: 3.41295576577601,
      },
      {
        type: "Daniel Green",
        value: 5.10569822621486,
      },
      {
        type: "Daniel Green",
        value: 3.2932242928932,
      },
      {
        type: "Daniel Green",
        value: 4.16584720436908,
      },
      {
        type: "Daniel Green",
        value: 4.97812290287887,
      },
      {
        type: "Daniel Green",
        value: 3.2977380993149,
      },
      {
        type: "Daniel Green",
        value: 4.8151271716602,
      },
      {
        type: "Daniel Green",
        value: 3.60777598109747,
      },
      {
        type: "Daniel Green",
        value: 6.15226006153642,
      },
      {
        type: "Daniel Green",
        value: 3.82501765806057,
      },
      {
        type: "Daniel Green",
        value: 2.17317966671149,
      },
      {
        type: "Daniel Green",
        value: 2.62714189477489,
      },
      {
        type: "Daniel Green",
        value: 3.89834232036275,
      },
      {
        type: "Daniel Green",
        value: 4.35321147255549,
      },
      {
        type: "Daniel Green",
        value: 4.21452045398382,
      },
      {
        type: "Daniel Green",
        value: 3.31382386229728,
      },
      {
        type: "Daniel Green",
        value: 2.65149053851681,
      },
      {
        type: "Daniel Green",
        value: 2.26254047895914,
      },
      {
        type: "Daniel Green",
        value: 3.99399557032903,
      },
      {
        type: "Daniel Green",
        value: 5.14163273649791,
      },
      {
        type: "Daniel Green",
        value: 5.01622291253575,
      },
      {
        type: "Daniel Green",
        value: 2.47836157768143,
      },
      {
        type: "Daniel Green",
        value: 4.51893048154682,
      },
      {
        type: "Daniel Green",
        value: 5.5561207630383,
      },
      {
        type: "Daniel Green",
        value: 4.96073887845281,
      },
      {
        type: "Daniel Green",
        value: 4.67826864095972,
      },
      {
        type: "Daniel Green",
        value: 6.41024164759202,
      },
      {
        type: "Daniel Green",
        value: 3.81055434925645,
      },
      {
        type: "Daniel Green",
        value: 3.93640620824516,
      },
      {
        type: "Daniel Green",
        value: 2.26252031265043,
      },
      {
        type: "Daniel Green",
        value: 2.60357183881144,
      },
      {
        type: "Daniel Green",
        value: 4.82068388627664,
      },
      {
        type: "Daniel Green",
        value: 3.92527046846192,
      },
      {
        type: "Daniel Green",
        value: 4.14124422105895,
      },
      {
        type: "Daniel Green",
        value: 4.6394236209317,
      },
      {
        type: "Daniel Green",
        value: 4.07001480741221,
      },
      {
        type: "Daniel Green",
        value: 2.68609141536546,
      },
      {
        type: "Daniel Green",
        value: 4.91413704508624,
      },
      {
        type: "Daniel Green",
        value: 2.52807425624408,
      },
      {
        type: "Daniel Green",
        value: 2.79484146223311,
      },
      {
        type: "Daniel Green",
        value: 3.61327624007178,
      },
      {
        type: "Daniel Green",
        value: 3.90509197311561,
      },
      {
        type: "Daniel Green",
        value: 4.63527965630582,
      },
      {
        type: "Daniel Green",
        value: 2.59894546166403,
      },
      {
        type: "Daniel Green",
        value: 4.73000141514629,
      },
      {
        type: "Daniel Green",
        value: 4.88878468890445,
      },
      {
        type: "Daniel Green",
        value: 4.19774210660373,
      },
      {
        type: "Daniel Green",
        value: 4.6776147242568,
      },
      {
        type: "Daniel Green",
        value: 4.7198932343328,
      },
      {
        type: "Daniel Green",
        value: 3.96316282015643,
      },
      {
        type: "Daniel Green",
        value: 5.41123773507356,
      },
      {
        type: "Daniel Green",
        value: 3.29747090659409,
      },
      {
        type: "Daniel Green",
        value: 4.28518240094712,
      },
      {
        type: "Daniel Green",
        value: 3.12246571915479,
      },
      {
        type: "Daniel Green",
        value: 2.36769334116732,
      },
      {
        type: "Daniel Green",
        value: 4.61135105633963,
      },
      {
        type: "Daniel Green",
        value: 5.21276475182054,
      },
      {
        type: "Daniel Green",
        value: 3.86511218181117,
      },
      {
        type: "Daniel Green",
        value: 6.17478726394127,
      },
      {
        type: "Daniel Green",
        value: 2.00766010999699,
      },
      {
        type: "Daniel Green",
        value: 3.30668432617802,
      },
      {
        type: "Daniel Green",
        value: 3.88154846744785,
      },
      {
        type: "Daniel Green",
        value: 6.40512607712403,
      },
      {
        type: "Daniel Green",
        value: 4.12588389978592,
      },
      {
        type: "Daniel Green",
        value: 4.27511444990566,
      },
      {
        type: "Daniel Green",
        value: 4.40500192038884,
      },
      {
        type: "Daniel Green",
        value: 4.78623454570781,
      },
      {
        type: "Daniel Green",
        value: 3.91862138053436,
      },
      {
        type: "Daniel Green",
        value: 6.13753166951302,
      },
      {
        type: "Daniel Green",
        value: 3.8238832682702,
      },
      {
        type: "Daniel Green",
        value: 5.18575776741209,
      },
      {
        type: "Daniel Green",
        value: 3.85034843167762,
      },
      {
        type: "Daniel Green",
        value: 3.15976624998382,
      },
      {
        type: "Daniel Green",
        value: 3.93509620292349,
      },
      {
        type: "Daniel Green",
        value: 2.52424608228197,
      },
      {
        type: "Daniel Green",
        value: 3.11590804637585,
      },
      {
        type: "Daniel Green",
        value: 5.45949743744997,
      },
      {
        type: "Daniel Green",
        value: 4.4261875894052,
      },
      {
        type: "Daniel Green",
        value: 3.07596165781302,
      },
      {
        type: "Daniel Green",
        value: 3.48762773207571,
      },
      {
        type: "Daniel Green",
        value: 4.27411576546989,
      },
      {
        type: "Daniel Green",
        value: 4.34836494189721,
      },
      {
        type: "Daniel Green",
        value: 1.99772946267669,
      },
      {
        type: "Daniel Green",
        value: 3.42439977396854,
      },
      {
        type: "Daniel Green",
        value: 4.40750516633189,
      },
      {
        type: "Daniel Green",
        value: 3.95409750955912,
      },
      {
        type: "Daniel Green",
        value: 3.74739487802092,
      },
      {
        type: "Daniel Green",
        value: 2.43825260457451,
      },
      {
        type: "Daniel Green",
        value: 4.06627071123806,
      },
      {
        type: "Daniel Green",
        value: 4.64634660839154,
      },
      {
        type: "Daniel Green",
        value: 3.47065969636248,
      },
      {
        type: "Daniel Green",
        value: 3.46027470214983,
      },
      {
        type: "Daniel Green",
        value: 3.19635659248686,
      },
      {
        type: "Daniel Green",
        value: 6.36153640668613,
      },
      {
        type: "Daniel Green",
        value: 5.24604608633957,
      },
      {
        type: "Daniel Green",
        value: 4.05823571820507,
      },
      {
        type: "Daniel Green",
        value: 5.2248035273192,
      },
      {
        type: "Daniel Green",
        value: 5.82179757537179,
      },
      {
        type: "Daniel Green",
        value: 2.01136691468931,
      },
      {
        type: "Daniel Green",
        value: 5.3915174682974,
      },
      {
        type: "Daniel Green",
        value: 3.64030137904322,
      },
      {
        type: "Daniel Green",
        value: 3.7904676737778,
      },
      {
        type: "Daniel Green",
        value: 3.03839502970028,
      },
      {
        type: "Daniel Green",
        value: 3.10828335299036,
      },
      {
        type: "Daniel Green",
        value: 2.80618289980072,
      },
      {
        type: "Daniel Green",
        value: 3.6057812175497,
      },
      {
        type: "Daniel Green",
        value: 3.98565471839628,
      },
      {
        type: "Daniel Green",
        value: 4.25010703308328,
      },
      {
        type: "Daniel Green",
        value: 5.59969695238113,
      },
      {
        type: "Daniel Green",
        value: 5.31633976210107,
      },
      {
        type: "Daniel Green",
        value: 3.1420355782497,
      },
      {
        type: "Daniel Green",
        value: 2.7833926067038,
      },
      {
        type: "Daniel Green",
        value: 3.78880498311999,
      },
      {
        type: "Daniel Green",
        value: 3.26117029254512,
      },
      {
        type: "Daniel Green",
        value: 4.23414501439723,
      },
      {
        type: "Daniel Green",
        value: 3.17353336450604,
      },
      {
        type: "Daniel Green",
        value: 3.38791781876974,
      },
    ],
    margin: {
      top: 20,
      right: 30,
      bottom: 40,
      left: 35,
    },
    width: 690,
    height: 740,
  }

  componentDidMount() {
    const { width, height, margin, data } = this.state

    const densityplot = d3
      .select(this.viz)
      .attr("width", 900)
      .attr("height", 800)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

    const x = d3.scaleLinear().domain([-10, 15]).range([0, width])

    densityplot
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))

    const y = d3.scaleLinear().range([height, 0]).domain([0, 0.12])

    densityplot.append("g").call(d3.axisLeft(y))

    const kernelDensityEstimator = (kernel, X) => {
      return function (V) {
        return X.map(function (x) {
          return [
            x,
            d3.mean(V, function (v) {
              return kernel(x - v)
            }),
          ]
        })
      }
    }

    const kernelEpanechnikov = k => {
      return function (v) {
        return Math.abs((v /= k)) <= 1 ? (0.75 * (1 - v * v)) / k : 0
      }
    }

    const kde = kernelDensityEstimator(kernelEpanechnikov(7), x.ticks(60))

    const density1 = kde(
      data
        .filter(function (d) {
          return d.type === "Aidan Tolkien"
        })
        .map(function (d) {
          return d.value
        })
    )
    const density2 = kde(
      data
        .filter(function (d) {
          return d.type === "Daniel Green"
        })
        .map(function (d) {
          return d.value
        })
    )

    densityplot
      .append("path")
      .attr("class", "mypath")
      .datum(density1)
      .attr("fill", "#F7B11B")
      .attr("opacity", ".6")
      .attr("stroke", "#000")
      .attr("stroke-width", 1)
      .attr("stroke-linejoin", "round")
      .attr(
        "d",
        d3
          .line()
          .curve(d3.curveBasis)
          .x(function (d) {
            return x(d[0])
          })
          .y(function (d) {
            return y(d[1])
          })
      )

    densityplot
      .append("path")
      .attr("class", "mypath")
      .datum(density2)
      .attr("fill", "#357FFA")
      .attr("opacity", ".6")
      .attr("stroke", "#000")
      .attr("stroke-width", 1)
      .attr("stroke-linejoin", "round")
      .attr(
        "d",
        d3
          .line()
          .curve(d3.curveBasis)
          .x(function (d) {
            return x(d[0])
          })
          .y(function (d) {
            return y(d[1])
          })
      )

    densityplot.append("circle").attr("cx", 300).attr("cy", 30).attr("r", 6).style("fill", "#F7B11B")
    densityplot.append("circle").attr("cx", 300).attr("cy", 60).attr("r", 6).style("fill", "#357FFA")
    densityplot
      .append("text")
      .attr("x", 320)
      .attr("y", 30)
      .text("Aidan Tolkien")
      .style("font-size", "15px")
      .attr("alignment-baseline", "middle")
    densityplot
      .append("text")
      .attr("x", 320)
      .attr("y", 60)
      .text("Daniel Green")
      .style("font-size", "15px")
      .attr("alignment-baseline", "middle")
  }

  render() {
    return (
      <div className="ms-panel">
        <div className="ms-panel-header">
          <h6>Bar Chart</h6>
        </div>
        <div className="ms-panel-body">
          <svg ref={viz => (this.viz = viz)}></svg>
        </div>
      </div>
    )
  }
}

export default Densityplot
