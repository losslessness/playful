import ProductPage from "./page";

export default async function ParamsLayout({params}: {params: Promise<{productID: string}>}) {
  const productID = Number((await params).productID);

  return <ProductPage productID={productID}/>
}