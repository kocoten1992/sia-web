(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[490],{57344:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config",function(){return t(69127)}])},21197:function(e,i,t){"use strict";t.d(i,{q:function(){return v}});var r=t(52322),n=t(94206),s=t(13369),a=t(6391),o=t.n(a),d=t(74881),l=t(41491);function c(){let e=(0,s.On)({config:{swr:{revalidateOnFocus:!1}}});return e.data&&"Mainnet"!==e.data.network?(0,r.jsx)(n.t6k,{testnetName:e.data.network}):null}var u=t(50002);function m(){var e,i,t,a,o,d,c;let{openDialog:m}=(0,u.Rh)(),v=(0,s.On)({config:{swr:{revalidateOnFocus:!1}}}),p=(0,s.rV)({config:{swr:{revalidateOnFocus:!1}}}),h=(0,l.n)(),g=(0,s.cQ)(),x=null===(e=v.data)||void 0===e?void 0:e.version,f=(null==x?void 0:x.match(/^v\d+\.\d+\.\d+/))?"https://github.com/SiaFoundation/hostd/releases/".concat(x):"https://github.com/SiaFoundation/hostd/tree/".concat(x);return(0,r.jsxs)(n.HfT,{name:"hostd",peerCount:null===(i=g.data)||void 0===i?void 0:i.length,connectPeer:()=>m("connectPeer"),isSynced:h.isSynced,syncPercent:h.syncPercent,nodeBlockHeight:h.nodeBlockHeight,estimatedBlockHeight:h.estimatedBlockHeight,firstTimeSyncing:h.firstTimeSyncing,moreThan100BlocksToSync:h.moreThan100BlocksToSync,children:[(0,r.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,r.jsx)(n.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Net address"}),(0,r.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,r.jsx)(n.XxW,{className:"overflow-hidden",size:"14",value:null===(t=p.data)||void 0===t?void 0:t.netAddress,maxLength:50,label:"network address"})})]}),(0,r.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,r.jsx)(n.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Public key"}),(0,r.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,r.jsx)(n.XxW,{className:"overflow-hidden",size:"14",value:null===(a=v.data)||void 0===a?void 0:a.publicKey,maxLength:50,label:"public key"})})]}),(0,r.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,r.jsx)(n.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Wallet address"}),(0,r.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,r.jsx)(n.XxW,{className:"overflow-hidden",size:"14",maxLength:50,value:null===(o=v.data)||void 0===o?void 0:o.walletAddress,type:"address"})})]}),(0,r.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,r.jsx)(n.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Network"}),(0,r.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,r.jsx)(n.xvT,{size:"14",children:null===(d=v.data)||void 0===d?void 0:d.network})})]}),(0,r.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,r.jsx)(n.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Version"}),(0,r.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,r.jsx)(n.rUS,{size:"14",href:f,target:"_blank",children:null===(c=v.data)||void 0===c?void 0:c.version})})]})]})}function v(e){let i=(0,s.Os)(),{isSynced:t}=(0,l.n)();return(0,r.jsx)(n.tU3,{appName:"hostd",connectivityRoute:d.h,banner:(0,r.jsx)(c,{}),profile:(0,r.jsx)(m,{}),isSynced:t,walletBalance:i.data?new(o())(i.data.spendable).plus(i.data.unconfirmed):void 0,...e})}},39031:function(e,i,t){"use strict";t.d(i,{N:function(){return l}});var r=t(52322),n=t(94206),s=t(13369),a=t(44905),o=t(74881),d=t(50002);function l(){var e,i;let{openDialog:t}=(0,d.Rh)(),l=(0,s.Z7)(),c=!(null===(e=l.data)||void 0===e?void 0:e.find(e=>"info"!==e.severity)),u=(null===(i=l.data)||void 0===i?void 0:i.length)||0;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.KJW,{title:"Dashboard",route:o._.home,children:(0,r.jsx)(n.K2o,{})}),(0,r.jsx)(n.KJW,{title:"Volumes",route:o._.volumes.index,children:(0,r.jsx)(n.zvn,{})}),(0,r.jsx)(n.KJW,{title:"Contracts",route:o._.contracts.index,children:(0,r.jsx)(n.VBo,{})}),(0,r.jsx)(n.KJW,{title:"Configuration",route:o._.config.index,children:(0,r.jsx)(n.wWN,{})}),(0,r.jsxs)("div",{className:"relative",children:[!!u&&c&&(0,r.jsx)("div",{className:(0,a.cx)("absolute -right-[2px] top-px w-1 h-1","rounded-full","bg-gray-1000 dark:bg-white","pointer-events-none")}),!!u&&!c&&(0,r.jsx)(n.xvT,{size:"10",className:(0,a.cx)("absolute -right-[9px] -top-1 py-px px-[5px]","text-white","bg-red-500 dark:bg-red-500 rounded","pointer-events-none"),color:"none",children:u.toLocaleString()}),(0,r.jsx)(n.KJW,{title:"Alerts",onClick:()=>t("alerts"),children:(0,r.jsx)(n.Dkj,{})})]})]})}},41491:function(e,i,t){"use strict";t.d(i,{n:function(){return s}});var r=t(48240),n=t(13369);function s(){var e,i,t,s;let{isUnlocked:a}=(0,r.Hv)(),o=(0,n.d$)({config:{swr:{refreshInterval:e=>(null==e?void 0:e.synced)?6e4:1e4}}}),d=(0,n.nH)(),l=o.data?null===(e=o.data)||void 0===e?void 0:e.chainIndex.height:0,c=(0,n.Os)({config:{swr:{refreshInterval:e=>(null==e?void 0:e.scanHeight)>=l?6e4:1e4}}}),u=a&&l&&d?Number((100*Math.min(l/d,1)).toFixed(1)):0,m=a&&l&&c.data?Number((100*Math.min(c.data.scanHeight/d,1)).toFixed(1)):0;return{isSynced:null===(i=o.data)||void 0===i?void 0:i.synced,isWalletSynced:(null===(t=o.data)||void 0===t?void 0:t.synced)&&(null===(s=c.data)||void 0===s?void 0:s.scanHeight)>=l-1,nodeBlockHeight:l,estimatedBlockHeight:d,syncPercent:u,walletScanPercent:m,moreThan100BlocksToSync:!!l&&!!d&&d-l>100,firstTimeSyncing:!!l&&!!d&&d-l>5e4}}},69127:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return w}});var r=t(52322),n=t(94206),s=t(2784),a=t(39031),o=t(74881),d=t(50002),l=t(21197),c=t(13369),u=t(6391),m=t.n(u);let v=[{value:"",label:"Off"},{value:"route53",label:"Route 53"},{value:"noip",label:"No-IP"},{value:"duckdns",label:"Duck DNS"},{value:"cloudflare",label:"Cloudflare"}],p={acceptingContracts:!1,netAddress:"",maxContractDuration:void 0,contractPrice:void 0,baseRPCPrice:void 0,sectorAccessPrice:void 0,collateralMultiplier:void 0,maxCollateral:void 0,storagePrice:void 0,egressPrice:void 0,ingressPrice:void 0,priceTableValidity:void 0,maxRegistryEntries:void 0,accountExpiry:void 0,maxAccountBalance:void 0,ingressLimit:void 0,egressLimit:void 0,dnsProvider:"",dnsIpv4:!1,dnsIpv6:!1,dnsDuckDnsToken:"",dnsNoIpEmail:"",dnsNoIpPassword:"",dnsAwsId:"",dnsAwsSecret:"",dnsAwsZoneId:"",dnsCloudflareToken:"",dnsCloudflareZoneId:""},h={acceptingContracts:{type:"boolean",category:"host",title:"Accepting contracts",description:(0,r.jsx)(r.Fragment,{children:"Whether or not the host is accepting contracts."}),validation:{}},netAddress:{type:"text",category:"host",title:"Address",description:(0,r.jsx)(r.Fragment,{children:"The network address of the host."}),placeholder:"my.host.com:9882",validation:{required:"required"}},maxContractDuration:{type:"number",category:"host",title:"Maximum contract duration",units:"months",decimalsLimit:2,suggestion:new(m())(6),suggestionTip:"The default maximum duration is 6 months.",description:(0,r.jsx)(r.Fragment,{children:"The maximum contract duration that the host will accept."}),validation:{required:"required",validate:{min:e=>new(m())(e).gte((0,n.E6f)(4320))||"must be at least 1 month"}}},storagePrice:{title:"Storage price",type:"siacoin",category:"pricing",units:"SC/TB/month",decimalsLimitSc:6,description:(0,r.jsx)(r.Fragment,{children:"The host's storage price in siacoins per TB per month."}),validation:{required:"required"}},egressPrice:{title:"Egress price",type:"siacoin",category:"pricing",units:"SC/TB",decimalsLimitSc:6,description:(0,r.jsx)(r.Fragment,{children:"The host's egress price in siacoins per TB."}),validation:{required:"required"}},ingressPrice:{title:"Ingress price",type:"siacoin",category:"pricing",units:"SC/TB",decimalsLimitSc:6,description:(0,r.jsx)(r.Fragment,{children:"The host's ingress price in siacoins per TB."}),validation:{required:"required"}},collateralMultiplier:{title:"Collateral multiplier",type:"number",category:"pricing",units:"* storage price",placeholder:"2",decimalsLimit:1,description:(0,r.jsx)(r.Fragment,{children:"The host's target collateral as a multiple of storage price."}),suggestion:new(m())(2),suggestionTip:"The default multiplier is 2x the storage price.",validation:{required:"required"}},maxCollateral:{title:"Maximum collateral",type:"siacoin",category:"pricing",decimalsLimitSc:6,description:(0,r.jsx)(r.Fragment,{children:"The host's maximum collateral in siacoins."}),validation:{required:"required"}},contractPrice:{title:"Contract price",type:"siacoin",category:"pricing",decimalsLimitSc:6,description:(0,r.jsx)(r.Fragment,{children:"The host's contract price in siacoins."}),validation:{required:"required"}},baseRPCPrice:{title:"Base RPC price",type:"siacoin",category:"pricing",units:"SC/million",decimalsLimitSc:6,description:(0,r.jsx)(r.Fragment,{children:"The host's base RPC price in siacoins per million calls."}),validation:{required:"required"}},sectorAccessPrice:{title:"Sector access price",type:"siacoin",category:"pricing",units:"SC/million",decimalsLimitSc:6,description:(0,r.jsx)(r.Fragment,{children:"The host's sector access price in siacoins million sectors."}),validation:{required:"required"}},priceTableValidity:{title:"Price table validity",type:"number",category:"pricing",units:"minutes",description:(0,r.jsx)(r.Fragment,{children:"How long a renter's registered price table remains valid."}),validation:{required:"required"}},maxRegistryEntries:{title:"Maximum registry size",type:"number",category:"registry",units:"entries",decimalsLimit:0,description:(0,r.jsx)(r.Fragment,{children:"The maximum number of registry entries that the host will store. Each registry entry is up to 113 bytes."}),validation:{required:"required"}},accountExpiry:{title:"Expiry",type:"number",category:"RHP3",units:"days",description:(0,r.jsx)(r.Fragment,{children:"How long a renter's ephemeral accounts are inactive before the host prunes them and recovers the remaining funds."}),validation:{required:"required",validate:{min:e=>new(m())(e).gte(7)||"must be at least 1 week"}}},maxAccountBalance:{title:"Maximum balance",type:"siacoin",category:"RHP3",description:(0,r.jsx)(r.Fragment,{children:"Maximum balance a renter's ephemeral account can have. When the limit is reached, deposits are rejected until some of the funds have been spent."}),validation:{required:"required",validate:{min:e=>new(m())(e).gte(1)||"must be at least 1 SC"}}},ingressLimit:{title:"Ingress limit",type:"number",category:"bandwidth",units:"MB/second",description:(0,r.jsx)(r.Fragment,{children:"The maximum amount of ingress bandwidth traffic in MB per second."}),validation:{required:"required"}},egressLimit:{title:"Egress limit",type:"number",category:"bandwidth",units:"MB/second",description:(0,r.jsx)(r.Fragment,{children:"The maximum amount of egress bandwidth traffic in MB per second."}),validation:{required:"required"}},dnsProvider:{title:"Dynamic DNS Provider",type:"select",category:"DNS",options:v,description:(0,r.jsx)(r.Fragment,{children:"Enable dynamic DNS with one of the supported providers."}),validation:{validate:e=>!!v.find(i=>i.value===e)||"must be one of supported providers"}},dnsIpv4:{title:"IPv4",type:"boolean",category:"DNS",description:(0,r.jsx)(r.Fragment,{children:"Whether IPv4 is enabled."}),show:e=>!!e.dnsProvider,validation:{validate:(e,i)=>!i.dnsProvider||!!(e||i.dnsIpv6)||"at least one of IPv4 and IPv6 must be enabled"},trigger:["dnsIpv6"]},dnsIpv6:{type:"boolean",title:"IPv6",category:"DNS",description:(0,r.jsx)(r.Fragment,{children:"Whether IPv6 is enabled."}),show:e=>!!e.dnsProvider,validation:{validate:(e,i)=>!i.dnsProvider||!!(e||i.dnsIpv4)||"at least one of IPv4 and IPv6 must be enabled"},trigger:["dnsIpv4"]},dnsDuckDnsToken:{type:"text",title:"Token",category:"DNS",description:(0,r.jsx)(r.Fragment,{children:"DuckDNS token."}),show:e=>"duckdns"===e.dnsProvider,validation:{validate:(e,i)=>"duckdns"!==i.dnsProvider||!!e||"required"}},dnsNoIpEmail:{type:"text",title:"Email",category:"DNS",description:(0,r.jsx)(r.Fragment,{children:"No-IP email."}),show:e=>"noip"===e.dnsProvider,validation:{validate:(e,i)=>"noip"!==i.dnsProvider||!!e||"required"}},dnsNoIpPassword:{type:"password",title:"Password",category:"DNS",description:(0,r.jsx)(r.Fragment,{children:"No-IP password."}),show:e=>"noip"===e.dnsProvider,validation:{validate:(e,i)=>"noip"!==i.dnsProvider||!!e||"required"}},dnsAwsId:{type:"text",title:"ID",category:"DNS",description:(0,r.jsx)(r.Fragment,{children:"AWS Route53 ID."}),show:e=>"route53"===e.dnsProvider,validation:{validate:(e,i)=>"route53"!==i.dnsProvider||!!e||"required"}},dnsAwsSecret:{type:"password",title:"Secret",category:"DNS",description:(0,r.jsx)(r.Fragment,{children:"AWS Route53 secret."}),show:e=>"route53"===e.dnsProvider,validation:{validate:(e,i)=>"route53"!==i.dnsProvider||!!e||"required"}},dnsAwsZoneId:{type:"text",title:"Zone ID",category:"DNS",description:(0,r.jsx)(r.Fragment,{children:"AWS Route53 zone ID."}),show:e=>"route53"===e.dnsProvider,validation:{validate:(e,i)=>"route53"!==i.dnsProvider||!!e||"required"}},dnsCloudflareToken:{type:"text",title:"Token",category:"DNS",description:(0,r.jsx)(r.Fragment,{children:"Cloudflare token."}),show:e=>"cloudflare"===e.dnsProvider,validation:{validate:(e,i)=>"cloudflare"!==i.dnsProvider||!!e||"required"}},dnsCloudflareZoneId:{type:"text",title:"Zone ID",category:"DNS",description:(0,r.jsx)(r.Fragment,{children:"Cloudflare zone ID."}),show:e=>"cloudflare"===e.dnsProvider,validation:{validate:(e,i)=>"cloudflare"!==i.dnsProvider||!!e||"required"}}};var g=t(2288),x=t(74476),f=t(63955);function y(){let{openConfirmDialog:e}=(0,d.Rh)(),i=(0,c.hV)(),t=(0,c.Az)(),a=(0,s.useCallback)(()=>e({title:"Announce",action:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.cfm,{}),"Announce"]}),variant:"accent",body:(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)(n.nvN,{size:"14",children:"Confirm to broadcast host announcement."}),i.data&&(0,r.jsxs)(n.nvN,{size:"14",children:["Announcing will cost"," ",(0,g.Vz)(new(m())(i.data).times(1e3)),"."]})]}),onConfirm:async()=>{let e=await t.post({});e.error&&(0,n.OHV)("Error announcing host."),(0,n.OPV)("Successfully broadcast host announcement.")}}),[e,t,i]);return(0,r.jsxs)(n.zxk,{variant:"accent",tip:"Announce host address",onClick:a,children:[(0,r.jsx)(n.cfm,{}),"Announce"]})}function j(){var e;let{openDialog:i}=(0,d.Rh)(),t=(0,c.rV)({config:{swr:{revalidateOnFocus:!1}}}),u=(0,c.Te)(),v=(0,c.uo)({disabled:!t.data||!t.data.ddns.provider,config:{swr:{revalidateOnFocus:!1,errorRetryCount:0}}}),j=(0,f.cI)({mode:"all",defaultValues:p}),w=(0,s.useCallback)(e=>{let i;j.reset((i=null,"duckdns"===e.ddns.provider&&(i={dnsDuckDnsToken:e.ddns.options.token}),"noip"===e.ddns.provider&&(i={dnsNoIpEmail:e.ddns.options.email,dnsNoIpPassword:e.ddns.options.password}),"route53"===e.ddns.provider&&(i={dnsAwsId:e.ddns.options.ID,dnsAwsSecret:e.ddns.options.secret,dnsAwsZoneId:e.ddns.options.zoneID}),"cloudflare"===e.ddns.provider&&(i={dnsCloudflareToken:e.ddns.options.token,dnsCloudflareZoneId:e.ddns.options.zoneID}),{acceptingContracts:e.acceptingContracts,netAddress:e.netAddress,maxContractDuration:new(m())(e.maxContractDuration).div((0,n.S5V)(1)),contractPrice:(0,g.ll)(e.contractPrice,6),baseRPCPrice:(0,g.ll)((0,x.sS)(e.baseRPCPrice),6),sectorAccessPrice:(0,g.ll)((0,x.nS)(e.sectorAccessPrice),6),collateralMultiplier:new(m())(e.collateralMultiplier),maxCollateral:(0,g.ll)(e.maxCollateral,6),storagePrice:(0,g.ll)((0,x.SY)(e.storagePrice),6),egressPrice:(0,g.ll)((0,x.B1)(e.egressPrice),6),ingressPrice:(0,g.ll)((0,x.dK)(e.ingressPrice),6),priceTableValidity:new(m())(e.priceTableValidity).div(1e9).div(60),maxRegistryEntries:new(m())(e.maxRegistryEntries),accountExpiry:new(m())(e.accountExpiry).div(1e9).div(86400),maxAccountBalance:(0,g.ll)(e.maxAccountBalance,6),ingressLimit:(0,n.BTR)(new(m())(e.ingressLimit)),egressLimit:(0,n.BTR)(new(m())(e.egressLimit)),dnsProvider:e.ddns.provider,dnsIpv4:e.ddns.ipv4,dnsIpv6:e.ddns.ipv6,...i}))},[j]),[b,P]=(0,s.useState)(!1);(0,s.useEffect)(()=>{t.data&&!b&&(w(t.data),P(!0))},[t.data]);let S=(0,s.useCallback)(async()=>{let e=await t.mutate();e?(w(e),await v.mutate()):(0,n.OHV)("Error fetching settings.")},[t,w,v]),N=(0,s.useCallback)(async e=>{if(t.data)try{var i;let r;let s=await u.patch({payload:(i=t.data,r=null,"duckdns"===e.dnsProvider&&(r={token:e.dnsDuckDnsToken}),"noip"===e.dnsProvider&&(r={email:e.dnsNoIpEmail,password:e.dnsNoIpPassword}),"route53"===e.dnsProvider&&(r={ID:e.dnsAwsId,secret:e.dnsAwsSecret,zoneID:e.dnsAwsZoneId}),"cloudflare"===e.dnsProvider&&(r={token:e.dnsCloudflareToken,zoneID:e.dnsCloudflareZoneId}),{...i,acceptingContracts:e.acceptingContracts,netAddress:e.netAddress,maxContractDuration:Number(e.maxContractDuration.times((0,n.S5V)(1)).toFixed(0)),contractPrice:(0,g.qN)(e.contractPrice).toString(),baseRPCPrice:e.baseRPCPrice.div((0,g.ll)((0,x.sS)(1))).toFixed(0),sectorAccessPrice:e.sectorAccessPrice.div((0,g.ll)((0,x.nS)(1))).toFixed(0),collateralMultiplier:e.collateralMultiplier.toNumber(),maxCollateral:(0,g.qN)(e.maxCollateral).toString(),storagePrice:e.storagePrice.div((0,g.ll)((0,x.SY)(1))).toFixed(0),egressPrice:e.egressPrice.div((0,g.ll)((0,x.B1)(1))).toFixed(0),ingressPrice:e.ingressPrice.div((0,g.ll)((0,x.dK)(1))).toFixed(0),priceTableValidity:Number(e.priceTableValidity.times(60).times(1e9).toFixed(0)),maxRegistryEntries:Number(e.maxRegistryEntries.toFixed(0)),accountExpiry:Number(e.accountExpiry.times(86400).times(1e9).toFixed(0)),maxAccountBalance:(0,g.qN)(e.maxAccountBalance).toString(),ingressLimit:Number((0,n.YaL)(e.ingressLimit).toFixed(0)),egressLimit:Number((0,n.YaL)(e.egressLimit).toFixed(0)),ddns:{...null==i?void 0:i.ddns,provider:e.dnsProvider,ipv4:e.dnsIpv4,ipv6:e.dnsIpv6,options:r}})});if(s.error)throw Error(s.error);j.formState.dirtyFields.netAddress?(0,n.OPV)("Settings have been saved. Address has changed, make sure to re-announce the host.",{duration:2e4}):(0,n.OPV)("Settings have been saved."),w(s.data),await v.mutate()}catch(a){(0,n.OHV)(a.message),console.log(a)}},[j,t,u,w,v]),k=(0,n.WsO)(h),C=(0,s.useMemo)(()=>j.handleSubmit(N,k),[j,N,k]),I=Object.entries(j.formState.dirtyFields).filter(e=>{let[i,t]=e;return!!t}).length;return(0,r.jsx)(l.q,{title:"Configuration",routes:o._,sidenav:(0,r.jsx)(a.N,{}),stats:(null===(e=t.data)||void 0===e?void 0:e.ddns.provider)&&!v.isValidating?v.error?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.xvT,{color:"amber",children:(0,r.jsx)(n.qdM,{})}),(0,r.jsxs)(n.xvT,{size:"14",children:["Error with dynamic DNS configuration:"," ",v.error.message]})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.xvT,{color:"green",children:(0,r.jsx)(n.Y3p,{})}),(0,r.jsx)(n.xvT,{children:"Dynamic DNS enabled"})]}):null,actions:(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[!!I&&(0,r.jsx)(n.xvT,{size:"12",color:"subtle",children:1===I?"1 change":"".concat(I," changes")}),(0,r.jsx)(n.zxk,{tip:"Reset all changes",icon:"contrast",disabled:!I,onClick:S,children:(0,r.jsx)(n.Wet,{})}),(0,r.jsxs)(n.zxk,{tip:"Save all changes",variant:"accent",disabled:!j.formState.isDirty||j.formState.isSubmitting,onClick:C,children:[(0,r.jsx)(n.ZEk,{}),"Save changes"]}),(0,r.jsx)(y,{})]}),openSettings:()=>i("settings"),children:(0,r.jsxs)("div",{className:"p-6 flex flex-col gap-16 max-w-screen-xl",children:[(0,r.jsx)(n.vRO,{title:"Host",category:"host",fields:h,form:j}),(0,r.jsx)(n.vRO,{title:"Pricing",category:"pricing",fields:h,form:j}),(0,r.jsx)(n.vRO,{title:"DNS",category:"DNS",fields:h,form:j}),(0,r.jsx)(n.vRO,{title:"Bandwidth",category:"bandwidth",fields:h,form:j}),(0,r.jsx)(n.vRO,{title:"Registry",category:"registry",fields:h,form:j}),(0,r.jsx)(n.vRO,{title:"Accounts",category:"RHP3",fields:h,form:j})]})})}function w(){return(0,r.jsx)(j,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=57344)}),_N_E=e.O()}]);