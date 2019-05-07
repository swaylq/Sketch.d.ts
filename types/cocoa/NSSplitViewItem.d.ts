/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSplitViewItem<T0 = void, T1 = void, T2 = void> extends NSObject, NSAppearanceCustomizationProtocol, NSAnimatablePropertyContainerProtocol, NSCodingProtocol {
    _animatorClass<R = unknown>(): R;
    _setForceWithinWindowBlending<R = void, P0 = boolean>(__setForceWithinWindowBlending: P0): R;
    _forceWithinWindowBlending<R = boolean>(): R;
    _setHasBaseVibrancyEffect<R = void, P0 = boolean>(__setHasBaseVibrancyEffect: P0): R;
    _hasBaseVibrancyEffect<R = boolean>(): R;
    hasUserSetSize<R = boolean>(): R;
    setHasUserSetSize<R = void, P0 = boolean>(_setHasUserSetSize: P0): R;
    setRevealsOnEdgeHoverInFullscreen<R = void, P0 = boolean>(_setRevealsOnEdgeHoverInFullscreen: P0): R;
    revealsOnEdgeHoverInFullscreen<R = boolean>(): R;
    setAutoHidesWhenFullscreen<R = void, P0 = boolean>(_setAutoHidesWhenFullscreen: P0): R;
    autoHidesWhenFullscreen<R = boolean>(): R;
    isAnimating<R = boolean>(): R;
    _markAnimationEnd<R = void>(): R;
    _markAnimationStart<R = void>(): R;
    setPrefersImplicitAnimations<R = void, P0 = boolean>(_setPrefersImplicitAnimations: P0): R;
    prefersImplicitAnimations<R = boolean>(): R;
    isOverlaid<R = boolean>(): R;
    setOverlaid<R = void, P0 = boolean>(_setOverlaid: P0): R;
    _canLiveCollapse<R = boolean>(): R;
    setPreferredSizeRatio<R = void, P0 = number>(_setPreferredSizeRatio: P0): R;
    preferredSizeRatio<R = number>(): R;
    setAutomaticMaximumSize<R = void, P0 = number>(_setAutomaticMaximumSize: P0): R;
    automaticMaximumSize<R = number>(): R;
    setMaximumSize<R = void, P0 = number>(_setMaximumSize: P0): R;
    maximumSize<R = number>(): R;
    setMinimumSize<R = void, P0 = number>(_setMinimumSize: P0): R;
    minimumSize<R = number>(): R;
    canOverlay<R = boolean>(): R;
    _wantsMaterialBackground<R = boolean>(): R;
    _effectiveHoldingPriority<R = number>(): R;
    _overrideHoldingPriority<R = unknown>(): R;
    _setOverrideHoldingPriority<R = void, P0 = unknown>(__setOverrideHoldingPriority: P0): R;
    _splitViewController<R = unknown>(): R;
    _uncollapsePreferringOverlay<R = void>(): R;
    setPrefersPreservingSiblingSizesOnCollapse<R = void, P0 = boolean>(_setPrefersPreservingSiblingSizesOnCollapse: P0): R;
    prefersPreservingSiblingSizesOnCollapse<R = boolean>(): R;
    effectiveCollapseBehavior<R = number>(): R;
    _didChangeCollapsed<R = void>(): R;
    _willChangeCollapsed<R = void>(): R;
    _setCollapsed<R = void, P0 = boolean>(__setCollapsed: P0): R;
    _setCanCollapseFromWindowResize<R = void, P0 = boolean>(__setCanCollapseFromWindowResize: P0): R;
    _canCollapseFromWindowResize<R = boolean>(): R;
    setCanCollapseFromWindowResize<R = void, P0 = boolean>(_setCanCollapseFromWindowResize: P0): R;
    canCollapseFromWindowResize<R = boolean>(): R;
    dealloc<R = void>(): R;
    isSidebar<R = boolean>(): R;
    setSidebar<R = void, P0 = boolean>(_setSidebar: P0): R;
    setBehavior<R = void, P0 = number>(_setBehavior: P0): R;
    animations<R = NSDictionary>(): R;
    setAnimations<R = void, P0 = NSDictionary>(_v: P0): R;
    springLoaded<R = boolean>(): R;
    setSpringLoaded<R = void, P0 = boolean>(_v: P0): R;
    preferredThicknessFraction<R = number>(): R;
    setPreferredThicknessFraction<R = void, P0 = number>(_v: P0): R;
    automaticMaximumThickness<R = number>(): R;
    setAutomaticMaximumThickness<R = void, P0 = number>(_v: P0): R;
    maximumThickness<R = number>(): R;
    setMaximumThickness<R = void, P0 = number>(_v: P0): R;
    minimumThickness<R = number>(): R;
    setMinimumThickness<R = void, P0 = number>(_v: P0): R;
    holdingPriority<R = number>(): R;
    setHoldingPriority<R = void, P0 = number>(_v: P0): R;
    collapseBehavior<R = number>(): R;
    setCollapseBehavior<R = void, P0 = number>(_v: P0): R;
    collapsed<R = boolean>(): R;
    setCollapsed<R = void, P0 = boolean>(_v: P0): R;
    canCollapse<R = boolean>(): R;
    setCanCollapse<R = void, P0 = boolean>(_v: P0): R;
    viewController<R = NSViewController>(): R;
    setViewController<R = void, P0 = NSViewController>(_v: P0): R;
    behavior<R = number>(): R;
    effectiveAppearance<R = NSAppearance>(): R;
    appearance<R = NSAppearance>(): R;
    setAppearance<R = void, P0 = NSAppearance>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSSplitViewItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSAppearanceCustomizationProtocol, NSAnimatablePropertyContainerProtocol, NSCodingProtocol {
      alloc<R = NSSplitViewItem>(): R;
      new: <R = NSSplitViewItem>() => R;
      keyPathsForValuesAffectingEffectiveCollapseBehavior<R = unknown>(): R;
      automaticallyNotifiesObserversOfCollapsed<R = boolean>(): R;
      keyPathsForValuesAffectingSidebar<R = unknown>(): R;
      contentListWithViewController<R = unknown, P0 = unknown>(_contentListWithViewController: P0): R;
      sidebarWithViewController<R = unknown, P0 = unknown>(_sidebarWithViewController: P0): R;
      splitViewItemWithViewController<R = unknown, P0 = unknown>(_splitViewItemWithViewController: P0): R;
    }
  }
}

declare const NSSplitViewItem: cocoa.NSSplitViewItem.CLASS;
