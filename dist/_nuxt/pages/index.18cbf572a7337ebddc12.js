webpackJsonp([1],{"/TYz":function(t,e,n){"use strict";function a(t){n("VewY")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("1kVg"),s=n("rYSt"),o=n("VU/8"),r=a,c=o(i.a,s.a,!1,r,"data-v-adf81924",null);e.default=c.exports},"1kVg":function(t,e,n){"use strict";var a=n("56lY");e.a={components:{LoginForm:a.a}}},"51aa":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".fake[data-v-adf81924]{background:blue}.wrapper[data-v-adf81924]{margin-top:-7.5em}.flexWrapper[data-v-adf81924]{-ms-flex-pack:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap}.container[data-v-adf81924],.flexWrapper[data-v-adf81924]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;justify-content:center}.container[data-v-adf81924]{height:calc(100vh - 100px);-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;-ms-flex-pack:center}.title[data-v-adf81924]{font-size:2.5em!important}@media (min-width:750px){.title[data-v-adf81924]{font-size:3.5em!important}}",""])},"56lY":function(t,e,n){"use strict";function a(t){n("JEw7")}var i=n("EfXp"),s=n("YhXa"),o=n("VU/8"),r=a,c=o(i.a,s.a,!1,r,null,null);e.a=c.exports},DPb5:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"",""])},EfXp:function(t,e,n){"use strict";e.a={data:function(){return{formEmail:"",formPassword:""}},methods:{emailLogin:function(){var t=this;this.$store.dispatch("signInWithEmail",{email:this.formEmail,password:this.formPassword}).then(function(){t.formEmail="",t.formPassword=""}).catch(function(t){console.log(t.message)})},googleSignUp:function(){this.$store.dispatch("signInWithGoogle").then(function(){console.log("inside then statement on login")}).catch(function(t){console.log(t.message)})},facebookSignUp:function(){this.$store.dispatch("signInWithFacebook").then(function(){console.log("inside then statement on login")}).catch(function(t){console.log(t.message)})}}}},JEw7:function(t,e,n){var a=n("DPb5");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("c51c03d8",a,!0,{sourceMap:!1})},VewY:function(t,e,n){var a=n("51aa");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("1b25ae22",a,!0,{sourceMap:!1})},YhXa:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-flex",{attrs:{"text-xs-center":"",xs12:"",sm6:"","offset-sm3":""}},[n("h2",{staticClass:"title"},[t._v("Sign In with Google")]),n("v-btn",{staticClass:"signIn mb-2",attrs:{primary:""},nativeOn:{click:function(e){t.googleSignUp(e)}}},[t._v("Google Sign In")])],1),n("v-flex",{attrs:{"text-xs-center":"",xs12:"",sm6:"","offset-sm3":""}},[n("h2",{staticClass:"title"},[t._v("Sign In with Facebook")]),n("v-btn",{staticClass:"signIn mb-2",attrs:{primary:""},nativeOn:{click:function(e){t.facebookSignUp(e)}}},[t._v("Facebook Sign In")])],1)],1)},i=[],s={render:a,staticRenderFns:i};e.a=s},rYSt:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{"text-xs-center":""}},[n("v-flex",{attrs:{xs12:"",md8:"","offset-md2":""}},[n("div",{staticClass:"wrapper"},[t.$store.state.user?n("div",{staticClass:"flexWrapper"},[n("h4",{staticClass:"blue--text"},[t._v("You're logged in!")]),n("v-btn",{staticClass:"blue white--text",attrs:{icon:""}},[n("v-icon",[t._v("thumb_up")])],1)],1):n("div",[n("login-form")],1)])])],1)],1)},i=[],s={render:a,staticRenderFns:i};e.a=s}});
//# sourceMappingURL=index.18cbf572a7337ebddc12.js.map