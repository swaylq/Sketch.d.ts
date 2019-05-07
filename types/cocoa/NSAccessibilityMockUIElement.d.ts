/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityMockUIElement<T0 = void, T1 = void, T2 = void> extends NSAccessibilityElement {
    accessibilityVerticalUnitDescriptionAttribute<R = unknown>(): R;
    accessibilityHorizontalUnitDescriptionAttribute<R = unknown>(): R;
    accessibilityFocusedUIElement<R = unknown>(): R;
    accessibilityIsIgnored<R = boolean>(): R;
    accessibilityPerformAction<R = void, P0 = unknown>(_accessibilityPerformAction: P0): R;
    accessibilityActionDescription<R = unknown, P0 = unknown>(_accessibilityActionDescription: P0): R;
    accessibilityActionNames<R = unknown>(): R;
    accessibilitySetValue_forAttribute<R = void, P0 = unknown, P1 = unknown>(_accessibilitySetValue: P0, _forAttribute: P1): R;
    accessibilityIsAttributeSettable<R = boolean, P0 = unknown>(_accessibilityIsAttributeSettable: P0): R;
    accessibilityIsSizeAttributeSettable<R = boolean>(): R;
    accessibilitySizeAttribute<R = unknown>(): R;
    accessibilityIsPositionAttributeSettable<R = boolean>(): R;
    accessibilityPositionAttribute<R = unknown>(): R;
    accessibilityIsTopLevelUIElementAttributeSettable<R = boolean>(): R;
    accessibilityTopLevelUIElementAttribute<R = unknown>(): R;
    accessibilityIsWindowAttributeSettable<R = boolean>(): R;
    accessibilityWindowAttribute<R = unknown>(): R;
    accessibilityIsParentAttributeSettable<R = boolean>(): R;
    accessibilityParentAttribute<R = unknown>(): R;
    accessibilitySetFocusedAttribute<R = void, P0 = unknown>(_accessibilitySetFocusedAttribute: P0): R;
    accessibilityIsFocusedAttributeSettable<R = boolean>(): R;
    accessibilityFocusedAttribute<R = unknown>(): R;
    accessibilityIsHelpAttributeSettable<R = boolean>(): R;
    accessibilityHelpAttribute<R = unknown>(): R;
    accessibilityIsSubroleAttributeSettable<R = boolean>(): R;
    accessibilitySubroleAttribute<R = unknown>(): R;
    accessibilityIsRoleDescriptionAttributeSettable<R = boolean>(): R;
    accessibilityRoleDescriptionAttribute<R = unknown>(): R;
    accessibilityIsRoleAttributeSettable<R = boolean>(): R;
    accessibilityRoleAttribute<R = unknown>(): R;
    hash<R = number>(): R;
    initWithRole_parent<R = unknown, P0 = unknown, P1 = unknown>(_initWithRole: P0, _parent: P1): R;
    initWithRole_subrole_parent<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithRole: P0, _subrole: P1, _parent: P2): R;
  }
  namespace NSAccessibilityMockUIElement {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityElement {
      alloc<R = NSAccessibilityMockUIElement>(): R;
      new: <R = NSAccessibilityMockUIElement>() => R;
      elementWithRole_parent<R = unknown, P0 = unknown, P1 = unknown>(_elementWithRole: P0, _parent: P1): R;
      elementWithRole_subrole_parent<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_elementWithRole: P0, _subrole: P1, _parent: P2): R;
    }
  }
}

declare const NSAccessibilityMockUIElement: cocoa.NSAccessibilityMockUIElement.CLASS;
