import BusinessRating from "@/components/businessRating/BusinessRating";
import Clients from "@/components/clients/Clients";
import Customers from "@/components/customers/Customers";
import DesignSite from "@/components/designSite/DesignSite";
import Hero from "@/components/hero";
import Marketing from "@/components/marketing/Marketing";
import Pixelgrade from "@/components/pixelgrade/Pixelgrade";
import System from "@/components/system/System";

const Home = () => {
  return (
    <>
      <Hero />
      <Clients />
      <System />
      <Pixelgrade />
      <BusinessRating />
      <DesignSite />
      <Customers />
      <Marketing />
    </>
  );
};

export default Home;
