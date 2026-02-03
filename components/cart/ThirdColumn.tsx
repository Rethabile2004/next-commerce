'use client';
import { useState } from 'react';
import SelectProductAmount from './SelectProductAmount';
import { Mode } from './SelectProductAmount';
import FormContainer from '../form/FormContainer';
import { SubmitButton } from '../form/Buttons';
import { removeCartItemAction, updateCartItemAction } from '@/utils/actions';
import { toast } from 'sonner';
import { ReloadIcon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';

function ThirdColumn({ quantity, id }: { quantity: number; id: string }) {
    const [amount, setAmount] = useState(quantity);

    const [isLoading, setIsLoading] = useState(false);

    const handleAmountChange = async (value: number) => {
        setIsLoading(true);
        toast.success('Calculating...');
        const result = await updateCartItemAction({
            amount: value,
            cartItemId: id,
        });
        setAmount(value);
        toast.success(result.message);
        setIsLoading(false);
    };

    return (
        <div className='md:ml-8'>
            <SelectProductAmount
                amount={amount}
                setAmount={handleAmountChange}
                mode={Mode.CartItem}
                isLoading={isLoading}
            />
            <FormContainer action={removeCartItemAction}>
                <input type='hidden' name='id' value={id} />
                <SubmitButton size='sm' className='mt-4' text='remove' />
            </FormContainer>
        </div>
    );
}
export default ThirdColumn;