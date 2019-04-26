/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBorderInspectorViewController<T0 = void, T1 = void, T2 = void> extends MSColorStylePartInspectorViewController {
    updateUI<R = void>(): R;
    enableAction<R = void, P0 = unknown>(_enableAction: P0): R;
    canDrawInnerOrOuterBorders<R = boolean>(): R;
    positionPopUpToolTip<R = unknown>(): R;
    setStyleParts<R = void, P0 = unknown>(_setStyleParts: P0): R;
    borderPositionLabel<R = NSTextField>(): R;
    setBorderPositionLabel<R = void, P0 = NSTextField>(_v: P0): R;
    fillTypeLabel<R = NSTextField>(): R;
    setFillTypeLabel<R = void, P0 = NSTextField>(_v: P0): R;
    thicknessAdaptor<R = MSMathInspectorValueAdaptor>(): R;
    setThicknessAdaptor<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    thicknessField<R = MSUpDownTextField>(): R;
    setThicknessField<R = void, P0 = MSUpDownTextField>(_v: P0): R;
    positionControl<R = NSSegmentedControl>(): R;
    setPositionControl<R = void, P0 = NSSegmentedControl>(_v: P0): R;
  }
  namespace MSBorderInspectorViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSColorStylePartInspectorViewController {
      alloc<R = MSBorderInspectorViewController>(): R;
      new: <R = MSBorderInspectorViewController>() => R;
    }
  }
}

declare const MSBorderInspectorViewController: cocoa.MSBorderInspectorViewController.CLASS;
