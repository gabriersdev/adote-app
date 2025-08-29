import Content from "@/content/content";
import Dashboard from "@/components/dashboard";

export const metadata = {
  title: `Dashboard - ${Content.UI()["app-name"]}`,
  description: "",
};

export default function Page() {
  return <Dashboard/>
}
