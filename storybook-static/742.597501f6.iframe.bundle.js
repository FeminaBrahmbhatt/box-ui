"use strict";(self.webpackChunkbox_ui=self.webpackChunkbox_ui||[]).push([[742],{"./src/Nav/SideNav.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>SideNav,M:()=>renderLogo});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Typography=__webpack_require__("./src/Typography.tsx"),useFocusRing=__webpack_require__("./node_modules/@react-aria/focus/dist/useFocusRing.mjs"),useHover=__webpack_require__("./node_modules/@react-aria/interactions/dist/useHover.mjs"),use_active_press=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-active-press.js"),use_element_size=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-element-size.js"),use_event=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-event.js"),use_latest_value=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");var use_iso_morphic_effect=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),use_on_disappear=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-on-disappear.js"),use_outside_click=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-outside-click.js"),use_owner=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-owner.js"),use_resolve_button_type=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js"),internal_hidden=__webpack_require__("./node_modules/@headlessui/react/dist/internal/hidden.js"),owner=__webpack_require__("./node_modules/@headlessui/react/dist/utils/owner.js");let a=(0,react.createContext)(null);function use_root_containers_O({children:l,node:n}){let[o,r]=(0,react.useState)(null),u=b(null!=n?n:o);return react.createElement(a.Provider,{value:u},l,null===u&&react.createElement(internal_hidden.j,{features:internal_hidden.u.Hidden,ref:t=>{var i,c;if(t)for(let e of null!=(c=null==(i=(0,owner.T)(t))?void 0:i.querySelectorAll("html > *, body > *"))?c:[])if(e!==document.body&&e!==document.head&&e instanceof HTMLElement&&null!=e&&e.contains(t)){r(e);break}}}))}function b(l=null){var n;return null!=(n=(0,react.useContext)(a))?n:l}var r,use_scroll_lock=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js"),use_sync_refs=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js"),use_window_event=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-window-event.js"),use_tab_direction_a=((r=use_tab_direction_a||{})[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r);function u(){let e=(0,react.useRef)(0);return(0,use_window_event.M)(!0,"keydown",(r=>{"Tab"===r.key&&(e.current=r.shiftKey?1:0)}),!0),e}var use_transition=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-transition.js");let e=(0,react.createContext)((()=>{}));function close_provider_C({value:t,children:o}){return react.createElement(e.Provider,{value:t},o)}var p,f,floating=__webpack_require__("./node_modules/@headlessui/react/dist/internal/floating.js"),open_closed=__webpack_require__("./node_modules/@headlessui/react/dist/internal/open-closed.js"),bugs=__webpack_require__("./node_modules/@headlessui/react/dist/utils/bugs.js"),focus_management=__webpack_require__("./node_modules/@headlessui/react/dist/utils/focus-management.js"),match=__webpack_require__("./node_modules/@headlessui/react/dist/utils/match.js"),render=__webpack_require__("./node_modules/@headlessui/react/dist/utils/render.js"),keyboard=__webpack_require__("./node_modules/@headlessui/react/dist/components/keyboard.js"),portal=__webpack_require__("./node_modules/@headlessui/react/dist/components/portal/portal.js"),lt=((f=lt||{})[f.Open=0]="Open",f[f.Closed=1]="Closed",f),at=((p=at||{})[p.TogglePopover=0]="TogglePopover",p[p.ClosePopover=1]="ClosePopover",p[p.SetButton=2]="SetButton",p[p.SetButtonId=3]="SetButtonId",p[p.SetPanel=4]="SetPanel",p[p.SetPanelId=5]="SetPanelId",p);let pt={0:o=>({...o,popoverState:(0,match.Y)(o.popoverState,{0:1,1:0}),__demoMode:!1}),1:o=>1===o.popoverState?o:{...o,popoverState:1,__demoMode:!1},2:(o,a)=>o.button===a.button?o:{...o,button:a.button},3:(o,a)=>o.buttonId===a.buttonId?o:{...o,buttonId:a.buttonId},4:(o,a)=>o.panel===a.panel?o:{...o,panel:a.panel},5:(o,a)=>o.panelId===a.panelId?o:{...o,panelId:a.panelId}},Ee=(0,react.createContext)(null);function se(o){let a=(0,react.useContext)(Ee);if(null===a){let f=new Error(`<${o} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(f,se),f}return a}Ee.displayName="PopoverContext";let ue=(0,react.createContext)(null);function be(o){let a=(0,react.useContext)(ue);if(null===a){let f=new Error(`<${o} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(f,be),f}return a}ue.displayName="PopoverAPIContext";let ge=(0,react.createContext)(null);function Me(){return(0,react.useContext)(ge)}ge.displayName="PopoverGroupContext";let ie=(0,react.createContext)(null);function ut(o,a){return(0,match.Y)(a.type,pt,o,a)}ie.displayName="PopoverPanelContext";let vt=render.Ac.RenderStrategy|render.Ac.Static;function Oe(o,a){let f=(0,react.useId)(),{id:C=`headlessui-popover-backdrop-${f}`,transition:T=!1,...S}=o,[{popoverState:p},l]=se("Popover.Backdrop"),[c,d]=(0,react.useState)(null),r=(0,use_sync_refs.P)(a,d),s=(0,open_closed.O_)(),[R,m]=(0,use_transition.p)(T,c,null!==s?(s&open_closed.Uw.Open)===open_closed.Uw.Open:0===p),h=(0,use_event._)((g=>{if((0,bugs.l)(g.currentTarget))return g.preventDefault();l({type:1})})),P=(0,react.useMemo)((()=>({open:0===p})),[p]),n={ref:r,id:C,"aria-hidden":!0,onClick:h,...(0,use_transition.B)(m)};return(0,render.Ci)()({ourProps:n,theirProps:S,slot:P,defaultTag:"div",features:vt,visible:R,name:"Popover.Backdrop"})}let mt=render.Ac.RenderStrategy|render.Ac.Static;let gt=(0,render.FX)((function dt(o,a){var J;let{__demoMode:f=!1,...C}=o,T=(0,react.useRef)(null),S=(0,use_sync_refs.P)(a,(0,use_sync_refs.a)((t=>{T.current=t}))),p=(0,react.useRef)([]),l=(0,react.useReducer)(ut,{__demoMode:f,popoverState:f?0:1,buttons:p,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:(0,react.createRef)(),afterPanelSentinel:(0,react.createRef)(),afterButtonSentinel:(0,react.createRef)()}),[{popoverState:c,button:d,buttonId:r,panel:s,panelId:R,beforePanelSentinel:m,afterPanelSentinel:h,afterButtonSentinel:P},n]=l,v=(0,use_owner.g)(null!=(J=T.current)?J:d),g=(0,react.useMemo)((()=>{if(!d||!s)return!1;for(let E of document.querySelectorAll("body > *"))if(Number(null==E?void 0:E.contains(d))^Number(null==E?void 0:E.contains(s)))return!0;let t=(0,focus_management.iq)(),e=t.indexOf(d),u=(e+t.length-1)%t.length,i=(e+1)%t.length,A=t[u],x=t[i];return!s.contains(A)&&!s.contains(x)}),[d,s]),_=(0,use_latest_value.Y)(r),L=(0,use_latest_value.Y)(R),I=(0,react.useMemo)((()=>({buttonId:_,panelId:L,close:()=>n({type:1})})),[_,L,n]),M=Me(),k=null==M?void 0:M.registerPopover,B=(0,use_event._)((()=>{var t;return null!=(t=null==M?void 0:M.isFocusWithinPopoverGroup())?t:(null==v?void 0:v.activeElement)&&((null==d?void 0:d.contains(v.activeElement))||(null==s?void 0:s.contains(v.activeElement)))}));(0,react.useEffect)((()=>null==k?void 0:k(I)),[k,I]);let[U,O]=(0,portal.k2)(),N=b(d),w=function use_root_containers_R({defaultContainers:l=[],portals:n,mainTreeNode:o}={}){let r=(0,use_owner.g)(o),u=(0,use_event._)((()=>{var i,c;let t=[];for(let e of l)null!==e&&(e instanceof HTMLElement?t.push(e):"current"in e&&e.current instanceof HTMLElement&&t.push(e.current));if(null!=n&&n.current)for(let e of n.current)t.push(e);for(let e of null!=(i=null==r?void 0:r.querySelectorAll("html > *, body > *"))?i:[])e!==document.body&&e!==document.head&&e instanceof HTMLElement&&"headlessui-portal-root"!==e.id&&(o&&(e.contains(o)||e.contains(null==(c=null==o?void 0:o.getRootNode())?void 0:c.host))||t.some((m=>e.contains(m)))||t.push(e));return t}));return{resolveContainers:u,contains:(0,use_event._)((t=>u().some((i=>i.contains(t)))))}}({mainTreeNode:N,portals:U,defaultContainers:[d,s]});(function E(n,e,a,t){let i=(0,use_latest_value.Y)(a);(0,react.useEffect)((()=>{function r(o){i.current(o)}return(n=null!=n?n:window).addEventListener(e,r,t),()=>n.removeEventListener(e,r,t)}),[n,e,t])})(null==v?void 0:v.defaultView,"focus",(t=>{var e,u,i,A,x,E;t.target!==window&&t.target instanceof HTMLElement&&0===c&&(B()||d&&s&&(w.contains(t.target)||null!=(u=null==(e=m.current)?void 0:e.contains)&&u.call(e,t.target)||null!=(A=null==(i=h.current)?void 0:i.contains)&&A.call(i,t.target)||null!=(E=null==(x=P.current)?void 0:x.contains)&&E.call(x,t.target)||n({type:1})))}),!0),(0,use_outside_click.j)(0===c,w.resolveContainers,((t,e)=>{n({type:1}),(0,focus_management.Bm)(e,focus_management.MZ.Loose)||(t.preventDefault(),null==d||d.focus())}));let F=(0,use_event._)((t=>{n({type:1});let e=t?t instanceof HTMLElement?t:"current"in t&&t.current instanceof HTMLElement?t.current:d:d;null==e||e.focus()})),Q=(0,react.useMemo)((()=>({close:F,isPortalled:g})),[F,g]),K=(0,react.useMemo)((()=>({open:0===c,close:F})),[c,F]),Z={ref:S},$=(0,render.Ci)();return react.createElement(use_root_containers_O,{node:N},react.createElement(floating.St,null,react.createElement(ie.Provider,{value:null},react.createElement(Ee.Provider,{value:l},react.createElement(ue.Provider,{value:Q},react.createElement(close_provider_C,{value:F},react.createElement(open_closed.El,{value:(0,match.Y)(c,{0:open_closed.Uw.Open,1:open_closed.Uw.Closed})},react.createElement(O,null,$({ourProps:Z,theirProps:C,slot:K,defaultTag:"div",name:"Popover"})))))))))})),St=(0,render.FX)((function ft(o,a){let f=(0,react.useId)(),{id:C=`headlessui-popover-button-${f}`,disabled:T=!1,autoFocus:S=!1,...p}=o,[l,c]=se("Popover.Button"),{isPortalled:d}=be("Popover.Button"),r=(0,react.useRef)(null),s=`headlessui-focus-sentinel-${(0,react.useId)()}`,R=Me(),m=null==R?void 0:R.closeOthers,P=null!==function st(){return(0,react.useContext)(ie)}();(0,react.useEffect)((()=>{if(!P)return c({type:3,buttonId:C}),()=>{c({type:3,buttonId:null})}}),[P,C,c]);let[n]=(0,react.useState)((()=>Symbol())),v=(0,use_sync_refs.P)(r,a,(0,floating.Xc)(),(0,use_event._)((e=>{if(!P){if(e)l.buttons.current.push(n);else{let u=l.buttons.current.indexOf(n);-1!==u&&l.buttons.current.splice(u,1)}l.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),e&&c({type:2,button:e})}}))),g=(0,use_sync_refs.P)(r,a),_=(0,use_owner.g)(r),L=(0,use_event._)((e=>{var u,i,A;if(P){if(1===l.popoverState)return;switch(e.key){case keyboard.D.Space:case keyboard.D.Enter:e.preventDefault(),null==(i=(u=e.target).click)||i.call(u),c({type:1}),null==(A=l.button)||A.focus()}}else switch(e.key){case keyboard.D.Space:case keyboard.D.Enter:e.preventDefault(),e.stopPropagation(),1===l.popoverState&&(null==m||m(l.buttonId)),c({type:0});break;case keyboard.D.Escape:if(0!==l.popoverState)return null==m?void 0:m(l.buttonId);if(!r.current||null!=_&&_.activeElement&&!r.current.contains(_.activeElement))return;e.preventDefault(),e.stopPropagation(),c({type:1})}})),I=(0,use_event._)((e=>{P||e.key===keyboard.D.Space&&e.preventDefault()})),M=(0,use_event._)((e=>{var u,i;(0,bugs.l)(e.currentTarget)||T||(P?(c({type:1}),null==(u=l.button)||u.focus()):(e.preventDefault(),e.stopPropagation(),1===l.popoverState&&(null==m||m(l.buttonId)),c({type:0}),null==(i=l.button)||i.focus()))})),k=(0,use_event._)((e=>{e.preventDefault(),e.stopPropagation()})),{isFocusVisible:B,focusProps:U}=(0,useFocusRing.o)({autoFocus:S}),{isHovered:O,hoverProps:N}=(0,useHover.M)({isDisabled:T}),{pressed:w,pressProps:Y}=(0,use_active_press.Z)({disabled:T}),F=0===l.popoverState,Q=(0,react.useMemo)((()=>({open:F,active:w||F,disabled:T,hover:O,focus:B,autofocus:S})),[F,O,B,w,T,S]),K=(0,use_resolve_button_type.c)(o,l.button),Z=P?(0,render.v6)({ref:g,type:K,onKeyDown:L,onClick:M,disabled:T||void 0,autoFocus:S},U,N,Y):(0,render.v6)({ref:v,id:l.buttonId,type:K,"aria-expanded":0===l.popoverState,"aria-controls":l.panel?l.panelId:void 0,disabled:T||void 0,autoFocus:S,onKeyDown:L,onKeyUp:I,onClick:M,onMouseDown:k},U,N,Y),$=u(),J=(0,use_event._)((()=>{let e=l.panel;e&&function u(){(0,match.Y)($.current,{[use_tab_direction_a.Forwards]:()=>(0,focus_management.CU)(e,focus_management.BD.First),[use_tab_direction_a.Backwards]:()=>(0,focus_management.CU)(e,focus_management.BD.Last)})===focus_management.Me.Error&&(0,focus_management.CU)((0,focus_management.iq)().filter((A=>"true"!==A.dataset.headlessuiFocusGuard)),(0,match.Y)($.current,{[use_tab_direction_a.Forwards]:focus_management.BD.Next,[use_tab_direction_a.Backwards]:focus_management.BD.Previous}),{relativeTo:l.button})}()})),t=(0,render.Ci)();return react.createElement(react.Fragment,null,t({ourProps:Z,theirProps:p,slot:Q,defaultTag:"button",name:"Popover.Button"}),F&&!P&&d&&react.createElement(internal_hidden.j,{id:s,ref:l.afterButtonSentinel,features:internal_hidden.u.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:J}))})),At=(0,render.FX)(Oe),Ct=(0,render.FX)(Oe),Rt=(0,render.FX)((function yt(o,a){let f=(0,react.useId)(),{id:C=`headlessui-popover-panel-${f}`,focus:T=!1,anchor:S,portal:p=!1,modal:l=!1,transition:c=!1,...d}=o,[r,s]=se("Popover.Panel"),{close:R,isPortalled:m}=be("Popover.Panel"),h=`headlessui-focus-sentinel-before-${f}`,P=`headlessui-focus-sentinel-after-${f}`,n=(0,react.useRef)(null),v=(0,floating.zn)(S),[g,_]=(0,floating.UF)(v),L=(0,floating.G3)();v&&(p=!0);let[I,M]=(0,react.useState)(null),k=(0,use_sync_refs.P)(n,a,v?g:null,(0,use_event._)((t=>s({type:4,panel:t}))),M),B=(0,use_owner.g)(n);(0,use_iso_morphic_effect.s)((()=>(s({type:5,panelId:C}),()=>{s({type:5,panelId:null})})),[C,s]);let U=(0,open_closed.O_)(),[O,N]=(0,use_transition.p)(c,I,null!==U?(U&open_closed.Uw.Open)===open_closed.Uw.Open:0===r.popoverState);(0,use_on_disappear.O)(O,r.button,(()=>{s({type:1})}));let w=!r.__demoMode&&(l&&O);(0,use_scroll_lock.K)(w,B);let Y=(0,use_event._)((t=>{var e;if(t.key===keyboard.D.Escape){if(0!==r.popoverState||!n.current||null!=B&&B.activeElement&&!n.current.contains(B.activeElement))return;t.preventDefault(),t.stopPropagation(),s({type:1}),null==(e=r.button)||e.focus()}}));(0,react.useEffect)((()=>{var t;o.static||1===r.popoverState&&(null==(t=o.unmount)||t)&&s({type:4,panel:null})}),[r.popoverState,o.unmount,o.static,s]),(0,react.useEffect)((()=>{if(r.__demoMode||!T||0!==r.popoverState||!n.current)return;let t=null==B?void 0:B.activeElement;n.current.contains(t)||(0,focus_management.CU)(n.current,focus_management.BD.First)}),[r.__demoMode,T,n.current,r.popoverState]);let F=(0,react.useMemo)((()=>({open:0===r.popoverState,close:R})),[r.popoverState,R]),Q=(0,render.v6)(v?L():{},{ref:k,id:C,onKeyDown:Y,onBlur:T&&0===r.popoverState?t=>{var u,i,A,x,E;let e=t.relatedTarget;e&&n.current&&(null!=(u=n.current)&&u.contains(e)||(s({type:1}),(null!=(A=null==(i=r.beforePanelSentinel.current)?void 0:i.contains)&&A.call(i,e)||null!=(E=null==(x=r.afterPanelSentinel.current)?void 0:x.contains)&&E.call(x,e))&&e.focus({preventScroll:!0})))}:void 0,tabIndex:-1,style:{...d.style,..._,"--button-width":(0,use_element_size.L)(r.button,!0).width},...(0,use_transition.B)(N)}),K=u(),Z=(0,use_event._)((()=>{let t=n.current;t&&function e(){(0,match.Y)(K.current,{[use_tab_direction_a.Forwards]:()=>{var i;(0,focus_management.CU)(t,focus_management.BD.First)===focus_management.Me.Error&&(null==(i=r.afterPanelSentinel.current)||i.focus())},[use_tab_direction_a.Backwards]:()=>{var u;null==(u=r.button)||u.focus({preventScroll:!0})}})}()})),$=(0,use_event._)((()=>{let t=n.current;t&&function e(){(0,match.Y)(K.current,{[use_tab_direction_a.Forwards]:()=>{if(!r.button)return;let u=(0,focus_management.iq)(),i=u.indexOf(r.button),A=u.slice(0,i+1),E=[...u.slice(i+1),...A];for(let de of E.slice())if("true"===de.dataset.headlessuiFocusGuard||null!=I&&I.contains(de)){let Se=E.indexOf(de);-1!==Se&&E.splice(Se,1)}(0,focus_management.CU)(E,focus_management.BD.First,{sorted:!1})},[use_tab_direction_a.Backwards]:()=>{var i;(0,focus_management.CU)(t,focus_management.BD.Previous)===focus_management.Me.Error&&(null==(i=r.button)||i.focus())}})}()})),J=(0,render.Ci)();return react.createElement(open_closed.$x,null,react.createElement(ie.Provider,{value:C},react.createElement(ue.Provider,{value:{close:R,isPortalled:m}},react.createElement(portal.ZL,{enabled:!!p&&(o.static||O)},O&&m&&react.createElement(internal_hidden.j,{id:h,ref:r.beforePanelSentinel,features:internal_hidden.u.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:Z}),J({ourProps:Q,theirProps:d,slot:F,defaultTag:"div",features:mt,visible:O,name:"Popover.Panel"}),O&&m&&react.createElement(internal_hidden.j,{id:P,ref:r.afterPanelSentinel,features:internal_hidden.u.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:$})))))})),Bt=(0,render.FX)((function bt(o,a){let f=(0,react.useRef)(null),C=(0,use_sync_refs.P)(f,a),[T,S]=(0,react.useState)([]),p=(0,use_event._)((P=>{S((n=>{let v=n.indexOf(P);if(-1!==v){let g=n.slice();return g.splice(v,1),g}return n}))})),l=(0,use_event._)((P=>(S((n=>[...n,P])),()=>p(P)))),c=(0,use_event._)((()=>{var v;let P=(0,owner.T)(f);if(!P)return!1;let n=P.activeElement;return!(null==(v=f.current)||!v.contains(n))||T.some((g=>{var _,L;return(null==(_=P.getElementById(g.buttonId.current))?void 0:_.contains(n))||(null==(L=P.getElementById(g.panelId.current))?void 0:L.contains(n))}))})),d=(0,use_event._)((P=>{for(let n of T)n.buttonId.current!==P&&n.close()})),r=(0,react.useMemo)((()=>({registerPopover:l,unregisterPopover:p,isFocusWithinPopoverGroup:c,closeOthers:d})),[l,p,c,d]),s=(0,react.useMemo)((()=>({})),[]),R=o,m={ref:C},h=(0,render.Ci)();return react.createElement(use_root_containers_O,null,react.createElement(ge.Provider,{value:r},h({ourProps:m,theirProps:R,slot:s,defaultTag:"div",name:"Popover.Group"})))})),lo=Object.assign(gt,{Button:St,Backdrop:Ct,Overlay:At,Panel:Rt,Group:Bt});var fi=__webpack_require__("./node_modules/react-icons/fi/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SubNavItem=_ref=>{let{inDropdown,isActive,subItem,onClick}=_ref;return(0,jsx_runtime.jsx)("li",{className:classnames_default()("navItem group",{"bg-primary-50 dark:bg-gray-100 dark:bg-opacity-10":isActive}),onClick,children:(0,jsx_runtime.jsx)(Typography.o,{variant:"md",customWeight:"medium",customColor:classnames_default()("group-hover:text-primary-600 dark:group-hover:text-white",{"text-gray-800 dark:text-white":!isActive,"text-primary-600 dark:text-white":isActive}),className:classnames_default()("flex-grow",{"pl-13":!inDropdown,"pl-4":inDropdown}),children:subItem.label})},subItem.label)};SubNavItem.__docgenInfo={description:"",methods:[],displayName:"SubNavItem",props:{inDropdown:{required:!1,tsType:{name:"boolean"},description:""},isActive:{required:!0,tsType:{name:"boolean"},description:""},subItem:{required:!0,tsType:{name:"SubNavItem"},description:""},onClick:{required:!0,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLLIElement>",elements:[{name:"HTMLLIElement"}]},description:""}}};const NavItem=_ref=>{let{item,isActive,activeSubNavItem,open,openDropdown,onClick}=_ref;const{setProps}={setProps:(icon,iconSize,additionalClass)=>(0,react.isValidElement)(icon)?(0,react.cloneElement)(icon,{size:iconSize,className:classnames_default()(icon.props.className,additionalClass)}):icon};return(0,jsx_runtime.jsxs)(lo,{className:"relative",children:[(0,jsx_runtime.jsx)(St,{as:react.Fragment,children:(0,jsx_runtime.jsxs)("li",{className:classnames_default()("navItem group",{"px-4":open,"ml-2 px-2 w-10":!open,"bg-primary-50 dark:bg-gray-100 dark:bg-opacity-10":isActive}),onClick:()=>onClick(item),children:[setProps(item.icon,24,classnames_default()("group-hover:text-primary-600 dark:group-hover:text-white dark:text-white transform duration-100 ease-out",{"-rotate-180":item.toggleSidebar&&!open,"text-gray-900":!isActive,"text-primary-600 dark:text-white":isActive})),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Typography.o,{variant:"md",customWeight:"medium",className:classnames_default()("flex-grow ml-3",{"opacity-0 hidden":!open}),customColor:classnames_default()("group-hover:text-primary-600 dark:group-hover:text-white",{"text-gray-800 dark:text-white":!isActive,"text-primary-600 dark:text-white":isActive}),children:item.label}),item.subItems&&item.subItems.length>0?(0,jsx_runtime.jsx)(fi.fK4,{size:20,className:classnames_default()("group-hover:text-primary-600 dark:group-hover:text-white transform duration-100 ease-out",{"opacity-0 hidden":!open,"text-gray-400":!isActive,"text-primary-600 dark:text-white":isActive,"-rotate-180":openDropdown})}):null]})]})}),openDropdown&&open&&item.subItems&&item.subItems.length>0?(0,jsx_runtime.jsx)("div",{className:"my-2 space-y-1",children:item.subItems.map((subItem=>(0,jsx_runtime.jsx)(SubNavItem,{isActive:activeSubNavItem===subItem.label,subItem,onClick:()=>onClick(item,subItem.label)},subItem.label)))}):null,!open&&item.subItems&&item.subItems.length>0?(0,jsx_runtime.jsx)(Rt,{className:"absolute z-50 px-4 py-3 ml-5 space-y-1 bg-white rounded-lg shadow-md -top-3 left-19 w-58 dark:bg-gray-900",children:item.subItems.map((subItem=>(0,jsx_runtime.jsx)(SubNavItem,{inDropdown:!0,isActive:activeSubNavItem===subItem.label,subItem,onClick:()=>onClick(item,subItem.label)},subItem.label)))}):null]},item.label)};NavItem.__docgenInfo={description:"",methods:[],displayName:"NavItem",props:{item:{required:!0,tsType:{name:"INavItem"},description:""},isActive:{required:!0,tsType:{name:"boolean"},description:""},activeSubNavItem:{required:!0,tsType:{name:"string"},description:""},open:{required:!0,tsType:{name:"boolean"},description:""},openDropdown:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: INavItem, subNavPath?: string) => void",signature:{arguments:[{type:{name:"INavItem"},name:"item"},{type:{name:"string"},name:"subNavPath"}],return:{name:"void"}}},description:""}}};var TextInput=__webpack_require__("./src/TextInput.tsx"),data_images=__webpack_require__("./src/data/images/index.tsx");const renderLogo=()=>(0,jsx_runtime.jsx)("img",{src:data_images.z.logo,className:"w-8 h-8 select-none",alt:"logo"}),SideNav=_ref=>{let{className,navItemsTop,navItemsBottom,username,email,open,setOpen}=_ref;const[searchString,setSearchString]=react.useState(""),[activeNavItem,setActiveNavItem]=react.useState(""),[activeSubNavItem,setActiveSubNavItem]=react.useState(""),[openDropdowns,setOpenDropdowns]=react.useState([]),onClickNavItem=(item,subNavPath)=>{subNavPath&&setActiveSubNavItem(subNavPath),item.toggleSidebar?item.toggleSidebar&&setOpen(!open):setActiveNavItem(item.label),item.subItems&&openDropdowns.includes(item.label)&&!subNavPath?setOpenDropdowns(openDropdowns.filter((dropdownItem=>dropdownItem!==item.label))):item.subItems&&!openDropdowns.includes(item.label)&&setOpenDropdowns([...openDropdowns,item.label])};return(0,jsx_runtime.jsxs)("div",{className:classnames_default()("py-6 flex flex-col flex-grow bg-white dark:bg-gray-900 transform ease-out duration-100 overflow-y-auto xs:overflow-y-visible",{"w-80":open,"w-24":!open,"border-r border-gray-300 dark:border-opacity-20":!0},className),children:[(0,jsx_runtime.jsxs)("div",{className:"flex items-center w-full mb-8 ml-9",children:[renderLogo(),(0,jsx_runtime.jsx)(Typography.o,{variant:"xl",className:classnames_default()("ml-2.5 whitespace-nowrap select-none",{"opacity-0 hidden":!open}),customWeight:"medium",children:"Box UI"})]}),(0,jsx_runtime.jsx)("div",{className:"mb-8 mx-9",children:open?(0,jsx_runtime.jsx)(TextInput.k,{type:"text",value:searchString,handleChange:e=>{setSearchString(e.target.value)},placeholder:"Search",LeadingIcon:(0,jsx_runtime.jsx)(fi.CKj,{})}):(0,jsx_runtime.jsx)("div",{className:"h-11"})}),(0,jsx_runtime.jsxs)("div",{className:classnames_default()("flex flex-col justify-between h-full ml-5 w-70",{"w-14":!open}),children:[(0,jsx_runtime.jsx)("ul",{className:"flex flex-col space-y-1",children:navItemsTop.map((item=>(0,jsx_runtime.jsx)(NavItem,{item,isActive:activeNavItem===item.label,activeSubNavItem,open,openDropdown:openDropdowns.includes(item.label),onClick:onClickNavItem},item.label)))}),(0,jsx_runtime.jsx)("ul",{className:"flex flex-col mb-6 space-y-1",children:navItemsBottom.map((item=>(0,jsx_runtime.jsx)(NavItem,{item,isActive:activeNavItem===item.label,activeSubNavItem,open,openDropdown:openDropdowns.includes(item.label),onClick:onClickNavItem},item.label)))})]}),(0,jsx_runtime.jsx)("hr",{className:classnames_default()("ml-5 border-t border-gray-300 dark:border-opacity-20",{"w-70":open,"w-14":!open})}),(0,jsx_runtime.jsx)("div",{className:"flex mt-6 w-70 ml-7",children:open?(0,jsx_runtime.jsxs)("div",{className:"flex justify-between ml-3",children:[(0,jsx_runtime.jsxs)("div",{className:"select-none",children:[(0,jsx_runtime.jsx)(Typography.o,{variant:"sm",customWeight:"medium",customColor:"text-gray-700 dark:text-white",children:username}),(0,jsx_runtime.jsx)(Typography.o,{variant:"sm",customColor:"text-gray-500",children:email})]}),(0,jsx_runtime.jsx)(fi.QeK,{size:24,className:"ml-6 text-gray-400 cursor-pointer"})]}):null})]})};renderLogo.__docgenInfo={description:"",methods:[],displayName:"renderLogo"},SideNav.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{className:{required:!1,tsType:{name:"string"},description:""},navItemsTop:{required:!0,tsType:{name:"Array",elements:[{name:"INavItem"}],raw:"INavItem[]"},description:""},navItemsBottom:{required:!0,tsType:{name:"Array",elements:[{name:"INavItem"}],raw:"INavItem[]"},description:""},open:{required:!0,tsType:{name:"boolean"},description:""},setOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},username:{required:!0,tsType:{name:"string"},description:""},email:{required:!0,tsType:{name:"string"},description:""}}}},"./src/StoryLayout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>StoryLayout});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StoryLayout=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()({"dark bg-gray-900":args.darkMode},"-m-4"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(args.className,{"p-4":!args.noPadding}),children:args.children})});StoryLayout.__docgenInfo={description:"",methods:[],displayName:"StoryLayout",props:{darkMode:{required:!0,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"String"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},noPadding:{required:!1,tsType:{name:"String"},description:""}}}},"./src/TextInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>TextInput});var react=__webpack_require__("./node_modules/react/index.js"),Typography=__webpack_require__("./src/Typography.tsx"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextInput=_ref=>{let{type,value,label,placeholder,error,helperText,disabled,LeadingIcon,TrailingIcon,leadingText,handleChange}=_ref;const{setClassName}={setClassName:(icon,additionalClass)=>(0,react.isValidElement)(icon)?(0,react.cloneElement)(icon,{className:classnames_default()(icon.props.className,additionalClass)}):icon};return(0,jsx_runtime.jsxs)("div",{children:[label&&(0,jsx_runtime.jsx)(Typography.o,{variant:"sm",customWeight:"medium",customColor:"text-gray-700 dark:text-white",className:"mb-1.5",children:label}),(0,jsx_runtime.jsxs)("div",{className:classnames_default()("relative",{"flex items-center":leadingText}),children:[(0,jsx_runtime.jsxs)("div",{className:"h-11 absolute shadow-sm rounded-lg w-full flex justify-between items-center px-3.5 pointer-events-none",children:[LeadingIcon?setClassName(LeadingIcon,"text-gray-500"):(0,jsx_runtime.jsx)("div",{}),TrailingIcon&&setClassName(TrailingIcon,classnames_default()({"text-error-500":error,"text-gray-400":!error}))]}),leadingText&&(0,jsx_runtime.jsx)(Typography.o,{variant:"sm",customWeight:"regular",className:classnames_default()("flex items-center h-11 text-lg text-gray-500 pl-3.5 pr-3 border border-r-0 rounded-l-lg border-gray-300 dark:border-gray-500",{"bg-gray-50 dark:bg-gray-700":disabled,"dark:bg-gray-800":!disabled}),children:leadingText}),(0,jsx_runtime.jsx)("input",{type,value,placeholder,onChange:handleChange,disabled,className:classnames_default()("w-full select-none text-gray-900 dark:text-white text-md border h-11 px-2",{"pl-9":LeadingIcon,"pr-9":TrailingIcon,"rounded-l-0 rounded-r-lg":leadingText,"rounded-lg":!leadingText,"border-gray-300 dark:border-gray-500 focus:ring-4 focus:border-primary-300 dark:focus:border-gray-100 focus:ring-primary-100 dark:focus:ring-gray-100 dark:focus:ring-opacity-20":!error,"border-error-300 focus:ring-4 focus:border-error-300 focus:ring-error-100":error,"bg-white dark:bg-gray-800":!disabled,"bg-gray-50 dark:bg-gray-700":disabled})})]}),error&&(0,jsx_runtime.jsx)(Typography.o,{variant:"sm",customWeight:"regular",className:"mt-1.5 text-error-500",children:error}),helperText&&(0,jsx_runtime.jsx)(Typography.o,{variant:"sm",customWeight:"regular",className:"mt-1.5 text-gray-500",children:helperText})]})};TextInput.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{type:{required:!0,tsType:{name:"union",raw:'"email" | "text"',elements:[{name:"literal",value:'"email"'},{name:"literal",value:'"text"'}]},description:""},value:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},leadingText:{required:!1,tsType:{name:"string"},description:""},LeadingIcon:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},TrailingIcon:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},handleChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""}}}},"./src/Typography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Typography});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TypographyVariantClasses={xs:"text-xs",sm:"text-sm",md:"text-md",lg:"text-lg",xl:"text-xl",h6:"text-h6",h5:"text-h5",h4:"text-h4",h3:"text-h3",h2:"text-h2",h1:"text-h1"},TypographyWeightClasses={regular:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},Typography=_ref=>{let{variant="md",customWeight="regular",customColor,className,children}=_ref;const TypographyVariantClassName=TypographyVariantClasses[variant],TypographyWeightClassName=TypographyWeightClasses[customWeight],Component=["h1","h2","h3","h4","h5","h6"].includes(null!=variant?variant:"p")?variant:"p";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component,{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(TypographyVariantClassName,TypographyWeightClassName,className,{"tracking-tight":["h1","h2","h3"].includes(variant),"text-black dark:text-white":!customColor},customColor),children})};Typography.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{variant:{required:!1,tsType:{name:"union",raw:'| "xs"\n| "sm"\n| "md"\n| "lg"\n| "xl"\n| "h6"\n| "h5"\n| "h4"\n| "h3"\n| "h2"\n| "h1"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"h6"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h1"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},customWeight:{required:!1,tsType:{name:"union",raw:'"regular" | "medium" | "semibold" | "bold"',elements:[{name:"literal",value:'"regular"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"semibold"'},{name:"literal",value:'"bold"'}]},description:"",defaultValue:{value:'"regular"',computed:!1}},customColor:{required:!1,tsType:{name:"string"},description:""},customClass:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""}}}},"./src/data/images/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>images});const images={logo:"https://media-hosting.imagekit.io/0ec1ca8b900e4e8b/logo.svg?Expires=1838348369&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=pCHsmoIdugCAGgRQuivkSFGORbcd0DMZjw-l9LQlxqEs77-19RpmN8TrGsMdYdKwLic46nDsKt44NPaRyu~mxJDKX7I0acu5x53nLqrjh-fs6s8VATv5eHASNeV83rLF3LXgXwMkXubchLy79xPaEHKlRlvJgcqrjZd3cE4C8QXC0KIG4dSjtkd0rECwtweKFuh1BrJIwcKIxiu5cEJUKgDvi4TUS22KVFh4c52c9CjBGa0ulrxxyZHMj2eXff-uQBkecyW-QYillwmsuz2i5PFf6Ud~9JZ2xYOBWwrq4VRSY-8p~c6Czqagg-w6gqyk-3xEM-f-cDfor~11~xwtTg__",IN:"https://kapowaz.github.io/circle-flags/flags/in.svg",BE:"https://kapowaz.github.io/circle-flags/flags/be.svg",DE:"https://kapowaz.github.io/circle-flags/flags/de.svg",FR:"https://kapowaz.github.io/circle-flags/flags/fr.svg",IT:"https://kapowaz.github.io/circle-flags/flags/it.svg",NL:"https://kapowaz.github.io/circle-flags/flags/nl.svg",RU:"https://kapowaz.github.io/circle-flags/flags/ru.svg",US:"https://kapowaz.github.io/circle-flags/flags/us.svg"}},"./src/data/navItems.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>navItemsBottom,p:()=>navItemsTop});__webpack_require__("./node_modules/react/index.js");var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-icons/fi/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const navItemsTop=[{order:0,path:"home",label:"Home",icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.V5Y,{})},{order:1,path:"dashboard",label:"Dashboard",icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.vQY,{}),subItems:[{order:0,path:"analytics",label:"Analytics"},{order:1,path:"apps",label:"Apps"},{order:2,path:"learn",label:"Learn"}]},{order:2,path:"projects",label:"Projects",icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.s_k,{})},{order:3,path:"tasks",label:"Tasks",icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.NLe,{})},{order:4,path:"reporting",label:"Reporting",icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.QsL,{})},{order:5,path:"rentals",label:"Rentals",icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.HzC,{}),subItems:[{order:0,path:"all",label:"All rentals"},{order:1,path:"popular",label:"Popular"},{order:2,path:"recent",label:"Recently added"}]}],navItemsBottom=[{order:0,path:"settings",label:"Settings",icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.VSk,{})},{order:1,label:"Close Navbar",icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.kRp,{}),toggleSidebar:!0}]}}]);