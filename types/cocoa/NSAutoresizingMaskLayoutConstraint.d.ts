/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAutoresizingMaskLayoutConstraint<T = any> extends cocoa.NSLayoutConstraint {
    _viewForAutoresizingMask<R = unknown>(): R;
  }
  namespace classes {
    export interface NSAutoresizingMaskLayoutConstraint<T = any> extends cocoa.classes.NSLayoutConstraint {
      alloc<R = NSAutoresizingMaskLayoutConstraint>(): R;
      new: <R = NSAutoresizingMaskLayoutConstraint>() => R;
      constraintsWithAutoresizingMask_subitem_frame_superitem_bounds<R = unknown, P0 = number, P1 = unknown, P2 = cocoa.CGRect, P3 = unknown, P4 = cocoa.CGRect>(_constraintsWithAutoresizingMask: P0, _subitem: P1, _frame: P2, _superitem: P3, _bounds: P4): R;
    }
  }
}

declare const NSAutoresizingMaskLayoutConstraint: cocoa.classes.NSAutoresizingMaskLayoutConstraint;
