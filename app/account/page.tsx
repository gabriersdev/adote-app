// import React, from "react";
// import Content from "@/content/content";
//
// export const metadata = {
//   title: `Page Name - ${Content.UI()["app-name"]}`,
//   description: "",
// };
//
// export default function Page() {
//   return <></>;
// }

"use client";

import React, {useEffect, useState} from "react";
import Main from "@/components/layout/main";
import Content from "@/content/content";
import {useRouter} from "next/navigation";

export default function Page() {
  const [content, setContent] = useState(<></>);
  // const [userStatus, setUserStatus] = useState("createAcc")
  // const [userStatus, setUserStatus] = useState("unlogged")
  const [userStatus, setUserStatus] = useState("");
  const router = useRouter();
  
  useEffect(() => {
    if (!userStatus) return;
    else if (userStatus === "unlogged") setContent(<Login setUserStatus={setUserStatus}/>)
    else if (userStatus == "createAcc") setContent(<CreateAccount setUserStatus={setUserStatus}/>)
    else if (userStatus == "confirmAcc") setContent(<ConfirmAccount/>)
  }, [userStatus])
  
  useEffect(() => {
    if (!document) return;
    document.title = `Painel - ${Content.UI()["app-name"]}`
  }, []);
  
  if (!userStatus) return router.push("/panel/dashboard");
  
  return (
    <>
      {content}
    </>
  );
}

