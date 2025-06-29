import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy - Cleaning Japan",
  description: "Privacy Policy for Cleaning Japan's cleaning staff matching service",
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            This Privacy Policy explains how we, B-Curve Co., Ltd. (hereinafter referred to as "the Company"), 
            handle personal information in connection with our cleaning staff matching service, which connects 
            Vietnamese workers with employers in need of cleaning services.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-800">1. Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              We may collect the following types of personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Personal details: name, gender, date of birth, phone number, email address, LINE account, etc.</li>
              <li>Work-related information: nationality, visa/residence status, language proficiency, work experience, desired work location, etc.</li>
              <li>Employer information: company name, contact person name, phone number, job requirements, etc.</li>
              <li>Communication data: inquiry history, chat logs, interview records</li>
              <li>Technical data: access logs, IP addresses, browser type, and cookies (for analytics and service improvement)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-800">2. Purpose of Use</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              The personal information we collect is used for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>To facilitate job matching between cleaning staff and employers</li>
              <li>To contact users regarding job offers, interviews, contracts, and other recruitment processes</li>
              <li>To respond to inquiries and provide customer support</li>
              <li>To comply with applicable laws and regulations</li>
              <li>To analyze service usage trends and improve the quality of our service (in anonymized and aggregated form)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-800">3. Sharing and Disclosure</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              We do not disclose personal information to third parties except in the following cases:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>With the explicit consent of the individual</li>
              <li>When sharing with employers as part of the matching process</li>
              <li>When required by law or regulation</li>
              <li>When necessary to protect life, body, or property and obtaining consent is difficult</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-800">4. Data Processing by Third Parties</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              We may entrust personal information to trusted external service providers (e.g., cloud platforms, 
              recruitment partners) only when necessary for business operations. In such cases, we will ensure 
              appropriate contracts and supervision are in place.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-800">5. Data Security</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              We implement appropriate organizational and technical security measures to protect personal 
              information from unauthorized access, leakage, loss, or tampering.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-800">6. Access, Correction, and Deletion</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              If you wish to access, correct, or delete your personal information, please contact us via 
              the contact information below. We will respond appropriately and without undue delay.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-800">7. Policy Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              This Privacy Policy may be revised from time to time. Any changes will be published on our 
              official communication channels such as our website or LINE account.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-800">8. Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-gray-700">
              <strong>Company Name:</strong> B-Curve Co., Ltd. (株式会社Ｂ‐Ｃｕｒｖｅ)
            </p>
            <p className="text-gray-700">
              <strong>Address:</strong> 1-11-4 Jinnan, Shibuya-ku, Tokyo, Japan
            </p>
            <p className="text-gray-700">
              <strong>Company Registration:</strong> 2011001170481
            </p>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-gray-500 mt-12">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
} 