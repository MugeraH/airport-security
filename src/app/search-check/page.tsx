"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Clock, CheckCircle2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export default function SearchCheckPage() {
  const [currentTime, setCurrentTime] = useState(() => {
    const now = new Date();
    return now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  });

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

      <h1 className="text-2xl font-bold mb-6">Search/Check Form</h1>

      <Tabs defaultValue="aircraft">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="aircraft">Aircraft</TabsTrigger>
          <TabsTrigger value="cargo">Cargo</TabsTrigger>
          <TabsTrigger value="catering">Catering</TabsTrigger>
        </TabsList>

        <TabsContent value="aircraft">
          <Card>
            <CardHeader>
              <CardTitle>Aircraft Security Check</CardTitle>
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
                    <Label htmlFor="checkTime">Check Time</Label>
                    <div className="relative">
                      <Input id="checkTime" value={currentTime} readOnly />
                      <Clock className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">External Areas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="check1" />
                      <Label htmlFor="check1" className="font-normal">
                        Wheel Wells
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="check2" />
                      <Label htmlFor="check2" className="font-normal">
                        Engine Cowlings
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="check3" />
                      <Label htmlFor="check3" className="font-normal">
                        APU Exhaust
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="check4" />
                      <Label htmlFor="check4" className="font-normal">
                        External Panels
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Internal Areas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="check5" />
                      <Label htmlFor="check5" className="font-normal">
                        Cabin
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="check6" />
                      <Label htmlFor="check6" className="font-normal">
                        Cockpit
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="check7" />
                      <Label htmlFor="check7" className="font-normal">
                        Lavatories
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="check8" />
                      <Label htmlFor="check8" className="font-normal">
                        Overhead Bins
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="check9" />
                      <Label htmlFor="check9" className="font-normal">
                        Cargo Holds
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="check10" />
                      <Label htmlFor="check10" className="font-normal">
                        Galley Areas
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="remarks">Remarks</Label>
                  <Textarea
                    id="remarks"
                    placeholder="Add any findings or observations here"
                  />
                </div>

                <div className="flex justify-between">
                  <Button variant="outline">Clear Form</Button>
                  <Button>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Complete Check
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cargo">
          <Card>
            <CardHeader>
              <CardTitle>Cargo Security Check</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="flightNumber">Flight Number</Label>
                    <Input id="flightNumber" placeholder="e.g. KQ100" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cargoRef">Cargo Reference</Label>
                    <Input id="cargoRef" placeholder="e.g. CRG12345" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="checkTime">Check Time</Label>
                    <div className="relative">
                      <Input id="checkTime" value={currentTime} readOnly />
                      <Clock className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Cargo Checks</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="cargo1" />
                      <Label htmlFor="cargo1" className="font-normal">
                        Manifest Verification
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="cargo2" />
                      <Label htmlFor="cargo2" className="font-normal">
                        X-Ray Screening
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="cargo3" />
                      <Label htmlFor="cargo3" className="font-normal">
                        Physical Inspection
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="cargo4" />
                      <Label htmlFor="cargo4" className="font-normal">
                        Seal Verification
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="cargo5" />
                      <Label htmlFor="cargo5" className="font-normal">
                        Dangerous Goods Check
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="cargo6" />
                      <Label htmlFor="cargo6" className="font-normal">
                        Security Declaration
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="remarks">Remarks</Label>
                  <Textarea
                    id="remarks"
                    placeholder="Add any findings or observations here"
                  />
                </div>

                <div className="flex justify-between">
                  <Button variant="outline">Clear Form</Button>
                  <Button>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Complete Check
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="catering">
          <Card>
            <CardHeader>
              <CardTitle>Catering Security Check</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="flightNumber">Flight Number</Label>
                    <Input id="flightNumber" placeholder="e.g. KQ100" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cateringRef">Catering Reference</Label>
                    <Input id="cateringRef" placeholder="e.g. CAT12345" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="checkTime">Check Time</Label>
                    <div className="relative">
                      <Input id="checkTime" value={currentTime} readOnly />
                      <Clock className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Catering Checks</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="catering1" />
                      <Label htmlFor="catering1" className="font-normal">
                        Delivery Vehicle Inspection
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="catering2" />
                      <Label htmlFor="catering2" className="font-normal">
                        Seal Verification
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="catering3" />
                      <Label htmlFor="catering3" className="font-normal">
                        Cart Inspection
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="catering4" />
                      <Label htmlFor="catering4" className="font-normal">
                        Random Item Check
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="catering5" />
                      <Label htmlFor="catering5" className="font-normal">
                        Staff Verification
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="catering6" />
                      <Label htmlFor="catering6" className="font-normal">
                        Documentation Check
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="remarks">Remarks</Label>
                  <Textarea
                    id="remarks"
                    placeholder="Add any findings or observations here"
                  />
                </div>

                <div className="flex justify-between">
                  <Button variant="outline">Clear Form</Button>
                  <Button>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Complete Check
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
