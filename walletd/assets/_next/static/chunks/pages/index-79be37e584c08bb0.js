(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{87314:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(21435)}])},87128:function(e,n,t){"use strict";t.d(n,{v:function(){return x}});var s=t(52322),l=t(78459),r=t(98334),i=t(38855),a=t(51587),c=t(54243);function o(){var e;let{openDialog:n}=(0,c.Rh)(),t=(0,a.cQ)(),r=(0,i.n)(),o=(0,a.gM)();return(0,s.jsx)(l.HfT,{name:"walletd",peerCount:null===(e=t.data)||void 0===e?void 0:e.length,connectPeer:()=>n("connectPeer"),isSynced:r.isSynced,syncPercent:r.syncPercent,nodeBlockHeight:r.nodeBlockHeight,estimatedBlockHeight:r.estimatedBlockHeight,firstTimeSyncing:r.firstTimeSyncing,moreThan100BlocksToSync:r.moreThan100BlocksToSync,children:o.data&&(0,s.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,s.jsx)(l.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Network"}),(0,s.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden -mr-0.5 pr-0.5",children:(0,s.jsx)(l.xvT,{size:"14",children:o.data.name})})]})})}function d(){let e=(0,a.gM)({config:{swr:{revalidateOnFocus:!1}}});if(!e.data||"mainnet"===e.data.name)return null;let n="zen"===e.data.name?"Zen Testnet":e.data.name;return(0,s.jsx)(l.t6k,{testnetName:n})}function x(e){let{isSynced:n}=(0,i.n)();return(0,s.jsx)(l.tU3,{appName:"walletd",profile:(0,s.jsx)(o,{}),connectivityRoute:r.h,banner:(0,s.jsx)(d,{}),showWallet:!1,isSynced:n,...e})}},3499:function(e,n,t){"use strict";t.d(n,{_:function(){return a}});var s=t(52322),l=t(78459),r=t(67537),i=t(98334);function a(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l.KJW,{title:"Dashboard",route:i._.home,children:(0,s.jsx)(r.K2o,{})})})}},38855:function(e,n,t){"use strict";t.d(n,{n:function(){return i}});var s=t(78459),l=t(10363),r=t(51587);function i(){var e;let{isUnlockedAndAuthedRoute:n}=(0,l.Hv)(),t=(0,r.XC)({config:{swr:{refreshInterval:1e4}}}),s=(0,r.ek)({config:{swr:{refreshInterval:e=>a(e)?6e4:1e4}}}),i=(0,r.nH)(),c=t.data?null===(e=t.data)||void 0===e?void 0:e.height:0,o=n&&c&&i?Number((100*Math.min(c/i,1)).toFixed(1)):0;return{isSynced:a(s.data),nodeBlockHeight:c,estimatedBlockHeight:i,syncPercent:o,moreThan100BlocksToSync:!!c&&!!i&&i-c>100,firstTimeSyncing:!!c&&!!i&&i-c>5e4}}function a(e){return!!e&&function(e){if(!e||!e.length)return!1;let n=e[0],t=Date.now()-(0,s.ytg)(2);return new Date(n).getTime()>t}(e.prevTimestamps)}},21435:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var s=t(52322),l=t(78459),r=t(23312),i=t(98334),a=t(54243),c=t(87128),o=t(3499),d=t(67537),x=t(26249),u=t(52058);function h(){let{configurableColumns:e,toggleColumnVisibility:n,resetDefaultColumnVisibility:t,setColumnsVisible:i,setColumnsHidden:a,sortField:c,setSortField:o,sortDirection:h,setSortDirection:j,enabledColumns:f}=(0,r.r)(),m=e.filter(e=>"general"===e.category).map(e=>({label:e.label,value:e.id}));return(0,s.jsxs)(l.J2e,{trigger:(0,s.jsxs)(l.zxk,{size:"small",tip:"Configure view",tipAlign:"end",tipSide:"bottom",children:[(0,s.jsx)(d.hiv,{}),"View",(0,s.jsx)(d.EMN,{})]}),contentProps:{align:"end",className:"max-w-[300px]"},children:[(0,s.jsxs)(l.WVB,{children:[(0,s.jsx)(l.__J,{children:"Order by"}),(0,s.jsx)(l.kFS,{children:(0,s.jsx)(l.PhF,{value:c,onChange:e=>{o(e.currentTarget.value)},children:Object.entries((0,u.Z)(x.Fo,"category")).map(e=>{let[n,t]=e;return(0,s.jsx)("optgroup",{label:n,children:t.map(e=>(0,s.jsx)(l.Wxm,{value:e.id,children:e.label},e.id))},n)})})})]}),(0,s.jsxs)(l.WVB,{children:[(0,s.jsx)(l.__J,{children:"Direction"}),(0,s.jsx)(l.kFS,{children:(0,s.jsxs)(l.PhF,{value:h,onClick:e=>{e.stopPropagation()},onChange:e=>{j(e.currentTarget.value)},children:[(0,s.jsx)(l.Wxm,{value:"desc",children:"descending"},"desc"),(0,s.jsx)(l.Wxm,{value:"asc",children:"ascending"},"asc")]})})]}),(0,s.jsx)(l.Clw,{}),(0,s.jsxs)(l.WVB,{children:[(0,s.jsx)(l.__J,{children:"Display properties"}),(0,s.jsx)(l.kFS,{children:(0,s.jsx)(l.zxk,{tip:"Reset all to defaults",variant:"ghost",onClick:e=>{e.stopPropagation(),t()},children:(0,s.jsx)(d.Wet,{})})})]}),(0,s.jsx)(l.FzK,{label:"General",columns:m.map(e=>e.value),enabled:f,setColumnsVisible:i,setColumnsHidden:a}),(0,s.jsx)(l.WVB,{children:(0,s.jsx)(l.j4H,{options:m,values:f,onChange:e=>n(e)})})]})}function j(){let{lockAllWallets:e,unlockedCount:n}=(0,r.r)(),{openDialog:t}=(0,a.Rh)();return(0,s.jsxs)("div",{className:"flex gap-2",children:[!!n&&(0,s.jsxs)(l.zxk,{tip:"Lock all wallets",tipSide:"bottom",onClick:()=>e(),children:[(0,s.jsx)(d.Lur,{}),"Lock wallets"]}),(0,s.jsxs)(l.zxk,{variant:"accent",onClick:()=>t("walletAddType"),children:[(0,s.jsx)(d.aXP,{}),"Add wallet"]}),(0,s.jsx)(h,{})]})}function f(){let{datasetCount:e,unlockedCount:n}=(0,r.r)();return(0,s.jsxs)("div",{className:"flex gap-2 w-full",children:[!!n&&(0,s.jsxs)("div",{className:"flex gap-1.5",children:[(0,s.jsx)(l.xvT,{children:(0,s.jsx)(d.VmF,{})}),(0,s.jsx)(l.xvT,{size:"12",font:"mono",children:1===n?"1 wallet unlocked":"".concat(n.toLocaleString()," wallets unlocked")})]}),(0,s.jsx)("div",{className:"flex-1"}),(0,s.jsx)(l.xvT,{size:"12",font:"mono",children:1===e?"1 wallet":"".concat(e.toLocaleString()," wallets")})]})}var m=t(3440);function v(){return(0,s.jsx)("div",{className:"flex w-full justify-center",children:(0,s.jsx)("div",{className:"mt-[100px] max-w-[800px]",children:(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)(l.X6q,{className:"mb-4",children:"Add a wallet to get started."}),(0,s.jsx)(m.u,{})]})})})}function g(){return(0,s.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,s.jsx)(l.xvT,{children:(0,s.jsx)(d.Hb6,{className:"scale-[200%]"})}),(0,s.jsx)(l.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"No wallets matching filters."})]})}function p(){return(0,s.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,s.jsx)(l.xvT,{children:(0,s.jsx)(d.Ckx,{className:"scale-[200%]"})}),(0,s.jsx)(l.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"Error fetching wallets."})]})}function w(){let{openDialog:e}=(0,a.Rh)(),{dataset:n,dataState:t,context:d,columns:x,sortableColumns:u,sortDirection:h,sortField:m,toggleSort:w}=(0,r.r)();return(0,s.jsx)(c.v,{routes:i._,sidenav:(0,s.jsx)(o._,{}),openSettings:()=>e("settings"),title:"Wallets",actions:(0,s.jsx)(j,{}),stats:(0,s.jsx)(f,{}),size:"3",children:(0,s.jsxs)("div",{className:"px-6 py-7 min-w-fit",children:["noneYet"===t&&(0,s.jsx)(v,{}),"noneYet"!==t&&(0,s.jsx)(l.iA_,{isLoading:"loading"===t,emptyState:"noneMatchingFilters"===t?(0,s.jsx)(g,{}):"error"===t?(0,s.jsx)(p,{}):null,pageSize:6,data:n,context:d,columns:x,sortableColumns:u,sortDirection:h,sortField:m,toggleSort:w})]})})}function k(){return(0,s.jsx)(w,{})}},52058:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var s,l,r=t(40905),i=function(e,n,t,s){for(var l=-1,r=null==e?0:e.length;++l<r;){var i=e[l];n(s,i,t(i),e)}return s},a=t(50506),c=function(e,n,t,s){return(0,a.Z)(e,function(e,l,r){n(s,e,t(e),r)}),s},o=t(34056),d=t(97885),x=Object.prototype.hasOwnProperty,u=(s=function(e,n,t){x.call(e,t)?e[t].push(n):(0,r.Z)(e,t,[n])},function(e,n){var t=(0,d.Z)(e)?i:c,r=l?l():{};return t(e,s,(0,o.Z)(n,2),r)})}},function(e){e.O(0,[774,888,179],function(){return e(e.s=87314)}),_N_E=e.O()}]);