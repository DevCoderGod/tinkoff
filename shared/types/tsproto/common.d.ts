import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "./google/protobuf/timestamp";
/**
 * Денежная сумма в определенной валюте
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.MoneyValue
 */
export interface MoneyValue {
    /**
     * строковый ISO-код валюты
     *
     * @generated from protobuf field: string currency = 1;
     */
    currency: string;
    /**
     * целая часть суммы, может быть отрицательным числом
     *
     * @generated from protobuf field: int64 units = 2;
     */
    units: bigint;
    /**
     * дробная часть суммы, может быть отрицательным числом
     *
     * @generated from protobuf field: int32 nano = 3;
     */
    nano: number;
}
/**
 * Котировка - денежная сумма без указания валюты
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.Quotation
 */
export interface Quotation {
    /**
     * целая часть суммы, может быть отрицательным числом
     *
     * @generated from protobuf field: int64 units = 1;
     */
    units: bigint;
    /**
     * дробная часть суммы, может быть отрицательным числом
     *
     * @generated from protobuf field: int32 nano = 2;
     */
    nano: number;
}
/**
 * Проверка активности стрима.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.Ping
 */
export interface Ping {
    /**
     * Время проверки.
     *
     * @generated from protobuf field: google.protobuf.Timestamp time = 1;
     */
    time?: Timestamp;
}
/**
 * Режим торгов инструмента
 *
 * @generated from protobuf enum tinkoff.public.invest.api.contract.v1.SecurityTradingStatus
 */
export declare enum SecurityTradingStatus {
    /**
     * Торговый статус не определён
     *
     * @generated from protobuf enum value: SECURITY_TRADING_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Недоступен для торгов
     *
     * @generated from protobuf enum value: SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING = 1;
     */
    NOT_AVAILABLE_FOR_TRADING = 1,
    /**
     * Период открытия торгов
     *
     * @generated from protobuf enum value: SECURITY_TRADING_STATUS_OPENING_PERIOD = 2;
     */
    OPENING_PERIOD = 2,
    /**
     * Период закрытия торгов
     *
     * @generated from protobuf enum value: SECURITY_TRADING_STATUS_CLOSING_PERIOD = 3;
     */
    CLOSING_PERIOD = 3,
    /**
     * Перерыв в торговле
     *
     * @generated from protobuf enum value: SECURITY_TRADING_STATUS_BREAK_IN_TRADING = 4;
     */
    BREAK_IN_TRADING = 4,
    /**
     * Нормальная торговля
     *
     * @generated from protobuf enum value: SECURITY_TRADING_STATUS_NORMAL_TRADING = 5;
     */
    NORMAL_TRADING = 5,
    /**
     * Аукцион закрытия
     *
     * @generated from protobuf enum value: SECURITY_TRADING_STATUS_CLOSING_AUCTION = 6;
     */
    CLOSING_AUCTION = 6,
    /**
     * Аукцион крупных пакетов
     *
     * @generated from protobuf enum value: SECURITY_TRADING_STATUS_DARK_POOL_AUCTION = 7;
     */
    DARK_POOL_AUCTION = 7,
    /**
     * Дискретный аукцион
     *
     * @generated from protobuf enum value: SECURITY_TRADING_STATUS_DISCRETE_AUCTION = 8;
     */
    DISCRETE_AUCTION = 8,
    /**
     * Аукцион открытия
     *
     * @generated from protobuf enum value: SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD = 9;
     */
    OPENING_AUCTION_PERIOD = 9,
    /**
     * Период торгов по цене аукциона закрытия
     *
     * @generated from protobuf enum value: SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE = 10;
     */
    TRADING_AT_CLOSING_AUCTION_PRICE = 10,
    /**
     * Сессия назначена
     *
     * @generated from protobuf enum value: SECURITY_TRADING_STATUS_SESSION_ASSIGNED = 11;
     */
    SESSION_ASSIGNED = 11,
    /**
     * Сессия закрыта
     *
     * @generated from protobuf enum value: SECURITY_TRADING_STATUS_SESSION_CLOSE = 12;
     */
    SESSION_CLOSE = 12,
    /**
     * Сессия открыта
     *
     * @generated from protobuf enum value: SECURITY_TRADING_STATUS_SESSION_OPEN = 13;
     */
    SESSION_OPEN = 13,
    /**
     * Доступна торговля в режиме внутренней ликвидности брокера
     *
     * @generated from protobuf enum value: SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING = 14;
     */
    DEALER_NORMAL_TRADING = 14,
    /**
     * Перерыв торговли в режиме внутренней ликвидности брокера
     *
     * @generated from protobuf enum value: SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING = 15;
     */
    DEALER_BREAK_IN_TRADING = 15,
    /**
     * Недоступна торговля в режиме внутренней ликвидности брокера
     *
     * @generated from protobuf enum value: SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING = 16;
     */
    DEALER_NOT_AVAILABLE_FOR_TRADING = 16
}
declare class MoneyValue$Type extends MessageType<MoneyValue> {
    constructor();
    create(value?: PartialMessage<MoneyValue>): MoneyValue;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MoneyValue): MoneyValue;
    internalBinaryWrite(message: MoneyValue, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.MoneyValue
 */
export declare const MoneyValue: MoneyValue$Type;
declare class Quotation$Type extends MessageType<Quotation> {
    constructor();
    create(value?: PartialMessage<Quotation>): Quotation;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Quotation): Quotation;
    internalBinaryWrite(message: Quotation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.Quotation
 */
export declare const Quotation: Quotation$Type;
declare class Ping$Type extends MessageType<Ping> {
    constructor();
    create(value?: PartialMessage<Ping>): Ping;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Ping): Ping;
    internalBinaryWrite(message: Ping, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.Ping
 */
export declare const Ping: Ping$Type;
export {};
