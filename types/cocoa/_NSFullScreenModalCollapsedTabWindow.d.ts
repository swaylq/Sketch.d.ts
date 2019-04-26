/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenModalCollapsedTabWindow<T0 = void, T1 = void, T2 = void> extends NSPanel {
    tabBarSnapshot<R = unknown, P0 = CGRect>(_tabBarSnapshot: P0): R;
    moveToSpace<R = void>(): R;
    revealWithoutAnimating<R = void>(): R;
    animateRevealWithAdditionalMoveBlock<R = void, P0 = CDUnknownBlockType>(_animateRevealWithAdditionalMoveBlock: P0): R;
    _monitorModalPollDrags<R = void>(): R;
    animateHideWithAdditionalMoveBlock<R = void, P0 = CDUnknownBlockType>(_animateHideWithAdditionalMoveBlock: P0): R;
    isAnimating<R = boolean>(): R;
    reshapeContents<R = void>(): R;
    _targetTabFrame<R = CGRect>(): R;
    forgetTabBar<R = void>(): R;
    takeTabBar<R = void, P0 = unknown>(_takeTabBar: P0): R;
    hasTabBar<R = boolean>(): R;
    setFrame_display<R = void, P0 = CGRect, P1 = boolean>(_setFrame: P0, _display: P1): R;
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
  }
  namespace _NSFullScreenModalCollapsedTabWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPanel {
      alloc<R = _NSFullScreenModalCollapsedTabWindow>(): R;
      new: <R = _NSFullScreenModalCollapsedTabWindow>() => R;
    }
  }
}
