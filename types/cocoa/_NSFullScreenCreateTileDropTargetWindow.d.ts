/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenCreateTileDropTargetWindow<T0 = void, T1 = void, T2 = void> extends NSPanel {
    moveToSpace<R = void>(): R;
    animateRevealWithAdditionalMoveBlock_completionBlock<R = void, P0 = CDUnknownBlockType, P1 = CDUnknownBlockType>(_animateRevealWithAdditionalMoveBlock: P0, _completionBlock: P1): R;
    animateHideWithAdditionalMoveBlock_completionBlock<R = void, P0 = CDUnknownBlockType, P1 = CDUnknownBlockType>(_animateHideWithAdditionalMoveBlock: P0, _completionBlock: P1): R;
    isRevealed<R = boolean>(): R;
    isAnimating<R = boolean>(): R;
    setFrame_display<R = void, P0 = CGRect, P1 = boolean>(_setFrame: P0, _display: P1): R;
    setDropRect_collapsedRect<R = void, P0 = CGRect, P1 = CGRect>(_setDropRect: P0, _collapsedRect: P1): R;
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
    initWithController<R = unknown, P0 = unknown>(_initWithController: P0): R;
  }
  namespace _NSFullScreenCreateTileDropTargetWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPanel {
      alloc<R = _NSFullScreenCreateTileDropTargetWindow>(): R;
      new: <R = _NSFullScreenCreateTileDropTargetWindow>() => R;
    }
  }
}
