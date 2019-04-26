/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableRow<T0 = void, T1 = void, T2 = void> extends NSObject {
    accessibilityHasOutlineColumnMockGroupForRow_column<R = boolean, P0 = number, P1 = number>(_accessibilityHasOutlineColumnMockGroupForRow: P0, _column: P1): R;
    _childrenCount<R = number>(): R;
    _accessibilityChildrenWithIndexes<R = unknown, P0 = unknown>(__accessibilityChildrenWithIndexes: P0): R;
    row<R = number>(): R;
    hash<R = number>(): R;
    dealloc<R = void>(): R;
    initWithRow_ofTableView<R = unknown, P0 = number, P1 = unknown>(_initWithRow: P0, _ofTableView: P1): R;
    deepestAccessibilityDescendants<R = unknown>(): R;
    _accessibilityChildUIElementForSpecifierComponent<R = unknown, P0 = number>(__accessibilityChildUIElementForSpecifierComponent: P0): R;
    _accessibilitySpecifierComponentForChildUIElement_registerIfNeeded<R = number, P0 = unknown, P1 = boolean>(__accessibilitySpecifierComponentForChildUIElement: P0, _registerIfNeeded: P1): R;
    accessibilitySupportsNotifications<R = boolean>(): R;
    accessibilityArrayAttributeValues_index_maxCount<R = unknown, P0 = unknown, P1 = number, P2 = number>(_accessibilityArrayAttributeValues: P0, _index: P1, _maxCount: P2): R;
    accessibilityArrayAttributeCount<R = number, P0 = unknown>(_accessibilityArrayAttributeCount: P0): R;
    accessibilityIndexOfChild<R = number, P0 = unknown>(_accessibilityIndexOfChild: P0): R;
    accessibilityFocusedUIElement<R = unknown>(): R;
    accessibilityHitTest<R = unknown, P0 = CGPoint>(_accessibilityHitTest: P0): R;
    accessibilityIsIgnored<R = boolean>(): R;
    accessibilityPerformAction<R = void, P0 = unknown>(_accessibilityPerformAction: P0): R;
    accessibilityActionDescription<R = unknown, P0 = unknown>(_accessibilityActionDescription: P0): R;
    accessibilityActionNames<R = unknown>(): R;
    accessibilitySetValue_forAttribute<R = void, P0 = unknown, P1 = unknown>(_accessibilitySetValue: P0, _forAttribute: P1): R;
    accessibilityIsAttributeSettable<R = boolean, P0 = unknown>(_accessibilityIsAttributeSettable: P0): R;
    accessibilityAttributeValue<R = unknown, P0 = unknown>(_accessibilityAttributeValue: P0): R;
    accessibilityIsIndexAttributeSettable<R = boolean>(): R;
    accessibilityIndexAttribute<R = unknown>(): R;
    accessibilitySetSelectedAttribute<R = void, P0 = unknown>(_accessibilitySetSelectedAttribute: P0): R;
    accessibilityIsSelectedAttributeSettable<R = boolean>(): R;
    _canDeselect<R = boolean>(): R;
    accessibilitySelectedAttribute<R = unknown>(): R;
    accessibilityIsSizeAttributeSettable<R = boolean>(): R;
    accessibilitySizeAttribute<R = unknown>(): R;
    accessibilityIsPositionAttributeSettable<R = boolean>(): R;
    accessibilityPositionAttribute<R = unknown>(): R;
    accessibilityIsTopLevelUIElementAttributeSettable<R = boolean>(): R;
    accessibilityTopLevelUIElementAttribute<R = unknown>(): R;
    accessibilityIsWindowAttributeSettable<R = boolean>(): R;
    accessibilityWindowAttribute<R = unknown>(): R;
    accessibilityIsVisibleChildrenAttributeSettable<R = boolean>(): R;
    accessibilityVisibleChildrenAttribute<R = unknown>(): R;
    accessibilityIsChildrenAttributeSettable<R = boolean>(): R;
    accessibilityChildrenAttribute<R = unknown>(): R;
    accessibilityChildrenInNavigationOrderAttribute<R = unknown>(): R;
    accessibilityIsParentAttributeSettable<R = boolean>(): R;
    accessibilityParentAttribute<R = unknown>(): R;
    accessibilityIsSubroleAttributeSettable<R = boolean>(): R;
    accessibilitySubroleAttribute<R = unknown>(): R;
    accessibilityIsRoleDescriptionAttributeSettable<R = boolean>(): R;
    accessibilityRoleDescriptionAttribute<R = unknown>(): R;
    accessibilityIsRoleAttributeSettable<R = boolean>(): R;
    accessibilityRoleAttribute<R = unknown>(): R;
    accessibilityAttributeNames<R = unknown>(): R;
  }
  namespace NSTableRow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTableRow>(): R;
      new: <R = NSTableRow>() => R;
      tableRow_ofTableView<R = unknown, P0 = number, P1 = unknown>(_tableRow: P0, _ofTableView: P1): R;
    }
  }
}

declare const NSTableRow: cocoa.NSTableRow.CLASS;
