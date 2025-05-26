import React from "react";
import Title from "@/components/ui/title";
import Text from "@/components/ui/text";
import Content from "@/content/content";
import Main from "@/components/layout/main";

export const metadata = {
  title: `${Content.Error404()["name"]} - ${Content.Error404()["description"]}`,
  description: "",
};

export default function NotFound() {
  return (
    <Main className="text-center flex items-center justify-center flex-col">
      <Title level={1} className="flex flex-col">
        <span className={"text-orange-500"}>{Content.Error404()["name"]}</span>
        {Content.Error404()["description"]}</Title>
      <Text as={"p"}>{Content.Error404()["message"]}</Text>
    </Main>
  );
}