# 📦 React Custom Hooks Library

[![npm version](https://img.shields.io/npm/v/@xplorationtechnology/react-custom-hooks?color=%2300b894&label=npm&logo=npm)](https://www.npmjs.com/package/@xplorationtechnology/react-custom-hooks)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Made with ❤️](https://img.shields.io/badge/made%20with-%E2%9D%A4-red)](https://xplorationtechnology.com/)

Koleksi custom React hooks dari Xploration Technology, dirancang untuk memenuhi
berbagai kebutuhan aplikasi frontend modern secara efisien dan elegan. Cocok
digunakan untuk project production, side project, maupun eksperimen pribadi.

---

## 🚀 Instalasi

```bash
npm install @xplorationtechnology/react-custom-hooks
```

Lalu gunakan dalam project React kamu seperti ini:

```tsx
import {
  useClipboard,
  useWindowResize,
} from "@xplorationtechnology/react-custom-hooks";
```

---

## 🧩 Daftar Hooks

### 🔹 `useClipboard`

Hook untuk menyalin teks ke clipboard dan memberikan umpan balik berupa status
`copied`.

#### ✅ Contoh Penggunaan

```tsx
const { copy, copied } = useClipboard();

<button onClick={() => copy('Hello!')}>Salin</button>
<span>{copied ? 'Berhasil disalin' : 'Belum disalin'}</span>
```

#### 🔁 API

- `copy(text: string)`: Menyalin teks ke clipboard
- `copied: boolean`: Menunjukkan apakah teks telah berhasil disalin

---

### 🔹 `useWindowResize`

Hook untuk memantau ukuran jendela browser secara real-time dan memberikan
informasi terkait breakpoint.

#### ✅ Contoh Penggunaan

```tsx
const { width, height, breakpoint } = useWindowResize();

<p>Width: {width}</p>
<p>Height: {height}</p>
<p>Breakpoint: {breakpoint}</p>
```

#### 📐 Breakpoint TailwindCSS

- `xs`: <640px
- `sm`: ≥640px
- `md`: ≥768px
- `lg`: ≥1024px
- `xl`: ≥1280px

---

## 📄 Lisensi

**MIT License** — Bebas digunakan untuk kebutuhan pribadi maupun komersial.

---

Dibuat dengan ❤️ oleh **Xploration Technology**
