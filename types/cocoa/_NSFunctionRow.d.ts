/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFunctionRow<T0 = void, T1 = void, T2 = void> extends NSFunctionRow {
    description<R = unknown>(): R;
    CAContext<R = unknown>(): R;
    frame<R = CGRect>(): R;
    visualCenterXAnchor<R = unknown>(): R;
    setViewController<R = void, P0 = unknown>(_setViewController: P0): R;
    viewController<R = unknown>(): R;
    minimizeSystemModal<R = void>(): R;
    dismissSystemModal<R = void>(): R;
    presentSystemModalWithSystemTrayIdentifier<R = void, P0 = unknown>(_presentSystemModalWithSystemTrayIdentifier: P0): R;
    dim<R = void>(): R;
    deactivate<R = void>(): R;
    activate<R = void>(): R;
    _setStatus<R = void, P0 = number>(__setStatus: P0): R;
    status<R = number>(): R;
    setActive<R = void, P0 = boolean>(_setActive: P0): R;
    isActive<R = boolean>(): R;
    DFRElement<R = __DFRElement>(): R;
    dealloc<R = void>(): R;
    initWithDFRElementAttributes<R = unknown, P0 = unknown>(_initWithDFRElementAttributes: P0): R;
    initWithType<R = unknown, P0 = number>(_initWithType: P0): R;
    accessibilityIsAttributeSettable<R = boolean, P0 = unknown>(_accessibilityIsAttributeSettable: P0): R;
    accessibilityAttributeValue<R = unknown, P0 = unknown>(_accessibilityAttributeValue: P0): R;
    accessibilitySizeAttribute<R = unknown>(): R;
    accessibilityPositionAttribute<R = unknown>(): R;
    accessibilityChildrenAttribute<R = unknown>(): R;
    accessibilityParentAttribute<R = unknown>(): R;
    accessibilityRoleDescriptionAttribute<R = unknown>(): R;
    accessibilityRoleAttribute<R = unknown>(): R;
    accessibilityShouldUseUniqueId<R = boolean>(): R;
    accessibilityIsIgnored<R = boolean>(): R;
    accessibilityAttributeNames<R = unknown>(): R;
  }
  namespace _NSFunctionRow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFunctionRow {
      alloc<R = _NSFunctionRow>(): R;
      new: <R = _NSFunctionRow>() => R;
    }
  }
}
