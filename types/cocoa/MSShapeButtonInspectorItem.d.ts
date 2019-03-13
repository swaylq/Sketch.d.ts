/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShapeButtonInspectorItem<T = any> extends MSInspectorItem {
    finishEditingAction<R = void, P0 = unknown>(_finishEditingAction: P0): R;
    closePathAction<R = void, P0 = unknown>(_closePathAction: P0): R;
    closePathButton<R = NSButton>(): R;
    setClosePathButton<R = void, P0 = NSButton>(_v: P0): R;
    pathController<R = MSPathController>(): R;
    setPathController<R = void, P0 = MSPathController>(_v: P0): R;
    shapeEventHandler<R = MSShapeEventHandler>(): R;
    setShapeEventHandler<R = void, P0 = MSShapeEventHandler>(_v: P0): R;
  }
  namespace classes {
    export interface MSShapeButtonInspectorItem<T = any> extends MSInspectorItem {
      alloc<R = MSShapeButtonInspectorItem>(): R;
      new: <R = MSShapeButtonInspectorItem>() => R;
    }
  }
}

declare const MSShapeButtonInspectorItem: cocoa.classes.MSShapeButtonInspectorItem;