/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertLineEventHandler<T0 = void, T1 = void, T2 = void> extends MSEventHandler, MSAlignmentEngineDelegateProtocol {
    lineThickness<R = number>(): R;
    style<R = unknown>(): R;
    addSnapTargetsToAlignmentEngine<R = void, P0 = unknown>(_addSnapTargetsToAlignmentEngine: P0): R;
    alignEndPoint_snap<R = unknown, P0 = CGPoint, P1 = boolean>(_alignEndPoint: P0, _snap: P1): R;
    prepareAlignmentEngineForPoint_constraint<R = void, P0 = CGPoint, P1 = unknown>(_prepareAlignmentEngineForPoint: P0, _constraint: P1): R;
    createShapeAtLocation<R = void, P0 = CGPoint>(_createShapeAtLocation: P0): R;
    handleDrag<R = void, P0 = unknown>(_handleDrag: P0): R;
    snapGuides<R = MSAlignmentEngineResult>(): R;
    setSnapGuides<R = void, P0 = MSAlignmentEngineResult>(_v: P0): R;
    alignmentEngine<R = MSAlignmentEngine>(): R;
    lineShape<R = MSShapePathLayer>(): R;
    setLineShape<R = void, P0 = MSShapePathLayer>(_v: P0): R;
    lineShapeCreator<R = CDUnknownBlockType>(): R;
    setLineShapeCreator<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSInsertLineEventHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSEventHandler, MSAlignmentEngineDelegateProtocol {
      alloc<R = MSInsertLineEventHandler>(): R;
      new: <R = MSInsertLineEventHandler>() => R;
    }
  }
}

declare const MSInsertLineEventHandler: cocoa.MSInsertLineEventHandler.CLASS;
