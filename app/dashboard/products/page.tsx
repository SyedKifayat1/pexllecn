"use client";
import { useState } from "react";
import BreadCrumb from "@/components/breadcrumb";
import { motion } from "framer-motion";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
const breadcrumbItems = [{ title: "Products", link: "/dashboard/products" }];
export default function page() {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };

  const FirstTabData = [
    {
      key: "all",
      title: "All",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ...",
    },
    {
      key: "electronics",
      title: " Electronics ",
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
      imagePath: "/images/car.jpg",
      imageWidth: 200,
      imageHeight: 110,
    },
    {
      price: "$500",
      productName: "IPhone 15 pro max",
      location: "Bahrain",
      productType: "electronics",
      rating: "4.7",
      imagePath: "/images/mobile.jpg",
      imageWidth: 200,
      imageHeight: 110,
    },
    {
      price: "$2000",
      productName: "House of Dream",
      location: "Dubai",
      productType: "realstate",
      rating: "4.7",
      imagePath: "/images/realState.jpg",
      imageWidth: 200,
      imageHeight: 110,
    },
    {
      price: "$20",
      productName: "Movie",
      location: "Galway",
      productType: "other",
      rating: "4.7",
      imagePath: "/images/a.avif",
      imageWidth: 200,
      imageHeight: 110,
    },
    {
      price: "1500$",
      productName: "Beautiful House",
      location: "Maddina",
      productType: "realstate",
      rating: "4.7",
      imagePath: "/images/realState.jpg",
      imageWidth: 200,
      imageHeight: 110,
    },
    {
      price: "$20",
      productName: "Clothes",
      location: "Maka",
      productType: "clothes",
      rating: "4.7",
      imagePath: "/images/cloths.jfif",
      imageWidth: 200,
      imageHeight: 110,
    },

    // ... add more product data here
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
      </div>
      <div className="flex-1 space-y-4 p-1 md:p-8 pt-1   rounded m-2">
        <div className="flex w-full flex-col ">
          <Tabs
            aria-label="Options"
            className=" bg-gray-200 sm:text-sm dark:bg-zinc-800 rounded-lg w-full sm:w-20 md:w-3/4 lg:w-2/4 xl:w-3/5 "
            style={{
              width: 500,
            }}
          >
            {FirstTabData.map((tab) => (
              <Tab
                key={tab.key}
                title={tab.title}
                 className="rounded-md w-full sm:w-full md:w-full lg:w-full xl:w-full group overflow-hidden"
              >
                <Card className="border dark:border-gray-400 shadow-lg dark:shadow-sm rounded-md dark:shadow-md">
                  <CardBody>
                    <div>
                      <span className="text-black font-semibold dark:text-white">
                        Featured Ads
                      </span>
                    </div>

                    <div
                      className="flex justify-start space-x-4 overflow-x-auto hide-scrollbar overflow-hidden"
                      style={{
                        scrollbarWidth: "thin",
                        scrollbarColor: "transparent transparent",
                        msOverflowStyle: "none",
                      }}
                    >
                      {selectedTabData
                        .filter(
                          (product) =>
                            product.productType === tab.key || tab.key === "all"
                        )
                        .map((product) => (
                          <div
                            key={product.productType}
                            className="max-w-md rounded-lg p-1 mb-3 hover:shadow-lg hover:bg-gray-200 dark:hover:shadow-lg dark:hover:bg-gray-900"
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

                              <div className="absolute top-0 right-0 m-2  from-transparent to-black rounded-sm px-2 py-1">
                                <p className="bg-white dark:bg-gray-800 rounded-sm px-1 font-bold text-xs dark:text-white">
                                  {product.rating}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center justify-between p-1 ">
                              <div>
                                <p className="text-lg font-bold text-gray-800 dark:text-white">
                                  {product.price}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-white">
                                  {product.productName}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-white">
                                  {product.location}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>

                    <Tabs
                      aria-label="Options"
                      className="flex overflow-x-auto hide-scrollbar bg-gray-200 dark:bg-zinc-800 rounded-lg w-full sm:w-3/4 md:w-3/4 lg:w-2/4 xl:w-3/5 overflow-hidden"
                      style={{
                        width: 450,
                      }}
                    >
                      {SecondTabData.map((tabs) => (
                        <Tab
                          key={tabs.key}
                          title={tabs.title}
                          className="rounded-md w-full sm:w-full md:w-full lg:w-full xl:w-full group overflow-hidden"
                        >
                          <Card>
                            <CardBody>
                              <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {selectedTabData
                                  .filter(
                                    (product) =>
                                      product.productType === tab.key ||
                                      tab.key === "all"
                                  )
                                  .map((product) => (
                                    <div
                                      key={product.productType}
                                      className="max-w-md rounded-lg p-1 mb-2 hover:shadow-lg hover:bg-gray-200 overflow-hidden dark:hover:shadow-lg dark:hover:bg-gray-900"
                                      style={{ width: "100%", height: 230 }}
                                    >
                                      <div
                                        className="relative flex-shrink-0 overflow-hidden"
                                        style={{ width: "100%", height: 150 }}
                                      >
                                        <Image
                                          src={product.imagePath}
                                          alt="Movie Poster"
                                          width={product.imageWidth}
                                          height={product.imageHeight}
                                          className="rounded-lg object-cover"
                                          style={{
                                            width: "100%",
                                            height: "100%",
                                          }}
                                        />
                                        <div className="absolute top-0 right-0 m-2  from-transparent to-black rounded-sm px-2 py-1">
                                          <p className="bg-white dark:bg-gray-800 rounded-sm px-1 font-bold text-xs dark:text-white">
                                            {product.rating}
                                          </p>
                                        </div>
                                      </div>

                                      <div className="flex items-center justify-between p-1">
                                        <div>
                                          <p className="text-lg font-bold text-gray-800 dark:text-white">
                                            {product.price}
                                          </p>
                                          <p className="text-sm text-gray-600 dark:text-white">
                                            {product.productName}
                                          </p>
                                          <p className="text-sm text-gray-500 dark:text-white">
                                            {product.location}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                              </div>
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
      </div>
    </motion.div>
  );
}
