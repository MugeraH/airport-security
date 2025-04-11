import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Plane,
  Shield,
  Users,
  ClipboardCheck,
  FileText,
  AlertTriangle,
  ArrowUpRight,
  Clock,
  UserCheck,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">


      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">
          Electronic Access Control & Flight Coverage
        </h1>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Active Flights
                  </p>
                  <h3 className="text-3xl font-bold mt-1">24</h3>
                  <p className="text-xs text-green-600 mt-1 flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    <span>+3 from yesterday</span>
                  </p>
                </div>
                <div className="h-12 w-12 bg-red-50 rounded-full flex items-center justify-center">
                  <Plane className="h-6 w-6 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Security Checks
                  </p>
                  <h3 className="text-3xl font-bold mt-1">156</h3>
                  <p className="text-xs text-green-600 mt-1 flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    <span>+12 today</span>
                  </p>
                </div>
                <div className="h-12 w-12 bg-green-50 rounded-full flex items-center justify-center">
                  <ClipboardCheck className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Pending Incidents
                  </p>
                  <h3 className="text-3xl font-bold mt-1">3</h3>
                  <p className="text-xs text-amber-600 mt-1 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>Requires attention</span>
                  </p>
                </div>
                <div className="h-12 w-12 bg-amber-50 rounded-full flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Active Personnel
                  </p>
                  <h3 className="text-3xl font-bold mt-1">42</h3>
                  <p className="text-xs text-blue-600 mt-1 flex items-center">
                    <UserCheck className="h-3 w-3 mr-1" />
                    <span>5 on duty now</span>
                  </p>
                </div>
                <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Shield className="h-12 w-12 text-red-600 mb-4" />
                <h2 className="text-xl font-semibold mb-2">
                  Aircraft Access Control
                </h2>
                <p className="text-gray-600 mb-4">
                  Verify airside passes, staff details and control access to
                  aircraft
                </p>
                <Link href="/access-control">
                  <Button className="w-full">Access Control</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Plane className="h-12 w-12 text-red-600 mb-4" />
                <h2 className="text-xl font-semibold mb-2">Flight Coverage</h2>
                <p className="text-gray-600 mb-4">
                  Record flight details and validate airside passes for ground
                  personnel
                </p>
                <Link href="/flight-coverage">
                  <Button className="w-full">Flight Coverage</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <ClipboardCheck className="h-12 w-12 text-red-600 mb-4" />
                <h2 className="text-xl font-semibold mb-2">
                  Search/Check Form
                </h2>
                <p className="text-gray-600 mb-4">
                  Log real-time security checks with timestamps and
                  area-specific options
                </p>
                <Link href="/search-check">
                  <Button className="w-full">Search/Check Form</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <FileText className="h-12 w-12 text-red-600 mb-4" />
                <h2 className="text-xl font-semibold mb-2">
                  General Declaration
                </h2>
                <p className="text-gray-600 mb-4">
                  Confirm and digitally tick pilot, crew, engineer, and security
                  personnel details
                </p>
                <Link href="/general-declaration">
                  <Button className="w-full">General Declaration</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <AlertTriangle className="h-12 w-12 text-red-600 mb-4" />
                <h2 className="text-xl font-semibold mb-2">
                  Incident Reporting
                </h2>
                <p className="text-gray-600 mb-4">
                  Add comments/remarks for unusual occurrences during operations
                </p>
                <Link href="/incident-reporting">
                  <Button className="w-full">Incident Reporting</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-red-600 mb-4" />
                <h2 className="text-xl font-semibold mb-2">Staff Management</h2>
                <p className="text-gray-600 mb-4">
                  Manage security personnel and their access permissions
                </p>
                <Link href="/staff-management">
                  <Button className="w-full">Staff Management</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-gray-100 border-t py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Kenya Airways Security System. All
          rights reserved.
        </div>
      </footer>
    </div>
  );
}
