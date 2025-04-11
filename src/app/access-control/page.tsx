"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Check, UserCheck, Camera, Search } from "lucide-react";

export default function AccessControlPage() {
  const [staffId, setStaffId] = useState("");
  const [searchResults, setSearchResults] = useState<null | {
    name: string;
    company: string;
    position: string;
    passValidity: string;
    status: "valid" | "expired" | "suspended";
  }>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate API call
    if (staffId) {
      setSearchResults({
        name: "John Doe",
        company: "Kenya Airways",
        position: "Ground Handling",
        passValidity: "31 Dec 2025",
        status: "valid",
      });
    }
  };

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

      <h1 className="text-2xl font-bold mb-6">Aircraft Access Control</h1>

      <Tabs defaultValue="verify">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="verify">Verify Staff</TabsTrigger>
          <TabsTrigger value="authorize">Authorize Access</TabsTrigger>
        </TabsList>

        <TabsContent value="verify">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Staff Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSearch} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="staffId">Airside Pass / Staff ID</Label>
                    <div className="flex space-x-2">
                      <Input
                        id="staffId"
                        value={staffId}
                        onChange={(e) => setStaffId(e.target.value)}
                        placeholder="Scan or enter ID"
                      />
                      <Button type="submit" size="icon">
                        <Search className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-center py-4">
                    <Button variant="outline" className="flex items-center">
                      <Camera className="mr-2 h-4 w-4" />
                      Scan Face
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {searchResults && (
              <Card>
                <CardHeader>
                  <CardTitle>Verification Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-center mb-4">
                      <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                        <UserCheck className="h-12 w-12 text-gray-400" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Name:</span>
                        <span>{searchResults.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Company:</span>
                        <span>{searchResults.company}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Position:</span>
                        <span>{searchResults.position}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Pass Validity:</span>
                        <span>{searchResults.passValidity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Status:</span>
                        <span
                          className={`font-semibold ${
                            searchResults.status === "valid"
                              ? "text-green-600"
                              : searchResults.status === "expired"
                              ? "text-red-600"
                              : "text-amber-600"
                          }`}
                        >
                          {searchResults.status.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    {searchResults.status === "valid" ? (
                      <Button className="w-full">
                        <Check className="mr-2 h-4 w-4" />
                        Authorize Access
                      </Button>
                    ) : (
                      <Button variant="destructive" className="w-full" disabled>
                        Access Denied
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="authorize">
          <Card>
            <CardHeader>
              <CardTitle>Digital Ticketing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Aircraft Registration</Label>
                  <Input placeholder="e.g. 5Y-KZE" />
                </div>

                <div className="space-y-2">
                  <Label>Flight Number</Label>
                  <Input placeholder="e.g. KQ100" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Input type="date" />
                  </div>

                  <div className="space-y-2">
                    <Label>Time</Label>
                    <Input type="time" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Authorized Personnel</Label>
                  <div className="border rounded-md p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span>John Doe (Ground Handling)</span>
                      <Button variant="outline" size="sm">
                        Remove
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Jane Smith (Catering)</span>
                      <Button variant="outline" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline">Add Personnel</Button>
                  <Button>Generate Digital Ticket</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
