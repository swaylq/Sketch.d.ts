/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCTableRowView<T0 = void, T1 = void, T2 = void> extends NSTableRowView {
    cxx_destruct<R = void>(): R;
    relayoutNow<R = void>(): R;
    doDrawHighlight<R = void>(): R;
    drawHighlight<R = void>(): R;
    fillSelectionInRect<R = void, P0 = CGRect>(_fillSelectionInRect: P0): R;
    selectionDrawingRect<R = CGRect>(): R;
    hasBottomPaddingApplied<R = boolean>(): R;
    hasTopPaddingApplied<R = boolean>(): R;
    isArtboardRow<R = boolean>(): R;
    drawArtboardItemBordersIfNeeded<R = void>(): R;
    drawsBottomBorder<R = boolean>(): R;
    drawsTopBorder<R = boolean>(): R;
    refreshSelectionState<R = void, P0 = unknown>(_refreshSelectionState: P0): R;
    refreshBadges<R = void>(): R;
    refreshBackgroundStyle<R = void>(): R;
    fillBackgroundInRect<R = void, P0 = CGRect>(_fillBackgroundInRect: P0): R;
    setSelected<R = void, P0 = boolean>(_setSelected: P0): R;
    highlightDidChange<R = void, P0 = unknown>(_highlightDidChange: P0): R;
    isDrawingHighlight<R = boolean>(): R;
    setIsDrawingHighlight<R = void, P0 = boolean>(_v: P0): R;
    expansionState<R = number>(): R;
    setExpansionState<R = void, P0 = number>(_v: P0): R;
    delegate<R = BCTableRowViewDelegate>(): R;
    setDelegate<R = void, P0 = BCTableRowViewDelegate>(_v: P0): R;
    node<R = BCOutlineViewNode>(): R;
    setNode<R = void, P0 = BCOutlineViewNode>(_v: P0): R;
    outlineView<R = BCOutlineView>(): R;
    backgroundStyle<R = number>(): R;
    tableCellView<R = BCTableCellView>(): R;
    selectedBackgroundColor<R = NSColor>(): R;
    highlightColor<R = NSColor>(): R;
    displayType<R = number>(): R;
    highlighted<R = boolean>(): R;
    nodeExpanded<R = boolean>(): R;
    nodeSelected<R = boolean>(): R;
  }
  namespace BCTableRowView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableRowView {
      alloc<R = BCTableRowView>(): R;
      new: <R = BCTableRowView>() => R;
    }
  }
}

declare const BCTableRowView: cocoa.BCTableRowView.CLASS;
