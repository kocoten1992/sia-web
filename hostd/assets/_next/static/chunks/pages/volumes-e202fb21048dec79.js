(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[144],{13252:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/volumes",function(){return n(89516)}])},14134:function(e,s,n){"use strict";n.d(s,{q:function(){return h}});var t=n(52322),i=n(52735),l=n(27444),a=n(6391),o=n.n(a),r=n(71930),d=n(25573);function c(){let e=(0,l.On)({config:{swr:{revalidateOnFocus:!1}}});return e.data&&"Mainnet"!==e.data.network?(0,t.jsx)(i.t6k,{testnetName:e.data.network}):null}var x=n(22515);function u(){var e,s,n,a,o,r,c;let{openDialog:u}=(0,x.Rh)(),h=(0,l.On)({config:{swr:{revalidateOnFocus:!1}}}),v=(0,l.rV)({config:{swr:{revalidateOnFocus:!1}}}),j=(0,d.n)(),m=(0,l.cQ)(),f=null===(e=h.data)||void 0===e?void 0:e.version,p=(null==f?void 0:f.match(/^v\d+\.\d+\.\d+/))?"https://github.com/SiaFoundation/hostd/releases/".concat(f):"https://github.com/SiaFoundation/hostd/tree/".concat(f);return(0,t.jsxs)(i.HfT,{name:"hostd",peerCount:null===(s=m.data)||void 0===s?void 0:s.length,connectPeer:()=>u("connectPeer"),isSynced:j.isSynced,syncPercent:j.syncPercent,nodeBlockHeight:j.nodeBlockHeight,estimatedBlockHeight:j.estimatedBlockHeight,firstTimeSyncing:j.firstTimeSyncing,moreThan100BlocksToSync:j.moreThan100BlocksToSync,children:[(0,t.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,t.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Net address"}),(0,t.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,t.jsx)(i.XxW,{className:"overflow-hidden",size:"14",value:null===(n=v.data)||void 0===n?void 0:n.netAddress,maxLength:50,label:"network address"})})]}),(0,t.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,t.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Public key"}),(0,t.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,t.jsx)(i.XxW,{className:"overflow-hidden",size:"14",value:null===(a=h.data)||void 0===a?void 0:a.publicKey,maxLength:50,label:"public key"})})]}),(0,t.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,t.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Wallet address"}),(0,t.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,t.jsx)(i.XxW,{className:"overflow-hidden",size:"14",maxLength:50,value:null===(o=h.data)||void 0===o?void 0:o.walletAddress,type:"address"})})]}),(0,t.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,t.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Network"}),(0,t.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,t.jsx)(i.xvT,{size:"14",children:null===(r=h.data)||void 0===r?void 0:r.network})})]}),(0,t.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,t.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Version"}),(0,t.jsx)(i.rUS,{size:"14",href:p,underline:"hover",target:"_blank",ellipsis:!0,children:null===(c=h.data)||void 0===c?void 0:c.version})]})]})}function h(e){let s=(0,l.Os)(),{isSynced:n}=(0,d.n)();return(0,t.jsx)(i.tU3,{appName:"hostd",connectivityRoute:r.h,banner:(0,t.jsx)(c,{}),profile:(0,t.jsx)(u,{}),isSynced:n,walletBalance:s.data?new(o())(s.data.spendable).plus(s.data.unconfirmed):void 0,...e})}},66724:function(e,s,n){"use strict";n.d(s,{N:function(){return c}});var t=n(52322),i=n(52735),l=n(41775),a=n(27444),o=n(82851),r=n(71930),d=n(22515);function c(){var e,s;let{openDialog:n}=(0,d.Rh)(),c=(0,a.Z7)(),x=!(null===(e=c.data)||void 0===e?void 0:e.find(e=>"info"!==e.severity)),u=(null===(s=c.data)||void 0===s?void 0:s.length)||0;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.KJW,{title:"Dashboard",route:r._.home,children:(0,t.jsx)(l.K2o,{})}),(0,t.jsx)(i.KJW,{title:"Volumes",route:r._.volumes.index,children:(0,t.jsx)(l.zvn,{})}),(0,t.jsx)(i.KJW,{title:"Contracts",route:r._.contracts.index,children:(0,t.jsx)(l.VBo,{})}),(0,t.jsx)(i.KJW,{title:"Configuration",route:r._.config.index,children:(0,t.jsx)(l.wWN,{})}),(0,t.jsxs)("div",{className:"relative",children:[!!u&&x&&(0,t.jsx)("div",{className:(0,o.cx)("absolute -right-[2px] top-px w-1 h-1","rounded-full","bg-gray-1000 dark:bg-white","pointer-events-none")}),!!u&&!x&&(0,t.jsx)(i.xvT,{size:"10",className:(0,o.cx)("absolute -right-[9px] -top-1 py-px px-[5px]","text-white","bg-red-500 dark:bg-red-500 rounded","pointer-events-none"),color:"none",children:u.toLocaleString()}),(0,t.jsx)(i.KJW,{title:"Alerts",onClick:()=>n("alerts"),children:(0,t.jsx)(l.Dkj,{})})]})]})}},89516:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return j}});var t=n(52322),i=n(52735),l=n(41775),a=n(96206),o=n(14134),r=n(22515),d=n(66724),c=n(71930),x=n(78743);function u(){let{configurableColumns:e,toggleColumnVisibility:s,resetDefaultColumnVisibility:n,setColumnsVisible:a,setColumnsHidden:o,enabledColumns:r}=(0,x.F)(),d=e.filter(e=>"general"===e.category).map(e=>({label:e.label,value:e.id})),c=e.filter(e=>"operations"===e.category).map(e=>({label:e.label,value:e.id}));return(0,t.jsxs)(i.J2e,{trigger:(0,t.jsxs)(i.zxk,{size:"small",tip:"Configure view",tipAlign:"end",children:[(0,t.jsx)(l.hiv,{}),"View",(0,t.jsx)(l.EMN,{})]}),contentProps:{align:"end",className:"max-w-[300px]"},children:[(0,t.jsxs)(i.WVB,{children:[(0,t.jsx)(i.__J,{children:"Display properties"}),(0,t.jsx)(i.kFS,{children:(0,t.jsx)(i.zxk,{tip:"Reset all to defaults",variant:"ghost",onClick:e=>{e.stopPropagation(),n()},children:(0,t.jsx)(l.Wet,{})})})]}),(0,t.jsx)(i.FzK,{label:"General",columns:d.map(e=>e.value),enabled:r,setColumnsVisible:a,setColumnsHidden:o}),(0,t.jsx)(i.WVB,{children:(0,t.jsx)(i.j4H,{options:d,values:r,onChange:e=>s(e)})}),(0,t.jsx)(i.FzK,{label:"Operations",columns:c.map(e=>e.value),enabled:r,setColumnsVisible:a,setColumnsHidden:o}),(0,t.jsx)(i.WVB,{children:(0,t.jsx)(i.j4H,{options:c,values:r,onChange:e=>s(e)})})]})}function h(){return(0,t.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,t.jsx)(i.xvT,{children:(0,t.jsx)(l.zvn,{className:"scale-[200%]"})}),(0,t.jsx)(i.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"There are currently no volumes. Create one to get started."})]})}function v(){let{openDialog:e}=(0,r.Rh)(),{dataset:s,isLoading:n,columns:v}=(0,x.F)(),j=null==s?void 0:s.reduce((e,s)=>e+s.totalBytes,0),m=null==s?void 0:s.reduce((e,s)=>e+s.usedBytes,0),f=j-m;return(0,t.jsx)(o.q,{title:"Volumes",routes:c._,sidenav:(0,t.jsx)(d.N,{}),openSettings:()=>e("settings"),actions:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.zxk,{onClick:()=>e("volumeCreate"),children:[(0,t.jsx)(l.RVU,{}),"Create volume"]}),(0,t.jsx)(u,{})]}),stats:(0,t.jsxs)("div",{className:"flex gap-4",children:[(0,t.jsx)(i.xvT,{size:"12",font:"mono",weight:"medium",children:"".concat((0,a.vW)(m)," used")}),(0,t.jsx)(i.Z0O,{variant:"vertical"}),(0,t.jsx)(i.xvT,{size:"12",font:"mono",weight:"medium",children:"".concat((0,a.vW)(f)," free")}),(0,t.jsx)(i.Z0O,{variant:"vertical"}),(0,t.jsx)(i.xvT,{size:"12",font:"mono",weight:"medium",children:"".concat((0,a.vW)(j)," total")})]}),children:(0,t.jsx)("div",{className:"p-6 min-w-fit",children:(0,t.jsx)(i.iA_,{isLoading:n,pageSize:20,data:s,columns:v,emptyState:(0,t.jsx)(h,{})})})})}function j(){return(0,t.jsx)(v,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=13252)}),_N_E=e.O()}]);