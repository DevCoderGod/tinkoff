// @generated by protobuf-ts 2.8.2 with parameter long_type_string
// @generated from protobuf file "operations.proto" (package "tinkoff.public.invest.api.contract.v1", syntax proto3)
// tslint:disable
import { OperationsStreamService } from "./operations";
import type { PositionsStreamResponse } from "./operations";
import type { PositionsStreamRequest } from "./operations";
import type { PortfolioStreamResponse } from "./operations";
import type { PortfolioStreamRequest } from "./operations";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { OperationsService } from "./operations";
import type { GetOperationsByCursorResponse } from "./operations";
import type { GetOperationsByCursorRequest } from "./operations";
import type { GetDividendsForeignIssuerResponse } from "./operations";
import type { GetDividendsForeignIssuerRequest } from "./operations";
import type { BrokerReportResponse } from "./operations";
import type { BrokerReportRequest } from "./operations";
import type { WithdrawLimitsResponse } from "./operations";
import type { WithdrawLimitsRequest } from "./operations";
import type { PositionsResponse } from "./operations";
import type { PositionsRequest } from "./operations";
import type { PortfolioResponse } from "./operations";
import type { PortfolioRequest } from "./operations";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { OperationsResponse } from "./operations";
import type { OperationsRequest } from "./operations";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Сервис предназначен для получения:</br> **1**.  списка операций по счёту;</br> **2**.
 * портфеля по счёту;</br> **3**. позиций ценных бумаг на счёте;</br> **4**.
 * доступного остатка для вывода средств;</br> **5**. получения различных отчётов.
 *
 * @generated from protobuf service tinkoff.public.invest.api.contract.v1.OperationsService
 */
export interface IOperationsServiceClient {
    /**
     * Метод получения списка операций по счёту.При работе с данным методом необходимо учитывать
     * [особенности взаимодействия](/investAPI/operations_problems) с данным методом.
     *
     * @generated from protobuf rpc: GetOperations(tinkoff.public.invest.api.contract.v1.OperationsRequest) returns (tinkoff.public.invest.api.contract.v1.OperationsResponse);
     */
    getOperations(input: OperationsRequest, options?: RpcOptions): UnaryCall<OperationsRequest, OperationsResponse>;
    /**
     * Метод получения портфеля по счёту.
     *
     * @generated from protobuf rpc: GetPortfolio(tinkoff.public.invest.api.contract.v1.PortfolioRequest) returns (tinkoff.public.invest.api.contract.v1.PortfolioResponse);
     */
    getPortfolio(input: PortfolioRequest, options?: RpcOptions): UnaryCall<PortfolioRequest, PortfolioResponse>;
    /**
     * Метод получения списка позиций по счёту.
     *
     * @generated from protobuf rpc: GetPositions(tinkoff.public.invest.api.contract.v1.PositionsRequest) returns (tinkoff.public.invest.api.contract.v1.PositionsResponse);
     */
    getPositions(input: PositionsRequest, options?: RpcOptions): UnaryCall<PositionsRequest, PositionsResponse>;
    /**
     * Метод получения доступного остатка для вывода средств.
     *
     * @generated from protobuf rpc: GetWithdrawLimits(tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest) returns (tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse);
     */
    getWithdrawLimits(input: WithdrawLimitsRequest, options?: RpcOptions): UnaryCall<WithdrawLimitsRequest, WithdrawLimitsResponse>;
    /**
     * Метод получения брокерского отчёта.
     *
     * @generated from protobuf rpc: GetBrokerReport(tinkoff.public.invest.api.contract.v1.BrokerReportRequest) returns (tinkoff.public.invest.api.contract.v1.BrokerReportResponse);
     */
    getBrokerReport(input: BrokerReportRequest, options?: RpcOptions): UnaryCall<BrokerReportRequest, BrokerReportResponse>;
    /**
     * Метод получения отчёта "Справка о доходах за пределами РФ".
     *
     * @generated from protobuf rpc: GetDividendsForeignIssuer(tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest) returns (tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse);
     */
    getDividendsForeignIssuer(input: GetDividendsForeignIssuerRequest, options?: RpcOptions): UnaryCall<GetDividendsForeignIssuerRequest, GetDividendsForeignIssuerResponse>;
    /**
     * Метод получения списка операций по счёту с пагинацией. При работе с данным методом необходимо учитывать
     * [особенности взаимодействия](/investAPI/operations_problems) с данным методом.
     *
     * @generated from protobuf rpc: GetOperationsByCursor(tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest) returns (tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse);
     */
    getOperationsByCursor(input: GetOperationsByCursorRequest, options?: RpcOptions): UnaryCall<GetOperationsByCursorRequest, GetOperationsByCursorResponse>;
}
/**
 * Сервис предназначен для получения:</br> **1**.  списка операций по счёту;</br> **2**.
 * портфеля по счёту;</br> **3**. позиций ценных бумаг на счёте;</br> **4**.
 * доступного остатка для вывода средств;</br> **5**. получения различных отчётов.
 *
 * @generated from protobuf service tinkoff.public.invest.api.contract.v1.OperationsService
 */
export class OperationsServiceClient implements IOperationsServiceClient, ServiceInfo {
    typeName = OperationsService.typeName;
    methods = OperationsService.methods;
    options = OperationsService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Метод получения списка операций по счёту.При работе с данным методом необходимо учитывать
     * [особенности взаимодействия](/investAPI/operations_problems) с данным методом.
     *
     * @generated from protobuf rpc: GetOperations(tinkoff.public.invest.api.contract.v1.OperationsRequest) returns (tinkoff.public.invest.api.contract.v1.OperationsResponse);
     */
    getOperations(input: OperationsRequest, options?: RpcOptions): UnaryCall<OperationsRequest, OperationsResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<OperationsRequest, OperationsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Метод получения портфеля по счёту.
     *
     * @generated from protobuf rpc: GetPortfolio(tinkoff.public.invest.api.contract.v1.PortfolioRequest) returns (tinkoff.public.invest.api.contract.v1.PortfolioResponse);
     */
    getPortfolio(input: PortfolioRequest, options?: RpcOptions): UnaryCall<PortfolioRequest, PortfolioResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<PortfolioRequest, PortfolioResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Метод получения списка позиций по счёту.
     *
     * @generated from protobuf rpc: GetPositions(tinkoff.public.invest.api.contract.v1.PositionsRequest) returns (tinkoff.public.invest.api.contract.v1.PositionsResponse);
     */
    getPositions(input: PositionsRequest, options?: RpcOptions): UnaryCall<PositionsRequest, PositionsResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<PositionsRequest, PositionsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Метод получения доступного остатка для вывода средств.
     *
     * @generated from protobuf rpc: GetWithdrawLimits(tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest) returns (tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse);
     */
    getWithdrawLimits(input: WithdrawLimitsRequest, options?: RpcOptions): UnaryCall<WithdrawLimitsRequest, WithdrawLimitsResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<WithdrawLimitsRequest, WithdrawLimitsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Метод получения брокерского отчёта.
     *
     * @generated from protobuf rpc: GetBrokerReport(tinkoff.public.invest.api.contract.v1.BrokerReportRequest) returns (tinkoff.public.invest.api.contract.v1.BrokerReportResponse);
     */
    getBrokerReport(input: BrokerReportRequest, options?: RpcOptions): UnaryCall<BrokerReportRequest, BrokerReportResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<BrokerReportRequest, BrokerReportResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Метод получения отчёта "Справка о доходах за пределами РФ".
     *
     * @generated from protobuf rpc: GetDividendsForeignIssuer(tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest) returns (tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse);
     */
    getDividendsForeignIssuer(input: GetDividendsForeignIssuerRequest, options?: RpcOptions): UnaryCall<GetDividendsForeignIssuerRequest, GetDividendsForeignIssuerResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetDividendsForeignIssuerRequest, GetDividendsForeignIssuerResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Метод получения списка операций по счёту с пагинацией. При работе с данным методом необходимо учитывать
     * [особенности взаимодействия](/investAPI/operations_problems) с данным методом.
     *
     * @generated from protobuf rpc: GetOperationsByCursor(tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest) returns (tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse);
     */
    getOperationsByCursor(input: GetOperationsByCursorRequest, options?: RpcOptions): UnaryCall<GetOperationsByCursorRequest, GetOperationsByCursorResponse> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetOperationsByCursorRequest, GetOperationsByCursorResponse>("unary", this._transport, method, opt, input);
    }
}
/**
 * @generated from protobuf service tinkoff.public.invest.api.contract.v1.OperationsStreamService
 */
export interface IOperationsStreamServiceClient {
    /**
     * Server-side stream обновлений портфеля
     *
     * @generated from protobuf rpc: PortfolioStream(tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest) returns (stream tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse);
     */
    portfolioStream(input: PortfolioStreamRequest, options?: RpcOptions): ServerStreamingCall<PortfolioStreamRequest, PortfolioStreamResponse>;
    /**
     * Server-side stream обновлений информации по изменению позиций портфеля
     *
     * @generated from protobuf rpc: PositionsStream(tinkoff.public.invest.api.contract.v1.PositionsStreamRequest) returns (stream tinkoff.public.invest.api.contract.v1.PositionsStreamResponse);
     */
    positionsStream(input: PositionsStreamRequest, options?: RpcOptions): ServerStreamingCall<PositionsStreamRequest, PositionsStreamResponse>;
}
/**
 * @generated from protobuf service tinkoff.public.invest.api.contract.v1.OperationsStreamService
 */
export class OperationsStreamServiceClient implements IOperationsStreamServiceClient, ServiceInfo {
    typeName = OperationsStreamService.typeName;
    methods = OperationsStreamService.methods;
    options = OperationsStreamService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Server-side stream обновлений портфеля
     *
     * @generated from protobuf rpc: PortfolioStream(tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest) returns (stream tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse);
     */
    portfolioStream(input: PortfolioStreamRequest, options?: RpcOptions): ServerStreamingCall<PortfolioStreamRequest, PortfolioStreamResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<PortfolioStreamRequest, PortfolioStreamResponse>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     * Server-side stream обновлений информации по изменению позиций портфеля
     *
     * @generated from protobuf rpc: PositionsStream(tinkoff.public.invest.api.contract.v1.PositionsStreamRequest) returns (stream tinkoff.public.invest.api.contract.v1.PositionsStreamResponse);
     */
    positionsStream(input: PositionsStreamRequest, options?: RpcOptions): ServerStreamingCall<PositionsStreamRequest, PositionsStreamResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<PositionsStreamRequest, PositionsStreamResponse>("serverStreaming", this._transport, method, opt, input);
    }
}