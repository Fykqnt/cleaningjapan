"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "ja" | "vn"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation dictionaries
const translations = {
  ja: {
    // Header
    "header.home": "ホーム",
    "header.jobList": "求人一覧",

    // Hero
    "hero.title": "日本で民泊清掃の仕事を見つけよう",
    "hero.subtitle":
      "日本全国で求人中の清掃求人情報を取り揃えております。未経験でも可能！あなたの活躍できる職場を見つけましょう。",

    // Job Categories
    "categories.title": "清掃職種カテゴリー",
    "categories.subtitle": "様々な清掃業界・職種の求人を取り揃えています",
    "categories.vacation": "バケーションレンタル清掃",
    "categories.hotel": "ホテル清掃",
    "categories.office": "オフィス清掃",
    "categories.residential": "住宅清掃",
    "categories.commercial": "商業施設清掃",
    "categories.hospital": "病院清掃",
    "categories.restaurant": "レストラン清掃",
    "categories.maintenance": "メンテナンス清掃",
    "categories.jobs": "件の求人",

    // Featured Jobs
    "featured.title": "注目の清掃求人",
    "featured.subtitle": "厳選されたおすすめの清掃求人情報をご紹介します",
    "featured.urgent": "急募",
    "featured.details": "詳細を見る",
    "featured.viewAll": "すべての求人を見る",

    // How It Works
    "howItWorks.title": "ご利用の流れ",
    "howItWorks.subtitle": "簡単3ステップで理想の清掃の仕事を見つけましょう",
    "howItWorks.step1.title": "応募",
    "howItWorks.step1.desc": "気になる求人に簡単に応募できます。",
    "howItWorks.step2.title": "面談",
    "howItWorks.step2.desc": "企業との面談を行います。",
    "howItWorks.step3.title": "内定（研修あり）",
    "howItWorks.step3.desc": "内定後は充実した研修プログラムで、安心して働き始めることができます。",

    // Jobs Page
    "jobs.title": "清掃求人検索",
    "jobs.subtitle": "多数の清掃求人から、あなたにぴったりの仕事を見つけましょう",
    "jobs.results": "検索結果",
    "jobs.found": "件の求人が見つかりました",
    "jobs.sortBy": "並び替え:",
    "jobs.newest": "新着順",
    "jobs.salary": "給与順",
    "jobs.popular": "人気順",
    "jobs.apply": "応募する",
    "jobs.posted": "投稿日:",

    // Job Types
    "jobType.fullTime": "正社員",
    "jobType.contract": "契約社員",
    "jobType.partTime": "アルバイト・パート",
    "jobType.dispatch": "派遣社員",
    "jobType.freelance": "業務委託",

    // Footer
    "footer.quickLinks": "クイックリンク",
    "footer.support": "サポート",
    "footer.contact": "お問い合わせ",
    "footer.copyright": "© 2024 ベトナム清掃求人. All rights reserved. | 日本在住ベトナム人向け清掃求人サイト",
  },
  vn: {
    // Header
    "header.home": "Trang chủ",
    "header.jobList": "Danh sách việc làm",

    // Hero
    "hero.title": "Tìm việc làm dọn dẹp dân cư tại Nhật Bản",
    "hero.subtitle":
      "Chúng tôi cung cấp thông tin việc làm dọn dẹp trên toàn Nhật Bản đang tuyển dụng. Người mới cũng có thể! Hãy tìm nơi làm việc mà bạn có thể phát huy năng lực.",

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
    searchResults: "Kết quả tìm kiếm",
    jobsFound: "{count} việc làm được tìm thấy",
    sortBy: "Sắp xếp theo:",
    newest: "Mới nhất",
    salary: "Lương",
    popularity: "Phổ biến",
    urgent: "Tuyển gấp",
    viewDetails: "Xem chi tiết",
    apply: "Ứng tuyển",
    postedDate: "Ngày đăng: {date}",
    previous: "Trước",
    next: "Tiếp theo",

    // Hero search
    "hero.search.job": "Tìm kiếm công việc",
    "hero.search.location": "Địa điểm",
    "hero.search.button": "Tìm kiếm",

    // Hero stats (if used)
    "hero.stats.users": "15,000+ người dùng",
    "hero.stats.companies": "1,200+ công ty",
    "hero.stats.satisfaction": "98% hài lòng",

    // Job Types
    "jobType.fullTime": "Nhân viên chính thức",
    "jobType.contract": "Nhân viên hợp đồng",
    "jobType.partTime": "Bán thời gian",
    "jobType.dispatch": "Nhân viên cử đi",
    "jobType.freelance": "Ủy thác công việc",

    // Footer
    "footer.quickLinks": "Liên kết nhanh",
    "footer.support": "Hỗ trợ",
    "footer.contact": "Liên hệ",
    "footer.copyright":
      "© 2024 Việc làm dọn dẹp Việt Nam. Tất cả quyền được bảo lưu. | Trang việc làm dọn dẹp dành cho người Việt tại Nhật",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ja")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "ja" || savedLanguage === "vn")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
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
