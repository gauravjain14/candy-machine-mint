(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{137:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return x}));var r=n(1),a=n.n(r),c=n(4),i=n(32),s=n(67),o=new i.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),u=new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),l=new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),d=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r){var i,s,o,u,l,d=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=d.length>3&&void 0!==d[3]?d[3]:"recent",s=d.length>4&&void 0!==d[4]&&d[4],o=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(c.a)(a.a.mark((function e(d,b){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),b({timeout:!0}))}),n);try{l=r.onSignature(t,(function(e,t){o=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),b(u)):(console.log("Resolved via websocket",e),d(u))}),i)}catch(p){o=!0,console.error("WS error in setup",t,p)}case 2:if(o||!s){e.next=8;break}return Object(c.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],o||(u?u.err?(console.log("REST error for",t,u),o=!0,b(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),o=!0,d(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,g(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[l]&&r.removeSignatureListener(l),o=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),b=function(t,n,r,a){var c=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:i.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:s.b,isSigner:!1,isWritable:!1},{pubkey:i.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new i.d.TransactionInstruction({keys:c,programId:u,data:e.from([])})},p=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r){var c,s,u,l,d,b,p,f,j;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=new i.b(r,t,{preflightCommitment:"recent"}),e.next=3,i.a.fetchIdl(o,c);case 3:return s=e.sent,u=new i.a(s,o,c),l={id:n,connection:r,program:u},e.next=8,u.account.candyMachine.fetch(n);case 8:return d=e.sent,b=d.data.itemsAvailable.toNumber(),p=d.itemsRedeemed.toNumber(),f=b-p,j=d.data.goLiveDate.toNumber(),j=new Date(1e3*j),console.log({itemsAvailable:b,itemsRedeemed:p,itemsRemaining:f,goLiveDate:j}),e.abrupt("return",{candyMachine:l,itemsAvailable:b,itemsRedeemed:p,itemsRemaining:f,goLiveDate:j});case 16:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),l.toBuffer(),n.toBuffer(),e.from("edition")],l);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),l.toBuffer(),n.toBuffer()],l);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([t.toBuffer(),s.b.toBuffer(),n.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){var o,u,d,p,h,x,g;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=i.d.Keypair.generate(),e.next=3,m(r,o.publicKey);case 3:return u=e.sent,d=t.connection,p=t.program,e.next=7,j(o.publicKey);case 7:return h=e.sent,e.next=10,f(o.publicKey);case 10:return x=e.sent,e.next=13,d.getMinimumBalanceForRentExemption(s.a.span);case 13:return g=e.sent,e.next=16,p.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:c,mint:o.publicKey,metadata:h,masterEdition:x,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:l,tokenProgram:s.b,systemProgram:i.d.SystemProgram.programId,rent:i.d.SYSVAR_RENT_PUBKEY,clock:i.d.SYSVAR_CLOCK_PUBKEY},signers:[o],instructions:[i.d.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:o.publicKey,space:s.a.span,lamports:g,programId:s.b}),s.c.createInitMintInstruction(s.b,o.publicKey,0,r,r),b(u,r,r,o.publicKey),s.c.createMintToInstruction(s.b,o.publicKey,u,r,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},g=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(6).Buffer)},352:function(e,t,n){},353:function(e,t,n){},356:function(e,t){},358:function(e,t){},374:function(e,t){},375:function(e,t){},461:function(e,t){},463:function(e,t){},477:function(e,t){},481:function(e,t){},483:function(e,t){},493:function(e,t){},495:function(e,t){},522:function(e,t){},524:function(e,t){},529:function(e,t){},531:function(e,t){},537:function(e,t){},539:function(e,t){},551:function(e,t){},554:function(e,t){},566:function(e,t){},567:function(e,t,n){"use strict";n.r(t);var r,a,c,i,s,o,u,l=n(2),d=n.n(l),b=n(29),p=n.n(b),f=(n(352),n(353),n(10)),j=n(1),m=n.n(j),h=n(4),x=n(15),g=n(92),O=n(93),v=n(312),y=n(594),w=n(599),S=n(603),k=n(602),P=n.p+"static/media/sol_terminal.2a15cc02.jpeg",K=n(35),R=n(53),T=n(175),A=n(137),M=n(22),B=Object(O.a)(T.a)(r||(r=Object(g.a)([""]))),L=O.a.span(a||(a=Object(g.a)([""]))),C=O.a.div(c||(c=Object(g.a)(["\n      color: white;\n      text-align: right;\n      margin-top: 20px;\n      margin-right: 40px;\n      padding: 5px;\n    "]))),I=(O.a.div(i||(i=Object(g.a)(["\n    display: flex;\n    justify-content: center;\n  "]))),O.a.div(s||(s=Object(g.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n  "]))),O.a.div(o||(o=Object(g.a)([""])))),E=Object(O.a)(y.a)(u||(u=Object(g.a)([""]))),N=function(e){var t=e.days,n=e.hours,r=e.minutes,a=e.seconds;e.completed;return Object(M.jsxs)(L,{children:[n+24*(t||0)," hours, ",r," minutes, ",a," seconds"]})},D=function(e){var t=Object(l.useState)(),n=Object(x.a)(t,2),r=n[0],a=n[1],c=Object(l.useState)(!1),i=Object(x.a)(c,2),s=i[0],o=i[1],u=Object(l.useState)(!1),d=Object(x.a)(u,2),b=d[0],p=d[1],j=Object(l.useState)(!1),g=Object(x.a)(j,2),O=g[0],y=g[1],T=Object(l.useState)(0),L=Object(x.a)(T,2),D=L[0],W=L[1],_=Object(l.useState)(0),U=Object(x.a)(_,2),q=U[0],Y=U[1],F=Object(l.useState)(0),z=Object(x.a)(F,2),G=z[0],H=z[1],J=Object(l.useState)({open:!1,message:"",severity:void 0}),V=Object(x.a)(J,2),Z=V[0],X=V[1],Q=Object(l.useState)(new Date(e.startDate)),$=Object(x.a)(Q,2),ee=$[0],te=$[1],ne=Object(R.c)(),re=Object(l.useState)(),ae=Object(x.a)(re,2),ce=ae[0],ie=ae[1],se=function(){var t=Object(h.a)(m.a.mark((function t(){var n,r,c,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,y(!0),!ne||!(null===ce||void 0===ce?void 0:ce.program)){t.next=10;break}return t.next=5,Object(A.c)(ce,e.config,ne.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(A.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(r=t.sent)||void 0===r?void 0:r.err)?X({open:!0,message:"Mint failed! Please try again!",severity:"error"}):X({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),c=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(c="SOLD OUT!",p(!0)):312===t.t0.code&&(c="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?c="SOLD OUT!":t.t0.message.indexOf("0x135")&&(c="Insufficient funds to mint. Please fund your wallet.")),X({open:!0,message:c,severity:"error"});case 17:if(t.prev=17,!ne){t.next=23;break}return t.next=21,e.connection.getBalance(ne.publicKey);case 21:i=t.sent,a(i/K.LAMPORTS_PER_SOL);case 23:return y(!1),t.finish(17);case 25:case"end":return t.stop()}}),t,null,[[0,12,17,25]])})));return function(){return t.apply(this,arguments)}}();return Object(l.useEffect)((function(){Object(h.a)(m.a.mark((function t(){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!ne){t.next=5;break}return t.next=3,e.connection.getBalance(ne.publicKey);case 3:n=t.sent,a(n/K.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[ne,e.connection]),Object(l.useEffect)((function(){Object(h.a)(m.a.mark((function t(){var n,r,a,c,i,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(ne){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(A.b)(ne,e.candyMachineId,e.connection);case 4:n=t.sent,r=n.candyMachine,a=n.goLiveDate,c=n.itemsAvailable,i=n.itemsRemaining,s=n.itemsRedeemed,W(c),H(i),Y(s),p(0===i),te(a),ie(r);case 16:case"end":return t.stop()}}),t)})))()}),[ne,e.candyMachineId,e.connection]),Object(M.jsxs)("main",{children:[Object(M.jsxs)(C,{children:[ne&&Object(M.jsxs)("p",{children:["Wallet ",Object(A.d)(ne.publicKey.toBase58()||"")]}),ne&&Object(M.jsxs)("p",{children:["Balance: ",(r||0).toLocaleString()," SOL"]}),ne&&Object(M.jsxs)("p",{children:["Total Available: ",D]}),ne&&Object(M.jsxs)("p",{children:["Redeemed: ",q]}),ne&&Object(M.jsxs)("p",{children:["Remaining: ",G]})]}),Object(M.jsx)(I,{children:ne?Object(M.jsx)(E,{disabled:b||O||!s,onClick:se,variant:"contained",children:b?"SOLD OUT":s?O?Object(M.jsx)(w.a,{}):"MINT":Object(M.jsx)(v.a,{date:ee,onMount:function(e){return e.completed&&o(!0)},onComplete:function(){return o(!0)},renderer:N})}):Object(M.jsx)(B,{children:"Connect Wallet"})}),Object(M.jsx)("div",{children:Object(M.jsx)("img",{src:P,style:{width:"30%",height:"30%",aspectRatio:"1",backgroundColor:"black"}})}),Object(M.jsx)("div",{style:{padding:"20px"},children:Object(M.jsxs)("p",{style:{color:"greenyellow",fontFamily:"monospace",fontSize:"24px",textAlign:"center",display:"inline-block",position:"relative"},children:[" Realspace,[1] also called normal space,[2] space-normal to the Chiss, ",Object(M.jsx)("br",{}),"[3] or simply space,[4] was the dimension in which all of the galaxy's residents lived. The vast ",Object(M.jsx)("br",{}),"majority of space was a vacuum, a depressurized area devoid of atmosphere. The vacuum of space ",Object(M.jsx)("br",{}),"was fatal to many living organisms without the use of some sort of EVA suit and was unable to ",Object(M.jsx)("br",{}),"sustain fire.[5] Because travel using sublight engines within realspace was slow, sentients ",Object(M.jsx)("br",{}),"found a technological way to access the shadow dimension known as hyperspace. A starship ",Object(M.jsx)("br",{}),'equipped with a hyperdrive would "jump" from realspace into hyperspace, and "revert" from hyperspace',Object(M.jsx)("br",{}),"to realspace.[1] Species that could survive in the vacuum of space include exogorths[6] and",Object(M.jsx)("br",{}),"Cylo's cyborg whale-ships.[7] Neebrays could survive in nebulae, such as the Kaliida Nebula.[8]",Object(M.jsx)("br",{}),"As well as being able to survive in space, the purrgil were capable of traveling through",Object(M.jsx)("br",{}),"hyperspace.[9] Many droids were able to operate in space. Astromech droids were exposed",Object(M.jsx)("br",{}),"to the vacuum of space when conducting repairs outside the hull of a starship[10] and when",Object(M.jsx)("br",{}),"inserted into the astromech socket of a starfighter.[11] KX-series security droids could",Object(M.jsx)("br",{}),"also survive in the vacuum of space.[12] Battle droids, used by the Confederacy of ",Object(M.jsx)("br",{}),"Independent Systems during the Clone Wars, occasionally sat on the outside of ships, ",Object(M.jsx)("br",{}),"such as pod-hunting shuttles.[13] "]})}),Object(M.jsx)(S.a,{open:Z.open,autoHideDuration:6e3,onClose:function(){return X(Object(f.a)(Object(f.a)({},Z),{},{open:!1}))},children:Object(M.jsx)(k.a,{onClose:function(){return X(Object(f.a)(Object(f.a)({},Z),{},{open:!1}))},severity:Z.severity,children:Z.message})})]})},W=n(32),_=n(121),U=n(339),q=n(600),Y=new W.d.PublicKey("FoPP2uq46qw7j9cd5NGxqM8Mf3X1KF8NUvpiNVYosUvD"),F=new W.d.PublicKey("GKfdzpKDwv3zmtpSCYq2h6ahyH29xPDDgZegJmxak1yx"),z=new W.d.PublicKey("H7JZ9y2g4erMracrjXSBb7ZLJtEnapZKkMizCK8GURyy"),G="devnet",H=new W.d.Connection("https://explorer-api.devnet.solana.com"),J=parseInt("1632528720",10),V=Object(U.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),Z=function(){var e=Object(l.useMemo)((function(){return Object(K.clusterApiUrl)(G)}),[]),t=Object(l.useMemo)((function(){return[Object(_.a)(),Object(_.b)(),Object(_.c)(),Object(_.e)({network:G}),Object(_.d)({network:G})]}),[]);return Object(M.jsx)("div",{className:"Top",children:Object(M.jsx)("div",{className:"App",children:Object(M.jsxs)("div",{className:"Header-parent",children:[Object(M.jsx)("header",{className:"App-header",children:"Welcome to The Terminal"}),Object(M.jsx)("div",{className:"Wallet-Button",children:Object(M.jsx)(q.a,{theme:V,children:Object(M.jsx)(R.a,{endpoint:e,children:Object(M.jsx)(R.b,{wallets:t,autoConnect:!0,children:Object(M.jsx)(T.b,{children:Object(M.jsx)(D,{candyMachineId:z,config:F,connection:H,startDate:J,treasury:Y,txTimeout:3e4})})})})})})]})})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,604)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};p.a.render(Object(M.jsx)(d.a.StrictMode,{children:Object(M.jsx)(Z,{})}),document.getElementById("root")),X()}},[[567,1,2]]]);
//# sourceMappingURL=main.bf002ca0.chunk.js.map