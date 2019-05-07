/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCOutlineView<T0 = void, T1 = void, T2 = void> extends NSOutlineView {
    cxx_destruct<R = void>(): R;
    refreshSelectedRowViews<R = void>(): R;
    refreshAllRowViews<R = void>(): R;
    setIntercellSpacing<R = void, P0 = CGSize>(_setIntercellSpacing: P0): R;
    deliberateScrollRowToVisible<R = void, P0 = number>(_deliberateScrollRowToVisible: P0): R;
    scrollRowToVisible<R = void, P0 = number>(_scrollRowToVisible: P0): R;
    dragImageForRowsWithIndexes_tableColumns_event_offset<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CGPoint>(_dragImageForRowsWithIndexes: P0, _tableColumns: P1, _event: P2, _offset: P3): R;
    applyAppearance<R = void>(): R;
    disclosureTriangleClicked<R = void, P0 = unknown>(_disclosureTriangleClicked: P0): R;
    yieldToDefaultFirstResponder<R = void>(): R;
    _noteUserDidActivateCounterpartOutlineView<R = void>(): R;
    noteUserDidActivateOutlineView<R = void>(): R;
    setUpCoordinationWithCounterpartOutlineView<R = void, P0 = unknown>(_setUpCoordinationWithCounterpartOutlineView: P0): R;
    sendRenameNodeActionForRowIfAppropriate<R = boolean, P0 = number>(_sendRenameNodeActionForRowIfAppropriate: P0): R;
    rowViewAtRowIfAvailable<R = unknown, P0 = number>(_rowViewAtRowIfAvailable: P0): R;
    rowAtPoint<R = number, P0 = CGPoint>(_rowAtPoint: P0): R;
    rowAtLocationOfMouseEvent<R = number, P0 = unknown>(_rowAtLocationOfMouseEvent: P0): R;
    rowAtPointTakingFloatingGroupRowIntoAccount<R = number, P0 = CGPoint>(_rowAtPointTakingFloatingGroupRowIntoAccount: P0): R;
    rectOfRow<R = CGRect, P0 = number>(_rectOfRow: P0): R;
    rectOfRowIgnoringFloatingState<R = CGRect, P0 = number>(_rectOfRowIgnoringFloatingState: P0): R;
    rectOfRowTakingFloatingGroupRowIntoAccount<R = CGRect, P0 = number>(_rectOfRowTakingFloatingGroupRowIntoAccount: P0): R;
    processMouseEventTakingFloatingGroupRowIntoAccount_withBlock<R = void, P0 = number, P1 = CDUnknownBlockType>(_processMouseEventTakingFloatingGroupRowIntoAccount: P0, _withBlock: P1): R;
    processMouseEventTakingFloatingStateOfRowViewIntoAccount_atRow_withBlock<R = void, P0 = unknown, P1 = number, P2 = CDUnknownBlockType>(_processMouseEventTakingFloatingStateOfRowViewIntoAccount: P0, _atRow: P1, _withBlock: P2): R;
    awakeFromNib<R = void>(): R;
    floatingRowToTakeIntoAccountWhenProcessingMouseEvent<R = number>(): R;
    setFloatingRowToTakeIntoAccountWhenProcessingMouseEvent<R = void, P0 = number>(_v: P0): R;
    isUserActivated<R = boolean>(): R;
    setIsUserActivated<R = void, P0 = boolean>(_v: P0): R;
    disclosureButtonAction<R = string>(): R;
    setDisclosureButtonAction<R = void, P0 = string>(_v: P0): R;
    useHighlightedBackgroundColor<R = boolean>(): R;
    setUseHighlightedBackgroundColor<R = void, P0 = boolean>(_v: P0): R;
    shouldIgnorePendingNodeRenameRequestIfDraggingSessionIntervened<R = boolean>(): R;
    setShouldIgnorePendingNodeRenameRequestIfDraggingSessionIntervened<R = void, P0 = boolean>(_v: P0): R;
    floatingRowDragged<R = boolean>(): R;
    setFloatingRowDragged<R = void, P0 = boolean>(_v: P0): R;
    activeStateScheme<R = number>(): R;
    setActiveStateScheme<R = void, P0 = number>(_v: P0): R;
    counterpartOutlineView<R = BCOutlineView>(): R;
    setCounterpartOutlineView<R = void, P0 = BCOutlineView>(_v: P0): R;
    discloserTriangleClickedItem<R = unknown>(): R;
    setDiscloserTriangleClickedItem<R = void, P0 = unknown>(_v: P0): R;
    dataController<R = BCOutlineViewDataController>(): R;
    setDataController<R = void, P0 = BCOutlineViewDataController>(_v: P0): R;
    isActiveOutlineView<R = boolean>(): R;
    delegate<R = BCOutlineViewDelegate>(): R;
    setDelegate<R = void, P0 = BCOutlineViewDelegate>(_v: P0): R;
  }
  namespace BCOutlineView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSOutlineView {
      alloc<R = BCOutlineView>(): R;
      new: <R = BCOutlineView>() => R;
    }
  }
}

declare const BCOutlineView: cocoa.BCOutlineView.CLASS;
