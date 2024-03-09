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
  CardUi,
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
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import MovieCardBottom from "@/components/movies/moviecardbottom";
import BreadCrumb from "@/components/breadcrumb";
import { Heading } from "@/components/ui/heading";
import { motion } from "framer-motion";

import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

import Image from "next/image";
import { BookmarkIcon } from "@heroicons/react/solid";

const breadcrumbItems = [{ title: "Products", link: "/dashboard/products" }];
export default function page() {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };

  const [selectedTab, setSelectedTab] = useState<string>("Popular");

  const FirstTabData = [
    {
      key: "all",
      title: "All",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ...",
    },
    {
      key: "electronics",
      title: "Electronics",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco ...",
    },
    {
      key: "cars",
      title: "Cars",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa ...",
    },
    {
      key: "realstate",
      title: "Real State",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa ...",
    },
    {
      key: "clothes",
      title: "Clothes",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa ...",
    },
    {
      key: "other",
      title: "Other",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa ...",
    },
  ];

  const SecondTabData = [
    {
      key: "popular",
      title: "Popular",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa ...",
    },
    {
      key: "newreleases",
      title: "New  Releases",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa ...",
    },
    {
      key: "recentadded",
      title: "Recent Added",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa ...",
    },
    {
      key: "foryou",
      title: "For You",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa ...",
    },
  ];

  const selectedTabData = [
    {
      price: "$200",
      productName: "Mac Book",
      location: "Pakistan",
      productType: "cars",
      rating: "4.7",
      imagePath: "/movies/car.jpg",
      imageWidth: 200,
      imageHeight: 110,
    },
    {
      price: "$500",
      productName: "IPhone 15 pro max",
      location: "Bahrain",
      productType: "electronics",
      rating: "4.7",
      imagePath: "/movies/mobile.jpg",
      imageWidth: 200,
      imageHeight: 110,
    },
    {
      price: "$2000",
      productName: "House of Dream",
      location: "Dubai",
      productType: "realstate",
      rating: "4.7",
      imagePath: "/movies/realState.jpg",
      imageWidth: 200,
      imageHeight: 110,
    },
    {
      price: "$20",
      productName: "Movie",
      location: "Galway",
      productType: "other",
      rating: "4.7",
      imagePath: "/movies/a.avif",
      imageWidth: 200,
      imageHeight: 110,
    },
    {
      price: "1500$",
      productName: "Beautiful House",
      location: "Maddina",
      productType: "realstate",
      rating: "4.7",
      imagePath: "/movies/realState.jpg",
      imageWidth: 200,
      imageHeight: 110,
    },
    {
      price: "$20",
      productName: "Clothes",
      location: "Maka",
      productType: "clothes",
      rating: "4.7",
      imagePath: "/movies/cloths.jfif",
      imageWidth: 200,
      imageHeight: 110,
    },

    // ... add more movie data
  ];

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

      <div className="flex-1 space-y-4 p-1 md:p-8 pt-1">
        <div className="flex w-full flex-col ">
          <Tabs
            aria-label="Options"
            className="bg-gray-200 dark:bg-zinc-800 rounded-sm sm:w-full md:w-2/4 lg:w-1/3 xl:w-2/4 "
          >
            {FirstTabData.map((tab) => (
              <Tab
                key={tab.key}
                title={tab.title}
                className="rounded-md sm:w-full md:w-full lg:w-full xl:w-full group "
              >
                <Card>
                  <CardBody>
                    <div>
                      <span className="text-black font-semibold">
                        Featured Ads
                      </span>
                    </div>

                    <div className="flex justify-start space-x-4 overflow-x-auto hide-scrollbar overflow-hidden">
                      {selectedTabData
                        .filter((product) => product.productType=== tab.key || tab.key === 'all')
                        .map((product) => (
                          <div
                            key={product.productType}
                            className="max-w-md rounded-lg p-1 mb-3 hover:shadow-lg hover:bg-gray-200"
                            style={{ width: 270, height: 190 }}
                          >
                            <div
                              className="relative flex-shrink-0 overflow-hidden"
                              style={{ width: 200, height: 110 }}
                            >
                              <Image
                                src={product.imagePath}
                                alt="Movie Poster"
                                width={product.imageWidth}
                                height={product.imageHeight}
                                className="rounded-lg object-cover"
                                style={{ width: "100%", height: "100%" }}
                              />

                              <div className="absolute top-0 right-0 m-2 bg-gradient-to-b from-transparent to-black rounded-sm px-2 py-1">
                                <p className="bg-white rounded-sm px-1 font-bold text-xs">
                                  {product.rating}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center justify-between p-1">
                              <div>
                                <p className="text-lg font-bold text-gray-800">
                                  {product.price}
                                </p>
                                <p className="text-sm text-gray-600">
                                  {product.productName}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {product.location}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>

                    <Tabs
                      aria-label="Options"
                      className="bg-gray-200 dark:bg-zinc-800 rounded-sm sm:w-full md:w-2/4 lg:w-1/3 xl:w-2/4"
                    >
                      {SecondTabData.map((tab) => (
                        <Tab
                          key={tab.key}
                          title={tab.title}
                          className="rounded-md sm:w-full md:w-full lg:w-full xl:w-full"
                        >
                          <Card>
                            <CardBody>
                              
                            </CardBody>
                          </Card>
                        </Tab>
                      ))}
                    </Tabs>
                  </CardBody>
                </Card>
              </Tab>
            ))}
          </Tabs>
        </div>

        {/* <Tabs defaultValue="Popular" className="space-y-4 ">
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
            </Tabs> */}

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
              <CardUi>
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
              </CardUi>
              <CardUi>
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
              </CardUi>
              <CardUi>
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
              </CardUi>
              <CardUi>
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
              </CardUi>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
              <CardUi className="col-span-4">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </CardUi>
              <CardUi className="col-span-4 md:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </CardUi>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
              <CardUi className="col-span-4">
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
              </CardUi>
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
