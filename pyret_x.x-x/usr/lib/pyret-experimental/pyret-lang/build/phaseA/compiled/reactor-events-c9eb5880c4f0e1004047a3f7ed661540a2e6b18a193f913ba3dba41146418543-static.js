({"theMap":"{\"version\":3,\"sources\":[\"builtin://reactor-events\"],\"names\":[\"builtin://reactor-events\",\",6,0,47,10,3,156\",\",7,2,61,7,13,72\",\",8,2,75,8,51,124\",\",9,2,127,9,27,152\"],\"mappings\":\"AAACA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA,mBAKDC,4BALCD;AAAAA;AAAAA;AAAAA;AAAAA,mBAMCE,mCANDF;AAAAA;AAAAA;AAAAA;AAAAA,mBAMCE,gCANDF;AAAAA;AAAAA;AAAAA;AAAAA,oBAOCG,+BAPDH;AAAAA;AAAAA;AAAAA;AAAAA,oBAOCG,4BAPDH;AAAAA;AAAAA;AAAAA;AAAAA,oBAQCI,kCARDJ;AAAAA;AAAAA;AAAAA;AAAAA,oBAQCI,+BARDJ;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA,SAKDC,oDALCD;AAAAA;AAAAA;AAAAA;AAAAA,SAKDC,oDALCD;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA;AAAAA\",\"file\":\"builtin://reactor-events\"}",
"nativeRequires":[],
"provides":{"values":{"time-tick":"tany",
"is-time-tick":{"bind":"fun",
"flatness":0,
"name":"is-time-tick",
"typ":"tany"},
"is-Event":"tany",
"is-keypress":{"bind":"fun",
"flatness":0,
"name":"is-keypress",
"typ":"tany"},
"mouse":{"bind":"fun",
"flatness":0,
"name":"mouse",
"typ":"tany"},
"keypress":{"bind":"fun",
"flatness":0,
"name":"keypress",
"typ":"tany"},
"is-mouse":{"bind":"fun",
"flatness":0,
"name":"is-mouse",
"typ":"tany"}},
"datatypes":{"atom#Event#1":["data","Event",[],[["time-tick"],["mouse",
[["x",
{"tag":"name",
"origin":{"import-type":"uri",
"uri":"builtin://global"},
"name":"Number"}],["y",
{"tag":"name",
"origin":{"import-type":"uri",
"uri":"builtin://global"},
"name":"Number"}],["kind",
{"tag":"name",
"origin":{"import-type":"uri",
"uri":"builtin://global"},
"name":"String"}]]],["keypress",
[["key",
{"tag":"name",
"origin":{"import-type":"uri",
"uri":"builtin://global"},
"name":"String"}]]]],{}]},
"aliases":{"Event":"tany"}},
"requires":[{"import-type":"builtin",
"name":"global"}]})