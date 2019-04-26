/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableFlowConnection<T0 = void, T1 = void, T2 = void> extends _MSImmutableFlowConnection {
    bezierPathForRenderingFlowFromParentLayer_toArtboard_zoomLevel<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_bezierPathForRenderingFlowFromParentLayer: P0, _toArtboard: P1, _zoomLevel: P2): R;
    flowTypeForTransitionFromParentLayer_toArtboard<R = number, P0 = unknown, P1 = unknown>(_flowTypeForTransitionFromParentLayer: P0, _toArtboard: P1): R;
    isValidFlowConnectionInDocumentData<R = boolean, P0 = unknown>(_isValidFlowConnectionInDocumentData: P0): R;
    isBackAction<R = boolean>(): R;
  }
  namespace MSImmutableFlowConnection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableFlowConnection {
      alloc<R = MSImmutableFlowConnection>(): R;
      new: <R = MSImmutableFlowConnection>() => R;
    }
  }
}

declare const MSImmutableFlowConnection: cocoa.MSImmutableFlowConnection.CLASS;
