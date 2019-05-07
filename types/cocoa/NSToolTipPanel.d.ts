/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolTipPanel<T0 = void, T1 = void, T2 = void> extends NSPanel {
    shadowOptions<R = number>(): R;
    _backdropBleedAmount<R = number>(): R;
    _setLevelToShowAboveWindow<R = void, P0 = unknown>(__setLevelToShowAboveWindow: P0): R;
    ignoresMouseEvents<R = boolean>(): R;
    canBecomeVisibleWithoutLogin<R = boolean>(): R;
    setToolTipString<R = void, P0 = unknown>(_setToolTipString: P0): R;
    toolTipString<R = unknown>(): R;
    hasShadow<R = boolean>(): R;
    accessibilityPostNotification<R = void, P0 = unknown>(_accessibilityPostNotification: P0): R;
    accessibilityIsTitleAttributeSettable<R = boolean>(): R;
    accessibilityTitleAttribute<R = unknown>(): R;
    accessibilityRoleAttribute<R = unknown>(): R;
    accessibilityAttributeNames<R = unknown>(): R;
  }
  namespace NSToolTipPanel {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPanel {
      alloc<R = NSToolTipPanel>(): R;
      new: <R = NSToolTipPanel>() => R;
    }
  }
}

declare const NSToolTipPanel: cocoa.NSToolTipPanel.CLASS;
