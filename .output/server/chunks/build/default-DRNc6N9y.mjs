import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, mergeProps, ref, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'lru-cache';
import 'fs';
import 'path';
import 'node:crypto';
import 'node:fs';
import 'node:url';
import 'xss';
import 'ipx';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$5 = {
  name: "MingcuteSunFogLine"
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "32px",
    height: "32px",
    viewBox: "0 0 24 24"
  }, _attrs))}><g fill="none"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M12 6a6 6 0 0 1 5.88 7.2a1 1 0 0 1-1.96-.399a4 4 0 1 0-7.84 0a1 1 0 1 1-1.96.398A6 6 0 0 1 12 6m9 5a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM4 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm15.071-6.07a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0m-12.728 0l.707.707A1 1 0 0 1 5.636 7.05l-.707-.707A1 1 0 1 1 6.343 4.93M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M4 15a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2zm3 4a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z"></path></g></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Sun.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {
  name: "MaterialSymbolsDarkMode"
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "32px",
    height: "32px",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="currentColor" d="M12 21q-3.75 0-6.375-2.625T3 12t2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Moon.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {
  __name: "DarkMode",
  __ssrInlineRender: true,
  setup(__props) {
    const dark = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsSun = __nuxt_component_0$2;
      const _component_IconsMoon = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "fixed top-2 right-2"
      }, _attrs))}><div class="cursor-pointer">`);
      if (unref(dark)) {
        _push(ssrRenderComponent(_component_IconsSun, null, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_IconsMoon, null, null, _parent));
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DarkMode.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$3;
const _sfc_main$2 = {
  name: "PhYoutubeLogoFill"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "20px",
    height: "20px",
    viewBox: "0 0 256 256"
  }, _attrs))}><path fill="white" d="M234.33 69.52a24 24 0 0 0-14.49-16.4C185.56 39.88 131 40 128 40s-57.56-.12-91.84 13.12a24 24 0 0 0-14.49 16.4C19.08 79.5 16 97.74 16 128s3.08 48.5 5.67 58.48a24 24 0 0 0 14.49 16.41C69 215.56 120.4 216 127.34 216h1.32c6.94 0 58.37-.44 91.18-13.11a24 24 0 0 0 14.49-16.41c2.59-10 5.67-28.22 5.67-58.48s-3.08-48.5-5.67-58.48m-73.74 65l-40 28A8 8 0 0 1 108 156v-56a8 8 0 0 1 12.59-6.55l40 28a8 8 0 0 1 0 13.1Z"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Youtube.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + publicAssetsURL("short.jpg");
const _imports_1 = "" + publicAssetsURL("next.jpg");
const _imports_2 = "" + publicAssetsURL("supabase.jpg");
const _imports_3 = "" + publicAssetsURL("nest.jpg");
const _sfc_main$1 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsYoutube = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "container grid gap-4 mx-auto max-w-[900px] mx-auto"
      }, _attrs))} data-v-fbb0381b><div class="text-[24px]" data-v-fbb0381b><div class="flex items-center gap-2" data-v-fbb0381b>Hey, I&#39;m Guillaume! <div class="overflow-hidden rounded-full max-w-12 max-h-12" data-v-fbb0381b><img${ssrRenderAttr("src", _imports_0)} alt="Guillaume Duhan" data-v-fbb0381b></div></div><div data-v-fbb0381b> CTO of Allocations.com, previously Google, Youtuber &amp; 15 years freelancer. Currently living in Dubai \u{1F1E6}\u{1F1EA}. </div></div><div class="flex gap-2" data-v-fbb0381b><button class="youtube" data-v-fbb0381b>`);
      _push(ssrRenderComponent(_component_IconsYoutube, null, null, _parent));
      _push(`<span data-v-fbb0381b>Youtube channel</span></button></div><div class="grid items-center gap-4 px-4 py-3 border rounded cursor-pointer dark:border-slate-800" data-v-fbb0381b><div class="grid gap-4 lg:grid-cols-3" data-v-fbb0381b><img class="rounded shadow"${ssrRenderAttr("src", _imports_1)} alt="next" data-v-fbb0381b><img class="rounded shadow"${ssrRenderAttr("src", _imports_2)} alt="next" data-v-fbb0381b><img class="rounded shadow"${ssrRenderAttr("src", _imports_3)} alt="next" data-v-fbb0381b></div><div class="grid gap-1 text-center" data-v-fbb0381b><h2 class="font-[600] text-xl" data-v-fbb0381b>thedevelopercourse.com</h2><p data-v-fbb0381b>A Masterclass for Full-Stack Devs I wish I had ten years ago.</p><div data-v-fbb0381b><button class="font-[600] bg-emerald-500" data-v-fbb0381b>Get access for $12</button></div></div></div></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fbb0381b"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_DarkMode = __nuxt_component_0$1;
  const _component_Header = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "grid gap-16 mx-auto"
  }, _attrs))}><div class="flex items-center justify-between p-2">`);
  _push(ssrRenderComponent(_component_DarkMode, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-DRNc6N9y.mjs.map
