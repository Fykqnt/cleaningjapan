"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"

export default function JobFilters() {
  const { t, language } = useLanguage()

  const jobTypes = [
    t("jobType.fullTime"),
    t("jobType.contract"),
    t("jobType.partTime"),
    t("jobType.dispatch"),
    t("jobType.freelance"),
  ]

  const locations =
    language === "ja"
      ? ["東京都", "大阪府", "神奈川県", "愛知県", "埼玉県", "千葉県", "兵庫県", "福岡県"]
      : ["Tokyo", "Osaka", "Kanagawa", "Aichi", "Saitama", "Chiba", "Hyogo", "Fukuoka"]

  const industries = [
    t("categories.vacation"),
    t("categories.hotel"),
    t("categories.office"),
    t("categories.residential"),
    t("categories.commercial"),
    t("categories.hospital"),
    t("categories.restaurant"),
    t("categories.maintenance"),
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Employment Type */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{language === "ja" ? "雇用形態" : "Hình thức làm việc"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {jobTypes.map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox id={type} />
              <Label htmlFor={type} className="text-sm font-normal">
                {type}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Location */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{language === "ja" ? "勤務地" : "Địa điểm làm việc"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {locations.map((location) => (
            <div key={location} className="flex items-center space-x-2">
              <Checkbox id={location} />
              <Label htmlFor={location} className="text-sm font-normal">
                {location}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Industry */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{language === "ja" ? "業界・職種" : "Ngành nghề"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {industries.map((industry) => (
            <div key={industry} className="flex items-center space-x-2">
              <Checkbox id={industry} />
              <Label htmlFor={industry} className="text-sm font-normal">
                {industry}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Salary Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{language === "ja" ? "年収" : "Lương năm"}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider defaultValue={[300]} max={1000} min={200} step={50} className="w-full" />
            <div className="flex justify-between text-sm text-gray-600">
              <span>{language === "ja" ? "200万円" : "200 triệu yen"}</span>
              <span>{language === "ja" ? "1000万円" : "1000 triệu yen"}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Apply Filters */}
      <Button className="w-full bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600">
        {language === "ja" ? "フィルターを適用" : "Áp dụng bộ lọc"}
      </Button>

      {/* Clear Filters */}
      <Button variant="outline" className="w-full">
        {language === "ja" ? "フィルターをクリア" : "Xóa bộ lọc"}
      </Button>
    </motion.div>
  )
}
