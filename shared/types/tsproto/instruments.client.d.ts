import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { Brand } from "./instruments";
import type { GetBrandRequest } from "./instruments";
import type { GetBrandsResponse } from "./instruments";
import type { GetBrandsRequest } from "./instruments";
import type { FindInstrumentResponse } from "./instruments";
import type { FindInstrumentRequest } from "./instruments";
import type { GetCountriesResponse } from "./instruments";
import type { GetCountriesRequest } from "./instruments";
import type { EditFavoritesResponse } from "./instruments";
import type { EditFavoritesRequest } from "./instruments";
import type { GetFavoritesResponse } from "./instruments";
import type { GetFavoritesRequest } from "./instruments";
import type { AssetsResponse } from "./instruments";
import type { AssetsRequest } from "./instruments";
import type { AssetResponse } from "./instruments";
import type { AssetRequest } from "./instruments";
import type { GetDividendsResponse } from "./instruments";
import type { GetDividendsRequest } from "./instruments";
import type { InstrumentResponse } from "./instruments";
import type { GetFuturesMarginResponse } from "./instruments";
import type { GetFuturesMarginRequest } from "./instruments";
import type { GetAccruedInterestsResponse } from "./instruments";
import type { GetAccruedInterestsRequest } from "./instruments";
import type { SharesResponse } from "./instruments";
import type { ShareResponse } from "./instruments";
import type { OptionsResponse } from "./instruments";
import type { OptionResponse } from "./instruments";
import type { FuturesResponse } from "./instruments";
import type { FutureResponse } from "./instruments";
import type { EtfsResponse } from "./instruments";
import type { EtfResponse } from "./instruments";
import type { CurrenciesResponse } from "./instruments";
import type { CurrencyResponse } from "./instruments";
import type { GetBondCouponsResponse } from "./instruments";
import type { GetBondCouponsRequest } from "./instruments";
import type { BondsResponse } from "./instruments";
import type { InstrumentsRequest } from "./instruments";
import type { BondResponse } from "./instruments";
import type { InstrumentRequest } from "./instruments";
import type { TradingSchedulesResponse } from "./instruments";
import type { TradingSchedulesRequest } from "./instruments";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Сервис предназначен для получения:</br>**1**. информации об инструментах;</br>**2**.
 * расписания торговых сессий;</br>**3**. календаря выплат купонов по облигациям;</br>**4**.
 * размера гарантийного обеспечения по фьючерсам;</br>**5**. дивидендов по ценной бумаге.
 *
 * @generated from protobuf service tinkoff.public.invest.api.contract.v1.InstrumentsService
 */
export interface IInstrumentsServiceClient {
    /**
     * Метод получения расписания торгов торговых площадок.
     *
     * @generated from protobuf rpc: TradingSchedules(tinkoff.public.invest.api.contract.v1.TradingSchedulesRequest) returns (tinkoff.public.invest.api.contract.v1.TradingSchedulesResponse);
     */
    tradingSchedules(input: TradingSchedulesRequest, options?: RpcOptions): UnaryCall<TradingSchedulesRequest, TradingSchedulesResponse>;
    /**
     * Метод получения облигации по её идентификатору.
     *
     * @generated from protobuf rpc: BondBy(tinkoff.public.invest.api.contract.v1.InstrumentRequest) returns (tinkoff.public.invest.api.contract.v1.BondResponse);
     */
    bondBy(input: InstrumentRequest, options?: RpcOptions): UnaryCall<InstrumentRequest, BondResponse>;
    /**
     * Метод получения списка облигаций.
     *
     * @generated from protobuf rpc: Bonds(tinkoff.public.invest.api.contract.v1.InstrumentsRequest) returns (tinkoff.public.invest.api.contract.v1.BondsResponse);
     */
    bonds(input: InstrumentsRequest, options?: RpcOptions): UnaryCall<InstrumentsRequest, BondsResponse>;
    /**
     * Метод получения графика выплат купонов по облигации.
     *
     * @generated from protobuf rpc: GetBondCoupons(tinkoff.public.invest.api.contract.v1.GetBondCouponsRequest) returns (tinkoff.public.invest.api.contract.v1.GetBondCouponsResponse);
     */
    getBondCoupons(input: GetBondCouponsRequest, options?: RpcOptions): UnaryCall<GetBondCouponsRequest, GetBondCouponsResponse>;
    /**
     * Метод получения валюты по её идентификатору.
     *
     * @generated from protobuf rpc: CurrencyBy(tinkoff.public.invest.api.contract.v1.InstrumentRequest) returns (tinkoff.public.invest.api.contract.v1.CurrencyResponse);
     */
    currencyBy(input: InstrumentRequest, options?: RpcOptions): UnaryCall<InstrumentRequest, CurrencyResponse>;
    /**
     * Метод получения списка валют.
     *
     * @generated from protobuf rpc: Currencies(tinkoff.public.invest.api.contract.v1.InstrumentsRequest) returns (tinkoff.public.invest.api.contract.v1.CurrenciesResponse);
     */
    currencies(input: InstrumentsRequest, options?: RpcOptions): UnaryCall<InstrumentsRequest, CurrenciesResponse>;
    /**
     * Метод получения инвестиционного фонда по его идентификатору.
     *
     * @generated from protobuf rpc: EtfBy(tinkoff.public.invest.api.contract.v1.InstrumentRequest) returns (tinkoff.public.invest.api.contract.v1.EtfResponse);
     */
    etfBy(input: InstrumentRequest, options?: RpcOptions): UnaryCall<InstrumentRequest, EtfResponse>;
    /**
     * Метод получения списка инвестиционных фондов.
     *
     * @generated from protobuf rpc: Etfs(tinkoff.public.invest.api.contract.v1.InstrumentsRequest) returns (tinkoff.public.invest.api.contract.v1.EtfsResponse);
     */
    etfs(input: InstrumentsRequest, options?: RpcOptions): UnaryCall<InstrumentsRequest, EtfsResponse>;
    /**
     * Метод получения фьючерса по его идентификатору.
     *
     * @generated from protobuf rpc: FutureBy(tinkoff.public.invest.api.contract.v1.InstrumentRequest) returns (tinkoff.public.invest.api.contract.v1.FutureResponse);
     */
    futureBy(input: InstrumentRequest, options?: RpcOptions): UnaryCall<InstrumentRequest, FutureResponse>;
    /**
     * Метод получения списка фьючерсов.
     *
     * @generated from protobuf rpc: Futures(tinkoff.public.invest.api.contract.v1.InstrumentsRequest) returns (tinkoff.public.invest.api.contract.v1.FuturesResponse);
     */
    futures(input: InstrumentsRequest, options?: RpcOptions): UnaryCall<InstrumentsRequest, FuturesResponse>;
    /**
     * Метод получения опциона по его идентификатору.
     *
     * @generated from protobuf rpc: OptionBy(tinkoff.public.invest.api.contract.v1.InstrumentRequest) returns (tinkoff.public.invest.api.contract.v1.OptionResponse);
     */
    optionBy(input: InstrumentRequest, options?: RpcOptions): UnaryCall<InstrumentRequest, OptionResponse>;
    /**
     * Метод получения списка опционов.
     *
     * @generated from protobuf rpc: Options(tinkoff.public.invest.api.contract.v1.InstrumentsRequest) returns (tinkoff.public.invest.api.contract.v1.OptionsResponse);
     */
    options$(input: InstrumentsRequest, options?: RpcOptions): UnaryCall<InstrumentsRequest, OptionsResponse>;
    /**
     * Метод получения акции по её идентификатору.
     *
     * @generated from protobuf rpc: ShareBy(tinkoff.public.invest.api.contract.v1.InstrumentRequest) returns (tinkoff.public.invest.api.contract.v1.ShareResponse);
     */
    shareBy(input: InstrumentRequest, options?: RpcOptions): UnaryCall<InstrumentRequest, ShareResponse>;
    /**
     * Метод получения списка акций.
     *
     * @generated from protobuf rpc: Shares(tinkoff.public.invest.api.contract.v1.InstrumentsRequest) returns (tinkoff.public.invest.api.contract.v1.SharesResponse);
     */
    shares(input: InstrumentsRequest, options?: RpcOptions): UnaryCall<InstrumentsRequest, SharesResponse>;
    /**
     * Метод получения накопленного купонного дохода по облигации.
     *
     * @generated from protobuf rpc: GetAccruedInterests(tinkoff.public.invest.api.contract.v1.GetAccruedInterestsRequest) returns (tinkoff.public.invest.api.contract.v1.GetAccruedInterestsResponse);
     */
    getAccruedInterests(input: GetAccruedInterestsRequest, options?: RpcOptions): UnaryCall<GetAccruedInterestsRequest, GetAccruedInterestsResponse>;
    /**
     * Метод получения размера гарантийного обеспечения по фьючерсам.
     *
     * @generated from protobuf rpc: GetFuturesMargin(tinkoff.public.invest.api.contract.v1.GetFuturesMarginRequest) returns (tinkoff.public.invest.api.contract.v1.GetFuturesMarginResponse);
     */
    getFuturesMargin(input: GetFuturesMarginRequest, options?: RpcOptions): UnaryCall<GetFuturesMarginRequest, GetFuturesMarginResponse>;
    /**
     * Метод получения основной информации об инструменте.
     *
     * @generated from protobuf rpc: GetInstrumentBy(tinkoff.public.invest.api.contract.v1.InstrumentRequest) returns (tinkoff.public.invest.api.contract.v1.InstrumentResponse);
     */
    getInstrumentBy(input: InstrumentRequest, options?: RpcOptions): UnaryCall<InstrumentRequest, InstrumentResponse>;
    /**
     * Метод для получения событий выплаты дивидендов по инструменту.
     *
     * @generated from protobuf rpc: GetDividends(tinkoff.public.invest.api.contract.v1.GetDividendsRequest) returns (tinkoff.public.invest.api.contract.v1.GetDividendsResponse);
     */
    getDividends(input: GetDividendsRequest, options?: RpcOptions): UnaryCall<GetDividendsRequest, GetDividendsResponse>;
    /**
     * Метод получения актива по его идентификатору.
     *
     * @generated from protobuf rpc: GetAssetBy(tinkoff.public.invest.api.contract.v1.AssetRequest) returns (tinkoff.public.invest.api.contract.v1.AssetResponse);
     */
    getAssetBy(input: AssetRequest, options?: RpcOptions): UnaryCall<AssetRequest, AssetResponse>;
    /**
     * Метод получения списка активов.
     *
     * @generated from protobuf rpc: GetAssets(tinkoff.public.invest.api.contract.v1.AssetsRequest) returns (tinkoff.public.invest.api.contract.v1.AssetsResponse);
     */
    getAssets(input: AssetsRequest, options?: RpcOptions): UnaryCall<AssetsRequest, AssetsResponse>;
    /**
     * Метод получения списка избранных инструментов.
     *
     * @generated from protobuf rpc: GetFavorites(tinkoff.public.invest.api.contract.v1.GetFavoritesRequest) returns (tinkoff.public.invest.api.contract.v1.GetFavoritesResponse);
     */
    getFavorites(input: GetFavoritesRequest, options?: RpcOptions): UnaryCall<GetFavoritesRequest, GetFavoritesResponse>;
    /**
     * Метод редактирования списка избранных инструментов.
     *
     * @generated from protobuf rpc: EditFavorites(tinkoff.public.invest.api.contract.v1.EditFavoritesRequest) returns (tinkoff.public.invest.api.contract.v1.EditFavoritesResponse);
     */
    editFavorites(input: EditFavoritesRequest, options?: RpcOptions): UnaryCall<EditFavoritesRequest, EditFavoritesResponse>;
    /**
     * Метод получения списка стран.
     *
     * @generated from protobuf rpc: GetCountries(tinkoff.public.invest.api.contract.v1.GetCountriesRequest) returns (tinkoff.public.invest.api.contract.v1.GetCountriesResponse);
     */
    getCountries(input: GetCountriesRequest, options?: RpcOptions): UnaryCall<GetCountriesRequest, GetCountriesResponse>;
    /**
     * Метод поиска инструмента.
     *
     * @generated from protobuf rpc: FindInstrument(tinkoff.public.invest.api.contract.v1.FindInstrumentRequest) returns (tinkoff.public.invest.api.contract.v1.FindInstrumentResponse);
     */
    findInstrument(input: FindInstrumentRequest, options?: RpcOptions): UnaryCall<FindInstrumentRequest, FindInstrumentResponse>;
    /**
     * Метод получения списка брендов.
     *
     * @generated from protobuf rpc: GetBrands(tinkoff.public.invest.api.contract.v1.GetBrandsRequest) returns (tinkoff.public.invest.api.contract.v1.GetBrandsResponse);
     */
    getBrands(input: GetBrandsRequest, options?: RpcOptions): UnaryCall<GetBrandsRequest, GetBrandsResponse>;
    /**
     * Метод получения бренда по его идентификатору.
     *
     * @generated from protobuf rpc: GetBrandBy(tinkoff.public.invest.api.contract.v1.GetBrandRequest) returns (tinkoff.public.invest.api.contract.v1.Brand);
     */
    getBrandBy(input: GetBrandRequest, options?: RpcOptions): UnaryCall<GetBrandRequest, Brand>;
}
/**
 * Сервис предназначен для получения:</br>**1**. информации об инструментах;</br>**2**.
 * расписания торговых сессий;</br>**3**. календаря выплат купонов по облигациям;</br>**4**.
 * размера гарантийного обеспечения по фьючерсам;</br>**5**. дивидендов по ценной бумаге.
 *
 * @generated from protobuf service tinkoff.public.invest.api.contract.v1.InstrumentsService
 */
export declare class InstrumentsServiceClient implements IInstrumentsServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * Метод получения расписания торгов торговых площадок.
     *
     * @generated from protobuf rpc: TradingSchedules(tinkoff.public.invest.api.contract.v1.TradingSchedulesRequest) returns (tinkoff.public.invest.api.contract.v1.TradingSchedulesResponse);
     */
    tradingSchedules(input: TradingSchedulesRequest, options?: RpcOptions): UnaryCall<TradingSchedulesRequest, TradingSchedulesResponse>;
    /**
     * Метод получения облигации по её идентификатору.
     *
     * @generated from protobuf rpc: BondBy(tinkoff.public.invest.api.contract.v1.InstrumentRequest) returns (tinkoff.public.invest.api.contract.v1.BondResponse);
     */
    bondBy(input: InstrumentRequest, options?: RpcOptions): UnaryCall<InstrumentRequest, BondResponse>;
    /**
     * Метод получения списка облигаций.
     *
     * @generated from protobuf rpc: Bonds(tinkoff.public.invest.api.contract.v1.InstrumentsRequest) returns (tinkoff.public.invest.api.contract.v1.BondsResponse);
     */
    bonds(input: InstrumentsRequest, options?: RpcOptions): UnaryCall<InstrumentsRequest, BondsResponse>;
    /**
     * Метод получения графика выплат купонов по облигации.
     *
     * @generated from protobuf rpc: GetBondCoupons(tinkoff.public.invest.api.contract.v1.GetBondCouponsRequest) returns (tinkoff.public.invest.api.contract.v1.GetBondCouponsResponse);
     */
    getBondCoupons(input: GetBondCouponsRequest, options?: RpcOptions): UnaryCall<GetBondCouponsRequest, GetBondCouponsResponse>;
    /**
     * Метод получения валюты по её идентификатору.
     *
     * @generated from protobuf rpc: CurrencyBy(tinkoff.public.invest.api.contract.v1.InstrumentRequest) returns (tinkoff.public.invest.api.contract.v1.CurrencyResponse);
     */
    currencyBy(input: InstrumentRequest, options?: RpcOptions): UnaryCall<InstrumentRequest, CurrencyResponse>;
    /**
     * Метод получения списка валют.
     *
     * @generated from protobuf rpc: Currencies(tinkoff.public.invest.api.contract.v1.InstrumentsRequest) returns (tinkoff.public.invest.api.contract.v1.CurrenciesResponse);
     */
    currencies(input: InstrumentsRequest, options?: RpcOptions): UnaryCall<InstrumentsRequest, CurrenciesResponse>;
    /**
     * Метод получения инвестиционного фонда по его идентификатору.
     *
     * @generated from protobuf rpc: EtfBy(tinkoff.public.invest.api.contract.v1.InstrumentRequest) returns (tinkoff.public.invest.api.contract.v1.EtfResponse);
     */
    etfBy(input: InstrumentRequest, options?: RpcOptions): UnaryCall<InstrumentRequest, EtfResponse>;
    /**
     * Метод получения списка инвестиционных фондов.
     *
     * @generated from protobuf rpc: Etfs(tinkoff.public.invest.api.contract.v1.InstrumentsRequest) returns (tinkoff.public.invest.api.contract.v1.EtfsResponse);
     */
    etfs(input: InstrumentsRequest, options?: RpcOptions): UnaryCall<InstrumentsRequest, EtfsResponse>;
    /**
     * Метод получения фьючерса по его идентификатору.
     *
     * @generated from protobuf rpc: FutureBy(tinkoff.public.invest.api.contract.v1.InstrumentRequest) returns (tinkoff.public.invest.api.contract.v1.FutureResponse);
     */
    futureBy(input: InstrumentRequest, options?: RpcOptions): UnaryCall<InstrumentRequest, FutureResponse>;
    /**
     * Метод получения списка фьючерсов.
     *
     * @generated from protobuf rpc: Futures(tinkoff.public.invest.api.contract.v1.InstrumentsRequest) returns (tinkoff.public.invest.api.contract.v1.FuturesResponse);
     */
    futures(input: InstrumentsRequest, options?: RpcOptions): UnaryCall<InstrumentsRequest, FuturesResponse>;
    /**
     * Метод получения опциона по его идентификатору.
     *
     * @generated from protobuf rpc: OptionBy(tinkoff.public.invest.api.contract.v1.InstrumentRequest) returns (tinkoff.public.invest.api.contract.v1.OptionResponse);
     */
    optionBy(input: InstrumentRequest, options?: RpcOptions): UnaryCall<InstrumentRequest, OptionResponse>;
    /**
     * Метод получения списка опционов.
     *
     * @generated from protobuf rpc: Options(tinkoff.public.invest.api.contract.v1.InstrumentsRequest) returns (tinkoff.public.invest.api.contract.v1.OptionsResponse);
     */
    options$(input: InstrumentsRequest, options?: RpcOptions): UnaryCall<InstrumentsRequest, OptionsResponse>;
    /**
     * Метод получения акции по её идентификатору.
     *
     * @generated from protobuf rpc: ShareBy(tinkoff.public.invest.api.contract.v1.InstrumentRequest) returns (tinkoff.public.invest.api.contract.v1.ShareResponse);
     */
    shareBy(input: InstrumentRequest, options?: RpcOptions): UnaryCall<InstrumentRequest, ShareResponse>;
    /**
     * Метод получения списка акций.
     *
     * @generated from protobuf rpc: Shares(tinkoff.public.invest.api.contract.v1.InstrumentsRequest) returns (tinkoff.public.invest.api.contract.v1.SharesResponse);
     */
    shares(input: InstrumentsRequest, options?: RpcOptions): UnaryCall<InstrumentsRequest, SharesResponse>;
    /**
     * Метод получения накопленного купонного дохода по облигации.
     *
     * @generated from protobuf rpc: GetAccruedInterests(tinkoff.public.invest.api.contract.v1.GetAccruedInterestsRequest) returns (tinkoff.public.invest.api.contract.v1.GetAccruedInterestsResponse);
     */
    getAccruedInterests(input: GetAccruedInterestsRequest, options?: RpcOptions): UnaryCall<GetAccruedInterestsRequest, GetAccruedInterestsResponse>;
    /**
     * Метод получения размера гарантийного обеспечения по фьючерсам.
     *
     * @generated from protobuf rpc: GetFuturesMargin(tinkoff.public.invest.api.contract.v1.GetFuturesMarginRequest) returns (tinkoff.public.invest.api.contract.v1.GetFuturesMarginResponse);
     */
    getFuturesMargin(input: GetFuturesMarginRequest, options?: RpcOptions): UnaryCall<GetFuturesMarginRequest, GetFuturesMarginResponse>;
    /**
     * Метод получения основной информации об инструменте.
     *
     * @generated from protobuf rpc: GetInstrumentBy(tinkoff.public.invest.api.contract.v1.InstrumentRequest) returns (tinkoff.public.invest.api.contract.v1.InstrumentResponse);
     */
    getInstrumentBy(input: InstrumentRequest, options?: RpcOptions): UnaryCall<InstrumentRequest, InstrumentResponse>;
    /**
     * Метод для получения событий выплаты дивидендов по инструменту.
     *
     * @generated from protobuf rpc: GetDividends(tinkoff.public.invest.api.contract.v1.GetDividendsRequest) returns (tinkoff.public.invest.api.contract.v1.GetDividendsResponse);
     */
    getDividends(input: GetDividendsRequest, options?: RpcOptions): UnaryCall<GetDividendsRequest, GetDividendsResponse>;
    /**
     * Метод получения актива по его идентификатору.
     *
     * @generated from protobuf rpc: GetAssetBy(tinkoff.public.invest.api.contract.v1.AssetRequest) returns (tinkoff.public.invest.api.contract.v1.AssetResponse);
     */
    getAssetBy(input: AssetRequest, options?: RpcOptions): UnaryCall<AssetRequest, AssetResponse>;
    /**
     * Метод получения списка активов.
     *
     * @generated from protobuf rpc: GetAssets(tinkoff.public.invest.api.contract.v1.AssetsRequest) returns (tinkoff.public.invest.api.contract.v1.AssetsResponse);
     */
    getAssets(input: AssetsRequest, options?: RpcOptions): UnaryCall<AssetsRequest, AssetsResponse>;
    /**
     * Метод получения списка избранных инструментов.
     *
     * @generated from protobuf rpc: GetFavorites(tinkoff.public.invest.api.contract.v1.GetFavoritesRequest) returns (tinkoff.public.invest.api.contract.v1.GetFavoritesResponse);
     */
    getFavorites(input: GetFavoritesRequest, options?: RpcOptions): UnaryCall<GetFavoritesRequest, GetFavoritesResponse>;
    /**
     * Метод редактирования списка избранных инструментов.
     *
     * @generated from protobuf rpc: EditFavorites(tinkoff.public.invest.api.contract.v1.EditFavoritesRequest) returns (tinkoff.public.invest.api.contract.v1.EditFavoritesResponse);
     */
    editFavorites(input: EditFavoritesRequest, options?: RpcOptions): UnaryCall<EditFavoritesRequest, EditFavoritesResponse>;
    /**
     * Метод получения списка стран.
     *
     * @generated from protobuf rpc: GetCountries(tinkoff.public.invest.api.contract.v1.GetCountriesRequest) returns (tinkoff.public.invest.api.contract.v1.GetCountriesResponse);
     */
    getCountries(input: GetCountriesRequest, options?: RpcOptions): UnaryCall<GetCountriesRequest, GetCountriesResponse>;
    /**
     * Метод поиска инструмента.
     *
     * @generated from protobuf rpc: FindInstrument(tinkoff.public.invest.api.contract.v1.FindInstrumentRequest) returns (tinkoff.public.invest.api.contract.v1.FindInstrumentResponse);
     */
    findInstrument(input: FindInstrumentRequest, options?: RpcOptions): UnaryCall<FindInstrumentRequest, FindInstrumentResponse>;
    /**
     * Метод получения списка брендов.
     *
     * @generated from protobuf rpc: GetBrands(tinkoff.public.invest.api.contract.v1.GetBrandsRequest) returns (tinkoff.public.invest.api.contract.v1.GetBrandsResponse);
     */
    getBrands(input: GetBrandsRequest, options?: RpcOptions): UnaryCall<GetBrandsRequest, GetBrandsResponse>;
    /**
     * Метод получения бренда по его идентификатору.
     *
     * @generated from protobuf rpc: GetBrandBy(tinkoff.public.invest.api.contract.v1.GetBrandRequest) returns (tinkoff.public.invest.api.contract.v1.Brand);
     */
    getBrandBy(input: GetBrandRequest, options?: RpcOptions): UnaryCall<GetBrandRequest, Brand>;
}