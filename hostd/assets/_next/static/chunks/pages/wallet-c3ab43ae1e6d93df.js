(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[789],{69171:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wallet",function(){return t(39117)}])},92522:function(e,n,t){"use strict";t.d(n,{q:function(){return x}});var s=t(52322),i=t(47207),a=t(13369),l=t(6391),o=t.n(l),d=t(74881),r=t(41491),c=t(50002);function u(){var e,n,t,l,o,d,u;let{openDialog:x}=(0,c.Rh)(),m=(0,a.On)({config:{swr:{revalidateOnFocus:!1}}}),h=(0,a.rV)({config:{swr:{revalidateOnFocus:!1}}}),v=(0,r.n)(),f=(0,a.cQ)(),p=null===(e=m.data)||void 0===e?void 0:e.version,j=(null==p?void 0:p.match(/^v\d+\.\d+\.\d+/))?"https://github.com/SiaFoundation/hostd/releases/".concat(p):"https://github.com/SiaFoundation/hostd/tree/".concat(p);return(0,s.jsxs)(i.HfT,{name:"hostd",peerCount:null===(n=f.data)||void 0===n?void 0:n.length,connectPeer:()=>x("connectPeer"),isSynced:v.isSynced,percent:v.percent,nodeBlockHeight:v.nodeBlockHeight,estimatedBlockHeight:v.estimatedBlockHeight,firstTimeSyncing:v.firstTimeSyncing,moreThan100BlocksToSync:v.moreThan100BlocksToSync,children:[(0,s.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,s.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Net address"}),(0,s.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,s.jsx)(i.xS1,{className:"overflow-hidden",size:"14",value:null===(t=h.data)||void 0===t?void 0:t.netAddress,maxLength:50,label:"network address"})})]}),(0,s.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,s.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Public key"}),(0,s.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,s.jsx)(i.xS1,{className:"overflow-hidden",size:"14",value:null===(l=m.data)||void 0===l?void 0:l.publicKey,maxLength:50,label:"public key"})})]}),(0,s.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,s.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Wallet address"}),(0,s.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,s.jsx)(i.xS1,{className:"overflow-hidden",size:"14",maxLength:50,value:null===(o=m.data)||void 0===o?void 0:o.walletAddress,type:"address"})})]}),(0,s.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,s.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Network"}),(0,s.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,s.jsx)(i.xvT,{size:"14",children:null===(d=m.data)||void 0===d?void 0:d.network})})]}),(0,s.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,s.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Version"}),(0,s.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,s.jsx)(i.rUS,{size:"14",href:j,target:"_blank",children:null===(u=m.data)||void 0===u?void 0:u.version})})]})]})}function x(e){let n=(0,a.Os)(),{isSynced:t}=(0,r.n)();return(0,s.jsx)(i.tU3,{appName:"hostd",connectivityRoute:d.h,profile:(0,s.jsx)(u,{}),isSynced:t,walletBalance:n.data?new(o())(n.data.spendable).plus(n.data.unconfirmed):void 0,...e})}},39031:function(e,n,t){"use strict";t.d(n,{N:function(){return r}});var s=t(52322),i=t(47207),a=t(13369),l=t(44905),o=t(74881),d=t(50002);function r(){var e,n;let{openDialog:t}=(0,d.Rh)(),r=(0,a.Z7)(),c=!(null===(e=r.data)||void 0===e?void 0:e.find(e=>"info"!==e.severity)),u=(null===(n=r.data)||void 0===n?void 0:n.length)||0;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.KJW,{title:"Dashboard",route:o._.home,children:(0,s.jsx)(i.K2o,{})}),(0,s.jsx)(i.KJW,{title:"Volumes",route:o._.volumes.index,children:(0,s.jsx)(i.zvn,{})}),(0,s.jsx)(i.KJW,{title:"Contracts",route:o._.contracts.index,children:(0,s.jsx)(i.VBo,{})}),(0,s.jsx)(i.KJW,{title:"Configuration",route:o._.config.index,children:(0,s.jsx)(i.wWN,{})}),(0,s.jsxs)("div",{className:"relative",children:[!!u&&c&&(0,s.jsx)("div",{className:(0,l.cx)("absolute -right-[2px] top-px w-1 h-1","rounded-full","bg-gray-1000 dark:bg-white","pointer-events-none")}),!!u&&!c&&(0,s.jsx)(i.xvT,{size:"10",className:(0,l.cx)("absolute -right-[9px] -top-1 py-px px-[5px]","text-white","bg-red-500 dark:bg-red-500 rounded","pointer-events-none"),color:"none",children:u.toLocaleString()}),(0,s.jsx)(i.KJW,{title:"Alerts",onClick:()=>t("alerts"),children:(0,s.jsx)(i.Dkj,{})})]})]})}},41491:function(e,n,t){"use strict";t.d(n,{n:function(){return a}});var s=t(28031),i=t(13369);function a(){var e,n,t,a;let{isUnlocked:l}=(0,s.Hv)(),o=(0,i.d$)({config:{swr:{refreshInterval:e=>(null==e?void 0:e.synced)?6e4:1e4}}}),d=(0,i.Os)({config:{swr:{refreshInterval:e=>(null==e?void 0:e.scanHeight)>=c-5?6e4:1e4}}}),r=(0,i.nH)(),c=o.data?null===(e=o.data)||void 0===e?void 0:e.chainIndex.height:0,u=l&&c&&r?Number((100*Math.min(c/r,1)).toFixed(1)):0;return{isSynced:null===(n=o.data)||void 0===n?void 0:n.synced,isWalletSynced:(null===(t=o.data)||void 0===t?void 0:t.synced)&&(null===(a=d.data)||void 0===a?void 0:a.scanHeight)>=c-5,nodeBlockHeight:c,estimatedBlockHeight:r,percent:u,moreThan100BlocksToSync:!!c&&!!r&&r-c>100,firstTimeSyncing:!!c&&!!r&&r-c>5e4}}},39117:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var s=t(52322),i=t(47207),a=t(13369),l=t(2784),o=t(50002),d=t(74881),r=t(6391),c=t.n(r),u=t(39031),x=t(92522),m=t(41491);function h(){let e=(0,a.Qq)({params:{limit:50,offset:0}}),n=(0,a.a0)(),{openDialog:t}=(0,o.Rh)(),r=(0,a.Os)(),h=(0,l.useMemo)(()=>[...(n.data||[]).map(e=>({type:"transaction",txType:(0,i.leQ)(e.transaction,e.source),hash:e.ID,timestamp:new Date(e.timestamp).getTime(),sc:new(c())(e.inflow).minus(e.outflow),unconfirmed:!0})),...(e.data||[]).map(e=>({type:"transaction",txType:(0,i.leQ)(e.transaction,e.source),hash:e.ID,timestamp:new Date(e.timestamp).getTime(),onClick:()=>t("transactionDetails",e.ID),sc:new(c())(e.inflow).minus(e.outflow)})).sort((e,n)=>e.timestamp<n.timestamp?1:-1)],[n,e,t]),v=(0,l.useMemo)(()=>{let e=new Date().getTime(),n=(0,i.NrH)(30);return new Date(e-n).toISOString()},[]),f=(0,a.KU)({params:{interval:"daily",start:v}}),p=(0,l.useMemo)(()=>(f.data||[]).map(e=>({sc:Number(e.balance),timestamp:new Date(e.timestamp).getTime()})).sort((e,n)=>e.timestamp>=n.timestamp?1:-1),[f.data]),{isWalletSynced:j}=(0,m.n)();return(0,s.jsx)(x.q,{routes:d._,sidenav:(0,s.jsx)(u.N,{}),openSettings:()=>t("settings"),title:"Wallet",actions:(0,s.jsx)(i.QUh,{isSynced:j,sc:r.data?new(c())(r.data.spendable).plus(r.data.unconfirmed):void 0,receiveSiacoin:()=>t("addressDetails"),sendSiacoin:()=>t("sendSiacoin")}),stats:!j&&(0,s.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,s.jsx)(i.xvT,{color:"amber",children:(0,s.jsx)(i.qdM,{})}),(0,s.jsx)(i.xvT,{size:"14",children:"Blockchain is syncing, transaction data may be incomplete."})]}),children:(0,s.jsxs)("div",{className:"p-6 flex flex-col gap-5",children:[(0,s.jsx)(i.Z58,{balances:p,isLoading:f.isValidating}),(0,s.jsx)(i.xUn,{title:"Transactions",entities:h.slice(0,100)})]})})}function v(){return(0,s.jsx)(h,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=69171)}),_N_E=e.O()}]);