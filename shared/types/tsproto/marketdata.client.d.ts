import type { MarketDataServerSideStreamRequest } from "./marketdata";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { MarketDataResponse } from "./marketdata";
import type { MarketDataRequest } from "./marketdata";
import type { DuplexStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { GetClosePricesResponse } from "./marketdata";
import type { GetClosePricesRequest } from "./marketdata";
import type { GetLastTradesResponse } from "./marketdata";
import type { GetLastTradesRequest } from "./marketdata";
import type { GetTradingStatusesResponse } from "./marketdata";
import type { GetTradingStatusesRequest } from "./marketdata";
import type { GetTradingStatusResponse } from "./marketdata";
import type { GetTradingStatusRequest } from "./marketdata";
import type { GetOrderBookResponse } from "./marketdata";
import type { GetOrderBookRequest } from "./marketdata";
import type { GetLastPricesResponse } from "./marketdata";
import type { GetLastPricesRequest } from "./marketdata";
import type { GetCandlesResponse } from "./marketdata";
import type { GetCandlesRequest } from "./marketdata";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Сервис получения биржевой информации:</br> **1**. свечи;</br> **2**. стаканы;</br> **3**. торговые статусы;</br> **4**. лента сделок.
 *
 * @generated from protobuf service tinkoff.public.invest.api.contract.v1.MarketDataService
 */
export interface IMarketDataServiceClient {
    /**
     * Метод запроса исторических свечей по инструменту.
     *
     * @generated from protobuf rpc: GetCandles(tinkoff.public.invest.api.contract.v1.GetCandlesRequest) returns (tinkoff.public.invest.api.contract.v1.GetCandlesResponse);
     */
    getCandles(input: GetCandlesRequest, options?: RpcOptions): UnaryCall<GetCandlesRequest, GetCandlesResponse>;
    /**
     * Метод запроса цен последних сделок по инструментам.
     *
     * @generated from protobuf rpc: GetLastPrices(tinkoff.public.invest.api.contract.v1.GetLastPricesRequest) returns (tinkoff.public.invest.api.contract.v1.GetLastPricesResponse);
     */
    getLastPrices(input: GetLastPricesRequest, options?: RpcOptions): UnaryCall<GetLastPricesRequest, GetLastPricesResponse>;
    /**
     * Метод получения стакана по инструменту.
     *
     * @generated from protobuf rpc: GetOrderBook(tinkoff.public.invest.api.contract.v1.GetOrderBookRequest) returns (tinkoff.public.invest.api.contract.v1.GetOrderBookResponse);
     */
    getOrderBook(input: GetOrderBookRequest, options?: RpcOptions): UnaryCall<GetOrderBookRequest, GetOrderBookResponse>;
    /**
     * Метод запроса статуса торгов по инструментам.
     *
     * @generated from protobuf rpc: GetTradingStatus(tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest) returns (tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse);
     */
    getTradingStatus(input: GetTradingStatusRequest, options?: RpcOptions): UnaryCall<GetTradingStatusRequest, GetTradingStatusResponse>;
    /**
     * Метод запроса статуса торгов по инструментам.
     *
     * @generated from protobuf rpc: GetTradingStatuses(tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest) returns (tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse);
     */
    getTradingStatuses(input: GetTradingStatusesRequest, options?: RpcOptions): UnaryCall<GetTradingStatusesRequest, GetTradingStatusesResponse>;
    /**
     * Метод запроса обезличенных сделок за последний час.
     *
     * @generated from protobuf rpc: GetLastTrades(tinkoff.public.invest.api.contract.v1.GetLastTradesRequest) returns (tinkoff.public.invest.api.contract.v1.GetLastTradesResponse);
     */
    getLastTrades(input: GetLastTradesRequest, options?: RpcOptions): UnaryCall<GetLastTradesRequest, GetLastTradesResponse>;
    /**
     * Метод запроса цен закрытия торговой сессии по инструментам.
     *
     * @generated from protobuf rpc: GetClosePrices(tinkoff.public.invest.api.contract.v1.GetClosePricesRequest) returns (tinkoff.public.invest.api.contract.v1.GetClosePricesResponse);
     */
    getClosePrices(input: GetClosePricesRequest, options?: RpcOptions): UnaryCall<GetClosePricesRequest, GetClosePricesResponse>;
}
/**
 * Сервис получения биржевой информации:</br> **1**. свечи;</br> **2**. стаканы;</br> **3**. торговые статусы;</br> **4**. лента сделок.
 *
 * @generated from protobuf service tinkoff.public.invest.api.contract.v1.MarketDataService
 */
export declare class MarketDataServiceClient implements IMarketDataServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * Метод запроса исторических свечей по инструменту.
     *
     * @generated from protobuf rpc: GetCandles(tinkoff.public.invest.api.contract.v1.GetCandlesRequest) returns (tinkoff.public.invest.api.contract.v1.GetCandlesResponse);
     */
    getCandles(input: GetCandlesRequest, options?: RpcOptions): UnaryCall<GetCandlesRequest, GetCandlesResponse>;
    /**
     * Метод запроса цен последних сделок по инструментам.
     *
     * @generated from protobuf rpc: GetLastPrices(tinkoff.public.invest.api.contract.v1.GetLastPricesRequest) returns (tinkoff.public.invest.api.contract.v1.GetLastPricesResponse);
     */
    getLastPrices(input: GetLastPricesRequest, options?: RpcOptions): UnaryCall<GetLastPricesRequest, GetLastPricesResponse>;
    /**
     * Метод получения стакана по инструменту.
     *
     * @generated from protobuf rpc: GetOrderBook(tinkoff.public.invest.api.contract.v1.GetOrderBookRequest) returns (tinkoff.public.invest.api.contract.v1.GetOrderBookResponse);
     */
    getOrderBook(input: GetOrderBookRequest, options?: RpcOptions): UnaryCall<GetOrderBookRequest, GetOrderBookResponse>;
    /**
     * Метод запроса статуса торгов по инструментам.
     *
     * @generated from protobuf rpc: GetTradingStatus(tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest) returns (tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse);
     */
    getTradingStatus(input: GetTradingStatusRequest, options?: RpcOptions): UnaryCall<GetTradingStatusRequest, GetTradingStatusResponse>;
    /**
     * Метод запроса статуса торгов по инструментам.
     *
     * @generated from protobuf rpc: GetTradingStatuses(tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest) returns (tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse);
     */
    getTradingStatuses(input: GetTradingStatusesRequest, options?: RpcOptions): UnaryCall<GetTradingStatusesRequest, GetTradingStatusesResponse>;
    /**
     * Метод запроса обезличенных сделок за последний час.
     *
     * @generated from protobuf rpc: GetLastTrades(tinkoff.public.invest.api.contract.v1.GetLastTradesRequest) returns (tinkoff.public.invest.api.contract.v1.GetLastTradesResponse);
     */
    getLastTrades(input: GetLastTradesRequest, options?: RpcOptions): UnaryCall<GetLastTradesRequest, GetLastTradesResponse>;
    /**
     * Метод запроса цен закрытия торговой сессии по инструментам.
     *
     * @generated from protobuf rpc: GetClosePrices(tinkoff.public.invest.api.contract.v1.GetClosePricesRequest) returns (tinkoff.public.invest.api.contract.v1.GetClosePricesResponse);
     */
    getClosePrices(input: GetClosePricesRequest, options?: RpcOptions): UnaryCall<GetClosePricesRequest, GetClosePricesResponse>;
}
/**
 * @generated from protobuf service tinkoff.public.invest.api.contract.v1.MarketDataStreamService
 */
export interface IMarketDataStreamServiceClient {
    /**
     * Bi-directional стрим предоставления биржевой информации.
     *
     * @generated from protobuf rpc: MarketDataStream(stream tinkoff.public.invest.api.contract.v1.MarketDataRequest) returns (stream tinkoff.public.invest.api.contract.v1.MarketDataResponse);
     */
    marketDataStream(options?: RpcOptions): DuplexStreamingCall<MarketDataRequest, MarketDataResponse>;
    /**
     * Server-side стрим предоставления биржевой информации.
     *
     * @generated from protobuf rpc: MarketDataServerSideStream(tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest) returns (stream tinkoff.public.invest.api.contract.v1.MarketDataResponse);
     */
    marketDataServerSideStream(input: MarketDataServerSideStreamRequest, options?: RpcOptions): ServerStreamingCall<MarketDataServerSideStreamRequest, MarketDataResponse>;
}
/**
 * @generated from protobuf service tinkoff.public.invest.api.contract.v1.MarketDataStreamService
 */
export declare class MarketDataStreamServiceClient implements IMarketDataStreamServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * Bi-directional стрим предоставления биржевой информации.
     *
     * @generated from protobuf rpc: MarketDataStream(stream tinkoff.public.invest.api.contract.v1.MarketDataRequest) returns (stream tinkoff.public.invest.api.contract.v1.MarketDataResponse);
     */
    marketDataStream(options?: RpcOptions): DuplexStreamingCall<MarketDataRequest, MarketDataResponse>;
    /**
     * Server-side стрим предоставления биржевой информации.
     *
     * @generated from protobuf rpc: MarketDataServerSideStream(tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest) returns (stream tinkoff.public.invest.api.contract.v1.MarketDataResponse);
     */
    marketDataServerSideStream(input: MarketDataServerSideStreamRequest, options?: RpcOptions): ServerStreamingCall<MarketDataServerSideStreamRequest, MarketDataResponse>;
}
