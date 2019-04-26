/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityCustomRotorSearchParameters<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    filterString<R = NSString>(): R;
    setFilterString<R = void, P0 = NSString>(_v: P0): R;
    searchDirection<R = number>(): R;
    setSearchDirection<R = void, P0 = number>(_v: P0): R;
    currentItem<R = NSAccessibilityCustomRotorItemResult>(): R;
    setCurrentItem<R = void, P0 = NSAccessibilityCustomRotorItemResult>(_v: P0): R;
  }
  namespace NSAccessibilityCustomRotorSearchParameters {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSAccessibilityCustomRotorSearchParameters>(): R;
      new: <R = NSAccessibilityCustomRotorSearchParameters>() => R;
    }
  }
}

declare const NSAccessibilityCustomRotorSearchParameters: cocoa.NSAccessibilityCustomRotorSearchParameters.CLASS;
