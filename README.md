# Qwik Template · Production-Ready Full-Stack Starter

Một template khởi tạo dự án full-stack hiện đại với **Qwik** và **Qwik City**, được kiến trúc theo chuẩn **Production-ready**, tối ưu hóa toàn diện cho cả làm việc **Cá nhân (Solo)** lẫn **Đội ngũ (Team)**.

Thành viên mới chỉ cần:

```bash
git clone <repo-url>
cd qwik_template
cp .env.example .env
npm install
npm run dev
```

Ứng dụng sẽ sẵn sàng phục vụ tại `http://localhost:5000`.

---

## 🚀 Tech Stack Thực Tế

| Thư viện / Công nghệ          | Phiên bản thực tế | Vai trò trong hệ thống                                            |
| :---------------------------- | :---------------- | :---------------------------------------------------------------- |
| **Qwik**                      | `1.20.4`          | Framework cốt lõi hỗ trợ Resumability (Zero-JS hydration ban đầu) |
| **Qwik City**                 | `1.20.4`          | Router, SSR, Middleware, Loaders (`routeLoader$`), Server Actions |
| **Vite**                      | `7.3.7`           | Bundler và Development Server hiệu năng cao                       |
| **TypeScript**                | `5.4.5`           | Ngôn ngữ tĩnh kiểu nghiêm ngặt (`strict: true`, path alias `~/*`) |
| **Tailwind CSS**              | `4.3.5`           | Styling engine thế hệ mới, tối ưu hóa tốc độ build                |
| **@tailwindcss/vite**         | `4.3.5`           | Plugin Vite chính thức của Tailwind CSS v4                        |
| **clsx** & **tailwind-merge** | `2.1.1` / `3.7.1` | Utility gộp class an toàn qua helper `cn()`                       |
| **@qwikest/icons**            | `0.0.13`          | Bộ icon tối ưu kích thước cho Qwik                                |
| **Zod**                       | `4.6.7`           | Thư viện schema validation cho runtime & environment variables    |
| **ESLint**                    | `9.32.0`          | Linter sử dụng Flat Config (`eslint.config.js`)                   |
| **eslint-plugin-qwik**        | `1.20.4`          | Bộ quy tắc lint chuẩn chuyên biệt cho kiến trúc Qwik              |
| **Prettier**                  | `3.6.2`           | Code formatter tích hợp `prettier-plugin-tailwindcss`             |
| **Husky**                     | `9.1.7`           | Quản lý Git Hooks tự động khi commit code                         |
| **lint-staged**               | `16.4.0`          | Tự động chạy ESLint và Prettier trên file staged                  |
| **Commitlint**                | `20.5.3`          | Kiểm soát định dạng Git Commit theo chuẩn Conventional Commits    |

---

## 📋 Yêu Cầu Hệ Thống

- **Node.js:** Phiên bản LTS `^20.3.0` hoặc `>=21.0.0` (Khuyến nghị **Node.js 22**, đã cấu hình trong file `.nvmrc`).
  - Nếu bạn dùng `nvm`, chỉ cần chạy: `nvm use`.
- **NPM:** Phiên bản `10.x+` (đi kèm Node LTS).

---

## ⚡ Hướng Dẫn Quick Start

1. **Clone repository về máy:**

   ```bash
   git clone <repo-url>
   cd qwik_template
   ```

2. **Khởi tạo file cấu hình môi trường:**

   ```bash
   cp .env.example .env
   ```

3. **Cài đặt dependencies:**

   ```bash
   npm install
   ```

4. **Khởi chạy Development Server:**

   ```bash
   npm run dev
   ```

5. **Truy cập ứng dụng:**
   Mở trình duyệt tại: [http://localhost:5000](http://localhost:5000)
   - Kiểm tra Health Check API: [http://localhost:5000/api/health](http://localhost:5000/api/health)

---

## 🔐 Biến Môi Trường (.env)

Hệ thống điều khiển cấu hình qua file `.env`, được kiểm định chặt chẽ bằng Zod tại `src/config/env.ts`.

| Tên biến              | Giá trị mẫu                 | Bắt buộc | Phạm vi & Ý nghĩa                                                                                                                                   |
| :-------------------- | :-------------------------- | :------: | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PORT`                | `5000`                      |  Không   | Cổng mạng cho Dev server và Preview server. Người dùng có thể đổi cổng tùy ý (ví dụ `PORT=3000`), Vite sẽ tự động nạp mà không cần sửa file config. |
| `PUBLIC_SITE_URL`     | `http://localhost:5000`     |    Có    | URL gốc của website. Biến có tiền tố `PUBLIC_*` sẽ được Vite công khai cho cả Client và Server SSR.                                                 |
| `PUBLIC_API_BASE_URL` | `http://localhost:8000/api` |    Có    | URL base của backend API service, dùng cho các lệnh gọi dữ liệu.                                                                                    |

> [!IMPORTANT]
>
> - Biến có tiền tố `PUBLIC_*` được nạp vào client runtime thông qua `import.meta.env`.
> - Biến không có tiền tố `PUBLIC_*` (như secret token, private keys) chỉ tồn tại trên server/Node.js runtime và không bao giờ bị lộ ra client bundle.
> - File `.env` đã được cấu hình trong `.gitignore` để tránh rò rỉ bí mật. Tuyệt đối **không** commit `.env` lên git; luôn cập nhật các biến mẫu mới vào `.env.example`.

---

## 🏗️ Cấu Trúc Thư Mục & Nguyên Tắc Phân Chia Code

Dự án áp dụng mô hình **Thin Routes + Feature-Based Hybrid**:

```text
src/
├── assets/                   # Tài nguyên tĩnh nội bộ (fonts, local images)
├── components/
│   ├── router-head/          # Head management (<title>, <meta>, <link>)
│   └── ui/                   # Reusable UI primitives dùng chung toàn app
│       └── button.tsx        # UI button mẫu với variant styles & helper cn()
├── config/
│   └── env.ts                # Validate & export biến môi trường PUBLIC_* bằng Zod
├── features/                 # Chia theo module nghiệp vụ độc lập (Team/Domain)
│   └── example/              # Module ví dụ mẫu
│       ├── api/              # server$ functions, API calls chuyên biệt của module
│       ├── components/       # Component$ nội bộ của feature (e.g., example-card.tsx)
│       ├── hooks/            # Custom hooks phản ứng (signals, stores) của feature
│       ├── schemas/          # Zod validation schemas
│       └── types/            # TypeScript interfaces / types nội bộ
├── hooks/                    # Custom hooks dùng chung toàn bộ ứng dụng (.gitkeep)
├── lib/                      # Cấu hình SDK, client bên thứ 3 (.gitkeep)
├── routes/                   # CHỈ chứa Routing, Layout, Loaders, Actions & API Endpoints
│   ├── api/
│   │   └── health/
│   │       └── index.ts      # Endpoint GET /api/health trả về JSON status
│   ├── 404.tsx               # Trang 404 gọn sạch
│   ├── index.tsx             # Trang chủ (Thin route: load data & nhúng Feature)
│   └── layout.tsx            # Root layout bao quanh (<Slot />)
├── stores/                   # Context IDs & Global Signals state (.gitkeep)
├── types/                    # Global TypeScript interfaces dùng chung (ApiResponse, v.v.)
├── utils/
│   └── cn.ts                 # Helper gộp class Tailwind CSS an toàn (clsx + tailwind-merge)
├── entry.dev.tsx             # Entry point cho dev client-only
├── entry.preview.tsx         # Entry point cho preview production mode
├── entry.ssr.tsx             # Entry point cho SSR renderer
├── global.css                # Style toàn cục với @import "tailwindcss";
└── root.tsx                  # Root component (<QwikCityProvider>, <RouterOutlet>)
```

### Nguyên tắc phân chia code:

1. **Khi nào đặt code ở `src/routes/`?**
   - Chỉ khi bạn cần tạo một trang (URL) mới, một Layout bọc ngoài, một loader (`routeLoader$`), một action (`routeAction$`), hoặc một API Endpoint (`onGet`, `onPost`).
   - Giữ file route **cực kỳ mỏng (thin)**. Không viết logic nghiệp vụ phức tạp hoặc render JSX hàng trăm dòng tại đây.
2. **Khi nào đặt code ở `src/features/<tên-module>/`?**
   - Khi viết tính năng nghiệp vụ cụ thể (Auth, Product, Checkout, Dashboard...).
   - Mỗi thành viên hoặc sub-team có thể phụ trách riêng một thư mục feature mà không lo merge conflict.
3. **Khi nào đặt code ở `src/components/ui/`?**
   - Khi tạo các component giao diện thuần túy, tái sử dụng ở nhiều nơi (Button, Input, Modal, Badge, Dropdown...).
4. **Khi nào đặt code ở `src/stores/`?**
   - Khi cần chia sẻ state toàn cục thông qua Qwik Context (`createContextId`, `useContextProvider`).

---

## 🛠️ Danh Sách NPM Scripts

| Script               | Lệnh thực thi                        | Mô tả                                                                   |
| :------------------- | :----------------------------------- | :---------------------------------------------------------------------- |
| `npm run dev`        | `vite --mode ssr`                    | Chạy development server tại port cấu hình trong `.env` (mặc định 5000). |
| `npm run build`      | `qwik build`                         | Biên dịch toàn bộ client & SSR bundle sẵn sàng cho production.          |
| `npm run preview`    | `qwik build preview && vite preview` | Build và chạy thử bản production preview trên local.                    |
| `npm run type-check` | `tsc --noEmit`                       | Kiểm tra tính toàn vẹn kiểu dữ liệu TypeScript.                         |
| `npm run lint`       | `eslint .`                           | Kiểm tra vi phạm cú pháp & quy tắc Qwik bằng ESLint 9.                  |
| `npm run format`     | `prettier --write .`                 | Tự động định dạng toàn bộ mã nguồn theo chuẩn Prettier.                 |

---

## 📜 Quy Ước Git Commit (Conventional Commits)

Repository sử dụng **Husky** và **Commitlint** để tự động kiểm soát chất lượng mã nguồn trước khi commit. Mọi commit message đều phải tuân theo chuẩn:

```text
<loại>: <mô tả ngắn bằng chữ thường>

# Ví dụ:
feat: integrate user authentication feature
fix: correct port fallback handling in vite config
refactor: simplify button component variants
chore: update dependency packages
```

### Các loại commit hợp lệ (`type`):

- `feat`: Tính năng mới (new feature).
- `fix`: Sửa lỗi (bug fix).
- `docs`: Cập nhật tài liệu (documentation).
- `style`: Thay đổi format, dấu chấm phẩy, không ảnh hưởng logic.
- `refactor`: Tái cấu trúc mã nguồn mà không thay đổi tính năng.
- `perf`: Cải thiện hiệu năng (performance).
- `test`: Bổ sung hoặc chỉnh sửa test.
- `chore`: Cấu hình build, tooling, dependencies.

---

## 🤝 Đóng Góp & Phát Triển (Team Workflow)

1. Tạo nhánh mới từ `master`: `git checkout -b feat/ten-tinh-nang`.
2. Tạo module tính năng mới trong `src/features/<ten-feature>/`.
3. Kiểm tra code trước khi commit:
   ```bash
   npm run type-check
   npm run lint
   npm run build
   ```
4. Commit theo chuẩn Conventional Commits (Git Hooks sẽ tự động chạy `lint-staged`).
5. Tạo Pull Request theo mẫu template tại `.github/pull_request_template.md`.
