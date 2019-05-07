/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMultipleColorStylePartInspectorViewController<T0 = void, T1 = void, T2 = void> extends MSMultipleStylePartInspectorViewController {
    closePopoverImmediately<R = void, P0 = boolean>(_closePopoverImmediately: P0): R;
    openPopoverAtIndex<R = void, P0 = number>(_openPopoverAtIndex: P0): R;
    currentPopoverIndex<R = NSNumber>(): R;
    setCurrentPopoverIndex<R = void, P0 = NSNumber>(_v: P0): R;
  }
  namespace MSMultipleColorStylePartInspectorViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSMultipleStylePartInspectorViewController {
      alloc<R = MSMultipleColorStylePartInspectorViewController>(): R;
      new: <R = MSMultipleColorStylePartInspectorViewController>() => R;
    }
  }
}

declare const MSMultipleColorStylePartInspectorViewController: cocoa.MSMultipleColorStylePartInspectorViewController.CLASS;
