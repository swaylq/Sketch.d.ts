/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCustomReleaseData<T0 = void, T1 = void, T2 = void> extends NSMutableData {
    dealloc<R = void>(): R;
    initWithBytes_length_releaseBytesBlock<R = unknown, P0 = void, P1 = number, P2 = CDUnknownBlockType>(_initWithBytes: P0, _length: P1, _releaseBytesBlock: P2): R;
    setLength<R = void, P0 = number>(_setLength: P0): R;
    mutableBytes<R = void>(): R;
    bytes<R = void>(): R;
    length<R = number>(): R;
  }
  namespace NSCustomReleaseData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableData {}
  }
}

declare const NSCustomReleaseData: cocoa.NSCustomReleaseData.CLASS;
