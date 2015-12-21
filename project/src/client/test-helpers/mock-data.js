/* jshint -W079 */
var mockData = (function() {
	return {
		getMockPokedex: getMockPokedex,
		getMockPokemon: getMockPokemon,
		getCachedIds: getCachedIds
	};

	function getMockPokedex() {
		return [            
			{
				name: "rattata", 
				resource_uri: "api/v1/pokemon/19/"
			}, 
			{
				name: "charmander", 
				resource_uri: "api/v1/pokemon/4/"
			}, 
			{
				name: "charmeleon", 
				resource_uri: "api/v1/pokemon/5/"
			},
			{
				name: "bulbasaur", 
				resource_uri: "api/v1/pokemon/1/"
			}
		];
	}

	function getCachedIds() {
		return [
			{
				nationalId: 1,
				name: "Bulbasaur"
			},
			{
				nationalId: 2,
				name: "Ivysaur"
			},
			{
				nationalId: 3,
				name: "Venusaur"
			}
		];
	}

	function getMockPokemon(){
		return {
		   abilities:[
		      {
		         name:"chlorophyll",
		         resource_uri:"/api/v1/ability/34/"
		      },
		      {
		         name:"overgrow",
		         resource_uri:"/api/v1/ability/65/"
		      }
		   ],
		   attack:49,
		   catch_rate:0,
		   created:"2013-11-03T15:05:41.260678",
		   defense:49,
		   descriptions:[
		      {
		         name:"bulbasaur_gen_1",
		         resource_uri:"/api/v1/description/4/"
		      },
		      {
		         name:"bulbasaur_gen_1",
		         resource_uri:"/api/v1/description/5/"
		      },
		      {
		         name:"bulbasaur_gen_1",
		         resource_uri:"/api/v1/description/6/"
		      },
		      {
		         name:"bulbasaur_gen_2",
		         resource_uri:"/api/v1/description/7/"
		      },
		      {
		         name:"bulbasaur_gen_2",
		         resource_uri:"/api/v1/description/8/"
		      },
		      {
		         name:"bulbasaur_gen_3",
		         resource_uri:"/api/v1/description/9/"
		      },
		      {
		         name:"bulbasaur_gen_3",
		         resource_uri:"/api/v1/description/10/"
		      },
		      {
		         name:"bulbasaur_gen_3",
		         resource_uri:"/api/v1/description/11/"
		      },
		      {
		         name:"bulbasaur_gen_4",
		         resource_uri:"/api/v1/description/12/"
		      },
		      {
		         name:"bulbasaur_gen_4",
		         resource_uri:"/api/v1/description/13/"
		      },
		      {
		         name:"bulbasaur_gen_4",
		         resource_uri:"/api/v1/description/14/"
		      },
		      {
		         name:"bulbasaur_gen_5",
		         resource_uri:"/api/v1/description/15/"
		      },
		      {
		         name:"bulbasaur_gen_1",
		         resource_uri:"/api/v1/description/2/"
		      },
		      {
		         name:"bulbasaur_gen_1",
		         resource_uri:"/api/v1/description/3/"
		      }
		   ],
		   egg_cycles:0,
		   egg_groups:[
		      {
		         name:"Plant",
		         resource_uri:"/api/v1/egg/7/"
		      },
		      {
		         name:"Monster",
		         resource_uri:"/api/v1/egg/1/"
		      }
		   ],
		   ev_yield:"1 special attack",
		   evolutions:[
		      {
		         level:16,
		         method:"level_up",
		         resource_uri:"/api/v1/pokemon/2/",
		         to:"Ivysaur"
		      }
		   ],
		   exp:64,
		   growth_rate:"medium slow",
		   happiness:0,
		   height:"7",
		   hp:45,
		   male_female_ratio:"87.5/12.5",
		   modified:"2013-11-30T13:59:47.261100",
		   moves:[
		      {
		         learn_type:"tutor",
		         name:"Bind",
		         resource_uri:"/api/v1/move/20/"
		      },
		      {
		         learn_type:"tutor",
		         name:"Grass-pledge",
		         resource_uri:"/api/v1/move/520/"
		      },
		      {
		         learn_type:"machine",
		         name:"Echoed-voice",
		         resource_uri:"/api/v1/move/497/"
		      },
		      {
		         learn_type:"machine",
		         name:"Round",
		         resource_uri:"/api/v1/move/496/"
		      },
		      {
		         learn_type:"machine",
		         name:"Venoshock",
		         resource_uri:"/api/v1/move/474/"
		      },
		      {
		         learn_type:"egg move",
		         name:"Power-whip",
		         resource_uri:"/api/v1/move/438/"
		      },
		      {
		         learn_type:"egg move",
		         name:"Sludge",
		         resource_uri:"/api/v1/move/124/"
		      },
		      {
		         learn_type:"tutor",
		         name:"String-shot",
		         resource_uri:"/api/v1/move/81/"
		      },
		      {
		         learn_type:"tutor",
		         name:"Knock-off",
		         resource_uri:"/api/v1/move/282/"
		      },
		      {
		         learn_type:"machine",
		         name:"Grass-knot",
		         resource_uri:"/api/v1/move/447/"
		      },
		      {
		         learn_type:"machine",
		         name:"Captivate",
		         resource_uri:"/api/v1/move/445/"
		      },
		      {
		         learn_type:"egg move",
		         name:"Leaf-storm",
		         resource_uri:"/api/v1/move/437/"
		      },
		      {
		         learn_type:"machine",
		         name:"Energy-ball",
		         resource_uri:"/api/v1/move/412/"
		      },
		      {
		         learn_type:"level up",
		         level:37,
		         name:"Seed-bomb",
		         resource_uri:"/api/v1/move/402/"
		      },
		      {
		         learn_type:"level up",
		         level:31,
		         name:"Worry-seed",
		         resource_uri:"/api/v1/move/388/"
		      },
		      {
		         learn_type:"machine",
		         name:"Natural-gift",
		         resource_uri:"/api/v1/move/363/"
		      },
		      {
		         learn_type:"egg move",
		         name:"Ingrain",
		         resource_uri:"/api/v1/move/275/"
		      },
		      {
		         learn_type:"egg move",
		         name:"Nature-power",
		         resource_uri:"/api/v1/move/267/"
		      },
		      {
		         learn_type:"egg move",
		         name:"Amnesia",
		         resource_uri:"/api/v1/move/133/"
		      },
		      {
		         learn_type:"egg move",
		         name:"Magical-leaf",
		         resource_uri:"/api/v1/move/345/"
		      },
		      {
		         learn_type:"machine",
		         name:"Bullet-seed",
		         resource_uri:"/api/v1/move/331/"
		      },
		      {
		         learn_type:"egg move",
		         name:"Grasswhistle",
		         resource_uri:"/api/v1/move/320/"
		      },
		      {
		         learn_type:"machine",
		         name:"Secret-power",
		         resource_uri:"/api/v1/move/290/"
		      },
		      {
		         learn_type:"machine",
		         name:"Facade",
		         resource_uri:"/api/v1/move/263/"
		      },
		      {
		         learn_type:"machine",
		         name:"Rock-smash",
		         resource_uri:"/api/v1/move/249/"
		      },
		      {
		         learn_type:"machine",
		         name:"Sludge-bomb",
		         resource_uri:"/api/v1/move/188/"
		      },
		      {
		         learn_type:"machine",
		         name:"Strength",
		         resource_uri:"/api/v1/move/70/"
		      },
		      {
		         learn_type:"machine",
		         name:"Sunny-day",
		         resource_uri:"/api/v1/move/241/"
		      },
		      {
		         learn_type:"machine",
		         name:"Hidden-power",
		         resource_uri:"/api/v1/move/237/"
		      },
		      {
		         learn_type:"level up",
		         level:39,
		         name:"Synthesis",
		         resource_uri:"/api/v1/move/235/"
		      },
		      {
		         learn_type:"level up",
		         level:25,
		         name:"Sweet-scent",
		         resource_uri:"/api/v1/move/230/"
		      },
		      {
		         learn_type:"egg move",
		         name:"Safeguard",
		         resource_uri:"/api/v1/move/219/"
		      },
		      {
		         learn_type:"machine",
		         name:"Frustration",
		         resource_uri:"/api/v1/move/218/"
		      },
		      {
		         learn_type:"machine",
		         name:"Return",
		         resource_uri:"/api/v1/move/216/"
		      },
		      {
		         learn_type:"machine",
		         name:"Sleep-talk",
		         resource_uri:"/api/v1/move/214/"
		      },
		      {
		         learn_type:"machine",
		         name:"Attract",
		         resource_uri:"/api/v1/move/213/"
		      },
		      {
		         learn_type:"machine",
		         name:"Fury-cutter",
		         resource_uri:"/api/v1/move/210/"
		      },
		      {
		         learn_type:"machine",
		         name:"Swagger",
		         resource_uri:"/api/v1/move/207/"
		      },
		      {
		         learn_type:"egg move",
		         name:"Charm",
		         resource_uri:"/api/v1/move/204/"
		      },
		      {
		         learn_type:"machine",
		         name:"Endure",
		         resource_uri:"/api/v1/move/203/"
		      },
		      {
		         learn_type:"machine",
		         name:"Giga-drain",
		         resource_uri:"/api/v1/move/202/"
		      },
		      {
		         learn_type:"machine",
		         name:"Mud-slap",
		         resource_uri:"/api/v1/move/189/"
		      },
		      {
		         learn_type:"machine",
		         name:"Protect",
		         resource_uri:"/api/v1/move/182/"
		      },
		      {
		         learn_type:"machine",
		         name:"Curse",
		         resource_uri:"/api/v1/move/174/"
		      },
		      {
		         learn_type:"machine",
		         name:"Snore",
		         resource_uri:"/api/v1/move/173/"
		      },
		      {
		         learn_type:"machine",
		         name:"Flash",
		         resource_uri:"/api/v1/move/148/"
		      },
		      {
		         learn_type:"egg move",
		         name:"Skull-bash",
		         resource_uri:"/api/v1/move/130/"
		      },
		      {
		         learn_type:"egg move",
		         name:"Light-screen",
		         resource_uri:"/api/v1/move/113/"
		      },
		      {
		         learn_type:"machine",
		         name:"Defense-curl",
		         resource_uri:"/api/v1/move/111/"
		      },
		      {
		         learn_type:"egg move",
		         name:"Petal-dance",
		         resource_uri:"/api/v1/move/80/"
		      },
		      {
		         learn_type:"machine",
		         name:"Headbutt",
		         resource_uri:"/api/v1/move/29/"
		      },
		      {
		         learn_type:"egg move",
		         name:"Razor-wind",
		         resource_uri:"/api/v1/move/13/"
		      },
		      {
		         learn_type:"machine",
		         name:"Substitute",
		         resource_uri:"/api/v1/move/164/"
		      },
		      {
		         learn_type:"machine",
		         name:"Rest",
		         resource_uri:"/api/v1/move/156/"
		      },
		      {
		         learn_type:"machine",
		         name:"Bide",
		         resource_uri:"/api/v1/move/117/"
		      },
		      {
		         learn_type:"machine",
		         name:"Reflect",
		         resource_uri:"/api/v1/move/115/"
		      },
		      {
		         learn_type:"machine",
		         name:"Double-team",
		         resource_uri:"/api/v1/move/104/"
		      },
		      {
		         learn_type:"machine",
		         name:"Mimic",
		         resource_uri:"/api/v1/move/102/"
		      },
		      {
		         learn_type:"machine",
		         name:"Rage",
		         resource_uri:"/api/v1/move/99/"
		      },
		      {
		         learn_type:"machine",
		         name:"Toxic",
		         resource_uri:"/api/v1/move/92/"
		      },
		      {
		         learn_type:"level up",
		         level:41,
		         name:"Sleep-powder",
		         resource_uri:"/api/v1/move/79/"
		      },
		      {
		         learn_type:"level up",
		         level:20,
		         name:"Poisonpowder",
		         resource_uri:"/api/v1/move/77/"
		      },
		      {
		         learn_type:"level up",
		         level:48,
		         name:"Solarbeam",
		         resource_uri:"/api/v1/move/76/"
		      },
		      {
		         learn_type:"level up",
		         level:27,
		         name:"Razor-leaf",
		         resource_uri:"/api/v1/move/75/"
		      },
		      {
		         learn_type:"level up",
		         level:34,
		         name:"Growth",
		         resource_uri:"/api/v1/move/74/"
		      },
		      {
		         learn_type:"level up",
		         level:7,
		         name:"Leech-seed",
		         resource_uri:"/api/v1/move/73/"
		      },
		      {
		         learn_type:"machine",
		         name:"Mega-drain",
		         resource_uri:"/api/v1/move/72/"
		      },
		      {
		         learn_type:"level up",
		         level:1,
		         name:"Growl",
		         resource_uri:"/api/v1/move/45/"
		      },
		      {
		         learn_type:"machine",
		         name:"Double-edge",
		         resource_uri:"/api/v1/move/38/"
		      },
		      {
		         learn_type:"machine",
		         name:"Take-down",
		         resource_uri:"/api/v1/move/36/"
		      },
		      {
		         learn_type:"machine",
		         name:"Body-slam",
		         resource_uri:"/api/v1/move/34/"
		      },
		      {
		         learn_type:"level up",
		         level:1,
		         name:"Tackle",
		         resource_uri:"/api/v1/move/33/"
		      },
		      {
		         learn_type:"level up",
		         level:13,
		         name:"Vine-whip",
		         resource_uri:"/api/v1/move/22/"
		      },
		      {
		         learn_type:"machine",
		         name:"Cut",
		         resource_uri:"/api/v1/move/15/"
		      },
		      {
		         learn_type:"machine",
		         name:"Swords-dance",
		         resource_uri:"/api/v1/move/14/"
		      }
		   ],
		   name:"Bulbasaur",
		   national_id:1,
		   pkdx_id:1,
		   resource_uri:"/api/v1/pokemon/1/",
		   sp_atk:65,
		   sp_def:65,
		   species:"seed pokemon",
		   speed:45,
		   sprites:[
		      {
		         name:"bulbasaur",
		         resource_uri:"/api/v1/sprite/2/"
		      },
		      {
		         name:"bulbasaur",
		         resource_uri:"/api/v1/sprite/1/"
		      }
		   ],
		   total:0,
		   types:[
		      {
		         name:"poison",
		         resource_uri:"/api/v1/type/4/"
		      },
		      {
		         name:"grass",
		         resource_uri:"/api/v1/type/12/"
		      }
		   ],
		   weight:"69"
		}
   

	}
})();
