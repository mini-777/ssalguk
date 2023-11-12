import { getDefaultLayout, IDefaultLayoutPage, IPageHeader } from "@/components/layout/default-layout";
import ProductForm from "@/components/page/sample/product/product-form";

const pageHeader: IPageHeader = {
  title: "사용자 등록",
};

const ProductNewPage: IDefaultLayoutPage = () => {
  return <ProductForm initialValues={{ status: "" }} />;
};

ProductNewPage.getLayout = getDefaultLayout;
ProductNewPage.pageHeader = pageHeader;

export default ProductNewPage;
