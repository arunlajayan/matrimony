import Banner from "@/components/Banner";
import Login from "@/components/logIn";
import Modal from "@/components/modal";
import Register from "@/components/register";
import Image from "next/image";
type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};
export default function Home({ searchParams }: SearchParamProps): React.ReactElement {
  const show = searchParams?.modal;
  return (
    <main className="min-h-screen">
      <Login  />    
      <div className="ml-20 pl-10">
        {
          show && <Modal/>
        }
      <Banner />
      <Register/>
      </div>
    
    </main>
  );
}
