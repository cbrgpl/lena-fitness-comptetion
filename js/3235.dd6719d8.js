"use strict";(self["webpackChunktemplate_project"]=self["webpackChunktemplate_project"]||[]).push([[3235],{9550:function(t,e,a){a.d(e,{Z:function(){return m}});var o=a(821);const n={class:"flex flex-col"},r=(0,o.Uk)(" Back ");function s(t,e,a,s,u,c){const l=(0,o.up)("zIconBase");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o._)("div",{class:"flex items-center w-full py-3 bg-black-primary text-xl select-none",onClick:e[0]||(e[0]=(...t)=>c.routerPushBack&&c.routerPushBack(...t))},[(0,o.Wm)(l,{class:"w-6 mr-2",icon:"backArrow"}),r]),(0,o._)("div",{class:(0,o.C_)([t.contentWrapperClasses,"flex flex-col"])},[(0,o.WI)(t.$slots,"default")],2)])}var u={props:{preventContentExtend:{type:Boolean,default:!1}},computed:{contentWrapperClasses(){return{"flex-grow overflow-y-auto":this.preventContentExtend}}}},c={name:"UserLayout",mixins:[u],methods:{routerPushBack(){this.$router.push({name:"ShopTmp"})}}},l=a(3744);const i=(0,l.Z)(c,[["render",s]]);var m=i},3235:function(t,e,a){a.r(e),a.d(e,{default:function(){return N}});var o=a(821);const n={class:"container mx-auto user_padding"},r={class:"flex-grow"};function s(t,e,a,s,u,c){const l=(0,o.up)("UserNavigation"),i=(0,o.up)("router-view"),m=(0,o.up)("BackLayout");return(0,o.wg)(),(0,o.j4)(m,{"prevent-content-extend":""},{default:(0,o.w5)((()=>[(0,o._)("div",n,[(0,o.Wm)(l,{class:"mb-5 md:mb-9 w-3/4 mx-auto md:mx-0"}),(0,o._)("div",r,[(0,o.Wm)(i)])])])),_:1})}var u=a(3081),c=a(9550);const l={class:"flex text-xl md:text-2xl"};function i(t,e,a,n,r,s){const u=(0,o.up)("zTabRouteNavigation");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o.Wm)(u,{class:"w-full md:w-auto",tabs:r.userNavigation},null,8,["tabs"])])}function m(t,e,a,n,r,s){const u=(0,o.up)("router-link"),c=(0,o.up)("zTabNav");return(0,o.wg)(),(0,o.j4)(c,{modelValue:r.modelValue,"onUpdate:modelValue":e[0]||(e[0]=t=>r.modelValue=t),tabs:a.tabs},{default:(0,o.w5)((({tab:e})=>[(0,o.WI)(t.$slots,"default",{tab:e},(()=>[(0,o.Wm)(u,{to:{name:e.toRouteName}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,o.zw)(e.name),1)])),_:2},1032,["to"])]))])),_:3},8,["modelValue","tabs"])}var d=a(6480),p={name:"ZTabRouteNavigation",components:{zTabNav:d.Z},props:{tabs:{type:Array,required:!0}},data(){return{modelValue:this.initialValue}},computed:{matchedRoutes(){return this.$route.matched},currentTab(){for(const t of this.tabs)if(this.tabRouteIsMatched(t))return t;return null}},created(){this.modelValue=this.currentTab},methods:{tabRouteIsMatched(t){const e=e=>e.name===t.toRouteName;return this.matchedRoutes.some(e)}}},f=a(3744);const v=(0,f.Z)(p,[["render",m]]);var b=v,h={name:"UserNavigation",components:{zTabRouteNavigation:b},data(){return{userNavigation:[]}}};const x=(0,f.Z)(h,[["render",i]]);var w=x,g={name:"UserRootLayout",components:{BackLayout:c.Z,UserNavigation:w},mixins:[u.EU]};const k=(0,f.Z)(g,[["render",s]]);var N=k}}]);