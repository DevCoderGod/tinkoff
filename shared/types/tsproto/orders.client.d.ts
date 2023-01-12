import type { ReplaceOrderRequest } from "./orders";
import type { GetOrdersResponse } from "./orders";
import type { GetOrdersRequest } from "./orders";
import type { OrderState } from "./orders";
import type { GetOrderStateRequest } from "./orders";
import type { CancelOrderResponse } from "./orders";
import type { CancelOrderRequest } from "./orders";
import type { PostOrderResponse } from "./orders";
import type { PostOrderRequest } from "./orders";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { TradesStreamResponse } from "./orders";
import type { TradesStreamRequest } from "./orders";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service tinkoff.public.invest.api.contract.v1.OrdersStreamService
 */
export interface IOrdersStreamServiceClient {
    /**
     * Stream сделок пользователя
     *
     * @generated from protobuf rpc: TradesStream(tinkoff.public.invest.api.contract.v1.TradesStreamRequest) returns (stream tinkoff.public.invest.api.contract.v1.TradesStreamResponse);
     */
    tradesStream(input: TradesStreamRequest, options?: RpcOptions): ServerStreamingCall<TradesStreamRequest, TradesStreamResponse>;
}
/**
 * @generated from protobuf service tinkoff.public.invest.api.contract.v1.OrdersStreamService
 */
export declare class OrdersStreamServiceClient implements IOrdersStreamServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * Stream сделок пользователя
     *
     * @generated from protobuf rpc: TradesStream(tinkoff.public.invest.api.contract.v1.TradesStreamRequest) returns (stream tinkoff.public.invest.api.contract.v1.TradesStreamResponse);
     */
    tradesStream(input: TradesStreamRequest, options?: RpcOptions): ServerStreamingCall<TradesStreamRequest, TradesStreamResponse>;
}
/**
 * Сервис предназначен для работы с торговыми поручениями:</br> **1**.
 * выставление;</br> **2**. отмена;</br> **3**. получение статуса;</br> **4**.
 * расчёт полной стоимости;</br> **5**. получение списка заявок.
 *
 * @generated from protobuf service tinkoff.public.invest.api.contract.v1.OrdersService
 */
export interface IOrdersServiceClient {
    /**
     * Метод выставления заявки.
     *
     * @generated from protobuf rpc: PostOrder(tinkoff.public.invest.api.contract.v1.PostOrderRequest) returns (tinkoff.public.invest.api.contract.v1.PostOrderResponse);
     */
    postOrder(input: PostOrderRequest, options?: RpcOptions): UnaryCall<PostOrderRequest, PostOrderResponse>;
    /**
     * Метод отмены биржевой заявки.
     *
     * @generated from protobuf rpc: CancelOrder(tinkoff.public.invest.api.contract.v1.CancelOrderRequest) returns (tinkoff.public.invest.api.contract.v1.CancelOrderResponse);
     */
    cancelOrder(input: CancelOrderRequest, options?: RpcOptions): UnaryCall<CancelOrderRequest, CancelOrderResponse>;
    /**
     * Метод получения статуса торгового поручения.
     *
     * @generated from protobuf rpc: GetOrderState(tinkoff.public.invest.api.contract.v1.GetOrderStateRequest) returns (tinkoff.public.invest.api.contract.v1.OrderState);
     */
    getOrderState(input: GetOrderStateRequest, options?: RpcOptions): UnaryCall<GetOrderStateRequest, OrderState>;
    /**
     * Метод получения списка активных заявок по счёту.
     *
     * @generated from protobuf rpc: GetOrders(tinkoff.public.invest.api.contract.v1.GetOrdersRequest) returns (tinkoff.public.invest.api.contract.v1.GetOrdersResponse);
     */
    getOrders(input: GetOrdersRequest, options?: RpcOptions): UnaryCall<GetOrdersRequest, GetOrdersResponse>;
    /**
     * Метод изменения выставленной заявки.
     *
     * @generated from protobuf rpc: ReplaceOrder(tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest) returns (tinkoff.public.invest.api.contract.v1.PostOrderResponse);
     */
    replaceOrder(input: ReplaceOrderRequest, options?: RpcOptions): UnaryCall<ReplaceOrderRequest, PostOrderResponse>;
}
/**
 * Сервис предназначен для работы с торговыми поручениями:</br> **1**.
 * выставление;</br> **2**. отмена;</br> **3**. получение статуса;</br> **4**.
 * расчёт полной стоимости;</br> **5**. получение списка заявок.
 *
 * @generated from protobuf service tinkoff.public.invest.api.contract.v1.OrdersService
 */
export declare class OrdersServiceClient implements IOrdersServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * Метод выставления заявки.
     *
     * @generated from protobuf rpc: PostOrder(tinkoff.public.invest.api.contract.v1.PostOrderRequest) returns (tinkoff.public.invest.api.contract.v1.PostOrderResponse);
     */
    postOrder(input: PostOrderRequest, options?: RpcOptions): UnaryCall<PostOrderRequest, PostOrderResponse>;
    /**
     * Метод отмены биржевой заявки.
     *
     * @generated from protobuf rpc: CancelOrder(tinkoff.public.invest.api.contract.v1.CancelOrderRequest) returns (tinkoff.public.invest.api.contract.v1.CancelOrderResponse);
     */
    cancelOrder(input: CancelOrderRequest, options?: RpcOptions): UnaryCall<CancelOrderRequest, CancelOrderResponse>;
    /**
     * Метод получения статуса торгового поручения.
     *
     * @generated from protobuf rpc: GetOrderState(tinkoff.public.invest.api.contract.v1.GetOrderStateRequest) returns (tinkoff.public.invest.api.contract.v1.OrderState);
     */
    getOrderState(input: GetOrderStateRequest, options?: RpcOptions): UnaryCall<GetOrderStateRequest, OrderState>;
    /**
     * Метод получения списка активных заявок по счёту.
     *
     * @generated from protobuf rpc: GetOrders(tinkoff.public.invest.api.contract.v1.GetOrdersRequest) returns (tinkoff.public.invest.api.contract.v1.GetOrdersResponse);
     */
    getOrders(input: GetOrdersRequest, options?: RpcOptions): UnaryCall<GetOrdersRequest, GetOrdersResponse>;
    /**
     * Метод изменения выставленной заявки.
     *
     * @generated from protobuf rpc: ReplaceOrder(tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest) returns (tinkoff.public.invest.api.contract.v1.PostOrderResponse);
     */
    replaceOrder(input: ReplaceOrderRequest, options?: RpcOptions): UnaryCall<ReplaceOrderRequest, PostOrderResponse>;
}
