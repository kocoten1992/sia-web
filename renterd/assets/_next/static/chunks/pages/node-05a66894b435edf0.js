(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54],{27725:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/node",function(){return t(88637)}])},67465:function(e,n,t){"use strict";t.d(n,{J:function(){return x}});var i=t(52322),s=t(39140),a=t(73621),r=t(6391),o=t.n(r),l=t(74881),c=t(41491),d=t(99484);function u(){var e,n,t;let{openDialog:r}=(0,d.Rh)(),o=(0,a.gM)({config:{swr:{revalidateOnFocus:!1}}}),l=(0,a.Tu)({config:{swr:{revalidateOnFocus:!1}}}),u=(0,a.cQ)(),v=(0,c.n)();return(0,i.jsxs)(s.HfT,{name:"renterd",peerCount:null===(e=u.data)||void 0===e?void 0:e.length,connectPeer:()=>r("connectPeer"),isSynced:v.isSynced,syncPercent:v.syncPercent,nodeBlockHeight:v.nodeBlockHeight,estimatedBlockHeight:v.estimatedBlockHeight,firstTimeSyncing:v.firstTimeSyncing,moreThan100BlocksToSync:v.moreThan100BlocksToSync,children:[(0,i.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,i.jsx)(s.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Wallet address"}),(0,i.jsx)(s.XxW,{className:"overflow-hidden",size:"14",maxLength:50,value:null===(n=l.data)||void 0===n?void 0:n.address,type:"address"})]}),(0,i.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,i.jsx)(s.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Network"}),(0,i.jsx)(s.xvT,{size:"14",children:null===(t=o.data)||void 0===t?void 0:t.Name})]})]})}function v(){let e=(0,a.gM)({config:{swr:{revalidateOnFocus:!1}}});if(!e.data||"mainnet"===e.data.Name)return null;let n="zen"===e.data.Name?"Zen Testnet":e.data.Name;return(0,i.jsx)(s.t6k,{testnetName:n})}function x(e){let n=(0,a.Tu)(),{isSynced:t}=(0,c.n)();return(0,i.jsx)(s.tU3,{appName:"renterd",profile:(0,i.jsx)(u,{}),banner:(0,i.jsx)(v,{}),connectivityRoute:l.h,isSynced:t,walletBalance:n.data?new(o())(n.data.confirmed):void 0,...e})}},15755:function(e,n,t){"use strict";t.d(n,{e:function(){return d}});var i=t(52322),s=t(39140),a=t(73621),r=t(44905),o=t(74881),l=t(36091),c=t(99484);function d(){var e,n;let{autopilot:t}=(0,l.q)(),d=(0,a.Z7)(),{openDialog:u}=(0,c.Rh)(),v=!(null===(e=d.data)||void 0===e?void 0:e.find(e=>"info"!==e.severity)),x=(null===(n=d.data)||void 0===n?void 0:n.length)||0;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.KJW,{title:"Files",route:o._.files.index,children:(0,i.jsx)(s.ROc,{})}),"on"===t.state&&(0,i.jsx)(s.KJW,{title:"Autopilot",route:o._.autopilot.index,children:(0,i.jsx)(s.aFQ,{})}),(0,i.jsx)(s.KJW,{title:"Configuration",route:o._.config.index,children:(0,i.jsx)(s.wWN,{})}),(0,i.jsx)(s.KJW,{title:"Contracts",route:o._.contracts.index,children:(0,i.jsx)(s.VBo,{})}),(0,i.jsx)(s.KJW,{title:"Hosts",route:o._.hosts.index,children:(0,i.jsx)(s.VHe,{})}),(0,i.jsxs)("div",{className:"relative",children:[!!x&&v&&(0,i.jsx)("div",{className:(0,r.cx)("absolute -right-[2px] top-px w-1 h-1","rounded-full","bg-gray-1000 dark:bg-white","pointer-events-none")}),!!x&&!v&&(0,i.jsx)(s.xvT,{size:"10",className:(0,r.cx)("absolute -right-[9px] -top-1 py-px px-[5px]","text-white","bg-red-500 dark:bg-red-500 rounded","pointer-events-none"),color:"none",children:x.toLocaleString()}),(0,i.jsx)(s.KJW,{title:"Alerts",onClick:()=>u("alerts"),children:(0,i.jsx)(s.Dkj,{})})]})]})}},41491:function(e,n,t){"use strict";t.d(n,{n:function(){return a}});var i=t(48240),s=t(73621);function a(){var e,n,t,a;let{isUnlocked:r}=(0,i.Hv)(),o=(0,s.DQ)({config:{swr:{refreshInterval:e=>(null==e?void 0:e.synced)?6e4:1e4}}}),l=(0,s.nH)(),c=o.data?null===(e=o.data)||void 0===e?void 0:e.blockHeight:0,d=(0,s.Tu)({config:{swr:{refreshInterval:e=>(null==e?void 0:e.scanHeight)>=c?6e4:1e4}}}),u=r&&c&&l?Number((100*Math.min(c/l,1)).toFixed(1)):0,v=r&&c&&d.data?Number((100*Math.min(d.data.scanHeight/l,1)).toFixed(1)):0;return{isSynced:null===(n=o.data)||void 0===n?void 0:n.synced,isWalletSynced:(null===(t=o.data)||void 0===t?void 0:t.synced)&&(null===(a=d.data)||void 0===a?void 0:a.scanHeight)>=c-1,nodeBlockHeight:c,estimatedBlockHeight:l,syncPercent:u,walletScanPercent:v,moreThan100BlocksToSync:!!c&&!!l&&l-c>100,firstTimeSyncing:!!c&&!!l&&l-c>5e4}}},88637:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var i=t(52322),s=t(39140),a=t(73621),r=t(74881),o=t(99484),l=t(15755),c=t(67465);function d(){var e,n,t;let d=(0,a.cQ)(),u=(0,a.QL)({config:{swr:{refreshInterval:3e4}}}),v=(0,a.DQ)({config:{swr:{refreshInterval:3e4}}}),{openDialog:x}=(0,o.Rh)();return(0,i.jsx)(c.J,{routes:r._,sidenav:(0,i.jsx)(l.e,{}),openSettings:()=>x("settings"),title:"Node",children:(0,i.jsxs)("div",{className:"flex flex-col gap-5 p-5",children:[(0,i.jsxs)("div",{className:"flex flex-wrap gap-7",children:[(0,i.jsx)(s.ncR,{label:"Height",value:v.data?Number(v.data.blockHeight).toLocaleString():void 0,comment:(null===(e=v.data)||void 0===e?void 0:e.synced)?void 0:"Syncing"}),(0,i.jsx)(s.ncR,{label:"Connected peers",value:null===(n=d.data)||void 0===n?void 0:n.length}),(0,i.jsx)(s.ncR,{label:"Transactions in pool",value:null===(t=u.data)||void 0===t?void 0:t.length})]}),(0,i.jsx)(s.u5Q,{peers:d.data,connectPeer:()=>x("connectPeer")})]})})}function u(){return(0,i.jsx)(d,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=27725)}),_N_E=e.O()}]);