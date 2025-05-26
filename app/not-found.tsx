"use client";

import Title from "@/components/ui/title";
import Text from "@/components/ui/text";
import Content from "@/content/content";
import {useEffect} from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = `${Content.Error404()["name"]} - ${Content.Error404()["description"]}`;
  }, []);

  return (
    <div className="p-10 text-center min-h-screen flex items-center justify-center flex-col">
      <Title level={1} className="flex flex-col">
        <span className={"text-orange-500"}>{Content.Error404()["name"]}</span>
        {Content.Error404()["description"]}</Title>
      <Text as={"p"}>{Content.Error404()["message"]}</Text>
    </div>
  );
}