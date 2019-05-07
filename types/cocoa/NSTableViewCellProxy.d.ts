/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableViewCellProxy<T0 = void, T1 = void, T2 = void> extends NSAccessibilityProxy, NSTableViewCellElementProtocol {
    accessibilityChildrenInNavigationOrderAttribute<R = unknown>(): R;
    accessibilityCurrentEditor<R = unknown>(): R;
    accessibilityWindowPointForShowMenu<R = CGPoint>(): R;
    _accessibilityShowMenu<R = void, P0 = unknown>(__accessibilityShowMenu: P0): R;
    _accessibilityPerformAction<R = void, P0 = unknown>(__accessibilityPerformAction: P0): R;
    _accessibilityPerformAction_withValue<R = void, P0 = unknown, P1 = unknown>(__accessibilityPerformAction: P0, _withValue: P1): R;
    _accessibilityPopUpButtonCellPressAction<R = void, P0 = unknown>(__accessibilityPopUpButtonCellPressAction: P0): R;
    accessibilityBoundsForRangeAttributeForParameter<R = unknown, P0 = unknown>(_accessibilityBoundsForRangeAttributeForParameter: P0): R;
    accessibilitySizeAttribute<R = unknown>(): R;
    accessibilityPositionAttribute<R = unknown>(): R;
    accessibilitySetFocusedAttribute<R = void, P0 = unknown>(_accessibilitySetFocusedAttribute: P0): R;
    accessibilityIsFocusedAttributeSettable<R = boolean>(): R;
    accessibilitySetValueAttribute<R = void, P0 = unknown>(_accessibilitySetValueAttribute: P0): R;
    accessibilityIsValueAttributeSettable<R = boolean>(): R;
    _sendDataSourceSetObjectValue<R = void, P0 = unknown>(__sendDataSourceSetObjectValue: P0): R;
    accessibilityParentAttribute<R = unknown>(): R;
    cellForProxy<R = unknown>(): R;
    editor<R = unknown>(): R;
    isBeingEdited<R = boolean>(): R;
    setAlternateParentClass<R = void, P0 = unknown>(_setAlternateParentClass: P0): R;
    alternateParentClass<R = unknown>(): R;
    accessibilityColumnIndex<R = number>(): R;
    dealloc<R = void>(): R;
    initWithRow_column_tableView<R = unknown, P0 = number, P1 = number, P2 = unknown>(_initWithRow: P0, _column: P1, _tableView: P2): R;
    initWithRow_tableColumn<R = unknown, P0 = number, P1 = unknown>(_initWithRow: P0, _tableColumn: P1): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    debugDescription<R = NSString>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSTableViewCellProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityProxy, NSTableViewCellElementProtocol {
      alloc<R = NSTableViewCellProxy>(): R;
      new: <R = NSTableViewCellProxy>() => R;
    }
  }
}

declare const NSTableViewCellProxy: cocoa.NSTableViewCellProxy.CLASS;
