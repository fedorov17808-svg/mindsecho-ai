module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/src/app/api/agent/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$memory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/memory.ts [app-route] (ecmascript)");
;
;
const memory = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$memory$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LocalMemoryCore"]();
async function POST(req) {
    try {
        const body = await req.json();
        const { projectName, inputPrompt, toneOfVoice, targetAudience } = body;
        if (!projectName || !inputPrompt) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'projectName and inputPrompt are required'
            }, {
                status: 400
            });
        }
        const existingMemory = memory.getMemory(projectName);
        const updatedMemory = memory.updateMemory({
            projectName,
            toneOfVoice: toneOfVoice || existingMemory?.toneOfVoice,
            targetAudience: targetAudience || existingMemory?.targetAudience,
            keyInsights: [
                inputPrompt
            ]
        });
        const pitchDeckSlides = [
            {
                slideNumber: 1,
                title: "Title & Vision",
                content: `• Product: ${projectName}\n• Positioning: ${inputPrompt}\n• Target: ${updatedMemory.targetAudience}`
            },
            {
                slideNumber: 2,
                title: "Value Proposition & Long-Term Memory",
                content: `• Problem: Creators waste 70% of time re-contextualizing ideas.\n• Solution: MindsEcho AI maintains persistent memory graph for ${projectName}.\n• Tone: ${updatedMemory.toneOfVoice}`
            },
            {
                slideNumber: 3,
                title: "Animoca Brands & SANDchain Ecosystem Fit",
                content: `• Multi-platform distribution (Twitter, Telegram, Pitch Decks).\n• Automated Creator Economy asset generation.\n• Continuous context loop through Stored Insights.`
            }
        ];
        const twitterThread = [
            `1/ 🚀 Introducing ${projectName} — powered by @MindsEcho_AI!\n\n${inputPrompt}`,
            `2/ Why long-term memory matters for creators? Instead of prompting from scratch, MindsEcho remembers our tone (${updatedMemory.toneOfVoice}) and project context natively.`,
            `3/ Built for the @AnimocaBrands & @TheSandboxGame ecosystem. Building the future of creator automation! 🌐✨`
        ];
        const telegramPost = `🔥 **[NEW PROJECT ANNOUNCEMENT] ${projectName}** 🔥\n\n${inputPrompt}\n\n🎯 **Audience:** ${updatedMemory.targetAudience}\n💡 **Memory Context:** Integrated with MindsEcho AI Long-Term Memory Graph.`;
        const outputs = [
            {
                platform: 'Interactive Pitch Deck (3 Slides)',
                type: 'slides',
                content: pitchDeckSlides
            },
            {
                platform: 'X / Twitter Thread',
                type: 'thread',
                content: twitterThread
            },
            {
                platform: 'Telegram Channel Announcement',
                type: 'text',
                content: telegramPost
            }
        ];
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            memory: updatedMemory,
            outputs
        });
    } catch (err) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: err.message || 'Internal Error'
        }, {
            status: 500
        });
    }
}
}),
"[project]/src/lib/memory.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocalMemoryCore",
    ()=>LocalMemoryCore
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const MEMORY_FILE = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'agent_memory.json');
class LocalMemoryCore {
    getStore() {
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(MEMORY_FILE)) return {};
        try {
            return JSON.parse(__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(MEMORY_FILE, 'utf-8'));
        } catch  {
            return {};
        }
    }
    saveStore(store) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(MEMORY_FILE, JSON.stringify(store, null, 2), 'utf-8');
    }
    getMemory(projectName) {
        return this.getStore()[projectName.toLowerCase()] || null;
    }
    updateMemory(entry) {
        const store = this.getStore();
        const key = entry.projectName.toLowerCase();
        const existing = store[key] || {
            id: Math.random().toString(36).substring(2, 9),
            projectName: entry.projectName,
            toneOfVoice: 'Professional, Engaging, Tech-savvy',
            targetAudience: 'Web3 & AI Creators, Developers, Community',
            keyInsights: [],
            pastOutputs: [],
            updatedAt: new Date().toISOString()
        };
        const updated = {
            ...existing,
            ...entry,
            keyInsights: Array.from(new Set([
                ...existing.keyInsights,
                ...entry.keyInsights || []
            ])),
            pastOutputs: [
                ...existing.pastOutputs,
                ...entry.pastOutputs || []
            ],
            updatedAt: new Date().toISOString()
        };
        store[key] = updated;
        this.saveStore(store);
        return updated;
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1oa4-c1._.js.map