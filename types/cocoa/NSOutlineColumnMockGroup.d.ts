/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOutlineColumnMockGroup<T0 = void, T1 = void, T2 = void> extends NSObject {
    accessibilityFocusedUIElement<R = unknown>(): R;
    accessibilityHitTest<R = unknown, P0 = CGPoint>(_accessibilityHitTest: P0): R;
    accessibilityIsIgnored<R = boolean>(): R;
    accessibilityPerformAction<R = void, P0 = unknown>(_accessibilityPerformAction: P0): R;
    accessibilityActionDescription<R = unknown, P0 = unknown>(_accessibilityActionDescription: P0): R;
    accessibilityActionNames<R = unknown>(): R;
    accessibilitySetValue_forAttribute<R = void, P0 = unknown, P1 = unknown>(_accessibilitySetValue: P0, _forAttribute: P1): R;
    accessibilityIsAttributeSettable<R = boolean, P0 = unknown>(_accessibilityIsAttributeSettable: P0): R;
    accessibilityAttributeValue<R = unknown, P0 = unknown>(_accessibilityAttributeValue: P0): R;
    accessibilityIsSizeAttributeSettable<R = boolean>(): R;
    accessibilitySizeAttribute<R = unknown>(): R;
    accessibilityIsPositionAttributeSettable<R = boolean>(): R;
    accessibilityPositionAttribute<R = unknown>(): R;
    _groupRect<R = CGRect>(): R;
    accessibilityIsTopLevelUIElementAttributeSettable<R = boolean>(): R;
    accessibilityTopLevelUIElementAttribute<R = unknown>(): R;
    accessibilityIsWindowAttributeSettable<R = boolean>(): R;
    accessibilityWindowAttribute<R = unknown>(): R;
    accessibilityIsChildrenAttributeSettable<R = boolean>(): R;
    accessibilityChildrenAttribute<R = unknown>(): R;
    accessibilityChildrenInNavigationOrderAttribute<R = unknown>(): R;
    accessibilityIsParentAttributeSettable<R = boolean>(): R;
    accessibilityParentAttribute<R = unknown>(): R;
    accessibilityIsRoleDescriptionAttributeSettable<R = boolean>(): R;
    accessibilityRoleDescriptionAttribute<R = unknown>(): R;
    accessibilityIsRoleAttributeSettable<R = boolean>(): R;
    accessibilityRoleAttribute<R = unknown>(): R;
    accessibilityAttributeNames<R = unknown>(): R;
    _cellProxyForRow_tableColumn<R = unknown, P0 = number, P1 = unknown>(__cellProxyForRow: P0, _tableColumn: P1): R;
    accessibilityColumnIndex<R = number>(): R;
    column<R = number>(): R;
    row<R = number>(): R;
    dealloc<R = void>(): R;
    initWithRow_column_tableView<R = unknown, P0 = number, P1 = number, P2 = unknown>(_initWithRow: P0, _column: P1, _tableView: P2): R;
    initWithRow_tableColumn<R = unknown, P0 = number, P1 = unknown>(_initWithRow: P0, _tableColumn: P1): R;
  }
  namespace NSOutlineColumnMockGroup {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSOutlineColumnMockGroup>(): R;
      new: <R = NSOutlineColumnMockGroup>() => R;
      outlineColumnGroupForRow_tableColumn<R = unknown, P0 = number, P1 = unknown>(_outlineColumnGroupForRow: P0, _tableColumn: P1): R;
      outlineColumnGroupForRow_column_tableView<R = unknown, P0 = number, P1 = number, P2 = unknown>(_outlineColumnGroupForRow: P0, _column: P1, _tableView: P2): R;
    }
  }
}

declare const NSOutlineColumnMockGroup: cocoa.NSOutlineColumnMockGroup.CLASS;
