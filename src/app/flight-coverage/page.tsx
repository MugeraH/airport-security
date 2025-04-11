"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeft, Plus, Save, Plane, Clock } from "lucide-react";

export default function FlightCoveragePage() {
  const [flightType, setFlightType] = useState("departure");

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

      <h1 className="text-2xl font-bold mb-6">Flight Coverage</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Flight Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="flightType">Flight Type</Label>
                    <Select value={flightType} onValueChange={setFlightType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select flight type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="arrival">Arrival</SelectItem>
                        <SelectItem value="departure">Departure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="flightNumber">Flight Number</Label>
                    <Input id="flightNumber" placeholder="e.g. KQ100" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="aircraftReg">Aircraft Registration</Label>
                    <Input id="aircraftReg" placeholder="e.g. 5Y-KZE" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="operator">Operator</Label>
                    <Input id="operator" placeholder="e.g. Kenya Airways" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="scheduledTime">Scheduled Time</Label>
                    <Input id="scheduledTime" type="time" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="actualTime">Actual Time</Label>
                    <Input id="actualTime" type="time" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="remarks">Remarks</Label>
                  <Textarea
                    id="remarks"
                    placeholder="Add any additional information here"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Ground Personnel</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Pass ID</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>Loader</TableCell>
                    <TableCell>Kenya Airways</TableCell>
                    <TableCell>KA12345</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        Verified
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>Driver</TableCell>
                    <TableCell>Ground Services</TableCell>
                    <TableCell>GS54321</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        Verified
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={6}>
                      <Button variant="outline" size="sm" className="w-full">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Personnel
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Flight Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-center py-4">
                  <div className="text-center">
                    <Plane
                      className={`h-16 w-16 mx-auto ${
                        flightType === "arrival" ? "rotate-90" : "-rotate-90"
                      } text-red-600`}
                    />
                    <span className="block mt-2 text-lg font-medium">
                      {flightType === "arrival" ? "Arrival" : "Departure"}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Flight:</span>
                    <span className="font-medium">KQ100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Aircraft:</span>
                    <span className="font-medium">5Y-KZE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Date:</span>
                    <span className="font-medium">11 Apr 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Scheduled:</span>
                    <span className="font-medium">10:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Status:</span>
                    <span className="font-medium flex items-center">
                      <Clock className="mr-1 h-4 w-4 text-amber-500" />
                      On Time
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Personnel:</span>
                    <span className="font-medium">2 Verified</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Security Checks:</span>
                    <span className="font-medium">Pending</span>
                  </div>
                </div>

                <Button className="w-full">
                  <Save className="mr-2 h-4 w-4" />
                  Save Coverage Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
