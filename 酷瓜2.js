/*  
低保
变量名:kg
填入refresh_token和openid,用&分开,多账号用@
写了签到和提现
第一次先自己去签到和提现,授权绑定手机号,不然脚本可能跑不起
修复了提现/增加更新token

*/


var _0xod1='jsjiami.com.v7';const _0xe815d6=_0x38a3;function _0x2d54(){const _0x2fd8cb=(function(){return[_0xod1,'tLkjksjNiuqamHPikY.NcpfoTmLl.KvLy7fKUOOP==','WQ7dN8o0FSocW6nwW6vpWRO','qmkpASoMWQ9gW6/dJhddPuhdVdfn','W6tdPIlcKmkrWPrOdSokWOvWhWNdI8kUW5m','W4ytW5BcO0uyWPTAWPrclSk0sa','bSodWPpcHe8','WR/cRSkJWQddKa','tCkFfq','WPNdRghdJ1C','hCoZz+kvRvOWWQ/ILQ/IL7NILlZILPhIL5C','oCkBW75Wst/dLYxdISouASkQBa','W6JdPCkYwdy','wmkshSk1ra','WQuFW4W','WPngWPtdUG','uCkFaCkN','amo6W7ZdNq','pCoFW77dJva','FCoDWRbPfxZcGrtdN8kuEmkntq','D8kJwSopWR0','luy3W4LP','pCkjW5RdVCoz','vmoHWQBcSmk4','W7/dQ8kTxJa','mc8ggmk8','C8kyWRS','cCkjmxZcLq','xeq/xq1FW6ysWQvPz8kHh8ktW7fWW5pcGHxcQJveE8kOfSkBWQBcImkzCSkXsmk8W4PFWPipW6VdO07cRammWRVcQgiAb8oipaddVZC0BMFdQ8kb','W5ldTMGema','W4BdVmkGCta','rqmwiSkFvSkJC8kizConW5Lm','6i+35y2JWQNcNg/cO3RLPBROTyq','d8o+W63dJdxdHSoNi8ovBW','kCk7jvBcQW','562S5yU+5AsB6lAE','W6RcUmofBay','W6RcK2zuW43cQMJdNmojibmqWQZdUSkAoHRdS8oIW73cQZFdHSobaSkzWQBdGmkWW5/dM3pcKIOmW6vXW7JcKYfAn04WWP8ME0JdIZ3dI2xcQ8k6eshcTCkppCo5WQFcImoU','W6/cM8oQvq','W6FdQ8kH','DCkeW6ZdGdpdSemYfaldVxC','EeiU4Pw+4Pwn4PEG4PAg4Pw14PsC4PEa4Pww4PE1','5OYY54Y75Asl6lAw','W7JcLmkQp8kiW7PvW4n4WQHuWQO','W4isA8o8hG','aCkrvokuKSkEW5lcP+kxH8k65yUM5lQP57+n77YE','WPRdK8o7W7tcPJKwtM7cTSo3WQNcImk7WQxcG8kDamkZDSkQWRLsrKFcKCo9osGZW5hcNmkbnfVcKLdcGmonFq','WQ7cPGZdI8oCxZJdJJOXymkgjYa1u2tdSYZdRcfwWQW/tSogaCobnWr7W7NdTaSyW47cPMG2oCkEa8oAs8kpCtDlxCkAW7WyW47dOfi1WPiDFK9zWOGWrSkrW5aBW64WW7uszCouW5ZdIZJcRmkhevtcRdhdNSo/W5BdK8oWdmoJtg8TWO1Grr/dOrTyWQ/dQLldTu7cR8kXW6yCW4vJW6T+dCkXFIVdN8kTW4Wfp8o1WQxcQmotu8kLWR3dSmkvWPaIi1e3WQNdQ8khW5jlWOJcHh7dKSkYW7BdT0r3eWXnt0KcnmoqD8o3vCo1hCkXWP3dTX/cNGldTCkYWQnfW5iIWQlcR8oTWRrTWQLCW5X3EmovW74As8kclHfOFmkcWORdGwpdRSofpmkumSoncmkGuLWsWQT4fumWsY/cHG/cUhP3W7nlWP3cT8oycWBcPYq7bSk1bSkNtSoBWRuyeKBdQq','amosW53dMv4'].concat((function(){return['kCoBWR7cN3hcONe4','WOVdNCoJDCoK','W5RdQhK','W7VdNCo3r8oMWPrm','56+15yQ05AE36lsE','whxcGmk2gW','eh9XfSorW6DDW5ZdK1XCWOq','qti9xSkvW68xWORdH31AWQlcKxhcJgWnhCkzWQWhW47dT8oRBHFcUSo+FZ7dKSkfWQyiBSo1W6NdKCo8WQC4pKxcG8kQW6DbCeL9dhTOs8kjWOvkW4W+W6yya8oo','zNuHtHy','W5ddUKFcLSkgbw3cSKfvbmorDG','s8k0WQJILRpILiVcH8kRAUkwRokuMq','B8otW5dcJ8oqmdSDf3LTWOtcS13cRZC8WRy','WPJcOmksWRpdSW','W5xcS8kXWQL3','W5ldPMOg','n8onW6ZcLt3cOhDZbeZcH3mEt8klW7/cO8oP','WOVcVmoAWQtdUd49WQ/cMCkjW7ynWPLR','562+5yIM5OUu5yQK','gmoogfVdQCkOW64','W67cIhu','b8o0W7RdJW','562R5yMy5OQ25yMX','ySohWPeVfW','W4ZcJJVILOlILihILQJcQokxTokuGUkuQW','wSoVymkIW6W','C8ksWRjDW5VcSW','wCkvkmowWPjhW6BdJt/dSq','dSoFuUkxKcBcOmkmW7NdTSkUcUkvRokxMa','mH98bIW','W61qoW','Cq87W5tdICoXWQr0c8okWPbHeSotW51zgMNcHItdMCoze8oBW6NdM8owWO7cNr7dUZD8W4hdRSoNW7tcNCkQW40ih8k6BSkoi3WvDHZcUf4qW5DuW5nTW6nBW73cVx88','cYjTW6NcRq','lmoAWRO','WPj0Fq','u8kXWP5DW5S','WPGAW7evW60','WPBcHCkMWOZdOG','FrZdKSkEWQtdVZqYifLCmmkDoN3cIJhdMHxcJarMWR4vkSocWRjvWOj5WRBcPv4Rtv0+W5CDW6xdSw7cSSoUv8oQjXZdN8kojSkFW5hdIe1i','W5hcTuTdW4y','w2eVWRBdQ33cI3JcP8ooacC','jCkfW6FILyrEkCog4PwIWP7cJspdKHldKXu1wmks','aLmaW6bj','W6SvW4S','WRz0A2Ln','mmoCW6ZILz9sW6PH4PEuicZdREkwMW','mmoCW6ZILz9sW6PHW48GlmoT4PA74PEW','WQSqDG','sdy5qSkpWRzzW5hdNxDgW7VcKMhcHNu','WPtcPSk4WOhdKG'].concat((function(){return['x1/cVSkTbW','t2ZcJCkZamkDr8oo','W6BdUsdcJW','nCoCW6y','W7/cKSo7wG','v8oBBSkkWPJcVSoXf8ktWRe','mmoyW7ZILlNcJ+kxQokwLmoA4PsF4Ps1WOpILQO','5y6Q6ys/5lQn5A+Z5z6s','aHjnpmkOW67cJWiOpSkhvaWq','iSkJW7BdV8oU','iwDWAmoR','W4FcLSk+WRFdOJvUggZcUmodW6u','WOqiW40eW60','WQi0WPW8WQe','5lMQ6lAt5yYQ','WQ/dLxRdLMO','yWbR','WOxcVmksWOK','x8orECkj','tcS5wSkF','W7zmBq1FkConW5BdICoskmkFFxanW7fUWOjAW7zdWOHZW4JcM8o5WQSfgSkmW6tdTmoFoSk5sCkCr8opWOO','euvsDCov','WP3cU8kq','WPiNy14O','tmoUlMddKq','AmoeWPlcNq','W6ZdJmkjCGK','emoZW63dKG','WQ8JWPi','WQO5W6dILQSQsSk04PE9x8ofeokvQq','W4ldGwGmpW','WQSAF1SBpq','vSkiia','WRhdNmkL','dv0t','W7fBWRxdRuK','WOhdRmolW6ZcRW','W7yrrwK+dCkp','WPFdISo/W7dcRa','zhFcSfO','WPxdISoAE8ov','gfHh','CbRdLmkbWQu','WO/dJNW','W4BcVCk2WR4','hSk4W6xdM8oG'];}()));}()));}());_0x2d54=function(){return _0x2fd8cb;};return _0x2d54();};(function(_0x170ead,_0x5cd861,_0x403969,_0x35535a,_0x4ff1c7,_0x3d3d51,_0x3c5257){return _0x170ead=_0x170ead>>0x9,_0x3d3d51='hs',_0x3c5257='hs',function(_0x16860a,_0x2aef49,_0x277a7c,_0x1bc42a,_0x441339){const _0x2edf18=_0x38a3;_0x1bc42a='tfi',_0x3d3d51=_0x1bc42a+_0x3d3d51,_0x441339='up',_0x3c5257+=_0x441339,_0x3d3d51=_0x277a7c(_0x3d3d51),_0x3c5257=_0x277a7c(_0x3c5257),_0x277a7c=0x0;const _0x154f86=_0x16860a();while(!![]&&--_0x35535a+_0x2aef49){try{_0x1bc42a=parseInt(_0x2edf18(0x193,'E(]E'))/0x1*(parseInt(_0x2edf18(0x1d1,'JN(Z'))/0x2)+-parseInt(_0x2edf18(0x1c5,'9Nse'))/0x3+-parseInt(_0x2edf18(0x1f2,'Gv(y'))/0x4+parseInt(_0x2edf18(0x19f,'zvc%'))/0x5+-parseInt(_0x2edf18(0x1dd,'k9&R'))/0x6*(parseInt(_0x2edf18(0x1a5,'*F(L'))/0x7)+-parseInt(_0x2edf18(0x1c2,'cYkg'))/0x8+parseInt(_0x2edf18(0x1d4,'!UkL'))/0x9;}catch(_0x1cfe3a){_0x1bc42a=_0x277a7c;}finally{_0x441339=_0x154f86[_0x3d3d51]();if(_0x170ead<=_0x35535a)_0x277a7c?_0x4ff1c7?_0x1bc42a=_0x441339:_0x4ff1c7=_0x441339:_0x277a7c=_0x441339;else{if(_0x277a7c==_0x4ff1c7['replace'](/[lUqkLtOKHyNpPfYuT=]/g,'')){if(_0x1bc42a===_0x2aef49){_0x154f86['un'+_0x3d3d51](_0x441339);break;}_0x154f86[_0x3c5257](_0x441339);}}}}}(_0x403969,_0x5cd861,function(_0x132423,_0x54a20f,_0x448e20,_0x3ec94c,_0x2e39c0,_0x4ff4f9,_0x158ed2){return _0x54a20f='\x73\x70\x6c\x69\x74',_0x132423=arguments[0x0],_0x132423=_0x132423[_0x54a20f](''),_0x448e20='\x72\x65\x76\x65\x72\x73\x65',_0x132423=_0x132423[_0x448e20]('\x76'),_0x3ec94c='\x6a\x6f\x69\x6e',(0x174b82,_0x132423[_0x3ec94c](''));});}(0x19200,0x4d2f5,_0x2d54,0xcb),_0x2d54)&&(_0xod1=0xcb);const axios=require(_0xe815d6(0x17b,'k$nC'));function signIn(_0x302a05,_0x4c9627){const _0x375f19=_0xe815d6,_0x496660={'HUfgZ':_0x375f19(0x1cf,'V(%z'),'erOfd':_0x375f19(0x1e8,'E(]E'),'UXrbG':'gzip,\x20deflate,\x20br','OyZVc':_0x375f19(0x1db,'HTPS'),'YDvqH':_0x375f19(0x201,'uLbn'),'gQQkT':'application/json','lwdmv':_0x375f19(0x1e9,'7Z6x'),'dIUeF':_0x375f19(0x19c,'9Nse'),'sKDhz':'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/116.0.0.0\x20Safari/537.36\x20MicroMessenger/7.0.20.1781(0x6700143B)\x20NetType/WIFI\x20MiniProgramEnv/Windows\x20WindowsWechat/WMPF\x20WindowsWechat(0x63090b11)XWEB/9185','UPPrL':_0x375f19(0x1d6,'U]vV'),'FpxxU':_0x375f19(0x1f0,'UNPz')},_0x1f25d1={'Accept':_0x496660[_0x375f19(0x1fb,'HTPS')],'Accept-Encoding':_0x496660[_0x375f19(0x185,'E(]E')],'Accept-Language':_0x496660[_0x375f19(0x1b0,'sZmA')],'Connection':_0x496660[_0x375f19(0x1ac,'&v^Y')],'Content-Type':_0x496660[_0x375f19(0x1ef,'HTPS')],'Host':_0x375f19(0x1ad,'*F(L'),'Referer':_0x496660['lwdmv'],'Sec-Fetch-Dest':_0x375f19(0x181,'JN(Z'),'Sec-Fetch-Mode':_0x375f19(0x1fe,'rZIc'),'Sec-Fetch-Site':_0x496660[_0x375f19(0x1ca,'&v^Y')],'User-Agent':_0x496660[_0x375f19(0x192,'sUWS')],'xweb_xhr':'1'},_0x21e218={'type':0x1,'invite_id':'','code_ticket':'','count':'','token':_0x302a05,'appid':_0x496660[_0x375f19(0x178,'2uHV')],'openid':_0x4c9627};return axios[_0x375f19(0x19a,'g]vo')](_0x496660[_0x375f19(0x1cc,'9Nse')],_0x21e218,{'headers':_0x1f25d1})[_0x375f19(0x189,'&v^Y')](_0x197bc2=>{const _0x542911=_0x375f19;return console[_0x542911(0x1b4,'tc2m')](_0x542911(0x1dc,'S!HQ')),console[_0x542911(0x18a,'k$nC')](_0x197bc2[_0x542911(0x195,'S!HQ')]),_0x197bc2['data']['data']['dialogId'];})[_0x375f19(0x1a6,'V(%z')](_0x498753=>{const _0x18b4aa=_0x375f19;console[_0x18b4aa(0x198,'UNPz')](_0x496660[_0x18b4aa(0x1b3,'XyBH')],_0x498753);throw _0x498753;});}function withdraw(_0x3cb46e,_0x2e8f6f,_0x41b900){const _0x5854ae=_0xe815d6,_0x489800={'LtaCP':_0x5854ae(0x1c4,'Bomg'),'LtCJH':_0x5854ae(0x18f,'Iipt'),'bPZqo':'gzip,\x20deflate,\x20br','dqvcE':_0x5854ae(0x19d,'r0i#'),'shKiS':_0x5854ae(0x19e,'rZIc'),'NFbuN':'www.kugua.com','KTMnd':_0x5854ae(0x1d2,'JN(Z'),'LJGYQ':_0x5854ae(0x1ae,'i8hA'),'hpcEW':_0x5854ae(0x180,'uLbn'),'jNLWG':_0x5854ae(0x1da,'cYkg'),'FvNwK':_0x5854ae(0x1b6,'KYE8')},_0x5436d9={'Accept':_0x489800[_0x5854ae(0x1af,'*rDM')],'Accept-Encoding':_0x489800[_0x5854ae(0x186,'k9&R')],'Accept-Language':_0x489800[_0x5854ae(0x1b7,'tbrK')],'Connection':'keep-alive','Content-Type':_0x489800['shKiS'],'Host':_0x489800['NFbuN'],'Referer':_0x489800['KTMnd'],'Sec-Fetch-Dest':_0x489800[_0x5854ae(0x1b1,'U]vV')],'Sec-Fetch-Mode':_0x489800['hpcEW'],'Sec-Fetch-Site':_0x5854ae(0x1e5,'r0i#'),'User-Agent':_0x5854ae(0x1c9,'!UkL'),'xweb_xhr':'1'},_0x33fce6={'dialogId':_0x41b900,'token':_0x3cb46e,'appid':_0x489800['jNLWG'],'openid':_0x2e8f6f};return axios[_0x5854ae(0x187,'U]vV')](_0x489800[_0x5854ae(0x1a0,'cYkg')],_0x33fce6,{'headers':_0x5436d9})[_0x5854ae(0x17f,'HTPS')](_0x3f2709=>{const _0x5aa501=_0x5854ae;console[_0x5aa501(0x1c1,'V(%z')](_0x3f2709[_0x5aa501(0x1a9,'zvc%')]);})[_0x5854ae(0x1f4,'*rDM')](_0x45f625=>{const _0x318986=_0x5854ae;console[_0x318986(0x1ea,'Gv(y')](_0x489800[_0x318986(0x17d,'Z^BB')],_0x45f625);throw _0x45f625;});}function _0x38a3(_0x2dcf8c,_0x524175){const _0x2d5455=_0x2d54();return _0x38a3=function(_0x38a301,_0x52dfea){_0x38a301=_0x38a301-0x178;let _0x1d491e=_0x2d5455[_0x38a301];if(_0x38a3['QuRYKI']===undefined){var _0x382e54=function(_0x25f17f){const _0x3422fd='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xdd665c='',_0x4763b0='';for(let _0x3e9729=0x0,_0x329030,_0x1c0914,_0x263840=0x0;_0x1c0914=_0x25f17f['charAt'](_0x263840++);~_0x1c0914&&(_0x329030=_0x3e9729%0x4?_0x329030*0x40+_0x1c0914:_0x1c0914,_0x3e9729++%0x4)?_0xdd665c+=String['fromCharCode'](0xff&_0x329030>>(-0x2*_0x3e9729&0x6)):0x0){_0x1c0914=_0x3422fd['indexOf'](_0x1c0914);}for(let _0xd56856=0x0,_0x9bd605=_0xdd665c['length'];_0xd56856<_0x9bd605;_0xd56856++){_0x4763b0+='%'+('00'+_0xdd665c['charCodeAt'](_0xd56856)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4763b0);};const _0x1febf2=function(_0x3b08fa,_0x3d9f16){let _0x1022f0=[],_0x563165=0x0,_0x28579f,_0x1326b4='';_0x3b08fa=_0x382e54(_0x3b08fa);let _0x58ebe6;for(_0x58ebe6=0x0;_0x58ebe6<0x100;_0x58ebe6++){_0x1022f0[_0x58ebe6]=_0x58ebe6;}for(_0x58ebe6=0x0;_0x58ebe6<0x100;_0x58ebe6++){_0x563165=(_0x563165+_0x1022f0[_0x58ebe6]+_0x3d9f16['charCodeAt'](_0x58ebe6%_0x3d9f16['length']))%0x100,_0x28579f=_0x1022f0[_0x58ebe6],_0x1022f0[_0x58ebe6]=_0x1022f0[_0x563165],_0x1022f0[_0x563165]=_0x28579f;}_0x58ebe6=0x0,_0x563165=0x0;for(let _0x9c3d87=0x0;_0x9c3d87<_0x3b08fa['length'];_0x9c3d87++){_0x58ebe6=(_0x58ebe6+0x1)%0x100,_0x563165=(_0x563165+_0x1022f0[_0x58ebe6])%0x100,_0x28579f=_0x1022f0[_0x58ebe6],_0x1022f0[_0x58ebe6]=_0x1022f0[_0x563165],_0x1022f0[_0x563165]=_0x28579f,_0x1326b4+=String['fromCharCode'](_0x3b08fa['charCodeAt'](_0x9c3d87)^_0x1022f0[(_0x1022f0[_0x58ebe6]+_0x1022f0[_0x563165])%0x100]);}return _0x1326b4;};_0x38a3['WVNHah']=_0x1febf2,_0x2dcf8c=arguments,_0x38a3['QuRYKI']=!![];}const _0x2116f7=_0x2d5455[0x0],_0x4b7b83=_0x38a301+_0x2116f7,_0x473809=_0x2dcf8c[_0x4b7b83];return!_0x473809?(_0x38a3['kWAizS']===undefined&&(_0x38a3['kWAizS']=!![]),_0x1d491e=_0x38a3['WVNHah'](_0x1d491e,_0x52dfea),_0x2dcf8c[_0x4b7b83]=_0x1d491e):_0x1d491e=_0x473809,_0x1d491e;},_0x38a3(_0x2dcf8c,_0x524175);}function getToken(_0x55a62e){const _0x3f8da4=_0xe815d6,_0x5e56c7={'REjch':_0x3f8da4(0x1ff,'w7vY'),'tFvkJ':'gzip,\x20deflate,\x20br','SRYgx':_0x3f8da4(0x1bb,'&v^Y'),'fQkXY':_0x3f8da4(0x1fa,'JN(Z'),'HUocJ':_0x3f8da4(0x1bf,'CWoW'),'PvRDI':'cross-site','LFBgt':'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/116.0.0.0\x20Safari/537.36\x20MicroMessenger/7.0.20.1781(0x6700143B)\x20NetType/WIFI\x20MiniProgramEnv/Windows\x20WindowsWechat/WMPF\x20WindowsWechat(0x63090b11)XWEB/9185'},_0x28fdb6={'Accept':_0x5e56c7[_0x3f8da4(0x1d3,'KYE8')],'Accept-Encoding':_0x5e56c7[_0x3f8da4(0x18c,'tbrK')],'Accept-Language':_0x3f8da4(0x204,'XyBH'),'Connection':_0x5e56c7[_0x3f8da4(0x1f1,'CWoW')],'Content-Type':_0x5e56c7[_0x3f8da4(0x1e3,'uLbn')],'Host':'www.kugua.com','Referer':_0x5e56c7['HUocJ'],'Sec-Fetch-Dest':_0x3f8da4(0x194,'sUWS'),'Sec-Fetch-Mode':_0x3f8da4(0x1df,'&v^Y'),'Sec-Fetch-Site':_0x5e56c7['PvRDI'],'User-Agent':_0x5e56c7[_0x3f8da4(0x1ed,'tc2m')],'xweb_xhr':'1'},_0x5c49d2={'refresh_token':_0x55a62e};return axios[_0x3f8da4(0x1aa,'R8w0')](_0x3f8da4(0x1c8,'sUWS'),_0x5c49d2,{'headers':_0x28fdb6})[_0x3f8da4(0x1c0,'Iipt')](_0x381c1f=>{const _0x4a3bdc=_0x3f8da4;return console['log'](_0x381c1f[_0x4a3bdc(0x1ab,'&v^Y')]),_0x381c1f['data']['data'][_0x4a3bdc(0x1b2,'V(%z')];})[_0x3f8da4(0x1d8,'g]vo')](_0x34c5eb=>{const _0x11b951=_0x3f8da4;console[_0x11b951(0x1e7,'z$c8')](_0x11b951(0x1ba,'cYkg'),_0x34c5eb);throw _0x34c5eb;});}function printAsciiArt(){const _0x2d6d6e=_0xe815d6,_0x2f36c1={'QsyFJ':_0x2d6d6e(0x182,'E(]E'),'gHOIW':'//\x20┗━┓\x20\x20\x20┏━┛','ccsoW':'//\x20┃┫┫\x20┃┫┫','rrQSy':_0x2d6d6e(0x1c7,'k9&R'),'vYAkw':_0x2d6d6e(0x202,'tc2m'),'HoqsM':_0x2d6d6e(0x1a4,'0yoJ'),'hmVhi':'//\x20┏┛┻━━━┛┻┓','SBxCJ':'//\x20┃\x20\x20\x20\x20\x20\x20\x20┃','PSvTT':_0x2d6d6e(0x1c3,'z$c8'),'iteTE':_0x2d6d6e(0x1d5,'&v^Y'),'zMzZm':_0x2d6d6e(0x1f8,'w7vY')},_0x21f849=_0x2f36c1['QsyFJ']['split']('|');let _0xe9047a=0x0;while(!![]){switch(_0x21f849[_0xe9047a++]){case'0':console[_0x2d6d6e(0x1f9,'E(]E')](_0x2f36c1[_0x2d6d6e(0x188,'V(%z')]);continue;case'1':console['log'](_0x2d6d6e(0x1e2,'Z^BB'));continue;case'2':console[_0x2d6d6e(0x190,'*rDM')](_0x2d6d6e(0x1e6,'R8w0'));continue;case'3':console['log'](_0x2d6d6e(0x1f7,'w7vY'));continue;case'4':console[_0x2d6d6e(0x18e,'r0i#')](_0x2d6d6e(0x18b,'#Tcs'));continue;case'5':console['log'](_0x2f36c1['ccsoW']);continue;case'6':console[_0x2d6d6e(0x1de,'CWoW')](_0x2f36c1[_0x2d6d6e(0x1ee,'wxsg')]);continue;case'7':console[_0x2d6d6e(0x199,'Z^BB')]('//\x20┃\x20\x20\x20\x20\x20\x20\x20┃');continue;case'8':console[_0x2d6d6e(0x1cd,'tbrK')](_0x2f36c1['vYAkw']);continue;case'9':console[_0x2d6d6e(0x1f5,'OB0q')](_0x2f36c1[_0x2d6d6e(0x1f6,'GgwQ')]);continue;case'10':console['log'](_0x2f36c1[_0x2d6d6e(0x1e1,'*F(L')]);continue;case'11':console[_0x2d6d6e(0x184,'HTPS')](_0x2f36c1['SBxCJ']);continue;case'12':console[_0x2d6d6e(0x1cd,'tbrK')](_0x2f36c1[_0x2d6d6e(0x205,'sZmA')]);continue;case'13':console[_0x2d6d6e(0x1ec,'GgwQ')](_0x2f36c1[_0x2d6d6e(0x1d7,'HTPS')]);continue;case'14':console[_0x2d6d6e(0x1a8,'0n7q')](_0x2f36c1[_0x2d6d6e(0x1bc,'xI0k')]);continue;case'15':console[_0x2d6d6e(0x1a2,'R8w0')](_0x2f36c1[_0x2d6d6e(0x1a3,'Z^BB')]);continue;case'16':console[_0x2d6d6e(0x197,'2uHV')](_0x2d6d6e(0x1f3,'*F(L'));continue;}break;}}async function main(){const _0x1fe478=_0xe815d6,_0x5e5410={'zEHmm':function(_0x4dd84c){return _0x4dd84c();},'tMuEC':function(_0x23da5c,_0x182969){return _0x23da5c===_0x182969;},'qKJWj':_0x1fe478(0x19b,'sZmA'),'NzTGf':'AjvhZ','yblfB':function(_0x41f360,_0x2733d3){return _0x41f360(_0x2733d3);},'tZRrh':function(_0x54862a,_0xf14d05,_0xc9d12){return _0x54862a(_0xf14d05,_0xc9d12);},'DrWgt':function(_0x11d405,_0x1ff604,_0xeac85e,_0x52d89b){return _0x11d405(_0x1ff604,_0xeac85e,_0x52d89b);},'MxfJn':_0x1fe478(0x196,'9Nse')};_0x5e5410[_0x1fe478(0x1c6,'a%ik')](printAsciiArt);const _0x51b435=process['env']['kg'];if(_0x51b435){const _0x4b9eec=_0x51b435[_0x1fe478(0x1cb,'cYkg')]('@')?_0x51b435['split']('@'):_0x51b435[_0x1fe478(0x1b5,'xI0k')]('\x20');console[_0x1fe478(0x17e,'tkQe')]('共'+_0x4b9eec[_0x1fe478(0x1e4,'tc2m')]+_0x1fe478(0x17c,'cYkg'));for(let _0x1b9748=0x0;_0x1b9748<_0x4b9eec[_0x1fe478(0x18d,'E(]E')];_0x1b9748++){const [_0x581fd8,_0x230f4d]=_0x4b9eec[_0x1b9748][_0x1fe478(0x1d0,'*cH(')]('&');try{if(_0x5e5410['tMuEC'](_0x5e5410[_0x1fe478(0x1be,'Iipt')],_0x5e5410[_0x1fe478(0x1a1,'HTPS')])){_0x3a9bff[_0x1fe478(0x183,'2uHV')](_0x1fe478(0x1bd,'i8hA'),_0x43c3db);throw _0x224c66;}else{const _0x3266d4=await _0x5e5410[_0x1fe478(0x1a7,'R8w0')](getToken,_0x581fd8),_0x8eba4b=await _0x5e5410[_0x1fe478(0x1fc,'*cH(')](signIn,_0x3266d4,_0x230f4d);await _0x5e5410['DrWgt'](withdraw,_0x3266d4,_0x230f4d,_0x8eba4b),await new Promise(_0x223a7f=>setTimeout(_0x223a7f,0xbb8));}}catch(_0xd894f8){console['error'](_0xd894f8);continue;}}}else{if(_0x5e5410[_0x1fe478(0x191,'#Tcs')](_0x5e5410[_0x1fe478(0x1b8,'V(%z')],_0x5e5410[_0x1fe478(0x17a,'0n7q')]))console['log'](_0x1fe478(0x203,'sZmA'));else return _0x1b7044['log'](_0x1fe478(0x1e0,'UNPz')),_0xac6b0a[_0x1fe478(0x1eb,'cYkg')](_0x3576f4[_0x1fe478(0x1d9,'tbrK')]),_0x19f8be['data'][_0x1fe478(0x200,'Iipt')][_0x1fe478(0x1fd,'*cH(')];}}main();var version_ = 'jsjiami.com.v7';