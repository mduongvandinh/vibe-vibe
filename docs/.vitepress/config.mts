import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'
import { withMermaid } from 'vitepress-plugin-mermaid'
// @ts-ignore
import timeline from "vitepress-markdown-timeline";

export default withMermaid(defineConfig({
  title: "Hướng dẫn thực chiến Full-stack Vibe Coding",
  description: "Từ Next.js đến phát triển hỗ trợ AI, dùng phương thức Vibe Coding để tái tạo workflow lập trình của bạn. Bao gồm nhập môn zero nền tảng, phát triển full-stack, database, deploy vận hành và 12 chương cốt lõi khác.",

  // Loại trừ thư mục docs/docs không build
  srcExclude: ['**/docs/**'],

  head: [
    ['meta', { name: 'keywords', content: 'Vibe Coding, Phát triển Full-stack, Next.js, TypeScript, React, Prisma, Lập trình AI, Cursor, Claude' }],
    ['meta', { name: 'author', content: 'Eyre' }],
    ['meta', { property: 'og:title', content: 'Hướng dẫn thực chiến Full-stack Vibe Coding' }],
    ['meta', { property: 'og:description', content: 'Từ Next.js đến phát triển hỗ trợ AI, dùng phương thức Vibe Coding để tái tạo workflow lập trình của bạn' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['link', { rel: 'icon', href: '/logo.png', type: 'image/png' }],
    ['link', { rel: 'shortcut icon', href: '/logo.png', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/logo.png', type: 'image/png' }],
    ['link', { rel: 'shortcut icon', href: '/logo.png', type: 'image/png' }],
  ],

  // 1. Cấu hình tăng cường Markdown
  markdown: {
    // Bật công thức toán ($$ E=mc^2 $$)
    math: true,
    // Alias ngôn ngữ, loại bỏ cảnh báo gitignore/env
    languageAlias: {
      'gitignore': 'ini',
      'env': 'properties'
    },
    // Đăng ký plugin timeline
    config: (md) => {
      md.use(timeline);
    },
  },

  // 2. Cấu hình Mermaid
  mermaid: {
    // refer to mermaid config options
  },


  vite: {
    ssr: {
      noExternal: ['vitepress-plugin-mermaid', 'mermaid']
    },
    server: {
      host: '0.0.0.0',
      port: 5173,
      strictPort: false,
      allowedHosts: true
    }
  },

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Vibe Vibe',

    nav: [
      { text: 'Trang chủ', link: '/' },
      {
        text: 'Phần Cơ Bản',
        items: [
          { text: '0. Mở đầu', link: '/Basic/00-preface/' },
          { text: '1. Thức tỉnh: Từ thợ code đến chỉ huy viên', link: '/Basic/01-awakening/' },
          { text: '2. Tâm pháp: Tư duy cốt lõi', link: '/Basic/02-mindset/' },
          { text: '3. Kỹ thuật: Từ ý tưởng đến sản phẩm', link: '/Basic/03-technique/' },
          { text: '4. Thực chiến từ 0 đến 1', link: '/Basic/04-practice-0-to-1/' },
          { text: '5. Tinh tiến kỹ năng', link: '/Basic/05-advanced/' },
          { text: 'Phụ lục', link: '/Basic/99-appendix/' },
          { text: 'Lời kết', link: '/Basic/100-epilogue/' },
          { text: 'Dự báo phần dưới', link: '/Basic/101-next-part/' },
        ]
      },
      {
        text: 'Phần Nâng Cao',
        items: [
          { text: '0. Bootcamp - Đánh nền khái niệm', link: '/Advanced/00-bootcamp/' },
          { text: '1. Khái niệm và Chuẩn bị', link: '/Advanced/01-concept/' },
          { text: '2. Chọn lựa công nghệ và Kiến trúc', link: '/Advanced/02-tech-stack/' },
          { text: '3. Từ Frontend đến Backend', link: '/Advanced/03-frontend/' },
          { text: '4. Database và Dữ liệu', link: '/Advanced/04-database/' },
          { text: '5. Sản phẩm và Tài liệu', link: '/Advanced/05-product/' },
          { text: '6. Authentication và Bảo mật', link: '/Advanced/06-security/' },
          { text: '7. Chuẩn mực thiết kế API', link: '/Advanced/07-api/' },
          { text: '8. Quy tắc dự án và Cộng tác', link: '/Advanced/08-workflow/' },
          { text: '9. Testing và Chất lượng', link: '/Advanced/09-testing/' },
          { text: '10. Deploy và Vận hành', link: '/Advanced/10-deploy/' },
          { text: '11. Release và Review', link: '/Advanced/11-review/' },
          { text: '12. Chủ đề Nâng cao', link: '/Advanced/12-advanced/' },
        ]
      },
      {
        text: 'Phần Thực Hành',
        items: [
          { text: 'Dự án sinh viên nhân văn/kinh doanh', link: '/Practice/01-for-liberal-arts/' },
          { text: 'Dự án sinh viên khoa học kỹ thuật', link: '/Practice/02-for-stem/' },
          { text: 'Dự án người đi làm', link: '/Practice/03-for-professionals/' },
          { text: 'Kỹ năng cốt lõi', link: '/Practice/10-core-skills/' },
          { text: 'Phát triển AI Agent', link: '/Practice/11-ai-agents/' },
          { text: 'Thực chiến dự án Full-stack', link: '/Practice/12-fullstack-projects/' },
          { text: 'Công cụ và Hiệu suất', link: '/Practice/13-tools-integration/' },
        ]
      },
      {
        text: 'Phần Bài Viết Chất Lượng',
        items: [
          { text: 'Blog công ty nổi tiếng', link: '/Articles/01-company-blogs/' },
          { text: 'Podcast chất lượng', link: '/Articles/02-podcasts/' },
          { text: 'Báo cáo nghiên cứu', link: '/Articles/03-research-reports/' },
          { text: 'Newsletter chất lượng', link: '/Articles/04-newsletters/' },
          { text: 'Cộng đồng developer', link: '/Articles/05-communities/' },
        ]
      },
    ],

    // Cốt lõi: Tự động sinh sidebar
    sidebar: generateSidebar({
      documentRootPath: 'docs',
      useTitleFromFileHeading: true,
      useFolderTitleFromIndexFile: true,
      useFolderLinkFromIndexFile: true,
      hyphenToSpace: true,

      manualSortFileNameByPriority: [
        'Basic', 'Advanced', 'Practice', 'Articles',
        'Basic/00-preface', 'Basic/01-awakening', 'Basic/02-mindset', 'Basic/03-technique',
        'Basic/04-practice-0-to-1', 'Basic/05-advanced', 'Basic/06-learning-paths',
        'Basic/99-appendix', 'Basic/100-epilogue', 'Basic/101-next-part',
        'Advanced/00-bootcamp', 'Advanced/01-concept', 'Advanced/02-tech-stack', 'Advanced/03-frontend',
        'Advanced/04-database', 'Advanced/05-product', 'Advanced/06-security', 'Advanced/07-api',
        'Advanced/08-workflow', 'Advanced/09-testing', 'Advanced/10-deploy', 'Advanced/11-review', 'Advanced/12-advanced',
        'Practice/01-for-liberal-arts', 'Practice/02-for-stem', 'Practice/03-for-professionals',
        'Practice/10-core-skills', 'Practice/11-ai-agents', 'Practice/12-fullstack-projects', 'Practice/13-tools-integration',
        'Articles/01-company-blogs', 'Articles/02-podcasts', 'Articles/03-research-reports', 'Articles/04-newsletters', 'Articles/05-communities'
      ],

      collapsed: true,
      excludePattern: ['public', 'assets', 'docs'],
    }),

    // editLink: {
    //   pattern: 'https://github.com/Eyre921/awesone-vibe-coding-tutorial/edit/main/docs/:path',
    //   text: 'Chỉnh sửa trang này trên GitHub'
    // },

    lastUpdated: {
      text: 'Cập nhật lần cuối',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    docFooter: {
      prev: 'Bài trước',
      next: 'Bài sau'
    },

    outline: {
      label: 'Điều hướng trang',
      level: [2, 3]
    },

    returnToTopLabel: 'Về đầu trang',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Giao diện',
    lightModeSwitchTitle: 'Chuyển sang chế độ sáng',
    darkModeSwitchTitle: 'Chuyển sang chế độ tối',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Tìm kiếm tài liệu',
            buttonAriaLabel: 'Tìm kiếm tài liệu'
          },
          modal: {
            noResultsText: 'Không tìm thấy kết quả',
            resetButtonTitle: 'Xóa điều kiện tìm kiếm',
            footer: {
              selectText: 'Chọn',
              navigateText: 'Chuyển'
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/datawhalechina/vibe-vibe' }
    ],

    footer: {
      message: '',
      copyright: '<a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2024097797号-3</a>'
    }
  }
}))
