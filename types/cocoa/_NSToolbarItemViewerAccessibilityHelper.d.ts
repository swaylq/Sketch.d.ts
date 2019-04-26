/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarItemViewerAccessibilityHelper<T0 = void, T1 = void, T2 = void> extends NSObject {
    accessibilityHitTest<R = unknown, P0 = CGPoint>(_accessibilityHitTest: P0): R;
    accessibilityPerformAction<R = void, P0 = unknown>(_accessibilityPerformAction: P0): R;
    accessibilityActionDescription<R = unknown, P0 = unknown>(_accessibilityActionDescription: P0): R;
    accessibilityActionNames<R = unknown>(): R;
    accessibilityChildrenAttribute<R = unknown>(): R;
    accessibilitySetFocusedAttribute<R = void, P0 = unknown>(_accessibilitySetFocusedAttribute: P0): R;
    accessibilityIsFocusedAttributeSettable<R = boolean>(): R;
    accessibilityIsValueAttributeSettable<R = boolean>(): R;
    accessibilityValueAttribute<R = unknown>(): R;
    accessibilityEnabledAttribute<R = unknown>(): R;
    accessibilityDescriptionAttribute<R = unknown>(): R;
    accessibilityTitleAttribute<R = unknown>(): R;
    accessibilityRoleAttribute<R = unknown>(): R;
    accessibilityAttributeNames<R = unknown>(): R;
    accessibilityIsIgnored<R = boolean>(): R;
    dealloc<R = void>(): R;
    initWithToolbarItemViewer<R = unknown, P0 = unknown>(_initWithToolbarItemViewer: P0): R;
  }
  namespace _NSToolbarItemViewerAccessibilityHelper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSToolbarItemViewerAccessibilityHelper>(): R;
      new: <R = _NSToolbarItemViewerAccessibilityHelper>() => R;
      accessibilityHelperForToolbarItemViewer<R = unknown, P0 = unknown>(_accessibilityHelperForToolbarItemViewer: P0): R;
    }
  }
}
