/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilitySectionSearchElement<T0 = void, T1 = void, T2 = void> extends NSObject {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithElement<R = unknown, P0 = unknown>(_initWithElement: P0): R;
    searchKeys<R = NSMutableSet>(): R;
    setSearchKeys<R = void, P0 = NSMutableSet>(_v: P0): R;
    element<R = unknown>(): R;
  }
  namespace NSAccessibilitySectionSearchElement {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSAccessibilitySectionSearchElement>(): R;
      new: <R = NSAccessibilitySectionSearchElement>() => R;
    }
  }
}

declare const NSAccessibilitySectionSearchElement: cocoa.NSAccessibilitySectionSearchElement.CLASS;
