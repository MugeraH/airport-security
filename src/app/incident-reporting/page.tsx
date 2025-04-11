"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Save, AlertTriangle, Search, FileText } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export default function IncidentReportingPage() {
  const [incidentType, setIncidentType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          href="/"
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-6">Incident Reporting</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>New Incident Report</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="flightNumber">Flight Number</Label>
                    <Input id="flightNumber" placeholder="e.g. KQ100" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="aircraftReg">Aircraft Registration</Label>
                    <Input id="aircraftReg" placeholder="e.g. 5Y-KZE" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Time</Label>
                    <Input id="time" type="time" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="incidentType">Incident Type</Label>
                  <Select value={incidentType} onValueChange={setIncidentType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select incident type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="unauthorized_access">
                        Unauthorized Access
                      </SelectItem>
                      <SelectItem value="suspicious_item">
                        Suspicious Item
                      </SelectItem>
                      <SelectItem value="security_breach">
                        Security Breach
                      </SelectItem>
                      <SelectItem value="pilferage">Pilferage</SelectItem>
                      <SelectItem value="documentation_issue">
                        Documentation Issue
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="e.g. Gate 10, Cargo Area, etc."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Incident Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide a detailed description of the incident"
                    className="min-h-[120px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="actionTaken">Action Taken</Label>
                  <Textarea
                    id="actionTaken"
                    placeholder="Describe any immediate actions taken"
                    className="min-h-[80px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="involvedPersonnel">Involved Personnel</Label>
                  <Input
                    id="involvedPersonnel"
                    placeholder="Names and roles of personnel involved"
                  />
                </div>

                <div className="flex justify-between">
                  <Button variant="outline">Clear Form</Button>
                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Submit Report
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Recent Incidents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search reports"
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="space-y-4">
                  <div className="border rounded-md p-3 hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center">
                          <AlertTriangle className="h-4 w-4 text-amber-500 mr-1" />
                          <span className="font-medium">Security Breach</span>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          KQ100 • 10 Apr 2025
                        </div>
                      </div>
                      <FileText className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>

                  <div className="border rounded-md p-3 hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center">
                          <AlertTriangle className="h-4 w-4 text-red-500 mr-1" />
                          <span className="font-medium">
                            Unauthorized Access
                          </span>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          KQ205 • 8 Apr 2025
                        </div>
                      </div>
                      <FileText className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>

                  <div className="border rounded-md p-3 hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center">
                          <AlertTriangle className="h-4 w-4 text-amber-500 mr-1" />
                          <span className="font-medium">Suspicious Item</span>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          KQ431 • 5 Apr 2025
                        </div>
                      </div>
                      <FileText className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>

                  <div className="border rounded-md p-3 hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center">
                          <AlertTriangle className="h-4 w-4 text-amber-500 mr-1" />
                          <span className="font-medium">
                            Documentation Issue
                          </span>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          KQ310 • 2 Apr 2025
                        </div>
                      </div>
                      <FileText className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  View All Reports
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
