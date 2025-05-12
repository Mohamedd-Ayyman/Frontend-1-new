
import React, { useState } from 'react';
import DashboardLayout from '../components/Dashboard/DashboardLayout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Settings as SettingsIcon, Bell, Shield, Smartphone, Moon, Sun } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

// Example notification settings
const initialNotificationSettings = {
  email: {
    appointments: true,
    reminders: true,
    billing: true,
    marketing: false,
  },
  push: {
    appointments: true,
    reminders: true,
    billing: false,
    marketing: false,
  },
  sms: {
    appointments: true,
    reminders: false,
    billing: false,
    marketing: false,
  }
};

const Settings = () => {
  const { toast } = useToast();
  const [notificationSettings, setNotificationSettings] = useState(initialNotificationSettings);
  const [darkMode, setDarkMode] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  
  // For demonstration purposes
  const userRole: 'admin' | 'staff' | 'patient' = 'patient';

  const form = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const handleSaveNotifications = () => {
    toast({
      title: "Notification Settings Updated",
      description: "Your notification preferences have been saved.",
    });
  };

  const handleSaveAppearance = () => {
    toast({
      title: "Appearance Settings Updated",
      description: `Dark mode is now ${darkMode ? 'enabled' : 'disabled'}.`,
    });
  };

  const handleSaveSecurity = () => {
    toast({
      title: "Security Settings Updated",
      description: `Two-factor authentication is now ${twoFactorAuth ? 'enabled' : 'disabled'}.`,
    });
  };

  const handlePasswordChange = (values: any) => {
    console.log(values);
    toast({
      title: "Password Changed",
      description: "Your password has been successfully updated.",
    });
    form.reset();
  };

  const handleNotificationChange = (category: string, type: string, checked: boolean) => {
    setNotificationSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [type]: checked,
      }
    }));
  };

  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Settings</h1>

        <Tabs defaultValue="notifications">
          <TabsList className="mb-6">
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="mr-2" size={18} />
                  Notification Preferences
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Email Notifications */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Email Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="email-appointments" className="text-base">Appointments</Label>
                          <p className="text-sm text-gray-500">Receive emails about your upcoming appointments</p>
                        </div>
                        <Switch 
                          id="email-appointments" 
                          checked={notificationSettings.email.appointments}
                          onCheckedChange={(checked) => handleNotificationChange('email', 'appointments', checked)}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="email-reminders" className="text-base">Medication Reminders</Label>
                          <p className="text-sm text-gray-500">Receive emails about medication schedules</p>
                        </div>
                        <Switch 
                          id="email-reminders" 
                          checked={notificationSettings.email.reminders}
                          onCheckedChange={(checked) => handleNotificationChange('email', 'reminders', checked)}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="email-billing" className="text-base">Billing Updates</Label>
                          <p className="text-sm text-gray-500">Receive emails about invoices and payments</p>
                        </div>
                        <Switch 
                          id="email-billing" 
                          checked={notificationSettings.email.billing}
                          onCheckedChange={(checked) => handleNotificationChange('email', 'billing', checked)}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="email-marketing" className="text-base">Marketing</Label>
                          <p className="text-sm text-gray-500">Receive promotional emails and newsletters</p>
                        </div>
                        <Switch 
                          id="email-marketing" 
                          checked={notificationSettings.email.marketing}
                          onCheckedChange={(checked) => handleNotificationChange('email', 'marketing', checked)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Push Notifications */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Push Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="push-appointments" className="text-base">Appointments</Label>
                          <p className="text-sm text-gray-500">Receive push notifications about your upcoming appointments</p>
                        </div>
                        <Switch 
                          id="push-appointments" 
                          checked={notificationSettings.push.appointments}
                          onCheckedChange={(checked) => handleNotificationChange('push', 'appointments', checked)}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="push-reminders" className="text-base">Medication Reminders</Label>
                          <p className="text-sm text-gray-500">Receive push notifications about medication schedules</p>
                        </div>
                        <Switch 
                          id="push-reminders" 
                          checked={notificationSettings.push.reminders}
                          onCheckedChange={(checked) => handleNotificationChange('push', 'reminders', checked)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* SMS Notifications */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">SMS Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="sms-appointments" className="text-base">Appointments</Label>
                          <p className="text-sm text-gray-500">Receive SMS about your upcoming appointments</p>
                        </div>
                        <Switch 
                          id="sms-appointments" 
                          checked={notificationSettings.sms.appointments}
                          onCheckedChange={(checked) => handleNotificationChange('sms', 'appointments', checked)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t p-4">
                <Button onClick={handleSaveNotifications}>Save Notification Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-2" size={18} />
                    Two-Factor Authentication
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-medium">Enable Two-Factor Authentication</h3>
                      <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                    </div>
                    <Switch 
                      checked={twoFactorAuth}
                      onCheckedChange={setTwoFactorAuth}
                    />
                  </div>
                  
                  {twoFactorAuth && (
                    <div className="mt-6 space-y-4">
                      <div>
                        <p className="text-sm">Two-factor authentication adds an extra layer of security to your account. When enabled, you'll be asked for a verification code in addition to your password when you sign in.</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Verification Method</h4>
                        <div className="flex items-center space-x-2">
                          <Smartphone size={16} />
                          <span className="text-sm">SMS to (***) ***-7890</span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="border-t p-4">
                  <Button onClick={handleSaveSecurity}>Save Security Settings</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Change Password</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(handlePasswordChange)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="currentPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current Password</FormLabel>
                            <FormControl>
                              <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="newPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>New Password</FormLabel>
                            <FormControl>
                              <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Confirm New Password</FormLabel>
                            <FormControl>
                              <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit">Update Password</Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="appearance">
            <Card>
              <CardHeader>
                <CardTitle>Display Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium">Dark Mode</h3>
                    <p className="text-sm text-gray-500">Enable dark mode for a more comfortable viewing experience</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sun size={18} className={!darkMode ? "text-yellow-500" : "text-gray-400"} />
                    <Switch 
                      checked={darkMode}
                      onCheckedChange={setDarkMode}
                    />
                    <Moon size={18} className={darkMode ? "text-blue-500" : "text-gray-400"} />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t p-4">
                <Button onClick={handleSaveAppearance}>Save Display Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="advanced">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Data & Privacy</h3>
                    <div className="space-y-2">
                      <Button variant="outline">Export Medical Records</Button>
                      <p className="text-sm text-gray-500 mt-1">Download a copy of your complete medical records</p>
                      
                      <div className="mt-4">
                        <Button variant="outline" className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600">
                          Delete Account
                        </Button>
                        <p className="text-sm text-gray-500 mt-1">
                          This will permanently erase your account and all associated data
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Language</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="language">Preferred Language</Label>
                        <select
                          id="language"
                          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="en">English</option>
                          <option value="es">Spanish</option>
                          <option value="fr">French</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t p-4">
                <Button>Save Advanced Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
