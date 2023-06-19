import{_ as v,r as p,o as i,c as l,a as u,F as b,G as y,B as P,D as C,b as d,x as $,f as m,y as w,t as f,w as I,d as x,A as T}from"./js/_plugin-vue_export-helper.a81c6319.js";import{l as E}from"./js/index.251e7289.js";import{l as k}from"./js/index.fae5bbc8.js";import{l as A}from"./js/index.0b123ab1.js";import{m as S,a as c}from"./js/vuex.esm-bundler.55d3d5b3.js";import{a as L,s as h}from"./js/index.4dbecc01.js";import{C as B}from"./js/Card.0a3b54f8.js";import{C as N}from"./js/SocialProfiles.801bf35d.js";import{S as D}from"./js/LogoGear.e7086274.js";import{e as F}from"./js/elemLoaded.9a6eb745.js";import"./js/client.e7a26247.js";import"./js/_commonjsHelpers.f84db168.js";import"./js/default-i18n.0e8bc810.js";import"./js/helpers.51e5fd9c.js";import"./js/constants.e56e1512.js";import"./js/Caret.19bf2275.js";import"./js/Tooltip.c4cc47a2.js";import"./js/Slide.4392623f.js";import"./js/Checkbox.ec732dfe.js";import"./js/Checkmark.36fbf255.js";import"./js/Textarea.35929fe6.js";import"./js/SettingsRow.bc3a4ca9.js";import"./js/Row.d42459be.js";import"./js/Twitter.2936ae89.js";const V={components:{CoreCard:B,CoreSocialProfiles:N,SvgLogoGear:D},data(){return{activeTabIndex:0,strings:{socialProfiles:this.$t.__("Social Profiles",this.$td),description:this.$t.__("To let search engines know which profiles are associated with this user, enter them below:",this.$td)}}},methods:{setActiveTab(e){const s=this.activeTabIndex;switch(this.activeTabIndex=e,this.activeTabObject.slug){case"personal-options":document.getElementById("your-profile").childNodes.forEach(t=>{t.style&&(t.style.display="block")});break;case"social-profiles":document.getElementById("your-profile").childNodes.forEach(t=>{t.id==="aioseo-user-profile-tab"||t.className==="submit"||!t.style||(t.style.display="none")});break;case"customer-data":this.activeTabIndex=s,window.location.href=this.$aioseo.urls.home+"/wp-admin/admin.php?page=followup-emails-reports&tab=reportuser_view&email="+encodeURIComponent(this.userProfile.userData.user_email)+"&user_id="+this.userProfile.userData.ID;break}},updateHiddenInputField(e){document.getElementById("aioseo-user-social-profiles").value=JSON.stringify(e)}},computed:{...S(["userProfile","options"]),tabs(){const e=[{label:this.$t.__("Personal Options",this.$td),slug:"personal-options"},{label:this.$t.__("Social Profiles",this.$td),slug:"social-profiles",svg:"svg-logo-gear"}];return this.userProfile.isWooCommerceFollowupEmailsActive&&e.push({label:this.$t.__("Customer Data",this.$td),slug:"customer-data"}),e},activeTabObject(){return this.tabs[this.activeTabIndex]}},created(){this.$store.state.loaded||L(this.$.appContext.app,{}),this.$store.state.userProfile=c({...this.$store.state.userProfile},{...this.$aioseo.userProfile}),this.$store.state.options=c({...this.$store.state.options},{...this.$aioseo.options}),this.$store.state.settings=c({...this.$store.state.settings},{...this.$aioseo.settings}),this.updateHiddenInputField(this.userProfile.profiles)},mounted(){const e=new URLSearchParams(window.location.search);e&&e.get("social-profiles")&&this.setActiveTab(1)}},O={id:"aioseo-user-profile-tab"},R={class:"navigation-bar"},U=["onClick"],G={class:"aioseo-settings-row aioseo-section-description"};function H(e,s,t,J,a,r){const _=p("CoreSocialProfiles"),g=p("CoreCard");return i(),l("div",O,[u("div",R,[(i(!0),l(b,null,y(r.tabs,(o,n)=>(i(),l("a",{key:n,class:P({active:n===a.activeTabIndex}),href:"#",onClick:C(M=>r.setActiveTab(n),["prevent"])},[o.svg?(i(),d($(o.svg),{key:0})):m("",!0),w(" "+f(o.label),1)],10,U))),128))]),r.activeTabObject.slug==="social-profiles"?(i(),d(g,{key:0,slug:"userProfiles","header-text":a.strings.socialProfiles,"no-slide":"",toggles:!1},{default:I(()=>[u("div",G,f(a.strings.description),1),x(_,{userProfiles:e.userProfile.profiles,onUpdated:s[0]||(s[0]=o=>r.updateHiddenInputField(o))},null,8,["userProfiles"])]),_:1},8,["header-text"])):m("",!0)])}const j=v(V,[["render",H]]),q=()=>{const e=document.getElementById("your-profile");if(!e)return;const s=document.createElement("div");s.id="aioseo-user-profile-tab";const t=document.createElement("input");t.id="aioseo-user-social-profiles",t.name="aioseo-user-social-profiles",t.type="hidden",e.prepend(t),e.prepend(s)},z=()=>{let e=T(j);e=E(e),e=k(e),e=A(e),e.use(h),h._vm=e,e.mount("#aioseo-user-profile-tab")};F("#your-profile","profilePageLoaded");document.addEventListener("animationstart",function(e){e.animationName==="profilePageLoaded"&&(q(),z())});
