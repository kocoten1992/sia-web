(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54],{27725:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/node",function(){return t(88637)}])},21197:function(e,n,t){"use strict";t.d(n,{q:function(){return v}});var s=t(52322),i=t(84031),a=t(13369),l=t(6391),d=t.n(l),o=t(74881),r=t(41491);function c(){let e=(0,a.On)({config:{swr:{revalidateOnFocus:!1}}});return e.data&&"Mainnet"!==e.data.network?(0,s.jsx)(i.t6k,{testnetName:e.data.network}):null}var u=t(50002);function x(){var e,n,t,l,d,o,c;let{openDialog:x}=(0,u.Rh)(),v=(0,a.On)({config:{swr:{revalidateOnFocus:!1}}}),h=(0,a.rV)({config:{swr:{revalidateOnFocus:!1}}}),f=(0,r.n)(),m=(0,a.cQ)(),j=null===(e=v.data)||void 0===e?void 0:e.version,g=(null==j?void 0:j.match(/^v\d+\.\d+\.\d+/))?"https://github.com/SiaFoundation/hostd/releases/".concat(j):"https://github.com/SiaFoundation/hostd/tree/".concat(j);return(0,s.jsxs)(i.HfT,{name:"hostd",peerCount:null===(n=m.data)||void 0===n?void 0:n.length,connectPeer:()=>x("connectPeer"),isSynced:f.isSynced,syncPercent:f.syncPercent,nodeBlockHeight:f.nodeBlockHeight,estimatedBlockHeight:f.estimatedBlockHeight,firstTimeSyncing:f.firstTimeSyncing,moreThan100BlocksToSync:f.moreThan100BlocksToSync,children:[(0,s.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,s.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Net address"}),(0,s.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,s.jsx)(i.XxW,{className:"overflow-hidden",size:"14",value:null===(t=h.data)||void 0===t?void 0:t.netAddress,maxLength:50,label:"network address"})})]}),(0,s.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,s.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Public key"}),(0,s.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,s.jsx)(i.XxW,{className:"overflow-hidden",size:"14",value:null===(l=v.data)||void 0===l?void 0:l.publicKey,maxLength:50,label:"public key"})})]}),(0,s.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,s.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Wallet address"}),(0,s.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,s.jsx)(i.XxW,{className:"overflow-hidden",size:"14",maxLength:50,value:null===(d=v.data)||void 0===d?void 0:d.walletAddress,type:"address"})})]}),(0,s.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,s.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Network"}),(0,s.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,s.jsx)(i.xvT,{size:"14",children:null===(o=v.data)||void 0===o?void 0:o.network})})]}),(0,s.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,s.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Version"}),(0,s.jsx)(i.rUS,{size:"14",href:g,underline:"hover",target:"_blank",ellipsis:!0,children:null===(c=v.data)||void 0===c?void 0:c.version})]})]})}function v(e){let n=(0,a.Os)(),{isSynced:t}=(0,r.n)();return(0,s.jsx)(i.tU3,{appName:"hostd",connectivityRoute:o.h,banner:(0,s.jsx)(c,{}),profile:(0,s.jsx)(x,{}),isSynced:t,walletBalance:n.data?new(d())(n.data.spendable).plus(n.data.unconfirmed):void 0,...e})}},39031:function(e,n,t){"use strict";t.d(n,{N:function(){return r}});var s=t(52322),i=t(84031),a=t(13369),l=t(44905),d=t(74881),o=t(50002);function r(){var e,n;let{openDialog:t}=(0,o.Rh)(),r=(0,a.Z7)(),c=!(null===(e=r.data)||void 0===e?void 0:e.find(e=>"info"!==e.severity)),u=(null===(n=r.data)||void 0===n?void 0:n.length)||0;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.KJW,{title:"Dashboard",route:d._.home,children:(0,s.jsx)(i.K2o,{})}),(0,s.jsx)(i.KJW,{title:"Volumes",route:d._.volumes.index,children:(0,s.jsx)(i.zvn,{})}),(0,s.jsx)(i.KJW,{title:"Contracts",route:d._.contracts.index,children:(0,s.jsx)(i.VBo,{})}),(0,s.jsx)(i.KJW,{title:"Configuration",route:d._.config.index,children:(0,s.jsx)(i.wWN,{})}),(0,s.jsxs)("div",{className:"relative",children:[!!u&&c&&(0,s.jsx)("div",{className:(0,l.cx)("absolute -right-[2px] top-px w-1 h-1","rounded-full","bg-gray-1000 dark:bg-white","pointer-events-none")}),!!u&&!c&&(0,s.jsx)(i.xvT,{size:"10",className:(0,l.cx)("absolute -right-[9px] -top-1 py-px px-[5px]","text-white","bg-red-500 dark:bg-red-500 rounded","pointer-events-none"),color:"none",children:u.toLocaleString()}),(0,s.jsx)(i.KJW,{title:"Alerts",onClick:()=>t("alerts"),children:(0,s.jsx)(i.Dkj,{})})]})]})}},41491:function(e,n,t){"use strict";t.d(n,{n:function(){return a}});var s=t(41755),i=t(13369);function a(){var e,n,t,a;let{isUnlocked:l}=(0,s.Hv)(),d=(0,i.d$)({config:{swr:{refreshInterval:e=>(null==e?void 0:e.synced)?6e4:1e4}}}),o=(0,i.nH)(),r=d.data?null===(e=d.data)||void 0===e?void 0:e.chainIndex.height:0,c=(0,i.Os)({config:{swr:{refreshInterval:e=>(null==e?void 0:e.scanHeight)>=r?6e4:1e4}}}),u=l&&r&&o?Number((100*Math.min(r/o,1)).toFixed(1)):0,x=l&&r&&c.data?Number((100*Math.min(c.data.scanHeight/o,1)).toFixed(1)):0;return{isSynced:null===(n=d.data)||void 0===n?void 0:n.synced,isWalletSynced:(null===(t=d.data)||void 0===t?void 0:t.synced)&&(null===(a=c.data)||void 0===a?void 0:a.scanHeight)>=r-1,nodeBlockHeight:r,estimatedBlockHeight:o,syncPercent:u,walletScanPercent:x,moreThan100BlocksToSync:!!r&&!!o&&o-r>100,firstTimeSyncing:!!r&&!!o&&o-r>5e4}}},88637:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var s=t(52322),i=t(84031),a=t(13369),l=t(74881),d=t(50002),o=t(39031),r=t(21197),c=t(2784),u=t(76635);function x(){var e,n;let t=(0,a.cQ)(),x=(0,a.d$)({config:{swr:{refreshInterval:3e4}}}),{openDialog:v}=(0,d.Rh)(),h=(0,c.useMemo)(()=>t.data?(0,u.orderBy)(t.data,["address"]).map(e=>e.address):null,[t.data]);return(0,s.jsx)(r.q,{routes:l._,sidenav:(0,s.jsx)(o.N,{}),openSettings:()=>v("settings"),title:"Node",children:(0,s.jsxs)("div",{className:"p-6 flex flex-col gap-5",children:[(0,s.jsxs)("div",{className:"flex flex-wrap gap-7",children:[(0,s.jsx)(i.ncR,{label:"Height",value:x.data?x.data.chainIndex.height.toLocaleString():void 0,comment:(null===(e=x.data)||void 0===e?void 0:e.synced)?void 0:"Syncing"}),(0,s.jsx)(i.ncR,{label:"Connected peers",value:null===(n=t.data)||void 0===n?void 0:n.length})]}),(0,s.jsx)(i.u5Q,{peers:h,connectPeer:()=>v("connectPeer")})]})})}function v(){return(0,s.jsx)(x,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=27725)}),_N_E=e.O()}]);