/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableViewCellMockElement<T0 = void, T1 = void, T2 = void> extends NSObject, NSTableViewCellElementProtocol {
    deepestAccessibilityDescendants<R = unknown>(): R;
    accessibilityPerformAction<R = void, P0 = unknown>(_accessibilityPerformAction: P0): R;
    accessibilityActionDescription<R = unknown, P0 = unknown>(_accessibilityActionDescription: P0): R;
    accessibilityActionNames<R = unknown>(): R;
    accessibilitySetValue_forAttribute<R = void, P0 = unknown, P1 = unknown>(_accessibilitySetValue: P0, _forAttribute: P1): R;
    accessibilityIsAttributeSettable<R = boolean, P0 = unknown>(_accessibilityIsAttributeSettable: P0): R;
    accessibilityAttributeValue<R = unknown, P0 = unknown>(_accessibilityAttributeValue: P0): R;
    accessibilityParameterizedAttributeNames<R = unknown>(): R;
    accessibilityIsIgnored<R = boolean>(): R;
    accessibilityOverriddenAttributes<R = unknown>(): R;
    accessibilityIsSizeAttributeSettable<R = boolean>(): R;
    accessibilityIsPositionAttributeSettable<R = boolean>(): R;
    accessibilitySizeAttribute<R = unknown>(): R;
    accessibilityPositionAttribute<R = unknown>(): R;
    accessibilityIsSelectedAttributeSettable<R = boolean>(): R;
    accessibilitySelectedAttribute<R = unknown>(): R;
    accessibilityIsDescriptionAttributeSettable<R = boolean>(): R;
    accessibilityDescriptionAttribute<R = unknown>(): R;
    accessibilityIsTitleUIElementAttributeSettable<R = boolean>(): R;
    accessibilityTitleUIElementAttribute<R = unknown>(): R;
    accessibilityIsChildrenAttributeSettable<R = boolean>(): R;
    accessibilityChildrenAttribute<R = unknown>(): R;
    accessibilityChildrenInNavigationOrderAttribute<R = unknown>(): R;
    childViewIsCellView<R = unknown, P0 = string>(_childViewIsCellView: P0): R;
    isGroupRowCell<R = boolean>(): R;
    accessibilityIsColumnIndexRangeAttributeSettable<R = boolean>(): R;
    accessibilityColumnIndexRangeAttribute<R = unknown>(): R;
    accessibilityIsRowIndexRangeAttributeSettable<R = boolean>(): R;
    accessibilityRowIndexRangeAttribute<R = unknown>(): R;
    accessibilityIsFocusedAttributeSettable<R = boolean>(): R;
    accessibilityFocusedAttribute<R = unknown>(): R;
    accessibilityIsEnabledAttributeSettable<R = boolean>(): R;
    accessibilityEnabledAttribute<R = unknown>(): R;
    accessibilityIsTopLevelUIElementAttributeSettable<R = boolean>(): R;
    accessibilityTopLevelUIElementAttribute<R = unknown>(): R;
    accessibilityIsWindowAttributeSettable<R = boolean>(): R;
    accessibilityWindowAttribute<R = unknown>(): R;
    accessibilityIsParentAttributeSettable<R = boolean>(): R;
    accessibilityParentAttribute<R = unknown>(): R;
    accessibilityIsRoleDescriptionAttributeSettable<R = boolean>(): R;
    accessibilityRoleDescriptionAttribute<R = unknown>(): R;
    accessibilityIsRoleAttributeSettable<R = boolean>(): R;
    accessibilityRoleAttribute<R = unknown>(): R;
    accessibilityAttributeNames<R = unknown>(): R;
    accessibilityColumnIndex<R = number>(): R;
    isOutline<R = boolean>(): R;
    tableColumn<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithRow_column_tableView<R = unknown, P0 = number, P1 = number, P2 = unknown>(_initWithRow: P0, _column: P1, _tableView: P2): R;
    initWithRow_tableColumn<R = unknown, P0 = number, P1 = unknown>(_initWithRow: P0, _tableColumn: P1): R;
    hash<R = number>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSTableViewCellMockElement {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSTableViewCellElementProtocol {
      alloc<R = NSTableViewCellMockElement>(): R;
      new: <R = NSTableViewCellMockElement>() => R;
    }
  }
}

declare const NSTableViewCellMockElement: cocoa.NSTableViewCellMockElement.CLASS;
