"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, DollarSign, Building, Heart, Eye } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function JobsList() {
  const { t, language } = useLanguage()

  const jobs = [
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
      views: 245,
      saved: false,
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
      views: 189,
      saved: true,
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
      views: 156,
      saved: false,
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
      views: 203,
      saved: false,
    },
    {
      id: 5,
      title: language === "ja" ? "民泊清掃スタッフ（京都）" : "Nhân viên dọn dẹp dân cư (Kyoto)",
      company: language === "ja" ? "京都クリーンサービス" : "Kyoto Clean Service",
      location: language === "ja" ? "京都府京都市" : "Kyoto, Kyoto",
      salary: language === "ja" ? "時給 1,300円" : "29,900 VND/giờ",
      type: t("jobType.partTime"),
      tags:
        language === "ja" ? ["シフト制", "週末勤務", "ボーナスあり"] : ["Làm theo ca", "Làm cuối tuần", "Có thưởng"],
      urgent: false,
      views: 134,
      saved: true,
    },
    {
      id: 6,
      title: language === "ja" ? "民泊清掃スタッフ（神戸）" : "Nhân viên dọn dẹp dân cư (Kobe)",
      company: language === "ja" ? "神戸クリーンサービス" : "Kobe Clean Service",
      location: language === "ja" ? "兵庫県神戸市" : "Kobe, Hyogo",
      salary: language === "ja" ? "月給 26万円" : "59.8 triệu VND/tháng",
      type: t("jobType.fullTime"),
      tags:
        language === "ja"
          ? ["専門研修", "資格取得支援", "安定雇用"]
          : ["Đào tạo chuyên môn", "Hỗ trợ lấy chứng chỉ", "Việc làm ổn định"],
      urgent: false,
      views: 178,
      saved: false,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center"
      >
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{t("searchResults")}</h2>
          <p className="text-gray-600">{t("jobsFound", { count: 5247 })}</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">{t("sortBy")}:</span>
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <option>{t("newest")}</option>
            <option>{t("salary")}</option>
            <option>{t("popularity")}</option>
          </select>
        </div>
      </motion.div>

      {/* Jobs List */}
      <div className="space-y-4">
        {jobs.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-all duration-300 border border-gray-200">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-gray-800 hover:text-amber-600 cursor-pointer">
                        {job.title}
                      </h3>
                      {job.urgent && <Badge className="bg-red-500 hover:bg-red-600 text-white">{t("urgent")}</Badge>}
                    </div>
                    <div className="flex items-center text-gray-600 mb-3">
                      <Building className="h-4 w-4 mr-2" />
                      {job.company}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`${job.saved ? "text-red-500" : "text-gray-400"} hover:text-red-500`}
                    >
                      <Heart className={`h-5 w-5 ${job.saved ? "fill-current" : ""}`} />
                    </Button>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Eye className="h-4 w-4 mr-1" />
                      {job.views}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
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

                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">{t("postedDate", { date: `2024年1月${15 + index}日` })}</div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      {t("viewDetails")}
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600"
                    >
                      {t("apply")}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex justify-center items-center space-x-2 pt-8"
      >
        <Button variant="outline" disabled>
          {t("previous")}
        </Button>
        <Button className="bg-gradient-to-r from-amber-500 to-red-500">1</Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
        <span className="px-2">...</span>
        <Button variant="outline">10</Button>
        <Button variant="outline">{t("next")}</Button>
      </motion.div>
    </div>
  )
}
