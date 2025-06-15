"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, DollarSign, Building } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function FeaturedJobs() {
  const { t, language } = useLanguage()

  const featuredJobs = [
    {
      id: 1,
      title: language === "ja" ? "民泊清掃スタッフ（東京）" : "Nhân viên dọn dẹp dân cư (Tokyo)",
      company: language === "ja" ? "東京クリーンサービス" : "Tokyo Clean Service",
      location: language === "ja" ? "東京都渋谷区" : "Shibuya, Tokyo",
      salary: language === "ja" ? "月給 25万円" : "57.5 triệu VND/tháng",
      type: t("jobType.fullTime"),
      tags:
        language === "ja"
          ? ["未経験歓迎", "研修充実", "交通費支給"]
          : ["Chào đón người mới", "Đào tạo đầy đủ", "Hỗ trợ đi lại"],
      urgent: true,
    },
    {
      id: 2,
      title: language === "ja" ? "民泊清掃スタッフ（大阪）" : "Nhân viên dọn dẹp dân cư (Osaka)",
      company: language === "ja" ? "大阪クリーンサービス" : "Osaka Clean Service",
      location: language === "ja" ? "大阪府大阪市" : "Osaka, Osaka",
      salary: language === "ja" ? "月給 24万円" : "55.2 triệu VND/tháng",
      type: t("jobType.fullTime"),
      tags:
        language === "ja"
          ? ["制服貸与", "社会保険完備", "昇給あり"]
          : ["Cung cấp đồng phục", "Bảo hiểm đầy đủ", "Tăng lương"],
      urgent: false,
    },
    {
      id: 3,
      title: language === "ja" ? "民泊清掃スタッフ（名古屋）" : "Nhân viên dọn dẹp dân cư (Nagoya)",
      company: language === "ja" ? "名古屋クリーンサービス" : "Nagoya Clean Service",
      location: language === "ja" ? "愛知県名古屋市" : "Nagoya, Aichi",
      salary: language === "ja" ? "時給 1,400円" : "32,200 VND/giờ",
      type: t("jobType.partTime"),
      tags:
        language === "ja"
          ? ["週3日〜OK", "車通勤可", "主婦歓迎"]
          : ["3 ngày/tuần OK", "Đi làm bằng xe", "Chào đón phụ nữ"],
      urgent: true,
    },
    {
      id: 4,
      title: language === "ja" ? "民泊清掃スタッフ（福岡）" : "Nhân viên dọn dẹp dân cư (Fukuoka)",
      company: language === "ja" ? "福岡クリーンサービス" : "Fukuoka Clean Service",
      location: language === "ja" ? "福岡県福岡市" : "Fukuoka, Fukuoka",
      salary: language === "ja" ? "月給 23万円" : "52.9 triệu VND/tháng",
      type: t("jobType.contract"),
      tags:
        language === "ja"
          ? ["夜勤なし", "土日休み", "長期安定"]
          : ["Không ca đêm", "Nghỉ cuối tuần", "Ổn định lâu dài"],
      urgent: false,
    },
  ]

  return (
    <section id="featured-jobs" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{t("featured.title")}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("featured.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                    {job.urgent && (
                      <Badge className="bg-red-500 hover:bg-red-600 text-white">{t("featured.urgent")}</Badge>
                    )}
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Building className="h-4 w-4 mr-2" />
                    {job.company}
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="h-4 w-4 mr-2" />
                  {job.salary}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  {job.type}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {job.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-amber-100 text-amber-800">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button className="w-full bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600">
                {t("featured.details")}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
