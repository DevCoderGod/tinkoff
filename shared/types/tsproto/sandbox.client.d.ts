import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { WithdrawLimitsResponse } from "./operations";
import type { WithdrawLimitsRequest } from "./operations";
import type { SandboxPayInResponse } from "./sandbox";
import type { SandboxPayInRequest } from "./sandbox";
import type { PortfolioResponse } from "./operations";
import type { PortfolioRequest } from "./operations";
import type { GetOperationsByCursorResponse } from "./operations";
import type { GetOperationsByCursorRequest } from "./operations";
import type { OperationsResponse } from "./operations";
import type { OperationsRequest } from "./operations";
import type { PositionsResponse } from "./operations";
import type { PositionsRequest } from "./operations";
import type { OrderState } from "./orders";
import type { GetOrderStateRequest } from "./orders";
import type { CancelOrderResponse } from "./orders";
import type { CancelOrderRequest } from "./orders";
import type { GetOrdersResponse } from "./orders";
import type { GetOrdersRequest } from "./orders";
import type { ReplaceOrderRequest } from "./orders";
import type { PostOrderResponse } from "./orders";
import type { PostOrderRequest } from "./orders";
import type { CloseSandboxAccountResponse } from "./sandbox";
import type { CloseSandboxAccountRequest } from "./sandbox";
import type { GetAccountsResponse } from "./users";
import type { GetAccountsRequest } from "./users";
import type { OpenSandboxAccountResponse } from "./sandbox";
import type { OpenSandboxAccountRequest } from "./sandbox";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Сервис для работы с песочницей TINKOFF INVEST API
 *
 * @generated from protobuf service tinkoff.public.invest.api.contract.v1.SandboxService
 */
export interface ISandboxServiceClient {
    /**
     * Метод регистрации счёта в песочнице.
     *
     * @generated from protobuf rpc: OpenSandboxAccount(tinkoff.public.invest.api.contract.v1.OpenSandboxAccountRequest) returns (tinkoff.public.invest.api.contract.v1.OpenSandboxAccountResponse);
     */
    openSandboxAccount(input: OpenSandboxAccountRequest, options?: RpcOptions): UnaryCall<OpenSandboxAccountRequest, OpenSandboxAccountResponse>;
    /**
     * Метод получения счетов в песочнице.
     *
     * @generated from protobuf rpc: GetSandboxAccounts(tinkoff.public.invest.api.contract.v1.GetAccountsRequest) returns (tinkoff.public.invest.api.contract.v1.GetAccountsResponse);
     */
    getSandboxAccounts(input: GetAccountsRequest, options?: RpcOptions): UnaryCall<GetAccountsRequest, GetAccountsResponse>;
    /**
     * Метод закрытия счёта в песочнице.
     *
     * @generated from protobuf rpc: CloseSandboxAccount(tinkoff.public.invest.api.contract.v1.CloseSandboxAccountRequest) returns (tinkoff.public.invest.api.contract.v1.CloseSandboxAccountResponse);
     */
    closeSandboxAccount(input: CloseSandboxAccountRequest, options?: RpcOptions): UnaryCall<CloseSandboxAccountRequest, CloseSandboxAccountResponse>;
    /**
     * Метод выставления торгового поручения в песочнице.
     *
     * @generated from protobuf rpc: PostSandboxOrder(tinkoff.public.invest.api.contract.v1.PostOrderRequest) returns (tinkoff.public.invest.api.contract.v1.PostOrderResponse);
     */
    postSandboxOrder(input: PostOrderRequest, options?: RpcOptions): UnaryCall<PostOrderRequest, PostOrderResponse>;
    /**
     * Метод изменения выставленной заявки.
     *
     * @generated from protobuf rpc: ReplaceSandboxOrder(tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest) returns (tinkoff.public.invest.api.contract.v1.PostOrderResponse);
     */
    replaceSandboxOrder(input: ReplaceOrderRequest, options?: RpcOptions): UnaryCall<ReplaceOrderRequest, PostOrderResponse>;
    /**
     * Метод получения списка активных заявок по счёту в песочнице.
     *
     * @generated from protobuf rpc: GetSandboxOrders(tinkoff.public.invest.api.contract.v1.GetOrdersRequest) returns (tinkoff.public.invest.api.contract.v1.GetOrdersResponse);
     */
    getSandboxOrders(input: GetOrdersRequest, options?: RpcOptions): UnaryCall<GetOrdersRequest, GetOrdersResponse>;
    /**
     * Метод отмены торгового поручения в песочнице.
     *
     * @generated from protobuf rpc: CancelSandboxOrder(tinkoff.public.invest.api.contract.v1.CancelOrderRequest) returns (tinkoff.public.invest.api.contract.v1.CancelOrderResponse);
     */
    cancelSandboxOrder(input: CancelOrderRequest, options?: RpcOptions): UnaryCall<CancelOrderRequest, CancelOrderResponse>;
    /**
     * Метод получения статуса заявки в песочнице.
     *
     * @generated from protobuf rpc: GetSandboxOrderState(tinkoff.public.invest.api.contract.v1.GetOrderStateRequest) returns (tinkoff.public.invest.api.contract.v1.OrderState);
     */
    getSandboxOrderState(input: GetOrderStateRequest, options?: RpcOptions): UnaryCall<GetOrderStateRequest, OrderState>;
    /**
     * Метод получения позиций по виртуальному счёту песочницы.
     *
     * @generated from protobuf rpc: GetSandboxPositions(tinkoff.public.invest.api.contract.v1.PositionsRequest) returns (tinkoff.public.invest.api.contract.v1.PositionsResponse);
     */
    getSandboxPositions(input: PositionsRequest, options?: RpcOptions): UnaryCall<PositionsRequest, PositionsResponse>;
    /**
     * Метод получения операций в песочнице по номеру счёта.
     *
     * @generated from protobuf rpc: GetSandboxOperations(tinkoff.public.invest.api.contract.v1.OperationsRequest) returns (tinkoff.public.invest.api.contract.v1.OperationsResponse);
     */
    getSandboxOperations(input: OperationsRequest, options?: RpcOptions): UnaryCall<OperationsRequest, OperationsResponse>;
    /**
     * Метод получения операций в песочнице по номеру счета с пагинацией.
     *
     * @generated from protobuf rpc: GetSandboxOperationsByCursor(tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest) returns (tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse);
     */
    getSandboxOperationsByCursor(input: GetOperationsByCursorRequest, options?: RpcOptions): UnaryCall<GetOperationsByCursorRequest, GetOperationsByCursorResponse>;
    /**
     * Метод получения портфолио в песочнице.
     *
     * @generated from protobuf rpc: GetSandboxPortfolio(tinkoff.public.invest.api.contract.v1.PortfolioRequest) returns (tinkoff.public.invest.api.contract.v1.PortfolioResponse);
     */
    getSandboxPortfolio(input: PortfolioRequest, options?: RpcOptions): UnaryCall<PortfolioRequest, PortfolioResponse>;
    /**
     * Метод пополнения счёта в песочнице.
     *
     * @generated from protobuf rpc: SandboxPayIn(tinkoff.public.invest.api.contract.v1.SandboxPayInRequest) returns (tinkoff.public.invest.api.contract.v1.SandboxPayInResponse);
     */
    sandboxPayIn(input: SandboxPayInRequest, options?: RpcOptions): UnaryCall<SandboxPayInRequest, SandboxPayInResponse>;
    /**
     * Метод получения доступного остатка для вывода средств в песочнице.
     *
     * @generated from protobuf rpc: GetSandboxWithdrawLimits(tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest) returns (tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse);
     */
    getSandboxWithdrawLimits(input: WithdrawLimitsRequest, options?: RpcOptions): UnaryCall<WithdrawLimitsRequest, WithdrawLimitsResponse>;
}
/**
 * Сервис для работы с песочницей TINKOFF INVEST API
 *
 * @generated from protobuf service tinkoff.public.invest.api.contract.v1.SandboxService
 */
export declare class SandboxServiceClient implements ISandboxServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * Метод регистрации счёта в песочнице.
     *
     * @generated from protobuf rpc: OpenSandboxAccount(tinkoff.public.invest.api.contract.v1.OpenSandboxAccountRequest) returns (tinkoff.public.invest.api.contract.v1.OpenSandboxAccountResponse);
     */
    openSandboxAccount(input: OpenSandboxAccountRequest, options?: RpcOptions): UnaryCall<OpenSandboxAccountRequest, OpenSandboxAccountResponse>;
    /**
     * Метод получения счетов в песочнице.
     *
     * @generated from protobuf rpc: GetSandboxAccounts(tinkoff.public.invest.api.contract.v1.GetAccountsRequest) returns (tinkoff.public.invest.api.contract.v1.GetAccountsResponse);
     */
    getSandboxAccounts(input: GetAccountsRequest, options?: RpcOptions): UnaryCall<GetAccountsRequest, GetAccountsResponse>;
    /**
     * Метод закрытия счёта в песочнице.
     *
     * @generated from protobuf rpc: CloseSandboxAccount(tinkoff.public.invest.api.contract.v1.CloseSandboxAccountRequest) returns (tinkoff.public.invest.api.contract.v1.CloseSandboxAccountResponse);
     */
    closeSandboxAccount(input: CloseSandboxAccountRequest, options?: RpcOptions): UnaryCall<CloseSandboxAccountRequest, CloseSandboxAccountResponse>;
    /**
     * Метод выставления торгового поручения в песочнице.
     *
     * @generated from protobuf rpc: PostSandboxOrder(tinkoff.public.invest.api.contract.v1.PostOrderRequest) returns (tinkoff.public.invest.api.contract.v1.PostOrderResponse);
     */
    postSandboxOrder(input: PostOrderRequest, options?: RpcOptions): UnaryCall<PostOrderRequest, PostOrderResponse>;
    /**
     * Метод изменения выставленной заявки.
     *
     * @generated from protobuf rpc: ReplaceSandboxOrder(tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest) returns (tinkoff.public.invest.api.contract.v1.PostOrderResponse);
     */
    replaceSandboxOrder(input: ReplaceOrderRequest, options?: RpcOptions): UnaryCall<ReplaceOrderRequest, PostOrderResponse>;
    /**
     * Метод получения списка активных заявок по счёту в песочнице.
     *
     * @generated from protobuf rpc: GetSandboxOrders(tinkoff.public.invest.api.contract.v1.GetOrdersRequest) returns (tinkoff.public.invest.api.contract.v1.GetOrdersResponse);
     */
    getSandboxOrders(input: GetOrdersRequest, options?: RpcOptions): UnaryCall<GetOrdersRequest, GetOrdersResponse>;
    /**
     * Метод отмены торгового поручения в песочнице.
     *
     * @generated from protobuf rpc: CancelSandboxOrder(tinkoff.public.invest.api.contract.v1.CancelOrderRequest) returns (tinkoff.public.invest.api.contract.v1.CancelOrderResponse);
     */
    cancelSandboxOrder(input: CancelOrderRequest, options?: RpcOptions): UnaryCall<CancelOrderRequest, CancelOrderResponse>;
    /**
     * Метод получения статуса заявки в песочнице.
     *
     * @generated from protobuf rpc: GetSandboxOrderState(tinkoff.public.invest.api.contract.v1.GetOrderStateRequest) returns (tinkoff.public.invest.api.contract.v1.OrderState);
     */
    getSandboxOrderState(input: GetOrderStateRequest, options?: RpcOptions): UnaryCall<GetOrderStateRequest, OrderState>;
    /**
     * Метод получения позиций по виртуальному счёту песочницы.
     *
     * @generated from protobuf rpc: GetSandboxPositions(tinkoff.public.invest.api.contract.v1.PositionsRequest) returns (tinkoff.public.invest.api.contract.v1.PositionsResponse);
     */
    getSandboxPositions(input: PositionsRequest, options?: RpcOptions): UnaryCall<PositionsRequest, PositionsResponse>;
    /**
     * Метод получения операций в песочнице по номеру счёта.
     *
     * @generated from protobuf rpc: GetSandboxOperations(tinkoff.public.invest.api.contract.v1.OperationsRequest) returns (tinkoff.public.invest.api.contract.v1.OperationsResponse);
     */
    getSandboxOperations(input: OperationsRequest, options?: RpcOptions): UnaryCall<OperationsRequest, OperationsResponse>;
    /**
     * Метод получения операций в песочнице по номеру счета с пагинацией.
     *
     * @generated from protobuf rpc: GetSandboxOperationsByCursor(tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest) returns (tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse);
     */
    getSandboxOperationsByCursor(input: GetOperationsByCursorRequest, options?: RpcOptions): UnaryCall<GetOperationsByCursorRequest, GetOperationsByCursorResponse>;
    /**
     * Метод получения портфолио в песочнице.
     *
     * @generated from protobuf rpc: GetSandboxPortfolio(tinkoff.public.invest.api.contract.v1.PortfolioRequest) returns (tinkoff.public.invest.api.contract.v1.PortfolioResponse);
     */
    getSandboxPortfolio(input: PortfolioRequest, options?: RpcOptions): UnaryCall<PortfolioRequest, PortfolioResponse>;
    /**
     * Метод пополнения счёта в песочнице.
     *
     * @generated from protobuf rpc: SandboxPayIn(tinkoff.public.invest.api.contract.v1.SandboxPayInRequest) returns (tinkoff.public.invest.api.contract.v1.SandboxPayInResponse);
     */
    sandboxPayIn(input: SandboxPayInRequest, options?: RpcOptions): UnaryCall<SandboxPayInRequest, SandboxPayInResponse>;
    /**
     * Метод получения доступного остатка для вывода средств в песочнице.
     *
     * @generated from protobuf rpc: GetSandboxWithdrawLimits(tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest) returns (tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse);
     */
    getSandboxWithdrawLimits(input: WithdrawLimitsRequest, options?: RpcOptions): UnaryCall<WithdrawLimitsRequest, WithdrawLimitsResponse>;
}
