"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Characters = () => {
  const [charData, setCharData] = useState([]);
  let apiName = "beidou";

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(`https://genshin.jmp.blue/characters`);
        const data = await response.json();
        console.log(response);
        setCharData(data); // Set the fetched data to state
      } catch (error) {
        console.error("Failed to fetch data: ", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex border-red-600 h-screen w-full justify-center p-3">
      <Carousel className="w-[20rem] flex">
        <CarouselContent>
          {charData.map((options, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="flex ">
                  <CardContent className="flex-col items-center justify-center p-6">
                    <img
                      className="rounded-xl h-[18rem] w-full justify-center items-center flex"
                      src={`https://genshin.jmp.blue/characters/${options}/icon-big`}
                      alt=""
                    />
                    <h1 className="flex justify-center items-center">{options}</h1>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

/* {charData.map((options, index) => (
  <CarouselItem key={index} className="flex-col justify-center w-full">
    <div className="">
      <img
        className="h-[20rem]"
        src={`https://genshin.jmp.blue/characters/${options}/card`}
        alt=""
      />
    </div>
    {options}
  </CarouselItem> */

export default Characters;
