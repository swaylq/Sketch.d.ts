/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityReparentingCellProxy<T0 = void, T1 = void, T2 = void> extends NSAccessibilityReparentingProxy {
    accessibilityFrame<R = CGRect>(): R;
    accessibilitySizeAttribute<R = unknown>(): R;
    accessibilityPositionAttribute<R = unknown>(): R;
    accessibilityTopLevelUIElementAttribute<R = unknown>(): R;
    accessibilityWindowAttribute<R = unknown>(): R;
    accessibilitySetFocusedAttribute<R = void, P0 = unknown>(_accessibilitySetFocusedAttribute: P0): R;
    accessibilityIsFocusedAttributeSettable<R = boolean>(): R;
    accessibilityHelpAttribute<R = unknown>(): R;
    accessibilityBoundsForRangeAttributeForParameter<R = unknown, P0 = unknown>(_accessibilityBoundsForRangeAttributeForParameter: P0): R;
    accessibilityRangeForPositionAttributeForParameter<R = unknown, P0 = unknown>(_accessibilityRangeForPositionAttributeForParameter: P0): R;
    accessibilityRangeForLineAttributeForParameter<R = unknown, P0 = unknown>(_accessibilityRangeForLineAttributeForParameter: P0): R;
    accessibilityLineForIndexAttributeForParameter<R = unknown, P0 = unknown>(_accessibilityLineForIndexAttributeForParameter: P0): R;
    accessibilityVisibleCharacterRangeAttribute<R = unknown>(): R;
    hasEditor<R = boolean>(): R;
  }
  namespace NSAccessibilityReparentingCellProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityReparentingProxy {
      alloc<R = NSAccessibilityReparentingCellProxy>(): R;
      new: <R = NSAccessibilityReparentingCellProxy>() => R;
    }
  }
}

declare const NSAccessibilityReparentingCellProxy: cocoa.NSAccessibilityReparentingCellProxy.CLASS;
