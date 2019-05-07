/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorSegmentedControl<T0 = void, T1 = void, T2 = void> extends NSSegmentedControl {}
  namespace MSInspectorSegmentedControl {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSegmentedControl {
      alloc<R = MSInspectorSegmentedControl>(): R;
      new: <R = MSInspectorSegmentedControl>() => R;
    }
  }
}

declare const MSInspectorSegmentedControl: cocoa.MSInspectorSegmentedControl.CLASS;
