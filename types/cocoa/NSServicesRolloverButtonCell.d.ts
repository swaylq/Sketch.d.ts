/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSServicesRolloverButtonCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
    rectForBounds_preferredEdge<R = CGRect, P0 = CGRect, P1 = number>(_rectForBounds: P0, _preferredEdge: P1): R;
    initWithStyle<R = unknown, P0 = number>(_initWithStyle: P0): R;
    style<R = number>(): R;
  }
  namespace NSServicesRolloverButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = NSServicesRolloverButtonCell>(): R;
      new: <R = NSServicesRolloverButtonCell>() => R;
      serviceRolloverButtonCellForStyle<R = unknown, P0 = number>(_serviceRolloverButtonCellForStyle: P0): R;
    }
  }
}

declare const NSServicesRolloverButtonCell: cocoa.NSServicesRolloverButtonCell.CLASS;
