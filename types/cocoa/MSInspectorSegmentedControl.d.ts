/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorSegmentedControl<T = any> extends NSSegmentedControl {}
  namespace classes {
    export interface MSInspectorSegmentedControl<T = any> extends NSSegmentedControl {
      alloc<R = MSInspectorSegmentedControl>(): R;
      new: <R = MSInspectorSegmentedControl>() => R;
    }
  }
}

declare const MSInspectorSegmentedControl: cocoa.classes.MSInspectorSegmentedControl;