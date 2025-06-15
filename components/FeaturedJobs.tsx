"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, DollarSign, Building } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function FeaturedJobs() {
  const { t } = useLanguage()

  const featuredJobs = [
    {
      id: 1,
      title: "Nhân viên dọn dẹp dân cư (Tokyo)",
      company: "Tokyo Clean Service",
      location: "Shibuya, Tokyo",
      salary: "57.5 triệu VND/tháng",
      type: t("jobType.fullTime"),
      tags: ["Chào đón người mới", "Đào tạo đầy đủ", "Hỗ trợ đi lại"],
      urgent: true,
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

              <Button 
                className="w-full bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSd15XqeNyFmX2JMWaTlfjcUuK4mM5p-XCcbv6zKxUO8nYeGGw/viewform?usp=header', '_blank')}
              >
                {t("featured.details")}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
