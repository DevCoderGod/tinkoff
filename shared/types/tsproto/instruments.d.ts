import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { InstrumentType } from "./common";
import { Quotation } from "./common";
import { SecurityTradingStatus } from "./common";
import { MoneyValue } from "./common";
import { Timestamp } from "./google/protobuf/timestamp";
/**
 * Запрос расписания торгов.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.TradingSchedulesRequest
 */
export interface TradingSchedulesRequest {
    /**
     * @generated from protobuf field: string exchange = 1;
     */
    exchange: string;
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
 * Список торговых площадок.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.TradingSchedulesResponse
 */
export interface TradingSchedulesResponse {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.TradingSchedule exchanges = 1;
     */
    exchanges: TradingSchedule[];
}
/**
 * Данные по торговой площадке.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.TradingSchedule
 */
export interface TradingSchedule {
    /**
     * @generated from protobuf field: string exchange = 1;
     */
    exchange: string;
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.TradingDay days = 2;
     */
    days: TradingDay[];
}
/**
 * Информация о времени торгов.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.TradingDay
 */
export interface TradingDay {
    /**
     * @generated from protobuf field: google.protobuf.Timestamp date = 1;
     */
    date?: Timestamp;
    /**
     * @generated from protobuf field: bool is_trading_day = 2;
     */
    isTradingDay: boolean;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp start_time = 3;
     */
    startTime?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp end_time = 4;
     */
    endTime?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp opening_auction_start_time = 7;
     */
    openingAuctionStartTime?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp closing_auction_end_time = 8;
     */
    closingAuctionEndTime?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp evening_opening_auction_start_time = 9;
     */
    eveningOpeningAuctionStartTime?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp evening_start_time = 10;
     */
    eveningStartTime?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp evening_end_time = 11;
     */
    eveningEndTime?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp clearing_start_time = 12;
     */
    clearingStartTime?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp clearing_end_time = 13;
     */
    clearingEndTime?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp premarket_start_time = 14;
     */
    premarketStartTime?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp premarket_end_time = 15;
     */
    premarketEndTime?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp closing_auction_start_time = 16;
     */
    closingAuctionStartTime?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp opening_auction_end_time = 17;
     */
    openingAuctionEndTime?: Timestamp;
}
/**
 * Запрос получения инструмента по идентификатору.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.InstrumentRequest
 */
export interface InstrumentRequest {
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.InstrumentIdType id_type = 1;
     */
    idType: InstrumentIdType;
    /**
     * @generated from protobuf field: string class_code = 2;
     */
    classCode: string;
    /**
     * @generated from protobuf field: string id = 3;
     */
    id: string;
}
/**
 * Запрос получения инструментов.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.InstrumentsRequest
 */
export interface InstrumentsRequest {
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.InstrumentStatus instrument_status = 1;
     */
    instrumentStatus: InstrumentStatus;
}
/**
 * Информация об облигации.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.BondResponse
 */
export interface BondResponse {
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Bond instrument = 1;
     */
    instrument?: Bond;
}
/**
 * Список облигаций.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.BondsResponse
 */
export interface BondsResponse {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.Bond instruments = 1;
     */
    instruments: Bond[];
}
/**
 * Запрос купонов по облигации.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetBondCouponsRequest
 */
export interface GetBondCouponsRequest {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
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
 * Купоны по облигации.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetBondCouponsResponse
 */
export interface GetBondCouponsResponse {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.Coupon events = 1;
     */
    events: Coupon[];
}
/**
 * Объект передачи информации о купоне облигации.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.Coupon
 */
export interface Coupon {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp coupon_date = 2;
     */
    couponDate?: Timestamp;
    /**
     * @generated from protobuf field: int64 coupon_number = 3;
     */
    couponNumber: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp fix_date = 4;
     */
    fixDate?: Timestamp;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue pay_one_bond = 5;
     */
    payOneBond?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.CouponType coupon_type = 6;
     */
    couponType: CouponType;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp coupon_start_date = 7;
     */
    couponStartDate?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp coupon_end_date = 8;
     */
    couponEndDate?: Timestamp;
    /**
     * @generated from protobuf field: int32 coupon_period = 9;
     */
    couponPeriod: number;
}
/**
 * Данные по валюте.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.CurrencyResponse
 */
export interface CurrencyResponse {
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Currency instrument = 1;
     */
    instrument?: Currency;
}
/**
 * Данные по валютам.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.CurrenciesResponse
 */
export interface CurrenciesResponse {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.Currency instruments = 1;
     */
    instruments: Currency[];
}
/**
 * Данные по фонду.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.EtfResponse
 */
export interface EtfResponse {
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Etf instrument = 1;
     */
    instrument?: Etf;
}
/**
 * Данные по фондам.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.EtfsResponse
 */
export interface EtfsResponse {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.Etf instruments = 1;
     */
    instruments: Etf[];
}
/**
 * Данные по фьючерсу.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.FutureResponse
 */
export interface FutureResponse {
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Future instrument = 1;
     */
    instrument?: Future;
}
/**
 * Данные по фьючерсам.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.FuturesResponse
 */
export interface FuturesResponse {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.Future instruments = 1;
     */
    instruments: Future[];
}
/**
 * Данные по опциону.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.OptionResponse
 */
export interface OptionResponse {
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Option instrument = 1;
     */
    instrument?: Option;
}
/**
 * Данные по опционам.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.OptionsResponse
 */
export interface OptionsResponse {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.Option instruments = 1;
     */
    instruments: Option[];
}
/**
 * Опцион.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.Option
 */
export interface Option {
    /**
     * @generated from protobuf field: string uid = 1;
     */
    uid: string;
    /**
     * @generated from protobuf field: string position_uid = 2;
     */
    positionUid: string;
    /**
     * @generated from protobuf field: string ticker = 3;
     */
    ticker: string;
    /**
     * @generated from protobuf field: string class_code = 4;
     */
    classCode: string;
    /**
     * @generated from protobuf field: string basic_asset_position_uid = 5;
     */
    basicAssetPositionUid: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SecurityTradingStatus trading_status = 21;
     */
    tradingStatus: SecurityTradingStatus;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.RealExchange real_exchange = 31;
     */
    realExchange: RealExchange;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.OptionDirection direction = 41;
     */
    direction: OptionDirection;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.OptionPaymentType payment_type = 42;
     */
    paymentType: OptionPaymentType;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.OptionStyle style = 43;
     */
    style: OptionStyle;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.OptionSettlementType settlement_type = 44;
     */
    settlementType: OptionSettlementType;
    /**
     * @generated from protobuf field: string name = 101;
     */
    name: string;
    /**
     * @generated from protobuf field: string currency = 111;
     */
    currency: string;
    /**
     * @generated from protobuf field: string settlement_currency = 112;
     */
    settlementCurrency: string;
    /**
     * @generated from protobuf field: string asset_type = 131;
     */
    assetType: string;
    /**
     * @generated from protobuf field: string basic_asset = 132;
     */
    basicAsset: string;
    /**
     * @generated from protobuf field: string exchange = 141;
     */
    exchange: string;
    /**
     * @generated from protobuf field: string country_of_risk = 151;
     */
    countryOfRisk: string;
    /**
     * @generated from protobuf field: string country_of_risk_name = 152;
     */
    countryOfRiskName: string;
    /**
     * @generated from protobuf field: string sector = 161;
     */
    sector: string;
    /**
     * @generated from protobuf field: int32 lot = 201;
     */
    lot: number;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation basic_asset_size = 211;
     */
    basicAssetSize?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation klong = 221;
     */
    klong?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation kshort = 222;
     */
    kshort?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dlong = 223;
     */
    dlong?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dshort = 224;
     */
    dshort?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dlong_min = 225;
     */
    dlongMin?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dshort_min = 226;
     */
    dshortMin?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation min_price_increment = 231;
     */
    minPriceIncrement?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue strike_price = 241;
     */
    strikePrice?: MoneyValue;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp expiration_date = 301;
     */
    expirationDate?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp first_trade_date = 311;
     */
    firstTradeDate?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp last_trade_date = 312;
     */
    lastTradeDate?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp first_1min_candle_date = 321 [json_name = "first1minCandleDate"];
     */
    first1MinCandleDate?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp first_1day_candle_date = 322 [json_name = "first1dayCandleDate"];
     */
    first1DayCandleDate?: Timestamp;
    /**
     * @generated from protobuf field: bool short_enabled_flag = 401;
     */
    shortEnabledFlag: boolean;
    /**
     * @generated from protobuf field: bool for_iis_flag = 402;
     */
    forIisFlag: boolean;
    /**
     * @generated from protobuf field: bool otc_flag = 403;
     */
    otcFlag: boolean;
    /**
     * @generated from protobuf field: bool buy_available_flag = 404;
     */
    buyAvailableFlag: boolean;
    /**
     * @generated from protobuf field: bool sell_available_flag = 405;
     */
    sellAvailableFlag: boolean;
    /**
     * @generated from protobuf field: bool for_qual_investor_flag = 406;
     */
    forQualInvestorFlag: boolean;
    /**
     * @generated from protobuf field: bool weekend_flag = 407;
     */
    weekendFlag: boolean;
    /**
     * @generated from protobuf field: bool blocked_tca_flag = 408;
     */
    blockedTcaFlag: boolean;
    /**
     * @generated from protobuf field: bool api_trade_available_flag = 409;
     */
    apiTradeAvailableFlag: boolean;
}
/**
 * Данные по акции.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.ShareResponse
 */
export interface ShareResponse {
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Share instrument = 1;
     */
    instrument?: Share;
}
/**
 * Данные по акциям.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.SharesResponse
 */
export interface SharesResponse {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.Share instruments = 1;
     */
    instruments: Share[];
}
/**
 * Объект передачи информации об облигации.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.Bond
 */
export interface Bond {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: string ticker = 2;
     */
    ticker: string;
    /**
     * @generated from protobuf field: string class_code = 3;
     */
    classCode: string;
    /**
     * @generated from protobuf field: string isin = 4;
     */
    isin: string;
    /**
     * @generated from protobuf field: int32 lot = 5;
     */
    lot: number;
    /**
     * @generated from protobuf field: string currency = 6;
     */
    currency: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation klong = 7;
     */
    klong?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation kshort = 8;
     */
    kshort?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dlong = 9;
     */
    dlong?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dshort = 10;
     */
    dshort?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dlong_min = 11;
     */
    dlongMin?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dshort_min = 12;
     */
    dshortMin?: Quotation;
    /**
     * @generated from protobuf field: bool short_enabled_flag = 13;
     */
    shortEnabledFlag: boolean;
    /**
     * @generated from protobuf field: string name = 15;
     */
    name: string;
    /**
     * @generated from protobuf field: string exchange = 16;
     */
    exchange: string;
    /**
     * @generated from protobuf field: int32 coupon_quantity_per_year = 17;
     */
    couponQuantityPerYear: number;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp maturity_date = 18;
     */
    maturityDate?: Timestamp;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue nominal = 19;
     */
    nominal?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue initial_nominal = 20;
     */
    initialNominal?: MoneyValue;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp state_reg_date = 21;
     */
    stateRegDate?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp placement_date = 22;
     */
    placementDate?: Timestamp;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue placement_price = 23;
     */
    placementPrice?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue aci_value = 24;
     */
    aciValue?: MoneyValue;
    /**
     * @generated from protobuf field: string country_of_risk = 25;
     */
    countryOfRisk: string;
    /**
     * @generated from protobuf field: string country_of_risk_name = 26;
     */
    countryOfRiskName: string;
    /**
     * @generated from protobuf field: string sector = 27;
     */
    sector: string;
    /**
     * @generated from protobuf field: string issue_kind = 28;
     */
    issueKind: string;
    /**
     * @generated from protobuf field: int64 issue_size = 29;
     */
    issueSize: string;
    /**
     * @generated from protobuf field: int64 issue_size_plan = 30;
     */
    issueSizePlan: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SecurityTradingStatus trading_status = 31;
     */
    tradingStatus: SecurityTradingStatus;
    /**
     * @generated from protobuf field: bool otc_flag = 32;
     */
    otcFlag: boolean;
    /**
     * @generated from protobuf field: bool buy_available_flag = 33;
     */
    buyAvailableFlag: boolean;
    /**
     * @generated from protobuf field: bool sell_available_flag = 34;
     */
    sellAvailableFlag: boolean;
    /**
     * @generated from protobuf field: bool floating_coupon_flag = 35;
     */
    floatingCouponFlag: boolean;
    /**
     * @generated from protobuf field: bool perpetual_flag = 36;
     */
    perpetualFlag: boolean;
    /**
     * @generated from protobuf field: bool amortization_flag = 37;
     */
    amortizationFlag: boolean;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation min_price_increment = 38;
     */
    minPriceIncrement?: Quotation;
    /**
     * @generated from protobuf field: bool api_trade_available_flag = 39;
     */
    apiTradeAvailableFlag: boolean;
    /**
     * @generated from protobuf field: string uid = 40;
     */
    uid: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.RealExchange real_exchange = 41;
     */
    realExchange: RealExchange;
    /**
     * @generated from protobuf field: string position_uid = 42;
     */
    positionUid: string;
    /**
     * @generated from protobuf field: bool for_iis_flag = 51;
     */
    forIisFlag: boolean;
    /**
     * @generated from protobuf field: bool for_qual_investor_flag = 52;
     */
    forQualInvestorFlag: boolean;
    /**
     * @generated from protobuf field: bool weekend_flag = 53;
     */
    weekendFlag: boolean;
    /**
     * @generated from protobuf field: bool blocked_tca_flag = 54;
     */
    blockedTcaFlag: boolean;
    /**
     * @generated from protobuf field: bool subordinated_flag = 55;
     */
    subordinatedFlag: boolean;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp first_1min_candle_date = 61 [json_name = "first1minCandleDate"];
     */
    first1MinCandleDate?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp first_1day_candle_date = 62 [json_name = "first1dayCandleDate"];
     */
    first1DayCandleDate?: Timestamp;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.RiskLevel risk_level = 63;
     */
    riskLevel: RiskLevel;
}
/**
 * Объект передачи информации о валюте.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.Currency
 */
export interface Currency {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: string ticker = 2;
     */
    ticker: string;
    /**
     * @generated from protobuf field: string class_code = 3;
     */
    classCode: string;
    /**
     * @generated from protobuf field: string isin = 4;
     */
    isin: string;
    /**
     * @generated from protobuf field: int32 lot = 5;
     */
    lot: number;
    /**
     * @generated from protobuf field: string currency = 6;
     */
    currency: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation klong = 7;
     */
    klong?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation kshort = 8;
     */
    kshort?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dlong = 9;
     */
    dlong?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dshort = 10;
     */
    dshort?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dlong_min = 11;
     */
    dlongMin?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dshort_min = 12;
     */
    dshortMin?: Quotation;
    /**
     * @generated from protobuf field: bool short_enabled_flag = 13;
     */
    shortEnabledFlag: boolean;
    /**
     * @generated from protobuf field: string name = 15;
     */
    name: string;
    /**
     * @generated from protobuf field: string exchange = 16;
     */
    exchange: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue nominal = 17;
     */
    nominal?: MoneyValue;
    /**
     * @generated from protobuf field: string country_of_risk = 18;
     */
    countryOfRisk: string;
    /**
     * @generated from protobuf field: string country_of_risk_name = 19;
     */
    countryOfRiskName: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SecurityTradingStatus trading_status = 20;
     */
    tradingStatus: SecurityTradingStatus;
    /**
     * @generated from protobuf field: bool otc_flag = 21;
     */
    otcFlag: boolean;
    /**
     * @generated from protobuf field: bool buy_available_flag = 22;
     */
    buyAvailableFlag: boolean;
    /**
     * @generated from protobuf field: bool sell_available_flag = 23;
     */
    sellAvailableFlag: boolean;
    /**
     * @generated from protobuf field: string iso_currency_name = 24;
     */
    isoCurrencyName: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation min_price_increment = 25;
     */
    minPriceIncrement?: Quotation;
    /**
     * @generated from protobuf field: bool api_trade_available_flag = 26;
     */
    apiTradeAvailableFlag: boolean;
    /**
     * @generated from protobuf field: string uid = 27;
     */
    uid: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.RealExchange real_exchange = 28;
     */
    realExchange: RealExchange;
    /**
     * @generated from protobuf field: string position_uid = 29;
     */
    positionUid: string;
    /**
     * @generated from protobuf field: bool for_iis_flag = 41;
     */
    forIisFlag: boolean;
    /**
     * @generated from protobuf field: bool for_qual_investor_flag = 52;
     */
    forQualInvestorFlag: boolean;
    /**
     * @generated from protobuf field: bool weekend_flag = 53;
     */
    weekendFlag: boolean;
    /**
     * @generated from protobuf field: bool blocked_tca_flag = 54;
     */
    blockedTcaFlag: boolean;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp first_1min_candle_date = 56 [json_name = "first1minCandleDate"];
     */
    first1MinCandleDate?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp first_1day_candle_date = 57 [json_name = "first1dayCandleDate"];
     */
    first1DayCandleDate?: Timestamp;
}
/**
 * Объект передачи информации об инвестиционном фонде.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.Etf
 */
export interface Etf {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: string ticker = 2;
     */
    ticker: string;
    /**
     * @generated from protobuf field: string class_code = 3;
     */
    classCode: string;
    /**
     * @generated from protobuf field: string isin = 4;
     */
    isin: string;
    /**
     * @generated from protobuf field: int32 lot = 5;
     */
    lot: number;
    /**
     * @generated from protobuf field: string currency = 6;
     */
    currency: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation klong = 7;
     */
    klong?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation kshort = 8;
     */
    kshort?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dlong = 9;
     */
    dlong?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dshort = 10;
     */
    dshort?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dlong_min = 11;
     */
    dlongMin?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dshort_min = 12;
     */
    dshortMin?: Quotation;
    /**
     * @generated from protobuf field: bool short_enabled_flag = 13;
     */
    shortEnabledFlag: boolean;
    /**
     * @generated from protobuf field: string name = 15;
     */
    name: string;
    /**
     * @generated from protobuf field: string exchange = 16;
     */
    exchange: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation fixed_commission = 17;
     */
    fixedCommission?: Quotation;
    /**
     * @generated from protobuf field: string focus_type = 18;
     */
    focusType: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp released_date = 19;
     */
    releasedDate?: Timestamp;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation num_shares = 20;
     */
    numShares?: Quotation;
    /**
     * @generated from protobuf field: string country_of_risk = 21;
     */
    countryOfRisk: string;
    /**
     * @generated from protobuf field: string country_of_risk_name = 22;
     */
    countryOfRiskName: string;
    /**
     * @generated from protobuf field: string sector = 23;
     */
    sector: string;
    /**
     * @generated from protobuf field: string rebalancing_freq = 24;
     */
    rebalancingFreq: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SecurityTradingStatus trading_status = 25;
     */
    tradingStatus: SecurityTradingStatus;
    /**
     * @generated from protobuf field: bool otc_flag = 26;
     */
    otcFlag: boolean;
    /**
     * @generated from protobuf field: bool buy_available_flag = 27;
     */
    buyAvailableFlag: boolean;
    /**
     * @generated from protobuf field: bool sell_available_flag = 28;
     */
    sellAvailableFlag: boolean;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation min_price_increment = 29;
     */
    minPriceIncrement?: Quotation;
    /**
     * @generated from protobuf field: bool api_trade_available_flag = 30;
     */
    apiTradeAvailableFlag: boolean;
    /**
     * @generated from protobuf field: string uid = 31;
     */
    uid: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.RealExchange real_exchange = 32;
     */
    realExchange: RealExchange;
    /**
     * @generated from protobuf field: string position_uid = 33;
     */
    positionUid: string;
    /**
     * @generated from protobuf field: bool for_iis_flag = 41;
     */
    forIisFlag: boolean;
    /**
     * @generated from protobuf field: bool for_qual_investor_flag = 42;
     */
    forQualInvestorFlag: boolean;
    /**
     * @generated from protobuf field: bool weekend_flag = 43;
     */
    weekendFlag: boolean;
    /**
     * @generated from protobuf field: bool blocked_tca_flag = 44;
     */
    blockedTcaFlag: boolean;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp first_1min_candle_date = 56 [json_name = "first1minCandleDate"];
     */
    first1MinCandleDate?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp first_1day_candle_date = 57 [json_name = "first1dayCandleDate"];
     */
    first1DayCandleDate?: Timestamp;
}
/**
 * Объект передачи информации о фьючерсе.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.Future
 */
export interface Future {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: string ticker = 2;
     */
    ticker: string;
    /**
     * @generated from protobuf field: string class_code = 3;
     */
    classCode: string;
    /**
     * @generated from protobuf field: int32 lot = 4;
     */
    lot: number;
    /**
     * @generated from protobuf field: string currency = 5;
     */
    currency: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation klong = 6;
     */
    klong?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation kshort = 7;
     */
    kshort?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dlong = 8;
     */
    dlong?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dshort = 9;
     */
    dshort?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dlong_min = 10;
     */
    dlongMin?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dshort_min = 11;
     */
    dshortMin?: Quotation;
    /**
     * @generated from protobuf field: bool short_enabled_flag = 12;
     */
    shortEnabledFlag: boolean;
    /**
     * @generated from protobuf field: string name = 13;
     */
    name: string;
    /**
     * @generated from protobuf field: string exchange = 14;
     */
    exchange: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp first_trade_date = 15;
     */
    firstTradeDate?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp last_trade_date = 16;
     */
    lastTradeDate?: Timestamp;
    /**
     * @generated from protobuf field: string futures_type = 17;
     */
    futuresType: string;
    /**
     * @generated from protobuf field: string asset_type = 18;
     */
    assetType: string;
    /**
     * @generated from protobuf field: string basic_asset = 19;
     */
    basicAsset: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation basic_asset_size = 20;
     */
    basicAssetSize?: Quotation;
    /**
     * @generated from protobuf field: string country_of_risk = 21;
     */
    countryOfRisk: string;
    /**
     * @generated from protobuf field: string country_of_risk_name = 22;
     */
    countryOfRiskName: string;
    /**
     * @generated from protobuf field: string sector = 23;
     */
    sector: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp expiration_date = 24;
     */
    expirationDate?: Timestamp;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SecurityTradingStatus trading_status = 25;
     */
    tradingStatus: SecurityTradingStatus;
    /**
     * @generated from protobuf field: bool otc_flag = 26;
     */
    otcFlag: boolean;
    /**
     * @generated from protobuf field: bool buy_available_flag = 27;
     */
    buyAvailableFlag: boolean;
    /**
     * @generated from protobuf field: bool sell_available_flag = 28;
     */
    sellAvailableFlag: boolean;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation min_price_increment = 29;
     */
    minPriceIncrement?: Quotation;
    /**
     * @generated from protobuf field: bool api_trade_available_flag = 30;
     */
    apiTradeAvailableFlag: boolean;
    /**
     * @generated from protobuf field: string uid = 31;
     */
    uid: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.RealExchange real_exchange = 32;
     */
    realExchange: RealExchange;
    /**
     * @generated from protobuf field: string position_uid = 33;
     */
    positionUid: string;
    /**
     * @generated from protobuf field: string basic_asset_position_uid = 34;
     */
    basicAssetPositionUid: string;
    /**
     * @generated from protobuf field: bool for_iis_flag = 41;
     */
    forIisFlag: boolean;
    /**
     * @generated from protobuf field: bool for_qual_investor_flag = 42;
     */
    forQualInvestorFlag: boolean;
    /**
     * @generated from protobuf field: bool weekend_flag = 43;
     */
    weekendFlag: boolean;
    /**
     * @generated from protobuf field: bool blocked_tca_flag = 44;
     */
    blockedTcaFlag: boolean;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp first_1min_candle_date = 56 [json_name = "first1minCandleDate"];
     */
    first1MinCandleDate?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp first_1day_candle_date = 57 [json_name = "first1dayCandleDate"];
     */
    first1DayCandleDate?: Timestamp;
}
/**
 * Объект передачи информации об акции.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.Share
 */
export interface Share {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: string ticker = 2;
     */
    ticker: string;
    /**
     * @generated from protobuf field: string class_code = 3;
     */
    classCode: string;
    /**
     * @generated from protobuf field: string isin = 4;
     */
    isin: string;
    /**
     * @generated from protobuf field: int32 lot = 5;
     */
    lot: number;
    /**
     * @generated from protobuf field: string currency = 6;
     */
    currency: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation klong = 7;
     */
    klong?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation kshort = 8;
     */
    kshort?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dlong = 9;
     */
    dlong?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dshort = 10;
     */
    dshort?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dlong_min = 11;
     */
    dlongMin?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dshort_min = 12;
     */
    dshortMin?: Quotation;
    /**
     * @generated from protobuf field: bool short_enabled_flag = 13;
     */
    shortEnabledFlag: boolean;
    /**
     * @generated from protobuf field: string name = 15;
     */
    name: string;
    /**
     * @generated from protobuf field: string exchange = 16;
     */
    exchange: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp ipo_date = 17;
     */
    ipoDate?: Timestamp;
    /**
     * @generated from protobuf field: int64 issue_size = 18;
     */
    issueSize: string;
    /**
     * @generated from protobuf field: string country_of_risk = 19;
     */
    countryOfRisk: string;
    /**
     * @generated from protobuf field: string country_of_risk_name = 20;
     */
    countryOfRiskName: string;
    /**
     * @generated from protobuf field: string sector = 21;
     */
    sector: string;
    /**
     * @generated from protobuf field: int64 issue_size_plan = 22;
     */
    issueSizePlan: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue nominal = 23;
     */
    nominal?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SecurityTradingStatus trading_status = 25;
     */
    tradingStatus: SecurityTradingStatus;
    /**
     * @generated from protobuf field: bool otc_flag = 26;
     */
    otcFlag: boolean;
    /**
     * @generated from protobuf field: bool buy_available_flag = 27;
     */
    buyAvailableFlag: boolean;
    /**
     * @generated from protobuf field: bool sell_available_flag = 28;
     */
    sellAvailableFlag: boolean;
    /**
     * @generated from protobuf field: bool div_yield_flag = 29;
     */
    divYieldFlag: boolean;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.ShareType share_type = 30;
     */
    shareType: ShareType;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation min_price_increment = 31;
     */
    minPriceIncrement?: Quotation;
    /**
     * @generated from protobuf field: bool api_trade_available_flag = 32;
     */
    apiTradeAvailableFlag: boolean;
    /**
     * @generated from protobuf field: string uid = 33;
     */
    uid: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.RealExchange real_exchange = 34;
     */
    realExchange: RealExchange;
    /**
     * @generated from protobuf field: string position_uid = 35;
     */
    positionUid: string;
    /**
     * @generated from protobuf field: bool for_iis_flag = 46;
     */
    forIisFlag: boolean;
    /**
     * @generated from protobuf field: bool for_qual_investor_flag = 47;
     */
    forQualInvestorFlag: boolean;
    /**
     * @generated from protobuf field: bool weekend_flag = 48;
     */
    weekendFlag: boolean;
    /**
     * @generated from protobuf field: bool blocked_tca_flag = 49;
     */
    blockedTcaFlag: boolean;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp first_1min_candle_date = 56 [json_name = "first1minCandleDate"];
     */
    first1MinCandleDate?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp first_1day_candle_date = 57 [json_name = "first1dayCandleDate"];
     */
    first1DayCandleDate?: Timestamp;
}
/**
 * Запрос НКД по облигации
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetAccruedInterestsRequest
 */
export interface GetAccruedInterestsRequest {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
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
 * НКД облигации
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetAccruedInterestsResponse
 */
export interface GetAccruedInterestsResponse {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.AccruedInterest accrued_interests = 1;
     */
    accruedInterests: AccruedInterest[];
}
/**
 * Операция начисления купонов.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.AccruedInterest
 */
export interface AccruedInterest {
    /**
     * @generated from protobuf field: google.protobuf.Timestamp date = 1;
     */
    date?: Timestamp;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation value = 2;
     */
    value?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation value_percent = 3;
     */
    valuePercent?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation nominal = 4;
     */
    nominal?: Quotation;
}
/**
 * Запрос информации о фьючерсе
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetFuturesMarginRequest
 */
export interface GetFuturesMarginRequest {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
}
/**
 * Данные по фьючерсу
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetFuturesMarginResponse
 */
export interface GetFuturesMarginResponse {
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue initial_margin_on_buy = 1;
     */
    initialMarginOnBuy?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue initial_margin_on_sell = 2;
     */
    initialMarginOnSell?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation min_price_increment = 3;
     */
    minPriceIncrement?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation min_price_increment_amount = 4;
     */
    minPriceIncrementAmount?: Quotation;
}
/**
 * Данные по инструменту.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.InstrumentResponse
 */
export interface InstrumentResponse {
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Instrument instrument = 1;
     */
    instrument?: Instrument;
}
/**
 * Объект передачи основной информации об инструменте.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.Instrument
 */
export interface Instrument {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: string ticker = 2;
     */
    ticker: string;
    /**
     * @generated from protobuf field: string class_code = 3;
     */
    classCode: string;
    /**
     * @generated from protobuf field: string isin = 4;
     */
    isin: string;
    /**
     * @generated from protobuf field: int32 lot = 5;
     */
    lot: number;
    /**
     * @generated from protobuf field: string currency = 6;
     */
    currency: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation klong = 7;
     */
    klong?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation kshort = 8;
     */
    kshort?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dlong = 9;
     */
    dlong?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dshort = 10;
     */
    dshort?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dlong_min = 11;
     */
    dlongMin?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dshort_min = 12;
     */
    dshortMin?: Quotation;
    /**
     * @generated from protobuf field: bool short_enabled_flag = 13;
     */
    shortEnabledFlag: boolean;
    /**
     * @generated from protobuf field: string name = 14;
     */
    name: string;
    /**
     * @generated from protobuf field: string exchange = 15;
     */
    exchange: string;
    /**
     * @generated from protobuf field: string country_of_risk = 16;
     */
    countryOfRisk: string;
    /**
     * @generated from protobuf field: string country_of_risk_name = 17;
     */
    countryOfRiskName: string;
    /**
     * @generated from protobuf field: string instrument_type = 18;
     */
    instrumentType: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SecurityTradingStatus trading_status = 19;
     */
    tradingStatus: SecurityTradingStatus;
    /**
     * @generated from protobuf field: bool otc_flag = 20;
     */
    otcFlag: boolean;
    /**
     * @generated from protobuf field: bool buy_available_flag = 21;
     */
    buyAvailableFlag: boolean;
    /**
     * @generated from protobuf field: bool sell_available_flag = 22;
     */
    sellAvailableFlag: boolean;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation min_price_increment = 23;
     */
    minPriceIncrement?: Quotation;
    /**
     * @generated from protobuf field: bool api_trade_available_flag = 24;
     */
    apiTradeAvailableFlag: boolean;
    /**
     * @generated from protobuf field: string uid = 25;
     */
    uid: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.RealExchange real_exchange = 26;
     */
    realExchange: RealExchange;
    /**
     * @generated from protobuf field: string position_uid = 27;
     */
    positionUid: string;
    /**
     * @generated from protobuf field: bool for_iis_flag = 36;
     */
    forIisFlag: boolean;
    /**
     * @generated from protobuf field: bool for_qual_investor_flag = 37;
     */
    forQualInvestorFlag: boolean;
    /**
     * @generated from protobuf field: bool weekend_flag = 38;
     */
    weekendFlag: boolean;
    /**
     * @generated from protobuf field: bool blocked_tca_flag = 39;
     */
    blockedTcaFlag: boolean;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.InstrumentType instrument_kind = 40;
     */
    instrumentKind: InstrumentType;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp first_1min_candle_date = 56 [json_name = "first1minCandleDate"];
     */
    first1MinCandleDate?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp first_1day_candle_date = 57 [json_name = "first1dayCandleDate"];
     */
    first1DayCandleDate?: Timestamp;
}
/**
 * Запрос дивидендов.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetDividendsRequest
 */
export interface GetDividendsRequest {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
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
 * Дивиденды.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetDividendsResponse
 */
export interface GetDividendsResponse {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.Dividend dividends = 1;
     */
    dividends: Dividend[];
}
/**
 * Информация о выплате.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.Dividend
 */
export interface Dividend {
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue dividend_net = 1;
     */
    dividendNet?: MoneyValue;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp payment_date = 2;
     */
    paymentDate?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp declared_date = 3;
     */
    declaredDate?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp last_buy_date = 4;
     */
    lastBuyDate?: Timestamp;
    /**
     * @generated from protobuf field: string dividend_type = 5;
     */
    dividendType: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp record_date = 6;
     */
    recordDate?: Timestamp;
    /**
     * @generated from protobuf field: string regularity = 7;
     */
    regularity: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue close_price = 8;
     */
    closePrice?: MoneyValue;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation yield_value = 9;
     */
    yieldValue?: Quotation;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 10;
     */
    createdAt?: Timestamp;
}
/**
 * Запрос актива по идентификатору.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.AssetRequest
 */
export interface AssetRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * Данные по активу.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.AssetResponse
 */
export interface AssetResponse {
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.AssetFull asset = 1;
     */
    asset?: AssetFull;
}
/**
 * Запрос списка активов.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.AssetsRequest
 */
export interface AssetsRequest {
}
/**
 * Список активов.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.AssetsResponse
 */
export interface AssetsResponse {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.Asset assets = 1;
     */
    assets: Asset[];
}
/**
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.AssetFull
 */
export interface AssetFull {
    /**
     * @generated from protobuf field: string uid = 1;
     */
    uid: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.AssetType type = 2;
     */
    type: AssetType;
    /**
     * @generated from protobuf field: string name = 3;
     */
    name: string;
    /**
     * @generated from protobuf field: string name_brief = 4;
     */
    nameBrief: string;
    /**
     * @generated from protobuf field: string description = 5;
     */
    description: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp deleted_at = 6;
     */
    deletedAt?: Timestamp;
    /**
     * @generated from protobuf field: repeated string required_tests = 7;
     */
    requiredTests: string[];
    /**
     * @generated from protobuf oneof: ext
     */
    ext: {
        oneofKind: "currency";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.AssetCurrency currency = 8;
         */
        currency: AssetCurrency;
    } | {
        oneofKind: "security";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.AssetSecurity security = 9;
         */
        security: AssetSecurity;
    } | {
        oneofKind: undefined;
    };
    /**
     * @generated from protobuf field: string gos_reg_code = 10;
     */
    gosRegCode: string;
    /**
     * @generated from protobuf field: string cfi = 11;
     */
    cfi: string;
    /**
     * @generated from protobuf field: string code_nsd = 12;
     */
    codeNsd: string;
    /**
     * @generated from protobuf field: string status = 13;
     */
    status: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Brand brand = 14;
     */
    brand?: Brand;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp updated_at = 15;
     */
    updatedAt?: Timestamp;
    /**
     * @generated from protobuf field: string br_code = 16;
     */
    brCode: string;
    /**
     * @generated from protobuf field: string br_code_name = 17;
     */
    brCodeName: string;
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.AssetInstrument instruments = 18;
     */
    instruments: AssetInstrument[];
}
/**
 * Информация об активе.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.Asset
 */
export interface Asset {
    /**
     * @generated from protobuf field: string uid = 1;
     */
    uid: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.AssetType type = 2;
     */
    type: AssetType;
    /**
     * @generated from protobuf field: string name = 3;
     */
    name: string;
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.AssetInstrument instruments = 4;
     */
    instruments: AssetInstrument[];
}
/**
 * Валюта.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.AssetCurrency
 */
export interface AssetCurrency {
    /**
     * @generated from protobuf field: string base_currency = 1;
     */
    baseCurrency: string;
}
/**
 * Ценная бумага.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.AssetSecurity
 */
export interface AssetSecurity {
    /**
     * @generated from protobuf field: string isin = 1;
     */
    isin: string;
    /**
     * @generated from protobuf field: string type = 2;
     */
    type: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.InstrumentType instrument_kind = 10;
     */
    instrumentKind: InstrumentType;
    /**
     * @generated from protobuf oneof: ext
     */
    ext: {
        oneofKind: "share";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.AssetShare share = 3;
         */
        share: AssetShare;
    } | {
        oneofKind: "bond";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.AssetBond bond = 4;
         */
        bond: AssetBond;
    } | {
        oneofKind: "sp";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.AssetStructuredProduct sp = 5;
         */
        sp: AssetStructuredProduct;
    } | {
        oneofKind: "etf";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.AssetEtf etf = 6;
         */
        etf: AssetEtf;
    } | {
        oneofKind: "clearingCertificate";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.AssetClearingCertificate clearing_certificate = 7;
         */
        clearingCertificate: AssetClearingCertificate;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Акция.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.AssetShare
 */
export interface AssetShare {
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.ShareType type = 1;
     */
    type: ShareType;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation issue_size = 2;
     */
    issueSize?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation nominal = 3;
     */
    nominal?: Quotation;
    /**
     * @generated from protobuf field: string nominal_currency = 4;
     */
    nominalCurrency: string;
    /**
     * @generated from protobuf field: string primary_index = 5;
     */
    primaryIndex: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation dividend_rate = 6;
     */
    dividendRate?: Quotation;
    /**
     * @generated from protobuf field: string preferred_share_type = 7;
     */
    preferredShareType: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp ipo_date = 8;
     */
    ipoDate?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp registry_date = 9;
     */
    registryDate?: Timestamp;
    /**
     * @generated from protobuf field: bool div_yield_flag = 10;
     */
    divYieldFlag: boolean;
    /**
     * @generated from protobuf field: string issue_kind = 11;
     */
    issueKind: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp placement_date = 12;
     */
    placementDate?: Timestamp;
    /**
     * @generated from protobuf field: string repres_isin = 13;
     */
    represIsin: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation issue_size_plan = 14;
     */
    issueSizePlan?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation total_float = 15;
     */
    totalFloat?: Quotation;
}
/**
 * Облигация.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.AssetBond
 */
export interface AssetBond {
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation current_nominal = 1;
     */
    currentNominal?: Quotation;
    /**
     * @generated from protobuf field: string borrow_name = 2;
     */
    borrowName: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation issue_size = 3;
     */
    issueSize?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation nominal = 4;
     */
    nominal?: Quotation;
    /**
     * @generated from protobuf field: string nominal_currency = 5;
     */
    nominalCurrency: string;
    /**
     * @generated from protobuf field: string issue_kind = 6;
     */
    issueKind: string;
    /**
     * @generated from protobuf field: string interest_kind = 7;
     */
    interestKind: string;
    /**
     * @generated from protobuf field: int32 coupon_quantity_per_year = 8;
     */
    couponQuantityPerYear: number;
    /**
     * @generated from protobuf field: bool indexed_nominal_flag = 9;
     */
    indexedNominalFlag: boolean;
    /**
     * @generated from protobuf field: bool subordinated_flag = 10;
     */
    subordinatedFlag: boolean;
    /**
     * @generated from protobuf field: bool collateral_flag = 11;
     */
    collateralFlag: boolean;
    /**
     * @generated from protobuf field: bool tax_free_flag = 12;
     */
    taxFreeFlag: boolean;
    /**
     * @generated from protobuf field: bool amortization_flag = 13;
     */
    amortizationFlag: boolean;
    /**
     * @generated from protobuf field: bool floating_coupon_flag = 14;
     */
    floatingCouponFlag: boolean;
    /**
     * @generated from protobuf field: bool perpetual_flag = 15;
     */
    perpetualFlag: boolean;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp maturity_date = 16;
     */
    maturityDate?: Timestamp;
    /**
     * @generated from protobuf field: string return_condition = 17;
     */
    returnCondition: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp state_reg_date = 18;
     */
    stateRegDate?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp placement_date = 19;
     */
    placementDate?: Timestamp;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation placement_price = 20;
     */
    placementPrice?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation issue_size_plan = 21;
     */
    issueSizePlan?: Quotation;
}
/**
 * Структурная нота.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.AssetStructuredProduct
 */
export interface AssetStructuredProduct {
    /**
     * @generated from protobuf field: string borrow_name = 1;
     */
    borrowName: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation nominal = 2;
     */
    nominal?: Quotation;
    /**
     * @generated from protobuf field: string nominal_currency = 3;
     */
    nominalCurrency: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.StructuredProductType type = 4;
     */
    type: StructuredProductType;
    /**
     * @generated from protobuf field: string logic_portfolio = 5;
     */
    logicPortfolio: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.AssetType asset_type = 6;
     */
    assetType: AssetType;
    /**
     * @generated from protobuf field: string basic_asset = 7;
     */
    basicAsset: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation safety_barrier = 8;
     */
    safetyBarrier?: Quotation;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp maturity_date = 9;
     */
    maturityDate?: Timestamp;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation issue_size_plan = 10;
     */
    issueSizePlan?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation issue_size = 11;
     */
    issueSize?: Quotation;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp placement_date = 12;
     */
    placementDate?: Timestamp;
    /**
     * @generated from protobuf field: string issue_kind = 13;
     */
    issueKind: string;
}
/**
 * Фонд.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.AssetEtf
 */
export interface AssetEtf {
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation total_expense = 1;
     */
    totalExpense?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation hurdle_rate = 2;
     */
    hurdleRate?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation performance_fee = 3;
     */
    performanceFee?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation fixed_commission = 4;
     */
    fixedCommission?: Quotation;
    /**
     * @generated from protobuf field: string payment_type = 5;
     */
    paymentType: string;
    /**
     * @generated from protobuf field: bool watermark_flag = 6;
     */
    watermarkFlag: boolean;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation buy_premium = 7;
     */
    buyPremium?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation sell_discount = 8;
     */
    sellDiscount?: Quotation;
    /**
     * @generated from protobuf field: bool rebalancing_flag = 9;
     */
    rebalancingFlag: boolean;
    /**
     * @generated from protobuf field: string rebalancing_freq = 10;
     */
    rebalancingFreq: string;
    /**
     * @generated from protobuf field: string management_type = 11;
     */
    managementType: string;
    /**
     * @generated from protobuf field: string primary_index = 12;
     */
    primaryIndex: string;
    /**
     * @generated from protobuf field: string focus_type = 13;
     */
    focusType: string;
    /**
     * @generated from protobuf field: bool leveraged_flag = 14;
     */
    leveragedFlag: boolean;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation num_share = 15;
     */
    numShare?: Quotation;
    /**
     * @generated from protobuf field: bool ucits_flag = 16;
     */
    ucitsFlag: boolean;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp released_date = 17;
     */
    releasedDate?: Timestamp;
    /**
     * @generated from protobuf field: string description = 18;
     */
    description: string;
    /**
     * @generated from protobuf field: string primary_index_description = 19;
     */
    primaryIndexDescription: string;
    /**
     * @generated from protobuf field: string primary_index_company = 20;
     */
    primaryIndexCompany: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation index_recovery_period = 21;
     */
    indexRecoveryPeriod?: Quotation;
    /**
     * @generated from protobuf field: string inav_code = 22;
     */
    inavCode: string;
    /**
     * @generated from protobuf field: bool div_yield_flag = 23;
     */
    divYieldFlag: boolean;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation expense_commission = 24;
     */
    expenseCommission?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation primary_index_tracking_error = 25;
     */
    primaryIndexTrackingError?: Quotation;
    /**
     * @generated from protobuf field: string rebalancing_plan = 26;
     */
    rebalancingPlan: string;
    /**
     * @generated from protobuf field: string tax_rate = 27;
     */
    taxRate: string;
    /**
     * @generated from protobuf field: repeated google.protobuf.Timestamp rebalancing_dates = 28;
     */
    rebalancingDates: Timestamp[];
    /**
     * @generated from protobuf field: string issue_kind = 29;
     */
    issueKind: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation nominal = 30;
     */
    nominal?: Quotation;
    /**
     * @generated from protobuf field: string nominal_currency = 31;
     */
    nominalCurrency: string;
}
/**
 * Клиринговый сертификат участия.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.AssetClearingCertificate
 */
export interface AssetClearingCertificate {
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation nominal = 1;
     */
    nominal?: Quotation;
    /**
     * @generated from protobuf field: string nominal_currency = 2;
     */
    nominalCurrency: string;
}
/**
 * Бренд.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.Brand
 */
export interface Brand {
    /**
     * @generated from protobuf field: string uid = 1;
     */
    uid: string;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * @generated from protobuf field: string description = 3;
     */
    description: string;
    /**
     * @generated from protobuf field: string info = 4;
     */
    info: string;
    /**
     * @generated from protobuf field: string company = 5;
     */
    company: string;
    /**
     * @generated from protobuf field: string sector = 6;
     */
    sector: string;
    /**
     * @generated from protobuf field: string country_of_risk = 7;
     */
    countryOfRisk: string;
    /**
     * @generated from protobuf field: string country_of_risk_name = 8;
     */
    countryOfRiskName: string;
}
/**
 * Идентификаторы инструмента.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.AssetInstrument
 */
export interface AssetInstrument {
    /**
     * @generated from protobuf field: string uid = 1;
     */
    uid: string;
    /**
     * @generated from protobuf field: string figi = 2;
     */
    figi: string;
    /**
     * @generated from protobuf field: string instrument_type = 3;
     */
    instrumentType: string;
    /**
     * @generated from protobuf field: string ticker = 4;
     */
    ticker: string;
    /**
     * @generated from protobuf field: string class_code = 5;
     */
    classCode: string;
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.InstrumentLink links = 6;
     */
    links: InstrumentLink[];
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.InstrumentType instrument_kind = 10;
     */
    instrumentKind: InstrumentType;
}
/**
 * Связь с другим инструментом.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.InstrumentLink
 */
export interface InstrumentLink {
    /**
     * @generated from protobuf field: string type = 1;
     */
    type: string;
    /**
     * @generated from protobuf field: string instrument_uid = 2;
     */
    instrumentUid: string;
}
/**
 * Запрос списка избранных инструментов, входные параметры не требуются.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetFavoritesRequest
 */
export interface GetFavoritesRequest {
}
/**
 * В ответ передаётся список избранных инструментов в качестве массива.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetFavoritesResponse
 */
export interface GetFavoritesResponse {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.FavoriteInstrument favorite_instruments = 1;
     */
    favoriteInstruments: FavoriteInstrument[];
}
/**
 * Массив избранных инструментов.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.FavoriteInstrument
 */
export interface FavoriteInstrument {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: string ticker = 2;
     */
    ticker: string;
    /**
     * @generated from protobuf field: string class_code = 3;
     */
    classCode: string;
    /**
     * @generated from protobuf field: string isin = 4;
     */
    isin: string;
    /**
     * @generated from protobuf field: string instrument_type = 11;
     */
    instrumentType: string;
    /**
     * @generated from protobuf field: bool otc_flag = 16;
     */
    otcFlag: boolean;
    /**
     * @generated from protobuf field: bool api_trade_available_flag = 17;
     */
    apiTradeAvailableFlag: boolean;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.InstrumentType instrument_kind = 18;
     */
    instrumentKind: InstrumentType;
}
/**
 * Запрос редактирования списка избранных инструментов.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.EditFavoritesRequest
 */
export interface EditFavoritesRequest {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.EditFavoritesRequestInstrument instruments = 1;
     */
    instruments: EditFavoritesRequestInstrument[];
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.EditFavoritesActionType action_type = 6;
     */
    actionType: EditFavoritesActionType;
}
/**
 * Массив инструментов для редактирования списка избранных инструментов.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.EditFavoritesRequestInstrument
 */
export interface EditFavoritesRequestInstrument {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
}
/**
 * Результат редактирования списка избранных инструментов.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.EditFavoritesResponse
 */
export interface EditFavoritesResponse {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.FavoriteInstrument favorite_instruments = 1;
     */
    favoriteInstruments: FavoriteInstrument[];
}
/**
 * Запрос справочника стран.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetCountriesRequest
 */
export interface GetCountriesRequest {
}
/**
 * Справочник стран.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetCountriesResponse
 */
export interface GetCountriesResponse {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.CountryResponse countries = 1;
     */
    countries: CountryResponse[];
}
/**
 * Данные о стране.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.CountryResponse
 */
export interface CountryResponse {
    /**
     * @generated from protobuf field: string alfa_two = 1;
     */
    alfaTwo: string;
    /**
     * @generated from protobuf field: string alfa_three = 2;
     */
    alfaThree: string;
    /**
     * @generated from protobuf field: string name = 3;
     */
    name: string;
    /**
     * @generated from protobuf field: string name_brief = 4;
     */
    nameBrief: string;
}
/**
 * Запрос на поиск инструментов.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.FindInstrumentRequest
 */
export interface FindInstrumentRequest {
    /**
     * @generated from protobuf field: string query = 1;
     */
    query: string;
}
/**
 * Результат поиска инструментов.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.FindInstrumentResponse
 */
export interface FindInstrumentResponse {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.InstrumentShort instruments = 1;
     */
    instruments: InstrumentShort[];
}
/**
 * Краткая информация об инструменте.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.InstrumentShort
 */
export interface InstrumentShort {
    /**
     * @generated from protobuf field: string isin = 1;
     */
    isin: string;
    /**
     * @generated from protobuf field: string figi = 2;
     */
    figi: string;
    /**
     * @generated from protobuf field: string ticker = 3;
     */
    ticker: string;
    /**
     * @generated from protobuf field: string class_code = 4;
     */
    classCode: string;
    /**
     * @generated from protobuf field: string instrument_type = 5;
     */
    instrumentType: string;
    /**
     * @generated from protobuf field: string name = 6;
     */
    name: string;
    /**
     * @generated from protobuf field: string uid = 7;
     */
    uid: string;
    /**
     * @generated from protobuf field: string position_uid = 8;
     */
    positionUid: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.InstrumentType instrument_kind = 10;
     */
    instrumentKind: InstrumentType;
    /**
     * @generated from protobuf field: bool api_trade_available_flag = 11;
     */
    apiTradeAvailableFlag: boolean;
    /**
     * @generated from protobuf field: bool for_iis_flag = 12;
     */
    forIisFlag: boolean;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp first_1min_candle_date = 26 [json_name = "first1minCandleDate"];
     */
    first1MinCandleDate?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp first_1day_candle_date = 27 [json_name = "first1dayCandleDate"];
     */
    first1DayCandleDate?: Timestamp;
    /**
     * @generated from protobuf field: bool for_qual_investor_flag = 28;
     */
    forQualInvestorFlag: boolean;
    /**
     * @generated from protobuf field: bool weekend_flag = 29;
     */
    weekendFlag: boolean;
    /**
     * @generated from protobuf field: bool blocked_tca_flag = 30;
     */
    blockedTcaFlag: boolean;
}
/**
 * Запрос списка брендов.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetBrandsRequest
 */
export interface GetBrandsRequest {
}
/**
 * Запрос бренда.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetBrandRequest
 */
export interface GetBrandRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * Список брендов.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetBrandsResponse
 */
export interface GetBrandsResponse {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.Brand brands = 1;
     */
    brands: Brand[];
}
/**
 * Тип купонов.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.CouponType
 */
export declare enum CouponType {
    /**
     * Неопределенное значение
     *
     * @generated from protobuf enum value: COUPON_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Постоянный
     *
     * @generated from protobuf enum value: COUPON_TYPE_CONSTANT = 1;
     */
    CONSTANT = 1,
    /**
     * Плавающий
     *
     * @generated from protobuf enum value: COUPON_TYPE_FLOATING = 2;
     */
    FLOATING = 2,
    /**
     * Дисконт
     *
     * @generated from protobuf enum value: COUPON_TYPE_DISCOUNT = 3;
     */
    DISCOUNT = 3,
    /**
     * Ипотечный
     *
     * @generated from protobuf enum value: COUPON_TYPE_MORTGAGE = 4;
     */
    MORTGAGE = 4,
    /**
     * Фиксированный
     *
     * @generated from protobuf enum value: COUPON_TYPE_FIX = 5;
     */
    FIX = 5,
    /**
     * Переменный
     *
     * @generated from protobuf enum value: COUPON_TYPE_VARIABLE = 6;
     */
    VARIABLE = 6,
    /**
     * Прочее
     *
     * @generated from protobuf enum value: COUPON_TYPE_OTHER = 7;
     */
    OTHER = 7
}
/**
 * Тип опциона по направлению сделки.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.OptionDirection
 */
export declare enum OptionDirection {
    /**
     * Тип не определен.
     *
     * @generated from protobuf enum value: OPTION_DIRECTION_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Опцион на продажу.
     *
     * @generated from protobuf enum value: OPTION_DIRECTION_PUT = 1;
     */
    PUT = 1,
    /**
     * Опцион на покупку.
     *
     * @generated from protobuf enum value: OPTION_DIRECTION_CALL = 2;
     */
    CALL = 2
}
/**
 * Тип расчетов по опциону.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.OptionPaymentType
 */
export declare enum OptionPaymentType {
    /**
     * Тип не определен.
     *
     * @generated from protobuf enum value: OPTION_PAYMENT_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Опционы с использованием премии в расчетах.
     *
     * @generated from protobuf enum value: OPTION_PAYMENT_TYPE_PREMIUM = 1;
     */
    PREMIUM = 1,
    /**
     * Маржируемые опционы.
     *
     * @generated from protobuf enum value: OPTION_PAYMENT_TYPE_MARGINAL = 2;
     */
    MARGINAL = 2
}
/**
 * Тип опциона по стилю.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.OptionStyle
 */
export declare enum OptionStyle {
    /**
     * Тип не определен.
     *
     * @generated from protobuf enum value: OPTION_STYLE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Американский опцион.
     *
     * @generated from protobuf enum value: OPTION_STYLE_AMERICAN = 1;
     */
    AMERICAN = 1,
    /**
     * Европейский опцион.
     *
     * @generated from protobuf enum value: OPTION_STYLE_EUROPEAN = 2;
     */
    EUROPEAN = 2
}
/**
 * Тип опциона по способу исполнения.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.OptionSettlementType
 */
export declare enum OptionSettlementType {
    /**
     * Тип не определен.
     *
     * @generated from protobuf enum value: OPTION_EXECUTION_TYPE_UNSPECIFIED = 0;
     */
    OPTION_EXECUTION_TYPE_UNSPECIFIED = 0,
    /**
     * Поставочный тип опциона.
     *
     * @generated from protobuf enum value: OPTION_EXECUTION_TYPE_PHYSICAL_DELIVERY = 1;
     */
    OPTION_EXECUTION_TYPE_PHYSICAL_DELIVERY = 1,
    /**
     * Расчетный тип опциона.
     *
     * @generated from protobuf enum value: OPTION_EXECUTION_TYPE_CASH_SETTLEMENT = 2;
     */
    OPTION_EXECUTION_TYPE_CASH_SETTLEMENT = 2
}
/**
 * Тип идентификатора инструмента. Подробнее об идентификации инструментов: [Идентификация инструментов](https://tinkoff.github.io/investAPI/faq_identification/)
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.InstrumentIdType
 */
export declare enum InstrumentIdType {
    /**
     * Значение не определено.
     *
     * @generated from protobuf enum value: INSTRUMENT_ID_UNSPECIFIED = 0;
     */
    INSTRUMENT_ID_UNSPECIFIED = 0,
    /**
     * Figi.
     *
     * @generated from protobuf enum value: INSTRUMENT_ID_TYPE_FIGI = 1;
     */
    INSTRUMENT_ID_TYPE_FIGI = 1,
    /**
     * Ticker.
     *
     * @generated from protobuf enum value: INSTRUMENT_ID_TYPE_TICKER = 2;
     */
    INSTRUMENT_ID_TYPE_TICKER = 2,
    /**
     * Уникальный идентификатор.
     *
     * @generated from protobuf enum value: INSTRUMENT_ID_TYPE_UID = 3;
     */
    INSTRUMENT_ID_TYPE_UID = 3,
    /**
     * Идентификатор позиции.
     *
     * @generated from protobuf enum value: INSTRUMENT_ID_TYPE_POSITION_UID = 4;
     */
    INSTRUMENT_ID_TYPE_POSITION_UID = 4
}
/**
 * Статус запрашиваемых инструментов.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.InstrumentStatus
 */
export declare enum InstrumentStatus {
    /**
     * Значение не определено.
     *
     * @generated from protobuf enum value: INSTRUMENT_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Базовый список инструментов (по умолчанию). Инструменты доступные для торговли через TINKOFF INVEST API.
     *
     * @generated from protobuf enum value: INSTRUMENT_STATUS_BASE = 1;
     */
    BASE = 1,
    /**
     * Список всех инструментов.
     *
     * @generated from protobuf enum value: INSTRUMENT_STATUS_ALL = 2;
     */
    ALL = 2
}
/**
 * Тип акций.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.ShareType
 */
export declare enum ShareType {
    /**
     * Значение не определено.
     *
     * @generated from protobuf enum value: SHARE_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Обыкновенная
     *
     * @generated from protobuf enum value: SHARE_TYPE_COMMON = 1;
     */
    COMMON = 1,
    /**
     * Привилегированная
     *
     * @generated from protobuf enum value: SHARE_TYPE_PREFERRED = 2;
     */
    PREFERRED = 2,
    /**
     * Американские депозитарные расписки
     *
     * @generated from protobuf enum value: SHARE_TYPE_ADR = 3;
     */
    ADR = 3,
    /**
     * Глобальные депозитарные расписки
     *
     * @generated from protobuf enum value: SHARE_TYPE_GDR = 4;
     */
    GDR = 4,
    /**
     * Товарищество с ограниченной ответственностью
     *
     * @generated from protobuf enum value: SHARE_TYPE_MLP = 5;
     */
    MLP = 5,
    /**
     * Акции из реестра Нью-Йорка
     *
     * @generated from protobuf enum value: SHARE_TYPE_NY_REG_SHRS = 6;
     */
    NY_REG_SHRS = 6,
    /**
     * Закрытый инвестиционный фонд
     *
     * @generated from protobuf enum value: SHARE_TYPE_CLOSED_END_FUND = 7;
     */
    CLOSED_END_FUND = 7,
    /**
     * Траст недвижимости
     *
     * @generated from protobuf enum value: SHARE_TYPE_REIT = 8;
     */
    REIT = 8
}
/**
 * Тип актива.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.AssetType
 */
export declare enum AssetType {
    /**
     * Тип не определён.
     *
     * @generated from protobuf enum value: ASSET_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Валюта.
     *
     * @generated from protobuf enum value: ASSET_TYPE_CURRENCY = 1;
     */
    CURRENCY = 1,
    /**
     * Товар.
     *
     * @generated from protobuf enum value: ASSET_TYPE_COMMODITY = 2;
     */
    COMMODITY = 2,
    /**
     * Индекс.
     *
     * @generated from protobuf enum value: ASSET_TYPE_INDEX = 3;
     */
    INDEX = 3,
    /**
     * Ценная бумага.
     *
     * @generated from protobuf enum value: ASSET_TYPE_SECURITY = 4;
     */
    SECURITY = 4
}
/**
 * Тип структурной ноты.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.StructuredProductType
 */
export declare enum StructuredProductType {
    /**
     * Тип не определён.
     *
     * @generated from protobuf enum value: SP_TYPE_UNSPECIFIED = 0;
     */
    SP_TYPE_UNSPECIFIED = 0,
    /**
     * Поставочный.
     *
     * @generated from protobuf enum value: SP_TYPE_DELIVERABLE = 1;
     */
    SP_TYPE_DELIVERABLE = 1,
    /**
     * Беспоставочный.
     *
     * @generated from protobuf enum value: SP_TYPE_NON_DELIVERABLE = 2;
     */
    SP_TYPE_NON_DELIVERABLE = 2
}
/**
 * Тип действия со списком избранных инструментов.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.EditFavoritesActionType
 */
export declare enum EditFavoritesActionType {
    /**
     * Тип не определён.
     *
     * @generated from protobuf enum value: EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Добавить в список.
     *
     * @generated from protobuf enum value: EDIT_FAVORITES_ACTION_TYPE_ADD = 1;
     */
    ADD = 1,
    /**
     * Удалить из списка.
     *
     * @generated from protobuf enum value: EDIT_FAVORITES_ACTION_TYPE_DEL = 2;
     */
    DEL = 2
}
/**
 * Реальная площадка исполнения расчётов.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.RealExchange
 */
export declare enum RealExchange {
    /**
     * Тип не определён.
     *
     * @generated from protobuf enum value: REAL_EXCHANGE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Московская биржа.
     *
     * @generated from protobuf enum value: REAL_EXCHANGE_MOEX = 1;
     */
    MOEX = 1,
    /**
     * Санкт-Петербургская биржа.
     *
     * @generated from protobuf enum value: REAL_EXCHANGE_RTS = 2;
     */
    RTS = 2,
    /**
     * Внебиржевой инструмент.
     *
     * @generated from protobuf enum value: REAL_EXCHANGE_OTC = 3;
     */
    OTC = 3
}
/**
 * Уровень риска облигации.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.RiskLevel
 */
export declare enum RiskLevel {
    /**
     * @generated from protobuf enum value: RISK_LEVEL_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Низкий уровень риска
     *
     * @generated from protobuf enum value: RISK_LEVEL_LOW = 1;
     */
    LOW = 1,
    /**
     * Средний уровень риска
     *
     * @generated from protobuf enum value: RISK_LEVEL_MODERATE = 2;
     */
    MODERATE = 2,
    /**
     * Высокий уровень риска
     *
     * @generated from protobuf enum value: RISK_LEVEL_HIGH = 3;
     */
    HIGH = 3
}
declare class TradingSchedulesRequest$Type extends MessageType<TradingSchedulesRequest> {
    constructor();
    create(value?: PartialMessage<TradingSchedulesRequest>): TradingSchedulesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TradingSchedulesRequest): TradingSchedulesRequest;
    internalBinaryWrite(message: TradingSchedulesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.TradingSchedulesRequest
 */
export declare const TradingSchedulesRequest: TradingSchedulesRequest$Type;
declare class TradingSchedulesResponse$Type extends MessageType<TradingSchedulesResponse> {
    constructor();
    create(value?: PartialMessage<TradingSchedulesResponse>): TradingSchedulesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TradingSchedulesResponse): TradingSchedulesResponse;
    internalBinaryWrite(message: TradingSchedulesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.TradingSchedulesResponse
 */
export declare const TradingSchedulesResponse: TradingSchedulesResponse$Type;
declare class TradingSchedule$Type extends MessageType<TradingSchedule> {
    constructor();
    create(value?: PartialMessage<TradingSchedule>): TradingSchedule;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TradingSchedule): TradingSchedule;
    internalBinaryWrite(message: TradingSchedule, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.TradingSchedule
 */
export declare const TradingSchedule: TradingSchedule$Type;
declare class TradingDay$Type extends MessageType<TradingDay> {
    constructor();
    create(value?: PartialMessage<TradingDay>): TradingDay;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TradingDay): TradingDay;
    internalBinaryWrite(message: TradingDay, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.TradingDay
 */
export declare const TradingDay: TradingDay$Type;
declare class InstrumentRequest$Type extends MessageType<InstrumentRequest> {
    constructor();
    create(value?: PartialMessage<InstrumentRequest>): InstrumentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InstrumentRequest): InstrumentRequest;
    internalBinaryWrite(message: InstrumentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.InstrumentRequest
 */
export declare const InstrumentRequest: InstrumentRequest$Type;
declare class InstrumentsRequest$Type extends MessageType<InstrumentsRequest> {
    constructor();
    create(value?: PartialMessage<InstrumentsRequest>): InstrumentsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InstrumentsRequest): InstrumentsRequest;
    internalBinaryWrite(message: InstrumentsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.InstrumentsRequest
 */
export declare const InstrumentsRequest: InstrumentsRequest$Type;
declare class BondResponse$Type extends MessageType<BondResponse> {
    constructor();
    create(value?: PartialMessage<BondResponse>): BondResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BondResponse): BondResponse;
    internalBinaryWrite(message: BondResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.BondResponse
 */
export declare const BondResponse: BondResponse$Type;
declare class BondsResponse$Type extends MessageType<BondsResponse> {
    constructor();
    create(value?: PartialMessage<BondsResponse>): BondsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BondsResponse): BondsResponse;
    internalBinaryWrite(message: BondsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.BondsResponse
 */
export declare const BondsResponse: BondsResponse$Type;
declare class GetBondCouponsRequest$Type extends MessageType<GetBondCouponsRequest> {
    constructor();
    create(value?: PartialMessage<GetBondCouponsRequest>): GetBondCouponsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetBondCouponsRequest): GetBondCouponsRequest;
    internalBinaryWrite(message: GetBondCouponsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetBondCouponsRequest
 */
export declare const GetBondCouponsRequest: GetBondCouponsRequest$Type;
declare class GetBondCouponsResponse$Type extends MessageType<GetBondCouponsResponse> {
    constructor();
    create(value?: PartialMessage<GetBondCouponsResponse>): GetBondCouponsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetBondCouponsResponse): GetBondCouponsResponse;
    internalBinaryWrite(message: GetBondCouponsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetBondCouponsResponse
 */
export declare const GetBondCouponsResponse: GetBondCouponsResponse$Type;
declare class Coupon$Type extends MessageType<Coupon> {
    constructor();
    create(value?: PartialMessage<Coupon>): Coupon;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Coupon): Coupon;
    internalBinaryWrite(message: Coupon, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.Coupon
 */
export declare const Coupon: Coupon$Type;
declare class CurrencyResponse$Type extends MessageType<CurrencyResponse> {
    constructor();
    create(value?: PartialMessage<CurrencyResponse>): CurrencyResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CurrencyResponse): CurrencyResponse;
    internalBinaryWrite(message: CurrencyResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.CurrencyResponse
 */
export declare const CurrencyResponse: CurrencyResponse$Type;
declare class CurrenciesResponse$Type extends MessageType<CurrenciesResponse> {
    constructor();
    create(value?: PartialMessage<CurrenciesResponse>): CurrenciesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CurrenciesResponse): CurrenciesResponse;
    internalBinaryWrite(message: CurrenciesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.CurrenciesResponse
 */
export declare const CurrenciesResponse: CurrenciesResponse$Type;
declare class EtfResponse$Type extends MessageType<EtfResponse> {
    constructor();
    create(value?: PartialMessage<EtfResponse>): EtfResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EtfResponse): EtfResponse;
    internalBinaryWrite(message: EtfResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.EtfResponse
 */
export declare const EtfResponse: EtfResponse$Type;
declare class EtfsResponse$Type extends MessageType<EtfsResponse> {
    constructor();
    create(value?: PartialMessage<EtfsResponse>): EtfsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EtfsResponse): EtfsResponse;
    internalBinaryWrite(message: EtfsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.EtfsResponse
 */
export declare const EtfsResponse: EtfsResponse$Type;
declare class FutureResponse$Type extends MessageType<FutureResponse> {
    constructor();
    create(value?: PartialMessage<FutureResponse>): FutureResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FutureResponse): FutureResponse;
    internalBinaryWrite(message: FutureResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.FutureResponse
 */
export declare const FutureResponse: FutureResponse$Type;
declare class FuturesResponse$Type extends MessageType<FuturesResponse> {
    constructor();
    create(value?: PartialMessage<FuturesResponse>): FuturesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FuturesResponse): FuturesResponse;
    internalBinaryWrite(message: FuturesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.FuturesResponse
 */
export declare const FuturesResponse: FuturesResponse$Type;
declare class OptionResponse$Type extends MessageType<OptionResponse> {
    constructor();
    create(value?: PartialMessage<OptionResponse>): OptionResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OptionResponse): OptionResponse;
    internalBinaryWrite(message: OptionResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.OptionResponse
 */
export declare const OptionResponse: OptionResponse$Type;
declare class OptionsResponse$Type extends MessageType<OptionsResponse> {
    constructor();
    create(value?: PartialMessage<OptionsResponse>): OptionsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OptionsResponse): OptionsResponse;
    internalBinaryWrite(message: OptionsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.OptionsResponse
 */
export declare const OptionsResponse: OptionsResponse$Type;
declare class Option$Type extends MessageType<Option> {
    constructor();
    create(value?: PartialMessage<Option>): Option;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Option): Option;
    internalBinaryWrite(message: Option, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.Option
 */
export declare const Option: Option$Type;
declare class ShareResponse$Type extends MessageType<ShareResponse> {
    constructor();
    create(value?: PartialMessage<ShareResponse>): ShareResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ShareResponse): ShareResponse;
    internalBinaryWrite(message: ShareResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.ShareResponse
 */
export declare const ShareResponse: ShareResponse$Type;
declare class SharesResponse$Type extends MessageType<SharesResponse> {
    constructor();
    create(value?: PartialMessage<SharesResponse>): SharesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SharesResponse): SharesResponse;
    internalBinaryWrite(message: SharesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.SharesResponse
 */
export declare const SharesResponse: SharesResponse$Type;
declare class Bond$Type extends MessageType<Bond> {
    constructor();
    create(value?: PartialMessage<Bond>): Bond;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Bond): Bond;
    internalBinaryWrite(message: Bond, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.Bond
 */
export declare const Bond: Bond$Type;
declare class Currency$Type extends MessageType<Currency> {
    constructor();
    create(value?: PartialMessage<Currency>): Currency;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Currency): Currency;
    internalBinaryWrite(message: Currency, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.Currency
 */
export declare const Currency: Currency$Type;
declare class Etf$Type extends MessageType<Etf> {
    constructor();
    create(value?: PartialMessage<Etf>): Etf;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Etf): Etf;
    internalBinaryWrite(message: Etf, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.Etf
 */
export declare const Etf: Etf$Type;
declare class Future$Type extends MessageType<Future> {
    constructor();
    create(value?: PartialMessage<Future>): Future;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Future): Future;
    internalBinaryWrite(message: Future, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.Future
 */
export declare const Future: Future$Type;
declare class Share$Type extends MessageType<Share> {
    constructor();
    create(value?: PartialMessage<Share>): Share;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Share): Share;
    internalBinaryWrite(message: Share, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.Share
 */
export declare const Share: Share$Type;
declare class GetAccruedInterestsRequest$Type extends MessageType<GetAccruedInterestsRequest> {
    constructor();
    create(value?: PartialMessage<GetAccruedInterestsRequest>): GetAccruedInterestsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAccruedInterestsRequest): GetAccruedInterestsRequest;
    internalBinaryWrite(message: GetAccruedInterestsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetAccruedInterestsRequest
 */
export declare const GetAccruedInterestsRequest: GetAccruedInterestsRequest$Type;
declare class GetAccruedInterestsResponse$Type extends MessageType<GetAccruedInterestsResponse> {
    constructor();
    create(value?: PartialMessage<GetAccruedInterestsResponse>): GetAccruedInterestsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAccruedInterestsResponse): GetAccruedInterestsResponse;
    internalBinaryWrite(message: GetAccruedInterestsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetAccruedInterestsResponse
 */
export declare const GetAccruedInterestsResponse: GetAccruedInterestsResponse$Type;
declare class AccruedInterest$Type extends MessageType<AccruedInterest> {
    constructor();
    create(value?: PartialMessage<AccruedInterest>): AccruedInterest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AccruedInterest): AccruedInterest;
    internalBinaryWrite(message: AccruedInterest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.AccruedInterest
 */
export declare const AccruedInterest: AccruedInterest$Type;
declare class GetFuturesMarginRequest$Type extends MessageType<GetFuturesMarginRequest> {
    constructor();
    create(value?: PartialMessage<GetFuturesMarginRequest>): GetFuturesMarginRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetFuturesMarginRequest): GetFuturesMarginRequest;
    internalBinaryWrite(message: GetFuturesMarginRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetFuturesMarginRequest
 */
export declare const GetFuturesMarginRequest: GetFuturesMarginRequest$Type;
declare class GetFuturesMarginResponse$Type extends MessageType<GetFuturesMarginResponse> {
    constructor();
    create(value?: PartialMessage<GetFuturesMarginResponse>): GetFuturesMarginResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetFuturesMarginResponse): GetFuturesMarginResponse;
    internalBinaryWrite(message: GetFuturesMarginResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetFuturesMarginResponse
 */
export declare const GetFuturesMarginResponse: GetFuturesMarginResponse$Type;
declare class InstrumentResponse$Type extends MessageType<InstrumentResponse> {
    constructor();
    create(value?: PartialMessage<InstrumentResponse>): InstrumentResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InstrumentResponse): InstrumentResponse;
    internalBinaryWrite(message: InstrumentResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.InstrumentResponse
 */
export declare const InstrumentResponse: InstrumentResponse$Type;
declare class Instrument$Type extends MessageType<Instrument> {
    constructor();
    create(value?: PartialMessage<Instrument>): Instrument;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Instrument): Instrument;
    internalBinaryWrite(message: Instrument, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.Instrument
 */
export declare const Instrument: Instrument$Type;
declare class GetDividendsRequest$Type extends MessageType<GetDividendsRequest> {
    constructor();
    create(value?: PartialMessage<GetDividendsRequest>): GetDividendsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetDividendsRequest): GetDividendsRequest;
    internalBinaryWrite(message: GetDividendsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetDividendsRequest
 */
export declare const GetDividendsRequest: GetDividendsRequest$Type;
declare class GetDividendsResponse$Type extends MessageType<GetDividendsResponse> {
    constructor();
    create(value?: PartialMessage<GetDividendsResponse>): GetDividendsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetDividendsResponse): GetDividendsResponse;
    internalBinaryWrite(message: GetDividendsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetDividendsResponse
 */
export declare const GetDividendsResponse: GetDividendsResponse$Type;
declare class Dividend$Type extends MessageType<Dividend> {
    constructor();
    create(value?: PartialMessage<Dividend>): Dividend;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Dividend): Dividend;
    internalBinaryWrite(message: Dividend, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.Dividend
 */
export declare const Dividend: Dividend$Type;
declare class AssetRequest$Type extends MessageType<AssetRequest> {
    constructor();
    create(value?: PartialMessage<AssetRequest>): AssetRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AssetRequest): AssetRequest;
    internalBinaryWrite(message: AssetRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.AssetRequest
 */
export declare const AssetRequest: AssetRequest$Type;
declare class AssetResponse$Type extends MessageType<AssetResponse> {
    constructor();
    create(value?: PartialMessage<AssetResponse>): AssetResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AssetResponse): AssetResponse;
    internalBinaryWrite(message: AssetResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.AssetResponse
 */
export declare const AssetResponse: AssetResponse$Type;
declare class AssetsRequest$Type extends MessageType<AssetsRequest> {
    constructor();
    create(value?: PartialMessage<AssetsRequest>): AssetsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AssetsRequest): AssetsRequest;
    internalBinaryWrite(message: AssetsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.AssetsRequest
 */
export declare const AssetsRequest: AssetsRequest$Type;
declare class AssetsResponse$Type extends MessageType<AssetsResponse> {
    constructor();
    create(value?: PartialMessage<AssetsResponse>): AssetsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AssetsResponse): AssetsResponse;
    internalBinaryWrite(message: AssetsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.AssetsResponse
 */
export declare const AssetsResponse: AssetsResponse$Type;
declare class AssetFull$Type extends MessageType<AssetFull> {
    constructor();
    create(value?: PartialMessage<AssetFull>): AssetFull;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AssetFull): AssetFull;
    internalBinaryWrite(message: AssetFull, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.AssetFull
 */
export declare const AssetFull: AssetFull$Type;
declare class Asset$Type extends MessageType<Asset> {
    constructor();
    create(value?: PartialMessage<Asset>): Asset;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Asset): Asset;
    internalBinaryWrite(message: Asset, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.Asset
 */
export declare const Asset: Asset$Type;
declare class AssetCurrency$Type extends MessageType<AssetCurrency> {
    constructor();
    create(value?: PartialMessage<AssetCurrency>): AssetCurrency;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AssetCurrency): AssetCurrency;
    internalBinaryWrite(message: AssetCurrency, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.AssetCurrency
 */
export declare const AssetCurrency: AssetCurrency$Type;
declare class AssetSecurity$Type extends MessageType<AssetSecurity> {
    constructor();
    create(value?: PartialMessage<AssetSecurity>): AssetSecurity;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AssetSecurity): AssetSecurity;
    internalBinaryWrite(message: AssetSecurity, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.AssetSecurity
 */
export declare const AssetSecurity: AssetSecurity$Type;
declare class AssetShare$Type extends MessageType<AssetShare> {
    constructor();
    create(value?: PartialMessage<AssetShare>): AssetShare;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AssetShare): AssetShare;
    internalBinaryWrite(message: AssetShare, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.AssetShare
 */
export declare const AssetShare: AssetShare$Type;
declare class AssetBond$Type extends MessageType<AssetBond> {
    constructor();
    create(value?: PartialMessage<AssetBond>): AssetBond;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AssetBond): AssetBond;
    internalBinaryWrite(message: AssetBond, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.AssetBond
 */
export declare const AssetBond: AssetBond$Type;
declare class AssetStructuredProduct$Type extends MessageType<AssetStructuredProduct> {
    constructor();
    create(value?: PartialMessage<AssetStructuredProduct>): AssetStructuredProduct;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AssetStructuredProduct): AssetStructuredProduct;
    internalBinaryWrite(message: AssetStructuredProduct, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.AssetStructuredProduct
 */
export declare const AssetStructuredProduct: AssetStructuredProduct$Type;
declare class AssetEtf$Type extends MessageType<AssetEtf> {
    constructor();
    create(value?: PartialMessage<AssetEtf>): AssetEtf;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AssetEtf): AssetEtf;
    internalBinaryWrite(message: AssetEtf, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.AssetEtf
 */
export declare const AssetEtf: AssetEtf$Type;
declare class AssetClearingCertificate$Type extends MessageType<AssetClearingCertificate> {
    constructor();
    create(value?: PartialMessage<AssetClearingCertificate>): AssetClearingCertificate;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AssetClearingCertificate): AssetClearingCertificate;
    internalBinaryWrite(message: AssetClearingCertificate, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.AssetClearingCertificate
 */
export declare const AssetClearingCertificate: AssetClearingCertificate$Type;
declare class Brand$Type extends MessageType<Brand> {
    constructor();
    create(value?: PartialMessage<Brand>): Brand;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Brand): Brand;
    internalBinaryWrite(message: Brand, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.Brand
 */
export declare const Brand: Brand$Type;
declare class AssetInstrument$Type extends MessageType<AssetInstrument> {
    constructor();
    create(value?: PartialMessage<AssetInstrument>): AssetInstrument;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AssetInstrument): AssetInstrument;
    internalBinaryWrite(message: AssetInstrument, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.AssetInstrument
 */
export declare const AssetInstrument: AssetInstrument$Type;
declare class InstrumentLink$Type extends MessageType<InstrumentLink> {
    constructor();
    create(value?: PartialMessage<InstrumentLink>): InstrumentLink;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InstrumentLink): InstrumentLink;
    internalBinaryWrite(message: InstrumentLink, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.InstrumentLink
 */
export declare const InstrumentLink: InstrumentLink$Type;
declare class GetFavoritesRequest$Type extends MessageType<GetFavoritesRequest> {
    constructor();
    create(value?: PartialMessage<GetFavoritesRequest>): GetFavoritesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetFavoritesRequest): GetFavoritesRequest;
    internalBinaryWrite(message: GetFavoritesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetFavoritesRequest
 */
export declare const GetFavoritesRequest: GetFavoritesRequest$Type;
declare class GetFavoritesResponse$Type extends MessageType<GetFavoritesResponse> {
    constructor();
    create(value?: PartialMessage<GetFavoritesResponse>): GetFavoritesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetFavoritesResponse): GetFavoritesResponse;
    internalBinaryWrite(message: GetFavoritesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetFavoritesResponse
 */
export declare const GetFavoritesResponse: GetFavoritesResponse$Type;
declare class FavoriteInstrument$Type extends MessageType<FavoriteInstrument> {
    constructor();
    create(value?: PartialMessage<FavoriteInstrument>): FavoriteInstrument;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FavoriteInstrument): FavoriteInstrument;
    internalBinaryWrite(message: FavoriteInstrument, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.FavoriteInstrument
 */
export declare const FavoriteInstrument: FavoriteInstrument$Type;
declare class EditFavoritesRequest$Type extends MessageType<EditFavoritesRequest> {
    constructor();
    create(value?: PartialMessage<EditFavoritesRequest>): EditFavoritesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EditFavoritesRequest): EditFavoritesRequest;
    internalBinaryWrite(message: EditFavoritesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.EditFavoritesRequest
 */
export declare const EditFavoritesRequest: EditFavoritesRequest$Type;
declare class EditFavoritesRequestInstrument$Type extends MessageType<EditFavoritesRequestInstrument> {
    constructor();
    create(value?: PartialMessage<EditFavoritesRequestInstrument>): EditFavoritesRequestInstrument;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EditFavoritesRequestInstrument): EditFavoritesRequestInstrument;
    internalBinaryWrite(message: EditFavoritesRequestInstrument, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.EditFavoritesRequestInstrument
 */
export declare const EditFavoritesRequestInstrument: EditFavoritesRequestInstrument$Type;
declare class EditFavoritesResponse$Type extends MessageType<EditFavoritesResponse> {
    constructor();
    create(value?: PartialMessage<EditFavoritesResponse>): EditFavoritesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EditFavoritesResponse): EditFavoritesResponse;
    internalBinaryWrite(message: EditFavoritesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.EditFavoritesResponse
 */
export declare const EditFavoritesResponse: EditFavoritesResponse$Type;
declare class GetCountriesRequest$Type extends MessageType<GetCountriesRequest> {
    constructor();
    create(value?: PartialMessage<GetCountriesRequest>): GetCountriesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCountriesRequest): GetCountriesRequest;
    internalBinaryWrite(message: GetCountriesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetCountriesRequest
 */
export declare const GetCountriesRequest: GetCountriesRequest$Type;
declare class GetCountriesResponse$Type extends MessageType<GetCountriesResponse> {
    constructor();
    create(value?: PartialMessage<GetCountriesResponse>): GetCountriesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCountriesResponse): GetCountriesResponse;
    internalBinaryWrite(message: GetCountriesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetCountriesResponse
 */
export declare const GetCountriesResponse: GetCountriesResponse$Type;
declare class CountryResponse$Type extends MessageType<CountryResponse> {
    constructor();
    create(value?: PartialMessage<CountryResponse>): CountryResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CountryResponse): CountryResponse;
    internalBinaryWrite(message: CountryResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.CountryResponse
 */
export declare const CountryResponse: CountryResponse$Type;
declare class FindInstrumentRequest$Type extends MessageType<FindInstrumentRequest> {
    constructor();
    create(value?: PartialMessage<FindInstrumentRequest>): FindInstrumentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FindInstrumentRequest): FindInstrumentRequest;
    internalBinaryWrite(message: FindInstrumentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.FindInstrumentRequest
 */
export declare const FindInstrumentRequest: FindInstrumentRequest$Type;
declare class FindInstrumentResponse$Type extends MessageType<FindInstrumentResponse> {
    constructor();
    create(value?: PartialMessage<FindInstrumentResponse>): FindInstrumentResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FindInstrumentResponse): FindInstrumentResponse;
    internalBinaryWrite(message: FindInstrumentResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.FindInstrumentResponse
 */
export declare const FindInstrumentResponse: FindInstrumentResponse$Type;
declare class InstrumentShort$Type extends MessageType<InstrumentShort> {
    constructor();
    create(value?: PartialMessage<InstrumentShort>): InstrumentShort;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InstrumentShort): InstrumentShort;
    internalBinaryWrite(message: InstrumentShort, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.InstrumentShort
 */
export declare const InstrumentShort: InstrumentShort$Type;
declare class GetBrandsRequest$Type extends MessageType<GetBrandsRequest> {
    constructor();
    create(value?: PartialMessage<GetBrandsRequest>): GetBrandsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetBrandsRequest): GetBrandsRequest;
    internalBinaryWrite(message: GetBrandsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetBrandsRequest
 */
export declare const GetBrandsRequest: GetBrandsRequest$Type;
declare class GetBrandRequest$Type extends MessageType<GetBrandRequest> {
    constructor();
    create(value?: PartialMessage<GetBrandRequest>): GetBrandRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetBrandRequest): GetBrandRequest;
    internalBinaryWrite(message: GetBrandRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetBrandRequest
 */
export declare const GetBrandRequest: GetBrandRequest$Type;
declare class GetBrandsResponse$Type extends MessageType<GetBrandsResponse> {
    constructor();
    create(value?: PartialMessage<GetBrandsResponse>): GetBrandsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetBrandsResponse): GetBrandsResponse;
    internalBinaryWrite(message: GetBrandsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetBrandsResponse
 */
export declare const GetBrandsResponse: GetBrandsResponse$Type;
/**
 * @generated ServiceType for protobuf service tinkoff.public.invest.api.contract.v1.InstrumentsService
 */
export declare const InstrumentsService: ServiceType;
export {};
