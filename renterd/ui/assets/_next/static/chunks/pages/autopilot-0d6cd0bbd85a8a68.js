(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[438],{98292:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/autopilot",function(){return o(17179)}])},16133:function(e,t,o){"use strict";o.d(t,{J:function(){return h}});var n=o(52322),i=o(11314),s=o(73621),a=o(6391),r=o.n(a),l=o(74881),d=o(41491),c=o(30650);function u(){var e,t;let{openDialog:o}=(0,c.Rh)(),a=(0,s.gM)({config:{swr:{revalidateOnFocus:!1}}}),r=(0,s.GJ)({config:{swr:{revalidateOnFocus:!1}}}),l=(0,s.cQ)(),u=(0,d.n)();return(0,n.jsxs)(i.HfT,{name:"renterd",peerCount:null===(e=l.data)||void 0===e?void 0:e.length,connectPeer:()=>o("connectPeer"),isSynced:u.isSynced,percent:u.percent,nodeBlockHeight:u.nodeBlockHeight,estimatedBlockHeight:u.estimatedBlockHeight,firstTimeSyncing:u.firstTimeSyncing,moreThan100BlocksToSync:u.moreThan100BlocksToSync,children:[(0,n.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,n.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Wallet address"}),(0,n.jsx)(i.xS1,{className:"overflow-hidden",size:"14",maxLength:50,value:r.data,type:"address"})]}),(0,n.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,n.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Network"}),(0,n.jsx)(i.xvT,{size:"14",children:null===(t=a.data)||void 0===t?void 0:t.Name})]})]})}function h(e){let t=(0,s.tM)(),{isSynced:o}=(0,d.n)();return(0,n.jsx)(i.tU3,{appName:"renterd",profile:(0,n.jsx)(u,{}),connectivityRoute:l.h,isSynced:o,walletBalance:t.data?new(r())(t.data):void 0,...e})}},15755:function(e,t,o){"use strict";o.d(t,{e:function(){return r}});var n=o(52322),i=o(11314),s=o(74881),a=o(13121);function r(){let{autopilotMode:e}=(0,a.K)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.KJW,{title:"Files",route:s._.files.index,children:(0,n.jsx)(i.ROc,{})}),"on"===e&&(0,n.jsx)(i.KJW,{title:"Autopilot",route:s._.autopilot.index,children:(0,n.jsx)(i.aFQ,{})}),(0,n.jsx)(i.KJW,{title:"Contracts",route:s._.contracts.index,children:(0,n.jsx)(i.VBo,{})}),(0,n.jsx)(i.KJW,{title:"Hosts",route:s._.hosts.index,children:(0,n.jsx)(i.VHe,{})}),(0,n.jsx)(i.KJW,{title:"Configuration",route:s._.config.index,children:(0,n.jsx)(i.wWN,{})})]})}},41491:function(e,t,o){"use strict";o.d(t,{n:function(){return s}});var n=o(28031),i=o(73621);function s(){var e,t;let{isUnlocked:o}=(0,n.Hv)(),s=(0,i.DQ)({config:{swr:{refreshInterval:e=>(null==e?void 0:e.synced)?6e4:1e4}}}),a=(0,i.nH)(),r=s.data?null===(e=s.data)||void 0===e?void 0:e.blockHeight:0,l=o&&r&&a?Number((100*Math.min(r/a,1)).toFixed(1)):0;return{isSynced:null===(t=s.data)||void 0===t?void 0:t.synced,nodeBlockHeight:r,estimatedBlockHeight:a,percent:l,moreThan100BlocksToSync:!!r&&!!a&&a-r>100,firstTimeSyncing:!!r&&!!a&&a-r>5e4}}},17179:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return f}});var n=o(52322),i=o(11314),s=o(6391),a=o.n(s),r=o(2784),l=o(15755),d=o(74881),c=o(30650),u=o(16133),h=o(73621),m=o(2288);let g={set:"",amount:void 0,allowance:void 0,period:void 0,renewWindow:void 0,download:void 0,upload:void 0,storage:void 0,allowRedundantIPs:!1,maxDowntimeHours:void 0,defragThreshold:void 0},w={storage:{type:"number",category:"contracts",title:"Expected storage",description:(0,n.jsx)(n.Fragment,{children:"The amount of storage you would like to rent in TB."}),units:"TB",validation:{required:"required"}},upload:{type:"number",category:"contracts",title:"Expected upload",description:(0,n.jsx)(n.Fragment,{children:"The amount of upload bandwidth you plan to use each period in TB."}),units:"TB/period",validation:{required:"required"}},download:{type:"number",category:"contracts",title:"Expected download",description:(0,n.jsx)(n.Fragment,{children:"The amount of download bandwidth you plan to use each period in TB."}),units:"TB/period",validation:{required:"required"}},allowance:{type:"siacoin",category:"contracts",title:"Allowance",description:(0,n.jsx)(n.Fragment,{children:"The amount of Siacoin you would like to spend for the period."}),decimalsLimitSc:6,validation:{required:"required"}},period:{type:"number",category:"contracts",title:"Period",description:(0,n.jsx)(n.Fragment,{children:"The length of the storage contracts."}),units:"weeks",suggestion:new(a())(6),suggestionTip:"Typically 6 weeks.",validation:{required:"required"}},renewWindow:{type:"number",category:"contracts",title:"Renew window",description:(0,n.jsx)(n.Fragment,{children:"The number of weeks prior to contract expiration that Sia will attempt to renew your contracts."}),units:"weeks",decimalsLimit:6,suggestion:new(a())(2),suggestionTip:"Typically 2 weeks.",validation:{required:"required"}},amount:{type:"number",category:"contracts",title:"Hosts",description:(0,n.jsx)(n.Fragment,{children:"The number of hosts to create contracts with."}),units:"hosts",decimalsLimit:0,suggestion:new(a())(50),suggestionTip:"Typically 50 hosts.",validation:{required:"required"}},set:{type:"text",category:"contracts",title:"Contract set",description:(0,n.jsx)(n.Fragment,{children:"The contract set that autopilot should use."}),placeholder:"autopilot",suggestion:"autopilot",suggestionTip:(0,n.jsxs)(n.Fragment,{children:["The default contract set is ",(0,n.jsx)(i.EKh,{children:"autopilot"}),", only change this if you understand the implications."]}),validation:{required:"required"}},allowRedundantIPs:{type:"boolean",category:"hosts",title:"Redundant IPs",description:(0,n.jsx)(n.Fragment,{children:"Whether or not to allow forming contracts with multiple hosts in the same IP subnet. The subnets used are /16 for IPv4, and /64 for IPv6."}),suggestion:!1,suggestionTip:"Defaults to off.",validation:{}},maxDowntimeHours:{type:"number",category:"hosts",title:"Max downtime",description:(0,n.jsx)(n.Fragment,{children:"The maximum amount of host downtime that autopilot will tolerate in hours."}),units:"hours",suggestion:new(a())(1440),suggestionTip:"Defaults to 1,440 which is 60 days.",validation:{required:"required"}},defragThreshold:{type:"number",category:"wallet",title:"Defrag threshold",description:(0,n.jsx)(n.Fragment,{children:"The threshold after which autopilot will defrag outputs."}),units:"outputs",suggestion:new(a())(1e3),suggestionTip:"Defaults to 1,000.",validation:{required:"required"}}};var p=o(63955);function x(){let{openDialog:e}=(0,c.Rh)(),t=(0,h.oe)(),o=(0,h.e$)({config:{swr:{revalidateOnFocus:!1}}}),s=(0,p.cI)({mode:"all",defaultValues:g}),x=(0,r.useCallback)(async e=>{if(o.data)try{var n;await t.put({payload:{...n=o.data,contracts:{...null==n?void 0:n.contracts,set:e.set,amount:Math.round(e.amount.toNumber()),allowance:(0,m.qN)(e.allowance).toString(),period:Math.round((0,i.mvJ)(e.period.toNumber())),renewWindow:Math.round((0,i.mvJ)(e.renewWindow.toNumber())),download:(0,i.xf5)(e.download).toNumber(),upload:(0,i.xf5)(e.upload).toNumber(),storage:(0,i.xf5)(e.storage).toNumber()},hosts:{...null==n?void 0:n.hosts,maxDowntimeHours:e.maxDowntimeHours.toNumber(),allowRedundantIPs:e.allowRedundantIPs,scoreOverrides:(null==n?void 0:n.hosts.scoreOverrides)||null},wallet:{...null==n?void 0:n.wallet,defragThreshold:e.defragThreshold.toNumber()}}}),(0,i.OPV)("Configuration has been saved.")}catch(s){(0,i.OHV)(s.message),console.log(s)}},[o.data,t]),f=(0,i.WsO)(w),v=(0,r.useMemo)(()=>s.handleSubmit(x,f),[s,x,f]),y=(0,r.useCallback)(()=>{o.data&&s.reset(function(e){let t=e.contracts.set,o=(0,m.ll)(e.contracts.allowance,6),n=new(a())(e.contracts.amount),s=new(a())((0,i.x5w)(e.contracts.period)),r=new(a())((0,i.x5w)(e.contracts.renewWindow)),l=(0,i.JWi)(new(a())(e.contracts.download)),d=(0,i.JWi)(new(a())(e.contracts.upload)),c=(0,i.JWi)(new(a())(e.contracts.storage));return{set:t,allowance:o,amount:n,period:s,renewWindow:r,download:l,upload:d,storage:c,allowRedundantIPs:e.hosts.allowRedundantIPs,maxDowntimeHours:new(a())(e.hosts.maxDowntimeHours),defragThreshold:new(a())(e.wallet.defragThreshold)}}(o.data))},[s,o]),j=(0,r.useCallback)(async()=>{await o.mutate(),y()},[y,o]);(0,r.useEffect)(()=>{y()},[o.data]);let T=s.watch("storage"),b=s.watch("period"),N=s.watch("allowance"),k=(0,r.useMemo)(()=>!(!T||!b||!N||T.isZero()||b.isZero()||N.isZero()),[T,b,N]),S=(0,r.useMemo)(()=>{if(!k)return new(a())(0);let e=N.div(b),t=e.div(7).times(30);return(0,m.IZ)(t,0)},[k,b,N]),q=Object.entries(s.formState.dirtyFields).filter(e=>{let[t,o]=e;return!!o}).length,{fiat:W,currency:_}=(0,i.fb0)({sc:S});return(0,n.jsx)(u.J,{title:"Autopilot",routes:d._,sidenav:(0,n.jsx)(l.e,{}),stats:k?(0,n.jsxs)("div",{className:"flex gap-3",children:[(0,n.jsx)(i.xvT,{size:"12",font:"mono",weight:"medium",children:"Estimate:"}),(0,n.jsxs)("div",{className:"flex gap-1",children:[(0,n.jsx)(i.YKL,{size:"12",value:(0,m.qN)(S),dynamicUnits:!1,fixed:0,variant:"value"}),W&&(0,n.jsx)("div",{className:"flex",children:(0,n.jsx)(i.m2c,{size:"12",weight:"medium",value:W,color:"subtle",variant:"value",format:e=>"(".concat(_.prefix).concat(e.toFixed(_.fixed),")")})}),(0,n.jsxs)(i.xvT,{size:"12",font:"mono",weight:"medium",children:["per month to store ",(0,m.vW)((0,i.xf5)(T).toNumber())]})]})]}):(0,n.jsx)(i.xvT,{size:"12",font:"mono",weight:"medium",children:"Enter expected storage, period, and allowance values to estimate monthly spending."}),actions:(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[!!q&&(0,n.jsx)(i.xvT,{size:"12",color:"subtle",children:1===q?"1 change":"".concat(q," changes")}),(0,n.jsx)(i.zxk,{tip:"Reset all changes",icon:"contrast",disabled:!q,onClick:()=>j(),children:(0,n.jsx)(i.Wet,{})}),(0,n.jsxs)(i.zxk,{tip:"Save all changes",variant:"accent",disabled:!s.formState.isDirty||s.formState.isSubmitting,onClick:v,children:[(0,n.jsx)(i.ZEk,{}),"Save changes"]})]}),openSettings:()=>e("settings"),children:(0,n.jsxs)("div",{className:"px-5 py-6 flex flex-col gap-16 max-w-screen-xl",children:[(0,n.jsx)(i.vRO,{title:"Contracts",category:"contracts",fields:w,form:s}),(0,n.jsx)(i.vRO,{title:"Hosts",category:"hosts",fields:w,form:s}),(0,n.jsx)(i.vRO,{title:"Wallet",category:"wallet",fields:w,form:s})]})})}function f(){return(0,n.jsx)(x,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=98292)}),_N_E=e.O()}]);