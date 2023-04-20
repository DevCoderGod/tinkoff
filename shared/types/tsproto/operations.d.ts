import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { InstrumentType } from "./common";
import { Ping } from "./common";
import { Quotation } from "./common";
import { MoneyValue } from "./common";
import { Timestamp } from "./google/protobuf/timestamp";
/**
 * Запрос получения списка операций по счёту.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.OperationsRequest
 */
export interface OperationsRequest {
    /**
     * @generated from protobuf field: string account_id = 1;
     */
    accountId: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp from = 2;
     */
    from?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp to = 3;
     */
    to?: Timestamp;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.OperationState state = 4;
     */
    state: OperationState;
    /**
     * @generated from protobuf field: string figi = 5;
     */
    figi: string;
}
/**
 * Список операций.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.OperationsResponse
 */
export interface OperationsResponse {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.Operation operations = 1;
     */
    operations: Operation[];
}
/**
 * Данные по операции.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.Operation
 */
export interface Operation {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string parent_operation_id = 2;
     */
    parentOperationId: string;
    /**
     * @generated from protobuf field: string currency = 3;
     */
    currency: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue payment = 4;
     */
    payment?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue price = 5;
     */
    price?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.OperationState state = 6;
     */
    state: OperationState;
    /**
     * @generated from protobuf field: int64 quantity = 7;
     */
    quantity: string;
    /**
     * @generated from protobuf field: int64 quantity_rest = 8;
     */
    quantityRest: string;
    /**
     * @generated from protobuf field: string figi = 9;
     */
    figi: string;
    /**
     * @generated from protobuf field: string instrument_type = 10;
     */
    instrumentType: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp date = 11;
     */
    date?: Timestamp;
    /**
     * @generated from protobuf field: string type = 12;
     */
    type: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.OperationType operation_type = 13;
     */
    operationType: OperationType;
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.OperationTrade trades = 14;
     */
    trades: OperationTrade[];
    /**
     * @generated from protobuf field: string asset_uid = 16;
     */
    assetUid: string;
    /**
     * @generated from protobuf field: string position_uid = 17;
     */
    positionUid: string;
    /**
     * @generated from protobuf field: string instrument_uid = 18;
     */
    instrumentUid: string;
}
/**
 * Сделка по операции.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.OperationTrade
 */
export interface OperationTrade {
    /**
     * @generated from protobuf field: string trade_id = 1;
     */
    tradeId: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp date_time = 2;
     */
    dateTime?: Timestamp;
    /**
     * @generated from protobuf field: int64 quantity = 3;
     */
    quantity: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue price = 4;
     */
    price?: MoneyValue;
}
/**
 * Запрос получения текущего портфеля по счёту.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.PortfolioRequest
 */
export interface PortfolioRequest {
    /**
     * @generated from protobuf field: string account_id = 1;
     */
    accountId: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.PortfolioRequest.CurrencyRequest currency = 2;
     */
    currency: PortfolioRequest_CurrencyRequest;
}
/**
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.PortfolioRequest.CurrencyRequest
 */
export declare enum PortfolioRequest_CurrencyRequest {
    /**
     * Рубли
     *
     * @generated from protobuf enum value: RUB = 0;
     */
    RUB = 0,
    /**
     * Доллары
     *
     * @generated from protobuf enum value: USD = 1;
     */
    USD = 1,
    /**
     * Евро
     *
     * @generated from protobuf enum value: EUR = 2;
     */
    EUR = 2
}
/**
 * Текущий портфель по счёту.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.PortfolioResponse
 */
export interface PortfolioResponse {
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue total_amount_shares = 1;
     */
    totalAmountShares?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue total_amount_bonds = 2;
     */
    totalAmountBonds?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue total_amount_etf = 3;
     */
    totalAmountEtf?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue total_amount_currencies = 4;
     */
    totalAmountCurrencies?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue total_amount_futures = 5;
     */
    totalAmountFutures?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation expected_yield = 6;
     */
    expectedYield?: Quotation;
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.PortfolioPosition positions = 7;
     */
    positions: PortfolioPosition[];
    /**
     * @generated from protobuf field: string account_id = 8;
     */
    accountId: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue total_amount_options = 9;
     */
    totalAmountOptions?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue total_amount_sp = 10;
     */
    totalAmountSp?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue total_amount_portfolio = 11;
     */
    totalAmountPortfolio?: MoneyValue;
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition virtual_positions = 12;
     */
    virtualPositions: VirtualPortfolioPosition[];
}
/**
 * Запрос позиций портфеля по счёту.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.PositionsRequest
 */
export interface PositionsRequest {
    /**
     * @generated from protobuf field: string account_id = 1;
     */
    accountId: string;
}
/**
 * Список позиций по счёту.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.PositionsResponse
 */
export interface PositionsResponse {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.MoneyValue money = 1;
     */
    money: MoneyValue[];
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.MoneyValue blocked = 2;
     */
    blocked: MoneyValue[];
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.PositionsSecurities securities = 3;
     */
    securities: PositionsSecurities[];
    /**
     * @generated from protobuf field: bool limits_loading_in_progress = 4;
     */
    limitsLoadingInProgress: boolean;
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.PositionsFutures futures = 5;
     */
    futures: PositionsFutures[];
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.PositionsOptions options = 6;
     */
    options: PositionsOptions[];
}
/**
 * Запрос доступного для вывода остатка.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest
 */
export interface WithdrawLimitsRequest {
    /**
     * @generated from protobuf field: string account_id = 1;
     */
    accountId: string;
}
/**
 * Доступный для вывода остаток.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse
 */
export interface WithdrawLimitsResponse {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.MoneyValue money = 1;
     */
    money: MoneyValue[];
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.MoneyValue blocked = 2;
     */
    blocked: MoneyValue[];
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.MoneyValue blocked_guarantee = 3;
     */
    blockedGuarantee: MoneyValue[];
}
/**
 * Позиции портфеля.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.PortfolioPosition
 */
export interface PortfolioPosition {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: string instrument_type = 2;
     */
    instrumentType: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation quantity = 3;
     */
    quantity?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue average_position_price = 4;
     */
    averagePositionPrice?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation expected_yield = 5;
     */
    expectedYield?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue current_nkd = 6;
     */
    currentNkd?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation average_position_price_pt = 7;
     */
    averagePositionPricePt?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue current_price = 8;
     */
    currentPrice?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue average_position_price_fifo = 9;
     */
    averagePositionPriceFifo?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation quantity_lots = 10;
     */
    quantityLots?: Quotation;
    /**
     * @generated from protobuf field: bool blocked = 21;
     */
    blocked: boolean;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation blocked_lots = 22;
     */
    blockedLots?: Quotation;
    /**
     * @generated from protobuf field: string position_uid = 24;
     */
    positionUid: string;
    /**
     * @generated from protobuf field: string instrument_uid = 25;
     */
    instrumentUid: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue var_margin = 26;
     */
    varMargin?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation expected_yield_fifo = 27;
     */
    expectedYieldFifo?: Quotation;
}
/**
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition
 */
export interface VirtualPortfolioPosition {
    /**
     * @generated from protobuf field: string position_uid = 1;
     */
    positionUid: string;
    /**
     * @generated from protobuf field: string instrument_uid = 2;
     */
    instrumentUid: string;
    /**
     * @generated from protobuf field: string figi = 3;
     */
    figi: string;
    /**
     * @generated from protobuf field: string instrument_type = 4;
     */
    instrumentType: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation quantity = 5;
     */
    quantity?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue average_position_price = 6;
     */
    averagePositionPrice?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation expected_yield = 7;
     */
    expectedYield?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation expected_yield_fifo = 8;
     */
    expectedYieldFifo?: Quotation;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp expire_date = 9;
     */
    expireDate?: Timestamp;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue current_price = 10;
     */
    currentPrice?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue average_position_price_fifo = 11;
     */
    averagePositionPriceFifo?: MoneyValue;
}
/**
 * Баланс позиции ценной бумаги.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.PositionsSecurities
 */
export interface PositionsSecurities {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: int64 blocked = 2;
     */
    blocked: string;
    /**
     * @generated from protobuf field: int64 balance = 3;
     */
    balance: string;
    /**
     * @generated from protobuf field: string position_uid = 4;
     */
    positionUid: string;
    /**
     * @generated from protobuf field: string instrument_uid = 5;
     */
    instrumentUid: string;
    /**
     * @generated from protobuf field: bool exchange_blocked = 11;
     */
    exchangeBlocked: boolean;
    /**
     * @generated from protobuf field: string instrument_type = 16;
     */
    instrumentType: string;
}
/**
 * Баланс фьючерса.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.PositionsFutures
 */
export interface PositionsFutures {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: int64 blocked = 2;
     */
    blocked: string;
    /**
     * @generated from protobuf field: int64 balance = 3;
     */
    balance: string;
    /**
     * @generated from protobuf field: string position_uid = 4;
     */
    positionUid: string;
    /**
     * @generated from protobuf field: string instrument_uid = 5;
     */
    instrumentUid: string;
}
/**
 * Баланс опциона.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.PositionsOptions
 */
export interface PositionsOptions {
    /**
     * @generated from protobuf field: string position_uid = 1;
     */
    positionUid: string;
    /**
     * @generated from protobuf field: string instrument_uid = 2;
     */
    instrumentUid: string;
    /**
     * @generated from protobuf field: int64 blocked = 11;
     */
    blocked: string;
    /**
     * @generated from protobuf field: int64 balance = 21;
     */
    balance: string;
}
/**
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.BrokerReportRequest
 */
export interface BrokerReportRequest {
    /**
     * @generated from protobuf oneof: payload
     */
    payload: {
        oneofKind: "generateBrokerReportRequest";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest generate_broker_report_request = 1;
         */
        generateBrokerReportRequest: GenerateBrokerReportRequest;
    } | {
        oneofKind: "getBrokerReportRequest";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest get_broker_report_request = 2;
         */
        getBrokerReportRequest: GetBrokerReportRequest;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.BrokerReportResponse
 */
export interface BrokerReportResponse {
    /**
     * @generated from protobuf oneof: payload
     */
    payload: {
        oneofKind: "generateBrokerReportResponse";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse generate_broker_report_response = 1;
         */
        generateBrokerReportResponse: GenerateBrokerReportResponse;
    } | {
        oneofKind: "getBrokerReportResponse";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse get_broker_report_response = 2;
         */
        getBrokerReportResponse: GetBrokerReportResponse;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest
 */
export interface GenerateBrokerReportRequest {
    /**
     * @generated from protobuf field: string account_id = 1;
     */
    accountId: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp from = 2;
     */
    from?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp to = 3;
     */
    to?: Timestamp;
}
/**
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse
 */
export interface GenerateBrokerReportResponse {
    /**
     * @generated from protobuf field: string task_id = 1;
     */
    taskId: string;
}
/**
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest
 */
export interface GetBrokerReportRequest {
    /**
     * @generated from protobuf field: string task_id = 1;
     */
    taskId: string;
    /**
     * @generated from protobuf field: int32 page = 2;
     */
    page: number;
}
/**
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse
 */
export interface GetBrokerReportResponse {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.BrokerReport broker_report = 1;
     */
    brokerReport: BrokerReport[];
    /**
     * @generated from protobuf field: int32 itemsCount = 2;
     */
    itemsCount: number;
    /**
     * @generated from protobuf field: int32 pagesCount = 3;
     */
    pagesCount: number;
    /**
     * @generated from protobuf field: int32 page = 4;
     */
    page: number;
}
/**
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.BrokerReport
 */
export interface BrokerReport {
    /**
     * @generated from protobuf field: string trade_id = 1;
     */
    tradeId: string;
    /**
     * @generated from protobuf field: string order_id = 2;
     */
    orderId: string;
    /**
     * @generated from protobuf field: string figi = 3;
     */
    figi: string;
    /**
     * @generated from protobuf field: string execute_sign = 4;
     */
    executeSign: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp trade_datetime = 5;
     */
    tradeDatetime?: Timestamp;
    /**
     * @generated from protobuf field: string exchange = 6;
     */
    exchange: string;
    /**
     * @generated from protobuf field: string class_code = 7;
     */
    classCode: string;
    /**
     * @generated from protobuf field: string direction = 8;
     */
    direction: string;
    /**
     * @generated from protobuf field: string name = 9;
     */
    name: string;
    /**
     * @generated from protobuf field: string ticker = 10;
     */
    ticker: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue price = 11;
     */
    price?: MoneyValue;
    /**
     * @generated from protobuf field: int64 quantity = 12;
     */
    quantity: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue order_amount = 13;
     */
    orderAmount?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation aci_value = 14;
     */
    aciValue?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue total_order_amount = 15;
     */
    totalOrderAmount?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue broker_commission = 16;
     */
    brokerCommission?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue exchange_commission = 17;
     */
    exchangeCommission?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue exchange_clearing_commission = 18;
     */
    exchangeClearingCommission?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation repo_rate = 19;
     */
    repoRate?: Quotation;
    /**
     * @generated from protobuf field: string party = 20;
     */
    party: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp clear_value_date = 21;
     */
    clearValueDate?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp sec_value_date = 22;
     */
    secValueDate?: Timestamp;
    /**
     * @generated from protobuf field: string broker_status = 23;
     */
    brokerStatus: string;
    /**
     * @generated from protobuf field: string separate_agreement_type = 24;
     */
    separateAgreementType: string;
    /**
     * @generated from protobuf field: string separate_agreement_number = 25;
     */
    separateAgreementNumber: string;
    /**
     * @generated from protobuf field: string separate_agreement_date = 26;
     */
    separateAgreementDate: string;
    /**
     * @generated from protobuf field: string delivery_type = 27;
     */
    deliveryType: string;
}
/**
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest
 */
export interface GetDividendsForeignIssuerRequest {
    /**
     * @generated from protobuf oneof: payload
     */
    payload: {
        oneofKind: "generateDivForeignIssuerReport";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest generate_div_foreign_issuer_report = 1;
         */
        generateDivForeignIssuerReport: GenerateDividendsForeignIssuerReportRequest;
    } | {
        oneofKind: "getDivForeignIssuerReport";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest get_div_foreign_issuer_report = 2;
         */
        getDivForeignIssuerReport: GetDividendsForeignIssuerReportRequest;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse
 */
export interface GetDividendsForeignIssuerResponse {
    /**
     * @generated from protobuf oneof: payload
     */
    payload: {
        oneofKind: "generateDivForeignIssuerReportResponse";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse generate_div_foreign_issuer_report_response = 1;
         */
        generateDivForeignIssuerReportResponse: GenerateDividendsForeignIssuerReportResponse;
    } | {
        oneofKind: "divForeignIssuerReport";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse div_foreign_issuer_report = 2;
         */
        divForeignIssuerReport: GetDividendsForeignIssuerReportResponse;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Объект запроса формирования отчёта "Справка о доходах за пределами РФ".
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest
 */
export interface GenerateDividendsForeignIssuerReportRequest {
    /**
     * @generated from protobuf field: string account_id = 1;
     */
    accountId: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp from = 2;
     */
    from?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp to = 3;
     */
    to?: Timestamp;
}
/**
 * Объект запроса сформированного отчёта "Справка о доходах за пределами РФ".
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest
 */
export interface GetDividendsForeignIssuerReportRequest {
    /**
     * @generated from protobuf field: string task_id = 1;
     */
    taskId: string;
    /**
     * @generated from protobuf field: int32 page = 2;
     */
    page: number;
}
/**
 * Объект результата задачи запуска формирования отчёта "Справка о доходах за пределами РФ".
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse
 */
export interface GenerateDividendsForeignIssuerReportResponse {
    /**
     * @generated from protobuf field: string task_id = 1;
     */
    taskId: string;
}
/**
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse
 */
export interface GetDividendsForeignIssuerReportResponse {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport dividends_foreign_issuer_report = 1;
     */
    dividendsForeignIssuerReport: DividendsForeignIssuerReport[];
    /**
     * @generated from protobuf field: int32 itemsCount = 2;
     */
    itemsCount: number;
    /**
     * @generated from protobuf field: int32 pagesCount = 3;
     */
    pagesCount: number;
    /**
     * @generated from protobuf field: int32 page = 4;
     */
    page: number;
}
/**
 * Отчёт "Справка о доходах за пределами РФ".
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport
 */
export interface DividendsForeignIssuerReport {
    /**
     * @generated from protobuf field: google.protobuf.Timestamp record_date = 1;
     */
    recordDate?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp payment_date = 2;
     */
    paymentDate?: Timestamp;
    /**
     * @generated from protobuf field: string security_name = 3;
     */
    securityName: string;
    /**
     * @generated from protobuf field: string isin = 4;
     */
    isin: string;
    /**
     * @generated from protobuf field: string issuer_country = 5;
     */
    issuerCountry: string;
    /**
     * @generated from protobuf field: int64 quantity = 6;
     */
    quantity: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dividend = 7;
     */
    dividend?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation external_commission = 8;
     */
    externalCommission?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dividend_gross = 9;
     */
    dividendGross?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation tax = 10;
     */
    tax?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dividend_amount = 11;
     */
    dividendAmount?: Quotation;
    /**
     * @generated from protobuf field: string currency = 12;
     */
    currency: string;
}
/**
 * Запрос установки stream-соединения.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest
 */
export interface PortfolioStreamRequest {
    /**
     * @generated from protobuf field: repeated string accounts = 1;
     */
    accounts: string[];
}
/**
 * Информация по позициям и доходностям портфелей.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse
 */
export interface PortfolioStreamResponse {
    /**
     * @generated from protobuf oneof: payload
     */
    payload: {
        oneofKind: "subscriptions";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult subscriptions = 1;
         */
        subscriptions: PortfolioSubscriptionResult;
    } | {
        oneofKind: "portfolio";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.PortfolioResponse portfolio = 2;
         */
        portfolio: PortfolioResponse;
    } | {
        oneofKind: "ping";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Ping ping = 3;
         */
        ping: Ping;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Объект результата подписки.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult
 */
export interface PortfolioSubscriptionResult {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus accounts = 1;
     */
    accounts: AccountSubscriptionStatus[];
}
/**
 * Счет клиента.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus
 */
export interface AccountSubscriptionStatus {
    /**
     * @generated from protobuf field: string account_id = 1;
     */
    accountId: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionStatus subscription_status = 6;
     */
    subscriptionStatus: PortfolioSubscriptionStatus;
}
/**
 * Запрос списка операций по счёту с пагинацией.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest
 */
export interface GetOperationsByCursorRequest {
    /**
     * @generated from protobuf field: string account_id = 1;
     */
    accountId: string;
    /**
     * @generated from protobuf field: string instrument_id = 2;
     */
    instrumentId: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp from = 6;
     */
    from?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp to = 7;
     */
    to?: Timestamp;
    /**
     * @generated from protobuf field: string cursor = 11;
     */
    cursor: string;
    /**
     * @generated from protobuf field: int32 limit = 12;
     */
    limit: number;
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.OperationType operation_types = 13;
     */
    operationTypes: OperationType[];
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.OperationState state = 14;
     */
    state: OperationState;
    /**
     * @generated from protobuf field: bool without_commissions = 15;
     */
    withoutCommissions: boolean;
    /**
     * @generated from protobuf field: bool without_trades = 16;
     */
    withoutTrades: boolean;
    /**
     * @generated from protobuf field: bool without_overnights = 17;
     */
    withoutOvernights: boolean;
}
/**
 * Список операций по счёту с пагинацией.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse
 */
export interface GetOperationsByCursorResponse {
    /**
     * @generated from protobuf field: bool has_next = 1;
     */
    hasNext: boolean;
    /**
     * @generated from protobuf field: string next_cursor = 2;
     */
    nextCursor: string;
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.OperationItem items = 6;
     */
    items: OperationItem[];
}
/**
 * Данные об операции.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.OperationItem
 */
export interface OperationItem {
    /**
     * @generated from protobuf field: string cursor = 1;
     */
    cursor: string;
    /**
     * @generated from protobuf field: string broker_account_id = 6;
     */
    brokerAccountId: string;
    /**
     * @generated from protobuf field: string id = 16;
     */
    id: string;
    /**
     * @generated from protobuf field: string parent_operation_id = 17;
     */
    parentOperationId: string;
    /**
     * @generated from protobuf field: string name = 18;
     */
    name: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp date = 21;
     */
    date?: Timestamp;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.OperationType type = 22;
     */
    type: OperationType;
    /**
     * @generated from protobuf field: string description = 23;
     */
    description: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.OperationState state = 24;
     */
    state: OperationState;
    /**
     * @generated from protobuf field: string instrument_uid = 31;
     */
    instrumentUid: string;
    /**
     * @generated from protobuf field: string figi = 32;
     */
    figi: string;
    /**
     * @generated from protobuf field: string instrument_type = 33;
     */
    instrumentType: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.InstrumentType instrument_kind = 34;
     */
    instrumentKind: InstrumentType;
    /**
     * @generated from protobuf field: string position_uid = 35;
     */
    positionUid: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue payment = 41;
     */
    payment?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue price = 42;
     */
    price?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue commission = 43;
     */
    commission?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue yield = 44;
     */
    yield?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation yield_relative = 45;
     */
    yieldRelative?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue accrued_int = 46;
     */
    accruedInt?: MoneyValue;
    /**
     * @generated from protobuf field: int64 quantity = 51;
     */
    quantity: string;
    /**
     * @generated from protobuf field: int64 quantity_rest = 52;
     */
    quantityRest: string;
    /**
     * @generated from protobuf field: int64 quantity_done = 53;
     */
    quantityDone: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp cancel_date_time = 56;
     */
    cancelDateTime?: Timestamp;
    /**
     * @generated from protobuf field: string cancel_reason = 57;
     */
    cancelReason: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.OperationItemTrades trades_info = 61;
     */
    tradesInfo?: OperationItemTrades;
    /**
     * @generated from protobuf field: string asset_uid = 64;
     */
    assetUid: string;
}
/**
 * Массив с информацией о сделках.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.OperationItemTrades
 */
export interface OperationItemTrades {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.OperationItemTrade trades = 6;
     */
    trades: OperationItemTrade[];
}
/**
 * Сделка по операции.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.OperationItemTrade
 */
export interface OperationItemTrade {
    /**
     * @generated from protobuf field: string num = 1;
     */
    num: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp date = 6;
     */
    date?: Timestamp;
    /**
     * @generated from protobuf field: int64 quantity = 11;
     */
    quantity: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue price = 16;
     */
    price?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue yield = 21;
     */
    yield?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation yield_relative = 22;
     */
    yieldRelative?: Quotation;
}
/**
 * Запрос установки stream-соединения позиций.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.PositionsStreamRequest
 */
export interface PositionsStreamRequest {
    /**
     * @generated from protobuf field: repeated string accounts = 1;
     */
    accounts: string[];
}
/**
 * Информация по изменению позиций портфеля.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.PositionsStreamResponse
 */
export interface PositionsStreamResponse {
    /**
     * @generated from protobuf oneof: payload
     */
    payload: {
        oneofKind: "subscriptions";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult subscriptions = 1;
         */
        subscriptions: PositionsSubscriptionResult;
    } | {
        oneofKind: "position";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.PositionData position = 2;
         */
        position: PositionData;
    } | {
        oneofKind: "ping";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Ping ping = 3;
         */
        ping: Ping;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Объект результата подписки.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult
 */
export interface PositionsSubscriptionResult {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus accounts = 1;
     */
    accounts: PositionsSubscriptionStatus[];
}
/**
 * Счет клиента.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus
 */
export interface PositionsSubscriptionStatus {
    /**
     * @generated from protobuf field: string account_id = 1;
     */
    accountId: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.PositionsAccountSubscriptionStatus subscription_status = 6;
     */
    subscriptionStatus: PositionsAccountSubscriptionStatus;
}
/**
 * Данные о позиции портфеля.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.PositionData
 */
export interface PositionData {
    /**
     * @generated from protobuf field: string account_id = 1;
     */
    accountId: string;
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.PositionsMoney money = 2;
     */
    money: PositionsMoney[];
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.PositionsSecurities securities = 3;
     */
    securities: PositionsSecurities[];
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.PositionsFutures futures = 4;
     */
    futures: PositionsFutures[];
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.PositionsOptions options = 5;
     */
    options: PositionsOptions[];
    /**
     * @generated from protobuf field: google.protobuf.Timestamp date = 6;
     */
    date?: Timestamp;
}
/**
 * Валютная позиция портфеля.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.PositionsMoney
 */
export interface PositionsMoney {
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue available_value = 1;
     */
    availableValue?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue blocked_value = 2;
     */
    blockedValue?: MoneyValue;
}
/**
 * Статус запрашиваемых операций.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.OperationState
 */
export declare enum OperationState {
    /**
     * Статус операции не определён
     *
     * @generated from protobuf enum value: OPERATION_STATE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Исполнена.
     *
     * @generated from protobuf enum value: OPERATION_STATE_EXECUTED = 1;
     */
    EXECUTED = 1,
    /**
     * Отменена.
     *
     * @generated from protobuf enum value: OPERATION_STATE_CANCELED = 2;
     */
    CANCELED = 2,
    /**
     * Исполняется.
     *
     * @generated from protobuf enum value: OPERATION_STATE_PROGRESS = 3;
     */
    PROGRESS = 3
}
/**
 * Тип операции.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.OperationType
 */
export declare enum OperationType {
    /**
     * Тип операции не определён.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Пополнение брокерского счёта.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_INPUT = 1;
     */
    INPUT = 1,
    /**
     * Удержание НДФЛ по купонам.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_BOND_TAX = 2;
     */
    BOND_TAX = 2,
    /**
     * Вывод ЦБ.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_OUTPUT_SECURITIES = 3;
     */
    OUTPUT_SECURITIES = 3,
    /**
     * Доход по сделке РЕПО овернайт.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_OVERNIGHT = 4;
     */
    OVERNIGHT = 4,
    /**
     * Удержание налога.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_TAX = 5;
     */
    TAX = 5,
    /**
     * Полное погашение облигаций.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_BOND_REPAYMENT_FULL = 6;
     */
    BOND_REPAYMENT_FULL = 6,
    /**
     * Продажа ЦБ с карты.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_SELL_CARD = 7;
     */
    SELL_CARD = 7,
    /**
     * Удержание налога по дивидендам.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_DIVIDEND_TAX = 8;
     */
    DIVIDEND_TAX = 8,
    /**
     * Вывод денежных средств.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_OUTPUT = 9;
     */
    OUTPUT = 9,
    /**
     * Частичное погашение облигаций.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_BOND_REPAYMENT = 10;
     */
    BOND_REPAYMENT = 10,
    /**
     * Корректировка налога.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_TAX_CORRECTION = 11;
     */
    TAX_CORRECTION = 11,
    /**
     * Удержание комиссии за обслуживание брокерского счёта.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_SERVICE_FEE = 12;
     */
    SERVICE_FEE = 12,
    /**
     * Удержание налога за материальную выгоду.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_BENEFIT_TAX = 13;
     */
    BENEFIT_TAX = 13,
    /**
     * Удержание комиссии за непокрытую позицию.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_MARGIN_FEE = 14;
     */
    MARGIN_FEE = 14,
    /**
     * Покупка ЦБ.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_BUY = 15;
     */
    BUY = 15,
    /**
     * Покупка ЦБ с карты.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_BUY_CARD = 16;
     */
    BUY_CARD = 16,
    /**
     * Перевод ценных бумаг из другого депозитария.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_INPUT_SECURITIES = 17;
     */
    INPUT_SECURITIES = 17,
    /**
     * Продажа в результате Margin-call.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_SELL_MARGIN = 18;
     */
    SELL_MARGIN = 18,
    /**
     * Удержание комиссии за операцию.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_BROKER_FEE = 19;
     */
    BROKER_FEE = 19,
    /**
     * Покупка в результате Margin-call.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_BUY_MARGIN = 20;
     */
    BUY_MARGIN = 20,
    /**
     * Выплата дивидендов.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_DIVIDEND = 21;
     */
    DIVIDEND = 21,
    /**
     * Продажа ЦБ.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_SELL = 22;
     */
    SELL = 22,
    /**
     * Выплата купонов.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_COUPON = 23;
     */
    COUPON = 23,
    /**
     * Удержание комиссии SuccessFee.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_SUCCESS_FEE = 24;
     */
    SUCCESS_FEE = 24,
    /**
     * Передача дивидендного дохода.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_DIVIDEND_TRANSFER = 25;
     */
    DIVIDEND_TRANSFER = 25,
    /**
     * Зачисление вариационной маржи.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_ACCRUING_VARMARGIN = 26;
     */
    ACCRUING_VARMARGIN = 26,
    /**
     * Списание вариационной маржи.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_WRITING_OFF_VARMARGIN = 27;
     */
    WRITING_OFF_VARMARGIN = 27,
    /**
     * Покупка в рамках экспирации фьючерсного контракта.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_DELIVERY_BUY = 28;
     */
    DELIVERY_BUY = 28,
    /**
     * Продажа в рамках экспирации фьючерсного контракта.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_DELIVERY_SELL = 29;
     */
    DELIVERY_SELL = 29,
    /**
     * Комиссия за управление по счёту автоследования.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_TRACK_MFEE = 30;
     */
    TRACK_MFEE = 30,
    /**
     * Комиссия за результат по счёту автоследования.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_TRACK_PFEE = 31;
     */
    TRACK_PFEE = 31,
    /**
     * Удержание налога по ставке 15%.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_TAX_PROGRESSIVE = 32;
     */
    TAX_PROGRESSIVE = 32,
    /**
     * Удержание налога по купонам по ставке 15%.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_BOND_TAX_PROGRESSIVE = 33;
     */
    BOND_TAX_PROGRESSIVE = 33,
    /**
     * Удержание налога по дивидендам по ставке 15%.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE = 34;
     */
    DIVIDEND_TAX_PROGRESSIVE = 34,
    /**
     * Удержание налога за материальную выгоду по ставке 15%.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE = 35;
     */
    BENEFIT_TAX_PROGRESSIVE = 35,
    /**
     * Корректировка налога по ставке 15%.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE = 36;
     */
    TAX_CORRECTION_PROGRESSIVE = 36,
    /**
     * Удержание налога за возмещение по сделкам РЕПО по ставке 15%.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_TAX_REPO_PROGRESSIVE = 37;
     */
    TAX_REPO_PROGRESSIVE = 37,
    /**
     * Удержание налога за возмещение по сделкам РЕПО.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_TAX_REPO = 38;
     */
    TAX_REPO = 38,
    /**
     * Удержание налога по сделкам РЕПО.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_TAX_REPO_HOLD = 39;
     */
    TAX_REPO_HOLD = 39,
    /**
     * Возврат налога по сделкам РЕПО.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_TAX_REPO_REFUND = 40;
     */
    TAX_REPO_REFUND = 40,
    /**
     * Удержание налога по сделкам РЕПО по ставке 15%.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE = 41;
     */
    TAX_REPO_HOLD_PROGRESSIVE = 41,
    /**
     * Возврат налога по сделкам РЕПО по ставке 15%.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE = 42;
     */
    TAX_REPO_REFUND_PROGRESSIVE = 42,
    /**
     * Выплата дивидендов на карту.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_DIV_EXT = 43;
     */
    DIV_EXT = 43,
    /**
     * Корректировка налога по купонам.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_TAX_CORRECTION_COUPON = 44;
     */
    TAX_CORRECTION_COUPON = 44,
    /**
     * Комиссия за валютный остаток.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_CASH_FEE = 45;
     */
    CASH_FEE = 45,
    /**
     * Комиссия за вывод валюты с брокерского счета.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_OUT_FEE = 46;
     */
    OUT_FEE = 46,
    /**
     * Гербовый сбор.
     *
     * @generated from protobuf enum value: OPERATION_TYPE_OUT_STAMP_DUTY = 47;
     */
    OUT_STAMP_DUTY = 47,
    /**
     * 	SWIFT-перевод
     *
     * @generated from protobuf enum value: OPERATION_TYPE_OUTPUT_SWIFT = 50;
     */
    OUTPUT_SWIFT = 50,
    /**
     * 	SWIFT-перевод
     *
     * @generated from protobuf enum value: OPERATION_TYPE_INPUT_SWIFT = 51;
     */
    INPUT_SWIFT = 51,
    /**
     *  Перевод на карту
     *
     * @generated from protobuf enum value: OPERATION_TYPE_OUTPUT_ACQUIRING = 53;
     */
    OUTPUT_ACQUIRING = 53,
    /**
     * 	Перевод с карты
     *
     * @generated from protobuf enum value: OPERATION_TYPE_INPUT_ACQUIRING = 54;
     */
    INPUT_ACQUIRING = 54,
    /**
     * 	Комиссия за вывод средств
     *
     * @generated from protobuf enum value: OPERATION_TYPE_OUTPUT_PENALTY = 55;
     */
    OUTPUT_PENALTY = 55,
    /**
     * 	Списание оплаты за сервис Советов
     *
     * @generated from protobuf enum value: OPERATION_TYPE_ADVICE_FEE = 56;
     */
    ADVICE_FEE = 56,
    /**
     *  Перевод ценных бумаг с ИИС на Брокерский счет
     *
     * @generated from protobuf enum value: OPERATION_TYPE_TRANS_IIS_BS = 57;
     */
    TRANS_IIS_BS = 57,
    /**
     *  Перевод ценных бумаг с одного брокерского счета на другой
     *
     * @generated from protobuf enum value: OPERATION_TYPE_TRANS_BS_BS = 58;
     */
    TRANS_BS_BS = 58,
    /**
     *  Вывод денежных средств со счета
     *
     * @generated from protobuf enum value: OPERATION_TYPE_OUT_MULTI = 59;
     */
    OUT_MULTI = 59,
    /**
     *  Пополнение денежных средств со счета
     *
     * @generated from protobuf enum value: OPERATION_TYPE_INP_MULTI = 60;
     */
    INP_MULTI = 60,
    /**
     *  Размещение биржевого овернайта
     *
     * @generated from protobuf enum value: OPERATION_TYPE_OVER_PLACEMENT = 61;
     */
    OVER_PLACEMENT = 61,
    /**
     *  Списание комиссии
     *
     * @generated from protobuf enum value: OPERATION_TYPE_OVER_COM = 62;
     */
    OVER_COM = 62,
    /**
     *  Доход от оверанайта
     *
     * @generated from protobuf enum value: OPERATION_TYPE_OVER_INCOME = 63;
     */
    OVER_INCOME = 63,
    /**
     * Экспирация
     *
     * @generated from protobuf enum value: OPERATION_TYPE_OPTION_EXPIRATION = 64;
     */
    OPTION_EXPIRATION = 64
}
/**
 * Результат подписки.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionStatus
 */
export declare enum PortfolioSubscriptionStatus {
    /**
     * Тип не определён.
     *
     * @generated from protobuf enum value: PORTFOLIO_SUBSCRIPTION_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Успешно.
     *
     * @generated from protobuf enum value: PORTFOLIO_SUBSCRIPTION_STATUS_SUCCESS = 1;
     */
    SUCCESS = 1,
    /**
     * Счёт не найден или недостаточно прав.
     *
     * @generated from protobuf enum value: PORTFOLIO_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND = 2;
     */
    ACCOUNT_NOT_FOUND = 2,
    /**
     * Произошла ошибка.
     *
     * @generated from protobuf enum value: PORTFOLIO_SUBSCRIPTION_STATUS_INTERNAL_ERROR = 3;
     */
    INTERNAL_ERROR = 3
}
/**
 * Результат подписки.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.PositionsAccountSubscriptionStatus
 */
export declare enum PositionsAccountSubscriptionStatus {
    /**
     * Тип не определён.
     *
     * @generated from protobuf enum value: POSITIONS_SUBSCRIPTION_STATUS_UNSPECIFIED = 0;
     */
    POSITIONS_SUBSCRIPTION_STATUS_UNSPECIFIED = 0,
    /**
     * Успешно.
     *
     * @generated from protobuf enum value: POSITIONS_SUBSCRIPTION_STATUS_SUCCESS = 1;
     */
    POSITIONS_SUBSCRIPTION_STATUS_SUCCESS = 1,
    /**
     * Счёт не найден или недостаточно прав.
     *
     * @generated from protobuf enum value: POSITIONS_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND = 2;
     */
    POSITIONS_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND = 2,
    /**
     * Произошла ошибка.
     *
     * @generated from protobuf enum value: POSITIONS_SUBSCRIPTION_STATUS_INTERNAL_ERROR = 3;
     */
    POSITIONS_SUBSCRIPTION_STATUS_INTERNAL_ERROR = 3
}
declare class OperationsRequest$Type extends MessageType<OperationsRequest> {
    constructor();
    create(value?: PartialMessage<OperationsRequest>): OperationsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OperationsRequest): OperationsRequest;
    internalBinaryWrite(message: OperationsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.OperationsRequest
 */
export declare const OperationsRequest: OperationsRequest$Type;
declare class OperationsResponse$Type extends MessageType<OperationsResponse> {
    constructor();
    create(value?: PartialMessage<OperationsResponse>): OperationsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OperationsResponse): OperationsResponse;
    internalBinaryWrite(message: OperationsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.OperationsResponse
 */
export declare const OperationsResponse: OperationsResponse$Type;
declare class Operation$Type extends MessageType<Operation> {
    constructor();
    create(value?: PartialMessage<Operation>): Operation;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Operation): Operation;
    internalBinaryWrite(message: Operation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.Operation
 */
export declare const Operation: Operation$Type;
declare class OperationTrade$Type extends MessageType<OperationTrade> {
    constructor();
    create(value?: PartialMessage<OperationTrade>): OperationTrade;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OperationTrade): OperationTrade;
    internalBinaryWrite(message: OperationTrade, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.OperationTrade
 */
export declare const OperationTrade: OperationTrade$Type;
declare class PortfolioRequest$Type extends MessageType<PortfolioRequest> {
    constructor();
    create(value?: PartialMessage<PortfolioRequest>): PortfolioRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PortfolioRequest): PortfolioRequest;
    internalBinaryWrite(message: PortfolioRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.PortfolioRequest
 */
export declare const PortfolioRequest: PortfolioRequest$Type;
declare class PortfolioResponse$Type extends MessageType<PortfolioResponse> {
    constructor();
    create(value?: PartialMessage<PortfolioResponse>): PortfolioResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PortfolioResponse): PortfolioResponse;
    internalBinaryWrite(message: PortfolioResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.PortfolioResponse
 */
export declare const PortfolioResponse: PortfolioResponse$Type;
declare class PositionsRequest$Type extends MessageType<PositionsRequest> {
    constructor();
    create(value?: PartialMessage<PositionsRequest>): PositionsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PositionsRequest): PositionsRequest;
    internalBinaryWrite(message: PositionsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.PositionsRequest
 */
export declare const PositionsRequest: PositionsRequest$Type;
declare class PositionsResponse$Type extends MessageType<PositionsResponse> {
    constructor();
    create(value?: PartialMessage<PositionsResponse>): PositionsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PositionsResponse): PositionsResponse;
    internalBinaryWrite(message: PositionsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.PositionsResponse
 */
export declare const PositionsResponse: PositionsResponse$Type;
declare class WithdrawLimitsRequest$Type extends MessageType<WithdrawLimitsRequest> {
    constructor();
    create(value?: PartialMessage<WithdrawLimitsRequest>): WithdrawLimitsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WithdrawLimitsRequest): WithdrawLimitsRequest;
    internalBinaryWrite(message: WithdrawLimitsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest
 */
export declare const WithdrawLimitsRequest: WithdrawLimitsRequest$Type;
declare class WithdrawLimitsResponse$Type extends MessageType<WithdrawLimitsResponse> {
    constructor();
    create(value?: PartialMessage<WithdrawLimitsResponse>): WithdrawLimitsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WithdrawLimitsResponse): WithdrawLimitsResponse;
    internalBinaryWrite(message: WithdrawLimitsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse
 */
export declare const WithdrawLimitsResponse: WithdrawLimitsResponse$Type;
declare class PortfolioPosition$Type extends MessageType<PortfolioPosition> {
    constructor();
    create(value?: PartialMessage<PortfolioPosition>): PortfolioPosition;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PortfolioPosition): PortfolioPosition;
    internalBinaryWrite(message: PortfolioPosition, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.PortfolioPosition
 */
export declare const PortfolioPosition: PortfolioPosition$Type;
declare class VirtualPortfolioPosition$Type extends MessageType<VirtualPortfolioPosition> {
    constructor();
    create(value?: PartialMessage<VirtualPortfolioPosition>): VirtualPortfolioPosition;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VirtualPortfolioPosition): VirtualPortfolioPosition;
    internalBinaryWrite(message: VirtualPortfolioPosition, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition
 */
export declare const VirtualPortfolioPosition: VirtualPortfolioPosition$Type;
declare class PositionsSecurities$Type extends MessageType<PositionsSecurities> {
    constructor();
    create(value?: PartialMessage<PositionsSecurities>): PositionsSecurities;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PositionsSecurities): PositionsSecurities;
    internalBinaryWrite(message: PositionsSecurities, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.PositionsSecurities
 */
export declare const PositionsSecurities: PositionsSecurities$Type;
declare class PositionsFutures$Type extends MessageType<PositionsFutures> {
    constructor();
    create(value?: PartialMessage<PositionsFutures>): PositionsFutures;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PositionsFutures): PositionsFutures;
    internalBinaryWrite(message: PositionsFutures, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.PositionsFutures
 */
export declare const PositionsFutures: PositionsFutures$Type;
declare class PositionsOptions$Type extends MessageType<PositionsOptions> {
    constructor();
    create(value?: PartialMessage<PositionsOptions>): PositionsOptions;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PositionsOptions): PositionsOptions;
    internalBinaryWrite(message: PositionsOptions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.PositionsOptions
 */
export declare const PositionsOptions: PositionsOptions$Type;
declare class BrokerReportRequest$Type extends MessageType<BrokerReportRequest> {
    constructor();
    create(value?: PartialMessage<BrokerReportRequest>): BrokerReportRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BrokerReportRequest): BrokerReportRequest;
    internalBinaryWrite(message: BrokerReportRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.BrokerReportRequest
 */
export declare const BrokerReportRequest: BrokerReportRequest$Type;
declare class BrokerReportResponse$Type extends MessageType<BrokerReportResponse> {
    constructor();
    create(value?: PartialMessage<BrokerReportResponse>): BrokerReportResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BrokerReportResponse): BrokerReportResponse;
    internalBinaryWrite(message: BrokerReportResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.BrokerReportResponse
 */
export declare const BrokerReportResponse: BrokerReportResponse$Type;
declare class GenerateBrokerReportRequest$Type extends MessageType<GenerateBrokerReportRequest> {
    constructor();
    create(value?: PartialMessage<GenerateBrokerReportRequest>): GenerateBrokerReportRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GenerateBrokerReportRequest): GenerateBrokerReportRequest;
    internalBinaryWrite(message: GenerateBrokerReportRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest
 */
export declare const GenerateBrokerReportRequest: GenerateBrokerReportRequest$Type;
declare class GenerateBrokerReportResponse$Type extends MessageType<GenerateBrokerReportResponse> {
    constructor();
    create(value?: PartialMessage<GenerateBrokerReportResponse>): GenerateBrokerReportResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GenerateBrokerReportResponse): GenerateBrokerReportResponse;
    internalBinaryWrite(message: GenerateBrokerReportResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse
 */
export declare const GenerateBrokerReportResponse: GenerateBrokerReportResponse$Type;
declare class GetBrokerReportRequest$Type extends MessageType<GetBrokerReportRequest> {
    constructor();
    create(value?: PartialMessage<GetBrokerReportRequest>): GetBrokerReportRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetBrokerReportRequest): GetBrokerReportRequest;
    internalBinaryWrite(message: GetBrokerReportRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest
 */
export declare const GetBrokerReportRequest: GetBrokerReportRequest$Type;
declare class GetBrokerReportResponse$Type extends MessageType<GetBrokerReportResponse> {
    constructor();
    create(value?: PartialMessage<GetBrokerReportResponse>): GetBrokerReportResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetBrokerReportResponse): GetBrokerReportResponse;
    internalBinaryWrite(message: GetBrokerReportResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse
 */
export declare const GetBrokerReportResponse: GetBrokerReportResponse$Type;
declare class BrokerReport$Type extends MessageType<BrokerReport> {
    constructor();
    create(value?: PartialMessage<BrokerReport>): BrokerReport;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BrokerReport): BrokerReport;
    internalBinaryWrite(message: BrokerReport, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.BrokerReport
 */
export declare const BrokerReport: BrokerReport$Type;
declare class GetDividendsForeignIssuerRequest$Type extends MessageType<GetDividendsForeignIssuerRequest> {
    constructor();
    create(value?: PartialMessage<GetDividendsForeignIssuerRequest>): GetDividendsForeignIssuerRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetDividendsForeignIssuerRequest): GetDividendsForeignIssuerRequest;
    internalBinaryWrite(message: GetDividendsForeignIssuerRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest
 */
export declare const GetDividendsForeignIssuerRequest: GetDividendsForeignIssuerRequest$Type;
declare class GetDividendsForeignIssuerResponse$Type extends MessageType<GetDividendsForeignIssuerResponse> {
    constructor();
    create(value?: PartialMessage<GetDividendsForeignIssuerResponse>): GetDividendsForeignIssuerResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetDividendsForeignIssuerResponse): GetDividendsForeignIssuerResponse;
    internalBinaryWrite(message: GetDividendsForeignIssuerResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse
 */
export declare const GetDividendsForeignIssuerResponse: GetDividendsForeignIssuerResponse$Type;
declare class GenerateDividendsForeignIssuerReportRequest$Type extends MessageType<GenerateDividendsForeignIssuerReportRequest> {
    constructor();
    create(value?: PartialMessage<GenerateDividendsForeignIssuerReportRequest>): GenerateDividendsForeignIssuerReportRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GenerateDividendsForeignIssuerReportRequest): GenerateDividendsForeignIssuerReportRequest;
    internalBinaryWrite(message: GenerateDividendsForeignIssuerReportRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest
 */
export declare const GenerateDividendsForeignIssuerReportRequest: GenerateDividendsForeignIssuerReportRequest$Type;
declare class GetDividendsForeignIssuerReportRequest$Type extends MessageType<GetDividendsForeignIssuerReportRequest> {
    constructor();
    create(value?: PartialMessage<GetDividendsForeignIssuerReportRequest>): GetDividendsForeignIssuerReportRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetDividendsForeignIssuerReportRequest): GetDividendsForeignIssuerReportRequest;
    internalBinaryWrite(message: GetDividendsForeignIssuerReportRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest
 */
export declare const GetDividendsForeignIssuerReportRequest: GetDividendsForeignIssuerReportRequest$Type;
declare class GenerateDividendsForeignIssuerReportResponse$Type extends MessageType<GenerateDividendsForeignIssuerReportResponse> {
    constructor();
    create(value?: PartialMessage<GenerateDividendsForeignIssuerReportResponse>): GenerateDividendsForeignIssuerReportResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GenerateDividendsForeignIssuerReportResponse): GenerateDividendsForeignIssuerReportResponse;
    internalBinaryWrite(message: GenerateDividendsForeignIssuerReportResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse
 */
export declare const GenerateDividendsForeignIssuerReportResponse: GenerateDividendsForeignIssuerReportResponse$Type;
declare class GetDividendsForeignIssuerReportResponse$Type extends MessageType<GetDividendsForeignIssuerReportResponse> {
    constructor();
    create(value?: PartialMessage<GetDividendsForeignIssuerReportResponse>): GetDividendsForeignIssuerReportResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetDividendsForeignIssuerReportResponse): GetDividendsForeignIssuerReportResponse;
    internalBinaryWrite(message: GetDividendsForeignIssuerReportResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse
 */
export declare const GetDividendsForeignIssuerReportResponse: GetDividendsForeignIssuerReportResponse$Type;
declare class DividendsForeignIssuerReport$Type extends MessageType<DividendsForeignIssuerReport> {
    constructor();
    create(value?: PartialMessage<DividendsForeignIssuerReport>): DividendsForeignIssuerReport;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DividendsForeignIssuerReport): DividendsForeignIssuerReport;
    internalBinaryWrite(message: DividendsForeignIssuerReport, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport
 */
export declare const DividendsForeignIssuerReport: DividendsForeignIssuerReport$Type;
declare class PortfolioStreamRequest$Type extends MessageType<PortfolioStreamRequest> {
    constructor();
    create(value?: PartialMessage<PortfolioStreamRequest>): PortfolioStreamRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PortfolioStreamRequest): PortfolioStreamRequest;
    internalBinaryWrite(message: PortfolioStreamRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest
 */
export declare const PortfolioStreamRequest: PortfolioStreamRequest$Type;
declare class PortfolioStreamResponse$Type extends MessageType<PortfolioStreamResponse> {
    constructor();
    create(value?: PartialMessage<PortfolioStreamResponse>): PortfolioStreamResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PortfolioStreamResponse): PortfolioStreamResponse;
    internalBinaryWrite(message: PortfolioStreamResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse
 */
export declare const PortfolioStreamResponse: PortfolioStreamResponse$Type;
declare class PortfolioSubscriptionResult$Type extends MessageType<PortfolioSubscriptionResult> {
    constructor();
    create(value?: PartialMessage<PortfolioSubscriptionResult>): PortfolioSubscriptionResult;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PortfolioSubscriptionResult): PortfolioSubscriptionResult;
    internalBinaryWrite(message: PortfolioSubscriptionResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult
 */
export declare const PortfolioSubscriptionResult: PortfolioSubscriptionResult$Type;
declare class AccountSubscriptionStatus$Type extends MessageType<AccountSubscriptionStatus> {
    constructor();
    create(value?: PartialMessage<AccountSubscriptionStatus>): AccountSubscriptionStatus;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AccountSubscriptionStatus): AccountSubscriptionStatus;
    internalBinaryWrite(message: AccountSubscriptionStatus, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus
 */
export declare const AccountSubscriptionStatus: AccountSubscriptionStatus$Type;
declare class GetOperationsByCursorRequest$Type extends MessageType<GetOperationsByCursorRequest> {
    constructor();
    create(value?: PartialMessage<GetOperationsByCursorRequest>): GetOperationsByCursorRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetOperationsByCursorRequest): GetOperationsByCursorRequest;
    internalBinaryWrite(message: GetOperationsByCursorRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest
 */
export declare const GetOperationsByCursorRequest: GetOperationsByCursorRequest$Type;
declare class GetOperationsByCursorResponse$Type extends MessageType<GetOperationsByCursorResponse> {
    constructor();
    create(value?: PartialMessage<GetOperationsByCursorResponse>): GetOperationsByCursorResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetOperationsByCursorResponse): GetOperationsByCursorResponse;
    internalBinaryWrite(message: GetOperationsByCursorResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse
 */
export declare const GetOperationsByCursorResponse: GetOperationsByCursorResponse$Type;
declare class OperationItem$Type extends MessageType<OperationItem> {
    constructor();
    create(value?: PartialMessage<OperationItem>): OperationItem;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OperationItem): OperationItem;
    internalBinaryWrite(message: OperationItem, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.OperationItem
 */
export declare const OperationItem: OperationItem$Type;
declare class OperationItemTrades$Type extends MessageType<OperationItemTrades> {
    constructor();
    create(value?: PartialMessage<OperationItemTrades>): OperationItemTrades;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OperationItemTrades): OperationItemTrades;
    internalBinaryWrite(message: OperationItemTrades, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.OperationItemTrades
 */
export declare const OperationItemTrades: OperationItemTrades$Type;
declare class OperationItemTrade$Type extends MessageType<OperationItemTrade> {
    constructor();
    create(value?: PartialMessage<OperationItemTrade>): OperationItemTrade;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OperationItemTrade): OperationItemTrade;
    internalBinaryWrite(message: OperationItemTrade, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.OperationItemTrade
 */
export declare const OperationItemTrade: OperationItemTrade$Type;
declare class PositionsStreamRequest$Type extends MessageType<PositionsStreamRequest> {
    constructor();
    create(value?: PartialMessage<PositionsStreamRequest>): PositionsStreamRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PositionsStreamRequest): PositionsStreamRequest;
    internalBinaryWrite(message: PositionsStreamRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.PositionsStreamRequest
 */
export declare const PositionsStreamRequest: PositionsStreamRequest$Type;
declare class PositionsStreamResponse$Type extends MessageType<PositionsStreamResponse> {
    constructor();
    create(value?: PartialMessage<PositionsStreamResponse>): PositionsStreamResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PositionsStreamResponse): PositionsStreamResponse;
    internalBinaryWrite(message: PositionsStreamResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.PositionsStreamResponse
 */
export declare const PositionsStreamResponse: PositionsStreamResponse$Type;
declare class PositionsSubscriptionResult$Type extends MessageType<PositionsSubscriptionResult> {
    constructor();
    create(value?: PartialMessage<PositionsSubscriptionResult>): PositionsSubscriptionResult;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PositionsSubscriptionResult): PositionsSubscriptionResult;
    internalBinaryWrite(message: PositionsSubscriptionResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult
 */
export declare const PositionsSubscriptionResult: PositionsSubscriptionResult$Type;
declare class PositionsSubscriptionStatus$Type extends MessageType<PositionsSubscriptionStatus> {
    constructor();
    create(value?: PartialMessage<PositionsSubscriptionStatus>): PositionsSubscriptionStatus;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PositionsSubscriptionStatus): PositionsSubscriptionStatus;
    internalBinaryWrite(message: PositionsSubscriptionStatus, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus
 */
export declare const PositionsSubscriptionStatus: PositionsSubscriptionStatus$Type;
declare class PositionData$Type extends MessageType<PositionData> {
    constructor();
    create(value?: PartialMessage<PositionData>): PositionData;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PositionData): PositionData;
    internalBinaryWrite(message: PositionData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.PositionData
 */
export declare const PositionData: PositionData$Type;
declare class PositionsMoney$Type extends MessageType<PositionsMoney> {
    constructor();
    create(value?: PartialMessage<PositionsMoney>): PositionsMoney;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PositionsMoney): PositionsMoney;
    internalBinaryWrite(message: PositionsMoney, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.PositionsMoney
 */
export declare const PositionsMoney: PositionsMoney$Type;
/**
 * @generated ServiceType for protobuf service tinkoff.public.invest.api.contract.v1.OperationsService
 */
export declare const OperationsService: ServiceType;
/**
 * @generated ServiceType for protobuf service tinkoff.public.invest.api.contract.v1.OperationsStreamService
 */
export declare const OperationsStreamService: ServiceType;
export {};
