/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorControlsInspectorViewController<T0 = void, T1 = void, T2 = void> extends MSStylePartInspectorViewController {
    reset<R = void, P0 = unknown>(_reset: P0): R;
    contrastField<R = MSInlineUpDownTextField>(): R;
    setContrastField<R = void, P0 = MSInlineUpDownTextField>(_v: P0): R;
    brightnessField<R = MSInlineUpDownNanoTextField>(): R;
    setBrightnessField<R = void, P0 = MSInlineUpDownNanoTextField>(_v: P0): R;
    saturationField<R = MSInlineUpDownNanoTextField>(): R;
    setSaturationField<R = void, P0 = MSInlineUpDownNanoTextField>(_v: P0): R;
    hueField<R = MSInlineUpDownNanoTextField>(): R;
    setHueField<R = void, P0 = MSInlineUpDownNanoTextField>(_v: P0): R;
    contrastAdaptor<R = MSMathInspectorValueAdaptor>(): R;
    setContrastAdaptor<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    brightnessAdaptor<R = MSMathInspectorValueAdaptor>(): R;
    setBrightnessAdaptor<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    saturationAdaptor<R = MSMathInspectorValueAdaptor>(): R;
    setSaturationAdaptor<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    hueAdaptor<R = MSMathInspectorValueAdaptor>(): R;
    setHueAdaptor<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
  }
  namespace MSColorControlsInspectorViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSStylePartInspectorViewController {
      alloc<R = MSColorControlsInspectorViewController>(): R;
      new: <R = MSColorControlsInspectorViewController>() => R;
      setupTextField_adaptor_valueTransformer<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_setupTextField: P0, _adaptor: P1, _valueTransformer: P2): R;
    }
  }
}

declare const MSColorControlsInspectorViewController: cocoa.MSColorControlsInspectorViewController.CLASS;
