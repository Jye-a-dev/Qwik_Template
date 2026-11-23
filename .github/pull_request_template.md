## Mô tả thay đổi (Description)

- Tóm tắt ngắn gọn tính năng mới, sửa lỗi, hoặc cải tiến kỹ thuật.
- Liên kết Issue / Ticket (nếu có): Closes #

## Loại thay đổi (Type of Change)

- [ ] ✨ Feature (tính năng mới)
- [ ] 🐛 Bugfix (sửa lỗi)
- [ ] ♻️ Refactor (tái cấu trúc code, không đổi hành vi)
- [ ] 🎨 Style / UI (cải tiến giao diện Tailwind CSS)
- [ ] ⚡ Performance (tối ưu hiệu năng, resumability)
- [ ] 📝 Docs (cập nhật tài liệu)
- [ ] 🔧 Chores / Config (cấu hình, dependencies, tooling)

## Checklist kiểm tra chất lượng (Quality Gate)

- [ ] Đã chạy `npm run type-check` thành công không lỗi type.
- [ ] Đã chạy `npm run lint` thành công không vi phạm rules.
- [ ] Đã chạy `npm run build` kiểm tra SSR & Client bundle.
- [ ] Tuân thủ kiến trúc Qwik: `component$`, fine-grained signals, HTML `class`/`for` attributes.
- [ ] Giữ `src/routes/` mỏng, logic nghiệp vụ đặt trong `src/features/`.
- [ ] Commit message tuân thủ chuẩn Conventional Commits.
