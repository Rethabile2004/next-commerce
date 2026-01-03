import Link from "next/link";
import EmptyList from "@/components/global/EmptyList";
import { formatCurrency } from "@/utils/format";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteProductAction, fetchAdminProducts } from "@/utils/actions";
import IconButton from "@/components/form/IconButton";
import FormContainer from "@/components/form/FormContainer";

const AdminProductsPage = async () => {
  const items = await fetchAdminProducts();
  if (!items || items.length < 1) {
    return <EmptyList heading="No products found" />;
  }
  
  return (
    <section>
      <Table>
        <TableCaption className="capitalize">
          total products: {items.length}
        </TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>product name</TableHead>
            <TableHead>company</TableHead>
            <TableHead>price</TableHead>
            <TableHead>actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {items.map((item) => {
            const { id, name, company, price } = item;
            const deleteProduct= deleteProductAction.bind(null,id)

            return (
              <TableRow key={id}>
                <TableCell>
                  <Link
                    href={`/product/${id}`}
                    className="underline text-muted-foreground tracking-wide capitalize"
                  >
                    {name}
                  </Link>
                </TableCell>

                <TableCell className="capitalize">
                  {company}
                </TableCell>

                <TableCell>
                  {formatCurrency(price)}
                </TableCell>

                <TableCell className="flex items-center gap-x-2">
                  <FormContainer action={deleteProduct}>
                    <IconButton actionType="delete" />
                  </FormContainer>
                  <Link href={`/admin/products/${id}/edit`}>
                    <IconButton actionType="edit" />
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
};

export default AdminProductsPage;
