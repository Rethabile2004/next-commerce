import { SubmitButton } from "@/components/form/Buttons";
import CheckboxInput from "@/components/form/CheckBoxInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInputContainer";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { createProductAction } from "@/utils/actions";
import {faker} from '@faker-js/faker'


const CreateProductPage = () => {
  const product=faker.commerce.productName()
  const company=faker.company.name()
  const description=faker.lorem.paragraph({min:4,max:5})
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>create product</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProductAction}>
          <div className="grid md:grid-cols-2 my-4 gap-4">
            <FormInput name="name" type="text" defaultValue={product} label="product name" />
            <FormInput name="company" type="text" defaultValue={company} label="company" />
            <PriceInput/>
            <ImageInput/>
          </div>
          <TextAreaInput name="description" defaultValue={description} labelText="product description"/>
          <div className="mt-6">
            <CheckboxInput label="featured" name="featured" />
          </div>
          <SubmitButton className="mt-6" text="submit product"/>
        </FormContainer>        
      </div>
    </section>
  )
}

export default CreateProductPage