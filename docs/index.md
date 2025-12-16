---
layout: home
hero:
  name: "Vibe Vibe"
  text: "Lập trình AI mà ai cũng có thể học"
  tagline: "Không cần viết code, vẫn làm được sản phẩm. Từ zero đến full-stack, để AI trở thành cộng sự lập trình của bạn"
  image:
    src: /logo.png
    alt: Vibe Coding
  actions:
    - theme: brand
      text: Nhập môn từ zero
      link: /Basic/
    - theme: alt
      text: Nâng cao có nền tảng
      link: /Advanced/
    - theme: alt
      text: Thực hành dự án
      link: /Practice/
    - theme: alt
      text: Bài viết chất lượng
      link: /Articles/

features:
  - title: Thân thiện với người mới
    details: Không cần kinh nghiệm lập trình, bắt đầu từ "code là gì", hướng dẫn bạn tạo ra tác phẩm đầu tiên
  - title: Phát triển bằng AI
    details: Học cách "chỉ huy AI viết code" thay vì "tự viết code", dùng ngôn ngữ tự nhiên mô tả yêu cầu, để AI giúp bạn thực hiện
  - title: Tư duy MVP
    details: Nắm vững khái niệm "Sản phẩm khả thi tối thiểu", dùng ít thời gian nhất để kiểm chứng ý tưởng, tránh bẫy mở rộng tính năng
  - title: Stack công nghệ hiện đại
    details: Phần nâng cao dựa trên Next.js + TypeScript + Prisma, học best practices phát triển full-stack cấp doanh nghiệp
  - title: Ý thức bảo mật
    details: Xây dựng ý thức bảo mật ngay từ ngày đầu, học cách bảo vệ dữ liệu người dùng và tránh các lỗ hổng bảo mật phổ biến
  - title: Học tập tiến bộ
    details: Phần cơ bản xây dựng nhận thức, phần nâng cao thực chiến chuyên sâu. Hai lộ trình, phù hợp với bạn ở từng giai đoạn
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #15a051ff 30%, #2eb3dfff);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #15a051ff 50%, #2eb3dfff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}

.VPHero .actions .VPButton.brand {
  background-color: #45523E;
  border-color: #45523E;
}
.VPHero .actions .VPButton.brand:hover {
  background-color: #4F5B53;
  border-color: #4F5B53;
}
.VPHero .actions .VPButton.brand:active {
  background-color: #3B423C;
  border-color: #3B423C;
}
</style>

## Chọn lộ trình học tập của bạn

<div class="paths-container" style="display: flex; gap: 2rem; margin: 2rem 0; flex-wrap: wrap;">

<div style="flex: 1; min-width: 300px; padding: 1.5rem; border-radius: 12px; background: linear-gradient(135deg, #667eea11 0%, #764ba211 100%); border: 1px solid #667eea33;">

### Phần Cơ Bản: Nhập Môn Từ Zero

**Đối tượng phù hợp**: Người chưa từng viết code, sinh viên nhân văn, designer, product manager

**Mục tiêu học tập**:
- Hiểu Vibe Coding là gì
- Học cách dùng AI làm ra tác phẩm đầu tiên
- Nắm vững tư duy MVP và product sense

**Xem trước các chương**:
| Chương | Nội dung |
|------|------|
| 0. Mở đầu | Checklist tự đánh giá, quy hoạch lộ trình học tập |
| 1. Thức tỉnh | Chuyển đổi tư duy từ thợ code sang chỉ huy viên |
| 2. Tâm pháp | Tư duy MVP, nghệ thuật không thêm tính năng |
| 3. Kỹ pháp | Kỹ thuật viết prompt, soạn PRD |
| 4. Thực chiến | Từ 0 đến 1 làm ra tác phẩm của bạn |
| 5. Nâng cao | Quản lý phiên bản, triển khai, ý thức bảo mật |
| 6. Lộ trình | Gợi ý học tập cho từng background khác nhau |


</div>

<div style="flex: 1; min-width: 300px; padding: 1.5rem; border-radius: 12px; background: linear-gradient(135deg, #f093fb11 0%, #f5576c11 100%); border: 1px solid #f093fb33;">

### Phần Nâng Cao: Thực Chiến Full-Stack

**Đối tượng phù hợp**: Có nền tảng lập trình nhất định, muốn học hệ thống phát triển full-stack

**Mục tiêu học tập**:
- Nắm vững kiến trúc full-stack hiện đại với Next.js
- Học thực hành kỹ thuật công nghiệp cấp doanh nghiệp
- Có khả năng phát triển sản phẩm hoàn chỉnh độc lập

**Xem trước các chương**:
| Chương | Nội dung |
|------|------|
| Bootcamp | Nền tảng khoa học máy tính, command line, môi trường dev |
| 1-2. Kiến trúc | Next.js + TypeScript + Prisma |
| 3-4. Phát triển | Phát triển frontend-backend, thiết kế database |
| 5-6. Sản phẩm | Tư duy sản phẩm, xác thực và bảo mật |
| 7-8. Chuẩn mực | Thiết kế API, quy trình cộng tác Git |
| 9-10. Chất lượng | Chiến lược testing, vận hành triển khai |
| 11-12. Nâng cao | Quy trình release, tối ưu hóa nâng cao |


</div>

</div>

## Trạng thái dự án

::: warning Phiên bản xem trước nội bộ
- Phiên bản này là **phiên bản xem trước nội bộ**, không phải phiên bản phát hành chính thức, không đại diện cho chất lượng cuối cùng
- Phiên bản chính thức cần chờ đợi tối ưu hóa chuyên sâu từng chương, bổ sung nội dung giảng dạy tương tác, và hoàn thiện phần bài tập thực chiến
- Nếu phát hiện vấn đề, hãy phản hồi qua [GitHub Issues](https://github.com/datawhalechina/vibe-vibe/issues)
:::

::: tip Dự báo phiên bản nâng cao: Giảng dạy tương tác Web
Chúng tôi đang phát triển **nội dung giảng dạy tương tác**, phiên bản chính thức sẽ hỗ trợ:
- **Minh họa nguyên lý trực quan** — Qua animation và đồ họa tương tác, hiểu trực quan tương tác frontend-backend, quy trình request-response
- **Sandbox tương tác database** — Trải nghiệm query database, thiết kế quan hệ bảng trong trình duyệt, hiểu luồng dữ liệu
- **Tương tác sơ đồ kiến trúc** — Click để khám phá kiến trúc hệ thống, hiểu trách nhiệm từng layer và hướng dữ liệu
- **Card so sánh khái niệm** — So sánh tương tác các khái niệm cốt lõi như SSR/CSR, REST/GraphQL

Biến khái niệm trừu tượng thành có thể chạm được, mong chờ nhé!
:::

## Vibe Coding là gì?

> "There's a new kind of coding I call 'vibe coding', where you fully give in to the vibes, embrace exponentials, and forget that the code even exists."
>
> — Andrej Karpathy, 2025

**Vibe Coding** là phương thức lập trình hot nhất năm 2025 (Từ của năm từ điển Collins). Lý niệm cốt lõi của nó là:

- **Dùng ngôn ngữ tự nhiên mô tả yêu cầu**, không phải viết code bằng tay
- **Để AI sinh code**, bạn nghiệm thu và điều chỉnh
- **Lặp nhanh**, làm ra thứ dùng được quan trọng hơn code hoàn hảo

Nói đơn giản: **Bạn phụ trách ý tưởng, AI phụ trách thực hiện.**

## Phù hợp với ai?

| Bạn là ai | Lộ trình đề xuất | Lý do |
|--------|----------|------|
| Designer / Product Manager | Phần Cơ Bản | Zero nền tảng code vẫn làm được prototype chạy được |
| Sinh viên nhân văn / Chuyển ngành | Phần Cơ Bản | Bắt đầu từ khái niệm cơ bản nhất, tuần tự tiến bộ |
| Frontend Developer | Phần Nâng Cao | Mở rộng khả năng backend, trở thành full-stack engineer |
| Backend Developer | Phần Nâng Cao | Hiểu ecosystem frontend hiện đại và Next.js |
| Founder / Indie Developer | Cả hai | Build MVP nhanh, hoàn thành sản phẩm độc lập |
| Developer muốn tăng hiệu suất | Cơ Bản + Nâng Cao | Học hệ thống workflow phát triển hỗ trợ AI |

## Tổng quan Tech Stack

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 1.5rem 0;">

<div style="padding: 1.5rem; border-radius: 12px; background: linear-gradient(135deg, #667eea11 0%, #764ba211 100%); border: 1px solid #667eea33;">
  <h4 style="margin-top: 0; margin-bottom: 1rem; color: #667eea;">Phần Cơ Bản</h4>
  <ul style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Nền tảng frontend</strong>: HTML/CSS/JS</li>
    <li><strong>AI Tools</strong>: ChatGPT/Claude/Cursor v.v.</li>
    <li><strong>Quản lý phiên bản</strong>: Thao tác Git cơ bản</li>
    <li><strong>Triển khai</strong>: Deploy trang web tĩnh</li>
  </ul>
</div>

<div style="padding: 1.5rem; border-radius: 12px; background: linear-gradient(135deg, #f093fb11 0%, #f5576c11 100%); border: 1px solid #f093fb33;">
  <h4 style="margin-top: 0; margin-bottom: 1rem; color: #f093fb;">Phần Nâng Cao</h4>
  <ul style="margin: 0; padding-left: 1.5rem;">
    <li><strong>Framework</strong>: Next.js + TypeScript</li>
    <li><strong>Data Layer</strong>: PostgreSQL + Prisma</li>
    <li><strong>UI Framework</strong>: Tailwind CSS + shadcn/ui</li>
    <li><strong>Authentication</strong>: NextAuth.js</li>
    <li><strong>Deploy</strong>: Docker + Vercel/Edgeone</li>
  </ul>
</div>

</div>

## Danh sách cộng tác viên

Cảm ơn các thành viên sau đã đóng góp cho dự án này:

| Tên | Vai trò | Giới thiệu |
|------|------|------|
| <a href="http://www.guohaoqi.cn" target="_blank">Qi Guohao</a> | Trưởng dự án & Cộng tác viên cốt lõi | Đang học tại Khoa Khoa học Máy tính, Đại học Quốc gia Singapore, Người sáng lập Hội Fintech Đại học Hunan |
| <a href="https://www.hangkangfu.cn/" target="_blank">Fu Hangkang</a> | Trưởng dự án & Cộng tác viên cốt lõi | Thành viên sáng lập Hội Fintech Đại học Hunan, một người trẻ native AI, sinh viên năm nhất ngành Khoa học Thông tin và Kỹ thuật Đại học Hunan |
| Chen Junxi | Cộng tác viên mục «Bài viết chất lượng» | Chủ tịch hiện tại Hội Fintech Đại học Hunan, sinh viên năm nhất Khoa Tài chính và Thống kê Đại học Hunan |
| Jin Long | Cộng tác viên mục «Thực hành» | Phó trưởng ban AI Club Câu lạc bộ Đổi mới Sinh viên Đại học Bắc Kinh, Nghiên cứu sinh khóa 24 Đại học Bắc Kinh |
| Shu Lulu | Cộng tác viên mục «Thực hành» | Người sáng lập "Lushan Humanities+", Sinh viên năm thứ 3 Viện Yuelu Đại học Hunan |

## Cách đóng góp

Dự án này hoan nghênh đóng góp từ cộng đồng:

- Phản hồi vấn đề ở khu bình luận dưới trang
- Gửi [GitHub Issues](https://github.com/datawhalechina/vibe-vibe/issues)
- Gửi Pull Request để hoàn thiện nội dung
