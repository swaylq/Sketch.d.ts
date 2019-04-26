/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTileScaleViewController<T0 = void, T1 = void, T2 = void> extends NSViewController {
    cxx_destruct<R = void>(): R;
    initWithStylesController<R = unknown, P0 = unknown>(_initWithStylesController: P0): R;
    scaleAdaptor<R = MSMathInspectorValueAdaptor>(): R;
    setScaleAdaptor<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    scaleField<R = MSInlineUpDownTextField>(): R;
    setScaleField<R = void, P0 = MSInlineUpDownTextField>(_v: P0): R;
    stylesController<R = NSArrayController>(): R;
    setStylesController<R = void, P0 = NSArrayController>(_v: P0): R;
  }
  namespace MSTileScaleViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController {
      alloc<R = MSTileScaleViewController>(): R;
      new: <R = MSTileScaleViewController>() => R;
    }
  }
}

declare const MSTileScaleViewController: cocoa.MSTileScaleViewController.CLASS;
