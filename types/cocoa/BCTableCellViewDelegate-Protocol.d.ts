/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCTableCellViewDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    tableCellOutlineView<R = BCOutlineView, P0 = BCTableCellView>(_tableCellOutlineView: P0): R;
    tableCellViewDestinationWindow<R = NSWindow, P0 = BCTableCellView>(_tableCellViewDestinationWindow: P0): R;
    tableCellViewNodeRequiresRefresh<R = void, P0 = BCTableCellView>(_tableCellViewNodeRequiresRefresh: P0): R;
    tableCellViewDidBeginEditing<R = void, P0 = BCTableCellView>(_tableCellViewDidBeginEditing: P0): R;
    tableCellViewMouseExited<R = void, P0 = BCTableCellView>(_tableCellViewMouseExited: P0): R;
    tableCellViewMouseEntered<R = void, P0 = BCTableCellView>(_tableCellViewMouseEntered: P0): R;
    tableCellViewHandleBadgePressed<R = void, P0 = BCTableCellView>(_tableCellViewHandleBadgePressed: P0): R;
    isTableCellViewNodeLockedOnCanvas<R = boolean, P0 = BCTableCellView>(_isTableCellViewNodeLockedOnCanvas: P0): R;
    isTableCellViewNodeContainedByHiddenAncestorNode<R = boolean, P0 = BCTableCellView>(_isTableCellViewNodeContainedByHiddenAncestorNode: P0): R;
    isTableCellViewNodeHiddenOnCanvas<R = boolean, P0 = BCTableCellView>(_isTableCellViewNodeHiddenOnCanvas: P0): R;
    isTableCellViewNodeSelected<R = boolean, P0 = BCTableCellView>(_isTableCellViewNodeSelected: P0): R;
  }
  namespace BCTableCellViewDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
