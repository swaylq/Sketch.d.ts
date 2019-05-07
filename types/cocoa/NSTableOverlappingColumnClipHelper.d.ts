/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableOverlappingColumnClipHelper<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    clipForDrawingRow_column<R = boolean, P0 = number, P1 = number>(_clipForDrawingRow: P0, _column: P1): R;
    clearClipping<R = void>(): R;
    dealloc<R = void>(): R;
    currentClipRect<R = CGRect>(): R;
    initWithTableView_clipRect<R = unknown, P0 = unknown, P1 = CGRect>(_initWithTableView: P0, _clipRect: P1): R;
  }
  namespace NSTableOverlappingColumnClipHelper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTableOverlappingColumnClipHelper>(): R;
      new: <R = NSTableOverlappingColumnClipHelper>() => R;
    }
  }
}

declare const NSTableOverlappingColumnClipHelper: cocoa.NSTableOverlappingColumnClipHelper.CLASS;
