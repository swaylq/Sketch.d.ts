/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPopoverWindow<T0 = void, T1 = void, T2 = void> extends NSPanel {
    _backdropBleedAmount<R = number>(): R;
    styleMask<R = number>(): R;
    _isNonactivatingPanel<R = boolean>(): R;
    _setNonactivatingPanel<R = void, P0 = boolean>(__setNonactivatingPanel: P0): R;
    canBecomeMainWindow<R = boolean>(): R;
    canBecomeKeyWindow<R = boolean>(): R;
    performClose<R = void, P0 = unknown>(_performClose: P0): R;
    cancelOperation<R = void, P0 = unknown>(_cancelOperation: P0): R;
    _ignoreForFullScreenTransitionSnapshot<R = boolean>(): R;
    _ignoreForFullScreenTransition<R = boolean>(): R;
    _wantsSnapshotProxyWindowForOrderOutAnimation<R = boolean>(): R;
    animationResizeTime<R = number, P0 = CGRect>(_animationResizeTime: P0): R;
    _windowTransformAnimationForOrdering_animationType_interruptingAnimation<R = unknown, P0 = number, P1 = number, P2 = unknown>(__windowTransformAnimationForOrdering: P0, _animationType: P1, _interruptingAnimation: P2): R;
    _setOrderOutAnimationType<R = void, P0 = number>(__setOrderOutAnimationType: P0): R;
    _orderOutAnimationType<R = number>(): R;
    _setOrderFrontAnimationType<R = void, P0 = number>(__setOrderFrontAnimationType: P0): R;
    _orderFrontAnimationType<R = number>(): R;
    shadowOptions<R = number>(): R;
    _draggableFrame<R = CGRect>(): R;
    _allowsImplicitRemovalFromMovementGroup<R = boolean>(): R;
    _parentWindowForAddingToMovementGroupWithProposedParent<R = unknown, P0 = unknown>(__parentWindowForAddingToMovementGroupWithProposedParent: P0): R;
    _childWindowOrderingPriority<R = number>(): R;
    setParentWindow<R = void, P0 = unknown>(_setParentWindow: P0): R;
    setContentView<R = void, P0 = unknown>(_setContentView: P0): R;
    _fromConstraintsSetWindowFrame<R = void, P0 = CGRect>(__fromConstraintsSetWindowFrame: P0): R;
    setFrame_display<R = void, P0 = CGRect, P1 = boolean>(_setFrame: P0, _display: P1): R;
    _shouldRemoveFromParentIfPossible<R = boolean>(): R;
    _initWithPopover<R = unknown, P0 = unknown>(__initWithPopover: P0): R;
    _canBeSnappingTarget<R = boolean>(): R;
    _hasActiveDragTypes<R = boolean>(): R;
    accessibilityPerformAction<R = void, P0 = unknown>(_accessibilityPerformAction: P0): R;
    accessibilityActionDescription<R = unknown, P0 = unknown>(_accessibilityActionDescription: P0): R;
    accessibilityActionNames<R = unknown>(): R;
    accessibilityIsHelpAttributeSettable<R = boolean>(): R;
    accessibilityHelpAttribute<R = unknown>(): R;
    accessibilityIsWindowAttributeSettable<R = boolean>(): R;
    accessibilityWindowAttribute<R = unknown>(): R;
    accessibilityIsTopLevelUIElementAttributeSettable<R = boolean>(): R;
    accessibilityTopLevelUIElementAttribute<R = unknown>(): R;
    accessibilityParentAttribute<R = unknown>(): R;
    accessibilityRoleAttribute<R = unknown>(): R;
    accessibilityAttributeNames<R = unknown>(): R;
    animates<R = boolean>(): R;
    setAnimates<R = void, P0 = boolean>(_v: P0): R;
    popoverAccessibilityParent<R = unknown>(): R;
    setPopoverAccessibilityParent<R = void, P0 = unknown>(_v: P0): R;
    _popover<R = NSPopover>(): R;
    set_popover<R = void, P0 = NSPopover>(_v: P0): R;
    contentInset<R = NSEdgeInsets>(): R;
    setContentInset<R = void, P0 = NSEdgeInsets>(_v: P0): R;
    anchorSize<R = CGSize>(): R;
    setAnchorSize<R = void, P0 = CGSize>(_v: P0): R;
    anchorEdge<R = number>(): R;
    setAnchorEdge<R = void, P0 = number>(_v: P0): R;
    anchorPoint<R = CGPoint>(): R;
    setAnchorPoint<R = void, P0 = CGPoint>(_v: P0): R;
    _popoverFrame<R = NSPopoverFrame>(): R;
  }
  namespace _NSPopoverWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPanel {
      alloc<R = _NSPopoverWindow>(): R;
      new: <R = _NSPopoverWindow>() => R;
      frameViewClassForStyleMask<R = unknown, P0 = number>(_frameViewClassForStyleMask: P0): R;
      contentRectForFrameRect_appearance_anchorSize_contentInset_hasTitlebar<R = CGRect, P0 = CGRect, P1 = unknown, P2 = CGSize, P3 = NSEdgeInsets, P4 = boolean>(_contentRectForFrameRect: P0, _appearance: P1, _anchorSize: P2, _contentInset: P3, _hasTitlebar: P4): R;
      frameRectForContentRect_appearance_anchorSize_contentInset_hasTitlebar<R = CGRect, P0 = CGRect, P1 = unknown, P2 = CGSize, P3 = NSEdgeInsets, P4 = boolean>(_frameRectForContentRect: P0, _appearance: P1, _anchorSize: P2, _contentInset: P3, _hasTitlebar: P4): R;
      keyPathsForValuesAffectingAnchorPoint<R = unknown>(): R;
    }
  }
}
