(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54],{27725:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/node",function(){return t(16365)}])},53644:function(e,n,t){"use strict";t.d(n,{q:function(){return f}});var s=t(52322),i=t(64453),l=t(2002),a=t(6391),r=t.n(a),d=t(98334),o=t(38855);function c(){let e=(0,l.On)({config:{swr:{revalidateOnFocus:!1}}});return e.data&&"Mainnet"!==e.data.network?(0,s.jsx)(i.t6k,{testnetName:e.data.network}):null}var u=t(86254),x=t(74667),h=t(21487);function v(){var e,n,t,a,r,d,c,v;let{openDialog:f}=(0,u.Rh)(),m=(0,l.On)({config:{swr:{revalidateOnFocus:!1}}}),j=(0,l.rV)({config:{swr:{revalidateOnFocus:!1}}}),p=(0,o.n)(),g=(0,l.cQ)(),w=(0,x.B)(),b=null===(e=m.data)||void 0===e?void 0:e.version,N=(null==b?void 0:b.match(/^v\d+\.\d+\.\d+/))?"https://github.com/SiaFoundation/hostd/releases/".concat(b):"https://github.com/SiaFoundation/hostd/tree/".concat(b),y=m.data?new Date().getTime()-new Date(null===(n=m.data)||void 0===n?void 0:n.startTime).getTime():0;return(0,s.jsxs)(i.HfT,{name:"hostd",peerCount:null===(t=g.data)||void 0===t?void 0:t.length,connectPeer:()=>f("connectPeer"),isSynced:p.isSynced,syncPercent:p.syncPercent,nodeBlockHeight:p.nodeBlockHeight,estimatedBlockHeight:p.estimatedBlockHeight,firstTimeSyncing:p.firstTimeSyncing,moreThan100BlocksToSync:p.moreThan100BlocksToSync,children:[(0,s.jsxs)("div",{className:"flex gap-2 justify-between items-center",children:[(0,s.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Net address"}),(0,s.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden -mr-0.5 pr-0.5",children:(0,s.jsx)(i.XxW,{size:"14",value:null===(a=j.data)||void 0===a?void 0:a.netAddress,maxLength:24,label:"network address",type:"hostIp",siascanUrl:w})})]}),(0,s.jsxs)("div",{className:"flex gap-2 justify-between items-center",children:[(0,s.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Public key"}),(0,s.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden -mr-0.5 pr-0.5",children:(0,s.jsx)(i.XxW,{size:"14",value:null===(r=m.data)||void 0===r?void 0:r.publicKey,maxLength:24,label:"public key",type:"hostPublicKey",siascanUrl:w})})]}),(0,s.jsxs)("div",{className:"flex gap-2 justify-between items-center",children:[(0,s.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Wallet address"}),(0,s.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden -mr-0.5 pr-0.5",children:(0,s.jsx)(i.XxW,{size:"14",maxLength:24,value:null===(d=m.data)||void 0===d?void 0:d.walletAddress,type:"address"})})]}),m.data&&(0,s.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,s.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Uptime"}),(0,s.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden -mr-0.5 pr-0.5",children:(0,s.jsx)(i.xvT,{size:"14",children:(0,h.bc)(y,{format:"long"})})})]}),(0,s.jsxs)("div",{className:"flex gap-2 justify-between items-center",children:[(0,s.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Network"}),(0,s.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,s.jsx)(i.xvT,{size:"14",children:null===(c=m.data)||void 0===c?void 0:c.network})})]}),(0,s.jsxs)("div",{className:"flex gap-2 justify-between items-center",children:[(0,s.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Version"}),(0,s.jsx)(i.rUS,{size:"14",href:N,underline:"hover",target:"_blank",ellipsis:!0,children:null===(v=m.data)||void 0===v?void 0:v.version})]})]})}function f(e){let n=(0,l.Os)(),{isSynced:t}=(0,o.n)();return(0,s.jsx)(i.tU3,{appName:"hostd",connectivityRoute:d.h,banner:(0,s.jsx)(c,{}),profile:(0,s.jsx)(v,{}),isSynced:t,walletBalanceSc:n.data&&{spendable:new(r())(n.data.spendable),confirmed:new(r())(n.data.confirmed),unconfirmed:new(r())(n.data.unconfirmed)},...e})}},77002:function(e,n,t){"use strict";t.d(n,{N:function(){return c}});var s=t(52322),i=t(64453),l=t(95685),a=t(2002),r=t(82851),d=t(98334),o=t(86254);function c(){var e,n;let{openDialog:t}=(0,o.Rh)(),c=(0,a.Z7)(),u=!(null===(e=c.data)||void 0===e?void 0:e.find(e=>"info"!==e.severity)),x=(null===(n=c.data)||void 0===n?void 0:n.length)||0;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.KJW,{title:"Dashboard",route:d._.home,children:(0,s.jsx)(l.K2o,{})}),(0,s.jsx)(i.KJW,{title:"Volumes",route:d._.volumes.index,children:(0,s.jsx)(l.zvn,{})}),(0,s.jsx)(i.KJW,{title:"Contracts",route:d._.contracts.index,children:(0,s.jsx)(l.VBo,{})}),(0,s.jsx)(i.KJW,{title:"Configuration",route:d._.config.index,children:(0,s.jsx)(l.wWN,{})}),(0,s.jsxs)("div",{className:"relative",children:[!!x&&u&&(0,s.jsx)("div",{className:(0,r.cx)("absolute -right-[2px] top-px w-1 h-1","rounded-full","bg-gray-1000 dark:bg-white","pointer-events-none")}),!!x&&!u&&(0,s.jsx)(i.xvT,{size:"10",className:(0,r.cx)("absolute -right-[9px] -top-1 py-px px-[5px]","text-white","bg-red-500 dark:bg-red-500 rounded","pointer-events-none"),color:"none",children:x.toLocaleString()}),(0,s.jsx)(i.KJW,{title:"Alerts",onClick:()=>t("alerts"),children:(0,s.jsx)(l.Dkj,{})})]})]})}},16365:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var s=t(52322),i=t(64453),l=t(2002),a=t(98334),r=t(86254),d=t(77002),o=t(53644),c=t(2784),u=t(52390),x=t(97885),h=t(38855);function v(){var e;let n=(0,l.cQ)(),t=(0,h.n)(),{openDialog:v}=(0,r.Rh)(),f=(0,c.useMemo)(()=>{var e,t,s;return n.data?(e=n.data,t=["address"],null==e?[]:((0,x.Z)(t)||(t=null==t?[]:[t]),(0,x.Z)(s)||(s=null==s?[]:[s]),(0,u.Z)(e,t,s))).map(e=>e.address):null},[n.data]);return(0,s.jsx)(o.q,{routes:a._,sidenav:(0,s.jsx)(d.N,{}),openSettings:()=>v("settings"),title:"Node",children:(0,s.jsxs)("div",{className:"p-6 flex flex-col gap-5",children:[(0,s.jsxs)("div",{className:"flex flex-wrap gap-7",children:[(0,s.jsx)(i.ncR,{label:"Height",value:t.nodeBlockHeight?t.nodeBlockHeight.toLocaleString():void 0,comment:t.isSynced?void 0:"Syncing to ".concat(t.estimatedBlockHeight.toLocaleString())}),(0,s.jsx)(i.ncR,{label:"Connected peers",value:null===(e=n.data)||void 0===e?void 0:e.length})]}),(0,s.jsx)(i.u5Q,{peers:f,isLoading:n.isValidating,connectPeer:()=>v("connectPeer")})]})})}function f(){return(0,s.jsx)(v,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=27725)}),_N_E=e.O()}]);