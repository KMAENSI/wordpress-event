import{m as i,a as t}from"./vuex.esm-bundler.55d3d5b3.js";import{g as p}from"./index.4dbecc01.js";const l={computed:{...i(["currentPost","options","dynamicOptions","settings"])},async created(){const{options:s,settings:n,dynamicOptions:o,currentPost:e,internalOptions:a,tags:r}=await p(this.$.appContext.app);this.$store.state.options=t({...this.$store.state.options},{...s}),this.$store.state.settings=t({...this.$store.state.settings},{...n}),this.$store.state.dynamicOptions=t({...this.$store.state.dynamicOptions},{...o}),this.$store.state.currentPost=t({...this.$store.state.currentPost},{...e}),this.$store.state.internalOptions=t({...this.$store.state.internalOptions},{...a}),this.$store.state.tags=t({...this.$store.state.tags},{...r})}};export{l as S};
