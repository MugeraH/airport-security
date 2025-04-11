"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeft, Save, UserCheck, Plus, FileCheck } from "lucide-react";

export default function GeneralDeclarationPage() {
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

      <h1 className="text-2xl font-bold mb-6">General Declaration</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Flight Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="flightNumber">Flight Number</Label>
                    <Input id="flightNumber" placeholder="e.g. KQ100" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="aircraftReg">Aircraft Registration</Label>
                    <Input id="aircraftReg" placeholder="e.g. 5Y-KZE" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="aircraftType">Aircraft Type</Label>
                    <Input id="aircraftType" placeholder="e.g. B787" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="departure">Departure</Label>
                    <Input id="departure" placeholder="e.g. NBO" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="arrival">Arrival</Label>
                    <Input id="arrival" placeholder="e.g. LHR" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Crew & Personnel</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>License/ID</TableHead>
                    <TableHead>Verified</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Capt. John Smith</TableCell>
                    <TableCell>Pilot in Command</TableCell>
                    <TableCell>PL12345</TableCell>
                    <TableCell>
                      <Checkbox id="verify1" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>F/O Jane Doe</TableCell>
                    <TableCell>First Officer</TableCell>
                    <TableCell>PL54321</TableCell>
                    <TableCell>
                      <Checkbox id="verify2" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Michael Johnson</TableCell>
                    <TableCell>Cabin Manager</TableCell>
                    <TableCell>CM78901</TableCell>
                    <TableCell>
                      <Checkbox id="verify3" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Sarah Williams</TableCell>
                    <TableCell>Cabin Crew</TableCell>
                    <TableCell>CC23456</TableCell>
                    <TableCell>
                      <Checkbox id="verify4" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Robert Chen</TableCell>
                    <TableCell>Engineer</TableCell>
                    <TableCell>EN34567</TableCell>
                    <TableCell>
                      <Checkbox id="verify5" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={4}>
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

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Security Verification</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox id="security1" />
                  <Label htmlFor="security1" className="font-normal">
                    Aircraft security check completed
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="security2" />
                  <Label htmlFor="security2" className="font-normal">
                    All crew members verified
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="security3" />
                  <Label htmlFor="security3" className="font-normal">
                    All documentation verified
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="security4" />
                  <Label htmlFor="security4" className="font-normal">
                    Cargo/baggage security procedures completed
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="security5" />
                  <Label htmlFor="security5" className="font-normal">
                    No security concerns identified
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Declaration Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-center py-4">
                  <div className="text-center">
                    <FileCheck className="h-16 w-16 mx-auto text-green-600" />
                    <span className="block mt-2 text-lg font-medium">
                      General Declaration
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
                    <span className="text-gray-500">Route:</span>
                    <span className="font-medium">NBO → LHR</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Crew:</span>
                    <span className="font-medium">5 Members</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Verified:</span>
                    <span className="font-medium flex items-center">
                      <UserCheck className="mr-1 h-4 w-4 text-green-500" />
                      All Verified
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Security Status:</span>
                    <span className="font-medium text-green-600">Cleared</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="securityOfficer">Security Officer</Label>
                  <Input id="securityOfficer" placeholder="Your name" />
                </div>

                <Button className="w-full">
                  <Save className="mr-2 h-4 w-4" />
                  Submit Declaration
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
