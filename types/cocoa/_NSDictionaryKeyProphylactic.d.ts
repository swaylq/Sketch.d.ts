/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDictionaryKeyProphylactic<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    dealloc<R = void>(): R;
    hash<R = number>(): R;
    prophylactee<R = unknown>(): R;
    setProphylactee<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace _NSDictionaryKeyProphylactic {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = _NSDictionaryKeyProphylactic>(): R;
      new: <R = _NSDictionaryKeyProphylactic>() => R;
    }
  }
}
