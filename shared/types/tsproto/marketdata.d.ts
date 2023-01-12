import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { SecurityTradingStatus } from "./common";
import { Timestamp } from "./google/protobuf/timestamp";
import { Quotation } from "./common";
import { Ping } from "./common";
/**
 * Запрос подписки или отписки на определённые биржевые данные.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.MarketDataRequest
 */
export interface MarketDataRequest {
    /**
     * @generated from protobuf oneof: payload
     */
    payload: {
        oneofKind: "subscribeCandlesRequest";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest subscribe_candles_request = 1;
         */
        subscribeCandlesRequest: SubscribeCandlesRequest;
    } | {
        oneofKind: "subscribeOrderBookRequest";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest subscribe_order_book_request = 2;
         */
        subscribeOrderBookRequest: SubscribeOrderBookRequest;
    } | {
        oneofKind: "subscribeTradesRequest";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest subscribe_trades_request = 3;
         */
        subscribeTradesRequest: SubscribeTradesRequest;
    } | {
        oneofKind: "subscribeInfoRequest";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest subscribe_info_request = 4;
         */
        subscribeInfoRequest: SubscribeInfoRequest;
    } | {
        oneofKind: "subscribeLastPriceRequest";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest subscribe_last_price_request = 5;
         */
        subscribeLastPriceRequest: SubscribeLastPriceRequest;
    } | {
        oneofKind: "getMySubscriptions";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.GetMySubscriptions get_my_subscriptions = 6;
         */
        getMySubscriptions: GetMySubscriptions;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest
 */
export interface MarketDataServerSideStreamRequest {
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest subscribe_candles_request = 1;
     */
    subscribeCandlesRequest?: SubscribeCandlesRequest;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest subscribe_order_book_request = 2;
     */
    subscribeOrderBookRequest?: SubscribeOrderBookRequest;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest subscribe_trades_request = 3;
     */
    subscribeTradesRequest?: SubscribeTradesRequest;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest subscribe_info_request = 4;
     */
    subscribeInfoRequest?: SubscribeInfoRequest;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest subscribe_last_price_request = 5;
     */
    subscribeLastPriceRequest?: SubscribeLastPriceRequest;
}
/**
 * Пакет биржевой информации по подписке.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.MarketDataResponse
 */
export interface MarketDataResponse {
    /**
     * @generated from protobuf oneof: payload
     */
    payload: {
        oneofKind: "subscribeCandlesResponse";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse subscribe_candles_response = 1;
         */
        subscribeCandlesResponse: SubscribeCandlesResponse;
    } | {
        oneofKind: "subscribeOrderBookResponse";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse subscribe_order_book_response = 2;
         */
        subscribeOrderBookResponse: SubscribeOrderBookResponse;
    } | {
        oneofKind: "subscribeTradesResponse";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse subscribe_trades_response = 3;
         */
        subscribeTradesResponse: SubscribeTradesResponse;
    } | {
        oneofKind: "subscribeInfoResponse";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse subscribe_info_response = 4;
         */
        subscribeInfoResponse: SubscribeInfoResponse;
    } | {
        oneofKind: "candle";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Candle candle = 5;
         */
        candle: Candle;
    } | {
        oneofKind: "trade";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Trade trade = 6;
         */
        trade: Trade;
    } | {
        oneofKind: "orderbook";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.OrderBook orderbook = 7;
         */
        orderbook: OrderBook;
    } | {
        oneofKind: "tradingStatus";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.TradingStatus trading_status = 8;
         */
        tradingStatus: TradingStatus;
    } | {
        oneofKind: "ping";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Ping ping = 9;
         */
        ping: Ping;
    } | {
        oneofKind: "subscribeLastPriceResponse";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse subscribe_last_price_response = 10;
         */
        subscribeLastPriceResponse: SubscribeLastPriceResponse;
    } | {
        oneofKind: "lastPrice";
        /**
         * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.LastPrice last_price = 11;
         */
        lastPrice: LastPrice;
    } | {
        oneofKind: undefined;
    };
}
/**
 * subscribeCandles | Изменения статуса подписки на свечи.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest
 */
export interface SubscribeCandlesRequest {
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SubscriptionAction subscription_action = 1;
     */
    subscriptionAction: SubscriptionAction;
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.CandleInstrument instruments = 2;
     */
    instruments: CandleInstrument[];
    /**
     * @generated from protobuf field: bool waiting_close = 3;
     */
    waitingClose: boolean;
}
/**
 * Запрос изменения статус подписки на свечи.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.CandleInstrument
 */
export interface CandleInstrument {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SubscriptionInterval interval = 2;
     */
    interval: SubscriptionInterval;
    /**
     * @generated from protobuf field: string instrument_id = 3;
     */
    instrumentId: string;
}
/**
 * Результат изменения статус подписки на свечи.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse
 */
export interface SubscribeCandlesResponse {
    /**
     * @generated from protobuf field: string tracking_id = 1;
     */
    trackingId: string;
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.CandleSubscription candles_subscriptions = 2;
     */
    candlesSubscriptions: CandleSubscription[];
}
/**
 * Статус подписки на свечи.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.CandleSubscription
 */
export interface CandleSubscription {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SubscriptionInterval interval = 2;
     */
    interval: SubscriptionInterval;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SubscriptionStatus subscription_status = 3;
     */
    subscriptionStatus: SubscriptionStatus;
    /**
     * @generated from protobuf field: string instrument_uid = 4;
     */
    instrumentUid: string;
}
/**
 * Запрос на изменение статуса подписки на стаканы.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest
 */
export interface SubscribeOrderBookRequest {
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SubscriptionAction subscription_action = 1;
     */
    subscriptionAction: SubscriptionAction;
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.OrderBookInstrument instruments = 2;
     */
    instruments: OrderBookInstrument[];
}
/**
 * Запрос подписки на стаканы.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.OrderBookInstrument
 */
export interface OrderBookInstrument {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: int32 depth = 2;
     */
    depth: number;
    /**
     * @generated from protobuf field: string instrument_id = 3;
     */
    instrumentId: string;
}
/**
 * Результат изменения статуса подписки на стаканы.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse
 */
export interface SubscribeOrderBookResponse {
    /**
     * @generated from protobuf field: string tracking_id = 1;
     */
    trackingId: string;
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.OrderBookSubscription order_book_subscriptions = 2;
     */
    orderBookSubscriptions: OrderBookSubscription[];
}
/**
 * Статус подписки.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.OrderBookSubscription
 */
export interface OrderBookSubscription {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: int32 depth = 2;
     */
    depth: number;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SubscriptionStatus subscription_status = 3;
     */
    subscriptionStatus: SubscriptionStatus;
    /**
     * @generated from protobuf field: string instrument_uid = 4;
     */
    instrumentUid: string;
}
/**
 * Изменение статуса подписки на поток обезличенных сделок.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest
 */
export interface SubscribeTradesRequest {
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SubscriptionAction subscription_action = 1;
     */
    subscriptionAction: SubscriptionAction;
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.TradeInstrument instruments = 2;
     */
    instruments: TradeInstrument[];
}
/**
 * Запрос подписки на поток обезличенных сделок.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.TradeInstrument
 */
export interface TradeInstrument {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: string instrument_id = 2;
     */
    instrumentId: string;
}
/**
 * Результат изменения статуса подписки на поток обезличенных сделок.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse
 */
export interface SubscribeTradesResponse {
    /**
     * @generated from protobuf field: string tracking_id = 1;
     */
    trackingId: string;
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.TradeSubscription trade_subscriptions = 2;
     */
    tradeSubscriptions: TradeSubscription[];
}
/**
 * Статус подписки.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.TradeSubscription
 */
export interface TradeSubscription {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SubscriptionStatus subscription_status = 2;
     */
    subscriptionStatus: SubscriptionStatus;
    /**
     * @generated from protobuf field: string instrument_uid = 3;
     */
    instrumentUid: string;
}
/**
 * Изменение статуса подписки на торговый статус инструмента.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest
 */
export interface SubscribeInfoRequest {
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SubscriptionAction subscription_action = 1;
     */
    subscriptionAction: SubscriptionAction;
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.InfoInstrument instruments = 2;
     */
    instruments: InfoInstrument[];
}
/**
 * Запрос подписки на торговый статус.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.InfoInstrument
 */
export interface InfoInstrument {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: string instrument_id = 2;
     */
    instrumentId: string;
}
/**
 * Результат изменения статуса подписки на торговый статус.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse
 */
export interface SubscribeInfoResponse {
    /**
     * @generated from protobuf field: string tracking_id = 1;
     */
    trackingId: string;
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.InfoSubscription info_subscriptions = 2;
     */
    infoSubscriptions: InfoSubscription[];
}
/**
 * Статус подписки.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.InfoSubscription
 */
export interface InfoSubscription {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SubscriptionStatus subscription_status = 2;
     */
    subscriptionStatus: SubscriptionStatus;
    /**
     * @generated from protobuf field: string instrument_uid = 3;
     */
    instrumentUid: string;
}
/**
 * Изменение статуса подписки на цену последней сделки по инструменту.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest
 */
export interface SubscribeLastPriceRequest {
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SubscriptionAction subscription_action = 1;
     */
    subscriptionAction: SubscriptionAction;
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.LastPriceInstrument instruments = 2;
     */
    instruments: LastPriceInstrument[];
}
/**
 * Запрос подписки на последнюю цену.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.LastPriceInstrument
 */
export interface LastPriceInstrument {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: string instrument_id = 2;
     */
    instrumentId: string;
}
/**
 * Результат изменения статуса подписки на цену последней сделки.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse
 */
export interface SubscribeLastPriceResponse {
    /**
     * @generated from protobuf field: string tracking_id = 1;
     */
    trackingId: string;
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.LastPriceSubscription last_price_subscriptions = 2;
     */
    lastPriceSubscriptions: LastPriceSubscription[];
}
/**
 * Статус подписки на цену последней сделки.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.LastPriceSubscription
 */
export interface LastPriceSubscription {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SubscriptionStatus subscription_status = 2;
     */
    subscriptionStatus: SubscriptionStatus;
    /**
     * @generated from protobuf field: string instrument_uid = 3;
     */
    instrumentUid: string;
}
/**
 * Пакет свечей в рамках стрима.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.Candle
 */
export interface Candle {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SubscriptionInterval interval = 2;
     */
    interval: SubscriptionInterval;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation open = 3;
     */
    open?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation high = 4;
     */
    high?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation low = 5;
     */
    low?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation close = 6;
     */
    close?: Quotation;
    /**
     * @generated from protobuf field: int64 volume = 7;
     */
    volume: bigint;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp time = 8;
     */
    time?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp last_trade_ts = 9;
     */
    lastTradeTs?: Timestamp;
    /**
     * @generated from protobuf field: string instrument_uid = 10;
     */
    instrumentUid: string;
}
/**
 * Пакет стаканов в рамках стрима.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.OrderBook
 */
export interface OrderBook {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: int32 depth = 2;
     */
    depth: number;
    /**
     * @generated from protobuf field: bool is_consistent = 3;
     */
    isConsistent: boolean;
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.Order bids = 4;
     */
    bids: Order[];
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.Order asks = 5;
     */
    asks: Order[];
    /**
     * @generated from protobuf field: google.protobuf.Timestamp time = 6;
     */
    time?: Timestamp;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation limit_up = 7;
     */
    limitUp?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation limit_down = 8;
     */
    limitDown?: Quotation;
    /**
     * @generated from protobuf field: string instrument_uid = 9;
     */
    instrumentUid: string;
}
/**
 * Массив предложений/спроса.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.Order
 */
export interface Order {
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation price = 1;
     */
    price?: Quotation;
    /**
     * @generated from protobuf field: int64 quantity = 2;
     */
    quantity: bigint;
}
/**
 * Информация о сделке.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.Trade
 */
export interface Trade {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.TradeDirection direction = 2;
     */
    direction: TradeDirection;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation price = 3;
     */
    price?: Quotation;
    /**
     * @generated from protobuf field: int64 quantity = 4;
     */
    quantity: bigint;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp time = 5;
     */
    time?: Timestamp;
    /**
     * @generated from protobuf field: string instrument_uid = 6;
     */
    instrumentUid: string;
}
/**
 * Пакет изменения торгового статуса.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.TradingStatus
 */
export interface TradingStatus {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SecurityTradingStatus trading_status = 2;
     */
    tradingStatus: SecurityTradingStatus;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp time = 3;
     */
    time?: Timestamp;
    /**
     * @generated from protobuf field: bool limit_order_available_flag = 4;
     */
    limitOrderAvailableFlag: boolean;
    /**
     * @generated from protobuf field: bool market_order_available_flag = 5;
     */
    marketOrderAvailableFlag: boolean;
    /**
     * @generated from protobuf field: string instrument_uid = 6;
     */
    instrumentUid: string;
}
/**
 * Запрос исторических свечей.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetCandlesRequest
 */
export interface GetCandlesRequest {
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
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.CandleInterval interval = 4;
     */
    interval: CandleInterval;
    /**
     * @generated from protobuf field: string instrument_id = 5;
     */
    instrumentId: string;
}
/**
 * Список свечей.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetCandlesResponse
 */
export interface GetCandlesResponse {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.HistoricCandle candles = 1;
     */
    candles: HistoricCandle[];
}
/**
 * Информация о свече.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.HistoricCandle
 */
export interface HistoricCandle {
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation open = 1;
     */
    open?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation high = 2;
     */
    high?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation low = 3;
     */
    low?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation close = 4;
     */
    close?: Quotation;
    /**
     * @generated from protobuf field: int64 volume = 5;
     */
    volume: bigint;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp time = 6;
     */
    time?: Timestamp;
    /**
     * @generated from protobuf field: bool is_complete = 7;
     */
    isComplete: boolean;
}
/**
 * Запрос получения цен последних сделок.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetLastPricesRequest
 */
export interface GetLastPricesRequest {
    /**
     * @generated from protobuf field: repeated string figi = 1;
     */
    figi: string[];
    /**
     * @generated from protobuf field: repeated string instrument_id = 2;
     */
    instrumentId: string[];
}
/**
 * Список цен последних сделок.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetLastPricesResponse
 */
export interface GetLastPricesResponse {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.LastPrice last_prices = 1;
     */
    lastPrices: LastPrice[];
}
/**
 * Информация о цене последней сделки.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.LastPrice
 */
export interface LastPrice {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation price = 2;
     */
    price?: Quotation;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp time = 3;
     */
    time?: Timestamp;
    /**
     * @generated from protobuf field: string instrument_uid = 11;
     */
    instrumentUid: string;
}
/**
 * Запрос стакана.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetOrderBookRequest
 */
export interface GetOrderBookRequest {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: int32 depth = 2;
     */
    depth: number;
    /**
     * @generated from protobuf field: string instrument_id = 3;
     */
    instrumentId: string;
}
/**
 * Информация о стакане.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetOrderBookResponse
 */
export interface GetOrderBookResponse {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: int32 depth = 2;
     */
    depth: number;
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.Order bids = 3;
     */
    bids: Order[];
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.Order asks = 4;
     */
    asks: Order[];
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation last_price = 5;
     */
    lastPrice?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation close_price = 6;
     */
    closePrice?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation limit_up = 7;
     */
    limitUp?: Quotation;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation limit_down = 8;
     */
    limitDown?: Quotation;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp last_price_ts = 21;
     */
    lastPriceTs?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp close_price_ts = 22;
     */
    closePriceTs?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp orderbook_ts = 23;
     */
    orderbookTs?: Timestamp;
    /**
     * @generated from protobuf field: string instrument_uid = 9;
     */
    instrumentUid: string;
}
/**
 * Запрос получения торгового статуса.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest
 */
export interface GetTradingStatusRequest {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: string instrument_id = 2;
     */
    instrumentId: string;
}
/**
 * Информация о торговом статусе.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse
 */
export interface GetTradingStatusResponse {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.SecurityTradingStatus trading_status = 2;
     */
    tradingStatus: SecurityTradingStatus;
    /**
     * @generated from protobuf field: bool limit_order_available_flag = 3;
     */
    limitOrderAvailableFlag: boolean;
    /**
     * @generated from protobuf field: bool market_order_available_flag = 4;
     */
    marketOrderAvailableFlag: boolean;
    /**
     * @generated from protobuf field: bool api_trade_available_flag = 5;
     */
    apiTradeAvailableFlag: boolean;
    /**
     * @generated from protobuf field: string instrument_uid = 6;
     */
    instrumentUid: string;
}
/**
 * Запрос обезличенных сделок за последний час.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetLastTradesRequest
 */
export interface GetLastTradesRequest {
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
    /**
     * @generated from protobuf field: string instrument_id = 4;
     */
    instrumentId: string;
}
/**
 * Обезличенных сделок за последний час.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetLastTradesResponse
 */
export interface GetLastTradesResponse {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.Trade trades = 1;
     */
    trades: Trade[];
}
/**
 * Запрос активных подписок.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetMySubscriptions
 */
export interface GetMySubscriptions {
}
/**
 * Запрос цен закрытия торговой сессии по инструментам.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetClosePricesRequest
 */
export interface GetClosePricesRequest {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest instruments = 1;
     */
    instruments: InstrumentClosePriceRequest[];
}
/**
 * Запрос цен закрытия торговой сессии по инструменту.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest
 */
export interface InstrumentClosePriceRequest {
    /**
     * @generated from protobuf field: string instrument_id = 1;
     */
    instrumentId: string;
}
/**
 * Цены закрытия торговой сессии по инструментам.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.GetClosePricesResponse
 */
export interface GetClosePricesResponse {
    /**
     * @generated from protobuf field: repeated tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse close_prices = 1;
     */
    closePrices: InstrumentClosePriceResponse[];
}
/**
 * Цена закрытия торговой сессии по инструменту.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse
 */
export interface InstrumentClosePriceResponse {
    /**
     * @generated from protobuf field: string figi = 1;
     */
    figi: string;
    /**
     * @generated from protobuf field: string instrument_uid = 2;
     */
    instrumentUid: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.Quotation price = 11;
     */
    price?: Quotation;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp time = 21;
     */
    time?: Timestamp;
}
/**
 * Тип операции со списком подписок.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.SubscriptionAction
 */
export declare enum SubscriptionAction {
    /**
     * Статус подписки не определён.
     *
     * @generated from protobuf enum value: SUBSCRIPTION_ACTION_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Подписаться.
     *
     * @generated from protobuf enum value: SUBSCRIPTION_ACTION_SUBSCRIBE = 1;
     */
    SUBSCRIBE = 1,
    /**
     * Отписаться.
     *
     * @generated from protobuf enum value: SUBSCRIPTION_ACTION_UNSUBSCRIBE = 2;
     */
    UNSUBSCRIBE = 2
}
/**
 * Интервал свечи.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.SubscriptionInterval
 */
export declare enum SubscriptionInterval {
    /**
     * Интервал свечи не определён.
     *
     * @generated from protobuf enum value: SUBSCRIPTION_INTERVAL_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Минутные свечи.
     *
     * @generated from protobuf enum value: SUBSCRIPTION_INTERVAL_ONE_MINUTE = 1;
     */
    ONE_MINUTE = 1,
    /**
     * Пятиминутные свечи.
     *
     * @generated from protobuf enum value: SUBSCRIPTION_INTERVAL_FIVE_MINUTES = 2;
     */
    FIVE_MINUTES = 2
}
/**
 * Результат подписки.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.SubscriptionStatus
 */
export declare enum SubscriptionStatus {
    /**
     * Статус подписки не определён.
     *
     * @generated from protobuf enum value: SUBSCRIPTION_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Успешно.
     *
     * @generated from protobuf enum value: SUBSCRIPTION_STATUS_SUCCESS = 1;
     */
    SUCCESS = 1,
    /**
     * Инструмент не найден.
     *
     * @generated from protobuf enum value: SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND = 2;
     */
    INSTRUMENT_NOT_FOUND = 2,
    /**
     * Некорректный статус подписки, список возможных значений: [SubscriptionAction](https://tinkoff.github.io/investAPI/marketdata#subscriptionaction).
     *
     * @generated from protobuf enum value: SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID = 3;
     */
    SUBSCRIPTION_ACTION_IS_INVALID = 3,
    /**
     * Некорректная глубина стакана, доступные значения: 1, 10, 20, 30, 40, 50.
     *
     * @generated from protobuf enum value: SUBSCRIPTION_STATUS_DEPTH_IS_INVALID = 4;
     */
    DEPTH_IS_INVALID = 4,
    /**
     * Некорректный интервал свечей, список возможных значений: [SubscriptionInterval](https://tinkoff.github.io/investAPI/marketdata#subscriptioninterval).
     *
     * @generated from protobuf enum value: SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID = 5;
     */
    INTERVAL_IS_INVALID = 5,
    /**
     * Превышен лимит на общее количество подписок в рамках стрима, подробнее: [Лимитная политика](https://tinkoff.github.io/investAPI/limits/).
     *
     * @generated from protobuf enum value: SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED = 6;
     */
    LIMIT_IS_EXCEEDED = 6,
    /**
     * Внутренняя ошибка сервиса.
     *
     * @generated from protobuf enum value: SUBSCRIPTION_STATUS_INTERNAL_ERROR = 7;
     */
    INTERNAL_ERROR = 7,
    /**
     * Превышен лимит на количество запросов на подписки в течение установленного отрезка времени
     *
     * @generated from protobuf enum value: SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS = 8;
     */
    TOO_MANY_REQUESTS = 8
}
/**
 * Направление сделки.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.TradeDirection
 */
export declare enum TradeDirection {
    /**
     * Направление сделки не определено.
     *
     * @generated from protobuf enum value: TRADE_DIRECTION_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Покупка.
     *
     * @generated from protobuf enum value: TRADE_DIRECTION_BUY = 1;
     */
    BUY = 1,
    /**
     * Продажа.
     *
     * @generated from protobuf enum value: TRADE_DIRECTION_SELL = 2;
     */
    SELL = 2
}
/**
 * Интервал свечей.
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.CandleInterval
 */
export declare enum CandleInterval {
    /**
     * Интервал не определён.
     *
     * @generated from protobuf enum value: CANDLE_INTERVAL_UNSPECIFIED = 0;
     */
    CANDLE_INTERVAL_UNSPECIFIED = 0,
    /**
     * 1 минута.
     *
     * @generated from protobuf enum value: CANDLE_INTERVAL_1_MIN = 1;
     */
    CANDLE_INTERVAL_1_MIN = 1,
    /**
     * 5 минут.
     *
     * @generated from protobuf enum value: CANDLE_INTERVAL_5_MIN = 2;
     */
    CANDLE_INTERVAL_5_MIN = 2,
    /**
     * 15 минут.
     *
     * @generated from protobuf enum value: CANDLE_INTERVAL_15_MIN = 3;
     */
    CANDLE_INTERVAL_15_MIN = 3,
    /**
     * 1 час.
     *
     * @generated from protobuf enum value: CANDLE_INTERVAL_HOUR = 4;
     */
    CANDLE_INTERVAL_HOUR = 4,
    /**
     * 1 день.
     *
     * @generated from protobuf enum value: CANDLE_INTERVAL_DAY = 5;
     */
    CANDLE_INTERVAL_DAY = 5
}
declare class MarketDataRequest$Type extends MessageType<MarketDataRequest> {
    constructor();
    create(value?: PartialMessage<MarketDataRequest>): MarketDataRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MarketDataRequest): MarketDataRequest;
    internalBinaryWrite(message: MarketDataRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.MarketDataRequest
 */
export declare const MarketDataRequest: MarketDataRequest$Type;
declare class MarketDataServerSideStreamRequest$Type extends MessageType<MarketDataServerSideStreamRequest> {
    constructor();
    create(value?: PartialMessage<MarketDataServerSideStreamRequest>): MarketDataServerSideStreamRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MarketDataServerSideStreamRequest): MarketDataServerSideStreamRequest;
    internalBinaryWrite(message: MarketDataServerSideStreamRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest
 */
export declare const MarketDataServerSideStreamRequest: MarketDataServerSideStreamRequest$Type;
declare class MarketDataResponse$Type extends MessageType<MarketDataResponse> {
    constructor();
    create(value?: PartialMessage<MarketDataResponse>): MarketDataResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MarketDataResponse): MarketDataResponse;
    internalBinaryWrite(message: MarketDataResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.MarketDataResponse
 */
export declare const MarketDataResponse: MarketDataResponse$Type;
declare class SubscribeCandlesRequest$Type extends MessageType<SubscribeCandlesRequest> {
    constructor();
    create(value?: PartialMessage<SubscribeCandlesRequest>): SubscribeCandlesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SubscribeCandlesRequest): SubscribeCandlesRequest;
    internalBinaryWrite(message: SubscribeCandlesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest
 */
export declare const SubscribeCandlesRequest: SubscribeCandlesRequest$Type;
declare class CandleInstrument$Type extends MessageType<CandleInstrument> {
    constructor();
    create(value?: PartialMessage<CandleInstrument>): CandleInstrument;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CandleInstrument): CandleInstrument;
    internalBinaryWrite(message: CandleInstrument, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.CandleInstrument
 */
export declare const CandleInstrument: CandleInstrument$Type;
declare class SubscribeCandlesResponse$Type extends MessageType<SubscribeCandlesResponse> {
    constructor();
    create(value?: PartialMessage<SubscribeCandlesResponse>): SubscribeCandlesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SubscribeCandlesResponse): SubscribeCandlesResponse;
    internalBinaryWrite(message: SubscribeCandlesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse
 */
export declare const SubscribeCandlesResponse: SubscribeCandlesResponse$Type;
declare class CandleSubscription$Type extends MessageType<CandleSubscription> {
    constructor();
    create(value?: PartialMessage<CandleSubscription>): CandleSubscription;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CandleSubscription): CandleSubscription;
    internalBinaryWrite(message: CandleSubscription, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.CandleSubscription
 */
export declare const CandleSubscription: CandleSubscription$Type;
declare class SubscribeOrderBookRequest$Type extends MessageType<SubscribeOrderBookRequest> {
    constructor();
    create(value?: PartialMessage<SubscribeOrderBookRequest>): SubscribeOrderBookRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SubscribeOrderBookRequest): SubscribeOrderBookRequest;
    internalBinaryWrite(message: SubscribeOrderBookRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest
 */
export declare const SubscribeOrderBookRequest: SubscribeOrderBookRequest$Type;
declare class OrderBookInstrument$Type extends MessageType<OrderBookInstrument> {
    constructor();
    create(value?: PartialMessage<OrderBookInstrument>): OrderBookInstrument;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OrderBookInstrument): OrderBookInstrument;
    internalBinaryWrite(message: OrderBookInstrument, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.OrderBookInstrument
 */
export declare const OrderBookInstrument: OrderBookInstrument$Type;
declare class SubscribeOrderBookResponse$Type extends MessageType<SubscribeOrderBookResponse> {
    constructor();
    create(value?: PartialMessage<SubscribeOrderBookResponse>): SubscribeOrderBookResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SubscribeOrderBookResponse): SubscribeOrderBookResponse;
    internalBinaryWrite(message: SubscribeOrderBookResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse
 */
export declare const SubscribeOrderBookResponse: SubscribeOrderBookResponse$Type;
declare class OrderBookSubscription$Type extends MessageType<OrderBookSubscription> {
    constructor();
    create(value?: PartialMessage<OrderBookSubscription>): OrderBookSubscription;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OrderBookSubscription): OrderBookSubscription;
    internalBinaryWrite(message: OrderBookSubscription, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.OrderBookSubscription
 */
export declare const OrderBookSubscription: OrderBookSubscription$Type;
declare class SubscribeTradesRequest$Type extends MessageType<SubscribeTradesRequest> {
    constructor();
    create(value?: PartialMessage<SubscribeTradesRequest>): SubscribeTradesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SubscribeTradesRequest): SubscribeTradesRequest;
    internalBinaryWrite(message: SubscribeTradesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest
 */
export declare const SubscribeTradesRequest: SubscribeTradesRequest$Type;
declare class TradeInstrument$Type extends MessageType<TradeInstrument> {
    constructor();
    create(value?: PartialMessage<TradeInstrument>): TradeInstrument;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TradeInstrument): TradeInstrument;
    internalBinaryWrite(message: TradeInstrument, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.TradeInstrument
 */
export declare const TradeInstrument: TradeInstrument$Type;
declare class SubscribeTradesResponse$Type extends MessageType<SubscribeTradesResponse> {
    constructor();
    create(value?: PartialMessage<SubscribeTradesResponse>): SubscribeTradesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SubscribeTradesResponse): SubscribeTradesResponse;
    internalBinaryWrite(message: SubscribeTradesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse
 */
export declare const SubscribeTradesResponse: SubscribeTradesResponse$Type;
declare class TradeSubscription$Type extends MessageType<TradeSubscription> {
    constructor();
    create(value?: PartialMessage<TradeSubscription>): TradeSubscription;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TradeSubscription): TradeSubscription;
    internalBinaryWrite(message: TradeSubscription, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.TradeSubscription
 */
export declare const TradeSubscription: TradeSubscription$Type;
declare class SubscribeInfoRequest$Type extends MessageType<SubscribeInfoRequest> {
    constructor();
    create(value?: PartialMessage<SubscribeInfoRequest>): SubscribeInfoRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SubscribeInfoRequest): SubscribeInfoRequest;
    internalBinaryWrite(message: SubscribeInfoRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest
 */
export declare const SubscribeInfoRequest: SubscribeInfoRequest$Type;
declare class InfoInstrument$Type extends MessageType<InfoInstrument> {
    constructor();
    create(value?: PartialMessage<InfoInstrument>): InfoInstrument;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InfoInstrument): InfoInstrument;
    internalBinaryWrite(message: InfoInstrument, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.InfoInstrument
 */
export declare const InfoInstrument: InfoInstrument$Type;
declare class SubscribeInfoResponse$Type extends MessageType<SubscribeInfoResponse> {
    constructor();
    create(value?: PartialMessage<SubscribeInfoResponse>): SubscribeInfoResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SubscribeInfoResponse): SubscribeInfoResponse;
    internalBinaryWrite(message: SubscribeInfoResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse
 */
export declare const SubscribeInfoResponse: SubscribeInfoResponse$Type;
declare class InfoSubscription$Type extends MessageType<InfoSubscription> {
    constructor();
    create(value?: PartialMessage<InfoSubscription>): InfoSubscription;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InfoSubscription): InfoSubscription;
    internalBinaryWrite(message: InfoSubscription, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.InfoSubscription
 */
export declare const InfoSubscription: InfoSubscription$Type;
declare class SubscribeLastPriceRequest$Type extends MessageType<SubscribeLastPriceRequest> {
    constructor();
    create(value?: PartialMessage<SubscribeLastPriceRequest>): SubscribeLastPriceRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SubscribeLastPriceRequest): SubscribeLastPriceRequest;
    internalBinaryWrite(message: SubscribeLastPriceRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest
 */
export declare const SubscribeLastPriceRequest: SubscribeLastPriceRequest$Type;
declare class LastPriceInstrument$Type extends MessageType<LastPriceInstrument> {
    constructor();
    create(value?: PartialMessage<LastPriceInstrument>): LastPriceInstrument;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LastPriceInstrument): LastPriceInstrument;
    internalBinaryWrite(message: LastPriceInstrument, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.LastPriceInstrument
 */
export declare const LastPriceInstrument: LastPriceInstrument$Type;
declare class SubscribeLastPriceResponse$Type extends MessageType<SubscribeLastPriceResponse> {
    constructor();
    create(value?: PartialMessage<SubscribeLastPriceResponse>): SubscribeLastPriceResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SubscribeLastPriceResponse): SubscribeLastPriceResponse;
    internalBinaryWrite(message: SubscribeLastPriceResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse
 */
export declare const SubscribeLastPriceResponse: SubscribeLastPriceResponse$Type;
declare class LastPriceSubscription$Type extends MessageType<LastPriceSubscription> {
    constructor();
    create(value?: PartialMessage<LastPriceSubscription>): LastPriceSubscription;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LastPriceSubscription): LastPriceSubscription;
    internalBinaryWrite(message: LastPriceSubscription, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.LastPriceSubscription
 */
export declare const LastPriceSubscription: LastPriceSubscription$Type;
declare class Candle$Type extends MessageType<Candle> {
    constructor();
    create(value?: PartialMessage<Candle>): Candle;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Candle): Candle;
    internalBinaryWrite(message: Candle, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.Candle
 */
export declare const Candle: Candle$Type;
declare class OrderBook$Type extends MessageType<OrderBook> {
    constructor();
    create(value?: PartialMessage<OrderBook>): OrderBook;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OrderBook): OrderBook;
    internalBinaryWrite(message: OrderBook, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.OrderBook
 */
export declare const OrderBook: OrderBook$Type;
declare class Order$Type extends MessageType<Order> {
    constructor();
    create(value?: PartialMessage<Order>): Order;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Order): Order;
    internalBinaryWrite(message: Order, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.Order
 */
export declare const Order: Order$Type;
declare class Trade$Type extends MessageType<Trade> {
    constructor();
    create(value?: PartialMessage<Trade>): Trade;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Trade): Trade;
    internalBinaryWrite(message: Trade, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.Trade
 */
export declare const Trade: Trade$Type;
declare class TradingStatus$Type extends MessageType<TradingStatus> {
    constructor();
    create(value?: PartialMessage<TradingStatus>): TradingStatus;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TradingStatus): TradingStatus;
    internalBinaryWrite(message: TradingStatus, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.TradingStatus
 */
export declare const TradingStatus: TradingStatus$Type;
declare class GetCandlesRequest$Type extends MessageType<GetCandlesRequest> {
    constructor();
    create(value?: PartialMessage<GetCandlesRequest>): GetCandlesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCandlesRequest): GetCandlesRequest;
    internalBinaryWrite(message: GetCandlesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetCandlesRequest
 */
export declare const GetCandlesRequest: GetCandlesRequest$Type;
declare class GetCandlesResponse$Type extends MessageType<GetCandlesResponse> {
    constructor();
    create(value?: PartialMessage<GetCandlesResponse>): GetCandlesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCandlesResponse): GetCandlesResponse;
    internalBinaryWrite(message: GetCandlesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetCandlesResponse
 */
export declare const GetCandlesResponse: GetCandlesResponse$Type;
declare class HistoricCandle$Type extends MessageType<HistoricCandle> {
    constructor();
    create(value?: PartialMessage<HistoricCandle>): HistoricCandle;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HistoricCandle): HistoricCandle;
    internalBinaryWrite(message: HistoricCandle, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.HistoricCandle
 */
export declare const HistoricCandle: HistoricCandle$Type;
declare class GetLastPricesRequest$Type extends MessageType<GetLastPricesRequest> {
    constructor();
    create(value?: PartialMessage<GetLastPricesRequest>): GetLastPricesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetLastPricesRequest): GetLastPricesRequest;
    internalBinaryWrite(message: GetLastPricesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetLastPricesRequest
 */
export declare const GetLastPricesRequest: GetLastPricesRequest$Type;
declare class GetLastPricesResponse$Type extends MessageType<GetLastPricesResponse> {
    constructor();
    create(value?: PartialMessage<GetLastPricesResponse>): GetLastPricesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetLastPricesResponse): GetLastPricesResponse;
    internalBinaryWrite(message: GetLastPricesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetLastPricesResponse
 */
export declare const GetLastPricesResponse: GetLastPricesResponse$Type;
declare class LastPrice$Type extends MessageType<LastPrice> {
    constructor();
    create(value?: PartialMessage<LastPrice>): LastPrice;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LastPrice): LastPrice;
    internalBinaryWrite(message: LastPrice, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.LastPrice
 */
export declare const LastPrice: LastPrice$Type;
declare class GetOrderBookRequest$Type extends MessageType<GetOrderBookRequest> {
    constructor();
    create(value?: PartialMessage<GetOrderBookRequest>): GetOrderBookRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetOrderBookRequest): GetOrderBookRequest;
    internalBinaryWrite(message: GetOrderBookRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetOrderBookRequest
 */
export declare const GetOrderBookRequest: GetOrderBookRequest$Type;
declare class GetOrderBookResponse$Type extends MessageType<GetOrderBookResponse> {
    constructor();
    create(value?: PartialMessage<GetOrderBookResponse>): GetOrderBookResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetOrderBookResponse): GetOrderBookResponse;
    internalBinaryWrite(message: GetOrderBookResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetOrderBookResponse
 */
export declare const GetOrderBookResponse: GetOrderBookResponse$Type;
declare class GetTradingStatusRequest$Type extends MessageType<GetTradingStatusRequest> {
    constructor();
    create(value?: PartialMessage<GetTradingStatusRequest>): GetTradingStatusRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetTradingStatusRequest): GetTradingStatusRequest;
    internalBinaryWrite(message: GetTradingStatusRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest
 */
export declare const GetTradingStatusRequest: GetTradingStatusRequest$Type;
declare class GetTradingStatusResponse$Type extends MessageType<GetTradingStatusResponse> {
    constructor();
    create(value?: PartialMessage<GetTradingStatusResponse>): GetTradingStatusResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetTradingStatusResponse): GetTradingStatusResponse;
    internalBinaryWrite(message: GetTradingStatusResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse
 */
export declare const GetTradingStatusResponse: GetTradingStatusResponse$Type;
declare class GetLastTradesRequest$Type extends MessageType<GetLastTradesRequest> {
    constructor();
    create(value?: PartialMessage<GetLastTradesRequest>): GetLastTradesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetLastTradesRequest): GetLastTradesRequest;
    internalBinaryWrite(message: GetLastTradesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetLastTradesRequest
 */
export declare const GetLastTradesRequest: GetLastTradesRequest$Type;
declare class GetLastTradesResponse$Type extends MessageType<GetLastTradesResponse> {
    constructor();
    create(value?: PartialMessage<GetLastTradesResponse>): GetLastTradesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetLastTradesResponse): GetLastTradesResponse;
    internalBinaryWrite(message: GetLastTradesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetLastTradesResponse
 */
export declare const GetLastTradesResponse: GetLastTradesResponse$Type;
declare class GetMySubscriptions$Type extends MessageType<GetMySubscriptions> {
    constructor();
    create(value?: PartialMessage<GetMySubscriptions>): GetMySubscriptions;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetMySubscriptions): GetMySubscriptions;
    internalBinaryWrite(message: GetMySubscriptions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetMySubscriptions
 */
export declare const GetMySubscriptions: GetMySubscriptions$Type;
declare class GetClosePricesRequest$Type extends MessageType<GetClosePricesRequest> {
    constructor();
    create(value?: PartialMessage<GetClosePricesRequest>): GetClosePricesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetClosePricesRequest): GetClosePricesRequest;
    internalBinaryWrite(message: GetClosePricesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetClosePricesRequest
 */
export declare const GetClosePricesRequest: GetClosePricesRequest$Type;
declare class InstrumentClosePriceRequest$Type extends MessageType<InstrumentClosePriceRequest> {
    constructor();
    create(value?: PartialMessage<InstrumentClosePriceRequest>): InstrumentClosePriceRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InstrumentClosePriceRequest): InstrumentClosePriceRequest;
    internalBinaryWrite(message: InstrumentClosePriceRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest
 */
export declare const InstrumentClosePriceRequest: InstrumentClosePriceRequest$Type;
declare class GetClosePricesResponse$Type extends MessageType<GetClosePricesResponse> {
    constructor();
    create(value?: PartialMessage<GetClosePricesResponse>): GetClosePricesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetClosePricesResponse): GetClosePricesResponse;
    internalBinaryWrite(message: GetClosePricesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.GetClosePricesResponse
 */
export declare const GetClosePricesResponse: GetClosePricesResponse$Type;
declare class InstrumentClosePriceResponse$Type extends MessageType<InstrumentClosePriceResponse> {
    constructor();
    create(value?: PartialMessage<InstrumentClosePriceResponse>): InstrumentClosePriceResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InstrumentClosePriceResponse): InstrumentClosePriceResponse;
    internalBinaryWrite(message: InstrumentClosePriceResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse
 */
export declare const InstrumentClosePriceResponse: InstrumentClosePriceResponse$Type;
/**
 * @generated ServiceType for protobuf service tinkoff.public.invest.api.contract.v1.MarketDataService
 */
export declare const MarketDataService: ServiceType;
/**
 * @generated ServiceType for protobuf service tinkoff.public.invest.api.contract.v1.MarketDataStreamService
 */
export declare const MarketDataStreamService: ServiceType;
export {};
