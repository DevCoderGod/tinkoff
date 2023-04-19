import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { MoneyValue } from "./common";
import { Timestamp } from "./google/protobuf/timestamp";
import { Quotation } from "./common";
/**
 * Запрос выставления стоп-заявки.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.PostStopOrderRequest
 */
export interface PostStopOrderRequest {
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
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation stop_price = 4;
     */
    stopPrice?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.StopOrderDirection direction = 5;
     */
    direction: StopOrderDirection;
    /**
     * @generated from protobuf field: string account_id = 6;
     */
    accountId: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.StopOrderExpirationType expiration_type = 7;
     */
    expirationType: StopOrderExpirationType;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.StopOrderType stop_order_type = 8;
     */
    stopOrderType: StopOrderType;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp expire_date = 9;
     */
    expireDate?: Timestamp;
    /**
     * @generated from protobuf field: string instrument_id = 10;
     */
    instrumentId: string;
}
/**
 * Результат выставления стоп-заявки.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.PostStopOrderResponse
 */
export interface PostStopOrderResponse {
    /**
     * @generated from protobuf field: string stop_order_id = 1;
     */
    stopOrderId: string;
}
/**
 * Запрос получения списка активных стоп-заявок.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetStopOrdersRequest
 */
export interface GetStopOrdersRequest {
    /**
     * @generated from protobuf field: string account_id = 1;
     */
    accountId: string;
}
/**
 * Список активных стоп-заявок.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetStopOrdersResponse
 */
export interface GetStopOrdersResponse {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.StopOrder stop_orders = 1;
     */
    stopOrders: StopOrder[];
}
/**
 * Запрос отмены выставленной стоп-заявки.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.CancelStopOrderRequest
 */
export interface CancelStopOrderRequest {
    /**
     * @generated from protobuf field: string account_id = 1;
     */
    accountId: string;
    /**
     * @generated from protobuf field: string stop_order_id = 2;
     */
    stopOrderId: string;
}
/**
 * Результат отмены выставленной стоп-заявки.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.CancelStopOrderResponse
 */
export interface CancelStopOrderResponse {
    /**
     * @generated from protobuf field: google.protobuf.Timestamp time = 1;
     */
    time?: Timestamp;
}
/**
 * Информация о стоп-заявке.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.StopOrder
 */
export interface StopOrder {
    /**
     * @generated from protobuf field: string stop_order_id = 1;
     */
    stopOrderId: string;
    /**
     * @generated from protobuf field: int64 lots_requested = 2;
     */
    lotsRequested: string;
    /**
     * @generated from protobuf field: string figi = 3;
     */
    figi: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.StopOrderDirection direction = 4;
     */
    direction: StopOrderDirection;
    /**
     * @generated from protobuf field: string currency = 5;
     */
    currency: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.StopOrderType order_type = 6;
     */
    orderType: StopOrderType;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp create_date = 7;
     */
    createDate?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp activation_date_time = 8;
     */
    activationDateTime?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp expiration_time = 9;
     */
    expirationTime?: Timestamp;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue price = 10;
     */
    price?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue stop_price = 11;
     */
    stopPrice?: MoneyValue;
    /**
     * @generated from protobuf field: string instrument_uid = 12;
     */
    instrumentUid: string;
}
/**
 * Направление сделки стоп-заявки.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.StopOrderDirection
 */
export declare enum StopOrderDirection {
    /**
     * Значение не указано.
     *
     * @generated from protobuf enum value: STOP_ORDER_DIRECTION_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Покупка.
     *
     * @generated from protobuf enum value: STOP_ORDER_DIRECTION_BUY = 1;
     */
    BUY = 1,
    /**
     * Продажа.
     *
     * @generated from protobuf enum value: STOP_ORDER_DIRECTION_SELL = 2;
     */
    SELL = 2
}
/**
 * Тип экспирации стоп-заявке.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.StopOrderExpirationType
 */
export declare enum StopOrderExpirationType {
    /**
     * Значение не указано.
     *
     * @generated from protobuf enum value: STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Действительно до отмены.
     *
     * @generated from protobuf enum value: STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL = 1;
     */
    GOOD_TILL_CANCEL = 1,
    /**
     * Действительно до даты снятия.
     *
     * @generated from protobuf enum value: STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE = 2;
     */
    GOOD_TILL_DATE = 2
}
/**
 * Тип стоп-заявки.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.StopOrderType
 */
export declare enum StopOrderType {
    /**
     * Значение не указано.
     *
     * @generated from protobuf enum value: STOP_ORDER_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Take-profit заявка.
     *
     * @generated from protobuf enum value: STOP_ORDER_TYPE_TAKE_PROFIT = 1;
     */
    TAKE_PROFIT = 1,
    /**
     * Stop-loss заявка.
     *
     * @generated from protobuf enum value: STOP_ORDER_TYPE_STOP_LOSS = 2;
     */
    STOP_LOSS = 2,
    /**
     * Stop-limit заявка.
     *
     * @generated from protobuf enum value: STOP_ORDER_TYPE_STOP_LIMIT = 3;
     */
    STOP_LIMIT = 3
}
declare class PostStopOrderRequest$Type extends MessageType<PostStopOrderRequest> {
    constructor();
    create(value?: PartialMessage<PostStopOrderRequest>): PostStopOrderRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PostStopOrderRequest): PostStopOrderRequest;
    internalBinaryWrite(message: PostStopOrderRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.PostStopOrderRequest
 */
export declare const PostStopOrderRequest: PostStopOrderRequest$Type;
declare class PostStopOrderResponse$Type extends MessageType<PostStopOrderResponse> {
    constructor();
    create(value?: PartialMessage<PostStopOrderResponse>): PostStopOrderResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PostStopOrderResponse): PostStopOrderResponse;
    internalBinaryWrite(message: PostStopOrderResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.PostStopOrderResponse
 */
export declare const PostStopOrderResponse: PostStopOrderResponse$Type;
declare class GetStopOrdersRequest$Type extends MessageType<GetStopOrdersRequest> {
    constructor();
    create(value?: PartialMessage<GetStopOrdersRequest>): GetStopOrdersRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetStopOrdersRequest): GetStopOrdersRequest;
    internalBinaryWrite(message: GetStopOrdersRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetStopOrdersRequest
 */
export declare const GetStopOrdersRequest: GetStopOrdersRequest$Type;
declare class GetStopOrdersResponse$Type extends MessageType<GetStopOrdersResponse> {
    constructor();
    create(value?: PartialMessage<GetStopOrdersResponse>): GetStopOrdersResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetStopOrdersResponse): GetStopOrdersResponse;
    internalBinaryWrite(message: GetStopOrdersResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetStopOrdersResponse
 */
export declare const GetStopOrdersResponse: GetStopOrdersResponse$Type;
declare class CancelStopOrderRequest$Type extends MessageType<CancelStopOrderRequest> {
    constructor();
    create(value?: PartialMessage<CancelStopOrderRequest>): CancelStopOrderRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CancelStopOrderRequest): CancelStopOrderRequest;
    internalBinaryWrite(message: CancelStopOrderRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.CancelStopOrderRequest
 */
export declare const CancelStopOrderRequest: CancelStopOrderRequest$Type;
declare class CancelStopOrderResponse$Type extends MessageType<CancelStopOrderResponse> {
    constructor();
    create(value?: PartialMessage<CancelStopOrderResponse>): CancelStopOrderResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CancelStopOrderResponse): CancelStopOrderResponse;
    internalBinaryWrite(message: CancelStopOrderResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.CancelStopOrderResponse
 */
export declare const CancelStopOrderResponse: CancelStopOrderResponse$Type;
declare class StopOrder$Type extends MessageType<StopOrder> {
    constructor();
    create(value?: PartialMessage<StopOrder>): StopOrder;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StopOrder): StopOrder;
    internalBinaryWrite(message: StopOrder, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.StopOrder
 */
export declare const StopOrder: StopOrder$Type;
/**
 * @generated ServiceType for protobuf service tinkoff.public.invest.api.contract.v1.StopOrdersService
 */
export declare const StopOrdersService: ServiceType;
export {};
