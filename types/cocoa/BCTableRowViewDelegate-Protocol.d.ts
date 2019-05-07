/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCTableRowViewDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    tableRowView_displayTypeOfRowAtIndex<R = number, P0 = BCTableRowView, P1 = number>(_tableRowView: P0, _displayTypeOfRowAtIndex: P1): R;
    indexOfTableRowView<R = number, P0 = BCTableRowView>(_indexOfTableRowView: P0): R;
    isNodeExpandedInTableRowView<R = boolean, P0 = BCTableRowView>(_isNodeExpandedInTableRowView: P0): R;
    multipleNodesSelected<R = boolean>(): R;
    isNodeSelectedOnRow<R = boolean, P0 = number>(_isNodeSelectedOnRow: P0): R;
    isNodeSelectedInTableRowView<R = boolean, P0 = BCTableRowView>(_isNodeSelectedInTableRowView: P0): R;
  }
  namespace BCTableRowViewDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
