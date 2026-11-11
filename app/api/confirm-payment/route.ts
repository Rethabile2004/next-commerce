import { NextRequest } from "next/server";
import Stripe from "stripe";
import db from '@/utils/db'

export const POST = async (req: NextRequest) => {
    try {
        const { session_id } = await req.json();
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
        const session = await stripe.checkout.sessions.retrieve(session_id);

        if (session.status !== 'complete') {
            return Response.json({ ok: false }, { status: 400 });
        }

        const { orderId, cartId } = session.metadata!;
        await db.order.update({ where: { id: orderId }, data: { isPaid: true } });
        await db.cart.delete({ where: { id: cartId } });

        return Response.json({ ok: true });
    } catch (error) {
        console.error('Could not confirm payment because the store database is unavailable.', error);
        return Response.json({ ok: false, message: 'Store database is temporarily unavailable.' }, { status: 503 });
    }
};
