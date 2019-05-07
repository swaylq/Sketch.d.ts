/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSourceListBackgroundColor<T0 = void, T1 = void, T2 = void> extends NSDynamicNamedColor {
    resolvedColor<R = unknown>(): R;
    _displayColorForActiveState<R = unknown, P0 = boolean>(__displayColorForActiveState: P0): R;
    _isSourceListColor<R = boolean>(): R;
  }
  namespace NSSourceListBackgroundColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDynamicNamedColor {
      alloc<R = NSSourceListBackgroundColor>(): R;
      new: <R = NSSourceListBackgroundColor>() => R;
    }
  }
}

declare const NSSourceListBackgroundColor: cocoa.NSSourceListBackgroundColor.CLASS;
