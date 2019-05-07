/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGFilter<T0 = void, T1 = void, T2 = void> extends MSXMLElementWrapper {
    close<R = void>(): R;
    addFilterOutput<R = void, P0 = unknown>(_addFilterOutput: P0): R;
    addFilterItem<R = void, P0 = unknown>(_addFilterItem: P0): R;
    dealloc<R = void>(): R;
    finalMerge<R = MSSVGMerge>(): R;
    setFinalMerge<R = void, P0 = MSSVGMerge>(_v: P0): R;
    href<R = NSString>(): R;
    setHref<R = void, P0 = NSString>(_v: P0): R;
    filterRes<R = NSString>(): R;
    setFilterRes<R = void, P0 = NSString>(_v: P0): R;
    filterUnits<R = NSString>(): R;
    setFilterUnits<R = void, P0 = NSString>(_v: P0): R;
    height<R = NSString>(): R;
    setHeight<R = void, P0 = NSString>(_v: P0): R;
    primitiveUnits<R = NSString>(): R;
    setPrimitiveUnits<R = void, P0 = NSString>(_v: P0): R;
    width<R = NSString>(): R;
    setWidth<R = void, P0 = NSString>(_v: P0): R;
    x<R = NSString>(): R;
    setX<R = void, P0 = NSString>(_v: P0): R;
    y<R = NSString>(): R;
    setY<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace MSSVGFilter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSXMLElementWrapper {
      alloc<R = MSSVGFilter>(): R;
      new: <R = MSSVGFilter>() => R;
      filter<R = unknown>(): R;
    }
  }
}

declare const MSSVGFilter: cocoa.MSSVGFilter.CLASS;
