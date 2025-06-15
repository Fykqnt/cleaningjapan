"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, DollarSign, Building, Heart, Eye } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function JobsList() {
  const { t } = useLanguage()

  const jobs = [
    {
      id: 1,
      title: "Nhân viên dọn dẹp dân cư (Tokyo)",
      company: "Tokyo Clean Service",
      location: "Shibuya, Tokyo",
      salary: "57.5 triệu VND/tháng",
      type: t("jobType.fullTime"),
      tags: ["Chào đón người mới", "Đào tạo đầy đủ", "Hỗ trợ đi lại"],
      urgent: true,
      views: 245,
      saved: false,
    },
    {
      id: 2,
      title: "Nhân viên dọn dẹp dân cư (Osaka)",
      company: "Osaka Clean Service",
      location: "Osaka, Osaka",
      salary: "55.2 triệu VND/tháng",
      type: t("jobType.fullTime"),
      tags: ["Cung cấp đồng phục", "Bảo hiểm đầy đủ", "Tăng lương"],
      urgent: false,
      views: 189,
      saved: true,
    },
    {
      id: 3,
      title: "Nhân viên dọn dẹp dân cư (Nagoya)",
      company: "Nagoya Clean Service",
      location: "Nagoya, Aichi",
      salary: "32,200 VND/giờ",
      type: t("jobType.partTime"),
      tags: ["3 ngày/tuần OK", "Đi làm bằng xe", "Chào đón phụ nữ"],
      urgent: true,
      views: 156,
      saved: false,
    },
    {
      id: 4,
      title: "Nhân viên dọn dẹp dân cư (Fukuoka)",
      company: "Fukuoka Clean Service",
      location: "Fukuoka, Fukuoka",
      salary: "52.9 triệu VND/tháng",
      type: t("jobType.contract"),
      tags: ["Không ca đêm", "Nghỉ cuối tuần", "Ổn định lâu dài"],
      urgent: false,
      views: 203,
      saved: false,
    },
    {
      id: 5,
      title: "Nhân viên dọn dẹp dân cư (Kyoto)",
      company: "Kyoto Clean Service",
      location: "Kyoto, Kyoto",
      salary: "29,900 VND/giờ",
      type: t("jobType.partTime"),
      tags: ["Làm theo ca", "Làm cuối tuần", "Có thưởng"],
      urgent: false,
      views: 134,
      saved: true,
    },
    {
      id: 6,
      title: "Nhân viên dọn dẹp dân cư (Kobe)",
      company: "Kobe Clean Service",
      location: "Kobe, Hyogo",
      salary: "59.8 triệu VND/tháng",
      type: t("jobType.fullTime"),
      tags: ["Đào tạo chuyên môn", "Hỗ trợ lấy chứng chỉ", "Việc làm ổn định"],
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
          <h2 className="text-2xl font-bold text-gray-800">{t("jobs.results")}</h2>
          <p className="text-gray-600">5247 {t("jobs.found")}</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">{t("jobs.sortBy")}</span>
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <option>{t("jobs.newest")}</option>
            <option>{t("jobs.salary")}</option>
            <option>{t("jobs.popular")}</option>
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
                      {job.urgent && <Badge className="bg-red-500 hover:bg-red-600 text-white">{t("featured.urgent")}</Badge>}
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
                  <div className="text-sm text-gray-500">{t("jobs.posted")} {15 + index}/01/2024</div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      {t("featured.details")}
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600"
                    >
                      {t("jobs.apply")}
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
          Trước
        </Button>
        <Button className="bg-gradient-to-r from-amber-500 to-red-500">1</Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
        <span className="px-2">...</span>
        <Button variant="outline">10</Button>
        <Button variant="outline">Tiếp theo</Button>
      </motion.div>
    </div>
  )
}
