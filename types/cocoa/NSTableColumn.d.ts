/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableColumn<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol, NSUserInterfaceItemIdentificationProtocol {
    cxx_destruct<R = void>(): R;
    _bindingAdaptor<R = unknown>(): R;
    _setBindingAdaptor<R = void, P0 = unknown>(__setBindingAdaptor: P0): R;
    sizeToFit<R = void>(): R;
    isResizable<R = boolean>(): R;
    setResizable<R = void, P0 = boolean>(_setResizable: P0): R;
    dataCellForRow<R = unknown, P0 = number>(_dataCellForRow: P0): R;
    dataCell<R = unknown>(): R;
    setDataCell<R = void, P0 = unknown>(_setDataCell: P0): R;
    _updateDataCellControlView<R = void>(): R;
    _updateHeaderCellControlView<R = void>(): R;
    _canUseReorderResizeImageCache<R = boolean>(): R;
    _setCanUseReorderResizeImageCache<R = void, P0 = boolean>(__setCanUseReorderResizeImageCache: P0): R;
    _reorderResizeImageCache<R = unknown>(): R;
    _setReorderResizeImageCache<R = void, P0 = unknown>(__setReorderResizeImageCache: P0): R;
    _finishedMakingConnections<R = void>(): R;
    description<R = unknown>(): R;
    _old_initWithCoder_NSTableColumn<R = void, P0 = unknown>(__old_initWithCoder_NSTableColumn: P0): R;
    _old_encodeWithCoder_NSTableColumn<R = void, P0 = unknown>(__old_encodeWithCoder_NSTableColumn: P0): R;
    dealloc<R = void>(): R;
    initWithIdentifier<R = unknown, P0 = unknown>(_initWithIdentifier: P0): R;
    _postColumnDidResizeNotificationWithOldWidth<R = void, P0 = number>(__postColumnDidResizeNotificationWithOldWidth: P0): R;
    _resizePostingDisabled<R = boolean>(): R;
    _enableResizedPosting<R = void>(): R;
    _disableResizedPosting<R = void>(): R;
    _setCachedPosition<R = void, P0 = unknown>(__setCachedPosition: P0): R;
    _cachedPosition<R = unknown>(): R;
    setUserInterfaceItemIdentifier<R = void, P0 = unknown>(_setUserInterfaceItemIdentifier: P0): R;
    userInterfaceItemIdentifier<R = unknown>(): R;
    accessibilityShouldUseUniqueId<R = boolean>(): R;
    accessibilityArrayAttributeValues_index_maxCount<R = unknown, P0 = unknown, P1 = number, P2 = number>(_accessibilityArrayAttributeValues: P0, _index: P1, _maxCount: P2): R;
    accessibilityArrayAttributeCount<R = number, P0 = unknown>(_accessibilityArrayAttributeCount: P0): R;
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
    accessibilityIsHeaderAttributeSettable<R = boolean>(): R;
    accessibilityHeaderAttribute<R = unknown>(): R;
    accessibilitySetSelectedAttribute<R = void, P0 = unknown>(_accessibilitySetSelectedAttribute: P0): R;
    accessibilityIsSelectedAttributeSettable<R = boolean>(): R;
    _canDeselect<R = boolean, P0 = number>(__canDeselect: P0): R;
    accessibilitySelectedAttribute<R = unknown>(): R;
    accessibilitySetSizeAttribute<R = void, P0 = unknown>(_accessibilitySetSizeAttribute: P0): R;
    accessibilityIsSizeAttributeSettable<R = boolean>(): R;
    accessibilitySizeAttribute<R = unknown>(): R;
    accessibilityIsPositionAttributeSettable<R = boolean>(): R;
    accessibilityPositionAttribute<R = unknown>(): R;
    accessibilityIsTopLevelUIElementAttributeSettable<R = boolean>(): R;
    accessibilityTopLevelUIElementAttribute<R = unknown>(): R;
    accessibilityIsWindowAttributeSettable<R = boolean>(): R;
    accessibilityWindowAttribute<R = unknown>(): R;
    accessibilityIsVisibleRowsAttributeSettable<R = boolean>(): R;
    accessibilityVisibleRowsAttribute<R = unknown>(): R;
    accessibilityIsRowsAttributeSettable<R = boolean>(): R;
    accessibilityRowsAttribute<R = unknown>(): R;
    _accessibilityRowsInRange<R = unknown, P0 = _NSRange>(__accessibilityRowsInRange: P0): R;
    accessibilityIsParentAttributeSettable<R = boolean>(): R;
    accessibilityParentAttribute<R = unknown>(): R;
    accessibilityIsRoleDescriptionAttributeSettable<R = boolean>(): R;
    accessibilityRoleDescriptionAttribute<R = unknown>(): R;
    accessibilityIsRoleAttributeSettable<R = boolean>(): R;
    accessibilityRoleAttribute<R = unknown>(): R;
    accessibilityAttributeNames<R = unknown>(): R;
    headerToolTip<R = NSString>(): R;
    setHeaderToolTip<R = void, P0 = NSString>(_v: P0): R;
    title<R = NSString>(): R;
    setTitle<R = void, P0 = NSString>(_v: P0): R;
    editable<R = boolean>(): R;
    setEditable<R = void, P0 = boolean>(_v: P0): R;
    resizingMask<R = number>(): R;
    setResizingMask<R = void, P0 = number>(_v: P0): R;
    headerCell<R = NSTableHeaderCell>(): R;
    setHeaderCell<R = void, P0 = NSTableHeaderCell>(_v: P0): R;
    maxWidth<R = number>(): R;
    setMaxWidth<R = void, P0 = number>(_v: P0): R;
    minWidth<R = number>(): R;
    setMinWidth<R = void, P0 = number>(_v: P0): R;
    width<R = number>(): R;
    setWidth<R = void, P0 = number>(_v: P0): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
    sortDescriptorPrototype<R = NSSortDescriptor>(): R;
    setSortDescriptorPrototype<R = void, P0 = NSSortDescriptor>(_v: P0): R;
    tableView<R = NSTableView>(): R;
    setTableView<R = void, P0 = NSTableView>(_v: P0): R;
    hidden<R = boolean>(): R;
    setHidden<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSTableColumn {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol, NSUserInterfaceItemIdentificationProtocol {
      alloc<R = NSTableColumn>(): R;
      new: <R = NSTableColumn>() => R;
    }
  }
}

declare const NSTableColumn: cocoa.NSTableColumn.CLASS;
