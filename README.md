# 📦 React Custom Hooks Library

Koleksi custom React hooks dari Xploration Technology, dirancang untuk memenuhi
berbagai kebutuhan aplikasi frontend modern dengan efisien dan elegan.

---

## 🧩 Daftar Hooks

### 🔹 `useClipboard`

Hook untuk menyalin teks ke clipboard dan memberikan umpan balik berupa status
`copied`.

#### ✅ Contoh Penggunaan useClipboard

```tsx
const { copy, copied } = useClipboard();

<button onClick={() => copy('Hello!')}>Salin</button>
<span>{copied ? 'Berhasil disalin' : 'Belum disalin'}</span>
```

#### 🔁 API

- `copy(text: string)`: Menyalin teks ke clipboard.
- `copied: boolean`: Menunjukkan apakah teks telah berhasil disalin baru-baru
  ini.

---

### 🔹 `useWindowResize`

Hook untuk memantau ukuran jendela browser secara real-time dan memberikan
informasi terkait breakpoint.

#### ✅ Contoh Penggunaan useWindowResize

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

## 🧪 Testing

Library ini diuji secara menyeluruh menggunakan:

- [`Vitest`](https://vitest.dev)
- [`Testing Library`](https://testing-library.com)

Semua file test terletak di dalam folder `src/__tests__`.

Untuk menjalankan test:

```bash
npm run test
```

---

## ⚙️ Build

Untuk menghasilkan output production:

```bash
npm run build
```

Hasil build akan tersedia di folder `dist/`.

---

## 📄 Lisensi

**MIT License** — Bebas digunakan untuk kebutuhan pribadi maupun komersial.

---

Dibuat dengan ❤️ oleh **Xploration Technology**
