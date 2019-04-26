/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationCursorManagerDelegateProtocol<T0 = void, T1 = void, T2 = void> {
    cursorManagerDidExitTouchBar_atScreenLocation_cancelled<R = void, P0 = NSTouchBarCustomizationCursorManager, P1 = CGPoint, P2 = boolean>(_cursorManagerDidExitTouchBar: P0, _atScreenLocation: P1, _cancelled: P2): R;
    cursorManager_didMoveTouchBarCursorToPoint_withDelta_mouseIsDown<R = CGPoint, P0 = NSTouchBarCustomizationCursorManager, P1 = CGPoint, P2 = CGSize, P3 = boolean>(_cursorManager: P0, _didMoveTouchBarCursorToPoint: P1, _withDelta: P2, _mouseIsDown: P3): R;
    cursorManager_didMouseUpInTouchBarAtPoint<R = CGPoint, P0 = NSTouchBarCustomizationCursorManager, P1 = CGPoint>(_cursorManager: P0, _didMouseUpInTouchBarAtPoint: P1): R;
    cursorManager_didMouseDownInTouchBarAtPoint<R = void, P0 = NSTouchBarCustomizationCursorManager, P1 = CGPoint>(_cursorManager: P0, _didMouseDownInTouchBarAtPoint: P1): R;
    cursorManager_didEnterTouchBarAtPoint_mouseIsDown<R = CGPoint, P0 = NSTouchBarCustomizationCursorManager, P1 = CGPoint, P2 = boolean>(_cursorManager: P0, _didEnterTouchBarAtPoint: P1, _mouseIsDown: P2): R;
    cursorManager_shouldEnterTouchBarAtPoint_isDragging<R = boolean, P0 = NSTouchBarCustomizationCursorManager, P1 = CGPoint, P2 = boolean>(_cursorManager: P0, _shouldEnterTouchBarAtPoint: P1, _isDragging: P2): R;
  }
  namespace NSTouchBarCustomizationCursorManagerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
