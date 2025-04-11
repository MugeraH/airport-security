"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  ArrowLeft,
  Search,
  Plus,
  MoreHorizontal,
  Edit,
  Trash,
  UserPlus,
  Users,
  Shield,
  Key,
  UserCheck,
  Filter,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock data for staff members
const initialStaff = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@kenyaairways.com",
    staffNumber: "KA12345",
    role: "Security Officer",
    department: "Terminal Security",
    status: "active",
    lastActive: "Today, 10:30 AM",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@kenyaairways.com",
    staffNumber: "KA23456",
    role: "Senior Security Officer",
    department: "Aircraft Security",
    status: "active",
    lastActive: "Today, 09:15 AM",
  },
  {
    id: "3",
    name: "Michael Johnson",
    email: "michael.johnson@kenyaairways.com",
    staffNumber: "KA34567",
    role: "Security Supervisor",
    department: "Cargo Security",
    status: "active",
    lastActive: "Yesterday, 04:45 PM",
  },
  {
    id: "4",
    name: "Sarah Williams",
    email: "sarah.williams@kenyaairways.com",
    staffNumber: "KA45678",
    role: "Security Officer",
    department: "Terminal Security",
    status: "inactive",
    lastActive: "10 Apr 2025, 02:30 PM",
  },
  {
    id: "5",
    name: "Robert Chen",
    email: "robert.chen@kenyaairways.com",
    staffNumber: "KA56789",
    role: "Security Manager",
    department: "Security Operations",
    status: "active",
    lastActive: "Today, 08:00 AM",
  },
];

export default function StaffManagementPage() {
  const [staff, setStaff] = useState(initialStaff);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStaff, setSelectedStaff] = useState<
    (typeof initialStaff)[0] | null
  >(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isPermissionsDialogOpen, setIsPermissionsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  // Filter staff based on search query and active tab
  const filteredStaff = staff.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.staffNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.department.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeTab === "all") return matchesSearch;
    if (activeTab === "active")
      return matchesSearch && member.status === "active";
    if (activeTab === "inactive")
      return matchesSearch && member.status === "inactive";
    return matchesSearch;
  });

  const handleAddStaff = () => {
    setSelectedStaff(null);
    setIsAddDialogOpen(true);
  };

  const handleEditStaff = (member: (typeof initialStaff)[0]) => {
    setSelectedStaff(member);
    setIsAddDialogOpen(true);
  };

  const handleManagePermissions = (member: (typeof initialStaff)[0]) => {
    setSelectedStaff(member);
    setIsPermissionsDialogOpen(true);
  };

  const handleToggleStatus = (id: string) => {
    setStaff(
      staff.map((member) =>
        member.id === id
          ? {
              ...member,
              status: member.status === "active" ? "inactive" : "active",
            }
          : member
      )
    );
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

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Staff Management</h1>
        <Button onClick={handleAddStaff}>
          <UserPlus className="mr-2 h-4 w-4" />
          Add Staff Member
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <CardTitle>Security Personnel</CardTitle>
            <div className="flex items-center mt-4 md:mt-0">
              <div className="relative mr-2">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search staff..."
                  className="pl-8 w-full md:w-[250px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter By</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setActiveTab("all")}>
                    All Staff
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setActiveTab("active")}>
                    Active Only
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setActiveTab("inactive")}>
                    Inactive Only
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs
            defaultValue="all"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Staff</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="inactive">Inactive</TabsTrigger>
            </TabsList>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Staff Number
                    </TableHead>
                    <TableHead className="hidden md:table-cell">Role</TableHead>
                    <TableHead className="hidden lg:table-cell">
                      Department
                    </TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden lg:table-cell">
                      Last Active
                    </TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStaff.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan={7}
                        className="text-center py-6 text-gray-500"
                      >
                        No staff members found
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredStaff.map((member) => (
                      <TableRow key={member.id}>
                        <TableCell>
                          <div className="font-medium">{member.name}</div>
                          <div className="text-sm text-gray-500 md:hidden">
                            {member.staffNumber}
                          </div>
                          <div className="text-sm text-gray-500 md:hidden">
                            {member.role}
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {member.staffNumber}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {member.role}
                        </TableCell>
                        <TableCell className="hidden lg:table-cell">
                          {member.department}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              member.status === "active"
                                ? "default"
                                : "secondary"
                            }
                            className={
                              member.status === "active"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                            }
                          >
                            {member.status === "active" ? "Active" : "Inactive"}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden lg:table-cell">
                          {member.lastActive}
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Open menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem
                                onClick={() => handleEditStaff(member)}
                              >
                                <Edit className="mr-2 h-4 w-4" />
                                Edit Details
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => handleManagePermissions(member)}
                              >
                                <Key className="mr-2 h-4 w-4" />
                                Manage Permissions
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => handleToggleStatus(member.id)}
                              >
                                {member.status === "active" ? (
                                  <>
                                    <Trash className="mr-2 h-4 w-4" />
                                    Deactivate
                                  </>
                                ) : (
                                  <>
                                    <UserCheck className="mr-2 h-4 w-4" />
                                    Reactivate
                                  </>
                                )}
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </Tabs>
        </CardContent>
      </Card>

      {/* Add/Edit Staff Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>
              {selectedStaff ? "Edit Staff Member" : "Add New Staff Member"}
            </DialogTitle>
            <DialogDescription>
              {selectedStaff
                ? "Update the details for this staff member."
                : "Enter the details of the new staff member."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  defaultValue={
                    selectedStaff ? selectedStaff.name.split(" ")[0] : ""
                  }
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  defaultValue={
                    selectedStaff ? selectedStaff.name.split(" ")[1] || "" : ""
                  }
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                defaultValue={selectedStaff?.email || ""}
                placeholder="john.doe@kenyaairways.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="staffNumber">Staff Number</Label>
              <Input
                id="staffNumber"
                defaultValue={selectedStaff?.staffNumber || ""}
                placeholder="KA12345"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select defaultValue={selectedStaff?.role || ""}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Security Officer">
                      Security Officer
                    </SelectItem>
                    <SelectItem value="Senior Security Officer">
                      Senior Security Officer
                    </SelectItem>
                    <SelectItem value="Security Supervisor">
                      Security Supervisor
                    </SelectItem>
                    <SelectItem value="Security Manager">
                      Security Manager
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Select defaultValue={selectedStaff?.department || ""}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Terminal Security">
                      Terminal Security
                    </SelectItem>
                    <SelectItem value="Aircraft Security">
                      Aircraft Security
                    </SelectItem>
                    <SelectItem value="Cargo Security">
                      Cargo Security
                    </SelectItem>
                    <SelectItem value="Security Operations">
                      Security Operations
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="active"
                  defaultChecked={
                    selectedStaff ? selectedStaff.status === "active" : true
                  }
                />
                <Label htmlFor="active" className="font-normal">
                  Active
                </Label>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsAddDialogOpen(false)}>
              {selectedStaff ? "Update Staff" : "Add Staff"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Permissions Dialog */}
      <Dialog
        open={isPermissionsDialogOpen}
        onOpenChange={setIsPermissionsDialogOpen}
      >
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Manage Permissions</DialogTitle>
            <DialogDescription>
              {selectedStaff
                ? `Set access permissions for ${selectedStaff.name}`
                : "Set access permissions"}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-gray-500" />
                  <Label className="font-medium">Access Control Module</Label>
                </div>
                <Select defaultValue="full">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Select access" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full">Full Access</SelectItem>
                    <SelectItem value="read">View Only</SelectItem>
                    <SelectItem value="none">No Access</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-gray-500" />
                  <Label className="font-medium">Flight Coverage Module</Label>
                </div>
                <Select defaultValue="full">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Select access" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full">Full Access</SelectItem>
                    <SelectItem value="read">View Only</SelectItem>
                    <SelectItem value="none">No Access</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Search className="h-5 w-5 text-gray-500" />
                  <Label className="font-medium">Search/Check Module</Label>
                </div>
                <Select defaultValue="full">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Select access" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full">Full Access</SelectItem>
                    <SelectItem value="read">View Only</SelectItem>
                    <SelectItem value="none">No Access</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Plus className="h-5 w-5 text-gray-500" />
                  <Label className="font-medium">Incident Reporting</Label>
                </div>
                <Select defaultValue="read">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Select access" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full">Full Access</SelectItem>
                    <SelectItem value="read">View Only</SelectItem>
                    <SelectItem value="none">No Access</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <UserPlus className="h-5 w-5 text-gray-500" />
                  <Label className="font-medium">Staff Management</Label>
                </div>
                <Select defaultValue="none">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Select access" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full">Full Access</SelectItem>
                    <SelectItem value="read">View Only</SelectItem>
                    <SelectItem value="none">No Access</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsPermissionsDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={() => setIsPermissionsDialogOpen(false)}>
              Save Permissions
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
