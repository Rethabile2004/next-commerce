'use server'
import db from '@/utils/db'
import { redirect } from 'next/navigation';
import { imageSchema, productShema, validateWithZodSchema } from './shema'
import { deleteImage, uploadImage } from './superbase'
import { revalidatePath } from 'next/cache'
import { currentUser } from '@clerk/nextjs/server'

export const fetchFeaturedProducts = async () => {
  const products = await db.product.findMany({
    where: {
      featured: true
    }
  })
  return products
}

export const fetchAllProducts = async ({ search = '' }: { search: string }) => {
  return db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: 'insensitive' } },
        { company: { contains: search, mode: 'insensitive' } },
      ],
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};


export const fetchSingleProduct = async (productId: string) => {
  if (!productId) redirect('/')
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) {
    redirect('/products');
  }
  return product;
};

const getAuthUser = async () => {
  const user = await currentUser()
  if (!user) {
    redirect('/')
  }
  return user
}

const renderError = (error: unknown): { message: string } => {
  return { message: error instanceof Error ? error.message : 'there was an error' }
}

export const createProductAction = async (prev: any, formData: FormData): Promise<{ message: string }> => {
  const user = await getAuthUser()
  try {
    const rawData = Object.fromEntries(formData.entries())
    const image = formData.get('image') as File

    const validatedFields = validateWithZodSchema(productShema, rawData)
    const validatedFile = validateWithZodSchema(imageSchema, { image: image })

    const imageUrl = await uploadImage(validatedFile.image)

    await db.product.create({
      data: {
        ...validatedFields,
        image: imageUrl,
        clerkId: user.id,
      },
    });
    return { message: 'product created successfully' }
  } catch (error) {
    return renderError(error)
  }
}

const getAdminUser = async () => {
  const user = await getAuthUser();
  if (user.id !== process.env.ADMIN_USER_ID) redirect('/');
  return user;
};

export const fetchAdminProducts = async () => {
  return db.product.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
}

export const deleteProductAction = async (prevState: string): Promise<{ message: string }> => {
  const productId = prevState
  try {
    const product = await db.product.delete({
      where: {
        id: productId
      }
    })

    await deleteImage(product.image)
    revalidatePath('/admin/products')

    return { message: 'product removed successfully' }
  } catch (error) {
    return renderError(error)
  }
}

export const fetchAdminProductDetails = async (productId: string) => {
  // await fetchAdminUser()////////////////
  const product = await db.product.findUnique({
    where: {
      id: productId
    }
  });
  if (!product) {
    redirect('/admin/product')
  }
  return product
}

export const updateProductImageAction = async (prevState: any, formData: FormData) => {
  return {
    message: 'Product image updated successfully.'
  }
}
export const updateProductAction = async (prevState: any, formData: FormData) => {
  // await getAdminUser()
  try {
    const productId = formData.get('id') as string
    console.log(productId);
    console.log(productId);
    console.log(productId);
    console.log(productId);
    console.log(productId);
    console.log(productId);
    console.log(productId);
    console.log(productId);
    console.log('////////////////////');
    console.log('////////////////////');
    console.log('////////////////////');
    console.log('////////////////////');
    console.log('////////////////////');
    
    const rawData = Object.fromEntries(formData)
    const validatedFields = validateWithZodSchema(
      productShema,
      rawData
    )
    await db.product.update({
      where: {
        id: productId
      },
      data: {
        ...validatedFields
      }
    })
    revalidatePath(`/admin/product/${productId}/edit`);
  } catch (error) {
    return renderError(error)
  }
  return {
    message: 'Product updated successfully.'
  }
}