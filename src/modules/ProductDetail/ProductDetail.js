import SizeSelector from "@/components/SizeSelector";

const ProductDetail = ({ data }) => {
  console.log("PRODUCTDETAIL DATA: ", data);

  return (
    <>
      <SizeSelector data={data.sizes} />
    </>
  );
};

export default ProductDetail;
