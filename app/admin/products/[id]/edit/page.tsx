// programmer: rethabile eric siase
// github.com/rethabile2004

// this component is used to edit a product
import { fetchAdminProductDetails } from "@/utils/actions";
import { updateProductAction } from "@/utils/actions";
import { SubmitButton } from "@/components/form/Buttons";
import CheckboxInput from "@/components/form/CheckBoxInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import ImageInputContainer from "@/components/form/ImageInputContainer";
import { updateProductImageAction } from "@/utils/actions";
import ImageInput from "@/components/form/ImageInput";

type Params = {
  params: {
    id: string
  }
}

const EditProductPage = async ({ params }: Params) => {
  const { id } = await params

  const product = await fetchAdminProductDetails(id)

  const {
    name,
    company,
    description,
    featured,
    price,
  } = product;

  return (
    <>
      <h1>update product</h1>
      <div>
          <ImageInputContainer
            image={product.image}
            name={product.name}
            action={updateProductImageAction}          
            text="update image"
          >
            <input type="hidden" name="id" value={id} />
            <input
              type="hidden"
              name="url"
              value={product.image}
            />
          </ImageInputContainer>
        <FormContainer action={updateProductAction}>
          <input type="text" hidden name='id' defaultValue={id} />
          <div className="grid md:grid-cols-2 my-4 gap-4">
            <FormInput name="name" type="text" defaultValue={name} label="product name" />
            <FormInput name="company" type="text" defaultValue={company} label="company" />
            <PriceInput defaultValue={price} />
            <ImageInput />
          </div>
          <TextAreaInput name="description" defaultValue={description} labelText="product description" />
          <div className="mt-6">
            <CheckboxInput label="featured" name="featured" defaultChecked={featured} />
          </div>
          <SubmitButton className="mt-6" text="submit product" />
        </FormContainer>
      </div>
    </>
  )
}

export default EditProductPage