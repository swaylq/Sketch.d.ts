/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableViewDynamicToolTipManager<T0 = void, T1 = void, T2 = void> extends NSViewDynamicToolTipManager {
    _getColumn_row_cell_cellFrame_toolTipRect_wantsToolTip_wantsRevealover_atPoint<R = void, P0 = number, P1 = number, P2 = unknown, P3 = CGRect, P4 = CGRect, P5 = string, P6 = string, P7 = CGPoint>(__getColumn: P0, _row: P1, _cell: P2, _cellFrame: P3, _toolTipRect: P4, _wantsToolTip: P5, _wantsRevealover: P6, _atPoint: P7): R;
    _tooltipStringForCell_column_row_point_trackingRect<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = CGPoint, P4 = CGRect>(__tooltipStringForCell: P0, _column: P1, _row: P2, _point: P3, _trackingRect: P4): R;
    _wantsRevealoverAtColumn_row<R = boolean, P0 = number, P1 = number>(__wantsRevealoverAtColumn: P0, _row: P1): R;
    _wantsToolTipAtColumn_row<R = boolean, P0 = number, P1 = number>(__wantsToolTipAtColumn: P0, _row: P1): R;
  }
  namespace NSTableViewDynamicToolTipManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewDynamicToolTipManager {
      alloc<R = NSTableViewDynamicToolTipManager>(): R;
      new: <R = NSTableViewDynamicToolTipManager>() => R;
    }
  }
}

declare const NSTableViewDynamicToolTipManager: cocoa.NSTableViewDynamicToolTipManager.CLASS;
