"use client";
import { useState, useRef, useEffect } from "react";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { Overview } from "@/components/overview";
import { RecentSales } from "@/components/recent-sales";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import MovieCardTop from "@/components/movies/movie-card-top";

import {
  // Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  //  Tabs,
    TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MovieCardBottom from "@/components/movies/moviecardbottom";
import BreadCrumb from "@/components/breadcrumb";
import { Heading } from "@/components/ui/heading";
import { motion } from "framer-motion";

import {Tabs, Tab,Card, CardBody} from "@nextui-org/react";

const breadcrumbItems = [{ title: "Products", link: "/dashboard/products" }];
export default function page() {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };

  const [selectedTab, setSelectedTab] = useState<string>("Popular");

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.25 }}
      variants={variants1}
    >
      <div className="flex-1 space-y-4  p-4 md:p-4 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        {/* <Heading title={`Products`} description="" />{" "} */}
      </div>

      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        {/* <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Hi Khaled, Welcome back 👋
          </h2>
          <div className="hidden md:flex items-center space-x-2">
            <CalendarDateRangePicker />
            <Button
              className="shadow-none"
              variant="outline"
              onClick={() =>
                toast("Event has been created", {
                  description: "Sunday, December 03, 2023 at 9:00 AM",
                  action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                  },
                })
              }
            >
              Add to Calendar
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm">Download</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add New Todo</DialogTitle>
                  <DialogDescription>
                    What do you want to get done today?
                  </DialogDescription>
                </DialogHeader>
                <form id="todo-form" className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Input
                      id="title"
                      name="title"
                      placeholder="Todo title..."
                      className="col-span-4"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Description..."
                      className="col-span-4"
                    />
                  </div>
                </form>
                <DialogFooter>
                  <DialogTrigger asChild>
                    <Button type="submit" size="sm" form="todo-form">
                      Add Todo
                    </Button>
                  </DialogTrigger>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div> */}





    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" className="bg-gray-100 dark:bg-zinc-800 rounded-sm  w-1/4">
        <Tab key="photos" title="Photos" className="rounded-md">
          <Card>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="music" title="Music">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="videos" title="Videos">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
  






        {/* <Tabs
          defaultValue="overview"
          className="space-y-4 border border-gray-300 rounded-md p-3"
        >
          <TabsList>
            <TabsTrigger value="overview">Home</TabsTrigger>
            <TabsTrigger value="Movies">Movies</TabsTrigger>
            <TabsTrigger value="TVShows">TV Shows</TabsTrigger>
            <TabsTrigger value="RecentlyAdded">Recently Added</TabsTrigger>
            <TabsTrigger value="MyList">My List</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Revenue
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Subscriptions
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-[#ff646c]">-350</div>
                  <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Sales</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-[#11c678]">
                    +12,234
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +19% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Now
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">
                    +21 since last hour
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <Card className="col-span-4 md:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <Card className="col-span-4 md:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="Movies" className="space-y-4">
            <div>
              <span className="text-black font-semibold">Keep Watching</span>
            </div>
            <MovieCardTop/>
            <Tabs defaultValue="Popular" className="space-y-4 ">
              <TabsList className="bg-transparent space-x-4">
                <TabsTrigger
                  value="Popular"
                  className="text-md p-1"
                  style={{
                    backgroundColor:
                      selectedTab === "Popular" ? "#cbd5e0" : "transparent",
                  }}
                  onClick={() => setSelectedTab("Popular")}
                >
                  Popular
                </TabsTrigger>
                <TabsTrigger
                  value="NewReleases"
                  className="text-md p-1"
                  style={{
                    backgroundColor:
                      selectedTab === "NewReleases" ? "#cbd5e0" : "transparent",
                  }}
                  onClick={() => setSelectedTab("NewReleases")}
                >
                  New Releases
                </TabsTrigger>
                <TabsTrigger
                  value="RecentlyAdded"
                  className="text-md p-1"
                  style={{
                    backgroundColor:
                      selectedTab === "RecentlyAdded"
                        ? "#cbd5e0"
                        : "transparent",
                  }}
                  onClick={() => setSelectedTab("RecentlyAdded")}
                >
                  Recently Added
                </TabsTrigger>
                <TabsTrigger
                  value="ForYou"
                  className="text-md p-1"
                  style={{
                    backgroundColor:
                      selectedTab === "ForYou" ? "#cbd5e0" : "transparent",
                  }}
                  onClick={() => setSelectedTab("ForYou")}
                >
                  For You
                </TabsTrigger>
              </TabsList>
              <TabsContent value="Popular" className="space-y-4">
                <MovieCardBottom />
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs> */}
      </div>

    </motion.div>
  );
}
