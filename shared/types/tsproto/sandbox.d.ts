import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { MoneyValue } from "./common";
/**
 * Запрос открытия счёта в песочнице.
 *
 * пустой запрос
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.OpenSandboxAccountRequest
 */
export interface OpenSandboxAccountRequest {
}
/**
 * Номер открытого счёта в песочнице.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.OpenSandboxAccountResponse
 */
export interface OpenSandboxAccountResponse {
    /**
     * @generated from protobuf field: string account_id = 1;
     */
    accountId: string;
}
/**
 * Запрос закрытия счёта в песочнице.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.CloseSandboxAccountRequest
 */
export interface CloseSandboxAccountRequest {
    /**
     * @generated from protobuf field: string account_id = 1;
     */
    accountId: string;
}
/**
 * Результат закрытия счёта в песочнице.
 *
 * пустой ответ
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.CloseSandboxAccountResponse
 */
export interface CloseSandboxAccountResponse {
}
/**
 * Запрос пополнения счёта в песочнице.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.SandboxPayInRequest
 */
export interface SandboxPayInRequest {
    /**
     * @generated from protobuf field: string account_id = 1;
     */
    accountId: string;
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue amount = 2;
     */
    amount?: MoneyValue;
}
/**
 * Результат пополнения счёта, текущий баланс.
 *
 * @generated from protobuf message tinkoff.public.invest.api.contract.v1.SandboxPayInResponse
 */
export interface SandboxPayInResponse {
    /**
     * @generated from protobuf field: tinkoff.public.invest.api.contract.v1.MoneyValue balance = 1;
     */
    balance?: MoneyValue;
}
declare class OpenSandboxAccountRequest$Type extends MessageType<OpenSandboxAccountRequest> {
    constructor();
    create(value?: PartialMessage<OpenSandboxAccountRequest>): OpenSandboxAccountRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OpenSandboxAccountRequest): OpenSandboxAccountRequest;
    internalBinaryWrite(message: OpenSandboxAccountRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.OpenSandboxAccountRequest
 */
export declare const OpenSandboxAccountRequest: OpenSandboxAccountRequest$Type;
declare class OpenSandboxAccountResponse$Type extends MessageType<OpenSandboxAccountResponse> {
    constructor();
    create(value?: PartialMessage<OpenSandboxAccountResponse>): OpenSandboxAccountResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OpenSandboxAccountResponse): OpenSandboxAccountResponse;
    internalBinaryWrite(message: OpenSandboxAccountResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.OpenSandboxAccountResponse
 */
export declare const OpenSandboxAccountResponse: OpenSandboxAccountResponse$Type;
declare class CloseSandboxAccountRequest$Type extends MessageType<CloseSandboxAccountRequest> {
    constructor();
    create(value?: PartialMessage<CloseSandboxAccountRequest>): CloseSandboxAccountRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CloseSandboxAccountRequest): CloseSandboxAccountRequest;
    internalBinaryWrite(message: CloseSandboxAccountRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.CloseSandboxAccountRequest
 */
export declare const CloseSandboxAccountRequest: CloseSandboxAccountRequest$Type;
declare class CloseSandboxAccountResponse$Type extends MessageType<CloseSandboxAccountResponse> {
    constructor();
    create(value?: PartialMessage<CloseSandboxAccountResponse>): CloseSandboxAccountResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CloseSandboxAccountResponse): CloseSandboxAccountResponse;
    internalBinaryWrite(message: CloseSandboxAccountResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.CloseSandboxAccountResponse
 */
export declare const CloseSandboxAccountResponse: CloseSandboxAccountResponse$Type;
declare class SandboxPayInRequest$Type extends MessageType<SandboxPayInRequest> {
    constructor();
    create(value?: PartialMessage<SandboxPayInRequest>): SandboxPayInRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SandboxPayInRequest): SandboxPayInRequest;
    internalBinaryWrite(message: SandboxPayInRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.SandboxPayInRequest
 */
export declare const SandboxPayInRequest: SandboxPayInRequest$Type;
declare class SandboxPayInResponse$Type extends MessageType<SandboxPayInResponse> {
    constructor();
    create(value?: PartialMessage<SandboxPayInResponse>): SandboxPayInResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SandboxPayInResponse): SandboxPayInResponse;
    internalBinaryWrite(message: SandboxPayInResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tinkoff.public.invest.api.contract.v1.SandboxPayInResponse
 */
export declare const SandboxPayInResponse: SandboxPayInResponse$Type;
/**
 * @generated ServiceType for protobuf service tinkoff.public.invest.api.contract.v1.SandboxService
 */
export declare const SandboxService: ServiceType;
export {};
