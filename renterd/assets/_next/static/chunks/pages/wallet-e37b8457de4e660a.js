(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[789],{69171:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wallet",function(){return n(39117)}])},67465:function(e,t,n){"use strict";n.d(t,{J:function(){return x}});var i=n(52322),a=n(39140),s=n(73621),o=n(6391),r=n.n(o),l=n(74881),c=n(41491),d=n(99484);function u(){var e,t,n;let{openDialog:o}=(0,d.Rh)(),r=(0,s.gM)({config:{swr:{revalidateOnFocus:!1}}}),l=(0,s.Tu)({config:{swr:{revalidateOnFocus:!1}}}),u=(0,s.cQ)(),m=(0,c.n)();return(0,i.jsxs)(a.HfT,{name:"renterd",peerCount:null===(e=u.data)||void 0===e?void 0:e.length,connectPeer:()=>o("connectPeer"),isSynced:m.isSynced,syncPercent:m.syncPercent,nodeBlockHeight:m.nodeBlockHeight,estimatedBlockHeight:m.estimatedBlockHeight,firstTimeSyncing:m.firstTimeSyncing,moreThan100BlocksToSync:m.moreThan100BlocksToSync,children:[(0,i.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,i.jsx)(a.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Wallet address"}),(0,i.jsx)(a.XxW,{className:"overflow-hidden",size:"14",maxLength:50,value:null===(t=l.data)||void 0===t?void 0:t.address,type:"address"})]}),(0,i.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,i.jsx)(a.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Network"}),(0,i.jsx)(a.xvT,{size:"14",children:null===(n=r.data)||void 0===n?void 0:n.Name})]})]})}function m(){let e=(0,s.gM)({config:{swr:{revalidateOnFocus:!1}}});if(!e.data||"mainnet"===e.data.Name)return null;let t="zen"===e.data.Name?"Zen Testnet":e.data.Name;return(0,i.jsx)(a.t6k,{testnetName:t})}function x(e){let t=(0,s.Tu)(),{isSynced:n}=(0,c.n)();return(0,i.jsx)(a.tU3,{appName:"renterd",profile:(0,i.jsx)(u,{}),banner:(0,i.jsx)(m,{}),connectivityRoute:l.h,isSynced:n,walletBalance:t.data?new(r())(t.data.confirmed):void 0,...e})}},15755:function(e,t,n){"use strict";n.d(t,{e:function(){return d}});var i=n(52322),a=n(39140),s=n(73621),o=n(44905),r=n(74881),l=n(36091),c=n(99484);function d(){var e,t;let{autopilot:n}=(0,l.q)(),d=(0,s.Z7)(),{openDialog:u}=(0,c.Rh)(),m=!(null===(e=d.data)||void 0===e?void 0:e.find(e=>"info"!==e.severity)),x=(null===(t=d.data)||void 0===t?void 0:t.length)||0;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.KJW,{title:"Files",route:r._.files.index,children:(0,i.jsx)(a.ROc,{})}),"on"===n.state&&(0,i.jsx)(a.KJW,{title:"Autopilot",route:r._.autopilot.index,children:(0,i.jsx)(a.aFQ,{})}),(0,i.jsx)(a.KJW,{title:"Configuration",route:r._.config.index,children:(0,i.jsx)(a.wWN,{})}),(0,i.jsx)(a.KJW,{title:"Contracts",route:r._.contracts.index,children:(0,i.jsx)(a.VBo,{})}),(0,i.jsx)(a.KJW,{title:"Hosts",route:r._.hosts.index,children:(0,i.jsx)(a.VHe,{})}),(0,i.jsxs)("div",{className:"relative",children:[!!x&&m&&(0,i.jsx)("div",{className:(0,o.cx)("absolute -right-[2px] top-px w-1 h-1","rounded-full","bg-gray-1000 dark:bg-white","pointer-events-none")}),!!x&&!m&&(0,i.jsx)(a.xvT,{size:"10",className:(0,o.cx)("absolute -right-[9px] -top-1 py-px px-[5px]","text-white","bg-red-500 dark:bg-red-500 rounded","pointer-events-none"),color:"none",children:x.toLocaleString()}),(0,i.jsx)(a.KJW,{title:"Alerts",onClick:()=>u("alerts"),children:(0,i.jsx)(a.Dkj,{})})]})]})}},41491:function(e,t,n){"use strict";n.d(t,{n:function(){return s}});var i=n(48240),a=n(73621);function s(){var e,t,n,s;let{isUnlocked:o}=(0,i.Hv)(),r=(0,a.DQ)({config:{swr:{refreshInterval:e=>(null==e?void 0:e.synced)?6e4:1e4}}}),l=(0,a.nH)(),c=r.data?null===(e=r.data)||void 0===e?void 0:e.blockHeight:0,d=(0,a.Tu)({config:{swr:{refreshInterval:e=>(null==e?void 0:e.scanHeight)>=c?6e4:1e4}}}),u=o&&c&&l?Number((100*Math.min(c/l,1)).toFixed(1)):0,m=o&&c&&d.data?Number((100*Math.min(d.data.scanHeight/l,1)).toFixed(1)):0;return{isSynced:null===(t=r.data)||void 0===t?void 0:t.synced,isWalletSynced:(null===(n=r.data)||void 0===n?void 0:n.synced)&&(null===(s=d.data)||void 0===s?void 0:s.scanHeight)>=c-1,nodeBlockHeight:c,estimatedBlockHeight:l,syncPercent:u,walletScanPercent:m,moreThan100BlocksToSync:!!c&&!!l&&l-c>100,firstTimeSyncing:!!c&&!!l&&l-c>5e4}}},39117:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var i=n(52322),a=n(39140),s=n(73621),o=n(2784),r=n(99484),l=n(74881),c=n(6391),d=n.n(c),u=n(15755),m=n(67465),x=n(41491);function f(){let e=(0,s.Qq)({params:{},config:{swr:{refreshInterval:6e4,revalidateOnFocus:!1}}}),t=(0,s.a0)(),{openDialog:n}=(0,r.Rh)(),c=(0,o.useMemo)(()=>t.data&&e.data?[...(t.data||[]).map(e=>({type:"transaction",txType:(0,a.leQ)(e),unconfirmed:!0})),...(e.data||[]).map(e=>({type:"transaction",txType:(0,a.leQ)(e.raw),hash:e.id,timestamp:new Date(e.timestamp).getTime(),onClick:()=>n("transactionDetails",e.id),sc:new(d())(e.inflow).minus(e.outflow)})).sort((e,t)=>e.timestamp<t.timestamp?1:-1)]:null,[t.data,e.data,n]),f=(0,o.useMemo)(()=>{var t;return null===(t=e.data)||void 0===t?void 0:t.sort((e,t)=>e.timestamp>t.timestamp?1:-1).reduce((e,t,n)=>0===n?e.concat({sc:new(d())(t.inflow).minus(t.outflow).toNumber(),timestamp:new Date(t.timestamp).getTime()}):e.concat({sc:new(d())(e[n-1].sc).plus(t.inflow).minus(t.outflow).toNumber(),timestamp:new Date(t.timestamp).getTime()}),[])},[e.data]),v=(0,s.Tu)(),{isSynced:h,syncPercent:p,isWalletSynced:g,walletScanPercent:w}=(0,x.n)();return(0,i.jsx)(m.J,{routes:l._,sidenav:(0,i.jsx)(u.e,{}),openSettings:()=>n("settings"),title:"Wallet",actions:(0,i.jsx)(a.QUh,{isSynced:h,isWalletSynced:g,syncPercent:p,walletScanPercent:w,sc:v.data?new(d())(v.data.confirmed):void 0,receiveSiacoin:()=>n("addressDetails"),sendSiacoin:()=>n("sendSiacoin")}),stats:(0,i.jsx)(a.DmW,{isSynced:h,isWalletSynced:g,syncPercent:p,walletScanPercent:w}),children:(0,i.jsxs)("div",{className:"p-6 flex flex-col gap-5",children:[(0,i.jsx)(a.Z58,{chartType:"line",balances:f,isLoading:e.isValidating}),(0,i.jsx)(a.xUn,{title:"Transactions",entities:null==c?void 0:c.slice(0,100)})]})})}function v(){return(0,i.jsx)(f,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=69171)}),_N_E=e.O()}]);