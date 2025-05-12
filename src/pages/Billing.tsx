import React, { useState } from "react";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  Receipt,
  CreditCard,
  Download,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Example billing data
const billingHistory = [
  {
    id: "INV-001",
    date: "May 01, 2025",
    service: "Annual Checkup",
    amount: 150.0,
    status: "Paid",
  },
  {
    id: "INV-002",
    date: "Apr 15, 2025",
    service: "Blood Work",
    amount: 75.5,
    status: "Paid",
  },
  {
    id: "INV-003",
    date: "Mar 22, 2025",
    service: "X-Ray",
    amount: 250.0,
    status: "Pending",
  },
  {
    id: "INV-004",
    date: "Feb 10, 2025",
    service: "Consultation",
    amount: 100.0,
    status: "Paid",
  },
];

// Example insurance data
const insuranceDetails = {
  provider: "HealthShield Insurance",
  policyNumber: "HSI-293847556",
  groupNumber: "G-38373",
  coverage: "80% after deductible",
  deductible: "$1,000.00",
  deductibleMet: "$750.00",
  contactNumber: "(800) 555-1234",
};

// Example payment methods
const paymentMethods = [
  { id: 1, type: "Visa", last4: "4242", expiry: "05/28", default: true },
  { id: 2, type: "Mastercard", last4: "5555", expiry: "09/26", default: false },
];

const Billing = () => {
  const { toast } = useToast();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  // For demonstration purposes
  const userRole: "admin" | "staff" | "patient" = "patient";

  const handlePayment = () => {
    toast({
      title: "Payment Successful",
      description: "Your payment has been processed successfully.",
    });
  };

  const handleDownloadInvoice = (invoiceId: string) => {
    toast({
      title: "Downloading Invoice",
      description: `Invoice ${invoiceId} is being downloaded.`,
    });
  };

  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Billing & Payments</h1>
          <Button
            onClick={handlePayment}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <CreditCard className="mr-2 h-4 w-4" />
            Make a Payment
          </Button>
        </div>

        <Tabs defaultValue="history">
          <TabsList className="mb-6">
            <TabsTrigger value="history">Billing History</TabsTrigger>
            <TabsTrigger value="insurance">Insurance</TabsTrigger>
            <TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
          </TabsList>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Receipt className="mr-2" size={18} />
                  Billing History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {billingHistory.map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell className="font-medium">
                          {invoice.id}
                        </TableCell>
                        <TableCell>{invoice.date}</TableCell>
                        <TableCell>{invoice.service}</TableCell>
                        <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              invoice.status === "Paid"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {invoice.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1"
                            onClick={() => handleDownloadInvoice(invoice.id)}
                          >
                            <Download size={14} />
                            Download
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex justify-between border-t p-4">
                <div className="text-sm text-gray-500">
                  Showing 4 of 4 invoices
                </div>
                <div>
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="ml-2" disabled>
                    Next
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="insurance">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Receipt className="mr-2" size={18} />
                  Insurance Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Provider</h3>
                    <p className="text-gray-700">{insuranceDetails.provider}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Policy Number</h3>
                    <p className="text-gray-700">
                      {insuranceDetails.policyNumber}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Group Number</h3>
                    <p className="text-gray-700">
                      {insuranceDetails.groupNumber}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Coverage</h3>
                    <p className="text-gray-700">{insuranceDetails.coverage}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Annual Deductible</h3>
                    <p className="text-gray-700">
                      {insuranceDetails.deductible}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Deductible Met</h3>
                    <p className="text-gray-700">
                      {insuranceDetails.deductibleMet}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Contact Information</h3>
                  <p className="text-gray-700">
                    For insurance questions: {insuranceDetails.contactNumber}
                  </p>
                </div>

                <Collapsible
                  open={isDetailsOpen}
                  onOpenChange={setIsDetailsOpen}
                  className="mt-6 border rounded-md p-4"
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex w-full justify-between"
                    >
                      <span>Show Coverage Details</span>
                      {isDetailsOpen ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-sm">Primary Care</h4>
                        <p className="text-sm">$25 copay</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Specialist</h4>
                        <p className="text-sm">$40 copay</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Emergency Room</h4>
                        <p className="text-sm">$150 copay</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Urgent Care</h4>
                        <p className="text-sm">$50 copay</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">
                          Prescription Drugs
                        </h4>
                        <p className="text-sm">$10/$25/$50 tiers</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">
                          Out-of-Pocket Maximum
                        </h4>
                        <p className="text-sm">$5,000 individual</p>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payment-methods">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="mr-2" size={18} />
                  Payment Methods
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className="flex items-center justify-between p-4 border rounded-md"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <CreditCard className="text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">
                            {method.type} •••• {method.last4}
                          </p>
                          <p className="text-sm text-gray-500">
                            Expires {method.expiry}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        {method.default && (
                          <span className="bg-blue-100 text-blue-700 text-xs font-semibold mr-3 px-2.5 py-0.5 rounded">
                            Default
                          </span>
                        )}
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Button className="w-full">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Add Payment Method
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Billing;
