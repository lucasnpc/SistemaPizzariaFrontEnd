export class ItemRequest {
    itemId: number;
    quantity: number;
}

export class ClientOrdersItems {
    clientOrderId: number;
    itemId: number;
    itemQuantity: number;
    orderStatus: string;
}