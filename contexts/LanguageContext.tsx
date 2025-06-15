"use client"

import type React from "react"
import { createContext, useContext } from "react"

interface LanguageContextType {
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Vietnamese translations only
const translations = {
  // Header
  "header.home": "Trang chủ",
  "header.jobList": "Danh sách việc làm",

  // Hero
  "hero.title": "Tìm việc làm dọn dẹp dân cư tại Nhật Bản",
  "hero.subtitle":
    "Chúng tôi cung cấp thông tin việc làm dọn dẹp trên toàn Nhật Bản đang tuyển dụng. Người mới cũng có thể! Hãy tìm nơi làm việc mà bạn có thể phát huy năng lực.",

  // Hero search
  "hero.search.job": "Tìm kiếm công việc",
  "hero.search.location": "Địa điểm",
  "hero.search.button": "Tìm kiếm",

  // Hero stats
  "hero.stats.users": "15,000+ người dùng",
  "hero.stats.companies": "1,200+ công ty",
  "hero.stats.satisfaction": "98% hài lòng",

  // Job Categories
  "categories.title": "Danh mục công việc dọn dẹp",
  "categories.subtitle": "Chúng tôi có việc làm dọn dẹp từ nhiều lĩnh vực khác nhau",
  "categories.vacation": "Dọn dẹp vacation rental",
  "categories.hotel": "Dọn dẹp khách sạn",
  "categories.office": "Dọn dẹp văn phòng",
  "categories.residential": "Dọn dẹp nhà ở",
  "categories.commercial": "Dọn dẹp thương mại",
  "categories.hospital": "Dọn dẹp bệnh viện",
  "categories.restaurant": "Dọn dẹp nhà hàng",
  "categories.maintenance": "Bảo trì dọn dẹp",
  "categories.jobs": "việc làm",

  // Featured Jobs
  "featured.title": "Việc làm dọn dẹp nổi bật",
  "featured.subtitle": "Giới thiệu những thông tin việc làm dọn dẹp được tuyển chọn kỹ lưỡng",
  "featured.urgent": "Tuyển gấp",
  "featured.details": "Xem chi tiết",
  "featured.viewAll": "Xem tất cả việc làm",

  // How It Works
  "howItWorks.title": "Quy trình sử dụng",
  "howItWorks.subtitle": "3 bước đơn giản để tìm công việc dọn dẹp lý tưởng",
  "howItWorks.step1.title": "Ứng tuyển",
  "howItWorks.step1.desc": "Dễ dàng ứng tuyển vào những việc làm bạn quan tâm.",
  "howItWorks.step2.title": "Phỏng vấn",
  "howItWorks.step2.desc": "Thực hiện phỏng vấn với công ty.",
  "howItWorks.step3.title": "Nhận việc (Có đào tạo)",
  "howItWorks.step3.desc":
    "Sau khi nhận việc, bạn sẽ được tham gia chương trình đào tạo đầy đủ để bắt đầu công việc một cách an tâm.",

  // Jobs Page
  "jobs.title": "Tìm kiếm việc làm dọn dẹp",
  "jobs.subtitle": "Tìm công việc dọn dẹp phù hợp với bạn từ nhiều cơ hội việc làm",
  "jobs.results": "Kết quả tìm kiếm",
  "jobs.found": "việc làm được tìm thấy",
  "jobs.sortBy": "Sắp xếp theo:",
  "jobs.newest": "Mới nhất",
  "jobs.salary": "Lương",
  "jobs.popular": "Phổ biến",
  "jobs.apply": "Ứng tuyển",
  "jobs.posted": "Ngày đăng:",

  // Job Types
  "jobType.fullTime": "Nhân viên chính thức",
  "jobType.contract": "Nhân viên hợp đồng",
  "jobType.partTime": "Bán thời gian",
  "jobType.dispatch": "Nhân viên cử đi",
  "jobType.freelance": "Ủy thác công việc",

  // Stats
  "stats.title": "Thống kê thành công",
  "stats.subtitle": "Những con số ấn tượng về hiệu quả của chúng tôi",
  "stats.success": "Tỷ lệ thành công",
  "stats.successDesc": "Tỷ lệ ứng viên tìm được việc làm phù hợp",
  "stats.usersDesc": "Người dùng tin tưởng sử dụng dịch vụ",
  "stats.companiesDesc": "Công ty đối tác tuyển dụng",
  "stats.satisfactionDesc": "Mức độ hài lòng của người dùng",

  // Footer
  "footer.quickLinks": "Liên kết nhanh",
  "footer.support": "Hỗ trợ",
  "footer.contact": "Liên hệ",
  "footer.copyright":
    "© 2024 Cleaning Japan. Tất cả quyền được bảo lưu. | Trang việc làm dọn dẹp dành cho người Việt tại Nhật",
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const t = (key: string): string => {
    return (translations as Record<string, string>)[key] || key
  }

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
