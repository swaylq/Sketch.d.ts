/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSForeignStyle<T0 = void, T1 = void, T2 = void> extends _MSForeignStyle, MSSharedStylePastingProtocol {
    remoteShareID<R = unknown>(): R;
    setLocalObject<R = void, P0 = unknown>(_setLocalObject: P0): R;
    localObject<R = unknown>(): R;
    initAsOverrideReferenceForSymbol_withOriginal<R = unknown, P0 = unknown, P1 = unknown>(_initAsOverrideReferenceForSymbol: P0, _withOriginal: P1): R;
    currentObjectID_MSSharedStylePasting<R = NSString>(): R;
  }
  namespace MSForeignStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSForeignStyle, MSSharedStylePastingProtocol {
      alloc<R = MSForeignStyle>(): R;
      new: <R = MSForeignStyle>() => R;
    }
  }
}

declare const MSForeignStyle: cocoa.MSForeignStyle.CLASS;
