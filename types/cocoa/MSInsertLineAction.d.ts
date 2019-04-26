/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertLineAction<T0 = void, T1 = void, T2 = void> extends MSBaseInsertAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    isSelectable<R = boolean>(): R;
    eventHandlerClass<R = unknown>(): R;
    lineShapeFrom_to<R = unknown, P0 = CGPoint, P1 = CGPoint>(_lineShapeFrom: P0, _to: P1): R;
    insertLine<R = void, P0 = unknown>(_insertLine: P0): R;
  }
  namespace MSInsertLineAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseInsertAction {
      alloc<R = MSInsertLineAction>(): R;
      new: <R = MSInsertLineAction>() => R;
    }
  }
}

declare const MSInsertLineAction: cocoa.MSInsertLineAction.CLASS;
