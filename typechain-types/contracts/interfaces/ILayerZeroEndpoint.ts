/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface ILayerZeroEndpointInterface extends utils.Interface {
  functions: {
    "estimateFees(uint16,address,bytes,bool,bytes)": FunctionFragment;
    "forceResumeReceive(uint16,bytes)": FunctionFragment;
    "getChainId()": FunctionFragment;
    "getConfig(uint16,uint16,address,uint256)": FunctionFragment;
    "getInboundNonce(uint16,bytes)": FunctionFragment;
    "getOutboundNonce(uint16,address)": FunctionFragment;
    "getReceiveLibraryAddress(address)": FunctionFragment;
    "getReceiveVersion(address)": FunctionFragment;
    "getSendLibraryAddress(address)": FunctionFragment;
    "getSendVersion(address)": FunctionFragment;
    "hasStoredPayload(uint16,bytes)": FunctionFragment;
    "isReceivingPayload()": FunctionFragment;
    "isSendingPayload()": FunctionFragment;
    "receivePayload(uint16,bytes,address,uint64,uint256,bytes)": FunctionFragment;
    "retryPayload(uint16,bytes,bytes)": FunctionFragment;
    "send(uint16,bytes,bytes,address,address,bytes)": FunctionFragment;
    "setConfig(uint16,uint16,uint256,bytes)": FunctionFragment;
    "setReceiveVersion(uint16)": FunctionFragment;
    "setSendVersion(uint16)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "estimateFees"
      | "forceResumeReceive"
      | "getChainId"
      | "getConfig"
      | "getInboundNonce"
      | "getOutboundNonce"
      | "getReceiveLibraryAddress"
      | "getReceiveVersion"
      | "getSendLibraryAddress"
      | "getSendVersion"
      | "hasStoredPayload"
      | "isReceivingPayload"
      | "isSendingPayload"
      | "receivePayload"
      | "retryPayload"
      | "send"
      | "setConfig"
      | "setReceiveVersion"
      | "setSendVersion"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "estimateFees",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<boolean>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "forceResumeReceive",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getConfig",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getInboundNonce",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getOutboundNonce",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getReceiveLibraryAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getReceiveVersion",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSendLibraryAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSendVersion",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "hasStoredPayload",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "isReceivingPayload",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isSendingPayload",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "receivePayload",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "retryPayload",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "send",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setConfig",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setReceiveVersion",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setSendVersion",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "estimateFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "forceResumeReceive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getInboundNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOutboundNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReceiveLibraryAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReceiveVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSendLibraryAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSendVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasStoredPayload",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isReceivingPayload",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSendingPayload",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receivePayload",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retryPayload",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setReceiveVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSendVersion",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ILayerZeroEndpoint extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ILayerZeroEndpointInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    estimateFees(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _userApplication: PromiseOrValue<string>,
      _payload: PromiseOrValue<BytesLike>,
      _payInZRO: PromiseOrValue<boolean>,
      _adapterParam: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { nativeFee: BigNumber; zroFee: BigNumber }
    >;

    forceResumeReceive(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getChainId(overrides?: CallOverrides): Promise<[number]>;

    getConfig(
      _version: PromiseOrValue<BigNumberish>,
      _chainId: PromiseOrValue<BigNumberish>,
      _userApplication: PromiseOrValue<string>,
      _configType: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getInboundNonce(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getOutboundNonce(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getReceiveLibraryAddress(
      _userApplication: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getReceiveVersion(
      _userApplication: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getSendLibraryAddress(
      _userApplication: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getSendVersion(
      _userApplication: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    hasStoredPayload(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isReceivingPayload(overrides?: CallOverrides): Promise<[boolean]>;

    isSendingPayload(overrides?: CallOverrides): Promise<[boolean]>;

    receivePayload(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      _dstAddress: PromiseOrValue<string>,
      _nonce: PromiseOrValue<BigNumberish>,
      _gasLimit: PromiseOrValue<BigNumberish>,
      _payload: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    retryPayload(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      _payload: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    send(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _destination: PromiseOrValue<BytesLike>,
      _payload: PromiseOrValue<BytesLike>,
      _refundAddress: PromiseOrValue<string>,
      _zroPaymentAddress: PromiseOrValue<string>,
      _adapterParams: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setConfig(
      _version: PromiseOrValue<BigNumberish>,
      _chainId: PromiseOrValue<BigNumberish>,
      _configType: PromiseOrValue<BigNumberish>,
      _config: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setReceiveVersion(
      _version: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSendVersion(
      _version: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  estimateFees(
    _dstChainId: PromiseOrValue<BigNumberish>,
    _userApplication: PromiseOrValue<string>,
    _payload: PromiseOrValue<BytesLike>,
    _payInZRO: PromiseOrValue<boolean>,
    _adapterParam: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { nativeFee: BigNumber; zroFee: BigNumber }
  >;

  forceResumeReceive(
    _srcChainId: PromiseOrValue<BigNumberish>,
    _srcAddress: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getChainId(overrides?: CallOverrides): Promise<number>;

  getConfig(
    _version: PromiseOrValue<BigNumberish>,
    _chainId: PromiseOrValue<BigNumberish>,
    _userApplication: PromiseOrValue<string>,
    _configType: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getInboundNonce(
    _srcChainId: PromiseOrValue<BigNumberish>,
    _srcAddress: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getOutboundNonce(
    _dstChainId: PromiseOrValue<BigNumberish>,
    _srcAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getReceiveLibraryAddress(
    _userApplication: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  getReceiveVersion(
    _userApplication: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<number>;

  getSendLibraryAddress(
    _userApplication: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  getSendVersion(
    _userApplication: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<number>;

  hasStoredPayload(
    _srcChainId: PromiseOrValue<BigNumberish>,
    _srcAddress: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isReceivingPayload(overrides?: CallOverrides): Promise<boolean>;

  isSendingPayload(overrides?: CallOverrides): Promise<boolean>;

  receivePayload(
    _srcChainId: PromiseOrValue<BigNumberish>,
    _srcAddress: PromiseOrValue<BytesLike>,
    _dstAddress: PromiseOrValue<string>,
    _nonce: PromiseOrValue<BigNumberish>,
    _gasLimit: PromiseOrValue<BigNumberish>,
    _payload: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  retryPayload(
    _srcChainId: PromiseOrValue<BigNumberish>,
    _srcAddress: PromiseOrValue<BytesLike>,
    _payload: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  send(
    _dstChainId: PromiseOrValue<BigNumberish>,
    _destination: PromiseOrValue<BytesLike>,
    _payload: PromiseOrValue<BytesLike>,
    _refundAddress: PromiseOrValue<string>,
    _zroPaymentAddress: PromiseOrValue<string>,
    _adapterParams: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setConfig(
    _version: PromiseOrValue<BigNumberish>,
    _chainId: PromiseOrValue<BigNumberish>,
    _configType: PromiseOrValue<BigNumberish>,
    _config: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setReceiveVersion(
    _version: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSendVersion(
    _version: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    estimateFees(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _userApplication: PromiseOrValue<string>,
      _payload: PromiseOrValue<BytesLike>,
      _payInZRO: PromiseOrValue<boolean>,
      _adapterParam: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { nativeFee: BigNumber; zroFee: BigNumber }
    >;

    forceResumeReceive(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    getChainId(overrides?: CallOverrides): Promise<number>;

    getConfig(
      _version: PromiseOrValue<BigNumberish>,
      _chainId: PromiseOrValue<BigNumberish>,
      _userApplication: PromiseOrValue<string>,
      _configType: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getInboundNonce(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOutboundNonce(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReceiveLibraryAddress(
      _userApplication: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getReceiveVersion(
      _userApplication: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<number>;

    getSendLibraryAddress(
      _userApplication: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getSendVersion(
      _userApplication: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<number>;

    hasStoredPayload(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isReceivingPayload(overrides?: CallOverrides): Promise<boolean>;

    isSendingPayload(overrides?: CallOverrides): Promise<boolean>;

    receivePayload(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      _dstAddress: PromiseOrValue<string>,
      _nonce: PromiseOrValue<BigNumberish>,
      _gasLimit: PromiseOrValue<BigNumberish>,
      _payload: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    retryPayload(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      _payload: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    send(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _destination: PromiseOrValue<BytesLike>,
      _payload: PromiseOrValue<BytesLike>,
      _refundAddress: PromiseOrValue<string>,
      _zroPaymentAddress: PromiseOrValue<string>,
      _adapterParams: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setConfig(
      _version: PromiseOrValue<BigNumberish>,
      _chainId: PromiseOrValue<BigNumberish>,
      _configType: PromiseOrValue<BigNumberish>,
      _config: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setReceiveVersion(
      _version: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setSendVersion(
      _version: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    estimateFees(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _userApplication: PromiseOrValue<string>,
      _payload: PromiseOrValue<BytesLike>,
      _payInZRO: PromiseOrValue<boolean>,
      _adapterParam: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    forceResumeReceive(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    getConfig(
      _version: PromiseOrValue<BigNumberish>,
      _chainId: PromiseOrValue<BigNumberish>,
      _userApplication: PromiseOrValue<string>,
      _configType: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getInboundNonce(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOutboundNonce(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReceiveLibraryAddress(
      _userApplication: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReceiveVersion(
      _userApplication: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSendLibraryAddress(
      _userApplication: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSendVersion(
      _userApplication: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasStoredPayload(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isReceivingPayload(overrides?: CallOverrides): Promise<BigNumber>;

    isSendingPayload(overrides?: CallOverrides): Promise<BigNumber>;

    receivePayload(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      _dstAddress: PromiseOrValue<string>,
      _nonce: PromiseOrValue<BigNumberish>,
      _gasLimit: PromiseOrValue<BigNumberish>,
      _payload: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    retryPayload(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      _payload: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    send(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _destination: PromiseOrValue<BytesLike>,
      _payload: PromiseOrValue<BytesLike>,
      _refundAddress: PromiseOrValue<string>,
      _zroPaymentAddress: PromiseOrValue<string>,
      _adapterParams: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setConfig(
      _version: PromiseOrValue<BigNumberish>,
      _chainId: PromiseOrValue<BigNumberish>,
      _configType: PromiseOrValue<BigNumberish>,
      _config: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setReceiveVersion(
      _version: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSendVersion(
      _version: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    estimateFees(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _userApplication: PromiseOrValue<string>,
      _payload: PromiseOrValue<BytesLike>,
      _payInZRO: PromiseOrValue<boolean>,
      _adapterParam: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    forceResumeReceive(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getConfig(
      _version: PromiseOrValue<BigNumberish>,
      _chainId: PromiseOrValue<BigNumberish>,
      _userApplication: PromiseOrValue<string>,
      _configType: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getInboundNonce(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOutboundNonce(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReceiveLibraryAddress(
      _userApplication: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReceiveVersion(
      _userApplication: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSendLibraryAddress(
      _userApplication: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSendVersion(
      _userApplication: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasStoredPayload(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isReceivingPayload(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isSendingPayload(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    receivePayload(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      _dstAddress: PromiseOrValue<string>,
      _nonce: PromiseOrValue<BigNumberish>,
      _gasLimit: PromiseOrValue<BigNumberish>,
      _payload: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    retryPayload(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      _payload: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    send(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _destination: PromiseOrValue<BytesLike>,
      _payload: PromiseOrValue<BytesLike>,
      _refundAddress: PromiseOrValue<string>,
      _zroPaymentAddress: PromiseOrValue<string>,
      _adapterParams: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setConfig(
      _version: PromiseOrValue<BigNumberish>,
      _chainId: PromiseOrValue<BigNumberish>,
      _configType: PromiseOrValue<BigNumberish>,
      _config: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setReceiveVersion(
      _version: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSendVersion(
      _version: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
