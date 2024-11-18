import { mergeProps, useSSRContext, ref, unref, onUnmounted, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderDynamicModel, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { u as useHead } from './index-BabADJUJ.mjs';
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
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$e = {
  name: "PhArrowBendLeftUpBold"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 256 256"
  }, _attrs))}><path fill="currentColor" d="M212 224a12 12 0 0 1-12 12A108.12 108.12 0 0 1 92 128V61L64.49 88.49a12 12 0 0 1-17-17l48-48a12 12 0 0 1 17 0l48 48a12 12 0 0 1-17 17L116 61v67a84.09 84.09 0 0 0 84 84a12 12 0 0 1 12 12"></path></svg>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/ArrowUp.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$d = {
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    const showPassword = ref(false);
    const setForgot = ref(false);
    const user = ref({
      email: "",
      password: ""
    });
    const error = ref("Please enter a password of at least 9 letters including 1 digit and 1 special character.");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "grid gap-4 border dark:border-neutral-600 rounded-xl mx-auto max-w-[500px] w-full px-8 py-6 shadow"
      }, _attrs))} data-v-adbeeb87>`);
      if (!unref(setForgot)) {
        _push(`<div data-v-adbeeb87><h1 class="mb-6 text-3xl font-bold text-center" data-v-adbeeb87>Login or Signup</h1><div class="grid w-full gap-2 pb-8 mb-6 border-b dark:border-neutral-600" data-v-adbeeb87><button class="social" data-v-adbeeb87><div data-v-adbeeb87><svg xmlns="http://www.w3.org/2000/svg" width="0.98em" height="1em" viewBox="0 0 256 262" data-v-adbeeb87><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" data-v-adbeeb87></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" data-v-adbeeb87></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z" data-v-adbeeb87></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" data-v-adbeeb87></path></svg><span data-v-adbeeb87>Connect with Google</span></div></button></div><div class="grid gap-6" data-v-adbeeb87><div class="grid w-full gap-4" data-v-adbeeb87><div class="grid gap-1" data-v-adbeeb87><label for="email" data-v-adbeeb87> Email </label><input type="text" id="email"${ssrRenderAttr("value", unref(user).email)} placeholder="Enter email" data-v-adbeeb87></div><div class="grid gap-1" data-v-adbeeb87><label for="password" data-v-adbeeb87> Password </label><input${ssrRenderAttr("type", unref(showPassword) ? "text" : "password")} id="password"${ssrRenderDynamicModel(unref(showPassword) ? "text" : "password", unref(user).password, null)} placeholder="Password" data-v-adbeeb87><p class="text-xs cursor-pointer" data-v-adbeeb87>${ssrInterpolate(unref(showPassword) ? "Hide password" : "Show password")}</p></div></div>`);
        if (unref(error)) {
          _push(`<div class="alert" data-v-adbeeb87>${ssrInterpolate(unref(error))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button class="black" data-v-adbeeb87><div data-v-adbeeb87>Connect</div></button><div class="flex flex-col items-center w-full" data-v-adbeeb87><div class="text-sm text-center text-neutral-500" data-v-adbeeb87> If you do not have an account, one will be automatically created and you will receive a confirmation email. </div><br data-v-adbeeb87></div></div></div>`);
      } else {
        _push(`<div data-v-adbeeb87><h1 class="mb-6 text-3xl font-bold text-center" data-v-adbeeb87>Forgot your password?</h1><div class="grid w-full gap-2 pb-8 dark:border-neutral-600" data-v-adbeeb87><p class="text-sm" data-v-adbeeb87>Enter your email below to receive password reset instructions.</p><div class="grid gap-4" data-v-adbeeb87><div class="grid gap-1" data-v-adbeeb87><label for="email" data-v-adbeeb87> Email </label><input type="text" id="email"${ssrRenderAttr("value", unref(user).email)} placeholder="Enter email" data-v-adbeeb87></div>`);
        if (unref(error)) {
          _push(`<div class="alert" data-v-adbeeb87>${ssrInterpolate(unref(error))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button class="black" data-v-adbeeb87><div data-v-adbeeb87>Send password recovery</div></button></div></div></div>`);
      }
      _push(`<footer class="text-center" data-v-adbeeb87><div class="text-sm text-blue-500 cursor-pointer hover:text-blue-700" data-v-adbeeb87>${ssrInterpolate(unref(setForgot) ? "Login or Signup" : "I forgot my password")}</div></footer></div>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Login.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-adbeeb87"]]);
const _sfc_main$c = {
  __name: "Slider",
  __ssrInlineRender: true,
  props: ["rounded"],
  setup(__props) {
    const images = ref(["./bmw1.jpeg", "./bmw2.jpeg", "./bmw3.jpeg"]);
    const currentIndex = ref(0);
    const props = __props;
    const {
      rounded
    } = props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: `w-full h-64 relative overflow-hidden flex items-center justify-center space-x-4 bg-cover bg-center ${unref(rounded) ? "rounded-xl" : ""}`,
        style: `background-image: url(${images.value[currentIndex.value]});`
      }, _attrs))}><div class="p-4 flex items-center justify-center absolute top-0 left-0 h-full w-20 z-50 group cursor-pointer"><div class="h-8 w-8 rounded-full bg-white/50 text-white flex items-center justify-center p-2 group-hover:bg-white/75 group-hover:text-black transition group-hover:scale-105 opacity-0 group-hover:opacity-100"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m13.15 16.15l-3.625-3.625q-.125-.125-.175-.25T9.3 12t.05-.275t.175-.25L13.15 7.85q.075-.075.163-.112T13.5 7.7q.2 0 .35.138T14 8.2v7.6q0 .225-.15.363t-.35.137q-.05 0-.35-.15"></path></svg></div></div><div class="p-4 flex items-center justify-center absolute top-0 right-0 h-full w-20 z-50 group cursor-pointer"><div class="h-8 w-8 rounded-full bg-white/50 text-white flex items-center justify-center p-2 group-hover:bg-white/75 group-hover:text-black transition group-hover:scale-105 opacity-0 group-hover:opacity-100"><svg class="rotate-180" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m13.15 16.15l-3.625-3.625q-.125-.125-.175-.25T9.3 12t.05-.275t.175-.25L13.15 7.85q.075-.075.163-.112T13.5 7.7q.2 0 .35.138T14 8.2v7.6q0 .225-.15.363t-.35.137q-.05 0-.35-.15"></path></svg></div></div><div class="absolute bottom-4 flex items-center gap-2 mx-auto"><!--[-->`);
      ssrRenderList(images.value, (item, index) => {
        _push(`<div class="${ssrRenderClass(`${currentIndex.value === index ? "bg-white" : "bg-white/50"} h-2 w-2 rounded-full cursor-pointer`)}"></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Slider.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$c;
const _sfc_main$b = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Slider = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "grid relative border dark:border-neutral-600 rounded-xl mx-auto max-w-[500px] w-full shadow overflow-hidden"
  }, _attrs))}><div class="absolute z-50 flex top-3 right-3"><div class="px-2 py-1 text-xs font-bold text-white bg-blue-500 rounded-full">Very good deal</div></div>`);
  _push(ssrRenderComponent(_component_Slider, null, null, _parent));
  _push(`<div class="grid gap-1 p-4"><header class="flex items-center justify-between"><h2>BMW 5 Series 530e</h2><h2 class="font-bold">AED 165,000</h2></header><div class="flex items-center justify-between text-sm text-neutral-500"><p>2022 BMW 530e \u2014 300 HP \u2014 11.323km</p><p>Dubai, UAE</p></div></div></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductCard.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$a = {
  __name: "ProfileCard",
  __ssrInlineRender: true,
  props: ["small"],
  setup(__props) {
    ref(false);
    const props = __props;
    const {
      background_url = "/logo.jpg",
      background_color = "#3b82f6",
      position = "CTO @Allocations.com & Youtuber",
      description = "CTO of Allocations.com, previously Google, Youtuber & 15 years freelancer.",
      count = 299,
      full_name = "Guillaume Duhan",
      localization = "Dubai, United Arab Emirates",
      small = false,
      username = "guillaume"
    } = props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: `grid w-full gap-12 mx-auto overflow-hidden border shadow dark:border-neutral-600 rounded-xl ${unref(small) ? "max-w-[550px]" : ""}`
      }, _attrs))} data-v-ef3a7726>`);
      if (!unref(small)) {
        _push(`<div class="relative w-full h-32" style="${ssrRenderStyle(`background-color: ${unref(background_color)}`)}" data-v-ef3a7726><div class="absolute w-20 h-20 overflow-hidden bg-blue-500 bg-cover border-2 border-white rounded-full cursor-pointer dark:border-neutral-600 -bottom-10 left-6 group" style="${ssrRenderStyle(`background-image: url(${unref(background_url) ? unref(background_url) : null})`)}" data-v-ef3a7726><div class="items-center justify-center hidden w-full h-full text-white bg-white/30 group-hover:flex" data-v-ef3a7726><svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24" data-v-ef3a7726><path fill="currentColor" d="M13 19c0 .7.13 1.37.35 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v8.35c-.63-.22-1.3-.35-2-.35V5H5v14zm.96-6.71l-2.75 3.54l-1.96-2.36L6.5 17h6.85c.4-1.12 1.12-2.09 2.05-2.79zM20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z" data-v-ef3a7726></path></svg></div></div><div class="absolute flex items-center justify-center w-8 h-8 text-white rounded-full bg-white/20 top-2 right-2 hover:scale-[105%] transition hover:bg-white/30 cursor-pointer" data-v-ef3a7726><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" data-v-ef3a7726><path fill="currentColor" d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-1 2q-.425 0-.712-.288T3 20v-2.425q0-.4.15-.763t.425-.637L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.437.65T21 6.4q0 .4-.138.763t-.437.662l-12.6 12.6q-.275.275-.638.425t-.762.15zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z" data-v-ef3a7726></path></svg></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(`relative grid gap-4 ${unref(small) ? "p-4" : "px-6 pb-6"}`)}" data-v-ef3a7726>`);
      if (!unref(small)) {
        _push(`<div class="absolute flex items-center justify-center w-8 h-8 text-neutral-400 rounded-full bg-neutral-100 top-2 right-2 hover:scale-[105%] transition hover:bg-neutral-200 dark:bg-neutral-800 cursor-pointer" data-v-ef3a7726><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" data-v-ef3a7726><path fill="currentColor" d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-1 2q-.425 0-.712-.288T3 20v-2.425q0-.4.15-.763t.425-.637L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.437.65T21 6.4q0 .4-.138.763t-.437.662l-12.6 12.6q-.275.275-.638.425t-.762.15zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z" data-v-ef3a7726></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<header class="grid gap-1" data-v-ef3a7726>`);
      if (unref(small)) {
        _push(`<div class="w-12 h-12 overflow-hidden bg-blue-500 bg-cover border-2 border-white rounded-full cursor-pointer dark:border-neutral-600 -bottom-10 left-6 group" style="${ssrRenderStyle(`background-image: url(${unref(background_url) ? unref(background_url) : null})`)}" data-v-ef3a7726></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="text-xl font-[600] mb-0" style="${ssrRenderStyle({
        "line-height": "1"
      })}" data-v-ef3a7726>${ssrInterpolate(unref(full_name))}</h1>`);
      if (!unref(small)) {
        _push(`<div class="grid gap-1" data-v-ef3a7726><p class="text-base font-[500] text-neutral-600" data-v-ef3a7726>${ssrInterpolate(unref(position))}</p><p class="text-xs text-neutral-400" data-v-ef3a7726>${ssrInterpolate(unref(localization))}</p><p class="text-xs font-[600]" data-v-ef3a7726>${ssrInterpolate(unref(count))} followers</p></div>`);
      } else {
        _push(`<div class="grid gap-2 text-neutral-400" data-v-ef3a7726><p class="text-sm font-[600]" data-v-ef3a7726>@${ssrInterpolate(unref(username))}</p><p class="text-[14px] font-[500]" data-v-ef3a7726>${ssrInterpolate(unref(description))}</p></div>`);
      }
      _push(`</header><div class="${ssrRenderClass(`flex items-center gap-2 ${unref(small) ? "absolute top-4 right-4" : ""}`)}" data-v-ef3a7726><button class="${ssrRenderClass(`blue ${unref(small) ? "small" : ""}`)}" data-v-ef3a7726>Follow</button><button class="${ssrRenderClass(`outline ${unref(small) ? "small" : ""}`)}" data-v-ef3a7726>Message</button></div></div></div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProfileCard.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-ef3a7726"]]);
const _sfc_main$9 = {
  __name: "EditPost",
  __ssrInlineRender: true,
  props: ["user"],
  setup(__props) {
    const props = __props;
    const {
      background_url = "/logo.jpg",
      description = "CTO @Allocations.com & Youtuber",
      full_name = "Guillaume Duhan"
    } = props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "items-start gap-2 border dark:border-neutral-600 rounded-xl mx-auto w-full shadow overflow-hidden p-4"
      }, _attrs))} data-v-d12cb431><div class="flex items-center gap-2" data-v-d12cb431><div class="min-w-12 min-h-12 w-12 h-12 overflow-hidden bg-blue-500 bg-cover border-2 border-white dark:border-neutral-600 rounded-full cursor-pointer -bottom-10 left-6 group" style="${ssrRenderStyle(`background-image: url(${unref(background_url) ? unref(background_url) : null})`)}" data-v-d12cb431></div><div class="leading-1" style="${ssrRenderStyle(`line-height: 1.23;`)}" data-v-d12cb431><p class="font-[600]" data-v-d12cb431>${ssrInterpolate(unref(full_name))}</p><p class="text-neutral-500 text-sm" data-v-d12cb431>${ssrInterpolate(unref(description))}</p></div></div><div class="grid gap-8 w-full" data-v-d12cb431><div contenteditable class="min-h-24 overflow-x-hidden overflow-y-auto bg-transparent outline-none p-2 rounded text-base" placeholder="Share your thoughts..." data-v-d12cb431></div><div class="flex items-center justify-between gap-2" data-v-d12cb431><div class="flex gap-2 text-sm text-blue-500" data-v-d12cb431><div class="cursor-pointer hover:opacity-85" data-v-d12cb431><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-v-d12cb431><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm1-8.425l4-4l4 4l4-4l1 1V5H5v6.575zM5 19h14v-6.6l-1-1l-4 4l-4-4l-4 4l-1-1zm0 0v-6.6v2V5z" data-v-d12cb431></path></svg></div><div class="cursor-pointer hover:opacity-85" data-v-d12cb431><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-v-d12cb431><path fill="currentColor" d="M9 16h2v-3h3v-2h-3V8H9v3H6v2h3zm-5 4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h12q.825 0 1.413.588T18 6v4.5l4-4v11l-4-4V18q0 .825-.587 1.413T16 20zm0-2h12V6H4zm0 0V6z" data-v-d12cb431></path></svg></div></div><div class="flex items-center gap-2" data-v-d12cb431><button class="outline" data-v-d12cb431>Schedule</button><button class="blue" data-v-d12cb431>Post</button></div></div></div></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EditPost.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-d12cb431"]]);
const _sfc_main$8 = {
  __name: "Story",
  __ssrInlineRender: true,
  props: ["content", "background_url"],
  setup(__props) {
    const props = __props;
    const show = ref(false);
    const {
      background_url = "./logo.jpg",
      content = "This is a cool story to display.",
      resume = "Here's a hidden resume, except on hover.",
      note = "Codewithg.com"
    } = props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "gap-4 min-h-[375px] border dark:border-neutral-600 rounded-xl mx-auto w-full shadow overflow-hidden bg-cover bg-center hover:scale-[101%] cursor-pointer transition group",
        style: `background-image: url(${unref(background_url) ? unref(background_url) : null})`
      }, _attrs))}><div class="bg-black/50 text-white p-6 grid gap-1 transition duration-500 h-full items-center justify-center"><div class="grid gap-2"><h2 class="text-xl transition font-bold">${ssrInterpolate(unref(content))}</h2>`);
      if (unref(show)) {
        _push(`<p style="${ssrRenderStyle({
          "line-height": "1.22"
        })}">${ssrInterpolate(unref(resume))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="text-neutral-400 text-sm">${ssrInterpolate(unref(note))}</p></div></div></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Story.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$8;
const _sfc_main$7 = {
  __name: "Stories",
  __ssrInlineRender: true,
  props: ["content", "background_url"],
  setup(__props) {
    const props = __props;
    const current = ref(0);
    ref(100);
    const {
      stories = [{
        background_url: "supacourse.jpg"
      }, {
        background_url: "nextfr.jpg"
      }, {
        background_url: "thedevelopercourse.jpg"
      }]
    } = props;
    let intervalId;
    onUnmounted(() => {
      clearInterval(intervalId);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "gap-4 min-h-[375px] border dark:border-transparent rounded-xl mx-auto w-full shadow overflow-hidden cursor-pointer transition group cursor-pointer bg-cover bg-center bg-black transition duration-200",
        style: `background-image: url(${unref(stories)[unref(current)].background_url ? unref(stories)[unref(current)].background_url : null})`
      }, _attrs))}><div class="flex items-center gap-2 p-3"><!--[-->`);
      ssrRenderList(unref(stories), (item, index) => {
        _push(`<div class="w-full h-1 overflow-hidden rounded bg-neutral-200/20"><div class="${ssrRenderClass(`h-full ${unref(current) === index ? "animate bg-neutral-300" : unref(current) < index ? "" : "bg-neutral-300"}`)}"></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Stories.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main$7;
const _sfc_main$6 = {
  __name: "Upload",
  __ssrInlineRender: true,
  setup(__props) {
    const files = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: `w-full h-auto p-4 transition border-2 border-dashed cursor-pointer rounded-xl ${files.value.length === 0 ? "hover:bg-neutral-50 dark:hover:bg-neutral-800" : ""} dark:border-neutral-600`
      }, _attrs))}>`);
      if (files.value.length > 0) {
        _push(`<div class="grid w-full grid-cols-3 gap-4 text-center"><!--[-->`);
        ssrRenderList(files.value, (item, index) => {
          _push(`<div class="relative grid w-32 h-full gap-2 p-2 border rounded dark:border-neutral-600 group"><div class="rounded-lg"><svg class="mx-auto text-neutral-300" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62Z"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 56v120a32 32 0 0 0 32 32h120m-232 80h160m-160 80h160"></path></svg></div><div class="grid gap-1"><p class="text-sm font-bold truncate">${ssrInterpolate(item.name)}</p><div class="absolute items-center justify-center hidden top-2 right-2 group-hover:flex"><svg class="text-red-500" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm1 2H6v12h12zm-4.586 6l1.768 1.768l-1.414 1.414L12 15.414l-1.768 1.768l-1.414-1.414L10.586 14l-1.768-1.768l1.414-1.414L12 12.586l1.768-1.768l1.414 1.414zM9 4v2h6V4z"></path></svg></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="cursor-pointer"><input type="file" accept=".svg, .jpg, .png" class="hidden" id="fileInput" multiple><label for="fileInput" class="grid gap-2 mx-auto text-base text-center cursor-pointer"><div class="flex items-center justify-center w-[36px] h-[36px] mx-auto rounded-full bg-neutral-100 dark:bg-neutral-600"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path stroke-linejoin="round" d="M14.186 2.753v3.596c0 .487.194.955.54 1.3a1.85 1.85 0 0 0 1.306.539h4.125"></path><path stroke-linejoin="round" d="M20.25 8.568v8.568a4.251 4.251 0 0 1-1.362 2.97a4.283 4.283 0 0 1-3.072 1.14h-7.59a4.294 4.294 0 0 1-3.1-1.124a4.265 4.265 0 0 1-1.376-2.986V6.862a4.25 4.25 0 0 1 1.362-2.97a4.283 4.283 0 0 1 3.072-1.14h5.714a3.503 3.503 0 0 1 2.361.905l2.96 2.722a2.971 2.971 0 0 1 1.031 2.189"></path><path stroke-miterlimit="10" d="M12 10.499v6.774"></path><path stroke-linejoin="round" d="m15.106 13.35l-2.665-2.665a.62.62 0 0 0-.882 0l-2.665 2.666"></path></g></svg></div><div><p><span class="font-bold">Click here</span> to upload your file or drag &amp; drop.</p><p class="text-sm text-neutral-400">Supported Format: SVG, JPG, PNG (max 50mb).</p></div></label></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Upload.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_7 = _sfc_main$6;
const _sfc_main$5 = {
  __name: "AnalyticsCard",
  __ssrInlineRender: true,
  props: ["title", "metric", "value", "type"],
  setup(__props) {
    ref(false);
    const props = __props;
    const {
      title = "This week",
      value = "2.921,33",
      metric = 12.2,
      type = "positive"
    } = props;
    const getMetric = computed(() => {
      if (typeof metric === "number")
        return `${type === "positive" ? "+" : "-"}${metric}%`;
      return metric;
    });
    const getColor = computed(() => {
      switch (type) {
        case "positive":
          return "text-emerald-500";
        case "even":
          return "text-purple-500";
        case "negative":
          return "text-red-500";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "grid gap-4 border dark:border-neutral-600 rounded-xl mx-auto max-w-[500px] w-full shadow overflow-hidden p-4"
      }, _attrs))} data-v-be6d11a3><div class="flex items-start justify-between" data-v-be6d11a3><p class="text-neutral-400" data-v-be6d11a3>${ssrInterpolate(unref(title))}</p><p class="${ssrRenderClass(`${unref(getColor)} font-[500]`)}" data-v-be6d11a3>${ssrInterpolate(unref(getMetric))}</p></div><div class="flex items-end justify-between" data-v-be6d11a3><p class="text-[40px] font-[600]" data-v-be6d11a3><span class="text-neutral-300" data-v-be6d11a3>$</span>${ssrInterpolate(unref(value))}</p><p class="text-neutral-400" data-v-be6d11a3>$2.737,21</p></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AnalyticsCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-be6d11a3"]]);
const _sfc_main$4 = {
  __name: "CompletionCard",
  __ssrInlineRender: true,
  props: ["title", "progression", "money", "value", "type"],
  setup(__props) {
    ref(false);
    const props = __props;
    const {
      members = [],
      title = "2024 Money goal",
      value = 92,
      progression = 12,
      positive = true,
      note = "You are almost there."
    } = props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "grid gap-3 border dark:border-neutral-600 rounded-xl mx-auto max-w-[500px] w-full shadow overflow-hidden py-3 px-4"
      }, _attrs))}><header class="flex items-start justify-between"><p class="font-[600]">${ssrInterpolate(unref(title))}</p><svg class="transition cursor-pointer text-neutral-500 hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 13.5v-7h-7m7 0l-8 8"></path></svg></header><main class="grid gap-4"><div class="flex items-center gap-2" style="${ssrRenderStyle({
        "line-height": "1"
      })}"><h2 class="text-[32px] font-[600]">${ssrInterpolate(unref(value))}%</h2><p class="${ssrRenderClass(`font-[600] ${unref(positive) ? "text-emerald-500" : "text-red-500"}`)}">${ssrInterpolate(unref(positive) ? "+" : "-")}${ssrInterpolate(unref(progression))}%</p></div><div class="w-full h-4 overflow-hidden rounded bg-neutral-200"><div class="h-4 bg-emerald-500" style="${ssrRenderStyle(`width: ${unref(value)}%;`)}"></div></div></main><footer><p class="text-sm text-neutral-500">${ssrInterpolate(unref(note))}</p></footer></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CompletionCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_9 = _sfc_main$4;
const _sfc_main$3 = {
  __name: "SalesCard",
  __ssrInlineRender: true,
  props: ["title", "progression", "money", "value", "type"],
  setup(__props) {
    ref(false);
    const props = __props;
    const {
      items = [{
        legend: "Mar",
        value: 75
      }, {
        legend: "Apr",
        value: 64
      }, {
        legend: "May",
        value: 79
      }, {
        legend: "Jun",
        value: 100
      }],
      title = "Sales Revenue",
      value = "10,323.93",
      progression = 12,
      positive = true,
      note = "You are almost there."
    } = props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "grid gap-3 border dark:border-neutral-600 rounded-xl mx-auto max-w-[500px] w-full shadow overflow-hidden py-3 px-4"
      }, _attrs))}><header class="flex items-start justify-between"><p class="font-[600]">${ssrInterpolate(unref(title))}</p><svg class="transition cursor-pointer text-neutral-500 hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 13.5v-7h-7m7 0l-8 8"></path></svg></header><main class="grid items-end grid-cols-2 gap-4"><div><h2 class="text-[32px] font-[600]"><span class="text-neutral-300">$</span>${ssrInterpolate(unref(value))}</h2><p class="text-sm text-neutral-400">This month, your global revenue ${ssrInterpolate(unref(positive) ? "increased" : "decreased")} by ${ssrInterpolate(unref(progression))}%</p></div><div class="relative flex items-end justify-end gap-4 text-sm font-[500] text-neutral-400"><!--[-->`);
      ssrRenderList(unref(items), (item, index) => {
        _push(`<div class="relative flex flex-col items-end justify-end h-24 h-full gap-2"><div class="${ssrRenderClass(`w-6 rounded ${index === unref(items).length - 1 ? unref(positive) ? "bg-emerald-500" : "bg-red-500" : "bg-neutral-200 dark:bg-neutral-600"}`)}" style="${ssrRenderStyle(`height: ${item.value / 2}px;`)}"></div><span>${ssrInterpolate(item.legend)}</span></div>`);
      });
      _push(`<!--]--></div></main></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SalesCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_10 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "Job",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    const skills = ref(["Next.js", "Javascript", "Friendly"]);
    const position = ref(["Full-time", "Remote", "Tech"]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "grid gap-6 border dark:border-neutral-600 rounded-xl mx-auto max-w-[500px] w-full shadow overflow-hidden p-4 pb-6"
      }, _attrs))}><header class="flex items-center gap-4"><div class="w-12 h-12 rounded-lg bg-slate-800"></div><div class="grid"><p class="text-sm text-neutral-400">Company</p><p>$90,000 \u2014 $100,000</p></div></header><main class="grid gap-4"><div><p class="font-[500]">Senior Software Developer</p><p class="text-sm text-neutral-400">Nashville, Tennessee</p></div><div class="grid gap-2"><p class="text-sm text-neutral-400">Matching Skills</p><div class="flex items-center gap-2"><!--[-->`);
      ssrRenderList(unref(skills), (item, index) => {
        _push(`<div class="px-3 py-1 text-sm font-[600] text-emerald-600/80 bg-emerald-200 dark:bg-emerald-200/5 rounded-full">${ssrInterpolate(item)}</div>`);
      });
      _push(`<!--]--></div></div><div class="grid gap-2"><p class="text-sm text-neutral-400">About this position</p><div class="flex items-center gap-2"><!--[-->`);
      ssrRenderList(unref(position), (item, index) => {
        _push(`<div class="px-3 py-1 text-sm font-[600] text-emerald-600/80 bg-emerald-200 dark:bg-emerald-200/5 rounded-full">${ssrInterpolate(item)}</div>`);
      });
      _push(`<!--]--></div></div></main></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Job.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_11 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Weather",
  __ssrInlineRender: true,
  props: ["night"],
  setup(__props) {
    ref(false);
    const props = __props;
    const {
      night = false,
      temperature = 32,
      location = "Dubai",
      highest = 38,
      lowest = 26
    } = props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: `relative grid items-center justify-center h-56 w-56 relative rounded-3xl mx-auto max-w-[500px] w-full shadow overflow-hidden cursor-pointer hover:scale-[102%] transition bg-gradient-to-b ${unref(night) ? "from-black to-blue-700" : "from-sky-300 to-sky-100"}`
      }, _attrs))}><div class="${ssrRenderClass(`w-36 h-36 rounded-full bg-gradient-to-b ${unref(night) ? "from-gray-400 to-gray-50 drop-shadow-[0_-12px_35px_rgba(250,250,250,.5)]" : "from-orange-400 to-orange-100 drop-shadow-[0_-12px_35px_rgba(245,120,11,0.5)]"}`)}"></div><div class="${ssrRenderClass(`absolute text-sm p-4 bottom-0 w-full h-[50%] bg-blue-500 backdrop-blur-3xl bg-white/30 ${unref(night) ? "text-white" : "text-black"}`)}"><p class="text-2xl font-[600]">${ssrInterpolate(unref(temperature))}\xB0</p><p>${ssrInterpolate(unref(location))}</p><p>L: ${ssrInterpolate(unref(lowest))}\xB0 \u2022 H: ${ssrInterpolate(unref(highest))}\xB0</p></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Weather.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_12 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "CODEWITHG.COM \u2014 Guillaume Duhan, CTO & Youtuber",
      meta: [{
        name: "description",
        content: "CTO of Allocations.com, a SaaS company in finance based in Miami, I have also a YouTube channel: @codewithguillaume. With 15 years of experience in tech as a freelancer, consultant, and Lead Developer, I have led dozens of engineering teams across Paris, London, and Berlin.Thedevelopercourse is the culmination of my experience, and it is a pleasure to deliver it to you today."
      }, {
        name: "keywords",
        content: "learn how to code, freecodecamp, coursera, software development, coding bootcamp, advance career, developer education"
      }, {
        name: "robots",
        content: "index, follow"
      }, {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, {
        property: "og:title",
        content: "Codewithg.com | CTO & Youtuber"
      }, {
        property: "og:type",
        content: "website"
      }, {
        property: "og:url",
        content: "https://codewithg.com/"
      }, {
        property: "og:image",
        content: "https://codewithg.com/images/logo.jpg"
      }, {
        property: "og:description",
        content: "CTO of Allocations.com, a finance SaaS Miami-based, I am running a YouTube channel: @codewithguillaume. Currently living in Dubai."
      }, {
        property: "og:site_name",
        content: "codewithg.com"
      }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsArrowUp = __nuxt_component_0$1;
      const _component_Login = __nuxt_component_1;
      const _component_ProductCard = __nuxt_component_2;
      const _component_ProfileCard = __nuxt_component_3;
      const _component_EditPost = __nuxt_component_4;
      const _component_Story = __nuxt_component_5;
      const _component_Stories = __nuxt_component_6;
      const _component_Upload = __nuxt_component_7;
      const _component_AnalyticsCard = __nuxt_component_8;
      const _component_CompletionCard = __nuxt_component_9;
      const _component_SalesCard = __nuxt_component_10;
      const _component_Job = __nuxt_component_11;
      const _component_Weather = __nuxt_component_12;
      _push(`<main${ssrRenderAttrs(mergeProps({
        class: "grid gap-8 p-4 max-w-[1600px] mx-auto"
      }, _attrs))}><div class="flex items-center justify-center gap-2"><p>copy/paste these components soon</p>`);
      _push(ssrRenderComponent(_component_IconsArrowUp, {
        class: "rotate-180"
      }, null, _parent));
      _push(`</div><div class="grid items-start gap-4 lg:grid-cols-3"><div class="grid gap-4">`);
      _push(ssrRenderComponent(_component_Login, null, null, _parent));
      _push(ssrRenderComponent(_component_ProductCard, null, null, _parent));
      _push(`</div><div class="grid gap-4">`);
      _push(ssrRenderComponent(_component_ProfileCard, null, null, _parent));
      _push(ssrRenderComponent(_component_ProfileCard, {
        small: true
      }, null, _parent));
      _push(ssrRenderComponent(_component_EditPost, null, null, _parent));
      _push(`<div class="grid grid-cols-2 gap-4">`);
      _push(ssrRenderComponent(_component_Story, null, null, _parent));
      _push(ssrRenderComponent(_component_Stories, null, null, _parent));
      _push(`</div></div><div class="grid gap-4">`);
      _push(ssrRenderComponent(_component_Upload, null, null, _parent));
      _push(ssrRenderComponent(_component_AnalyticsCard, null, null, _parent));
      _push(ssrRenderComponent(_component_CompletionCard, null, null, _parent));
      _push(ssrRenderComponent(_component_SalesCard, null, null, _parent));
      _push(ssrRenderComponent(_component_Job, null, null, _parent));
      _push(`<div class="grid grid-cols-2 gap-4">`);
      _push(ssrRenderComponent(_component_Weather, null, null, _parent));
      _push(ssrRenderComponent(_component_Weather, {
        night: true
      }, null, _parent));
      _push(`</div></div></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CYN7_q5H.mjs.map
