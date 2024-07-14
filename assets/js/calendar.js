/*!
 *  @preserve
 *
 * ++++++++++++++++++++++++++++++++++++++
 * Add to Calendar TimeZones iCal Library
 * ++++++++++++++++++++++++++++++++++++++
 *
 * Version: 1.4.2
 * Creator: Jens Kuerschner (https://jenskuerschner.de)
 * Project: https://github.com/add2cal/timezones-ical-library
 * License: Apache-2.0
 *
 */
const tzlibVersion = "1.4.2"
  , tzlibZonesDB = {
    Africa: {
        Abidjan: ["", 0],
        Accra: ["Africa/Abidjan", 0],
        Addis_Ababa: ["Africa/Nairobi", 1],
        Algiers: ["", 2],
        Asmara: ["Africa/Nairobi", 1],
        Asmera: ["Africa/Nairobi", 1],
        Bamako: ["Africa/Abidjan", 0],
        Bangui: ["Africa/Lagos", 3],
        Banjul: ["Africa/Abidjan", 0],
        Bissau: ["", 0],
        Blantyre: ["Africa/Maputo", 4],
        Brazzaville: ["Africa/Lagos", 3],
        Bujumbura: ["Africa/Maputo", 4],
        Cairo: ["", 5],
        Casablanca: ["", 6],
        Ceuta: ["", 7],
        Conakry: ["Africa/Abidjan", 0],
        Dakar: ["Africa/Abidjan", 0],
        Dar_es_Salaam: ["Africa/Nairobi", 1],
        Djibouti: ["Africa/Nairobi", 1],
        Douala: ["Africa/Lagos", 3],
        El_Aaiun: ["", 6],
        Freetown: ["Africa/Abidjan", 0],
        Gaborone: ["Africa/Maputo", 4],
        Harare: ["Africa/Maputo", 4],
        Johannesburg: ["", 8],
        Juba: ["", 4],
        Kampala: ["Africa/Nairobi", 1],
        Khartoum: ["", 4],
        Kigali: ["Africa/Maputo", 4],
        Kinshasa: ["Africa/Lagos", 3],
        Lagos: ["", 3],
        Libreville: ["Africa/Lagos", 3],
        Lome: ["Africa/Abidjan", 0],
        Luanda: ["Africa/Lagos", 3],
        Lubumbashi: ["Africa/Maputo", 4],
        Lusaka: ["Africa/Maputo", 4],
        Malabo: ["Africa/Lagos", 3],
        Maputo: ["", 4],
        Maseru: ["Africa/Johannesburg", 8],
        Mbabane: ["Africa/Johannesburg", 8],
        Mogadishu: ["Africa/Nairobi", 1],
        Monrovia: ["", 0],
        Nairobi: ["", 1],
        Ndjamena: ["", 3],
        Niamey: ["Africa/Lagos", 3],
        Nouakchott: ["Africa/Abidjan", 0],
        Ouagadougou: ["Africa/Abidjan", 0],
        "Porto-Novo": ["Africa/Lagos", 3],
        Sao_Tome: ["", 0],
        Timbuktu: ["Africa/Abidjan", 0],
        Tripoli: ["", 5],
        Tunis: ["", 2],
        Windhoek: ["", 4]
    },
    America: {
        Adak: ["", 9],
        Anchorage: ["", 10],
        Anguilla: ["America/Puerto_Rico", 11],
        Antigua: ["America/Puerto_Rico", 11],
        Araguaina: ["", 12],
        Argentina: {
            Buenos_Aires: ["", 12],
            Catamarca: ["", 12],
            ComodRivadavia: ["America/Argentina/Catamarca", 12],
            Cordoba: ["", 12],
            Jujuy: ["", 12],
            La_Rioja: ["", 12],
            Mendoza: ["", 12],
            Rio_Gallegos: ["", 12],
            Salta: ["", 12],
            San_Juan: ["", 12],
            San_Luis: ["", 12],
            Tucuman: ["", 12],
            Ushuaia: ["", 12]
        },
        Aruba: ["America/Puerto_Rico", 11],
        Asuncion: ["", 13],
        Atikokan: ["America/Panama", 14],
        Atka: ["America/Adak", 9],
        Bahia_Banderas: ["", 15],
        Bahia: ["", 12],
        Barbados: ["", 11],
        Belem: ["", 12],
        Belize: ["", 16],
        "Blanc-Sablon": ["America/Puerto_Rico", 11],
        Boa_Vista: ["", 17],
        Bogota: ["", 18],
        Boise: ["", 19],
        Buenos_Aires: ["America/Argentina/Buenos_Aires", 12],
        Cambridge_Bay: ["", 19],
        Campo_Grande: ["", 17],
        Cancun: ["", 14],
        Caracas: ["", 17],
        Catamarca: ["America/Argentina/Catamarca", 12],
        Cayenne: ["", 12],
        Cayman: ["America/Panama", 14],
        Chicago: ["", 20],
        Chihuahua: ["", 21],
        Coral_Harbour: ["America/Panama", 14],
        Cordoba: ["America/Argentina/Cordoba", 12],
        Costa_Rica: ["", 16],
        Creston: ["America/Phoenix", 22],
        Cuiaba: ["", 17],
        Curacao: ["America/Puerto_Rico", 11],
        Danmarkshavn: ["", 0],
        Dawson_Creek: ["", 22],
        Dawson: ["", 22],
        Denver: ["", 19],
        Detroit: ["", 23],
        Dominica: ["America/Puerto_Rico", 11],
        Edmonton: ["", 19],
        Eirunepe: ["", 18],
        El_Salvador: ["", 16],
        Ensenada: ["America/Tijuana", 24],
        Fort_Nelson: ["", 22],
        Fort_Wayne: ["America/Indiana/Indianapolis", 23],
        Fortaleza: ["", 12],
        Glace_Bay: ["", 25],
        Godthab: ["America/Nuuk", 26],
        Goose_Bay: ["", 27],
        Grand_Turk: ["", 28],
        Grenada: ["America/Puerto_Rico", 11],
        Guadeloupe: ["America/Puerto_Rico", 11],
        Guatemala: ["", 16],
        Guayaquil: ["", 18],
        Guyana: ["", 17],
        Halifax: ["", 25],
        Havana: ["", 29],
        Hermosillo: ["", 22],
        Indiana: {
            Indianapolis: ["", 23],
            Knox: ["", 20],
            Marengo: ["", 23],
            Petersburg: ["", 23],
            Tell_City: ["", 20],
            Vevay: ["", 23],
            Vincennes: ["", 23],
            Winamac: ["", 28]
        },
        Indianapolis: ["America/Indiana/Indianapolis", 23],
        Inuvik: ["", 19],
        Iqaluit: ["", 23],
        Jamaica: ["", 14],
        Jujuy: ["America/Argentina/Jujuy", 12],
        Juneau: ["", 10],
        Kentucky: {
            Louisville: ["", 23],
            Monticello: ["", 23]
        },
        Knox_IN: ["America/Indiana/Knox", 20],
        Kralendijk: ["America/Puerto_Rico", 11],
        La_Paz: ["", 17],
        Lima: ["", 18],
        Los_Angeles: ["", 24],
        Louisville: ["America/Kentucky/Louisville", 23],
        Lower_Princes: ["America/Puerto_Rico", 11],
        Maceio: ["", 12],
        Managua: ["", 16],
        Manaus: ["", 17],
        Marigot: ["America/Puerto_Rico", 11],
        Martinique: ["", 11],
        Matamoros: ["", 20],
        Mazatlan: ["", 21],
        Mendoza: ["America/Argentina/Mendoza", 12],
        Menominee: ["", 20],
        Merida: ["", 30],
        Metlakatla: ["", 10],
        Mexico_City: ["", 30],
        Miquelon: ["", 31],
        Moncton: ["", 25],
        Monterrey: ["", 30],
        Montevideo: ["", 12],
        Montreal: ["America/Toronto", 23],
        Montserrat: ["America/Puerto_Rico", 11],
        Nassau: ["America/Toronto", 23],
        New_York: ["", 23],
        Nipigon: ["", 23],
        Nome: ["", 10],
        Noronha: ["", 32],
        North_Dakota: {
            Beulah: ["", 20],
            Center: ["", 20],
            New_Salem: ["", 20]
        },
        Nuuk: ["", 26],
        Ojinaga: ["", 19],
        Panama: ["", 14],
        Pangnirtung: ["", 23],
        Paramaribo: ["", 12],
        Phoenix: ["", 22],
        Port_of_Spain: ["America/Puerto_Rico", 11],
        "Port-au-Prince": ["", 23],
        Porto_Acre: ["America/Rio_Branco", 18],
        Porto_Velho: ["", 17],
        Puerto_Rico: ["", 11],
        Punta_Arenas: ["", 12],
        Rainy_River: ["", 20],
        Rankin_Inlet: ["", 20],
        Recife: ["", 12],
        Regina: ["", 16],
        Resolute: ["", 33],
        Rio_Branco: ["", 18],
        Rosario: ["America/Argentina/Cordoba", 12],
        Santa_Isabel: ["America/Tijuana", 24],
        Santarem: ["", 12],
        Santiago: ["", 34],
        Santo_Domingo: ["", 11],
        Sao_Paulo: ["", 12],
        Scoresbysund: ["", 35],
        Shiprock: ["America/Denver", 19],
        Sitka: ["", 10],
        St_Barthelemy: ["America/Puerto_Rico", 11],
        St_Johns: ["", 36],
        St_Kitts: ["America/Puerto_Rico", 11],
        St_Lucia: ["America/Puerto_Rico", 11],
        St_Thomas: ["America/Puerto_Rico", 11],
        St_Vincent: ["America/Puerto_Rico", 11],
        Swift_Current: ["", 16],
        Tegucigalpa: ["", 16],
        Thule: ["", 25],
        Thunder_Bay: ["", 23],
        Tijuana: ["", 24],
        Toronto: ["", 23],
        Tortola: ["America/Puerto_Rico", 11],
        Vancouver: ["", 24],
        Virgin: ["America/Puerto_Rico", 11],
        Whitehorse: ["", 22],
        Winnipeg: ["", 20],
        Yakutat: ["", 10],
        Yellowknife: ["", 19]
    },
    Antarctica: {
        Casey: ["", 37],
        Davis: ["", 38],
        DumontDUrville: ["Pacific/Port_Moresby", 39],
        Macquarie: ["", 40],
        Mawson: ["", 41],
        McMurdo: ["Pacific/Auckland", 42],
        Palmer: ["", 12],
        Rothera: ["", 12],
        South_Pole: ["Pacific/Auckland", 42],
        Syowa: ["Asia/Riyadh", 43],
        Troll: ["", 44],
        Vostok: ["Asia/Urumqi", 45]
    },
    Arctic: {
        Longyearbyen: ["Europe/Berlin", 7]
    },
    Asia: {
        Aden: ["Asia/Riyadh", 43],
        Almaty: ["", 45],
        Amman: ["", 43],
        Anadyr: ["", 46],
        Aqtau: ["", 41],
        Aqtobe: ["", 41],
        Ashgabat: ["", 41],
        Ashkhabad: ["Asia/Ashgabat", 41],
        Atyrau: ["", 41],
        Baghdad: ["", 43],
        Bahrain: ["Asia/Qatar", 43],
        Baku: ["", 47],
        Bangkok: ["", 38],
        Barnaul: ["", 38],
        Beirut: ["", 48],
        Bishkek: ["", 45],
        Brunei: ["Asia/Kuching", 49],
        Calcutta: ["Asia/Kolkata", 50],
        Chita: ["", 51],
        Choibalsan: ["", 49],
        Chongqing: ["Asia/Shanghai", 52],
        Chungking: ["Asia/Shanghai", 52],
        Colombo: ["", 53],
        Dacca: ["Asia/Dhaka", 45],
        Damascus: ["", 43],
        Dhaka: ["", 45],
        Dili: ["", 51],
        Dubai: ["", 47],
        Dushanbe: ["", 41],
        Famagusta: ["", 54],
        Gaza: ["", 55],
        Harbin: ["Asia/Shanghai", 52],
        Hebron: ["", 55],
        Ho_Chi_Minh: ["", 38],
        Hong_Kong: ["", 56],
        Hovd: ["", 38],
        Irkutsk: ["", 49],
        Istanbul: ["Europe/Istanbul", 43],
        Jakarta: ["", 57],
        Jayapura: ["", 58],
        Jerusalem: ["", 59],
        Kabul: ["", 60],
        Kamchatka: ["", 46],
        Karachi: ["", 61],
        Kashgar: ["Asia/Urumqi", 45],
        Kathmandu: ["", 62],
        Katmandu: ["Asia/Kathmandu", 62],
        Khandyga: ["", 51],
        Kolkata: ["", 50],
        Krasnoyarsk: ["", 38],
        Kuala_Lumpur: ["Asia/Singapore", 49],
        Kuching: ["", 49],
        Kuwait: ["Asia/Riyadh", 43],
        Macao: ["Asia/Macau", 52],
        Macau: ["", 52],
        Magadan: ["", 37],
        Makassar: ["", 63],
        Manila: ["", 64],
        Muscat: ["Asia/Dubai", 47],
        Nicosia: ["", 65],
        Novokuznetsk: ["", 38],
        Novosibirsk: ["", 38],
        Omsk: ["", 45],
        Oral: ["", 41],
        Phnom_Penh: ["Asia/Bangkok", 38],
        Pontianak: ["", 57],
        Pyongyang: ["", 66],
        Qatar: ["", 43],
        Qostanay: ["", 45],
        Qyzylorda: ["", 41],
        Rangoon: ["Asia/Yangon", 67],
        Riyadh: ["", 43],
        Saigon: ["Asia/Ho_Chi_Minh", 38],
        Sakhalin: ["", 37],
        Samarkand: ["", 41],
        Seoul: ["", 66],
        Shanghai: ["", 52],
        Singapore: ["", 49],
        Srednekolymsk: ["", 37],
        Taipei: ["", 52],
        Tashkent: ["", 41],
        Tbilisi: ["", 47],
        Tehran: ["", 68],
        Tel_Aviv: ["Asia/Jerusalem", 59],
        Thimbu: ["Asia/Thimphu", 45],
        Thimphu: ["", 45],
        Tokyo: ["", 69],
        Tomsk: ["", 38],
        Ujung_Pandang: ["Asia/Makassar", 63],
        Ulaanbaatar: ["", 49],
        Ulan_Bator: ["Asia/Ulaanbaatar", 49],
        Urumqi: ["", 45],
        "Ust-Nera": ["", 39],
        Vientiane: ["Asia/Bangkok", 38],
        Vladivostok: ["", 39],
        Yakutsk: ["", 51],
        Yangon: ["", 67],
        Yekaterinburg: ["", 41],
        Yerevan: ["", 47]
    },
    Atlantic: {
        Azores: ["", 35],
        Bermuda: ["", 25],
        Canary: ["", 70],
        Cape_Verde: ["", 71],
        Faeroe: ["Atlantic/Faroe", 70],
        Faroe: ["", 70],
        Jan_Mayen: ["Europe/Berlin", 7],
        Madeira: ["", 70],
        Reykjavik: ["Africa/Abidjan", 0],
        South_Georgia: ["", 32],
        St_Helena: ["Africa/Abidjan", 0],
        Stanley: ["", 12]
    },
    Australia: {
        ACT: ["Australia/Sydney", 40],
        Adelaide: ["", 72],
        Brisbane: ["", 73],
        Broken_Hill: ["", 72],
        Canberra: ["Australia/Sydney", 40],
        Currie: ["Australia/Hobart", 74],
        Darwin: ["", 75],
        Eucla: ["", 76],
        Hobart: ["", 74],
        LHI: ["Australia/Lord_Howe", 77],
        Lindeman: ["", 73],
        Lord_Howe: ["", 77],
        Melbourne: ["", 40],
        North: ["Australia/Darwin", 75],
        NSW: ["Australia/Sydney", 40],
        Perth: ["", 78],
        Queensland: ["Australia/Brisbane", 73],
        South: ["Australia/Adelaide", 72],
        Sydney: ["", 40],
        Tasmania: ["Australia/Hobart", 74],
        Victoria: ["Australia/Melbourne", 40],
        West: ["Australia/Perth", 78],
        Yancowinna: ["Australia/Broken_Hill", 72]
    },
    Brazil: {
        Acre: ["America/Rio_Branco", 18],
        DeNoronha: ["America/Noronha", 32],
        East: ["America/Sao_Paulo", 12],
        West: ["America/Manaus", 17]
    },
    Canada: {
        Atlantic: ["America/Halifax", 25],
        Central: ["America/Winnipeg", 20],
        Eastern: ["America/Toronto", 23],
        Mountain: ["America/Edmonton", 19],
        Newfoundland: ["America/St_Johns", 36],
        Pacific: ["America/Vancouver", 24],
        Saskatchewan: ["America/Regina", 16],
        Yukon: ["America/Whitehorse", 22]
    },
    CET: ["", 7],
    Chile: {
        Continental: ["America/Santiago", 34],
        EasterIsland: ["Pacific/Easter", 79]
    },
    CST6CDT: ["", 20],
    Cuba: ["America/Havana", 29],
    EET: ["", 54],
    Egypt: ["Africa/Cairo", 5],
    Eire: ["Europe/Dublin", 80],
    EST: ["", 14],
    EST5EDT: ["", 23],
    Etc: {
        "GMT-0": ["Etc/GMT", 0],
        "GMT-1": ["", 6],
        "GMT-10": ["", 39],
        "GMT-11": ["", 37],
        "GMT-12": ["", 46],
        "GMT-13": ["", 81],
        "GMT-14": ["", 82],
        "GMT-2": ["", 83],
        "GMT-3": ["", 43],
        "GMT-4": ["", 47],
        "GMT-5": ["", 41],
        "GMT-6": ["", 45],
        "GMT-7": ["", 38],
        "GMT-8": ["", 49],
        "GMT-9": ["", 51],
        GMT: ["", 0],
        "GMT+0": ["Etc/GMT", 0],
        "GMT+1": ["", 71],
        "GMT+10": ["", 84],
        "GMT+11": ["", 85],
        "GMT+12": ["", 86],
        "GMT+2": ["", 32],
        "GMT+3": ["", 12],
        "GMT+4": ["", 17],
        "GMT+5": ["", 18],
        "GMT+6": ["", 87],
        "GMT+7": ["", 88],
        "GMT+8": ["", 89],
        "GMT+9": ["", 90],
        GMT0: ["Etc/GMT", 0],
        Greenwich: ["Etc/GMT", 0],
        UCT: ["Etc/UTC", 91],
        Universal: ["Etc/UTC", 91],
        UTC: ["", 91],
        Zulu: ["Etc/UTC", 91]
    },
    Europe: {
        Amsterdam: ["Europe/Brussels", 7],
        Andorra: ["", 7],
        Astrakhan: ["", 47],
        Athens: ["", 54],
        Belfast: ["Europe/London", 92],
        Belgrade: ["", 7],
        Berlin: ["", 7],
        Bratislava: ["Europe/Prague", 7],
        Brussels: ["", 7],
        Bucharest: ["", 54],
        Budapest: ["", 7],
        Busingen: ["Europe/Zurich", 7],
        Chisinau: ["", 93],
        Copenhagen: ["Europe/Berlin", 7],
        Dublin: ["", 80],
        Gibraltar: ["", 7],
        Guernsey: ["Europe/London", 92],
        Helsinki: ["", 54],
        Isle_of_Man: ["Europe/London", 92],
        Istanbul: ["", 43],
        Jersey: ["Europe/London", 92],
        Kaliningrad: ["", 5],
        Kiev: ["Europe/Kyiv", 65],
        Kirov: ["", 43],
        Kyiv: ["", 65],
        Lisbon: ["", 94],
        Ljubljana: ["Europe/Belgrade", 7],
        London: ["", 92],
        Luxembourg: ["Europe/Brussels", 7],
        Madrid: ["", 7],
        Malta: ["", 7],
        Mariehamn: ["Europe/Helsinki", 54],
        Minsk: ["", 43],
        Monaco: ["Europe/Paris", 7],
        Moscow: ["", 95],
        Nicosia: ["Asia/Nicosia", 65],
        Oslo: ["Europe/Berlin", 7],
        Paris: ["", 7],
        Podgorica: ["Europe/Belgrade", 7],
        Prague: ["", 7],
        Riga: ["", 54],
        Rome: ["", 7],
        Samara: ["", 47],
        San_Marino: ["Europe/Rome", 7],
        Sarajevo: ["Europe/Belgrade", 7],
        Saratov: ["", 47],
        Simferopol: ["", 95],
        Skopje: ["Europe/Belgrade", 7],
        Sofia: ["", 54],
        Stockholm: ["Europe/Berlin", 7],
        Tallinn: ["", 54],
        Tirane: ["", 7],
        Tiraspol: ["Europe/Chisinau", 93],
        Ulyanovsk: ["", 47],
        Uzhgorod: ["Europe/Kyiv", 65],
        Vaduz: ["Europe/Zurich", 7],
        Vatican: ["Europe/Rome", 7],
        Vienna: ["", 7],
        Vilnius: ["", 54],
        Volgograd: ["", 43],
        Warsaw: ["", 7],
        Zagreb: ["Europe/Belgrade", 7],
        Zaporozhye: ["Europe/Kyiv", 65],
        Zurich: ["", 7]
    },
    "GB-Eire": ["Europe/London", 92],
    GB: ["Europe/London", 92],
    "GMT-0": ["Etc/GMT", 0],
    GMT: ["Etc/GMT", 0],
    "GMT+0": ["Etc/GMT", 0],
    GMT0: ["Etc/GMT", 0],
    Greenwich: ["Etc/GMT", 0],
    Hongkong: ["Asia/Hong_Kong", 56],
    HST: ["", 96],
    Iceland: ["Africa/Abidjan", 0],
    Indian: {
        Antananarivo: ["Africa/Nairobi", 1],
        Chagos: ["", 45],
        Christmas: ["Asia/Bangkok", 38],
        Cocos: ["Asia/Yangon", 67],
        Comoro: ["Africa/Nairobi", 1],
        Kerguelen: ["Indian/Maldives", 41],
        Mahe: ["Asia/Dubai", 47],
        Maldives: ["", 41],
        Mauritius: ["", 47],
        Mayotte: ["Africa/Nairobi", 1],
        Reunion: ["Asia/Dubai", 47]
    },
    Iran: ["Asia/Tehran", 68],
    Israel: ["Asia/Jerusalem", 59],
    Jamaica: ["America/Jamaica", 14],
    Japan: ["Asia/Tokyo", 69],
    Kwajalein: ["Pacific/Kwajalein", 46],
    Libya: ["Africa/Tripoli", 5],
    MET: ["", 97],
    Mexico: {
        BajaNorte: ["America/Tijuana", 24],
        BajaSur: ["America/Mazatlan", 21],
        General: ["America/Mexico_City", 30]
    },
    MST: ["", 22],
    MST7MDT: ["", 19],
    Navajo: ["America/Denver", 19],
    "NZ-CHAT": ["Pacific/Chatham", 98],
    NZ: ["Pacific/Auckland", 42],
    Pacific: {
        Apia: ["", 81],
        Auckland: ["", 42],
        Bougainville: ["", 37],
        Chatham: ["", 98],
        Chuuk: ["Pacific/Port_Moresby", 39],
        Easter: ["", 79],
        Efate: ["", 37],
        Enderbury: ["Pacific/Kanton", 81],
        Fakaofo: ["", 81],
        Fiji: ["", 99],
        Funafuti: ["Pacific/Tarawa", 46],
        Galapagos: ["", 87],
        Gambier: ["", 90],
        Guadalcanal: ["", 37],
        Guam: ["", 100],
        Honolulu: ["", 96],
        Johnston: ["Pacific/Honolulu", 96],
        Kanton: ["", 81],
        Kiritimati: ["", 82],
        Kosrae: ["", 37],
        Kwajalein: ["", 46],
        Majuro: ["Pacific/Tarawa", 46],
        Marquesas: ["", 101],
        Midway: ["Pacific/Pago_Pago", 102],
        Nauru: ["", 46],
        Niue: ["", 85],
        Norfolk: ["", 103],
        Noumea: ["", 37],
        Pago_Pago: ["", 102],
        Palau: ["", 51],
        Pitcairn: ["", 89],
        Pohnpei: ["Pacific/Guadalcanal", 37],
        Ponape: ["Pacific/Guadalcanal", 37],
        Port_Moresby: ["", 39],
        Rarotonga: ["", 84],
        Saipan: ["Pacific/Guam", 100],
        Samoa: ["Pacific/Pago_Pago", 102],
        Tahiti: ["", 84],
        Tarawa: ["", 46],
        Tongatapu: ["", 81],
        Truk: ["Pacific/Port_Moresby", 39],
        Wake: ["Pacific/Tarawa", 46],
        Wallis: ["Pacific/Tarawa", 46],
        Yap: ["Pacific/Port_Moresby", 39]
    },
    Poland: ["Europe/Warsaw", 7],
    Portugal: ["Europe/Lisbon", 94],
    PRC: ["Asia/Shanghai", 52],
    PST8PDT: ["", 24],
    ROC: ["Asia/Taipei", 52],
    ROK: ["Asia/Seoul", 66],
    Singapore: ["Asia/Singapore", 49],
    Turkey: ["Europe/Istanbul", 43],
    UCT: ["Etc/UTC", 91],
    Universal: ["Etc/UTC", 91],
    US: {
        Alaska: ["America/Anchorage", 10],
        Aleutian: ["America/Adak", 9],
        Arizona: ["America/Phoenix", 22],
        Central: ["America/Chicago", 20],
        "East-Indiana": ["America/Indiana/Indianapolis", 23],
        Eastern: ["America/New_York", 23],
        Hawaii: ["Pacific/Honolulu", 96],
        "Indiana-Starke": ["America/Indiana/Knox", 20],
        Michigan: ["America/Detroit", 23],
        Mountain: ["America/Denver", 19],
        Pacific: ["America/Los_Angeles", 24],
        Samoa: ["Pacific/Pago_Pago", 102]
    },
    UTC: ["Etc/UTC", 91],
    "W-SU": ["Europe/Moscow", 95],
    WET: ["", 70],
    Zulu: ["Etc/UTC", 91]
}
  , tzlibZonesDetailsDB = ["20221015T115821Z<n><bs><n><tz>GMT<n><of>+0000<n><ot>+0000<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>EAT<n><of>+0300<n><ot>+0300<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>CET<n><of>+0100<n><ot>+0100<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>WAT<n><of>+0100<n><ot>+0100<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>CAT<n><of>+0200<n><ot>+0200<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>EET<n><of>+0200<n><ot>+0200<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>+01<n><of>+0100<n><ot>+0100<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>CEST<n><of>+0100<n><ot>+0200<n><s>19700329T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>CET<n><of>+0200<n><ot>+0100<n><s>19701025T030000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>SAST<n><of>+0200<n><ot>+0200<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>HDT<n><of>-1000<n><ot>-0900<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>HST<n><of>-0900<n><ot>-1000<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>", "20221015T115821Z<n><bd><n><tz>AKDT<n><of>-0900<n><ot>-0800<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>AKST<n><of>-0800<n><ot>-0900<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>AST<n><of>-0400<n><ot>-0400<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>-03<n><of>-0300<n><ot>-0300<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>-03<n><of>-0400<n><ot>-0300<n><s>19701004T000000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n><bs><n><tz>-04<n><of>-0300<n><ot>-0400<n><s>19700322T000000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=4SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>EST<n><of>-0500<n><ot>-0500<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>CST<n><of>-0500<n><ot>-0600<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n><bd><n><tz>CDT<n><of>-0600<n><ot>-0500<n><s>19700405T020000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><ed><n>", "20221015T115821Z<n><bs><n><tz>CST<n><of>-0600<n><ot>-0600<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>-04<n><of>-0400<n><ot>-0400<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>-05<n><of>-0500<n><ot>-0500<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>MDT<n><of>-0700<n><ot>-0600<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>MST<n><of>-0600<n><ot>-0700<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>", "20221015T115821Z<n><bd><n><tz>CDT<n><of>-0600<n><ot>-0500<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>CST<n><of>-0500<n><ot>-0600<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>", "20221015T115821Z<n><bd><n><tz>MDT<n><of>-0700<n><ot>-0600<n><s>19700405T020000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><ed><n><bs><n><tz>MST<n><of>-0600<n><ot>-0700<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>MST<n><of>-0700<n><ot>-0700<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>EDT<n><of>-0500<n><ot>-0400<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>EST<n><of>-0400<n><ot>-0500<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>", "20221015T115821Z<n><bd><n><tz>PDT<n><of>-0800<n><ot>-0700<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>PST<n><of>-0700<n><ot>-0800<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>", "20221015T115821Z<n><bd><n><tz>ADT<n><of>-0400<n><ot>-0300<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>AST<n><of>-0300<n><ot>-0400<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>", "20221015T115821Z<n><bd><n><tz>-02<n><of>-0300<n><ot>-0200<n><s>19700328T220000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SA<n><ed><n><bs><n><tz>-03<n><of>-0200<n><ot>-0300<n><s>19701024T230000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SA<n><es><n>", "20221015T115821Z<n><bs><n><tz>AST<n><of>-0300<n><ot>-0400<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>ADT<n><of>-0400<n><ot>-0300<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>", "20221015T115821Z<n><bs><n><tz>EST<n><of>-0400<n><ot>-0500<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>EDT<n><of>-0500<n><ot>-0400<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>", "20221015T115821Z<n><bs><n><tz>CST<n><of>-0400<n><ot>-0500<n><s>19701101T010000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>CDT<n><of>-0500<n><ot>-0400<n><s>19700308T000000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>", "20221015T115821Z<n><bd><n><tz>CDT<n><of>-0600<n><ot>-0500<n><s>19700405T020000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><ed><n><bs><n><tz>CST<n><of>-0500<n><ot>-0600<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>", "20221015T115821Z<n><bd><n><tz>-02<n><of>-0300<n><ot>-0200<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>-03<n><of>-0200<n><ot>-0300<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>-02<n><of>-0200<n><ot>-0200<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>CST<n><of>-0500<n><ot>-0600<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>CDT<n><of>-0600<n><ot>-0500<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>", "20221015T115821Z<n><bs><n><tz>-04<n><of>-0300<n><ot>-0400<n><s>19700405T000000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n><bd><n><tz>-03<n><of>-0400<n><ot>-0300<n><s>19700906T000000<n><r>FREQ=YEARLY;BYMONTH=9;BYDAY=1SU<n><ed><n>", "20221015T115821Z<n><bd><n><tz>+00<n><of>-0100<n><ot>+0000<n><s>19700329T000000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>-01<n><of>+0000<n><ot>-0100<n><s>19701025T010000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>NST<n><of>-0230<n><ot>-0330<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>NDT<n><of>-0330<n><ot>-0230<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>", "20221015T115821Z<n><bs><n><tz>+11<n><of>+1100<n><ot>+1100<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>+07<n><of>+0700<n><ot>+0700<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>+10<n><of>+1000<n><ot>+1000<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>AEST<n><of>+1100<n><ot>+1000<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n><bd><n><tz>AEDT<n><of>+1000<n><ot>+1100<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n>", "20221015T115821Z<n><bs><n><tz>+05<n><of>+0500<n><ot>+0500<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>NZDT<n><of>+1200<n><ot>+1300<n><s>19700927T020000<n><r>FREQ=YEARLY;BYMONTH=9;BYDAY=-1SU<n><ed><n><bs><n><tz>NZST<n><of>+1300<n><ot>+1200<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>+03<n><of>+0300<n><ot>+0300<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>+02<n><of>+0000<n><ot>+0200<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>+00<n><of>+0200<n><ot>+0000<n><s>19701025T030000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>+06<n><of>+0600<n><ot>+0600<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>+12<n><of>+1200<n><ot>+1200<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>+04<n><of>+0400<n><ot>+0400<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700329T000000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701025T000000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>+08<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>IST<n><of>+0530<n><ot>+0530<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>+09<n><of>+0900<n><ot>+0900<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>CST<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>+0530<n><of>+0530<n><ot>+0530<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700329T030000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701025T040000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701024T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SA<n><es><n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700328T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SA<n><ed><n>", "20221015T115821Z<n><bs><n><tz>HKT<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>WIB<n><of>+0700<n><ot>+0700<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>WIT<n><of>+0900<n><ot>+0900<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>IDT<n><of>+0200<n><ot>+0300<n><s>19700327T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1FR<n><ed><n><bs><n><tz>IST<n><of>+0300<n><ot>+0200<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>+0430<n><of>+0430<n><ot>+0430<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>PKT<n><of>+0500<n><ot>+0500<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>+0545<n><of>+0545<n><ot>+0545<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>WITA<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>PST<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701025T040000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700329T030000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n>", "20221015T115821Z<n><bs><n><tz>KST<n><of>+0900<n><ot>+0900<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>+0630<n><of>+0630<n><ot>+0630<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>+0330<n><of>+0330<n><ot>+0330<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>JST<n><of>+0900<n><ot>+0900<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>WEST<n><of>+0000<n><ot>+0100<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>WET<n><of>+0100<n><ot>+0000<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>-01<n><of>-0100<n><ot>-0100<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>ACST<n><of>+1030<n><ot>+0930<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n><bd><n><tz>ACDT<n><of>+0930<n><ot>+1030<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n>", "20221015T115821Z<n><bs><n><tz>AEST<n><of>+1000<n><ot>+1000<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>AEDT<n><of>+1000<n><ot>+1100<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n><bs><n><tz>AEST<n><of>+1100<n><ot>+1000<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>ACST<n><of>+0930<n><ot>+0930<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>+0845<n><of>+0845<n><ot>+0845<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>+1030<n><of>+1100<n><ot>+1030<n><s>19700405T020000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n><bd><n><tz>+11<n><of>+1030<n><ot>+1100<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n>", "20221015T115821Z<n><bs><n><tz>AWST<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>-06<n><of>-0500<n><ot>-0600<n><s>19700404T220000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SA<n><es><n><bd><n><tz>-05<n><of>-0600<n><ot>-0500<n><s>19700905T220000<n><r>FREQ=YEARLY;BYMONTH=9;BYDAY=1SA<n><ed><n>", "20221015T115821Z<n><bs><n><tz>IST<n><of>+0000<n><ot>+0100<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><es><n><bd><n><tz>GMT<n><of>+0100<n><ot>+0000<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><ed><n>", "20221015T115821Z<n><bs><n><tz>+13<n><of>+1300<n><ot>+1300<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>+14<n><of>+1400<n><ot>+1400<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>+02<n><of>+0200<n><ot>+0200<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>-10<n><of>-1000<n><ot>-1000<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>-11<n><of>-1100<n><ot>-1100<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>-12<n><of>-1200<n><ot>-1200<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>-06<n><of>-0600<n><ot>-0600<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>-07<n><of>-0700<n><ot>-0700<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>-08<n><of>-0800<n><ot>-0800<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>-09<n><of>-0900<n><ot>-0900<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>UTC<n><of>+0000<n><ot>+0000<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>BST<n><of>+0000<n><ot>+0100<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>GMT<n><of>+0100<n><ot>+0000<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>", "20221015T115821Z<n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700329T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701025T030000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>WET<n><of>+0100<n><ot>+0000<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n><bd><n><tz>WEST<n><of>+0000<n><ot>+0100<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n>", "20221015T115821Z<n><bs><n><tz>MSK<n><of>+0300<n><ot>+0300<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>HST<n><of>-1000<n><ot>-1000<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>MEST<n><of>+0100<n><ot>+0200<n><s>19700329T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>MET<n><of>+0200<n><ot>+0100<n><s>19701025T030000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>", "20221015T115821Z<n><bd><n><tz>+1345<n><of>+1245<n><ot>+1345<n><s>19700927T024500<n><r>FREQ=YEARLY;BYMONTH=9;BYDAY=-1SU<n><ed><n><bs><n><tz>+1245<n><of>+1345<n><ot>+1245<n><s>19700405T034500<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n>", "20221015T115821Z<n><bd><n><tz>+13<n><of>+1200<n><ot>+1300<n><s>19701108T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=2SU<n><ed><n><bs><n><tz>+12<n><of>+1300<n><ot>+1200<n><s>19700118T030000<n><r>FREQ=YEARLY;BYMONTH=1;BYDAY=-2SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>ChST<n><of>+1000<n><ot>+1000<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>-0930<n><of>-0930<n><ot>-0930<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>SST<n><of>-1100<n><ot>-1100<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>+12<n><of>+1100<n><ot>+1200<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n><bs><n><tz>+11<n><of>+1200<n><ot>+1100<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n>"];
function tzlib_get_content(e) {
    e = e.split("/");
    return (3 !== e.length || tzlibZonesDB["" + e[0]] && tzlibZonesDB["" + e[0]]["" + e[1]] && tzlibZonesDB["" + e[0]]["" + e[1]]["" + e[2]]) && (2 !== e.length || tzlibZonesDB["" + e[0]] && tzlibZonesDB["" + e[0]]["" + e[1]]) && (1 !== e.length || tzlibZonesDB["" + e[0]]) ? 3 === e.length ? [tzlibZonesDB["" + e[0]]["" + e[1]]["" + e[2]][0], tzlib_enrich_data(tzlibZonesDetailsDB[tzlibZonesDB["" + e[0]]["" + e[1]]["" + e[2]][1]])] : 2 === e.length ? [tzlibZonesDB["" + e[0]]["" + e[1]][0], tzlib_enrich_data(tzlibZonesDetailsDB[tzlibZonesDB["" + e[0]]["" + e[1]][1]])] : [tzlibZonesDB["" + e[0]][0], tzlib_enrich_data(tzlibZonesDetailsDB[tzlibZonesDB["" + e[0]][1]])] : (console.error("Given timezone not valid."),
    "")
}
function tzlib_enrich_data(e) {
    var a, t;
    for ([a,t] of Object.entries({
        "<br>": "<n>",
        "TZNAME:": "<tz>",
        "TZOFFSETFROM:": "<of>",
        "TZOFFSETTO:": "<ot>",
        "DTSTART:": "<s>",
        "RRULE:": "<r>",
        "BEGIN:DAYLIGHT": "<bd>",
        "END:DAYLIGHT": "<ed>",
        "BEGIN:STANDARD": "<bs>",
        "END:STANDARD": "<es>"
    }))
        e = e.replaceAll(t, a);
    return e
}
function tzlib_get_ical_block(e, a=!1) {
    const t = tzlib_get_content(e);
    var n;
    return null == t[1] || "" == t[1] ? "" : (n = "TZID=" + (e = "" == t[0] ? e : t[0]),
    e = ["BEGIN:VTIMEZONE\r\nTZID:" + e + "\r\nX-LIC-LOCATION:" + e + "\r\nLAST-MODIFIED:" + t[1].replace(/[^\w_\-:,;=+/<br>]/g, "").replace(/<br>/g, "\r\n") + "END:VTIMEZONE", n],
    a ? JSON.stringify(e) : e)
}
function tzlib_get_offset(e, a, t) {
    e = tzlib_get_content(e);
    if (null == e[1] || "" == e[1])
        return "";
    if (!a.match(/^\d{4}-\d{2}-\d{2}$/))
        return console.error("offset calculation failed: date misspelled [-> YYYY-MM-DD]"),
        "";
    if (!t.match(/^\d{2}:\d{2}$/))
        return console.error("offset calculation failed: time misspelled [-> hh:mm]"),
        "";
    if (!e[1].match(/BEGIN:DAYLIGHT/i))
        return e[1].match(/TZOFFSETTO:([+|-]\d{4})/i)[1];
    a = new Date(a + "T" + t + ":00"),
    t = a.getFullYear();
    const n = a.getMonth() + 1;
    var o, i, l = a.getDate(), a = a.getHours(), r = e[1].replace(/[^\w_\-:,;=+/<br>]/g, "").split("<br>");
    const s = {
        1: {},
        2: {}
    };
    let c = 0;
    for (let e = 0; e < r.length; e++)
        r["" + e].startsWith("TZOFFSETTO") && (c++,
        s["" + c].offset = r["" + e].split(":")[1]),
        r["" + e].startsWith("DTSTART") && (s["" + c].hour = parseInt(r["" + e].substr(17, 2))),
        r["" + e].startsWith("RRULE") && (o = r["" + e].split(";"),
        i = parseInt(o[1].split("=")[1]),
        s["" + c].month = parseInt(i),
        s["" + c].day = o[2].split("=")[1]);
    if (s[1].month > s[2].month && ([s[1],s[2]] = [s[2], s[1]]),
    n != s[1].month && n != s[2].month)
        return (n < s[1].month || n > s[2].month ? s[2] : s[1]).offset;
    const d = Object.keys(s).find(e=>s["" + e].month == n);
    var u = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"]
      , m = new Date(t,n,0).getDate();
    let b = new Date(t,n - 1,1).getDay();
    const p = {
        SU: {},
        MO: {},
        TU: {},
        WE: {},
        TH: {},
        FR: {},
        SA: {}
    };
    for (let e = 1; e <= m; e++) {
        var h = Object.keys(p[u["" + b]]).length + 1;
        p[u["" + b]]["" + h] = e,
        7 == ++b && (b = 0)
    }
    var g, t = "-" == s["" + d].day[0] ? (g = s["" + d].day.substr(2, 2),
    e = Object.keys(p["" + g]).length + 1 - parseInt(s["" + d].day[1]),
    p["" + g]["" + e]) : (g = s["" + d].day.substr(1, 2),
    p["" + g][s["" + d].day[0]]);
    return (t < l || l == t && a >= s["" + d].hour ? s["" + d] : (e = 1 == d ? 2 : 1,
    s["" + e])).offset
}
let tzlibZoneNames = [];
function tzlib_get_timezones(e=!1) {
    return 0 == tzlibZoneNames.length && (tzlibZoneNames = function() {
        var e, a, t = [];
        for ([e,a] of Object.entries(tzlibZonesDB))
            if ("object" != typeof a || Array.isArray(a))
                t.push(e);
            else
                for (var [n,o] of Object.entries(a))
                    if ("object" != typeof o || Array.isArray(o))
                        t.push(e + "/" + n);
                    else
                        for (var [i] of Object.entries(o))
                            t.push(e + "/" + n + "/" + i);
        return t
    }()),
    e ? JSON.stringify(tzlibZoneNames) : tzlibZoneNames
}
/*!
 *  @preserve
 *
 *  ++++++++++++++++++++++
 *  Add to Calendar Button
 *  ++++++++++++++++++++++
 *
 *  Version: 1.18.7
 *  Creator: Jens Kuerschner (https://jenskuerschner.de)
 *  Project: https://github.com/add2cal/add-to-calendar-button
 *  License: Apache-2.0 with â€œCommons Clauseâ€ License Condition v1.0
 *  Note:    DO NOT REMOVE THE COPYRIGHT NOTICE ABOVE!
 *
 */
const atcbVersion = "1.18.7"
  , isBrowser = ()=>"undefined" != typeof window
  , isiOS = isBrowser() ? ()=>!!(/iPad|iPhone|iPod/i.test(navigator.userAgent || navigator.vendor || window.opera) && !window.MSStream || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints) : ()=>!1
  , isAndroid = isBrowser() ? ()=>!(!/android/i.test(navigator.userAgent || navigator.vendor || window.opera) || window.MSStream) : ()=>!1
  , isChrome = isBrowser() ? ()=>!!/chrome|chromium|crios|google inc/i.test(navigator.userAgent || navigator.vendor) : ()=>!1
  , isMobile = ()=>!(!isAndroid() && !isiOS())
  , isWebView = isBrowser() ? ()=>!!/(; ?wv|(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari))/i.test(navigator.userAgent || navigator.vendor) : ()=>!1
  , isProblematicWebView = isBrowser() ? ()=>!!/(Instagram)/i.test(navigator.userAgent || navigator.vendor || window.opera) : ()=>!1
  , atcbDefaultTarget = isWebView() ? "_system" : "_blank"
  , atcbOptions = ["apple", "google", "ical", "ms365", "outlookcom", "msteams", "yahoo"]
  , atcbValidRecurrOptions = ["apple", "google", "ical"]
  , atcbInvalidSubscribeOptions = ["msteams"]
  , atcbiOSInvalidOptions = ["ical"]
  , atcbStates = []
  , atcbIcon = {
    trigger: '<span class="atcb-icon-trigger"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200.016"><path d="M132.829 7.699c0-4.248 4.199-7.699 9.391-7.699s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zm-5.941 123.747c2.979 0 5.404 2.425 5.404 5.404s-2.425 5.404-5.404 5.404l-21.077-.065-.065 21.045c0 2.979-2.425 5.404-5.404 5.404s-5.404-2.425-5.404-5.404l.065-21.061-21.045-.081c-2.979 0-5.404-2.425-5.404-5.404s2.425-5.404 5.404-5.404l21.061.065.065-21.045c0-2.979 2.425-5.404 5.404-5.404s5.404 2.425 5.404 5.404l-.065 21.077 21.061.065zM48.193 7.699C48.193 3.451 52.393 0 57.585 0s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zM10.417 73.763h179.167V34.945c0-1.302-.537-2.49-1.4-3.369-.863-.863-2.051-1.4-3.369-1.4h-17.171c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h17.171c4.183 0 7.975 1.709 10.726 4.46S200 30.762 200 34.945v44.043 105.843c0 4.183-1.709 7.975-4.46 10.726s-6.543 4.46-10.726 4.46H15.186c-4.183 0-7.975-1.709-10.726-4.46C1.709 192.79 0 188.997 0 184.814V78.988 34.945c0-4.183 1.709-7.975 4.46-10.726s6.543-4.46 10.726-4.46h18.343c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208H15.186c-1.302 0-2.49.537-3.369 1.4-.863.863-1.4 2.051-1.4 3.369zm179.167 10.433H10.417v100.618c0 1.302.537 2.49 1.4 3.369.863.863 2.051 1.4 3.369 1.4h169.629c1.302 0 2.49-.537 3.369-1.4.863-.863 1.4-2.051 1.4-3.369zM82.08 30.176c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h34.977c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208z"/></svg></span>',
    apple: '<span class="atcb-icon-apple"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 245.657"><path d="M167.084 130.514c-.308-31.099 25.364-46.022 26.511-46.761-14.429-21.107-36.91-24.008-44.921-24.335-19.13-1.931-37.323 11.27-47.042 11.27-9.692 0-24.67-10.98-40.532-10.689-20.849.308-40.07 12.126-50.818 30.799-21.661 37.581-5.54 93.281 15.572 123.754 10.313 14.923 22.612 31.688 38.764 31.089 15.549-.612 21.433-10.073 40.242-10.073s24.086 10.073 40.546 9.751c16.737-.308 27.34-15.214 37.585-30.187 11.855-17.318 16.714-34.064 17.009-34.925-.372-.168-32.635-12.525-32.962-49.68l.045-.013zm-30.917-91.287C144.735 28.832 150.524 14.402 148.942 0c-12.344.503-27.313 8.228-36.176 18.609-7.956 9.216-14.906 23.904-13.047 38.011 13.786 1.075 27.862-7.004 36.434-17.376z"/></svg></span>',
    google: '<span class="atcb-icon-google"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="M152.637 47.363H47.363v105.273h105.273z" fill="#fff"/><path d="M152.637 200L200 152.637h-47.363z" fill="#f72a25"/><path d="M200 47.363h-47.363v105.273H200z" fill="#fbbc04"/><path d="M152.637 152.637H47.363V200h105.273z" fill="#34a853"/><path d="M0 152.637v31.576A15.788 15.788 0 0 0 15.788 200h31.576v-47.363z" fill="#188038"/><path d="M200 47.363V15.788A15.79 15.79 0 0 0 184.212 0h-31.575v47.363z" fill="#1967d2"/><path d="M15.788 0A15.79 15.79 0 0 0 0 15.788v136.849h47.363V47.363h105.274V0z" fill="#4285f4"/><path d="M68.962 129.02c-3.939-2.653-6.657-6.543-8.138-11.67l9.131-3.76c.83 3.158 2.279 5.599 4.346 7.341 2.051 1.742 4.557 2.588 7.471 2.588 2.995 0 5.55-.911 7.699-2.718 2.148-1.823 3.223-4.134 3.223-6.934 0-2.865-1.139-5.208-3.402-7.031s-5.111-2.718-8.496-2.718h-5.273v-9.033h4.736c2.913 0 5.387-.781 7.389-2.376 2.002-1.579 2.995-3.743 2.995-6.494 0-2.441-.895-4.395-2.686-5.859s-4.053-2.197-6.803-2.197c-2.686 0-4.818.716-6.396 2.148s-2.767 3.255-3.451 5.273l-9.033-3.76c1.204-3.402 3.402-6.396 6.624-8.984s7.34-3.89 12.337-3.89c3.695 0 7.031.716 9.977 2.148s5.257 3.418 6.934 5.941c1.676 2.539 2.507 5.387 2.507 8.545 0 3.223-.781 5.941-2.327 8.187-1.546 2.23-3.467 3.955-5.729 5.143v.537a17.39 17.39 0 0 1 7.34 5.729c1.904 2.572 2.865 5.632 2.865 9.212s-.911 6.771-2.718 9.57c-1.823 2.799-4.329 5.013-7.52 6.624s-6.787 2.425-10.775 2.425c-4.622 0-8.887-1.318-12.826-3.988zm56.087-45.312l-10.026 7.243-5.013-7.601 17.985-12.972h6.901v61.198h-9.847z" fill="#1a73e8"/></svg></span>',
    ical: '<span class="atcb-icon-ical"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200.016"><path d="M132.829 7.699c0-4.248 4.199-7.699 9.391-7.699s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zm-25.228 161.263c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm-81.803-59.766c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.918 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zM25.798 139.079c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.918 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zM25.798 168.962c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zM48.193 7.699C48.193 3.451 52.393 0 57.585 0s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zM10.417 73.763h179.15V34.945c0-1.302-.537-2.49-1.4-3.369-.863-.863-2.051-1.4-3.369-1.4h-17.155c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h17.171c4.183 0 7.975 1.709 10.726 4.46S200 30.762 200 34.945v44.043 105.843c0 4.183-1.709 7.975-4.46 10.726s-6.543 4.46-10.726 4.46H15.186c-4.183 0-7.975-1.709-10.726-4.46C1.709 192.79 0 188.997 0 184.814V78.971 34.945c0-4.183 1.709-7.975 4.46-10.726s6.543-4.46 10.726-4.46h18.343c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208H15.186c-1.302 0-2.49.537-3.369 1.4-.863.863-1.4 2.051-1.4 3.369zm179.167 10.433H10.417v100.618c0 1.302.537 2.49 1.4 3.369.863.863 2.051 1.4 3.369 1.4h169.629c1.302 0 2.49-.537 3.369-1.4.863-.863 1.4-2.051 1.4-3.369zM82.08 30.176c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h34.977c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208z"/></svg></span>',
    msteams: '<span class="atcb-icon-msteams"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 186.047"><path d="M195.349 39.535a20.93 20.93 0 1 1-41.86 0 20.93 20.93 0 1 1 41.86 0zm-55.847 30.233h51.66A8.84 8.84 0 0 1 200 78.605v47.056c0 17.938-14.541 32.479-32.479 32.479h0-.154c-17.938.003-32.481-14.537-32.484-32.474v-.005-51.274a4.62 4.62 0 0 1 4.619-4.619z" fill="#5059c9"/><path d="M149.614 69.767H64.34c-4.823.119-8.637 4.122-8.526 8.944v53.67c-.673 28.941 22.223 52.957 51.163 53.665 28.94-.708 51.836-24.725 51.163-53.665v-53.67c.112-4.823-3.703-8.825-8.526-8.944zm-10.079-39.535a30.233 30.233 0 0 1-60.465 0 30.233 30.233 0 0 1 60.465 0z" fill="#7b83eb"/><path opacity=".1" d="M111.628 69.767v75.209c-.023 3.449-2.113 6.547-5.302 7.86-1.015.43-2.107.651-3.209.651H59.907l-1.628-4.651c-1.628-5.337-2.459-10.885-2.465-16.465V78.698c-.112-4.815 3.697-8.811 8.512-8.93z"/><path opacity=".2" d="M106.977 69.767v79.86a8.241 8.241 0 0 1-.651 3.209c-1.313 3.189-4.412 5.279-7.86 5.302H62.093l-2.186-4.651a46.13 46.13 0 0 1-1.628-4.651 56.647 56.647 0 0 1-2.465-16.465V78.698c-.112-4.815 3.697-8.811 8.512-8.93z"/><path opacity=".2" d="M102.326 69.767v70.558a8.58 8.58 0 0 1-8.512 8.512H58.279a56.647 56.647 0 0 1-2.465-16.465V78.698c-.112-4.815 3.697-8.811 8.512-8.93z"/><path opacity=".1" d="M111.628 45.721v14.651l-2.326.093c-.791 0-1.535-.046-2.326-.093-1.57-.104-3.127-.353-4.651-.744a30.233 30.233 0 0 1-20.93-17.767 25.845 25.845 0 0 1-1.488-4.651h23.209c4.693.018 8.494 3.818 8.512 8.512z"/><use xlink:href="#B" opacity=".2" transform="scale(.08973306)"/><path d="M106.977 50.372v10c-1.57-.104-3.127-.353-4.651-.744a30.233 30.233 0 0 1-20.93-17.767h17.07c4.693.018 8.494 3.818 8.512 8.512zm0 19.395v70.558a8.58 8.58 0 0 1-8.512 8.512H58.279a56.647 56.647 0 0 1-2.465-16.465V78.698c-.112-4.815 3.697-8.811 8.512-8.93z" opacity=".2"/><path opacity=".2" d="M102.326 50.372v9.256a30.233 30.233 0 0 1-20.93-17.767h12.419c4.693.018 8.494 3.818 8.512 8.512z"/><linearGradient id="A" gradientUnits="userSpaceOnUse" x1="17.776" y1="35.199" x2="84.55" y2="150.848"><stop offset="0" stop-color="#5a62c3"/><stop offset=".5" stop-color="#4d55bd"/><stop offset="1" stop-color="#3940ab"/></linearGradient><path fill="url(#A)" d="M8.526 41.86H93.8a8.53 8.53 0 0 1 8.526 8.526v85.274a8.53 8.53 0 0 1-8.526 8.526H8.526A8.53 8.53 0 0 1 0 135.66V50.386a8.53 8.53 0 0 1 8.526-8.526z"/><path fill="#fff" d="M73.6 74.316H56.553v46.419h-10.86V74.316H28.726v-9.005H73.6z"/><defs><path id="B" d="M1192.167 561.355v111.442c-17.496-1.161-34.848-3.937-51.833-8.293a336.92 336.92 0 0 1-233.25-198.003h190.228c52.304.198 94.656 42.55 94.855 94.854z"/></defs></svg></span>',
    ms365: '<span class="atcb-icon-ms365"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 239.766"><path d="M200 219.785l-.021-.012V20.591L128.615 0 .322 48.172 0 48.234.016 192.257l43.78-17.134V57.943l84.819-20.279-.012 172.285L.088 192.257l128.515 47.456v.053l71.376-19.753v-.227z"/></svg></span>',
    outlookcom: '<span class="atcb-icon-outlookcom"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 175"><path d="M178.725 0H71.275A8.775 8.775 0 0 0 62.5 8.775v9.975l60.563 18.75L187.5 18.75V8.775A8.775 8.775 0 0 0 178.725 0z" fill="#0364b8"/><path d="M197.813 96.281c.915-2.878 2.187-5.855 2.187-8.781-.002-1.485-.795-2.857-1.491-3.26l-68.434-38.99a9.37 9.37 0 0 0-9.244-.519c-.312.154-.614.325-.906.512l-67.737 38.6-.025.013-.075.044a4.16 4.16 0 0 0-2.088 3.6c.541 2.971 1.272 5.904 2.188 8.781l71.825 52.532z" fill="#0a2767"/><path d="M150 18.75h-43.75L93.619 37.5l12.631 18.75L150 93.75h37.5v-37.5z" fill="#28a8ea"/><path d="M150 18.75h37.5v37.5H150z" fill="#50d9ff"/><path d="M150 93.75l-43.75-37.5H62.5v37.5l43.75 37.5 67.7 11.05z" fill="#0364b8"/><path d="M106.25 56.25v37.5H150v-37.5zM150 93.75v37.5h37.5v-37.5zm-87.5-75h43.75v37.5H62.5z" fill="#0078d4"/><path d="M62.5 93.75h43.75v37.5H62.5z" fill="#064a8c"/><path d="M126.188 145.113l-73.706-53.75 3.094-5.438 68.181 38.825a3.3 3.3 0 0 0 2.625-.075l68.331-38.937 3.1 5.431z" fill="#0a2767" opacity=".5"/><path d="M197.919 91.106l-.088.05-.019.013-67.738 38.588c-2.736 1.764-6.192 1.979-9.125.569l23.588 31.631 51.588 11.257v-.001c2.434-1.761 3.876-4.583 3.875-7.587V87.5c.001 1.488-.793 2.862-2.081 3.606z" fill="#1490df"/><path d="M200 165.625v-4.613l-62.394-35.55-7.531 4.294a9.356 9.356 0 0 1-9.125.569l23.588 31.631 51.588 11.231v.025a9.362 9.362 0 0 0 3.875-7.588z" opacity=".05"/><path d="M199.688 168.019l-68.394-38.956-1.219.688c-2.734 1.766-6.19 1.984-9.125.575l23.588 31.631 51.587 11.256v.001a9.38 9.38 0 0 0 3.562-5.187z" opacity=".1"/><path d="M51.455 90.721c-.733-.467-1.468-1.795-1.455-3.221v78.125c-.007 5.181 4.194 9.382 9.375 9.375h131.25c1.395-.015 2.614-.366 3.813-.813.638-.258 1.252-.652 1.687-.974z" fill="#28a8ea"/><path d="M112.5 141.669V39.581a8.356 8.356 0 0 0-8.331-8.331H62.687v46.6l-10.5 5.987-.031.012-.075.044A4.162 4.162 0 0 0 50 87.5v.031-.031V150h54.169a8.356 8.356 0 0 0 8.331-8.331z" opacity=".1"/><path d="M106.25 147.919V45.831a8.356 8.356 0 0 0-8.331-8.331H62.687v40.35l-10.5 5.987-.031.012-.075.044A4.162 4.162 0 0 0 50 87.5v.031-.031 68.75h47.919a8.356 8.356 0 0 0 8.331-8.331z" opacity=".2"/><path d="M106.25 135.419V45.831a8.356 8.356 0 0 0-8.331-8.331H62.687v40.35l-10.5 5.987-.031.012-.075.044A4.162 4.162 0 0 0 50 87.5v.031-.031 56.25h47.919a8.356 8.356 0 0 0 8.331-8.331z" opacity=".2"/><path d="M100 135.419V45.831a8.356 8.356 0 0 0-8.331-8.331H62.687v40.35l-10.5 5.987-.031.012-.075.044A4.162 4.162 0 0 0 50 87.5v.031-.031 56.25h41.669a8.356 8.356 0 0 0 8.331-8.331z" opacity=".2"/><path d="M8.331 37.5h83.337A8.331 8.331 0 0 1 100 45.831v83.338a8.331 8.331 0 0 1-8.331 8.331H8.331A8.331 8.331 0 0 1 0 129.169V45.831A8.331 8.331 0 0 1 8.331 37.5z" fill="#0078d4"/><path d="M24.169 71.675a26.131 26.131 0 0 1 10.263-11.337 31.031 31.031 0 0 1 16.313-4.087 28.856 28.856 0 0 1 15.081 3.875 25.875 25.875 0 0 1 9.988 10.831 34.981 34.981 0 0 1 3.5 15.938 36.881 36.881 0 0 1-3.606 16.662 26.494 26.494 0 0 1-10.281 11.213 30 30 0 0 1-15.656 3.981 29.556 29.556 0 0 1-15.425-3.919 26.275 26.275 0 0 1-10.112-10.85 34.119 34.119 0 0 1-3.544-15.744 37.844 37.844 0 0 1 3.481-16.563zm10.938 26.613a16.975 16.975 0 0 0 5.769 7.463 15.069 15.069 0 0 0 9.019 2.719 15.831 15.831 0 0 0 9.631-2.806 16.269 16.269 0 0 0 5.606-7.481 28.913 28.913 0 0 0 1.787-10.406 31.644 31.644 0 0 0-1.687-10.538 16.681 16.681 0 0 0-5.413-7.75 14.919 14.919 0 0 0-9.544-2.956 15.581 15.581 0 0 0-9.231 2.744 17.131 17.131 0 0 0-5.9 7.519 29.85 29.85 0 0 0-.044 21.5z" fill="#fff"/></svg></span>',
    yahoo: '<span class="atcb-icon-yahoo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 177.803"><path d="M0 43.284h38.144l22.211 56.822 22.5-56.822h37.135L64.071 177.803H26.694l15.308-35.645L.001 43.284zm163.235 45.403H121.64L158.558 0 200 .002zm-30.699 8.488c12.762 0 23.108 10.346 23.108 23.106s-10.345 23.106-23.108 23.106a23.11 23.11 0 0 1-23.104-23.106 23.11 23.11 0 0 1 23.104-23.106z"/></svg></span>',
    atcb: '<svg version="1.1" viewBox="0 0 150 8.5002" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="matrix(1.3333 0 0 -1.3333 -2427.5 1757.9)"><g transform="matrix(.22189 0 0 -.22189 1822.6 1374.6)" fill="#9a9a9a" style="paint-order:stroke markers fill;shape-inside:url(#rect2441);white-space:pre" aria-label="Add-to-Calendar-PRO.com"><path d="m-1.2773 253.99h12.148l7.9688 27.5h-9.4141l-1.0547-5.2734h-7.1094l-1.1328 5.2734h-9.0234zm8.7109 17.305-2.6172-12.031-2.6953 12.031z" style="paint-order:stroke markers fill"/><path d="m29.66 261.16q2.2656 0 3.9062 0.9375t2.6562 3.1055v-10.078l8.4375-1.25v27.617h-8.4375v-3.7109q-0.9375 2.0117-2.5586 3.0273-1.6211 0.9961-4.043 0.9961-2.0898 0-3.8672-0.83985-1.7773-0.85937-3.0859-2.2852-1.2891-1.4258-2.0312-3.2812-0.74219-1.875-0.74219-3.9062 0-2.1875 0.78125-4.082 0.80078-1.8945 2.1484-3.2812 1.3477-1.3867 3.1055-2.168 1.7773-0.80078 3.7305-0.80078zm6.5625 10.176q-0.03906-0.78125-0.37109-1.4844-0.33203-0.70312-0.87891-1.2109-0.52734-0.52735-1.2305-0.82032-0.70312-0.3125-1.4648-0.3125-0.85938 0-1.6016 0.33203-0.72266 0.3125-1.25 0.85938-0.52734 0.54687-0.83984 1.2695-0.29297 0.72266-0.29297 1.5234 0 0.85937 0.3125 1.582 0.33203 0.72266 0.87891 1.2695 0.54688 0.52734 1.2695 0.83984 0.72266 0.29297 1.5234 0.29297 0.83984 0 1.5625-0.33203 0.72266-0.33203 1.25-0.8789 0.52734-0.54688 0.82031-1.2695 0.3125-0.72265 0.3125-1.5039z" style="paint-order:stroke markers fill"/><path d="m57.551 261.16q2.2656 0 3.9062 0.9375t2.6562 3.1055v-10.078l8.4375-1.25v27.617h-8.4375v-3.7109q-0.9375 2.0117-2.5586 3.0273-1.6211 0.9961-4.043 0.9961-2.0898 0-3.8672-0.83985-1.7773-0.85937-3.0859-2.2852-1.2891-1.4258-2.0312-3.2812-0.74219-1.875-0.74219-3.9062 0-2.1875 0.78125-4.082 0.80078-1.8945 2.1484-3.2812 1.3477-1.3867 3.1055-2.168 1.7773-0.80078 3.7305-0.80078zm6.5625 10.176q-0.03906-0.78125-0.37109-1.4844-0.33203-0.70312-0.87891-1.2109-0.52734-0.52735-1.2305-0.82032-0.70312-0.3125-1.4648-0.3125-0.85938 0-1.6016 0.33203-0.72266 0.3125-1.25 0.85938-0.52734 0.54687-0.83984 1.2695-0.29297 0.72266-0.29297 1.5234 0 0.85937 0.3125 1.582 0.33203 0.72266 0.87891 1.2695 0.54688 0.52734 1.2695 0.83984 0.72266 0.29297 1.5234 0.29297 0.83984 0 1.5625-0.33203 0.72266-0.33203 1.25-0.8789 0.52734-0.54688 0.82031-1.2695 0.3125-0.72265 0.3125-1.5039z" style="paint-order:stroke markers fill"/><path d="m76.496 268.8h10.742v4.7266h-10.742z" style="paint-order:stroke markers fill"/><path d="m104.8 280.44q-2.7148 1.3672-6.0156 1.3672-1.6992 0-3.0273-0.54688-1.3281-0.5664-2.2461-1.6016-0.89844-1.0547-1.3672-2.5195-0.46875-1.4844-0.46875-3.3398l0.03906-7.3828h-2.5391v-4.9609h3.1641l3.7109-7.5781h4.0625v7.5781h4.6094v4.9609h-4.6094v6.7969q0 1.0547 0.68359 1.582t1.8555 0.52734q0.91797 0 1.8359-0.46875z" style="paint-order:stroke markers fill"/><path d="m114.62 271.45q0 1.0938 0.3125 1.9141 0.33204 0.82031 0.85938 1.3672 0.52734 0.54687 1.2109 0.82031 0.68359 0.27344 1.3867 0.27344 0.70312 0 1.3672-0.27344 0.6836-0.27344 1.2109-0.82031 0.54688-0.54688 0.85938-1.3672 0.33203-0.82031 0.33203-1.9141t-0.33203-1.9141q-0.3125-0.82031-0.85938-1.3476-0.52734-0.54688-1.2109-0.82032-0.66406-0.27343-1.3672-0.27343-0.70313 0-1.3867 0.27343-0.6836 0.27344-1.2109 0.82032-0.52734 0.52734-0.85938 1.3476-0.3125 0.82032-0.3125 1.9141zm-7.8125 0q0.0977-2.5195 1.0352-4.4336 0.95703-1.9141 2.5195-3.2226 1.5625-1.3086 3.6133-1.9727 2.0703-0.66406 4.3945-0.66406 2.5391 0 4.6484 0.76172 2.1094 0.76171 3.6328 2.1289 1.5234 1.3477 2.3633 3.2422 0.83985 1.8945 0.83985 4.1602 0 1.8359-0.48828 3.3203-0.46875 1.4844-1.2891 2.6367-0.82031 1.1328-1.9336 1.9726-1.1133 0.83985-2.4023 1.3867-1.2891 0.52735-2.6758 0.78125-1.3672 0.25391-2.7344 0.25391-2.5781 0-4.707-0.74219-2.1094-0.76172-3.6328-2.1289-1.5234-1.3672-2.3633-3.2617-0.82032-1.9141-0.82032-4.2188z" style="paint-order:stroke markers fill"/><path d="m132.73 268.8h10.742v4.7266h-10.742z" style="paint-order:stroke markers fill"/><path d="m162.41 274.89q0.6836 0 1.2695-0.0586 0.58594-0.0781 1.1524-0.21484 0.58593-0.13672 1.1914-0.35156 0.60547-0.21485 1.3477-0.50782l1.0938 6.3477q-3.4766 2.0117-7.5781 2.0117-5.8008 0-9.9414-3.9062-4.3359-4.0625-4.3945-10.488 0-3.125 1.0742-5.7617 1.0742-2.6367 2.9688-4.5312 1.8945-1.9141 4.4726-2.9688 2.5781-1.0742 5.5859-1.0742 4.2773 0 7.7734 1.9922l-1.0547 6.2109q-2.8711-1.0938-5.1953-1.0938-3.2617 0-4.9609 1.8945-1.6797 1.875-1.6797 5.293 0 1.6992 0.44922 3.0469 0.46875 1.3281 1.3477 2.2656 0.8789 0.91797 2.1484 1.4062 1.2891 0.48829 2.9297 0.48829z" style="paint-order:stroke markers fill"/><path d="m186.52 277.78q-0.9375 1.9531-2.5391 2.9883-1.6016 1.0352-4.0234 1.0352-1.9531 0-3.7305-0.78125-1.7774-0.80078-3.125-2.1875-1.3477-1.4062-2.1484-3.3203-0.80078-1.9141-0.80078-4.1602 0-2.2266 0.80078-4.1016 0.82031-1.875 2.168-3.2227 1.3672-1.3672 3.125-2.1094 1.7773-0.76172 3.7109-0.76172 0.9961 0 1.9531 0.27343 0.97656 0.25391 1.8359 0.83985 0.8789 0.5664 1.582 1.4453 0.72265 0.87891 1.1914 2.1094v-4.668h8.3984v20.332h-8.3984zm0-6.4453q-0.0391-0.78125-0.37109-1.4844-0.33203-0.70312-0.87891-1.2109-0.52734-0.52735-1.2305-0.82032-0.70313-0.3125-1.4648-0.3125-0.85937 0-1.6016 0.33203-0.72266 0.3125-1.2695 0.85938-0.52735 0.52734-0.83985 1.25t-0.3125 1.543q0 0.85937 0.33204 1.6016 0.33203 0.72266 0.8789 1.25 0.56641 0.52734 1.2891 0.83984 0.72266 0.29297 1.5234 0.29297 0.82031 0 1.5234-0.3125 0.70312-0.3125 1.2305-0.83984 0.52734-0.52734 0.83984-1.2109 0.3125-0.70312 0.35156-1.4648z" style="paint-order:stroke markers fill"/><path d="m212.02 280.44q-2.7148 1.3672-6.0156 1.3672-1.6992 0-3.0273-0.54688-1.3281-0.5664-2.2461-1.6016-0.89843-1.0547-1.3672-2.5195-0.46875-1.4844-0.46875-3.3398v-18.672l8.4375-1.25v19.336q0 1.0742 0.68359 1.6016 0.68359 0.50781 1.8555 0.50781 0.89844 0 1.8359-0.46875z" style="paint-order:stroke markers fill"/><path d="m225.71 276.2q2.7344 0 5.8984-1.4062l0.97656 5.3711q-3.6328 1.6406-8.1641 1.6406-2.5195 0-4.6094-0.76172-2.0703-0.78125-3.5742-2.1484-1.4844-1.3867-2.3242-3.2812-0.82031-1.8945-0.82031-4.1211 0-2.3438 0.85937-4.2383 0.87891-1.9141 2.3828-3.2617 1.5039-1.3672 3.5156-2.0898 2.0117-0.74218 4.2969-0.74218 2.3047 0 4.043 0.78125 1.7383 0.76172 2.8906 2.1094 1.1719 1.3281 1.7383 3.125 0.58594 1.7774 0.58594 3.8086 0 0.27343-0.0195 0.52734t-0.0586 0.48828l-11.992 1.5625q0.46875 1.4062 1.5625 2.0312 1.0938 0.60547 2.8125 0.60547zm1.4844-7.6758q-0.6836-2.5-3.0469-2.5-0.74218 0-1.3281 0.29297t-0.9961 0.82031q-0.39062 0.50781-0.60546 1.2305-0.21485 0.70312-0.23438 1.5234z" style="paint-order:stroke markers fill"/><path d="m236.3 261.75h8.0469v4.082q1.1719-2.3633 3.0078-3.5156 1.8555-1.1523 4.3359-1.1523 1.9922 0 3.5156 0.74218 1.5234 0.74219 2.5586 2.1094 1.0547 1.3477 1.582 3.2617 0.54687 1.8945 0.54687 4.2188v10h-8.3984v-10.82q0-0.78125-0.15625-1.4453-0.13672-0.66406-0.46875-1.1328-0.3125-0.48828-0.80078-0.74219-0.48828-0.27343-1.1914-0.27343-0.85938 0-1.582 0.42968-0.72265 0.41016-1.2695 1.0156-0.52734 0.60547-0.85937 1.2695-0.33203 0.64453-0.42969 1.1133v10.586h-8.4375z" style="paint-order:stroke markers fill"/><path d="m272.59 261.16q2.2656 0 3.9062 0.9375 1.6406 0.9375 2.6562 3.1055v-10.078l8.4375-1.25v27.617h-8.4375v-3.7109q-0.9375 2.0117-2.5586 3.0273-1.6211 0.9961-4.043 0.9961-2.0898 0-3.8672-0.83985-1.7773-0.85937-3.0859-2.2852-1.2891-1.4258-2.0312-3.2812-0.74219-1.875-0.74219-3.9062 0-2.1875 0.78125-4.082 0.80078-1.8945 2.1484-3.2812 1.3476-1.3867 3.1055-2.168 1.7774-0.80078 3.7305-0.80078zm6.5625 10.176q-0.0391-0.78125-0.37109-1.4844-0.33203-0.70312-0.87891-1.2109-0.52734-0.52735-1.2305-0.82032-0.70312-0.3125-1.4648-0.3125-0.85937 0-1.6016 0.33203-0.72266 0.3125-1.25 0.85938-0.52735 0.54687-0.83985 1.2695-0.29296 0.72266-0.29296 1.5234 0 0.85937 0.3125 1.582 0.33203 0.72266 0.8789 1.2695 0.54688 0.52734 1.2695 0.83984 0.72266 0.29297 1.5234 0.29297 0.83984 0 1.5625-0.33203t1.25-0.8789q0.52734-0.54688 0.82031-1.2695 0.3125-0.72265 0.3125-1.5039z" style="paint-order:stroke markers fill"/><path d="m307.06 277.78q-0.9375 1.9531-2.5391 2.9883-1.6016 1.0352-4.0234 1.0352-1.9531 0-3.7305-0.78125-1.7773-0.80078-3.125-2.1875-1.3477-1.4062-2.1484-3.3203-0.80078-1.9141-0.80078-4.1602 0-2.2266 0.80078-4.1016 0.82032-1.875 2.168-3.2227 1.3672-1.3672 3.125-2.1094 1.7774-0.76172 3.7109-0.76172 0.99609 0 1.9531 0.27343 0.97657 0.25391 1.8359 0.83985 0.87891 0.5664 1.582 1.4453 0.72266 0.87891 1.1914 2.1094v-4.668h8.3984v20.332h-8.3984zm0-6.4453q-0.0391-0.78125-0.37109-1.4844-0.33204-0.70312-0.87891-1.2109-0.52734-0.52735-1.2305-0.82032-0.70312-0.3125-1.4648-0.3125-0.85938 0-1.6016 0.33203-0.72265 0.3125-1.2695 0.85938-0.52734 0.52734-0.83984 1.25t-0.3125 1.543q0 0.85937 0.33203 1.6016 0.33203 0.72266 0.87891 1.25 0.5664 0.52734 1.2891 0.83984 0.72266 0.29297 1.5234 0.29297 0.82031 0 1.5234-0.3125 0.70313-0.3125 1.2305-0.83984 0.52735-0.52734 0.83985-1.2109 0.3125-0.70312 0.35156-1.4648z" style="paint-order:stroke markers fill"/><path d="m319.5 261.75h8.4375v4.082q0.95703-2.4219 2.5391-3.5352 1.6016-1.1328 3.6719-1.1328l1.1719 6.543q-3.8086 0-5.6055 0.82031-1.7773 0.80078-1.7773 2.5781v10.391h-8.4375z" style="paint-order:stroke markers fill"/><path d="m337.22 268.8h10.742v4.7266h-10.742z" style="paint-order:stroke markers fill"/><path d="m352.43 253.99h9.9219q3.0859 0 5.4883 0.60547t4.043 1.7773q1.6406 1.1719 2.5 2.8711 0.85937 1.6797 0.85937 3.8477 0 2.1094-0.97656 3.7695-0.97656 1.6602-2.6758 2.832-1.6992 1.1524-3.9844 1.7774-2.2656 0.60547-4.8633 0.60547h-1.6797v9.4141h-8.6328zm10.352 12.539q2.0703 0 3.2422-0.85937 1.1719-0.85938 1.1719-2.5781 0-0.83984-0.35156-1.4648-0.33204-0.625-0.9375-1.0352-0.58594-0.42969-1.3867-0.64453t-1.7383-0.21484h-1.7188v6.7188q0.27343 0.0391 0.70312 0.0586t1.0156 0.0195z" style="paint-order:stroke markers fill"/><path d="m402.92 281.41q-2.5586 0.70313-3.6914 0.70313-7.2461 0-9.1016-6.6016l-1.0938-4.4531h-1.875v10.43h-8.75v-27.5h12.227q2.3828 0 4.4726 0.54687 2.0898 0.52735 3.6328 1.5625 1.5625 1.0156 2.4414 2.5195 0.89844 1.5039 0.89844 3.457 0 1.4453-0.37109 2.5976-0.35157 1.1328-1.0352 2.0508-0.68359 0.89844-1.6797 1.6016-0.97656 0.70312-2.2266 1.25l0.17578 0.95703q0.0586 0.33203 0.11719 0.5664 0.0586 0.23438 0.0977 0.39063l0.21484 0.83984q0.23437 0.74219 0.52734 1.2695 0.3125 0.50782 0.78125 0.83985 0.46875 0.3125 1.1524 0.46875 0.70312 0.13672 1.6992 0.13672 0.15625 0 0.48828-0.0391 0.35156-0.0391 0.89843-0.11718zm-8.8476-18.945q0-0.76172-0.33203-1.25-0.3125-0.50781-0.87891-0.78125-0.56641-0.29297-1.3281-0.39062-0.76172-0.11719-1.6406-0.11719h-2.7344v5.5078h1.5234l1.2891-0.0586q0.76171-0.0586 1.4844-0.19532 0.74219-0.15625 1.3281-0.46875 0.58593-0.33203 0.9375-0.85937 0.35156-0.54688 0.35156-1.3867z" style="paint-order:stroke markers fill"/><path d="m404.76 267.78q0-5.957 3.7891-10.039 4.043-4.3555 10.938-4.3555 3.3594 0 6.0742 1.0938 2.7148 1.0742 4.6289 2.9883t2.9492 4.5703q1.0352 2.6367 1.0352 5.7422 0 1.875-0.42968 3.6719-0.42969 1.7969-1.2891 3.3984-0.83984 1.582-2.0898 2.9297-1.25 1.3281-2.8906 2.3047-1.6211 0.95703-3.6328 1.4844-1.9922 0.54688-4.3555 0.54688-2.4219 0-4.4531-0.54688-2.0117-0.54687-3.6523-1.5234-1.6406-0.97657-2.8906-2.3242-1.2305-1.3477-2.0703-2.9297-0.82031-1.6016-1.25-3.3789-0.41016-1.7773-0.41016-3.6328zm14.727 7.0703q1.543 0 2.6172-0.64453 1.0938-0.66406 1.7774-1.6797 0.70312-1.0352 1.0156-2.3047 0.33203-1.2695 0.33203-2.4805 0-1.582-0.41015-2.8906-0.39063-1.3281-1.1524-2.2852-0.74219-0.97657-1.8164-1.543-1.0547-0.56641-2.3633-0.625-1.5625 0.0391-2.6562 0.70312-1.0938 0.66407-1.7969 1.7188-0.68359 1.0352-1.0156 2.3438-0.3125 1.2891-0.3125 2.5781 0 1.5234 0.39063 2.832 0.41016 1.2891 1.1523 2.2461 0.76172 0.9375 1.8359 1.4844 1.0742 0.54687 2.4023 0.54687z" style="paint-order:stroke markers fill"/><path d="m436.18 279.2q0-0.58594 0.2474-1.0807 0.26042-0.49479 0.67708-0.84636 0.41667-0.35156 0.95053-0.54687 0.54687-0.20834 1.1198-0.20834 0.59896 0 1.1458 0.22136 0.54688 0.20833 0.95053 0.58594 0.41666 0.36458 0.65104 0.84635 0.2474 0.48177 0.2474 1.0286 0 0.61198-0.26042 1.1068-0.2474 0.49479-0.66407 0.85938-0.41666 0.35156-0.96354 0.54687-0.53385 0.19531-1.1068 0.19531-0.625 0-1.1719-0.20833-0.54687-0.20833-0.95052-0.57292-0.40365-0.36458-0.63802-0.85937-0.23438-0.49479-0.23438-1.0677z" style="paint-order:stroke markers fill"/><path d="m454.38 272.56q-1.4062-0.4427-2.6042-0.4427-0.61198 0-1.1068 0.19531-0.48177 0.19531-0.83333 0.54687-0.33855 0.35157-0.53386 0.85938-0.18229 0.49479-0.18229 1.1068t0.18229 1.1198q0.19531 0.49479 0.54688 0.85937 0.35156 0.36459 0.84635 0.5599 0.50782 0.19531 1.1328 0.19531 1.1849 0 2.5-0.44271l0.52083 3.724q-1.0026 0.52083-1.9661 0.6901-0.95053 0.16927-2.0703 0.16927-1.5755 0-2.9036-0.49479t-2.2917-1.3932-1.5104-2.1615q-0.53385-1.276-0.53385-2.8255t0.58594-2.8125q0.58593-1.276 1.5755-2.1745 1.0026-0.91146 2.3177-1.4062 1.3151-0.4948 2.7604-0.4948 0.63802 0 1.1458 0.0521 0.52084 0.0391 0.98959 0.16927 0.46875 0.11718 0.9375 0.32552 0.46875 0.20833 1.0156 0.53385z" style="paint-order:stroke markers fill"/><path d="m461.18 274.8q0 0.72917 0.20833 1.276 0.22136 0.54688 0.57292 0.91146 0.35157 0.36459 0.80729 0.54688 0.45573 0.18229 0.92449 0.18229 0.46875 0 0.91145-0.18229 0.45573-0.18229 0.8073-0.54688 0.36458-0.36458 0.57291-0.91146 0.22136-0.54687 0.22136-1.276t-0.22136-1.276q-0.20833-0.54688-0.57291-0.89844-0.35157-0.36458-0.8073-0.54688-0.4427-0.18229-0.91145-0.18229-0.46876 0-0.92449 0.18229-0.45572 0.1823-0.80729 0.54688-0.35156 0.35156-0.57292 0.89844-0.20833 0.54687-0.20833 1.276zm-5.2083 0q0.0651-1.6797 0.69011-2.9557 0.63802-1.276 1.6797-2.1484 1.0417-0.8724 2.4088-1.3151 1.3802-0.44271 2.9297-0.44271 1.6927 0 3.099 0.50782 1.4062 0.50781 2.4219 1.4193 1.0156 0.89844 1.5755 2.1615 0.55989 1.263 0.55989 2.7734 0 1.224-0.32552 2.2136-0.3125 0.98958-0.85937 1.7578-0.54688 0.75521-1.2891 1.3151-0.74219 0.55989-1.6016 0.92448-0.85938 0.35156-1.7839 0.52083-0.91146 0.16927-1.8229 0.16927-1.7188 0-3.138-0.49479-1.4062-0.50781-2.4219-1.4193t-1.5755-2.1745q-0.54688-1.276-0.54688-2.8125z" style="paint-order:stroke markers fill"/><path d="m488.16 271.26q0.54688-1.6536 1.7578-2.487 1.2109-0.83334 3.138-0.83334 1.0938 0 2.0182 0.50782 0.92448 0.50781 1.6016 1.4193 0.67708 0.91146 1.0547 2.1745 0.3776 1.263 0.3776 2.7865v6.6667h-5.625v-6.6667q0-0.55989-0.13021-1.0286-0.11718-0.48178-0.35156-0.83334-0.23437-0.35156-0.57292-0.54687-0.33854-0.19532-0.76823-0.19532-0.55989 0-0.96354 0.26042-0.40364 0.2474-0.66406 0.63802-0.26042 0.37761-0.39063 0.84636-0.11718 0.45573-0.11718 0.85937v6.6667h-5.5729v-6.6667q0-0.54687-0.13021-1.0156-0.11718-0.48178-0.36458-0.83334-0.23438-0.35156-0.58594-0.54687-0.35156-0.20834-0.79427-0.20834-0.48177 0-0.8724 0.19532-0.3776 0.19531-0.65104 0.54687-0.27344 0.33854-0.42969 0.79427-0.14323 0.45573-0.15625 0.96355v6.7708h-5.625v-13.164h5.625v2.7214q0.74219-1.6536 1.875-2.3828 1.1458-0.72917 2.6823-0.72917 0.74219 0 1.4323 0.19532 0.69011 0.18229 1.2891 0.58593 0.61198 0.40365 1.0938 1.0417 0.49479 0.625 0.82031 1.4974z" style="paint-order:stroke markers fill"/></g></g></svg>',
    close: '<span class="atcb-icon-close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="M2.321 13.529a7.927 7.927 0 0 1 0-11.208 7.927 7.927 0 0 1 11.208 0l86.471 86.471L186.47 2.321a7.927 7.927 0 0 1 11.209 0 7.927 7.927 0 0 1 0 11.208l-86.474 86.469 86.472 86.473a7.927 7.927 0 0 1-11.209 11.208l-86.471-86.471-86.469 86.471a7.927 7.927 0 0 1-11.208-11.208l86.471-86.473z"/></svg></span>',
    location: '<span class="atcb-icon-location"><svg viewBox="0 0 200 266.42" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m148.54 230.43c-12.12 13.291-26.234 25.193-42.083 34.82-1.9513 1.431-4.5964 1.6044-6.7645 0.21681-23.416-14.895-43.08-32.782-58.539-52.23-21.334-26.755-34.755-56.414-39.351-84.99-4.6831-28.966-0.30354-56.848 14.114-79.505 5.6805-8.9543 12.944-17.106 21.79-24.153 20.337-16.196 43.557-24.76 66.713-24.586 22.288 0.17345 44.295 8.4773 63.309 25.844 6.6778 6.0707 12.293 13.03 16.89 20.575 15.502 25.54 18.841 58.105 12.033 91.104-6.7212 32.608-23.416 65.737-48.11 92.839zm-48.544-178.91c27.492 0 49.758 22.288 49.758 49.758 0 27.492-22.288 49.758-49.758 49.758-27.492 0-49.758-22.267-49.758-49.758-0.02168-27.492 22.267-49.758 49.758-49.758z" stroke-width="2.1681"/></svg></span>',
    warning: '<span class="atcb-icon-warning"><svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="m100 0c27.613 0 52.613 11.195 70.711 29.293 18.094 18.094 29.289 43.098 29.289 70.707 0 27.613-11.195 52.613-29.289 70.711-18.098 18.094-43.098 29.289-70.711 29.289-27.609 0-52.613-11.195-70.707-29.289-18.098-18.098-29.293-43.098-29.293-70.711 0-27.609 11.195-52.613 29.293-70.707 18.094-18.098 43.098-29.293 70.707-29.293zm57.66 42.34c-14.758-14.754-35.145-23.883-57.66-23.883-22.516 0-42.902 9.1289-57.66 23.883-14.754 14.758-23.883 35.145-23.883 57.66 0 22.516 9.1289 42.902 23.883 57.66 14.758 14.754 35.145 23.883 57.66 23.883 22.516 0 42.902-9.1289 57.66-23.883 14.754-14.758 23.883-35.145 23.883-57.66 0-22.516-9.1289-42.902-23.883-57.66z" fill="#f44336" fill-rule="nonzero" stroke-width=".39062"/><g transform="matrix(3.8384 0 0 3.8384 2277.8 -576.85)" style="shape-inside:url(#rect7396);white-space:pre" aria-label="!"><path d="m-563.8 161.59-0.65341 20.185h-5.8381l-0.65341-20.185zm-3.5796 29.503q-1.5199 0-2.6136-1.0795-1.0796-1.0796-1.0796-2.6136 0-1.5057 1.0796-2.571 1.0938-1.0796 2.6136-1.0796 1.4631 0 2.571 1.0796 1.1222 1.0653 1.1222 2.571 0 1.0227-0.52557 1.8608-0.51137 0.83807-1.3494 1.3352-0.82387 0.49715-1.8182 0.49715z"/></g></svg></span>',
    checkmark: '<span class="atcb-icon-checkmark"><svg viewBox="0 0 122.88 122.87" xmlns="http://www.w3.org/2000/svg"><path fill:#39B54A; d="m33.666 50.046s6.0748-0.59297 17.413 4.2983c9.3883 4.5751 11.891 8.3955 11.891 8.3955 5.38-8.65 11.11-16.6 17.16-23.9 10.412-12.578 24.613-22.448 24.613-22.448l14.257-0.012228s-19.308 19.294-32.483 38.51c-13.175 19.216-22.877 41.21-22.877 41.21s-9.3948-18.164-14.53-24.53-10.77-11.59-17.52-16.22z" fill="#45b555"/><path fill:#3C3C3C; d="m61.44 0c9.53 0 18.55 2.17 26.61 6.04-3.3 2.61-6.36 5.11-9.21 7.53-5.43-1.97-11.28-3.05-17.39-3.05-14.06 0-26.79 5.7-36 14.92s-14.92 21.94-14.92 36 5.7 26.78 14.92 36 21.94 14.92 36 14.92 26.79-5.7 36-14.92c9.22-9.22 14.91-21.94 14.91-36 0-3.34-0.32-6.62-0.94-9.78 2.64-3.44 5.35-6.88 8.11-10.28 2.17 6.28 3.35 13.04 3.35 20.06 0 16.96-6.88 32.33-17.99 43.44-11.12 11.12-26.48 18-43.44 18s-32.32-6.88-43.44-18c-11.13-11.12-18.01-26.48-18.01-43.44 0-16.97 6.88-32.33 17.99-43.44 11.12-11.12 26.48-18 43.45-18z"/></svg></span>'
};
function atcb_patch_config(a) {
    null != a.event && (Object.keys(a.event).forEach(e=>{
        "@" !== e.charAt(0) && (a["" + e] = a.event["" + e])
    }
    ),
    delete a.event);
    const t = {
        title: "name",
        dateStart: "startDate",
        dateEnd: "endDate",
        timeStart: "startTime",
        timeEnd: "endTime"
    };
    return Object.keys(t).forEach(e=>{
        null == a[t["" + e]] && null != a["" + e] && (a[t["" + e]] = a["" + e])
    }
    ),
    a
}
function atcb_decorate_data(e) {
    return (e = atcb_decorate_data_identifier(e)).subscribe = atcb_decorate_data_subscribe(e),
    (e = atcb_decorate_data_options(e = atcb_decorate_data_rrule(e))).richData = atcb_decorate_data_rich_data(e),
    e.checkmark = atcb_decorate_data_checkmark(e),
    e.background = atcb_decorate_data_background(e),
    e.mindScrolling = atcb_decorate_data_mind_scrolling(e),
    e.branding = atcb_decorate_data_branding(e),
    e = atcb_decorate_data_extend(e = atcb_decorate_data_meta(e = atcb_decorate_data_dates(e = atcb_decorate_data_i18n(e = atcb_decorate_data_style(e)))))
}
function atcb_decorate_data_identifier(e) {
    return null != e.identifier && "" != e.identifier && (e.identifier = "atcb-btn-" + e.identifier,
    /^[\w-]+$/.test(e.identifier) || (e.identifier = "",
    console.warn("Add to Calendar Button generation: identifier invalid - using auto numbers instead"))),
    e
}
function atcb_decorate_data_subscribe(e) {
    return null != e.subscribe && 1 == e.subscribe
}
function atcb_decorate_data_rrule(e) {
    if (null != e.recurrence && "" != e.recurrence)
        if (e.recurrence = e.recurrence.replace(/\s+/g, "").toUpperCase(),
        /^(RRULE:[\w=;,:+-/\\]+|daily|weekly|monthly|yearly)$/im.test(e.recurrence))
            if (/^RRULE:/i.test(e.recurrence)) {
                var a = e.recurrence.substr(6).split(";");
                const t = new Object;
                a.forEach(function(e) {
                    t[e.split("=")[0]] = e.split("=")[1]
                }),
                e.recurrence_until = t.UNTIL || "",
                e.recurrence_count = t.COUNT || "",
                e.recurrence_byDay = t.BYDAY || "",
                e.recurrence_byMonth = t.BYMONTH || "",
                e.recurrence_byMonthDay = t.BYMONTHDAY || "",
                e.recurrence_interval = t.INTERVAL || 1,
                e.recurrence_frequency = t.FREQ || ""
            } else
                null != e.recurrence_interval && "" != e.recurrence_interval || (e.recurrence_interval = 1),
                (null == e.recurrence_weekstart || "" == e.recurrence_weekstart | 2 < e.recurrence_weekstart.length) && (e.recurrence_weekstart = "MO"),
                e.recurrence_frequency = e.recurrence,
                e.recurrence = "RRULE:FREQ=" + e.recurrence + ";WKST=" + e.recurrence_weekstart + ";INTERVAL=" + e.recurrence_interval,
                null != e.recurrence_until && "" != e.recurrence_until && (null != e.endTime && "" != e.endTime ? e.recurrence = e.recurrence + ";UNTIL=" + e.recurrence_until.replace(/-/g, "").slice(0, 8) + "T" + e.endTime.replace(":", "") + "00" : e.recurrence = e.recurrence + ";UNTIL=" + e.recurrence_until.replace(/-/g, "").slice(0, 8)),
                null != e.recurrence_count && "" != e.recurrence_count && (e.recurrence = e.recurrence + ";COUNT=" + e.recurrence_count),
                null != e.recurrence_byDay && "" != e.recurrence_byDay && (e.recurrence = e.recurrence + ";BYDAY=" + e.recurrence_byDay),
                null != e.recurrence_byMonth && "" != e.recurrence_byMonth && (e.recurrence = e.recurrence + ";BYMONTH=" + e.recurrence_byMonth),
                null != e.recurrence_byMonthDay && "" != e.recurrence_byMonthDay && (e.recurrence = e.recurrence + ";BYMONTHDAY=" + e.recurrence_byMonthDay);
        else
            e.recurrence = "!wrong rrule format!";
    return e
}
function atcb_decorate_data_options(a) {
    isiOS() && a.options.includes("ical") && !a.options.includes("apple") && a.options.push("apple");
    var t = [];
    a.optionLabels = [];
    for (let e = 0; e < a.options.length; e++) {
        const i = a.options["" + e].split("|");
        var n = i[0].toLowerCase().replace("microsoft", "ms").replace(".", "")
          , o = null != i[1] ? i[1] : "";
        isiOS() && atcbiOSInvalidOptions.includes(n) || null != a.recurrence && "" != a.recurrence && (!atcbValidRecurrOptions.includes(n) || null != a.recurrence_until && "" != a.recurrence_until && ("apple" == n || "ical" == n)) || a.subscribe && atcbInvalidSubscribeOptions.includes(n) || (t.push(n),
        a.optionLabels.push(o))
    }
    return a.options = t,
    a
}
function atcb_decorate_data_rich_data(e) {
    return null == e.richData || 0 != e.richData
}
function atcb_decorate_data_checkmark(e) {
    return null == e.checkmark || 0 != e.checkmark
}
function atcb_decorate_data_background(e) {
    return null == e.background || 0 != e.background
}
function atcb_decorate_data_branding(e) {
    return null != e.branding && e.branding,
    !1
}
function atcb_decorate_data_mind_scrolling(e) {
    return null != e.mindScrolling && 1 == e.mindScrolling
}
function atcb_decorate_data_style(e) {
    if (null != e.listStyle && "" != e.listStyle || (e.listStyle = "dropdown"),
    "modal" === e.listStyle && (e.trigger = "click"),
    null != e.buttonStyle && "" != e.buttonStyle && "default" != e.buttonStyle ? ("bubble" != e.buttonStyle && "text" != e.buttonStyle && "date" != e.buttonStyle || (e.trigger = "click"),
    "date" == e.buttonStyle && "dropdown" == e.listStyle && (e.listStyle = "overlay")) : e.buttonStyle = "",
    e.sizes = [],
    e.sizes.l = e.sizes.m = e.sizes.s = 16,
    null != e.size && "" != e.size) {
        var a = e.size.split("|");
        for (let e = 0; e < a.length; e++)
            a["" + e] = parseInt(a["" + e]);
        0 <= a[0] && a[0] < 11 && (e.sizes.l = 10 + a[0]),
        2 < a.length ? (0 <= a[1] && a[1] < 11 && (e.sizes.m = 10 + a[1]),
        0 <= a[2] && a[2] < 11 && (e.sizes.s = 10 + a[2])) : 2 == a.length && 0 <= a[1] && a[1] < 11 && (e.sizes.m = e.sizes.s = 10 + a[1])
    }
    if (null == e.lightMode || "" == e.lightMode)
        e.lightMode = "light";
    else if (null != e.lightMode && "" != e.lightMode) {
        var t = window.matchMedia("(prefers-color-scheme: dark)");
        switch (e.lightMode) {
        case "system":
            t.matches ? e.lightMode = "dark" : e.lightMode = "light";
            break;
        case "bodyScheme":
        case "dark":
            break;
        default:
            e.lightMode = "light"
        }
    }
    var n;
    return e.iconButton = !0,
    e.iconList = !0,
    e.iconModal = !0,
    null != e.icons && (e.icons = String(e.icons),
    "" != e.icons && ("false" == (n = e.icons.split("|"))[0] && (e.iconButton = !1),
    null != n[1] && "false" == n[1] && (e.iconList = !1),
    null != n[2] && "false" == n[2] && (e.iconModal = !1))),
    e.textLabelButton = !0,
    e.textLabelList = !0,
    null != e.textLabels && (e.textLabels = String(e.textLabels),
    "" != e.textLabels && ("false" == (n = e.textLabels.split("|"))[0] && (e.textLabelButton = !1),
    null != n[1] && "false" == n[1] && (e.textLabelList = !1))),
    e
}
function atcb_decorate_data_i18n(e) {
    return null != e.language && "" != e.language || (e.language = "en"),
    "ar" == e.language ? e.rtl = !0 : e.rtl = !1,
    e
}
function atcb_decorate_data_dates(a) {
    if (null != a.dates && 0 < a.dates.length)
        for (let e = 0; e < a.dates.length; e++) {
            null == a.dates["" + e].timeZone && null != a.timeZone && (a.dates["" + e].timeZone = a.timeZone);
            var t = atcb_date_cleanup(a.dates["" + e]);
            a.dates["" + e].startTime = t.startTime,
            a.dates["" + e].endTime = t.endTime,
            a.dates["" + e].timeZone = t.timeZone,
            a.dates["" + e].timestamp = t.startTimestamp,
            a.dates["" + e].startDate = atcb_date_calculation(t.startDate),
            a.dates["" + e].endDate = atcb_date_calculation(t.endDate)
        }
    else {
        var e = atcb_date_cleanup(a);
        a.dates = [],
        a.dates[0] = new Object,
        a.startTime = a.dates[0].startTime = e.startTime,
        a.endTime = a.dates[0].endTime = e.endTime,
        a.timeZone = a.dates[0].timeZone = e.timeZone,
        a.startDate = a.dates[0].startDate = atcb_date_calculation(e.startDate),
        a.endDate = a.dates[0].endDate = atcb_date_calculation(e.endDate)
    }
    e = new Date;
    return null != a.created && "" != a.created || (a.created = atcb_format_datetime(e, "clean", !0)),
    null != a.updated && "" != a.updated || (a.updated = atcb_format_datetime(e, "clean", !0)),
    a
}
function atcb_decorate_data_meta(e) {
    return null != e.status && "" != e.status || (e.status = "CONFIRMED"),
    null != e.sequence && "" != e.sequence || (e.sequence = 0),
    e
}
function atcb_decorate_data_description(e, a) {
    return null != e.dates["" + a].description && "" != e.dates["" + a].description ? (e.dates["" + a].descriptionHtmlFree = atcb_rewrite_html_elements(e.dates["" + a].description, !0),
    e.dates["" + a].description = atcb_rewrite_html_elements(e.dates["" + a].description)) : null == e.dates["" + a].description && null != e.description && "" != e.description ? (e.dates["" + a].descriptionHtmlFree = atcb_rewrite_html_elements(e.description, !0),
    e.dates["" + a].description = atcb_rewrite_html_elements(e.description)) : e.dates["" + a].descriptionHtmlFree = e.dates["" + a].description = "",
    e
}
function atcb_decorate_data_extend(a) {
    for (let e = 0; e < a.dates.length; e++)
        null != (a = atcb_decorate_data_description(a, e)).dates["" + e].name && "" != a.dates["" + e].name || (a.dates["" + e].name = a.name),
        null == a.dates["" + e].status ? a.dates["" + e].status = a.status.toUpperCase() : a.dates["" + e].status = a.dates["" + e].status.toUpperCase(),
        null == a.dates["" + e].sequence && (a.dates["" + e].sequence = a.sequence),
        null == a.dates["" + e].location && null != a.location && (a.dates["" + e].location = a.location),
        null == a.dates["" + e].organizer && null != a.organizer && (a.dates["" + e].organizer = a.organizer),
        null == a.dates["" + e].availability && null != a.availability ? a.dates["" + e].availability = a.availability.toLowerCase() : null != a.dates["" + e].availability && (a.dates["" + e].availability = a.dates["" + e].availability.toLowerCase()),
        null == a.dates["" + e].uid && (a.dates["" + e].uid = atcb_generate_uuid());
    return null != a.recurrence && "" != a.recurrence && (a.dates[0].recurrence = a.recurrence),
    1 < a.dates.length && a.dates.sort((e,a)=>e.timestamp - a.timestamp),
    a
}
function atcb_date_cleanup(n) {
    null != n.endDate && "" != n.endDate || (n.endDate = n.startDate);
    return ["start", "end"].forEach(function(e) {
        var a;
        null != n[e + "Date"] && (n[e + "Date"] = n[e + "Date"].replace(/\.\d{3}/, "").replace("Z", ""),
        null != (a = n[e + "Date"].split("T"))[1] && (n[e + "Date"] = a[0],
        n[e + "Time"] = a[1])),
        null != n[e + "Time"] && 8 === n[e + "Time"].length && (a = n[e + "Time"],
        n[e + "Time"] = a.substring(0, a.length - 3)),
        "currentBrowser" == n.timeZone && (n.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone);
        let t;
        t = null != n[e + "Time"] ? new Date(n[e + "Date"] + " " + n[e + "Time"]) : new Date(n[e + "Date"]),
        n[e + "Timestamp"] = t.getTime()
    }),
    n
}
function atcb_date_calculation(e) {
    var a = new Date
      , a = a.getUTCFullYear() + "-" + (a.getUTCMonth() + 1) + "-" + a.getUTCDate()
      , a = (e = e.replace(/today/gi, a)).split("+");
    const t = a[0].split("-");
    e = t[0].length < 4 ? new Date(Date.UTC(t[2], t[0] - 1, t[1])) : new Date(Date.UTC(t[0], t[1] - 1, t[2]));
    return null != a[1] && 0 < a[1] && e.setDate(e.getDate() + parseInt(a[1])),
    e.toISOString().replace(/T(\d{2}:\d{2}:\d{2}\.\d{3})Z/g, "")
}
function atcb_check_required(t) {
    if (null == t.options || t.options.length < 1)
        return console.error("Add to Calendar Button generation failed: no valid options set"),
        !1;
    if (null == t.name || "" == t.name)
        return console.error("Add to Calendar Button generation failed: required name information missing"),
        !1;
    if (null != t.dates && 0 < t.dates.length) {
        const n = ["name"];
        return ["name", "startDate"].every(function(a) {
            for (let e = 0; e < t.dates.length; e++)
                if (!n.includes("" + a) && (null == t.dates["" + e]["" + a] || "" == t.dates["" + e]["" + a]) || n.includes("" + a) && (null == t.dates["" + e]["" + a] || "" == t.dates["" + e]["" + a]) && (null == t["" + a] || "" == t["" + a]))
                    return console.error("Add to Calendar Button generation failed: required setting missing [dates array object #" + (e + 1) + "/" + t.dates.length + "] => [" + a + "]"),
                    !1;
            return !0
        })
    }
    return ["startDate"].every(function(e) {
        return null != t["" + e] && "" != t["" + e] || (console.error("Add to Calendar Button generation failed: required setting missing [" + e + "]"),
        !1)
    })
}
function atcb_validate(e) {
    var a = "Add to Calendar Button generation (" + e.identifier + ")";
    return !!atcb_validate_icsFile(e, a) && (!!atcb_validate_subscribe(e, a) && (!!atcb_validate_created(e, a) && (!!atcb_validate_updated(e, a) && (!!atcb_validate_options(e, a) && (!!atcb_validate_date_blocks(e, a) && !!atcb_validate_rrule(e, a))))))
}
function atcb_validate_icsFile(e, a, t="", n="") {
    t = "" != t && null != e.dates["" + t].icsFile ? e.dates["" + t].icsFile : "" == t && null != e.icsFile ? e.icsFile : "";
    return !("" != t && (!atcb_secure_url(t, !1) || !/^https:\/\/(.)*\.ics$/m.test(e.icsFile) && !e.subscribe || !e.icsFile.startsWith("https://") && e.subscribe)) || (console.error(a + " failed: explicit ics file path not valid" + n),
    !1)
}
function atcb_validate_subscribe(e, a) {
    return 1 != e.subscribe || null != e.icsFile && "" != e.icsFile || (console.error(a + " failed: a subscription calendar requires a valid explicit ics file as well"),
    !1)
}
function atcb_validate_created(e, a) {
    return !!/^\d{8}T\d{6}Z$/.test(e.created) || (console.error(a + " failed: created date format not valid. Needs to be a full ISO-8601 UTC date and time string, formatted YYYYMMDDTHHMMSSZ"),
    !1)
}
function atcb_validate_updated(e, a) {
    return !!/^\d{8}T\d{6}Z$/.test(e.updated) || (console.error(a + " failed: updated date format not valid. Needs to be a full ISO-8601 UTC date and time string, formatted YYYYMMDDTHHMMSSZ"),
    !1)
}
function atcb_validate_options(e, a) {
    return !!e.options.every(function(e) {
        return !!atcbOptions.includes(e) || (console.error(a + " failed: invalid option [" + e + "]"),
        !1)
    })
}
function atcb_validate_date_blocks(a, t) {
    for (let e = 0; e < a.dates.length; e++) {
        var n = 1 == a.dates.length ? "" : " [dates array object #" + (e + 1) + "/" + a.dates.length + "] ";
        if (!atcb_validate_icsFile(a, t, e, n))
            return !1;
        if (!atcb_validate_status(a, t, e, n))
            return !1;
        if (!atcb_validate_availability(a, t, e, n))
            return !1;
        if (!atcb_validate_organizer(a, t, e, n))
            return !1;
        if (!atcb_validate_uid(a, t, e, n))
            return !1;
        if (!atcb_validate_sequence(a, t, e, n))
            return !1;
        if (!atcb_validate_timezone(a, t, e, n))
            return !1;
        if (!atcb_validate_datetime(a, t, e, n))
            return !1
    }
    return !0
}
function atcb_validate_status(e, a, t, n) {
    return "TENTATIVE" == e.dates["" + t].status || "CONFIRMED" == e.dates["" + t].status || "CANCELLED" == e.dates["" + t].status || (console.error(a + " failed: event status needs to be TENTATIVE, CONFIRMED, or CANCELLED" + n),
    !1)
}
function atcb_validate_availability(e, a, t, n) {
    return null == e.dates["" + t].availability || "" == e.dates["" + t].availability || "free" == e.dates["" + t].availability || "busy" == e.dates["" + t].availability || (console.error(a + ' failed: event availability needs to be "free" or "busy"' + n),
    !1)
}
function atcb_validate_organizer(e, a, t, n) {
    if (null != e.dates["" + t].organizer && "" != e.dates["" + t].organizer) {
        e = e.dates["" + t].organizer.split("|");
        if (2 != e.length || 50 < e[0].length || 80 < e[1].length || !atcb_validEmail(e[1]))
            return console.error(a + ' failed: organizer needs to match the schema "NAME|EMAIL" with a valid email address' + n),
            !1
    }
    return !0
}
function atcb_validate_uid(e, a, t, n) {
    return /^(\w|-){1,254}$/.test(e.dates["" + t].uid) || (console.warn(a + ": UID not valid. May only contain alpha, digits, and dashes; and be less than 255 characters. Falling back to an automated value!" + n),
    e.dates["" + t].uid = atcb_generate_uuid()),
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e.dates["" + t].uid) || console.warn(a + ": UID is highly recommended to be a hex-encoded random Universally Unique Identifier (UUID)!" + n),
    !0
}
function atcb_validate_sequence(e, a, t, n) {
    return /^\d+$/.test(e.dates["" + t].sequence) || (console.log(a + ": sequence needs to be a number. Used the default 0 instead" + n),
    e.dates["" + t].sequence = 0),
    !0
}
function atcb_validate_timezone(e, a, t, n) {
    if (null != e.dates["" + t].timeZone && "" != e.dates["" + t].timeZone && !tzlib_get_timezones().includes(e.dates["" + t].timeZone))
        return console.error(a + " failed: invalid time zone given" + n),
        !1;
    return !0
}
function atcb_validate_datetime(t, n, o, i) {
    var e = ["startDate", "endDate"];
    const l = e;
    return !!e.every(function(e) {
        var a;
        return 10 !== t.dates["" + o]["" + e].length ? (console.error(n + " failed: date misspelled [-> YYYY-MM-DD]" + i),
        !1) : (a = t.dates["" + o]["" + e].split("-")).length < 3 || 3 < a.length ? (console.error(n + " failed: date misspelled [" + e + ": " + t.dates["" + o]["" + e] + "]" + i),
        !1) : (l["" + e] = new Date(a[0],a[1] - 1,a[2]),
        !0)
    }) && (!!["startTime", "endTime"].every(function(e) {
        if (null != t.dates["" + o]["" + e]) {
            if (5 !== t.dates["" + o]["" + e].length)
                return console.error(n + " failed: time misspelled [-> HH:MM]" + i),
                !1;
            var a = t.dates["" + o]["" + e].split(":");
            if (a.length < 2 || 2 < a.length)
                return console.error(n + " failed: time misspelled [" + e + ": " + t.dates["" + o]["" + e] + "]" + i),
                !1;
            if (23 < a[0])
                return console.error(n + " failed: time misspelled - hours number too high [" + e + ": " + a[0] + "]" + i),
                !1;
            if (59 < a[1])
                return console.error(n + " failed: time misspelled - minutes number too high [" + e + ": " + a[1] + "]" + i),
                !1;
            "startTime" == e && (l.startDate = new Date(l.startDate.getTime() + 36e5 * a[0] + 6e4 * a[1])),
            "endTime" == e && (l.endDate = new Date(l.endDate.getTime() + 36e5 * a[0] + 6e4 * a[1]))
        }
        return !0
    }) && (null != t.dates["" + o].startTime && null == t.dates["" + o].endTime || null == t.dates["" + o].startTime && null != t.dates["" + o].endTime ? (console.error(n + " failed: if you set a starting time, you also need to define an end time" + i),
    !1) : !(l.endDate < l.startDate) || (console.error(n + " failed: end date before start date" + i),
    !1)))
}
function atcb_validate_rrule(e, a) {
    return null != e.recurrence && "" != e.recurrence && 1 < e.dates.length ? (console.error(a + " failed: RRULE and multi-date set at the same time"),
    !1) : null == e.recurrence || "" == e.recurrence || /^RRULE:[\w=;,:+-/\\]+$/i.test(e.recurrence) ? null == e.recurrence_interval || "" == e.recurrence_interval || /^\d+$/.test(e.recurrence_interval) ? null == e.recurrence_until || "" == e.recurrence_until || /^(\d|-|:)+$/i.test(e.recurrence_until) ? null == e.recurrence_count || "" == e.recurrence_count || /^\d+$/.test(e.recurrence_count) ? null == e.recurrence_byMonth || "" == e.recurrence_byMonth || /^(\d|,)+$/.test(e.recurrence_byMonth) ? null == e.recurrence_byMonthDay || "" == e.recurrence_byMonthDay || /^(\d|,)+$/.test(e.recurrence_byMonthDay) ? null == e.recurrence_byDay || "" == e.recurrence_byDay || /^(\d|-|MO|TU|WE|TH|FR|SA|SU|,)+$/im.test(e.recurrence_byDay) ? !(null != e.recurrence_weekstart && "" != e.recurrence_weekstart && !/^(MO|TU|WE|TH|FR|SA|SU)$/im.test(e.recurrence_weekstart)) || (console.error(a + " failed: recurrence data (weekstart) misspelled"),
    !1) : (console.error(a + " failed: recurrence data (byDay) misspelled"),
    !1) : (console.error(a + " failed: recurrence data (byMonthDay) misspelled"),
    !1) : (console.error(a + " failed: recurrence data (byMonth) misspelled"),
    !1) : (console.error(a + " failed: recurrence data (interval) misspelled"),
    !1) : (console.error(a + " failed: recurrence data (until) misspelled"),
    !1) : (console.error(a + " failed: recurrence data (interval) misspelled"),
    !1) : (console.error(a + " failed: RRULE data misspelled"),
    !1)
}
function atcb_toggle(e, a="", t="", n=!1, o=!1) {
    "open" != e && ("close" == e || t.classList.contains("atcb-active") || document.querySelector(".atcb-active-modal")) ? atcb_close(n) : atcb_open(a, t, n, o)
}
function atcb_open(e, a, t=!1, n=!1) {
    if (!document.querySelector(".atcb-list") && !document.querySelector(".atcb-modal")) {
        var o = atcb_generate_dropdown_list(e);
        const l = document.createElement("div");
        l.classList.add("atcb-list-wrapper"),
        0 == e.textLabelList && l.classList.add("atcb-no-text"),
        a ? (a.classList.add("atcb-active"),
        "modal" === e.listStyle ? (a.classList.add("atcb-modal-style"),
        o.classList.add("atcb-modal")) : (l.appendChild(o),
        l.classList.add("atcb-dropdown"),
        "overlay" === e.listStyle && l.classList.add("atcb-dropoverlay"),
        e.mindScrolling && l.classList.add("atcb-mind-scrolling")),
        n && o.classList.add("atcb-generated-button")) : o.classList.add("atcb-modal");
        var i, n = atcb_generate_bg_overlay(e.listStyle, e.trigger, e.lightMode, e.background);
        "modal" === e.listStyle ? (document.body.appendChild(n),
        n.appendChild(o),
        e.branding && atcb_create_atcbl(!1),
        atcb_set_sizes(o, e.sizes),
        atcb_manage_body_scroll()) : ((i = document.createElement("div")).id = "atcb-pos-wrapper",
        i.style.position = "absolute",
        i.style.top = "0",
        i.style.bottom = "0",
        i.style.width = "100%",
        document.body.appendChild(i),
        i.appendChild(l),
        l.appendChild(o),
        "" != e.buttonStyle && l.classList.add("atcb-style-" + e.buttonStyle),
        e.branding && atcb_create_atcbl(),
        document.body.appendChild(n),
        atcb_set_sizes(o, e.sizes),
        l.style.display = "none",
        setTimeout(function() {
            l.style.display = "block",
            "dropdown-static" === e.listStyle ? atcb_position_list(a, l, !0) : atcb_position_list(a, l)
        }, 5)),
        atcb_set_fullsize(n),
        t ? o.firstChild.focus() : o.firstChild.focus({
            preventScroll: !0
        }),
        o.firstChild.blur()
    }
}
function atcb_close(a=!1) {
    var t = document.querySelectorAll(".atcb-modal[data-modal-nr]");
    if (1 < t.length) {
        document.querySelectorAll('.atcb-modal[data-modal-nr="' + t.length + '"]')[0].remove();
        t = document.querySelectorAll('.atcb-modal[data-modal-nr="' + (t.length - 1) + '"]')[0];
        t.style.display = "block";
        let e = t;
        t = t.getElementsByTagName("button");
        (e = 0 < t.length ? t[0] : e).focus(),
        a || e.blur()
    } else {
        t = document.querySelector(".atcb-active, .atcb-active-modal");
        t && (t.focus({
            preventScroll: !0
        }),
        a || t.blur()),
        Array.from(document.querySelectorAll(".atcb-active")).forEach(e=>{
            e.classList.remove("atcb-active")
        }
        ),
        Array.from(document.querySelectorAll(".atcb-active-modal")).forEach(e=>{
            e.classList.remove("atcb-active-modal")
        }
        ),
        document.body.classList.remove("atcb-modal-no-scroll"),
        Array.from(document.querySelectorAll(".atcb-list-wrapper")).concat(Array.from(document.querySelectorAll(".atcb-list"))).concat(Array.from(document.querySelectorAll(".atcb-modal[data-modal-nr]"))).concat(Array.from(document.querySelectorAll("#add-to-calendar-button-reference"))).concat(Array.from(document.querySelectorAll("#atcb-pos-wrapper"))).concat(Array.from(document.querySelectorAll("#atcb-bgoverlay"))).forEach(e=>e.remove())
    }
}
function atcb_generate_label(a, t, n, e=!1, o="", i=!1) {
    switch (n) {
    case "trigger":
    default:
        t.id = a.identifier,
        "click" === a.trigger ? t.addEventListener("click", e=>{
            e.preventDefault(),
            atcb_toggle("auto", a, t, !1, !0)
        }
        ) : (t.addEventListener("touchend", e=>{
            e.preventDefault(),
            atcb_toggle("auto", a, t, !1, !0)
        }
        ),
        t.addEventListener("mouseenter", atcb_debounce_leading(e=>{
            e.preventDefault(),
            atcb_toggle("open", a, t, !1, !0)
        }
        ))),
        t.addEventListener("keyup", function(e) {
            "Enter" == e.key && (e.preventDefault(),
            atcb_toggle("auto", a, t, !0, !0))
        });
        break;
    case "apple":
    case "google":
    case "ical":
    case "msteams":
    case "ms365":
    case "outlookcom":
    case "yahoo":
        t.id = a.identifier + "-" + n,
        t.addEventListener("click", atcb_debounce(()=>{
            i ? t.blur() : atcb_toggle("close"),
            atcb_generate_links(n, a)
        }
        )),
        t.addEventListener("keyup", function(e) {
            "Enter" == e.key && (e.preventDefault(),
            i ? t.blur() : atcb_toggle("close"),
            atcb_generate_links(n, a, "all", !0))
        });
        break;
    case "close":
        t.id = a.identifier + "-close",
        t.addEventListener("click", atcb_debounce(()=>{
            atcb_toggle("close")
        }
        )),
        t.addEventListener("keyup", function(e) {
            "Enter" == e.key && (e.preventDefault(),
            atcb_toggle("close", a, "all", !0))
        })
    }
    i && (t.id = a.identifier),
    atcb_generate_label_content(a, t, n, e, o, i)
}
function atcb_generate_label_content(e, a, t, n, o, i) {
    var l = atcb_translate_hook("Add to Calendar", e);
    switch (i && "" == o && (o = l),
    t) {
    case "trigger":
    default:
        o = o || l;
        break;
    case "apple":
        o = o || "Apple";
        break;
    case "google":
        o = o || "Google";
        break;
    case "ical":
        o = o || atcb_translate_hook("iCal File", e);
        break;
    case "msteams":
        o = o || "Microsoft Teams";
        break;
    case "ms365":
        o = o || "Microsoft 365";
        break;
    case "outlookcom":
        o = o || "Outlook.com";
        break;
    case "yahoo":
        o = o || "Yahoo";
        break;
    case "close":
        o = atcb_translate_hook("Close", e)
    }
    "date" == e.buttonStyle && ("trigger" == t || i) || (n && ((i = document.createElement("span")).classList.add("atcb-icon"),
    i.innerHTML = atcbIcon["" + t],
    a.appendChild(i)),
    ("trigger" == t && 1 == e.textLabelButton || "trigger" != t && 1 == e.textLabelList) && ((n = document.createElement("span")).classList.add("atcb-text"),
    n.textContent = o,
    a.appendChild(n)))
}
function atcb_generate_button(e, a) {
    e.textContent = "",
    a.richData && a.name && a.dates[0].location && a.dates[0].startDate && atcb_generate_rich_data(a, e);
    var t = document.createElement("div")
      , n = (t.classList.add("atcb-button-wrapper"),
    t.classList.add("atcb-" + a.lightMode),
    a.rtl && t.classList.add("atcb-rtl"),
    e.appendChild(t),
    atcb_set_sizes(t, a.sizes),
    document.createElement("button"));
    n.classList.add("atcb-button"),
    0 == a.textLabelButton && n.classList.add("atcb-no-text"),
    "click" === a.trigger && n.classList.add("atcb-click"),
    "overlay" === a.listStyle && n.classList.add("atcb-dropoverlay"),
    n.type = "button",
    t.appendChild(n),
    "date" == a.buttonStyle && atcb_generate_date_button(a, n),
    1 === a.options.length ? (n.classList.add("atcb-single"),
    atcb_generate_label(a, n, a.options[0], a.iconButton, a.label, !0)) : (atcb_generate_label(a, n, "trigger", a.iconButton, a.label),
    (t = document.createElement("div")).classList.add("atcb-dropdown-anchor"),
    n.appendChild(t)),
    a.checkmark && ((t = document.createElement("div")).classList.add("atcb-checkmark"),
    t.innerHTML = atcbIcon.checkmark,
    n.appendChild(t)),
    e.classList.remove("atcb"),
    e.classList.add("atcb-initialized"),
    a.inline ? e.style.display = "inline-block" : e.style.display = "block",
    console.log('Add to Calendar Button "' + a.identifier + '" created')
}
function atcb_generate_rich_data(a, e) {
    var t, n = document.createElement("script"), o = (n.type = "application/ld+json",
    []), i = (1 < a.dates.length && ((t = []).push('"@context":"https://schema.org"'),
    t.push('"@type":"EventSeries"'),
    t.push('"@id":"' + a.name.replace(/\s/g, "") + '"'),
    t.push('"name":"' + a.name + '",'),
    o.push("{\r\n" + t.join(",\r\n") + "\r\n")),
    []);
    for (let e = 0; e < a.dates.length; e++) {
        var l = []
          , r = (l.push('"@context":"https://schema.org"'),
        l.push('"@type":"Event"'),
        1 < a.dates.length && l.push('"@id":"' + a.name.replace(/\s/g, "") + "-" + (e + 1) + '"'),
        "CANCELLED" == a.dates["" + e].status && l.push('"eventStatus":"https://schema.org/EventCancelled"'),
        l.push('"name":"' + a.dates["" + e].name + '"'),
        a.dates["" + e].descriptionHtmlFree && l.push('"description":"' + a.dates["" + e].descriptionHtmlFree + '"'),
        atcb_generate_time(a.dates["" + e], "delimiters", "general", !0))
          , s = (l.push('"startDate":"' + r.start + '"'),
        null != r.duration && l.push('"duration":"' + r.duration + '"'),
        l.push(a.dates["" + e].location.startsWith("http") ? '"eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode",\r\n"location": {\r\n"@type":"VirtualLocation",\r\n"url":"' + a.dates["" + e].location + '"\r\n}' : '"location":"' + a.dates["" + e].location + '"'),
        null != a.recurrence && "" != a.recurrence ? l.push(...atcb_generate_rich_data_recurrence(a, r)) : l.push('"endDate":"' + r.end + '"'),
        null != a.dates["" + e].organizer && "" != a.dates["" + e].organizer && (r = a.dates["" + e].organizer.split("|"),
        l.push('"organizer":{\r\n"@type":"Person",\r\n"name":"' + r[0] + '",\r\n"email":"' + r[1] + '"\r\n}')),
        []);
        if (null != a.images) {
            if (Array.isArray(a.images))
                for (let e = 0; e < a.images.length; e++)
                    atcb_secure_url(a.images["" + e]) && a.images["" + e].startsWith("http") && s.push('"' + a.images["" + e] + '"')
        } else
            s.push('"https://add-to-calendar-button.com/demo_assets/img/1x1.png"'),
            s.push('"https://add-to-calendar-button.com/demo_assets/img/4x3.png"'),
            s.push('"https://add-to-calendar-button.com/demo_assets/img/16x9.png"');
        0 < s.length && l.push('"image":[\r\n' + s.join(",\r\n") + "]"),
        i.push("{\r\n" + l.join(",\r\n") + "\r\n}")
    }
    1 < a.dates.length ? n.textContent = o.join(",\r\n") + '"subEvents":[\r\n' + i.join(",\r\n") + "\r\n]\r\n}" : n.textContent = i[0],
    e.appendChild(n)
}
function atcb_generate_rich_data_recurrence(e, a) {
    var t = []
      , n = (t.push('"eventSchedule": { "@type": "Schedule"'),
    null != e.dates[0].timeZone && "" != e.dates[0].timeZone && t.push('"scheduleTimezone":"' + e.dates[0].timeZone + '"'),
    "P" + e.recurrence_interval + e.recurrence_frequency.substr(0, 1));
    return t.push('"repeatFrequency":"' + n + '"'),
    null != e.recurrence_byDay && "" != e.recurrence_byDay && (n = function() {
        if (/\d/.test(e.recurrence_byDay))
            return '"' + e.recurrence_byDay + '"';
        var a = e.recurrence_byDay.split(",")
          , t = {
            MO: "https://schema.org/Monday",
            TU: "https://schema.org/Tuesday",
            WE: "https://schema.org/Wednesday",
            TH: "https://schema.org/Thursday",
            FR: "https://schema.org/Friday",
            SA: "https://schema.org/Saturday",
            SU: "https://schema.org/Sunday"
        }
          , n = [];
        for (let e = 0; e < a.length; e++)
            n.push('"' + t[a["" + e]] + '"');
        return "[" + n.join(",") + "]"
    }(),
    t.push('"byDay":' + n)),
    null != e.recurrence_byMonth && "" != e.recurrence_byMonth && (n = e.recurrence_byMonth.includes(",") ? "[" + e.recurrence_byMonth + "]" : e.recurrence_byMonth,
    t.push('"byMonth":"' + n + '"')),
    null != e.recurrence_byMonthDay && "" != e.recurrence_byMonthDay && (n = e.recurrence_byMonthDay.includes(",") ? "[" + e.recurrence_byMonthDay + "]" : e.recurrence_byMonthDay,
    t.push('"byMonthDay":"' + n + '"')),
    null != e.recurrence_count && "" != e.recurrence_count && t.push('"repeatCount":"' + e.recurrence_count + '"'),
    null != e.recurrence_until && "" != e.recurrence_until && t.push('"endDate":"' + e.recurrence_until + '"'),
    null != e.startTime && "" != e.startTime && null != e.endTime && "" != e.endTime && (t.push('"startTime":"' + e.startTime + ':00"'),
    t.push('"endTime":"' + e.endTime + ':00"'),
    t.push('"duration":"' + a.duration + '"')),
    t.push('"startDate":"' + e.startDate + '" }'),
    t
}
function atcb_generate_dropdown_list(t) {
    const n = document.createElement("div");
    n.classList.add("atcb-list"),
    n.classList.add("atcb-" + t.lightMode),
    t.rtl && n.classList.add("atcb-rtl");
    let o = 0;
    var e;
    return t.options.forEach(function(e) {
        var a = document.createElement("div");
        a.classList.add("atcb-list-item"),
        a.tabIndex = 0,
        o++,
        a.dataset.optionNumber = o,
        n.appendChild(a),
        atcb_generate_label(t, a, e, t.iconList, t.optionLabels[o - 1])
    }),
    "modal" === t.listStyle && ((e = document.createElement("div")).classList.add("atcb-list-item", "atcb-list-item-close"),
    e.tabIndex = 0,
    n.appendChild(e),
    atcb_generate_label(t, e, "close", t.iconList)),
    n
}
function atcb_generate_bg_overlay(e="dropdown", a="", t="light", n=!0) {
    var o = document.createElement("div");
    o.id = "atcb-bgoverlay",
    "modal" !== e && n && o.classList.add("atcb-animate-bg"),
    n || o.classList.add("atcb-no-bg"),
    o.classList.add("atcb-" + t),
    o.tabIndex = 0,
    o.addEventListener("click", atcb_debounce(e=>{
        e.target === e.currentTarget && atcb_toggle("close")
    }
    ));
    let i = !1;
    return o.addEventListener("touchstart", atcb_debounce_leading(()=>i = !1), {
        passive: !0
    }),
    o.addEventListener("touchmove", atcb_debounce_leading(()=>i = !0), {
        passive: !0
    }),
    o.addEventListener("touchend", atcb_debounce(e=>{
        !1 === i && e.target === e.currentTarget && atcb_toggle("close")
    }
    ), {
        passive: !0
    }),
    o.addEventListener("focus", atcb_debounce_leading(e=>{
        e.target === e.currentTarget && atcb_toggle("close")
    }
    )),
    "click" !== a ? o.addEventListener("mousemove", atcb_debounce_leading(e=>{
        e.target === e.currentTarget && atcb_toggle("close")
    }
    )) : o.classList.add("atcb-click"),
    o
}
function atcb_create_atcbl(e=0) {}
function atcb_create_modal(n, e="", a, t="", o=[], i=[], l=!1) {
    var r = document.getElementById("atcb-bgoverlay") || atcb_generate_bg_overlay("modal", "click", n.lightMode, n.background)
      , s = (r.classList.add("atcb-no-animation"),
    document.body.appendChild(r),
    document.createElement("div"))
      , c = (s.classList.add("atcb-modal"),
    r.appendChild(s),
    document.querySelectorAll(".atcb-modal").length)
      , d = (s.dataset.modalNr = c,
    s.tabIndex = 0,
    s.focus({
        preventScroll: !0
    }),
    s.blur(),
    document.getElementById(n.identifier))
      , d = (null != d && d.classList.add("atcb-active-modal"),
    document.createElement("div"))
      , e = (d.classList.add("atcb-modal-box"),
    d.classList.add("atcb-" + n.lightMode),
    n.rtl && d.classList.add("atcb-rtl"),
    s.appendChild(d),
    atcb_set_sizes(d, n.sizes),
    atcb_set_fullsize(r),
    "" != e && 1 == n.iconModal && ((r = document.createElement("div")).classList.add("atcb-modal-icon"),
    r.innerHTML = atcbIcon["" + e],
    d.appendChild(r)),
    document.createElement("div"));
    if (e.classList.add("atcb-modal-headline"),
    e.textContent = a,
    d.appendChild(e),
    "" != t && ((r = document.createElement("div")).classList.add("atcb-modal-content"),
    r.innerHTML = t,
    d.appendChild(r)),
    1 < i.length) {
        n.branding && atcb_create_atcbl(!1);
        var u = document.createElement("div");
        u.classList.add("atcb-modal-content"),
        d.appendChild(u);
        for (let e = 1; e < i.length; e++) {
            var m = document.createElement("button");
            switch (m.type = "button",
            m.id = n.identifier + "-" + i[0] + "-" + e,
            0 < atcbStates["" + n.identifier]["" + i[0]][e - 1] && m.classList.add("atcb-saved"),
            m.classList.add("atcb-subevent-btn"),
            u.appendChild(m),
            atcb_generate_date_button(n, m, e),
            1 == e && l && m.focus(),
            i[0]) {
            case "apple":
            case "google":
            case "ical":
            case "msteams":
            case "ms365":
            case "outlookcom":
            case "yahoo":
                m.addEventListener("click", atcb_debounce(()=>{
                    atcb_generate_links(i[0], n, i["" + e], l, !0)
                }
                ))
            }
        }
    }
    0 == o.length && o.push({
        type: "close",
        label: atcb_translate_hook("Close", n)
    });
    const b = document.createElement("div");
    b.classList.add("atcb-modal-buttons"),
    d.appendChild(b),
    o.forEach((e,a)=>{
        let t;
        switch (null != e.href && "" != e.href ? ((t = document.createElement("a")).setAttribute("target", atcbDefaultTarget),
        t.setAttribute("href", e.href),
        t.setAttribute("rel", "noopener")) : (t = document.createElement("button")).type = "button",
        t.classList.add("atcb-modal-btn"),
        e.primary && t.classList.add("atcb-modal-btn-primary"),
        null != e.label && "" != e.label || (e.label = atcb_translate_hook("Click me", n)),
        t.textContent = e.label,
        b.appendChild(t),
        0 == a && i.length < 2 && l && t.focus(),
        e.type) {
        default:
        case "close":
            t.addEventListener("click", atcb_debounce(()=>atcb_close())),
            t.addEventListener("keyup", function(e) {
                "Enter" == e.key && atcb_toggle("close", "", "", !0)
            });
            break;
        case "yahoo2nd":
            t.addEventListener("click", atcb_debounce(()=>{
                atcb_close(),
                atcb_subscribe_yahoo_modal_switch(n)
            }
            )),
            t.addEventListener("keyup", function(e) {
                "Enter" == e.key && (atcb_toggle("close", "", "", !0),
                atcb_subscribe_yahoo_modal_switch(n, l))
            });
            break;
        case "none":
        }
    }
    ),
    1 < c && (document.querySelectorAll('.atcb-modal[data-modal-nr="' + (c - 1) + '"]')[0].style.display = "none"),
    atcb_manage_body_scroll(s)
}
function atcb_subscribe_yahoo_modal_switch(e, a) {
    atcb_set_fully_successful(e.identifier),
    atcb_generate_links("yahoo2nd", e, "all", a)
}
function atcb_generate_date_button(u, e, m="all") {
    "all" != m ? m = parseInt(m) - 1 : 1 == u.dates.length && (m = 0);
    var a = function() {
        let e, a, t, n, o = {}, i = {}, l = (n = "all" == m ? (o = atcb_generate_time(u.dates[0]),
        i = atcb_generate_time(u.dates[u.dates.length - 1]),
        t = u.dates[0].timeZone,
        u.dates[u.dates.length - 1].timeZone) : (o = atcb_generate_time(u.dates["" + m]),
        i = o,
        t = u.dates["" + m].timeZone),
        e = new Date(o.start),
        a = new Date(i.end),
        null != t && "" != t && !o.allday || (t = "UTC"),
        null != n && "" != n && !i.allday || (n = "UTC"),
        ""), r = "", s = "";
        o.allday || Intl.DateTimeFormat().resolvedOptions().timeZone == t || t == n || (r = " (" + t + ")"),
        (i.allday || Intl.DateTimeFormat().resolvedOptions().timeZone == n) && t == n || (s = " (" + n + ")");
        var c = get_format_options(t)
          , d = get_format_options(n);
        return e.getFullYear() === a.getFullYear() && e.getMonth() === a.getMonth() && e.getDate() === a.getDate() ? l = o.allday ? e.toLocaleDateString(u.language, c.DateShort) : e.toLocaleString(u.language, c.DateTimeShort) + r + " - " + a.toLocaleTimeString(u.language, d.Time) + s : (l = o.allday ? e.toLocaleDateString(u.language, c.DateShort) : e.toLocaleString(u.language, c.DateTimeShort),
        l += r + " - ",
        i.allday ? l += a.toLocaleDateString(u.language, d.DateLong) : l += a.toLocaleString(u.language, d.DateTimeLong),
        l += s),
        l
    }()
      , t = "all" != m && "CANCELLED" == u.dates["" + m].status ? atcb_translate_hook("Cancelled Date", u) + "<br>" + atcb_translate_hook("Delete from Calendar", u) : "+ " + atcb_translate_hook("Add to Calendar", u)
      , n = "all" != m && "CANCELLED" == u.dates["" + m].status ? atcb_translate_hook("Cancelled Date", u) : ""
      , o = ("all" == m && (m = 0),
    new Date(u.dates["" + m].startDate))
      , i = null != u.dates["" + m].timeZone && "" != u.dates["" + m].timeZone ? u.dates["" + m].timeZone : "UTC"
      , l = document.createElement("div")
      , r = (l.classList.add("atcb-date-btn-left"),
    e.appendChild(l),
    document.createElement("div"))
      , s = (r.classList.add("atcb-date-btn-day"),
    l.appendChild(r),
    document.createElement("div"))
      , r = (s.classList.add("atcb-date-btn-month"),
    r.textContent = o.toLocaleString(u.language, {
        day: "numeric",
        timeZone: i
    }),
    s.textContent = o.toLocaleString(u.language, {
        month: "short",
        timeZone: i
    }),
    l.appendChild(s),
    document.createElement("div"))
      , o = (r.classList.add("atcb-date-btn-right"),
    e.appendChild(r),
    document.createElement("div"))
      , i = (o.classList.add("atcb-date-btn-details"),
    r.appendChild(o),
    document.createElement("div"))
      , n = (i.classList.add("atcb-date-btn-headline"),
    i.textContent = u.dates["" + m].name,
    o.appendChild(i),
    (null != u.location && "" != u.location || "" != n) && ((l = document.createElement("div")).classList.add("atcb-date-btn-content"),
    o.appendChild(l),
    "" != n ? (l.textContent = n,
    l.style.fontWeight = "600",
    l.style.color = "#9c1a23") : (l.classList.add("atcb-date-btn-content-location"),
    (s = document.createElement("span")).classList.add("atcb-date-btn-content-icon"),
    s.innerHTML = atcbIcon.location,
    l.appendChild(s),
    (i = document.createElement("span")).textContent = u.location,
    l.appendChild(i))),
    document.createElement("div"))
      , s = (n.classList.add("atcb-date-btn-content"),
    o.appendChild(n),
    document.createElement("span"))
      , l = (s.classList.add("atcb-date-btn-content-icon"),
    s.innerHTML = atcbIcon.ical,
    n.appendChild(s),
    document.createElement("span"))
      , o = (l.textContent = a,
    n.appendChild(l),
    null != u.recurrence && "" != u.recurrence && ((i = document.createElement("span")).classList.add("atcb-date-btn-content-recurr-icon"),
    n.appendChild(i),
    i.innerHTML = "&#x27F3;"),
    document.createElement("div"));
    o.classList.add("atcb-date-btn-hover"),
    o.innerHTML = t,
    r.appendChild(o),
    u.checkmark && ((s = document.createElement("div")).classList.add("atcb-checkmark"),
    s.innerHTML = atcbIcon.checkmark,
    e.appendChild(s))
}
function get_format_options(e) {
    return {
        DateShort: {
            timeZone: e,
            year: "numeric"
        },
        DateLong: {
            timeZone: e,
            year: "numeric",
            month: "numeric",
            day: "numeric"
        },
        DateTimeShort: {
            timeZone: e,
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hourCycle: "h23"
        },
        DateTimeLong: {
            timeZone: e,
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hourCycle: "h23"
        },
        Time: {
            timeZone: e,
            hour: "numeric",
            minute: "2-digit",
            hourCycle: "h23"
        }
    }
}
function atcb_generate_links(e, a, t="all", n=!1, o=!1) {
    if ("all" != t ? t = parseInt(t) - 1 : 1 == a.dates.length && (t = 0),
    a.subscribe)
        atcb_generate_subscribe_links(e, a, n);
    else if (!isMobile() || "msteams" != e && "ms365" != e && "outlookcom" != e || (e = "ical"),
    "all" != t) {
        if ("CANCELLED" == a.dates["" + t].status && "apple" != e && "ical" != e)
            atcb_create_modal(a, "warning", atcb_translate_hook("Cancelled Date", a), atcb_translate_hook("Delete from Calendar", a), [], [], n);
        else
            switch (e) {
            case "apple":
            case "ical":
                atcb_generate_ical(a, t, n);
                break;
            case "google":
                atcb_generate_google(a.dates["" + t]);
                break;
            case "msteams":
                atcb_generate_msteams(a.dates["" + t]);
                break;
            case "ms365":
                atcb_generate_microsoft(a.dates["" + t]);
                break;
            case "outlookcom":
                atcb_generate_microsoft(a.dates["" + t], "outlook");
                break;
            case "yahoo":
                atcb_generate_yahoo(a.dates["" + t])
            }
        var i = document.getElementById(a.identifier + "-" + e + "-" + (t + 1))
          , i = (i && i.classList.add("atcb-saved"),
        atcbStates["" + a.identifier]["" + e]["" + t]++,
        atcbStates["" + a.identifier]["" + e].filter(function(e) {
            return e < 1
        }));
        0 == i.length && atcb_set_fully_successful(a.identifier, o)
    } else
        atcb_generate_multidate_links(e, a, n, o)
}
function atcb_generate_multidate_links(a, t, e, n) {
    if ("ical" != a && "apple" != a || !t.dates.every(function(e) {
        return "CANCELLED" != e.status && (null == e.organizer || "" == e.organizer)
    })) {
        if (!n) {
            var o = [a];
            for (let e = 0; e < t.dates.length; e++)
                o.push(e + 1);
            atcb_create_modal(t, a, atcb_translate_hook("modal.multidate.h", t), atcb_translate_hook("modal.multidate.text", t), [], o, e)
        }
    } else {
        atcb_generate_ical(t, "all", e);
        for (let e = 0; e < atcbStates["" + t.identifier]["" + a].length; e++)
            atcbStates["" + t.identifier]["" + a]["" + e]++;
        atcb_set_fully_successful(t.identifier, n)
    }
}
function atcb_generate_subscribe_links(e, a, t) {
    var n = a.icsFile.replace("https://", "webcal://");
    switch (e) {
    case "apple":
    case "ical":
        atcb_subscribe_ical(n);
        break;
    case "google":
        atcb_subscribe_google(n.replace("webcal://calendar.google.com/calendar/u/2?cid=", ""));
        break;
    case "ms365":
        atcb_subscribe_microsoft(n, a.name);
        break;
    case "outlookcom":
        atcb_subscribe_microsoft(n, a.name, "outlook");
        break;
    case "yahoo":
        return atcb_copy_to_clipboard(a.icsFile),
        void atcb_create_modal(a, "yahoo", atcb_translate_hook("modal.subscribe.yahoo.h", a), atcb_translate_hook("modal.clipboard.text", a) + "<br>" + atcb_translate_hook("modal.subscribe.yahoo.text", a), [{
            label: atcb_translate_hook("Open Yahoo Calendar", a),
            primary: !0,
            type: "yahoo2nd",
            href: "https://www.yahoo.com/calendar"
        }, {
            label: atcb_translate_hook("Cancel", a)
        }], [], t);
    case "yahoo2nd":
        return atcb_copy_to_clipboard(a.icsFile),
        void atcb_create_modal(a, "yahoo", atcb_translate_hook("modal.subscribe.yahoo.h", a), atcb_translate_hook("modal.clipboard.text", a) + "<br>" + atcb_translate_hook("modal.subscribe.yahoo.text", a), [{
            label: atcb_translate_hook("Open Yahoo Calendar", a),
            type: "none",
            href: "https://www.yahoo.com/calendar"
        }, {
            label: atcb_translate_hook("Cancel", a)
        }], [], t)
    }
    atcb_set_fully_successful(a.identifier)
}
function atcb_set_fully_successful(e, a) {
    e = document.getElementById(e);
    e && e.classList.add("atcb-saved"),
    atcb_saved_hook(),
    a && document.querySelectorAll(".atcb-modal[data-modal-nr]").length < 2 && atcb_toggle("close")
}
function atcb_subscribe_ical(e) {
    atcb_open_cal_url(e)
}
function atcb_subscribe_google(e) {
    atcb_open_cal_url("https://calendar.google.com/calendar/r?cid=" + e)
}
function atcb_subscribe_microsoft(e, a, t="365") {
    var n = []
      , t = "outlook" == t ? "https://outlook.live.com/calendar/0/addfromweb/?" : "https://outlook.office.com/calendar/0/addfromweb/?";
    n.push("url=" + encodeURIComponent(e)),
    n.push("name=" + encodeURIComponent(a)),
    atcb_open_cal_url(t + n.join("&"))
}
function atcb_generate_google(e) {
    var a = []
      , t = (a.push("https://calendar.google.com/calendar/render?action=TEMPLATE"),
    atcb_generate_time(e, "clean", "google"))
      , t = (a.push("dates=" + encodeURIComponent(t.start) + "%2F" + encodeURIComponent(t.end)),
    null == e.timeZone || "" == e.timeZone || /(GMT[+|-]\d{1,2}|Etc\/U|Etc\/Zulu|CET|CST6CDT|EET|EST|EST5EDT|MET|MST|MST7MDT|PST8PDT|WET)/i.test(e.timeZone) || a.push("ctz=" + e.timeZone),
    null != e.name && "" != e.name && a.push("text=" + encodeURIComponent(e.name)),
    []);
    null != e.description && "" != e.description && t.push(e.description),
    null != e.location && "" != e.location && (a.push("location=" + encodeURIComponent(e.location)),
    isiOS() && (0 < t.length && t.push("<br><br>"),
    t.push("&#128205;: " + e.location))),
    0 < t.length && a.push("details=" + encodeURIComponent(t.join())),
    null != e.recurrence && "" != e.recurrence && a.push("recur=" + encodeURIComponent(e.recurrence)),
    null != e.availability && "" != e.availability && (t = "free" == e.availability ? "crm=AVAILABLE&trp=false" : "crm=BUSY&trp=true",
    a.push(t)),
    a.push("uid=" + encodeURIComponent(e.uid)),
    atcb_open_cal_url(a.join("&"))
}
function atcb_generate_yahoo(e) {
    var a = []
      , t = (a.push("https://calendar.yahoo.com/?v=60"),
    atcb_generate_time(e, "clean"));
    a.push("st=" + encodeURIComponent(t.start) + "&et=" + encodeURIComponent(t.end)),
    t.allday && a.push("dur=allday"),
    null != e.name && "" != e.name && a.push("title=" + encodeURIComponent(e.name)),
    null != e.location && "" != e.location && a.push("in_loc=" + encodeURIComponent(e.location)),
    null != e.descriptionHtmlFree && "" != e.descriptionHtmlFree && a.push("desc=" + encodeURIComponent(e.descriptionHtmlFree)),
    atcb_open_cal_url(a.join("&"))
}
function atcb_generate_microsoft(e, a="365") {
    var t = [];
    const n = "/calendar/0/deeplink/compose?path=%2Fcalendar%2Faction%2Fcompose&rru=addevent";
    a = "outlook" == a ? "https://outlook.live.com" + n : "https://outlook.office.com" + n,
    t.push(a),
    a = atcb_generate_time(e, "delimiters", "microsoft");
    t.push("startdt=" + encodeURIComponent(a.start)),
    t.push("enddt=" + encodeURIComponent(a.end)),
    a.allday && t.push("allday=true"),
    null != e.name && "" != e.name && t.push("subject=" + encodeURIComponent(e.name)),
    null != e.location && "" != e.location && t.push("location=" + encodeURIComponent(e.location)),
    null != e.description && "" != e.description && t.push("body=" + encodeURIComponent(e.description.replace(/\n/g, "<br>"))),
    t.push("uid=" + encodeURIComponent(e.uid)),
    atcb_open_cal_url(t.join("&"))
}
function atcb_generate_msteams(e) {
    var a = []
      , t = atcb_generate_time(e, "delimiters", "microsoft");
    a.push("startTime=" + encodeURIComponent(t.start)),
    a.push("endTime=" + encodeURIComponent(t.end)),
    null != e.name && "" != e.name && a.push("subject=" + encodeURIComponent(e.name));
    let n = "";
    null != e.location && "" != e.location && (n = encodeURIComponent(e.location),
    a.push("location=" + n),
    n += " // "),
    null != e.descriptionHtmlFree && "" != e.descriptionHtmlFree && a.push("content=" + n + encodeURIComponent(e.descriptionHtmlFree)),
    a.push("uid=" + encodeURIComponent(e.uid)),
    atcb_open_cal_url("https://teams.microsoft.com/l/meeting/new?" + a.join("&"))
}
function atcb_open_cal_url(e, a="") {
    "" == a && (a = atcbDefaultTarget),
    atcb_secure_url(e) && window.open(e, a).focus()
}
function atcb_generate_ical(a, e="all", t=!1) {
    "all" != e && (e = parseInt(e));
    var n = atcb_determine_ical_filename(a, e);
    const o = "all" != e && null != a.dates["" + e].icsFile && "" != a.dates["" + e].icsFile ? a.dates["" + e].icsFile : null != a.icsFile && "" != a.icsFile ? a.icsFile : "";
    if ("" == o || isiOS() && isWebView()) {
        var i = new Date;
        const c = ["BEGIN:VCALENDAR", "VERSION:2.0"]
          , d = (c.push("PRODID:-// https://add-to-calendar-pro.com // button v" + atcbVersion + " //EN"),
        c.push("CALSCALE:GREGORIAN"),
        "all" == e ? c.push("METHOD:PUBLISH") : null != a.dates["" + e].status && "CANCELLED" == a.dates["" + e].status ? c.push("METHOD:CANCEL") : null != a.dates["" + e].organizer && "" != a.dates["" + e].organizer ? c.push("METHOD:REQUEST") : c.push("METHOD:PUBLISH"),
        []);
        var l = "all" != e ? e : 0
          , r = "all" != e ? e : a.dates.length - 1;
        for (let e = l; e <= r; e++) {
            const u = atcb_generate_time(a.dates["" + e], "clean", "ical");
            s = void 0;
            var s = u.allday ? ";VALUE=DATE" : null != a.dates["" + e].timeZone && "" != a.dates["" + e].timeZone ? (s = tzlib_get_ical_block(a.dates["" + e].timeZone),
            d.includes(a.dates["" + e].timeZone) || c.push(s[0]),
            d.push(a.dates["" + e].timeZone),
            ";" + s[1]) : void 0;
            c.push("BEGIN:VEVENT"),
            c.push("UID:" + a.dates["" + e].uid),
            c.push("DTSTAMP:" + atcb_format_datetime(i, "clean", !0)),
            c.push("DTSTART" + s + ":" + u.start),
            c.push("DTEND" + s + ":" + u.end),
            c.push("SUMMARY:" + a.dates["" + e].name.replace(/.{65}/g, "$&\r\n ")),
            null != a.dates["" + e].descriptionHtmlFree && "" != a.dates["" + e].descriptionHtmlFree && c.push("DESCRIPTION:" + a.dates["" + e].descriptionHtmlFree.replace(/\n/g, "\\n").replace(/.{60}/g, "$&\r\n ")),
            null != a.dates["" + e].description && "" != a.dates["" + e].description && c.push('X-ALT-DESC;FMTTYPE=text/html:\r\n <!DOCTYPE HTML PUBLIC ""-//W3C//DTD HTML 3.2//EN"">\r\n <HTML><BODY>\r\n ' + a.dates["" + e].description.replace(/\n/g, "<br>").replace(/.{60}/g, "$&\r\n ") + "\r\n </BODY></HTML>"),
            null != a.dates["" + e].location && "" != a.dates["" + e].location && c.push("LOCATION:" + a.dates["" + e].location),
            null != a.dates["" + e].organizer && "" != a.dates["" + e].organizer && (s = a.dates["" + e].organizer.split("|"),
            c.push("ORGANIZER;CN=" + s[0] + ":MAILTO:" + s[1])),
            null != a.recurrence && "" != a.recurrence && c.push(a.recurrence),
            null != a.dates["" + e].availability && "" != a.dates["" + e].availability && (s = "free" == a.dates["" + e].availability ? "TRANSPARENT" : "OPAQUE",
            c.push("TRANSP:" + s)),
            c.push("SEQUENCE:" + a.dates["" + e].sequence),
            c.push("STATUS:" + a.dates["" + e].status),
            c.push("CREATED:" + a.created),
            c.push("LAST-MODIFIED:" + a.updated),
            c.push("END:VEVENT")
        }
        c.push("END:VCALENDAR");
        e = "" != o ? o : "data:text/calendar;charset=utf-8," + encodeURIComponent(c.join("\r\n"));
        isiOS() && isChrome() || isWebView() && (isiOS() || isAndroid() && isProblematicWebView()) ? atcb_ical_copy_note(e, a, t) : atcb_save_file(e, n)
    } else
        atcb_save_file(o, n)
}
function atcb_determine_ical_filename(e, a) {
    a = "all" != a && 0 != a ? "-" + parseInt(a) + 1 : "";
    if (null != e.iCalFileName && "" != e.iCalFileName)
        return e.iCalFileName + a;
    if (null != e.icsFile && "" != e.icsFile) {
        e = e.icsFile.split("/").pop().split(".")[0];
        if ("" != e)
            return e + a
    }
    return "event-to-save-in-my-calendar" + a
}
function atcb_ical_copy_note(e, a, t) {
    atcb_copy_to_clipboard(e),
    isiOS() && isChrome() ? atcb_create_modal(a, "warning", atcb_translate_hook("modal.crios.ical.h", a), atcb_translate_hook("modal.crios.ical.text", a) + "<br>" + atcb_translate_hook("modal.clipboard.text", a) + "<br>" + atcb_translate_hook("modal.crios.ical.steps", a), [], [], t) : atcb_create_modal(a, "warning", atcb_translate_hook("modal.webview.ical.h", a), atcb_translate_hook("modal.webview.ical.text", a) + "<br>" + atcb_translate_hook("modal.clipboard.text", a) + "<br>" + atcb_translate_hook("modal.webview.ical.steps", a), [], [], t)
}
function atcb_saved_hook() {
    console.log("Event saved. Looking forward to it!")
}
function atcb_save_file(e, a) {
    try {
        var t = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
          , n = (t.rel = "noopener",
        t.href = e,
        isMobile() ? t.target = "_self" : t.target = "_blank",
        t.download = a + ".ics",
        new MouseEvent("click",{
            view: window,
            button: 0,
            bubbles: !0,
            cancelable: !1
        }));
        t.dispatchEvent(n),
        (window.URL || window.webkitURL).revokeObjectURL(t.href)
    } catch (e) {
        console.error(e)
    }
}
function atcb_generate_time(e, a="delimiters", t="general", n=!1) {
    if (null == e.startTime || "" == e.startTime || null == e.endTime || "" == e.endTime)
        return o = e.startDate.split("-"),
        i = e.endDate.split("-"),
        o = new Date(Date.UTC(o[0], o[1] - 1, o[2], 12, 0, 0)),
        i = new Date(Date.UTC(i[0], i[1] - 1, i[2], 12, 0, 0)),
        "google" != t && "microsoft" != t && "ical" != t || i.setDate(i.getDate() + 1),
        {
            start: atcb_format_datetime(o, a, !1),
            end: atcb_format_datetime(i, a, !1),
            allday: !0
        };
    {
        var o = new Date(e.startDate + "T" + e.startTime + ":00.000+00:00")
          , i = new Date(e.endDate + "T" + e.endTime + ":00.000+00:00")
          , l = i - o;
        const s = Math.floor(l / 1e3 / 60 / 60)
          , c = Math.floor((l - 60 * s * 60 * 1e3) / 1e3 / 60 % 60);
        l = s < 10 ? "0" + s + ":" + ("0" + c).slice(-2) : s + ":" + ("0" + c).slice(-2);
        if ((null == e.timeZone || null != e.timeZone && "" == e.timeZone) && n)
            return {
                start: o.toISOString().replace(".000Z", "+00:00"),
                end: i.toISOString().replace(".000Z", "+00:00"),
                duration: l,
                allday: !1
            };
        if (null != e.timeZone && "" != e.timeZone) {
            if ("ical" == t || "google" == t && !/(GMT[+|-]\d{1,2}|Etc\/U|Etc\/Zulu|CET|CST6CDT|EET|EST|EST5EDT|MET|MST|MST7MDT|PST8PDT|WET)/i.test(e.timeZone))
                return {
                    start: atcb_format_datetime(o, "clean", !0, !0),
                    end: atcb_format_datetime(i, "clean", !0, !0),
                    duration: l,
                    allday: !1
                };
            t = tzlib_get_offset(e.timeZone, e.startDate, e.startTime),
            e = tzlib_get_offset(e.timeZone, e.endDate, e.endTime);
            if (n)
                return n = t.slice(0, 3) + ":" + t.slice(3),
                r = e.slice(0, 3) + ":" + e.slice(3),
                {
                    start: o.toISOString().replace(".000Z", n),
                    end: i.toISOString().replace(".000Z", r),
                    duration: l,
                    allday: !1
                };
            var n = -1 * parseInt(t[0] + 1) * (60 * (60 * parseInt(t.substr(1, 2)) + parseInt(t.substr(3, 2))) * 1e3)
              , r = -1 * parseInt(e[0] + 1) * (60 * (60 * parseInt(e.substr(1, 2)) + parseInt(e.substr(3, 2))) * 1e3);
            o.setTime(o.getTime() + n),
            i.setTime(i.getTime() + r)
        }
        return {
            start: atcb_format_datetime(o, a),
            end: atcb_format_datetime(i, a),
            duration: l,
            allday: !1
        }
    }
}
function atcb_format_datetime(e, a="delimiters", t=!0, n=!1) {
    t = t ? "clean" == a ? /(-|:|(\.\d{3}))/g : /(\.\d{3})/g : "clean" == a ? /(-|T(\d{2}:\d{2}:\d{2}\.\d{3})Z)/g : /T(\d{2}:\d{2}:\d{2}\.\d{3})Z/g;
    return n ? e.toISOString().replace(t, "").replace("Z", "") : e.toISOString().replace(t, "")
}
function atcb_secure_content(e, a=!0) {
    e = (a ? JSON.stringify(e) : e).replace(/(<(?!br)([^>]+)>)/gi, "");
    return a ? JSON.parse(e) : e
}
function atcb_secure_url(e, a=!0) {
    return !e.match(/((\.\.\/)|(\.\.\\)|(%2e%2e%2f)|(%252e%252e%252f)|(%2e%2e\/)|(%252e%252e\/)|(\.\.%2f)|(\.\.%252f)|(%2e%2e%5c)|(%252e%252e%255c)|(%2e%2e\\)|(%252e%252e\\)|(\.\.%5c)|(\.\.%255c)|(\.\.%c0%af)|(\.\.%25c0%25af)|(\.\.%c1%9c)|(\.\.%25c1%259c))/gi) || (a && console.error("Seems like the generated URL includes at least one security issue and got blocked. Please check the calendar button parameters!"),
    !1)
}
function atcb_validEmail(e, a=!1) {
    return !!/^.{0,70}@.{1,30}\.[\w.]{2,9}$/.test(e) && (a && console.log("Testing for MX records not yet available"),
    !0)
}
function atcb_rewrite_html_elements(e, a=!1) {
    return e = e.replace(/<br\s*\/?>/gi, "\n"),
    e = a ? e.replace(/\[(|\/)(url|br|hr|p|b|strong|u|i|em|li|ul|ol|h\d)\]|((\|.*)\[\/url\])/gi, "") : (e = e.replace(/\[(\/|)(br|hr|p|b|strong|u|i|em|li|ul|ol|h\d)\]/gi, "<$1$2>")).replace(/\[url\]([\w&$+.,:;=~!*'?@^%#|\s\-()/]*)\[\/url\]/gi, function(e, a) {
        const t = a.split("|");
        a = 1 < t.length && "" != t[1] ? t[1] : t[0];
        return '<a href="' + t[0] + '" target="' + atcbDefaultTarget + '" rel="noopener">' + a + "</a>"
    })
}
function atcb_position_list(e, a, t=!1, n=!1) {
    let o = !1;
    var i = e;
    null !== e.querySelector(".atcb-dropdown-anchor") && (e = e.querySelector(".atcb-dropdown-anchor"),
    o = !0);
    let l = e.getBoundingClientRect()
      , r = a.getBoundingClientRect();
    var s = i.getBoundingClientRect()
      , c = document.documentElement.clientHeight
      , d = document.getElementById("atcb-pos-wrapper")
      , d = (null !== d && (d.style.height = c + "px"),
    !0 !== o || a.classList.contains("atcb-dropoverlay") ? (a.style.minWidth = s.width + 20 + "px",
    r = a.getBoundingClientRect(),
    a.style.top = window.scrollY + s.top + s.height / 2 - r.height / 2 + "px",
    a.style.left = s.left - (r.width - s.width) / 2 + "px") : (a.classList.contains("atcb-dropup") && n || !t && !n && l.top + r.height > c - 20 && 20 < 2 * s.top + s.height - l.top - r.height ? (i.classList.add("atcb-dropup"),
    a.classList.add("atcb-dropup"),
    a.style.bottom = 2 * c - (c + (s.top + (s.top + s.height - l.top))) - window.scrollY + "px") : (a.style.top = window.scrollY + l.top + "px",
    i.classList.contains("atcb-dropup") && i.classList.remove("atcb-dropup")),
    l = e.getBoundingClientRect(),
    a.classList.contains("atcb-style-bubble") || a.classList.contains("atcb-style-text") ? a.style.minWidth = l.width + "px" : a.style.width = l.width + "px",
    r = a.getBoundingClientRect(),
    a.style.left = l.left - (r.width - l.width) / 2 + "px"),
    document.getElementById("add-to-calendar-button-reference"));
    d && (i.classList.contains("atcb-dropup") ? (d.style.top = window.scrollY + s.top + s.height + "px",
    d.style.left = s.left + (s.width - 150) / 2 + "px") : (r = a.getBoundingClientRect(),
    i.classList.contains("atcb-dropoverlay") || !o ? d.style.top = window.scrollY + r.top + r.height + "px" : d.style.top = window.scrollY + l.top + r.height + "px",
    d.style.left = r.left + (r.width - 150) / 2 + "px"))
}
function atcb_manage_body_scroll(e=null) {
    e = null != e ? e : 0 == (e = document.querySelectorAll(".atcb-modal")).length ? null : e[e.length - 1];
    null != e && (e.getBoundingClientRect().height + 100 > window.innerHeight ? document.body.classList.add("atcb-modal-no-scroll") : document.body.classList.remove("atcb-modal-no-scroll"))
}
function atcb_set_fullsize(e) {
    e.style.width = window.innerWidth + "px",
    e.style.height = window.innerHeight + 100 + "px"
}
function atcb_set_sizes(e, a) {
    e.style.setProperty("--base-font-size-l", a.l + "px"),
    e.style.setProperty("--base-font-size-m", a.m + "px"),
    e.style.setProperty("--base-font-size-s", a.s + "px")
}
function atcb_generate_uuid() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e=>(e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16))
}
function atcb_copy_to_clipboard(e) {
    var a, t, n = document.createElement("input"), o = (document.body.appendChild(n),
    n.contentEditable), i = n.readOnly;
    n.value = e,
    n.contentEditable = !0,
    n.readOnly = !1,
    isiOS() ? ((a = document.createRange()).selectNodeContents(n),
    (t = window.getSelection()).removeAllRanges(),
    t.addRange(a),
    n.setSelectionRange(0, 999999)) : (navigator.clipboard.writeText(e),
    n.select()),
    n.contentEditable = o,
    n.readOnly = i,
    document.execCommand("copy"),
    n.remove()
}
function atcb_debounce(a, t=200) {
    let n;
    return (...e)=>{
        clearTimeout(n),
        n = setTimeout(()=>{
            a.apply(this, e)
        }
        , t)
    }
}
function atcb_debounce_leading(a, t=300) {
    let n;
    return (...e)=>{
        n || a.apply(this, e),
        clearTimeout(n),
        n = setTimeout(()=>{
            n = void 0
        }
        , t)
    }
}
function atcb_throttle(n, o=10) {
    let i, l = null, r = 0, s = (...e)=>{
        r = Date.now(),
        l = null,
        i = n.apply(this, e)
    }
    ;
    return (...e)=>{
        var a = Date.now()
          , t = o - (a - r);
        return t <= 0 || o < t ? (l && (clearTimeout(l),
        l = null),
        r = a,
        i = n.apply(this, e)) : l = l || setTimeout(s, t),
        i
    }
}
const i18nStrings = {
    en: {
        "Add to Calendar": "Add to Calendar",
        "iCal File": "iCal File",
        Close: "Close",
        "Close Selection": "Close Selection",
        "Click me": "Click me",
        "modal.webview.ical.h": "Open your browser",
        "modal.webview.ical.text": "Unfortunately, in-app browsers have problems with the way we generate the calendar file.",
        "modal.clipboard.text": "We automatically copied a magical URL into your clipboard.",
        "modal.webview.ical.steps": "<ol><li><strong>Open another browser</strong> on your phone, ...</li><li><strong>Paste</strong> the clipboard content and go.</li></ol>",
        "modal.crios.ical.h": "Open Safari",
        "modal.crios.ical.text": "Unfortunately, Chrome on iOS has problems with the way we generate the calendar file.",
        "modal.crios.ical.steps": "<ol><li><strong>Open Safari</strong>, ...</li><li><strong>Paste</strong> the clipboard content and go.</li></ol>",
        "modal.multidate.h": "This is an event series",
        "modal.multidate.text": "Add the individual events one by one:",
        Event: "Event",
        "Cancelled Date": "This date got cancelled.",
        "Delete from Calendar": "Please update your calendar!",
        "modal.subscribe.yahoo.h": "Add Calendar to Yahoo",
        "modal.subscribe.yahoo.text": '<ol><li>Open now the Yahoo Calendar.</li><li>Click the "Actions" tab.</li><li>Hit "Follow Other Calendars".</li><li>Set a name and past the clipboard content into the url field.</li></ol>',
        Cancel: "Cancel"
    },
    de: {
        "Add to Calendar": "Im Kalender speichern",
        "iCal File": "iCal-Datei",
        Close: "SchlieĂŸen",
        "Close Selection": "Auswahl schlieĂŸen",
        "Click me": "Klick mich",
        "modal.webview.ical.h": "Ă–ffne deinen Browser",
        "modal.webview.ical.text": "Leider haben In-App-Browser Probleme mit der Art, wie wir Kalender-Dateien erzeugen.",
        "modal.clipboard.text": "Wir haben automatisch eine magische URL in deine Zwischenablage kopiert.",
        "modal.webview.ical.steps": "<ol><li><strong>Ă–ffne einen anderen Browser</strong> auf deinem Smartphone, ...</li><li>Nutze die <strong>EinfĂ¼gen</strong>-Funktion, um fortzufahren.</li></ol>",
        "modal.crios.ical.h": "Ă–ffne Safari",
        "modal.crios.ical.text": "Leider Chrome unter iOS Probleme mit der Art, wie wir Kalender-Dateien erzeugen.",
        "modal.crios.ical.steps": "<ol><li><strong>Ă–ffne Safari</strong>, ...</li><li>Nutze die <strong>EinfĂ¼gen</strong>-Funktion, um fortzufahren.</li></ol>",
        "modal.multidate.h": "Dies is eine Termin-Reihe",
        "modal.multidate.text": "FĂ¼ge die einzelnen Termine der Reihe nach deinem Kalender hinzu:",
        Event: "Termin",
        "Cancelled Date": "Dieser Termin wurde abgesagt.",
        "Delete from Calendar": "Bitte aktualisiere deinen Kalender!",
        "modal.subscribe.yahoo.h": "Kalender zu Yahoo hinzufĂ¼gen",
        "modal.subscribe.yahoo.text": '<ol><li>Ă–ffne den Yahoo Kalender.</li><li>Klicke auf den "Aktionen" Tab.</li><li>WĂ¤hle "Weiteren Kalendern folgen".</li><li>WĂ¤hle einen Namen und fĂ¼ge die URL aus deiner Zwischenablage in das URL-Feld ein.</li></ol>',
        Cancel: "Abbrechen"
    },
    es: {
        "Add to Calendar": "AĂ±adir al Calendario",
        "iCal File": "iCal Ficha",
        Close: "CiĂ©rralo",
        "Close Selection": "Cerrar SelecciĂ³n",
        "Click me": "Haz clic mĂ­",
        "modal.webview.ical.h": "Abra su browser",
        "modal.webview.ical.text": "Lamentablemente, los browsers in-app tienen problemas con la forma en que generamos el archivo del calendario.",
        "modal.clipboard.text": "Hemos copiado automĂ¡ticamente una URL mĂ¡gica en su portapapeles.",
        "modal.webview.ical.steps": "<ol><li><strong>Abre otro browser</strong> en tu smartphone, ...</li><li>Utilice la funciĂ³n de <strong>pegar</strong> para continuar.</li></ol>",
        "modal.crios.ical.h": "Abrir Safari",
        "modal.crios.ical.text": "Lamentablemente, Chrome en iOS tiene problemas con la forma de generar el archivo de calendario.",
        "modal.crios.ical.steps": "<ol><li><strong>Abrir Safari</strong>, ...</li><li>Utilice la funciĂ³n de <strong>pegar</strong> para continuar.</li></ol>",
        "modal.multidate.h": "Esta es una serie de fechas",
        "modal.multidate.text": "AĂ±ada las fechas individuales a su calendario en orden:",
        Event: "TĂ©rmino",
        "Cancelled Date": "Esta fecha fue cancelada.",
        "Delete from Calendar": "Actualice su calendario!",
        "modal.subscribe.yahoo.h": "AĂ±adir calendario a Yahoo",
        "modal.subscribe.yahoo.text": '<ol><li>Abra el calendario de Yahoo.</li><li>Haga clic en la pestaĂ±a "Acciones".</li><li>Seleccione "Seguir otros calendarios".</li><li>Elige un nombre y pega la URL de tu portapapeles en el campo URL.</li></ol>',
        Cancel: "Cancelar"
    },
    pt: {
        "Add to Calendar": "Incluir no CalendĂ¡rio",
        "iCal File": "Ficheiro iCal",
        Close: "Fechar",
        "Close Selection": "Fechar selecĂ§Ă£o",
        "Click me": "Clicar-me",
        "modal.webview.ical.h": "Abra o seu browser",
        "modal.webview.ical.text": "Infelizmente, os navegadores em tampas tĂªm problemas com a forma como geramos o ficheiro de calendĂ¡rio.",
        "modal.clipboard.text": "CopiĂ¡mos automaticamente um URL mĂ¡gico para a sua Ă¡rea de transferĂªncia.",
        "modal.webview.ical.steps": "<ol><li><strong>Abrir outro browser</strong> en tu smartphone, ...</li><li>Use a funĂ§Ă£o <forte>colar</strong> para continuar.</li></ol>",
        "modal.crios.ical.h": "Safari aberto",
        "modal.crios.ical.text": "Infelizmente, o cromado no iOS tem problemas com a forma como geramos o ficheiro do calendĂ¡rio.",
        "modal.crios.ical.steps": "<ol><li><strong>Safari aberto</strong>, ...</li><li>Use a funĂ§Ă£o <forte>colar</strong> para continuar.</li></ol>",
        "modal.multidate.h": "Esta Ă© uma sĂ©rie de datas",
        "modal.multidate.text": "Adicione as datas individuais ao seu calendĂ¡rio, por ordem:",
        Event: "Termo",
        "Cancelled Date": "Esta data foi cancelada.",
        "Delete from Calendar": "Actualize o seu calendĂ¡rio!",
        "modal.subscribe.yahoo.h": "Adicionar calendĂ¡rio ao Yahoo",
        "modal.subscribe.yahoo.text": '<ol><li>Abrir o calendĂ¡rio do Yahoo.</li><li>Clique no separador "AcĂ§Ăµes".</li><li>Seleccione "Seguir outros calendĂ¡rios".</li><li>Escolha um nome e cole o URL da sua Ă¡rea de transferĂªncia no campo URL.</li></ol>',
        Cancel: "Cancelar"
    },
    fr: {
        "Add to Calendar": "Ajout au Agenda",
        "iCal File": "iCal Fichier",
        Close: "Fermez",
        "Close Selection": "Fermez la sĂ©lection",
        "Click me": "Cliquez-moi",
        "modal.webview.ical.h": "Ouvrez votre navigateur",
        "modal.webview.ical.text": "Malheureusement, les navigateurs in-app ont des problĂ¨mes avec la maniĂ¨re dont nous crĂ©ons les fichiers de agenda.",
        "modal.clipboard.text": "Nous avons automatiquement copiĂ© une URL magique dans ton presse-papiers.",
        "modal.webview.ical.steps": "<ol><li><strong>Ouvre un autre navigateur</strong> sur ton smartphone, ...</li><li>Utilise la fonction <strong>insĂ©rer</strong> pour continuer.</li></ol>",
        "modal.crios.ical.h": "Ouvre Safari",
        "modal.crios.ical.text": "Malheureusement, Chrome sur iOS a des problĂ¨mes avec la faĂ§on dont nous gĂ©nĂ©rons le fichier du agenda.",
        "modal.crios.ical.steps": "<ol><li><strong>Ouvre Safari</strong>, ...</li><li>Utilise la fonction <strong>insĂ©rer</strong> pour continuer.</li></ol>",
        "modal.multidate.h": "Il s'agit d'une sĂ©rie d'Ă©vĂ©nements",
        "modal.multidate.text": "Ajoute les diffĂ©rents rendez-vous dans l'ordre Ă  ton agenda:",
        Event: "Terminaison",
        "Cancelled Date": "Cette date est annulĂ©e.",
        "Delete from Calendar": "Actualisez votre agenda!",
        "modal.subscribe.yahoo.h": "Ajouter un agenda Ă  Yahoo",
        "modal.subscribe.yahoo.text": '<ol><li>Ouvre le Yahoo calendar.</li><li>Clique sur l\'onglet "Actions".</li><li>SĂ©lectionne "Suivre d\'autres agendas".</li><li>Choisis un nom et colle l\'URL de ton presse-papiers dans le champ URL.</li></ol>',
        Cancel: "Annuler"
    },
    nl: {
        "Add to Calendar": "Opslaan in Agenda",
        "iCal File": "iCal File",
        Close: "Sluiten",
        "Close Selection": "Sluit selectie",
        "Click me": "Klik me",
        "modal.webview.ical.h": "Open uw browser",
        "modal.webview.ical.text": "Helaas hebben in-app browsers problemen met de manier waarop wij kalenderbestanden maken.",
        "modal.clipboard.text": "We hebben automatisch een magische URL naar je klembord gekopieerd.",
        "modal.webview.ical.steps": "<ol><li><strong>Open een andere browser</strong> op uw smartphone, ...</li><li>Gebruik de <strong>insert</strong> functie om verder te gaan.</li></ol>",
        "modal.crios.ical.h": "Open Safari",
        "modal.crios.ical.text": "Helaas heeft Chrome op iOS problemen met de manier waarop we het kalenderbestand genereren.",
        "modal.crios.ical.steps": "<ol><li><strong>Open Safari</strong>, ...</li><li>Gebruik de <strong>insert</strong> functie om verder te gaan.</li></ol>",
        "modal.multidate.h": "Dit is een reeks data",
        "modal.multidate.text": "Voeg de afzonderlijke delen Ă©Ă©n voor Ă©Ă©n toe:",
        Event: "Termin",
        "Cancelled Date": "Deze datum is geannuleerd.",
        "Delete from Calendar": "Uw agenda bijwerken!",
        "modal.subscribe.yahoo.h": "Toevoegen aan Yahoo",
        "modal.subscribe.yahoo.text": '<ol><li>Open de Yahoo calendar.</li><li>Klik op de "Acties" tab.</li><li>Selecteer "Volg Andere Agenda\'s".</li><li>Kies een naam en plak de URL van uw klembord in het URL-veld.</li></ol>',
        Cancel: "Annuleren"
    },
    tr: {
        "Add to Calendar": "Takvime Ekle",
        "iCal File": "iCal DosyasÄ±",
        Close: "Kapat",
        "Close Selection": "SeĂ§imi kapat",
        "Click me": "Beni tÄ±klayÄ±n",
        "modal.webview.ical.h": "TarayÄ±cÄ±nÄ±zÄ± aĂ§Ä±n",
        "modal.webview.ical.text": "Ne yazÄ±k ki, uygulama iĂ§i tarayÄ±cÄ±lar takvim dosyalarÄ±nÄ± oluÅŸturma ÅŸeklimizle ilgili sorunlar yaÅŸÄ±yor.",
        "modal.clipboard.text": "Panonuza otomatik olarak sihirli bir URL kopyaladÄ±k.",
        "modal.webview.ical.steps": "<ol><li><strong>AkÄ±llÄ± telefonunuzda baÅŸka bir tarayÄ±cÄ± aĂ§Ä±n</strong>, ...</li><li>Devam etmek iĂ§in <strong>insert</strong> fonksiyonunu kullanÄ±n.</li></ol>",
        "modal.crios.ical.h": "AĂ§Ä±k Safari",
        "modal.crios.ical.text": "Ne yazÄ±k ki iOS'ta Chrome'un takvim dosyasÄ± oluÅŸturma yĂ¶ntemiyle ilgili sorunlarÄ± var.",
        "modal.crios.ical.steps": "<ol><li><strong>AĂ§Ä±k Safari</strong>, ...</li><li>Devam etmek iĂ§in <strong>insert</strong> fonksiyonunu kullanÄ±n.</li></ol>",
        "modal.multidate.h": "Bu bir etkinlik serisidir",
        "modal.multidate.text": "ParĂ§alarÄ± teker teker ekleyin:",
        Event: "Etkinlik",
        "Cancelled Date": "Bu tarih iptal edildi.",
        "Delete from Calendar": "LĂ¼tfen takviminizi gĂ¼ncelleyin!",
        "modal.subscribe.yahoo.h": "Yahoo'ya takvim ekleme",
        "modal.subscribe.yahoo.text": '<ol><li>Yahoo takvimini aĂ§Ä±n.</li><li>"Eylemler" sekmesine tÄ±klayÄ±n.</li><li>"DiÄŸer Takvimleri Takip Et" Ă¶ÄŸesini seĂ§in.</li><li>Bir ad seĂ§in ve URL\'yi panonuzdan URL alanÄ±na yapÄ±ÅŸtÄ±rÄ±n.</li></ol>',
        Cancel: "Ä°ptal"
    },
    zh: {
        "Add to Calendar": "æ·»å åˆ°æ—¥å†",
        "iCal File": "iCal æ–‡ä»¶",
        Close: "å…³",
        "Close Selection": "å…³é—­é€‰æ‹©",
        "Click me": "ç‚¹æˆ‘",
        "modal.webview.ical.h": "æ‰“å¼€æµè§ˆå™¨",
        "modal.webview.ical.text": "ä¸å¹¸ç„æ˜¯ï¼Œåº”ç”¨å†…æµè§ˆå™¨åœ¨æˆ‘ä»¬ç”Ÿæˆæ—¥å†æ–‡ä»¶ç„æ–¹å¼ä¸å­˜åœ¨é—®é¢˜ă€‚",
        "modal.clipboard.text": "æˆ‘ä»¬è‡ªå¨å°†é­”æœ¯ URL å¤åˆ¶åˆ°æ‚¨ç„å‰ªè´´æ¿ă€‚",
        "modal.webview.ical.steps": "<ol><li>æ‰“å¼€æ‰‹æœºä¸ç„ä»»ä½•å…¶ä»–æµè§ˆå™¨, ...</li><li>ç²˜è´´å‰ªè´´æ¿å†…å®¹å¹¶å¼€å§‹ă€‚</li></ol>",
        "modal.crios.ical.h": "æ‰“å¼€ Safari",
        "modal.crios.ical.text": "ä¸å¹¸ç„æ˜¯ï¼ŒiOS ä¸ç„ Chrome åœ¨æˆ‘ä»¬ç”Ÿæˆæ—¥å†æ–‡ä»¶ç„æ–¹å¼ä¸å­˜åœ¨é—®é¢˜ă€‚",
        "modal.crios.ical.steps": "<ol><li><strong>æ‰“å¼€ Safari</strong>, ...</li><li>ç²˜è´´å‰ªè´´æ¿å†…å®¹å¹¶å¼€å§‹ă€‚</li></ol>",
        "modal.multidate.h": "è¿™æ˜¯ä¸€ä¸ªæ´»å¨ç³»åˆ—",
        "modal.multidate.text": "é€ä¸ªæ·»å å„ä¸ªéƒ¨åˆ†:",
        Event: "äº‹ä»¶",
        "Cancelled Date": "æ­¤æ—¥æœŸå·²å–æ¶ˆă€‚",
        "Delete from Calendar": "è¯·æ›´æ–°æ‚¨ç„æ—¥å†!",
        "modal.subscribe.yahoo.h": "å°†æ—¥å†æ·»å åˆ° Yahoo",
        "modal.subscribe.yahoo.text": "<ol><li>æ‰“å¼€ Yahoo æ—¥å†ă€‚</li><li>ç‚¹å‡»â€œæ“ä½œâ€æ ‡ç­¾ă€‚</li><li>é€‰æ‹©â€œå…³æ³¨å…¶ä»–æ—¥å†â€ă€‚</li><li>é€‰æ‹©ä¸€ä¸ªåç§°å¹¶å°†å‰ªè´´æ¿ä¸­ç„ URL ç²˜è´´åˆ° URL å­—æ®µä¸­ă€‚</li></ol>",
        Cancel: "ä¸­æ­¢"
    },
    ar: {
        "Add to Calendar": "Ø¥Ø¶Ø§ÙØ© Ø¥Ù„Ù‰ Ø§Ù„ØªÙ‚ÙˆÙÙ…",
        "iCal File": "Ù…Ù„Ù iCal",
        Close: "Ù‚Ø±ÙØ¨",
        "Close Selection": "Ø¥ØºÙ„Ø§Ù‚ Ø§Ù„ØªØ­Ø¯ÙØ¯",
        "Click me": "Ø§Ù†Ù‚Ø± ÙÙˆÙ‚ Ù„Ù",
        "modal.webview.ical.h": "Ø§ÙØªØ­ Ø§Ù„Ù…Ø³ØªØ¹Ø±Ø¶ Ø§Ù„Ø®Ø§Øµ Ø¨Ùƒ",
        "modal.webview.ical.text": "Ù„Ø³ÙˆØ¡ Ø§Ù„Ø­Ø¸ ØŒ ØªÙˆØ§Ø¬Ù‡ Ø§Ù„Ù…ØªØµÙØ­Ø§Øª Ø¯Ø§Ø®Ù„ Ø§Ù„ØªØ·Ø¨ÙÙ‚ Ù…Ø´Ø§ÙƒÙ„ ÙÙ Ø·Ø±ÙÙ‚Ø© Ø¥Ù†Ø´Ø§Ø¡ Ù…Ù„Ù Ø§Ù„ØªÙ‚ÙˆÙÙ….",
        "modal.clipboard.text": "Ù‚Ù…Ù†Ø§ ØªÙ„Ù‚Ø§Ø¦ÙÙ‹Ø§ Ø¨Ù†Ø³Ø® Ø¹Ù†ÙˆØ§Ù† URL Ø³Ø­Ø±Ù Ø¥Ù„Ù‰ Ø§Ù„Ø­Ø§ÙØ¸Ø© Ø§Ù„Ø®Ø§ØµØ© Ø¨Ùƒ.",
        "modal.webview.ical.steps": "<ol><li>Ø§ÙØªØ­ Ø£Ù Ù…ØªØµÙØ­ Ø¢Ø®Ø± Ø¹Ù„Ù‰ Ù‡Ø§ØªÙÙƒ Ø§Ù„Ø°ÙƒÙ, ...</li><li>.Ø§Ù„ØµÙ‚ Ù…Ø­ØªÙˆÙ‰ Ø§Ù„Ø­Ø§ÙØ¸Ø© ÙˆØ§Ø°Ù‡Ø¨</li></ol>",
        "modal.crios.ical.h": "Ø§ÙØªØ­ Safari",
        "modal.crios.ical.text": "Ù„Ø³ÙˆØ¡ Ø§Ù„Ø­Ø¸ ØŒ ÙÙˆØ§Ø¬Ù‡ Chrome Ø¹Ù„Ù‰ iOS Ù…Ø´Ø§ÙƒÙ„ ÙÙ Ø·Ø±ÙÙ‚Ø© Ø¥Ù†Ø´Ø§Ø¡ Ù…Ù„Ù Ø§Ù„ØªÙ‚ÙˆÙÙ…",
        "modal.crios.ical.steps": "<ol><li><strong>Ø§ÙØªØ­ Safari</strong>, ...</li><li>Ø§Ù„ØµÙ‚ Ù…Ø­ØªÙˆÙ‰ Ø§Ù„Ø­Ø§ÙØ¸Ø© ÙˆØ§Ø°Ù‡Ø¨.</li></ol>",
        "modal.multidate.h": "Ù‡Ø°Ù‡ Ø³Ù„Ø³Ù„Ø© Ø£Ø­Ø¯Ø§Ø«",
        "modal.multidate.text": "Ø£Ø¶Ù Ø§Ù„Ø£Ø¬Ø²Ø§Ø¡ Ø§Ù„ÙØ±Ø¯ÙØ© ÙˆØ§Ø­Ø¯Ø© ØªÙ„Ùˆ Ø§Ù„Ø£Ø®Ø±Ù‰:",
        Event: "Ø­Ø¯Ø«",
        "Cancelled Date": "ØªÙ… Ø¥Ù„ØºØ§Ø¡ Ù‡Ø°Ø§ Ø§Ù„ØªØ§Ø±ÙØ®.",
        "Delete from Calendar": "Ø§Ù„Ø±Ø¬Ø§Ø¡ ØªØ­Ø¯ÙØ« Ø§Ù„ØªÙ‚ÙˆÙÙ… Ø§Ù„Ø®Ø§Øµ Ø¨Ùƒ!",
        "modal.subscribe.yahoo.h": "Ø£Ø¶Ù Ø§Ù„ØªÙ‚ÙˆÙÙ… Ø¥Ù„Ù‰ Yahoo",
        "modal.subscribe.yahoo.text": '<ol><li>Ø§ÙØªØ­ ØªÙ‚ÙˆÙÙ… Yahoo.</li><li>Ø§Ù†Ù‚Ø± ÙÙˆÙ‚ Ø¹Ù„Ø§Ù…Ø© Ø§Ù„ØªØ¨ÙˆÙØ¨ "Ø§Ù„Ø¥Ø¬Ø±Ø§Ø¡Ø§Øª".</li><li>Ø­Ø¯Ø¯ "Ù…ØªØ§Ø¨Ø¹Ø© ØªÙ‚ÙˆÙÙ…Ø§Øª Ø£Ø®Ø±Ù‰".</li><li>Ø§Ø®ØªØ± Ø§Ø³Ù…Ù‹Ø§ ÙˆØ§Ù„ØµÙ‚ Ø¹Ù†ÙˆØ§Ù† URL Ù…Ù† Ø§Ù„Ø­Ø§ÙØ¸Ø© Ø§Ù„Ø®Ø§ØµØ© Ø¨Ùƒ ÙÙ Ø­Ù‚Ù„ URL.</li></ol>',
        Cancel: "Ø¥Ø­Ø¨Ø§Ø·"
    },
    hi: {
        "Add to Calendar": "à¤•à¥ˆà¤²à¥‡à¤‚à¤¡à¤° à¤®à¥‡à¤‚ à¤œà¥‹à¤¡à¤¼à¥‡à¤‚",
        "iCal File": "iCal à¤«à¤¼à¤¾à¤‡à¤²",
        Close: "à¤¬à¤‚à¤¦ à¤•à¤°à¤¨à¤¾",
        "Close Selection": "à¤à¤¯à¤¨ à¤¬à¤‚à¤¦ à¤•à¤°à¥‡à¤‚",
        "Click me": "à¤®à¥à¤à¥‡ à¤•à¥à¤²à¤¿à¤• à¤•à¤°à¥‡à¤‚",
        "modal.webview.ical.h": "à¤…à¤ªà¤¨à¤¾ à¤¬à¥à¤°à¤¾à¤‰à¤œà¤¼à¤° à¤–à¥‹à¤²à¥‡à¤‚",
        "modal.webview.ical.text": "à¤¦à¥à¤°à¥à¤­à¤¾à¤—à¥à¤¯ à¤¸à¥‡, à¤‡à¤¨-à¤à¤ª à¤¬à¥à¤°à¤¾à¤‰à¤œà¤¼à¤° à¤®à¥‡à¤‚ à¤•à¥ˆà¤²à¥‡à¤‚à¤¡à¤° à¤«à¤¼à¤¾à¤‡à¤² à¤¬à¤¨à¤¾à¤¨à¥‡ à¤•à¥‡ à¤¤à¤°à¥€à¤•à¥‡ à¤®à¥‡à¤‚ à¤¸à¤®à¤¸à¥à¤¯à¤¾à¤à¤ à¤¹à¥ˆà¤‚à¥¤",
        "modal.clipboard.text": "à¤¹à¤®à¤¨à¥‡ à¤†à¤ªà¤•à¥‡ à¤•à¥à¤²à¤¿à¤ªà¤¬à¥‹à¤°à¥à¤¡ à¤ªà¤° à¤¸à¥à¤µà¤à¤¾à¤²à¤¿à¤¤ à¤°à¥‚à¤ª à¤¸à¥‡ à¤à¤• à¤œà¤¾à¤¦à¥à¤ˆ URL à¤•à¥‰à¤ªà¥€ à¤•à¤° à¤²à¤¿à¤¯à¤¾ à¤¹à¥ˆà¥¤",
        "modal.webview.ical.steps": "<ol><li>à¤…à¤ªà¤¨à¥‡ à¤«à¤¼à¥‹à¤¨ à¤ªà¤° <strong>à¤¦à¥‚à¤¸à¤°à¤¾ à¤¬à¥à¤°à¤¾à¤‰à¤œà¤¼à¤° à¤–à¥‹à¤²à¥‡à¤‚</strong>, ...</li><li>à¤•à¥à¤²à¤¿à¤ªà¤¬à¥‹à¤°à¥à¤¡ à¤¸à¤¾à¤®à¤—à¥à¤°à¥€ <strong>à¤à¤¿à¤ªà¤•à¤¾à¤à¤‚</strong> à¤”à¤° à¤œà¤¾à¤à¤‚à¥¤</li></ol>",
        "modal.crios.ical.h": "à¤¸à¤«à¤¾à¤°à¥€ à¤–à¥‹à¤²à¥‡à¤‚",
        "modal.crios.ical.text": "à¤¦à¥à¤°à¥à¤­à¤¾à¤—à¥à¤¯ à¤¸à¥‡, iOS à¤ªà¤° Chrome à¤•à¥‹ à¤•à¥ˆà¤²à¥‡à¤‚à¤¡à¤° à¤«à¤¼à¤¾à¤‡à¤² à¤œà¥‡à¤¨à¤°à¥‡à¤Ÿ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤¹à¤®à¤¾à¤°à¥‡ à¤¤à¤°à¥€à¤•à¥‡ à¤®à¥‡à¤‚ à¤¸à¤®à¤¸à¥à¤¯à¤¾ à¤¹à¥ˆà¥¤",
        "modal.crios.ical.steps": "<ol><li><strong>à¤¸à¤«à¤¾à¤°à¥€ à¤–à¥‹à¤²à¥‡à¤‚</strong>, ...</li><li>à¤•à¥à¤²à¤¿à¤ªà¤¬à¥‹à¤°à¥à¤¡ à¤¸à¤¾à¤®à¤—à¥à¤°à¥€ <strong>à¤à¤¿à¤ªà¤•à¤¾à¤à¤‚</strong> à¤”à¤° à¤œà¤¾à¤à¤‚à¥¤</li></ol>",
        "modal.multidate.h": "à¤¯à¤¹ à¤à¤• à¤‡à¤µà¥‡à¤‚à¤Ÿ à¤¸à¥€à¤°à¥€à¤œà¤¼ à¤¹à¥ˆ",
        "modal.multidate.text": "à¤…à¤²à¤—-à¤…à¤²à¤— à¤¹à¤¿à¤¸à¥à¤¸à¥‹à¤‚ à¤•à¥‹ à¤à¤•-à¤à¤• à¤•à¤°à¤•à¥‡ à¤œà¥‹à¤¡à¤¼à¥‡à¤‚:",
        Event: "à¤†à¤¯à¥‹à¤œà¤¨",
        "Cancelled Date": "à¤¯à¤¹ à¤¤à¤¿à¤¥à¤¿ à¤°à¤¦à¥à¤¦ à¤¹à¥‹ à¤—à¤ˆà¥¤",
        "Delete from Calendar": "à¤•à¥ƒà¤ªà¤¯à¤¾ à¤…à¤ªà¤¨à¤¾ à¤•à¥ˆà¤²à¥‡à¤‚à¤¡à¤° à¤…à¤ªà¤¡à¥‡à¤Ÿ à¤•à¤°à¥‡à¤‚!",
        "modal.subscribe.yahoo.h": "Yahoo . à¤®à¥‡à¤‚ à¤•à¥ˆà¤²à¥‡à¤‚à¤¡à¤° à¤œà¥‹à¤¡à¤¼à¥‡à¤‚",
        "modal.subscribe.yahoo.text": '<ol><li>Yahoo à¤•à¥ˆà¤²à¥‡à¤‚à¤¡à¤° à¤–à¥‹à¤²à¥‡à¤‚à¥¤</li><li>"à¤•à¥ƒà¤¤à¥€" à¤Ÿà¥ˆà¤¬ à¤ªà¤° à¤•à¥à¤²à¤¿à¤• à¤•à¤°à¥‡à¤‚à¥¤</li><li>"à¤‡à¤¤à¤° à¤•à¥…à¤²à¥‡à¤‚à¤¡à¤°à¥à¤¸à¤à¥‡ à¤…à¤¨à¥à¤¸à¤°à¤£ à¤•à¤°à¤¾" à¤à¥à¤¨à¥‡à¤‚à¥¤</li><li>à¤à¤• à¤¨à¤¾à¤® à¤à¥à¤¨à¥‡à¤‚ à¤”à¤° à¤…à¤ªà¤¨à¥‡ à¤•à¥à¤²à¤¿à¤ªà¤¬à¥‹à¤°à¥à¤¡ à¤¸à¥‡ URL à¤•à¥‹ URL à¤«à¤¼à¥€à¤²à¥à¤¡ à¤®à¥‡à¤‚ à¤ªà¥‡à¤¸à¥à¤Ÿ à¤•à¤°à¥‡à¤‚à¥¤</li></ol>',
        Cancel: "à¤°à¤¦à¥à¤¦ à¤•à¤°à¤¨à¤¾"
    },
    pl: {
        "Add to Calendar": "Dodaj do kalendarza",
        "iCal File": "Plik iCal",
        Close: "Zamknij",
        "Close Selection": "Zamknij wybĂ³r",
        "Click me": "Kliknij mnie",
        "modal.webview.ical.h": "OtwĂ³rz przeglÄ…darkÄ™",
        "modal.webview.ical.text": "Niestety, przeglÄ…darki in-app majÄ… problemy ze sposobem, w jaki generujemy plik kalendarza.",
        "modal.clipboard.text": "Automatycznie skopiowaliÅ›my magiczny adres URL do schowka.",
        "modal.webview.ical.steps": "<ol><li><strong>OtwĂ³rz innÄ… przeglÄ…darkÄ™</strong> w swoim telefonie, ...</li><li><strong>Wklej</strong> zawartoÅ›Ä‡ schowka i ruszaj.</li></ol>",
        "modal.crios.ical.h": "OtwĂ³rz Safari",
        "modal.crios.ical.text": "Niestety, Chrome na iOS ma problemy ze sposobem generowania pliku kalendarza.",
        "modal.crios.ical.steps": "<ol><li><strong>OtwĂ³rz Safari</strong>, ...</li><li><strong>Wklej</strong> zawartoÅ›Ä‡ schowka i ruszaj.</li></ol>",
        "modal.multidate.h": "To jest cykl imprez",
        "modal.multidate.text": "DodawaÄ‡ po kolei poszczegĂ³lne czÄ™Å›ci:",
        Event: "Wydarzenie",
        "Cancelled Date": "Ta data zostaÅ‚a odwoÅ‚ana.",
        "Delete from Calendar": "Zaktualizuj swĂ³j kalendarz!",
        "modal.subscribe.yahoo.h": "Dodaj kalendarz do Yahoo",
        "modal.subscribe.yahoo.text": '<ol><li>OtwĂ³rz kalendarz Yahoo.</li><li>Kliknij na zakÅ‚adkÄ™ "CzynnoÅ›ci".</li><li>Wybierz "Obserwuj inne kalendarze".</li><li>Wybierz nazwÄ™ i wklej adres URL ze schowka w polu URL.</li></ol>',
        Cancel: "Anuluj"
    },
    id: {
        "Add to Calendar": "Tambahkan ke Kalender",
        "iCal File": "File iCal",
        Close: "Tutup",
        "Close Selection": "Seleksi Tutup",
        "Click me": "Klik saya",
        "modal.webview.ical.h": "Buka browser Anda",
        "modal.webview.ical.text": "Sayangnya, browser dalam aplikasi memiliki masalah dengan cara kami menghasilkan file kalender.",
        "modal.clipboard.text": "Kami telah secara otomatis menyalin URL ajaib ke clipboard Anda.",
        "modal.webview.ical.steps": "<ol><li><strong>Buka peramban lain</strong> pada ponsel Anda, ...</li><li>Tempelkan konten clipboard dan pergi.</li></ol>",
        "modal.crios.ical.h": "Buka Safari",
        "modal.crios.ical.text": "Sayangnya, Chrome di iOS memiliki masalah dengan cara kami menghasilkan file kalender.",
        "modal.crios.ical.steps": "<ol><li><strong>Buka Safari</strong>, ...</li><li>Tempelkan konten clipboard dan pergi.</li></ol>",
        "modal.multidate.h": "Ini adalah rangkaian acara",
        "modal.multidate.text": "Tambahkan masing-masing bagian satu per satu:",
        Event: "Acara",
        "Cancelled Date": "Tanggal ini dibatalkan.",
        "Delete from Calendar": "Perbarui kalender Anda!",
        "modal.subscribe.yahoo.h": "Tambahkan kalender ke Yahoo",
        "modal.subscribe.yahoo.text": '<ol><li>Buka kalender Yahoo.</li><li>Klik pada tab "Tindakan".</li><li>Pilih "Ikuti Kalender Lain".</li><li>Pilih nama dan tempelkan URL dari clipboard Anda ke bidang URL.</li></ol>',
        Cancel: "Batal"
    },
    no: {
        "Add to Calendar": "Legg til i kalenderen",
        "iCal File": "iCal-fil",
        Close: "Lukk",
        "Close Selection": "Lukk utvalg",
        "Click me": "Klikk pĂ¥ meg",
        "modal.webview.ical.h": "Ă…pne nettleseren din",
        "modal.webview.ical.text": "Dessverre har nettlesere i appen problemer med mĂ¥ten vi genererer kalenderfilen pĂ¥.",
        "modal.clipboard.text": "Vi kopierte automatisk en magisk URL til utklippstavlen din.",
        "modal.webview.ical.steps": "<ol><li><strong>Ă…pne en annen nettleser</strong> pĂ¥ telefonen, ...</li><li><strong>Lim inn</strong> innholdet pĂ¥ utklippstavlen og gĂ¥.</li></ol>",
        "modal.crios.ical.h": "Ă…pne Safari",
        "modal.crios.ical.text": "Dessverre har Chrome pĂ¥ iOS problemer med mĂ¥ten vi genererer kalenderfilen pĂ¥.",
        "modal.crios.ical.steps": "<ol><li><strong>Ă…pne Safari</strong>, ...</li><li><strong>Lim inn</strong> innholdet pĂ¥ utklippstavlen og gĂ¥.</li></ol>",
        "modal.multidate.h": "Dette er en avtaleserie",
        "modal.multidate.text": "Legg til de enkelte datoene i kalenderen din i rekkefĂ¸lge:",
        Event: "MĂ¸te",
        "Cancelled Date": "Denne datoen ble avlyst.",
        "Delete from Calendar": "Oppdater kalenderen din!",
        "modal.subscribe.yahoo.h": "Legg til kalender til Yahoo",
        "modal.subscribe.yahoo.text": "<ol><li>Ă…pne Yahoo-kalenderen.</li><li>Klikk pĂ¥ Â«HandlingerÂ»-fanen.</li><li>Velg Â«FĂ¸lg andre kalendereÂ».</li><li>Velg et navn og lim inn URL-en fra utklippstavlen i URL-feltet.</li></ol>",
        Cancel: "Avbryt"
    },
    fi: {
        "Add to Calendar": "LisĂ¤Ă¤ kalenteriin",
        "iCal File": "iCal-tiedosto",
        Close: "Sulje",
        "Close Selection": "Sulje valinta",
        "Click me": "Klikkaa minua",
        "modal.webview.ical.h": "Avaa selain",
        "modal.webview.ical.text": "Valitettavasti sovelluksen sisĂ¤isillĂ¤ selaimilla on ongelmia kalenteritiedoston luomisessa.",
        "modal.clipboard.text": "Olemme automaattisesti kopioineet maagisen URL-osoitteen leikepĂ¶ydĂ¤llesi.",
        "modal.webview.ical.steps": "<ol><li><strong>Avaa toinen selain</strong> puhelimessasi., ...</li><li><strong>liitĂ¤</strong> leikepĂ¶ydĂ¤n sisĂ¤ltĂ¶ ja lĂ¤hde.</li></ol>",
        "modal.crios.ical.h": "Avaa Safari",
        "modal.crios.ical.text": "Valitettavasti iOS:n Chromessa on ongelmia kalenteritiedoston luomisessa.",
        "modal.crios.ical.steps": "<ol><li><strong>Avaa Safari</strong>, ...</li><li><strong>liitĂ¤</strong> leikepĂ¶ydĂ¤n sisĂ¤ltĂ¶ ja lĂ¤hde.</li></ol>",
        "modal.multidate.h": "TĂ¤mĂ¤ on tapahtumasarja",
        "modal.multidate.text": "LisĂ¤Ă¤ yksittĂ¤iset osat yksi kerrallaan:",
        Event: "Tapahtuma",
        "Cancelled Date": "TĂ¤mĂ¤ pĂ¤ivĂ¤mĂ¤Ă¤rĂ¤ peruttiin.",
        "Delete from Calendar": "PĂ¤ivitĂ¤ kalenterisi!",
        "modal.subscribe.yahoo.h": "LisĂ¤Ă¤ kalenteri Yahoo",
        "modal.subscribe.yahoo.text": '<ol><li>Avaa Yahoo-kalenteri.</li><li>Napsauta "Toiminnot"-vĂ¤lilehteĂ¤.</li><li>Valitse "Seuraa muiden kalentereita".</li><li>Valitse nimi ja liitĂ¤ URL-osoite leikepĂ¶ydĂ¤ltĂ¤si URL-kenttĂ¤Ă¤n.</li></ol>',
        Cancel: "Peruuta"
    },
    sv: {
        "Add to Calendar": "LĂ¤gg till i kalender",
        "iCal File": "iCal-fil",
        Close: "StĂ¤ng",
        "Close Selection": "StĂ¤ng urvalet",
        "Click me": "Klicka pĂ¥ mig",
        "modal.webview.ical.h": "Ă–ppna din webblĂ¤sare",
        "modal.webview.ical.text": "TyvĂ¤rr har webblĂ¤sare i appen problem med hur vi genererar kalenderfilen.",
        "modal.clipboard.text": "Vi har automatiskt kopierat en magisk URL till ditt klippblock.",
        "modal.webview.ical.steps": "<ol><li><strong>Ă–ppna en annan webblĂ¤sare</strong> pĂ¥ telefonen, ...</li><li><strong>InsĂ¤tt</strong> innehĂ¥llet i klippbordet och kĂ¶r.</li></ol>",
        "modal.crios.ical.h": "Ă–ppna Safari",
        "modal.crios.ical.text": "TyvĂ¤rr har Chrome pĂ¥ iOS problem med hur vi genererar kalenderfilen.",
        "modal.crios.ical.steps": "<ol><li><strong>Ă–ppna Safari</strong>, ...</li><li><strong>InsĂ¤tt</strong> innehĂ¥llet i klippbordet och kĂ¶r.</li></ol>",
        "modal.multidate.h": "Detta Ă¤r en evenemangsserie",
        "modal.multidate.text": "LĂ¤gg till de enskilda delarna en efter en:",
        Event: "Evenemang",
        "Cancelled Date": "Detta datum har stĂ¤llts in.",
        "Delete from Calendar": "Uppdatera din kalender!",
        "modal.subscribe.yahoo.h": "LĂ¤gg till kalender i Yahoo",
        "modal.subscribe.yahoo.text": '<ol><li>Ă–ppna Yahoo-kalendern.</li><li>Klicka pĂ¥ fliken "Ă…tgĂ¤rder".</li><li>VĂ¤lj "FĂ¶lj andra kalendrar".</li><li>VĂ¤lj ett namn och klistra in URL:en frĂ¥n klippbordet i URL-fĂ¤ltet.</li></ol>',
        Cancel: "Avbryt"
    },
    cs: {
        "Add to Calendar": "PÅ™idat do kalendĂ¡Å™e",
        "iCal File": "Soubor iCal",
        Close: "ZavÅ™Ă­t",
        "Close Selection": "ZavÅ™Ă­t vĂ½bÄ›r",
        "Click me": "KliknÄ›te na mÄ›",
        "modal.webview.ical.h": "OtevÅ™ete prohlĂ­Å¾eÄ",
        "modal.webview.ical.text": "ProhlĂ­Å¾eÄe v aplikacĂ­ch majĂ­ bohuÅ¾el problĂ©my se zpÅ¯sobem generovĂ¡nĂ­ souboru kalendĂ¡Å™e.",
        "modal.clipboard.text": "Do schrĂ¡nky jsme automaticky zkopĂ­rovali kouzelnou adresu URL.",
        "modal.webview.ical.steps": "<ol><li><strong>OtevÅ™enĂ­ jinĂ©ho prohlĂ­Å¾eÄe</strong> v telefonu, ...</li><li><strong>VloÅ¾te</strong> obsah schrĂ¡nky a pÅ™ejdÄ›te.</li></ol>",
        "modal.crios.ical.h": "OtevÅ™Ă­t Safari",
        "modal.crios.ical.text": "Chrome v systĂ©mu iOS mĂ¡ bohuÅ¾el problĂ©my se zpÅ¯sobem generovĂ¡nĂ­ souboru kalendĂ¡Å™e.",
        "modal.crios.ical.steps": "<ol><li><strong>OtevÅ™Ă­t Safari</strong>, ...</li><li><strong>VloÅ¾te</strong> obsah schrĂ¡nky a pÅ™ejdÄ›te.</li></ol>",
        "modal.multidate.h": "JednĂ¡ se o sĂ©rii udĂ¡lostĂ­",
        "modal.multidate.text": "PÅ™idĂ¡vejte jednotlivĂ© dĂ­ly jeden po druhĂ©m:",
        Event: "UdĂ¡lost",
        "Cancelled Date": "Toto datum bylo zruÅ¡eno.",
        "Delete from Calendar": "Aktualizujte svÅ¯j kalendĂ¡Å™!",
        "modal.subscribe.yahoo.h": "PÅ™idat kalendĂ¡Å™ do Yahoo",
        "modal.subscribe.yahoo.text": '<ol><li>OtevÅ™ete kalendĂ¡Å™ Yahoo.</li><li>KliknÄ›te na kartu "Akce".</li><li>Vyberte moÅ¾nost "Sledovat dalÅ¡Ă­ kalendĂ¡Å™e".</li><li>Vyberte nĂ¡zev a vloÅ¾te adresu URL ze schrĂ¡nky do pole URL.</li></ol>',
        Cancel: "Storno"
    },
    ja: {
        "Add to Calendar": "ă‚«ăƒ¬ăƒ³ăƒ€ăƒ¼ă«è¿½å ",
        "iCal File": "iCalăƒ•ă‚¡ă‚¤ăƒ«",
        Close: "é–‰ă˜ă‚‹",
        "Close Selection": "ă‚¯ăƒ­ăƒ¼ă‚ºé¸æ",
        "Click me": "ă‚¯ăƒªăƒƒă‚¯ă—ă¦ăă ă•ă„",
        "modal.webview.ical.h": "ăƒ–ăƒ©ă‚¦ă‚¶ă‚’èµ·å‹•ă™ă‚‹",
        "modal.webview.ical.text": "æ®‹å¿µăªăŒă‚‰ă€ă‚¢ăƒ—ăƒªå†…ăƒ–ăƒ©ă‚¦ă‚¶ă¯ă€ă‚«ăƒ¬ăƒ³ăƒ€ăƒ¼ăƒ•ă‚¡ă‚¤ăƒ«ă®ç”Ÿæˆæ–¹æ³•ă«å•é¡ŒăŒă‚ă‚ă¾ă™ă€‚",
        "modal.clipboard.text": "é­”æ³•ă®URLă‚’è‡ªå‹•ç„ă«ă‚¯ăƒªăƒƒăƒ—ăƒœăƒ¼ăƒ‰ă«ă‚³ăƒ”ăƒ¼ă—ă¦ă„ă¾ă™ă€‚",
        "modal.webview.ical.steps": "<ol><li>ă‚¹ăƒăƒ¼ăƒˆăƒ•ă‚©ăƒ³ă§åˆ¥ă®ăƒ–ăƒ©ă‚¦ă‚¶ă‚’èµ·å‹•ă™ă‚‹, ...</li><li>ă‚¯ăƒªăƒƒăƒ—ăƒœăƒ¼ăƒ‰ă®å†…å®¹ă‚’è²¼ă‚ä»˜ă‘ă¦è¡Œăă€‚</li></ol>",
        "modal.crios.ical.h": "ă‚ªăƒ¼ăƒ—ăƒ³Safari",
        "modal.crios.ical.text": "æ®‹å¿µăªăŒă‚‰ă€iOSç‰ˆChromeă§ă¯ă€ă‚«ăƒ¬ăƒ³ăƒ€ăƒ¼ăƒ•ă‚¡ă‚¤ăƒ«ă®ç”Ÿæˆæ–¹æ³•ă«å•é¡ŒăŒă‚ă‚ă¾ă™ă€‚",
        "modal.crios.ical.steps": "<ol><li><strong>ă‚ªăƒ¼ăƒ—ăƒ³Safari</strong>, ...</li><li>ă‚¯ăƒªăƒƒăƒ—ăƒœăƒ¼ăƒ‰ă®å†…å®¹ă‚’è²¼ă‚ä»˜ă‘ă¦è¡Œăă€‚</li></ol>",
        "modal.multidate.h": "ă‚¤ăƒ™ăƒ³ăƒˆă‚·ăƒªăƒ¼ă‚ºă§ă™",
        "modal.multidate.text": "å€‹ă€…ă®ăƒ‘ăƒ¼ăƒ„ă‚’ä¸€ă¤ăă¤è¿½å ă—ă¦ă„ă:",
        Event: "ă‚¤ăƒ™ăƒ³ăƒˆ",
        "Cancelled Date": "ă“ă®æ—¥ă¯ă‚­ăƒ£ăƒ³ă‚»ăƒ«ă«ăªă‚ă¾ă—ăŸă€‚",
        "Delete from Calendar": "ă‚«ăƒ¬ăƒ³ăƒ€ăƒ¼ă‚’æ›´æ–°ă™ă‚‹!",
        "modal.subscribe.yahoo.h": "Yahooă«ă‚«ăƒ¬ăƒ³ăƒ€ăƒ¼ă‚’è¿½å ă™ă‚‹",
        "modal.subscribe.yahoo.text": "<ol><li>Yahooă‚«ăƒ¬ăƒ³ăƒ€ăƒ¼ă‚’é–‹ăă€‚</li><li>[å®Ÿè¡Œ] ă‚¿ăƒ–ă‚’ă‚¯ăƒªăƒƒă‚¯ă—ă¾ă™ă€‚</li><li>[ăă®ä»–ă®ă‚«ăƒ¬ăƒ³ăƒ€ăƒ¼ă®ăƒ•ă‚©ăƒ­ăƒ¼] ă‚’é¸æă—ă¾ă™ă€‚</li><li>åå‰ă‚’æ±ºă‚ă¦ă€ă‚¯ăƒªăƒƒăƒ—ăƒœăƒ¼ăƒ‰ă«ă‚ă‚‹URLă‚’URLæ¬„ă«è²¼ă‚ä»˜ă‘ă¾ă™ă€‚</li></ol>",
        Cancel: "ă‚­ăƒ£ăƒ³ă‚»ăƒ«"
    },
    it: {
        "Add to Calendar": "Aggiungi al calendario",
        "iCal File": "File iCal",
        Close: "Chiudere",
        "Close Selection": "Chiudere la selezione",
        "Click me": "Clicca su di me",
        "modal.webview.ical.h": "Aprire il browser",
        "modal.webview.ical.text": "Purtroppo i browser in-app hanno problemi con il modo in cui generiamo il file del calendario.",
        "modal.clipboard.text": "Abbiamo copiato automaticamente un URL magico negli appunti.",
        "modal.webview.ical.steps": "<ol><li><strong>Aprire un altro browser</strong> sul cellulare, ...</li><li><strong>Incollare</strong> il contenuto degli appunti e partire.</li></ol>",
        "modal.crios.ical.h": "Aprire Safari",
        "modal.crios.ical.text": "Purtroppo, Chrome su iOS ha problemi con il modo in cui generiamo il file del calendario.",
        "modal.crios.ical.steps": "<ol><li><strong>Aprire Safari</strong>, ...</li><li><strong>Incollare</strong> il contenuto degli appunti e partire.</li></ol>",
        "modal.multidate.h": "Questa Ă¨ una serie di eventi",
        "modal.multidate.text": "Aggiungere le singole parti una per una:",
        Event: "Evento",
        "Cancelled Date": "La data Ă¨ stata annullata.",
        "Delete from Calendar": "Aggiornare il calendario!",
        "modal.subscribe.yahoo.h": "Aggiungi il calendario a Yahoo",
        "modal.subscribe.yahoo.text": '<ol><li>Aprire il calendario di Yahoo.</li><li>Fare clic sulla scheda "Azioni".</li><li>Selezionare "Segui altri calendari".</li><li>Scegliere un nome e incollare l\'URL dagli appunti nel campo URL.</li></ol>',
        Cancel: "Annulla"
    },
    ko: {
        "Add to Calendar": "́º˜ë¦°ë”́— ́¶”ê°€",
        "iCal File": "iCal íŒŒ́¼",
        Close: "ë‹«ë‹¤",
        "Close Selection": "́„ íƒ ë‹«ê¸°",
        "Click me": "í´ë¦­ í•´́£¼́„¸́”",
        "modal.webview.ical.h": "ë¸Œë¼́°́ € ́—´ê¸°",
        "modal.webview.ical.text": "ë¶ˆí–‰íˆë„ ́¸́•± ë¸Œë¼́°́ €ë” ́º˜ë¦°ë” íŒŒ́¼́„ ́ƒ́„±í•˜ë” ë°©́‹́— ë¬¸́ œê°€ ́ˆ́µë‹ˆë‹¤.",
        "modal.clipboard.text": "ë§¤́§ URĹ„ í´ë¦½ë³´ë“œ́— ́ë™́œ¼ë¡œ ë³µ́‚¬í–ˆ́µë‹ˆë‹¤.",
        "modal.webview.ical.steps": "<ol><li>íœ´ëŒ€́ „í™”́—́„œ ë‹¤ë¥¸ ë¸Œë¼́°́ € ́—´ê¸°, ...</li><li>í´ë¦½ë³´ë“œ ë‚´́©́„ ë¶™́—¬ë„£ê³  ́´ë™í•©ë‹ˆë‹¤.</li></ol>",
        "modal.crios.ical.h": "Safari ́—´ê¸°",
        "modal.crios.ical.text": "ë¶ˆí–‰íˆë„ iOŚ˜ Chromé€ ́º˜ë¦°ë” íŒŒ́¼́„ ́ƒ́„±í•˜ë” ë°©́‹́— ë¬¸́ œê°€ ́ˆ́µë‹ˆë‹¤.",
        "modal.crios.ical.steps": "<ol><li><strong>Safari ́—´ê¸°</strong>, ...</li><li>í´ë¦½ë³´ë“œ ë‚´́©́„ ë¶™́—¬ë„£ê³  ́´ë™í•©ë‹ˆë‹¤.</li></ol>",
        "modal.multidate.h": "́´ë²¤í¸ ́‹œë¦¬́¦ˆ́…ë‹ˆë‹¤",
        "modal.multidate.text": "ê°œë³„ ë¶€í’ˆ́„ í•˜ë‚˜́”© ́¶”ê°€:",
        Event: "́´ë²¤í¸",
        "Cancelled Date": "́´ ë‚ ́§œë” ́·΅†Œë˜́—ˆ́µë‹ˆë‹¤.",
        "Delete from Calendar": "́º˜ë¦°ë”ë¥¼ ́—…ë°́´í¸í•˜́„¸́”!",
        "modal.subscribe.yahoo.h": "Yahoó— ́º˜ë¦°ë” ́¶”ê°€",
        "modal.subscribe.yahoo.text": '<ol><li>Yahoo ́º˜ë¦°ë”ë¥¼ ́—½ë‹ˆë‹¤.</li><li>"ë™́‘" íƒ­́„ í´ë¦­í•©ë‹ˆë‹¤.</li><li>"ë‹¤ë¥¸ ́¼́ •ê´€ë¦¬ íŒ”ë¡œ́°"ë¥¼ ́„ íƒí•©ë‹ˆë‹¤.</li><li>́´ë¦„́„ ́„ íƒí•˜ê³  í´ë¦½ë³´ë“œ́˜ URĹ„ URL í•„ë“œ́— ë¶™́—¬ë„£́µë‹ˆë‹¤.</li></ol>',
        Cancel: "́·΅†Œ"
    },
    vi: {
        "Add to Calendar": "ThĂªm vĂ o Lá»‹ch",
        "iCal File": "Tá»‡p iCal",
        Close: "ÄĂ³ng",
        "Close Selection": "ÄĂ³ng lá»±a chá»n",
        "Click me": "Nháº¥p vĂ o Ä‘Ă¢y",
        "modal.webview.ical.h": "Má»Ÿ trĂ¬nh duyá»‡t cá»§a báº¡n",
        "modal.webview.ical.text": "Ráº¥t tiáº¿c, cĂ¡c trĂ¬nh duyá»‡t trong á»©ng dá»¥ng gáº·p sá»± cá»‘ vá»›i cĂ¡ch chĂºng tĂ´i táº¡o tá»‡p lá»‹ch.",
        "modal.clipboard.text": "ChĂºng tĂ´i Ä‘Ă£ tá»± Ä‘á»™ng sao chĂ©p má»™t URL ma thuáº­t vĂ o khay nhá»› táº¡m cá»§a báº¡n.",
        "modal.webview.ical.steps": "<ol><li><strong> Má»Ÿ trĂ¬nh duyá»‡t khĂ¡c </strong> trĂªn Ä‘iá»‡n thoáº¡i cá»§a báº¡n, ...</li><li><strong> DĂ¡n </strong> ná»™i dung khay nhá»› táº¡m vĂ  báº¯t Ä‘áº§u.</li></ol>",
        "modal.crios.ical.h": "Má»Ÿ Safari",
        "modal.crios.ical.text": "Ráº¥t tiáº¿c, Chrome trĂªn iOS gáº·p sá»± cá»‘ vá»›i cĂ¡ch chĂºng tĂ´i táº¡o tá»‡p lá»‹ch.",
        "modal.crios.ical.steps": "<ol><li><strong>Má»Ÿ Safari</strong>, ...</li><li><strong> DĂ¡n </strong> ná»™i dung khay nhá»› táº¡m vĂ  báº¯t Ä‘áº§u.</li></ol>",
        "modal.multidate.h": "ÄĂ¢y lĂ  má»™t chuá»—i sá»± kiá»‡n",
        "modal.multidate.text": "ThĂªm tá»«ng pháº§n riĂªng láº» má»™t:",
        Event: "Biáº¿n cá»‘",
        "Cancelled Date": "NgĂ y nĂ y Ä‘Ă£ bá»‹ há»§y.",
        "Delete from Calendar": "Cáº­p nháº­t lá»‹ch cá»§a báº¡n!",
        "modal.subscribe.yahoo.h": "ThĂªm lá»‹ch vĂ o Yahoo",
        "modal.subscribe.yahoo.text": '<ol><li>Má»Ÿ Lá»‹ch Yahoo.</li><li>Nháº¥p vĂ o tab "HĂ nh Ä‘á»™ng".</li><li>Chá»n "Theo dĂµi cĂ¡c Lá»‹ch khĂ¡c".</li><li>Chá»n tĂªn vĂ  dĂ¡n URL tá»« khay nhá»› táº¡m cá»§a báº¡n vĂ o trÆ°á»ng URL.</li></ol>',
        Cancel: "Há»§y bá»"
    }
};
function atcb_translate_hook(e, a) {
    var t = e.replace(/\s+/g, "").toLowerCase();
    return null != a.customLabels && null != a.customLabels["" + t] && "" != a.customLabels["" + t] ? atcb_rewrite_html_elements(a.customLabels["" + t]) : atcb_translate(e, a.language)
}
function atcb_translate(e, a) {
    return a = a || "en",
    i18nStrings["" + a]["" + e] || e
}
let atcbInitialInit = !1;
function atcb_init() {
    if (atcbInitialInit || atcb_set_global_event_listener(),
    atcb_init_log_msg(),
    isBrowser()) {
        const o = document.querySelectorAll(".atcb");
        var a = [];
        if (0 < o.length) {
            var t, n = document.querySelectorAll(".atcb-initialized");
            for (let e = 0; e < o.length; e++)
                o[parseInt(e)].classList.contains("atcb-initialized") || 0 != (t = atcb_get_pro_data(atcb_patch_config(function() {
                    try {
                        return JSON.parse(atcb_secure_content(o[parseInt(e)].innerHTML.replace(/(\r\n|\n|\r)/g, ""), !1))
                    } catch (e) {
                        return console.error("Add to Calendar Button generation failed: JSON content provided, but badly formatted (in doubt, try some tool like https://jsonformatter.org/ to validate).\r\nError message: " + e),
                        ""
                    }
                }()))).length && atcb_check_required(t) && (null != (t = atcb_decorate_data(t)).identifier && "" != t.identifier || (t.identifier = "atcb-btn-" + (e + n.length + 1)),
                atcb_validate(t) && (atcb_generate_button(o[parseInt(e)], t),
                atcb_update_state_management(t),
                a.push(t.identifier)))
        }
        return a
    }
    console.error("no further initialization due to wrong environment (no browser)")
}
function atcb_action(e, a, t=!0) {
    if (atcbInitialInit || atcb_set_global_event_listener(),
    atcb_init_log_msg(),
    !atcb_check_required(e = atcb_get_pro_data(e = atcb_secure_content(e))))
        throw new Error("Add to Calendar Button generation failed: required data missing; see console logs");
    if (e = atcb_decorate_data(e),
    a ? (null != a.id && "" != a.id ? e.identifier = a.id : null != e.identifier && "" != e.identifier ? a.id = e.identifier : e.identifier = "atcb-btn-custom",
    "dropdown" == e.listStyle && (e.listStyle = "overlay")) : (e.identifier = "atcb-btn-custom",
    e.listStyle = "modal",
    e.trigger = "click"),
    atcb_validate(e))
        return atcb_update_state_management(e),
        atcb_toggle("open", e, a, t),
        console.log('Add to Calendar Button "' + e.identifier + '" triggered'),
        [e.identifier];
    throw new Error("Add to Calendar Button generation (" + e.identifier + ") failed: invalid data; see console logs")
}
function atcb_destroy(e) {
    atcb_close();
    var a = document.getElementById(e);
    return null != atcbStates["" + e] && a ? (delete atcbStates["" + e],
    (a.parentElement.parentElement.classList.contains("atcb-initialized") ? a.parentElement.parentElement : a).remove(),
    console.log('Add to Calendar Button "' + e + '" destroyed'),
    !0) : (console.error("Add to Calendar Button could not be destroyed! ID unknown."),
    !1)
}
function atcb_update_state_management(t) {
    var n = [];
    for (let a = 0; a < t.options.length; a++) {
        n[t.options["" + a]] = [];
        for (let e = 1; e <= t.dates.length; e++)
            n[t.options["" + a]].push(0)
    }
    atcbStates[t.identifier] = n
}
function atcb_init_log_msg() {
    atcbInitialInit || (console.log("Add to Calendar Button Script initialized (version " + atcbVersion + ")"),
    console.log("See https://github.com/add2cal/add-to-calendar-button for details"),
    atcbInitialInit = !0)
}
function atcb_get_pro_data(e) {
    return null != e.proKey && "" != e.proKey ? (console.error("Add to Calendar Button generation failed: proKey invalid!"),
    []) : e
}
function atcb_set_global_event_listener() {
    isBrowser() && (document.addEventListener("keyup", function(e) {
        "Escape" === e.key && atcb_toggle("close", "", "", !0)
    }),
    document.addEventListener("keydown", a=>{
        if (document.querySelector(".atcb-list") && ("ArrowDown" === a.key || "ArrowUp" === a.key || "Tab" === a.key)) {
            let e = 0;
            var t = document.activeElement
              , n = document.querySelectorAll(".atcb-list-item").length;
            if (t.classList.contains("atcb-list-item"))
                "ArrowDown" === a.key && t.dataset.optionNumber < n ? (a.preventDefault(),
                e = parseInt(t.dataset.optionNumber) + 1) : "ArrowUp" === a.key && 1 <= t.dataset.optionNumber && (a.preventDefault(),
                e = parseInt(t.dataset.optionNumber) - 1),
                0 < e && document.querySelector('.atcb-list-item[data-option-number="' + e + '"]').focus();
            else
                switch (a.preventDefault(),
                a.key) {
                case "ArrowDown":
                    document.querySelector('.atcb-list-item[data-option-number="1"]').focus();
                    break;
                case "ArrowUp":
                    document.querySelector('.atcb-list-item[data-option-number="' + n + '"]').focus();
                    break;
                default:
                    document.querySelector('.atcb-list-item[data-option-number="1"]').focus()
                }
        }
    }
    ),
    window.addEventListener("resize", atcb_throttle(()=>{
        var e, a = document.getElementById("atcb-bgoverlay"), a = (null != a && (atcb_set_fullsize(a),
        atcb_manage_body_scroll()),
        document.querySelector(".atcb-active"));
        null != a && null != (e = document.querySelector(".atcb-dropdown")) && atcb_position_list(a, e, !1, !0)
    }
    )),
    window.addEventListener("scroll", atcb_throttle(()=>{
        var e, a = document.querySelector(".atcb-active");
        null != a && null != (e = document.querySelector(".atcb-dropdown")) && e.classList.contains("atcb-mind-scrolling") && atcb_position_list(a, e, !1, !0)
    }
    , 20)))
}
isBrowser() && ("loading" !== document.readyState ? atcb_init() : document.addEventListener("DOMContentLoaded", atcb_init, !1));

/*!
* sweetalert2 v11.6.14
* Released under the MIT License.
*/
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Sweetalert2 = t()
}(this, (function() {
    "use strict";
    var e = {
        awaitingPromise: new WeakMap,
        promise: new WeakMap,
        innerParams: new WeakMap,
        domCache: new WeakMap
    };
    const t = e=>{
        const t = {};
        for (const n in e)
            t[e[n]] = "swal2-" + e[n];
        return t
    }
      , n = t(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"])
      , o = t(["success", "warning", "info", "question", "error"])
      , i = e=>e.charAt(0).toUpperCase() + e.slice(1)
      , s = e=>{
        console.warn(`SweetAlert2: ${"object" == typeof e ? e.join(" ") : e}`)
    }
      , r = e=>{
        console.error(`SweetAlert2: ${e}`)
    }
      , a = []
      , l = (e,t)=>{
        var n;
        n = `"${e}" is deprecated and will be removed in the next major release. Please use "${t}" instead.`,
        a.includes(n) || (a.push(n),
        s(n))
    }
      , c = e=>"function" == typeof e ? e() : e
      , u = e=>e && "function" == typeof e.toPromise
      , d = e=>u(e) ? e.toPromise() : Promise.resolve(e)
      , p = e=>e && Promise.resolve(e) === e
      , m = ()=>document.body.querySelector(`.${n.container}`)
      , g = e=>{
        const t = m();
        return t ? t.querySelector(e) : null
    }
      , h = e=>g(`.${e}`)
      , f = ()=>h(n.popup)
      , b = ()=>h(n.icon)
      , y = ()=>h(n.title)
      , w = ()=>h(n["html-container"])
      , v = ()=>h(n.image)
      , C = ()=>h(n["progress-steps"])
      , A = ()=>h(n["validation-message"])
      , k = ()=>g(`.${n.actions} .${n.confirm}`)
      , B = ()=>g(`.${n.actions} .${n.deny}`)
      , P = ()=>g(`.${n.loader}`)
      , x = ()=>g(`.${n.actions} .${n.cancel}`)
      , E = ()=>h(n.actions)
      , $ = ()=>h(n.footer)
      , T = ()=>h(n["timer-progress-bar"])
      , S = ()=>h(n.close)
      , L = ()=>{
        const e = Array.from(f().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(((e,t)=>{
            const n = parseInt(e.getAttribute("tabindex"))
              , o = parseInt(t.getAttribute("tabindex"));
            return n > o ? 1 : n < o ? -1 : 0
        }
        ))
          , t = Array.from(f().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter((e=>"-1" !== e.getAttribute("tabindex")));
        return (e=>{
            const t = [];
            for (let n = 0; n < e.length; n++)
                -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t
        }
        )(e.concat(t)).filter((e=>Z(e)))
    }
      , O = ()=>I(document.body, n.shown) && !I(document.body, n["toast-shown"]) && !I(document.body, n["no-backdrop"])
      , j = ()=>f() && I(f(), n.toast)
      , M = {
        previousBodyPadding: null
    }
      , H = (e,t)=>{
        if (e.textContent = "",
        t) {
            const n = (new DOMParser).parseFromString(t, "text/html");
            Array.from(n.querySelector("head").childNodes).forEach((t=>{
                e.appendChild(t)
            }
            )),
            Array.from(n.querySelector("body").childNodes).forEach((t=>{
                t instanceof HTMLVideoElement || t instanceof HTMLAudioElement ? e.appendChild(t.cloneNode(!0)) : e.appendChild(t)
            }
            ))
        }
    }
      , I = (e,t)=>{
        if (!t)
            return !1;
        const n = t.split(/\s+/);
        for (let t = 0; t < n.length; t++)
            if (!e.classList.contains(n[t]))
                return !1;
        return !0
    }
      , D = (e,t,i)=>{
        if (((e,t)=>{
            Array.from(e.classList).forEach((i=>{
                Object.values(n).includes(i) || Object.values(o).includes(i) || Object.values(t.showClass).includes(i) || e.classList.remove(i)
            }
            ))
        }
        )(e, t),
        t.customClass && t.customClass[i]) {
            if ("string" != typeof t.customClass[i] && !t.customClass[i].forEach)
                return void s(`Invalid type of customClass.${i}! Expected string or iterable object, got "${typeof t.customClass[i]}"`);
            F(e, t.customClass[i])
        }
    }
      , q = (e,t)=>{
        if (!t)
            return null;
        switch (t) {
        case "select":
        case "textarea":
        case "file":
            return e.querySelector(`.${n.popup} > .${n[t]}`);
        case "checkbox":
            return e.querySelector(`.${n.popup} > .${n.checkbox} input`);
        case "radio":
            return e.querySelector(`.${n.popup} > .${n.radio} input:checked`) || e.querySelector(`.${n.popup} > .${n.radio} input:first-child`);
        case "range":
            return e.querySelector(`.${n.popup} > .${n.range} input`);
        default:
            return e.querySelector(`.${n.popup} > .${n.input}`)
        }
    }
      , V = e=>{
        if (e.focus(),
        "file" !== e.type) {
            const t = e.value;
            e.value = "",
            e.value = t
        }
    }
      , N = (e,t,n)=>{
        e && t && ("string" == typeof t && (t = t.split(/\s+/).filter(Boolean)),
        t.forEach((t=>{
            Array.isArray(e) ? e.forEach((e=>{
                n ? e.classList.add(t) : e.classList.remove(t)
            }
            )) : n ? e.classList.add(t) : e.classList.remove(t)
        }
        )))
    }
      , F = (e,t)=>{
        N(e, t, !0)
    }
      , R = (e,t)=>{
        N(e, t, !1)
    }
      , U = (e,t)=>{
        const n = Array.from(e.children);
        for (let e = 0; e < n.length; e++) {
            const o = n[e];
            if (o instanceof HTMLElement && I(o, t))
                return o
        }
    }
      , _ = (e,t,n)=>{
        n === `${parseInt(n)}` && (n = parseInt(n)),
        n || 0 === parseInt(n) ? e.style[t] = "number" == typeof n ? `${n}px` : n : e.style.removeProperty(t)
    }
      , W = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "flex";
        e.style.display = t
    }
      , z = e=>{
        e.style.display = "none"
    }
      , K = (e,t,n,o)=>{
        const i = e.querySelector(t);
        i && (i.style[n] = o)
    }
      , Y = function(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "flex";
        t ? W(e, n) : z(e)
    }
      , Z = e=>!(!e || !(e.offsetWidth || e.offsetHeight || e.getClientRects().length))
      , J = e=>!!(e.scrollHeight > e.clientHeight)
      , X = e=>{
        const t = window.getComputedStyle(e)
          , n = parseFloat(t.getPropertyValue("animation-duration") || "0")
          , o = parseFloat(t.getPropertyValue("transition-duration") || "0");
        return n > 0 || o > 0
    }
      , G = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const n = T();
        Z(n) && (t && (n.style.transition = "none",
        n.style.width = "100%"),
        setTimeout((()=>{
            n.style.transition = `width ${e / 1e3}s linear`,
            n.style.width = "0%"
        }
        ), 10))
    }
      , Q = {}
      , ee = e=>new Promise((t=>{
        if (!e)
            return t();
        const n = window.scrollX
          , o = window.scrollY;
        Q.restoreFocusTimeout = setTimeout((()=>{
            Q.previousActiveElement instanceof HTMLElement ? (Q.previousActiveElement.focus(),
            Q.previousActiveElement = null) : document.body && document.body.focus(),
            t()
        }
        ), 100),
        window.scrollTo(n, o)
    }
    ))
      , te = ()=>"undefined" == typeof window || "undefined" == typeof document
      , ne = `\n <div aria-labelledby="${n.title}" aria-describedby="${n["html-container"]}" class="${n.popup}" tabindex="-1">\n   <button type="button" class="${n.close}"></button>\n   <ul class="${n["progress-steps"]}"></ul>\n   <div class="${n.icon}"></div>\n   <img class="${n.image}" />\n   <h2 class="${n.title}" id="${n.title}"></h2>\n   <div class="${n["html-container"]}" id="${n["html-container"]}"></div>\n   <input class="${n.input}" />\n   <input type="file" class="${n.file}" />\n   <div class="${n.range}">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="${n.select}"></select>\n   <div class="${n.radio}"></div>\n   <label for="${n.checkbox}" class="${n.checkbox}">\n     <input type="checkbox" />\n     <span class="${n.label}"></span>\n   </label>\n   <textarea class="${n.textarea}"></textarea>\n   <div class="${n["validation-message"]}" id="${n["validation-message"]}"></div>\n   <div class="${n.actions}">\n     <div class="${n.loader}"></div>\n     <button type="button" class="${n.confirm}"></button>\n     <button type="button" class="${n.deny}"></button>\n     <button type="button" class="${n.cancel}"></button>\n   </div>\n   <div class="${n.footer}"></div>\n   <div class="${n["timer-progress-bar-container"]}">\n     <div class="${n["timer-progress-bar"]}"></div>\n   </div>\n </div>\n`.replace(/(^|\n)\s*/g, "")
      , oe = ()=>{
        Q.currentInstance.resetValidationMessage()
    }
      , ie = e=>{
        const t = (()=>{
            const e = m();
            return !!e && (e.remove(),
            R([document.documentElement, document.body], [n["no-backdrop"], n["toast-shown"], n["has-column"]]),
            !0)
        }
        )();
        if (te())
            return void r("SweetAlert2 requires document to initialize");
        const o = document.createElement("div");
        o.className = n.container,
        t && F(o, n["no-transition"]),
        H(o, ne);
        const i = "string" == typeof (s = e.target) ? document.querySelector(s) : s;
        var s;
        i.appendChild(o),
        (e=>{
            const t = f();
            t.setAttribute("role", e.toast ? "alert" : "dialog"),
            t.setAttribute("aria-live", e.toast ? "polite" : "assertive"),
            e.toast || t.setAttribute("aria-modal", "true")
        }
        )(e),
        (e=>{
            "rtl" === window.getComputedStyle(e).direction && F(m(), n.rtl)
        }
        )(i),
        (()=>{
            const e = f()
              , t = U(e, n.input)
              , o = U(e, n.file)
              , i = e.querySelector(`.${n.range} input`)
              , s = e.querySelector(`.${n.range} output`)
              , r = U(e, n.select)
              , a = e.querySelector(`.${n.checkbox} input`)
              , l = U(e, n.textarea);
            t.oninput = oe,
            o.onchange = oe,
            r.onchange = oe,
            a.onchange = oe,
            l.oninput = oe,
            i.oninput = ()=>{
                oe(),
                s.value = i.value
            }
            ,
            i.onchange = ()=>{
                oe(),
                s.value = i.value
            }
        }
        )()
    }
      , se = (e,t)=>{
        e instanceof HTMLElement ? t.appendChild(e) : "object" == typeof e ? re(e, t) : e && H(t, e)
    }
      , re = (e,t)=>{
        e.jquery ? ae(t, e) : H(t, e.toString())
    }
      , ae = (e,t)=>{
        if (e.textContent = "",
        0 in t)
            for (let n = 0; n in t; n++)
                e.appendChild(t[n].cloneNode(!0));
        else
            e.appendChild(t.cloneNode(!0))
    }
      , le = (()=>{
        if (te())
            return !1;
        const e = document.createElement("div")
          , t = {
            WebkitAnimation: "webkitAnimationEnd",
            animation: "animationend"
        };
        for (const n in t)
            if (Object.prototype.hasOwnProperty.call(t, n) && void 0 !== e.style[n])
                return t[n];
        return !1
    }
    )()
      , ce = (e,t)=>{
        const o = E()
          , i = P();
        t.showConfirmButton || t.showDenyButton || t.showCancelButton ? W(o) : z(o),
        D(o, t, "actions"),
        function(e, t, o) {
            const i = k()
              , s = B()
              , r = x();
            ue(i, "confirm", o),
            ue(s, "deny", o),
            ue(r, "cancel", o),
            function(e, t, o, i) {
                if (!i.buttonsStyling)
                    return void R([e, t, o], n.styled);
                F([e, t, o], n.styled),
                i.confirmButtonColor && (e.style.backgroundColor = i.confirmButtonColor,
                F(e, n["default-outline"]));
                i.denyButtonColor && (t.style.backgroundColor = i.denyButtonColor,
                F(t, n["default-outline"]));
                i.cancelButtonColor && (o.style.backgroundColor = i.cancelButtonColor,
                F(o, n["default-outline"]))
            }(i, s, r, o),
            o.reverseButtons && (o.toast ? (e.insertBefore(r, i),
            e.insertBefore(s, i)) : (e.insertBefore(r, t),
            e.insertBefore(s, t),
            e.insertBefore(i, t)))
        }(o, i, t),
        H(i, t.loaderHtml),
        D(i, t, "loader")
    }
    ;
    function ue(e, t, o) {
        Y(e, o[`show${i(t)}Button`], "inline-block"),
        H(e, o[`${t}ButtonText`]),
        e.setAttribute("aria-label", o[`${t}ButtonAriaLabel`]),
        e.className = n[t],
        D(e, o, `${t}Button`),
        F(e, o[`${t}ButtonClass`])
    }
    const de = (e,t)=>{
        const o = m();
        o && (!function(e, t) {
            "string" == typeof t ? e.style.background = t : t || F([document.documentElement, document.body], n["no-backdrop"])
        }(o, t.backdrop),
        function(e, t) {
            t in n ? F(e, n[t]) : (s('The "position" parameter is not valid, defaulting to "center"'),
            F(e, n.center))
        }(o, t.position),
        function(e, t) {
            if (t && "string" == typeof t) {
                const o = `grow-${t}`;
                o in n && F(e, n[o])
            }
        }(o, t.grow),
        D(o, t, "container"))
    }
    ;
    const pe = ["input", "file", "range", "select", "radio", "checkbox", "textarea"]
      , me = e=>{
        if (!ve[e.input])
            return void r(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${e.input}"`);
        const t = ye(e.input)
          , n = ve[e.input](t, e);
        W(t),
        setTimeout((()=>{
            V(n)
        }
        ))
    }
      , ge = (e,t)=>{
        const n = q(f(), e);
        if (n) {
            (e=>{
                for (let t = 0; t < e.attributes.length; t++) {
                    const n = e.attributes[t].name;
                    ["type", "value", "style"].includes(n) || e.removeAttribute(n)
                }
            }
            )(n);
            for (const e in t)
                n.setAttribute(e, t[e])
        }
    }
      , he = e=>{
        const t = ye(e.input);
        "object" == typeof e.customClass && F(t, e.customClass.input)
    }
      , fe = (e,t)=>{
        e.placeholder && !t.inputPlaceholder || (e.placeholder = t.inputPlaceholder)
    }
      , be = (e,t,o)=>{
        if (o.inputLabel) {
            e.id = n.input;
            const i = document.createElement("label")
              , s = n["input-label"];
            i.setAttribute("for", e.id),
            i.className = s,
            "object" == typeof o.customClass && F(i, o.customClass.inputLabel),
            i.innerText = o.inputLabel,
            t.insertAdjacentElement("beforebegin", i)
        }
    }
      , ye = e=>U(f(), n[e] || n.input)
      , we = (e,t)=>{
        ["string", "number"].includes(typeof t) ? e.value = `${t}` : p(t) || s(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`)
    }
      , ve = {};
    ve.text = ve.email = ve.password = ve.number = ve.tel = ve.url = (e,t)=>(we(e, t.inputValue),
    be(e, e, t),
    fe(e, t),
    e.type = t.input,
    e),
    ve.file = (e,t)=>(be(e, e, t),
    fe(e, t),
    e),
    ve.range = (e,t)=>{
        const n = e.querySelector("input")
          , o = e.querySelector("output");
        return we(n, t.inputValue),
        n.type = t.input,
        we(o, t.inputValue),
        be(n, e, t),
        e
    }
    ,
    ve.select = (e,t)=>{
        if (e.textContent = "",
        t.inputPlaceholder) {
            const n = document.createElement("option");
            H(n, t.inputPlaceholder),
            n.value = "",
            n.disabled = !0,
            n.selected = !0,
            e.appendChild(n)
        }
        return be(e, e, t),
        e
    }
    ,
    ve.radio = e=>(e.textContent = "",
    e),
    ve.checkbox = (e,t)=>{
        const o = q(f(), "checkbox");
        o.value = "1",
        o.id = n.checkbox,
        o.checked = Boolean(t.inputValue);
        const i = e.querySelector("span");
        return H(i, t.inputPlaceholder),
        o
    }
    ,
    ve.textarea = (e,t)=>{
        we(e, t.inputValue),
        fe(e, t),
        be(e, e, t);
        return setTimeout((()=>{
            if ("MutationObserver"in window) {
                const t = parseInt(window.getComputedStyle(f()).width);
                new MutationObserver((()=>{
                    const n = e.offsetWidth + (o = e,
                    parseInt(window.getComputedStyle(o).marginLeft) + parseInt(window.getComputedStyle(o).marginRight));
                    var o;
                    f().style.width = n > t ? `${n}px` : null
                }
                )).observe(e, {
                    attributes: !0,
                    attributeFilter: ["style"]
                })
            }
        }
        )),
        e
    }
    ;
    const Ce = (t,o)=>{
        const i = w();
        D(i, o, "htmlContainer"),
        o.html ? (se(o.html, i),
        W(i, "block")) : o.text ? (i.textContent = o.text,
        W(i, "block")) : z(i),
        ((t,o)=>{
            const i = f()
              , s = e.innerParams.get(t)
              , r = !s || o.input !== s.input;
            pe.forEach((e=>{
                const t = U(i, n[e]);
                ge(e, o.inputAttributes),
                t.className = n[e],
                r && z(t)
            }
            )),
            o.input && (r && me(o),
            he(o))
        }
        )(t, o)
    }
      , Ae = (e,t)=>{
        for (const n in o)
            t.icon !== n && R(e, o[n]);
        F(e, o[t.icon]),
        Pe(e, t),
        ke(),
        D(e, t, "icon")
    }
      , ke = ()=>{
        const e = f()
          , t = window.getComputedStyle(e).getPropertyValue("background-color")
          , n = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
        for (let e = 0; e < n.length; e++)
            n[e].style.backgroundColor = t
    }
      , Be = (e,t)=>{
        let n, o = e.innerHTML;
        if (t.iconHtml)
            n = xe(t.iconHtml);
        else if ("success" === t.icon)
            n = '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n',
            o = o.replace(/ style=".*?"/g, "");
        else if ("error" === t.icon)
            n = '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n';
        else {
            n = xe({
                question: "?",
                warning: "!",
                info: "i"
            }[t.icon])
        }
        o.trim() !== n.trim() && H(e, n)
    }
      , Pe = (e,t)=>{
        if (t.iconColor) {
            e.style.color = t.iconColor,
            e.style.borderColor = t.iconColor;
            for (const n of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"])
                K(e, n, "backgroundColor", t.iconColor);
            K(e, ".swal2-success-ring", "borderColor", t.iconColor)
        }
    }
      , xe = e=>`<div class="${n["icon-content"]}">${e}</div>`
      , Ee = (e,t)=>{
        e.className = `${n.popup} ${Z(e) ? t.showClass.popup : ""}`,
        t.toast ? (F([document.documentElement, document.body], n["toast-shown"]),
        F(e, n.toast)) : F(e, n.modal),
        D(e, t, "popup"),
        "string" == typeof t.customClass && F(e, t.customClass),
        t.icon && F(e, n[`icon-${t.icon}`])
    }
      , $e = e=>{
        const t = document.createElement("li");
        return F(t, n["progress-step"]),
        H(t, e),
        t
    }
      , Te = e=>{
        const t = document.createElement("li");
        return F(t, n["progress-step-line"]),
        e.progressStepsDistance && _(t, "width", e.progressStepsDistance),
        t
    }
      , Se = (t,i)=>{
        ((e,t)=>{
            const n = m()
              , o = f();
            t.toast ? (_(n, "width", t.width),
            o.style.width = "100%",
            o.insertBefore(P(), b())) : _(o, "width", t.width),
            _(o, "padding", t.padding),
            t.color && (o.style.color = t.color),
            t.background && (o.style.background = t.background),
            z(A()),
            Ee(o, t)
        }
        )(0, i),
        de(0, i),
        ((e,t)=>{
            const o = C();
            t.progressSteps && 0 !== t.progressSteps.length ? (W(o),
            o.textContent = "",
            t.currentProgressStep >= t.progressSteps.length && s("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),
            t.progressSteps.forEach(((e,i)=>{
                const s = $e(e);
                if (o.appendChild(s),
                i === t.currentProgressStep && F(s, n["active-progress-step"]),
                i !== t.progressSteps.length - 1) {
                    const e = Te(t);
                    o.appendChild(e)
                }
            }
            ))) : z(o)
        }
        )(0, i),
        ((t,n)=>{
            const i = e.innerParams.get(t)
              , s = b();
            if (i && n.icon === i.icon)
                return Be(s, n),
                void Ae(s, n);
            if (n.icon || n.iconHtml) {
                if (n.icon && -1 === Object.keys(o).indexOf(n.icon))
                    return r(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${n.icon}"`),
                    void z(s);
                W(s),
                Be(s, n),
                Ae(s, n),
                F(s, n.showClass.icon)
            } else
                z(s)
        }
        )(t, i),
        ((e,t)=>{
            const o = v();
            t.imageUrl ? (W(o, ""),
            o.setAttribute("src", t.imageUrl),
            o.setAttribute("alt", t.imageAlt),
            _(o, "width", t.imageWidth),
            _(o, "height", t.imageHeight),
            o.className = n.image,
            D(o, t, "image")) : z(o)
        }
        )(0, i),
        ((e,t)=>{
            const n = y();
            Y(n, t.title || t.titleText, "block"),
            t.title && se(t.title, n),
            t.titleText && (n.innerText = t.titleText),
            D(n, t, "title")
        }
        )(0, i),
        ((e,t)=>{
            const n = S();
            H(n, t.closeButtonHtml),
            D(n, t, "closeButton"),
            Y(n, t.showCloseButton),
            n.setAttribute("aria-label", t.closeButtonAriaLabel)
        }
        )(0, i),
        Ce(t, i),
        ce(0, i),
        ((e,t)=>{
            const n = $();
            Y(n, t.footer),
            t.footer && se(t.footer, n),
            D(n, t, "footer")
        }
        )(0, i),
        "function" == typeof i.didRender && i.didRender(f())
    }
    ;
    function Le() {
        const t = e.innerParams.get(this);
        if (!t)
            return;
        const o = e.domCache.get(this);
        z(o.loader),
        j() ? t.icon && W(b()) : Oe(o),
        R([o.popup, o.actions], n.loading),
        o.popup.removeAttribute("aria-busy"),
        o.popup.removeAttribute("data-loading"),
        o.confirmButton.disabled = !1,
        o.denyButton.disabled = !1,
        o.cancelButton.disabled = !1
    }
    const Oe = e=>{
        const t = e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));
        t.length ? W(t[0], "inline-block") : Z(k()) || Z(B()) || Z(x()) || z(e.actions)
    }
    ;
    const je = ()=>k() && k().click()
      , Me = Object.freeze({
        cancel: "cancel",
        backdrop: "backdrop",
        close: "close",
        esc: "esc",
        timer: "timer"
    })
      , He = e=>{
        e.keydownTarget && e.keydownHandlerAdded && (e.keydownTarget.removeEventListener("keydown", e.keydownHandler, {
            capture: e.keydownListenerCapture
        }),
        e.keydownHandlerAdded = !1)
    }
      , Ie = (e,t,n)=>{
        const o = L();
        if (o.length)
            return (t += n) === o.length ? t = 0 : -1 === t && (t = o.length - 1),
            o[t].focus();
        f().focus()
    }
      , De = ["ArrowRight", "ArrowDown"]
      , qe = ["ArrowLeft", "ArrowUp"]
      , Ve = (t,n,o)=>{
        const i = e.innerParams.get(t);
        i && (n.isComposing || 229 === n.keyCode || (i.stopKeydownPropagation && n.stopPropagation(),
        "Enter" === n.key ? Ne(t, n, i) : "Tab" === n.key ? Fe(n, i) : [...De, ...qe].includes(n.key) ? Re(n.key) : "Escape" === n.key && Ue(n, i, o)))
    }
      , Ne = (e,t,n)=>{
        if (c(n.allowEnterKey) && t.target && e.getInput() && t.target instanceof HTMLElement && t.target.outerHTML === e.getInput().outerHTML) {
            if (["textarea", "file"].includes(n.input))
                return;
            je(),
            t.preventDefault()
        }
    }
      , Fe = (e,t)=>{
        const n = e.target
          , o = L();
        let i = -1;
        for (let e = 0; e < o.length; e++)
            if (n === o[e]) {
                i = e;
                break
            }
        e.shiftKey ? Ie(0, i, -1) : Ie(0, i, 1),
        e.stopPropagation(),
        e.preventDefault()
    }
      , Re = e=>{
        const t = k()
          , n = B()
          , o = x();
        if (document.activeElement instanceof HTMLElement && ![t, n, o].includes(document.activeElement))
            return;
        const i = De.includes(e) ? "nextElementSibling" : "previousElementSibling";
        let s = document.activeElement;
        for (let e = 0; e < E().children.length; e++) {
            if (s = s[i],
            !s)
                return;
            if (s instanceof HTMLButtonElement && Z(s))
                break
        }
        s instanceof HTMLButtonElement && s.focus()
    }
      , Ue = (e,t,n)=>{
        c(t.allowEscapeKey) && (e.preventDefault(),
        n(Me.esc))
    }
    ;
    var _e = {
        swalPromiseResolve: new WeakMap,
        swalPromiseReject: new WeakMap
    };
    const We = ()=>{
        Array.from(document.body.children).forEach((e=>{
            e.hasAttribute("data-previous-aria-hidden") ? (e.setAttribute("aria-hidden", e.getAttribute("data-previous-aria-hidden")),
            e.removeAttribute("data-previous-aria-hidden")) : e.removeAttribute("aria-hidden")
        }
        ))
    }
      , ze = ()=>{
        const e = navigator.userAgent
          , t = !!e.match(/iPad/i) || !!e.match(/iPhone/i)
          , n = !!e.match(/WebKit/i);
        if (t && n && !e.match(/CriOS/i)) {
            const e = 44;
            f().scrollHeight > window.innerHeight - e && (m().style.paddingBottom = `${e}px`)
        }
    }
      , Ke = ()=>{
        const e = m();
        let t;
        e.ontouchstart = e=>{
            t = Ye(e)
        }
        ,
        e.ontouchmove = e=>{
            t && (e.preventDefault(),
            e.stopPropagation())
        }
    }
      , Ye = e=>{
        const t = e.target
          , n = m();
        return !Ze(e) && !Je(e) && (t === n || !J(n) && t instanceof HTMLElement && "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName && (!J(w()) || !w().contains(t)))
    }
      , Ze = e=>e.touches && e.touches.length && "stylus" === e.touches[0].touchType
      , Je = e=>e.touches && e.touches.length > 1
      , Xe = ()=>{
        null === M.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (M.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),
        document.body.style.paddingRight = `${M.previousBodyPadding + (()=>{
            const e = document.createElement("div");
            e.className = n["scrollbar-measure"],
            document.body.appendChild(e);
            const t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e),
            t
        }
        )()}px`)
    }
    ;
    function Ge(e, t, o, i) {
        j() ? st(e, i) : (ee(o).then((()=>st(e, i))),
        He(Q));
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (t.setAttribute("style", "display:none !important"),
        t.removeAttribute("class"),
        t.innerHTML = "") : t.remove(),
        O() && (null !== M.previousBodyPadding && (document.body.style.paddingRight = `${M.previousBodyPadding}px`,
        M.previousBodyPadding = null),
        (()=>{
            if (I(document.body, n.iosfix)) {
                const e = parseInt(document.body.style.top, 10);
                R(document.body, n.iosfix),
                document.body.style.top = "",
                document.body.scrollTop = -1 * e
            }
        }
        )(),
        We()),
        R([document.documentElement, document.body], [n.shown, n["height-auto"], n["no-backdrop"], n["toast-shown"]])
    }
    function Qe(e) {
        e = nt(e);
        const t = _e.swalPromiseResolve.get(this)
          , n = et(this);
        this.isAwaitingPromise() ? e.isDismissed || (tt(this),
        t(e)) : n && t(e)
    }
    const et = t=>{
        const n = f();
        if (!n)
            return !1;
        const o = e.innerParams.get(t);
        if (!o || I(n, o.hideClass.popup))
            return !1;
        R(n, o.showClass.popup),
        F(n, o.hideClass.popup);
        const i = m();
        return R(i, o.showClass.backdrop),
        F(i, o.hideClass.backdrop),
        ot(t, n, o),
        !0
    }
    ;
    const tt = t=>{
        t.isAwaitingPromise() && (e.awaitingPromise.delete(t),
        e.innerParams.get(t) || t._destroy())
    }
      , nt = e=>void 0 === e ? {
        isConfirmed: !1,
        isDenied: !1,
        isDismissed: !0
    } : Object.assign({
        isConfirmed: !1,
        isDenied: !1,
        isDismissed: !1
    }, e)
      , ot = (e,t,n)=>{
        const o = m()
          , i = le && X(t);
        "function" == typeof n.willClose && n.willClose(t),
        i ? it(e, t, o, n.returnFocus, n.didClose) : Ge(e, o, n.returnFocus, n.didClose)
    }
      , it = (e,t,n,o,i)=>{
        Q.swalCloseEventFinishedCallback = Ge.bind(null, e, n, o, i),
        t.addEventListener(le, (function(e) {
            e.target === t && (Q.swalCloseEventFinishedCallback(),
            delete Q.swalCloseEventFinishedCallback)
        }
        ))
    }
      , st = (e,t)=>{
        setTimeout((()=>{
            "function" == typeof t && t.bind(e.params)(),
            e._destroy()
        }
        ))
    }
    ;
    function rt(t, n, o) {
        const i = e.domCache.get(t);
        n.forEach((e=>{
            i[e].disabled = o
        }
        ))
    }
    function at(e, t) {
        if (e)
            if ("radio" === e.type) {
                const n = e.parentNode.parentNode.querySelectorAll("input");
                for (let e = 0; e < n.length; e++)
                    n[e].disabled = t
            } else
                e.disabled = t
    }
    const lt = {
        title: "",
        titleText: "",
        text: "",
        html: "",
        footer: "",
        icon: void 0,
        iconColor: void 0,
        iconHtml: void 0,
        template: void 0,
        toast: !1,
        showClass: {
            popup: "swal2-show",
            backdrop: "swal2-backdrop-show",
            icon: "swal2-icon-show"
        },
        hideClass: {
            popup: "swal2-hide",
            backdrop: "swal2-backdrop-hide",
            icon: "swal2-icon-hide"
        },
        customClass: {},
        target: "body",
        color: void 0,
        backdrop: !0,
        heightAuto: !0,
        allowOutsideClick: !0,
        allowEscapeKey: !0,
        allowEnterKey: !0,
        stopKeydownPropagation: !0,
        keydownListenerCapture: !1,
        showConfirmButton: !0,
        showDenyButton: !1,
        showCancelButton: !1,
        preConfirm: void 0,
        preDeny: void 0,
        confirmButtonText: "OK",
        confirmButtonAriaLabel: "",
        confirmButtonColor: void 0,
        denyButtonText: "No",
        denyButtonAriaLabel: "",
        denyButtonColor: void 0,
        cancelButtonText: "Cancel",
        cancelButtonAriaLabel: "",
        cancelButtonColor: void 0,
        buttonsStyling: !0,
        reverseButtons: !1,
        focusConfirm: !0,
        focusDeny: !1,
        focusCancel: !1,
        returnFocus: !0,
        showCloseButton: !1,
        closeButtonHtml: "&times;",
        closeButtonAriaLabel: "Close this dialog",
        loaderHtml: "",
        showLoaderOnConfirm: !1,
        showLoaderOnDeny: !1,
        imageUrl: void 0,
        imageWidth: void 0,
        imageHeight: void 0,
        imageAlt: "",
        timer: void 0,
        timerProgressBar: !1,
        width: void 0,
        padding: void 0,
        background: void 0,
        input: void 0,
        inputPlaceholder: "",
        inputLabel: "",
        inputValue: "",
        inputOptions: {},
        inputAutoTrim: !0,
        inputAttributes: {},
        inputValidator: void 0,
        returnInputValueOnDeny: !1,
        validationMessage: void 0,
        grow: !1,
        position: "center",
        progressSteps: [],
        currentProgressStep: void 0,
        progressStepsDistance: void 0,
        willOpen: void 0,
        didOpen: void 0,
        didRender: void 0,
        willClose: void 0,
        didClose: void 0,
        didDestroy: void 0,
        scrollbarPadding: !0
    }
      , ct = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"]
      , ut = {}
      , dt = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"]
      , pt = e=>Object.prototype.hasOwnProperty.call(lt, e)
      , mt = e=>-1 !== ct.indexOf(e)
      , gt = e=>ut[e]
      , ht = e=>{
        pt(e) || s(`Unknown parameter "${e}"`)
    }
      , ft = e=>{
        dt.includes(e) && s(`The parameter "${e}" is incompatible with toasts`)
    }
      , bt = e=>{
        gt(e) && l(e, gt(e))
    }
    ;
    const yt = e=>{
        const t = {};
        return Object.keys(e).forEach((n=>{
            mt(n) ? t[n] = e[n] : s(`Invalid parameter to update: ${n}`)
        }
        )),
        t
    }
    ;
    const wt = e=>{
        vt(e),
        delete e.params,
        delete Q.keydownHandler,
        delete Q.keydownTarget,
        delete Q.currentInstance
    }
      , vt = t=>{
        t.isAwaitingPromise() ? (Ct(e, t),
        e.awaitingPromise.set(t, !0)) : (Ct(_e, t),
        Ct(e, t))
    }
      , Ct = (e,t)=>{
        for (const n in e)
            e[n].delete(t)
    }
    ;
    var At = Object.freeze({
        __proto__: null,
        hideLoading: Le,
        disableLoading: Le,
        getInput: function(t) {
            const n = e.innerParams.get(t || this)
              , o = e.domCache.get(t || this);
            return o ? q(o.popup, n.input) : null
        },
        close: Qe,
        isAwaitingPromise: function() {
            return !!e.awaitingPromise.get(this)
        },
        rejectPromise: function(e) {
            const t = _e.swalPromiseReject.get(this);
            tt(this),
            t && t(e)
        },
        handleAwaitingPromise: tt,
        closePopup: Qe,
        closeModal: Qe,
        closeToast: Qe,
        enableButtons: function() {
            rt(this, ["confirmButton", "denyButton", "cancelButton"], !1)
        },
        disableButtons: function() {
            rt(this, ["confirmButton", "denyButton", "cancelButton"], !0)
        },
        enableInput: function() {
            at(this.getInput(), !1)
        },
        disableInput: function() {
            at(this.getInput(), !0)
        },
        showValidationMessage: function(t) {
            const o = e.domCache.get(this)
              , i = e.innerParams.get(this);
            H(o.validationMessage, t),
            o.validationMessage.className = n["validation-message"],
            i.customClass && i.customClass.validationMessage && F(o.validationMessage, i.customClass.validationMessage),
            W(o.validationMessage);
            const s = this.getInput();
            s && (s.setAttribute("aria-invalid", !0),
            s.setAttribute("aria-describedby", n["validation-message"]),
            V(s),
            F(s, n.inputerror))
        },
        resetValidationMessage: function() {
            const t = e.domCache.get(this);
            t.validationMessage && z(t.validationMessage);
            const o = this.getInput();
            o && (o.removeAttribute("aria-invalid"),
            o.removeAttribute("aria-describedby"),
            R(o, n.inputerror))
        },
        update: function(t) {
            const n = f()
              , o = e.innerParams.get(this);
            if (!n || I(n, o.hideClass.popup))
                return void s("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            const i = yt(t)
              , r = Object.assign({}, o, i);
            Se(this, r),
            e.innerParams.set(this, r),
            Object.defineProperties(this, {
                params: {
                    value: Object.assign({}, this.params, t),
                    writable: !1,
                    enumerable: !0
                }
            })
        },
        _destroy: function() {
            const t = e.domCache.get(this)
              , n = e.innerParams.get(this);
            n ? (t.popup && Q.swalCloseEventFinishedCallback && (Q.swalCloseEventFinishedCallback(),
            delete Q.swalCloseEventFinishedCallback),
            "function" == typeof n.didDestroy && n.didDestroy(),
            wt(this)) : vt(this)
        }
    });
    const kt = e=>{
        let t = f();
        t || new xn,
        t = f();
        const n = P();
        j() ? z(b()) : Bt(t, e),
        W(n),
        t.setAttribute("data-loading", "true"),
        t.setAttribute("aria-busy", "true"),
        t.focus()
    }
      , Bt = (e,t)=>{
        const o = E()
          , i = P();
        !t && Z(k()) && (t = k()),
        W(o),
        t && (z(t),
        i.setAttribute("data-button-to-replace", t.className)),
        i.parentNode.insertBefore(i, t),
        F([e, o], n.loading)
    }
      , Pt = e=>e.checked ? 1 : 0
      , xt = e=>e.checked ? e.value : null
      , Et = e=>e.files.length ? null !== e.getAttribute("multiple") ? e.files : e.files[0] : null
      , $t = (e,t)=>{
        const n = f()
          , o = e=>{
            St[t.input](n, Lt(e), t)
        }
        ;
        u(t.inputOptions) || p(t.inputOptions) ? (kt(k()),
        d(t.inputOptions).then((t=>{
            e.hideLoading(),
            o(t)
        }
        ))) : "object" == typeof t.inputOptions ? o(t.inputOptions) : r("Unexpected type of inputOptions! Expected object, Map or Promise, got " + typeof t.inputOptions)
    }
      , Tt = (e,t)=>{
        const n = e.getInput();
        z(n),
        d(t.inputValue).then((o=>{
            n.value = "number" === t.input ? `${parseFloat(o) || 0}` : `${o}`,
            W(n),
            n.focus(),
            e.hideLoading()
        }
        )).catch((t=>{
            r(`Error in inputValue promise: ${t}`),
            n.value = "",
            W(n),
            n.focus(),
            e.hideLoading()
        }
        ))
    }
      , St = {
        select: (e,t,o)=>{
            const i = U(e, n.select)
              , s = (e,t,n)=>{
                const i = document.createElement("option");
                i.value = n,
                H(i, t),
                i.selected = Ot(n, o.inputValue),
                e.appendChild(i)
            }
            ;
            t.forEach((e=>{
                const t = e[0]
                  , n = e[1];
                if (Array.isArray(n)) {
                    const e = document.createElement("optgroup");
                    e.label = t,
                    e.disabled = !1,
                    i.appendChild(e),
                    n.forEach((t=>s(e, t[1], t[0])))
                } else
                    s(i, n, t)
            }
            )),
            i.focus()
        }
        ,
        radio: (e,t,o)=>{
            const i = U(e, n.radio);
            t.forEach((e=>{
                const t = e[0]
                  , s = e[1]
                  , r = document.createElement("input")
                  , a = document.createElement("label");
                r.type = "radio",
                r.name = n.radio,
                r.value = t,
                Ot(t, o.inputValue) && (r.checked = !0);
                const l = document.createElement("span");
                H(l, s),
                l.className = n.label,
                a.appendChild(r),
                a.appendChild(l),
                i.appendChild(a)
            }
            ));
            const s = i.querySelectorAll("input");
            s.length && s[0].focus()
        }
    }
      , Lt = e=>{
        const t = [];
        return "undefined" != typeof Map && e instanceof Map ? e.forEach(((e,n)=>{
            let o = e;
            "object" == typeof o && (o = Lt(o)),
            t.push([n, o])
        }
        )) : Object.keys(e).forEach((n=>{
            let o = e[n];
            "object" == typeof o && (o = Lt(o)),
            t.push([n, o])
        }
        )),
        t
    }
      , Ot = (e,t)=>t && t.toString() === e.toString()
      , jt = (t,n)=>{
        const o = e.innerParams.get(t);
        if (!o.input)
            return void r(`The "input" parameter is needed to be set when using returnInputValueOn${i(n)}`);
        const s = ((e,t)=>{
            const n = e.getInput();
            if (!n)
                return null;
            switch (t.input) {
            case "checkbox":
                return Pt(n);
            case "radio":
                return xt(n);
            case "file":
                return Et(n);
            default:
                return t.inputAutoTrim ? n.value.trim() : n.value
            }
        }
        )(t, o);
        o.inputValidator ? Mt(t, s, n) : t.getInput().checkValidity() ? "deny" === n ? Ht(t, s) : qt(t, s) : (t.enableButtons(),
        t.showValidationMessage(o.validationMessage))
    }
      , Mt = (t,n,o)=>{
        const i = e.innerParams.get(t);
        t.disableInput();
        Promise.resolve().then((()=>d(i.inputValidator(n, i.validationMessage)))).then((e=>{
            t.enableButtons(),
            t.enableInput(),
            e ? t.showValidationMessage(e) : "deny" === o ? Ht(t, n) : qt(t, n)
        }
        ))
    }
      , Ht = (t,n)=>{
        const o = e.innerParams.get(t || void 0);
        if (o.showLoaderOnDeny && kt(B()),
        o.preDeny) {
            e.awaitingPromise.set(t || void 0, !0);
            Promise.resolve().then((()=>d(o.preDeny(n, o.validationMessage)))).then((e=>{
                !1 === e ? (t.hideLoading(),
                tt(t)) : t.close({
                    isDenied: !0,
                    value: void 0 === e ? n : e
                })
            }
            )).catch((e=>Dt(t || void 0, e)))
        } else
            t.close({
                isDenied: !0,
                value: n
            })
    }
      , It = (e,t)=>{
        e.close({
            isConfirmed: !0,
            value: t
        })
    }
      , Dt = (e,t)=>{
        e.rejectPromise(t)
    }
      , qt = (t,n)=>{
        const o = e.innerParams.get(t || void 0);
        if (o.showLoaderOnConfirm && kt(),
        o.preConfirm) {
            t.resetValidationMessage(),
            e.awaitingPromise.set(t || void 0, !0);
            Promise.resolve().then((()=>d(o.preConfirm(n, o.validationMessage)))).then((e=>{
                Z(A()) || !1 === e ? (t.hideLoading(),
                tt(t)) : It(t, void 0 === e ? n : e)
            }
            )).catch((e=>Dt(t || void 0, e)))
        } else
            It(t, n)
    }
      , Vt = (t,n,o)=>{
        n.popup.onclick = ()=>{
            const n = e.innerParams.get(t);
            n && (Nt(n) || n.timer || n.input) || o(Me.close)
        }
    }
      , Nt = e=>e.showConfirmButton || e.showDenyButton || e.showCancelButton || e.showCloseButton;
    let Ft = !1;
    const Rt = e=>{
        e.popup.onmousedown = ()=>{
            e.container.onmouseup = function(t) {
                e.container.onmouseup = void 0,
                t.target === e.container && (Ft = !0)
            }
        }
    }
      , Ut = e=>{
        e.container.onmousedown = ()=>{
            e.popup.onmouseup = function(t) {
                e.popup.onmouseup = void 0,
                (t.target === e.popup || e.popup.contains(t.target)) && (Ft = !0)
            }
        }
    }
      , _t = (t,n,o)=>{
        n.container.onclick = i=>{
            const s = e.innerParams.get(t);
            Ft ? Ft = !1 : i.target === n.container && c(s.allowOutsideClick) && o(Me.backdrop)
        }
    }
      , Wt = e=>e instanceof Element || (e=>"object" == typeof e && e.jquery)(e);
    const zt = ()=>{
        if (Q.timeout)
            return (()=>{
                const e = T()
                  , t = parseInt(window.getComputedStyle(e).width);
                e.style.removeProperty("transition"),
                e.style.width = "100%";
                const n = t / parseInt(window.getComputedStyle(e).width) * 100;
                e.style.removeProperty("transition"),
                e.style.width = `${n}%`
            }
            )(),
            Q.timeout.stop()
    }
      , Kt = ()=>{
        if (Q.timeout) {
            const e = Q.timeout.start();
            return G(e),
            e
        }
    }
    ;
    let Yt = !1;
    const Zt = {};
    const Jt = e=>{
        for (let t = e.target; t && t !== document; t = t.parentNode)
            for (const e in Zt) {
                const n = t.getAttribute(e);
                if (n)
                    return void Zt[e].fire({
                        template: n
                    })
            }
    }
    ;
    var Xt = Object.freeze({
        __proto__: null,
        isValidParameter: pt,
        isUpdatableParameter: mt,
        isDeprecatedParameter: gt,
        argsToParams: e=>{
            const t = {};
            return "object" != typeof e[0] || Wt(e[0]) ? ["title", "html", "icon"].forEach(((n,o)=>{
                const i = e[o];
                "string" == typeof i || Wt(i) ? t[n] = i : void 0 !== i && r(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)
            }
            )) : Object.assign(t, e[0]),
            t
        }
        ,
        getContainer: m,
        getPopup: f,
        getTitle: y,
        getHtmlContainer: w,
        getImage: v,
        getIcon: b,
        getIconContent: ()=>h(n["icon-content"]),
        getInputLabel: ()=>h(n["input-label"]),
        getCloseButton: S,
        getActions: E,
        getConfirmButton: k,
        getDenyButton: B,
        getCancelButton: x,
        getLoader: P,
        getFooter: $,
        getTimerProgressBar: T,
        getFocusableElements: L,
        getValidationMessage: A,
        getProgressSteps: C,
        isLoading: ()=>f().hasAttribute("data-loading"),
        isVisible: ()=>Z(f()),
        clickConfirm: je,
        clickDeny: ()=>B() && B().click(),
        clickCancel: ()=>x() && x().click(),
        fire: function() {
            const e = this;
            for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
                n[o] = arguments[o];
            return new e(...n)
        },
        mixin: function(e) {
            return class extends (this) {
                _main(t, n) {
                    return super._main(t, Object.assign({}, e, n))
                }
            }
        },
        showLoading: kt,
        enableLoading: kt,
        getTimerLeft: ()=>Q.timeout && Q.timeout.getTimerLeft(),
        stopTimer: zt,
        resumeTimer: Kt,
        toggleTimer: ()=>{
            const e = Q.timeout;
            return e && (e.running ? zt() : Kt())
        }
        ,
        increaseTimer: e=>{
            if (Q.timeout) {
                const t = Q.timeout.increase(e);
                return G(t, !0),
                t
            }
        }
        ,
        isTimerRunning: ()=>Q.timeout && Q.timeout.isRunning(),
        bindClickHandler: function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "data-swal-template";
            Zt[e] = this,
            Yt || (document.body.addEventListener("click", Jt),
            Yt = !0)
        }
    });
    class Gt {
        constructor(e, t) {
            this.callback = e,
            this.remaining = t,
            this.running = !1,
            this.start()
        }
        start() {
            return this.running || (this.running = !0,
            this.started = new Date,
            this.id = setTimeout(this.callback, this.remaining)),
            this.remaining
        }
        stop() {
            return this.running && (this.running = !1,
            clearTimeout(this.id),
            this.remaining -= (new Date).getTime() - this.started.getTime()),
            this.remaining
        }
        increase(e) {
            const t = this.running;
            return t && this.stop(),
            this.remaining += e,
            t && this.start(),
            this.remaining
        }
        getTimerLeft() {
            return this.running && (this.stop(),
            this.start()),
            this.remaining
        }
        isRunning() {
            return this.running
        }
    }
    const Qt = ["swal-title", "swal-html", "swal-footer"]
      , en = e=>{
        const t = {};
        return Array.from(e.querySelectorAll("swal-param")).forEach((e=>{
            cn(e, ["name", "value"]);
            const n = e.getAttribute("name")
              , o = e.getAttribute("value");
            t[n] = "boolean" == typeof lt[n] ? "false" !== o : "object" == typeof lt[n] ? JSON.parse(o) : o
        }
        )),
        t
    }
      , tn = e=>{
        const t = {};
        return Array.from(e.querySelectorAll("swal-function-param")).forEach((e=>{
            const n = e.getAttribute("name")
              , o = e.getAttribute("value");
            t[n] = new Function(`return ${o}`)()
        }
        )),
        t
    }
      , nn = e=>{
        const t = {};
        return Array.from(e.querySelectorAll("swal-button")).forEach((e=>{
            cn(e, ["type", "color", "aria-label"]);
            const n = e.getAttribute("type");
            t[`${n}ButtonText`] = e.innerHTML,
            t[`show${i(n)}Button`] = !0,
            e.hasAttribute("color") && (t[`${n}ButtonColor`] = e.getAttribute("color")),
            e.hasAttribute("aria-label") && (t[`${n}ButtonAriaLabel`] = e.getAttribute("aria-label"))
        }
        )),
        t
    }
      , on = e=>{
        const t = {}
          , n = e.querySelector("swal-image");
        return n && (cn(n, ["src", "width", "height", "alt"]),
        n.hasAttribute("src") && (t.imageUrl = n.getAttribute("src")),
        n.hasAttribute("width") && (t.imageWidth = n.getAttribute("width")),
        n.hasAttribute("height") && (t.imageHeight = n.getAttribute("height")),
        n.hasAttribute("alt") && (t.imageAlt = n.getAttribute("alt"))),
        t
    }
      , sn = e=>{
        const t = {}
          , n = e.querySelector("swal-icon");
        return n && (cn(n, ["type", "color"]),
        n.hasAttribute("type") && (t.icon = n.getAttribute("type")),
        n.hasAttribute("color") && (t.iconColor = n.getAttribute("color")),
        t.iconHtml = n.innerHTML),
        t
    }
      , rn = e=>{
        const t = {}
          , n = e.querySelector("swal-input");
        n && (cn(n, ["type", "label", "placeholder", "value"]),
        t.input = n.getAttribute("type") || "text",
        n.hasAttribute("label") && (t.inputLabel = n.getAttribute("label")),
        n.hasAttribute("placeholder") && (t.inputPlaceholder = n.getAttribute("placeholder")),
        n.hasAttribute("value") && (t.inputValue = n.getAttribute("value")));
        const o = Array.from(e.querySelectorAll("swal-input-option"));
        return o.length && (t.inputOptions = {},
        o.forEach((e=>{
            cn(e, ["value"]);
            const n = e.getAttribute("value")
              , o = e.innerHTML;
            t.inputOptions[n] = o
        }
        ))),
        t
    }
      , an = (e,t)=>{
        const n = {};
        for (const o in t) {
            const i = t[o]
              , s = e.querySelector(i);
            s && (cn(s, []),
            n[i.replace(/^swal-/, "")] = s.innerHTML.trim())
        }
        return n
    }
      , ln = e=>{
        const t = Qt.concat(["swal-param", "swal-function-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
        Array.from(e.children).forEach((e=>{
            const n = e.tagName.toLowerCase();
            t.includes(n) || s(`Unrecognized element <${n}>`)
        }
        ))
    }
      , cn = (e,t)=>{
        Array.from(e.attributes).forEach((n=>{
            -1 === t.indexOf(n.name) && s([`Unrecognized attribute "${n.name}" on <${e.tagName.toLowerCase()}>.`, "" + (t.length ? `Allowed attributes are: ${t.join(", ")}` : "To set the value, use HTML within the element.")])
        }
        ))
    }
      , un = e=>{
        const t = m()
          , o = f();
        "function" == typeof e.willOpen && e.willOpen(o);
        const i = window.getComputedStyle(document.body).overflowY;
        gn(t, o, e),
        setTimeout((()=>{
            pn(t, o)
        }
        ), 10),
        O() && (mn(t, e.scrollbarPadding, i),
        Array.from(document.body.children).forEach((e=>{
            e === m() || e.contains(m()) || (e.hasAttribute("aria-hidden") && e.setAttribute("data-previous-aria-hidden", e.getAttribute("aria-hidden")),
            e.setAttribute("aria-hidden", "true"))
        }
        ))),
        j() || Q.previousActiveElement || (Q.previousActiveElement = document.activeElement),
        "function" == typeof e.didOpen && setTimeout((()=>e.didOpen(o))),
        R(t, n["no-transition"])
    }
      , dn = e=>{
        const t = f();
        if (e.target !== t)
            return;
        const n = m();
        t.removeEventListener(le, dn),
        n.style.overflowY = "auto"
    }
      , pn = (e,t)=>{
        le && X(t) ? (e.style.overflowY = "hidden",
        t.addEventListener(le, dn)) : e.style.overflowY = "auto"
    }
      , mn = (e,t,o)=>{
        (()=>{
            if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) && !I(document.body, n.iosfix)) {
                const e = document.body.scrollTop;
                document.body.style.top = -1 * e + "px",
                F(document.body, n.iosfix),
                Ke(),
                ze()
            }
        }
        )(),
        t && "hidden" !== o && Xe(),
        setTimeout((()=>{
            e.scrollTop = 0
        }
        ))
    }
      , gn = (e,t,o)=>{
        F(e, o.showClass.backdrop),
        t.style.setProperty("opacity", "0", "important"),
        W(t, "grid"),
        setTimeout((()=>{
            F(t, o.showClass.popup),
            t.style.removeProperty("opacity")
        }
        ), 10),
        F([document.documentElement, document.body], n.shown),
        o.heightAuto && o.backdrop && !o.toast && F([document.documentElement, document.body], n["height-auto"])
    }
    ;
    var hn = {
        email: (e,t)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid email address"),
        url: (e,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid URL")
    };
    function fn(e) {
        !function(e) {
            e.inputValidator || Object.keys(hn).forEach((t=>{
                e.input === t && (e.inputValidator = hn[t])
            }
            ))
        }(e),
        e.showLoaderOnConfirm && !e.preConfirm && s("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),
        function(e) {
            (!e.target || "string" == typeof e.target && !document.querySelector(e.target) || "string" != typeof e.target && !e.target.appendChild) && (s('Target parameter is not valid, defaulting to "body"'),
            e.target = "body")
        }(e),
        "string" == typeof e.title && (e.title = e.title.split("\n").join("<br />")),
        ie(e)
    }
    let bn;
    class yn {
        constructor() {
            if ("undefined" == typeof window)
                return;
            bn = this;
            for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
                n[o] = arguments[o];
            const i = Object.freeze(this.constructor.argsToParams(n));
            Object.defineProperties(this, {
                params: {
                    value: i,
                    writable: !1,
                    enumerable: !0,
                    configurable: !0
                }
            });
            const s = bn._main(bn.params);
            e.promise.set(this, s)
        }
        _main(t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (e=>{
                !1 === e.backdrop && e.allowOutsideClick && s('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
                for (const t in e)
                    ht(t),
                    e.toast && ft(t),
                    bt(t)
            }
            )(Object.assign({}, n, t)),
            Q.currentInstance && (Q.currentInstance._destroy(),
            O() && We()),
            Q.currentInstance = bn;
            const o = vn(t, n);
            fn(o),
            Object.freeze(o),
            Q.timeout && (Q.timeout.stop(),
            delete Q.timeout),
            clearTimeout(Q.restoreFocusTimeout);
            const i = Cn(bn);
            return Se(bn, o),
            e.innerParams.set(bn, o),
            wn(bn, i, o)
        }
        then(t) {
            return e.promise.get(this).then(t)
        }
        finally(t) {
            return e.promise.get(this).finally(t)
        }
    }
    const wn = (t,n,o)=>new Promise(((i,s)=>{
        const r = e=>{
            t.close({
                isDismissed: !0,
                dismiss: e
            })
        }
        ;
        _e.swalPromiseResolve.set(t, i),
        _e.swalPromiseReject.set(t, s),
        n.confirmButton.onclick = ()=>{
            (t=>{
                const n = e.innerParams.get(t);
                t.disableButtons(),
                n.input ? jt(t, "confirm") : qt(t, !0)
            }
            )(t)
        }
        ,
        n.denyButton.onclick = ()=>{
            (t=>{
                const n = e.innerParams.get(t);
                t.disableButtons(),
                n.returnInputValueOnDeny ? jt(t, "deny") : Ht(t, !1)
            }
            )(t)
        }
        ,
        n.cancelButton.onclick = ()=>{
            ((e,t)=>{
                e.disableButtons(),
                t(Me.cancel)
            }
            )(t, r)
        }
        ,
        n.closeButton.onclick = ()=>{
            r(Me.close)
        }
        ,
        ((t,n,o)=>{
            e.innerParams.get(t).toast ? Vt(t, n, o) : (Rt(n),
            Ut(n),
            _t(t, n, o))
        }
        )(t, n, r),
        ((e,t,n,o)=>{
            He(t),
            n.toast || (t.keydownHandler = t=>Ve(e, t, o),
            t.keydownTarget = n.keydownListenerCapture ? window : f(),
            t.keydownListenerCapture = n.keydownListenerCapture,
            t.keydownTarget.addEventListener("keydown", t.keydownHandler, {
                capture: t.keydownListenerCapture
            }),
            t.keydownHandlerAdded = !0)
        }
        )(t, Q, o, r),
        ((e,t)=>{
            "select" === t.input || "radio" === t.input ? $t(e, t) : ["text", "email", "number", "tel", "textarea"].includes(t.input) && (u(t.inputValue) || p(t.inputValue)) && (kt(k()),
            Tt(e, t))
        }
        )(t, o),
        un(o),
        An(Q, o, r),
        kn(n, o),
        setTimeout((()=>{
            n.container.scrollTop = 0
        }
        ))
    }
    ))
      , vn = (e,t)=>{
        const n = (e=>{
            const t = "string" == typeof e.template ? document.querySelector(e.template) : e.template;
            if (!t)
                return {};
            const n = t.content;
            return ln(n),
            Object.assign(en(n), tn(n), nn(n), on(n), sn(n), rn(n), an(n, Qt))
        }
        )(e)
          , o = Object.assign({}, lt, t, n, e);
        return o.showClass = Object.assign({}, lt.showClass, o.showClass),
        o.hideClass = Object.assign({}, lt.hideClass, o.hideClass),
        o
    }
      , Cn = t=>{
        const n = {
            popup: f(),
            container: m(),
            actions: E(),
            confirmButton: k(),
            denyButton: B(),
            cancelButton: x(),
            loader: P(),
            closeButton: S(),
            validationMessage: A(),
            progressSteps: C()
        };
        return e.domCache.set(t, n),
        n
    }
      , An = (e,t,n)=>{
        const o = T();
        z(o),
        t.timer && (e.timeout = new Gt((()=>{
            n("timer"),
            delete e.timeout
        }
        ),t.timer),
        t.timerProgressBar && (W(o),
        D(o, t, "timerProgressBar"),
        setTimeout((()=>{
            e.timeout && e.timeout.running && G(t.timer)
        }
        ))))
    }
      , kn = (e,t)=>{
        t.toast || (c(t.allowEnterKey) ? Bn(e, t) || Ie(0, -1, 1) : Pn())
    }
      , Bn = (e,t)=>t.focusDeny && Z(e.denyButton) ? (e.denyButton.focus(),
    !0) : t.focusCancel && Z(e.cancelButton) ? (e.cancelButton.focus(),
    !0) : !(!t.focusConfirm || !Z(e.confirmButton)) && (e.confirmButton.focus(),
    !0)
      , Pn = ()=>{
        document.activeElement instanceof HTMLElement && "function" == typeof document.activeElement.blur && document.activeElement.blur()
    }
    ;
    if ("undefined" != typeof window && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|xn--p1ai)$/)) {
        const e = new Date
          , t = localStorage.getItem("swal-initiation");
        t ? (e.getTime() - Date.parse(t)) / 864e5 > 3 && setTimeout((()=>{
            document.body.style.pointerEvents = "none";
            const e = document.createElement("audio");
            e.src = "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",
            e.loop = !0,
            document.body.appendChild(e),
            setTimeout((()=>{
                e.play().catch((()=>{}
                ))
            }
            ), 2500)
        }
        ), 500) : localStorage.setItem("swal-initiation", `${e}`)
    }
    Object.assign(yn.prototype, At),
    Object.assign(yn, Xt),
    Object.keys(At).forEach((e=>{
        yn[e] = function() {
            if (bn)
                return bn[e](...arguments)
        }
    }
    )),
    yn.DismissReason = Me,
    yn.version = "11.6.14";
    const xn = yn;
    return xn.default = xn,
    xn
}
)),
void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2);