/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMotionBlurInspectorItem<T0 = void, T1 = void, T2 = void> extends MSBaseBlurInspectorItem {
    angleTextField<R = MSInlineUpDownTextField>(): R;
    setAngleTextField<R = void, P0 = MSInlineUpDownTextField>(_v: P0): R;
    angleAdapter<R = MSMathInspectorValueAdaptor>(): R;
    setAngleAdapter<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    angleSlider<R = NSSlider>(): R;
    setAngleSlider<R = void, P0 = NSSlider>(_v: P0): R;
  }
  namespace MSMotionBlurInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseBlurInspectorItem {
      alloc<R = MSMotionBlurInspectorItem>(): R;
      new: <R = MSMotionBlurInspectorItem>() => R;
    }
  }
}

declare const MSMotionBlurInspectorItem: cocoa.MSMotionBlurInspectorItem.CLASS;
