/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPlaceholderData<T0 = void, T1 = void, T2 = void> extends NSData {
    retainCount<R = number>(): R;
    retain<R = unknown>(): R;
    release<R = void>(): R;
    initWithData<R = unknown, P0 = unknown>(_initWithData: P0): R;
    initWithBytes_length_copy_deallocator<R = unknown, P0 = void, P1 = number, P2 = boolean, P3 = CDUnknownBlockType>(_initWithBytes: P0, _length: P1, _copy: P2, _deallocator: P3): R;
    init<R = unknown>(): R;
  }
  namespace _NSPlaceholderData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSData {}
  }
}
