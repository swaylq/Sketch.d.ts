/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPolygonShapeItem<T0 = void, T1 = void, T2 = void> extends MSCustomShapeItem, MSInspectorMathValueAdaptorDelegateProtocol {
    sidesField<R = MSUpDownTextField>(): R;
    setSidesField<R = void, P0 = MSUpDownTextField>(_v: P0): R;
    layersController<R = NSArrayController>(): R;
    setLayersController<R = void, P0 = NSArrayController>(_v: P0): R;
    sidesAdaptor<R = MSMathInspectorValueAdaptor>(): R;
    setSidesAdaptor<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSPolygonShapeItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSCustomShapeItem, MSInspectorMathValueAdaptorDelegateProtocol {
      alloc<R = MSPolygonShapeItem>(): R;
      new: <R = MSPolygonShapeItem>() => R;
    }
  }
}

declare const MSPolygonShapeItem: cocoa.MSPolygonShapeItem.CLASS;
