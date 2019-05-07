/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSZeroData<T0 = void, T1 = void, T2 = void> extends NSData {
    _providesConcreteBacking<R = boolean>(): R;
    _dispatchData<R = unknown>(): R;
    initWithBytes_length_copy_deallocator<R = unknown, P0 = void, P1 = number, P2 = boolean, P3 = CDUnknownBlockType>(_initWithBytes: P0, _length: P1, _copy: P2, _deallocator: P3): R;
    retainCount<R = number>(): R;
    release<R = void>(): R;
    retain<R = unknown>(): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    _isCompact<R = boolean>(): R;
    bytes<R = void>(): R;
    length<R = number>(): R;
  }
  namespace _NSZeroData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSData {
      data<R = unknown>(): R;
    }
  }
}
