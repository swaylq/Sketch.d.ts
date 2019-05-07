/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCorrectionSubPanel<T0 = void, T1 = void, T2 = void> extends NSPanel {
    shadowOptions<R = number>(): R;
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
    panelAccessibilityParent<R = unknown>(): R;
    setPanelAccessibilityParent<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace NSCorrectionSubPanel {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPanel {
      alloc<R = NSCorrectionSubPanel>(): R;
      new: <R = NSCorrectionSubPanel>() => R;
    }
  }
}

declare const NSCorrectionSubPanel: cocoa.NSCorrectionSubPanel.CLASS;
