exports.ids = [1];
exports.modules = {

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("1b7833da", content, true, context)
};

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(74);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("fdea7a26", content, true, context)
};

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(76);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("b2867e4e", content, true, context)
};

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form.vue?vue&type=template&id=19149896&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"position-relative",attrs:{"autocomplete":"on"}},[_vm._ssrNode("<label for=\"name\" class=\"col-md-2\">Prénom et nom</label> <input name=\"name\" type=\"text\" placeholder=\"Prénom Nom\" required=\"required\""+(_vm._ssrAttr("value",(_vm.form.name)))+" class=\"col-md-4\"> <br> <label for=\"birth\" class=\"col-md-2\">Date de naissance</label> <input name=\"birth\" type=\"date\" min=\"1943-01-01\" max=\"2007-12-31\""+(_vm._ssrAttr("value",(_vm.form.birth)))+" class=\"col-md-4\"> <br> <label for=\"trade\" class=\"col-md-2\">Profession</label> <input name=\"trade\" type=\"text\" placeholder=\"profession ou études\""+(_vm._ssrAttr("value",(_vm.form.trade)))+" class=\"col-md-4\"> <br> <label for=\"email\" class=\"col-md-2\">E-mail</label> <input name=\"email\" type=\"email\" placeholder=\"adresse e-mail\" required=\"required\""+(_vm._ssrAttr("value",(_vm.form.email)))+" class=\"col-md-4\"> <br> <label for=\"phone\" class=\"col-md-2\">No de Téléphone</label> <input name=\"phone\" type=\"tel\" placeholder=\"fixe ou mobile\""+(_vm._ssrAttr("value",(_vm.form.phone)))+" class=\"col-md-4\"> <br> <input id=\"funding\" type=\"checkbox\""+(_vm._ssrAttr("checked",Array.isArray(_vm.form.funding)?_vm._i(_vm.form.funding,null)>-1:(_vm.form.funding)))+"> <label for=\"funding\">\n    Je souhaite participer à la campagne participative et/ou\n    l'implantation\n    du projet à Neuchâtel.\n  </label> <br> <textarea type=\"text\" placeholder=\"C'est ici que vous pouvez communiquer vos attentes.\" class=\"w-75 p-4 text-nowrap\"></textarea> <br> <br> <input id=\"submit\" type=\"button\" value=\"Envoyer\" class=\"btn btn-primary\"> <br>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/form.vue?vue&type=template&id=19149896&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* eslint-disable no-console */
/* harmony default export */ var formvue_type_script_lang_js_ = ({
  data() {
    return {
      socket: null,
      form: {
        name: '',
        birth: '',
        trade: '',
        email: '',
        phone: '',
        funding: false,
        message: ''
      }
    };
  },

  beforeMount() {
    this.socket = new WebSocket('ws://localhost:3000');

    this.socket.onopen = () => {
      if (this.socket.readyState === WebSocket.CONNECTING) {
        console.log('CONNECTING TCP client to websocket server');

        if (this.socket.readyState === WebSocket.OPEN) {
          console.log('TCP connection to websocket server is OPEN');
        }
      }
    };

    this.socket.onerror = event => {};

    this.socket.onclose = event => {
      if (this.socket.readyState === WebSocket.CLOSING) {
        console.log('Server is CLOSING TCP connection');

        if (this.socket.readyState === WebSocket.CLOSED) {
          console.log('TCP connection to websocket server is CLOSED');

          if (typeof event.reason !== 'undefined') {
            alert(event.reason);
          } else {
            alert('You have been disconnected. Please restart the page\n\nVous avez été déconnecté. Veuillez SVP recharger la page');
          }
        }
      }
    };
  },

  mounted() {
    this.socket.addEventListener('message', event => {
      if (event.type !== 'string') {
        let data;

        try {
          data = JSON.parse(event.data);
        } catch (e) {
          data = event.data;
        } finally {
          if (data === 'user data has been serialized') {
            delete this.form;
          }
        }
      } else {
        console.log('Binary type message incoming is not managed...');
      }
    });
  },

  methods: {
    submit() {
      this.form.data.handler = 'newsletter';

      if (this.socket.readyState === WebSocket.socket.OPEN) {
        while (this.socket.bufferedAmount !== 0) {
          ;
        }

        this.socket.send(JSON.stringify(this.form.data));
      }

      console.log('Sent form data to websocket server');
    }

  }
});
// CONCATENATED MODULE: ./components/form.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_formvue_type_script_lang_js_ = (formvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/form.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_formvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4d1ad5af"
  
)

/* harmony default export */ var components_form = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Form: __webpack_require__(70).default})


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container{background:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_style_index_0_id_01286951_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_style_index_0_id_01286951_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_style_index_0_id_01286951_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_style_index_0_id_01286951_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_style_index_0_id_01286951_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_style_index_0_id_01286951_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "h1[data-v-01286951],h2[data-v-01286951]{padding:.5em}li[data-v-01286951]{display:block}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_media_bar_vue_vue_type_style_index_0_id_0a22527e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_media_bar_vue_vue_type_style_index_0_id_0a22527e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_media_bar_vue_vue_type_style_index_0_id_0a22527e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_media_bar_vue_vue_type_style_index_0_id_0a22527e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_media_bar_vue_vue_type_style_index_0_id_0a22527e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_media_bar_vue_vue_type_style_index_0_id_0a22527e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div[data-v-0a22527e]{position:fixed;top:50%;transform:translateY(-50%)}div a[data-v-0a22527e]{display:block;text-align:center;padding:16px;transition:all .3s ease;font-size:20px}.irc[data-v-0a22527e]{color:var(--green);font-style:normal}.irc[data-v-0a22527e]:hover{text-decoration:none}.meetup[data-v-0a22527e]{color:var(--red)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/content.vue?vue&type=template&id=01286951&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.content)?_c('section',{staticClass:"container position-relative text-white"},[_vm._ssrNode("<h1 data-v-01286951>"+_vm._ssrEscape(_vm._s(_vm.content.motto))+"</h1> <h2 data-v-01286951>"+_vm._ssrEscape(_vm._s(_vm.content.prop))+"</h2> "+((_vm.content.QA)?("<ul class=\"container list-group list-group-item\" data-v-01286951>"+(_vm._ssrList((_vm.content.QA),function(ref){
var question = ref.question;
var answer = ref.answer;
return ("<li class=\"col-sm\" data-v-01286951><p data-v-01286951>"+_vm._ssrEscape(_vm._s(question))+"</p> <p data-v-01286951>"+_vm._ssrEscape(_vm._s(answer))+"</p></li>")}))+"</ul>"):"<!---->"))]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/content.vue?vue&type=template&id=01286951&scoped=true&

// CONCATENATED MODULE: ./assets/i18n.js


class i18n {
  /**
   * pass option to retrieve the content in the chose language
   * @param {String} lang
   */
  static translate(lang) {
    let content;

    if (lang === 'fr') {
      content = {
        motto: 'Deviens membre du hackerspace LeLab !',
        prop: 'Le hackerspace LeLab est une initiative citoyenne neuchâteloise qui vise à unir des innovateurs, des inventeurs et des startups afin de développer et concevoir ensemble des projets innovants.',
        QA: [{
          question: "Qu'est-ce qu'un hackerspace ?",
          answer: "Un hackerspace est constitué d'un open space, d'une communauté active et de machines de prototypages. L'idée est de proposer le développement de projets ensemble et de mettre à disposition une infrastructure de prototypage pour tous les membres. Nous souhaitons permettre aux gens de passer d'une idée à un concept, et du concept à la réalisation."
        }, {
          question: "J'ai une super idée, mais je ne connais pas grand chose.",
          answer: "Bonne nouvelle. Pas besoin de sortir d'un cursus ingénieur pour nous rejoindre. Nous serons très heureux de faire ta connaissance et de te montrer comment parvenir à ton objectif."
        }, {
          question: 'Il existe déjà un fablab et repair café en ville.',
          answer: "Les hackerspaces sont des structures indépendantes des autorités au contraire des fablabs et ces derniers sont destinés à des projets d'envergure créatrice. Notre objectif est de développer des systèmes. Nous ne réparons pas d'électroménager, mais nos projets prennent en compte le respect des normes environnementales."
        }, {
          question: 'Notre startup est basée à Microcity. Pouvons-nous profiter de vos services ?',
          answer: 'Oui, veuillez remplir le formulaire.'
        }, {
          question: 'Notre startup recherche des locaux dans lesquels nous pourrions développer notre produit.',
          answer: "Les locaux permettront de travailler uniquement en commun. Veuillez nous contacter pour plus d'informations."
        }]
      };
    } else if (lang === 'en') {
      content = {
        motto: 'Become a member of the LeLab hackerspace!',
        prop: 'The hackerspace LeLab is a citizen initiative from Neuchâtel that aims to unite innovators, inventors and startups in order to develop and design innovative projects together.',
        QA: [{
          question: 'What is a hackerspace?',
          answer: 'A hackerspace consists of an open space, an active community and prototyping machines. The idea is to propose the development of projects together and to provide a prototyping infrastructure for all members. We want to enable people to move from an idea to a concept, and from concept to realization.'
        }, {
          question: "[I have a great idea, but I don't know much about it.",
          answer: "That's good news. You don't have to be an engineer to join us. We would be very happy to get to know you and show you how to achieve your goal."
        }, {
          question: "There's already a fablab and repair café in town.",
          answer: 'Hackerspaces are structures independent of the authorities, unlike fablabs, and the latter are intended for large creative projects. Our goal is to develop systems. We do not repair appliances, but our projects take into account the respect of environmental standards.'
        }, {
          question: 'Our startup is based in Microcity. Can we benefit from your services?',
          answer: 'Yes, please fill out the form.'
        }, {
          question: 'Our startup is looking for premises where we could develop our product.',
          answer: 'The premises will allow us to work only together. Please contact us for more information.'
        }]
      };
    }

    return content;
  }

}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/content.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var contentvue_type_script_lang_js_ = ({
  props: {
    lang: {
      type: String,
      default: 'EN'
    }
  },

  data() {
    return {
      content: i18n.translate('en')
    };
  },

  watch: {
    lang: {
      immediate: true,

      handler() {
        var _this$lang;

        this.content = i18n.translate((_this$lang = this.lang) === null || _this$lang === void 0 ? void 0 : _this$lang.toLowerCase());
      }

    }
  }
});
// CONCATENATED MODULE: ./components/content.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_contentvue_type_script_lang_js_ = (contentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/content.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(73)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_contentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "01286951",
  "4648b544"
  
)

/* harmony default export */ var content = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/media-bar.vue?vue&type=template&id=0a22527e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<a href=\"#\" class=\"twitter bg-primary text-light\" data-v-0a22527e>","</a>",[_c('font-awesome-icon',{attrs:{"icon":['fab','twitter'],"size":"2x"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<a href=\"#\" class=\"telegram bg-info text-light\" data-v-0a22527e>","</a>",[_c('font-awesome-icon',{attrs:{"icon":['fab','telegram'],"size":"2x"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<a href=\"#\" class=\"irc bg-dark\" data-v-0a22527e>","</a>",[_c('font-awesome-icon',{attrs:{"icon":['fas','hashtag'],"size":"xs"}}),_vm._ssrNode(" <span data-v-0a22527e>IRC</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<a href=\"#\" class=\"meetup bg-light\" data-v-0a22527e>","</a>",[_c('font-awesome-icon',{attrs:{"icon":['fab','meetup'],"size":"2x"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/media-bar.vue?vue&type=template&id=0a22527e&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/media-bar.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(75)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0a22527e",
  "94418062"
  
)

/* harmony default export */ var media_bar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=1594eacc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Content',{attrs:{"lang":_vm.lang}}),_vm._ssrNode(" "),_vm._ssrNode("<span class=\"container text-center w-50 text-white\">","</span>",[_vm._ssrNode("<h2>Bulletin d'informations</h2> "),_c('Form')],2),_vm._ssrNode(" "),_c('MediaBar')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=1594eacc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  props: {
    lang: {
      type: String,
      default: 'EN'
    }
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(71)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "02baa11f"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Content: __webpack_require__(77).default,Form: __webpack_require__(70).default,MediaBar: __webpack_require__(78).default})


/***/ })

};;
//# sourceMappingURL=index.js.map