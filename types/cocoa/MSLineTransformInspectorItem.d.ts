/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLineTransformInspectorItem<T0 = void, T1 = void, T2 = void> extends MSInspectorItem, MSInspectorMathValueAdaptorDelegateProtocol {
    updateButtonState<R = void, P0 = unknown>(_updateButtonState: P0): R;
    rotationAdaptor<R = MSMathInspectorValueAdaptor>(): R;
    setRotationAdaptor<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    lengthAdapter<R = MSMathInspectorValueAdaptor>(): R;
    setLengthAdapter<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    flipVerticalButton<R = NSButton>(): R;
    setFlipVerticalButton<R = void, P0 = NSButton>(_v: P0): R;
    flipHorizontalButton<R = NSButton>(): R;
    setFlipHorizontalButton<R = void, P0 = NSButton>(_v: P0): R;
    rotationField<R = MSInlineUpDownTextField>(): R;
    setRotationField<R = void, P0 = MSInlineUpDownTextField>(_v: P0): R;
    lengthField<R = MSInlineUpDownTextField>(): R;
    setLengthField<R = void, P0 = MSInlineUpDownTextField>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSLineTransformInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItem, MSInspectorMathValueAdaptorDelegateProtocol {
      alloc<R = MSLineTransformInspectorItem>(): R;
      new: <R = MSLineTransformInspectorItem>() => R;
    }
  }
}

declare const MSLineTransformInspectorItem: cocoa.MSLineTransformInspectorItem.CLASS;
