/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleBaseAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    validationStatus<R = number>(): R;
    isActive<R = boolean>(): R;
    hasDynamicTitle<R = boolean>(): R;
    currentRoots<R = unknown>(): R;
    grids<R = unknown>(): R;
    setGrid_forLayer<R = void, P0 = unknown, P1 = unknown>(_setGrid: P0, _forLayer: P1): R;
    gridForLayer<R = unknown, P0 = unknown>(_gridForLayer: P0): R;
    prepareNewGrid<R = unknown, P0 = unknown>(_prepareNewGrid: P0): R;
  }
  namespace MSToggleBaseAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSToggleBaseAction>(): R;
      new: <R = MSToggleBaseAction>() => R;
    }
  }
}

declare const MSToggleBaseAction: cocoa.MSToggleBaseAction.CLASS;
