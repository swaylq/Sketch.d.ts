/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenModalDimmingWindow<T0 = void, T1 = void, T2 = void> extends NSPanel {
    moveToSpace<R = void>(): R;
    endPresentationWithIncomingWindowSnapshot_startingFrame_forSendDocument_completionHandler<R = void, P0 = unknown, P1 = CGRect, P2 = boolean, P3 = CDUnknownBlockType>(_endPresentationWithIncomingWindowSnapshot: P0, _startingFrame: P1, _forSendDocument: P2, _completionHandler: P3): R;
    beginPresentationWithIncomingWindowSnapshot_targetFrame_completionHandler<R = void, P0 = unknown, P1 = CGRect, P2 = CDUnknownBlockType>(_beginPresentationWithIncomingWindowSnapshot: P0, _targetFrame: P1, _completionHandler: P2): R;
    _createDimLayerIfNeeded<R = void>(): R;
    _setWindowTag<R = void>(): R;
    _ignoreForFullScreenTransition<R = boolean>(): R;
    canBecomeMainWindow<R = boolean>(): R;
    canBecomeKeyWindow<R = boolean>(): R;
    _canMiniaturize<R = boolean>(): R;
    isMovable<R = boolean>(): R;
    _allowsExteriorResizing<R = boolean>(): R;
    _canBeSnappingTarget<R = boolean>(): R;
    _allowsSnapping<R = boolean>(): R;
    _shouldSnapWindowsClientSide<R = boolean>(): R;
    initWithStackController<R = unknown, P0 = unknown>(_initWithStackController: P0): R;
    delegate<R = _NSFullScreenModalDimmingWindowDelegate>(): R;
    setDelegate<R = void, P0 = _NSFullScreenModalDimmingWindowDelegate>(_v: P0): R;
  }
  namespace _NSFullScreenModalDimmingWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPanel {
      alloc<R = _NSFullScreenModalDimmingWindow>(): R;
      new: <R = _NSFullScreenModalDimmingWindow>() => R;
    }
  }
}
