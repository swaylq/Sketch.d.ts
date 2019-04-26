/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDispatchData<T0 = void, T1 = void, T2 = void> extends NSData {
    classForCoder<R = unknown>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    _allowsDirectEncoding<R = boolean>(): R;
    _createDispatchData<R = unknown>(): R;
    _isDispatchData<R = boolean>(): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    subdataWithRange<R = unknown, P0 = _NSRange>(_subdataWithRange: P0): R;
    hash<R = number>(): R;
    getBytes_range<R = void, P0 = void, P1 = _NSRange>(_getBytes: P0, _range: P1): R;
    enumerateByteRangesUsingBlock<R = void, P0 = CDUnknownBlockType>(_enumerateByteRangesUsingBlock: P0): R;
    getBytes_length<R = void, P0 = void, P1 = number>(_getBytes: P0, _length: P1): R;
    getBytes<R = void, P0 = void>(_getBytes: P0): R;
  }
  namespace _NSDispatchData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSData {
      supportsSecureCoding<R = boolean>(): R;
    }
  }
}
