import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Quotation } from "./common";
import { MoneyValue } from "./common";
import { Timestamp } from "./google/protobuf/timestamp";
/**
 * Запрос получения счетов пользователя.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetAccountsRequest
 */
export interface GetAccountsRequest {
}
/**
 * Список счетов пользователя.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetAccountsResponse
 */
export interface GetAccountsResponse {
    /**
     * Массив счетов клиента.
     *
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.Account accounts = 1;
     */
    accounts: Account[];
}
/**
 * Информация о счёте.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.Account
 */
export interface Account {
    /**
     * Идентификатор счёта.
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * Тип счёта.
     *
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.AccountType type = 2;
     */
    type: AccountType;
    /**
     * Название счёта.
     *
     * @generated from protobuf field: string name = 3;
     */
    name: string;
    /**
     * Статус счёта.
     *
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.AccountStatus status = 4;
     */
    status: AccountStatus;
    /**
     * Дата открытия счёта в часовом поясе UTC.
     *
     * @generated from protobuf field: google.protobuf.Timestamp opened_date = 5;
     */
    openedDate?: Timestamp;
    /**
     * Дата закрытия счёта в часовом поясе UTC.
     *
     * @generated from protobuf field: google.protobuf.Timestamp closed_date = 6;
     */
    closedDate?: Timestamp;
    /**
     * Уровень доступа к текущему счёту (определяется токеном).
     *
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.AccessLevel access_level = 7;
     */
    accessLevel: AccessLevel;
}
/**
 * Запрос маржинальных показателей по счёту
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetMarginAttributesRequest
 */
export interface GetMarginAttributesRequest {
    /**
     * Идентификатор счёта пользователя.
     *
     * @generated from protobuf field: string account_id = 1;
     */
    accountId: string;
}
/**
 * Маржинальные показатели по счёту.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetMarginAttributesResponse
 */
export interface GetMarginAttributesResponse {
    /**
     * Ликвидная стоимость портфеля. Подробнее: [что такое ликвидный портфель?](https://help.tinkoff.ru/margin-trade/short/liquid-portfolio/).
     *
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue liquid_portfolio = 1;
     */
    liquidPortfolio?: MoneyValue;
    /**
     * Начальная маржа — начальное обеспечение для совершения новой сделки. Подробнее: [начальная и минимальная маржа](https://help.tinkoff.ru/margin-trade/short/initial-and-maintenance-margin/).
     *
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue starting_margin = 2;
     */
    startingMargin?: MoneyValue;
    /**
     * Минимальная маржа — это минимальное обеспечение для поддержания позиции, которую вы уже открыли. Подробнее: [начальная и минимальная маржа](https://help.tinkoff.ru/margin-trade/short/initial-and-maintenance-margin/).
     *
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue minimal_margin = 3;
     */
    minimalMargin?: MoneyValue;
    /**
     * Уровень достаточности средств. Соотношение стоимости ликвидного портфеля к начальной марже.
     *
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation funds_sufficiency_level = 4;
     */
    fundsSufficiencyLevel?: Quotation;
    /**
     * Объем недостающих средств. Разница между стартовой маржой и ликвидной стоимости портфеля.
     *
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue amount_of_missing_funds = 5;
     */
    amountOfMissingFunds?: MoneyValue;
    /**
     * Скорректированная маржа.Начальная маржа, в которой плановые позиции рассчитываются с учётом активных заявок на покупку позиций лонг или продажу позиций шорт.
     *
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue corrected_margin = 6;
     */
    correctedMargin?: MoneyValue;
}
/**
 * Запрос текущих лимитов пользователя.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetUserTariffRequest
 */
export interface GetUserTariffRequest {
}
/**
 * Текущие лимиты пользователя.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetUserTariffResponse
 */
export interface GetUserTariffResponse {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.UnaryLimit unary_limits = 1;
     */
    unaryLimits: UnaryLimit[];
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.StreamLimit stream_limits = 2;
     */
    streamLimits: StreamLimit[];
}
/**
 * Лимит unary-методов.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.UnaryLimit
 */
export interface UnaryLimit {
    /**
     * @generated from protobuf field: int32 limit_per_minute = 1;
     */
    limitPerMinute: number;
    /**
     * @generated from protobuf field: repeated string methods = 2;
     */
    methods: string[];
}
/**
 * Лимит stream-соединений.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.StreamLimit
 */
export interface StreamLimit {
    /**
     * @generated from protobuf field: int32 limit = 1;
     */
    limit: number;
    /**
     * @generated from protobuf field: repeated string streams = 2;
     */
    streams: string[];
}
/**
 * Запрос информации о пользователе.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetInfoRequest
 */
export interface GetInfoRequest {
}
/**
 * Информация о пользователе.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetInfoResponse
 */
export interface GetInfoResponse {
    /**
     * @generated from protobuf field: bool prem_status = 1;
     */
    premStatus: boolean;
    /**
     * @generated from protobuf field: bool qual_status = 2;
     */
    qualStatus: boolean;
    /**
     * @generated from protobuf field: repeated string qualified_for_work_with = 3;
     */
    qualifiedForWorkWith: string[];
    /**
     * @generated from protobuf field: string tariff = 4;
     */
    tariff: string;
}
/**
 * Тип счёта.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.AccountType
 */
export declare enum AccountType {
    /**
     * Тип аккаунта не определён.
     *
     * @generated from protobuf enum value: ACCOUNT_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Брокерский счёт Тинькофф.
     *
     * @generated from protobuf enum value: ACCOUNT_TYPE_TINKOFF = 1;
     */
    TINKOFF = 1,
    /**
     * ИИС счёт.
     *
     * @generated from protobuf enum value: ACCOUNT_TYPE_TINKOFF_IIS = 2;
     */
    TINKOFF_IIS = 2,
    /**
     * Инвесткопилка.
     *
     * @generated from protobuf enum value: ACCOUNT_TYPE_INVEST_BOX = 3;
     */
    INVEST_BOX = 3
}
/**
 * Статус счёта.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.AccountStatus
 */
export declare enum AccountStatus {
    /**
     * Статус счёта не определён.
     *
     * @generated from protobuf enum value: ACCOUNT_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Новый, в процессе открытия.
     *
     * @generated from protobuf enum value: ACCOUNT_STATUS_NEW = 1;
     */
    NEW = 1,
    /**
     * Открытый и активный счёт.
     *
     * @generated from protobuf enum value: ACCOUNT_STATUS_OPEN = 2;
     */
    OPEN = 2,
    /**
     * Закрытый счёт.
     *
     * @generated from protobuf enum value: ACCOUNT_STATUS_CLOSED = 3;
     */
    CLOSED = 3
}
/**
 * Уровень доступа к счёту.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.AccessLevel
 */
export declare enum AccessLevel {
    /**
     * Уровень доступа не определён.
     *
     * @generated from protobuf enum value: ACCOUNT_ACCESS_LEVEL_UNSPECIFIED = 0;
     */
    ACCOUNT_ACCESS_LEVEL_UNSPECIFIED = 0,
    /**
     * Полный доступ к счёту.
     *
     * @generated from protobuf enum value: ACCOUNT_ACCESS_LEVEL_FULL_ACCESS = 1;
     */
    ACCOUNT_ACCESS_LEVEL_FULL_ACCESS = 1,
    /**
     * Доступ с уровнем прав "только чтение".
     *
     * @generated from protobuf enum value: ACCOUNT_ACCESS_LEVEL_READ_ONLY = 2;
     */
    ACCOUNT_ACCESS_LEVEL_READ_ONLY = 2,
    /**
     * Доступ отсутствует.
     *
     * @generated from protobuf enum value: ACCOUNT_ACCESS_LEVEL_NO_ACCESS = 3;
     */
    ACCOUNT_ACCESS_LEVEL_NO_ACCESS = 3
}
declare class GetAccountsRequest$Type extends MessageType<GetAccountsRequest> {
    constructor();
    create(value?: PartialMessage<GetAccountsRequest>): GetAccountsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAccountsRequest): GetAccountsRequest;
    internalBinaryWrite(message: GetAccountsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetAccountsRequest
 */
export declare const GetAccountsRequest: GetAccountsRequest$Type;
declare class GetAccountsResponse$Type extends MessageType<GetAccountsResponse> {
    constructor();
    create(value?: PartialMessage<GetAccountsResponse>): GetAccountsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAccountsResponse): GetAccountsResponse;
    internalBinaryWrite(message: GetAccountsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetAccountsResponse
 */
export declare const GetAccountsResponse: GetAccountsResponse$Type;
declare class Account$Type extends MessageType<Account> {
    constructor();
    create(value?: PartialMessage<Account>): Account;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Account): Account;
    internalBinaryWrite(message: Account, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.Account
 */
export declare const Account: Account$Type;
declare class GetMarginAttributesRequest$Type extends MessageType<GetMarginAttributesRequest> {
    constructor();
    create(value?: PartialMessage<GetMarginAttributesRequest>): GetMarginAttributesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetMarginAttributesRequest): GetMarginAttributesRequest;
    internalBinaryWrite(message: GetMarginAttributesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetMarginAttributesRequest
 */
export declare const GetMarginAttributesRequest: GetMarginAttributesRequest$Type;
declare class GetMarginAttributesResponse$Type extends MessageType<GetMarginAttributesResponse> {
    constructor();
    create(value?: PartialMessage<GetMarginAttributesResponse>): GetMarginAttributesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetMarginAttributesResponse): GetMarginAttributesResponse;
    internalBinaryWrite(message: GetMarginAttributesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetMarginAttributesResponse
 */
export declare const GetMarginAttributesResponse: GetMarginAttributesResponse$Type;
declare class GetUserTariffRequest$Type extends MessageType<GetUserTariffRequest> {
    constructor();
    create(value?: PartialMessage<GetUserTariffRequest>): GetUserTariffRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetUserTariffRequest): GetUserTariffRequest;
    internalBinaryWrite(message: GetUserTariffRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetUserTariffRequest
 */
export declare const GetUserTariffRequest: GetUserTariffRequest$Type;
declare class GetUserTariffResponse$Type extends MessageType<GetUserTariffResponse> {
    constructor();
    create(value?: PartialMessage<GetUserTariffResponse>): GetUserTariffResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetUserTariffResponse): GetUserTariffResponse;
    internalBinaryWrite(message: GetUserTariffResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetUserTariffResponse
 */
export declare const GetUserTariffResponse: GetUserTariffResponse$Type;
declare class UnaryLimit$Type extends MessageType<UnaryLimit> {
    constructor();
    create(value?: PartialMessage<UnaryLimit>): UnaryLimit;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UnaryLimit): UnaryLimit;
    internalBinaryWrite(message: UnaryLimit, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.UnaryLimit
 */
export declare const UnaryLimit: UnaryLimit$Type;
declare class StreamLimit$Type extends MessageType<StreamLimit> {
    constructor();
    create(value?: PartialMessage<StreamLimit>): StreamLimit;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StreamLimit): StreamLimit;
    internalBinaryWrite(message: StreamLimit, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.StreamLimit
 */
export declare const StreamLimit: StreamLimit$Type;
declare class GetInfoRequest$Type extends MessageType<GetInfoRequest> {
    constructor();
    create(value?: PartialMessage<GetInfoRequest>): GetInfoRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetInfoRequest): GetInfoRequest;
    internalBinaryWrite(message: GetInfoRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetInfoRequest
 */
export declare const GetInfoRequest: GetInfoRequest$Type;
declare class GetInfoResponse$Type extends MessageType<GetInfoResponse> {
    constructor();
    create(value?: PartialMessage<GetInfoResponse>): GetInfoResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetInfoResponse): GetInfoResponse;
    internalBinaryWrite(message: GetInfoResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetInfoResponse
 */
export declare const GetInfoResponse: GetInfoResponse$Type;
/**
 * @generated ServiceType for protobuf service tinkoff.public.invest.api.contract.v1.UsersService
 */
export declare const UsersService: ServiceType;
export {};
