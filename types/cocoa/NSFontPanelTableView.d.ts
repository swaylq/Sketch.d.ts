/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFontPanelTableView<T0 = void, T1 = void, T2 = void> extends NSTableView {
    draggedImage_endedAt_operation<R = void, P0 = unknown, P1 = CGPoint, P2 = number>(_draggedImage: P0, _endedAt: P1, _operation: P2): R;
    _wantsUserCancelledOperation<R = boolean>(): R;
    draggingSourceOperationMaskForLocal<R = number, P0 = boolean>(_draggingSourceOperationMaskForLocal: P0): R;
    _accessibilitySelectRowsFromAccessibilityRows<R = void, P0 = unknown>(__accessibilitySelectRowsFromAccessibilityRows: P0): R;
  }
  namespace NSFontPanelTableView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableView {
      alloc<R = NSFontPanelTableView>(): R;
      new: <R = NSFontPanelTableView>() => R;
    }
  }
}

declare const NSFontPanelTableView: cocoa.NSFontPanelTableView.CLASS;
