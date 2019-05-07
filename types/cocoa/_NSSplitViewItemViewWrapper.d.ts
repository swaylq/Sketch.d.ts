/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSplitViewItemViewWrapper<T0 = void, T1 = void, T2 = void> extends NSView {
    _shouldConsumeMouseEvents<R = boolean>(): R;
    disengageBreadthConstraint<R = void>(): R;
    updateBreadthConstraintPriority<R = void>(): R;
    engageBreadthConstraintForAnimatingLastEdge<R = number, P0 = boolean>(_engageBreadthConstraintForAnimatingLastEdge: P0): R;
    wrapView<R = void>(): R;
    _createOrUpdateMaximumSizeConstraint<R = void>(): R;
    _createOrUpdateMinimumSizeConstraint<R = void>(): R;
    _overlayMaterialGroupName<R = unknown>(): R;
    _updateEffectViewState<R = void>(): R;
    _preferredAppearance<R = unknown>(): R;
    setHidden<R = void, P0 = boolean>(_setHidden: P0): R;
    _splitView<R = unknown>(): R;
    breadthConstraint<R = NSLayoutConstraint>(): R;
    setBreadthConstraint<R = void, P0 = NSLayoutConstraint>(_v: P0): R;
    equalBreadthConstraint<R = NSLayoutConstraint>(): R;
    setEqualBreadthConstraint<R = void, P0 = NSLayoutConstraint>(_v: P0): R;
    sidebar<R = boolean>(): R;
    setSidebar<R = void, P0 = boolean>(_v: P0): R;
    maximumThickness<R = number>(): R;
    setMaximumThickness<R = void, P0 = number>(_v: P0): R;
    minimumThickness<R = number>(): R;
    setMinimumThickness<R = void, P0 = number>(_v: P0): R;
    forceWithinWindowBlending<R = boolean>(): R;
    setForceWithinWindowBlending<R = void, P0 = boolean>(_v: P0): R;
    hasBaseVibrancyEffect<R = boolean>(): R;
    setHasBaseVibrancyEffect<R = void, P0 = boolean>(_v: P0): R;
    overlaid<R = boolean>(): R;
    setOverlaid<R = void, P0 = boolean>(_v: P0): R;
    splitViewItem<R = NSSplitViewItem>(): R;
    setSplitViewItem<R = void, P0 = NSSplitViewItem>(_v: P0): R;
  }
  namespace _NSSplitViewItemViewWrapper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSSplitViewItemViewWrapper>(): R;
      new: <R = _NSSplitViewItemViewWrapper>() => R;
    }
  }
}
