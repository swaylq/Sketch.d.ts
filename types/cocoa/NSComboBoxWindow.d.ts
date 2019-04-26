/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSComboBoxWindow<T0 = void, T1 = void, T2 = void> extends NSWindow {
    setShownAboveComboBox<R = void, P0 = boolean>(_setShownAboveComboBox: P0): R;
    orderOut<R = void, P0 = unknown>(_orderOut: P0): R;
    makeKeyAndOrderFront<R = void, P0 = unknown>(_makeKeyAndOrderFront: P0): R;
    orderWindow_relativeTo<R = void, P0 = number, P1 = number>(_orderWindow: P0, _relativeTo: P1): R;
    orderFront<R = void, P0 = unknown>(_orderFront: P0): R;
    _allowsImplicitRemovalFromMovementGroup<R = boolean>(): R;
    _detachFromParentWindow<R = void>(): R;
    _attachToParentWindow<R = void>(): R;
    _commonAwake<R = void>(): R;
    hasShadow<R = boolean>(): R;
    shadowOptions<R = number>(): R;
    hasKeyAppearance<R = boolean>(): R;
    canBecomeVisibleWithoutLogin<R = boolean>(): R;
    canBecomeKeyWindow<R = boolean>(): R;
    isKeyWindow<R = boolean>(): R;
    worksWhenModal<R = boolean>(): R;
    initWithContentRect_comboBoxCell<R = unknown, P0 = CGRect, P1 = unknown>(_initWithContentRect: P0, _comboBoxCell: P1): R;
    accessibilityParentAttribute<R = unknown>(): R;
    accessibilityIsChildOfApp<R = boolean>(): R;
    accessibilityIsIgnored<R = boolean>(): R;
  }
  namespace NSComboBoxWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = NSComboBoxWindow>(): R;
      new: <R = NSComboBoxWindow>() => R;
    }
  }
}

declare const NSComboBoxWindow: cocoa.NSComboBoxWindow.CLASS;
