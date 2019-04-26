/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBackgroundBlurInspectorItem<T0 = void, T1 = void, T2 = void> extends MSBaseBlurInspectorItem {
    saturationAdapter<R = MSMathInspectorValueAdaptor>(): R;
    setSaturationAdapter<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    saturationSlider<R = NSSlider>(): R;
    setSaturationSlider<R = void, P0 = NSSlider>(_v: P0): R;
    saturationField<R = MSInlineUpDownTextField>(): R;
    setSaturationField<R = void, P0 = MSInlineUpDownTextField>(_v: P0): R;
  }
  namespace MSBackgroundBlurInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseBlurInspectorItem {
      alloc<R = MSBackgroundBlurInspectorItem>(): R;
      new: <R = MSBackgroundBlurInspectorItem>() => R;
    }
  }
}

declare const MSBackgroundBlurInspectorItem: cocoa.MSBackgroundBlurInspectorItem.CLASS;
