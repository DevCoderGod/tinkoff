import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { CancelStopOrderResponse } from "./stoporders";
import type { CancelStopOrderRequest } from "./stoporders";
import type { GetStopOrdersResponse } from "./stoporders";
import type { GetStopOrdersRequest } from "./stoporders";
import type { PostStopOrderResponse } from "./stoporders";
import type { PostStopOrderRequest } from "./stoporders";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Сервис предназначен для работы со стоп-заявками:</br> **1**.
 * выставление;</br> **2**. отмена;</br> **3**. получение списка стоп-заявок.
 *
 * @generated from protobuf service tinkoff.public.invest.api.contract.v1.StopOrdersService
 */
export interface IStopOrdersServiceClient {
    /**
     * Метод выставления стоп-заявки.
     *
     * @generated from protobuf rpc: PostStopOrder(tinkoff.public.invest.api.contract.v1.PostStopOrderRequest) returns (tinkoff.public.invest.api.contract.v1.PostStopOrderResponse);
     */
    postStopOrder(input: PostStopOrderRequest, options?: RpcOptions): UnaryCall<PostStopOrderRequest, PostStopOrderResponse>;
    /**
     * Метод получения списка активных стоп заявок по счёту.
     *
     * @generated from protobuf rpc: GetStopOrders(tinkoff.public.invest.api.contract.v1.GetStopOrdersRequest) returns (tinkoff.public.invest.api.contract.v1.GetStopOrdersResponse);
     */
    getStopOrders(input: GetStopOrdersRequest, options?: RpcOptions): UnaryCall<GetStopOrdersRequest, GetStopOrdersResponse>;
    /**
     * Метод отмены стоп-заявки.
     *
     * @generated from protobuf rpc: CancelStopOrder(tinkoff.public.invest.api.contract.v1.CancelStopOrderRequest) returns (tinkoff.public.invest.api.contract.v1.CancelStopOrderResponse);
     */
    cancelStopOrder(input: CancelStopOrderRequest, options?: RpcOptions): UnaryCall<CancelStopOrderRequest, CancelStopOrderResponse>;
}
/**
 * Сервис предназначен для работы со стоп-заявками:</br> **1**.
 * выставление;</br> **2**. отмена;</br> **3**. получение списка стоп-заявок.
 *
 * @generated from protobuf service tinkoff.public.invest.api.contract.v1.StopOrdersService
 */
export declare class StopOrdersServiceClient implements IStopOrdersServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * Метод выставления стоп-заявки.
     *
     * @generated from protobuf rpc: PostStopOrder(tinkoff.public.invest.api.contract.v1.PostStopOrderRequest) returns (tinkoff.public.invest.api.contract.v1.PostStopOrderResponse);
     */
    postStopOrder(input: PostStopOrderRequest, options?: RpcOptions): UnaryCall<PostStopOrderRequest, PostStopOrderResponse>;
    /**
     * Метод получения списка активных стоп заявок по счёту.
     *
     * @generated from protobuf rpc: GetStopOrders(tinkoff.public.invest.api.contract.v1.GetStopOrdersRequest) returns (tinkoff.public.invest.api.contract.v1.GetStopOrdersResponse);
     */
    getStopOrders(input: GetStopOrdersRequest, options?: RpcOptions): UnaryCall<GetStopOrdersRequest, GetStopOrdersResponse>;
    /**
     * Метод отмены стоп-заявки.
     *
     * @generated from protobuf rpc: CancelStopOrder(tinkoff.public.invest.api.contract.v1.CancelStopOrderRequest) returns (tinkoff.public.invest.api.contract.v1.CancelStopOrderResponse);
     */
    cancelStopOrder(input: CancelStopOrderRequest, options?: RpcOptions): UnaryCall<CancelStopOrderRequest, CancelStopOrderResponse>;
}
