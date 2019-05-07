/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPositionInspectorItem<T0 = void, T1 = void, T2 = void> extends MSInspectorItem, MSInspectorMathValueAdaptorDelegateProtocol {
    allowFloatValues<R = boolean>(): R;
    rotationAdapter<R = MSMathInspectorValueAdaptor>(): R;
    setRotationAdapter<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    yAdaptor<R = MSCoordinateInspectorValueAdaptor>(): R;
    setYAdaptor<R = void, P0 = MSCoordinateInspectorValueAdaptor>(_v: P0): R;
    xAdaptor<R = MSCoordinateInspectorValueAdaptor>(): R;
    setXAdaptor<R = void, P0 = MSCoordinateInspectorValueAdaptor>(_v: P0): R;
    xField<R = MSInlineUpDownTextField>(): R;
    setXField<R = void, P0 = MSInlineUpDownTextField>(_v: P0): R;
    rotationField<R = MSInlineUpDownTextField>(): R;
    setRotationField<R = void, P0 = MSInlineUpDownTextField>(_v: P0): R;
    yField<R = MSInlineUpDownTextField>(): R;
    setYField<R = void, P0 = MSInlineUpDownTextField>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSPositionInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItem, MSInspectorMathValueAdaptorDelegateProtocol {
      alloc<R = MSPositionInspectorItem>(): R;
      new: <R = MSPositionInspectorItem>() => R;
    }
  }
}

declare const MSPositionInspectorItem: cocoa.MSPositionInspectorItem.CLASS;
