/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSegmentedControlBinder<T0 = void, T1 = void, T2 = void> extends NSValueBinder {
    _updateContent<R = void>(): R;
  }
  namespace NSSegmentedControlBinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSValueBinder {
      alloc<R = NSSegmentedControlBinder>(): R;
      new: <R = NSSegmentedControlBinder>() => R;
    }
  }
}

declare const NSSegmentedControlBinder: cocoa.NSSegmentedControlBinder.CLASS;
