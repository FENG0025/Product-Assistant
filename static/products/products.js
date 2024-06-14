	export const goodsList = [
	  {
		goods_id: 0,
		category: '仪器类',
		kind: '快检仪',
		img: [
		  { id: '1', url: 'https://b2b-material.cdn.bcebos.com/66YogNdLMjojW-M7Q6xgfBACMgM.jpg' },
		  { id: '2', url: 'https://b2b-material.cdn.bcebos.com/gGZRTG9fbHjil2n_3AH88RAB19w.jpg' },
		  { id: '3', url: 'https://b2b-material.cdn.bcebos.com/9h7fKv8KP5NoGFoEjiXNahAB5vU.jpg' },
		  { id: '4', url: 'https://b2b-material.cdn.bcebos.com/96j3xYTxmXevAluM_xdkkxAAoSs.jpg'},
		  { id: '5', url: 'https://b2b-material.cdn.bcebos.com/XA2bukswBx8mhAlyYhetjhABKgE.jpg'},
		  { id: '6', url: 'https://b2b-material.cdn.bcebos.com/vL-MwyU6M3X6SGCsCnEUHRAAtpI.jpg'},  
		],
		name: '芬克 SP-1100便携式水质检测仪',
		price: '￥3.98万',
		parameter: [
			{
				parameters_id: 1,
				parameters_name: "COD(超低)" ,
				detect_range: "5-100",
				precast_range: "5-100",
				cuvettes_range: "/",
				general: "COD"
			},
			{
				parameters_id: 2,
				parameters_name: "COD(低)" ,
				detect_range: "15-200",
				precast_range: "15-200",
				cuvettes_range: "25-300",
				general: "COD"
			},
			{
				parameters_id: 3,
				parameters_name: "COD(高)" ,
				detect_range: "100-1200",
				precast_range: "100-1200",
				cuvettes_range: "150-1500",
					general: "COD"
			},
			{
				parameters_id: 4,
				parameters_name: "COD(超高)" ,
				detect_range: "1000-10000",
				precast_range: "1200-10000",
				cuvettes_range: "/",
				general: "COD"
			},
			
			{
				parameters_id: 5,
				parameters_name: "总磷(低)",
				detect_range: "0.05-1",
				precast_range: "0.05-1",
				cuvettes_range: "0.1-1.5",
				general: "总磷"
			},
			{
				parameters_id: 6,
				parameters_name: "总磷(中)",
				detect_range: "/",
				precast_range: "0.2-5",
				cuvettes_range: "/",
				general: "总磷"
			},
			{
					parameters_id: 7,
					parameters_name: "总磷(高)",
					detect_range: "/",
					precast_range: "0.5-10",
					cuvettes_range: "/",
					general: "总磷"
				},
				{
					parameters_id: 8,
					parameters_name: "总磷(超高)",
					detect_range: "/",
					precast_range: "5-100",
					cuvettes_range: "/",
					general: "总磷"
				},
				{
					parameters_id: 9,
					parameters_name: "磷酸盐",
					detect_range: "0.05-1",
					precast_range: "0.05-1",
					cuvettes_range: "/",
					general: "磷酸盐"
				},
				{
					parameters_id: 10,
					parameters_name: "纳什氨氮(低)",
					detect_range: "0.1-5",
					precast_range: "0.2-5",
					cuvettes_range: "0.2-10",
					general: "纳氏氨氮"
				},
				{
					parameters_id: 11,
					parameters_name: "纳什氨氮(高)",
					detect_range: "0.5-30",
					precast_range: "1-50",
					cuvettes_range: "/",
					general: "纳氏氨氮"
				},
				{
					parameters_id: 12,
					parameters_name: "水杨酸氨氮(低)",
					detect_range: "0.05-2",
					precast_range: "0.1-2",
					cuvettes_range: "/",
					general: "水杨酸氨氮"
				},
			{
				parameters_id: 13,
				parameters_name: "水杨酸氨氮(高)",
				detect_range: "/",
				precast_range: "0-50",
				cuvettes_range: "/",
				general: "水杨酸氨氮"
			},
			{
				parameters_id: 14,
				parameters_name: "总氮(低)",
				detect_range: "0.5-20",
				precast_range: "0.5-20",
				cuvettes_range: "1-30",
				general: "总氮"
			},
			{
				parameters_id: 15,
				parameters_name: "总氮(高)",
				detect_range: "/",
				precast_range: "1-40",
				cuvettes_range: "1-30",
				general: "总氮"
			},
			{
				parameters_id: 16,
				parameters_name: "总氮(超高)",
				detect_range: "/",
				precast_range: "10-150",
				cuvettes_range: "/",
				general: "总氮"
			},
			{
				parameters_id: 17,
				parameters_name: "硝酸盐氮",
				detect_range: "0.5-25",
				precast_range: "1-20",
				cuvettes_range: "/",
				general: "硝酸盐氮"
			},
			{
				parameters_id: 18,
				parameters_name: "亚硝酸盐氮",
				detect_range: "0.02-0.5",
				precast_range: "0.02-0.5",
				cuvettes_range: "/",
				general: "亚硝酸盐氮"
			},
			{
				parameters_id: 19,
				parameters_name: "总铜(PAN)",
				detect_range: "0.05-2",
				precast_range: "0.05-2",
				cuvettes_range: "/",
				general: "总铜"
			},
			{
				parameters_id: 20,
				parameters_name: "总铜(BCA)",
				detect_range: "0.2-5",
				precast_range: "0.2-5",
				cuvettes_range: "/",
				general: "总铜"
			},
			{
				parameters_id: 21,
				parameters_name: "总镍",
				detect_range: "0.05-0.8",
				precast_range: "0.05-0.8",
				cuvettes_range: "/",
				general: "总镍"
			},
			{
				parameters_id: 22,
				parameters_name: "总铬",
				detect_range: "0.05-1",
				precast_range: "0.05-1",
				cuvettes_range: "/",
				general: "总铬"
			},
			{
				parameters_id: 23,
				parameters_name: "总镉",
				detect_range: "0.05-0.5",
				precast_range: "0.1-1",
				cuvettes_range: "/",
				general: "总镉"
			},
			{
				parameters_id: 24,
				parameters_name: "总汞",
				detect_range: "0.1-1",
				precast_range: "0.2-5",
				cuvettes_range: "/",
				general: "总汞"
			},
			{
				parameters_id: 25,
				parameters_name: "总锌",
				detect_range: "0.02-0.5",
				precast_range: "0.02-0.5",
				cuvettes_range: "/",
				general: "总锌"
			},
			{
				parameters_id: 26,
				parameters_name: "总铁",
				detect_range: "0.05-2",
				precast_range: "0.1-2",
				cuvettes_range: "/",
				general: "总铁"
			},
			{
				parameters_id: 27,
				parameters_name: "二价铁",
				detect_range: "0.05-2",
				precast_range: "0.1-2",
				cuvettes_range: "/",
				general: "二价铁"
			},
			{
				parameters_id: 28,
				parameters_name: "锰",
				detect_range: "0.05-0.5",
				precast_range: "0.05-0.5",
				cuvettes_range: "/",
				general: "锰"
			},
			{
				parameters_id: 29,
				parameters_name: "钴",
				detect_range: "0.05-2",
				precast_range: "0.05-1",
				cuvettes_range: "/",
				general: "钴"
			},
			{
				parameters_id: 30,
				parameters_name: "砷",
				detect_range: "0.1-2",
				precast_range: "0.1-2",
				cuvettes_range: "/",
				general: "砷"
			},
			{
				parameters_id: 31,
				parameters_name: "总银",
				detect_range: "0.05-0.4",
				precast_range: "0.05-0.4",
				cuvettes_range: "/",
				general: "总银"
			},
			{
				parameters_id: 32,
				parameters_name: "总铅",
				detect_range: "0.2-2",
				precast_range: "0-2",
				cuvettes_range: "/",
				general: "总铅"
			},
			{
				parameters_id: 33,
				parameters_name: "高猛酸盐指数",
				detect_range: "0.5-5",
				precast_range: "0.5-5",
				cuvettes_range: "/",
				general: "高猛酸盐指数"
			},
			{
				parameters_id: 34,
				parameters_name: "总氯",
				detect_range: "0.1-2",
				precast_range: "0.1-5",
				cuvettes_range: "/",
				general: "总氯"
			},
			{
				parameters_id: 35,
				parameters_name: "余氯",
				detect_range: "0.1-2",
				precast_range: "0.05-2",
				cuvettes_range: "/",
				general: "余氯"
			},
			{
				parameters_id: 36,
				parameters_name: "二氧化氯",
				detect_range: "0.1-2",
				precast_range: "0.2-2",
				cuvettes_range: "/",
				general: "二氧化氯"
			},
			{
				parameters_id: 37,
				parameters_name: "氯化物",
				detect_range: "1-50",
				precast_range: "2-20",
				cuvettes_range: "/",
				general: "氯化物"
			},
			{
				parameters_id: 38,
				parameters_name: "氰化物",
				detect_range: "0.05-0.8",
				precast_range: "0.05-0.5",
				cuvettes_range: "/",
				general: "氰化物"
			},
			{
				parameters_id: 39,
				parameters_name: "氟化物",
				detect_range: "0.1-1.5",
				precast_range: "0.05-1",
				cuvettes_range: "/",
				general: "氟化物"
			},
			{
				parameters_id: 40,
				parameters_name: "硫化物",
				detect_range: "0.1-2",
				precast_range: "0.05-2",
				cuvettes_range: "/",
				general: "硫化物"
			},
			{
				parameters_id: 41,
				parameters_name: "硫酸盐",
				detect_range: "5-60",
				precast_range: "/",
				cuvettes_range: "/",
				general: "硫酸盐"
			},
			{
				parameters_id: 42,
				parameters_name: "二氧化硅",
				detect_range: "0.2-7",
				precast_range: "/",
				cuvettes_range: "/",
				general: "二氧化硅"
			},
			{
				parameters_id: 43,
				parameters_name: "过氧化氢",
				detect_range: "1-25",
				precast_range: "1-25",
				cuvettes_range: "/",
				general: "过氧化氢"
			},
			{
				parameters_id: 44,
				parameters_name: "挥发酚",
				detect_range: "0.2-5",
				precast_range: "0.2-5",
				cuvettes_range: "/",
				general: "挥发酚"
			},
			{
				parameters_id: 45,
				parameters_name: "甲醛",
				detect_range: "0.2-3",
				precast_range: "0.2-3",
				cuvettes_range: "/",
				general: "甲醛"
			},
			{
				parameters_id: 46,
				parameters_name: "维生素C",
				detect_range: "20-600",
				precast_range: "20-600",
				cuvettes_range: "/",
				general: "维生素C"
			},
			{
				parameters_id: 47,
				parameters_name: "苯胺",
				detect_range: "0.05-4",
				precast_range: "/",
				cuvettes_range: "/",
				general: "苯胺"
			},
			{
				parameters_id: 48,
				parameters_name: "溶解氧",
				detect_range: "0-8",
				precast_range: "/",
				cuvettes_range: "/",
				general: "溶解氧"
			},
			{
				parameters_id: 49,
				parameters_name: "PH",
				detect_range: "6.5-8.5",
				precast_range: "/",
				cuvettes_range: "/",
				general: "PH"
			},
			{
				parameters_id: 50,
				parameters_name: "色度",
				detect_range: "50-500",
				precast_range: "0-500",
				cuvettes_range: "/",
				general: "色度"
			},
			{
				parameters_id: 51,
				parameters_name: "浊度",
				detect_range: "1-400",
				precast_range: "/",
				cuvettes_range: "/",
				general: "浊度"
			},
			{
				parameters_id: 52,
				parameters_name: "六价铬",
				detect_range: "0.05-1",
				precast_range: "0.05-1",
				cuvettes_range: "/",
				general: "六价铬"
			},
			{
				parameters_id: 53,
				parameters_name: "锑",
				detect_range: "0.05-2",
				precast_range: "0.1-2",
				cuvettes_range: "/",
				general: "锑"
			}
		 ],
			
  },
  {
  	  goods_id: 1,
	  category: '仪器类',
	  kind: '快检仪',
  	  img: [
  		{ id: '1', url: 'https://b2b-material.cdn.bcebos.com/Ec2rj4f5xpkuDwGmj7esuhACMTI.jpg' },
  		{ id: '2', url: 'https://b2b-material.cdn.bcebos.com/gGZRTG9fbHjil2n_3AH88RAB19w.jpg' },
  		{ id: '3', url: 'https://b2b-material.cdn.bcebos.com/9h7fKv8KP5NoGFoEjiXNahAB5vU.jpg' },
  		{ id: '4', url: 'https://b2b-material.cdn.bcebos.com/96j3xYTxmXevAluM_xdkkxAAoSs.jpg' },
  		{ id: '5', url: 'https://b2b-material.cdn.bcebos.com/XA2bukswBx8mhAlyYhetjhABKgE.jpg' },
		{ id: '6', url: 'https://b2b-material.cdn.bcebos.com/vL-MwyU6M3X6SGCsCnEUHRAAtpI.jpg' }
  	  ],
  	  name: '芬克 SP-160便携式水质检测仪' ,
  	  price: '￥2.98万' ,
	  parameter: [
	  	{
	  			parameters_id: 1,
	  			parameters_name: "COD(超低)" ,
	  			detect_range: "5-100",
	  			precast_range: "5-100",
	  			cuvettes_range: "/",
	  			general: "COD"
	  		},
	  		{
	  			parameters_id: 2,
	  			parameters_name: "COD(低)" ,
	  			detect_range: "15-200",
	  			precast_range: "15-200",
	  			cuvettes_range: "25-300",
	  			general: "COD"
	  		},
	  		{
	  		parameters_id: 3,
	  		parameters_name: "COD(高)" ,
	  		detect_range: "100-1200",
	  		precast_range: "100-1200",
	  		cuvettes_range: "150-1500",
	  		general: "COD"
	  	},
	  	{
	  		parameters_id: 4,
	  		parameters_name: "COD(超高)" ,
	  		detect_range: "1000-10000",
	  		precast_range: "1200-10000",
	  		cuvettes_range: "/",
	  		general: "COD"
	  	},
	  	
	  	{
	  		parameters_id: 5,
	  		parameters_name: "总磷(低)",
	  		detect_range: "0.05-1",
	  		precast_range: "0.05-1",
	  		cuvettes_range: "0.1-1.5",
	  		general: "总磷"
	  	},
	  	{
	  		parameters_id: 6,
	  		parameters_name: "总磷(中)",
	  		detect_range: "/",
	  		precast_range: "0.2-5",
	  		cuvettes_range: "/",
	  		general: "总磷"
	  	},
	  	{
	  		parameters_id: 7,
	  		parameters_name: "总磷(高)",
	  		detect_range: "/",
	  		precast_range: "0.5-10",
	  		cuvettes_range: "/",
	  		general: "总磷"
	  	},
	  	{
	  		parameters_id: 8,
	  		parameters_name: "总磷(超高)",
	  		detect_range: "/",
	  		precast_range: "5-100",
	  		cuvettes_range: "/",
	  		general: "总磷"
	  	},
	  	{
	  		parameters_id: 9,
	  		parameters_name: "磷酸盐",
	  		detect_range: "0.05-1",
	  		precast_range: "0.05-1",
	  		cuvettes_range: "/",
			general: "磷酸盐"
	  	},
	  	{
	  		parameters_id: 10,
	  		parameters_name: "纳什氨氮(低)",
	  		detect_range: "0.1-5",
	  		precast_range: "0.2-5",
	  		cuvettes_range: "0.2-10",
	  		general: "纳氏氨氮"
	  	},
	  	{
	  		parameters_id: 11,
	  		parameters_name: "纳什氨氮(高)",
	  		detect_range: "0.5-30",
	  		precast_range: "1-50",
	  		cuvettes_range: "/",
	  		general: "纳氏氨氮"
	  	},
	  	{
	  		parameters_id: 12,
	  		parameters_name: "水杨酸氨氮(低)",
	  		detect_range: "0.05-2",
	  		precast_range: "0.1-2",
	  		cuvettes_range: "/",
	  		general: "水杨酸氨氮"
	  	},
	  	{
	  		parameters_id: 13,
	  		parameters_name: "水杨酸氨氮(高)",
	  		detect_range: "/",
	  		precast_range: "0-50",
	  		cuvettes_range: "/",
	  		general: "水杨酸氨氮"
	  	},
	  	{
	  		parameters_id: 14,
	  		parameters_name: "总氮(低)",
	  		detect_range: "0.5-20",
	  		precast_range: "0.5-20",
	  		cuvettes_range: "1-30",
	  		general: "总氮"
	  	},
	  	{
	  		parameters_id: 15,
	  		parameters_name: "总氮(高)",
	  		detect_range: "/",
	  		precast_range: "1-40",
	  		cuvettes_range: "1-30",
	  		general: "总氮"
	  	},
	  	{
	  		parameters_id: 16,
	  		parameters_name: "总氮(超高)",
	  		detect_range: "/",
	  		precast_range: "10-150",
	  		cuvettes_range: "/",
	  		general: "总氮"
	  	},
	  	{
	  		parameters_id: 17,
	  		parameters_name: "硝酸盐氮",
	  		detect_range: "0.5-25",
	  		precast_range: "1-20",
	  		cuvettes_range: "/",
	  		general: "硝酸盐氮"
	  	},
	  	{
	  		parameters_id: 18,
	  		parameters_name: "亚硝酸盐氮",
	  		detect_range: "0.02-0.5",
	  		precast_range: "0.02-0.5",
	  		cuvettes_range: "/",
	  		general: "亚硝酸盐氮"
	  	},
	  	{
	  		parameters_id: 19,
	  		parameters_name: "总铜(PAN)",
	  		detect_range: "0.05-2",
	  		precast_range: "0.05-2",
	  		cuvettes_range: "/",
	  		general: "总铜"
	  	},
	  	{
	  		parameters_id: 20,
	  		parameters_name: "总铜(BCA)",
	  		detect_range: "0.2-5",
	  		precast_range: "0.2-5",
	  		cuvettes_range: "/",
	  		general: "总铜"
	  	},
	  	{
	  		parameters_id: 21,
	  		parameters_name: "总镍",
	  		detect_range: "0.05-0.8",
	  		precast_range: "0.05-0.8",
	  		cuvettes_range: "/",
	  		general: "总镍"
	  	},
	  	{
	  		parameters_id: 22,
	  		parameters_name: "总铬",
	  		detect_range: "0.05-1",
	  		precast_range: "0.05-1",
	  		cuvettes_range: "/",
	  		general: "总铬"
	  	},
	  	{
	  		parameters_id: 23,
	  		parameters_name: "总镉",
	  		detect_range: "0.05-0.5",
	  		precast_range: "0.1-1",
	  		cuvettes_range: "/",
	  		general: "总镉"
	  	},
	  	{
	  		parameters_id: 24,
	  		parameters_name: "总汞",
	  		detect_range: "0.1-1",
	  		precast_range: "0.2-5",
	  		cuvettes_range: "/",
	  		general: "总汞"
	  	},
	  	{
	  		parameters_id: 25,
	  		parameters_name: "总锌",
	  		detect_range: "0.02-0.5",
	  		precast_range: "0.02-0.5",
	  		cuvettes_range: "/",
	  		general: "总锌"
	  	},
	  	{
	  		parameters_id: 26,
	  		parameters_name: "总铁",
	  		detect_range: "0.05-2",
	  		precast_range: "0.1-2",
	  		cuvettes_range: "/",
	  		general: "总铁"
	  	},
	  	{
	  		parameters_id: 27,
	  		parameters_name: "二价铁",
	  		detect_range: "0.05-2",
	  		precast_range: "0.1-2",
	  		cuvettes_range: "/",
	  		general: "二价铁"
	  	},
	  	{
	  		parameters_id: 28,
	  		parameters_name: "锰",
	  		detect_range: "0.05-0.5",
	  		precast_range: "0.05-0.5",
	  		cuvettes_range: "/",
	  		general: "锰"
	  	},
	  	{
	  		parameters_id: 29,
	  		parameters_name: "钴",
	  		detect_range: "0.05-2",
	  		precast_range: "0.05-1",
	  		cuvettes_range: "/",
	  		general: "钴"
	  	},
	  	{
	  		parameters_id: 30,
	  		parameters_name: "砷",
	  		detect_range: "0.1-2",
	  		precast_range: "0.1-2",
	  		cuvettes_range: "/",
	  		general: "砷"
	  	},
	  	{
	  		parameters_id: 31,
	  		parameters_name: "总银",
	  		detect_range: "0.05-0.4",
	  		precast_range: "0.05-0.4",
	  		cuvettes_range: "/",
	  		general: "总银"
	  	},
	  	{
	  		parameters_id: 32,
	  		parameters_name: "总铅",
	  		detect_range: "0.2-2",
	  		precast_range: "0-2",
	  		cuvettes_range: "/",
	  		general: "总铅"
	  	},
	  	{
	  		parameters_id: 33,
	  		parameters_name: "高猛酸盐指数",
	  		detect_range: "0.5-5",
	  		precast_range: "0.5-5",
	  		cuvettes_range: "/",
	  		general: "高猛酸盐指数"
	  	},
	  	{
	  		parameters_id: 34,
	  		parameters_name: "总氯",
	  		detect_range: "0.1-2",
	  		precast_range: "0.1-5",
	  		cuvettes_range: "/",
	  		general: "总氯"
	  	},
	  	{
	  		parameters_id: 35,
	  		parameters_name: "余氯",
	  		detect_range: "0.1-2",
	  		precast_range: "0.05-2",
	  		cuvettes_range: "/",
	  		general: "余氯"
	  	},
	  	{
	  		parameters_id: 36,
	  		parameters_name: "二氧化氯",
	  		detect_range: "0.1-2",
	  		precast_range: "0.2-2",
	  		cuvettes_range: "/",
	  		general: "二氧化氯"
	  	},
	  	{
	  		parameters_id: 37,
	  		parameters_name: "氯化物",
	  		detect_range: "1-50",
	  		precast_range: "2-20",
	  		cuvettes_range: "/",
	  		general: "氯化物"
	  	},
	  	{
	  		parameters_id: 38,
	  		parameters_name: "氰化物",
	  		detect_range: "0.05-0.8",
	  		precast_range: "0.05-0.5",
	  		cuvettes_range: "/",
	  		general: "氰化物"
	  	},
	  	{
	  		parameters_id: 39,
	  		parameters_name: "氟化物",
	  		detect_range: "0.1-1.5",
	  		precast_range: "0.05-1",
	  		cuvettes_range: "/",
	  		general: "氟化物"
	  	},
	  	{
	  		parameters_id: 40,
	  		parameters_name: "硫化物",
	  		detect_range: "0.1-2",
	  		precast_range: "0.05-2",
	  		cuvettes_range: "/",
	  		general: "硫化物"
	  	},
	  	{
	  		parameters_id: 41,
	  		parameters_name: "硫酸盐",
	  		detect_range: "5-60",
	  		precast_range: "/",
	  		cuvettes_range: "/",
	  		general: "硫酸盐"
	  	},
	  	{
	  		parameters_id: 42,
	  		parameters_name: "二氧化硅",
	  		detect_range: "0.2-7",
	  		precast_range: "/",
	  		cuvettes_range: "/",
	  		general: "二氧化硅"
	  	},
	  	{
	  		parameters_id: 43,
	  		parameters_name: "过氧化氢",
	  		detect_range: "1-25",
	  		precast_range: "1-25",
	  		cuvettes_range: "/",
	  		general: "过氧化氢"
	  	},
	  	{
	  		parameters_id: 44,
	  		parameters_name: "挥发酚",
	  		detect_range: "0.2-5",
	  		precast_range: "0.2-5",
	  		cuvettes_range: "/",
	  		general: "挥发酚"
	  	},
	  	{
	  		parameters_id: 45,
	  		parameters_name: "甲醛",
	  		detect_range: "0.2-3",
	  		precast_range: "0.2-3",
	  		cuvettes_range: "/",
	  		general: "甲醛"
	  	},
	  	{
	  		parameters_id: 46,
	  		parameters_name: "维生素C",
	  		detect_range: "20-600",
	  		precast_range: "20-600",
	  		cuvettes_range: "/",
	  		general: "维生素C"
	  	},
	  	{
	  		parameters_id: 47,
	  		parameters_name: "苯胺",
	  		detect_range: "0.05-4",
	  		precast_range: "/",
	  		cuvettes_range: "/",
	  		general: "苯胺"
	  	},
	  	{
	  		parameters_id: 48,
	  		parameters_name: "溶解氧",
	  		detect_range: "0-8",
	  		precast_range: "/",
	  		cuvettes_range: "/",
	  		general: "溶解氧"
	  	},
	  	{
	  		parameters_id: 49,
	  		parameters_name: "PH",
	  		detect_range: "6.5-8.5",
	  		precast_range: "/",
	  		cuvettes_range: "/",
	  		general: "PH"
	  	},
	  	{
	  		parameters_id: 50,
	  		parameters_name: "色度",
	  		detect_range: "50-500",
	  		precast_range: "0-500",
	  		cuvettes_range: "/",
	  		general: "色度"
	  	},
	  	{
	  		parameters_id: 51,
	  		parameters_name: "浊度",
	  		detect_range: "1-400",
	  		precast_range: "/",
	  		cuvettes_range: "/",
	  		general: "浊度"
	  	},
	  	{
	  		parameters_id: 52,
	  		parameters_name: "六价铬",
	  		detect_range: "0.05-1",
	  		precast_range: "0.05-1",
	  		cuvettes_range: "/",
	  		general: "六价铬"
	  	},
	  	{
	  		parameters_id: 53,
	  		parameters_name: "锑",
	  		detect_range: "0.05-2",
	  		precast_range: "0.1-2",
	  		cuvettes_range: "/",
	  		general: "锑"
	  	}
	  	 ],
  },
  {
	  goods_id: 2,
	  category: '仪器类',
	  kind: '快检仪',
	  img: [
	    { id: '1', url: 'https://b2b-material.cdn.bcebos.com/jS54SrXuzwVnSN8lD-uTVRACMSg.jpg' },
	    { id: '2', url: 'https://b2b-material.cdn.bcebos.com/96j3xYTxmXevAluM_xdkkxAAoSs.jpg' },
	    { id: '3', url: 'https://b2b-material.cdn.bcebos.com/gGZRTG9fbHjil2n_3AH88RAB19w.jpg' },
		{ id: '4', url: 'https://b2b-material.cdn.bcebos.com/9h7fKv8KP5NoGFoEjiXNahAB5vU.jpg' },
		{ id: '5', url: 'https://b2b-material.cdn.bcebos.com/XA2bukswBx8mhAlyYhetjhABKgE.jpg' },
	  ],
	  name: '芬克 SP-105便携式水质检测仪',
	  price: '￥3.48万',
	  parameter: [
	  		  {
	  		  		parameters_id: 1,
	  		  		parameters_name: "COD(超低)" ,
	  		  		detect_range: "5-100",
	  		  		precast_range: "5-100",
	  		  		cuvettes_range: "/",
	  		  		general: "COD"
	  		  	},
	  		  	{
	  		  		parameters_id: 2,
	  		  		parameters_name: "COD(低)" ,
	  		  		detect_range: "15-200",
	  		  		precast_range: "15-200",
	  		  		cuvettes_range: "25-300",
	  		  		general: "COD"
	  		  	},
	  		  	{
	  		  	parameters_id: 3,
	  		  	parameters_name: "COD(高)" ,
	  		  	detect_range: "100-1200",
	  		  	precast_range: "100-1200",
	  		  	cuvettes_range: "150-1500",
	  		  	general: "COD"
	  		  },
	  		  {
	  		  	parameters_id: 4,
	  		  	parameters_name: "COD(超高)" ,
	  		  	detect_range: "1000-10000",
	  		  	precast_range: "1200-10000",
	  		  	cuvettes_range: "/",
	  		  	general: "COD"
	  		  },
	  		  
	  		  {
	  		  	parameters_id: 5,
	  		  	parameters_name: "总磷(低)",
	  		  	detect_range: "0.05-1",
	  		  	precast_range: "0.05-1",
	  		  	cuvettes_range: "0.1-1.5",
	  		  	general: "总磷"
	  		  },
	  		  {
	  		  	parameters_id: 6,
	  		  	parameters_name: "总磷(中)",
	  		  	detect_range: "/",
	  		  	precast_range: "0.2-5",
	  		  	cuvettes_range: "/",
	  		  	general: "总磷"
	  		  },
	  		  {
	  		  	parameters_id: 7,
	  		  	parameters_name: "总磷(高)",
	  		  	detect_range: "/",
	  		  	precast_range: "0.5-10",
	  		  	cuvettes_range: "/",
	  		  	general: "总磷"
	  		  },
	  		  {
	  		  	parameters_id: 8,
	  		  	parameters_name: "总磷(超高)",
	  		  	detect_range: "/",
	  		  	precast_range: "5-100",
	  		  	cuvettes_range: "/",
	  		  	general: "总磷"
	  		  },
	  		  {
	  		  	parameters_id: 9,
	  		  	parameters_name: "磷酸盐",
	  		  	detect_range: "0.05-1",
	  		  	precast_range: "0.05-1",
	  		  	cuvettes_range: "/",
				general: "磷酸盐"
	  		  },
	  		  {
	  		  	parameters_id: 10,
	  		  	parameters_name: "纳什氨氮(低)",
	  		  	detect_range: "0.1-5",
	  		  	precast_range: "0.2-5",
	  		  	cuvettes_range: "0.2-10",
	  		  	general: "纳氏氨氮"
	  		  },
	  		  {
	  		  	parameters_id: 11,
	  		  	parameters_name: "纳什氨氮(高)",
	  		  	detect_range: "0.5-30",
	  		  	precast_range: "1-50",
	  		  	cuvettes_range: "/",
	  		  	general: "纳氏氨氮"
	  		  },
	  		  {
	  		  	parameters_id: 12,
	  		  	parameters_name: "水杨酸氨氮(低)",
	  		  	detect_range: "0.05-2",
	  		  	precast_range: "0.1-2",
	  		  	cuvettes_range: "/",
	  		  	general: "水杨酸氨氮"
	  		  },
	  		  {
	  		  	parameters_id: 13,
	  		  	parameters_name: "水杨酸氨氮(高)",
	  		  	detect_range: "/",
	  		  	precast_range: "0-50",
	  		  	cuvettes_range: "/",
	  		  	general: "水杨酸氨氮"
	  		  },
	  		  {
	  		  	parameters_id: 14,
	  		  	parameters_name: "总氮(低)",
	  		  	detect_range: "0.5-20",
	  		  	precast_range: "0.5-20",
	  		  	cuvettes_range: "1-30",
	  		  	general: "总氮"
	  		  },
	  		  {
	  		  	parameters_id: 15,
	  		  	parameters_name: "总氮(高)",
	  		  	detect_range: "/",
	  		  	precast_range: "1-40",
	  		  	cuvettes_range: "1-30",
	  		  	general: "总氮"
	  		  },
	  		  {
	  		  	parameters_id: 16,
	  		  	parameters_name: "总氮(超高)",
	  		  	detect_range: "/",
	  		  	precast_range: "10-150",
	  		  	cuvettes_range: "/",
	  		  	general: "总氮"
	  		  },
	  		  
	  	  ]

  },
  {
  	  goods_id: 3,
	  category: '仪器类',
	  kind: '快检仪',
  	  img: [
  		{ id: '1', url: 'https://b2b-material.cdn.bcebos.com/lvC8qyMLN6sYiIINGGpG5xACMQQ.jpg' },
  		{ id: '2', url: 'https://b2b-material.cdn.bcebos.com/96j3xYTxmXevAluM_xdkkxAAoSs.jpg' },
  		{ id: '3', url: 'https://b2b-material.cdn.bcebos.com/gGZRTG9fbHjil2n_3AH88RAB19w.jpg' },
  		{ id: '4', url: 'https://b2b-material.cdn.bcebos.com/9h7fKv8KP5NoGFoEjiXNahAB5vU.jpg' },
  		{ id: '5', url: 'https://b2b-material.cdn.bcebos.com/XA2bukswBx8mhAlyYhetjhABKgE.jpg' },
		{ id: '6', url: 'https://b2b-material.cdn.bcebos.com/vL-MwyU6M3X6SGCsCnEUHRAAtpI.jpg' }
  	  ],
  	  name: '芬克 SP-104便携式水质检测仪' ,
  	  price: '￥2.48万' ,
  	  parameter: [
  	  		{
  	  				parameters_id: 1,
  	  				parameters_name: "COD(超低)" ,
  	  				detect_range: "5-100",
  	  				precast_range: "5-100",
  	  				cuvettes_range: "/",
  	  				general: "COD"
  	  			},
  	  			{
  	  				parameters_id: 2,
  	  				parameters_name: "COD(低)" ,
  	  				detect_range: "15-200",
  	  				precast_range: "15-200",
  	  				cuvettes_range: "25-300",
  	  				general: "COD"
  	  			},
  	  			{
  	  			parameters_id: 3,
  	  			parameters_name: "COD(高)" ,
  	  			detect_range: "100-1200",
  	  			precast_range: "100-1200",
  	  			cuvettes_range: "150-1500",
  	  			general: "COD"
  	  		},
  	  		{
  	  			parameters_id: 4,
  	  			parameters_name: "COD(超高)" ,
  	  			detect_range: "1000-10000",
  	  			precast_range: "1200-10000",
  	  			cuvettes_range: "/",
  	  			general: "COD"
  	  		},
  	  		
  	  		{
  	  			parameters_id: 5,
  	  			parameters_name: "总磷(低)",
  	  			detect_range: "0.05-1",
  	  			precast_range: "0.05-1",
  	  			cuvettes_range: "0.1-1.5",
  	  			general: "总磷"
  	  		},
  	  		{
  	  			parameters_id: 6,
  	  			parameters_name: "总磷(中)",
  	  			detect_range: "/",
  	  			precast_range: "0.2-5",
  	  			cuvettes_range: "/",
  	  			general: "总磷"
  	  		},
  	  		{
  	  			parameters_id: 7,
  	  			parameters_name: "总磷(高)",
  	  			detect_range: "/",
  	  			precast_range: "0.5-10",
  	  			cuvettes_range: "/",
  	  			general: "总磷"
  	  		},
  	  		{
  	  			parameters_id: 8,
  	  			parameters_name: "总磷(超高)",
  	  			detect_range: "/",
  	  			precast_range: "5-100",
  	  			cuvettes_range: "/",
  	  			general: "总磷"
  	  		},
  	  		{
  	  			parameters_id: 9,
  	  			parameters_name: "磷酸盐",
  	  			detect_range: "0.05-1",
  	  			precast_range: "0.05-1",
  	  			cuvettes_range: "/",
  	  			general: "磷酸盐"
  	  		},
  	  		{
  	  			parameters_id: 10,
  	  			parameters_name: "纳什氨氮(低)",
  	  			detect_range: "0.1-5",
  	  			precast_range: "0.2-5",
  	  			cuvettes_range: "0.2-10",
  	  			general: "纳氏氨氮"
  	  		},
  	  		{
  	  			parameters_id: 11,
  	  			parameters_name: "纳什氨氮(高)",
  	  			detect_range: "0.5-30",
  	  			precast_range: "1-50",
  	  			cuvettes_range: "/",
  	  			general: "纳氏氨氮"
  	  		},
  	  		{
  	  			parameters_id: 12,
  	  			parameters_name: "水杨酸氨氮(低)",
  	  			detect_range: "0.05-2",
  	  			precast_range: "0.1-2",
  	  			cuvettes_range: "/",
  	  			general: "水杨酸氨氮"
  	  		},
  	  		{
  	  			parameters_id: 13,
  	  			parameters_name: "水杨酸氨氮(高)",
  	  			detect_range: "/",
  	  			precast_range: "0-50",
  	  			cuvettes_range: "/",
  	  			general: "水杨酸氨氮"
  	  		},
  	  		{
  	  			parameters_id: 14,
  	  			parameters_name: "总氮(低)",
  	  			detect_range: "0.5-20",
  	  			precast_range: "0.5-20",
  	  			cuvettes_range: "1-30",
  	  			general: "总氮"
  	  		},
  	  		{
  	  			parameters_id: 15,
  	  			parameters_name: "总氮(高)",
  	  			detect_range: "/",
  	  			precast_range: "1-40",
  	  			cuvettes_range: "1-30",
  	  			general: "总氮"
  	  		},
  	  		{
  	  			parameters_id: 16,
  	  			parameters_name: "总氮(超高)",
  	  			detect_range: "/",
  	  			precast_range: "10-150",
  	  			cuvettes_range: "/",
  	  			general: "总氮"
  	  		},
  	  		
  	  		
  	  	  ]

  },
  {
	  goods_id: 4,
	  category: '仪器类',
	  kind: '分析仪',
	  img: [
		{ id: '1', url: 'https://b2b-material.cdn.bcebos.com/XLv5c-yXTEg7At7DBTwcfRAB1rU.jpg' },
		{ id: '2', url: 'https://b2b-material.cdn.bcebos.com/318zv6KBWs32SXFTHnBeERABJI8.jpg' },
		{ id: '3', url: 'https://b2b-material.cdn.bcebos.com/f4jfLktD5779abYJiMeR5hABh5c.jpg' },
		{ id: '4', url: 'https://b2b-material.cdn.bcebos.com/KcLCYd3xoMyHSc3oSebV3hABIKA.jpg' },
		{ id: '5', url: 'https://b2b-material.cdn.bcebos.com/mGmXeu8zam3ImN2oy_lkvhABe5I.jpg' }
	  ],
	  name: '芬克SL-1100实验室智能水质分析仪' ,
	  price: '￥2.48万' ,
	 parameter: [
	 	{
	 			parameters_id: 1,
	 			parameters_name: "COD(超低)" ,
	 			detect_range: "5-100",
	 			precast_range: "5-100",
	 			cuvettes_range: "/",
	 			general: "COD"
	 		},
	 		{
	 			parameters_id: 2,
	 			parameters_name: "COD(低)" ,
	 			detect_range: "15-200",
	 			precast_range: "15-200",
	 			cuvettes_range: "25-300",
	 			general: "COD"
	 		},
	 		{
	 		parameters_id: 3,
	 		parameters_name: "COD(高)" ,
	 		detect_range: "100-1200",
	 		precast_range: "100-1200",
	 		cuvettes_range: "150-1500",
	 		general: "COD"
	 	},
	 	{
	 		parameters_id: 4,
	 		parameters_name: "COD(超高)" ,
	 		detect_range: "1000-10000",
	 		precast_range: "1200-10000",
	 		cuvettes_range: "/",
	 		general: "COD"
	 	},
	 	
	 	{
	 		parameters_id: 5,
	 		parameters_name: "总磷(低)",
	 		detect_range: "0.05-1",
	 		precast_range: "0.05-1",
	 		cuvettes_range: "0.1-1.5",
	 		general: "总磷"
	 	},
	 	{
	 		parameters_id: 6,
	 		parameters_name: "总磷(中)",
	 		detect_range: "/",
	 		precast_range: "0.2-5",
	 		cuvettes_range: "/",
	 		general: "总磷"
	 	},
	 	{
	 		parameters_id: 7,
	 		parameters_name: "总磷(高)",
	 		detect_range: "/",
	 		precast_range: "0.5-10",
	 		cuvettes_range: "/",
	 		general: "总磷"
	 	},
	 	{
	 		parameters_id: 8,
	 		parameters_name: "总磷(超高)",
	 		detect_range: "/",
	 		precast_range: "5-100",
	 		cuvettes_range: "/",
	 		general: "总磷"
	 	},
	 	{
	 		parameters_id: 9,
	 		parameters_name: "磷酸盐",
	 		detect_range: "0.05-1",
	 		precast_range: "0.05-1",
	 		cuvettes_range: "/",
			general: "磷酸盐"
	 	},
	 	{
	 		parameters_id: 10,
	 		parameters_name: "纳什氨氮(低)",
	 		detect_range: "0.1-5",
	 		precast_range: "0.2-5",
	 		cuvettes_range: "0.2-10",
	 		general: "纳氏氨氮"
	 	},
	 	{
	 		parameters_id: 11,
	 		parameters_name: "纳什氨氮(高)",
	 		detect_range: "0.5-30",
	 		precast_range: "1-50",
	 		cuvettes_range: "/",
	 		general: "纳氏氨氮"
	 	},
	 	{
	 		parameters_id: 12,
	 		parameters_name: "水杨酸氨氮(低)",
	 		detect_range: "0.05-2",
	 		precast_range: "0.1-2",
	 		cuvettes_range: "/",
	 		general: "水杨酸氨氮"
	 	},
	 	{
	 		parameters_id: 13,
	 		parameters_name: "水杨酸氨氮(高)",
	 		detect_range: "/",
	 		precast_range: "0-50",
	 		cuvettes_range: "/",
	 		general: "水杨酸氨氮"
	 	},
	 	{
	 		parameters_id: 14,
	 		parameters_name: "总氮(低)",
	 		detect_range: "0.5-20",
	 		precast_range: "0.5-20",
	 		cuvettes_range: "1-30",
	 		general: "总氮"
	 	},
	 	{
	 		parameters_id: 15,
	 		parameters_name: "总氮(高)",
	 		detect_range: "/",
	 		precast_range: "1-40",
	 		cuvettes_range: "1-30",
	 		general: "总氮"
	 	},
	 	{
	 		parameters_id: 16,
	 		parameters_name: "总氮(超高)",
	 		detect_range: "/",
	 		precast_range: "10-150",
	 		cuvettes_range: "/",
	 		general: "总氮"
	 	},
	 	{
	 		parameters_id: 17,
	 		parameters_name: "硝酸盐氮",
	 		detect_range: "0.5-25",
	 		precast_range: "1-20",
	 		cuvettes_range: "/",
	 		general: "硝酸盐氮"
	 	},
	 	{
	 		parameters_id: 18,
	 		parameters_name: "亚硝酸盐氮",
	 		detect_range: "0.02-0.5",
	 		precast_range: "0.02-0.5",
	 		cuvettes_range: "/",
	 		general: "亚硝酸盐氮"
	 	},
	 	{
	 		parameters_id: 19,
	 		parameters_name: "总铜(PAN)",
	 		detect_range: "0.05-2",
	 		precast_range: "0.05-2",
	 		cuvettes_range: "/",
	 		general: "总铜"
	 	},
	 	{
	 		parameters_id: 20,
	 		parameters_name: "总铜(BCA)",
	 		detect_range: "0.2-5",
	 		precast_range: "0.2-5",
	 		cuvettes_range: "/",
	 		general: "总铜"
	 	},
	 	{
	 		parameters_id: 21,
	 		parameters_name: "总镍",
	 		detect_range: "0.05-0.8",
	 		precast_range: "0.05-0.8",
	 		cuvettes_range: "/",
	 		general: "总镍"
	 	},
	 	{
	 		parameters_id: 22,
	 		parameters_name: "总铬",
	 		detect_range: "0.05-1",
	 		precast_range: "0.05-1",
	 		cuvettes_range: "/",
	 		general: "总铬"
	 	},
	 	{
	 		parameters_id: 23,
	 		parameters_name: "总镉",
	 		detect_range: "0.05-0.5",
	 		precast_range: "0.1-1",
	 		cuvettes_range: "/",
	 		general: "总镉"
	 	},
	 	{
	 		parameters_id: 24,
	 		parameters_name: "总汞",
	 		detect_range: "0.1-1",
	 		precast_range: "0.2-5",
	 		cuvettes_range: "/",
	 		general: "总汞"
	 	},
	 	{
	 		parameters_id: 25,
	 		parameters_name: "总锌",
	 		detect_range: "0.02-0.5",
	 		precast_range: "0.02-0.5",
	 		cuvettes_range: "/",
	 		general: "总锌"
	 	},
	 	{
	 		parameters_id: 26,
	 		parameters_name: "总铁",
	 		detect_range: "0.05-2",
	 		precast_range: "0.1-2",
	 		cuvettes_range: "/",
	 		general: "总铁"
	 	},
	 	{
	 		parameters_id: 27,
	 		parameters_name: "二价铁",
	 		detect_range: "0.05-2",
	 		precast_range: "0.1-2",
	 		cuvettes_range: "/",
	 		general: "二价铁"
	 	},
	 	{
	 		parameters_id: 28,
	 		parameters_name: "锰",
	 		detect_range: "0.05-0.5",
	 		precast_range: "0.05-0.5",
	 		cuvettes_range: "/",
	 		general: "锰"
	 	},
	 	{
	 		parameters_id: 29,
	 		parameters_name: "钴",
	 		detect_range: "0.05-2",
	 		precast_range: "0.05-1",
	 		cuvettes_range: "/",
	 		general: "钴"
	 	},
	 	{
	 		parameters_id: 30,
	 		parameters_name: "砷",
	 		detect_range: "0.1-2",
	 		precast_range: "0.1-2",
	 		cuvettes_range: "/",
	 		general: "砷"
	 	},
	 	{
	 		parameters_id: 31,
	 		parameters_name: "总银",
	 		detect_range: "0.05-0.4",
	 		precast_range: "0.05-0.4",
	 		cuvettes_range: "/",
	 		general: "总银"
	 	},
	 	{
	 		parameters_id: 32,
	 		parameters_name: "总铅",
	 		detect_range: "0.2-2",
	 		precast_range: "0-2",
	 		cuvettes_range: "/",
	 		general: "总铅"
	 	},
	 	{
	 		parameters_id: 33,
	 		parameters_name: "高猛酸盐指数",
	 		detect_range: "0.5-5",
	 		precast_range: "0.5-5",
	 		cuvettes_range: "/",
	 		general: "高猛酸盐指数"
	 	},
	 	{
	 		parameters_id: 34,
	 		parameters_name: "总氯",
	 		detect_range: "0.1-2",
	 		precast_range: "0.1-5",
	 		cuvettes_range: "/",
	 		general: "总氯"
	 	},
	 	{
	 		parameters_id: 35,
	 		parameters_name: "余氯",
	 		detect_range: "0.1-2",
	 		precast_range: "0.05-2",
	 		cuvettes_range: "/",
	 		general: "余氯"
	 	},
	 	{
	 		parameters_id: 36,
	 		parameters_name: "二氧化氯",
	 		detect_range: "0.1-2",
	 		precast_range: "0.2-2",
	 		cuvettes_range: "/",
	 		general: "二氧化氯"
	 	},
	 	{
	 		parameters_id: 37,
	 		parameters_name: "氯化物",
	 		detect_range: "1-50",
	 		precast_range: "2-20",
	 		cuvettes_range: "/",
	 		general: "氯化物"
	 	},
	 	{
	 		parameters_id: 38,
	 		parameters_name: "氰化物",
	 		detect_range: "0.05-0.8",
	 		precast_range: "0.05-0.5",
	 		cuvettes_range: "/",
	 		general: "氰化物"
	 	},
	 	{
	 		parameters_id: 39,
	 		parameters_name: "氟化物",
	 		detect_range: "0.1-1.5",
	 		precast_range: "0.05-1",
	 		cuvettes_range: "/",
	 		general: "氟化物"
	 	},
	 	{
	 		parameters_id: 40,
	 		parameters_name: "硫化物",
	 		detect_range: "0.1-2",
	 		precast_range: "0.05-2",
	 		cuvettes_range: "/",
	 		general: "硫化物"
	 	},
	 	{
	 		parameters_id: 41,
	 		parameters_name: "硫酸盐",
	 		detect_range: "5-60",
	 		precast_range: "/",
	 		cuvettes_range: "/",
	 		general: "硫酸盐"
	 	},
	 	{
	 		parameters_id: 42,
	 		parameters_name: "二氧化硅",
	 		detect_range: "0.2-7",
	 		precast_range: "/",
	 		cuvettes_range: "/",
	 		general: "二氧化硅"
	 	},
	 	{
	 		parameters_id: 43,
	 		parameters_name: "过氧化氢",
	 		detect_range: "1-25",
	 		precast_range: "1-25",
	 		cuvettes_range: "/",
	 		general: "过氧化氢"
	 	},
	 	{
	 		parameters_id: 44,
	 		parameters_name: "挥发酚",
	 		detect_range: "0.2-5",
	 		precast_range: "0.2-5",
	 		cuvettes_range: "/",
	 		general: "挥发酚"
	 	},
	 	{
	 		parameters_id: 45,
	 		parameters_name: "甲醛",
	 		detect_range: "0.2-3",
	 		precast_range: "0.2-3",
	 		cuvettes_range: "/",
	 		general: "甲醛"
	 	},
	 	{
	 		parameters_id: 46,
	 		parameters_name: "维生素C",
	 		detect_range: "20-600",
	 		precast_range: "20-600",
	 		cuvettes_range: "/",
	 		general: "维生素C"
	 	},
	 	{
	 		parameters_id: 47,
	 		parameters_name: "苯胺",
	 		detect_range: "0.05-4",
	 		precast_range: "/",
	 		cuvettes_range: "/",
	 		general: "苯胺"
	 	},
	 	{
	 		parameters_id: 48,
	 		parameters_name: "溶解氧",
	 		detect_range: "0-8",
	 		precast_range: "/",
	 		cuvettes_range: "/",
	 		general: "溶解氧"
	 	},
	 	{
	 		parameters_id: 49,
	 		parameters_name: "PH",
	 		detect_range: "6.5-8.5",
	 		precast_range: "/",
	 		cuvettes_range: "/",
	 		general: "PH"
	 	},
	 	{
	 		parameters_id: 50,
	 		parameters_name: "色度",
	 		detect_range: "50-500",
	 		precast_range: "0-500",
	 		cuvettes_range: "/",
	 		general: "色度"
	 	},
	 	{
	 		parameters_id: 51,
	 		parameters_name: "浊度",
	 		detect_range: "1-400",
	 		precast_range: "/",
	 		cuvettes_range: "/",
	 		general: "浊度"
	 	},
	 	{
	 		parameters_id: 52,
	 		parameters_name: "六价铬",
	 		detect_range: "0.05-1",
	 		precast_range: "0.05-1",
	 		cuvettes_range: "/",
	 		general: "六价铬"
	 	},
	 	{
	 		parameters_id: 53,
	 		parameters_name: "锑",
	 		detect_range: "0.05-2",
	 		precast_range: "0.1-2",
	 		cuvettes_range: "/",
	 		general: "锑"
	 	}
	 	 ],
  },
  {
  	  goods_id: 5,
	  category: '仪器类',
	  kind: '分析仪',
  	  img: [
  		{ id: '1', url: 'https://b2b-material.cdn.bcebos.com/FzjGiNq9qQPEusJpTEn0HRAB2bo.jpg' },
  		{ id: '2', url: 'https://b2b-material.cdn.bcebos.com/318zv6KBWs32SXFTHnBeERABJI8.jpg' },
  		{ id: '3', url: 'https://b2b-material.cdn.bcebos.com/f4jfLktD5779abYJiMeR5hABh5c.jpg' },
  		{ id: '4', url: 'https://b2b-material.cdn.bcebos.com/KcLCYd3xoMyHSc3oSebV3hABIKA.jpg' },
  		{ id: '5', url: 'https://b2b-material.cdn.bcebos.com/mGmXeu8zam3ImN2oy_lkvhABe5I.jpg' }
  	  ],
  	  name: 'SL-160实验室智能水质分析仪' ,
  	  price: '￥1.98万' ,
	  parameter: [
	  	{
	  			parameters_id: 1,
	  			parameters_name: "COD(超低)" ,
	  			detect_range: "5-100",
	  			precast_range: "5-100",
	  			cuvettes_range: "/",
	  			general: "COD"
	  		},
	  		{
	  			parameters_id: 2,
	  			parameters_name: "COD(低)" ,
	  			detect_range: "15-200",
	  			precast_range: "15-200",
	  			cuvettes_range: "25-300",
	  			general: "COD"
	  		},
	  		{
	  		parameters_id: 3,
	  		parameters_name: "COD(高)" ,
	  		detect_range: "100-1200",
	  		precast_range: "100-1200",
	  		cuvettes_range: "150-1500",
	  		general: "COD"
	  	},
	  	{
	  		parameters_id: 4,
	  		parameters_name: "COD(超高)" ,
	  		detect_range: "1000-10000",
	  		precast_range: "1200-10000",
	  		cuvettes_range: "/",
	  		general: "COD"
	  	},
	  	
	  	{
	  		parameters_id: 5,
	  		parameters_name: "总磷(低)",
	  		detect_range: "0.05-1",
	  		precast_range: "0.05-1",
	  		cuvettes_range: "0.1-1.5",
	  		general: "总磷"
	  	},
	  	{
	  		parameters_id: 6,
	  		parameters_name: "总磷(中)",
	  		detect_range: "/",
	  		precast_range: "0.2-5",
	  		cuvettes_range: "/",
	  		general: "总磷"
	  	},
	  	{
	  		parameters_id: 7,
	  		parameters_name: "总磷(高)",
	  		detect_range: "/",
	  		precast_range: "0.5-10",
	  		cuvettes_range: "/",
	  		general: "总磷"
	  	},
	  	{
	  		parameters_id: 8,
	  		parameters_name: "总磷(超高)",
	  		detect_range: "/",
	  		precast_range: "5-100",
	  		cuvettes_range: "/",
	  		general: "总磷"
	  	},
	  	{
	  		parameters_id: 9,
	  		parameters_name: "磷酸盐",
	  		detect_range: "0.05-1",
	  		precast_range: "0.05-1",
	  		cuvettes_range: "/",
			general: "磷酸盐"
	  	},
	  	{
	  		parameters_id: 10,
	  		parameters_name: "纳什氨氮(低)",
	  		detect_range: "0.1-5",
	  		precast_range: "0.2-5",
	  		cuvettes_range: "0.2-10",
	  		general: "纳氏氨氮"
	  	},
	  	{
	  		parameters_id: 11,
	  		parameters_name: "纳什氨氮(高)",
	  		detect_range: "0.5-30",
	  		precast_range: "1-50",
	  		cuvettes_range: "/",
	  		general: "纳氏氨氮"
	  	},
	  	{
	  		parameters_id: 12,
	  		parameters_name: "水杨酸氨氮(低)",
	  		detect_range: "0.05-2",
	  		precast_range: "0.1-2",
	  		cuvettes_range: "/",
	  		general: "水杨酸氨氮"
	  	},
	  	{
	  		parameters_id: 13,
	  		parameters_name: "水杨酸氨氮(高)",
	  		detect_range: "/",
	  		precast_range: "0-50",
	  		cuvettes_range: "/",
	  		general: "水杨酸氨氮"
	  	},
	  	{
	  		parameters_id: 14,
	  		parameters_name: "总氮(低)",
	  		detect_range: "0.5-20",
	  		precast_range: "0.5-20",
	  		cuvettes_range: "1-30",
	  		general: "总氮"
	  	},
	  	{
	  		parameters_id: 15,
	  		parameters_name: "总氮(高)",
	  		detect_range: "/",
	  		precast_range: "1-40",
	  		cuvettes_range: "1-30",
	  		general: "总氮"
	  	},
	  	{
	  		parameters_id: 16,
	  		parameters_name: "总氮(超高)",
	  		detect_range: "/",
	  		precast_range: "10-150",
	  		cuvettes_range: "/",
	  		general: "总氮"
	  	},
	  	{
	  		parameters_id: 17,
	  		parameters_name: "硝酸盐氮",
	  		detect_range: "0.5-25",
	  		precast_range: "1-20",
	  		cuvettes_range: "/",
	  		general: "硝酸盐氮"
	  	},
	  	{
	  		parameters_id: 18,
	  		parameters_name: "亚硝酸盐氮",
	  		detect_range: "0.02-0.5",
	  		precast_range: "0.02-0.5",
	  		cuvettes_range: "/",
	  		general: "亚硝酸盐氮"
	  	},
	  	{
	  		parameters_id: 19,
	  		parameters_name: "总铜(PAN)",
	  		detect_range: "0.05-2",
	  		precast_range: "0.05-2",
	  		cuvettes_range: "/",
	  		general: "总铜"
	  	},
	  	{
	  		parameters_id: 20,
	  		parameters_name: "总铜(BCA)",
	  		detect_range: "0.2-5",
	  		precast_range: "0.2-5",
	  		cuvettes_range: "/",
	  		general: "总铜"
	  	},
	  	{
	  		parameters_id: 21,
	  		parameters_name: "总镍",
	  		detect_range: "0.05-0.8",
	  		precast_range: "0.05-0.8",
	  		cuvettes_range: "/",
	  		general: "总镍"
	  	},
	  	{
	  		parameters_id: 22,
	  		parameters_name: "总铬",
	  		detect_range: "0.05-1",
	  		precast_range: "0.05-1",
	  		cuvettes_range: "/",
	  		general: "总铬"
	  	},
	  	{
	  		parameters_id: 23,
	  		parameters_name: "总镉",
	  		detect_range: "0.05-0.5",
	  		precast_range: "0.1-1",
	  		cuvettes_range: "/",
	  		general: "总镉"
	  	},
	  	{
	  		parameters_id: 24,
	  		parameters_name: "总汞",
	  		detect_range: "0.1-1",
	  		precast_range: "0.2-5",
	  		cuvettes_range: "/",
	  		general: "总汞"
	  	},
	  	{
	  		parameters_id: 25,
	  		parameters_name: "总锌",
	  		detect_range: "0.02-0.5",
	  		precast_range: "0.02-0.5",
	  		cuvettes_range: "/",
	  		general: "总锌"
	  	},
	  	{
	  		parameters_id: 26,
	  		parameters_name: "总铁",
	  		detect_range: "0.05-2",
	  		precast_range: "0.1-2",
	  		cuvettes_range: "/",
	  		general: "总铁"
	  	},
	  	{
	  		parameters_id: 27,
	  		parameters_name: "二价铁",
	  		detect_range: "0.05-2",
	  		precast_range: "0.1-2",
	  		cuvettes_range: "/",
	  		general: "二价铁"
	  	},
	  	{
	  		parameters_id: 28,
	  		parameters_name: "锰",
	  		detect_range: "0.05-0.5",
	  		precast_range: "0.05-0.5",
	  		cuvettes_range: "/",
	  		general: "锰"
	  	},
	  	{
	  		parameters_id: 29,
	  		parameters_name: "钴",
	  		detect_range: "0.05-2",
	  		precast_range: "0.05-1",
	  		cuvettes_range: "/",
	  		general: "钴"
	  	},
	  	{
	  		parameters_id: 30,
	  		parameters_name: "砷",
	  		detect_range: "0.1-2",
	  		precast_range: "0.1-2",
	  		cuvettes_range: "/",
	  		general: "砷"
	  	},
	  	{
	  		parameters_id: 31,
	  		parameters_name: "总银",
	  		detect_range: "0.05-0.4",
	  		precast_range: "0.05-0.4",
	  		cuvettes_range: "/",
	  		general: "总银"
	  	},
	  	{
	  		parameters_id: 32,
	  		parameters_name: "总铅",
	  		detect_range: "0.2-2",
	  		precast_range: "0-2",
	  		cuvettes_range: "/",
	  		general: "总铅"
	  	},
	  	{
	  		parameters_id: 33,
	  		parameters_name: "高猛酸盐指数",
	  		detect_range: "0.5-5",
	  		precast_range: "0.5-5",
	  		cuvettes_range: "/",
	  		general: "高猛酸盐指数"
	  	},
	  	{
	  		parameters_id: 34,
	  		parameters_name: "总氯",
	  		detect_range: "0.1-2",
	  		precast_range: "0.1-5",
	  		cuvettes_range: "/",
	  		general: "总氯"
	  	},
	  	{
	  		parameters_id: 35,
	  		parameters_name: "余氯",
	  		detect_range: "0.1-2",
	  		precast_range: "0.05-2",
	  		cuvettes_range: "/",
	  		general: "余氯"
	  	},
	  	{
	  		parameters_id: 36,
	  		parameters_name: "二氧化氯",
	  		detect_range: "0.1-2",
	  		precast_range: "0.2-2",
	  		cuvettes_range: "/",
	  		general: "二氧化氯"
	  	},
	  	{
	  		parameters_id: 37,
	  		parameters_name: "氯化物",
	  		detect_range: "1-50",
	  		precast_range: "2-20",
	  		cuvettes_range: "/",
	  		general: "氯化物"
	  	},
	  	{
	  		parameters_id: 38,
	  		parameters_name: "氰化物",
	  		detect_range: "0.05-0.8",
	  		precast_range: "0.05-0.5",
	  		cuvettes_range: "/",
	  		general: "氰化物"
	  	},
	  	{
	  		parameters_id: 39,
	  		parameters_name: "氟化物",
	  		detect_range: "0.1-1.5",
	  		precast_range: "0.05-1",
	  		cuvettes_range: "/",
	  		general: "氟化物"
	  	},
	  	{
	  		parameters_id: 40,
	  		parameters_name: "硫化物",
	  		detect_range: "0.1-2",
	  		precast_range: "0.05-2",
	  		cuvettes_range: "/",
	  		general: "硫化物"
	  	},
	  	{
	  		parameters_id: 41,
	  		parameters_name: "硫酸盐",
	  		detect_range: "5-60",
	  		precast_range: "/",
	  		cuvettes_range: "/",
	  		general: "硫酸盐"
	  	},
	  	{
	  		parameters_id: 42,
	  		parameters_name: "二氧化硅",
	  		detect_range: "0.2-7",
	  		precast_range: "/",
	  		cuvettes_range: "/",
	  		general: "二氧化硅"
	  	},
	  	{
	  		parameters_id: 43,
	  		parameters_name: "过氧化氢",
	  		detect_range: "1-25",
	  		precast_range: "1-25",
	  		cuvettes_range: "/",
	  		general: "过氧化氢"
	  	},
	  	{
	  		parameters_id: 44,
	  		parameters_name: "挥发酚",
	  		detect_range: "0.2-5",
	  		precast_range: "0.2-5",
	  		cuvettes_range: "/",
	  		general: "挥发酚"
	  	},
	  	{
	  		parameters_id: 45,
	  		parameters_name: "甲醛",
	  		detect_range: "0.2-3",
	  		precast_range: "0.2-3",
	  		cuvettes_range: "/",
	  		general: "甲醛"
	  	},
	  	{
	  		parameters_id: 46,
	  		parameters_name: "维生素C",
	  		detect_range: "20-600",
	  		precast_range: "20-600",
	  		cuvettes_range: "/",
	  		general: "维生素C"
	  	},
	  	{
	  		parameters_id: 47,
	  		parameters_name: "苯胺",
	  		detect_range: "0.05-4",
	  		precast_range: "/",
	  		cuvettes_range: "/",
	  		general: "苯胺"
	  	},
	  	{
	  		parameters_id: 48,
	  		parameters_name: "溶解氧",
	  		detect_range: "0-8",
	  		precast_range: "/",
	  		cuvettes_range: "/",
	  		general: "溶解氧"
	  	},
	  	{
	  		parameters_id: 49,
	  		parameters_name: "PH",
	  		detect_range: "6.5-8.5",
	  		precast_range: "/",
	  		cuvettes_range: "/",
	  		general: "PH"
	  	},
	  	{
	  		parameters_id: 50,
	  		parameters_name: "色度",
	  		detect_range: "50-500",
	  		precast_range: "0-500",
	  		cuvettes_range: "/",
	  		general: "色度"
	  	},
	  	{
	  		parameters_id: 51,
	  		parameters_name: "浊度",
	  		detect_range: "1-400",
	  		precast_range: "/",
	  		cuvettes_range: "/",
	  		general: "浊度"
	  	},
	  	{
	  		parameters_id: 52,
	  		parameters_name: "六价铬",
	  		detect_range: "0.05-1",
	  		precast_range: "0.05-1",
	  		cuvettes_range: "/",
	  		general: "六价铬"
	  	},
	  	{
	  		parameters_id: 53,
	  		parameters_name: "锑",
	  		detect_range: "0.05-2",
	  		precast_range: "0.1-2",
	  		cuvettes_range: "/",
	  		general: "锑"
	  	}
	  	 ],
  },
  {
  	  goods_id: 6,
	  category: '仪器类',
	  kind: '分析仪',
  	  img: [
  		{ id: '1', url: 'https://b2b-material.cdn.bcebos.com/0juwVS_CBep5eqcH9_kW9RAB0D0.jpg' },
  		{ id: '2', url: 'https://b2b-material.cdn.bcebos.com/318zv6KBWs32SXFTHnBeERABJI8.jpg' },
  		{ id: '3', url: 'https://b2b-material.cdn.bcebos.com/f4jfLktD5779abYJiMeR5hABh5c.jpg' },
  		{ id: '4', url: 'https://b2b-material.cdn.bcebos.com/KcLCYd3xoMyHSc3oSebV3hABIKA.jpg' },
  		{ id: '5', url: 'https://b2b-material.cdn.bcebos.com/mGmXeu8zam3ImN2oy_lkvhABe5I.jpg' }
  	  ],
  	  name: 'SL-105实验室智能水质分析仪' ,
  	  price: '￥1.98万',
	 parameter: [
	 		 {
	 		 		parameters_id: 1,
	 		 		parameters_name: "COD(超低)" ,
	 		 		detect_range: "5-100",
	 		 		precast_range: "5-100",
	 		 		cuvettes_range: "/",
	 		 		general: "COD"
	 		 	},
	 		 	{
	 		 		parameters_id: 2,
	 		 		parameters_name: "COD(低)" ,
	 		 		detect_range: "15-200",
	 		 		precast_range: "15-200",
	 		 		cuvettes_range: "25-300",
	 		 		general: "COD"
	 		 	},
	 		 	{
	 		 	parameters_id: 3,
	 		 	parameters_name: "COD(高)" ,
	 		 	detect_range: "100-1200",
	 		 	precast_range: "100-1200",
	 		 	cuvettes_range: "150-1500",
	 		 	general: "COD"
	 		 },
	 		 {
	 		 	parameters_id: 4,
	 		 	parameters_name: "COD(超高)" ,
	 		 	detect_range: "1000-10000",
	 		 	precast_range: "1200-10000",
	 		 	cuvettes_range: "/",
	 		 	general: "COD"
	 		 },
	 		 
	 		 {
	 		 	parameters_id: 5,
	 		 	parameters_name: "总磷(低)",
	 		 	detect_range: "0.05-1",
	 		 	precast_range: "0.05-1",
	 		 	cuvettes_range: "0.1-1.5",
	 		 	general: "总磷"
	 		 },
	 		 {
	 		 	parameters_id: 6,
	 		 	parameters_name: "总磷(中)",
	 		 	detect_range: "/",
	 		 	precast_range: "0.2-5",
	 		 	cuvettes_range: "/",
	 		 	general: "总磷"
	 		 },
	 		 {
	 		 	parameters_id: 7,
	 		 	parameters_name: "总磷(高)",
	 		 	detect_range: "/",
	 		 	precast_range: "0.5-10",
	 		 	cuvettes_range: "/",
	 		 	general: "总磷"
	 		 },
	 		 {
	 		 	parameters_id: 8,
	 		 	parameters_name: "总磷(超高)",
	 		 	detect_range: "/",
	 		 	precast_range: "5-100",
	 		 	cuvettes_range: "/",
	 		 	general: "总磷"
	 		 },
	 		 {
	 		 	parameters_id: 9,
	 		 	parameters_name: "磷酸盐",
	 		 	detect_range: "0.05-1",
	 		 	precast_range: "0.05-1",
	 		 	cuvettes_range: "/",
				general: "磷酸盐"
	 		 },
	 		 {
	 		 	parameters_id: 10,
	 		 	parameters_name: "纳什氨氮(低)",
	 		 	detect_range: "0.1-5",
	 		 	precast_range: "0.2-5",
	 		 	cuvettes_range: "0.2-10",
	 		 	general: "纳氏氨氮"
	 		 },
	 		 {
	 		 	parameters_id: 11,
	 		 	parameters_name: "纳什氨氮(高)",
	 		 	detect_range: "0.5-30",
	 		 	precast_range: "1-50",
	 		 	cuvettes_range: "/",
	 		 	general: "纳氏氨氮"
	 		 },
	 		 {
	 		 	parameters_id: 12,
	 		 	parameters_name: "水杨酸氨氮(低)",
	 		 	detect_range: "0.05-2",
	 		 	precast_range: "0.1-2",
	 		 	cuvettes_range: "/",
	 		 	general: "水杨酸氨氮"
	 		 },
	 		 {
	 		 	parameters_id: 13,
	 		 	parameters_name: "水杨酸氨氮(高)",
	 		 	detect_range: "/",
	 		 	precast_range: "0-50",
	 		 	cuvettes_range: "/",
	 		 	general: "水杨酸氨氮"
	 		 },
	 		 {
	 		 	parameters_id: 14,
	 		 	parameters_name: "总氮(低)",
	 		 	detect_range: "0.5-20",
	 		 	precast_range: "0.5-20",
	 		 	cuvettes_range: "1-30",
	 		 	general: "总氮"
	 		 },
	 		 {
	 		 	parameters_id: 15,
	 		 	parameters_name: "总氮(高)",
	 		 	detect_range: "/",
	 		 	precast_range: "1-40",
	 		 	cuvettes_range: "1-30",
	 		 	general: "总氮"
	 		 },
	 		 {
	 		 	parameters_id: 16,
	 		 	parameters_name: "总氮(超高)",
	 		 	detect_range: "/",
	 		 	precast_range: "10-150",
	 		 	cuvettes_range: "/",
	 		 	general: "总氮"
	 		 },
	 		 
	 	  ]
  },
  {
  	  goods_id: 7,
	  category: '仪器类',
	  kind: '分析仪',
  	  img: [
  		{ id: '1', url: 'https://b2b-material.cdn.bcebos.com/KsdaXWSdeM6037nOL_bfixAB09E.jpg' },
  		{ id: '2', url: 'https://b2b-material.cdn.bcebos.com/318zv6KBWs32SXFTHnBeERABJI8.jpg' },
  		{ id: '3', url: 'https://b2b-material.cdn.bcebos.com/f4jfLktD5779abYJiMeR5hABh5c.jpg' },
  		{ id: '4', url: 'https://b2b-material.cdn.bcebos.com/KcLCYd3xoMyHSc3oSebV3hABIKA.jpg' },
  		{ id: '5', url: 'https://b2b-material.cdn.bcebos.com/mGmXeu8zam3ImN2oy_lkvhABe5I.jpg' }
  	  ],
  	  name: 'SL104实验室智能水质分析仪' ,
  	  price: '￥1.48万' ,
	  parameter: [
	  		  {
	  		  		parameters_id: 1,
	  		  		parameters_name: "COD(超低)" ,
	  		  		detect_range: "5-100",
	  		  		precast_range: "5-100",
	  		  		cuvettes_range: "/",
	  		  		general: "COD"
	  		  	},
	  		  	{
	  		  		parameters_id: 2,
	  		  		parameters_name: "COD(低)" ,
	  		  		detect_range: "15-200",
	  		  		precast_range: "15-200",
	  		  		cuvettes_range: "25-300",
	  		  		general: "COD"
	  		  	},
	  		  	{
	  		  	parameters_id: 3,
	  		  	parameters_name: "COD(高)" ,
	  		  	detect_range: "100-1200",
	  		  	precast_range: "100-1200",
	  		  	cuvettes_range: "150-1500",
	  		  	general: "COD"
	  		  },
	  		  {
	  		  	parameters_id: 4,
	  		  	parameters_name: "COD(超高)" ,
	  		  	detect_range: "1000-10000",
	  		  	precast_range: "1200-10000",
	  		  	cuvettes_range: "/",
	  		  	general: "COD"
	  		  },
	  		  
	  		  {
	  		  	parameters_id: 5,
	  		  	parameters_name: "总磷(低)",
	  		  	detect_range: "0.05-1",
	  		  	precast_range: "0.05-1",
	  		  	cuvettes_range: "0.1-1.5",
	  		  	general: "总磷"
	  		  },
	  		  {
	  		  	parameters_id: 6,
	  		  	parameters_name: "总磷(中)",
	  		  	detect_range: "/",
	  		  	precast_range: "0.2-5",
	  		  	cuvettes_range: "/",
	  		  	general: "总磷"
	  		  },
	  		  {
	  		  	parameters_id: 7,
	  		  	parameters_name: "总磷(高)",
	  		  	detect_range: "/",
	  		  	precast_range: "0.5-10",
	  		  	cuvettes_range: "/",
	  		  	general: "总磷"
	  		  },
	  		  {
	  		  	parameters_id: 8,
	  		  	parameters_name: "总磷(超高)",
	  		  	detect_range: "/",
	  		  	precast_range: "5-100",
	  		  	cuvettes_range: "/",
	  		  	general: "总磷"
	  		  },
	  		  {
	  		  	parameters_id: 9,
	  		  	parameters_name: "磷酸盐",
	  		  	detect_range: "0.05-1",
	  		  	precast_range: "0.05-1",
	  		  	cuvettes_range: "/",
	  		  	general: "磷酸盐"
	  		  },
	  		  {
	  		  	parameters_id: 10,
	  		  	parameters_name: "纳什氨氮(低)",
	  		  	detect_range: "0.1-5",
	  		  	precast_range: "0.2-5",
	  		  	cuvettes_range: "0.2-10",
	  		  	general: "纳氏氨氮"
	  		  },
	  		  {
	  		  	parameters_id: 11,
	  		  	parameters_name: "纳什氨氮(高)",
	  		  	detect_range: "0.5-30",
	  		  	precast_range: "1-50",
	  		  	cuvettes_range: "/",
	  		  	general: "纳氏氨氮"
	  		  },
	  		  {
	  		  	parameters_id: 12,
	  		  	parameters_name: "水杨酸氨氮(低)",
	  		  	detect_range: "0.05-2",
	  		  	precast_range: "0.1-2",
	  		  	cuvettes_range: "/",
	  		  	general: "水杨酸氨氮"
	  		  },
	  		  {
	  		  	parameters_id: 13,
	  		  	parameters_name: "水杨酸氨氮(高)",
	  		  	detect_range: "/",
	  		  	precast_range: "0-50",
	  		  	cuvettes_range: "/",
	  		  	general: "水杨酸氨氮"
	  		  },
	  		  {
	  		  	parameters_id: 14,
	  		  	parameters_name: "总氮(低)",
	  		  	detect_range: "0.5-20",
	  		  	precast_range: "0.5-20",
	  		  	cuvettes_range: "1-30",
	  		  	general: "总氮"
	  		  },
	  		  {
	  		  	parameters_id: 15,
	  		  	parameters_name: "总氮(高)",
	  		  	detect_range: "/",
	  		  	precast_range: "1-40",
	  		  	cuvettes_range: "1-30",
	  		  	general: "总氮"
	  		  },
	  		  {
	  		  	parameters_id: 16,
	  		  	parameters_name: "总氮(超高)",
	  		  	detect_range: "/",
	  		  	precast_range: "10-150",
	  		  	cuvettes_range: "/",
	  		  	general: "总氮"
	  		  },
	  		  
	  	  ]	
  },
  {
  	  goods_id: 8,
	  category: '仪器类',
	  kind: '分析仪',
  	  img: [
  		{ id: '1', url: 'https://b2b-material.cdn.bcebos.com/OwcJXZ1QxlQVo_WFZdRI2RAB6lE.jpg' },
  		{ id: '2', url: 'https://b2b-material.cdn.bcebos.com/Ud2sVbbMJQrxHKAz38geixAAwwY.jpg' },
  		{ id: '3', url: 'https://b2b-material.cdn.bcebos.com/AecAfT5e3I-BUGK53kBNKhABY7g.jpg' },
  		{ id: '4', url: 'https://b2b-material.cdn.bcebos.com/y_dsMzX61Q1O3pBVsBwSmhABCrk.jpg' },
  		{ id: '5', url: 'https://b2b-material.cdn.bcebos.com/LnqNuZTBZayve0hEvbFxVBABGw4.jpg' }
  	  ],
  	  name: '芬克FENK PFIA-102-TP/P流动注射分析仪' ,
  	  price: '￥10.80万',
  	  parameter: [
		  {
			  parameters_id: 0,
			  parameters_name: "总磷",
			  range: "",
			  general: "总磷"
		  },
		  {
			  parameters_id: 1,
			  parameters_name: "磷酸盐",
			  range: "",
			  general: "磷酸盐"
		  }
	  ],
  },
  {
  	  goods_id: 9,
	  category: '仪器类',
	  kind: '消解仪',
  	  img: [
  		{ id: '1', url: 'https://b2b-material.cdn.bcebos.com/VF8jzJDjCw6h3xfDeG2yihACIXI.jpg' },
  		{ id: '2', url: 'https://b2b-material.cdn.bcebos.com/N5t_1t4Tc1xu9HUhV4-qzhABFnE.jpg' },
  		{ id: '3', url: 'https://b2b-material.cdn.bcebos.com/_IT1-Ix1cqo8B_-CAMRl2RABAI8.jpg' },
  		{ id: '4', url: 'https://b2b-material.cdn.bcebos.com/mu3NUI0VgX2YZw1iYHu5GhABD5k.jpg' },
  		{ id: '5', url: 'https://b2b-material.cdn.bcebos.com/nm1Qmu2TyLTV1w3zCT7T6RABBVg.jpg' }
  	  ],
  	  name: '芬克双温区消解仪' ,
  	  price: '￥1.09万' ,
	  parameter: [
		  {
		  		parameters_id: 0,
		  		parameters_name: "COD",
		  		range: "",
		  		general: "COD"
		  	},
		  	{
		  		parameters_id: 1,
		  		parameters_name: "总磷",
		  		range: "",
		  		general: "总磷"
		  	},
		  	{
		  		parameters_id: 2,
		  		parameters_name: "总氮",
		  		range: "",
		  		general: "总氮"
		  	},
		  	{
		  		parameters_id: 3,
		  		parameters_name: "总铁",
		  		range: "",
		  		general: "总铁"
		  	},
		  	{
		  		parameters_id: 4,
		  		parameters_name: "总铬",
		  		range: "",
		  		general: "总铬"
		  	},
		  	{
		  		parameters_id: 5,
		  		parameters_name: "高锰酸盐",
		  		range: "",
		  		general: "高锰酸盐"
		  	}
	  ]
  },
  {
  	  goods_id: 10,
	  category: '仪器类',
	  kind: '比色计',
  	  img: [
  		{ id: '1', url: 'https://b2b-material.cdn.bcebos.com/15wMCU3bZBHsDXxdGC56chACqVU.jpg' },
  		{ id: '2', url: 'https://b2b-material.cdn.bcebos.com/tdjbxBgdfXCq9vHlAVzY5BABR0w.jpg' },
  		{ id: '3', url: 'https://b2b-material.cdn.bcebos.com/8s68dcm9lg-5MgGVdXDk4xABY0Y.jpg' },
  		{ id: '4', url: 'https://b2b-material.cdn.bcebos.com/Blv94r8lzkq46oCkzSioPxABnTg.jpg' },
		{ id: '5', url: 'https://b2b-material.cdn.bcebos.com/D6qSICHvHbWfB3bAWadmIhABfB8.jpg' },
		{ id: '6', url: 'https://b2b-material.cdn.bcebos.com/xTg2Gv6owQ1fHW7y4h_fGhAA-w4.jpg' }
  	  ],
  	  name: '芬克 RCP-110T污染排查蓝牙比色套装' ,
  	  price: '￥6688.00' ,
  	  parameter: [
  	  		  {
  	  		  		parameters_id: 0,
  	  		  		parameters_name: "磷酸盐",
  	  		  		range: "0.2-3.5",
  	  		  		general: "磷酸盐"
  	  		  	},
  	  		  	{
  	  		  		parameters_id: 1,
  	  		  		parameters_name: "纳什氨氮",
  	  		  		range: "0.2-10",
  	  		  		general: "纳什氨氮"
  	  		  	},
  	  		  	{
  	  		  		parameters_id: 2,
  	  		  		parameters_name: "水杨酸氨氮",
  	  		  		range: "0.1-1.5",
  	  		  		general: "水杨酸氨氮"
  	  		  	},
  	  		  	{
  	  		  		parameters_id: 3,
  	  		  		parameters_name: "总氯",
  	  		  		range: "0.1-10",
  	  		  		general: "总氯"
  	  		  	},
  	  		  	{
  	  		  		parameters_id: 4,
  	  		  		parameters_name: "余氯",
  	  		  		range: "0.1-10",
  	  		  		general: "余氯"
  	  		  	},
  	  		  	{
  	  		  		parameters_id: 5,
  	  		  		parameters_name: "铜",
  	  		  		range: "0.2-5",
  	  		  		general: "铜"
  	  		  	},
  	  		  	{
  	  		  		parameters_id: 6,
  	  		  		parameters_name: "镍",
  	  		  		range: "0.1-10",
  	  		  		general: "镍"
  	  		  	},
  	  		  	{
  	  		  		parameters_id: 7,
  	  		  		parameters_name: "六价铬",
  	  		  		range: "0.05-2",
  	  		  		general: "六价铬"
  	  		  	},
  	  		  	{
  	  		  		parameters_id: 8,
  	  		  		parameters_name: "硝态氮",
  	  		  		range: "0.2-10",
  	  		  		general: "硝态氮"
  	  		  	},
  	  		  	{
  	  		  		parameters_id: 9,
  	  		  		parameters_name: "亚硝态氮",
  	  		  		range: "0.05-1",
  	  		  		general: "亚硝态氮"
  	  		  	}
  	  		  // {
  	  		  // 	  parameters_id: 10,
  	  		  // 	  parameters_name: "阴离子",
  	  		  // 	  range: ""
  	  		  // },
  	  	  ] ,
  },
  {
  	  goods_id: 11	,
	  category: '仪器类',
	  kind: '比色计',
  	  img: [
  		{ id: '1', url: 'https://b2b-material.cdn.bcebos.com/8Vb5jacg7dwXoP1RJqN2ZBACqYI.jpg' },
  		{ id: '2', url: 'https://b2b-material.cdn.bcebos.com/tdjbxBgdfXCq9vHlAVzY5BABR0w.jpg' },
  		{ id: '3', url: 'https://b2b-material.cdn.bcebos.com/8s68dcm9lg-5MgGVdXDk4xABY0Y.jpg' },
  		{ id: '4', url: 'https://b2b-material.cdn.bcebos.com/Blv94r8lzkq46oCkzSioPxABnTg.jpg' },
  		{ id: '5', url: 'https://b2b-material.cdn.bcebos.com/D6qSICHvHbWfB3bAWadmIhABfB8.jpg' },
		{ id: '6', url: 'https://b2b-material.cdn.bcebos.com/xTg2Gv6owQ1fHW7y4h_fGhAA-w4.jpg' }
  	  ],
  	  name: 'RCP104T污染排查蓝牙比色套装' ,
  	  price: '￥4688.00' ,
  	 parameter: [
  	 		  {
  	 		  		parameters_id: 0,
  	 		  		parameters_name: "磷酸盐",
  	 		  		range: "0.2-3.5",
  	 		  		general: "磷酸盐"
  	 		  	},
  	 		  	{
  	 		  		parameters_id: 1,
  	 		  		parameters_name: "纳什氨氮",
  	 		  		range: "0.2-10",
  	 		  		general: "纳什氨氮"
  	 		  	},
  	 		  	{
  	 		  		parameters_id: 2,
  	 		  		parameters_name: "水杨酸氨氮",
  	 		  		range: "0.1-1.5",
  	 		  		general: "水杨酸氨氮"
  	 		  	},
  	 		  	{
  	 		  		parameters_id: 3,
  	 		  		parameters_name: "总氯",
  	 		  		range: "0.1-10",
  	 		  		general: "总氯"
  	 		  	},
  	 		  	{
  	 		  		parameters_id: 4,
  	 		  		parameters_name: "余氯",
  	 		  		range: "0.1-10",
  	 		  		general: "余氯"
  	 		  	},
  	 		  	{
  	 		  		parameters_id: 5,
  	 		  		parameters_name: "铜",
  	 		  		range: "0.2-5",
  	 		  		general: "铜"
  	 		  	},
  	 		  	{
  	 		  		parameters_id: 6,
  	 		  		parameters_name: "镍",
  	 		  		range: "0.1-10",
  	 		  		general: "镍"
  	 		  	},
  	 		  	{
  	 		  		parameters_id: 7,
  	 		  		parameters_name: "六价铬",
  	 		  		range: "0.05-2",
  	 		  		general: "六价铬"
  	 		  	},
  	 		  	{
  	 		  		parameters_id: 8,
  	 		  		parameters_name: "硝态氮",
  	 		  		range: "0.2-10",
  	 		  		general: "硝态氮"
  	 		  	},
  	 		  	{
  	 		  		parameters_id: 9,
  	 		  		parameters_name: "亚硝态氮",
  	 		  		range: "0.05-1",
  	 		  		general: "亚硝态氮"
  	 		  	}
  	 		  // {
  	 		  // 	  parameters_id: 10,
  	 		  // 	  parameters_name: "阴离子",
  	 		  // 	  range: ""
  	 		  // },
  	 	  ] ,
  },
  {
  	  goods_id: 12,
	  category: '仪器类',
	  kind: '比色计',
  	  img: [
  		{ id: '1', url: 'https://b2b-material.cdn.bcebos.com/AEq4m2pxczRJpUFdYfOxQBACZ8s.jpg' },
  		{ id: '2', url: 'https://b2b-material.cdn.bcebos.com/tdjbxBgdfXCq9vHlAVzY5BABR0w.jpg' },
  		{ id: '3', url: 'https://b2b-material.cdn.bcebos.com/8s68dcm9lg-5MgGVdXDk4xABY0Y.jpg' },
  		{ id: '4', url: 'https://b2b-material.cdn.bcebos.com/Blv94r8lzkq46oCkzSioPxABnTg.jpg' },
  		{ id: '5', url: 'https://b2b-material.cdn.bcebos.com/D6qSICHvHbWfB3bAWadmIhABfB8.jpg' },
		{ id: '6', url: 'https://b2b-material.cdn.bcebos.com/xTg2Gv6owQ1fHW7y4h_fGhAA-w4.jpg' }
  	  ],
  	  name: '芬克FENK RCP-104C蓝牙比色计' ,
  	  price: '￥5688.00' ,
	 parameter: [
	 		  {
	 		  		parameters_id: 0,
	 		  		parameters_name: "磷酸盐",
	 		  		range: "0.2-3.5",
	 		  		general: "磷酸盐"
	 		  	},
	 		  	{
	 		  		parameters_id: 1,
	 		  		parameters_name: "纳什氨氮",
	 		  		range: "0.2-10",
	 		  		general: "纳什氨氮"
	 		  	},
	 		  	{
	 		  		parameters_id: 2,
	 		  		parameters_name: "水杨酸氨氮",
	 		  		range: "0.1-1.5",
	 		  		general: "水杨酸氨氮"
	 		  	},
	 		  	{
	 		  		parameters_id: 3,
	 		  		parameters_name: "总氯",
	 		  		range: "0.1-10",
	 		  		general: "总氯"
	 		  	},
	 		  	{
	 		  		parameters_id: 4,
	 		  		parameters_name: "余氯",
	 		  		range: "0.1-10",
	 		  		general: "余氯"
	 		  	},
	 		  	{
	 		  		parameters_id: 5,
	 		  		parameters_name: "铜",
	 		  		range: "0.2-5",
	 		  		general: "铜"
	 		  	},
	 		  	{
	 		  		parameters_id: 6,
	 		  		parameters_name: "镍",
	 		  		range: "0.1-10",
	 		  		general: "镍"
	 		  	},
	 		  	{
	 		  		parameters_id: 7,
	 		  		parameters_name: "六价铬",
	 		  		range: "0.05-2",
	 		  		general: "六价铬"
	 		  	},
	 		  	{
	 		  		parameters_id: 8,
	 		  		parameters_name: "硝态氮",
	 		  		range: "0.2-10",
	 		  		general: "硝态氮"
	 		  	},
	 		  	{
	 		  		parameters_id: 9,
	 		  		parameters_name: "亚硝态氮",
	 		  		range: "0.05-1",
	 		  		general: "亚硝态氮"
	 		  	}
	 		  // {
	 		  // 	  parameters_id: 10,
	 		  // 	  parameters_name: "阴离子",
	 		  // 	  range: ""
	 		  // },
	 	  ] ,
  },
  {
  	  goods_id: 13	,
	  category: '仪器类',
	  kind: '比色计',
  	  img: [
  		{ id: '1', url: 'https://b2b-material.cdn.bcebos.com/AEq4m2pxczRJpUFdYfOxQBACZ8s.jpg' },
  		{ id: '2', url: 'https://b2b-material.cdn.bcebos.com/tdjbxBgdfXCq9vHlAVzY5BABR0w.jpg' },
  		{ id: '3', url: 'https://b2b-material.cdn.bcebos.com/8s68dcm9lg-5MgGVdXDk4xABY0Y.jpg' },
  		{ id: '4', url: 'https://b2b-material.cdn.bcebos.com/Blv94r8lzkq46oCkzSioPxABnTg.jpg' },
  		{ id: '5', url: 'https://b2b-material.cdn.bcebos.com/D6qSICHvHbWfB3bAWadmIhABfB8.jpg' },
		{ id: '6', url: 'https://b2b-material.cdn.bcebos.com/xTg2Gv6owQ1fHW7y4h_fGhAA-w4.jpg' }
  	  ],
  	  name: '芬克 RCP-104C便携式蓝牙比色计' ,
  	  price: '￥3988.00' ,
  	  parameter: [
  	  		  {
  	  		  		parameters_id: 0,
  	  		  		parameters_name: "磷酸盐",
  	  		  		range: "0.2-3.5",
  	  		  		general: "磷酸盐"
  	  		  	},
  	  		  	{
  	  		  		parameters_id: 1,
  	  		  		parameters_name: "纳什氨氮",
  	  		  		range: "0.2-10",
  	  		  		general: "纳什氨氮"
  	  		  	},
  	  		  	{
  	  		  		parameters_id: 2,
  	  		  		parameters_name: "水杨酸氨氮",
  	  		  		range: "0.1-1.5",
  	  		  		general: "水杨酸氨氮"
  	  		  	},
  	  		  	{
  	  		  		parameters_id: 3,
  	  		  		parameters_name: "总氯",
  	  		  		range: "0.1-10",
  	  		  		general: "总氯"
  	  		  	},
  	  		  	{
  	  		  		parameters_id: 4,
  	  		  		parameters_name: "余氯",
  	  		  		range: "0.1-10",
  	  		  		general: "余氯"
  	  		  	},
  	  		  	{
  	  		  		parameters_id: 5,
  	  		  		parameters_name: "铜",
  	  		  		range: "0.2-5",
  	  		  		general: "铜"
  	  		  	},
  	  		  	{
  	  		  		parameters_id: 6,
  	  		  		parameters_name: "镍",
  	  		  		range: "0.1-10",
  	  		  		general: "镍"
  	  		  	},
  	  		  	{
  	  		  		parameters_id: 7,
  	  		  		parameters_name: "六价铬",
  	  		  		range: "0.05-2",
  	  		  		general: "六价铬"
  	  		  	},
  	  		  	{
  	  		  		parameters_id: 8,
  	  		  		parameters_name: "硝态氮",
  	  		  		range: "0.2-10",
  	  		  		general: "硝态氮"
  	  		  	},
  	  		  	{
  	  		  		parameters_id: 9,
  	  		  		parameters_name: "亚硝态氮",
  	  		  		range: "0.05-1",
  	  		  		general: "亚硝态氮"
  	  		  	}
  	  		  // {
  	  		  // 	  parameters_id: 10,
  	  		  // 	  parameters_name: "阴离子",
  	  		  // 	  range: ""
  	  		  // },
  	  	  ] ,
  },
  {
  	  goods_id: 14,
	  category: '试剂类',
	  kind: '检测箱',
  	  img: [
  		{ id: '1', url: 'https://b2b-material.cdn.bcebos.com/D6CTaBMytvCGbjscKP386BABSk8.jpg' },
  		{ id: '2', url: 'https://b2b-material.cdn.bcebos.com/UROE_FtENrCuYaq8dyZZphAAyDI.jpg' },
  		{ id: '3', url: 'https://b2b-material.cdn.bcebos.com/eU2AXpv-iMX_LGBlt0bLghAAqxc.jpg' },
  		{ id: '4', url: 'https://b2b-material.cdn.bcebos.com/hZnKlMNP6ZUfaAU6hUMudhAAodE.jpg' },
  		{ id: '5', url: 'https://b2b-material.cdn.bcebos.com/gW9X3zjc2it2rYZJCJbVLhABlms.jpg' }
  	  ],
  	  name: '污染排查套装 多参数水质检测箱' ,
  	  price: '￥688.00' ,
	  parameter: [
	  		  {
	  			  parameters_id: 0,
	  			  parameters_name: "COD(低)",	
	  			  range: "0-100",
				  general: "COD"
	  		  },
			  {	
	  			  parameters_id: 1,
	  			  parameters_name: "COD(高)",
	  			  range: "0-250",
				  general: "COD"
	  		  },			  
	  		  {
	  		  	  parameters_id: 2,
	  		  	  parameters_name: "总磷",
	  		  	  range: "0-5",
				  general: "总磷"
	  		  },
	  		  {
	  		  	  parameters_id: 3,
	  		  	  parameters_name: "氨氮(低)",
	  		  	  range: "0-10",
				  general: "氨氮"
	  		  },
			  {
			  	  parameters_id: 4,
			  	  parameters_name: "氨氮(高)",
			  	  range: "0.5-20",
				  general: "氨氮"
			  },
	  		  {
	  		  	  parameters_id: 5,
	  		  	  parameters_name: "硝酸盐氮",
	  		  	  range: "0.2-10",
				  general: "硝酸盐氮"
	  		  },
	  		  {
	  		  	  parameters_id: 6,
	  		  	  parameters_name: "亚硝酸盐氮",
	  		  	  range: "0.05-1",
				  general: "亚硝酸盐氮"
	  		  },
	  		  {
	  		  	  parameters_id: 7,
	  		  	  parameters_name: "氰化物",
	  		  	  range: "0.02-2",
				  general: "氰化物"
	  		  },
	  		  {
	  		  	  parameters_id: 8,
	  		  	  parameters_name: "六价铬",
	  		  	  range: "0.05-2",
				  general: "六价铬"
	  		  },
	  		  {
	  		  	  parameters_id: 9,
	  		  	  parameters_name: "总铬",
	  		  	  range: "0-2",
				  general: "总铬"
	  		  },
	  		  {
	  		  	  parameters_id: 10,
	  		  	  parameters_name: "总锌",
	  		  	  range: "0-10",
				  general: "总锌"
	  		  },
	  		  {
	  		  	  parameters_id: 11,
	  		  	  parameters_name: "总铜(低)",
	  		  	  range: "0-1",
				  general: "总铜"
	  		  },
			  {
			  	  parameters_id: 12,
			  	  parameters_name: "总铜(高)",
			  	  range: "0.5-10",
				  general: "总铜"
			  },
	  		  {
	  		  	  parameters_id: 13,
	  		  	  parameters_name: "总镍",
	  		  	  range: "0-10",
				  general: "总镍"
	  		  },
	  		  {
	  		  	  parameters_id: 14,
	  		  	  parameters_name: "总氯",
	  		  	  range: "0.1-10",
				  general: "总氯"
	  		  },
	  		  {
	  		  	  parameters_id: 15,
	  		  	  parameters_name: "余氯",
	  		  	  range: "0.1-10",
				  general: "余氯"
	  		  },
	  		  {
	  		  	  parameters_id: 16,
	  		  	  parameters_name: "(游离)余氯",
				  range: "0.2-10",
	  		  	  general: "余氯"
	  		  },
	  		  {
	  		  	  parameters_id: 17,
	  		  	  parameters_name: "氟离子",
				  range: "0-3",
	  		  	  general: "氟离子"
	  		  }
	  	  ]
  },
  {
  	  goods_id: 15,
  	  category: '试剂类',
	  kind: '快检包',
  	  img: [
  		{ id: '1', url: 'https://b2b-material.cdn.bcebos.com/hwZ7P8-NH0xkJCnXSGYC7hACiTk.jpg' },
  		{ id: '2', url: 'https://b2b-material.cdn.bcebos.com/MKSSgqJcea-Z-RK72Y_Q7BABKJ8.jpg' },
  		{ id: '3', url: 'https://b2b-material.cdn.bcebos.com/CzoceMpCizIwez71dpFfQBAAy78.jpg' },
  		{ id: '4', url: 'https://b2b-material.cdn.bcebos.com/f4InfxT7l_a5RUxLThPGaxABBHY.jpg' },
  		{ id: '5', url: 'https://b2b-material.cdn.bcebos.com/74F6MU4Jjk9aozLppMyaGhABdNg.jpg' }
  	  ],
  	  name: 'RH系列水质快速检测包' ,
  	  price: '￥288.00' ,
  	  parameter:[
  	  		{
  	  			parameters_id: 0,
  	  			parameters_name: "COD(低)",
  	  			range: "0-100",
				general: "COD"
  	  		},
			{
				parameters_id: 0,
				parameters_name: "COD(高)",
				range: "0-250",
				general: "COD"
			},
			{
				parameters_id: 0,
				parameters_name: "COD(超高)",
				range: "0-800",
				general: "COD"
			},
  	  		{
  	  			parameters_id: 1,
  	  			parameters_name: "高锰酸盐指数",
  	  			range: "0-30",
				general: "高锰酸盐指数"
  	  		},
  	  		{
  	  			parameters_id: 2,
  	  			parameters_name: "总磷(低)",
  	  			range: "0-1",
				general: "总磷"
  	  		},
			{
				parameters_id: 2,
				parameters_name: "总磷(高)",
				range: "0-5",
				general: "总磷"
			},
			{
				parameters_id: 2,
				parameters_name: "总磷(超高)",
				range: "0-20",
				general: "总磷"
			},
  	  		{
  	  			parameters_id: 3,
  	  			parameters_name: "磷酸盐",
  	  			range: "0-10",
				general: "磷酸盐"
  	  		},
  	  		{
  	  			parameters_id: 4,
  	  			parameters_name: "总氮",
  	  			range: "0-20",
				general: "总氮"
  	  		},
			{
				parameters_id: 4,
				parameters_name: "总氮(超高)",
				range: "0-100",
				general: "总氮"
			},
  	  		{
  	  			parameters_id: 5,
  	  			parameters_name: "氨氮(低)",
  	  			range: "0-10",
				general: "氨氮"
  	  		},
			{
				parameters_id: 5,
				parameters_name: "氨氮(高)",
				range: "0.5-20",
				general: "氨氮"
			},
			{
				parameters_id: 5,
				parameters_name: "氨氮(超高)",
				range: "0-100",
				general: "氨氮"
			},
  	  		{
  	  			parameters_id: 6,
  	  			parameters_name: "硝酸盐氮",
  	  			range: "0.05-1",
				general: "硝酸盐氮"
  	  		},
  	  		{
  	  			parameters_id: 7,
  	  			parameters_name: "亚硝酸盐氮",
  	  			range: "0.05-2",
				general: "亚硝酸盐氮"
  	  		},
			{
				parameters_id: 7,
				parameters_name: "亚硝酸盐氮(高)",
				range: "0-200",
				general: "亚硝酸盐氮"
			},
  	  		{
  	  			parameters_id: 8,
  	  			parameters_name: "六价铬",
  	  			range: "0-2",
				general: "六价铬"
  	  		},
  	  		{
  	  			parameters_id: 9,
  	  			parameters_name: "总铬",
  	  			range: "0-2",
				general: "总铬"
  	  		},
  	  		{
  	  			parameters_id: 10,
  	  			parameters_name: "二价铁",
  	  			range: "0-10",
				general: "二价铁"
  	  		},
  	  		{
  	  			parameters_id: 11,
  	  			parameters_name: "总铁",
  	  			range: "0-10",
				general: "总铁"
  	  		},
  	  		{
  	  			parameters_id: 12,
  	  			parameters_name: "总铜(高)",
  	  			range: "0.5-10",
				general: "总铜(高)"
  	  		},
			{
				parameters_id: 12,
				parameters_name: "总铜(低)",
				range: "0-1",
				general: "总铜(高)"
			},
  	  		{
  	  			parameters_id: 13,
  	  			parameters_name: "总镍",
  	  			range: "0-5",
				general: "总镍"
  	  		},
  	  		{
  	  			parameters_id: 14,
  	  			parameters_name: "总锌",
  	  			range: "0.2-10",
				general: "总锌"
  	  		},
  	  		{
  	  			parameters_id: 15,
  	  			parameters_name: "总铅",
  	  			range: "0-5",
				general: "总铅"
  	  		},
  	  		{
  	  			parameters_id: 16,
  	  			parameters_name: "总钴",
  	  			range: "0-2",
				general: "总钴"
  	  		},
  	  		{
  	  			parameters_id: 17,
  	  			parameters_name: "总汞",
  	  			range: "0-10",
				general: "总汞"
  	  		},
  	  		{
  	  			parameters_id: 18,
  	  			parameters_name: "总砷",
  	  			range: "0-5",
				general: "总砷"
  	  		},
  	  		{
  	  			parameters_id: 19,
  	  			parameters_name: "总镉",
  	  			range: "0-2",
				general: "总镉"
  	  		},
  	  		{
  	  			parameters_id: 20,
  	  			parameters_name: "总银",
  	  			range: "0-5",
				general: "总银"
  	  		},
  	  		{
  	  			parameters_id: 21,
  	  			parameters_name: "铝",
  	  			range: "0.02-2",
				general: "铝"
  	  		},
  	  		{
  	  			parameters_id: 22,
  	  			parameters_name: "锰",
  	  			range: "0-10",
				general: "锰"
  	  		},
  	  		{
  	  			parameters_id: 23,
  	  			parameters_name: "铍",
  	  			range: "0-5",
				general: "铍"
  	  		},
  	  		{
  	  			parameters_id: 24,
  	  			parameters_name: "挥发酚",
  	  			range: "0-10",
				general: "挥发酚"
  	  		},
  	  		{
  	  			parameters_id: 25,
  	  			parameters_name: "氰化物",
  	  			range: "0.02-2",
				general: "氰化物"
  	  		},
  	  		{
  	  			parameters_id: 26,
  	  			parameters_name: "氟化物",
  	  			range: "0-3",
				general: "氟化物"
  	  		},
  	  		{
  	  			parameters_id: 27,
  	  			parameters_name: "硫化物",
  	  			range: "0-10",
				general: "硫化物"
  	  		},
  	  		{
  	  			parameters_id: 28,
  	  			parameters_name: "总氯",
  	  			range: "0.1-10",
				general: "总氯"
  	  		},
  	  		{
  	  			parameters_id: 29,
  	  			parameters_name: "余氯",
  	  			range: "0.1-10",
				general: "余氯"
  	  		},
  	  		{
  	  			parameters_id: 30,
  	  			parameters_name: "(游离)余氯",
  	  			range: "0.2-10",
				general: "余氯"
  	  		},
  	  		{
  	  			parameters_id: 31,
  	  			parameters_name: "氯离子",
  	  			range: "0-50",
				general: "氯离子"
  	  		},
  	  		{
  	  			parameters_id: 32,
  	  			parameters_name: "阴离子",
  	  			range: "0-50",
				general: "阴离子"
  	  		},
  	  		{
  	  			parameters_id: 33,
  	  			parameters_name: "总硬度",
  	  			range: "0-200",
				general: "总硬度"
  	  		},
  	  		{
  	  			parameters_id: 34,
  	  			parameters_name: "四价硒",
  	  			range: "0-5",
				general: "四价硒"
  	  		},
  	  		{
  	  			parameters_id: 35,
  	  			parameters_name: "硼",
  	  			range: "0-100",
				general: "硼"
  	  		},
  	  		{
  	  			parameters_id: 36,
  	  			parameters_name: "臭氧",
  	  			range: "0-4",
				general: "臭氧"
  	  		},
  	  		{
  	  			parameters_id: 37,
  	  			parameters_name: "溶解氧",
  	  			range: "0-10",
				general: "溶解氧"
  	  		},
  	  		{
  	  			parameters_id: 38,
  	  			parameters_name: "尿素",
  	  			range: "0-8",
				general: "总银"
  	  		},
  	  		{
  	  			parameters_id: 39,
  	  			parameters_name: "复杂水体总镍",
  	  			range: "0-5",
				general: "复杂水体总镍"
  	  		},
  	  		{
  	  			parameters_id: 40,
  	  			parameters_name: "PH",
  	  			range: "5-9",
				general: "PH"
  	  		},
  	  		{
  	  			parameters_id: 41,
  	  			parameters_name: "金属总量(Cu，Zn，Mn，Ni)",
  	  			range: "0.5-20",
				general: "金属总量"
  	  		},
  	  		{
  	  			parameters_id: 42,
  	  			parameters_name: "二氧化氯",
  	  			range: "0-5",
				general: "二氧化氯"
  	  		},
  	  		{
  	  			parameters_id: 43,
  	  			parameters_name: "总碱度",
  	  			range: "0-150",
				general: "总碱度"
  	  		}
  	  	  ]
  
  },
  {
  	  goods_id: 16,
	  category: '试剂类',
	  kind: '预制试剂',
  	  img: [
  		{ id: '1', url: 'https://b2b-material.cdn.bcebos.com/1wYAWM7p79oFdnKktakQPBAB7J4.jpg' },
  		{ id: '2', url: 'https://b2b-material.cdn.bcebos.com/4amKWkhd9F_ru5XuYibzKRACEk8.jpg' },
  		{ id: '3', url: 'https://b2b-material.cdn.bcebos.com/MPYHi7qlVfYRcsB9R7BD6hAA96c.jpg' },
  		{ id: '4', url: 'https://b2b-material.cdn.bcebos.com/l3VWnAMrkiSGFe2ui0GgaxABEhQ.jpg' },
  		{ id: '5', url: 'https://b2b-material.cdn.bcebos.com/7TE_xx7Sz9IsCC-fg2GyTxAAvsE.jpg' }
  	  ],
  	  name: '芬克 QP预制试剂 ' ,
  	  price: '￥375.00' ,
	  parameter:[
	  		{
	  			parameters_id: 1,
	  			parameters_name: "COD(超低)",
	  			range: "5-100",
				general: "COD"
	  		},
			{
				parameters_id: 2,
				parameters_name: "COD(低)",
				range: "15-200",
				general: "COD"
			},
			{
				parameters_id: 3,
				parameters_name: "COD(高)",
				range: "100-1200",
				general: "COD"
			},
			{
				parameters_id: 4,
				parameters_name: "COD(超高)",
				range: "1200-10000",
				general: "COD"
			},
	  		{
	  			parameters_id: 5,
	  			parameters_name: "总磷(超低)",
	  			range: "0.05-1",
				general: "总磷"
	  		},
			{
				parameters_id: 6,
				parameters_name: "总磷(低)",
				range: "0.2-5",
				general: "总磷"
			},
			{
				parameters_id: 2,
				parameters_name: "总磷(高)",
				range: "0.5-10",
				general: "总磷"
			},
			{
				parameters_id: 2,
				parameters_name: "总磷(超高)",
				range: "10-100",
				general: "总磷"
			},
	  		{
	  			parameters_id: 3,
	  			parameters_name: "磷酸盐",
	  			range: "0.05-1",
				general: "磷酸盐"
	  		},
	  		{
	  			parameters_id: 4,
	  			parameters_name: "总氮(低)",
	  			range: "0.5-20",
				general: "总氮"
	  		},
			{
				parameters_id: 4,
				parameters_name: "总氮(高)",
				range: "1-40",
				general: "总氮"
			},
			{
				parameters_id: 4,
				parameters_name: "总氮(超高)",
				range: "10-150",
				general: "总氮"
			},
	  		{
	  			parameters_id: 5,
	  			parameters_name: "纳什氨氮(低)",
	  			range: "0.2-5",
				general: "纳什氨氮"
	  		},
			{
				parameters_id: 5,
				parameters_name: "纳什氨氮(高)",
				range: "1-50",
				general: "纳什氨氮"
			},
	  		{
	  			parameters_id: 6,
	  			parameters_name: "水杨酸氨氮(低)",
	  			range: "0.1-2",
				general: "水杨酸氨氮"
	  		},
			{
				parameters_id: 6,
				parameters_name: "水杨酸氨氮(高)",
				range: "0-50",
				general: "水杨酸氨氮"
			},
	  		{
	  			parameters_id: 7,
	  			parameters_name: "硝酸盐氮(低)",
	  			range: "0.5-10",
				general: "硝酸盐氮"
	  		},
			{
				parameters_id: 7,
				parameters_name: "硝酸盐氮(高)",
				range: "1-20",
				general: "硝酸盐氮"
			},
	  		{
	  			parameters_id: 8,
	  			parameters_name: "亚硝酸盐氮",
	  			range: "0.02-0.5"
	  		},
	  		{
	  			parameters_id: 9,
	  			parameters_name: "总铜(PAN)",
	  			range: "0.05-2",
				general: "总铜"
	  		},
	  		{
	  			parameters_id: 10,
	  			parameters_name: "总铜(BCA)",
	  			range: "0.2-5",
				general: "总铜"
	  		},
	  		{
	  				parameters_id: 11,
	  				parameters_name: "总镍",
	  				range: "0.05-0.8",
	  				general: "总镍"
	  			},
	  			{
	  				parameters_id: 12,
	  				parameters_name: "总铬",
	  				range: "0.05-1",
	  				general: "总铬"
	  			},
	  			{
	  				parameters_id: 13,
	  				parameters_name: "六价铬",
	  				range: "0.05-1",
	  				general: "六价铬"
	  			},
	  			{
	  				parameters_id: 14,
	  				parameters_name: "总镉",
	  				range: "0.1-1",
	  				general: "总镉"
	  			},
	  			{
	  				parameters_id: 15,
	  				parameters_name: "总汞",
	  				range: "0.2-5",
	  				general: "总汞"
	  			},
	  			{
	  				parameters_id: 16,
	  				parameters_name: "总锌",
	  				range: "0.02-0.5",
	  				general: "总锌"
	  			},
	  			{
	  				parameters_id: 17,
	  				parameters_name: "总铁",
	  				range: "0.1-2",
	  				general: "总铁"
	  			},
	  			{
	  				parameters_id: 18,
	  				parameters_name: "二价铁",
	  				range: "0.1-2",
	  				general: "二价铁"
	  			},
	  			{
	  				parameters_id: 19,
	  				parameters_name: "锰",
	  				range: "0.05-0.5",
	  				general: "锰"
	  			},
	  			{
	  				parameters_id: 20,
	  				parameters_name: "钴",
	  				range: "0.05-1",
	  				general: "钴"
	  			},
	  			{
	  				parameters_id: 21,
	  				parameters_name: "砷",
	  				range: "0.1-2",
	  				general: "砷"
	  			},
	  			{
	  				parameters_id: 22,
	  				parameters_name: "总银",
	  				range: "0.05-0.4",
	  				general: "总银"
	  			},
	  			{
	  				parameters_id: 23,
	  				parameters_name: "铅",
	  				range: "0-2",
	  				general: "铅"
	  			},
	  			{
	  				parameters_id: 24,
	  				parameters_name: "锑",
	  				range: "0.1-2",
	  				general: "锑"
	  			},
	  			{
	  				parameters_id: 25,
	  				parameters_name: "高锰酸盐指数",
	  				range: "0.5-5",
	  				general: "高锰酸盐指数"
	  			},
	  			{
	  				parameters_id: 26,
	  				parameters_name: "余氯",
	  				range: "0.05-2",
	  				general: "余氯"
	  			},
	  			{
	  				parameters_id: 27,
	  				parameters_name: "总氯",
	  				range: "0.1-5",
	  				general: "总氯"
	  			},
	  			{
	  				parameters_id: 28,
	  				parameters_name: "二氧化氯",
	  				range: "0.2-2",
	  				general: "二氧化氯"
	  			},
	  			{
	  				parameters_id: 29,
	  				parameters_name: "氰化物",
	  				range: "2-20",
	  				general: "氰化物"
	  			},
	  			{
	  				parameters_id: 30,
	  				parameters_name: "氟化物",
	  				range: "0.05-1",
	  				general: "氟化物"
	  			},
	  			{
	  				parameters_id: 31,
	  				parameters_name: "硫化物",
	  				range: "0.05-2",
	  				general: "硫化物"
	  			},
	  			{
	  				parameters_id: 32,
	  				parameters_name: "过氧化氢",
	  				range: "1-25",
	  				general: "过氧化氢"
	  			},
	  			{
	  				parameters_id: 33,
	  				parameters_name: "挥发酚",
	  				range: "0.2-5",
	  				general: "挥发酚"
	  			},
	  			{
	  				parameters_id: 34,
	  				parameters_name: "甲醛",
	  				range: "0.2-4",
	  				general: "甲醛"
	  			},
	  			{
	  				parameters_id: 35,
	  				parameters_name: "维生素C",
	  				range: "20-600",
	  				general: "维生素C"
	  			},
	  			{
	  				parameters_id: 36,
	  				parameters_name: "色度",
	  				range: "0-500",
	  				general: "色度"
	  			},
	  			{
	  				parameters_id: 37,
	  				parameters_name: "硫酸盐",
	  				range: "10-100",
	  				general: "硫酸盐"
	  			},
	  			{
	  				parameters_id: 38,
	  				parameters_name: "二氧化硅",
	  				range: "0.2-7",
	  				general: "二氧化硅"
	  			}
	  		]
  },
 
  // {
  // 	  goods_id: 17,
  // 	  img: [
  // 		{ id: '', url: '' },
  // 		{ id: '', url: '' },
  // 		{ id: '', url: '' },
  // 		{ id: '', url: '' },
  // 		{ id: '', url: '' }
  // 	  ],
  // 	  name: '' ,
  // 	  price: '' ,
  // 	  parameter: '' ,
  // },
  // {
  // 	  goods_id: 18,
  // 	  img: [
  // 		{ id: '', url: '' },
  // 		{ id: '', url: '' },
  // 		{ id: '', url: '' },
  // 		{ id: '', url: '' },
  // 		{ id: '', url: '' }
  // 	  ],
  // 	  name: '' ,
  // 	  price: '' ,
  // 	  parameter: '' ,
  // },
  // {
  // 	  goods_id: 19,
  // 	  img: [
  // 		{ id: '', url: '' },
  // 		{ id: '', url: '' },
  // 		{ id: '', url: '' },
  // 		{ id: '', url: '' },
  // 		{ id: '', url: '' }
  // 	  ],
  // 	  name: '' ,
  // 	  price: '' ,
  // 	  parameter: '' ,
  // },
  // {
  // 	  goods_id: 20,
  // 	  img: [
  // 		{ id: '', url: '' },
  // 		{ id: '', url: '' },
  // 		{ id: '', url: '' },
  // 		{ id: '', url: '' },
  // 		{ id: '', url: '' }
  // 	  ],
  // 	  name: '' ,
  // 	  price: '' ,
  // 	  parameter: '' ,
  // },
  // {
  // 	  goods_id: 21,
  // 	  img: [
  // 		{ id: '', url: '' },
  // 		{ id: '', url: '' },
  // 		{ id: '', url: '' },
  // 		{ id: '', url: '' },
  // 		{ id: '', url: '' }
  // 	  ],
  // 	  name: '' ,
  // 	  price: '' ,
  // 	  parameter: '' ,
  // },
  // {
  // 	  goods_id: 22,
  // 	  img: [
  // 		{ id: '', url: '' },
  // 		{ id: '', url: '' },
  // 		{ id: '', url: '' },
  // 		{ id: '', url: '' },
  // 		{ id: '', url: '' }
  // 	  ],
  // 	  name: '' ,
  // 	  price: '' ,
  // 	  parameter: '' ,
  // },
  
];
