/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSContentSizeLayoutConstraint<T0 = void, T1 = void, T2 = void> extends NSLayoutConstraint {
    initWithLayoutItem_value_huggingPriority_compressionResistancePriority_orientation<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = number, P4 = number>(_initWithLayoutItem: P0, _value: P1, _huggingPriority: P2, _compressionResistancePriority: P3, _orientation: P4): R;
    compressionResistancePriority<R = number>(): R;
    huggingPriority<R = number>(): R;
  }
  namespace NSContentSizeLayoutConstraint {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSLayoutConstraint {
      alloc<R = NSContentSizeLayoutConstraint>(): R;
      new: <R = NSContentSizeLayoutConstraint>() => R;
    }
  }
}

declare const NSContentSizeLayoutConstraint: cocoa.NSContentSizeLayoutConstraint.CLASS;
