(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54],{27725:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/node",function(){return n(17474)}])},92522:function(e,s,n){"use strict";n.d(s,{q:function(){return x}});var l=n(52322),i=n(2597),d=n(13369),t=n(6391),a=n.n(t),r=n(74881),o=n(41491),c=n(7534);function u(){var e,s,n,t,a,r,u;let{openDialog:x}=(0,c.Rh)(),f=(0,d.On)({config:{swr:{revalidateOnFocus:!1}}}),v=(0,d.rV)({config:{swr:{revalidateOnFocus:!1}}}),h=(0,o.n)(),m=(0,d.cQ)(),j=null===(e=f.data)||void 0===e?void 0:e.version,p=(null==j?void 0:j.match(/^v\d+\.\d+\.\d+/))?"https://github.com/SiaFoundation/hostd/releases/".concat(j):"https://github.com/SiaFoundation/hostd/tree/".concat(j);return(0,l.jsxs)(i.HfT,{name:"hostd",peerCount:null===(s=m.data)||void 0===s?void 0:s.length,connectPeer:()=>x("connectPeer"),isSynced:h.isSynced,percent:h.percent,nodeBlockHeight:h.nodeBlockHeight,estimatedBlockHeight:h.estimatedBlockHeight,firstTimeSyncing:h.firstTimeSyncing,moreThan100BlocksToSync:h.moreThan100BlocksToSync,children:[(0,l.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,l.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Net address"}),(0,l.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,l.jsx)(i.xS1,{className:"overflow-hidden",size:"14",value:null===(n=v.data)||void 0===n?void 0:n.netAddress,maxLength:50,label:"network address"})})]}),(0,l.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,l.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Public key"}),(0,l.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,l.jsx)(i.xS1,{className:"overflow-hidden",size:"14",value:null===(t=f.data)||void 0===t?void 0:t.publicKey,maxLength:50,label:"public key"})})]}),(0,l.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,l.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Wallet address"}),(0,l.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,l.jsx)(i.xS1,{className:"overflow-hidden",size:"14",maxLength:50,value:null===(a=f.data)||void 0===a?void 0:a.walletAddress,type:"address"})})]}),(0,l.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,l.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Network"}),(0,l.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,l.jsx)(i.xvT,{size:"14",children:null===(r=f.data)||void 0===r?void 0:r.network})})]}),(0,l.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,l.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Version"}),(0,l.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,l.jsx)(i.rUS,{size:"14",href:p,target:"_blank",children:null===(u=f.data)||void 0===u?void 0:u.version})})]})]})}function x(e){let s=(0,d.Os)(),{isSynced:n}=(0,o.n)();return(0,l.jsx)(i.tU3,{appName:"hostd",connectivityRoute:r.h,profile:(0,l.jsx)(u,{}),isSynced:n,walletBalance:s.data?new(a())(s.data.spendable).plus(s.data.unconfirmed):void 0,...e})}},39031:function(e,s,n){"use strict";n.d(s,{N:function(){return t}});var l=n(52322),i=n(2597),d=n(74881);function t(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.KJW,{title:"Dashboard",route:d._.home,children:(0,l.jsx)(i.K2o,{})}),(0,l.jsx)(i.KJW,{title:"Volumes",route:d._.volumes.index,children:(0,l.jsx)(i.zvn,{})}),(0,l.jsx)(i.KJW,{title:"Contracts",route:d._.contracts.index,children:(0,l.jsx)(i.VBo,{})}),(0,l.jsx)(i.KJW,{title:"Configuration",route:d._.config.index,children:(0,l.jsx)(i.wWN,{})})]})}},41491:function(e,s,n){"use strict";n.d(s,{n:function(){return d}});var l=n(28031),i=n(13369);function d(){var e,s,n,d;let{isUnlocked:t}=(0,l.Hv)(),a=(0,i.d$)({config:{swr:{refreshInterval:e=>(null==e?void 0:e.synced)?6e4:1e4}}}),r=(0,i.Os)({config:{swr:{refreshInterval:e=>(null==e?void 0:e.scanHeight)>=c-5?6e4:1e4}}}),o=(0,i.nH)(),c=a.data?null===(e=a.data)||void 0===e?void 0:e.chainIndex.height:0,u=t&&c&&o?Number((100*Math.min(c/o,1)).toFixed(1)):0;return{isSynced:null===(s=a.data)||void 0===s?void 0:s.synced,isWalletSynced:(null===(n=a.data)||void 0===n?void 0:n.synced)&&(null===(d=r.data)||void 0===d?void 0:d.scanHeight)>=c-5,nodeBlockHeight:c,estimatedBlockHeight:o,percent:u,moreThan100BlocksToSync:!!c&&!!o&&o-c>100,firstTimeSyncing:!!c&&!!o&&o-c>5e4}}},17474:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return m}});var l=n(52322),i=n(2597),d=n(13369),t=n(74881),a=n(7534),r=n(39031),o=n(92522),c=n(2784),u=n(76635),x=n(2288),f=n(44905);function v(){var e;let s=(0,d.dU)({payload:{levels:["info"],limit:100}});return(0,l.jsx)(i.s_4,{children:(0,l.jsxs)("div",{className:"flex flex-col rounded overflow-hidden",children:[(0,l.jsxs)("div",{className:"flex items-center p-4 border-b border-gray-200 dark:border-graydark-300",children:[(0,l.jsx)(i.X6q,{size:"20",font:"mono",ellipsis:!0,children:"Logs"}),(0,l.jsx)("div",{className:"flex-1"})]}),(0,l.jsx)("div",{className:"flex flex-col",children:null===(e=s.data)||void 0===e?void 0:e.entries.map(e=>(0,l.jsxs)("div",{className:(0,f.cx)("flex flex-col gap-1 w-full p-4","border-t border-gray-200 dark:border-graydark-300","first:border-none"),children:[(0,l.jsxs)("div",{className:"flex justify-between w-full",children:[(0,l.jsx)(i.xvT,{weight:"medium",children:e.name}),(0,l.jsx)(i.xvT,{color:"subtle",children:(0,x.rN)(e.timestamp,{timeStyle:"medium"})})]}),(0,l.jsx)(i.xvT,{color:"subtle",children:e.message}),(0,l.jsx)(i.xvT,{children:e.caller}),(0,l.jsx)(i.u0i,{color:"subtle",children:JSON.stringify(e.fields,null,2)})]},e.timestamp+e.caller+e.name))})]})})}function h(){var e,s;let n=(0,d.cQ)(),x=(0,d.d$)({config:{swr:{refreshInterval:3e4}}}),{openDialog:f}=(0,a.Rh)(),h=(0,c.useMemo)(()=>n.data?(0,u.orderBy)(n.data,["address"]).map(e=>e.address):null,[n.data]);return(0,l.jsx)(o.q,{routes:t._,sidenav:(0,l.jsx)(r.N,{}),openSettings:()=>f("settings"),title:"Node",children:(0,l.jsxs)("div",{className:"p-6 flex flex-col gap-5",children:[(0,l.jsxs)("div",{className:"flex flex-wrap gap-7",children:[(0,l.jsx)(i.ncR,{label:"Height",value:x.data?x.data.chainIndex.height.toLocaleString():void 0,comment:(null===(e=x.data)||void 0===e?void 0:e.synced)?void 0:"Syncing"}),(0,l.jsx)(i.ncR,{label:"Connected peers",value:null===(s=n.data)||void 0===s?void 0:s.length})]}),(0,l.jsxs)("div",{className:"flex flex-wrap gap-7",children:[(0,l.jsx)("div",{className:"flex-1",children:(0,l.jsx)(i.u5Q,{peers:h,connectPeer:()=>f("connectPeer")})}),(0,l.jsx)("div",{className:"flex-1",children:(0,l.jsx)(v,{})})]})]})})}function m(){return(0,l.jsx)(h,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=27725)}),_N_E=e.O()}]);