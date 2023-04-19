import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { MoneyValue } from "./common";
import { Quotation } from "./common";
import { Timestamp } from "./google/protobuf/timestamp";
import { Ping } from "./common";
/**
 * Запрос установки соединения.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.TradesStreamRequest
 */
export interface TradesStreamRequest {
    /**
     * @generated from protobuf field: repeated string accounts = 1;
     */
    accounts: string[];
}
/**
 * Информация о торговых поручениях.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.TradesStreamResponse
 */
export interface TradesStreamResponse {
    /**
     * @generated from protobuf oneof: payload
     */
    payload: {
        oneofKind: "orderTrades";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.OrderTrades order_trades = 1;
         */
        orderTrades: OrderTrades;
    } | {
        oneofKind: "ping";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Ping ping = 2;
         */
        ping: Ping;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Информация об исполнении торгового поручения.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.OrderTrades
 */
export interface OrderTrades {
    /**
     * @generated from protobuf field: string order_id = 1;
     */
    orderId: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 2;
     */
    createdAt?: Timestamp;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.OrderDirection direction = 3;
     */
    direction: OrderDirection;
    /**
     * @generated from protobuf field: string figi = 4;
     */
    figi: string;
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.OrderTrade trades = 5;
     */
    trades: OrderTrade[];
    /**
     * @generated from protobuf field: string account_id = 6;
     */
    accountId: string;
    /**
     * @generated from protobuf field: string instrument_uid = 7;
     */
    instrumentUid: string;
}
/**
 * Информация о сделке.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.OrderTrade
 */
export interface OrderTrade {
    /**
     * @generated from protobuf field: google.protobuf.Timestamp date_time = 1;
     */
    dateTime?: Timestamp;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation price = 2;
     */
    price?: Quotation;
    /**
     * @generated from protobuf field: int64 quantity = 3;
     */
    quantity: string;
    /**
     * @generated from protobuf field: string trade_id = 4;
     */
    tradeId: string;
}
/**
 * Запрос выставления торгового поручения.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.PostOrderRequest
 */
export interface PostOrderRequest {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: int64 quantity = 2;
     */
    quantity: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation price = 3;
     */
    price?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.OrderDirection direction = 4;
     */
    direction: OrderDirection;
    /**
     * @generated from protobuf field: string account_id = 5;
     */
    accountId: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.OrderType order_type = 6;
     */
    orderType: OrderType;
    /**
     * @generated from protobuf field: string order_id = 7;
     */
    orderId: string;
    /**
     * @generated from protobuf field: string instrument_id = 8;
     */
    instrumentId: string;
}
/**
 * Информация о выставлении поручения.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.PostOrderResponse
 */
export interface PostOrderResponse {
    /**
     * @generated from protobuf field: string order_id = 1;
     */
    orderId: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.OrderExecutionReportStatus execution_report_status = 2;
     */
    executionReportStatus: OrderExecutionReportStatus;
    /**
     * @generated from protobuf field: int64 lots_requested = 3;
     */
    lotsRequested: string;
    /**
     * @generated from protobuf field: int64 lots_executed = 4;
     */
    lotsExecuted: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue initial_order_price = 5;
     */
    initialOrderPrice?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue executed_order_price = 6;
     */
    executedOrderPrice?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue total_order_amount = 7;
     */
    totalOrderAmount?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue initial_commission = 8;
     */
    initialCommission?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue executed_commission = 9;
     */
    executedCommission?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue aci_value = 10;
     */
    aciValue?: MoneyValue;
    /**
     * @generated from protobuf field: string figi = 11;
     */
    figi: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.OrderDirection direction = 12;
     */
    direction: OrderDirection;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue initial_security_price = 13;
     */
    initialSecurityPrice?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.OrderType order_type = 14;
     */
    orderType: OrderType;
    /**
     * @generated from protobuf field: string message = 15;
     */
    message: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation initial_order_price_pt = 16;
     */
    initialOrderPricePt?: Quotation;
    /**
     * @generated from protobuf field: string instrument_uid = 17;
     */
    instrumentUid: string;
}
/**
 * Запрос отмены торгового поручения.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.CancelOrderRequest
 */
export interface CancelOrderRequest {
    /**
     * @generated from protobuf field: string account_id = 1;
     */
    accountId: string;
    /**
     * @generated from protobuf field: string order_id = 2;
     */
    orderId: string;
}
/**
 * Результат отмены торгового поручения.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.CancelOrderResponse
 */
export interface CancelOrderResponse {
    /**
     * @generated from protobuf field: google.protobuf.Timestamp time = 1;
     */
    time?: Timestamp;
}
/**
 * Запрос получения статуса торгового поручения.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetOrderStateRequest
 */
export interface GetOrderStateRequest {
    /**
     * @generated from protobuf field: string account_id = 1;
     */
    accountId: string;
    /**
     * @generated from protobuf field: string order_id = 2;
     */
    orderId: string;
}
/**
 * Запрос получения списка активных торговых поручений.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetOrdersRequest
 */
export interface GetOrdersRequest {
    /**
     * @generated from protobuf field: string account_id = 1;
     */
    accountId: string;
}
/**
 * Список активных торговых поручений.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetOrdersResponse
 */
export interface GetOrdersResponse {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.OrderState orders = 1;
     */
    orders: OrderState[];
}
/**
 * Информация о торговом поручении.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.OrderState
 */
export interface OrderState {
    /**
     * @generated from protobuf field: string order_id = 1;
     */
    orderId: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.OrderExecutionReportStatus execution_report_status = 2;
     */
    executionReportStatus: OrderExecutionReportStatus;
    /**
     * @generated from protobuf field: int64 lots_requested = 3;
     */
    lotsRequested: string;
    /**
     * @generated from protobuf field: int64 lots_executed = 4;
     */
    lotsExecuted: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue initial_order_price = 5;
     */
    initialOrderPrice?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue executed_order_price = 6;
     */
    executedOrderPrice?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue total_order_amount = 7;
     */
    totalOrderAmount?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue average_position_price = 8;
     */
    averagePositionPrice?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue initial_commission = 9;
     */
    initialCommission?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue executed_commission = 10;
     */
    executedCommission?: MoneyValue;
    /**
     * @generated from protobuf field: string figi = 11;
     */
    figi: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.OrderDirection direction = 12;
     */
    direction: OrderDirection;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue initial_security_price = 13;
     */
    initialSecurityPrice?: MoneyValue;
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.OrderStage stages = 14;
     */
    stages: OrderStage[];
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue service_commission = 15;
     */
    serviceCommission?: MoneyValue;
    /**
     * @generated from protobuf field: string currency = 16;
     */
    currency: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.OrderType order_type = 17;
     */
    orderType: OrderType;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp order_date = 18;
     */
    orderDate?: Timestamp;
    /**
     * @generated from protobuf field: string instrument_uid = 19;
     */
    instrumentUid: string;
}
/**
 * Сделки в рамках торгового поручения.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.OrderStage
 */
export interface OrderStage {
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue price = 1;
     */
    price?: MoneyValue;
    /**
     * @generated from protobuf field: int64 quantity = 2;
     */
    quantity: string;
    /**
     * @generated from protobuf field: string trade_id = 3;
     */
    tradeId: string;
}
/**
 * Запрос изменения выставленной заявки.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest
 */
export interface ReplaceOrderRequest {
    /**
     * @generated from protobuf field: string account_id = 1;
     */
    accountId: string;
    /**
     * @generated from protobuf field: string order_id = 6;
     */
    orderId: string;
    /**
     * @generated from protobuf field: string idempotency_key = 7;
     */
    idempotencyKey: string;
    /**
     * @generated from protobuf field: int64 quantity = 11;
     */
    quantity: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation price = 12;
     */
    price?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.PriceType price_type = 13;
     */
    priceType: PriceType;
}
/**
 * Направление операции.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.OrderDirection
 */
export declare enum OrderDirection {
    /**
     * Значение не указано
     *
     * @generated from protobuf enum value: ORDER_DIRECTION_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Покупка
     *
     * @generated from protobuf enum value: ORDER_DIRECTION_BUY = 1;
     */
    BUY = 1,
    /**
     * Продажа
     *
     * @generated from protobuf enum value: ORDER_DIRECTION_SELL = 2;
     */
    SELL = 2
}
/**
 * Тип заявки.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.OrderType
 */
export declare enum OrderType {
    /**
     * Значение не указано
     *
     * @generated from protobuf enum value: ORDER_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Лимитная
     *
     * @generated from protobuf enum value: ORDER_TYPE_LIMIT = 1;
     */
    LIMIT = 1,
    /**
     * Рыночная
     *
     * @generated from protobuf enum value: ORDER_TYPE_MARKET = 2;
     */
    MARKET = 2
}
/**
 * Текущий статус заявки (поручения)
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.OrderExecutionReportStatus
 */
export declare enum OrderExecutionReportStatus {
    /**
     * @generated from protobuf enum value: EXECUTION_REPORT_STATUS_UNSPECIFIED = 0;
     */
    EXECUTION_REPORT_STATUS_UNSPECIFIED = 0,
    /**
     * Исполнена
     *
     * @generated from protobuf enum value: EXECUTION_REPORT_STATUS_FILL = 1;
     */
    EXECUTION_REPORT_STATUS_FILL = 1,
    /**
     * Отклонена
     *
     * @generated from protobuf enum value: EXECUTION_REPORT_STATUS_REJECTED = 2;
     */
    EXECUTION_REPORT_STATUS_REJECTED = 2,
    /**
     * Отменена пользователем
     *
     * @generated from protobuf enum value: EXECUTION_REPORT_STATUS_CANCELLED = 3;
     */
    EXECUTION_REPORT_STATUS_CANCELLED = 3,
    /**
     * Новая
     *
     * @generated from protobuf enum value: EXECUTION_REPORT_STATUS_NEW = 4;
     */
    EXECUTION_REPORT_STATUS_NEW = 4,
    /**
     * Частично исполнена
     *
     * @generated from protobuf enum value: EXECUTION_REPORT_STATUS_PARTIALLYFILL = 5;
     */
    EXECUTION_REPORT_STATUS_PARTIALLYFILL = 5
}
/**
 * Тип цены.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.PriceType
 */
export declare enum PriceType {
    /**
     * Значение не определено.
     *
     * @generated from protobuf enum value: PRICE_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Цена в пунктах (только для фьючерсов и облигаций).
     *
     * @generated from protobuf enum value: PRICE_TYPE_POINT = 1;
     */
    POINT = 1,
    /**
     * Цена в валюте расчётов по инструменту.
     *
     * @generated from protobuf enum value: PRICE_TYPE_CURRENCY = 2;
     */
    CURRENCY = 2
}
declare class TradesStreamRequest$Type extends MessageType<TradesStreamRequest> {
    constructor();
    create(value?: PartialMessage<TradesStreamRequest>): TradesStreamRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TradesStreamRequest): TradesStreamRequest;
    internalBinaryWrite(message: TradesStreamRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.TradesStreamRequest
 */
export declare const TradesStreamRequest: TradesStreamRequest$Type;
declare class TradesStreamResponse$Type extends MessageType<TradesStreamResponse> {
    constructor();
    create(value?: PartialMessage<TradesStreamResponse>): TradesStreamResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TradesStreamResponse): TradesStreamResponse;
    internalBinaryWrite(message: TradesStreamResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.TradesStreamResponse
 */
export declare const TradesStreamResponse: TradesStreamResponse$Type;
declare class OrderTrades$Type extends MessageType<OrderTrades> {
    constructor();
    create(value?: PartialMessage<OrderTrades>): OrderTrades;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OrderTrades): OrderTrades;
    internalBinaryWrite(message: OrderTrades, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.OrderTrades
 */
export declare const OrderTrades: OrderTrades$Type;
declare class OrderTrade$Type extends MessageType<OrderTrade> {
    constructor();
    create(value?: PartialMessage<OrderTrade>): OrderTrade;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OrderTrade): OrderTrade;
    internalBinaryWrite(message: OrderTrade, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.OrderTrade
 */
export declare const OrderTrade: OrderTrade$Type;
declare class PostOrderRequest$Type extends MessageType<PostOrderRequest> {
    constructor();
    create(value?: PartialMessage<PostOrderRequest>): PostOrderRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PostOrderRequest): PostOrderRequest;
    internalBinaryWrite(message: PostOrderRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.PostOrderRequest
 */
export declare const PostOrderRequest: PostOrderRequest$Type;
declare class PostOrderResponse$Type extends MessageType<PostOrderResponse> {
    constructor();
    create(value?: PartialMessage<PostOrderResponse>): PostOrderResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PostOrderResponse): PostOrderResponse;
    internalBinaryWrite(message: PostOrderResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.PostOrderResponse
 */
export declare const PostOrderResponse: PostOrderResponse$Type;
declare class CancelOrderRequest$Type extends MessageType<CancelOrderRequest> {
    constructor();
    create(value?: PartialMessage<CancelOrderRequest>): CancelOrderRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CancelOrderRequest): CancelOrderRequest;
    internalBinaryWrite(message: CancelOrderRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.CancelOrderRequest
 */
export declare const CancelOrderRequest: CancelOrderRequest$Type;
declare class CancelOrderResponse$Type extends MessageType<CancelOrderResponse> {
    constructor();
    create(value?: PartialMessage<CancelOrderResponse>): CancelOrderResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CancelOrderResponse): CancelOrderResponse;
    internalBinaryWrite(message: CancelOrderResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.CancelOrderResponse
 */
export declare const CancelOrderResponse: CancelOrderResponse$Type;
declare class GetOrderStateRequest$Type extends MessageType<GetOrderStateRequest> {
    constructor();
    create(value?: PartialMessage<GetOrderStateRequest>): GetOrderStateRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetOrderStateRequest): GetOrderStateRequest;
    internalBinaryWrite(message: GetOrderStateRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetOrderStateRequest
 */
export declare const GetOrderStateRequest: GetOrderStateRequest$Type;
declare class GetOrdersRequest$Type extends MessageType<GetOrdersRequest> {
    constructor();
    create(value?: PartialMessage<GetOrdersRequest>): GetOrdersRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetOrdersRequest): GetOrdersRequest;
    internalBinaryWrite(message: GetOrdersRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetOrdersRequest
 */
export declare const GetOrdersRequest: GetOrdersRequest$Type;
declare class GetOrdersResponse$Type extends MessageType<GetOrdersResponse> {
    constructor();
    create(value?: PartialMessage<GetOrdersResponse>): GetOrdersResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetOrdersResponse): GetOrdersResponse;
    internalBinaryWrite(message: GetOrdersResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetOrdersResponse
 */
export declare const GetOrdersResponse: GetOrdersResponse$Type;
declare class OrderState$Type extends MessageType<OrderState> {
    constructor();
    create(value?: PartialMessage<OrderState>): OrderState;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OrderState): OrderState;
    internalBinaryWrite(message: OrderState, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.OrderState
 */
export declare const OrderState: OrderState$Type;
declare class OrderStage$Type extends MessageType<OrderStage> {
    constructor();
    create(value?: PartialMessage<OrderStage>): OrderStage;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OrderStage): OrderStage;
    internalBinaryWrite(message: OrderStage, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.OrderStage
 */
export declare const OrderStage: OrderStage$Type;
declare class ReplaceOrderRequest$Type extends MessageType<ReplaceOrderRequest> {
    constructor();
    create(value?: PartialMessage<ReplaceOrderRequest>): ReplaceOrderRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ReplaceOrderRequest): ReplaceOrderRequest;
    internalBinaryWrite(message: ReplaceOrderRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest
 */
export declare const ReplaceOrderRequest: ReplaceOrderRequest$Type;
/**
 * @generated ServiceType for protobuf service tinkoff.public.invest.api.contract.v1.OrdersStreamService
 */
export declare const OrdersStreamService: ServiceType;
/**
 * @generated ServiceType for protobuf service tinkoff.public.invest.api.contract.v1.OrdersService
 */
export declare const OrdersService: ServiceType;
export {};
