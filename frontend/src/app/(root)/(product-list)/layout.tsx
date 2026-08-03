import Filter from "@/components/Filter";

export default function ProductListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section> 
      <div className="root-product-content"> 
        <Filter device="Desktop"/>
        {children}
      </div>
    </section>
  );
}