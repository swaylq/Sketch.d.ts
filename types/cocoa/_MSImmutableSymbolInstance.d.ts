/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableSymbolInstance<T0 = void, T1 = void, T2 = void> extends MSImmutableStyledLayer {
    overrideValues<R = NSArray>(): R;
    setOverrideValues<R = void, P0 = NSArray>(_v: P0): R;
    verticalSpacing<R = number>(): R;
    setVerticalSpacing<R = void, P0 = number>(_v: P0): R;
    symbolID<R = NSString>(): R;
    setSymbolID<R = void, P0 = NSString>(_v: P0): R;
    scale<R = number>(): R;
    setScale<R = void, P0 = number>(_v: P0): R;
    horizontalSpacing<R = number>(): R;
    setHorizontalSpacing<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSImmutableSymbolInstance {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableStyledLayer {
      alloc<R = _MSImmutableSymbolInstance>(): R;
      new: <R = _MSImmutableSymbolInstance>() => R;
    }
  }
}
