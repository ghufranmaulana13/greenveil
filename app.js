const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./XLoginFoxPreview-BkClOZZn.js","./foxDialogue-ZVBBR1fq.js","./questSandbox-DUOzKITk.js","./XAuthSession-BolX2Xc0.js","./Game-qR78S_4H.js","./DeveloperSceneRequest-BuuuPHP2.js"])))=>i.map(i=>d[i]);
import "./modulepreload-polyfill-B5Qt9EMX.js";
import { O as ze, _ as Q, R as $e, r as Ve, a as je, b as q, Q as Xe, c as He, d as P, e as C, f as O, g as j, h as X, s as Ye, P as Ke, D as Qe, i as W, j as Ze } from "./questSandbox-DUOzKITk.js";
import { r as Je, x as le, __tla as __tla_0 } from "./XAuthSession-BolX2Xc0.js";
let Mr;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const ce = "greenveil:chunk-load-recovery:v1", et = ({ documentObject: t = globalThis.document, locationObject: e = globalThis.location } = {})=>t?.querySelector?.('script[type="module"][src]')?.src ?? e?.href ?? "unknown-build", tt = ({ windowObject: t = globalThis.window, documentObject: e = globalThis.document, locationObject: r = t?.location, storage: n = t?.sessionStorage } = {})=>{
        if (!t?.addEventListener || typeof r?.reload != "function" || !n) return !1;
        let s = !1;
        return t.addEventListener("vite:preloadError", (i)=>{
            if (s) {
                i.preventDefault?.();
                return;
            }
            const o = et({
                documentObject: e,
                locationObject: r
            });
            try {
                if (n.getItem(ce) === o) return;
                n.setItem(ce, o);
            } catch  {
                return;
            }
            s = !0, i.preventDefault?.(), r.reload();
        }), !0;
    };
    tt();
    ze.prototype.copy = function(t, e = !0) {
        if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), e === !0) for(let r = 0; r < t.children.length; r++){
            const n = t.children[r];
            this.add(n.clone());
        }
        return this;
    };
    const rt = "xLoginPreview", nt = "xLoginError", U = "We could not verify your X account. Please try again.", ee = "LOGIN WITH X", te = "Login with X", st = "GreenVeil is in private development. This X account is not authorized.", it = "We could not verify private access. Please try again.", at = "USE ANOTHER X ACCOUNT", ot = "Use another X account", lt = [
        "error_description",
        "error_message",
        "error"
    ], Ae = (t)=>[
            "1",
            "true",
            "on",
            "yes"
        ].includes(String(t || "").toLowerCase()), Ee = (t = globalThis.location?.search || "")=>{
        try {
            return Ae(new URLSearchParams(t).get(rt));
        } catch  {
            return !1;
        }
    }, ct = (t = globalThis.location?.search || "")=>{
        try {
            return Ae(new URLSearchParams(t).get(nt));
        } catch  {
            return !1;
        }
    }, Z = (t)=>!!(t?.status === "signed_in" && t?.user?.id && t?.profile?.provider === "x" && t?.profile?.providerId), J = (t)=>!!(Z(t) && (t?.isFake === !0 || t?.canEnterGame === !0)), ut = (t = globalThis.location?.search || "", e = globalThis.location?.hash || "")=>{
        for (const r of [
            t,
            e.replace(/^#/, "?")
        ])try {
            const n = new URLSearchParams(r);
            for (const s of lt){
                const i = String(n.get(s) || "").trim();
                if (i) return i.slice(0, 280);
            }
        } catch  {}
        return "";
    }, N = (t, { label: e = ee, ariaLabel: r = te, disabled: n = !1 } = {})=>{
        const s = t?.querySelector?.(".x-login-button"), i = s?.querySelector?.("span");
        return !s || !i ? !1 : (i.textContent = e, s.setAttribute("aria-label", r), s.disabled = n, s.setAttribute("aria-busy", n ? "true" : "false"), !0);
    }, Te = (t, e = U)=>{
        const r = t?.querySelector?.(".x-login-auth-error"), n = r?.querySelector?.(".x-login-auth-error__copy"), s = t?.querySelector?.(".x-login-button"), i = s?.querySelector?.("span");
        return !r || !n || !s || !i ? !1 : (n.textContent = String(e || U), r.hidden = !1, t.classList.add("is-auth-error"), i.textContent = "TRY AGAIN", s.setAttribute("aria-label", "Try X login again"), s.disabled = !1, s.setAttribute("aria-busy", "false"), !0);
    }, Me = (t, e = {})=>{
        const r = t?.querySelector?.(".x-login-auth-error");
        return r ? (r.hidden = !0, t.classList.remove("is-auth-error"), N(t, e)) : !1;
    }, H = (t)=>`
    <svg class="x-login-ivy ${t}" viewBox="0 0 190 126" aria-hidden="true">
        <path class="x-login-ivy-vine" d="M7 119C43 98 52 61 72 32c16-23 44-29 89-24M51 73c23-5 39-18 51-39M73 48c-4-17-1-31 10-42M103 30c20 4 37 1 54-13"/>
        <path class="x-login-ivy-leaf" d="M20 108C5 106 1 94 5 82c15-1 23 9 15 26ZM47 84c-17-3-21-16-15-29 16 1 23 14 15 29ZM67 57C52 50 52 37 60 27c14 5 18 18 7 30ZM82 33C73 21 78 8 89 2c11 10 8 24-7 31ZM105 29c5-16 18-20 31-14-2 16-15 23-31 14ZM132 17c9-13 23-13 33-4-7 14-21 16-33 4ZM153 10c10-10 23-7 30 3-9 11-22 10-30-3Z"/>
        <path class="x-login-ivy-highlight" d="M8 118C48 93 50 58 73 30c18-21 46-25 91-22"/>
    </svg>`, dt = ({ buttonLabel: t = ee, buttonAriaLabel: e = te, buttonTitle: r = "" } = {})=>`
    <section class="x-login-preview" role="dialog" aria-modal="true" aria-labelledby="x-login-preview-title">
        <div class="x-login-static-background" aria-hidden="true"></div>
        <div class="x-login-fox-stage" aria-hidden="true">
            <canvas class="x-login-fox-canvas"></canvas>
        </div>
        <div class="fox-dialogue x-login-fox-dialogue" role="status" aria-live="polite" aria-hidden="true">
            <span class="fox-dialogue__kicker">FOX.EXE</span>
            <span class="fox-dialogue__text"></span>
        </div>
        <div class="x-login-auth-error" role="alert" aria-live="assertive" hidden>
            <span class="x-login-auth-error__icon" aria-hidden="true">!</span>
            <span class="x-login-auth-error__content">
                <strong>X CONNECTION FAILED</strong>
                <span class="x-login-auth-error__copy">${U}</span>
            </span>
        </div>

        <div class="x-login-panel">
            ${H("is-top-left")}
            ${H("is-top-right")}

            <div class="x-login-crest" aria-hidden="true">
                <svg viewBox="0 0 132 82">
                    <path class="crest-arrow is-left" d="m13 62 38-42M12 62l6-2-4-5m37-35-9 2 7 6"/>
                    <path class="crest-arrow is-right" d="m119 62-38-42m39 42-6-2 4-5M81 20l9 2-7 6"/>
                    <path class="crest-leaf is-left" d="M63 69C39 62 31 45 34 24c21 5 32 21 29 45Z"/>
                    <path class="crest-leaf is-right" d="M69 69c24-7 32-24 29-45-21 5-32 21-29 45Z"/>
                    <path class="crest-leaf is-center" d="M66 68c-13-19-10-39 0-56 12 17 15 37 0 56Z"/>
                    <path class="crest-vein" d="M66 67V24M61 57 43 35m28 22 18-22"/>
                </svg>
            </div>

            <header class="x-login-brand">
                <h1 id="x-login-preview-title">GREENVEIL</h1>
            </header>

            <div class="x-login-divider" aria-hidden="true">
                <i></i><span><b></b><b></b><b></b></span><i></i>
            </div>

            <div class="x-login-button-frame">
                <button class="x-login-button" type="button" aria-label="${e}"${r ? ` title="${r}"` : ""}>
                    <svg class="x-login-x-mark" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/>
                    </svg>
                    <span>${t}</span>
                </button>
                ${H("is-button")}
            </div>
        </div>
    </section>`, Re = ({ search: t = globalThis.location?.search || "", markupOptions: e = {} } = {})=>{
        if (typeof document > "u") return null;
        const r = document.createElement("div");
        r.innerHTML = dt(e).trim();
        const n = r.firstElementChild;
        if (!n) return null;
        const s = n.querySelector(".x-login-fox-canvas"), i = n.querySelector(".x-login-fox-stage"), o = n.querySelector(".x-login-fox-dialogue");
        let l = null, u = !1;
        return document.documentElement.classList.add("is-x-login-preview"), document.documentElement.classList.remove("is-x-login-preview-boot"), document.body.append(n), s && Q(()=>import("./XLoginFoxPreview-BkClOZZn.js"), __vite__mapDeps([0,1,2,3]), import.meta.url).then(async ({ XLoginFoxPreview: d })=>{
            const p = new d(s, o);
            l = p, await p.setActive(!0), u && l === p && (l = null, p.destroy());
        }).catch((d)=>{
            u || (i?.classList.add("is-load-error"), console.error("[XLoginPreview] The 3D path scene could not be loaded.", d));
        }), ct(t) && Te(n), n.querySelector(".x-login-button")?.focus({
            preventScroll: !0
        }), {
            element: n,
            destroy: ()=>{
                if (u) return;
                u = !0;
                const d = l;
                l = null, d?.destroy(), n.remove(), document.documentElement.classList.remove("is-x-login-preview", "is-x-login-preview-boot");
            }
        };
    }, pt = ({ search: t = globalThis.location?.search || "" } = {})=>{
        if (!Ee(t)) return null;
        const r = Re({
            search: t,
            markupOptions: {
                buttonAriaLabel: "Login with X visual preview",
                buttonTitle: "Visual preview only"
            }
        })?.element;
        return r ? (r.querySelector(".x-login-button")?.addEventListener("click", (n)=>{
            n.preventDefault();
            const s = n.currentTarget;
            Me(r, {
                ariaLabel: "Login with X visual preview"
            }), s.classList.remove("is-preview-pressed"), requestAnimationFrame(()=>s.classList.add("is-preview-pressed")), globalThis.setTimeout(()=>s.classList.remove("is-preview-pressed"), 520);
        }), r) : null;
    }, ft = (t)=>{
        const e = String(t?.message || t || "").trim();
        return e ? e.slice(0, 280) : U;
    }, ht = ({ authSession: t, initialState: e = null, initialError: r = null, onAuthenticated: n = ()=>{}, redirectTo: s = void 0, search: i = globalThis.location?.search || "", hash: o = globalThis.location?.hash || "" } = {})=>{
        if (!t || typeof t.signInWithX != "function") throw new TypeError("mountXLoginGate requires an X auth session.");
        const l = Re({
            search: i
        }), u = l?.element;
        if (!u) return null;
        const d = u.querySelector(".x-login-button");
        let p = !1, a = !1, c = null;
        const h = (f, { disabled: m = !1 } = {})=>{
            Te(u, ft(f)), m && N(u, {
                label: "X LOGIN UNAVAILABLE",
                ariaLabel: "X login is unavailable",
                disabled: !0
            });
        }, y = (f)=>!J(f) || p ? !1 : (Promise.resolve(n(f)).catch(h), !0), b = (f)=>{
            y(f) || (f?.status === "unconfigured" ? h(f.bootstrapError?.message || "Supabase browser configuration is missing.", {
                disabled: !0
            }) : f?.status === "signed_in" && !f?.profile ? h(f.bootstrapError?.message || "A verified X OAuth identity is required.") : Z(f) && f?.bootstrapError ? h(it) : Z(f) && (h(st), N(u, {
                label: at,
                ariaLabel: ot
            })));
        };
        d?.addEventListener("click", async (f)=>{
            if (f.preventDefault(), !(a || p)) {
                a = !0, Me(u), N(u, {
                    label: "CONNECTING TO X...",
                    ariaLabel: "Connecting to X",
                    disabled: !0
                });
                try {
                    const m = t.getSnapshot?.();
                    m?.status === "signed_in" && !J(m) && typeof t.signOut == "function" && await t.signOut(), await t.signInWithX({
                        redirectTo: s
                    }), y(t.getSnapshot?.()) || N(u, {
                        label: ee,
                        ariaLabel: te
                    });
                } catch (m) {
                    p || h(m);
                } finally{
                    a = !1;
                }
            }
        });
        const g = ut(i, o);
        return g ? h(g) : r && h(r), b(e), typeof t.subscribe == "function" && (c = t.subscribe(b, {
            emitCurrent: !1
        })), {
            element: u,
            destroy: ()=>{
                p || (p = !0, c?.(), l.destroy());
            }
        };
    }, ue = `
██████╗ ██████╗ ██╗   ██╗███╗   ██╗ ██████╗ ██╗███████╗                   
██╔══██╗██╔══██╗██║   ██║████╗  ██║██╔═══██╗╚═╝██╔════╝                   
██████╔╝██████╔╝██║   ██║██╔██╗ ██║██║   ██║   ███████╗                   
██╔══██╗██╔══██╗██║   ██║██║╚██╗██║██║   ██║   ╚════██║                   
██████╔╝██║  ██║╚██████╔╝██║ ╚████║╚██████╔╝   ███████║                   
╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝    ╚══════╝                   
                                                                       
██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 

╔═ Intro ═══════════════╗
║ Thank you for visiting my portfolio, you sneaky developer!
║ If you are curious about the stack and how I built this project, here’s everything you need to know.
╚═══════════════════════╝

╔═ Socials ═══════════════╗
║ Mail           ⇒ simon.bruno.77@gmail.com
║ X              ⇒ https://x.com/bruno_simon
║ BlueSKy        ⇒ https://bsky.app/profile/bruno-simon.bsky.social
║ Discord public ⇒ https://discord.com/channels/769928116701233152/1445064878384480288
║ Discord PM     ⇒ https://discord.com/users/202907325722263553
║ Youtube        ⇒ https://www.youtube.com/@BrunoSimon
║ Twitch         ⇒ https://www.twitch.tv/bruno_simon_dev
║ GitHub         ⇒ https://github.com/brunosimon
║ LinkedIn       ⇒ https://www.linkedin.com/in/simonbruno77/
╚═══════════════════════╝

╔═ Debug ═══════════════╗
║ You can access the debug mode by adding #debug at the end of the URL and reloading.
║ Press [V] to toggle the free camera.
╚═══════════════════════╝

╔═ Three.js ════════════╗
║ Three.js is the library I’m using to render this 3D world (release: ${$e})
║ https://threejs.org/
║ It was created by mr.doob (https://x.com/mrdoob, https://github.com/mrdoob),
║ followed by hundreds of awesome developers,
║ one of which being Sunag (https://x.com/sea3dformat, https://github.com/sunag) who added TSL,
║ enabling the use of both WebGL and WebGPU, making this portfolio possible.
╚═══════════════════════╝

╔═ Three.js Journey ════╗
║ If you want to learn Three.js, I got you covered with this huge course.
║ https://threejs-journey.com/
║ It contains everything you need to start building awesome stuff with Three.js (and much more).
╚═══════════════════════╝

╔═ Devlogs ═════════════╗
║ I’ve been making devlogs since the very start of this portfolio
║ and you can find them all on my Youtube channel.
║ https://www.youtube.com/@BrunoSimon
╚═══════════════════════╝

╔═ Source code ═════════╗
║ The code is available on GitHub under MIT license. Even the Blender files are there, so have fun!
║ https://github.com/brunosimon/folio-2025
║ For security reasons, I’m not sharing the server code, but the portfolio works without it.
╚═══════════════════════╝

╔═ Musics ══════════════╗
║ The music you hear was made especially for this portfolio by the awesome Kounine (Linktree).
║ https://linktr.ee/Kounine
║ They are now under CC0 license, meaning you can do whatever you want with them!
║ Download them here.
║ https://github.com/brunosimon/folio-2025/tree/main/static/sounds/musics
╚═══════════════════════╝

╔═ Some more links ═════╗
║ Rapier (Physics library)  ⇒ https://rapier.rs/
║ Howler.js (Audio library) ⇒ https://howlerjs.com/
║ Amatic SC (Fonts)         ⇒ https://fonts.google.com/specimen/Amatic+SC
║ Nunito (Fonts).           ⇒ https://fonts.google.com/specimen/Nunito?query=Nunito
╚═══════════════════════╝
`;
    for(let t = 0; t < ue.length; t++)ue[t].match(/[╔║═╗╚╝╔╝]/);
    const mt = 1024, gt = ()=>window.matchMedia?.("(orientation: portrait)").matches ?? window.innerHeight > window.innerWidth, bt = ()=>{
        const e = (window.matchMedia?.("(pointer: coarse)").matches ?? !1) || navigator.maxTouchPoints > 0, r = Number(screen.availWidth) || window.innerWidth, n = Number(screen.availHeight) || window.innerHeight, s = Math.min(r, n, window.innerWidth, window.innerHeight);
        return e && s <= mt;
    };
    class yt {
        constructor(){
            this.button = document.querySelector(".js-mobile-display-mode"), this.prompt = document.querySelector(".js-mobile-orientation-prompt"), this.landscapeModeRequested = !1, this.handheldDeviceDetected = !1, !(!this.button || !this.prompt) && (this.handleFullscreenChange = ()=>{
                document.fullscreenElement || (this.landscapeModeRequested = !1, this.unlockOrientation()), this.updateAvailability(), this.updateControl(), this.updatePrompt();
            }, this.handleViewportChange = ()=>{
                this.updateAvailability(), this.updatePrompt();
            }, this.button.addEventListener("click", ()=>this.toggle()), document.addEventListener("fullscreenchange", this.handleFullscreenChange), window.addEventListener("resize", this.handleViewportChange), screen.orientation?.addEventListener?.("change", this.handleViewportChange), this.updateAvailability(), this.updateControl(), this.updatePrompt());
        }
        updateAvailability() {
            this.handheldDeviceDetected ||= bt();
            const e = this.handheldDeviceDetected;
            document.documentElement.classList.toggle("has-mobile-display-mode", e), this.button.hidden = !e, e || (this.landscapeModeRequested = !1, this.prompt.hidden = !0, this.prompt.setAttribute("aria-hidden", "true"));
        }
        updateControl() {
            const e = !!document.fullscreenElement;
            this.button.setAttribute("aria-label", e ? "Exit fullscreen mode" : "Enter fullscreen landscape mode"), this.button.setAttribute("aria-pressed", String(e)), this.button.classList.toggle("is-active", e);
        }
        updatePrompt() {
            const e = !this.button.hidden && this.landscapeModeRequested && gt();
            this.prompt.hidden = !e, this.prompt.setAttribute("aria-hidden", String(!e));
        }
        unlockOrientation() {
            try {
                screen.orientation?.unlock?.();
            } catch  {}
        }
        async toggle() {
            if (document.fullscreenElement) {
                this.landscapeModeRequested = !1, this.unlockOrientation();
                try {
                    await document.exitFullscreen?.();
                } catch  {}
                this.updateControl(), this.updatePrompt();
                return;
            }
            this.landscapeModeRequested = !0, this.updatePrompt();
            try {
                typeof document.documentElement.requestFullscreen == "function" && await document.documentElement.requestFullscreen();
            } catch  {}
            try {
                await screen.orientation?.lock?.("landscape");
            } catch  {}
            this.updateControl(), this.updatePrompt();
        }
    }
    const de = 1e3 / 30, wt = 1e4, L = ()=>performance.now(), v = (t, e = new WeakSet)=>{
        if (t == null || typeof t == "string" || typeof t == "number" || typeof t == "boolean") return t;
        if (t instanceof Error) return {
            name: t.name,
            message: t.message,
            stack: t.stack
        };
        if (typeof t == "object") {
            if (e.has(t)) return "[circular]";
            e.add(t);
            try {
                if (t instanceof Set) return [
                    ...t
                ].map((n)=>v(n, e));
                if (t instanceof Map) return Object.fromEntries([
                    ...t
                ].map(([n, s])=>[
                        n,
                        v(s, e)
                    ]));
                if (Array.isArray(t)) return t.map((n)=>v(n, e));
                const r = {};
                for (const [n, s] of Object.entries(t))typeof s != "function" && (r[n] = v(s, e));
                return r;
            } finally{
                e.delete(t);
            }
        }
        return String(t);
    }, F = (t)=>{
        if (t.length === 0) return 0;
        const e = t.map(([i, o])=>[
                i,
                o
            ]).sort((i, o)=>i[0] - o[0]);
        let r = 0, [n, s] = e[0];
        for(let i = 1; i < e.length; i++){
            const [o, l] = e[i];
            o <= s ? s = Math.max(s, l) : (r += s - n, n = o, s = l);
        }
        return r + s - n;
    }, Y = (t, { union: e = !0 } = {})=>{
        const r = new Map;
        for (const n of t)r.has(n.kind) || r.set(n.kind, []), r.get(n.kind).push(n);
        return Object.fromEntries([
            ...r
        ].map(([n, s])=>[
                n,
                e ? F(s.map((i)=>[
                        i.start,
                        i.end
                    ])) : s.reduce((i, o)=>i + o.duration, 0)
            ]));
    };
    class re {
        static isRequested() {
            if (typeof window > "u") return !1;
            const e = new URLSearchParams(window.location.search).get("fps");
            return /fps/i.test(window.location.hash) || e === "1" || e === "true";
        }
        constructor({ label: e = "Robinhood", globalName: r = "__RH_BOOT_PROFILE__" } = {}){
            this.enabled = re.isRequested(), this.label = e, this.globalName = r, this.sequence = 0, this.spans = [], this.spanById = new Map, this.activeSpanIds = new Set, this.marks = {}, this.waits = [], this.syncSlices = [], this.resources = [], this.prewarmBatches = [], this.selectedWorldOwnerCensus = null, this.frames = [], this.longTasks = [], this.longTaskSupported = !1, this.observer = null, this.run = {
                id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
                label: e,
                startedAt: 0,
                createdAt: new Date().toISOString(),
                url: typeof location > "u" ? null : location.href,
                viewport: typeof window > "u" ? null : {
                    width: window.innerWidth,
                    height: window.innerHeight
                },
                pixelRatio: typeof window > "u" ? null : window.devicePixelRatio
            }, this.enabled && (this.observeLongTasks(), this.installWindowApi());
        }
        setRunMetadata(e = {}) {
            this.enabled && Object.assign(this.run, v(e));
        }
        observeLongTasks() {
            typeof PerformanceObserver > "u" || !PerformanceObserver.supportedEntryTypes?.includes("longtask") || (this.longTaskSupported = !0, this.observer = new PerformanceObserver((e)=>{
                for (const r of e.getEntries())this.longTasks.push({
                    start: r.startTime,
                    duration: r.duration,
                    activeSpanIds: [
                        ...this.activeSpanIds
                    ],
                    attribution: v(r.attribution ?? [])
                });
            }), this.observer.observe({
                type: "longtask",
                buffered: !0
            }));
        }
        installWindowApi() {
            typeof window > "u" || (Object.defineProperty(window, this.globalName, {
                configurable: !0,
                get: ()=>this.getProfile()
            }), Object.defineProperty(window, "__BOOT_PROFILE__", {
                configurable: !0,
                get: ()=>this.getProfile()
            }), window.copyBootProfile = async ()=>{
                const e = this.getProfile(), r = JSON.stringify(e, null, 2);
                return navigator.clipboard?.writeText && await navigator.clipboard.writeText(r), console.info(`[${this.label} boot profile]`, e), e;
            }, window.downloadBootProfile = ()=>{
                const e = this.getProfile(), r = new Blob([
                    JSON.stringify(e, null, 2)
                ], {
                    type: "application/json"
                }), n = URL.createObjectURL(r), s = document.createElement("a");
                return s.href = n, s.download = `${this.label.toLowerCase()}-boot-${e.run.id}.json`, s.click(), URL.revokeObjectURL(n), e;
            });
        }
        mark(e, r = {}) {
            if (!this.enabled || this.marks[e]) return this.marks[e] ?? null;
            const n = {
                at: L(),
                meta: v(r)
            };
            return this.marks[e] = n, n;
        }
        beginSpan(e, { parentId: r = null, phase: n = null, kind: s = "task", metadata: i = {}, start: o = L() } = {}) {
            if (!this.enabled) return null;
            const l = {
                id: `${++this.sequence}:${e}`,
                parentId: r,
                phase: n,
                kind: s,
                name: e,
                start: o,
                end: null,
                status: "running",
                meta: v(i)
            };
            return this.spans.push(l), this.spanById.set(l.id, l), this.activeSpanIds.add(l.id), l;
        }
        endSpan(e, { status: r = "ok", metadata: n = {} } = {}) {
            if (!this.enabled || !e) return null;
            const s = typeof e == "string" ? this.spanById.get(e) : e;
            return !s || s.end !== null ? s ?? null : (s.end = L(), s.status = r, Object.assign(s.meta, v(n)), this.activeSpanIds.delete(s.id), s);
        }
        recordSpan(e, r, n = {}) {
            if (!this.enabled || !Number.isFinite(r) || r < 0) return null;
            const s = n.end ?? L(), i = this.beginSpan(e, {
                ...n,
                start: s - r
            });
            return i ? (i.end = s, i.status = n.status ?? "ok", this.activeSpanIds.delete(i.id), i) : null;
        }
        recordWait({ spanId: e = null, kind: r, start: n, end: s = L(), metadata: i = {} }) {
            !this.enabled || !Number.isFinite(n) || !Number.isFinite(s) || this.waits.push({
                spanId: e,
                kind: r,
                start: n,
                end: s,
                duration: Math.max(0, s - n),
                meta: v(i)
            });
        }
        recordSyncSlice(e, r, n, s, i = {}) {
            !this.enabled || !Number.isFinite(n) || !Number.isFinite(s) || s < 0 || this.syncSlices.push({
                spanId: e,
                name: r,
                start: n,
                duration: s,
                meta: v(i)
            });
        }
        recordResource(e) {
            this.enabled && this.resources.push(v(e));
        }
        recordPrewarmBatch(e) {
            this.enabled && this.prewarmBatches.push(v(e));
        }
        recordSelectedWorldOwnerCensus(e) {
            this.enabled && (this.selectedWorldOwnerCensus = v(e));
        }
        recordFrame({ start: e, intervalMs: r, callbackCpuMs: n }) {
            !this.enabled || this.frames.length >= wt || this.marks.revealComplete || !Number.isFinite(e) || !Number.isFinite(r) || r <= 0 || this.frames.push({
                start: e,
                intervalMs: r,
                callbackCpuMs: Number.isFinite(n) ? n : null,
                activeSpanIds: [
                    ...this.activeSpanIds
                ]
            });
        }
        getPhaseAt(e) {
            const r = (n)=>this.marks[n]?.at ?? 1 / 0;
            return e < r("clickTargetReady") ? "opening" : e < r("userClick") ? "prompt-build" : e < r("controlsEnabled") ? "clicked-wait" : e < r("revealComplete") ? "reveal" : "playable";
        }
        getHudSummary() {
            if (!this.enabled) return null;
            const e = L(), r = this.spans.filter((a)=>a.end !== null).map((a)=>({
                    name: a.name,
                    wallMs: a.end - a.start
                })).sort((a, c)=>c.wallMs - a.wallMs), n = [
                ...this.syncSlices
            ].sort((a, c)=>c.duration - a.duration)[0] ?? null, s = [
                ...this.resources
            ].filter((a)=>Number.isFinite(a.loader?.totalMs)).sort((a, c)=>c.loader.totalMs - a.loader.totalMs)[0] ?? null, i = Y(this.waits), o = this.marks.clickTargetReady?.at ?? null, l = this.marks.traversalReady?.at ?? null, u = this.marks.userClick?.at ?? null, d = this.marks.wakeUpReady?.at ?? null, p = this.marks.controlsEnabled?.at ?? null;
            return {
                clickTargetToTraversalReadyMs: o === null ? null : Math.max(0, (l ?? e) - o),
                userClickToControlsEnabledMs: u === null ? null : Math.max(0, (p ?? e) - u),
                userClickToTraversalReadyMs: u === null ? null : Math.max(0, (l ?? e) - u),
                userClickToWakeUpReadyMs: u === null ? null : Math.max(0, (d ?? e) - u),
                longestWall: r[0] ?? null,
                longestSync: n,
                longestResource: s,
                waitTotals: i,
                longTaskCount: this.longTasks.length,
                worstLongTaskMs: this.longTasks.reduce((a, c)=>Math.max(a, c.duration), 0),
                prewarmBatchCount: this.prewarmBatches.length,
                worstPrewarmBatch: [
                    ...this.prewarmBatches
                ].sort((a, c)=>Math.max(c.compileDispatchMs ?? 0, c.cubeRenderMs ?? 0, c.submitWallMs ?? 0) - Math.max(a.compileDispatchMs ?? 0, a.cubeRenderMs ?? 0, a.submitWallMs ?? 0))[0] ?? null
            };
        }
        getProfile() {
            const e = L(), r = new Map;
            for (const a of this.waits)r.has(a.spanId) || r.set(a.spanId, []), r.get(a.spanId).push(a);
            const n = new Map;
            for (const a of this.syncSlices)n.has(a.spanId) || n.set(a.spanId, []), n.get(a.spanId).push(a);
            const s = this.spans.map((a)=>{
                const c = a.end ?? e, h = r.get(a.id) ?? [], y = n.get(a.id) ?? [], b = this.longTasks.map((m)=>[
                        Math.max(a.start, m.start),
                        Math.min(c, m.start + m.duration)
                    ]).filter(([m, w])=>w > m), g = this.frames.filter((m)=>m.start <= c && m.start + m.intervalMs >= a.start), f = (m)=>F(h.filter((w)=>w.kind === m).map((w)=>[
                            w.start,
                            w.end
                        ]));
                return {
                    ...v(a),
                    phase: a.phase ?? this.getPhaseAt(a.start),
                    end: c,
                    wallMs: Math.max(0, c - a.start),
                    syncMs: y.reduce((m, w)=>m + w.duration, 0),
                    maxSyncMs: y.reduce((m, w)=>Math.max(m, w.duration), 0),
                    rafWaitMs: f("raf"),
                    idleWaitMs: f("idle"),
                    resourceWaitMs: f("resource"),
                    promiseWaitMs: f("promise"),
                    pipelineWaitMs: f("pipeline"),
                    longTaskMs: this.longTaskSupported ? F(b) : null,
                    stutterCount: g.filter((m)=>m.intervalMs >= de).length,
                    worstFrameMs: g.reduce((m, w)=>Math.max(m, w.intervalMs), 0)
                };
            }), i = Object.fromEntries(Object.entries(this.marks).map(([a, c])=>[
                    a,
                    {
                        ...v(c),
                        phase: this.getPhaseAt(c.at)
                    }
                ])), o = this.frames.map((a)=>({
                    ...a,
                    phase: this.getPhaseAt(a.start)
                })), l = this.longTasks.map((a)=>({
                    ...a,
                    phase: this.getPhaseAt(a.start)
                })), u = s.filter((a)=>a.status !== "running"), d = Y(this.waits), p = Y(this.waits, {
                union: !1
            });
            return v({
                schemaVersion: 1,
                run: {
                    ...this.run,
                    capturedAt: e
                },
                marks: i,
                summary: {
                    clickTargetToTraversalReadyMs: i.clickTargetReady && i.traversalReady ? Math.max(0, i.traversalReady.at - i.clickTargetReady.at) : null,
                    userClickToTraversalReadyMs: i.userClick && i.traversalReady ? Math.max(0, i.traversalReady.at - i.userClick.at) : null,
                    userClickToWakeUpReadyMs: i.userClick && i.wakeUpReady ? Math.max(0, i.wakeUpReady.at - i.userClick.at) : null,
                    userClickToControlsEnabledMs: i.userClick && i.controlsEnabled ? i.controlsEnabled.at - i.userClick.at : null,
                    longestWallSpans: [
                        ...u
                    ].sort((a, c)=>c.wallMs - a.wallMs).slice(0, 10).map(({ id: a, name: c, kind: h, phase: y, wallMs: b, syncMs: g, maxSyncMs: f, rafWaitMs: m, idleWaitMs: w, resourceWaitMs: oe, pipelineWaitMs: Ue, longTaskMs: Ge })=>({
                            id: a,
                            name: c,
                            kind: h,
                            phase: y,
                            wallMs: b,
                            syncMs: g,
                            maxSyncMs: f,
                            rafWaitMs: m,
                            idleWaitMs: w,
                            resourceWaitMs: oe,
                            pipelineWaitMs: Ue,
                            longTaskMs: Ge
                        })),
                    longestSyncSlices: [
                        ...this.syncSlices
                    ].sort((a, c)=>c.duration - a.duration).slice(0, 10),
                    longestResources: [
                        ...this.resources
                    ].filter((a)=>Number.isFinite(a.loader?.totalMs)).sort((a, c)=>c.loader.totalMs - a.loader.totalMs).slice(0, 10),
                    waitTotals: d,
                    waitAggregateTotals: p,
                    longTaskCount: l.length,
                    longTaskTotalMs: this.longTaskSupported ? F(l.map((a)=>[
                            a.start,
                            a.start + a.duration
                        ])) : null,
                    worstLongTaskMs: l.reduce((a, c)=>Math.max(a, c.duration), 0),
                    capturedFrameCount: o.length,
                    stutterCount: o.filter((a)=>a.intervalMs >= de).length,
                    worstFrameMs: o.reduce((a, c)=>Math.max(a, c.intervalMs), 0),
                    selectedWorldOwnerTotals: this.selectedWorldOwnerCensus?.totals ?? null
                },
                spans: s,
                waits: this.waits,
                syncSlices: this.syncSlices,
                frames: o,
                longTasks: l,
                resources: this.resources,
                prewarmBatches: this.prewarmBatches,
                selectedWorldOwnerCensus: this.selectedWorldOwnerCensus,
                notes: [
                    "wallMs includes waits and overlapping asynchronous work; parallel span wall times must not be added.",
                    "summary.waitTotals is the interval union per wait kind; waitAggregateTotals is the raw sum and may double-count overlapping work.",
                    "syncMs contains only explicitly wrapped main-thread slices.",
                    "resource processing.finalizeWallMs includes parse/decode/transcode, subresources and callback scheduling; it is not pure decode time.",
                    "prewarm cubeRenderMs is main-thread render/compile submission time, not GPU completion time.",
                    "selectedWorldOwnerCensus is captured only in FPS profiling mode and does not mutate scene ownership or visibility.",
                    "Per-owner unique layout/material/geometry counts can overlap because the same structural layout or resource may be shared by multiple owners.",
                    "selectedWorldOwnerCensus.renderCost is deterministic pre-frustum topology; submission fields are estimates and shadow fields are normalized to one shadow-camera pass.",
                    `Long Tasks API support: ${this.longTaskSupported ? "yes" : "no"}.`
                ]
            });
        }
        printSummary() {
            if (!this.enabled) return;
            const e = this.getProfile();
            console.groupCollapsed(`[${this.label}] gerçek boot profili`), console.table(e.summary.longestWallSpans), console.table(e.summary.longestSyncSlices), console.table(e.summary.longestResources.map((r)=>({
                    name: r.name,
                    type: r.type,
                    totalMs: r.loader?.totalMs,
                    networkMs: r.network?.networkTotalMs,
                    finalizeWallMs: r.processing?.finalizeWallMs,
                    modifierMs: r.processing?.modifierMs,
                    cache: r.network?.cacheStatus ?? r.status
                }))), console.info("Tam JSON: await copyBootProfile() veya downloadBootProfile()", e), console.groupEnd();
        }
    }
    let Pe, vt, pe, fe, he, me, St, S, ne, _e, xe, B, A, x, T, Le, Ce, R, kt, At, Et, ge, Tt, Mt, G, _, be, k, M, I, Ie, Be, Rt, Pt, _t, ye, Oe, se, xt, we, Lt, ie, Ct, It, Bt, Ot, Dt, Wt, qt, De, Nt, Ft, Ut, Gt, ve, zt, z, $t, Vt, jt;
    Pe = 1;
    vt = 10080 * 60 * 1e3;
    pe = "query";
    fe = "manual";
    he = "proven-fallback";
    me = "capability";
    St = "safe-default";
    S = (t)=>t !== null && typeof t == "object" && !Array.isArray(t);
    ne = (t)=>typeof t != "string" ? "" : t.trim().toLowerCase().replace(/\s+/g, " ");
    _e = (t)=>{
        const e = ne(t);
        return Xe.includes(e) ? e : null;
    };
    xe = (t)=>{
        const e = ne(t);
        return He.includes(e) ? e : null;
    };
    B = (t)=>typeof t == "boolean" ? t : null;
    A = (...t)=>t.find((e)=>e != null);
    x = (...t)=>{
        for (const e of t){
            const r = ne(e);
            if (r) return r;
        }
        return "";
    };
    T = (t)=>{
        if (!S(t) && !Array.isArray(t)) return t;
        for (const e of Object.values(t))T(e);
        return Object.freeze(t);
    };
    Le = (t)=>{
        if (!S(t)) return null;
        const e = S(t.capabilities) ? t.capabilities : t, r = S(e.device) ? e.device : {}, n = S(e.webgpu) ? e.webgpu : {}, s = S(e.adapter) ? e.adapter : S(e.webgpuAdapter) ? e.webgpuAdapter : S(n.adapter) ? n.adapter : {}, i = S(e.webgl) ? e.webgl : {}, o = x(e.platform, e.operatingSystem, e.os, r.platform), l = x(e.userAgent, r.userAgent), u = x(e.gpuVendor, s.vendor, e.vendor), d = x(e.gpuArchitecture, s.architecture, e.architecture), p = x(e.gpuDevice, s.device, e.deviceName), a = x(e.gpuDescription, s.description, e.description), c = x(e.webglVendor, i.unmaskedVendor, i.vendor), h = x(e.webglRenderer, i.unmaskedRenderer, i.renderer), y = B(A(e.isMobile, e.mobile, r.isMobile, r.mobile)), b = B(A(e.isIPad, e.ipad, r.isIPad, r.ipad, r.iPadDesktopMode)), g = B(A(e.isMac, e.mac, r.isMac, r.mac)), f = B(A(e.isFallbackAdapter, s.isFallbackAdapter)), m = B(A(e.isSoftwareRenderer, e.softwareRenderer)), w = B(A(e.webgpuSupported, n.supported));
        return !(o || l || u || d || p || a || c || h || y !== null || b !== null || g !== null || f !== null || m !== null || w !== null) ? null : {
            platform: o,
            userAgent: l,
            gpuVendor: u,
            gpuArchitecture: d,
            gpuDevice: p,
            gpuDescription: a,
            webglVendor: c,
            webglRenderer: h,
            isMobile: y,
            isIPad: b,
            isMac: g,
            isFallbackAdapter: f,
            isSoftwareRenderer: m,
            webgpuSupported: w
        };
    };
    Ce = (t)=>{
        const e = Le(t);
        if (!e) return null;
        const r = [
            e.platform,
            e.gpuVendor,
            e.gpuArchitecture,
            e.gpuDevice,
            e.gpuDescription,
            e.webglVendor,
            e.webglRenderer,
            e.isMobile,
            e.isIPad,
            e.isMac,
            e.isFallbackAdapter,
            e.isSoftwareRenderer,
            e.webgpuSupported
        ];
        return `startup-performance-v${Pe}:${JSON.stringify(r)}`;
    };
    R = (t, e, r)=>({
            tier: t,
            quality: e,
            backend: r
        });
    kt = (t)=>{
        const e = Le(t);
        if (!e) return null;
        const r = `${e.platform} ${e.userAgent}`, n = [
            e.gpuVendor,
            e.gpuArchitecture,
            e.gpuDevice,
            e.gpuDescription,
            e.webglVendor,
            e.webglRenderer
        ].join(" "), s = e.isIPad === !0 || /\bipad\b/.test(r), i = e.isMobile === !0 || /\b(?:android|iphone|ipod|mobile)\b/.test(r), o = e.isMac === !0 || /(?:mac|darwin)/.test(r), l = e.isSoftwareRenderer === !0 || /\b(?:swiftshader|llvmpipe|softpipe|lavapipe|software renderer|microsoft basic render|mesa offscreen)\b/.test(n), u = e.isFallbackAdapter === !0, d = /\bintel\b/.test(n), p = /\buhd(?: graphics)?\s*630\b/.test(n), a = d && (/\bhd(?: graphics)?\s*(?:[2345]\d{2,3}|3000|4000|4400|4600|5000|5100|5200|5300|5500|6000)\b/.test(n) || /\buhd(?: graphics)?\s*6(?:00|05|10|15|20|30)\b/.test(n)), c = /\b(?:geforce\s*)?gtx\s*1650\b|\bgeforce\s*1650\b/.test(n), h = /\bturing\b/.test(n), y = /\b(?:nvidia|geforce|quadro|rtx|gtx)\b/.test(n), b = /\b(?:amd|radeon|ati)\b/.test(n), g = /\bapple\b/.test(n) || /\bapple\s*m\d+(?:\s*(?:pro|max|ultra))?\b/.test(n);
        return i || s ? T(R("mobile", O, P)) : l || u ? T(R("software-or-fallback", O, P)) : p || a ? T(R("legacy-intel", O, P)) : c ? T(R("gtx-1650", O, P)) : h ? T(R("turing", C, P)) : y || b ? T(R("nvidia-or-amd", C, P)) : o && g && e.webgpuSupported === !0 ? T(R("apple-webgpu", C, q)) : T(o && (d || !g) ? R("conservative-mac", O, P) : R("unknown-desktop", C, P));
    };
    At = (t, e)=>(typeof t == "string" ? t.trim() : "") || Ce(e);
    Et = ({ provenFallback: t, fingerprint: e, nowMs: r, ttlMs: n })=>{
        const s = {
            valid: !1,
            status: "not-provided",
            ageMs: null,
            ttlMs: n,
            quality: null,
            backend: null
        };
        if (!S(t)) return s;
        const i = typeof t.fingerprint == "string" ? t.fingerprint.trim() : "";
        if (!e || !i) return {
            ...s,
            status: "invalid-fingerprint"
        };
        if (i !== e) return {
            ...s,
            status: "fingerprint-mismatch"
        };
        const o = Number(A(t.recordedAtMs, t.createdAtMs, t.createdAt));
        if (!Number.isFinite(r) || !Number.isFinite(o) || o < 0) return {
            ...s,
            status: "invalid-timestamp"
        };
        const l = r - o;
        if (l < 0) return {
            ...s,
            status: "future-record",
            ageMs: l
        };
        if (l > n) return {
            ...s,
            status: "expired",
            ageMs: l
        };
        const u = _e(A(t.renderQuality, t.quality)), d = xe(t.backend), p = [
            C,
            O
        ].includes(u) ? u : null;
        return !p && !d ? {
            ...s,
            status: "invalid-policy",
            ageMs: l
        } : {
            valid: !0,
            status: "valid",
            ageMs: l,
            ttlMs: n,
            quality: p,
            backend: d
        };
    };
    ge = (t, e)=>{
        for (const [r, n] of t)if (r != null) return {
            value: r,
            source: n
        };
        return {
            value: e,
            source: St
        };
    };
    Tt = (t = {})=>{
        const e = S(t) ? t : {}, r = S(e.manual) ? e.manual : {}, n = typeof e.search == "string" ? e.search : "", s = Ve(n), i = je(n), o = _e(A(e.manualQuality, e.renderQuality, r.renderQuality, r.quality)), l = xe(A(e.manualBackend, e.backend, r.backend)), u = S(e.capabilities) ? e.capabilities : null, d = kt(u), p = At(A(e.currentFingerprint, e.fingerprint), u), a = Number(e.provenFallbackTtlMs), c = Number.isFinite(a) && a > 0 ? a : vt, h = Et({
            provenFallback: e.provenFallback,
            fingerprint: p,
            nowMs: Number(A(e.nowMs, e.now)),
            ttlMs: c
        }), y = l === q ? d?.backend === q ? l : null : l, b = h.valid ? h.backend === q ? d?.backend === q ? h.backend : null : h.backend : null, g = ge([
            [
                s,
                pe
            ],
            [
                o,
                fe
            ],
            [
                h.valid ? h.quality : null,
                he
            ],
            [
                d?.quality,
                me
            ]
        ], C), f = ge([
            [
                i,
                pe
            ],
            [
                y,
                fe
            ],
            [
                b,
                he
            ],
            [
                d?.backend,
                me
            ]
        ], P);
        return T({
            version: Pe,
            quality: g.value,
            backend: f.value,
            sources: {
                quality: g.source,
                backend: f.source
            },
            query: {
                quality: s,
                backend: i
            },
            manual: {
                quality: o,
                backend: l,
                backendAccepted: y
            },
            fingerprint: p,
            provenFallback: h,
            capability: d ?? R("safe-default", C, P)
        });
    };
    Mt = Object.freeze([
        "vendor",
        "architecture",
        "device",
        "description",
        "subgroupMinSize",
        "subgroupMaxSize"
    ]);
    G = Object.freeze({
        powerPreference: "high-performance",
        featureLevel: "compatibility"
    });
    _ = (t, e, r = null)=>{
        try {
            const n = t?.[e];
            return n === void 0 ? r : n;
        } catch  {
            return r;
        }
    };
    be = (t, e)=>{
        const r = _(t, e);
        return typeof r == "string" ? r : null;
    };
    k = (t, e)=>{
        const r = _(t, e);
        return typeof r == "number" && Number.isFinite(r) ? r : null;
    };
    M = (t)=>t == null ? null : typeof t == "string" ? {
            name: "Error",
            message: t
        } : {
            name: be(t, "name") ?? "Error",
            message: be(t, "message") ?? "Unknown renderer diagnostic error"
        };
    I = (t, { maxDepth: e = 6 } = {})=>{
        const r = new WeakSet, n = (s, i)=>{
            if (s === null || s === void 0 || typeof s == "function") return null;
            if (typeof s == "string" || typeof s == "boolean") return s;
            if (typeof s == "number") return Number.isFinite(s) ? s : null;
            if (typeof s == "bigint" || typeof s == "symbol") return s.toString();
            if (s instanceof Error) return M(s);
            if (i >= e) return "[MaxDepth]";
            if (r.has(s)) return "[Circular]";
            if (r.add(s), Array.isArray(s)) return s.map((u)=>n(u, i + 1));
            if (ArrayBuffer.isView(s) && !(s instanceof DataView)) return Array.from(s, (u)=>n(u, i + 1));
            let o;
            try {
                o = Object.keys(s);
            } catch (u) {
                return M(u);
            }
            const l = {};
            for (const u of o)try {
                l[u] = n(s[u], i + 1);
            } catch (d) {
                l[u] = M(d);
            }
            return l;
        };
        return n(t, 0);
    };
    Ie = (t)=>{
        if (typeof t != "string") return null;
        const e = t.trim().toLowerCase();
        return e === "webgpu" || e === "gpu" ? "webgpu" : e === "webgl" || e === "webgl2" || e === "gl" ? "webgl" : e === "auto" ? "auto" : null;
    };
    Be = (t = globalThis.location)=>{
        if (!t) return !1;
        const e = typeof t.hash == "string" ? t.hash : "";
        if (/fps/i.test(e)) return !0;
        const r = typeof t.search == "string" ? t.search : "";
        try {
            return new URLSearchParams(r).has("fps");
        } catch  {
            return /(?:^|[?&])fps(?:=|&|$)/i.test(r);
        }
    };
    Rt = (t, e)=>t?.backend?.isWebGPUBackend === !0 ? "webgpu" : t?.backend?.isWebGLBackend === !0 || t?.isWebGLRenderer === !0 || typeof e?.getParameter == "function" ? "webgl" : null;
    Pt = (t, e)=>{
        const r = Ie(e);
        if (r) return r;
        const n = _(t?.backend?.parameters, "forceWebGL");
        return n === !0 ? "webgl" : n === !1 ? "webgpu" : t?.isWebGLRenderer === !0 ? "webgl" : t?.isWebGPURenderer === !0 ? "webgpu" : null;
    };
    _t = ()=>({
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            set (t, e) {
                return this.x = t, this.y = e, this.width = t, this.height = e, this;
            }
        });
    ye = (t)=>{
        const e = k(t, "width") ?? k(t, "x"), r = k(t, "height") ?? k(t, "y");
        return {
            width: e,
            height: r
        };
    };
    Oe = ({ renderer: t = null, context: e = null, canvas: r = null } = {})=>{
        if (typeof t?.getDrawingBufferSize == "function") try {
            return ye(t.getDrawingBufferSize(_t()));
        } catch  {}
        const n = {
            width: k(e, "drawingBufferWidth"),
            height: k(e, "drawingBufferHeight")
        };
        return n.width !== null || n.height !== null ? n : ye(r);
    };
    se = (t)=>{
        if (typeof t?.getParameter != "function") return null;
        const e = {
            unmaskedVendor: null,
            unmaskedRenderer: null,
            contextAttributes: null,
            errors: []
        };
        try {
            e.contextAttributes = typeof t.getContextAttributes == "function" ? I(t.getContextAttributes()) : null;
        } catch (r) {
            e.errors.push({
                field: "contextAttributes",
                error: M(r)
            });
        }
        try {
            const r = typeof t.getExtension == "function" ? t.getExtension("WEBGL_debug_renderer_info") : null;
            r && (e.unmaskedVendor = I(t.getParameter(r.UNMASKED_VENDOR_WEBGL)), e.unmaskedRenderer = I(t.getParameter(r.UNMASKED_RENDERER_WEBGL)));
        } catch (r) {
            e.errors.push({
                field: "unmaskedRenderer",
                error: M(r)
            });
        }
        return e;
    };
    xt = (t, e, r)=>{
        if (e) return e;
        if (typeof t?.getContext != "function") return null;
        try {
            return t.getContext();
        } catch (n) {
            return r.push({
                field: "context",
                error: M(n)
            }), null;
        }
    };
    we = (t, e, r, n)=>{
        try {
            return typeof t?.[e] == "function" ? t[e]() : _(t, r);
        } catch (s) {
            return n.push({
                field: r,
                error: M(s)
            }), null;
        }
    };
    Lt = ({ renderer: t = null, scenePass: e = null, requestedBackend: r = null, powerPreference: n = null, canvas: s = t?.domElement ?? null, context: i = null } = {})=>{
        const o = [], l = xt(t, i, o), u = Rt(t, l), d = t?.backend?.parameters, p = n ?? _(d, "powerPreference") ?? null, a = {
            backend: {
                requested: Pt(t, r),
                effective: u,
                powerPreference: typeof p == "string" ? p : null,
                compatibilityMode: typeof t?.backend?.compatibilityMode == "boolean" ? t.backend.compatibilityMode : null
            },
            antialiasing: {
                rendererSamples: k(t, "samples"),
                currentSamples: k(t, "currentSamples"),
                scenePassSamples: k(e?.renderTarget, "samples")
            },
            buffers: {
                pixelRatio: we(t, "getPixelRatio", "_pixelRatio", o),
                canvas: {
                    width: k(s, "width"),
                    height: k(s, "height"),
                    clientWidth: k(s, "clientWidth"),
                    clientHeight: k(s, "clientHeight")
                },
                drawingBuffer: Oe({
                    renderer: t,
                    context: l,
                    canvas: s
                }),
                outputBufferType: we(t, "getOutputBufferType", "_outputBufferType", o),
                scenePassTextureType: _(e?.renderTarget?.texture, "type")
            },
            webgl: u === "webgl" ? se(l) : null,
            errors: o
        };
        return I(a);
    };
    ie = (t, e = null)=>{
        if (!t && !e) return null;
        const r = {};
        for (const s of Mt)r[s] = I(_(t, s));
        const n = _(e, "isFallbackAdapter");
        return r.isFallbackAdapter = typeof n == "boolean" ? n : null, r;
    };
    Ct = async ({ fpsMode: t = Be(), navigatorObject: e = globalThis.navigator } = {})=>{
        const r = {
            attempted: t === !0,
            supported: typeof e?.gpu?.requestAdapter == "function",
            requestOptions: {
                ...G
            },
            infoSource: null,
            adapter: null,
            error: null
        };
        if (!r.attempted) return r;
        if (!r.supported) return r.error = {
            name: "NotSupportedError",
            message: "navigator.gpu.requestAdapter is unavailable"
        }, r;
        try {
            const n = await e.gpu.requestAdapter({
                ...G
            });
            if (!n) return r.error = {
                name: "NotFoundError",
                message: "No WebGPU adapter was returned"
            }, r;
            let s = _(n, "info");
            s != null ? r.infoSource = "adapter.info" : typeof n.requestAdapterInfo == "function" && (s = await n.requestAdapterInfo(), r.infoSource = "requestAdapterInfo"), r.adapter = ie(s, n);
        } catch (n) {
            r.adapter = null, r.error = M(n);
        }
        return I(r);
    };
    Mr = Object.freeze(Object.defineProperty({
        __proto__: null,
        WEBGPU_DIAGNOSTIC_ADAPTER_OPTIONS: G,
        collectRendererDiagnostics: Lt,
        collectWebGpuAdapterDiagnostics: Ct,
        isFpsDiagnosticsMode: Be,
        normalizeGpuAdapterInfo: ie,
        normalizeRendererBackend: Ie,
        readDrawingBufferSize: Oe,
        readWebGlContextDiagnostics: se,
        serializeDiagnosticError: M,
        toDiagnosticJsonValue: I
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    It = 650;
    Bt = (t)=>({
            status: "timeout",
            supported: !0,
            timeoutMs: t,
            adapter: null,
            infoSource: null,
            error: null
        });
    Ot = async (t, e, { setTimeoutFunction: r = globalThis.setTimeout, clearTimeoutFunction: n = globalThis.clearTimeout } = {})=>{
        if (!Number.isFinite(e) || e <= 0 || typeof r != "function") return t;
        let s = null;
        const i = new Promise((o)=>{
            s = r(()=>o(Bt(e)), e);
        });
        try {
            return await Promise.race([
                t,
                i
            ]);
        } finally{
            s !== null && typeof n == "function" && n(s);
        }
    };
    Dt = (t = globalThis.navigator)=>{
        const e = typeof t?.userAgent == "string" ? t.userAgent : "", r = typeof t?.platform == "string" ? t.platform : "", n = Number.isFinite(t?.maxTouchPoints) ? t.maxTouchPoints : 0, s = /Mac/i.test(r) && n > 1, i = s || /Mobi|Android|iPhone|iPad|iPod/i.test(e), o = /Mac/i.test(r) || /Macintosh|Mac OS X/i.test(e);
        return Object.freeze({
            mobile: i,
            iPadDesktopMode: s,
            mac: o,
            platform: r,
            userAgent: e,
            maxTouchPoints: n
        });
    };
    Wt = async ({ navigatorObject: t = globalThis.navigator, timeoutMs: e = It, setTimeoutFunction: r = globalThis.setTimeout, clearTimeoutFunction: n = globalThis.clearTimeout } = {})=>{
        const s = t?.gpu?.requestAdapter;
        if (typeof s != "function") return Object.freeze({
            status: "unsupported",
            supported: !1,
            timeoutMs: e,
            adapter: null,
            infoSource: null,
            error: null
        });
        const i = (async ()=>{
            try {
                const o = await s.call(t.gpu, {
                    ...G
                });
                if (!o) return {
                    status: "unavailable",
                    supported: !0,
                    timeoutMs: e,
                    adapter: null,
                    infoSource: null,
                    error: null
                };
                let l = o.info, u = l ? "adapter.info" : null;
                return !l && typeof o.requestAdapterInfo == "function" && (l = await o.requestAdapterInfo(), u = "requestAdapterInfo"), {
                    status: "available",
                    supported: !0,
                    timeoutMs: e,
                    adapter: ie(l, o),
                    infoSource: u,
                    error: null
                };
            } catch (o) {
                return {
                    status: "error",
                    supported: !0,
                    timeoutMs: e,
                    adapter: null,
                    infoSource: null,
                    error: M(o)
                };
            }
        })();
        return Object.freeze(await Ot(i, e, {
            setTimeoutFunction: r,
            clearTimeoutFunction: n
        }));
    };
    qt = (t)=>{
        try {
            t?.getExtension?.("WEBGL_lose_context")?.loseContext?.();
        } catch  {}
    };
    De = ({ documentObject: t = globalThis.document } = {})=>{
        if (typeof t?.createElement != "function") return Object.freeze({
            status: "unsupported",
            supported: !1,
            vendor: null,
            renderer: null,
            contextAttributes: null,
            error: null
        });
        let e = null;
        try {
            if (e = t.createElement("canvas")?.getContext?.("webgl2", {
                alpha: !1,
                depth: !1,
                stencil: !1,
                antialias: !1,
                powerPreference: "high-performance",
                failIfMajorPerformanceCaveat: !1
            }) ?? null, !e) return Object.freeze({
                status: "unavailable",
                supported: !1,
                vendor: null,
                renderer: null,
                contextAttributes: null,
                error: null
            });
            const n = se(e);
            return Object.freeze({
                status: "available",
                supported: !0,
                vendor: n?.unmaskedVendor ?? null,
                renderer: n?.unmaskedRenderer ?? null,
                contextAttributes: n?.contextAttributes ?? null,
                error: n?.errors?.length ? n.errors : null
            });
        } catch (r) {
            return Object.freeze({
                status: "error",
                supported: !1,
                vendor: null,
                renderer: null,
                contextAttributes: null,
                error: M(r)
            });
        } finally{
            qt(e);
        }
    };
    Nt = async (t = {})=>{
        const e = t.navigatorObject ?? globalThis.navigator, r = Dt(e), [n, s] = await Promise.all([
            Wt(t),
            Promise.resolve(De(t))
        ]);
        return Object.freeze({
            version: 1,
            device: r,
            webgpu: n,
            webgl: s
        });
    };
    Ft = ()=>{
        try {
            return globalThis.localStorage;
        } catch  {
            return null;
        }
    };
    Ut = ()=>{
        try {
            return globalThis.sessionStorage;
        } catch  {
            return null;
        }
    };
    Gt = (t)=>{
        const e = t?.device ?? {}, r = t?.webgpu ?? {}, n = t?.webgl ?? {};
        return Object.freeze({
            platform: e.platform ?? "",
            userAgent: e.userAgent ?? "",
            isMobile: e.mobile === !0,
            isIPad: e.iPadDesktopMode === !0,
            isMac: e.mac === !0,
            adapter: r.adapter ?? null,
            webgpu: Object.freeze({
                supported: r.status === "available",
                status: r.status ?? "unknown"
            }),
            webgl: Object.freeze({
                unmaskedVendor: n.vendor ?? null,
                unmaskedRenderer: n.renderer ?? null,
                status: n.status ?? "unknown"
            })
        });
    };
    ve = ({ search: t, state: e, capabilities: r, fingerprint: n, now: s })=>Tt({
            search: t,
            manual: {
                renderQuality: e.manualQuality,
                backend: e.manualBackend
            },
            provenFallback: e.provenFallback,
            capabilities: r,
            currentFingerprint: n,
            nowMs: s,
            provenFallbackTtlMs: Ke
        });
    zt = (t)=>[
            "query",
            "manual"
        ].includes(t?.sources?.quality) && (t?.sources?.backend === "query" || t?.sources?.backend === "manual" && t?.backend === "webgl");
    z = (t)=>typeof t == "string" ? t.trim().toLowerCase().replace(/\s+/g, " ") : "";
    $t = (t)=>{
        const e = t?.webgl ?? {}, r = z(e.unmaskedVendor ?? e.vendor ?? t?.webglVendor), n = z(e.unmaskedRenderer ?? e.renderer ?? t?.webglRenderer);
        return r || n ? `${r}|${n}` : null;
    };
    Vt = (t)=>{
        if (t?.status !== "available") return null;
        const e = z(t.vendor), r = z(t.renderer);
        return e || r ? `${e}|${r}` : null;
    };
    jt = async ({ search: t = globalThis.location?.search ?? "", storage: e = Ft(), sessionStorage: r = Ut(), now: n = Date.now(), probe: s = Nt, webglProbe: i = De } = {})=>{
        const o = j({
            storage: e,
            now: n
        }), l = o.capability?.capabilities ?? null, u = o.capability?.fingerprint ?? null, d = u ? j({
            storage: e,
            now: n,
            fingerprint: u
        }) : o, p = ve({
            search: t,
            state: d,
            capabilities: l,
            fingerprint: u,
            now: n
        });
        if (zt(p) || typeof s != "function") return X(p, {
            storage: r
        });
        if (l) {
            let b = null;
            try {
                b = typeof i == "function" ? await i() : null;
            } catch  {}
            const g = $t(l), f = Vt(b);
            if (!f || f === g) return X(p, {
                storage: r
            });
        }
        let a = null;
        try {
            a = await s();
        } catch  {}
        const c = a ? Gt(a) : null, h = Ce(c);
        c && h && Ye(c, h, {
            storage: e,
            now: n
        });
        const y = j({
            storage: e,
            now: n,
            fingerprint: h
        });
        return X(ve({
            search: t,
            state: y,
            capabilities: c,
            fingerprint: h,
            now: n
        }), {
            storage: r
        });
    };
    var Xt = ()=>{
        window.va || (window.va = function(...e) {
            window.vaq || (window.vaq = []), window.vaq.push(e);
        });
    }, Ht = "@vercel/analytics", Yt = "2.0.1";
    function ae() {
        return typeof window < "u";
    }
    function We() {
        try {
            const t = "production";
        } catch  {}
        return "production";
    }
    function Kt(t = "auto") {
        if (t === "auto") {
            window.vam = We();
            return;
        }
        window.vam = t;
    }
    function qe() {
        return (ae() ? window.vam : We()) || "production";
    }
    function Se() {
        return qe() === "production";
    }
    function V() {
        return qe() === "development";
    }
    function Qt(t, { [t]: e, ...r }) {
        return r;
    }
    function Zt(t, e) {
        if (!t) return;
        let r = t;
        const n = [];
        for (const [s, i] of Object.entries(t))typeof i == "object" && i !== null && (e.strip ? r = Qt(s, r) : n.push(s));
        if (n.length > 0 && !e.strip) throw Error(`The following properties are not valid: ${n.join(", ")}. Only strings, numbers, booleans, and null are allowed.`);
        return r;
    }
    function Jt(t) {
        return t.scriptSrc ? D(t.scriptSrc) : V() ? "https://va.vercel-scripts.com/v1/script.debug.js" : t.basePath ? D(`${t.basePath}/insights/script.js`) : "/_vercel/insights/script.js";
    }
    function er(t, e) {
        var r;
        let n = t;
        if (e) try {
            n = {
                ...(r = JSON.parse(e)) == null ? void 0 : r.analytics,
                ...t
            };
        } catch  {}
        Kt(n.mode);
        const s = {
            sdkn: Ht + (n.framework ? `/${n.framework}` : ""),
            sdkv: Yt
        };
        return n.disableAutoTrack && (s.disableAutoTrack = "1"), n.viewEndpoint && (s.viewEndpoint = D(n.viewEndpoint)), n.eventEndpoint && (s.eventEndpoint = D(n.eventEndpoint)), n.sessionEndpoint && (s.sessionEndpoint = D(n.sessionEndpoint)), V() && n.debug === !1 && (s.debug = "false"), n.dsn && (s.dsn = n.dsn), n.endpoint ? s.endpoint = n.endpoint : n.basePath && (s.endpoint = D(`${n.basePath}/insights`)), {
            beforeSend: n.beforeSend,
            src: Jt(n),
            dataset: s
        };
    }
    function D(t) {
        return t.startsWith("http://") || t.startsWith("https://") || t.startsWith("/") ? t : `/${t}`;
    }
    function tr(t = {
        debug: !0
    }, e) {
        var r;
        if (!ae()) return;
        const { beforeSend: n, src: s, dataset: i } = er(t, e);
        if (Xt(), n && ((r = window.va) == null || r.call(window, "beforeSend", n)), document.head.querySelector(`script[src*="${s}"]`)) return;
        const o = document.createElement("script");
        o.src = s;
        for (const [l, u] of Object.entries(i))o.dataset[l] = u;
        o.defer = !0, o.onerror = ()=>{
            const l = V() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
            console.log(`[Vercel Web Analytics] Failed to load script from ${s}. ${l}`);
        }, document.head.appendChild(o);
    }
    function rr(t, e, r) {
        var n, s;
        if (!ae()) {
            const i = "[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";
            if (Se()) console.warn(i);
            else throw new Error(i);
            return;
        }
        if (!e) {
            (n = window.va) == null || n.call(window, "event", {
                name: t,
                options: r
            });
            return;
        }
        try {
            const i = Zt(e, {
                strip: Se()
            });
            (s = window.va) == null || s.call(window, "event", {
                name: t,
                data: i,
                options: r
            });
        } catch (i) {
            i instanceof Error && V() && console.error(i);
        }
    }
    var nr = ()=>{
        window.si || (window.si = function(...e) {
            window.siq = window.siq || [], window.siq.push(e);
        });
    }, sr = "@vercel/speed-insights", ir = "2.0.0";
    function ar() {
        return typeof window < "u";
    }
    function or() {
        try {
            const t = "production";
        } catch  {}
        return "production";
    }
    function Ne() {
        return or() === "development";
    }
    function lr(t) {
        return t.scriptSrc ? $(t.scriptSrc) : Ne() ? "https://va.vercel-scripts.com/v1/speed-insights/script.debug.js" : t.dsn ? "https://va.vercel-scripts.com/v1/speed-insights/script.js" : t.basePath ? $(`${t.basePath}/speed-insights/script.js`) : "/_vercel/speed-insights/script.js";
    }
    function cr(t, e) {
        var r;
        let n = t;
        if (e) try {
            n = {
                ...(r = JSON.parse(e)) == null ? void 0 : r.speedInsights,
                ...t
            };
        } catch  {}
        const s = {
            sdkn: sr + (n.framework ? `/${n.framework}` : ""),
            sdkv: ir
        };
        return n.sampleRate && (s.sampleRate = n.sampleRate.toString()), n.route && (s.route = n.route), Ne() && n.debug === !1 && (s.debug = "false"), n.dsn && (s.dsn = n.dsn), n.endpoint ? s.endpoint = $(n.endpoint) : n.basePath && (s.endpoint = $(`${n.basePath}/speed-insights/vitals`)), {
            src: lr(n),
            beforeSend: n.beforeSend,
            dataset: s
        };
    }
    function $(t) {
        return t.startsWith("http://") || t.startsWith("https://") || t.startsWith("/") ? t : `/${t}`;
    }
    function ur(t = {}, e) {
        var r;
        if (!ar() || t.route === null) return null;
        nr();
        const { beforeSend: n, src: s, dataset: i } = cr(t, e);
        if (document.head.querySelector(`script[src*="${s}"]`)) return null;
        n && ((r = window.si) == null || r.call(window, "beforeSend", n));
        const o = document.createElement("script");
        o.src = s, o.defer = !0;
        for (const [l, u] of Object.entries(i))o.dataset[l] = u;
        return o.onerror = ()=>{
            console.log(`[Vercel Speed Insights] Failed to load script from ${s}. Please check if any content blockers are enabled and try again.`);
        }, document.head.appendChild(o), {
            setRoute: (l)=>{
                o.dataset.route = l ?? void 0;
            }
        };
    }
    const dr = {}, Fe = "", pr = 15e3, fr = 3e4, hr = (t)=>Math.round(t / 1e6 * 100) / 100, K = ({ performanceObject: t = globalThis.performance } = {})=>{
        const e = [
            ...t?.getEntriesByType?.("navigation") || [],
            ...t?.getEntriesByType?.("resource") || []
        ];
        let r = 0, n = 0, s = 0;
        for (const i of e){
            const o = Number(i?.transferSize), l = Number(i?.encodedBodySize), u = Number(i?.decodedBodySize), d = l > 0 || u > 0;
            !(o > 0) && !d || (n++, o > 0 ? r += o : s++);
        }
        return {
            transferBytes: r,
            measuredEntries: n,
            cachedEntries: s
        };
    }, mr = (t, e)=>({
            transferBytes: Math.max(0, t.transferBytes - e.transferBytes),
            measuredEntries: Math.max(0, t.measuredEntries - e.measuredEntries),
            cachedEntries: Math.max(0, t.cachedEntries - e.cachedEntries)
        }), ke = (t, e, r)=>e.measuredEntries === 0 ? !1 : (r(t, {
            megabytes: hr(e.transferBytes),
            cache_percent: Math.round(e.cachedEntries / e.measuredEntries * 100)
        }), !0), gr = ({ performanceObject: t = globalThis.performance, trackEvent: e = rr, setTimeoutFunction: r = globalThis.setTimeout, clearTimeoutFunction: n = globalThis.clearTimeout, loginDelayMs: s = pr, worldDelayMs: i = fr } = {})=>{
        let o = !1, l = !1, u = null;
        const d = ()=>o ? !1 : (o = ke("Robinhood login transfer", K({
                performanceObject: t
            }), e), o), p = r(d, s);
        return {
            markWorldStarted: ()=>{
                l || (l = !0, n(p), d(), u = K({
                    performanceObject: t
                }), r(()=>{
                    const c = K({
                        performanceObject: t
                    });
                    ke("Robinhood world 30s transfer", mr(c, u), e);
                }, i));
            },
            trackLogin: d
        };
    }, br = (t)=>{
        const e = String(t || "").trim();
        return /^G-[A-Z0-9]+$/i.test(e) ? e.toUpperCase() : null;
    }, yr = ({ tag: t = Fe, windowObject: e = globalThis.window, documentObject: r = globalThis.document } = {})=>{
        const n = br(t);
        if (!n || !e || !r?.head) return !1;
        const s = `script[data-robinhood-google-analytics="${n}"]`;
        if (r.head.querySelector(s)) return !0;
        e.dataLayer = e.dataLayer || [], e.gtag = e.gtag || function() {
            e.dataLayer.push(arguments);
        }, e.gtag("js", new Date), e.gtag("config", n);
        const i = r.createElement("script");
        return i.async = !0, i.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(n)}`, i.dataset.robinhoodGoogleAnalytics = n, r.head.appendChild(i), !0;
    }, wr = ({ production: t = !0, googleAnalyticsTag: e = dr?.VITE_ANALYTICS_TAG || Fe, injectVercelAnalytics: r = tr, injectVercelSpeedInsights: n = ur, createTelemetry: s = gr, windowObject: i = globalThis.window, documentObject: o = globalThis.document } = {})=>{
        if (!t || !i || !o) return {
            google: !1,
            vercel: !1,
            speedInsights: !1,
            markWorldStarted: ()=>{}
        };
        r({
            mode: "production"
        }), n({
            sampleRate: 1
        });
        const l = s({
            performanceObject: i.performance,
            setTimeoutFunction: i.setTimeout.bind(i),
            clearTimeoutFunction: i.clearTimeout.bind(i)
        });
        return {
            google: yr({
                tag: e,
                windowObject: i,
                documentObject: o
            }),
            vercel: !0,
            speedInsights: !0,
            markWorldStarted: l.markWorldStarted
        };
    };
    document.documentElement.classList.toggle("is-development-build", !1);
    new Qe;
    const vr = wr();
    new yt;
    const E = new re, Sr = Ee(), kr = Ze();
    if (Sr) pt();
    else {
        let t = null, e = null;
        const r = E.beginSpan("entry:game-modules", {
            phase: "opening",
            kind: "module-preload"
        }), n = Promise.all([
            Q(()=>import("./Game-qR78S_4H.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }).then((c)=>c.bD), __vite__mapDeps([4,2,3,1,5]), import.meta.url),
            Q(()=>import("./DeveloperSceneRequest-BuuuPHP2.js"), [], import.meta.url)
        ]).then((c)=>(E.endSpan(r), c), (c)=>{
            throw E.endSpan(r, {
                status: "error",
                metadata: {
                    error: c
                }
            }), c;
        });
        n.catch(()=>{});
        const s = E.beginSpan("entry:startup-performance", {
            phase: "opening",
            kind: "capability-policy"
        }), i = jt().then((c)=>(E.endSpan(s, {
                metadata: {
                    quality: c.quality,
                    backend: c.backend,
                    sources: c.sources,
                    tier: c.capability?.tier
                }
            }), E.setRunMetadata({
                startupPerformancePolicy: c
            }), c), (c)=>{
            throw E.endSpan(s, {
                status: "error",
                metadata: {
                    error: c
                }
            }), c;
        });
        i.catch(()=>{});
        const l = W.getCurrentReferralSlug() ? Je(new URL(W.getCleanCurrentPath(), window.location.origin).href) : void 0;
        try {
            await W.captureCurrentPath();
        } catch (c) {
            console.warn("[referrals] Unable to capture referral link.", c);
        }
        const u = ()=>e || (W.clearCurrentPath(), e = (async ()=>{
                const [{ Game: c }, { getDeveloperSceneRequest: h }] = await n, y = await i;
                vr.markWorldStarted(), t?.destroy(), t = null, document.documentElement.classList.remove("is-x-login-preview", "is-x-login-preview-boot"), W.claimPending().catch((g)=>{
                    console.warn("[referrals] Unable to claim pending referral.", g);
                });
                const b = h();
                if (b) {
                    const g = b.split("-").map((f)=>f.charAt(0).toUpperCase() + f.slice(1)).join(" ");
                    document.documentElement.classList.add("is-dev-scene-loading"), document.documentElement.dataset.devScene = b, document.querySelector(".js-dev-scene-loader-title").textContent = g;
                }
                new c(E, y);
            })(), e);
        let d = null, p = null;
        const a = E.beginSpan("entry:auth-restore", {
            phase: "opening",
            kind: "auth"
        });
        try {
            d = await le.initialize(), E.endSpan(a);
        } catch (c) {
            p = c, E.endSpan(a, {
                status: "error",
                metadata: {
                    error: c
                }
            });
        }
        J(d) || kr ? await u() : t = ht({
            authSession: le,
            initialState: d,
            initialError: p,
            onAuthenticated: u,
            redirectTo: l
        });
    }
});
export { Mr as R, __tla };


// GreenVeil Interactive 3D World & Gamified Engine Integration
(function() {
  console.log('Booting GreenVeil Robinhood Chain Web World...');

  // Remove initial boot lock class
  document.documentElement.classList.remove('is-x-login-preview-boot');

  // Canvas 2D/3D Interactive World Renderer
  const canvas = document.querySelector('.js-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    // Spore / Star Particles
    const particles = [];
    for (let i = 0; i < 90; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 1,
        color: i % 3 === 0 ? '#BFFE00' : i % 2 === 0 ? '#4CD964' : '#2D5E3A',
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        alpha: Math.random() * 0.7 + 0.3
      });
    }

    // Interactive 3D Grid & Spore Animation
    let angle = 0;
    function renderWorld() {
      ctx.fillStyle = '#09140B';
      ctx.fillRect(0, 0, width, height);

      // Ambient radial forest glow
      const grad = ctx.createRadialGradient(width / 2, height / 2, 50, width / 2, height / 2, width * 0.7);
      grad.addColorStop(0, 'rgba(45, 94, 58, 0.35)');
      grad.addColorStop(0.5, 'rgba(15, 35, 20, 0.6)');
      grad.addColorStop(1, '#050A06');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Draw 3D Landscape Mesh Lines
      ctx.strokeStyle = 'rgba(76, 217, 100, 0.08)';
      ctx.lineWidth = 1;
      const horizon = height * 0.55;
      const fov = 300;

      angle += 0.005;

      for (let z = 50; z < 1000; z += 40) {
        const pz = z - (angle * 200) % 40;
        const scale = fov / (fov + pz);
        const y = horizon + 120 * scale;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw floating spores
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
      });

      requestAnimationFrame(renderWorld);
    }
    renderWorld();
  }

  // FPS Counter updates
  let frames = 0;
  let lastTime = performance.now();
  const fpsDisplay = document.querySelector('.js-fps-counter-value');

  function updateFPS() {
    frames++;
    const now = performance.now();
    if (now - lastTime >= 1000) {
      if (fpsDisplay) fpsDisplay.innerText = frames.toString();
      frames = 0;
      lastTime = now;
    }
    requestAnimationFrame(updateFPS);
  }
  updateFPS();

  // Modal & HUD Navigation Handlers
  function setupClick(selector, action) {
    const elem = document.querySelector(selector);
    if (elem) elem.addEventListener('click', action);
  }

  setupClick('.js-world-hud-profile', () => alert('GreenVeil Profile & Referrals\nRobinhood Chain Handle: @RobinHood_Hunter\nWallet: 0x71C7...976F (Connected)\nReferral Code: GREEN-VEIL-8812'));
  setupClick('.js-world-hud-leaderboard', () => alert('GreenVeil Tournament Leaderboard\n👑 #1 @RobinHood_Hunter - 48,290 PTS\n🥈 #2 @ChainRanger - 35,110 PTS\n🥉 #3 @VeloceRobin - 28,400 PTS'));
  setupClick('.js-world-catalog-trigger', () => alert('World Catalog Items:\n1. Forest Lantern [EQUIPPED]\n2. Classic Stone Steps [UNLOCKED]\n3. Training Crates [UNLOCKED]\n4. Robinhood Crest Armor [EQUIPPED]'));
  setupClick('.js-map-trigger', () => alert('GreenVeil World Map Teleport:\n📍 Tree of Life (Central Hub)\n📍 Archery Range\n📍 Goblin Siege Gates\n📍 Founder Square'));
  setupClick('.js-world-search-trigger', () => {
    const panel = document.getElementById('world-search-panel');
    if (panel) panel.classList.toggle('is-visible');
  });

  // Hotbar Equipment Selector
  document.querySelectorAll('.js-world-hud-slot').forEach(slot => {
    slot.addEventListener('click', () => {
      document.querySelectorAll('.js-world-hud-slot').forEach(s => {
        s.classList.remove('is-selected');
        s.setAttribute('aria-pressed', 'false');
      });
      slot.classList.add('is-selected');
      slot.setAttribute('aria-pressed', 'true');
    });
  });

  // Quality Toggle
  setupClick('.js-fps-quality-toggle', () => {
    const val = document.querySelector('.js-fps-quality-value');
    if (val) {
      val.innerText = val.innerText === 'HIGH' ? 'MEDIUM' : 'HIGH';
    }
  });

})();
