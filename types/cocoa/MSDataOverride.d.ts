/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataOverride<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    initWithOverride_symbolInstance<R = unknown, P0 = unknown, P1 = unknown>(_initWithOverride: P0, _symbolInstance: P1): R;
    symbolInstance<R = MSSymbolInstance>(): R;
    availableOverride<R = MSAvailableOverride>(): R;
    overrideIdentifier<R = NSString>(): R;
    affectedLayer<R = MSImmutableStyledLayer>(): R;
  }
  namespace MSDataOverride {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSDataOverride>(): R;
      new: <R = MSDataOverride>() => R;
    }
  }
}

declare const MSDataOverride: cocoa.MSDataOverride.CLASS;
