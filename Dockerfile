# ============================================================================
#  hissa-landing (frontend landing SPA) — multi-stage image.
#   1) build : Node bilan `npm ci` + `npm run build` → static `dist/`.
#              npm kesh alohida qatlam (package-lock o'zgarmasa qayta yuklanmaydi).
#   2) runtime: nginx faqat static fayllarni beradi (SPA fallback → index.html).
#  Maxfiy narsa yo'q — bari static (marketing landing, backendga ulanmaydi).
# ============================================================================

# ---- build stage (debian/glibc — vite native binary uchun ishonchli) ----
FROM node:22-slim AS build
WORKDIR /app

# 1) Avval faqat lock — bog'liqlik qatlami keshlanadi (kod o'zgarsa ham qoladi).
COPY package.json package-lock.json ./
RUN npm ci --prefer-offline --no-audit --fund=false

# 2) Keyin kod → build (tsc -b + vite build). Type xatosi bo'lsa shu yerda yiqiladi.
COPY . .
ARG APP_BUILD
RUN npm run build

# ---- runtime stage ----
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
# busybox wget (nginx:alpine'da bor). 127.0.0.1 — `localhost` konteynerda IPv6 (::1)'ga
# ketadi, nginx esa faqat IPv4'da tinglaydi → localhost bilan healthcheck noto'g'ri "unhealthy".
HEALTHCHECK --interval=15s --timeout=5s --start-period=5s --retries=5 \
  CMD wget -qO- http://127.0.0.1:80/ >/dev/null 2>&1 || exit 1
