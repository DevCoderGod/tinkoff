import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { GetInfoResponse } from "./users";
import type { GetInfoRequest } from "./users";
import type { GetUserTariffResponse } from "./users";
import type { GetUserTariffRequest } from "./users";
import type { GetMarginAttributesResponse } from "./users";
import type { GetMarginAttributesRequest } from "./users";
import type { GetAccountsResponse } from "./users";
import type { GetAccountsRequest } from "./users";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Сервис предназначен для получения: </br> **1**.
 * списка счетов пользователя; </br> **2**. маржинальных показателей по счёту.
 *
 * @generated from protobuf service tinkoff.public.invest.api.contract.v1.UsersService
 */
export interface IUsersServiceClient {
    /**
     * Метод получения счетов пользователя.
     *
     * @generated from protobuf rpc: GetAccounts(tinkoff.public.invest.api.contract.v1.GetAccountsRequest) returns (tinkoff.public.invest.api.contract.v1.GetAccountsResponse);
     */
    getAccounts(input: GetAccountsRequest, options?: RpcOptions): UnaryCall<GetAccountsRequest, GetAccountsResponse>;
    /**
     * Расчёт маржинальных показателей по счёту.
     *
     * @generated from protobuf rpc: GetMarginAttributes(tinkoff.public.invest.api.contract.v1.GetMarginAttributesRequest) returns (tinkoff.public.invest.api.contract.v1.GetMarginAttributesResponse);
     */
    getMarginAttributes(input: GetMarginAttributesRequest, options?: RpcOptions): UnaryCall<GetMarginAttributesRequest, GetMarginAttributesResponse>;
    /**
     * Запрос тарифа пользователя.
     *
     * @generated from protobuf rpc: GetUserTariff(tinkoff.public.invest.api.contract.v1.GetUserTariffRequest) returns (tinkoff.public.invest.api.contract.v1.GetUserTariffResponse);
     */
    getUserTariff(input: GetUserTariffRequest, options?: RpcOptions): UnaryCall<GetUserTariffRequest, GetUserTariffResponse>;
    /**
     * Метод получения информации о пользователе.
     *
     * @generated from protobuf rpc: GetInfo(tinkoff.public.invest.api.contract.v1.GetInfoRequest) returns (tinkoff.public.invest.api.contract.v1.GetInfoResponse);
     */
    getInfo(input: GetInfoRequest, options?: RpcOptions): UnaryCall<GetInfoRequest, GetInfoResponse>;
}
/**
 * Сервис предназначен для получения: </br> **1**.
 * списка счетов пользователя; </br> **2**. маржинальных показателей по счёту.
 *
 * @generated from protobuf service tinkoff.public.invest.api.contract.v1.UsersService
 */
export declare class UsersServiceClient implements IUsersServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * Метод получения счетов пользователя.
     *
     * @generated from protobuf rpc: GetAccounts(tinkoff.public.invest.api.contract.v1.GetAccountsRequest) returns (tinkoff.public.invest.api.contract.v1.GetAccountsResponse);
     */
    getAccounts(input: GetAccountsRequest, options?: RpcOptions): UnaryCall<GetAccountsRequest, GetAccountsResponse>;
    /**
     * Расчёт маржинальных показателей по счёту.
     *
     * @generated from protobuf rpc: GetMarginAttributes(tinkoff.public.invest.api.contract.v1.GetMarginAttributesRequest) returns (tinkoff.public.invest.api.contract.v1.GetMarginAttributesResponse);
     */
    getMarginAttributes(input: GetMarginAttributesRequest, options?: RpcOptions): UnaryCall<GetMarginAttributesRequest, GetMarginAttributesResponse>;
    /**
     * Запрос тарифа пользователя.
     *
     * @generated from protobuf rpc: GetUserTariff(tinkoff.public.invest.api.contract.v1.GetUserTariffRequest) returns (tinkoff.public.invest.api.contract.v1.GetUserTariffResponse);
     */
    getUserTariff(input: GetUserTariffRequest, options?: RpcOptions): UnaryCall<GetUserTariffRequest, GetUserTariffResponse>;
    /**
     * Метод получения информации о пользователе.
     *
     * @generated from protobuf rpc: GetInfo(tinkoff.public.invest.api.contract.v1.GetInfoRequest) returns (tinkoff.public.invest.api.contract.v1.GetInfoResponse);
     */
    getInfo(input: GetInfoRequest, options?: RpcOptions): UnaryCall<GetInfoRequest, GetInfoResponse>;
}
