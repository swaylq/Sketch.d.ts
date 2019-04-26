/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSForeignStyle<T0 = void, T1 = void, T2 = void> extends MSForeignObject {
    localSharedStyle<R = MSSharedStyle>(): R;
    setLocalSharedStyle<R = void, P0 = MSSharedStyle>(_v: P0): R;
    remoteStyleID<R = NSString>(): R;
    setRemoteStyleID<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace _MSForeignStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSForeignObject {
      alloc<R = _MSForeignStyle>(): R;
      new: <R = _MSForeignStyle>() => R;
    }
  }
}
