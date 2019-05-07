/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStarShapeItem<T0 = void, T1 = void, T2 = void> extends MSCustomShapeItem, MSInspectorMathValueAdaptorDelegateProtocol {
    pointsAdaptor<R = MSMathInspectorValueAdaptor>(): R;
    setPointsAdaptor<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    radiusAdaptor<R = MSMathInspectorValueAdaptor>(): R;
    setRadiusAdaptor<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    pointsField<R = MSInlineUpDownNanoTextField>(): R;
    setPointsField<R = void, P0 = MSInlineUpDownNanoTextField>(_v: P0): R;
    radiusField<R = MSInlineUpDownNanoTextField>(): R;
    setRadiusField<R = void, P0 = MSInlineUpDownNanoTextField>(_v: P0): R;
    layersController<R = NSArrayController>(): R;
    setLayersController<R = void, P0 = NSArrayController>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSStarShapeItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSCustomShapeItem, MSInspectorMathValueAdaptorDelegateProtocol {
      alloc<R = MSStarShapeItem>(): R;
      new: <R = MSStarShapeItem>() => R;
    }
  }
}

declare const MSStarShapeItem: cocoa.MSStarShapeItem.CLASS;
