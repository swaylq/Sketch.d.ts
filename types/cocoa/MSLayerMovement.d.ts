/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerMovement<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSLayerMovement {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSLayerMovement>(): R;
      new: <R = MSLayerMovement>() => R;
      moveToBack<R = void, P0 = unknown>(_moveToBack: P0): R;
      moveToFront<R = void, P0 = unknown>(_moveToFront: P0): R;
      moveBackward<R = void, P0 = unknown>(_moveBackward: P0): R;
      moveToTopOfHierarchy<R = void, P0 = unknown>(_moveToTopOfHierarchy: P0): R;
      canMoveLayerToTopOfHierarchy<R = boolean, P0 = unknown>(_canMoveLayerToTopOfHierarchy: P0): R;
      moveLayer_withParent_toNewParent_forceTop<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean>(_moveLayer: P0, _withParent: P1, _toNewParent: P2, _forceTop: P3): R;
      moveUpHierarchy<R = void, P0 = unknown>(_moveUpHierarchy: P0): R;
      canMoveLayerUpHierarchy<R = boolean, P0 = unknown>(_canMoveLayerUpHierarchy: P0): R;
      canMoveLayersBackward<R = boolean, P0 = unknown>(_canMoveLayersBackward: P0): R;
      canMoveLayersForward<R = boolean, P0 = unknown>(_canMoveLayersForward: P0): R;
      moveForward<R = void, P0 = unknown>(_moveForward: P0): R;
    }
  }
}

declare const MSLayerMovement: cocoa.MSLayerMovement.CLASS;
