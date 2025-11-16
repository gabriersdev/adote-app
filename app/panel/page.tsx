"use client";

import {useRouter} from "next/navigation";
import {useEffect} from "react";

// export const metadata = {
//   title: `Page Name - ${Content.UI()["app-name"]}`,
//   description: "",
// };

export default function Page() {
  const router = useRouter();
  
  useEffect(() => {
    router.push("/panel/dashboard/main");
  }, []);
  
  // TODO - tem que verificar se está logado e direcionar para fazer login e oferecer a opção de criar conta
  return null;
}
