---
title: "2.4 Frontend-backend cộng tác hiệu quả như thế nào — API Contract/API Route; Request/Response, Idempotent, Streaming response"
---

# 2.4 Frontend-backend cộng tác hiệu quả như thế nào — API Contract

## Tái cấu trúc nhận thức

Trong mô hình phát triển truyền thống, frontend đợi backend, backend đợi yêu cầu, chặn lẫn nhau là chuyện thường. Còn trong thời đại Vibe Coding, lý niệm **contract first** để frontend-backend có thể phát triển song song, AI cũng có thể tạo code chính xác hơn dựa trên contract.

```
Mô hình truyền thống: Yêu cầu → Backend phát triển → Frontend đối tiếp → Liên điều (nối tiếp)
Contract first: Yêu cầu → Định nghĩa contract → Frontend-backend phát triển song song → Liên điều (song song)
```

## Sơ đồ tri thức chương này

```mermaid
mindmap
  root((Cộng tác frontend-backend))
    Contract first
      Định nghĩa interface
      Chia sẻ type
      Quản lý version
    Mock data
      MSW mock
      Faker generate
      Chuyển đổi kịch bản
    Phát triển song song
      Frontend độc lập
      Backend tập trung
      Type safe
    Liên điều test
      Xác minh contract
      Định vị vấn đề
      Xử lý lỗi
```

## Tra cứu nhanh khái niệm cốt lõi

| Khái niệm | Tác dụng | Công cụ |
|------|------|------|
| **API Contract** | Định nghĩa format request/response | TypeScript types, Zod Schema |
| **Mock data** | Mô phỏng response backend | MSW, Faker.js |
| **Phát triển song song** | Frontend-backend cùng tiến hành | Định nghĩa type chung |
| **Liên điều test** | Xác minh tính nhất quán contract | Postman, Test cases |

## Tại sao cần API Contract?

```mermaid
flowchart LR
    subgraph Without["Không có contract"]
        F1["Frontend đoán format"] --> E1["Liên điều phát hiện sai"]
        E1 --> F2["Frontend viết lại"]
        F2 --> E2["Liên điều lại"]
    end

    subgraph With["Có contract"]
        C["Cùng định nghĩa contract"] --> P1["Frontend phát triển theo contract"]
        C --> P2["Backend phát triển theo contract"]
        P1 --> T["Xác minh liên điều"]
        P2 --> T
    end
```

### Ba giá trị lớn của contract

1. **Loại bỏ sự mơ hồ trong giao tiếp**: Format interface rõ ràng, không có "tôi tưởng"
2. **Hỗ trợ phát triển song song**: Frontend dùng Mock, backend dùng test, không chặn nhau
3. **AI cộng tác chính xác hơn**: AI tạo code dựa trên định nghĩa type, độ chính xác tăng đáng kể

## Vị trí của API Route trong Next.js

```mermaid
flowchart TB
    subgraph App["Ứng dụng Next.js"]
        Pages["Page components"]
        SA["Server Actions"]
        API["API Routes"]
    end

    subgraph External["Bên ngoài"]
        Third["Dịch vụ bên thứ ba"]
        Webhook["Webhook"]
        Mobile["Mobile"]
    end

    Pages --> SA
    Pages --> API
    Third --> API
    Webhook --> API
    Mobile --> API
```

| Tình huống | Phương án đề xuất |
|------|----------|
| Mutation data nội bộ | Server Actions |
| Expose API ra ngoài | API Routes |
| Callback bên thứ ba | API Routes |
| Gọi từ mobile | API Routes |

## Điều hướng chương này

- **2.4.1 Contract first**: Định nghĩa interface trước, viết code sau
- **2.4.2 Mock data**: Để frontend không phụ thuộc backend
- **2.4.3 Phát triển song song**: Frontend-backend cùng tiến hành
- **2.4.4 Liên điều test**: Đảm bảo tính nhất quán contract
