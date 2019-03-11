/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityReparentingCellProxy<T = any> extends cocoa.NSAccessibilityReparentingProxy {
    accessibilityFrame<R = cocoa.CGRect>(): R;
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
  namespace classes {
    export interface NSAccessibilityReparentingCellProxy<T = any> extends cocoa.classes.NSAccessibilityReparentingProxy {
      alloc<R = NSAccessibilityReparentingCellProxy>(): R;
      new: <R = NSAccessibilityReparentingCellProxy>() => R;
    }
  }
}

declare const NSAccessibilityReparentingCellProxy: cocoa.classes.NSAccessibilityReparentingCellProxy;
