(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54],{27725:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/node",function(){return t(57335)}])},91362:function(e,n,t){"use strict";t.d(n,{J:function(){return v}});var i=t(52322),s=t(83955),r=t(57016),a=t(6391),l=t.n(a),o=t(98334),d=t(38855),c=t(34390),u=t(21487);function x(){var e,n,t,a,l,o;let{openDialog:x}=(0,c.Rh)(),h=(0,r.d_)({config:{swr:{revalidateOnFocus:!1}}}),v=(0,r.X2)({config:{swr:{revalidateOnFocus:!1}}}),f=(0,r.cQ)(),j=(0,d.n)(),m=null===(e=h.data)||void 0===e?void 0:e.version,p="?"===m?"https://github.com/SiaFoundation/renterd/commits/":(null==m?void 0:m.match(/^v\d+\.\d+\.\d+/))?"https://github.com/SiaFoundation/renterd/releases/".concat(m):"https://github.com/SiaFoundation/renterd/tree/".concat(m),g=h.data?new Date().getTime()-new Date(null===(n=h.data)||void 0===n?void 0:n.startTime).getTime():0;return(0,i.jsxs)(s.HfT,{name:"renterd",peerCount:null===(t=f.data)||void 0===t?void 0:t.length,connectPeer:()=>x("connectPeer"),isSynced:j.isSynced,syncPercent:j.syncPercent,nodeBlockHeight:j.nodeBlockHeight,estimatedBlockHeight:j.estimatedBlockHeight,firstTimeSyncing:j.firstTimeSyncing,moreThan100BlocksToSync:j.moreThan100BlocksToSync,children:[(0,i.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,i.jsx)(s.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Wallet address"}),(0,i.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden -mr-0.5 pr-0.5",children:(0,i.jsx)(s.XxW,{size:"14",maxLength:50,value:null===(a=v.data)||void 0===a?void 0:a.address,type:"address"})})]}),h.data&&(0,i.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,i.jsx)(s.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Uptime"}),(0,i.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden -mr-0.5 pr-0.5",children:(0,i.jsx)(s.xvT,{size:"14",children:(0,u.bc)(g,{format:"long"})})})]}),(0,i.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,i.jsx)(s.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Network"}),(0,i.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden -mr-0.5 pr-0.5",children:(0,i.jsx)(s.xvT,{size:"14",children:null===(l=h.data)||void 0===l?void 0:l.network})})]}),(0,i.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,i.jsx)(s.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Version"}),(0,i.jsx)(s.rUS,{size:"14",href:p,underline:"hover",target:"_blank",ellipsis:!0,children:null===(o=h.data)||void 0===o?void 0:o.version})]})]})}function h(){let e=(0,r.d_)({config:{swr:{revalidateOnFocus:!1}}});return e.data&&"Mainnet"!==e.data.network?(0,i.jsx)(s.t6k,{testnetName:e.data.network}):null}function v(e){let n=(0,r.X2)(),{isSynced:t}=(0,d.n)();return(0,i.jsx)(s.tU3,{appName:"renterd",profile:(0,i.jsx)(x,{}),banner:(0,i.jsx)(h,{}),connectivityRoute:o.h,isSynced:t,walletBalanceSc:n.data&&{spendable:new(l())(n.data.spendable),confirmed:new(l())(n.data.confirmed),unconfirmed:new(l())(n.data.unconfirmed)},...e})}},97992:function(e,n,t){"use strict";t.d(n,{e:function(){return c}});var i=t(52322),s=t(83955),r=t(43496),a=t(57016),l=t(82851),o=t(98334),d=t(34390);function c(){var e,n;let t=(0,a.Z7)(),{openDialog:c}=(0,d.Rh)(),u=!(null===(e=t.data)||void 0===e?void 0:e.find(e=>"info"!==e.severity)),x=(null===(n=t.data)||void 0===n?void 0:n.length)||0;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.KJW,{title:"Files",route:o._.files.index,children:(0,i.jsx)(r.ROc,{})}),(0,i.jsx)(s.KJW,{title:"Configuration",route:o._.config.index,children:(0,i.jsx)(r.wWN,{})}),(0,i.jsx)(s.KJW,{title:"Contracts",route:o._.contracts.index,children:(0,i.jsx)(r.VBo,{})}),(0,i.jsx)(s.KJW,{title:"Hosts",route:o._.hosts.index,children:(0,i.jsx)(r.VHe,{})}),(0,i.jsx)(s.KJW,{title:"S3 authentication keypairs",route:o._.keys.index,children:(0,i.jsx)(r._m8,{})}),(0,i.jsxs)("div",{className:"relative",children:[!!x&&u&&(0,i.jsx)("div",{className:(0,l.cx)("absolute -right-[2px] top-px w-1 h-1","rounded-full","bg-gray-1000 dark:bg-white","pointer-events-none")}),!!x&&!u&&(0,i.jsx)(s.xvT,{size:"10",className:(0,l.cx)("absolute -right-[9px] -top-1 py-px px-[5px]","text-white","bg-red-500 dark:bg-red-500 rounded","pointer-events-none"),color:"none",children:x.toLocaleString()}),(0,i.jsx)(s.KJW,{title:"Alerts",onClick:()=>c("alerts"),children:(0,i.jsx)(r.Dkj,{})})]})]})}},57335:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var i=t(52322),s=t(83955),r=t(57016),a=t(98334),l=t(34390),o=t(97992),d=t(91362);function c(){var e,n,t;let c=(0,r.cQ)(),u=(0,r.QL)({config:{swr:{refreshInterval:3e4}}}),x=(0,r.DQ)({config:{swr:{refreshInterval:3e4}}}),{openDialog:h}=(0,l.Rh)();return(0,i.jsx)(d.J,{routes:a._,sidenav:(0,i.jsx)(o.e,{}),openSettings:()=>h("settings"),title:"Node",children:(0,i.jsxs)("div",{className:"flex flex-col gap-5 p-5",children:[(0,i.jsxs)("div",{className:"flex flex-wrap gap-7",children:[(0,i.jsx)(s.ncR,{label:"Height",value:x.data?Number(x.data.blockHeight).toLocaleString():void 0,comment:(null===(e=x.data)||void 0===e?void 0:e.synced)?void 0:"Syncing"}),(0,i.jsx)(s.ncR,{label:"Connected peers",value:null===(n=c.data)||void 0===n?void 0:n.length}),(0,i.jsx)(s.ncR,{label:"Transactions in pool",value:null===(t=u.data)||void 0===t?void 0:t.length})]}),(0,i.jsx)(s.u5Q,{peers:c.data,isLoading:c.isValidating,connectPeer:()=>h("connectPeer")})]})})}function u(){return(0,i.jsx)(c,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=27725)}),_N_E=e.O()}]);