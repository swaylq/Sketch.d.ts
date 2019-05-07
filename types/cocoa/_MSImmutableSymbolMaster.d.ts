/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableSymbolMaster<T0 = void, T1 = void, T2 = void> extends MSImmutableArtboardGroup {
    symbolID<R = NSString>(): R;
    setSymbolID<R = void, P0 = NSString>(_v: P0): R;
    includeBackgroundColorInInstance<R = boolean>(): R;
    setIncludeBackgroundColorInInstance<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace _MSImmutableSymbolMaster {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableArtboardGroup {
      alloc<R = _MSImmutableSymbolMaster>(): R;
      new: <R = _MSImmutableSymbolMaster>() => R;
    }
  }
}
