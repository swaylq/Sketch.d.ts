/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityCustomChooserSearchPredicate<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    filterText<R = NSString>(): R;
    setFilterText<R = void, P0 = NSString>(_v: P0): R;
    searchDirection<R = number>(): R;
    setSearchDirection<R = void, P0 = number>(_v: P0): R;
    currentItem<R = NSAccessibilityCustomChooserItemResult>(): R;
    setCurrentItem<R = void, P0 = NSAccessibilityCustomChooserItemResult>(_v: P0): R;
  }
  namespace NSAccessibilityCustomChooserSearchPredicate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSAccessibilityCustomChooserSearchPredicate>(): R;
      new: <R = NSAccessibilityCustomChooserSearchPredicate>() => R;
    }
  }
}

declare const NSAccessibilityCustomChooserSearchPredicate: cocoa.NSAccessibilityCustomChooserSearchPredicate.CLASS;
