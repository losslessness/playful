export default function ProductPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section> 
      <div className="root-product-content"> 
        {children}
      </div>
    </section>
  );
}