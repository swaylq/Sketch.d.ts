/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTrackableOutlineView<T0 = void, T1 = void, T2 = void> extends NSOutlineView {
    _supportsTrackingAreasForCells<R = boolean>(): R;
    _wantsUserCancelledOperation<R = boolean>(): R;
  }
  namespace NSTrackableOutlineView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSOutlineView {
      alloc<R = NSTrackableOutlineView>(): R;
      new: <R = NSTrackableOutlineView>() => R;
    }
  }
}

declare const NSTrackableOutlineView: cocoa.NSTrackableOutlineView.CLASS;
