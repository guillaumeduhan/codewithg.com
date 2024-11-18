import { _ as __nuxt_component_0 } from './nuxt-link-CBXZo5aS.mjs';
import { ref, resolveComponent, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
import './server.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "repos",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([{
      title: "Supabase course \u2014 2023",
      link: "https://dub.sh/paSQB1N"
    }, {
      title: "Next.js Shadcn Dashboard",
      link: "https://dub.sh/nextjs-shadcnui"
    }, {
      title: "Next.js Supabase",
      link: "https://dub.sh/nextjs14-supabase"
    }, {
      title: "Next.js Newsletter app",
      link: "https://dub.sh/pwD7Fag"
    }, {
      title: "Nuxt 3 Shadcn",
      link: "https://dub.sh/nuxt3-shadcn"
    }, {
      title: "Next.js Resend",
      link: "https://github.com/guillaumeduhan/resend-nextjs14"
    }]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Courses = resolveComponent("Courses");
      _push(`<!--[--><div class="container"><!--[-->`);
      ssrRenderList(unref(items), (item, index) => {
        _push(`<div class="flex gap-2"><span>${ssrInterpolate(item.title)}</span>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "text-primary-500",
          href: item.link
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.link)}`);
            } else {
              return [createTextVNode(toDisplayString(item.link), 1)];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_Courses, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/repos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=repos-BdUf0Oe5.mjs.map
