// @ts-ignore
import { Context } from "https://deno.land/x/abc@v1.3.3/mod.ts";
// @ts-ignore
import { Order } from '../models/orderModel.ts';

let orders: Order[] = [
    { id:1650143349515,arb:4.0597,bid:40310.3,bid_size:0.5,bid_venue:'otc23',ask:40306.240221,ask_size:0.001972,ask_venue:'binance'}
];
export const test_order = (ctx: Context) =>{
    return ctx.json(orders,200);
}

export const create_order = async (ctx: Context) => {
    const { arb, bid, bid_size, bid_venue, ask, ask_size, ask_venue } = await ctx.body as Order;
    //Need to add: validate data and types
    const id = Date.now();
    const order = { id, arb, bid, bid_size, bid_venue, ask,ask_size, ask_venue };
    orders.push(order);

    return ctx.json(order,201);
}
