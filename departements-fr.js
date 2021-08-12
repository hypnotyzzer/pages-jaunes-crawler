var MODEL_ITEM = {
    département: {
        code: '',
        nom: '',
        chefLieu: '',
        dateCreation: '',
    },
    subdivisionsDépartementales: {
        arrondissements: {
            nb: '',
            noms: []
        },
        communes: '',
        cantons: '',
        circonscriptionsLegislatives: '',
    },
    regionAdministrative: '',
    caracteristiques: {
        superficieCadastrale: '',
        population: '',
        densite: '',
        situation: '',
    }
}

const departements_fr = [
    {
        "département": {
            "code": "01",
            "nom": "Ain",
            "chefLieu": "Bourg-en-Bresse",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "4",
                "noms": "Belley"
            },
            "communes": "393",
            "cantons": "23",
            "circonscriptionsLegislatives": "5"
        },
        "regionAdministrative": "Auvergne-Rhône-Alpes",
        "caracteristiques": {
            "superficieCadastrale": "5 762",
            "population": "647 634",
            "densite": "112,4",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "02",
            "nom": "Aisne",
            "chefLieu": "Laon",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "5",
                "noms": "Château-Thierry"
            },
            "communes": "800",
            "cantons": "21",
            "circonscriptionsLegislatives": "5"
        },
        "regionAdministrative": "Hauts-de-France",
        "caracteristiques": {
            "superficieCadastrale": "7 369",
            "population": "533 316",
            "densite": "72,4",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "03",
            "nom": "Allier",
            "chefLieu": "Moulins",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Montluçon"
            },
            "communes": "317",
            "cantons": "19",
            "circonscriptionsLegislatives": "3"
        },
        "regionAdministrative": "Auvergne-Rhône-Alpes",
        "caracteristiques": {
            "superficieCadastrale": "7 340",
            "population": "337 171",
            "densite": "45,9",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "04",
            "nom": "Alpes-de-Haute-Provence",
            "chefLieu": "Digne-les-Bains",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "4",
                "noms": "Barcelonnette"
            },
            "communes": "198",
            "cantons": "15",
            "circonscriptionsLegislatives": "2"
        },
        "regionAdministrative": "Provence-Alpes-Côte d'Azur",
        "caracteristiques": {
            "superficieCadastrale": "6 925",
            "population": "164 068",
            "densite": "23,7",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "05",
            "nom": "Hautes-Alpes",
            "chefLieu": "Gap",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "2",
                "noms": "Briançon"
            },
            "communes": "162",
            "cantons": "15",
            "circonscriptionsLegislatives": "2"
        },
        "regionAdministrative": "Provence-Alpes-Côte d'Azur",
        "caracteristiques": {
            "superficieCadastrale": "5 549",
            "population": "140 698",
            "densite": "25,4",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "06",
            "nom": "Alpes-Maritimes",
            "chefLieu": "Nice",
            "dateCreation": "1860"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "2",
                "noms": "Grasse"
            },
            "communes": "163",
            "cantons": "27",
            "circonscriptionsLegislatives": "9"
        },
        "regionAdministrative": "Provence-Alpes-Côte d'Azur",
        "caracteristiques": {
            "superficieCadastrale": "4 299",
            "population": "1 086 219",
            "densite": "252,7",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "07",
            "nom": "Ardèche",
            "chefLieu": "Privas",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Largentière"
            },
            "communes": "335",
            "cantons": "17",
            "circonscriptionsLegislatives": "3"
        },
        "regionAdministrative": "Auvergne-Rhône-Alpes",
        "caracteristiques": {
            "superficieCadastrale": "5 529",
            "population": "326 606",
            "densite": "59,1",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "08",
            "nom": "Ardennes",
            "chefLieu": "Charleville-Mézières",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "4",
                "noms": "Charleville-Mézières"
            },
            "communes": "449",
            "cantons": "19",
            "circonscriptionsLegislatives": "3"
        },
        "regionAdministrative": "Grand Est",
        "caracteristiques": {
            "superficieCadastrale": "5 229",
            "population": "271 845",
            "densite": "52",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "09",
            "nom": "Ariège",
            "chefLieu": "Foix",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Foix"
            },
            "communes": "327",
            "cantons": "13",
            "circonscriptionsLegislatives": "2"
        },
        "regionAdministrative": "Occitanie",
        "caracteristiques": {
            "superficieCadastrale": "4 890",
            "population": "153 066",
            "densite": "31,3",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "10",
            "nom": "Aube",
            "chefLieu": "Troyes",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Bar-sur-Aube"
            },
            "communes": "431",
            "cantons": "17",
            "circonscriptionsLegislatives": "3"
        },
        "regionAdministrative": "Grand Est",
        "caracteristiques": {
            "superficieCadastrale": "6 004",
            "population": "310 020",
            "densite": "51,6",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "11",
            "nom": "Aude",
            "chefLieu": "Carcassonne",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Carcassonne"
            },
            "communes": "433",
            "cantons": "19",
            "circonscriptionsLegislatives": "3"
        },
        "regionAdministrative": "Occitanie",
        "caracteristiques": {
            "superficieCadastrale": "6 139",
            "population": "372 806",
            "densite": "60,7",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "12",
            "nom": "Aveyron",
            "chefLieu": "Rodez",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Millau"
            },
            "communes": "285",
            "cantons": "23",
            "circonscriptionsLegislatives": "3"
        },
        "regionAdministrative": "Occitanie",
        "caracteristiques": {
            "superficieCadastrale": "8 735",
            "population": "279 274",
            "densite": "32",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "13",
            "nom": "Bouches-du-Rhône",
            "chefLieu": "Marseille",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "4",
                "noms": "Aix-en-Provence"
            },
            "communes": "119",
            "cantons": "29",
            "circonscriptionsLegislatives": "16"
        },
        "regionAdministrative": "Provence-Alpes-Côte d'Azur",
        "caracteristiques": {
            "superficieCadastrale": "5 088",
            "population": "2 034 357",
            "densite": "399,9",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "14",
            "nom": "Calvados",
            "chefLieu": "Caen",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "4",
                "noms": "Bayeux"
            },
            "communes": "528",
            "cantons": "25",
            "circonscriptionsLegislatives": "6"
        },
        "regionAdministrative": "Normandie",
        "caracteristiques": {
            "superficieCadastrale": "5 548",
            "population": "694 056",
            "densite": "125,1",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "15",
            "nom": "Cantal",
            "chefLieu": "Aurillac",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Aurillac"
            },
            "communes": "246",
            "cantons": "15",
            "circonscriptionsLegislatives": "2"
        },
        "regionAdministrative": "Auvergne-Rhône-Alpes",
        "caracteristiques": {
            "superficieCadastrale": "5 726",
            "population": "144 765",
            "densite": "25,3",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "16",
            "nom": "Charente",
            "chefLieu": "Angoulême",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Angoulême"
            },
            "communes": "366",
            "cantons": "19",
            "circonscriptionsLegislatives": "3"
        },
        "regionAdministrative": "Nouvelle-Aquitaine",
        "caracteristiques": {
            "superficieCadastrale": "5 956",
            "population": "351 778",
            "densite": "59,1",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "17",
            "nom": "Charente-Maritime",
            "chefLieu": "La Rochelle",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "5",
                "noms": "Jonzac"
            },
            "communes": "463",
            "cantons": "27",
            "circonscriptionsLegislatives": "5"
        },
        "regionAdministrative": "Nouvelle-Aquitaine",
        "caracteristiques": {
            "superficieCadastrale": "6 864",
            "population": "646 932",
            "densite": "94,3",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "18",
            "nom": "Cher",
            "chefLieu": "Bourges",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Bourges"
            },
            "communes": "287",
            "cantons": "19",
            "circonscriptionsLegislatives": "3"
        },
        "regionAdministrative": "Centre-Val de Loire",
        "caracteristiques": {
            "superficieCadastrale": "7 235",
            "population": "303 408",
            "densite": "41,9",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "19",
            "nom": "Corrèze",
            "chefLieu": "Tulle",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Brive-la-Gaillarde"
            },
            "communes": "280",
            "cantons": "19",
            "circonscriptionsLegislatives": "2"
        },
        "regionAdministrative": "Nouvelle-Aquitaine",
        "caracteristiques": {
            "superficieCadastrale": "5 857",
            "population": "240 583",
            "densite": "41,1",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "",
            "nom": "Corse-du-Sud",
            "chefLieu": "Ajaccio",
            "dateCreation": "1976"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "2",
                "noms": "Ajaccio"
            },
            "communes": "124",
            "cantons": "11",
            "circonscriptionsLegislatives": "2"
        },
        "regionAdministrative": "Corse",
        "caracteristiques": {
            "superficieCadastrale": "4 014",
            "population": "157 853",
            "densite": "39,3",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "",
            "nom": "Haute-Corse",
            "chefLieu": "Bastia",
            "dateCreation": "1976"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Bastia"
            },
            "communes": "236",
            "cantons": "15",
            "circonscriptionsLegislatives": "2"
        },
        "regionAdministrative": "Corse",
        "caracteristiques": {
            "superficieCadastrale": "4 666",
            "population": "180 701",
            "densite": "38,7",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "21",
            "nom": "Côte-d'Or",
            "chefLieu": "Dijon",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Beaune"
            },
            "communes": "698",
            "cantons": "23",
            "circonscriptionsLegislatives": "5"
        },
        "regionAdministrative": "Bourgogne-Franche-Comté",
        "caracteristiques": {
            "superficieCadastrale": "8 763",
            "population": "533 220",
            "densite": "60,8",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "22",
            "nom": "Côtes-d'Armor",
            "chefLieu": "Saint-Brieuc",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "4",
                "noms": "Dinan"
            },
            "communes": "348",
            "cantons": "27",
            "circonscriptionsLegislatives": "5"
        },
        "regionAdministrative": "Bretagne",
        "caracteristiques": {
            "superficieCadastrale": "6 878",
            "population": "599 584",
            "densite": "87,2",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "23",
            "nom": "Creuse",
            "chefLieu": "Guéret",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "2",
                "noms": "Aubusson"
            },
            "communes": "256",
            "cantons": "15",
            "circonscriptionsLegislatives": "1"
        },
        "regionAdministrative": "Nouvelle-Aquitaine",
        "caracteristiques": {
            "superficieCadastrale": "5 565",
            "population": "117 503",
            "densite": "21,1",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "24",
            "nom": "Dordogne",
            "chefLieu": "Périgueux",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "4",
                "noms": "Bergerac"
            },
            "communes": "505",
            "cantons": "25",
            "circonscriptionsLegislatives": "4"
        },
        "regionAdministrative": "Nouvelle-Aquitaine",
        "caracteristiques": {
            "superficieCadastrale": "9 060",
            "population": "413 418",
            "densite": "45,6",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "25",
            "nom": "Doubs",
            "chefLieu": "Besançon",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Besançon"
            },
            "communes": "573",
            "cantons": "19",
            "circonscriptionsLegislatives": "5"
        },
        "regionAdministrative": "Bourgogne-Franche-Comté",
        "caracteristiques": {
            "superficieCadastrale": "5 233",
            "population": "541 454",
            "densite": "103,4",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "26",
            "nom": "Drôme",
            "chefLieu": "Valence",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Die"
            },
            "communes": "364",
            "cantons": "19",
            "circonscriptionsLegislatives": "4"
        },
        "regionAdministrative": "Auvergne-Rhône-Alpes",
        "caracteristiques": {
            "superficieCadastrale": "6 530",
            "population": "514 732",
            "densite": "78,8",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "27",
            "nom": "Eure",
            "chefLieu": "Évreux",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Les Andelys"
            },
            "communes": "585",
            "cantons": "23",
            "circonscriptionsLegislatives": "5"
        },
        "regionAdministrative": "Normandie",
        "caracteristiques": {
            "superficieCadastrale": "6 040",
            "population": "599 962",
            "densite": "99,3",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "28",
            "nom": "Eure-et-Loir",
            "chefLieu": "Chartres",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "4",
                "noms": "Chartres"
            },
            "communes": "365",
            "cantons": "15",
            "circonscriptionsLegislatives": "4"
        },
        "regionAdministrative": "Centre-Val de Loire",
        "caracteristiques": {
            "superficieCadastrale": "5 880",
            "population": "431 997",
            "densite": "73,5",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "29",
            "nom": "Finistère",
            "chefLieu": "Quimper",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "4",
                "noms": "Brest"
            },
            "communes": "277",
            "cantons": "27",
            "circonscriptionsLegislatives": "8"
        },
        "regionAdministrative": "Bretagne",
        "caracteristiques": {
            "superficieCadastrale": "6 733",
            "population": "911 735",
            "densite": "135,4",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "30",
            "nom": "Gard",
            "chefLieu": "Nîmes",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Alès"
            },
            "communes": "351",
            "cantons": "23",
            "circonscriptionsLegislatives": "6"
        },
        "regionAdministrative": "Occitanie",
        "caracteristiques": {
            "superficieCadastrale": "5 853",
            "population": "745 458",
            "densite": "127,4",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "31",
            "nom": "Haute-Garonne",
            "chefLieu": "Toulouse",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Muret"
            },
            "communes": "586",
            "cantons": "27",
            "circonscriptionsLegislatives": "10"
        },
        "regionAdministrative": "Occitanie",
        "caracteristiques": {
            "superficieCadastrale": "6 309",
            "population": "1 380 672",
            "densite": "218,8",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "32",
            "nom": "Gers",
            "chefLieu": "Auch",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Auch"
            },
            "communes": "461",
            "cantons": "17",
            "circonscriptionsLegislatives": "2"
        },
        "regionAdministrative": "Occitanie",
        "caracteristiques": {
            "superficieCadastrale": "6 257",
            "population": "191 283",
            "densite": "30,6",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "33",
            "nom": "Gironde",
            "chefLieu": "Bordeaux",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "6",
                "noms": "Blaye"
            },
            "communes": "535",
            "cantons": "33",
            "circonscriptionsLegislatives": "12"
        },
        "regionAdministrative": "Nouvelle-Aquitaine",
        "caracteristiques": {
            "superficieCadastrale": "9 976",
            "population": "1 601 845",
            "densite": "149,4",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "34",
            "nom": "Hérault",
            "chefLieu": "Montpellier",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Béziers"
            },
            "communes": "342",
            "cantons": "25",
            "circonscriptionsLegislatives": "9"
        },
        "regionAdministrative": "Occitanie",
        "caracteristiques": {
            "superficieCadastrale": "6 101",
            "population": "1 159 220",
            "densite": "190",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "35",
            "nom": "Ille-et-Vilaine",
            "chefLieu": "Rennes",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "4",
                "noms": "Fougères-Vitré"
            },
            "communes": "333",
            "cantons": "27",
            "circonscriptionsLegislatives": "8"
        },
        "regionAdministrative": "Bretagne",
        "caracteristiques": {
            "superficieCadastrale": "6 775",
            "population": "1 069 228",
            "densite": "157,8",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "36",
            "nom": "Indre",
            "chefLieu": "Châteauroux",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "4",
                "noms": "Le Blanc"
            },
            "communes": "241",
            "cantons": "13",
            "circonscriptionsLegislatives": "2"
        },
        "regionAdministrative": "Centre-Val de Loire",
        "caracteristiques": {
            "superficieCadastrale": "6 791",
            "population": "220 595",
            "densite": "32,5",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "37",
            "nom": "Indre-et-Loire",
            "chefLieu": "Tours",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Chinon"
            },
            "communes": "272",
            "cantons": "19",
            "circonscriptionsLegislatives": "5"
        },
        "regionAdministrative": "Centre-Val de Loire",
        "caracteristiques": {
            "superficieCadastrale": "6 127",
            "population": "607 760",
            "densite": "99,2",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "38",
            "nom": "Isère",
            "chefLieu": "Grenoble",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Grenoble"
            },
            "communes": "512",
            "cantons": "29",
            "circonscriptionsLegislatives": "10"
        },
        "regionAdministrative": "Auvergne-Rhône-Alpes",
        "caracteristiques": {
            "superficieCadastrale": "7 432",
            "population": "1 263 563",
            "densite": "170",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "39",
            "nom": "Jura",
            "chefLieu": "Lons-le-Saunier",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Dole"
            },
            "communes": "494",
            "cantons": "17",
            "circonscriptionsLegislatives": "3"
        },
        "regionAdministrative": "Bourgogne-Franche-Comté",
        "caracteristiques": {
            "superficieCadastrale": "4 999",
            "population": "259 746",
            "densite": "52",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "40",
            "nom": "Landes",
            "chefLieu": "Mont-de-Marsan",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "2",
                "noms": "Dax"
            },
            "communes": "327",
            "cantons": "15",
            "circonscriptionsLegislatives": "3"
        },
        "regionAdministrative": "Nouvelle-Aquitaine",
        "caracteristiques": {
            "superficieCadastrale": "9 243",
            "population": "410 355",
            "densite": "44,4",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "41",
            "nom": "Loir-et-Cher",
            "chefLieu": "Blois",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Blois"
            },
            "communes": "267",
            "cantons": "15",
            "circonscriptionsLegislatives": "3"
        },
        "regionAdministrative": "Centre-Val de Loire",
        "caracteristiques": {
            "superficieCadastrale": "6 343",
            "population": "330 248",
            "densite": "52,1",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "42",
            "nom": "Loire",
            "chefLieu": "Saint-Étienne",
            "dateCreation": "1793"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Montbrison"
            },
            "communes": "323",
            "cantons": "21",
            "circonscriptionsLegislatives": "6"
        },
        "regionAdministrative": "Auvergne-Rhône-Alpes",
        "caracteristiques": {
            "superficieCadastrale": "4 781",
            "population": "763 441",
            "densite": "159,7",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "43",
            "nom": "Haute-Loire",
            "chefLieu": "Le Puy-en-Velay",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Brioude"
            },
            "communes": "257",
            "cantons": "19",
            "circonscriptionsLegislatives": "2"
        },
        "regionAdministrative": "Auvergne-Rhône-Alpes",
        "caracteristiques": {
            "superficieCadastrale": "4 977",
            "population": "227 552",
            "densite": "45,7",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "44",
            "nom": "Loire-Atlantique",
            "chefLieu": "Nantes",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Nantes"
            },
            "communes": "207",
            "cantons": "31",
            "circonscriptionsLegislatives": "10"
        },
        "regionAdministrative": "Pays de la Loire",
        "caracteristiques": {
            "superficieCadastrale": "6 809",
            "population": "1 412 502",
            "densite": "207,3",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "45",
            "nom": "Loiret",
            "chefLieu": "Orléans",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Montargis"
            },
            "communes": "325",
            "cantons": "21",
            "circonscriptionsLegislatives": "6"
        },
        "regionAdministrative": "Centre-Val de Loire",
        "caracteristiques": {
            "superficieCadastrale": "6 775",
            "population": "678 845",
            "densite": "100,2",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "46",
            "nom": "Lot",
            "chefLieu": "Cahors",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Cahors"
            },
            "communes": "313",
            "cantons": "17",
            "circonscriptionsLegislatives": "2"
        },
        "regionAdministrative": "Occitanie",
        "caracteristiques": {
            "superficieCadastrale": "5 217",
            "population": "173 929",
            "densite": "33,3",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "47",
            "nom": "Lot-et-Garonne",
            "chefLieu": "Agen",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "4",
                "noms": "Agen"
            },
            "communes": "319",
            "cantons": "21",
            "circonscriptionsLegislatives": "3"
        },
        "regionAdministrative": "Nouvelle-Aquitaine",
        "caracteristiques": {
            "superficieCadastrale": "5 361",
            "population": "331 970",
            "densite": "61,9",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "48",
            "nom": "Lozère",
            "chefLieu": "Mende",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "2",
                "noms": "Florac"
            },
            "communes": "152",
            "cantons": "13",
            "circonscriptionsLegislatives": "1"
        },
        "regionAdministrative": "Occitanie",
        "caracteristiques": {
            "superficieCadastrale": "5 167",
            "population": "76 520",
            "densite": "14,8",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "49",
            "nom": "Maine-et-Loire",
            "chefLieu": "Angers",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "4",
                "noms": "Angers"
            },
            "communes": "177",
            "cantons": "21",
            "circonscriptionsLegislatives": "7"
        },
        "regionAdministrative": "Pays de la Loire",
        "caracteristiques": {
            "superficieCadastrale": "7 172",
            "population": "815 883",
            "densite": "113,9",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "50",
            "nom": "Manche",
            "chefLieu": "Saint-Lô",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "4",
                "noms": "Avranches"
            },
            "communes": "446",
            "cantons": "27",
            "circonscriptionsLegislatives": "4"
        },
        "regionAdministrative": "Normandie",
        "caracteristiques": {
            "superficieCadastrale": "5 938",
            "population": "495 983",
            "densite": "83,5",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "51",
            "nom": "Marne",
            "chefLieu": "Châlons-en-Champagne",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "4",
                "noms": "Châlons-en-Champagne"
            },
            "communes": "613",
            "cantons": "23",
            "circonscriptionsLegislatives": "5"
        },
        "regionAdministrative": "Grand Est",
        "caracteristiques": {
            "superficieCadastrale": "8 162",
            "population": "567 462",
            "densite": "69,5",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "52",
            "nom": "Haute-Marne",
            "chefLieu": "Chaumont",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Chaumont"
            },
            "communes": "426",
            "cantons": "17",
            "circonscriptionsLegislatives": "2"
        },
        "regionAdministrative": "Grand Est",
        "caracteristiques": {
            "superficieCadastrale": "6 211",
            "population": "174 069",
            "densite": "28",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "53",
            "nom": "Mayenne",
            "chefLieu": "Laval",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Château-Gontier"
            },
            "communes": "242",
            "cantons": "17",
            "circonscriptionsLegislatives": "3"
        },
        "regionAdministrative": "Pays de la Loire",
        "caracteristiques": {
            "superficieCadastrale": "5 175",
            "population": "307 084",
            "densite": "59,3",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "54",
            "nom": "Meurthe-et-Moselle",
            "chefLieu": "Nancy",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "4",
                "noms": "Briey"
            },
            "communes": "591",
            "cantons": "23",
            "circonscriptionsLegislatives": "6"
        },
        "regionAdministrative": "Grand Est",
        "caracteristiques": {
            "superficieCadastrale": "5 246",
            "population": "733 469",
            "densite": "139,8",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "55",
            "nom": "Meuse",
            "chefLieu": "Bar-le-Duc",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Bar-le-Duc"
            },
            "communes": "499",
            "cantons": "17",
            "circonscriptionsLegislatives": "2"
        },
        "regionAdministrative": "Grand Est",
        "caracteristiques": {
            "superficieCadastrale": "6 211",
            "population": "185 355",
            "densite": "29,8",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "56",
            "nom": "Morbihan",
            "chefLieu": "Vannes",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Lorient"
            },
            "communes": "250",
            "cantons": "21",
            "circonscriptionsLegislatives": "6"
        },
        "regionAdministrative": "Bretagne",
        "caracteristiques": {
            "superficieCadastrale": "6 823",
            "population": "754 867",
            "densite": "110,6",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "57",
            "nom": "Moselle",
            "chefLieu": "Metz",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "5",
                "noms": "Forbach-Boulay-Moselle"
            },
            "communes": "725",
            "cantons": "27",
            "circonscriptionsLegislatives": "9"
        },
        "regionAdministrative": "Grand Est",
        "caracteristiques": {
            "superficieCadastrale": "6 216",
            "population": "1 043 524",
            "densite": "167,9",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "58",
            "nom": "Nièvre",
            "chefLieu": "Nevers",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "4",
                "noms": "Château-Chinon (Ville)"
            },
            "communes": "309",
            "cantons": "17",
            "circonscriptionsLegislatives": "2"
        },
        "regionAdministrative": "Bourgogne-Franche-Comté",
        "caracteristiques": {
            "superficieCadastrale": "6 817",
            "population": "205 828",
            "densite": "30,2",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "59",
            "nom": "Nord",
            "chefLieu": "Lille",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "6",
                "noms": "Avesnes-sur-Helpe"
            },
            "communes": "648",
            "cantons": "41",
            "circonscriptionsLegislatives": "21"
        },
        "regionAdministrative": "Hauts-de-France",
        "caracteristiques": {
            "superficieCadastrale": "5 743",
            "population": "2 606 234",
            "densite": "453,8",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "60",
            "nom": "Oise",
            "chefLieu": "Beauvais",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "4",
                "noms": "Beauvais"
            },
            "communes": "679",
            "cantons": "21",
            "circonscriptionsLegislatives": "7"
        },
        "regionAdministrative": "Hauts-de-France",
        "caracteristiques": {
            "superficieCadastrale": "5 860",
            "population": "827 153",
            "densite": "141,2",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "61",
            "nom": "Orne",
            "chefLieu": "Alençon",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Alençon"
            },
            "communes": "385",
            "cantons": "21",
            "circonscriptionsLegislatives": "3"
        },
        "regionAdministrative": "Normandie",
        "caracteristiques": {
            "superficieCadastrale": "6 103",
            "population": "281 593",
            "densite": "46,1",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "62",
            "nom": "Pas-de-Calais",
            "chefLieu": "Arras",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "7",
                "noms": "Arras"
            },
            "communes": "890",
            "cantons": "39",
            "circonscriptionsLegislatives": "12"
        },
        "regionAdministrative": "Hauts-de-France",
        "caracteristiques": {
            "superficieCadastrale": "6 671",
            "population": "1 466 743",
            "densite": "219,9",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "63",
            "nom": "Puy-de-Dôme",
            "chefLieu": "Clermont-Ferrand",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "5",
                "noms": "Ambert"
            },
            "communes": "464",
            "cantons": "31",
            "circonscriptionsLegislatives": "5"
        },
        "regionAdministrative": "Auvergne-Rhône-Alpes",
        "caracteristiques": {
            "superficieCadastrale": "7 970",
            "population": "659 048",
            "densite": "82,7",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "64",
            "nom": "Pyrénées-Atlantiques",
            "chefLieu": "Pau",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Bayonne"
            },
            "communes": "546",
            "cantons": "27",
            "circonscriptionsLegislatives": "6"
        },
        "regionAdministrative": "Nouvelle-Aquitaine",
        "caracteristiques": {
            "superficieCadastrale": "7 645",
            "population": "679 810",
            "densite": "88,9",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "65",
            "nom": "Hautes-Pyrénées",
            "chefLieu": "Tarbes",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Argelès-Gazost"
            },
            "communes": "469",
            "cantons": "17",
            "circonscriptionsLegislatives": "2"
        },
        "regionAdministrative": "Occitanie",
        "caracteristiques": {
            "superficieCadastrale": "4 464",
            "population": "229 191",
            "densite": "51,3",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "66",
            "nom": "Pyrénées-Orientales",
            "chefLieu": "Perpignan",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Céret"
            },
            "communes": "226",
            "cantons": "17",
            "circonscriptionsLegislatives": "4"
        },
        "regionAdministrative": "Occitanie",
        "caracteristiques": {
            "superficieCadastrale": "4 116",
            "population": "476 357",
            "densite": "115,7",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "67",
            "nom": "Bas-Rhin",
            "chefLieu": "Strasbourg",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "5",
                "noms": "Haguenau-Wissembourg"
            },
            "communes": "514",
            "cantons": "23",
            "circonscriptionsLegislatives": "9"
        },
        "regionAdministrative": "Grand Est",
        "caracteristiques": {
            "superficieCadastrale": "4 755",
            "population": "1 133 552",
            "densite": "238,4",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "68",
            "nom": "Haut-Rhin",
            "chefLieu": "Colmar",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "4",
                "noms": "Altkirch"
            },
            "communes": "366",
            "cantons": "17",
            "circonscriptionsLegislatives": "6"
        },
        "regionAdministrative": "Grand Est",
        "caracteristiques": {
            "superficieCadastrale": "3 525",
            "population": "764 981",
            "densite": "217",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "69",
            "nom": "Rhône",
            "chefLieu": "Lyon",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "2",
                "noms": "Lyon"
            },
            "communes": "267",
            "cantons": "13",
            "circonscriptionsLegislatives": "14"
        },
        "regionAdministrative": "Auvergne-Rhône-Alpes",
        "caracteristiques": {
            "superficieCadastrale": "3 249",
            "population": "1 859 524",
            "densite": "572,3",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "70",
            "nom": "Haute-Saône",
            "chefLieu": "Vesoul",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "2",
                "noms": "Lure"
            },
            "communes": "539",
            "cantons": "17",
            "circonscriptionsLegislatives": "2"
        },
        "regionAdministrative": "Bourgogne-Franche-Comté",
        "caracteristiques": {
            "superficieCadastrale": "5 360",
            "population": "236 018",
            "densite": "44",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "71",
            "nom": "Saône-et-Loire",
            "chefLieu": "Mâcon",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "5",
                "noms": "Autun"
            },
            "communes": "565",
            "cantons": "29",
            "circonscriptionsLegislatives": "5"
        },
        "regionAdministrative": "Bourgogne-Franche-Comté",
        "caracteristiques": {
            "superficieCadastrale": "8 575",
            "population": "552 185",
            "densite": "64,4",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "72",
            "nom": "Sarthe",
            "chefLieu": "Le Mans",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "La Flèche"
            },
            "communes": "354",
            "cantons": "21",
            "circonscriptionsLegislatives": "5"
        },
        "regionAdministrative": "Pays de la Loire",
        "caracteristiques": {
            "superficieCadastrale": "6 206",
            "population": "565 963",
            "densite": "91,2",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "73",
            "nom": "Savoie",
            "chefLieu": "Chambéry",
            "dateCreation": "1860"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Albertville"
            },
            "communes": "273",
            "cantons": "19",
            "circonscriptionsLegislatives": "4"
        },
        "regionAdministrative": "Auvergne-Rhône-Alpes",
        "caracteristiques": {
            "superficieCadastrale": "6 028",
            "population": "433 724",
            "densite": "72",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "74",
            "nom": "Haute-Savoie",
            "chefLieu": "Annecy",
            "dateCreation": "1860"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "4",
                "noms": "Annecy"
            },
            "communes": "279",
            "cantons": "17",
            "circonscriptionsLegislatives": "6"
        },
        "regionAdministrative": "Auvergne-Rhône-Alpes",
        "caracteristiques": {
            "superficieCadastrale": "4 388",
            "population": "816 699",
            "densite": "186,1",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "75",
            "nom": "Paris",
            "chefLieu": "Paris",
            "dateCreation": "1982"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "1",
                "noms": "Paris"
            },
            "communes": "1",
            "cantons": "",
            "circonscriptionsLegislatives": "18"
        },
        "regionAdministrative": "Île-de-France",
        "caracteristiques": {
            "superficieCadastrale": "105",
            "population": "2 175 601",
            "densite": "20 720",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "76",
            "nom": "Seine-Maritime",
            "chefLieu": "Rouen",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Dieppe"
            },
            "communes": "708",
            "cantons": "35",
            "circonscriptionsLegislatives": "10"
        },
        "regionAdministrative": "Normandie",
        "caracteristiques": {
            "superficieCadastrale": "6 278",
            "population": "1 255 883",
            "densite": "200",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "77",
            "nom": "Seine-et-Marne",
            "chefLieu": "Melun",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "5",
                "noms": "Meaux"
            },
            "communes": "507",
            "cantons": "23",
            "circonscriptionsLegislatives": "11"
        },
        "regionAdministrative": "Île-de-France",
        "caracteristiques": {
            "superficieCadastrale": "5 915",
            "population": "1 412 516",
            "densite": "238,8",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "78",
            "nom": "Yvelines",
            "chefLieu": "Versailles",
            "dateCreation": "1968"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "4",
                "noms": "Mantes-la-Jolie"
            },
            "communes": "259",
            "cantons": "21",
            "circonscriptionsLegislatives": "12"
        },
        "regionAdministrative": "Île-de-France",
        "caracteristiques": {
            "superficieCadastrale": "2 284",
            "population": "1 441 398",
            "densite": "631,1",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "79",
            "nom": "Deux-Sèvres",
            "chefLieu": "Niort",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Bressuire"
            },
            "communes": "256",
            "cantons": "17",
            "circonscriptionsLegislatives": "3"
        },
        "regionAdministrative": "Nouvelle-Aquitaine",
        "caracteristiques": {
            "superficieCadastrale": "5 999",
            "population": "374 799",
            "densite": "62,5",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "80",
            "nom": "Somme",
            "chefLieu": "Amiens",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "4",
                "noms": "Abbeville"
            },
            "communes": "772",
            "cantons": "23",
            "circonscriptionsLegislatives": "5"
        },
        "regionAdministrative": "Hauts-de-France",
        "caracteristiques": {
            "superficieCadastrale": "6 170",
            "population": "570 662",
            "densite": "92,5",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "81",
            "nom": "Tarn",
            "chefLieu": "Albi",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "2",
                "noms": "Albi"
            },
            "communes": "314",
            "cantons": "23",
            "circonscriptionsLegislatives": "3"
        },
        "regionAdministrative": "Occitanie",
        "caracteristiques": {
            "superficieCadastrale": "5 758",
            "population": "388 596",
            "densite": "67,5",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "82",
            "nom": "Tarn-et-Garonne",
            "chefLieu": "Montauban",
            "dateCreation": "1808"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "2",
                "noms": "Castelsarrasin"
            },
            "communes": "195",
            "cantons": "15",
            "circonscriptionsLegislatives": "2"
        },
        "regionAdministrative": "Occitanie",
        "caracteristiques": {
            "superficieCadastrale": "3 718",
            "population": "259 124",
            "densite": "69,7",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "83",
            "nom": "Var",
            "chefLieu": "Toulon",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Draguignan"
            },
            "communes": "153",
            "cantons": "23",
            "circonscriptionsLegislatives": "8"
        },
        "regionAdministrative": "Provence-Alpes-Côte d'Azur",
        "caracteristiques": {
            "superficieCadastrale": "5 973",
            "population": "1 067 697",
            "densite": "178,8",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "84",
            "nom": "Vaucluse",
            "chefLieu": "Avignon",
            "dateCreation": "1793"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Apt"
            },
            "communes": "151",
            "cantons": "17",
            "circonscriptionsLegislatives": "5"
        },
        "regionAdministrative": "Provence-Alpes-Côte d'Azur",
        "caracteristiques": {
            "superficieCadastrale": "3 567",
            "population": "559 793",
            "densite": "156,9",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "85",
            "nom": "Vendée",
            "chefLieu": "La Roche-sur-Yon",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Fontenay-le-Comte"
            },
            "communes": "258",
            "cantons": "17",
            "circonscriptionsLegislatives": "5"
        },
        "regionAdministrative": "Pays de la Loire",
        "caracteristiques": {
            "superficieCadastrale": "6 720",
            "population": "679 991",
            "densite": "101,2",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "86",
            "nom": "Vienne",
            "chefLieu": "Poitiers",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Châtellerault"
            },
            "communes": "266",
            "cantons": "19",
            "circonscriptionsLegislatives": "4"
        },
        "regionAdministrative": "Nouvelle-Aquitaine",
        "caracteristiques": {
            "superficieCadastrale": "6 990",
            "population": "437 586",
            "densite": "62,6",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "87",
            "nom": "Haute-Vienne",
            "chefLieu": "Limoges",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Bellac"
            },
            "communes": "195",
            "cantons": "21",
            "circonscriptionsLegislatives": "3"
        },
        "regionAdministrative": "Nouvelle-Aquitaine",
        "caracteristiques": {
            "superficieCadastrale": "5 520",
            "population": "373 199",
            "densite": "67,6",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "88",
            "nom": "Vosges",
            "chefLieu": "Épinal",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Épinal"
            },
            "communes": "507",
            "cantons": "17",
            "circonscriptionsLegislatives": "4"
        },
        "regionAdministrative": "Grand Est",
        "caracteristiques": {
            "superficieCadastrale": "5 874",
            "population": "366 112",
            "densite": "62,3",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "89",
            "nom": "Yonne",
            "chefLieu": "Auxerre",
            "dateCreation": "1790"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Auxerre"
            },
            "communes": "423",
            "cantons": "21",
            "circonscriptionsLegislatives": "3"
        },
        "regionAdministrative": "Bourgogne-Franche-Comté",
        "caracteristiques": {
            "superficieCadastrale": "7 427",
            "population": "337 504",
            "densite": "45,4",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "90",
            "nom": "Territoire de Belfort",
            "chefLieu": "Belfort",
            "dateCreation": "1922"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "1",
                "noms": "Belfort"
            },
            "communes": "101",
            "cantons": "9",
            "circonscriptionsLegislatives": "2"
        },
        "regionAdministrative": "Bourgogne-Franche-Comté",
        "caracteristiques": {
            "superficieCadastrale": "609",
            "population": "141 852",
            "densite": "232,9",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "91",
            "nom": "Essonne",
            "chefLieu": "Évry-Courcouronnes",
            "dateCreation": "1968"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Étampes"
            },
            "communes": "194",
            "cantons": "21",
            "circonscriptionsLegislatives": "10"
        },
        "regionAdministrative": "Île-de-France",
        "caracteristiques": {
            "superficieCadastrale": "1 804",
            "population": "1 296 641",
            "densite": "718,8",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "92",
            "nom": "Hauts-de-Seine",
            "chefLieu": "Nanterre",
            "dateCreation": "1968"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Antony"
            },
            "communes": "36",
            "cantons": "23",
            "circonscriptionsLegislatives": "13"
        },
        "regionAdministrative": "Île-de-France",
        "caracteristiques": {
            "superficieCadastrale": "176",
            "population": "1 619 120",
            "densite": "9 199,5",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "93",
            "nom": "Seine-Saint-Denis",
            "chefLieu": "Bobigny",
            "dateCreation": "1968"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Bobigny"
            },
            "communes": "40",
            "cantons": "21",
            "circonscriptionsLegislatives": "12"
        },
        "regionAdministrative": "Île-de-France",
        "caracteristiques": {
            "superficieCadastrale": "236",
            "population": "1 632 677",
            "densite": "6 918,1",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "94",
            "nom": "Val-de-Marne",
            "chefLieu": "Créteil",
            "dateCreation": "1968"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Créteil"
            },
            "communes": "47",
            "cantons": "25",
            "circonscriptionsLegislatives": "11"
        },
        "regionAdministrative": "Île-de-France",
        "caracteristiques": {
            "superficieCadastrale": "245",
            "population": "1 396 913",
            "densite": "5 701,7",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "95",
            "nom": "Val-d'Oise",
            "chefLieu": "Pontoise",
            "dateCreation": "1968"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "3",
                "noms": "Argenteuil"
            },
            "communes": "184",
            "cantons": "21",
            "circonscriptionsLegislatives": "10"
        },
        "regionAdministrative": "Île-de-France",
        "caracteristiques": {
            "superficieCadastrale": "1 246",
            "population": "1 238 581",
            "densite": "994",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "971",
            "nom": "Guadeloupe",
            "chefLieu": "Basse-Terre",
            "dateCreation": "1946"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "2",
                "noms": "Basse-Terre"
            },
            "communes": "32",
            "cantons": "21",
            "circonscriptionsLegislatives": "4"
        },
        "regionAdministrative": "Guadeloupe",
        "caracteristiques": {
            "superficieCadastrale": "1 628",
            "population": "387 629",
            "densite": "238",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "972",
            "nom": "Martinique",
            "chefLieu": "Fort-de-France",
            "dateCreation": "1946"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "4",
                "noms": "Fort-de-France"
            },
            "communes": "34",
            "cantons": "",
            "circonscriptionsLegislatives": "4"
        },
        "regionAdministrative": "Martinique",
        "caracteristiques": {
            "superficieCadastrale": "1 128",
            "population": "368 783",
            "densite": "326,9",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "973",
            "nom": "Guyane",
            "chefLieu": "Cayenne",
            "dateCreation": "1946"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "2",
                "noms": "Cayenne"
            },
            "communes": "22",
            "cantons": "",
            "circonscriptionsLegislatives": "2"
        },
        "regionAdministrative": "Guyane",
        "caracteristiques": {
            "superficieCadastrale": "83 534",
            "population": "276 128",
            "densite": "3,3",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "974",
            "nom": "La Réunion",
            "chefLieu": "Saint-Denis",
            "dateCreation": "1946"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "4",
                "noms": "Saint-Denis"
            },
            "communes": "24",
            "cantons": "25",
            "circonscriptionsLegislatives": "7"
        },
        "regionAdministrative": "La Réunion",
        "caracteristiques": {
            "superficieCadastrale": "2 504",
            "population": "855 961",
            "densite": "341,9",
            "situation": ""
        }
    },
    {
        "département": {
            "code": "976",
            "nom": "Mayotte",
            "chefLieu": "Mamoudzou",
            "dateCreation": "2011"
        },
        "subdivisionsDépartementales": {
            "arrondissements": {
                "nb": "-",
                "noms": "-"
            },
            "communes": "11",
            "cantons": "",
            "circonscriptionsLegislatives": "2"
        },
        "regionAdministrative": "Mayotte",
        "caracteristiques": {
            "superficieCadastrale": "376",
            "population": "256 518",
            "densite": "682,2",
            "situation": ""
        }
    }
]

/**
 * Get all constructed urls for the site "www.pagesjaunes.fr"
 * @param {string} query term as what are you searching for... (ex: "medecin generaliste", "base de loisirs")
 */
function urlsDepartements_france(query) {
    return departements_fr.map(x => {
        const { nom, code } = x.département
        const q = query.replace(/\s+/g, '+')
        //"https://www.pagesjaunes.fr/annuaire/chercherlespros?quoiqui=medecin+generaliste&ou=Ardèche+(07)&univers=pagesjaunes&idOu=D007"
        let url = `https://www.pagesjaunes.fr/annuaire/chercherlespros?quoiqui=${q}&ou=${nom}+(${code})&univers=pagesjaunes&idOu=D${code.toString().padStart(3, 0)}`
        return encodeURI(url)
    })
}

console.log(urlsDepartements_france('medecin generaliste'))
