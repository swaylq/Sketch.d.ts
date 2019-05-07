/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableViewCellElementProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    accessibilityFocusedUIElement<R = unknown>(): R;
    accessibilityHitTest<R = unknown, P0 = CGPoint>(_accessibilityHitTest: P0): R;
    tableView<R = NSTableView>(): R;
    column<R = number>(): R;
    row<R = number>(): R;
  }
  namespace NSTableViewCellElementProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
      cellForRow_tableColumn<R = NSTableViewCellElement, P0 = number, P1 = NSTableColumn>(_cellForRow: P0, _tableColumn: P1): R;
      cellForRow_column_tableView<R = NSTableViewCellElement, P0 = number, P1 = number, P2 = NSTableView>(_cellForRow: P0, _column: P1, _tableView: P2): R;
    }
  }
}
